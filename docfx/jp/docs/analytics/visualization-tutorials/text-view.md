---
title: Slingshot でテキスト ビューの表示形式を作成する方法
_description: サンプルス プレッドシートを使用してテキスト ビューの表示形式を作成する方法を説明します。
_language: ja
---

# テキスト ビューを作成する方法

このチュートリアルはサンプル スプレッドシートを使用しテキスト ビューを作成する方法を説明します。

<img src="images/text-view-sample.png" alt="Visualization sample using text view" class="responsive-img" width="85%"/>

テキスト ビューのガイドは、以下のリンクから参照してください。

  - [基本的なテキスト ビューを作成する方法](#creating-text-view)

  - [選択された行を変更する方法](#changing-selected-row)

## 重要なコンセプト

テキストビューではキーと値のパターンで情報が表示されますが、**列のラベルとペアになっているデータの最初の行のみが表示されます**。ただし、フィルターを追加して、必要な行が Reveal 表示されるようにすることができます。

## サンプル データ ソース

このチュートリアルでは [Slingshot 表示形式のチュートリアル](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx) の 「Simple Series Charts」 シートを使用します。

>[!NOTE]
>このリリースでは、ローカル ファイルとしての Excel ファイルはサポートされていません。チュートリアルを実行するには、サポートされているクラウド サービスのいずれかにファイルをアップロードするか、[ウェブ リソース](datasources/supported-data-sources/web-resource.md)として追加してください。

<a name='creating-text-view'></a>
## テキスト ビューを作成する方法

 1. Click/tap on the **+ Dashboard** button in the top right-hand corner in *My Analytics*.

    <img src="images/my-analytics-dashboard-button.png" alt="Dashboard button in the my analytics board" class="responsive-img" width="85%"/>                                                         
 2. You can choose the data source you want to work with from the list of data sources. If the data source is new, you will need to add it from the **+ Data Source** button.

     <img src="images/tutorials-select-data-source-list.png" alt="A dialog with a list of data sources" class="responsive-img" width="85%"/>                                                         
 3. Once the data source is configured, select the **Slingshot tutorials Spreadsheet**. Then, choose the "Simple Series Charts" sheet.  

     <img src="images/tutorials-simple-series-charts-spreadsheet.png" alt="Simple Series Charts Spreadsheed in the data source " class="responsive-img" width="60%"/>                                                                                      
 4.  Open the *Visualization Picker* and select **Text View**. By default, the visualization type will be set to **Column**.   
 
      <img src="images/text-view-chart-types.png" alt="Text View in the chart types list" class="responsive-img" width="70%"/>                                                                                                
5. The above text view, for example, displays the population, life expectancy and fertility rate for a specific country. Drag and drop *Country Name*, *Population*, *Life Expectancy* and *Fertility Rate* into **Columns**.

     <img src="images/organizing-data-text-view.png" alt="Organizing data in the data filter for text view" class="responsive-img" width="40%"/>   

<a name='changing-selected-row'></a>
## 選択された行を変更する方法

デフォルトで、テキスト ビューはシートの最初の行を表示されます。これを変更するためにフィルターを適用できます。たとえば、テキスト ビューに行 9 (ボスニア・ヘルツェゴビナ) を表示させます。

1. Drag and drop the *Country Name* field into **Data Filters**.   
 
    <img src="images/select-data-filter-text-view.png" alt="Selecting an example for data filter for the text view" class="responsive-img" width="37%"/>                                                      
2. Select *Filter Type* to enable the dropdown menu and then choose **Select Values**. 
 
     <img src="images/data-filter-dialog-select-value-text-view.png" alt="Select Value option from the list of filter types" class="responsive-img" width="40%"/>                                                      
3. By default, all values will be selected. Uncheck the *All* box and select only **Bosnia and Herzegovina**. Then, select **Create Filter** 

    <img src="images/data-filter-select-value-example.png" alt="Choosing country from the list of selected values" class="responsive-img" width="40%"/> 
