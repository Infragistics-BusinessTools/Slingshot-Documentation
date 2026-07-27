---
title: NetSuite データ ソースの構成および使用方法
_description: Slingshot で NetSuite データ ソースに接続して使用する方法を説明します。
_language: ja
---

# NetSuite

Slingshot の NetSuite データ ソース コネクターを使用すると、ビジネス オペレーションと財務パフォーマンスをリアルタイムで可視化・分析するダッシュボードを作成できます。主要指標を追跡し、レポートを効率化して、NetSuite データから実用的なインサイトを得ることができます。

## 前提条件

### ロールの権限

接続を成功させるには、各 NetSuite ロールに適切な権限が必要です。

- Reports(): SuiteAnalytics Workbook に必要です。

- Setup(): OAuth 2.0 アクセス トークン、REST Web サービス、およびカスタム フィールドを使用したログインに必要です。

>[!Note] 
>テーブルには追加の権限が必要です。たとえば、*Account* テーブルにアクセスするには **Lists()** 権限が必要です。

### OAuth 2.0

Slingshot で NetSuite に接続するには、まず NetSuite で OAuth 2.0 を設定する必要があります (まだ設定していない場合)。

設定するには、以下の手順を実行します。

1. <a href="https://system.netsuite.com/pages/customerlogin.jsp?" target="blank" rel="noopener">NetSuite</a> にログインします。

2. **[設定]** > **[統合]** > **[統合の管理]** に移動します。

3. 新しい統合レコードを**作成**します。新しい統合の作成時に、アプリケーションの名前と説明を入力できます。

4. [認証] サブタブで、以下の設定を行う必要があります。

- **OAuth 2.0**: 提供されているオプションから **[認証コード付与]** を選択します。

 - **スコープ**: 提供されているオプションから **[RESTlets]** と **[REST Web サービス]** を選択します。

- **ユーザー資格情報**: ここで**ユーザー資格情報**を有効にします。

<img src="images/netsuite-authentication-settings.png" alt="NetSuite 認証設定" class="responsive-img"/>

5. 設定を構成したら、https://my.slingshotapp.io/callback/generic_oauth をリダイレクト URL として登録する必要があります。

6. **クライアント ID** と**クライアント シークレット**が表示されます。コピーして安全に保管してください。紛失した場合は、リセットが必要になります。

NetSuite での OAuth 2.0 の設定方法の詳細については、<a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981" target="blank" rel="noopener">こちら</a>の記事をお読みください。

## NetSuite への接続

NetSuite データ ソースを設定するには、以下の手順を実行します。

1. ダッシュボード リストの **[+ ダッシュボード]** ボタンをクリック/タップします。

2. **[空のダッシュボード]** を選択します。

<img src="./images/blank-dashboard.png" alt="空のダッシュボード"/>

3. 右上隅の **[+データ ソース]** ボタンをクリックします。

4. *データ ソース* リストから **[NetSuite]** を選択します。

<img src="images/netsuite-data-sources-list.png" alt="データ ソース リスト内の NetSuite" class="responsive-img"/>

5. 以下の情報を入力するよう求められます。

1. **アカウント ID**: NetSuite アカウントの識別子。NetSuite URL で確認できます (たとえば、NetSuite URL が `https://1234567.app.netsuite.com` の場合、アカウント ID は `1234567` です)。

2. **資格情報**: [資格情報] を選択した後、OAuth 2.0 を使用して認証する必要があります。

   - 認証 URL (自動入力): ユーザーが認証するために使用する Web アドレスです。

   - トークン URL (自動入力): トークン URL のフォーマットは認証 URI のフォーマットに似ています。

   - クライアント ID (必須): アプリの識別子です。ランダムな記号の組み合わせです。
   
   - クライアント シークレット (必須): 追加の保護として使用されます。ランダムな記号の組み合わせです。
   
   - ログアウト URL (任意): ユーザーの認証済みセッションをログアウトするための URL です。
   
   - スコープ (任意): 追加のアクセス レベルを要求するために使用される値です。
   
   - リソース (任意): 保護されたデータをホストするサービスへの URL を入力します。
   
   - 追加パラメーター (任意): 認証プロセスに含めることができる追加フィールドです。
   
   - データ ソースのエイリアス: アカウント リストに表示されるデータ ソース名です。後で変更できます。

<img src="images/netsuite-credentials.png" alt="NetSuite 資格情報ダイアログ" class="responsive-img"/>

3. 準備ができたら、**[追加]** をクリック/タップします。

4. *NetSuite* ページにリダイレクトされ、ログイン情報を入力できます。

5. Slingshot アプリへの権限付与を求められます。**[続行]** をクリック/タップして NetSuite アカウントを Slingshot に接続します。

## データの設定

NetSuite に接続した後、以下の操作が可能です。

1. アカウントを追加します。

2. **データ ソース**を追加します。データ ソースを追加する前に、アカウント名の変更、説明の追加、データ ソースが認定済みかどうかの確認 (*[Enterprise](../../../slingshot-enterprise-subscription.md)* ユーザーが利用可能)、詳細の編集が可能です。適切な説明を追加することで、すべてのユーザーが長いリストをナビゲートし、必要なデータ ソースを見つけやすくなります。

3. **テーブルを選択します**: 分析したいデータが含まれるテーブルを選択します。

<img src="images/netsuite-tables-list.png" alt="NetSuite テーブルのリスト" class="responsive-img" width="55%"/>

## 表示形式エディターでの作業

テーブルを選択すると、<a href="https://www.slingshotapp.io/en/help/docs/analytics/data-visualizations/visualization-editor" target="blank" rel="noopener">表示形式エディター</a>に移動します。ここでテーブル内のフィールドを使用してダッシュボードを構築できます。

<img src="images/netsuite-visualization-editor.png" alt="表示形式エディターの NetSuite データ" class="responsive-img"/>

>[!Note] デフォルトでは、*柱状*グラフが表示されます。別のグラフの種類を選択するには、それをクリックします。

表示形式エディターの準備ができたら、ダッシュボードを *My Analytics* ⇒ *マイ ダッシュボード*、組織、特定のワークスペース、またはプロジェクトに保存できます。

### よくある接続の問題

**問題**: "アカウント ID を null または空にすることはできません"

**解決策**:

NetSuite アカウント ID が正しく入力されていることを確認してください。NetSuite URL でアカウント識別子を確認してください。

**問題**: OAuth 認証が失敗する

**解決策**:

- NetSuite で統合レコードが有効になっていることを確認してください。
- コールバック URL が正しく設定されていることを確認してください。
- NetSuite ユーザーが必要な権限を持っていることを確認してください。

**問題**: 期待されるデータにアクセスできない

**解決策**:

- NetSuite ロールが必要なレコードへのアクセス権を持っていることを確認してください。
- 関連する NetSuite 機能が有効になっていることを確認してください。
- 適切なレコードレベルの権限が設定されていることを確認してください。
