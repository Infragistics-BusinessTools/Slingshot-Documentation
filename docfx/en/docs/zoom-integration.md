---
title: Zoom Integration
_description: Start a Zoom call directly from a private chat in Slingshot. Learn how to connect your Zoom account, create meeting links, and remove the integration.
---

# Zoom Integration

With the Zoom integration, you can start a Zoom call without leaving Slingshot. From any private chat, Slingshot creates an instant Zoom meeting on your behalf and posts the join link right into the conversation, so everyone can hop on the call with a single click/tap.

## Adding the Zoom App

You don't need to set anything up in advance — Slingshot connects your Zoom account the first time you use it.

1. Open a private chat with a teammate.

2. Click/tap the **call** button in the chat header.

3. Choose **Create Link**, and then **Use Zoom**.

4. A browser window opens on Zoom's sign-in page. Sign in with your Zoom account.

5. Review the requested permissions and click/tap **Allow**. Slingshot asks Zoom for two permissions only: to view your Zoom profile (so it can show which account is connected) and to create meetings for you.

6. You are returned to Slingshot, and your Zoom account is now connected.

> [!NOTE]
> The integration works with any Zoom account — a paid Zoom plan is not required. Your Zoom meetings keep the settings and limits of your own Zoom plan.

If something goes wrong while connecting, see [Troubleshooting](#troubleshooting) below.

## Using the Zoom Integration

Once your Zoom account is connected, starting a call takes seconds:

1. In a private chat, click/tap the **call** button, then **Create Link** → **Use Zoom**.

2. Slingshot creates an instant Zoom meeting and posts a **Join Call** card into the conversation.

3. Everyone in the chat can click/tap **Join Call** to open the Zoom meeting.

You won't be asked to sign in to Zoom again — Slingshot remembers your connected account. You can see which Zoom account is connected at any time under **Settings** → **Apps**, where the Zoom entry shows the account's name and email address.

> [!NOTE]
> **Slingshot Tip**: The meeting link is a regular Zoom link — participants who are not Slingshot users can join too if you share the link with them.

### What Slingshot stores

Slingshot stores only what it needs to keep your Zoom account connected: the secure access credentials Zoom issues to Slingshot, and your Zoom profile name and email address to label the connection. Slingshot does not read your Zoom meetings, recordings, contacts, or any other Zoom data.

## Removing the Zoom App

You can disconnect your Zoom account from Slingshot at any time:

1. In Slingshot, open **Settings** → **Apps**.

2. Find the **Zoom** entry and click/tap the **remove** (trash) button.

3. Confirm the removal.

When you remove the integration, Slingshot deletes the stored Zoom credentials and your Zoom account details immediately. Meeting links that were already posted in chats keep working, because the meetings belong to your Zoom account — you can manage or delete them from your Zoom portal at any time.

To also remove Slingshot from the Zoom side, sign in to the [Zoom App Marketplace](https://marketplace.zoom.us/), open **Manage** → **Added Apps**, find **Slingshot**, and click/tap **Remove**.

If you use Zoom again from a private chat later, Slingshot simply asks you to sign in to Zoom and authorize the app once more.

## Troubleshooting

- **"Failed to generate online meeting."** — The meeting could not be created. Try again in a few moments; if it keeps failing, remove the Zoom app under **Settings** → **Apps** and reconnect by using **Use Zoom** from a private chat.

- **You are asked to sign in to Zoom again.** — Your Zoom session expired. Sign in and click/tap **Allow** to reconnect; your chats and previous meeting links are unaffected.

- **The browser window doesn't open when connecting.** — Check that your browser allows pop-ups for Slingshot, then try **Use Zoom** again.

For anything else, reach out to us through the in-app feedback option — see [Feedback](feedback.md).
