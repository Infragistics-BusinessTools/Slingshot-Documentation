---
title: Slingshot でダッシュボードを作成する方法
_description: Slingshot でダッシュボードを簡単に作成し、シームレスなコラボレーションを実現するための 4 つの手順のガイド。
_language: ja
---

# ダッシュボードの作成

Analytics のダッシュボード作成には以下のオプションが含まれます:

1.  [ダッシュボード作成メニューにアクセス](#ダッシュボード作成メニューにアクセス)

2.  [データ ソースの追加](#データ-ソースの追加)

3.  [表示形式の変更](#表示形式の変更) (オプション)

4.  [ダッシュボードの保存](#ダッシュボードの保存)

<a name='access-dashboard-creation-menu'></a>
## ダッシュボード作成メニューにアクセス

**[+ ダッシュボード]** または **[ダッシュボードの作成]** **(分析)** の青いボタンをクリックまたはタップして、ダッシュボードを作成できます。

   <img src="images/creating-a-dashboard.png" alt="Dashboard button in My Analytics" class="responsive-img" width="80%"/>

[新しい表示形式] のダイアログが表示されます。データ ソースを使用して表示形式を作成します。

<img src="images/new-visualization-screen.png" alt="A list of already added data sources" class="responsive-img" width= "85%"/>

<a name='add-data-source'></a>
## データ ソースの追加

データ ソースがデータ ソース リストにない場合は、右上隅にある **[+ データ ソース]** ボタンを選択します。新しいダイアログが表示され、すべてのデータ ソース カテゴリと使用可能なデータ ソースが表示されます。必要なデータ ソースが表示されるまで、上下にスクロールしてください。

<img src="images/select-your-data-source.png" alt="List with some of the data sources" class="responsive-img" width="85%"/>

データ ソースがコンテンツ マネージャーのスプレッドシートの場合、可覚化で使用する特定のシートを選択できます。

<img src="images/dashboards-select-data-sheet.png" alt="Select a data sheet from an excel file data source" class="responsive-img" width="55%"/>

### 使用可能なコンテンツ

Analytics では [Dropbox](../datasources/supported-data-sources/dropbox.md)、[OneDrive](../datasources/supported-data-sources/onedrive.md)、[Box](../datasources/supported-data-sources/Box.md)、[Google Drive](../datasources/supported-data-sources/google-drive.md) などの複数のコンテンツ ソースを追加でき、それらの使用可能なフォルダー、ファイル、スプレッドシートを閲覧できます。

<img src="images/dashboards-onedrive-available-content.png" alt="Available content in OneDrive datasource account" class="responsive-img" width="80%"/>

さらに、[SharePoint](../datasources/supported-data-sources/sharepoint.md) データ ソースを追加することもできるため、リストまたはライブラリにアクセスする機能が使用可能です。

<img src="images/dashboards-sharepoint-list.png" alt="Available content in SharePoint datasource account" class="responsive-img" width="80%"/>

<a name='modify-visualization'></a>
## 表示形式の変更

データ ソースを追加した後、**表示形式エディター**が表示されます。デフォルトでは、柱状表示形式が選択されます。

<img src="images/visualization-editor-creating-dashboards.png" alt="Dashboards first visualization in the visualization editor" class="responsive-img" width="80%"/>

Analytics では、情報を可覚化する方法をカスタマイズするためのいくつかのオプションがあります。上部バーの**ピボット アイコン**を選択してオプションにアクセスできます。

<img src="images/creating-dashboards-chart-types.png" alt="Chart types list"  class="responsive-img" width="80%"/>

表示形式にラベルと値を追加し、右側のペインでプレビューします。必要に応じて、表示形式設定を変更してフィルターを追加できます。

<img src="images/visualization-editor-sample-data.png" alt="Editing visualization fields preview" class="responsive-img" width="80%"/>

表示形式を変更した後**ダッシュボード エディター**に移動されます。右上側に **[元に戻す]**、**[やり直し]**、および **[+ 追加]** の分割ボタンが表示されます。これらのボタンの横には、ダッシュボードのオーバーフロー メニューもあります。そこで、ダッシュボードの **[テーマ]** の変更、ダッシュボードを **[更新]**、ダッシュボードを **[貼り付け]**、**[自動レイアウト]** のオン / オフ、ダッシュボードの **[エクスポート]**、またはダッシュボードに **[名前をつけて保存]** ボタンを選択できます。

表示形式の右上隅にあるオーバーフロー メニューを使用して、表示形式の **[名前の変更]**、**[編集]**、**[コピー]**、**[複製]** または **[削除]** できます。 

>[!NOTE]
>表示形式のコピーと複製の違いは、複製は同じダッシュボード内でのみ機能し、コピー オプションを使用すると、表示形式を同じダッシュボードまたは異なるダッシュボードに配置できることです。

表示形式をコピーした後、表示形式を貼り付けるダッシュボードのオーバーフロー メニュー内の [貼り付け] オプションを見つけます。

<img src="images/paste-option-visualization.png" alt="Paste option in the dashboard overflow menu" class="responsive-img" width="80%"/>


## テーマの適用

ダッシュボードに移動された後、[テーマ] を選択し、以下に示すように **Mountain テーマ**、**Ocean テーマ**、**Aurora テーマ**を切り替えることができます。

<img src="images/dashboard-themes-option.png" alt="Changing the theme of a dashboard" class="responsive-img" width="80%"/>

<a name='save-dashboard'></a>
## ダッシュボードの保存

ダッシュボードの準備後、右上側の**ティック アイコン**を選択してあるいはオーバーフロー メニューの [**名前を付けて保存**] オプションにアクセスして、ダッシュボードを保存します。

**[分析]** -> **[ダッシュボード]** の下にダッシュボードを保存するか、参加または作成したワークスペースのいずれかを選択できます。

ダッシュボードの名前を選択し、準備ができた後 [ここに保存] をクリック/タップします。

<img src="images/creating-dashboards-save-as-dialog.png" alt="Save as dialog while creating dashboards" class="responsive-img" width="65%"/>

**[名前を付けて保存]** メニューで、右上隅にある **[+ リスト]** ボタンと **[+ セクション]** ボタンをクリックして、リストとセクションを作成し、スペースを整理することができます。
