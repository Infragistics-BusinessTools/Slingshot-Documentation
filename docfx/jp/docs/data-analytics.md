---
title: AI データ アナリティクス
description: Slingshot AI を使用してダッシュボードを生成し、データを分析し、自然言語の会話を通じてビジネス データからインサイトを得る方法を説明します。
_language: ja
---
# Slingshot AI データ アナリティクス

Slingshot AI を活用したアナリティクスにより、機会をより速く見つけ、従来のアナリティクスの複雑さを取り除きながら、データ主導の意思決定を行うことができます。

## Slingshot AI データ アナリティクスとは何ですか?

Slingshot AI アナリティクスは、利用可能なデータとビジネス コンテキストを使用して情報をダッシュボードに直接変換し、複雑なデータを理解しやすくします。

ダッシュボードと表示形式を生成、編集、分析し、実用的なインサイトを提供できます。

>[!Note]
> Slingshot AI データ アナリティクスの機能は、[Slingshot Enterprise](slingshot-enterprise-subscription.md) ユーザーが利用できます。

### Slingshot AI ダイアログへのアクセス

*[通知]* の横にある **[Slingshot AI]** ボタンをクリックまたはタップすると、*Slingshot AI* ダイアログが表示されます。

左側では次のことができます:

A.	以前の会話を参照する。

B.	新しい会話を作成する。

<img src="../images/slingshot-ai-dialog.png" alt="Slingshot AI ダイアログ" class="responsive-img"/>

右側には 2 つのセクション (**チャット**と**ドキュメント**) があります。

**[チャット]** を開くと、次のことができます:

C.	既存の会話を続ける。

D. Slingshot AI メッセージを評価してフィードバックを送る。

E. Slingshot AI メッセージを更新して新しいメッセージを生成する。

<img src="../images/slingshot-ai-dialog-chat-section.png" alt="Slingshot AI ダイアログ チャット セクション" class="responsive-img"/>

**[ドキュメント]** を開くと、Slingshot AI が問い合わせに基づいて生成したすべてのダッシュボードと、使用したデータ ソースの一覧が表示されます。

<img src="../images/slingshot-ai-dialog-documents-section.png" alt="Slingshot AI ダイアログ ドキュメント セクション" class="responsive-img"/>

各 Slingshot AI 応答には次が含まれます:

- 生成、変更、または分析されたダッシュボードの説明。

- ダッシュボード自体。

Slingshot AI 応答のオーバーフロー メニューを使用して次のことができます:

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

- ダッシュボードを新しいウィンドウで開く (デスクトップ アプリ)

- ダッシュボード リンクをコピーする

- ダッシュボードをブックマークする

- ダッシュボードを他のユーザーと共有する

<img src="../images/slingshot-ai-dashboard-overflow-menu.png" alt="Slingshot AI ダッシュボード オーバーフロー メニュー" class="responsive-img"/>

>[!Note]
> 組織、ワークスペース、プロジェクト、または *[分析]* にダッシュボードのコピーを保存するには、ダッシュボード ダイアログの右下隅にある **[場所に保存]** ボタンをクリックまたはタップします。

## 役立つヒント

Slingshot AI から最良の結果を得るために、以下を推奨します:

-	データ カタログに既に存在する名前と概念を使用して会話を開始する。

-	ビジネス固有の用語を使用する。

-	会話全体を通じて一貫した表現を使用する。

-	過去の問い合わせへの参照を含むフォローアップ質問を使用する。

## 一般的な用語

Slingshot AI が認識する一般的な用語:

-	[グローバル フィルター](./analytics/filters/dashboard-filters.md) (ダッシュボード フィルター)

-	[ウィジェット フィルター](./analytics/data-visualizations/fields/field-filters-rules.md) (データ フィルター)

-	[計算フィールド関数](./analytics/data-visualizations/fields/calculated-fields/overview.md) (ポスト計算フィールドを除く) (表形式ソースのみ)

-	[表示形式の種類](./analytics/data-visualizations/overview.md)

-	[日付フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-date-fields)

-	[数値フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-numeric-fields)

-	[文字列フィールド](./analytics/data-visualizations/fields/field-filters-rules.md#rules-for-string-fields)

## Slingshot AI でダッシュボードを生成する

>[!Note]
> Slingshot AI は元のダッシュボードを変更できません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

次の方法でダッシュボードを生成できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

- データ ソースを Slingshot AI 会話に添付する。

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

[ゴールド認定](certifications.md)ダッシュボードは、迅速かつ効率的なビジネス上の意思決定に使用できる信頼性の高い検証済み情報を提供します。

**例:**

今月各製品の売上数をパイ チャートで表示したい場合:

1. 生成したいダッシュボードを詳細に説明して新しい Slingshot AI 会話を開始します。データを抽出するダッシュボードのタイトル、日付フィルターの期間、Slingshot AI が情報の表示に使用するグラフの種類を指定できます。

   <img src="../images/ai-dashboard-generation-user-description.png" alt="Slingshot AI ダッシュボード生成のユーザー説明メッセージの例" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べ、必要な情報を持つダッシュボードを確認します。次に、そのデータを抽出してダッシュボードに整理します。ダッシュボードが表示する内容についての詳細な説明も提供します。

    <img src="../images/ai-dashboard.png" alt="ゴールド認定ダッシュボードから AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリックまたはタップして最大化ビューで開くこともできます。

### 添付ダッシュボード

Slingshot AI がゴールド認定ダッシュボードを検索する代わりに、添付されたダッシュボードを直接参照して、そのデータを使用して新しいダッシュボードを生成することもできます。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したい場合:

1. 生成したいダッシュボードを詳細に説明して新しい Slingshot AI 会話を開始します。この場合、過去 7 日間の生産ユニット数と損失ユニット数を比較するよう依頼できます。

   <img src="../images/description-ai-generation.png" alt="AI ダッシュボード生成の説明例" class="responsive-img"/>

2. 使用するダッシュボードを添付して **[送信]** をクリックまたはタップします。

3. AI はダッシュボードを調べて情報を抽出します。次に、ダッシュボードが表示する内容についての詳細な説明とともにダッシュボードを生成します。

   <img src="../images/ai-generated-dashboard.png" alt="AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリックまたはタップして最大化ビューで開くこともできます。

### 添付データ ソース

特定のデータ ソースがある場合は、会話に直接添付して、Slingshot AI にそれを使用してダッシュボードを生成するよう依頼できます。

>[!Note] 初めて新しいデータ ソースからダッシュボードを生成する場合は、数分後に AI 応答を更新して Slingshot AI がリクエストを処理できるようにする必要があります。

**例:**

過去 7 日間の生産ユニット数と損失ユニット数を比較したい場合:

1. 生成したいダッシュボードを詳細に説明して新しい Slingshot AI 会話を開始します。過去 7 日間の生産ユニット数と損失ユニット数を比較したいことを指定します。

   <img src="../images/ai-generation-attached-data-source-description.png" alt="AI が生成したダッシュボードの作成のための説明例" class="responsive-img"/>

2. データ ソースを会話にドラッグ アンド ドロップして添付し、**[送信]** をクリックまたはタップします。

3. Slingshot AI はデータ ソースからデータを抽出して新しいダッシュボードを作成します。ダッシュボードが表示する内容についての詳細な説明も提供します。

   <img src="../images/ai-generated-dashboard-data-source.png" alt="データ ソースから AI が生成したダッシュボードの例" class="responsive-img"/>

4. ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付できます。ダッシュボードをクリックまたはタップして最大化ビューで開くこともできます。

## Slingshot AI でダッシュボードを編集する

>[!Note] Slingshot AI は元のダッシュボードを変更できません。提供された情報に基づいて新しい変更済みダッシュボードのみを作成します。

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

次の方法でダッシュボードを編集できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] Slingshot AI が生成したダッシュボードも編集できます。

### ゴールド認定ダッシュボード

新しいダッシュボードを生成するのと同じ方法でダッシュボードを編集できます。Slingshot AI を使用して[ゴールド認定](certifications.md)ダッシュボードを検索し、その特定のダッシュボードをどのように変更したいかを AI に説明します。その後、Slingshot AI が要求された変更を行います。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明して新しい Slingshot AI 会話を開始します。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

   <img src="../images/ai-modification-description-gold-certified-dashboard.png" alt="ゴールド認定ダッシュボードへの AI 変更の説明例" class="responsive-img"/>

2. 準備ができたら、**[送信]** をクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを調べ、編集するダッシュボードを確認します。次に、要求された変更を行います。その後、更新されたバージョンのダッシュボードと変更内容についての詳細な説明が表示されます。

    <img src="../images/ai-modified-gold-certified-dashboard.png" alt="AI が変更したゴールド認定ダッシュボードの例" class="responsive-img"/>

4. ダッシュボードをクリックまたはタップして最大化ビューで開き、変更を確認できます。ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付することもできます。

### 添付ダッシュボード

特定のダッシュボードがある場合は、Slingshot AI 会話に添付して編集を依頼できます。

**例:**

今月の製品別収益を示すダッシュボードに柱状グラフを追加したい場合:

1. 特定のダッシュボードをどのように編集したいかを詳細に説明して新しい Slingshot AI 会話を開始します。この場合、今月の製品別収益を示すダッシュボードに柱状グラフを追加したいことを指定できます。

2. ダッシュボードを会話に添付します。

   <img src="../images/ai-modification-description-attached-dashboard.png" alt="AI が変更したダッシュボードの例" class="responsive-img"/>

3. 準備ができたら、**[送信]** をクリックまたはタップします。

4. Slingshot AI はダッシュボードを分析して要求された変更を行います。その後、更新されたバージョンのダッシュボードと変更内容についての詳細な説明が表示されます。

   <img src="../images/ai-modified-dashboard.png" alt="AI が変更したダッシュボードの例" class="responsive-img"/>

5. ダッシュボードをクリックまたはタップして最大化ビューで開き、変更を確認できます。ダッシュボードのコピーを場所に保存するか、オーバーフロー メニューを開いて共有するメンバーを選択するか、ピン、チャット、タスク、またはディスカッションに添付することもできます。

## Slingshot AI でダッシュボードと表示形式を分析する

次の方法でダッシュボードまたは表示形式を分析できます:

- ゴールド認定ダッシュボードを使用する。

- ダッシュボードを会話に添付する。

>[!Note] すべての種類のデータ ソースがサポートされています。

### ゴールド認定ダッシュボード

Slingshot AI を使用すると、組織に保存されている[ゴールド認定](certifications.md)ダッシュボードとその表示形式を分析できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したい場合:

1. 詳細な質問を入力して新しい Slingshot AI 会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計数はいくらでしたか?」* と質問できます。

2. **[送信]** ボタンをクリックまたはタップします。

3. Slingshot AI はゴールド認定ダッシュボードを検索し、必要な情報を持つダッシュボードを分析します。次に、要求された情報を表すダッシュボードとともに詳細な分析を提供します。

    <img src="../images/ai-dashboard-analysis.png" alt="AI ダッシュボード分析の例" class="responsive-img"/>

### 添付ダッシュボード

Slingshot AI が分析に使用できる特定のダッシュボードがある場合は、会話に直接添付できます。

**例:**

2024 年と 2025 年の入院患者と外来患者の合計数を確認したい場合。Slingshot AI がゴールド認定ダッシュボードを検索する代わりに、使用するダッシュボードを直接指定できます:

1. 詳細な質問を入力して新しい Slingshot AI 会話を開始します。たとえば、*「2024 年と 2025 年の入院患者と外来患者の合計数はいくらでしたか?」* と質問できます。

   <img src="../images/attach-dashboard-ai-analysis.png" alt="AI 分析のために添付されたダッシュボード" class="responsive-img"/>

2. 使用するダッシュボードを添付して **[送信]** をクリックまたはタップします。

3. Slingshot AI はダッシュボードからデータを抽出し、要求された情報を含む既存のダッシュボード (必要に応じて変更されたバージョン) を表示し、実行された分析の詳細な説明を提供します。

   <img src="../images/ai-dashboard-analysis.png" alt="AI ダッシュボード分析の例" class="responsive-img"/>

>[!Note] サポートされていないデータ ソースを使用するダッシュボードを変更する場合、Slingshot AI はダッシュボード フィルターのみを編集します。

## ダッシュボードの説明と AI トレーニング

>[!Note] 組織のオーナーによって承認されたユーザーのみがダッシュボードを認定できます。

ダッシュボードをゴールドとして認定すると、そのダッシュボードを Slingshot AI のトレーニングに使用でき、AI がダッシュボードのデータ生成、編集、分析に使用できるようになります。

ダッシュボードをゴールド認定するには、次の手順を実行します:

1. ダッシュボードを開きます。

2. バッジ アイコンをクリックまたはタップし、ドロップダウン メニューからゴールド バッジを選択します。

   <img src="../images/gold-badge-select.png" alt="ゴールド バッジの選択" class="responsive-img"/>

3. ダッシュボードが認定されると、**[AI トレーニング]** オプションが有効になります。Slingshot AI はダッシュボードとその表示形式の説明を生成します。これらの説明は、Slingshot AI がダッシュボードを生成、編集、分析するのに役立ちます。

## AI トレーニングの管理

AI が生成した説明をいつでも更新して、Slingshot AI が将来の問い合わせで最新情報を提供できるようにすることができます。

ダッシュボードとその表示形式の AI が生成した説明を確認するには、次の手順を実行します:

1. ゴールド認定ダッシュボードを開きます。

2. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

3. **[AI トレーニングの管理]** を選択します。

   <img src="../images/manage-ai-training-option.png" alt="AI トレーニングの管理オプション" class="responsive-img"/>

4. *[AI トレーニング情報]* ダイアログが表示され、各説明を確認できます。ここでは次のことができます:

-	特定の表示形式またはダッシュボード自体のトレーニングをクリアする。

-	すべてのトレーニングをクリアする。これにより、ダッシュボード内のすべての説明が削除されます。

-	各説明を更新して変更を保存する。

    <img src="../images/ai-training-info-dialog.png" alt="AI トレーニング情報ダイアログ" class="responsive-img"/>

各表示形式の説明のみを更新する場合は、次の手順を実行します:

1. ゴールド認定ダッシュボードの **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/dashboard-edit-button.png" alt="ダッシュボード編集ボタン" class="responsive-img"/>

2. 表示形式の **[編集]** ボタンをクリックまたはタップします。

   <img src="../images/visualization-edit-button.png" alt="表示形式編集ボタン" class="responsive-img"/>

3. **[設定]** セクションを開きます。

4. *[AI セクション]* までスクロールします。

5. **[編集]** をクリックまたはタップします。

    <img src="../images/slingshot-ai-training-edit-button.png" alt="Slingshot AI トレーニング編集ボタン" class="responsive-img"/>

6. *[Slingshot AI トレーニング]* ダイアログが表示されます。ここで情報を更新できます。準備ができたら、**[更新]** をクリックまたはタップして変更を保存します。

    <img src="../images/ai-training-info-dialog.png" alt="AI トレーニング情報ダイアログの例" class="responsive-img"/>

7. 右上隅の **[保存]** ボタンをクリックまたはタップして変更を保存し、もう一度クリックしてダッシュボードを更新します。

## AI トレーニングを無効にする

組織の特定のダッシュボードを Slingshot AI のトレーニングに使用したくない場合は、次の手順を実行します:

1. **[AI トレーニング情報]** ボタンをクリックまたはタップします。

   <img src="../images/ai-training-info-button.png" alt="AI トレーニング情報ボタン" class="responsive-img"/>

2. **[AI トレーニング]** をオフにします。

    <img src="../images/ai-training-toggle-button.png" alt="AI トレーニング トグル ボタン" class="responsive-img"/>

## よくある質問

**Q:** **Slingshot AI が生成したダッシュボードを編集できますか?**

**A:** はい、Slingshot AI が生成したダッシュボードはいつでも編集できます。

**Q:** **AI が生成したダッシュボードを他のチーム メンバーと共有できますか?**

**A:** はい、Slingshot AI 応答でダッシュボードのオーバーフロー メニューを開いて、生産性向上機能のいずれかを使用するか、ダッシュボードへのリンクを直接コピーできます。

**Q:** **ゴールド認定ダッシュボードとは何ですか? Slingshot AI がそれを使用する理由は何ですか?**

**A:** ゴールド認定ダッシュボードは、信頼性が高く、検証済みの情報のみを含むダッシュボードです。そのため、Slingshot AI はゴールド認定ダッシュボードのみを参照します。

**Q:** **Slingshot AI が生成できるグラフの種類に制限はありますか?**

**A:** Slingshot AI は次のグラフの種類を使用してダッシュボードを生成できます:

- すべてのカテゴリ チャート

- バブル チャート

- KPI 対ターゲット チャート

- KPI 対時間チャート

- ピボット チャート

- テキスト チャート

- テキスト ビュー チャート

- ツリーマップ チャート
