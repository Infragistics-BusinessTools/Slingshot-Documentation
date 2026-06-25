---
title: Slingshot MCP Server
_description: Connect your AI assistant to Slingshot using the Model Context Protocol (MCP) to manage tasks, projects, and workspaces with natural language.
---

# Slingshot MCP Server

The Slingshot MCP Server lets you connect your AI assistant directly to Slingshot using the **Model Context Protocol (MCP)** — a standardized framework that allows AI tools to read and interact with your Slingshot data using natural language.

Once connected, you can ask your AI assistant to create tasks, update projects, search your workspace, and more — without leaving your AI tool.

## What Can You Do?

With the Slingshot MCP Server, you can use your AI assistant to:

- Create and update tasks, assign them to teammates, and set due dates.
- Search across your workspaces and projects for quick answers.
- Summarize project status and generate progress updates.
- Move tasks between projects and lists.
- Automate repetitive workflows by describing what you want in plain language.

## MCP Server URL

```
https://mcp.slingshotapp.io/mcp
```

## Connecting Your AI Assistant

To connect an AI assistant to Slingshot, add the following to your MCP client configuration:

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://mcp.slingshotapp.io/mcp"
    }
  }
}
```

Most AI tools that support MCP have a settings or configuration file where you can add this entry. Refer to your AI tool's documentation for the exact location.

>[!NOTE]
>Authentication is handled via OAuth. You will be prompted to sign in to your Slingshot account when connecting for the first time.

## Supported AI Clients

The Slingshot MCP Server works with any AI tool that supports the MCP standard, including:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (with MCP-compatible extensions)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## Getting Started

For full setup instructions and a list of supported tools and operations, see the Slingshot API Reference:

**[Slingshot API Reference v2 →](https://my.slingshotapp.io/v2/docs)**
