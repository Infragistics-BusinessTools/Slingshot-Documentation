---
title: Slingshot MCP サーバー
_description: モデルコンテキストプロトコル（MCP）を使用してAIアシスタントをSlingshotに接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
---

# Slingshot MCP サーバー

Slingshot MCPサーバーを使用すると、**モデルコンテキストプロトコル（MCP）** を介してAIアシスタントを直接Slingshotに接続できます。MCPは、AIツールが自然言語を使ってSlingshotのデータを読み取り、操作できる標準化されたフレームワークです。

接続後は、AIツールを離れることなく、AIアシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## 何ができますか？

Slingshot MCPサーバーを使用すると、AIアシスタントで以下の操作が可能です：

- タスクの作成と更新、チームメートへの割り当て、期限の設定。
- ワークスペースやプロジェクトを横断した検索による迅速な回答。
- プロジェクトのステータスの要約と進捗状況の更新の生成。
- プロジェクトやリスト間でのタスクの移動。
- 希望する内容を自然言語で記述することによる繰り返しワークフローの自動化。

## MCP サーバー URL

```
https://my.slingshotapp.io/mcp
```

## 対応AIクライアント

Slingshot MCPサーバーは、MCP標準をサポートするすべてのAIツールで動作します。対応ツールの例：

- Claude Desktop
- Claude Code
- Cursor
- VS Code（MCP対応拡張機能を使用）
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## AIアシスタントの接続方法

認証はOAuthで処理されます。初回接続時にSlingshotアカウントへのサインインを求められます。

### Claude Desktop / Claude.ai

Claude Proプランまたはそれ以上が必要です。カスタムコネクタは無料プランではご利用いただけません。

**設定 → コネクタ → カスタムコネクタを追加** に移動し、サーバーURL `https://my.slingshotapp.io/mcp` を貼り付けます。

### Claude Code

以下を実行します：

```
claude mcp add --transport http slingshot https://my.slingshotapp.io/mcp
```

### ChatGPT

ChatGPT PlusまたはProのサブスクリプションが必要です。デベロッパーモードとカスタムコネクタは無料プランではご利用いただけません。

**設定** で **デベロッパーモード** を有効にし、サーバーURLを使用してSlingshotをコネクタとして追加します。

### Cursor / VS Code / Windsurf

MCPの設定ファイルに以下を追加します：

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://my.slingshotapp.io/mcp"
    }
  }
}
```

### その他のMCP対応ツール

サーバーURLの追加方法については、各ツールのドキュメントを参照してください。

## はじめに

完全なセットアップ手順および対応ツールと操作の一覧については、Slingshot APIリファレンスをご覧ください：

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
