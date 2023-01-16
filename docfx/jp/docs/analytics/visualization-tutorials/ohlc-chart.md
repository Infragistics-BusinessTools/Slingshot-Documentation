---
title: Slingshot で OHLC の表示形式を作成する方法
_description: サンプルス プレッドシートを使用して OHLC の表示形式を作成する方法を説明します。
_language: ja
---

# OHLC チャートを作成する方法

このチュートリアルは、サンプル スプレッドシートを使用して OHLC チャートを作成する方法を説明します。

<img src="images/ohlc-charts-example.png" alt="Tutorials-Select-OHLC-Candlestick-Charts-Spreadsheet" class="responsive-img" width="85%"/>

OHLC チャート ビューのガイドは、以下のリンクから参照してください。

  - [OHLC 足チャートを作成する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/ohlc-chart#creating-a-ohlc-chart)

  - [軸の構成を変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/ohlc-chart#changing-your-axis-configuration)

  - [軸の構成を対数に変更する方法](https://www.slingshotapp.io/en/help/docs/analytics/visualization-tutorials/ohlc-chart#setting-your-axis-configuration-as-logarithmic)

## 重要なコンセプト

OHLC チャートとローソク足チャートは各財務データの始値、高値、安値、終値を表します。ファイナンシャル シナリオと株の変動の分析のために役立ちます。このチャートは各垂直軸に始まり値および終値を表す 2 つの水平線で数値を垂直軸に表します。

そのため、OHLC チャートには以下の項目が必要になります。

  - **データ エディターの [ラベル] プレースホルダーにドロップされる 1 つのフィールド。** 通常は日付に関連しています。

  - データ エディターの [始値]、[高値]、[安値]、および [終値] カテゴリの **4 つの異なるフィールド**。

<img src="images/ohlc-visualization-editor.png" alt="OHLCChartVisualizationSettings\_All" class="responsive-img" width="85%"/>

チャートに追加情報を表示するためのオプションが複数あります。

  - **軸の構成**: 軸の構成でチャートの最大値と最小値を構成できます。デフォルトで最小値は 0 に設定され、最大値は使用されるデータによって設定されます。

  - **対数軸構成**: [対数] ボックスをチェックすると、値のスケールは通常のリニア スケールを使用する代わりに大きさを使用するリニア スケール以外で計算されます。

## サンプル データ ソース

このチュートリアルでは、[Slingshot Visualization Tutorials](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の *OHLC and Candlestick* シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](~/jp/datasources/supported-data-sources/web-resource.html)として追加してください。

<a name='creating-ohlc-chart'></a>
## OHLC チャートを作成する方法

1. **[分析]** セクションの右上隅にある **[+ ダッシュボード]** ボタンを選択します。

   <img src="images/dashboard-button-my-analytics.png" alt="Tutorials-Create-New-Dashboard" class="responsive-img" width="55%"/>

2. データ ソースのリストからデータ ソース (**Slingshot Tutorials Spreadsheet**) を選択します。データ ソースが新しい場合は、最初に右上隅の **[+ データ ソース]** ボタンから追加する必要があります。

   <img src="images/visualization-tutorials-data-source.png" alt="Tutorials-Select-Data-Source" class="responsive-img" width="55%"/>                                         

 3. *OHLC and Candlestick* シートを選択します。

    <img src="images/ohlc-candlestick-spreadsheet.png" alt="Tutorials-Select-OHLC-Candlestick-Charts-Spreadsheet" class="responsive-img" width="55%"/>                       

 4. **表示形式ピッカー**を開き、**OHLC** を選択します。デフォルトで、表示形式のタイプは**柱状**に設定されています。  

    <img src="images/ohlc-chart-types.png" alt="Tutorials-Select-Change-Visualization" class="responsive-img" width="55%"/>                                

 5. **Date** フィールドを **[ラベル]** にドラッグアンドドロップし、*Open*、*High*、*Low* および *Close* フィールドを対応するプレースホルダーにドラッグアンドドロップします。

    <img src="images/ohlc-organizing-data.png" alt="Organizing the data from the data source" class="responsive-img" width="35%"/>

<a name='changing-axis-configuration'></a>
## 軸の構成の変更

[ゲージの範囲](gauge-views.html#adding-bounds-gauge)と同様に、チャート軸構成でチャートの最小と最大値を設定できます。この機能を使用して、特定のデータ含有や除外ができます。

以下は軸構成のメニューへアクセスするための手順です。

|                                             |                                                                                      |                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 1\. **設定メニューへアクセスする**            | <img src="images/tutorials-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>               | 表示形式エディターの **[設定]** セクションに移動します。 |
| 2\. **軸範囲セクションに移動する** | <img src="images/bounds-axis.png" alt="Tutorial-Access-Axis-Configuration" class="responsive-img"/> | 変更する設定は**軸範囲**です。   |

最大値または最小値 (または両方) のどれを設定するかに基づいて、以下のオプションの 1 つへアクセスする必要があります。

### 最小の限界を変更します。

デフォルトの値は 0 です。別の境界を設定するには、チャートの開始値を入力します。

### 最大値を変更します。

最大値のデフォルトは [自動] に設定されているため、Reveal は元のデータを使用します。別の値を設定するには、チャートの上限に設定する値を入力します。

<a name='setting-logarithmic-axis'></a>
## 軸構成を対数的としての設定

|                                        |                                                                                                       |                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 1\. **設定メニューへアクセスする**       | <img src="images/tutorials-settings.png" alt="Tutorials-Navigate-Settings" class="responsive-img"/>                                | 表示形式エディターの **[設定]** セクションに移動します。 |
| 2\. **軸を対数に変更する** | <img src="images/ohlc-candlestick-logarithmic-axis.png" alt="Tutorial-Access-OHLC-Axis-Configuration" class="responsive-img"/> | **[軸]** ドロップダウンを開き、**[対数]** を選択します。      |
