---
title: Slingshot MCP サーバー
_description: モデル コンテキスト プロトコル (MCP) を使用して AI アシスタントを Slingshot に接続し、自然言語でタスク、プロジェクト、ワークスペースを管理します。
---

# Slingshot MCP サーバー

Slingshot MCP サーバーを使用すると、**モデル コンテキスト プロトコル (MCP)** を介して AI アシスタントを直接 Slingshot に接続できます。MCP は、AI ツールが自然言語を使用して Slingshot データを読み取り、操作するための標準化されたフレームワークです。

接続後は、AI ツールを離れることなく、AI アシスタントにタスクの作成、プロジェクトの更新、ワークスペースの検索などを依頼できます。

## できること

Slingshot MCP サーバーを使用すると、AI アシスタントを通じて以下のことが可能です:

- タスクの作成と更新、チームメンバーへの割り当て、期日の設定。
- ワークスペースとプロジェクト全体の検索による迅速な回答の取得。
- プロジェクト ステータスの要約と進捗状況の更新の生成。
- プロジェクトとリスト間でのタスクの移動。
- 希望する内容を平易な言葉で説明することによる、繰り返し作業の自動化。

## MCP サーバー URL

```
https://mcp.slingshotapp.io/mcp
```

## AI アシスタントの接続

AI アシスタントを Slingshot に接続するには、MCP クライアント設定に以下を追加します:

```json
{
  "mcpServers": {
    "slingshot": {
      "url": "https://mcp.slingshotapp.io/mcp"
    }
  }
}
```

MCP をサポートするほとんどの AI ツールには、このエントリを追加できる設定ファイルまたは構成ファイルがあります。正確な場所については、AI ツールのドキュメントを参照してください。

>[!NOTE]
>認証は OAuth によって処理されます。初めて接続する際に、Slingshot アカウントへのサインインを求めるプロンプトが表示されます。

## サポートされている AI クライアント

Slingshot MCP サーバーは、MCP 標準をサポートするすべての AI ツールで動作します。以下が含まれます:

- Claude Desktop
- Claude Code
- Cursor
- VS Code (MCP 対応拡張機能付き)
- Windsurf
- ChatGPT
- Microsoft Copilot Studio

## はじめに

サポートされているツールと操作の完全なセットアップ手順については、Slingshot API リファレンスを参照してください:

**[Slingshot API リファレンス v2 →](https://my.slingshotapp.io/v2/docs)**
