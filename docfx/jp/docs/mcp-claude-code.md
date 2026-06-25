---
title: Claude で Slingshot MCP に接続する
_description: Slingshot MCP サーバーを Claude に接続して、自然言語でタスク、プロジェクト、ワークスペースを管理できるようにします。
---

# Claude で Slingshot MCP に接続する

このガイドでは、Slingshot MCP サーバーを Claude に接続する手順を説明します。接続後は、Claude で自然言語を使用してタスクの作成と更新、ワークスペースの検索、ステータス更新の生成などを直接行えます。

>[!NOTE]
>Claude でカスタム MCP コネクターを接続するには、**Claude Pro** (有料) 以上のアカウントが必要です。この機能は無料プランでは利用できません。

## 前提条件

- Claude Pro 以上のアカウント (claude.ai)
- Slingshot アカウント

## 接続方法

**1. コネクターに移動する**

[https://claude.ai/customize/connectors](https://claude.ai/customize/connectors) に移動します。

**2. コネクターを追加する**

右上隅の **+** アイコンをクリックして、**カスタム コネクターを追加** ダイアログを開きます。

**3. Slingshot MCP の詳細を入力する**

以下を入力します:

- **名前:** Slingshot
- **URL:** `https://mcp.slingshotapp.io/mcp`

**追加** をクリックします。

**4. アカウントを接続する**

プロンプトが表示されたら **接続** をクリックし、Slingshot の資格情報を使用してサインインして OAuth フローを完了します。

認証が完了すると、コネクターにツールのアクセス許可が表示されます。Slingshot は Claude がユーザーに代わって使用できる読み取り専用ツールと書き込みツールを公開します。

## 接続の確認

Claude で新しい会話を開始し、次のようなプロンプトを試してみてください:

> *「今週期限の Slingshot タスクを一覧表示して。」*

Slingshot がデータで応答すれば、接続は正常に機能しています。

## トラブルシューティング

- **コネクターの追加オプションが表示されない場合** Claude アカウントが Pro プラン以上であることを確認してください。この機能は無料プランでは利用できません。
- **コネクターが表示されない場合** [https://claude.ai/customize/connectors](https://claude.ai/customize/connectors) のページを更新し、再度追加を試みてください。
- **認証に失敗した場合** コネクターを切断して再接続し、OAuth サインイン フローを再度トリガーしてください。
- **権限エラーが発生した場合** Slingshot アカウントが、クエリしているワークスペースまたはプロジェクトにアクセスできることを確認してください。

## 関連トピック

- [Slingshot MCP サーバー](slingshot-mcp.md)
- [ChatGPT で Slingshot MCP に接続する](mcp-chatgpt.md)
- [Slingshot API リファレンス v2](https://my.slingshotapp.io/v2/docs)
