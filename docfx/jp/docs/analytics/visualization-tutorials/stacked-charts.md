---
title: Slingshot で積層型チャートの表示形式を作成する方法
_description: サンプルス プレッドシートを使用して積層型チャートの表示形式を作成する方法を説明します。
_language: ja
---

# 積層型チャートを作成する方法

このチュートリアルはサンプル スプレッドシートを使用し**積層型**チャートを作成する方法を説明します。

<img src="images/different-stacked-charts-example.png" alt="Example of different Stacked Charts types" class="responsive-img" width="85%"/>  

積層型チャート ビューのガイドは、以下のリンクから参照してください。

  - [積層型柱状チャートを作成する方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/stacked-charts#積層型チャートの作成)

  - [積層型チャートのタイプを変更する方法](#change-chart-type)

  - [軸の構成を変更する方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/stacked-charts#軸の構成を変更する方法)

  - [軸の構成を対数に変更する方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/stacked-charts#軸構成を対数的としての設定)

  - [パーセンテージの配分を有効にする方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/stacked-charts#パーセンテージの配分を有効する方法)

## 重要なコンセプト

積層型チャートは、3 つのレイアウトから選択できます - [エリア](#積層型チャートの作成)、[柱状](#積層型チャートの作成)および[棒](#積層型チャートの作成)。

以下の項目も設定できます。

  - **軸の構成**: 軸の構成でチャートの最大値と最小値を構成できます。デフォルトで最小値は 0 に設定され、最大値は使用されるデータによって設定されます。

      - **対数軸構成**: [対数] ボックスをチェックする場合、値のスケールは通常のリニア スケールを使用する代わりに大きさを使用するリニア スケール以外で計算されます。

## サンプル データ ソース

このチュートリアルでは [Slingshot Visualization Tutorials](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の *Stacked Charts* シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](../datasources/supported-data-sources/web-resource.md)として追加してください。

</div>

<a name='create-stacked-chart'></a>
## 積層型チャートの作成

 1. **[分析]** にある **[+ ダッシュボード]** ボタンを選択します。

<img src="images/new-dashboard-button.png" alt="Dashboard button in the My Analytics section" class="responsive-img" width="85%"/> 

 2. データ ソースのリストからデータ ソース (**Slingshot Visualization Tutorials**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

<img src="images/visualization-tutorials-sample.png" alt="Slingshot Visualization Tutorials added to the list of  data sources" class="responsive-img" width="85%"/>

 3. *Stacked Charts* シートを選択します。

  <img src="images/stacked-chart-spreadsheet-data-source-details-dialog.png" alt="Stacked Charts Spreadsheet in the tutorial data source" class="responsive-img" width="65%"/>

 4. 表示形式 エディターのトップ バーで**グリッド アイコン**を選択します。デフォルトで、表示形式のタイプは**柱状**に設定されています。**積層型**表示形式のいずれかを選択することで、いつでも変更できます。     

<img src="images/stacked-chart-types.png" alt="Grid icon in the list of Chart Types" class="responsive-img" width="85%"/>

 5. 積層型チャートでは、データ エディターの [値] プレースホルダーに 2 つ以上のフィールドをドラッグ アンド ドロップする必要があります。今の例で、「1960」、「2003」、「2008」と「2010」 を [値] へ、「Country Name」を [ラベル] へドラッグアンドドロップします。

<img src="images/stacked-charts-organizing-data.png" alt="Organize Stacked Charts spreadsheet data" class="responsive-img" width="85%"/>

<a name='change-axis-configuration'></a>
## 軸の構成を変更する方法

[ゲージのバンド](../visualization-tutorials/gauge-charts.md#ゲージ表示形式に範囲を追加する方法)と同様に、チャート軸構成でチャートの最小と最大値を設定できます。
この機能を使用して、特定のデータ含有や除外ができます。

|                                        |                                                                                      |                                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                | <img src="images/tutorials-settings.png" alt="Settings menu" class="responsive-img"/>               | 表示形式エディターの **[設定]** セクションに移動します。                                                                           |
| 2\. **範囲の設定にアクセスする** | <img src="images/axis-bounds.png" alt="Axis Bounds section in Settings Menu" class="responsive-img"/>                           | [軸範囲] に移動します。最大値または最小値 (または両方) 値を設定するかどうかに基づいて、チャートの開始値または終了値を入力します。 |                                                                               

<a name='set-logarithmic-axis'></a>
## 軸構成を対数的としての設定

|                                           |                                                                          |                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 1\. **設定を変更する**                   | <img src="images/tutorials-settings.png" alt="Settings Menu" class="responsive-img"/>   | 表示形式エディターの **[設定]** セクションに移動します。 |
| 2\. **軸のオプションにアクセスする**            | <img src="images/axis-bounds-logarithmic.png" alt="Axis Bounds section in Settings Menu" class="responsive-img"/>               | 下矢印を選択して、軸ドロップダウンを展開します。次に、[対数] を選択します。|      

<a name='enable-percentage-distribution'></a>
## パーセンテージの配分を有効する方法

積層型チャートにパーセンテージの配分も構成できます。このタイプのチャートに値とパーセンテージの配分スケールを切り替えます。以下は作業手順です。

|                                        |                                                                                    |                                                                                           |
| -------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                | <img src="images/tutorials-settings.png" alt="Settings Menu" class="responsive-img"/>              | 表示形式エディターの **[設定]** セクションに移動します。                               |
| 2\. **パーセンテージの配分を有効にする** | <img src="images/percentage-distribution.png" alt="Option for Percentage Distribution in the Settings Menu" class="responsive-img"/> | [パーセンテージの配分] ボックスをチェックして、パーセンテージの配分設定を有効にします。|
