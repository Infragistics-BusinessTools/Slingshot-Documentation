---
title: Slingshot でスパークライン チャートの表示形式を作成する方法
_description: サンプルス プレッドシートを使用してスパークライン チャートの表示形式を作成する方法を説明します。
_language: ja
---

# スパークライン チャートを作成する方法

このチュートリアルは、サンプル スプレッドシートを使用してスパークライン チャートの表示形式を作成する方法を説明します。

<img src="images/simple-sparkline-chart.png" alt="Simple Sparkline Chart example" class="responsive-img" width="80%"/>
<img src="images/sparkline-area-chart.png" alt="Sparkline Area Chart example" class="responsive-img" width="80%"/>
<img src="images/sparkline-with-day-aggregation.png" alt="Sparkline with Day Aggregation example" class="responsive-img" width="80%">
<img src="images/sparkline-with-less-columns-and-area-chart.png" alt="Sparkline with less columns and area chart example" class="responsive-img" width="70%"/>

スパークライン チャート ビューのガイドは、以下のリンクから参照してください。

  - [スパークライン チャートの作成](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/sparkline-charts#creating-a-sparkline-chart)

  - [スパークラインのチャート タイプを変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/sparkline-charts#changing-the-chart-type-for-the-sparkline)

  - [日付集計を変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/sparkline-charts#changing-the-date-aggregation)

  - [スパークラインの列数を変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/sparkline-charts#modifying-the-amount-of-columns-in-the-sparkline)

## 重要なコンセプト

スパークライン チャートは、指定した日付範囲のトレンドとその進行を表示します。OHLC チャートやローソク足チャートなど、ファイナンシャル シナリオと株の変動の分析のために役立ちます。
スパークラインは、グリッドセル内に折れ線チャートを表示します。

  - データ エディターの **[日付]** プレースホルダーにドロップする**フィールド**。

  - **[値]** にドロップする**フィールド**。

  - **[カテゴリ]** にドロップする**フィールド**。

スパークライン チャートを使用する時、表示するデータに対して情報を追加、変更または削除できます。これは以下の機能で追加できます。

  - スパークラインの**チャート タイプ**は、**折れ線**または**エリア** チャートのいずれかを選択できます。

  - チャートの日付**集計**。

  - 同じチャート内に表示される**値の数**。

  - データに**過去 2 か月を含めるかどうか、またそれらの差異など**、スパークラインのグリッドに含める明示的な情報。

## サンプル データ ソース

このチュートリアルでは [Slingshot Visualization Tutorials](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の *Sparkline Charts* シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされている**クラウド サービス**のいずれかにファイルをアップロードするか、[ウェブ リソースとして](../datasources/supported-data-sources/web-resource.md)追加してください。

<a name='create-sparkline'></a>
## スパークライン チャートの作成


1. **[分析]** セクションの右上隅にある **[+ ダッシュボード]** ボタンを選択します。

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>  

2. データ ソースのリストからデータ ソース (**Slingshot Tutorials Spreadsheet**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

   <img src="images/visualization-tutorials-sample.png" alt="Tutorials-Select-Data-Source" class="responsive-img" width="55%"/>                                         

3. *Sparkline Charts* シートを選択します。

   <img src="images/sparkline-charts-spreadsheet.png" alt="Tutorials-Select-Sparkline-Charts-Spreadsheet.png" class="responsive-img" width="55%"/>                         

4. **表示形式ピッカー**を開き、**スパークライン チャート**を選択します。デフォルトで、表示形式のタイプは**柱状**に設定されています。                                                                             
  <img src="images/chart-types-sparkline.png" alt="Tutorials-Charts-Select-Sparkline-Chart" class="responsive-img" width="55%"/>                                                                              
5. *Date* フィールドを **[日付]** に、*Offer* を **[値]** に、*Stocks* を **[カテゴリ]** にドラッグ アンド ドロップします。

   <img src="images/sparkline-charts-organizing-data.png" alt="Tutorials-SparklineChart-Organizing-Data" class="responsive-img" width="35%"/> 
<a name='change-chart-type-sparkline'></a>
## スパークラインのチャート タイプを変更する方法

スパークライン チャートに使用するチャートのタイプを変更できます。以下は作業手順です。

|                                  |                                                                                        |                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1\. **設定メニューへアクセスする** | <img src="images/sparkline-charts-settings.png" alt="Setting options for sparkline charts" class="responsive-img"/>                 | 表示形式エディターの **[設定]** セクションに移動します。         |
| 2\. **チャート タイプを変更する**    | <img src="images/area-sparkline-chart.png" alt="Different chart types for Sparkline" class="responsive-img"/> | デフォルトで、チャート タイプは [折れ線] に設定されています。[エリア] に設定します。 |

<a name='change-date-aggregation'></a>
## 日付集計の変更

デフォルトでは、情報の集計は **12 ヶ月**です。[表示: 過去] 設定で変更できます。以下は変更手順です。

|                                  |                                                                                                      |                                                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定メニューへアクセスする** | <img src="images/sparkline-charts-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>                              | 表示形式エディターの **[設定]** セクションに移動します。                                                                                          |
| 2\. **集計を変更する**   | <img src="images/sparkline-chart-date-aggregation.png" alt="Tutorial-Change-Date-Aggregation-Sparkline" class="responsive-img"/>  | デフォルトで、[表示: 過去] 設定は **[月]** に設定されます。[月] の横のドロップダウンを選択し、[年] または [日] に変更します。|

日付の集計の隣にある数値を変更して、表示するデータを増減できます。

<a name='modify-columns'></a>
## スパークラインの列数を変更する方法

分析で、表示形式の列数は、過去 2 か月とそれらの差を表示するかどうかによって定義されます。デフォルトで有効になります。以下は削除方法です。

|                                      |                                                                                    |                                                                                                                                                          |
| ------------------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1\. **設定メニューへアクセスする**     | <img src="images/sparkline-charts-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img" width="100%"/>             | 表示形式エディターの **[設定]** セクションに移動します。                                                                                              |
| 2\. **表示列を変更する** | <img src="images/sparkline-chart-columns-options.png" alt="Different options for the columns in the sparkline chart" class="responsive-img" width="100%"/> | どちらもスパークラインに表示しない場合は、**[最後の 2 つの値の列を表示] または [差異のある列を表示] ボックスをオフにします**。|
