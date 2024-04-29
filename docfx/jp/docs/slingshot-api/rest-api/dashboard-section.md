# ダッシュボード セクション

ダッシュボードを使用すると、美しい視覚化を利用して情報を表示できます。ダッシュボードをセクションで整理できます。セクションは、ダッシュボード リストの分割です。1 つのリストに複数のセクションを作成できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 |read-only |
| created             | 文字列 | read-only |
| name               | 文字列 | min = 1, max = 100 | 
| user            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only|
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> |read-only |  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| read-only| 
| dashboardList             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |
| dashboards   |配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |

<br/>

## 例:

```
{
    "id": "{123456}_f",
    "modified": "2023-02-06T14:52:33.0000000",
    "created": "2023-02-06T14:52:33.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Q2"
    },
    "dashboards": [
        {
            "id": "{123456}",
            "name": "Marketing"
        }
    ]
}
```

<br/>

## ダッシュボード セクションを作成する

<img src="../images/post-request.png" alt="Post request for a dashboard section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic"> ***https://my.slingshotapp.io/v1/dashboardsections***</span>

必須パラメーター: なし

ダッシュボード セクションの作成を要求すると、要求本体には次のコンテンツが含まれます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 | 
| dashboardList             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | required |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ダッシュボード セクションが正常に作成されました。新しく作成されたダッシュボード セクションは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q4",
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
 <code>
{
    "id": "{123456}_f",
    "modified": "2023-02-06T14:52:33.0000000",
    "created": "2023-02-06T14:52:33.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    },
    "dashboards": [
        {
            "id": "{123456}",
            "name": "Marketing"
        }
    ]
}
 </code>
</div>

<br/>

## ダッシュボード セクションを取得する

<img src="../images/get.png" alt="Get request for a dashboard section" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardsections/{id}***

必須パラメーター: ダッシュボード セクションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボード セクションを表示できます。要求された [DashboardSection](#dashboardsection-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ダッシュボード リストのすべてのダッシュボード セクションを取得する

<img src="../images/get-all.png" alt="Get all request for dashboard sections" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardsections/parent/{id}***

必須パラメーター: ダッシュボード リストの **id**。 

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ダッシュボード リストですべてのダッシュボード セクションを表示できます。要求された [DashboardSection](#dashboardsection-schema) は、[ItemsObject](../generic-slingshot-resources.md#ドキュメント情報オブジェクト) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ダッシュボード セクションを更新する  

<img src="../images/patch.png" alt="Patch request for a dashboard section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardsections/{id}***

必須パラメーター: ダッシュボード セクションの **id**。

ダッシュボード セクションの更新を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボード セクションが更新されました。更新されたダッシュボード セクションは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q2"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_f",
    "modified": "2023-02-06T15:08:45.0000000",
    "created": "2023-02-06T14:51:44.0000000",
    "name": "Q2",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    },
    "dashboards": [
        {
            "id": "{123456}",
            "name": "HR"
        }
    ]
}
    </code>
</div>

<br/>

## ダッシュボード セクションを削除する

<img src="../images/delete.png" alt="Delete request for a dashboard section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardsections/{id}***

必須パラメーター: ダッシュボード セクションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ダッシュボード セクションが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |