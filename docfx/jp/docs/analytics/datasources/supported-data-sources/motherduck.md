---
title: MotherDuck データ ソースの構成方法
_description: MotherDuck を Slingshot のデータ ソースとして接続して使用する方法を説明します。
_language: ja
---

# MotherDuck

MotherDuck は DuckDB を基盤とするクラウドベースの SQL 分析プラットフォームで、大規模なデータセットに対する高速分析クエリのために設計されています。Slingshot のデータ ソースとして使用することで、インタラクティブなダッシュボードを構築し、データを効率的に分析できます。

> [!NOTE]
> **Web の制限**。*Analytics Web* アプリでは、公的にアクセス可能な MotherDuck アカウントにのみ接続できます。MotherDuck ワークスペースが制限またはプライベートの場合は、*Analytics Desktop*、*iOS*、または *Android* を使用して接続できます。Analytics を実行しているデバイスは、MotherDuck ワークスペースにアクセスできる必要があります。この制限は、*Analytics Embedded* には適用されません。

## MotherDuck への接続

MotherDuck データ ソースを設定するには、以下の情報が必要です。

1. **[資格情報]**: [資格情報] を選択した後、MotherDuck ワークスペースの資格情報を入力するか、既存の資格情報 (適用可能な場合) を選択できます

<img src="../images/motherduck-credentials.png" alt="Mother Duck credentials"/>

   - **トークン**: MotherDuck 認証トークン。MotherDuck アカウント設定から生成できます。

   - **エイリアス**: データ ソース アカウントの名前。前のダイアログのアカウント リストに表示されます。

   準備ができたら、**[追加]** を選択し、次に **[サーバーの追加]** を選択します。

認証トークン生成の詳細については、<a href="https://docs.motherduck.com/authentication" target="_blank" rel="noopener">MotherDuck 認証ドキュメント</a>を参照してください。

## データの設定

MotherDuck ワークスペースに接続すると、利用可能なデータベースのリストが表示されます。使用するデータベースを選択し、データを読み込むテーブルまたはビューを選択します。

> [!TIP]
> MotherDuck ビューを使用して、テーブル全体を読み込む代わりに、フィルター処理または集計されたデータのサブセットを返すことができます。

### テーブルとビューの作業

Analytics を使用すると、テーブル全体から MotherDuck データを取得できるだけでなく、1 つ以上のテーブルからデータのサブセットを返す特定のビューを選択することもできます。

データ ソース ダイアログでは、ビューはテーブルと並んで表示されます。必要なテーブルまたはビューを選択すると、分析に関連するデータのみが読み込まれます。

## 表示形式エディターでの作業

テーブルまたはビューを選択した後、*表示形式エディター*が表示されます。ここでダッシュボードを作成できます。デフォルトでは、*柱状*の表示形式が選択されています。別のグラフの種類を選択するには、それをクリックします。

表示形式エディターの準備ができたら、ダッシュボードを **[分析]** ⇒ **[ダッシュボード]** または特定のワークスペースに保存できます。

## 関連記事

- [データ ソースの概要](~/docs/analytics/datasources/overview.md)
- [データ ソース資格情報の管理](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [1 つの表示形式でのデータ ソースの結合](~/docs/analytics/datasources/data-blending.md)
