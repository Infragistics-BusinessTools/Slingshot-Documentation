---
title: NetSuite データ ソースの設定と使用方法
_description: Slingshot で NetSuite データ ソースを接続して使用します。
---

# NetSuite

Slingshot の NetSuite データ ソース コネクターを使用すると、ビジネス オペレーションと財務パフォーマンスをリアルタイムで視覚化・分析するダッシュボードを作成できます。主要な指標を追跡し、レポートを効率化し、NetSuite データから実行可能なインサイトを得ることができます。

## 前提条件

### ロールの権限

正常に接続するために、各 NetSuite ロールに適切な権限が必要です:

- Reports(): SuiteAnalytics Workbook に必要

- Setup(): OAuth 2.0 アクセス トークン、REST Web サービス、カスタム フィールドを使用したログインに必要

>[!Note]
>テーブルには追加の権限が必要です。たとえば、*Account* テーブルにアクセスするには **Lists()** 権限が必要です。

### OAuth 2.0

Slingshot で NetSuite に接続するには、まず NetSuite で OAuth 2.0 を設定する必要があります（まだ設定していない場合）。

そのためには以下を行います:

1. <a href="https://system.netsuite.com/pages/customerlogin.jsp?" target="blank" rel="noopener">NetSuite</a> にログインします。

2. **[設定]** > **[統合]** > **[統合の管理]** に移動します。

3. 新しい統合レコードを**作成**します。新しい統合を作成する際に、アプリケーション名と説明を入力できます。

4. 認証サブタブで、以下の設定を構成する必要があります:

- **OAuth 2.0**: 提供されたオプションから **[認証コード グラント]** を選択します。

 - **スコープ**: 提供されたオプションから **[RESTlets]** と **[REST Web サービス]** を選択します。

- **ユーザー認証情報**: ここで**ユーザー認証情報**を有効にします。

<img src="images/netsuite-authentication-settings.png" alt="NetSuite authentication settings" class="responsive-img"/>

5. 設定を構成したら、リダイレクト URL として https://my.slingshotapp.io/callback/generic_oauth を登録する必要があります。

6. **クライアント ID** と **クライアント シークレット**が表示されます。これらをコピーして安全に保管してください。紛失した場合はリセットが必要になります。

NetSuite での OAuth 2.0 の設定方法の詳細については、<a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981" target="blank" rel="noopener">こちら</a>の記事をお読みください。

## NetSuite への接続

NetSuite データ ソースを設定するには、以下の手順を実行します:

1.	ダッシュボード リストの **[+ ダッシュボード]** ボタンをクリック/タップします。

2. **[空白のダッシュボード]** を選択します。

<img src="./images/blank-dashboard.png" alt="Blank dashboard"/>

3.	右上隅の **[+データ ソース]** ボタンをクリックします。

4.	*データ ソース* リストから **[NetSuite]** を選択します。

<img src="images/netsuite-data-sources-list.png" alt="NetSuite in the data sources list" class="responsive-img"/>

5.	以下の情報を入力するよう求められます:

1. **アカウント ID**: NetSuite のアカウント識別子。NetSuite の URL で確認できます（たとえば、NetSuite の URL が `https://1234567.app.netsuite.com` の場合、アカウント ID は `1234567` です）。

2. **認証情報**: *[認証情報]* を選択した後、OAuth 2.0 を使用して認証する必要があります:

   - 認証 URL（事前入力済み）: これはユーザーが認証に使用する必要がある Web アドレスです。

   - トークン URL（事前入力済み）: トークン URL の形式は認証 URI のものと同様です。

   - クライアント ID（必須）: アプリの識別子です。形式はランダムな記号の組み合わせです。

   - クライアント シークレット（必須）: 追加の保護として使用されます。形式はランダムな記号の組み合わせです。

   - ログアウト URL（省略可）: ユーザーの認証済みセッションをログアウトするための URL です。

   - スコープ（省略可）: 追加のアクセス レベルをリクエストするために使用される値です。

   - リソース（省略可）: 保護されたデータをホストするサービスへの URL を入力します。

   - 追加パラメーター（省略可）: 認証プロセスに含めることができる追加フィールドです。

   - データ ソースのエイリアス: アカウント リストに表示されるデータ ソース名です。いつでも変更できます。

<img src="images/netsuite-credentials.png" alt="NetSuite credentials dialog" class="responsive-img"/>

3. 準備ができたら **[追加]** をクリック/タップします。

4. *NetSuite* ページにリダイレクトされ、ログイン詳細を入力できます。

5. Slingshot アプリへの権限付与を求められます。**[続行]** をクリック/タップして NetSuite アカウントを Slingshot に接続します。

## データの設定

NetSuite に接続した後、以下ができます:

1.	アカウントを追加する。

2.	**データ ソース**を追加する。データ ソースを追加する前に、アカウント名の変更、説明の追加、データ ソースが認定済みかどうかの確認（*[Enterprise](../../../slingshot-enterprise-subscription.md)* ユーザー向け）、詳細の編集ができます。適切な説明を追加することで、すべてのユーザーが長いリストをナビゲートして探しているデータ ソースを見つけやすくなります。

3. **テーブルを選択する**: 分析したいデータを含むテーブルを選択します。

<img src="images/netsuite-tables-list.png" alt="List of NetSuite tables" class="responsive-img" width="55%"/>

## ビジュアライゼーション エディターでの作業

テーブルを選択すると、<a href="https://www.slingshotapp.io/en/help/docs/analytics/data-visualizations/visualization-editor" target="blank" rel="noopener">ビジュアライゼーション エディター</a>に移動します。ここでテーブル内のフィールドを使用してダッシュボードを構築できます。

<img src="images/netsuite-visualization-editor.png" alt="NetSuite data in Visualization Editor" class="responsive-img"/>

>[!Note] デフォルトでは*列*グラフが表示されます。それを選択することで別のグラフ タイプを選択できます。

ビジュアライゼーション エディターの準備ができたら、ダッシュボードを *マイ アナリティクス* ⇒ *マイ ダッシュボード*、組織、特定のワークスペース、またはプロジェクトに保存できます。

### よくある接続の問題

**問題**: 「アカウント ID は null または空にできません」

**解決策**:

NetSuite アカウント ID が正しく入力されていることを確認してください。NetSuite の URL を確認してアカウント識別子を確認します。

**問題**: OAuth 認証に失敗する

**解決策**:

- NetSuite で統合レコードが有効になっていることを確認する

- コールバック URL が正しく設定されていることを確認する

- NetSuite ユーザーに必要な権限があることを確認する

**問題**: 期待されるデータにアクセスできない

**解決策**:

- NetSuite ロールに必要なレコードへのアクセス権があることを確認する

- 関連する NetSuite 機能が有効になっていることを確認する

- 適切なレコード レベルの権限が設定されていることを確認する
