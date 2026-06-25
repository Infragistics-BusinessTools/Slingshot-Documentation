---
title: Connect Slingshot MCP with Claude
_description: Connect the Slingshot MCP Server to Claude so you can manage tasks, projects, and workspaces using natural language.
---

# Connect Slingshot MCP with Claude

This guide walks you through connecting the Slingshot MCP Server to Claude. Once connected, you can use natural language to create and update tasks, search your workspace, generate status updates, and more — directly in Claude.

>[!NOTE]
>Connecting custom MCP connectors in Claude requires a **Claude Pro** (paid) account or higher. This feature is not available on the free plan.

## Prerequisites

- A Claude Pro account or higher (claude.ai)
- A Slingshot account

## How to Connect

**1. Go to Connectors**

Navigate to [https://claude.ai/customize/connectors](https://claude.ai/customize/connectors).

**2. Add a Connector**

Click the **+** icon in the top-right corner to open the **Add custom connector** dialog.

**3. Enter the Slingshot MCP Details**

Fill in the following:

- **Name:** Slingshot
- **URL:** `https://mcp.slingshotapp.io/mcp`

Click **Add**.

**4. Connect Your Account**

Click **Connect** when prompted and sign in to Slingshot using your credentials to complete the OAuth flow.

Once authorized, the connector will show your tool permissions — Slingshot exposes read-only and write tools that Claude can use on your behalf.

## Verify the Connection

Start a new conversation in Claude and try a prompt like:

> *"List my Slingshot tasks due this week."*

If Slingshot responds with your data, the connection is working.

## Troubleshooting

- **Add connector option not available?** Confirm your Claude account is on a Pro plan or higher — this feature is not available on the free plan.
- **Connector not appearing?** Refresh the page at [https://claude.ai/customize/connectors](https://claude.ai/customize/connectors) and try adding it again.
- **Authorization failed?** Disconnect the connector and reconnect to re-trigger the OAuth sign-in flow.
- **Permission error?** Verify your Slingshot account has access to the workspaces or projects you're querying.

## Related Topics

- [Slingshot MCP Server](slingshot-mcp.md)
- [Connect Slingshot MCP with ChatGPT](mcp-chatgpt.md)
- [Slingshot API Reference v2](https://my.slingshotapp.io/v2/docs)
