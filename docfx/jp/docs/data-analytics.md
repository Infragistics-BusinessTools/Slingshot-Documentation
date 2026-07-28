---
title: AI データ アナリティクス
description: Slingshot AI を使用して自然言語での会話を通じてダッシュボードを生成し、データを分析し、ビジネス データからインサイトを取得する方法について説明します。
_language: ja
---
# Slingshot AI データ アナリティクス

Slingshot AI を活用したアナリティクスにより、従来のアナリティクスの複雑さを排除しながら、より速くチャンスを見つけ、データに基づいた意思決定を行うことができます。

## Slingshot AI データ アナリティクスとは?

Slingshot AI アナリティクスは、利用可能なデータとビジネス コンテキストを使用して、情報を直接ダッシュボードに変換し、複雑なデータを理解しやすくします。

ダッシュボードと表示形式を生成、編集、分析し、実用的なインサイトを提供できます。

>[!Note]
> Slingshot AI データ アナリティクス機能は [Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログにアクセスする

*通知* の横にある **[Slingshot AI]** ボタンをクリック/タップすると、*Slingshot AI* ダイアログが表示されます。

左側では以下のことができます:

A.	以前の会話を参照する。

B.	新しい会話を作成する。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI dialog" class="responsive-img"/>

右側には **[チャット]** と **[ドキュメント]** の 2 つのセクションがあります。

**[チャット]** を開くと、以下のことができます:

C.	既存の会話を続ける。

D. Slingshot AI メッセージを評価してフィードバックを提供する。

E. Slingshot AI メッセージを更新して新しいメッセージを生成する。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI dialog chat section" class="responsive-img"/>

**[ドキュメント]** を開くと、問い合わせに基づいて Slingshot AI が生成したすべてのダッシュボードと使用したデータ ソースの一覧が表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI dialog documents section" class="responsive-img"/>

各 Slingshot AI の応答には以下が含まれます:

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード本体。

Slingshot AI の応答のオーバーフロー メニューを使用して以下のことができます:

- タスクを作成する

- メッセージをコピーする

- リンクをコピーする

- メッセージをブックマークする

各ダッシュボードにも以下のオプションを持つオーバーフロー メニューがあります:

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
> 組織、ワークスペース、プロジェクト、または *マイ アナリティクス* にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリック/タップします。

## 便利なヒント

Slingshot AI から最良の結果を得るために、以下をお勧めします:

-	データ カタログに既に存在する名前と概念を使用して会話を始める。

-	ビジネス固有の用語を使用する。

-	会話全体を通じて言葉の一貫性を保つ。

-	過去の問い合わせへの参照を含むフォローアップ質問を使用する。

## 一般的な用語

Slingshot AI が認識する一般的な用語:

-	[グローバル フィルター](./analytics/filters/dashboard-filters.md) (ダッシュボード フィルター)

-	[ウィジェット フィルター](./analytics/data-visualizations/fields/field-filters-rules.md) (データ フィルター)

-	[計算フィールド関数](./analytics/data-visualizations/fields/calculated-fields/overview.md) (ポスト計算フィールドを除く) (表形式のソースのみ)

-	[表示形式タイプ](./analytics/data-visualizations/overview.md)

-	[日付フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-date-fields)

-	[数値フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-numeric-fields)

-	[文字列フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-string-fields)

## Slingshot AI でダッシュボードを生成する

>[!Note]
> Slingshot AI は元のダッシュボードを変更できません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

ダッシュボードは以下の方法で生成できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

- データ ソースを Slingshot AI の会話に添付する。

以下の種類のデータ ソースを使用するダッシュボードを生成できます:

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

[ゴールド認定](certifications.md)ダッシュボードは、迅速で効率的なビジネス上の意思決定に使用できる信頼性の高い検証済みの情報を提供します。

**例:**

今月の各製品の売上数を円グラフで表示したいとします。

これを実現するために、以下のことができます:

1. Slingshot AI に生成させたいダッシュボードを詳しく説明して、新しい Slingshot AI の会話を開始します。データを抽出するダッシュボードのタイトル、日付フィルターが対象とする期間、Slingshot AI が情報の表示に使用するグラフの種類を指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Example of user description message for Slingshot AI dashboard generation" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して、必要な情報を持つダッシュボードを探します。次に、そのデータを抽出してダッシュボードに整理します。また、ダッシュボードの内容について詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="Example of AI-generated dashboard from gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。また、ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付ダッシュボード

Slingshot AI がゴールド認定ダッシュボードを検索する代わりに、添付されたダッシュボードを直接使用してデータから新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したいとします。これを実現するために、以下のことができます:

1. Slingshot AI に生成させたいダッシュボードを詳しく説明して、新しい Slingshot AI の会話を開始します。この場合、過去 7 日間の生産ユニット数と損失ユニット数を比較するよう依頼できます。

   <img src="../images/description-ai-generation.png" alt="Description example for AI dashboard generation" class="responsive-img"/>

2. 考えているダッシュボードを添付して、**[送信]** をクリック/タップします。

3. AI はダッシュボードを確認して情報を抽出します。次に、ダッシュボードを生成し、ダッシュボードの内容について詳細な説明を提供します。

   <img src="../images/ai-generated-dashboard.png" alt="Example of AI-generated dashboard" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。また、ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

### 添付データ ソース

特定のデータ ソースがある場合は、会話に直接添付して Slingshot AI にダッシュボードの生成に使用するよう依頼できます。

>[!Note] 初めて新しいデータ ソースからダッシュボードを生成するとき、Slingshot AI がリクエストを完了するために数分後に AI の応答を更新する必要があります。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したいとします。これを実現するために、以下のことができます:

1. Slingshot AI に生成させたいダッシュボードを詳しく説明して、新しい Slingshot AI の会話を開始します。過去 7 日間の生産ユニット数と損失ユニット数を比較したいことを指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="Description example for creating an AI-generated dashboard" class="responsive-img"/>

2. データ ソースを会話にドラッグ アンド ドロップして添付し、**[送信]** をクリック/タップします。

3. Slingshot AI はデータ ソースからデータを抽出して新しいダッシュボードを作成します。また、ダッシュボードの内容について詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="Example of AI-generated dashboard from data source" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。また、ダッシュボードをクリック/タップして最大化ビューで開くこともできます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードを変更できません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

Slingshot AI を使用して編集できるのは、以下の種類のデータ ソースを使用するダッシュボードのみです:

-	Amazon Athena

-	CSV ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Excel ファイル ([Web リソース](./analytics/datasources/supported-data-sources/web-resource.md)としてのみ)

-	Microsoft Analysis Services

-	Microsoft SQL Server

-	MySQL

-	Oracle

-	PostgreSQL

-	Snowflake

ダッシュボードは以下の方法で編集できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] Slingshot AI が生成したダッシュボードも編集できます。

### ゴールド認定ダッシュボード

ダッシュボードの編集は、新しいダッシュボードの生成と同じ方法で行えます。Slingshot AI の助けを借りて[ゴールド認定](certifications.md)ダッシュボードを検索し、その特定のダッシュボードをどのように変更したいかを AI に説明します。Slingshot AI は要求された変更を加えます。

**例:**

今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいとします。これを実現するために、以下のことができます:

1. 特定のダッシュボードをどのように編集したいかを詳しく説明して、新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="Description example for AI modification on a gold-certified dashboard" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを確認して、編集したいダッシュボードを特定します。次に、要求された変更を加えます。その後、更新されたバージョンのダッシュボードを表示し、加えた変更について詳細な説明を提供します。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="Example of AI modified gold-certified dashboard" class="responsive-img"/>

4. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。また、ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。

### 添付ダッシュボード

特定のダッシュボードがある場合は、Slingshot AI の会話に添付して編集するよう依頼できます。

**例:**

今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいとします。これを実現するために、以下のことができます:

1. 特定のダッシュボードをどのように編集したいかを詳しく説明して、新しい Slingshot AI の会話を開始します。この場合、今月の製品別収益を示すダッシュボードに縦棒グラフを追加したいことを指定できます。

2. ダッシュボードを会話に添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

3. 準備ができたら、**[送信]** をクリック/タップします。

4. Slingshot AI はダッシュボードを分析して要求された変更を加えます。その後、更新されたバージョンのダッシュボードを表示し、加えた変更について詳細な説明を提供します。

   <img src="../images/ai-modified-dashboard.png" alt="Example of AI modified dashboard" class="responsive-img"/>

5. ダッシュボードをクリック/タップして最大化ビューで変更を確認できます。また、ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。

## Slingshot AI でダッシュボードと表示形式を分析する

ダッシュボードまたは表示形式は以下の方法で分析できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] すべての種類のデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用すると、組織内に保存されている[ゴールド認定](certifications.md)ダッシュボードとその表示形式を分析できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したいとします。そのために、以下のことができます:

1. 詳細な質問で新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計は何人でしたか?」* と質問できます。

2. **[送信]** ボタンをクリック/タップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索して、必要な情報を持つものを分析します。次に、詳細な分析と要求された情報を表すダッシュボードを提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

### 添付ダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードがある場合は、会話に直接添付できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したいとします。Slingshot AI にゴールド認定ダッシュボードを検索させる代わりに、以下のようにして特定のダッシュボードを使用するよう指示できます:

1. 詳細な質問で新しい Slingshot AI の会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計は何人でしたか?」* と質問できます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="Dashboard attached for AI analysis" class="responsive-img"/>

2. 考えているダッシュボードを添付して、**[送信]** をクリック/タップします。

3. Slingshot AI はダッシュボードからデータを抽出し、要求された情報を含む既存のダッシュボード (または必要に応じて変更されたバージョン) を表示し、実行された分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="Example of AI dashboard analysis" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用するダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] ダッシュボードを認定できるのは、組織のオーナーによって承認されたユーザーのみです。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを使用して Slingshot AI をトレーニングできます。これにより、AI がデータの生成、編集、分析にダッシュボードを使用できるようになります。

ダッシュボードをゴールド認定するには:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリック/タップし、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="Gold badge selection" class="responsive-img"/>

3. ダッシュボードが認定されると、**[AI トレーニング]** オプションが有効になります。Slingshot AI はダッシュボードとその表示形式の説明を生成します。これらの説明は、Slingshot AI がダッシュボードを生成、編集、分析するのに役立ちます。

## AI トレーニングの管理

将来の問い合わせで Slingshot AI が最新情報を提供できるように、AI が生成した説明をいつでも更新できます。

ダッシュボードとその表示形式の AI が生成した説明を確認するには:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリック/タップします。

3. **[AI トレーニングを管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="Manage AI training option" class="responsive-img"/>

4. *AI トレーニング情報* ダイアログが表示され、各説明を確認できます。ここでは以下のことができます:

-	特定の表示形式またはダッシュボード自体のトレーニングをクリアする。

-	すべてのトレーニングをクリアする。これにより、ダッシュボード内のすべての説明が削除されます。

-	各説明を更新して変更を保存する。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog" class="responsive-img"/>

各表示形式の説明のみを更新する場合は:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリック/タップします。

   <img src="../images/dashboard-edit-button.png" alt="Dashboard edit button" class="responsive-img"/>

2. 表示形式の **[編集]** ボタンをクリック/タップします。

   <img src="../images/visualization-edit-button.png" alt="Visualization edit button" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *AI セクション* までスクロール ダウンします。

5. **[編集]** をクリック/タップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI training edit button" class="responsive-img"/>

6. *Slingshot AI トレーニング* ダイアログが表示されます。ここで情報を更新できます。準備ができたら、**[更新]** をクリック/タップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI training info dialog example" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリック/タップして変更を保存し、もう一度クリック/タップしてダッシュボードを更新します。

## AI トレーニングを無効にする

組織内の特定のダッシュボードを Slingshot AI がトレーニングに使用しないようにするには:

1. **[AI トレーニング情報]** ボタンをクリック/タップします。

   <img src="../images/ai-training-info-button.png" alt="AI training info button" class="responsive-img"/>

2. **[AI トレーニング]** をオフに切り替えます。

    <img src="../images/ai-training-toggle-button.png" alt="AI training toggle button" class="responsive-img"/>

## よくある質問

**Q: Slingshot AI が生成したダッシュボードを編集できますか?**

**A:** はい、Slingshot AI が生成したダッシュボードはいつでも編集できます。

**Q: AI が生成したダッシュボードを他のチーム メンバーと共有できますか?**

**A:** はい、Slingshot AI の応答でダッシュボードのオーバーフロー メニューを開いて、生産性向上機能のいずれかを使用するか、ダッシュボードへのリンクを直接コピーできます。

**Q: ゴールド認定ダッシュボードとは何ですか? Slingshot AI がそれを使用する理由は?**

**A:** ゴールド認定ダッシュボードは、信頼性が高く、検証済みの情報のみを含むダッシュボードです。このため、Slingshot AI はゴールド認定ダッシュボードのみを使用します。

**Q: Slingshot AI が生成できるグラフの種類に制限はありますか?**

**A:** Slingshot AI は以下のグラフ タイプを使用してダッシュボードを生成できます:

- すべてのカテゴリ チャート

- バブル チャート

- KPI 対ターゲット チャート

- KPI 対時間チャート

- ピボット チャート

- テキスト チャート

- テキスト ビュー チャート

- ツリー マップ チャート
