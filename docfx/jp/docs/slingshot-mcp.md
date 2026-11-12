---
title: Slingshot MCP Server
_description: Model Context Protocol (MCP) を使って AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理できます。
---

# Slingshot MCP Server

Slingshot MCP Server を使うと、**Model Context Protocol (MCP)** を通じて AI アシスタントを Slingshot に直接接続できます。MCP は、AI ツールが自然言語で Slingshot データを読み取り、操作できるようにする標準化フレームワークです。

接続後は、AI ツールを離れることなく、AI アシスタントにタスク作成、プロジェクト更新、ワークスペース検索などを依頼できます。

## できること

Slingshot MCP Server では、AI アシスタントを使って次のことができます。

- タスクの作成と更新、チームメイトへの割り当て、期限の設定
- ワークスペースとプロジェクト全体を検索して素早く回答を得る
- プロジェクト状況の要約と進捗アップデートの生成
- タスクをプロジェクトやリスト間で移動する
- 目標の検索・作成・更新、および目標チェックインの追加
- 自動化の作成と管理
- カレンダー イベントの作成・更新・キャンセル、および会議とそのトランスクリプトの読み取り
- やりたい内容を平易な言葉で伝えて反復作業を自動化する

## MCP サーバー URL

```
https://my.slingshotapp.io/mcp
```

## 対応 AI クライアント

Slingshot MCP Server は、次を含む MCP 対応 AI ツールで利用できます。

- Claude Desktop
- Claude Code
- Cursor
- VS Code (with MCP-compatible extensions)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントを接続する

認証は OAuth で行われます。初回接続時に Slingshot アカウントへのサインインが求められます。

### Claude Desktop / Claude.ai

Claude Pro 以上のアカウントが必要です。無料プランではカスタム コネクタは利用できません。

**Settings → Connectors → Add custom connector** に移動し、サーバー URL `https://my.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

次を実行します。

```
claude mcp add --transport http slingshot https://my.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro のサブスクリプションが必要です。無料プランでは Developer Mode とカスタム コネクタは利用できません。

**Settings** で **Developer Mode** を有効にし、サーバー URL を使って Slingshot をコネクタとして追加します。

### Cursor / VS Code / Windsurf

MCP 設定ファイルに次を追加します。

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://my.slingshotapp.io/mcp"
    }
  }
}
```

### そのほかの MCP 対応ツール

サーバー URL の追加場所については、各ツールのドキュメントを参照してください。

## はじめに

セットアップ手順の詳細と、対応ツール/操作の一覧については Slingshot API Reference を参照してください。

**[Slingshot API Reference v2 →](https://my.slingshotapp.io/v2/docs)**
