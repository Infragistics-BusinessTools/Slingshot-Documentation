---
title: Slingshot MCP サーバー
_description: Model Context Protocol (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
_language: ja
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、**Model Context Protocol (MCP)** を使用して AI アシスタントを Slingshot に直接接続できます。MCP は、AI ツールが自然言語を使用して Slingshot のデータを読み取り、操作できるようにする標準化されたフレームワークです。

接続すると、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## 何ができますか?

Slingshot MCP サーバーを使用すると、AI アシスタントを使って以下のことができます。

- タスクを作成・更新し、チームメートに割り当て、期日を設定する。
- ワークスペースとプロジェクトを横断して検索し、すばやく回答を得る。
- プロジェクトのステータスを要約し、進捗状況のアップデートを生成する。
- タスクをプロジェクトとリスト間で移動する。
- 自然言語で望むことを説明することで、繰り返しのワークフローを自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## サポートされている AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートする任意の AI ツールで動作します。以下が含まれます。

- Claude Desktop
- Claude Code
- Cursor
- VS Code (MCP 互換の拡張機能を使用)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントの接続

認証は OAuth を通じて処理されます。初めて接続するときに Slingshot アカウントへのサインインが求められます。

### Claude Desktop / Claude.ai

Claude Pro アカウント以上が必要です。カスタム コネクターは無料プランでは使用できません。

**[設定] → [コネクター] → [カスタム コネクターの追加]** に移動し、サーバー URL を貼り付けます: `https://mcp.slingshotapp.io/mcp`

### Claude Code

以下を実行してください。

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。デベロッパー モードとカスタム コネクターは無料プランでは使用できません。

**[設定]** で**デベロッパー モード**を有効にし、サーバー URL を使用して Slingshot をコネクターとして追加します。

### Cursor / VS Code / Windsurf

MCP 構成ファイルに以下を追加します。

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://mcp.slingshotapp.io/mcp"
    }
  }
}
```

### その他の MCP 互換ツール

サーバー URL を追加する場所については、ツールのドキュメントを参照してください。

## 使い始める

完全なセットアップ手順とサポートされているツールおよび操作の一覧については、Slingshot API リファレンスをご覧ください。

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
