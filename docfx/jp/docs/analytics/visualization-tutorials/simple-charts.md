---
title: Slingshot でシンプル シリーズのチャートの表示形式を作成する方法
_description: サンプルス プレッドシートを使用してシンプル シリーズの表示形式を作成する方法を説明します。
_language: ja
---

# シンプル シリーズのチャートを作成する方法

このチュートリアルは、サンプル スプレッドシートを使用してシンプル シリーズのチャートを作成する方法を説明します。

<img src="images/simple-series-charts-example.png" alt="Visualizations made by using simple series charts" class="responsive-img" width="85%"/>

<img src="images/simple-series-charts-example2.png" alt="Visualizations made by using another set of simple series charts" class="responsive-img" width="85%"/>

<img src="images/simple-series-charts-example3.png" alt="Another set of visualizations made with different chart" class="responsive-img" width="85%"/>

シンプル チャート ビューのガイドは、以下のリンクから参照してください。

  - [エリア チャートを作成する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#creating-your-chart)

  - [チャートにトレンドラインを追加する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#adding-a-trendline-to-your-chart)

  - [軸の構成を変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#changing-your-axis-configuration)

  - [軸の構成を対数に変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#setting-your-axis-configuration-as-logarithmic)

  - [ドーナツ型と円チャートの開始位置の変更方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#changing-the-start-position-for-doughnut-and-pie-charts)

  - [ファンネル、円とドーナツ型 チャートのスライスのラベルを変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/simple-charts#changing-the-slice-labels-for-doughnut-funnel-and-pie-charts)

## 重要なコンセプト

チャートを使用する時、表示される情報とともに追加の情報も追加できます。これは以下の機能で追加できます。

  - チャートに折れ線で表示する**チャート トレンドライン**。変数間の関係や情報全体の方向性を表す場合に役立ちます。チャートに回帰と呼ばれるいくつかのアルゴリズムを適用できます。回帰は **[チャート トレンドライン]** から選択できます。

  - **軸の構成**: 軸の構成でチャートの最大値と最小値を構成できます。デフォルトで最小値は 0 に設定され、最大値は使用されるデータによって設定されます。

      - **対数軸構成**: [対数] ボックスをチェックする場合、値のスケールは通常のリニア スケールを使用する代わりに大きさを使用するリニア スケール以外で計算されます。

  - **開始位置**: 円チャートおよびドーナツ型チャートでチャートのスライスを回転する開始位置を構成し、データの表示順序を変更できます。

  - **スライス ラベル**: ドーナツ型、ファンネル、および円チャートでは、値やパーセンテージ、またはその両方を同時に表示するスライス ラベルを構成できます。

## サンプル データ ソース

このチュートリアルでは [Slingshot Visualization Tutorials](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の *Simple Series Charts* シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](~/jp/datasources/supported-datasources/web-resource.md)として追加してください。

<a name='create-basic-chart'></a>
## チャートの作成

1. **[分析]** セクションの右上隅にある **[+ ダッシュボード]** ボタンを選択します。

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>                                      

2. データ ソースのリストからデータ ソース (**Slingshot Tutorials Spreadsheet**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

   <img src="images/visualization-tutorials-data-source.png" alt="Selecting a data source from the list of data sources" class="responsive-img" width="55%"/>                                          

3. *Simple Series Charts* シートを選択します。     

   <img src="images/simple-series-charts-spreadsheet.png" alt="Selecting Simple Series Chart sheet" class="responsive-img" width="55%"/>

4. **表示形式ピッカー**を開き、**チャート**表示形式のいずれかを選択します。デフォルトで、表示形式のタイプは**柱状**に設定されています。

   <img src="images/chart-types-simple-series-charts.png" alt="List of chart types" class="responsive-img" width="55%"/> 
 
5. たとえば、上の表のチャートには、選択した国のリストの人口が表示されます。「Country Name」フィールドを [ラベル] へ、「Population」フィールドを [値] へドラッグアンドドロップします。            
   <img src="images/simple-series-charts-organizing-data.png" alt="Organizing the data from the Simple Series Charts sheet" class="responsive-img" width="35%"/>                                   

<a name='add-trendline-chart'></a>
## チャートに近似曲線を追加する

情報全体の方向性またチャートの変数の関係を表すためにチャートの近似曲線を追加できます。以下は作業手順です。

|                                     |                                                                        |                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 1\. **設定を変更する**             | <img src="images/settings-tutorials.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>  | 表示形式エディターの **[設定]** セクションに移動します。      |
| 2\. **チャートの近似曲線へアクセスする** | <img src="images/chart-trendline-simple-series-charts.png" alt="Chart Trendlines option in the settings" class="responsive-img"/> | 下向き矢印を選択して [チャートの近似曲線] ドロップダウンを展開し、Slingshot の定義済み近似曲線のいずれかを選択します。 |

<a name='change-axis-configuration'></a>
## 軸の構成の変更

[ゲージのバンド](~/jp/data-visualizations/visualization-types/gauge-charts.html#bands-configuration)と同様に、チャート軸構成でチャートの最小と最大値を設定できます。この機能を使用して、特定のデータ含有や除外ができます。

|                                        |                                                                                      |                                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                | <img src="images/settings-tutorials.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>                 | 表示形式エディターの **[設定]** セクションに移動します。                                                                           |
| 2\. **範囲の設定にアクセスする** | <img src="images/axis-bounds-section.png" alt="Axis bounds in the settings options" class="responsive-img"/>                           | [軸範囲] に移動します。最大値または最小値 (または両方) 値を設定するかどうかに基づいて、チャートの開始値または終了値を入力します。 |

<a name='set-logarithmic-axis'></a>
## 軸を対数軸として設定

|                                           |                                                                          |                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 1\. **設定を変更する**                   | <img src="images/settings-tutorials.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>     | 表示形式エディターの **[設定]** セクションに移動します。|
| 2\. **軸オプションにアクセスする**            | <img src="images/axis-logarithmic.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>               | 下矢印を選択して [軸] ドロップダウンを展開し、[対数] を選択します。      |   

<a name='change-start-position'></a>
## ドーナツ型と円チャートの開始位置の変更

|                                                   |                                                                                |                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                           | <img src="images/settings-tutorials.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>           | 表示形式エディターの **[設定]** セクションに移動します。                               |
| 2\. **開始位置セクションにアクセスする**         | <img src="images/start-position-settings.png" alt="Start position settings" class="responsive-img"/>               | 下矢印を選択して、[開始位置] ドロップダウンを展開します。チャートに対して、Reveal の事前定義された開始位置 （0°、90°、180°、または 270°） のいずれかを選択します。                          |

<a name='change-slice-labels'></a>
## ドーナツ型、ファンネルと円チャートのスライスのラベルの変更

|                                                |                                                                          |                                                                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1\. **設定を変更する**                        | <img src="images/settings-tutorials.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>     | 表示形式エディターの **[設定]** セクションに移動します。                                            |
| 2\. **スライス ラベルのセクションにアクセスする**         | <img src="images/slice-label-settings.png" alt="Tutorials-Slice-Label" class="responsive-img"/>               | 下矢印を選択して、スライス ラベル ドロップダウンを展開します。Reveal の事前定義されたラベル付けオプション (パーセント、値、または値とパーセント) のいずれかを選択します。                                       |
