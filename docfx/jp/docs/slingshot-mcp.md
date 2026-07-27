---
title: Slingshot MCP サーバー
_description: モデル コンテキスト プロトコル (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理する方法を説明します。
_language: ja
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、AI ツールが Slingshot データを読み取り、自然言語を使用してやり取りできるようにする標準化されたフレームワークである**モデル コンテキスト プロトコル (MCP)** を使用して、AI アシスタントを Slingshot に直接接続できます。

接続すると、AI ツールを離れることなく、タスクの作成、プロジェクトの更新、ワークスペースの検索などを AI アシスタントに依頼できます。

## できること

Slingshot MCP サーバーを使用すると、AI アシスタントに次のことを依頼できます:

- タスクの作成と更新、チームメートへの割り当て、期限の設定。
- ワークスペースとプロジェクト全体を検索して迅速な回答を得る。
- プロジェクトの状況を要約し、進捗レポートを生成する。
- プロジェクトとリスト間でタスクを移動する。
- 自然言語で希望することを説明して繰り返しのワークフローを自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## サポートされている AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートする任意の AI ツールで動作します。以下を含みます:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (MCP 互換拡張機能付き)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントの接続

認証は OAuth で処理されます。初めて接続する際に Slingshot アカウントへのサインインが求められます。

### Claude Desktop / Claude.ai

Claude Pro アカウント以上が必要です。カスタム コネクターは無料プランでは利用できません。

**[設定] → [コネクター] → [カスタム コネクターの追加]** に移動し、サーバー URL を貼り付けます: `https://mcp.slingshotapp.io/mcp`

### Claude Code

次のコマンドを実行します:

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。開発者モードとカスタム コネクターは無料プランでは利用できません。

**[設定]** で**開発者モード**を有効にし、サーバー URL を使用して Slingshot をコネクターとして追加します。

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

完全なセットアップ手順、サポートされているツールと操作の一覧については、Slingshot API リファレンスを参照してください:

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
