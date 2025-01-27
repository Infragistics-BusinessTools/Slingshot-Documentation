---
title: Slingshot でゲージの表示形式を作成する方法
_description: サンプルス プレッドシートを使用してゲージ チャートの表示形式を作成する方法を説明します。
_language: ja
---

# ゲージで表示形式を作成する方法

このチュートリアルは、サンプル スプレッドシートを使用して**ゲージ**の表示形式を作成する方法を説明します。

<img src="images/different-gauge-visualizations.png" alt="Example of different Gauge Visualizations" class="responsive-img" width="88%"/>

ゲージ チャートのためのガイドは、以下のリンクから参照してください。

  - [リニア ゲージの作成方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#リニア-ゲージを作成する方法)

  - [ラジアル ゲージの作成方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#円型ゲージを作成する方法)

  - [ラベル ゲージの作成方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#テキスト-ゲージを作成する方法)

  - [ブレット グラフ の作成方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#ブレット-グラフを作成する方法)

  - [ゲージ表示形式に範囲を追加する方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#ゲージ表示形式に範囲を追加する方法)

  - [バンドの色を変更する方法](https://www.slingshotapp.io/ja/help/docs/analytics/visualization-tutorials/gauge-charts#バンドの色の変更)

<a name='key-concepts'></a>
## 重要なコンセプト

ゲージ チャートは、2 つのレイアウトから選択できます:

  - **しきい値の構成**。ゲージのしきい値の構成ではゲージの最大値と最小値を設定できます。デフォルトで最小値に設定されますが、特定のデータを除外するために変更できます。

  - **バンド構成**。バンドの構成は 3 つの範囲を設定できます (より大きい、中間、より小さい) です。データ ソースに基づく範囲でデフォルトの値を上書きします。

## サンプル データ ソース

このチュートリアルでは、[Slingshot Visualization Tutorials](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の *Gauge Views* シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](../datasources/supported-data-sources/web-resource.md)として追加してください。

<a name='create-linear-gauge'></a>
## リニア ゲージを作成する方法

1. ダッシュボードを保存する場所に応じて、**分析**、ワークスペース、またはプロジェクトでダッシュボード リストを開くことができます。 ダッシュボードは後からいつでも別の場所に移動できます。

2. **[+ ダッシュボード]** ボタンをクリックまたはタップします。

<img src="images/dashboard-button-my-analytics.png" alt="New dashboard button in My Analytics" class="responsive-img" width="85%"/>

3. データ ソースのリストからデータ ソース (**Slingshot Visualization Tutorials**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

<img src="images/visualization-tutorials-data-sources-list.png" alt="Data source sample in a list of data sources" class="responsive-img" width="85%"/>

4. **Gauge Views** シートを選択します。
  
   <img src="images/gauge-views.png" alt="Gauge Views sheet in a data source" class="responsive-img" width="65%"/>

5. **表示形式ピッカー**を開き、**リニア ゲージ**を選択します。 

<img src="images/gauges-chart-types.png" alt="Linear gauge in a list of chart types" class="responsive-img" width="85%"/>

6. たとえば、このリニア ゲージは *Life Expectancy by Country* を表します。*Country Name* フィールドを **[ラベル]** へ、*Year* フィールドの 1 つを **[値]** へドラッグアンドドロップします。
  
<img src="images/data-linear-chart.png" alt="Data presented in a linear chart" class="responsive-img" width="85%"/>

<a name='create-circular-gauge'></a>
## 円型ゲージを作成する方法

1. ダッシュボードを保存する場所に応じて、**分析**、ワークスペース、またはプロジェクトでダッシュボード リストを開くことができます。 ダッシュボードは後からいつでも別の場所に移動できます。

2. **[+ ダッシュボード]** ボタンをクリックまたはタップします。

<img src="images/dashboard-button-my-analytics.png" alt="New dashboard button in My Analytics" class="responsive-img" width="85%"/>

3. データ ソースのリストからデータ ソース (**Slingshot Visualization Tutorials**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

<img src="images/visualization-tutorials-data-sources-list.png" alt="Data source sample in a list of data sources" class="responsive-img" width="85%"/>

4. **Gauge Views** シートを選択します。
   <img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="65%"/>

5. **表示形式ピッカー**を開き、**円形ゲージ**を選択します。

<img src="images/gauges-chart-types.png" alt="Circular gauge in a list of chart types" class="responsive-img" width="85%"/>

6. たとえば、この円形ゲージは *Life Expectancy by Country* を表します。*Country Name* フィールドを **[ラベル]** へ、*Year* フィールドの 1 つを **[値]** へドラッグアンドドロップします。
  
<img src="images/organized-data-circular-chart.png" alt="Data presented in a circular chart" class="responsive-img" width="85%"/> 

<a name='aggregation-instructions'></a>

円形ゲージは、特に平均値と値の合計の表示に適しています。[値] に表示されるフィールドの集計を変更する手順:

|                                              |                                                                            |                                                                                           |
| -------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1\. **[値] のフィールド設定にアクセスする** | <img src="images/value-circular-gauge.png" alt="Add-Data-Filter-CircularGauge" class="responsive-img" width="85%"/> | **[値]** のフィールドを選択してアクセスします。                                                 |
| 2\. **別の集計を選択する**       | <img src="images/field-settings-aggregation-options.png" alt="CircularGauge-Aggregation" class="responsive-img" width="85%"/>         | **[集計]** のドロップダウンを展開し、別のオプションを選択します (平均値など)。|

<a name='create-text-gauge'></a>
## テキスト ゲージを作成する方法

1. ダッシュボードを保存する場所に応じて、**分析**、ワークスペース、またはプロジェクトでダッシュボード リストを開くことができます。 ダッシュボードは後からいつでも別の場所に移動できます。

2. **[+ ダッシュボード]** ボタンをクリックまたはタップします。

<img src="images/dashboard-button-my-analytics.png" alt="New dashboard button in My Analytics" class="responsive-img" width="85%"/>

3. データ ソースのリストからデータ ソース (**Slingshot Visualization Tutorials**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

<img src="images/visualization-tutorials-data-sources-list.png" alt="Data source sample in a list of data sources" class="responsive-img" width="85%"/>

4. **Gauge Views** シートを選択します。

   <img src="images/gauge-views.png" alt="Gauge Views sheet in a data source" class="responsive-img" width="65%"/>

5. **表示形式ピッカー**を開き、**テキスト ゲージ**を選択します。 

<img src="images/gauges-chart-types.png" alt="Text Gauge in a list of chart types" class="responsive-img" width="85%"/>

6. たとえば、このテキスト ゲージは *Life Expectancy by Country* を表します。 年フィールドの 1 つを **[値]** にドラッグアンドドロップし、*Country Name* フィールドを **[データ フィルター]** へドラッグアンドドロップします。 次に、フィールドを選択して、必要な特定の国を選択します。 

<img src="images/text-gauge-organized-data.png" alt="Data presented in a text gauge" class="responsive-img" width="85%"/>

上記の [テキスト ゲージのサンプル] は平均値の集計を使用します。フィールドの集計を変更するために、[この手順](../data-visualizations/fields/calculated-fields/aggregation.md)をご参照ください。

<a name='create-bullet-graph-gauge'></a>
## ブレット グラフを作成する方法

1. ダッシュボードを保存する場所に応じて、**分析**、ワークスペース、またはプロジェクトでダッシュボード リストを開くことができます。 ダッシュボードは後からいつでも別の場所に移動できます。

2. **[+ ダッシュボード]** ボタンをクリックまたはタップします。

<img src="images/dashboard-button-my-analytics.png" alt="New dashboard button in My Analytics" class="responsive-img" width="85%"/>

3. データ ソースのリストからデータ ソース (**Slingshot Visualization Tutorials**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

<img src="images/visualization-tutorials-data-sources-list.png" alt="Data source sample in a list of data sources" class="responsive-img" width="85%"/>

4. **Gauge Views** シートを選択します。

<img src="images/gauge-views.png" alt="Selecting Gauge Views spreadsheet" class="responsive-img" width="65%"/>
         
5. **表示形式ピッカー**を開き、**ブレット グラフ**を選択します。 

<img src="images/gauges-chart-types.png" alt="Bullet graph in a list of chart types" class="responsive-img" width="85%"/>

6. 例えば、このブレット グラフ は *Life Expectancy by Country* を表します。*Country Name* フィールドを **[ラベル]** へ、年フィールドの 1 つを **[値]** へ、別の年フィールドを **[ターゲット]** へドラッグアンドドロップします。

<img src="images/bullet-graph-organized-data.png" alt="Data presneted in a bullet graph" class="responsive-img" width="85%"/>

<a name='adding-bounds-gauge'></a>
## ゲージの化でしきい値を追加する方法

しきい値を使用すると、ゲージの最小値と最大値を設定できます。[重要なコンセプト](#重要なコンセプト)で述べたように、特定のデータを除外するように変更できます。以下は作業手順です。

|                                                |                                                                        |                                                                                                                                       |
| ---------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定を変更する**                        | <img src="images/tutorials-settings.png" alt="Settings Menu" class="responsive-img" width="85%"/> | 表示形式エディターの **[設定]** セクションに移動します。                                                                           |
| 2\. **制限のデフォルトの選択を変更する** | <img src="images/limit-options.png" alt="Tutorials-Limits-Bounds" class="responsive-img" width="85%"/>         | 最大値または最小値 (または両方) 値を設定するかどうかに基づいて、チャートの開始値または終了値を入力します。|

<a name='modify-bands'></a>
## バンドの色の変更

以下は、バンド (より大きい、中間 および より小さい) の色を変更するための手順です。以下は変更手順です。

|                                    |                                                                        |                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1\. **設定を変更する**            | <img src="images/tutorials-settings.png" alt="Settings Menu" class="responsive-img" width="85%"/> | 表示形式エディターの **[設定]** セクションに移動します。              |
| 2\. **色のドロップダウンを表示する** | <img src="images/band-color-options.png" alt="Tutorials-Colors-Drop-down" class="responsive-img" width="85%"/>     | 色を変更する範囲のドロップダウンを展開します。バンドの色として、Slingshot の 3 つの事前定義された色のいずれかを選択します。|
