# ワークスペース

ワークスペースは、デジタル ワークプレイスと見なすことができます。ワークスペースを使用すると、他のユーザーとの共同作業、仕事の優先順位付け、さまざまな種類のコンテンツの共有をすべて 1 か所で行うことができます。複数のワークスペースを作成できます。1 つのワークスペースに複数のプロジェクトを含めることができます。

ユーザーは、ワークスペースでさまざまな役割と権限を持つことができることに注意してください。[こちら](https://www.slingshotapp.io/ja/help/docs/security)では、各ロールについて詳しく知ることができます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 |read-only  |
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |
|description|文字列|min = 1, max = 144, nullable|
|startDate|文字列 <DateTime> | |
|endDate|文字列 <DateTime> | |
|status| 文字列列挙体 ("none", "ontarget", "atrisk", "danger", "completed")| |
|organization| オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only|  
|members| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> | read-only|
|requests| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> | read-only|
| pendingInvites           | 配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> |  read-only|
|projects| 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only|
|pinLists| 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only|
|taskLists| 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>|read-only |
| discussionLists           | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only |
| dashboardLists      | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only |

<br/>

## 例:

```
{
    "id": "{123456}_ws",
    "modified": "2023-02-08T08:40:30.0000000",
    "created": "2023-02-08T08:40:27.0000000",
    "name": "Marketing",
    "description": "Q1",
    "startDate": "2023-02-08T08:29:02.0000000",
    "endDate": "2023-02-08T08:29:02.0000000",
    "status": "none",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tim",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        }
    ]
}
```

<br/>

## ワークスペースの作成 

<img src="../images/post-request.png" alt="Post request for a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces***</span>

必須パラメーター: なし

ワークスペースの作成を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
|description|文字列|min = 1, max = 144, nullable|
|startDate|文字列 <DateTime> | |
|endDate|文字列 <DateTime> | |
|status| 文字列列挙体 ("none", "ontarget", "atrisk", "danger", "completed")| | 
|members| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> | |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ワークスペースが正常に作成されました。新しく作成されたワークスペースは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Marketing",
    "startDate": "2023-02-08T08:29:02.597Z",
    "endDate": "2023-02-08T08:29:02.597Z",
    "status": "none",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Vyara",
            "role": "owner"
        }
    ],
    "description": "Q1"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-08T08:40:30.0000000",
    "created": "2023-02-08T08:40:27.0000000",
    "name": "Marketing",
    "description": "Q1",
    "startDate": "2023-02-08T08:29:02.0000000",
    "endDate": "2023-02-08T08:29:02.0000000",
    "status": "none",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tim",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        }
    ]
}
    </code>
</div>


<br/>

## ワークスペースを取得する

<img src="../images/get.png" alt="Get request for a workspace" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/workspaces/{id}***</span>

必須パラメーター: ワークスペースの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースを表示できます。要求された [Workspaces]() は、[ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 現在のユーザーのすべてのワークスペースを取得する

<img src="../images/get-all.png" alt="Get all request for workspaces for a current user" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/workspaces***</span>

必須パラメーター: なし

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースを表示できます。要求された [Workspaces]() は、[ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ワークスペースを更新する

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/workspaces/{id}***</span>

必須パラメーター: ワークスペースの **id**。

ワークスペースの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 |  min = 1, max = 100 |
|description|文字列|min = 1, max = 144, nullable|
|startDate|文字列 <DateTime> | |
|endDate|文字列 <DateTime> | |
|status| 文字列列挙体 ("none", "ontarget", "atrisk", "danger", "completed")| | 


可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースが更新されました。更新されたワークスペースは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Management",
    "startDate": "2023-02-08T09:05:22.195Z",
    "endDate": "2023-02-08T09:05:22.195Z",
    "status": "none",
    "description": "2022"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "id": "{123456}_ws",
    "modified": "2023-02-08T09:07:50.0000000",
    "created": "2023-02-08T08:40:27.0000000",
    "name": "Management",
    "description": "2022",
    "startDate": "2023-02-08T09:05:22.0000000",
    "endDate": "2023-02-08T09:05:22.0000000",
    "status": "none",
    "organization": {
        "id": "{123456}",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tim",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        }
    ]
}
    </code>
</div>

<br/>

## ワークスペースの削除

<img src="../images/delete.png" alt="Delete request for a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}***

必須パラメーター: ワークスペースの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ワークスペースが削除されます。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ワークスペースにメンバーを追加する  

<img src="../images/post-request.png" alt="Post request for adding members to a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

必須パラメーター: ワークスペースの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースにメンバーが正常に追加されました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik Petrov",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-09T14:51:20.0000000",
    "created": "2023-01-23T15:15:29.0000000",
    "name": "Documentation",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara",
            "email": "v@gmail.com"
        },
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Nik Petrov",
            "email": "n@gmail.com"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tom",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Testing"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        },
        {
            "id": "{123456}_tg",
            "name": "Threads"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        },
        {
            "id": "{123456}",
            "name": "Feedback"
        }
    ]
}
    </code>
</div>

<br/>

## ワークスペースのメンバーのロールを更新する

<img src="../images/patch.png" alt="Patch request for updating members' roles of a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

必須パラメーター: ワークスペースの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースにメンバーが正常に追加されました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nick",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-13T10:37:36.0000000",
    "created": "2023-01-23T15:15:29.0000000",
    "name": "Customer support",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver",
            "email": "v@gmail.com"
        },
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Nick",
            "email": "n@gmail.com"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tom",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedack"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        },
        {
            "id": "{123456}_tg",
            "name": "Q1"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        },
        {
            "id": "{123456}",
            "name": "Emails"
        },
        {
            "id": "{123456}",
            "name": "Chats"
        }
    ]
}
    </code>
</div>

<br/>

## ワークスペースからメンバーを削除する

<img src="../images/delete.png" alt="Delete request for removing members from a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

必須パラメーター: ワークスペースの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ワークスペースからメンバーを削除しました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nick",
            "role": "contributor"
        }
    ]
}

```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-13T10:25:22.0000000",
    "created": "2023-01-23T15:15:29.0000000",
    "name": "Customer Support",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver",
            "email": "v@gmail.com"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tom",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        },
        {
            "id": "{123456}_tg",
            "name": "文字列"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        },
        {
            "id": "{123456}",
            "name": "Email Support"
        },
        {
            "id": "{123456}",
            "name": "Chat Support"
        }
    ]
}
    </code>
</div>

<br/>

## メンバーをワークスペースに追加する要求を許可する  

<img src="../images/patch.png" alt="Patch request for granting requests to add members to a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/requests***

必須パラメーター: ワークスペースの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ユーザーにアクセスを許可しました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-10T14:20:52.0000000",
    "created": "2023-02-10T14:13:59.0000000",
    "name": "Workspace",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Nick",
            "email": "n@gmail.com"
        },
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver",
            "email": "v@gmail.com"
        },
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ron",
            "email": "r@gmail.com"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tom",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        }
    ]
}
    </code>
</div>

<br/>

>[!NOTE] ワークスペースにメンバーを追加するためのアクセス権を要求に付与できるのは管理者のみです。

<br/>

## ワークスペースにメンバーを追加する要求を拒否する

<img src="../images/delete.png" alt="Delete request for denying requests to add memberst to a workspace" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/requests***

必須パラメーター: ワークスペースの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ユーザーにアクセスを拒否しました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_ws",
    "modified": "2023-02-10T14:29:09.0000000",
    "created": "2023-02-10T14:13:59.0000000",
    "name": "Customer Support",
    "organization": {
        "id": "{123456}_org",
        "name": "Doe"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Nick",
            "email": "n@gmail.com"
        },
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver",
            "email": "v@gmail.com"
        }
    ],
    "requests": [
        {
            "id": "{123456}_u",
            "name": "Tom",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q3"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_ws_d",
            "name": "Workspace Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Workspace Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Workspace Discussions"
        }
    ]
}
    </code>
</div>

>[!NOTE] ワークスペースにメンバーを追加するためのアクセス要求を拒否できるのは管理者のみです。 