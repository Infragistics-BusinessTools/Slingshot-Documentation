---
title: Elasticsearch データ ソースの構成方法
_description: Elasticsearch に接続し、Slingshot のビジュアライゼーションのデータ ソースとして使用する方法を説明します。
_language: ja
---

# Elasticsearch

## Elasticsearch への接続

Elasticsearch データ ソースを設定するには、以下の情報が必要です。

1.  **ホスト名**: Elasticsearch サーバーまたはクラスターのホスト名または IP アドレス (例: *my-cluster.es.example.com*)。

2.  **ポート**: 該当する場合、サーバー ポートの詳細。情報が入力されない場合、Analytics はデフォルトでヒント テキスト (9200) のポートに接続します。

3.  **資格情報**: [資格情報] を選択した後、Elasticsearch サーバーの資格情報を入力するか、既存の資格情報 (適用可能な場合) を選択できます。

      - **ユーザー名**: Elasticsearch サーバーのユーザー アカウント。

      - **パスワード**: Elasticsearch サーバーにアクセスするためのパスワード。

      - **エイリアス**: データ ソース アカウントの名前。前のダイアログのアカウント リストに表示されます。

    準備ができたら、**[追加]** を選択し、次に **[データ ソースの追加]** を選択します。

## Elasticsearch データ ソースの設定

サーバーに接続すると、利用可能な Elasticsearch インデックスのリストが表示されます。ビジュアライゼーションに使用するインデックスを選択します。

> [!NOTE]
> Elasticsearch インデックスはデータベース テーブルに似ています。各インデックスには、類似した構造を持つドキュメントのコレクションが含まれています。

## 表示形式エディターでの作業

インデックスを選択すると、*表示形式エディター*に移動します。ここでダッシュボードを構築できます。デフォルトでは、*柱状*の表示形式が選択されています。別のグラフの種類を選択するには、それをクリックします。

表示形式エディターの準備ができたら、ダッシュボードを **[My Analytics]** ⇒ **[マイ ダッシュボード]** または特定のワークスペースに保存できます。

## 関連記事

  - [データ ソースの概要](~/docs/analytics/datasources/overview.md)
  - [データ ソース資格情報の管理](~/docs/analytics/datasources/managing-data-source-credentials.md)
  - [1 つの表示形式でのデータ ソースの結合](~/docs/analytics/datasources/data-blending.md)
