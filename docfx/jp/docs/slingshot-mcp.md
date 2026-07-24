---
title: Slingshot MCP サーバー
_description: Model Context Protocol (MCP) を使用して AI アシスタントを Slingshot に接続し、タスク、プロジェクト、ワークスペースを自然言語で管理します。
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、AI アシスタントを **Model Context Protocol (MCP)** を介して Slingshot に直接接続できます。MCP は、AI ツールが自然言語を使用して Slingshot データを読み取り、操作するための標準化されたフレームワークです。

接続後は、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## できること

Slingshot MCP サーバーを使用すると、AI アシスタントで以下の操作が可能です。

- タスクを作成・更新し、チームメンバーに割り当てたり期日を設定したりする。
- ワークスペースやプロジェクト全体をすばやく検索して回答を得る。
- プロジェクトのステータスを要約し、進捗状況のアップデートを生成する。
- タスクをプロジェクトやリスト間で移動する。
- 繰り返し作業を自然言語で記述して自動化する。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## 対応 AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートする任意の AI ツールで動作します。対応クライアントには以下が含まれます。

- Claude Desktop
- Claude Code
- Cursor
- VS Code（MCP 対応の拡張機能を使用）
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AI アシスタントを接続する

認証は OAuth で処理されます。初回接続時に Slingshot アカウントへのサインインを求められます。

### Claude Desktop / Claude.ai

Claude Pro 以上のアカウントが必要です。カスタム コネクタは無料プランでは使用できません。

**設定 → コネクタ → カスタム コネクタを追加** に移動し、サーバー URL `https://mcp.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

次のコマンドを実行します。

```
claude mcp add --transport http slingshot https://mcp.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT Plus または Pro サブスクリプションが必要です。デベロッパー モードとカスタム コネクタは無料プランでは使用できません。

**設定** で **デベロッパー モード** を有効にし、サーバー URL を使用して Slingshot をコネクタとして追加します。

### Cursor / VS Code / Windsurf

MCP 設定ファイルに以下を追加します。

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

サーバー URL の追加場所については、各ツールのドキュメントを参照してください。

## はじめに

完全なセットアップ手順および対応ツールと操作の一覧については、Slingshot API リファレンスを参照してください。

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
