---
title: Cube データ ソースの構成方法
_description: Cube を Slingshot のデータ ソースとして接続して使用する方法を説明します。
_language: ja
---

# Cube

>[!NOTE] 
>**Web の制限**。*Analytics Web* アプリでは、公的にアクセス可能な Cube アドレスにのみ接続できます。Cube デプロイが一般公開 (プライベートまたは会社のイントラネットでホストされているなど) に制限されている場合は、*Analytics Desktop*、*iOS*、または *Android* を使用して接続できます。Analytics を実行しているデバイスは、Cube アドレスにアクセスできる必要があります。この制限は、*Analytics Embedded* には適用されません。

Cube は、Postgres 互換の **SQL API** を通じてデータ モデルを公開するヘッドレス ビジネス インテリジェンス プラットフォームです。Cube を Slingshot のデータ ソースとして接続することで、Cube データ モデルで定義されたメジャーとディメンションを基にダッシュボードを構築できます。

## Cube への接続

Cube データ ソースを設定するには、以下の情報が必要です。

<img src="./images/add-cube-server-dialog.png" alt="Configure Cube data source dialog" class="responsive-img" width="53%"/>

1.  **サーバー**: Cube デプロイの SQL API エンドポイントのホスト名 (Cube Cloud の場合は、デプロイの接続設定に表示される SQL API ホスト)。

2.  **[ポート]**: 該当する場合、サーバー ポートの詳細。情報が入力されない場合、Analytics はデフォルトの Cube SQL API ポート (**15432**) に接続します。

3.  **[資格情報]**: [資格情報] を選択した後、Cube SQL API の資格情報を入力するか、既存の資格情報 (適用可能な場合) を選択できます。

      - **ユーザー名**: Cube デプロイに構成された SQL API のユーザー名。

      - **[パスワード]**: Cube デプロイに構成された SQL API のパスワード。

      - **エイリアス**: データ ソース アカウントの名前。

 準備ができたら、**[サーバーの追加]** を選択します。

SQL API の有効化と構成の詳細については、<a href="https://cube.dev/docs/product/apis-integrations/sql-api" target="_blank" rel="noopener">Cube SQL API ドキュメント</a>を参照してください。

## データの設定

Cube に接続すると、Cube デプロイが公開しているデータが表示されます。SQL API を通じて、データ モデルで定義された**キューブ**と**ビュー**が、クエリ可能なテーブルとして表示されます。

<img src="./images/cube-data-source-dialog.png" alt="Selecting a Cube view to load into Analytics" class="responsive-img" width="55%"/>

### キューブとビューの作業

Analytics を使用すると、キューブ全体からデータを取得できるだけでなく、1 つ以上のキューブから厳選されたメジャーとディメンションのサブセットを公開する特定の<a href="https://cube.dev/docs/product/data-modeling/reference/view" target="_blank" rel="noopener">ビュー</a>を選択することもできます。

データ ソース ダイアログでは、ビューはキューブと並んで表示されます。必要なキューブまたはビューを選択すると、分析に関連するデータのみが読み込まれます。

## 表示形式エディターでの作業

データ ソースを追加すると、*表示形式エディター*が表示されます。ここでダッシュボードを作成できます。選択した表示形式に応じて、さまざまな種類のフィールドが表示されることに注意してください。

<img src="./images/visualization-editor-cube.png" alt="Working in the Visualization Editor while using Cube as a data source." class="responsive-img" width="90%"/>

表示形式の準備ができたら、右上隅のチェックマークをクリックまたはタップして、**[分析]** ⇒ **[ダッシュボード]** または特定のワークスペースにダッシュボードとして保存できます。

## 関連記事

- [データ ソースの概要](~/docs/analytics/datasources/overview.md)
- [データ ソース資格情報の管理](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [1 つの表示形式でのデータ ソースの結合](~/docs/analytics/datasources/data-blending.md)
