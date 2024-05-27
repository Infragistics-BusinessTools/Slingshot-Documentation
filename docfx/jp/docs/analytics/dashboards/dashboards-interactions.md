# ダッシュボードの操作

初期画面でダッシュボードのサムネイル画像をクリックし、既存のダッシュボードを開くことができます。

<img src="images/sample-dashboard.png" alt="A dashboard with its visualizations" class="responsive-img" width="85%"/>

さまざまな方法でダッシュボードの表示形式の **UI 操作が**できます。たとえば、表示形式がグリッド チャートの場合、水平方向および垂直方向にスクロールできます。チャート ビューではパン、ズームがサポートされています。また、基になるデータ モデルがサポートしている場合は、ドリル ダウンとドリル アップの実行が可能になります。

<a name='maximized-view'></a>
## 最大化されたビュー

ダッシュボードが開くと、表示形式のいずれかにカーソルをホバーし、右上隅の矢印をクリックまたはタップすることで**最大化**できます。

最大化されたビューは、より多くの情報の表示を可能にします。

<img src="images/visualization-maximized-view.png" alt="Maximized visualization view for dashboards" class="responsive-img" width="85%"/>

さらに、このモードでは、右上隅の**小さなチャート アイコン**をタップし、最大化されたビューを他の表示形式に切り替えることができます。エディターで使用されたデータに基づいて、さまざまな表示形式が表示されます。データで適切に機能するチャート タイプのみが提供されます。

変更された表示形式を保存する場合は、編集権限を持ち、[ダッシュボード編集モード](#ビュー--編集モード)で右上隅のチェック アイコンを選択して変更を明示的に保存する必要があります。自分で作成したか、[管理者または変更の権限](../../security.md)で共有しているダッシュボードの編集権限があります。

<img src="images/different-chart-options-for-visualization.png" alt="Chart types in visualization view mode" class="responsive-img" width="85%"/>

さらに、表示形式メニューの右上隅にある**チャート アイコン**をクリックすると、ビューを切り替え、チャートの背後のデータを表示できます。

<img src="images/grid-chart-sample.png" alt="flip to grid" class="responsive-img" width="85%"/>

表示形式のデータ ビハインド表示で並べ替え (昇順または降順) を適用できます。グリッドの並べ替え詳細については、[グリッド チャート](../data-visualizations/visualization-types/grid-chart.md)トピックをご覧ください。

元の表示形式へ戻すために、**[元の形式を表示]** リンクを選択します。

<img src="images/show-original-option.png" alt="show original option in the list of charts" class="responsive-img" width="85%"/>

## 通常のツールチップ

特定の表示形式 (タッチ環境で長押すと) をクリックすると、ツールチップ ポップアップが表示されます。ツールチップは、次のようにチャートの特定のポイントで値を表示するのに役立ちます:

<img src="images/regular-tooltip.png" alt="tooltips popups on visualizations" class="responsive-img" width="85%"/>

通常のツールチップを閉じるには、離れてクリックするかタップしてください。

## ツールチップのホバーと十字線

**[インタラクション]** メニューでは、次の 2 つのオプションを有効にできます: **[ツールチップのホバー]** と **[十字線]**。どちらも**ダッシュボード ビュー** モードの場合のみ使用できます。**ダッシュボード編集モード**では使用できません。

<img src="images/interactions-option.png" alt="Accessing Slingshot's Dashboard Interactions option" class="responsive-img" width="88%"/>

  - **[ツールチップのホバー]** を有効にすると、データにホバーした際に (タッチ環境で長押しした際に) **ツールチップ** ポップアップが表示されます。

    <img src="images/hover-tooltips.png" alt="Slingshot displays tooltips when hovering over data" class="responsive-img" width="88%"/>

    データをクリックすると (タッチ環境でドラッグ ツールチップをリリースすると)、ツールチップのインタラクションが適用可能な場合、ドリル ダウン、ドリル アップ、およびリンク済みのダッシュボードなどのインタラクションで **[ツール]** セクションにアクセスできます。

  - **[十字線]** を有効にすると、Slingshot はツールチップとともに十字線要素を表示します。ツールチップにより多くのコンテキストを与えます。

    <img src="images/crosshairs-example.png" alt="Slingshot displays crosshairs along with tooltips" class="responsive-img" width="85%"/>

十字線は、現在次の表示形式でサポートされています: 散布図、バブル、エリア、ローソク足、折れ線、OHLC、スプライン、スプライン エリア、ステップ エリア、ステップ折れ線。

## ツールチップの合計

ツールチップを表示するときに、カテゴリごとに合計値を表示するように構成できます。

<img src="images/tooltips-totals-example.png" alt="Tooltips total values example" class="responsive-img" width="88%"/>

この機能を有効にするには、次のように、[設定] -> [ツールチップで合計を表示] に移動します:

<img src="images/show-totals-on-tooltip.png" alt="Show totals on tooltip option in the settings" class="responsive-img" width="88%"/>

合計を有効にする場合、表示形式で複数の値を表示するためにカテゴリを追加したことを確認してください。

<a name='view-edit-mode'></a>
## ビュー & 編集モード

ダッシュボードを初めて開いた場合、**ビュー モード**でブラウズすることになります。このモードでは、表示された情報のナビゲーションやフィルタリングが可能ですが、ダッシュボード定義を変更することはできません。

ダッシュボードへの変更を適用するためには、**ダッシュボードの編集モード**に切り替える必要があります。ダッシュボードの右上隅のオーバーフロー メニューから [編集] を選択します。または、鉛筆のアイコンをクリックまたはタップします。編集中に、**[自動レイアウト]** の適用やダッシュボードの **[テーマ]** の変更など、さまざまな変更を加えることができます。

以下は、**ダッシュボード編集**モードのダッシュボードです:

<img src="images/edit-a-dashboard.png" alt="dashboard opened in edit mode" class="responsive-img" width="85%"/>

**編集モードを終了するには**、右上隅のチェック アイコンを選択します。これにより、**ビュー モード**に戻ります。

## ダッシュボード フィルター

ダッシュボードまたは表示形式レベルで情報をフィルターできます。

  - [**ダッシュボード フィルター**](../filters/dashboard-filters.md) は、ダッシュボード編集モードを開くと使用できます (このモードにアクセスするには、ダッシュボードのオーバーフロー メニューから **[編集]** を選択します)。画面の左上隅に、現在のダッシュボード フィルターと、新しいフィルターを追加するオプションが表示されます。

  - [**表示形式フィルター**](../filters/visualization-filters.md) (つまり、クイック フィルター) は最大化モードで表示されます。これらは、表示形式の名前の下にある表示形式の上部セクションにあります。

ダッシュボードと表示形式フィルターの詳細については、[このセクション](../filters/overview.md)をご覧ください。

## 表示形式の自動レイアウト

Slingshot の自動レイアウトは、デバイスのサイズ制約と表示形式の量に基づいて、ダッシュボードのすべての表示形式を動的にサイズ変更します。

<img src="images/auto-layout-option.png" alt="auto layout view and resizing of dashboards" class="responsive-img" width="85%"/>

自動レイアウトが有効なときに表示形式のサイズを変更するには、隅を下または横にドラッグするだけです。これにより、**自動レイアウト**が自動的にオフになります。
