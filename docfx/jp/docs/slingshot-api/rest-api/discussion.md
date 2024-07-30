# ディスカッション

ディスカッションは、プロジェクトとワークスペースで作成できます。ディスカッションはワークスペースとプロジェクトに個別に含まれるものであるため、Slingshot のすべてのディスカッションにアクセスできるわけではありません。さまざまなリストで整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 |read-only  |
| timestamp           | double |  read-only|
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |  
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| read-only| 
| discussionList             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |
| lastMessage   | オブジェクト <[ChatMessageInfo](../generic-slingshot-resources.md#チャット-メッセージ情報オブジェクト)> | read-only|

<br/>

## 例: 

```
{
    "id": "{123456}",
    "modified": "2023-02-03T11:42:39.0000000",
    "timestamp": 1675424559437.8538,
    "created": "2023-01-27T11:53:13.0000000",
    "name": "Emails",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Support"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "List 2"
    },
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "Thanks."
    }
}
```

<br/>

## ディスカッションを作成する  

<img src="../images/post-request.png" alt="Post request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/discussion***</span>

必須パラメーター: なし 

ディスカッションの作成を要求する場合、要求の本文には次の内容を含めます。  

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |  
| discussionList         |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> |required |  

 必須パラメーター: なし

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ディスカッションが正常に作成されました。新しく作成されたディスカッションは、応答本文で返されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback",
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}",
    "modified": "2023-02-03T10:11:36.0000000",
    "timestamp": 1675419096390.1465,
    "created": "2023-02-03T10:11:36.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Documentation"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
    </code>
</div>

<br/>

## ディスカッションを取得する
 
<img src="../images/get.png" alt="Get request for a discussion" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/discussions***</span>

必須パラメーター: ディスカッションの **id**。
 
可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ディスカッションを表示できます。要求された [Discussion](#discussion-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ドキュメントのすべてのディスカッションを取得する

<img src="../images/get-all.png" alt="Get all request for discussions" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/discussions/parent/{id}***</span>

必須パラメーター: 親ディスカッション リストの **id****。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ドキュメントのすべてのディスカッションを表示できます。要求されたディスカッションは、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。|

<br/>

## ディスカッション メッセージを取得する

<img src="../images/get-discussion-messages.png" alt="Delete request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}/messages***

必須パラメーター: ディスカッションの **id**。 

>[!NOTE] 返されるメッセージの数または開始インデックスを設定しない場合、それらのパラメーターは自動的に追加されます。返されるメッセージ数のデフォルト値は 10 で、開始インデックスのデフォルト値は 0 です。

可能な応答:

|コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ディスカッション内のすべてのメッセージを表示できます。要求された [Discussion](#discussion-schema) メッセージは、応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ディスカッション メッセージを送信する

<img src="../images/post-send-discussion-message.png" alt="Send discussion message for discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}/send***

必須パラメーター: ディスカッションの **id**。

ディスカッション メッセージの送信を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| text              | 文字列 |  |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |メッセージが送信されます。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "text": "I will schedule a meeting for tomorrrow."
}
```

<br/>

## ディスカッションを更新する

<img src="../images/patch.png" alt="Patch request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}***

必須パラメーター: ディスカッションの **id**。 

ディスカッションの更新を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ディスカッションが更新されました。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。|

成功した要求本文の例:

```
{
    "name": "Emails"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}",
    "modified": "2023-02-03T11:42:39.0000000",
    "timestamp": 1675424559437.8538,
    "created": "2023-01-27T11:53:13.0000000",
    "name": "Emails",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Support"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "List 1"
    },
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "We should check this again."
    }
}
    </code>
</div>

<br/>

## ディスカッションを削除する 

<img src="../images/delete.png" alt="Delete request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}***

必須パラメーター: 特定のディスカッションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ディスカッションは削除されます。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |
