---
title: Connect Slingshot MCP with Claude Code
_description: Connect the Slingshot MCP Server to Claude Code so you can manage tasks, projects, and workspaces directly from your terminal using natural language.
---

# Connect Slingshot MCP with Claude Code

This guide walks you through connecting the Slingshot MCP Server to [Claude Code](https://www.claude.com/product/claude-code), Anthropic's AI coding tool. Once connected, you can use natural language in Claude Code to create and update tasks, search your workspace, and more — without leaving your terminal.

## Prerequisites

- Claude Code installed and running
- A Slingshot account
- The Slingshot MCP Server URL: `https://mcp.slingshotapp.io/mcp`

## How to Connect

There are two ways to add the Slingshot MCP Server to Claude Code.

### Option 1: Using the CLI (Recommended)

Run the following command in your terminal:

```bash
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

Claude Code will prompt you to sign in to Slingshot via OAuth the first time a Slingshot tool is used.

### Option 2: Editing the Config File

Open your Claude Code user config file at `~/.claude.json` and add the Slingshot server under `mcpServers`:

```json
{
  "mcpServers": {
    "slingshot": {
      "type": "http",
      "url": "https://mcp.slingshotapp.io/mcp"
    }
  }
}
```

Save the file and restart Claude Code.

>[!NOTE]
>To scope the MCP server to a single project instead of your user account, add the same config to a `.mcp.json` file in the root of your project directory.

## Verify the Connection

Once connected, run the following in Claude Code to confirm Slingshot is available:

```bash
claude mcp list
```

You should see `slingshot` listed. Then try a prompt like:

> *"List my Slingshot tasks due this week."*

If Slingshot responds with your data, the connection is working.

## Troubleshooting

- **Server not listed after adding?** Restart Claude Code and run `claude mcp list` again.
- **Authentication error?** Run `claude mcp remove slingshot`, then re-add it and complete the OAuth sign-in flow when prompted.
- **Permission error?** Make sure your Slingshot account has access to the workspaces or projects you're querying.
- **Connection refused?** Verify the MCP server URL is correct: `https://mcp.slingshotapp.io/mcp`.

## Related Topics

- [Slingshot MCP Server](slingshot-mcp.md)
- [Connect Slingshot MCP with ChatGPT](mcp-chatgpt.md)
- [Slingshot API Reference v2](https://my.slingshotapp.io/v2/docs)
