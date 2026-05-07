---
title: Slingshot で Azure CosmosDb データ ソースを構成する方法
_description: Azure CosmosDb を Slingshot のデータ ソースとして接続して使用する方法を説明します。
_language: ja
---

# Azure CosmosDb

Azure CosmosDb は、Microsoft Azure が提供するフルマネージドでグローバル分散型の NoSQL データベース サービスです。データは *データベース* 内の *コンテナー* に JSON ドキュメントとして保存され、SQL に似た API（Core SQL / API for NoSQL）を使用して、一般的な SELECT ステートメントでクエリできます。

Slingshot は **Core (SQL) API** を使用して Azure CosmosDb に接続し、コンテナーからフラットなスキーマを自動推論します。これにより、クエリを記述しなくても表示形式を作成できます。

---

## Azure CosmosDb への接続

Azure CosmosDb データ ソースを構成するには、以下の情報を入力します。

| フィールド | 説明 |
|-------|-------------|
| **Account Endpoint** *(必須)* | CosmosDb アカウントの URI（例: `https://myaccount.documents.azure.com:443/`）。Azure portal の **Keys** → **URI** で確認できます。 |
| **Application Region** | *(任意)* 読み取りおよび書き込み操作で優先する Azure リージョン（例: `East US`）。空欄の場合はアカウントの既定リージョンを使用します。 |
| **Connection Mode** | SDK が CosmosDb サービスと通信する方法です。次のいずれかを選択します。**Gateway** *(既定)* — CosmosDb ゲートウェイ経由で HTTPS 通信を使用し、多くのネットワーク環境で利用できます。**Direct** — CosmosDb レプリカへ直接 TCP 接続するため、低遅延かつ高スループットですが、ネットワークで外向き TCP 通信が制限されていない必要があります。 |
| **Accept Any Server Certificate** | 自己署名 TLS 証明書を使用する開発またはテスト環境でのみ **オン** にします。**本番環境では有効化しないでください。** |

接続情報の入力後、**Credentials** ピッカーを選択して既存のアカウント キー資格情報を割り当てるか、新規作成します。Azure CosmosDb は認証にプライマリまたはセカンダリの **Account Key** を使用します。キーは Azure portal の **Keys** → **Primary Key** でコピーできます。

準備ができたら、**[追加]**、次に **[サーバーの追加]** を選択します。

---

## データの設定

接続後、Slingshot に選択したデータベースで利用可能なコンテナーが表示されます。コンテナーを選択してデータ セットとして開き、表示形式エディターに進みます。

### コンテナーの操作

Azure CosmosDb の **コンテナー** は、Slingshot ではテーブルとして扱われます。コンテナーを選択すると、Slingshot は最大 **100 件のドキュメント** をサンプリングし、列スキーマを自動推論します。

- **スカラー フィールド**（文字列、数値、ブール値、日付）は列として公開されます。
- **入れ子オブジェクト** はドット記法でフラット化されます。たとえば、ドキュメント フィールド `address.city` は列 `address.city` になります。
- **配列フィールド** はスキーマから除外され、列として利用できません。
- **CosmosDb のシステム プロパティ**（`_rid`, `_self`, `_etag`, `_attachments`, `_ts`）は自動的に除外されます。
- フィールド名に **特殊文字**（`.` または `$`）を含む場合は除外されます。
- サンプル内のすべてのドキュメントで `null` のフィールドは `String` 型として推論されます。
- ドキュメント間でフィールドの **型が混在** している場合は `String` として推論されます。

スキーマはサンプルから推論されるため、ドキュメント構造のばらつきが大きいコンテナーでは、すべてのフィールドが表示されない場合があります。必要なフィールドが表示されない場合は、そのフィールドを含むドキュメントを数件追加して再試行してください。

---

## 表示形式エディターでの作業

コンテナーを読み込むと、Slingshot の各種表示形式（チャート、グリッド、ゲージ、マップなど）を CosmosDb データで使用できます。

Azure CosmosDb データで利用できる **計算フィールド関数** は以下のとおりです。

**文字列:** TRIM, UPPER, LOWER, LEN, FIND, MID, REPLACE, CONCATENATE

**日付/時刻:** DATE, DAY, MONTH, YEAR, HOUR, MINUTE, SECOND, MILLISECOND, WEEKDAY, DATETRUNC, DATEDIFF, DATEADD

**数学:** ABS, EXP, LOG, LOG10, SIGN, SQRT, TRUNC, MOD, RAND, RANDBETWEEN

**論理:** IF, NOT, TRUE, FALSE

**情報:** ISEMPTY, ISNULL

**集計:** COUNT, SUM, AVG, MIN, MAX（サポート対象外の集計については「制限事項」を参照）

---

## 制限事項

Azure CosmosDb をデータ ソースとして使用する場合、以下の動作や機能は **サポートされない** か、動作が異なります。

- **配列フィールド** — 配列であるドキュメント プロパティはスキーマから除外され、表示形式には使用できません。
- **分散と標準偏差の集計** — CosmosDb SQL API は `VAR` または `STDEV` をネイティブ サポートしないため、これらの集計関数は利用できません。
- **NULL チェック** — IS NULL / IS NOT NULL 条件は CosmosDb SQL API でサポートされないため、生成されるクエリから除外されます。
- **式に対する ORDER BY** — 通常の列参照ではなく計算式に対する並べ替えはサポートされません。
- **本番環境での自己署名証明書** — *Accept Any Server Certificate* オプションは TLS 検証を回避するため、ローカル開発またはテスト環境以外では使用しないでください。
- **スキーマの完全性** — スキーマは最大 100 件のドキュメント サンプルから推論されます。サンプルに存在しないフィールドは列として利用できません。
- **Direct 接続モードとネットワーク制限** — Direct モードは CosmosDb レプリカ ポートへの外向き TCP 接続が必要です。ネットワーク制限がある場合は Gateway モードを使用してください。
- **Core (SQL) API のみ対応** — Slingshot は CosmosDb Core (SQL) API を介して接続します。CosmosDb の他 API（MongoDB、Cassandra、Gremlin、Table）にはこのコネクタでは対応していません。

---

## 関連記事

- [データ ソースの概要](~/docs/analytics/datasources/overview.md)
- [データ ソース資格情報の管理](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [1 つの表示形式でのデータ ソースの結合](~/docs/analytics/datasources/data-blending.md)
