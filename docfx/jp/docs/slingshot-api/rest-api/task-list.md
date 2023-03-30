# タスク リスト

作業をより適切に整理するために、タスクを使用できます。見やすくするために、タスクを別のリストに整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 | read-only |
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |  
| user             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| taskSections   |配列 <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only| 

<br/>

## 例:

```
{
    "items": [
        {
            "id": "{123456}_tg",
            "modified": "2023-01-23T15:15:30.0000000",
            "created": "2023-01-23T15:15:30.0000000",
            "name": "Workspace Tasks",
            "workspace": {
                "id": "{123456}_ws",
                "name": "Customer support"
            },
            "taskSections": [
                {
                    "id": "{123456}_tg",
                    "name": "Q2"
                }
            ]
        },
        {
            "id": "{123456}_tg",
            "modified": "2023-01-26T08:16:35.0000000",
            "created": "2023-01-26T08:16:34.0000000",
            "name": "Feedback",
            "workspace": {
                "id": "{123456}_ws",
                "name": "Marketing"
            },
            "taskSections": [
                {
                    "id": "{123456}_tg",
                    "name": "Q2"
                }
            ]
        }
    ]
}
```

<br/>

## タスク リストを作成する 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

必須パラメーター: なし 

タスクの作成を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
| user             |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | required, one-of| 
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | required, one-of|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| required, one-of|

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |タスク リストが正常に作成されました。新しく作成されたタスク リストは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tg",
    "modified": "2023-02-16T11:36:57.0000000",
    "created": "2023-02-16T11:36:56.0000000",
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskSections": [
        {
            "id": "{123456}_tg",
            "name": "Q2"
        }
    ]
}
    </code>
</div>

<br/>

## タスク リストを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

必須パラメーター: タスク リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスク リストを表示できます。要求された [TaskList](#task-list-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ドキュメントのすべてのタスク リストを取得

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/parent/{id}***

必須パラメーター: 親ドキュメントの **id**。

可能な応答:

 コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ドキュメントのすべてのタスク リストを表示できます。要求されたタスク リストは、[ItemsObject](../generic-slingshot-resources.html#item-object) 配列の応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## タスク リストを更新する  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

必須パラメーター: タスク リストの **id**。

タスクの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスク リストが更新されました。更新されたタスク リストは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q4"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tg",
    "modified": "2023-02-16T11:49:56.0000000",
    "created": "2023-02-16T11:36:56.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskSections": [
        {
            "id": "{123456}_tg",
            "name": "Q1"
        }
    ]
}
    </code>
</div>

<br/>

## タスク リストを削除する

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

必須パラメーター: タスク リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |タスク リストが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |