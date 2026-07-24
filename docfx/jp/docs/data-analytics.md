---
title: AI データ分析
description: Slingshot AI を使用してダッシュボードを生成し、データを分析し、自然言語による会話でビジネス データからインサイトを得る方法について説明します。
---
# Slingshot AI データ分析

Slingshot AI データ分析を使用すると、従来のアナリティクスの複雑さを排除しながら、より迅速に機会を見つけてデータ主導の意思決定を行うことができます。

## Slingshot AI データ分析とは？

Slingshot AI アナリティクスは利用可能なデータとビジネス コンテキストを使用して、情報を直接ダッシュボードに変換し、複雑なデータを理解しやすくします。

ダッシュボードとビジュアライゼーションの生成、編集、分析が可能で、実行可能なインサイトを提供します。

>[!Note]
> Slingshot AI データ分析機能は [Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログへのアクセス

*通知*の横にある **[Slingshot AI]** ボタンをクリック/タップすると、*Slingshot AI* ダイアログが表示されます。

左側では以下ができます:

A.	過去の会話を参照する。

B.	新しい会話を作成する。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI dialog" class="responsive-img"/>

右側には **[チャット]** と **[ドキュメント]** の 2 つのセクションが表示されます。

**[チャット]** を開くと以下ができます:

C.	既存の会話を続ける。

D. Slingshot AI メッセージを評価してフィードバックする。

E. Slingshot AI メッセージを更新して新しいメッセージを生成する。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI dialog chat section" class="responsive-img"/>

**[ドキュメント]** を開くと、Slingshot AI が問い合わせに基づいて生成したすべてのダッシュボードと使用したデータ ソースのリストが表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI dialog documents section" class="responsive-img"/>

各 Slingshot AI レスポンスには以下が含まれます:

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード自体。

Slingshot AI レスポンスのオーバーフロー メニューを使用して以下ができます:

- タスクを作成する

- メッセージをコピーする

- リンクをコピーする

- メッセージをブックマークする

各ダッシュボードにもオーバーフロー メニューがあり、以下のオプションがあります:

- ダッシュボードをピンに追加する

- チャットを開始する

- タスクを作成する

- ディスカッションを開始する

- ダッシュボードを開く

- ダッシュボードを新しいウィンドウで開く（デスクトップ アプリ）

- ダッシュボード リンクをコピーする

- ダッシュボードをブックマークする

- ダッシュボードを他のユーザーと共有する

<img src="../images/slingshot-ai-dashboard-overflow-menu.png" alt="Slingshot AI dashboard overflow menu" class="responsive-img"/>

>[!Note]
> 組織、ワークスペース、プロジェクト、または*マイ アナリティクス*にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリック/タップします。

## 便利なヒント

Slingshot AI から最良の結果を得るには、以下を推奨します:

-	データ カタログにすでにある名前と概念を使用して会話を開始する。

-	ビジネス固有の用語を使用する。

-	会話全体で一貫した言葉遣いを維持する。

-	過去の問い合わせへの参照を含むフォローアップの質問を使用する。

## 共通用語

Slingshot AI が認識する共通用語:

-	[グローバル フィルター](./analytics/filters/dashboard-filters.md)（ダッシュボード フィルター）

-	[ウィジェット フィルター](./analytics/data-visualizations/fields/field-filters-rules.md)（データ フィルター）

-	[計算フィールド関数](./analytics/data-visualizations/fields/calculated-fields/overview.md)（ポスト計算フィールドを除く）（表形式ソースのみ）

-	[ビジュアライゼーション タイプ](./analytics/data-visualizations/overview.md)

-	[日付フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-date-fields)

-	[数値フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-numeric-fields)

-	[文字列フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-string-fields)

## Slingshot AI でダッシュボードを生成する

>[!Note]
> Slingshot AI は元のダッシュボードに変更を加えることはできません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

以下の方法でダッシュボードを生成できます:

- ゴールド認定ダッシュボードを使用する。

- 会話にダッシュボードを添付する。

- データ ソースを Slingshot AI の会話に添付する。

以下のタイプのデータ ソースを使用するダッシュボードを生成できます:

-	Amazon Athena

-	CSV ファイル（[Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ）

-	Excel ファイル（[Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ）

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

### ゴールド認定ダッシュボード

[ゴールド認定](certifications.md)ダッシュボードは、迅速かつ効率的なビジネス上の意思決定に使用できる信頼性の高い検証済みの情報を提供します。

**例:**

今月の各製品の売上数を円グラフで表示したい場合:

1. 生成したいダッシュボードを詳細に説明する新しい Slingshot AI の会話を開始します。データを抽出したいダッシュボードのタイトル、日付フィルターでカバーする期間、および Slingshot AI が情報を表示するために使用するグラフ タイプを指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Example of user description message for Slingshot AI dashboard generation" class="responsive-img"/>

2. 準備ができたら **[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して必要な情報を持つダッシュボードを探します。次に、そのデータを抽出してダッシュボードにまとめます。また、ダッシュボードの表示内容についての詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="Example of AI-generated dashboard from gold-certified dashboard" class="responsive-img"/>

4. 場所にダッシュボードのコピーを保存するか、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付ダッシュボード

Slingshot AI がゴールド認定ダッシュボードを確認する代わりに、添付されたダッシュボードを直接参照してそのデータを使用して新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産数と損失数を比較したい場合:

1. 生成したいダッシュボードを詳細に説明する新しい Slingshot AI の会話を開始します。この場合、過去 7 日間の生産数と損失数を比較するよう依頼できます。

   <img src="../images/description-ai-generation.png" alt="Description example for AI dashboard generation" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して **[送信]** をクリック/タップします。

3. AI はダッシュボードを確認して情報を抽出します。次に、ダッシュボードの表示内容についての詳細な説明とともにダッシュボードを生成します。

   <img src="../images/ai-generated-dashboard.png" alt="Example of AI-generated dashboard" class="responsive-img"/>

4. 場所にダッシュボードのコピーを保存するか、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付データ ソース

特定のデータ ソースを使用したい場合は、会話に直接添付して Slingshot AI にそれを使用してダッシュボードを生成するよう依頼できます。

>[!Note] 新しいデータ ソースから初めてダッシュボードを生成する場合は、Slingshot AI がリクエストを処理するまで数分後に AI レスポンスを更新する必要があります。

**例:**

過去 7 日間の生産数と損失数を比較したい場合:

1. 生成したいダッシュボードを詳細に説明する新しい Slingshot AI の会話を開始します。過去 7 日間の生産数と損失数を比較したいことを指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="Description example for creating an AI-generated dashboard" class="responsive-img"/>

2. データ ソースを会話にドラッグ アンド ドロップして添付し、**[送信]** をクリック/タップします。

3. Slingshot AI はデータ ソースからデータを抽出して新しいダッシュボードを作成します。また、ダッシュボードの表示内容についての詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="Example of AI-generated dashboard from data source" class="responsive-img"/>

4. 場所にダッシュボードのコピーを保存するか、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりできます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードに変更を加えることはできません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

Slingshot AI を使用して編集できるダッシュボードは、以下のタイプのデータ ソースを使用するダッシュボードのみです:

-	Amazon Athena

-	CSV ファイル（[Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ）

-	Excel ファイル（[Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ）

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

以下の方法でダッシュボードを編集できます:

- ゴールド認定ダッシュボードを使用する。

- 会話にダッシュボードを添付する。

>[!Note] Slingshot AI で生成されたダッシュボードも編集できます。

### ゴールド認定ダッシュボード

ダッシュボードの編集は新しいダッシュボードの生成と同じ方法で行えます。Slingshot AI の助けを借りて[ゴールド認定](certifications.md)ダッシュボードを検索し、そのダッシュボードをどのように変更したいかを AI に説明します。Slingshot AI がリクエストされた変更を行います。

**例:**

今月の製品別収益を示すダッシュボードに縦棒グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明する新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="Description example for AI modification on a gold-certified dashboard" class="responsive-img"/>

2. 準備ができたら **[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して編集したいダッシュボードを特定します。次に、リクエストされた変更を行います。その後、更新されたダッシュボードを表示し、行った変更についての詳細な説明も提供します。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="Example of AI modified gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。場所にダッシュボードのコピーを保存するか、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりすることもできます。

### 添付ダッシュボード

特定のダッシュボードを念頭にある場合は、Slingshot AI の会話に添付して編集を依頼できます。

**例:**

今月の製品別収益を示すダッシュボードに縦棒グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明する新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいことを指定できます。

2. ダッシュボードを会話に添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

3. 準備ができたら **[送信]** をクリック/タップします。

4. Slingshot AI はダッシュボードを分析してリクエストされた変更を行います。その後、更新されたダッシュボードを表示し、行った変更についての詳細な説明も提供します。

   <img src="../images/ai-modified-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

5. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。場所にダッシュボードのコピーを保存するか、オーバーフロー メニューを開いて共有するメンバーを選択したり、ピン、チャット、タスク、またはディスカッションに添付したりすることもできます。

## Slingshot AI でダッシュボードとビジュアライゼーションを分析する

以下の方法でダッシュボードまたはビジュアライゼーションを分析できます:

- ゴールド認定ダッシュボードを使用する。

- 会話にダッシュボードを添付する。

>[!Note] すべてのタイプのデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用して、組織内に保存されている[ゴールド認定](certifications.md)ダッシュボードとそのビジュアライゼーションを分析できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計を確認したい場合:

1. 詳細な質問を含む新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計は何人でしたか？」* と質問できます。

2. **[送信]** ボタンをクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索して必要な情報を持つダッシュボードを分析します。次に、詳細な分析とリクエストされた情報を表すダッシュボードを提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

### 添付ダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードを念頭にある場合は、会話に直接添付できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計を確認したい場合、Slingshot AI がゴールド認定ダッシュボードを確認する代わりに、念頭にあるダッシュボードを直接使用するよう指示するには:

1. 詳細な質問を含む新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計は何人でしたか？」* と質問できます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="Dashboard attached for AI analysis" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して **[送信]** をクリック/タップします。

3. Slingshot AI はダッシュボードからデータを抽出し、リクエストされた情報を含む既存のダッシュボード（必要に応じて変更されたバージョン）を表示して、実行された分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用しているダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] ダッシュボードを認定できるのは、組織のオーナーから承認を受けたユーザーのみです。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを Slingshot AI のトレーニングに使用して、ダッシュボードのデータの生成、編集、分析に活用できます。

ダッシュボードをゴールド認定するには:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリック/タップして、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="Gold badge selection" class="responsive-img"/>

3. ダッシュボードが認定されると、**AI トレーニング** オプションが有効になります。Slingshot AI はダッシュボードとそのビジュアライゼーションの説明を生成します。これらの説明は、Slingshot AI がダッシュボードの生成、編集、分析を行うのに役立ちます。

## AI トレーニングの管理

Slingshot AI が将来の問い合わせで最新の情報を提供できるよう、AI が生成した説明はいつでも更新できます。

ダッシュボードとそのビジュアライゼーションの AI が生成した説明を確認するには:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリック/タップします。

3. **[AI トレーニングの管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="Manage AI training option" class="responsive-img"/>

4. *AI トレーニング情報*ダイアログが表示され、各説明を確認できます。ここでは以下ができます:

-	特定のビジュアライゼーションまたはダッシュボード自体のトレーニングをクリアする。

-	すべてのトレーニングをクリアする。これによりダッシュボードのすべての説明が削除されます。

-	各説明を更新して変更を保存する。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog" class="responsive-img"/>

各ビジュアライゼーションの説明のみを更新するには:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリック/タップします。

   <img src="../images/dashboard-edit-button.png" alt="Dashboard edit button" class="responsive-img"/>

2. ビジュアライゼーションの **[編集]** ボタンをクリック/タップします。

   <img src="../images/visualization-edit-button.png" alt="Visualization edit button" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *AI セクション*までスクロールします。

5. **[編集]** をクリック/タップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI training edit button" class="responsive-img"/>

6. *Slingshot AI トレーニング*ダイアログが表示されます。ここで情報を更新できます。準備ができたら **[更新]** をクリック/タップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog example" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリック/タップして変更を保存し、もう一度クリックしてダッシュボードを更新します。

## AI トレーニングを無効にする

組織内の特定のダッシュボードを Slingshot AI のトレーニングに使用したくない場合は:

1. **[AI トレーニング情報]** ボタンをクリック/タップします。

   <img src="../images/ai-training-info-button.png" alt="AI training info button" class="responsive-img"/>

2. **AI トレーニング**をオフにトグルします。

    <img src="../images/ai-training-toggle-button.png" alt="AI training toggle button" class="responsive-img"/>

## よくある質問

**Q:** **Slingshot AI で生成されたダッシュボードを編集できますか？**

**A:** はい、Slingshot AI で生成されたダッシュボードはいつでも編集できます。

**Q:** **AI で生成されたダッシュボードを他のチーム メンバーと共有できますか？**

**A:** はい、Slingshot AI レスポンスのダッシュボードのオーバーフロー メニューを開き、生産性向上機能のいずれかを使用するか、ダッシュボードへのリンクを直接コピーできます。

**Q:** **ゴールド認定ダッシュボードとは何ですか？Slingshot AI がそれを使用する理由は？**

**A:** ゴールド認定ダッシュボードとは、信頼性が高く、検証済みの情報のみを含むダッシュボードです。これが Slingshot AI がゴールド認定ダッシュボードのみを参照する理由です。

**Q:** **Slingshot AI が生成できるグラフの種類に制限がありますか？**

**A:** Slingshot AI は以下のグラフ タイプを使用してダッシュボードを生成できます:

- すべてのカテゴリ グラフ

- バブル グラフ

- KPI vs 目標グラフ

- KPI vs 時間グラフ

- ピボット グラフ

- テキスト グラフ

- テキスト ビュー グラフ

- ツリーマップ グラフ
