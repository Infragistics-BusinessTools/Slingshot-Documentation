---
title: Slingshot MCP サーバー
_description: モデル コンテキスト プロトコル (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
_language: ja
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、**モデル コンテキスト プロトコル (MCP)** を介して AI アシスタントを Slingshot に直接接続できます。MCP は、AI ツールが自然言語を使用して Slingshot データを読み取り、操作できる標準化されたフレームワークです。

接続すると、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## 何ができますか?

Slingshot MCP サーバーを使用すると、AI アシスタントを使って次のことができます:

- タスクを作成および更新し、チームメンバーに割り当て、期限を設定する。
- ワークスペースやプロジェクト全体を検索して、素早く答えを得る。
- プロジェクトの状況を要約し、進捗状況の更新を生成する。
- タスクをプロジェクトやリスト間で移動する。
- やりたいことを平易な言葉で説明して、繰り返しのワークフローを自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## サポートされている AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートする任意の AI ツールで動作します。以下を含みます:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (MCP 互換拡張機能を使用)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントの接続

認証は OAuth を介して処理されます。初めて接続する際に Slingshot アカウントへのサインインが求められます。

### Claude Desktop / Claude.ai

Claude Pro アカウント以上が必要です。カスタム コネクターは無料プランでは利用できません。

**[設定]** → **[コネクター]** → **[カスタム コネクターを追加]** に移動し、サーバー URL `https://mcp.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

次のコマンドを実行します:

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。デベロッパー モードとカスタム コネクターは無料プランでは利用できません。

**[設定]** で**デベロッパー モード**を有効にし、サーバー URL を使用して Slingshot をコネクターとして追加します。

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

### その他の MCP 互換ツール

サーバー URL を追加する場所については、ツールのドキュメントを参照してください。

## はじめに

完全なセットアップ手順とサポートされているツールおよび操作の一覧については、Slingshot API リファレンスをご覧ください:

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
