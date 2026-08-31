---
title: Slingshot MCP Server
_description: Connect your AI assistant to Slingshot using the Model Context Protocol (MCP) to manage tasks, projects, and workspaces with natural language.
---

# Slingshot MCP Server

The Slingshot MCP Server lets you connect your AI assistant directly to Slingshot using the **Model Context Protocol (MCP)**, a standardized framework that allows AI tools to read and interact with your Slingshot data using natural language.

Once connected, you can ask your AI assistant to create tasks, update projects, search your workspace, and more, without leaving your AI tool.

## What Can You Do?

With the Slingshot MCP Server, you can use your AI assistant to:

- Create and update tasks, assign them to teammates, and set due dates.
- Search across your workspaces and projects for quick answers.
- Summarize project status and generate progress updates.
- Move tasks between projects and lists.
- Automate repetitive workflows by describing what you want in plain language.

## MCP Server URL

```
https://my.slingshotapp.io/mcp
```

## Supported AI Clients

The Slingshot MCP Server works with any AI tool that supports the MCP standard, including:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (with MCP-compatible extensions)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## Connecting Your AI Assistant

Authentication is handled via OAuth. You'll be prompted to sign in to your Slingshot account the first time you connect.

### Claude Desktop / Claude.ai

Requires a Claude Pro account or higher. Custom connectors aren't available on the free plan.

Go to **Settings → Connectors → Add custom connector**, and paste the server URL: `https://my.slingshotapp.io/mcp`

### Claude Code

Run:

```
claude mcp add --transport http slingshot https://my.slingshotapp.io/mcp
```

### ChatGPT

Requires a ChatGPT Plus or Pro subscription. Developer Mode and custom connectors aren't available on the free plan.

In **Settings**, enable **Developer Mode**, then add Slingshot as a connector using the server URL.

### Cursor / VS Code / Windsurf

Add this to your MCP configuration file:

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://my.slingshotapp.io/mcp"
    }
  }
}
```

### Other MCP-compatible tools

Refer to the tool's documentation for where to add the server URL.

## Getting Started

For full setup instructions and a list of supported tools and operations, see the Slingshot API Reference:

**[Slingshot API Reference v2 →](https://my.slingshotapp.io/v2/docs)**
