---
title: NetSuite データ ソースの構成と使用方法
_description: Slingshot で NetSuite データ ソースを接続して使用する方法を説明します。
_language: ja
---

# NetSuite

Slingshot の NetSuite データ ソース コネクターを使用すると、ビジネス オペレーションと財務パフォーマンスをリアルタイムで視覚化および分析するためのダッシュボードを作成できます。主要な指標を追跡し、レポートを合理化し、NetSuite データから実用的なインサイトを得ることができます。

## 前提条件

### ロールのアクセス許可

接続を成功させるために、各 NetSuite ロールに適切なアクセス許可が必要です:

- Reports(): SuiteAnalytics Workbook に必要

- Setup(): OAuth 2.0 アクセス トークン、REST Web Services、カスタム フィールドを使用したログインに必要

>[!Note] 
>テーブルには追加のアクセス許可が必要です。たとえば、*Account* テーブルにアクセスするには **Lists()** アクセス許可が必要です。

### OAuth 2.0

Slingshot で NetSuite に接続するには、最初に NetSuite で OAuth 2.0 を設定する必要があります (まだ設定していない場合)。

設定するには、次の手順を実行します:

1. <a href="https://system.netsuite.com/pages/customerlogin.jsp?" target="blank" rel="noopener">NetSuite</a> にログインします。

2. **[設定]** > **[統合]** > **[統合の管理]** に移動します。

3. 新しい統合レコードを**作成**します。新しい統合の作成中に、アプリケーションの名前を入力し、説明を追加できます。

4. [認証] サブタブで、次の設定を構成する必要があります:

- **OAuth 2.0**: 提供されたオプションから、**[認証コード グラント]** を選択します。

 - **スコープ**: 提供されたオプションから、**[RESTlets]** と **[REST Web Services]** を選択します。

- **ユーザー資格情報**: ここで**ユーザー資格情報**を有効にします。

<img src="images/netsuite-authentication-settings.png" alt="NetSuite 認証設定" class="responsive-img"/>

5. 設定が完了したら、リダイレクト URL として https://my.slingshotapp.io/callback/generic_oauth を登録する必要があります。

6. **クライアント ID** と**クライアント シークレット**が表示されます。それらをコピーして安全に保存してください。紛失した場合はリセットする必要があります。

NetSuite での OAuth 2.0 の設定方法の詳細については、<a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981" target="blank" rel="noopener">こちら</a>の記事をご参照ください。

## NetSuite への接続

NetSuite データ ソースを構成するには、次の手順を実行します:

1.	ダッシュボード リストで **[+ ダッシュボード]** ボタンをクリックまたはタップします。

2. **[空のダッシュボード]** を選択します。

<img src="./images/blank-dashboard.png" alt="空のダッシュボード"/>

3.	右上隅の **[+データ ソース]** ボタンをクリックします。

4.	*データ ソース* リストから **[NetSuite]** を選択します。

<img src="images/netsuite-data-sources-list.png" alt="データ ソース リストの NetSuite" class="responsive-img"/>

5.	次の情報を入力するように求められます:

1. **アカウント ID**: NetSuite アカウント識別子。これは NetSuite URL で確認できます (たとえば、NetSuite URL が `https://1234567.app.netsuite.com` の場合、アカウント ID は `1234567` です)。

2. **資格情報**: **[資格情報]** を選択した後、OAuth 2.0 を使用して認証する必要があります:

   - 認証 URL (事前入力済み): ユーザーが認証するために使用する Web アドレスです。

   - トークン URL (事前入力済み): トークン URL の形式は認証 URI のものと似ています。

   - クライアント ID (必須): アプリの識別子です。形式はランダムな記号の組み合わせです。
   
   - クライアント シークレット (必須): 追加の保護として使用されます。形式はランダムな記号の組み合わせです。
   
   - ログアウト URL (任意): ユーザーの認証済みセッションをログアウトするために使用される URL です。
   
   - スコープ (任意): アクセスの追加レベルを要求するために使用される値です。
   
   - リソース (任意): 保護されたデータをホストするサービスへの URL を入力します。
   
   - 追加パラメーター (任意): 認証プロセスに含めることができる追加フィールドです。
   
   - データ ソースのエイリアス: アカウントのリストに表示されるデータ ソース名です。いつでも変更できます。

<img src="images/netsuite-credentials.png" alt="NetSuite 資格情報ダイアログ" class="responsive-img"/>

3. 準備ができたら、**[追加]** をクリックまたはタップします。

4. ログイン詳細を入力できる *NetSuite* ページにリダイレクトされます。

5. Slingshot アプリへのアクセス許可を付与するよう求められます。**[続行]** をクリックまたはタップして、NetSuite アカウントを Slingshot に接続します。

## データの設定

NetSuite に接続した後、次のことができます:

1.	アカウントを追加します。

2.	**データ ソース**を追加します。データ ソースを追加する前に、アカウント名を変更し、説明を追加し、データ ソースが認定済みかどうかを確認し (*[Enterprise](../../../slingshot-enterprise-subscription.md)* ユーザーが利用可能)、詳細を編集できます。適切な説明を追加すると、すべてのユーザーが長いリストをナビゲートし、検索しているデータ ソースを見つけるのに役立ちます。

3. **テーブルの選択**: 分析するデータを含むテーブルを選択します。

<img src="images/netsuite-tables-list.png" alt="NetSuite テーブル一覧" class="responsive-img" width="55%"/>

## 表示形式エディターでの作業

テーブルを選択すると、<a href="https://www.slingshotapp.io/en/help/docs/analytics/data-visualizations/visualization-editor" target="blank" rel="noopener">表示形式エディター</a>が表示されます。ここで、テーブル内のフィールドを使用してダッシュボードを作成できます。

<img src="images/netsuite-visualization-editor.png" alt="表示形式エディターの NetSuite データ" class="responsive-img"/>

>[!Note] デフォルトでは、*柱状*グラフが表示されます。それを選択すると、別のグラフの種類を選択できます。

表示形式エディターの準備ができたら、ダッシュボードを *[分析]* ⇒ *[ダッシュボード]*、組織、特定のワークスペース、またはプロジェクトに保存できます。

### よくある接続の問題

**問題**: 「アカウント ID を null または空にすることはできません」

**解決策**: 

NetSuite アカウント ID が正しく入力されていることを確認してください。NetSuite URL を確認してアカウント識別子を確認してください。

**問題**: OAuth 認証が失敗する

**解決策**: 

- NetSuite で統合レコードが有効になっていることを確認します

- コールバック URL が正しく構成されていることを確認します

- NetSuite ユーザーが必要なアクセス許可を持っていることを確認します

**問題**: 期待されるデータにアクセスできない

**解決策**:

- NetSuite ロールが必要なレコードへのアクセス権を持っていることを確認します

- 関連する NetSuite 機能が有効になっていることを確認します

- 適切なレコードレベルのアクセス許可が構成されていることを確認します
