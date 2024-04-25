# プロジェクト

さまざまなイニシアチブとプロセスの概要をよりよく把握したい場合は、プロジェクトを作成できます。複数のプロジェクトを作成できます。 
 
ユーザーは、ワークスペースでさまざまなロールと権限を持つことができることに注意してください。[こちら](https://www.slingshotapp.io/ja/help/docs/security)では、各ロールについて詳しく知ることができます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 | read-only |
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |
|description|文字列| min = 1, max = 144, nullable|
|startDate|文字列 <DateTime> | |
|endDate|文字列 <DateTime> | |
|status| 文字列列挙体 ("none", "ontarget", "atrisk", "danger", "completed")| | 
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only| 
|members| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> |read-only |
|requests| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> |read-only |
| pendingInvites           | 配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> | read-only |
|pinLists| 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only|
|taskLists| 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>|read-only |
| discussionLists           | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only |
| dashboardLists      | 配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only |

<br/>

## 例:

```
{
    "id": "{123456}_proj",
    "modified": "2023-02-08T10:28:43.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Customer Support",
    "description": "Customer Support Cases",
    "startDate": "2023-02-08T09:36:12.0000000",
    "endDate": "2023-02-08T09:36:12.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Management"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner"
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
            "name": "Joan Doe",
            "email": "joan@gmail.com"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        }
    ]
}
```

<br/>

## プロジェクトを作成

<img src="../images/post-request.png" alt="Post request for a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects***</span>

必須パラメーター: なし

プロジェクトの作成を要求すると、要求の本文には次の内容が含まれます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
|description|文字列| min = 1, max = 144, nullable|
|startDate|文字列 <DateTime> | |
|endDate|文字列 <DateTime> | |
|status| 文字列列挙体 ("none", "ontarget", "atrisk", "danger", "completed")| | 
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |required | 
|members| 	配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> ||

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |プロジェクトが正常に作成されました。新しく作成されたプロジェクトは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Customer Support",
    "startDate": "2023-02-08T09:36:12.627Z",
    "endDate": "2023-02-08T09:36:12.627Z",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner"
        }
    ],
    "description": "Customer Support Cases"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_proj",
    "modified": "2023-02-08T10:28:43.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Customer Support",
    "description": "Customer Support Cases",
    "startDate": "2023-02-08T09:36:12.0000000",
    "endDate": "2023-02-08T09:36:12.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Management"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner"
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
            "name": "John",
            "email": "jdoe@gmail.com",
            "role": "owner"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        }
    ]
}
    </code>
</div>

<br/>

## プロジェクトを取得する

<img src="../images/get.png" alt="Get request for a project" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/>
<span class="italic">***https://my.slingshotapp.io/v1/projects/{id}***</span>

必須パラメーター: プロジェクトの **id**。

可能な応答:

コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プロジェクトを表示できます。要求されたプロジェクトは、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 現在のユーザーのすべてのプロジェクトを取得する 

<img src="../images/get-all.png" alt="Get all request for projects for a current user" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/projects***</span>

必須パラメーター: なし

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |参加しているすべてのプロジェクトを表示できます。要求されたプロジェクト (ハイパーリンク) は、[ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) 配列の応答本文で返されます。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## プロジェクトを更新する  

<img src="../images/patch.png" alt="Patch request for a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

必須パラメーター: プロジェクトの **id**。

プロジェクトの更新を要求する場合、要求の本文には次の内容を含めます。 

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
| 200 (Success) |プロジェクトが更新されました。更新されたプロジェクトは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback",
    "startDate": "2023-02-08T11:01:23.607Z",
    "endDate": "2023-02-08T11:01:23.607Z",
    "status": "none",
    "description": "Implementing Feedback"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_proj",
    "modified": "2023-02-08T11:02:25.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Feedback",
    "description": "Implementing Feedback",
    "startDate": "2023-02-08T11:01:23.0000000",
    "endDate": "2023-02-08T11:01:23.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Management"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara Todorova"
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
            "name": "John",
            "email": "jdoe@gmail.com",
            "role": "owner"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        }
    ]
}
    </code>
</div>

<br/>

## プロジェクトを削除する

<img src="../images/delete.png" alt="Delete request for a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

必須パラメーター: プロジェクトの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |プロジェクトが削除されます。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## プロジェクトにメンバーを追加する

<img src="../images/post-request.png" alt="Post request for adding members to a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

必須パラメーター: プロジェクトの **id**。 

プロジェクトへのメンバーの追加を要求すると、要求本文には次の内容が含まれます。 

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プロジェクトにメンバーが正常に追加されました。更新されたプロジェクトは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "N",
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
    "id": "{123456}_proj",
    "modified": "2023-02-09T12:15:22.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Feedback",
    "description": "Q1",
    "startDate": "2023-02-08T11:01:23.0000000",
    "endDate": "2023-02-08T11:01:23.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Marketing"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara Mitkova"
        },
        {
            "id": "{123456}1_u",
            "role": "owner",
            "name": "N",
            "email": "n@gmail.com "
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
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        },
        {
            "id": "{123456}_b",
            "name": "Test"
        },
        {
            "id": "{123456}_b",
            "name": "HR"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        },
        {
            "id": "{123456}",
            "name": "Support Emails"
        }
    ]
}
    </code>
</div>

<br/>

## プロジェクトのメンバーのロールを更新する 

<img src="../images/patch.png" alt="Patch request for updating members' roles of a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

必須パラメーター: プロジェクトの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プロジェクトが更新されました。更新されたプロジェクトは、応答本文で返されます。    |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Joan",
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
    "id": "{123456}_proj",
    "modified": "2023-02-09T14:39:08.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Marketing",
    "description": "Research",
    "startDate": "2023-02-08T11:01:23.0000000",
    "endDate": "2023-02-08T11:01:23.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Management"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver"
        },
        {
            "id": "{123456}_u",
            "role": "contributor",
            "name": "Joan",
            "email": "joan@gmail.com"
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
            "name": "Pete",
            "email": "p@gmail.com"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        },
        {
            "id": "{123456}_b",
            "name": "Feedback"
        },
        {
            "id": "{123456}_b",
            "name": "HR"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        },
        {
            "id": "{123456}",
            "name": "Testing"
        }
    ]
}
    </code>
</div>

<br/>

## ワークプロジェクトからメンバーを削除する 

<img src="../images/delete.png" alt="Delete request for removing members from a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

必須パラメーター: プロジェクトの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プロジェクトからメンバーを正常に削除しました。更新されたプロジェクトは、応答本文で返されます。    |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik Georgiev",
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
    "id": "{123456}_proj",
    "modified": "2023-02-09T14:14:03.0000000",
    "created": "2023-02-08T10:28:43.0000000",
    "name": "Marketing",
    "description": "Research",
    "startDate": "2023-02-08T11:01:23.0000000",
    "endDate": "2023-02-08T11:01:23.0000000",
    "status": "none",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Documentation"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Ver Petrova"
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
            "name": "Joan Doe",
            "email": "joan@gmail.com"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        },
        {
            "id": "{123456}_b",
            "name": "HR"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        },
        {
            "id": "{123456}",
            "name": "Test"
        }
    ]
}
    </code>
</div>

<br/>

## プロジェクトにメンバーを追加するためのアクセス権を要求に付与する
  
<img src="../images/patch.png" alt="Patch request for granting requests access to add members to a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

必須パラメーター: プロジェクトの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プロジェクトにアクセスを許可しました。   |
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
        "id": "{123456}_proj",
        "modified": "2023-02-10T14:33:28.0000000",
        "created": "2023-02-10T14:14:26.0000000",
        "name": "Feedback",
        "workspace": {
            "id": "{123456}_ws",
            "name": "Customer Support"
        },
        "members": [
            {
                "id": "{123456}_u",
                "role": "owner",
                "name": "Nik Tachev",
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
                "name": "Tim",
                "email": "t@gmail.com",
                "role": "owner"
            }
        ],
        "pendingInvites": [
            {
                "id": "{123456}_u",
                "role": "owner",
                "name": "Joan Doe",
                "email": "joan@gmail.com"
            }
        ],
        "dashboardLists": [
            {
                "id": "{123456}_repo",
                "name": "Q2"
            }
        ],
        "pinLists": [
            {
                "id": "{123456}_proj_d",
                "name": "Project Pins"
            }
        ],
        "taskLists": [
            {
                "id": "{123456}_tg",
                "name": "Project Tasks"
            }
        ],
        "discussionLists": [
            {
                "id": "{123456}",
                "name": "Project Discussions"
            }
        ]
}
    </code>
</div>

<br/>

>[!NOTE] プロジェクトにメンバーを追加するためのアクセス権を要求に付与できるのは管理者のみです。 

<br/>

## プロジェクトにメンバーを追加する要求を拒否する

<img src="../images/delete.png" alt="Delete request for denying requests to add members to a project" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

必須パラメーター: プロジェクトの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)>

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |要求は拒否されます。   |
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
    "id": "{123456}_proj",
    "modified": "2023-02-10T14:37:00.0000000",
    "created": "2023-02-10T14:14:26.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Customer Support"
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Nik Tachev",
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
            "name": "Tim",
            "email": "t@gmail.com",
            "role": "owner"
        }
    ],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan Doe",
            "email": "joan@gmail.com"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_repo",
            "name": "Q2"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}_tg",
            "name": "Project Tasks"
        }
    ],
    "discussionLists": [
        {
            "id": "{123456}",
            "name": "Project Discussions"
        }
    ]
}
    </code>
</div>

<br/>

>[!NOTE] プロジェクトにメンバーを追加するためのアクセス要求を拒否できるのは管理者のみです。 