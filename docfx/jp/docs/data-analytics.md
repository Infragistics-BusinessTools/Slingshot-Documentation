---
title: AI データ分析
description: Slingshot AI を使用して、自然言語の会話を通じてダッシュボードの生成、データの分析、ビジネス データからのインサイトの取得方法について説明します。
---
# Slingshot AI データ分析

Slingshot AI を活用したアナリティクスを使用すると、従来のアナリティクスの複雑さを排除しながら、機会をより迅速に見つけ、データに基づく意思決定を行うことができます。

## Slingshot AI データ分析とは?

Slingshot AI アナリティクスは、利用可能なデータとビジネス コンテキストを使用して、情報を直接ダッシュボードに変換し、複雑なデータを理解しやすくします。

ダッシュボードとビジュアライゼーションを生成、編集、分析し、実用的なインサイトを提供します。

>[!Note]
> Slingshot AI データ分析機能は、[Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログへのアクセス

*[通知]* の横にある **[Slingshot AI]** ボタンをクリックまたはタップすると、*Slingshot AI* ダイアログが表示されます。

左側では次のことができます:

A.	以前の会話を参照します。

B.	新しい会話を作成します。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI dialog" class="responsive-img"/>

右側には **[チャット]** と **[ドキュメント]** の 2 つのセクションがあります。

**[チャット]** を開くと、次のことができます:

C.	既存の会話を続けます。

D. Slingshot AI メッセージを評価してフィードバックを提供します。

E. Slingshot AI メッセージを更新して新しいメッセージを生成します。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI dialog chat section" class="responsive-img"/>

**[ドキュメント]** を開くと、Slingshot AI が問い合わせに基づいて生成したすべてのダッシュボードと使用したデータ ソースのリストが表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI dialog documents section" class="responsive-img"/>

各 Slingshot AI の応答には次が含まれます:

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード自体。

Slingshot AI 応答のオーバーフロー メニューを使用して、次のことができます:

- タスクを作成する

- メッセージをコピーする

- リンクをコピーする

- メッセージをブックマークする

各ダッシュボードにも次のオプションを含むオーバーフロー メニューがあります:

- ダッシュボードをピンに追加する

- チャットを開始する

- タスクを作成する

- ディスカッションを開始する

- ダッシュボードを開く

- 新しいウィンドウでダッシュボードを開く (デスクトップ アプリ)

- ダッシュボード リンクをコピーする

- ダッシュボードをブックマークする

- 他のユーザーとダッシュボードを共有する

<img src="../images/slingshot-ai-dashboard-overflow-menu.png" alt="Slingshot AI dashboard overflow menu" class="responsive-img"/>

>[!Note]
> 組織、ワークスペース、プロジェクト、または *[分析]* にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリックまたはタップします。

## 役立つヒント

Slingshot AI から最良の結果を得るには、次のことをお勧めします:

-	データ カタログに既に存在する名前と概念を使用して会話を始めます。

-	ビジネス固有の用語を使用します。

-	会話全体で一貫した表現を使用します。

-	過去の問い合わせを参照しながら、フォローアップの質問を使用します。

## 一般的な用語

Slingshot AI が認識する一般的な用語:

-	[グローバル フィルター](./analytics/filters/dashboard-filters.md) (ダッシュボード フィルター)

-	[ウィジェット フィルター](./analytics/data-visualizations/fields/field-filters-rules.md) (データ フィルター)

-	[計算フィールド関数](./analytics/data-visualizations/fields/calculated-fields/overview.md) (事後計算フィールドを除く) (表形式ソースのみ)

-	[ビジュアライゼーションの種類](./analytics/data-visualizations/overview.md)

-	[日付フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-date-fields)

-	[数値フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-numeric-fields)

-	[文字列フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-string-fields)

## Slingshot AI でダッシュボードを生成する

>[!Note]
> Slingshot AI は元のダッシュボードに変更を加えることができません。提供された情報に基づいて、新しい変更されたダッシュボードのみを作成します。

ダッシュボードを生成するには:

- ゴールド認定ダッシュボードを使用します。

- ダッシュボードを会話に添付します。

- データ ソースを Slingshot AI の会話に添付します。

次の種類のデータ ソースを使用するダッシュボードを生成できます:

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

今月の各製品の売上をパイ チャートで表示したいとします。

これを達成するには、次のことができます:

1. Slingshot AI が生成するダッシュボードを詳細に説明して、新しい Slingshot AI 会話を始めます。データを抽出したいダッシュボードのタイトル、日付フィルターがカバーする期間、および Slingshot AI が情報を表示するために使用するグラフの種類を指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Example of user description message for Slingshot AI dashboard generation" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べて、必要な情報を持つダッシュボードを見つけます。次に、そのデータを抽出してダッシュボードにまとめます。また、ダッシュボードが表示する内容についての詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="Example of AI-generated dashboard from gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。また、ダッシュボードをクリックまたはタップして最大化ビューで開くことができます。

### 添付されたダッシュボード

Slingshot AI がゴールド認定ダッシュボードを調べる代わりに、添付されたダッシュボードを直接調べてそのデータを使用して新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したいとします。これを達成するには、次のことができます:

1. Slingshot AI が生成するダッシュボードを詳細に説明して、新しい Slingshot AI 会話を始めます。この場合、過去 7 日間の生産ユニット数と損失ユニット数を比較するよう依頼できます。

   <img src="../images/description-ai-generation.png" alt="Description example for AI dashboard generation" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して、**[送信]** をクリックまたはタップします。

3. AI はダッシュボードを調べて情報を抽出します。次に、ダッシュボードを生成するとともに、ダッシュボードが表示する内容についての詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard.png" alt="Example of AI-generated dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。また、ダッシュボードをクリックまたはタップして最大化ビューで開くことができます。

### 添付されたデータ ソース

特定のデータ ソースを念頭においている場合は、会話に直接添付して、Slingshot AI にそれを使用してダッシュボードを生成するよう依頼できます。

>[!Note] 新しいデータ ソースから初めてダッシュボードを生成する場合は、Slingshot AI がリクエストを実行するために数分後に AI 応答を更新する必要があります。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したいとします。これを達成するには、次のことができます:

1. Slingshot AI が生成するダッシュボードを詳細に説明して、新しい Slingshot AI 会話を始めます。過去 7 日間の生産ユニット数と損失ユニット数を比較したいことを指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="Description example for creating an AI-generated dashboard" class="responsive-img"/>

2. 会話にデータ ソースをドラッグ アンド ドロップして添付し、**[送信]** をクリックまたはタップします。

3. Slingshot AI はデータ ソースからデータを抽出して新しいダッシュボードを作成します。また、ダッシュボードが表示する内容についての詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="Example of AI-generated dashboard from data source" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。また、ダッシュボードをクリックまたはタップして最大化ビューで開くことができます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードに変更を加えることができません。提供された情報に基づいて、新しい変更されたダッシュボードのみを作成します。

Slingshot AI を使用して編集できるのは、次の種類のデータ ソースを使用するダッシュボードのみです:

-	Amazon Athena

-	CSV ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Excel ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

ダッシュボードを編集するには:

- ゴールド認定ダッシュボードを使用します。

- ダッシュボードを会話に添付します。

>[!Note] Slingshot AI が生成したダッシュボードも編集できます。

### ゴールド認定ダッシュボード

ダッシュボードを生成するのと同じ方法でダッシュボードを編集できます。Slingshot AI の助けを借りて[ゴールド認定](certifications.md)ダッシュボードを検索し、その特定のダッシュボードをどのように変更したいかを AI に説明します。Slingshot AI は要求された変更を加えます。

**例:**

今月の製品別収益を示すダッシュボードに棒グラフを追加したいとします。これを達成するには、次のことができます:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明して、新しい Slingshot AI 会話を始めます。この場合、今月の製品別収益を示すダッシュボードに棒グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="Description example for AI modification on a gold-certified dashboard" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べて、編集したいダッシュボードを見つけます。次に、要求された変更を加えます。その後、更新されたバージョンのダッシュボードを表示するとともに、加えた変更についての詳細な説明も提供します。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="Example of AI modified gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードをクリックまたはタップして最大化ビューで開き、変更を確認できます。また、ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。

### 添付されたダッシュボード

特定のダッシュボードを念頭においている場合は、Slingshot AI の会話に添付して Slingshot AI に編集を依頼できます。

**例**:

今月の製品別収益を示すダッシュボードに棒グラフを追加したいとします。これを達成するには、次のことができます:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明して、新しい Slingshot AI 会話を始めます。この場合、今月の製品別収益を示すダッシュボードに棒グラフを追加したいことを指定できます。

2. ダッシュボードを会話に添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

3. 準備ができたら、**[送信]** をクリックまたはタップします。

4. Slingshot AI はダッシュボードを分析して要求された変更を加えます。その後、更新されたバージョンのダッシュボードを表示するとともに、加えた変更についての詳細な説明も提供します。

   <img src="../images/ai-modified-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

5. ダッシュボードをクリックまたはタップして最大化ビューで開き、変更を確認できます。また、ダッシュボードのコピーを場所に保存したり、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。

## Slingshot AI でダッシュボードとビジュアライゼーションを分析する

ダッシュボードまたはビジュアライゼーションを分析するには:

- ゴールド認定ダッシュボードを使用します。

- ダッシュボードを会話に添付します。

>[!Note] すべての種類のデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用して、組織に保存されている[ゴールド認定](certifications.md)ダッシュボードとそのビジュアライゼーションを分析できます。

**例**:

2024 年と 2025 年の入院患者と外来患者の合計数を確認したいとします。そのためには、次のことができます:

1. 詳細な質問をして新しい Slingshot AI 会話を始めます。たとえば、「2024 年と 2025 年に入院患者と外来患者は合計何人いましたか?」と質問できます。

2. **[送信]** ボタンをクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索して、必要な情報を持つダッシュボードを分析します。次に、詳細な分析と要求された情報を示すダッシュボードを提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

### 添付されたダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードを念頭においている場合は、会話に直接添付できます。

**例**:

2024 年と 2025 年の入院患者と外来患者の合計数を確認したいとします。そのためには、Slingshot AI がゴールド認定ダッシュボードを調べる代わりに、念頭にあるダッシュボードを使用するよう直接指示することができます:

1. 詳細な質問をして新しい Slingshot AI 会話を始めます。たとえば、「2024 年と 2025 年に入院患者と外来患者は合計何人いましたか?」と質問できます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="Dashboard attached for AI analysis" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して、**[送信]** をクリックまたはタップします。

3. Slingshot AI はダッシュボードからデータを抽出し、要求された情報とともに既存のダッシュボード (必要に応じて変更されたバージョン) を表示し、実行した分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用しているダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] ダッシュボードを認定できるのは、組織のオーナーによって承認されたユーザーのみです。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを使用して Slingshot AI をトレーニングできます。これにより、AI はダッシュボードをデータの生成、編集、分析に使用できるようになります。

ダッシュボードをゴールド認定するには:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリックまたはタップし、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="Gold badge selection" class="responsive-img"/>

3. ダッシュボードが認定されると、**AI トレーニング** オプションが有効になります。Slingshot AI はダッシュボードとそのビジュアライゼーションの説明を生成します。これらの説明は、Slingshot AI がダッシュボードの生成、編集、分析を行うのに役立ちます。

## AI トレーニングの管理

将来の問い合わせで Slingshot AI が最新の情報を提供できるように、AI が生成した説明をいつでも更新できます。

ダッシュボードとそのビジュアライゼーションの AI が生成した説明を確認するには:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

3. **[AI トレーニングの管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="Manage AI training option" class="responsive-img"/>

4. *AI トレーニング情報*ダイアログが表示され、各説明を確認できます。ここで次のことができます:

-	特定のビジュアライゼーションまたはダッシュボード自体のトレーニングをクリアします。

-	すべてのトレーニングをクリアします。これにより、ダッシュボード内のすべての説明が削除されます。

-	各説明を更新して変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog" class="responsive-img"/>

各ビジュアライゼーションの説明のみを更新する場合は、次のことができます:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/dashboard-edit-button.png" alt="Dashboard edit button" class="responsive-img"/>

2. ビジュアライゼーションの **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/visualization-edit-button.png" alt="Visualization edit button" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *AI セクション*までスクロールします。

5. **[編集]** をクリックまたはタップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI training edit button" class="responsive-img"/>

6. *Slingshot AI トレーニング*ダイアログが表示されます。ここで情報を更新できます。準備ができたら、**[更新]** をクリックまたはタップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog example" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリックまたはタップして変更を保存し、もう一度クリックしてダッシュボードを更新します。

## AI トレーニングの無効化

組織内の特定のダッシュボードを Slingshot AI のトレーニングに使用したくない場合は、次のことができます:

1. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

   <img src="../images/ai-training-info-button.png" alt="AI training info button" class="responsive-img"/>

2. **[AI トレーニング]** をオフに切り替えます。

    <img src="../images/ai-training-toggle-button.png" alt="AI training toggle button" class="responsive-img"/>

## よくある質問

**Q:** **Slingshot AI が生成したダッシュボードを編集できますか?**

**A:** はい、Slingshot AI が生成したダッシュボードはいつでも編集できます。

**Q:** **AI が生成したダッシュボードを他のチーム メンバーと共有できますか?**

**A:** はい、Slingshot AI 応答のダッシュボードのオーバーフロー メニューを開いて、生産性向上機能のいずれかを使用するか、ダッシュボードへのリンクを直接コピーできます。

**Q:** **ゴールド認定ダッシュボードとは何ですか? また、Slingshot AI がそれを使用するのはなぜですか?**

**A:** ゴールド認定ダッシュボードは、信頼性が高く、検証済みの情報のみを含むダッシュボードです。そのため、Slingshot AI はゴールド認定ダッシュボードのみを使用します。

**Q:** **Slingshot AI が生成できるグラフの種類に制限はありますか?**

**A:** Slingshot AI は次のグラフの種類を使用してダッシュボードを生成できます:

- すべてのカテゴリ グラフ

- バブル チャート

- KPI vs ターゲット チャート

- KPI vs 時間チャート

- ピボット チャート

- テキスト チャート

- テキスト ビュー チャート

- ツリー マップ チャート
