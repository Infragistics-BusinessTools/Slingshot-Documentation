# ダッシュボード

ダッシュボードを使用すると、美しい視覚化を利用して情報を表示できます。たとえば、ビジネスのパフォーマンスを示すために使用できます。セクションとリストで整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 |read-only |
| modified             | 文字列 |read-only |
| created             | 文字列 | read-only |
| name               | 文字列 | min = 1, max = 100 | 
| description           | 文字列 | min = 1, max = 144, nullable |
| user            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only |
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only |  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only | 
| dashboardList             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| dashboardSection   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|  read-only|

<br/>

## 例:

```
{
    "id": "{123456}",
    "modified": "2023-02-06T12:34:39.0000000",
    "created": "2022-09-29T13:27:25.0000000",
    "name": "Absences",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "HR"
    },
    "dashboardSection": {
        "id": "{123456}_f",
        "name": "June"
    }
}
```

<br/>

## ダッシュボードを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboards/{id}***

必須パラメーター: ダッシュボードの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボードを表示できます。要求された [Dashboard](#dashboard-schema) は、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ダッシュボードの更新

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/>  ***https://my.slingshotapp.io/v1/dashboards/{id}***

必須パラメーター: ダッシュボードの **id**。

ダッシュボードの更新を要求する場合、要求の本文には次の内容を含めます: 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100|  
| description    |文字列 | min = 0, max = 144, nullable | 

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ダッシュボードが更新されました。更新されたダッシュボードは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "description": "Results",
    "name": "Results(2022)"
}
```

成功した応答本文の例:

```
{
    "id": "{123456}",
    "modified": "2023-02-06T13:39:17.0000000",
    "created": "2022-09-29T13:07:03.0000000",
    "name": "Results(2022)",
    "description": "Results",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Mihailova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "My Dashboards"
    },
    "dashboardSection": {
        "id": "{123456}_f",
        "name": "Section 1"
    }
}
```

<br/>

## ダッシュボードの削除 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/>  ***https://my.slingshotapp.io/v1/dashboards/{id}***

必須パラメーター: ダッシュボードの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ダッシュボードが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |