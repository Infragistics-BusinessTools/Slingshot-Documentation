---
title: Slingshot MCP サーバー
_description: モデル コンテキスト プロトコル (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
_language: ja
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、**モデル コンテキスト プロトコル (MCP)** を通じて AI アシスタントを Slingshot に直接接続できます。MCP は、AI ツールが自然言語を使用して Slingshot データを読み取り、操作できる標準化されたフレームワークです。

接続後は、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## 何ができますか?

Slingshot MCP サーバーを使用すると、AI アシスタントで以下のことが可能です:

- タスクを作成および更新し、チームメートに割り当て、期日を設定する。
- ワークスペースとプロジェクトを横断して素早く検索する。
- プロジェクトのステータスを要約し、進捗状況の更新を生成する。
- タスクをプロジェクトとリスト間で移動する。
- 平易な言葉で説明するだけで繰り返しのワークフローを自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## サポートされている AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートするすべての AI ツールで動作します。以下が含まれます:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (MCP 対応拡張機能を使用)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントを接続する

認証は OAuth 経由で処理されます。初回接続時に Slingshot アカウントへのサインインが求められます。

### Claude Desktop / Claude.ai

Claude Pro 以上のアカウントが必要です。カスタム コネクターは無料プランでは利用できません。

**[設定] → [コネクター] → [カスタム コネクターを追加]** に移動し、サーバー URL `https://mcp.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

次のコマンドを実行します:

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。開発者モードとカスタム コネクターは無料プランでは利用できません。

**[設定]** で **[開発者モード]** を有効にし、サーバー URL を使用して Slingshot をコネクターとして追加します。

### Cursor / VS Code / Windsurf

MCP 設定ファイルに以下を追加します:

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://mcp.slingshotapp.io/mcp"
    }
  }
}
```

### その他の MCP 対応ツール

サーバー URL の追加場所については、ツールのドキュメントを参照してください。

## はじめに

完全なセットアップ手順およびサポートされているツールと操作の一覧については、Slingshot API リファレンスをご覧ください:

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
