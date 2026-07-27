---
title: AI データ分析
_description: Slingshot AI を使用してダッシュボードを生成し、データを分析し、自然言語の会話を通じてビジネス データからインサイトを得る方法を説明します。
_language: ja
---

# Slingshot AI データ分析

Slingshot AI を活用したアナリティクスを使用すると、従来のアナリティクスの複雑さを排除しながら、機会をより早く見つけてデータ駆動型の意思決定を行うことができます。

## Slingshot AI データ分析とは?

Slingshot AI アナリティクスは、利用可能なデータとビジネス コンテキストを使用して、情報を直接ダッシュボードに変換し、複雑なデータを理解しやすくします。

ダッシュボードと表示形式を生成、編集、分析し、実用的なインサイトを提供できます。

>[!Note]
> Slingshot AI データ分析機能は [Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログへのアクセス

*[通知]* の横にある **[Slingshot AI]** ボタンをクリックまたはタップすると、*Slingshot AI* ダイアログが表示されます。

左側では、次のことができます:

A.	過去の会話を参照する。

B.	新しい会話を作成する。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI dialog" class="responsive-img"/>

右側には、**チャット**と**ドキュメント**の 2 つのセクションが表示されます。

**チャット**を開くと、次のことができます:

C.	既存の会話を続ける。

D. Slingshot AI メッセージを評価してフィードバックを提供する。

E. Slingshot AI メッセージを更新して新しいメッセージを生成する。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI dialog chat section" class="responsive-img"/>

**ドキュメント**を開くと、Slingshot AI が問い合わせに基づいて生成したすべてのダッシュボードと使用したデータ ソースのリストが表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI dialog documents section" class="responsive-img"/>

各 Slingshot AI レスポンスには以下が含まれます:

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード自体。

Slingshot AI レスポンスのオーバーフロー メニューを使用して、次のことができます:

- タスクを作成する

- メッセージをコピーする

- リンクをコピーする

- メッセージをブックマークする

各ダッシュボードにも、次のオプションを含むオーバーフロー メニューがあります:

- ダッシュボードをピンに追加する

- チャットを開始する

- タスクを作成する

- ディスカッションを開始する

- ダッシュボードを開く

- 新しいウィンドウでダッシュボードを開く (デスクトップ アプリ)

- ダッシュボード リンクをコピーする

- ダッシュボードをブックマークする

- ダッシュボードを他のユーザーと共有する

<img src="../images/slingshot-ai-dashboard-overflow-menu.png" alt="Slingshot AI dashboard overflow menu" class="responsive-img"/>

>[!Note]
> 組織、ワークスペース、プロジェクト、または *[分析]* にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリックまたはタップします。

## 役立つヒント

Slingshot AI から最良の結果を得るために、次のことをお勧めします:

-	データ カタログにすでに存在する名前と概念を使用して会話を開始する。

-	ビジネス固有の用語を使用する。

-	会話全体で一貫した言葉使いをする。

-	過去の問い合わせへの参照を含むフォローアップの質問を使用する。

## 一般的な用語

Slingshot AI が認識する一般的な用語:

-	[グローバル フィルター](./analytics/filters/dashboard-filters.md) (ダッシュボード フィルター)

-	[ウィジェット フィルター](./analytics/data-visualizations/fields/field-filters-rules.md) (データ フィルター)

-	[計算フィールド関数](./analytics/data-visualizations/fields/calculated-fields/overview.md) (ポスト計算フィールドを除く) (表形式ソースのみ)

-	[表示形式タイプ](./analytics/data-visualizations/overview.md)

-	[日付フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-date-fields)

-	[数値フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-numeric-fields)

-	[文字列フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-string-fields)

## Slingshot AI でダッシュボードを生成する

>[!Note]
> Slingshot AI は元のダッシュボードに変更を加えることはできません。提供された情報に基づいて新しい変更ダッシュボードのみを作成します。

ダッシュボードを生成するには、次の方法を使用します:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

- データ ソースを Slingshot AI の会話に添付する。

次のタイプのデータ ソースを使用するダッシュボードを生成できます:

-	Amazon Athena

-	CSV ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Excel ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

### ゴールド認定ダッシュボード

[ゴールド認定](certifications.md)ダッシュボードは、迅速かつ効率的なビジネス上の意思決定に使用できる信頼性が高く検証された情報を提供します。

**例:**

今月の各製品の売上を円グラフで表示したい場合。

これを実現するには:

1. Slingshot AI に生成してほしいダッシュボードを詳しく説明して新しい Slingshot AI の会話を開始します。データを抽出するダッシュボードのタイトル、日付フィルターをカバーする期間、Slingshot AI が情報を表示するために使用するグラフの種類を指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Example of user description message for Slingshot AI dashboard generation" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して、必要な情報を持つダッシュボードを探します。次に、そのデータを抽出してダッシュボードにまとめます。また、ダッシュボードが表示する内容の詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="Example of AI-generated dashboard from gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリックまたはタップして最大表示で開くこともできます。

### 添付ダッシュボード

Slingshot AI がゴールド認定ダッシュボードを参照する代わりに、添付されたダッシュボードを直接参照してそのデータを使用して新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したい場合。これを実現するには:

1. Slingshot AI に生成してほしいダッシュボードを詳しく説明して新しい Slingshot AI の会話を開始します。この場合、過去 7 日間の生産ユニット数と損失ユニット数を比較するように依頼できます。

   <img src="../images/description-ai-generation.png" alt="Description example for AI dashboard generation" class="responsive-img"/>

2. 希望するダッシュボードを添付して **[送信]** をクリックまたはタップします。

3. AI はダッシュボードを確認して情報を抽出します。次に、ダッシュボードとダッシュボードが表示する内容の詳細な説明を生成します。

   <img src="../images/ai-generated-dashboard.png" alt="Example of AI-generated dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリックまたはタップして最大表示で開くこともできます。

### 添付データ ソース

特定のデータ ソースを念頭に置いている場合は、会話に直接添付して Slingshot AI にダッシュボードの生成に使用するよう依頼できます。

>[!Note] 初めて新しいデータ ソースからダッシュボードを生成する場合は、Slingshot AI がリクエストを完了するために数分後に AI レスポンスを更新する必要があります。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したい場合。これを実現するには:

1. Slingshot AI に生成してほしいダッシュボードを詳しく説明して新しい Slingshot AI の会話を開始します。過去 7 日間の生産ユニット数と損失ユニット数を比較したいことを指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="Description example for creating an AI-generated dashboard" class="responsive-img"/>

2. 会話にデータ ソースをドラッグ アンド ドロップして添付し、**[送信]** をクリックまたはタップします。

3. Slingshot AI はデータ ソースからデータを抽出して新しいダッシュボードを作成します。また、ダッシュボードが表示する内容の詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="Example of AI-generated dashboard from data source" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリックまたはタップして最大表示で開くこともできます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードに変更を加えることはできません。提供された情報に基づいて新しい変更ダッシュボードのみを作成します。

Slingshot AI を使用して編集できるのは、次のタイプのデータ ソースを使用するダッシュボードのみです:

-	Amazon Athena

-	CSV ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Excel ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

ダッシュボードを編集するには、次の方法を使用します:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] Slingshot AI が生成したダッシュボードを編集することもできます。

### ゴールド認定ダッシュボード

新しいダッシュボードを生成するのと同じ方法でダッシュボードを編集できます。Slingshot AI の助けを借りて[ゴールド認定](certifications.md)ダッシュボードを検索し、その特定のダッシュボードをどのように変更したいかを AI に説明します。Slingshot AI は要求された変更を行います。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合。そのためには:

1. 特定のダッシュボードをどのように編集したいかを詳しく説明して新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="Description example for AI modification on a gold-certified dashboard" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して、編集したいダッシュボードを見つけます。次に、要求された変更を行います。その後、ダッシュボードの更新されたバージョンと行った変更の詳細な説明を表示します。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="Example of AI modified gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードをクリックまたはタップして最大表示で変更を確認できます。ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりすることもできます。

### 添付ダッシュボード

特定のダッシュボードを念頭に置いている場合は、Slingshot AI の会話に添付して Slingshot AI に編集するよう依頼できます。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合。そのためには:

1. 特定のダッシュボードをどのように編集したいかを詳しく説明して新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

2. 会話にダッシュボードを添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

3. 準備ができたら、**[送信]** をクリックまたはタップします。

4. Slingshot AI はダッシュボードを分析して要求された変更を行います。その後、ダッシュボードの更新されたバージョンと行った変更の詳細な説明を表示します。

   <img src="../images/ai-modified-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

5. ダッシュボードをクリックまたはタップして最大表示で変更を確認できます。ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりすることもできます。

## Slingshot AI でダッシュボードと表示形式を分析する

ダッシュボードまたは表示形式を分析するには、次の方法を使用します:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] すべてのタイプのデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用して、組織に保存されている[ゴールド認定](certifications.md)ダッシュボードとその表示形式を分析できます。

**例:**

2024 年と 2025 年に入院患者と外来患者が合計で何人いたかを確認したい場合。そのためには:

1. 詳細な質問をして新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年に入院患者と外来患者は合計で何人でしたか?」* と質問できます。

2. **[送信]** ボタンをクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索し、必要な情報を持つダッシュボードを分析します。次に、要求された情報を表すダッシュボードとともに詳細な分析を提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

### 添付ダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードを念頭に置いている場合は、会話に直接添付できます。

**例:**

2024 年と 2025 年に入院患者と外来患者が合計で何人いたかを確認したい場合。そのためには、Slingshot AI がゴールド認定ダッシュボードを参照する代わりに、次のことで念頭に置いているダッシュボードを直接参照するよう指示できます:

1. 詳細な質問をして新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年に入院患者と外来患者は合計で何人でしたか?」* と質問できます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="Dashboard attached for AI analysis" class="responsive-img"/>

2. 念頭に置いているダッシュボードを添付して **[送信]** をクリックまたはタップします。

3. Slingshot AI はダッシュボードからデータを抽出し、要求された情報とともに既存のダッシュボード (または必要な場合は変更されたバージョン) を表示し、実行された分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用するダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] ダッシュボードを認定できるのは、組織のオーナーによって承認されたユーザーのみです。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを Slingshot AI のトレーニングに使用して、データの生成、編集、分析に活用できます。

ダッシュボードをゴールド認定するには:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリックまたはタップして、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="Gold badge selection" class="responsive-img"/>

3. ダッシュボードが認定されると、**[AI トレーニング]** オプションが有効になります。Slingshot AI はダッシュボードとその表示形式の説明を生成します。これらの説明は Slingshot AI がダッシュボードを生成、編集、分析するのに役立ちます。

## AI トレーニングの管理

将来の問い合わせで Slingshot AI が最新の情報を提供できるように、AI が生成した説明をいつでも更新できます。

ダッシュボードとその表示形式の AI が生成した説明を確認したい場合:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

3. **[AI トレーニングの管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="Manage AI training option" class="responsive-img"/>

4. *[AI トレーニング情報]* ダイアログが表示され、各説明を確認できます。ここでは次のことができます:

-	特定の表示形式またはダッシュボード自体のトレーニングをクリアする。

-	すべてのトレーニングをクリアする。これにより、ダッシュボード内のすべての説明が削除されます。

-	各説明を更新して変更を保存する。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog" class="responsive-img"/>

各表示形式の説明のみを更新したい場合:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/dashboard-edit-button.png" alt="Dashboard edit button" class="responsive-img"/>

2. 表示形式の **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/visualization-edit-button.png" alt="Visualization edit button" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *[AI セクション]* までスクロールします。

5. **[編集]** をクリックまたはタップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI training edit button" class="responsive-img"/>

6. *[Slingshot AI トレーニング]* ダイアログが表示されます。ここで情報を更新できます。準備ができたら、**[更新]** をクリックまたはタップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog example" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリックまたはタップして変更を保存し、もう一度クリックまたはタップしてダッシュボードを更新します。

## AI トレーニングの無効化

組織内の特定のダッシュボードを Slingshot AI のトレーニングに使用したくない場合:

1. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

   <img src="../images/ai-training-info-button.png" alt="AI training info button" class="responsive-img"/>

2. **[AI トレーニング]** をオフに切り替えます。

    <img src="../images/ai-training-toggle-button.png" alt="AI training toggle button" class="responsive-img"/>

## よくある質問

**Q:** **Slingshot AI が生成したダッシュボードを編集できますか?**

**A:** はい、Slingshot AI が生成したダッシュボードはいつでも編集できます。

**Q:** **AI が生成したダッシュボードを他のチームメンバーと共有できますか?**

**A:** はい、Slingshot AI レスポンスのダッシュボードのオーバーフロー メニューを開いて生産性向上機能の 1 つを使用するか、ダッシュボードへのリンクを直接コピーできます。

**Q:** **ゴールド認定ダッシュボードとは何ですか? Slingshot AI はなぜそれを使用しますか?**

**A:** ゴールド認定ダッシュボードは信頼性が高く、検証された情報のみを含むダッシュボードです。これが Slingshot AI がゴールド認定ダッシュボードのみを参照する理由です。

**Q:** **Slingshot AI が生成できるグラフの種類に制限はありますか?**

**A:** Slingshot AI は次のグラフの種類を使用してダッシュボードを生成できます:

- すべてのカテゴリ グラフ

- バブル チャート

- KPI 対ターゲット チャート

- KPI 対時間チャート

- ピボット チャート

- テキスト チャート

- テキスト ビュー チャート

- ツリーマップ チャート
