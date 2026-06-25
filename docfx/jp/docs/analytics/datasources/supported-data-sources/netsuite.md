---
title: NetSuite データ ソースを構成および使用する方法
_description: Slingshot で NetSuite データ ソースに接続して使用します。
_language: ja
---

# NetSuite

Slingshot の NetSuite データ ソース コネクターを使用すると、ビジネス オペレーションと財務パフォーマンスをリアルタイムで視覚化および分析するダッシュボードを作成できます。主要な指標を追跡し、レポートを効率化し、NetSuite データから実用的なインサイトを得ることができます。

## 前提条件

### ロール権限

NetSuite ロールには、接続を正常に行うための適切なアクセス許可が必要です。

- Reports(): SuiteAnalytics Workbook に必要
- Setup(): OAuth 2.0 アクセス トークン、REST Web サービス、カスタム フィールドを使用したログインに必要

>[!Note]
>テーブルには追加のアクセス許可が必要です。たとえば、*Account* テーブルにアクセスするには **Lists()** のアクセス許可が必要です。

### OAuth 2.0

Slingshot で NetSuite に接続するには、最初に NetSuite で OAuth 2.0 を設定する必要があります (まだ設定していない場合)。

手順は以下のとおりです。

1. <a href="https://system.netsuite.com/pages/customerlogin.jsp?" target="blank" rel="noopener">NetSuite</a> にログインします。

2. **[設定]** > **[統合]** > **[統合の管理]** に移動します。

3. 新しい統合レコードを**作成**します。新しい統合を作成する際に、アプリケーションの名前と説明を入力できます。

4. [認証] サブタブで、以下の設定を構成する必要があります。

- **OAuth 2.0**: 提供されたオプションから、**[認証コード グラント]** を選択します。

 - **スコープ**: 提供されたオプションから、**[RESTlets]** と **[REST Web サービス]** を選択します。

- **ユーザー資格情報**: ここで**ユーザー資格情報**を有効にします。

<img src="images/netsuite-authentication-settings.png" alt="NetSuite authentication settings" class="responsive-img"/>

5. 設定が完了したら、https://my.slingshotapp.io/callback/generic_oauth をリダイレクト URL として登録する必要があります。

6. **クライアント ID** と**クライアント シークレット**が表示されます。これらをコピーして安全に保管してください。紛失した場合は、リセットする必要があります。

NetSuite での OAuth 2.0 の設定方法については、<a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981" target="blank" rel="noopener">こちら</a>の記事をご覧ください。

## NetSuite への接続

NetSuite データ ソースを構成するには、以下の手順に従います。

1.	ダッシュボード一覧の **[+ ダッシュボード]** ボタンをクリック/タップします。

2. **[空白のダッシュボード]** を選択します。

<img src="./images/blank-dashboard.png" alt="Blank dashboard"/>

3.	右上隅の **[+ データ ソース]** ボタンをクリックします。

4.	*[データ ソース]* リストから **[NetSuite]** を選択します。

<img src="images/netsuite-data-sources-list.png" alt="NetSuite in the data sources list" class="responsive-img"/>

5.	以下の情報を入力するよう求められます。

1. **アカウント ID**: NetSuite アカウントの識別子。NetSuite URL で確認できます (例: NetSuite URL が `https://1234567.app.netsuite.com` の場合、アカウント ID は `1234567` です)。

2. **資格情報**: [資格情報] を選択した後、OAuth 2.0 を使用して認証する必要があります。

   - 認証 URL (自動入力済み): ユーザーが認証するために使用する Web アドレスです。

   - トークン URL (自動入力済み): トークン URL の形式は認証 URI と同様です。

   - クライアント ID (必須): アプリの識別子です。形式はランダムな記号の組み合わせです。

   - クライアント シークレット (必須): 追加の保護として使用されます。形式はランダムな記号の組み合わせです。

   - ログアウト URL (オプション): ユーザーの認証済みセッションからログアウトするための URL です。

   - スコープ (オプション): 追加のアクセス レベルをリクエストするために使用される値です。

   - リソース (オプション): 保護されたデータをホストするサービスへの URL を入力します。

   - 追加パラメーター (オプション): 認証プロセスに含めることができる追加フィールドです。

   - データ ソースのエイリアス: アカウントの一覧に表示されるデータ ソース名です。いつでも変更できます。

<img src="images/netsuite-credentials.png" alt="NetSuite credentials dialog" class="responsive-img"/>

3. 準備ができたら、**[追加]** をクリック/タップします。

4. *NetSuite* ページにリダイレクトされ、ログイン情報を入力できます。

5. Slingshot アプリへのアクセス許可を求めるプロンプトが表示されます。**[続行]** をクリック/タップして、NetSuite アカウントを Slingshot に接続します。

## データの設定

NetSuite に接続した後、以下の操作ができます。

1.	アカウントを追加します。

2.	**データ ソース**を追加します。データ ソースを追加する前に、アカウント名を変更したり、説明を追加したり、データ ソースが認定済み ([Enterprise](../../../slingshot-enterprise-subscription.md) ユーザーが利用可能) かどうかを確認したり、詳細を編集したりできます。適切な説明を追加することで、すべてのユーザーが長いリストをナビゲートして目的のデータ ソースを見つけやすくなります。

3. **テーブルの選択**: 分析するデータが含まれているテーブルを選択します。

<img src="images/netsuite-tables-list.png" alt="List of NetSuite tables" class="responsive-img" width="55%"/>

## 表示形式エディターでの作業

テーブルを選択すると、<a href="https://www.slingshotapp.io/en/help/docs/analytics/data-visualizations/visualization-editor" target="blank" rel="noopener">表示形式エディター</a>に移動します。ここで、テーブル内のフィールドを使用してダッシュボードを作成できます。

<img src="images/netsuite-visualization-editor.png" alt="NetSuite data in Visualization Editor" class="responsive-img"/>

>[!Note] デフォルトでは、*柱状*チャートが表示されます。それを選択して、別のチャート タイプを選択できます。

表示形式エディターの準備ができたら、ダッシュボードを *[分析]* ⇒ *[ダッシュボード]*、組織、特定のワークスペース、またはプロジェクトに保存できます。

### よくある接続の問題

**問題**: 「アカウント ID を null または空にすることはできません」

**解決策**:

NetSuite アカウント ID が正しく入力されていることを確認してください。NetSuite URL を確認してアカウント識別子を確認してください。

**問題**: OAuth 認証が失敗する

**解決策**:

- NetSuite で統合レコードが有効になっていることを確認する

- コールバック URL が正しく構成されていることを確認する

- NetSuite ユーザーが必要なアクセス許可を持っていることを確認する

**問題**: 期待されるデータにアクセスできない

**解決策**:

- NetSuite ロールが必要なレコードへのアクセス権を持っていることを確認する

- 関連する NetSuite 機能が有効になっていることを確認する

- 適切なレコード レベルのアクセス許可が構成されていることを確認する
