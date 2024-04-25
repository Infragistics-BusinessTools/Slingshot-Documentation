# ディスカッション リスト

ディスカッションは、プロジェクトとワークスペースで作成できます。さまざまなリストで整理できます。ディスカッション リストは、特定のテーマに特化したセクションです。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 |read-only  |
| modified             | 文字列 |read-only  |
| created             | 文字列 | read-only |
| name               | 文字列 | min = 1, max = 100 |  
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only| 
| discussionsCount             | 整数 | read-only |
| discussions             | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only |

<br/>

## 例:

```
{
    "id": "{123456}",
    "modified": "2023-02-07T07:43:52.0000000",
    "created": "2023-02-07T07:43:52.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    },
    "discussionsCount": 0,
    "discussions": [
        {
            "id": "{123456}",
            "name": "Threads"
        }
    ]
}
```

<br/>

## ディスカッション リストを作成する  

<img src="../images/post-request.png" alt="Post request for a discussion list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/discussionlists***</span>

必須パラメーター: なし

ディスカッション リストの作成を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |  
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| required, one-of|  
 | project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | required, one-of| 

 可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ディスカッション リストが正常に作成されました。新しく作成されたディスカッション リストは、応答本文で返されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback",
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}",
    "modified": "2023-02-07T07:43:52.0000000",
    "created": "2023-02-07T07:43:52.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    },
    "discussionsCount": 0,
    "discussions": [
        {
            "id": "{123456}",
            "name": "Threads"
        }
    ]
}
 </code>
</div>

<br/>

## ディスカッション リストを取得する

<img src="../images/get.png" alt="Get request for a discussion list" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/discussionlists/{id}***</span>

必須パラメーター: ディスカッション リストの **id**。

 可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ディスカッション リストを表示できます。要求された [DiscussionList](#discussionlist-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ドキュメントのすべてのディスカッション リストを取得する

<img src="../images/get-all.png" alt="Get all request for discussion lists" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/parent/{id}***

必須パラメーター: 親ドキュメントの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ドキュメントのすべてのディスカッション リストを表示できます。要求された [DiscussionList(s)](#discussionlist-schema) は、ItemsObject (ハイパーリンク) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ディスカッション リストを更新する

<img src="../images/patch.png" alt="Patch request for a discussion list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/{id}***

必須パラメーター: ディスカッション リストの **id**。

ディスカッション リストの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |  


 可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ディスカッション リストが更新されました。更新されたディスカッション リストは、応答本文で返されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}",
    "modified": "2023-02-07T07:56:13.0000000",
    "created": "2023-02-07T07:55:22.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Q1"
    },
    "discussionsCount": 0,
    "discussions": [
        {
            "id": "{123456}",
            "name": "Customer support"
        }
    ]
}
    </code>
</div>

<br/>

## ディスカッション リストを削除する

<img src="../images/delete.png" alt="Delete request for a discussion list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/{id}***

必須パラメーター: ディスカッション リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ディスカッション リストが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。|