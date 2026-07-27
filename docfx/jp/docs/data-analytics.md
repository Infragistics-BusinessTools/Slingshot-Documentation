---
title: AI データ アナリティクス
description: Slingshot AI を使用してダッシュボードを生成し、データを分析し、自然言語による会話でビジネス データからインサイトを得る方法を説明します。
_language: ja
---

# Slingshot AI データ アナリティクス

Slingshot AI を活用した Analytics を使用すると、従来のアナリティクスの複雑さを排除しながら、より速く機会を発見し、データに基づく意思決定を行うことができます。

## Slingshot AI データ アナリティクスとは何ですか?

Slingshot AI Analytics は、利用可能なデータとビジネス コンテキストを使用して、情報を直接ダッシュボードに変換し、複雑なデータを理解しやすくします。

ダッシュボードとビジュアライゼーションを生成、編集、分析し、実用的なインサイトを提供できます。

>[!Note]
> Slingshot AI データ アナリティクス機能は、[Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログへのアクセス

*[通知]* の横にある **[Slingshot AI]** ボタンをクリック/タップすると、*Slingshot AI* ダイアログが表示されます。

左側には以下が表示されます。

A. 過去の会話を参照する。

B. 新しい会話を作成する。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI ダイアログ" class="responsive-img"/>

右側には **[チャット]** と **[ドキュメント]** の 2 つのセクションが表示されます。

**[チャット]** を開くと、以下の操作ができます。

C. 既存の会話を続ける。

D. Slingshot AI メッセージを評価してフィードバックを提供する。

E. Slingshot AI メッセージを更新して新しいメッセージを生成する。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI ダイアログのチャット セクション" class="responsive-img"/>

**[ドキュメント]** を開くと、Slingshot AI が問い合わせに基づいて生成したすべてのダッシュボードと使用されたデータ ソースのリストが表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI ダイアログのドキュメント セクション" class="responsive-img"/>

各 Slingshot AI の応答には以下が含まれます。

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード自体。

Slingshot AI 応答のオーバーフロー メニューを使用して以下の操作ができます。

- タスクの作成

- メッセージのコピー

- リンクのコピー

- メッセージのブックマーク

各ダッシュボードにも以下のオプションを含むオーバーフロー メニューがあります。

- ダッシュボードをピンに追加する

- チャットを開始する

- タスクを作成する

- ディスカッションを開始する

- ダッシュボードを開く

- ダッシュボードを新しいウィンドウで開く (デスクトップ アプリ)

- ダッシュボード リンクをコピーする

- ダッシュボードをブックマークする

- ダッシュボードを他のユーザーと共有する

<img src="../images/slingshot-ai-dashboard-overflow-menu.png" alt="Slingshot AI ダッシュボードのオーバーフロー メニュー" class="responsive-img"/>

>[!Note]
> 組織、ワークスペース、プロジェクト、または *My Analytics* にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリック/タップします。

## 役立つヒント

Slingshot AI から最良の結果を得るには、以下を推奨します。

-	データ カタログに既に存在する名前と概念を使用して会話を始める。

-	ビジネス固有の用語を使用する。

-	会話全体で一貫した言葉遣いを保つ。

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
> Slingshot AI は元のダッシュボードを変更することはできません。提供された情報に基づいて新しい変更されたダッシュボードを作成するだけです。

以下の方法でダッシュボードを生成できます。

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

- データ ソースを Slingshot AI 会話に添付する。

以下のタイプのデータ ソースを使用するダッシュボードを生成できます。

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

[ゴールド認定](certifications.md)ダッシュボードは、迅速かつ効率的なビジネス上の意思決定に使用できる信頼性の高い検証済み情報を提供します。

**例:**

今月の製品別売上数をパイ チャートで表示したい場合:

1. 生成したいダッシュボードを詳細に説明した新しい Slingshot AI 会話を始めます。データを抽出するダッシュボードのタイトル、日付フィルターがカバーする期間、Slingshot AI が情報を表示するために使用するグラフの種類を指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Slingshot AI ダッシュボード生成のユーザー説明メッセージの例" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べて、必要な情報があるダッシュボードを見つけます。次に、そのデータを抽出してダッシュボードにまとめます。また、ダッシュボードが表示する内容についての詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="ゴールド認定ダッシュボードから AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付ダッシュボード

Slingshot AI がゴールド認定ダッシュボードを調べる代わりに、添付されたダッシュボードを直接参照して、そのデータを使用して新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産量と損失量を比較したい場合:

1. 生成したいダッシュボードを詳細に説明した新しい Slingshot AI 会話を始めます。この場合、過去 7 日間の生産量と損失量を比較するよう求めることができます。

   <img src="../images/description-ai-generation.png" alt="AI ダッシュボード生成の説明例" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して **[送信]** をクリック/タップします。

3. AI がダッシュボードを調べて情報を抽出します。次に、ダッシュボードが表示する内容についての詳細な説明とともにダッシュボードを生成します。

   <img src="../images/ai-generated-dashboard.png" alt="AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付データ ソース

特定のデータ ソースを念頭に置いている場合は、会話に直接添付して、Slingshot AI にそれを使用してダッシュボードを生成するよう求めることができます。

>[!Note] 初めて新しいデータ ソースからダッシュボードを生成する場合、Slingshot AI がリクエストを処理するために数分後に AI の応答を更新する必要があります。

**例:**

過去 7 日間の生産量と損失量を比較したい場合:

1. 生成したいダッシュボードを詳細に説明した新しい Slingshot AI 会話を始めます。過去 7 日間の生産量と損失量を比較するよう指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="AI が生成したダッシュボード作成の説明例" class="responsive-img"/>

2. データ ソースを会話にドラッグ アンド ドロップして添付し、**[送信]** をクリック/タップします。

3. Slingshot AI がデータ ソースからデータを抽出して新しいダッシュボードを作成します。また、ダッシュボードが表示する内容についての詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="データ ソースから AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードを変更することはできません。提供された情報に基づいて新しい変更されたダッシュボードを作成するだけです。

Slingshot AI を使用して編集できるのは、以下のタイプのデータ ソースを使用するダッシュボードのみです。

-	Amazon Athena

-	CSV ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Excel ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

以下の方法でダッシュボードを編集できます。

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] Slingshot AI が生成したダッシュボードも編集できます。

### ゴールド認定ダッシュボード

新しいダッシュボードを生成するのと同じ方法でダッシュボードを編集できます。Slingshot AI を使用して[ゴールド認定](certifications.md)ダッシュボードを検索し、そのダッシュボードをどのように変更したいかを AI に説明します。Slingshot AI は要求された変更を行います。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明した新しい Slingshot AI 会話を始めます。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="ゴールド認定ダッシュボードの AI 変更の説明例" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べて、どのダッシュボードを編集したいかを確認します。次に要求された変更を行い、更新されたバージョンのダッシュボードと行った変更についての詳細な説明を表示します。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="AI が変更したゴールド認定ダッシュボードの例" class="responsive-img"/>

4. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。また、ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。

### 添付ダッシュボード

特定のダッシュボードを念頭に置いている場合は、Slingshot AI 会話に添付して Slingshot AI に編集を求めることができます。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明した新しい Slingshot AI 会話を始めます。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

2. ダッシュボードを会話に添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="AI が変更したダッシュボードの例" class="responsive-img"/>

3. 準備ができたら、**[送信]** をクリック/タップします。

4. Slingshot AI がダッシュボードを分析して要求された変更を行います。その後、更新されたバージョンのダッシュボードと行った変更についての詳細な説明を表示します。

   <img src="../images/ai-modified-dashboard.png" alt="AI が変更したダッシュボードの例" class="responsive-img"/>

5. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。また、ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。

## Slingshot AI でダッシュボードとビジュアライゼーションを分析する

以下の方法でダッシュボードまたはビジュアライゼーションを分析できます。

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] すべてのタイプのデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用して、組織に保存された[ゴールド認定](certifications.md)ダッシュボードとそのビジュアライゼーションを分析できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したい場合:

1. 詳細な質問をした新しい Slingshot AI 会話を始めます。たとえば、*"2024 年と 2025 年の入院患者と外来患者の合計数はどれくらいですか?"* と聞くことができます。

2. **[送信]** ボタンをクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索して、必要な情報を持つダッシュボードを分析します。次に、リクエストされた情報を表すダッシュボードとともに詳細な分析を提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="AI ダッシュボード分析の例" class="responsive-img"/>

### 添付ダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードを念頭に置いている場合は、会話に直接添付できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したい場合。Slingshot AI がゴールド認定ダッシュボードを調べる代わりに、以下の手順で念頭にあるダッシュボードを直接使用するよう指示できます。

1. 詳細な質問をした新しい Slingshot AI 会話を始めます。たとえば、*"2024 年と 2025 年の入院患者と外来患者の合計数はどれくらいでしたか?"* と聞くことができます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="AI 分析のために添付されたダッシュボード" class="responsive-img"/>

2. 念頭にあるダッシュボードを添付して **[送信]** をクリック/タップします。

3. Slingshot AI がダッシュボードからデータを抽出し、リクエストされた情報とともに既存のダッシュボード (必要に応じて変更されたバージョン) を表示し、実行された分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="AI ダッシュボード分析の例" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用するダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] ダッシュボードを認定できるのは、組織のオーナーが承認したユーザーのみです。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを Slingshot AI のトレーニングに使用できます。これにより、AI がデータの生成、編集、分析にそのダッシュボードを使用できるようになります。

ダッシュボードをゴールド認定するには:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリック/タップして、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="ゴールド バッジの選択" class="responsive-img"/>

3. ダッシュボードが認定されると、**[AI トレーニング]** オプションが有効になります。Slingshot AI がダッシュボードとそのビジュアライゼーションの説明を生成します。これらの説明は、Slingshot AI がダッシュボードの生成、編集、分析を行うのに役立ちます。

## AI トレーニングの管理

Slingshot AI が将来の問い合わせで最新の情報を提供できるよう、AI が生成した説明をいつでも更新できます。

ダッシュボードとそのビジュアライゼーションの AI が生成した説明を確認するには:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリック/タップします。

3. **[AI トレーニングの管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="AI トレーニングの管理オプション" class="responsive-img"/>

4. *AI トレーニング情報* ダイアログが表示され、各説明を確認できます。ここでは以下の操作ができます。

-	特定のビジュアライゼーションまたはダッシュボード自体のトレーニングをクリアする。

-	すべてのトレーニングをクリアする。これによりダッシュボード内のすべての説明が削除されます。

-	各説明を更新して変更を保存する。

    <img src="../images/ai-training-info-dialog.png" alt="AI トレーニング情報ダイアログ" class="responsive-img"/>

各ビジュアライゼーションの説明のみを更新するには:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリック/タップします。

   <img src="../images/dashboard-edit-button.png" alt="ダッシュボードの編集ボタン" class="responsive-img"/>

2. ビジュアライゼーションの **[編集]** ボタンをクリック/タップします。

   <img src="../images/visualization-edit-button.png" alt="ビジュアライゼーションの編集ボタン" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *AI セクション*までスクロールします。

5. **[編集]** をクリック/タップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI トレーニングの編集ボタン" class="responsive-img"/>

6. *Slingshot AI トレーニング* ダイアログが表示されます。ここで情報を更新できます。準備ができたら、**[更新]** をクリック/タップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI トレーニング情報ダイアログの例" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリック/タップして変更を保存し、もう一度クリック/タップしてダッシュボードを更新します。

## AI トレーニングの無効化

組織内の特定のダッシュボードを Slingshot AI のトレーニングに使用したくない場合:

1. **[AI トレーニング情報]** ボタンをクリック/タップします。

   <img src="../images/ai-training-info-button.png" alt="AI トレーニング情報ボタン" class="responsive-img"/>

2. **[AI トレーニング]** をオフに切り替えます。

    <img src="../images/ai-training-toggle-button.png" alt="AI トレーニングの切り替えボタン" class="responsive-img"/>

## よくある質問

**Q:** **Slingshot AI が生成したダッシュボードを編集できますか?**

**A:** はい、Slingshot AI が生成したダッシュボードはいつでも編集できます。

**Q:** **AI が生成したダッシュボードを他のチーム メンバーと共有できますか?**

**A:** はい、Slingshot AI 応答のダッシュボードのオーバーフロー メニューを開いて、生産性向上機能のいずれかを使用するか、ダッシュボードのリンクを直接コピーできます。

**Q:** **ゴールド認定ダッシュボードとは何ですか? なぜ Slingshot AI はそれを使用するのですか?**

**A:** ゴールド認定ダッシュボードは、信頼性が高く、検証済みの情報のみを含むダッシュボードです。そのため、Slingshot AI はゴールド認定ダッシュボードのみを参照します。

**Q:** **Slingshot AI が生成できるグラフの種類に制限はありますか?**

**A:** Slingshot AI は以下のグラフ タイプを使用してダッシュボードを生成できます。

- すべてのカテゴリ グラフ

- バブル チャート

- KPI 対目標グラフ

- KPI 対時間グラフ

- ピボット グラフ

- テキスト グラフ

- テキスト ビュー グラフ

- ツリーマップ グラフ
