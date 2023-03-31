# タスク セクション

作業をより適切に整理するために、タスクを使用できます。見やすくするために、タスクを別のセクションに整理できます。セクションは、タスク リストの分割です。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | 文字列 | read-only |    
| modified              | 文字列 |  read-only|  
| created             | 文字列 |  read-only|  
| name               | 文字列 |min = 1, max = 100|  
| user             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only | 
| workspace            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only |  
| project    | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only| 
|taskList| オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>|read-only|
| tasks  | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>  | read-only| 

<br/>

## 例:

```
{
    "id": "{123456}_tg",
    "modified": "2023-01-26T13:44:26.0000000",
    "created": "2023-01-26T13:44:26.0000000",
    "name": "Q1",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Customer support"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Feedback"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Approval"
        }
    ]
}
  ```

<br/>

## タスク セクションを作成する

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasksections***</span>

必須パラメーター: なし 

タスク セクションの作成を要求する場合、要求の本文には次の内容を含めます。  

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
|taskList| オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| required|

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |タスク セクションが正常に作成されました。新しく作成されたタスク セクションは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |要求を承認できません。これは、必要な権限がない場合に発生する可能性があります。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q3",
    "taskList": {
        "id": "{123456}_tg",
        "name": "3"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tg",
    "modified": "2023-02-03T12:03:58.0000000",
    "created": "2023-02-03T12:03:58.0000000",
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Petrova"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "3"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Feedback"
        }
    ]
}
    </code>
</div>

<br/>

## タスク セクションを取得する
 
<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

必須パラメーター: タスクの **id**。  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスク セクションを表示できます。要求されたタスク セクションは、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親タスク リストのすべてのタスク セクションを取得

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/parent/{id}***

必須パラメーター: 親タスク リストの **id**。

可能な応答:

コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親タスク リストにあるすべてのタスク セクションを表示できます。要求されたタスク セクションは、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## タスク セクションを更新する 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

必須パラメーター: タスク セクションの **id**。

タスク セクションの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 |  min = 1, max = 100 |

可能な応答:

| コード | 説明
|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスク セクションが更新されました。更新されたタスク セクションは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Support cases"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tg",
    "modified": "2023-02-03T12:22:07.0000000",
    "created": "2023-02-03T12:03:58.0000000",
    "name": "Support cases",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Petrova"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Support"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Approval"
        }
    ]
}
    </code>
</div>

<br/>

## タスク セクションを削除する 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

必須パラメーター: タスク セクションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |タスク セクションが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |