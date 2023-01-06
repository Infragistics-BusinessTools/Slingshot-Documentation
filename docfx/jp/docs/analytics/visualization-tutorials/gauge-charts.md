---
title: Slingshot でゲージの表示形式を作成する方法
_description: サンプルス プレッドシートを使用してゲージ チャートの表示形式を作成する方法を説明します。
_language: ja
---

# ゲージで表示形式を作成する方法

このチュートリアルは、サンプル スプレッドシートを使用してゲージの表示形式を作成する方法を説明します。

<img src="images/different-gauge-visualizations.png" alt="Different Gauge Visualizations" class="responsive-img" width="88%"/>

ゲージ チャートのためのガイドは、以下のリンクから参照してください。

  - [リニア ゲージの作成方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#creating-a-linear-gauge)

  - [ラジアル ゲージの作成方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#creating-a-circular-gauge)

  - [ラベル ゲージの作成方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#creating-a-text-gauge)

  - [ブレット グラフ の作成方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#creating-a-bullet-graph)

  - [ゲージ表示形式に範囲を追加する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#adding-bounds-to-your-gauge)

  - [バンドの色を変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/gauge-charts#changing-band-colors)

<a name='key-concepts'></a>
## 重要なコンセプト

ゲージ チャートは、2 つのレイアウトから選択できます:

  - **しきい値の構成**。ゲージのしきい値の構成ではゲージの最大値と最小値を設定できます。デフォルトで最小値に設定されますが、特定のデータを除外するために変更できます。

  - **バンド構成**。バンドの構成は 3 つの範囲を設定できます (より大きい、中間、より小さい) です。データ ソースに基づく範囲でデフォルトの値を上書きします。

## サンプル データ ソース

このチュートリアルでは、[Reveal チュートリアル スプレッドシート](https://download.infragistics.com/reportplus/help/samples/Reveal_Visualization_Tutorials.xlsx).

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](~/jp/datasources/supported-data-sources/web-resource.html)として追加してください。

<a name='create-linear-gauge'></a>
## リニア ゲージを作成する方法


1. Select the **+ Dashboard** button in the top right-hand corner in the **My Analytics** section.

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>                                      

2. Select your data source(**Reveal Tutorials Spreadsheet**) from the list of data sources. If the data source is new, you will need to first add it from the **+ Data Source** button in the top-right corner.

   <img src="images/visualization-tutorials-data-source.png" alt="Selecting a data source from the list of data sources" class="responsive-img" width="55%"/>                                          

3. Choose the **Gauge Views** sheet.
  
   <img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="55%"/>
         
4. Open the *Visualization Picker* and select any of the **Gauges** visualizations. By default, the visualization type will be set to *Column*. 

   <img src="images/gauges-chart-types.png" alt="List of chart types" class="responsive-img" width="55%"/>

5. This linear gauge, for example, will display life expectancy per Country. Drag and drop the **Country Name** field to **Label** and one of the year fields into **Values**.
  
   <img src="images/organizing-data-gauge-visualization.png" alt="Tutorials-LinearGauge-Data" class="responsive-img" width="35%"/>                         

<a name='create-circular-gauge'></a>
## 円型ゲージを作成する方法

1. Select the **+ Dashboard** button in the top right-hand corner of **My Analytics**.

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>                                      

2. Select your data source(**Reveal Tutorials Spreadsheet**) from the list of data sources. If the data source is new, you will need to first add it from the **+ Data Source** button in the top-right corner.

   <img src="images/visualization-tutorials-data-source.png" alt="Selecting a data source from the list of data sources" class="responsive-img" width="55%"/>                                          

3. Choose the **Gauge Views** sheet.
  
   <img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="55%"/>
         
4. Open the *Visualization Picker* and select any of the **Gauges** visualizations. By default, the visualization type will be set to *Column*. 

   <img src="images/gauges-chart-types.png" alt="List of chart types" class="responsive-img" width="55%"/>

5. This linear gauge, for example, will display life expectancy per Country. Drag and drop the **Country Name** field to **Label** and one of the year fields into **Values**.
  
   <img src="images/organizing-data-gauge-visualization.png" alt="Tutorials-LinearGauge-Data" class="responsive-img" width="35%"/> 

<a name='aggregation-instructions'></a>

Circular Gauges are particularly useful to show average values as well
as sum of values. In order to change the aggregation for the field
displayed in Values:

|                                              |                                                                            |                                                                                           |
| -------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1\. **[値] のフィールド設定にアクセスする** | <img src="images/value-circular-gauge.png" alt="Add-Data-Filter-CircularGauge" class="responsive-img" width="85%"/> | **[値]** のフィールドを選択してアクセスします                                                  |
| 2\. **別の集計を選択する**       | <img src="images/field-settings-aggregation-options.png" alt="CircularGauge-Aggregation" class="responsive-img" width="85%"/>         | **[集計]** のドロップダウンを展開し、別のオプションを選択します (平均値など)。|


<a name='create-text-gauge'></a>
## テキスト ゲージを作成する方法

1. Select the **+ Dashboard** button in the top right-hand corner of **My Analytics**.

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>                                      

2. Select your data source(**Reveal Tutorials Spreadsheet**) from the list of data sources. If the data source is new, you will need to first add it from the **+ Data Source** button in the top-right corner.

   <img src="images/visualization-tutorials-data-source.png" alt="Selecting a data source from the list of data sources" class="responsive-img" width="55%"/>                                          

3. Choose the **Gauge Views** sheet.
  
   <img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="55%"/>
         
4. Open the *Visualization Picker* and select the *Text Gauge*. By default, the visualization type will be set to *Column*. 

   <img src="images/gauges-chart-types.png" alt="List of chart types" class="responsive-img" width="55%"/>


5. This text gauge, for example, will display life expectancy per Country. Drag and drop one of the year fields into "Values", and then the "Country Name" field into "Data Filters". Then, select the specific country you want by selecting the field. 

   <img src="images/text-gauge-organizing-data.png" alt="Organizing the data while using text gauge visualizaiton" class="responsive-img" width="35%"/>

上記の [テキスト ゲージのサンプル] は平均値の集計を使用します。フィールドの集計を変更するために、[この手順](#aggregation-instructions)をご参照ください。

<a name='create-bullet-graph-gauge'></a>
## ブレット グラフを作成する方法

1. Select the **+ Dashboard** button in the top right-hand corner of **My Analytics**.

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>                                      

2. Select your data source(**Reveal Tutorials Spreadsheet**) from the list of data sources. If the data source is new, you will need to first add it from the **+ Data Source** button in the top-right corner.

   <img src="images/visualization-tutorials-data-source.png" alt="Selecting a data source from the list of data sources" class="responsive-img" width="55%"/>                                          

3. Choose the **Gauge Views** sheet.
  
   <img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="55%"/>
         
4. Open the *Visualization Picker* and select any of the *Bullet Graph* visualizations. By default, the visualization type will be set to *Column*. 

   <img src="images/gauges-chart-types.png" alt="List of chart types" class="responsive-img" width="55%"/>


5. This bullet graph, for example, will display life expectancy per Country. Drag and drop the *Country Name* field to **Label**, one of the years into **Values**, and another year into **Target**.

   <img src="images/bullet-graph-organizing-data.png" alt="Organizing data while using a bullet graph" class="responsive-img" width="35%"/>

<a name='adding-bounds-gauge'></a>
## ゲージの化でしきい値を追加する方法

しきい値を使用すると、ゲージの最小値と最大値を設定できます。[重要なコンセプト](#key-concepts)で述べたように、特定のデータを除外するように変更できます。以下は作業手順です。

|                                                |                                                                        |                                                                                                                                       |
| ---------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                        | <img src="images/tutorials-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/> | 表示形式エディターの **[設定]** セクションに移動します。                                                                           |
| 2\. **制限のデフォルトの選択を変更する** | <img src="images/limit-options.png" alt="Tutorials-Limits-Bounds" class="responsive-img"/>         | 最大値または最小値 (または両方) 値を設定するかどうかに基づいて、チャートの開始値または終了値を入力します。|

<a name='modify-bands'></a>
## バンドの色の変更

以下は、バンド (より大きい、中間 および より小さい) の色を変更するための手順です。以下は変更手順です。

|                                    |                                                                        |                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1\. **設定を変更する**            | <img src="images/tutorials-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/> | 表示形式エディターの **[設定]** セクションに移動します。              |
| 2\. **色のドロップダウンを表示する** | <img src="images/band-color-options.png" alt="Tutorials-Colors-Dropdown" class="responsive-img"/>     | Expand the dropdown of the range for which you want to change the color. Select one of Reveal's three predefined colors for your band color.|
