---
title: Slingshot で Google BigQuery データ ソースを使用する方法
_description: Google BigQuery データ ソースを設定して使用する方法と、速度低下することなく巨大なデータセットを使用する方法を説明します。
_language: ja
---

# Google BigQuery

Google BigQuery データ ソースは、Analytics 内でビッグ データを処理する際の速度を大幅に向上させます。これにより、速度低下することなく、何百万ものレコードを含むデータセットを表示形式に使用できます。

## Google BigQuery への接続

Google BigQuery を選択すると、**Google アカウント**に接続するように求められます。

Google アカウントを追加すると、BigQuery データセットにアクセスできるようになります。それらを表示形式に使用するには、次のことを行う必要があります:

1.  **[データ ソースの作成]** ダイアログで**プロジェクトを選択します**。

    <img src="images/google-big-query-projects-list.png" alt="Select a project in the New Data Source dialog" class="responsive-img" width="60%"/>

2.  データ セットの横にある空の円をマークして、**データセットを選択します**。

    <img src="images/dataset-google-big-query.png" alt="Select a dataset dialog" class="responsive-img" width="60%"/>

3.  データセットから**表を選択します**。右側の**拡大鏡**のアイコンを使用して、データをプレビューします。

    <img src="images/google-big-query-tables-list.png" alt="Select a table dialog" class="responsive-img" width="60%"/>

これで、Google BigQuery から取得したデータを使用して表示形式の構築を開始できる、*表示形式エディター*に移動します。

 <img src="images/visualization-editor-google-big-query.png" alt="Google Big Query data in the Visualization Editor" class="responsive-img" width="85%"/>

## 表示形式エディターでの制限事項

Analytics でビッグ データを操作する場合、数百万のレコードを持つデータ ソースを処理するための特定のアプローチにより、表示形式エディターにはいくつかの制限があります。

### 計算フィールドで使用できる関数の制限

現在、BigQuery のデータを使用する*計算フィールド*で、使用できる**関数**の数は限られています。

- [日付](../../data-visualizations/fields/calculated-fields/date.md) - date; time.

- [論理](../../data-visualizations/fields/calculated-fields/logic.md) - false; true; if; not.

- [数学](../../data-visualizations/fields/calculated-fields/math.md) - abs; exp; log; log10; mod; rand; sign; sqrt; trunc.

- [文字列](../../data-visualizations/fields/calculated-fields/string.md) - find; len; trim; lower; mid; upper.

### データ ブレンディングの制限

現在、Google BigQuery データ ソースからのデータを使用する場合、データ ブレンディング ([データ ソースを 1 つの表示形式に統合](../../datasources/data-blending.md)) は**使用できません**。
