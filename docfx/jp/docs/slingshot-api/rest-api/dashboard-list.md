# ダッシュボード リスト

ダッシュボードを使用すると、美しい視覚化を利用して情報を表示できます。見やすくするために、別のリストに整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |  
| modified             | 文字列 | read-only |
| created              | 文字列 | read-only |    
| name               | 文字列 | min = 1, max = 100 |  
| user   |  オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only |
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only |
| dashboardSections          | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only |  

<br/>

## 例:

```
{
    "id": "{123456}_repo",
    "modified": "2023-02-03T14:07:34.0000000",
    "created": "2023-02-03T14:07:34.0000000",
    "name": "Marketing",
    "user": {
        "id": "{123456}_u ",
        "name": "Teddy Mitkova"
    },
    "dashboardSections": [
        {
            "id": "{123456}_f",
            "name": "June"
        }
    ]
}
```

<br/>

## ダッシュボード リストを作成する   

<img src="../images/post-request.png" alt="Post request for a dashboard list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/dashboardlists***</span>

必須パラメーター: なし 

ダッシュボード リストの作成を要求すると、要求の本文には次の内容を含めます。  

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100|  
| user   | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | required, one-of|
| workspace            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| required, one-of|  
 | project    | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |required, one-of | 

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ダッシュボード リストの作成を要求すると、要求本文には次のコンテンツが含まれます。新しく作成されたダッシュボード リストは、応答本文で返されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Marketing",
    "user": {
        "id": "{123456}_u",
        "name": "Teddy Mitkova"
    }
}
 ```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例: </b></summary>
    <code>
{
    "id": "{123456}_repo",
    "modified": "2023-02-03T14:07:34.0000000",
    "created": "2023-02-03T14:07:34.0000000",
    "name": "Marketing",
    "user": {
        "id": "{123456}_u ",
        "name": "Teddy Mitkova"
    },
    "dashboardSections": [
        {
            "id": "{123456}_f",
            "name": "May"
        }
    ]
}
    </code>
</div>

<br/>

## ダッシュボード リストを取得する 

<img src="../images/get.png" alt="Get request for a dashboard list" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

必須パラメーター: ダッシュボード リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボード リストとそのダッシュボードを表示できます。要求された [DashboardList](#dashboardlist-schema) は、応答本文で返されます。    |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ドキュメントのすべてのダッシュボード リストを取得する

<img src="../images/get-all.png" alt="Get all request for dashboard lists" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/parent/{id}***

必須パラメーター: 親ドキュメントの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ドキュメントのすべてのダッシュボード リストを表示できます。要求されたダッシュボード リストは、[ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ダッシュボード リストを更新する  

<img src="../images/patch.png" alt="Patch request for a  dashboard list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

必須パラメーター: ダッシュボード リストの **id**。

ダッシュボード リストの更新を要求すると、要求本体には次のコンテンツが含まれます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボード リストが更新されました。更新されたダッシュボード リストは、応答本文で返されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Marketing"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例: </b></summary>
   <code>
{
    "id": "{123456}_repo",
    "modified": "2023-02-06T12:34:39.0000000",
    "created": "2023-02-06T12:08:44.0000000",
    "name": "Marketing",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardSections": [
        {
            "id": "{123456}_f",
            "name": "Q1"
        }
    ]
}
    </code>
</div>

<br/>

## ダッシュボード リストを削除する

<img src="../images/delete.png" alt="Delete request for a dashboard list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

必須パラメーター: ダッシュボード リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ダッシュボード リストが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |
