---
title: Slingshot MCP サーバー
_description: モデル コンテキスト プロトコル (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、**モデル コンテキスト プロトコル (MCP)** という標準化されたフレームワークを通じて、AI アシスタントを Slingshot に直接接続できます。MCP は、AI ツールが自然言語を使用して Slingshot データを読み取り、操作できるようにする仕組みです。

接続後は、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## できること

Slingshot MCP サーバーを使用すると、AI アシスタントで以下のことができます:

- タスクを作成・更新し、チームメートにアサインして期日を設定する。
- ワークスペースやプロジェクトを横断して素早く検索する。
- プロジェクトのステータスを要約して進捗状況の更新を生成する。
- タスクをプロジェクト間やリスト間で移動する。
- やりたいことを平易な言葉で説明して繰り返しのワークフローを自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## 対応 AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートする任意の AI ツールで動作します:

- Claude Desktop
- Claude Code
- Cursor
- VS Code（MCP 対応拡張機能）
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントの接続

認証は OAuth 経由で行われます。初めて接続する際に Slingshot アカウントへのサインインを求められます。

### Claude Desktop / Claude.ai

Claude Pro 以上のアカウントが必要です。カスタム コネクタは無料プランでは利用できません。

**[設定] → [コネクタ] → [カスタム コネクタを追加]** に移動し、サーバー URL `https://mcp.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

以下を実行します:

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。開発者モードとカスタム コネクタは無料プランでは利用できません。

**[設定]** で**開発者モード**を有効にし、サーバー URL を使用して Slingshot をコネクタとして追加します。

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

サーバー URL の追加方法については、各ツールのドキュメントを参照してください。

## はじめに

エンドポイント リファレンス、認証ガイド、コード例を含む完全な API ドキュメントは、Slingshot API リファレンスで参照できます:

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
