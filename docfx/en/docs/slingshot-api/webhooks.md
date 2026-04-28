---
title: Webhooks
description: Subscribe to Slingshot domain events over HTTPS, with HMAC-SHA256 signed payloads.
new: true
---

# Webhooks

Webhooks let your service receive Slingshot domain events the moment they happen, instead of polling the V2 REST API on a timer. When something a webhook is subscribed to occurs in Slingshot — a task is created, a member is added to a workspace, a pin list is renamed — Slingshot sends an HTTPS `POST` to the URL you registered, carrying a JSON envelope describing the event.

Use webhooks when you need low-latency reactions to changes in Slingshot: keeping an external CRM in sync, triggering CI/CD on a task transition, posting to chat when a discussion message arrives, or fanning events into a data pipeline. Reach for plain polling when you only need a snapshot every few minutes and the operational cost of running a public HTTPS endpoint isn't worth it.

This page documents the V2 webhook API. Endpoint shapes and the canonical event catalogue are owned by the OpenAPI spec at `/v2/openapi.json`; treat that spec as the source of truth if anything here disagrees.

## Quickstart

1. Decide which workspace you want to observe and pick the events you care about.
2. Create the subscription:

   ```bash
   curl -X POST https://api.slingshotapp.io/v2/webhooks \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "url": "https://example.com/hooks/slingshot",
       "workspaceId": "ws_abc123",
       "events": ["task.created", "task.completed"],
       "enabled": true
     }'
   ```

3. The 201 response includes a one-time `secret`. **Save it now** — it's never returned again.
4. Stand up an HTTPS endpoint that:
   - Reads `X-Slingshot-Timestamp` and the request body.
   - Recomputes `HMAC-SHA256(secret, "{timestamp}.{body}")` and constant-time-compares it to `X-Slingshot-Signature`.
   - Responds with a `2xx` status within five seconds.
5. Trigger an event in the workspace and confirm a delivery row appears in `GET /v2/webhooks/{id}/deliveries`.

## Subscribing to events

`POST /v2/webhooks` creates a subscription. Required fields:

| Field | Type | Notes |
|---|---|---|
| `url` | string | Must start with `http://` or `https://`. HTTPS strongly recommended in production. |
| `workspaceId` | string | The webhook is scoped to a single workspace. Only events whose payload references this workspace are delivered. The caller must be a member of that workspace. Subscribe one webhook per workspace you need to observe. |
| `events` | string[] | At least one event type. See the catalogue below. |
| `enabled` | bool | Optional. Defaults to `true`. |

The 201 response is a `WebhookResponse` and is the **only** time the `secret` field is non-null. Subsequent `GET`, `LIST`, and `PATCH` responses set `secret` to `null`. Persist the secret immediately on creation; if it's lost, the subscription must be re-created.

You can list, fetch, update, and delete subscriptions with the rest of the CRUD surface:

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/v2/webhooks` | List the caller's subscriptions. |
| `GET` | `/v2/webhooks/{webhookId}` | Fetch one subscription. |
| `PATCH` | `/v2/webhooks/{webhookId}` | Merge-patch `url`, `events`, or `enabled`. Setting `enabled: false` pauses delivery without losing the subscription. |
| `DELETE` | `/v2/webhooks/{webhookId}` | Permanently remove the subscription. |

## Event catalogue

The full event taxonomy is documented on `CreateWebhookRequest.events` in the OpenAPI spec. As of this writing:

| Domain | Event types |
|---|---|
| Tasks | `task.created`, `task.updated`, `task.deleted`, `task.completed`, `task.message_sent` |
| Task lists & sections | `task_list.created`, `task_list.updated`, `task_list.deleted`, `task_section.created`, `task_section.updated`, `task_section.deleted` |
| Workspaces | `workspace.created`, `workspace.updated`, `workspace.deleted`, `workspace.member_added`, `workspace.member_updated`, `workspace.member_removed` |
| Projects | `project.created`, `project.updated`, `project.deleted` |
| Discussions | `discussion.created`, `discussion.updated`, `discussion.deleted`, `discussion.message_sent` |
| Pin lists & pins | `pin_list.created`, `pin_list.updated`, `pin_list.deleted`, `pin_section.created`, `pin_section.updated`, `pin_section.deleted`, `pin.created`, `pin.updated`, `pin.deleted` |
| Files | `file.created`, `file.deleted` |

> **Note** — `task.completed` fires on every update that sets the task to `status_completed`, so handlers must be idempotent on completion as well as on retry.

## Payload shape

Every delivery is a JSON envelope:

```json
{
  "id": "evt_01HQT...",
  "type": "task.created",
  "occurredAt": "2026-04-27T10:34:11Z",
  "data": { /* see below */ }
}
```

`data` varies by event family:

- **Create / update events** — `data` is the full resource response, identical to the corresponding `GET /v2/.../{id}` payload. No second round-trip needed.
- **Delete events** — `data` is `{ "id": "..." }` only. The resource is already gone; only the identifier survives.
- **Member events** (`workspace.member_added`, `workspace.member_updated`, `workspace.member_removed`) — `data` includes `workspaceId`, `userId`, and `role` on add/update.
- **Message events** (`task.message_sent`, `discussion.message_sent`) — `data` is `{ "taskId": "..." }` or `{ "discussionId": "..." }`. Fetch the message body via `GET /v2/tasks/{id}/messages` or `GET /v2/discussions/{id}/messages`.
- **`task.completed`** — `data` is `{ "id": "...", "completedAt": "..." }`.

## Verifying signatures

Each delivery carries four headers:

| Header | Meaning |
|---|---|
| `X-Slingshot-Signature` | `sha256=<hex>` — HMAC-SHA256 of the **signed string** `"{timestamp}.{body}"` (a literal period joins the two), using the subscription's `secret`. |
| `X-Slingshot-Timestamp` | Unix seconds at signing time. Reject deliveries where `abs(now - timestamp) > 5 minutes` to close the replay window. |
| `X-Slingshot-Event` | The event type, e.g. `task.created`. Convenient for routing without parsing the body. |
| `X-Slingshot-Delivery` | Opaque attempt id. Matches the `id` field in `GET /v2/webhooks/{id}/deliveries`. |

Always compare the signature using a constant-time routine. Naive `==` opens you to timing attacks.

**Node.js**

```javascript
import crypto from 'node:crypto';

function verify(secret, headers, rawBody) {
  const ts = headers['x-slingshot-timestamp'];
  const sig = headers['x-slingshot-signature'];
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false;
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(`${ts}.${rawBody}`)
    .digest('hex');
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}
```

**Python**

```python
import hmac, hashlib, time

def verify(secret: str, headers: dict, raw_body: bytes) -> bool:
    ts = headers["X-Slingshot-Timestamp"]
    sig = headers["X-Slingshot-Signature"]
    if abs(time.time() - int(ts)) > 300:
        return False
    mac = hmac.new(secret.encode(), f"{ts}.".encode() + raw_body, hashlib.sha256)
    expected = "sha256=" + mac.hexdigest()
    return hmac.compare_digest(sig, expected)
```

**Go**

```go
import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
    "strconv"
    "time"
)

func Verify(secret string, headers map[string]string, body []byte) bool {
    ts, _ := strconv.ParseInt(headers["X-Slingshot-Timestamp"], 10, 64)
    if abs(time.Now().Unix()-ts) > 300 {
        return false
    }
    mac := hmac.New(sha256.New, []byte(secret))
    mac.Write([]byte(strconv.FormatInt(ts, 10) + "."))
    mac.Write(body)
    expected := "sha256=" + hex.EncodeToString(mac.Sum(nil))
    return hmac.Equal([]byte(headers["X-Slingshot-Signature"]), []byte(expected))
}
```

## Delivery, retries, and the deliveries log

Slingshot retries each failed delivery up to three times with backoffs of 1 s, 5 s, and 15 s. After the final attempt the event is dropped and a row is left in the deliveries log. The subscription itself stays enabled — monitor your ingest pipeline and `PATCH` the webhook to `enabled: false` if a receiver is down for an extended window.

`GET /v2/webhooks/{webhookId}/deliveries` returns the most recent delivery attempts as `WebhookDeliveryResponse` records:

| Field | Notes |
|---|---|
| `id` | Matches the `X-Slingshot-Delivery` header sent to the subscriber. |
| `eventType` | Canonical event type. |
| `url` | URL the delivery was POSTed to at the time of the attempt (preserved even if you later `PATCH` the URL). |
| `attemptNumber` | `1` = initial; `2`–`4` = retries. |
| `httpStatus` | HTTP status returned by the subscriber, or `null` if the request never completed (DNS fail, refused connection, timeout, DNS-rebind reject). |
| `errorMessage` | One-line summary on failure; `null` on success. |
| `attemptedAt` | UTC timestamp of the attempt. |
| `succeeded` | `true` if the receiver returned `2xx`. |

> **Retention** — delivery history is bounded to the last 50 attempts per webhook and is currently held in-memory. Durable delivery logging is on the roadmap; do not rely on it as an audit trail.

## Best practices

- **Respond fast.** Return a `2xx` within five seconds and do real work asynchronously. A slow handler eats into your retry budget on the next event.
- **Be idempotent.** Network retries, `task.completed` firing on every completion-setting update, and at-least-once delivery semantics all mean you'll see the same event id more than once. De-duplicate on the envelope `id`.
- **Save the secret on creation.** It's the only time it's returned. Treat it like any other credential — never log it, never check it into source control.
- **Verify every delivery.** Skip the timestamp/signature check and you've built an unauthenticated webhook receiver. Reject anything outside the 5-minute replay window.
- **One webhook per workspace.** Subscriptions are workspace-scoped by design; a single URL can receive from multiple workspaces by registering once per workspace.
- **Toggle, don't recreate.** When pausing a downstream system, `PATCH enabled: false` instead of deleting — the secret survives, deliveries simply pause.
- **Watch the deliveries log.** When something goes wrong, `GET /v2/webhooks/{id}/deliveries` is the fastest way to see what Slingshot tried to send and what your receiver returned.
