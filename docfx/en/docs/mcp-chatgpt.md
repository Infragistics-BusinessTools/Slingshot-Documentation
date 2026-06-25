---
title: Connect Slingshot MCP with ChatGPT
_description: Connect the Slingshot MCP Server to ChatGPT so you can manage tasks, projects, and workspaces using natural language conversations.
---

# Connect Slingshot MCP with ChatGPT

This guide walks you through connecting the Slingshot MCP Server to ChatGPT. Once connected, you can use natural language in ChatGPT to create and update tasks, search your workspace, generate status updates, and more.

## Prerequisites

- A ChatGPT Plus or Pro subscription (required for custom MCP connectors)
- A Slingshot account
- The Slingshot MCP Server URL: `https://mcp.slingshotapp.io/mcp`

## How to Connect

**1. Open ChatGPT Settings**

Click on your profile icon in the top-right corner of ChatGPT and select **Settings**.

**2. Enable Developer Mode**

In Settings, go to **Connectors**, then click **Advanced** and toggle **Developer Mode** to **On**.

**3. Add the Slingshot Connector**

Under **Connectors**, click **Create**. Fill in the following:

- **Name:** Slingshot
- **MCP Server URL:** `https://mcp.slingshotapp.io/mcp`

Click **Create**.

**4. Authenticate with Slingshot**

Complete the OAuth sign-in flow when prompted to authorize ChatGPT to access your Slingshot account.

**5. Enable the Connector in a Chat**

Open a new chat, click the **+** icon, then click **More** and select **Developer tools** to enable the Slingshot connector for your conversation.

## Verify the Connection

With the connector enabled, try a prompt like:

> *"List my Slingshot tasks due this week."*

If Slingshot responds with your data, the connection is working.

>[!NOTE]
>The Developer Mode toggle is only available on ChatGPT Plus and Pro accounts. If you don't see it, check your subscription or make sure you're on the latest version of the ChatGPT web app.

## Troubleshooting

- **Developer Mode toggle missing?** Confirm your account is ChatGPT Plus or Pro and try refreshing the web app.
- **Authorization failed?** Remove the connector and re-add it, then complete the OAuth flow again when prompted.
- **Tools not appearing?** Make sure the Slingshot connector is toggled on in the **Developer tools** menu for your current chat.
- **Permission error?** Verify your Slingshot account has access to the workspaces or projects you're querying.

## Related Topics

- [Slingshot MCP Server](slingshot-mcp.md)
- [Connect Slingshot MCP with Claude Code](mcp-claude-code.md)
- [Slingshot API Reference v2](https://my.slingshotapp.io/v2/docs)
