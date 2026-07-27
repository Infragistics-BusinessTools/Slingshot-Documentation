---
title: Cube データ ソースの構成方法
_description: Cube を Slingshot のデータ ソースとして接続して使用する方法を説明します。
_language: ja
---

# Cube

**前提条件** 次のものを用意してください:
- `https://your-cube-host/cubejs-api/v1` などの、アクセス可能な Cube REST API エンドポイント
- Reveal ユーザーがクエリできる、少なくとも 1 つの公開済み Cube モデル
- Cube デプロイで認証が必要な場合は、JWT などのベアラー トークン戦略

Cube は、REST API を通じてデータ モデルを公開するヘッドレス ビジネス インテリジェンス プラットフォームです。Cube を Slingshot のデータ ソースとして接続することで、Cube データ モデルで定義されたメジャーとディメンションを基にダッシュボードを構築できます。

## Cube への接続

Cube データ ソースを設定するには、以下の情報が必要です。

<img src="./images/add-cube-server-dialog.png" alt="Configure Cube data source dialog" class="responsive-img" width="53%"/>

1.  **URL**: Cube デプロイの REST API エンドポイントのベース URL。Cube Cloud の場合は、デプロイの接続設定に表示される REST API の URL です。

2.  **[資格情報]**: [資格情報] を選択した後、Cube デプロイの資格情報を入力するか、既存の資格情報 (適用可能な場合) を選択できます。

      - **トークン**: Cube REST API へのアクセスに使用する認証トークン。Cube デプロイから生成できます。

      - **エイリアス**: データ ソース アカウントの名前。

 準備ができたら、**[データ ソースの追加]** を選択します。

REST API と認証トークンの詳細については、<a href="https://cube.dev/docs/product/apis-integrations/rest-api" target="_blank" rel="noopener">Cube REST API ドキュメント</a>を参照してください。

## データの設定

Cube に接続すると、Cube デプロイが公開しているデータが表示されます。データ モデルで定義された**キューブ**と**ビュー**が、クエリ可能なテーブルとして表示されます。

### キューブとビューの作業

Analytics を使用すると、キューブ全体からデータを取得できるだけでなく、1 つ以上のキューブから厳選されたメジャーとディメンションのサブセットを公開する特定の<a href="https://cube.dev/docs/product/data-modeling/reference/view" target="_blank" rel="noopener">ビュー</a>を選択することもできます。

データ ソース ダイアログでは、ビューはキューブと並んで表示されます。必要なキューブまたはビューを選択すると、分析に関連するデータのみが読み込まれます。

## 表示形式エディターでの作業

データ ソースを追加すると、*表示形式エディター*が表示されます。ここでダッシュボードを作成できます。選択した表示形式に応じて、さまざまな種類のフィールドが表示されることに注意してください。

表示形式の準備ができたら、右上隅のチェックマークをクリックまたはタップして、**[分析]** ⇒ **[ダッシュボード]** または特定のワークスペースにダッシュボードとして保存できます。

## 関連記事

- [データ ソースの概要](~/docs/analytics/datasources/overview.md)
- [データ ソース資格情報の管理](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [1 つの表示形式でのデータ ソースの結合](~/docs/analytics/datasources/data-blending.md)
