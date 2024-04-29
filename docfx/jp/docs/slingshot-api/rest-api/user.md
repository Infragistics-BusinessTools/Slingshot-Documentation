# ユーザー

オブジェクト モデルでは、*users* (ユーザー) オブジェクトは Slingshot のアカウントを表します。すべてのユーザーは、資格情報、プロファイル情報、設定、コンテンツなどの自分の情報を、自分のアカウントで見つけることができます。 

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | 文字列 | read-only |    
| modified              | 文字列 | read-only |  
| created             | 文字列 | read-only | 
|email| 文字列|read-only |
| name               | 文字列 |min = 1, max = 200| 
|locale|文字列|read-only |
|organizations|配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>|read-only|
| workspaces             | 配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only|
| projects             | 配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |
| pinLists           | 配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |
| taskLists      | 配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |
| dashboardLists      |配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only |

<br/>

## 例:

```
{
    "id": "{123456}_u",
    "modified": "2023-02-09T11:32:11.0000000",
    "created": "2022-05-18T13:47:52.0000000",
    "email": "t@gmail.com",
    "name": "Tom",
    "locale": "en",
    "organizations": [
        {
            "id": "{123456}_org",
            "role": "contributor",
            "name": "Jack",
            "type": "siblingmember"
        }
    ],
    "workspaces": [
        {
            "id": "{123456}_ws",
            "name": "Customer Support"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Marketing"
        },
        {
            "id": "{123456}_proj",
            "name": "Emails"
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
            "id": "{123456}_d",
            "name": "Personal Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}",
            "name": "Personal Tasks"
        }
    ]
}
```

<br/>

## 現在のユーザー ドキュメントを取得する

<img src="../images/get.png" alt="Get request for a user document" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/user***</span>

スキーマ: [User](#user-schema)

必須パラメーター: なし

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |アカウントの情報を表示できます。要求されたユーザー ドキュメントは、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 現在のユーザー ドキュメントを更新する

<img src="../images/patch.png" alt="Patch request for a current user document" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/user***</span>

必須パラメーター: なし

ユーザー ドキュメントの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 |  min = 1, max = 100 |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ユーザー ドキュメントが更新されました。更新されたユーザー ドキュメントは、応答本文で返されます。    |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Ver"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_u",
    "modified": "2023-02-09T11:32:11.0000000",
    "created": "2022-05-18T13:47:52.0000000",
    "email": "v@gmail.com",
    "name": "Ver",
    "locale": "en",
    "organizations": [
        {
            "id": "{123456}_org",
            "role": "contributor",
            "name": "Doe",
            "type": "siblingmember"
        }
    ],
    "workspaces": [
        {
            "id": "{123456}_ws",
            "name": "Customer Support "
        },
        {
            "id": "{123456}_ws",
            "name": "General Management"
        },
        {
            "id": "{123456}_ws",
            "name": "Management"
        }
    ],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Marketing"
        },
        {
            "id": "{123456}_proj",
            "name": "HR"
        }
    ],
    "dashboardLists": [
        {
            "id": "{123456}_u_repo",
            "name": "My Dashboards"
        },
        {
            "id": "{123456}_repo",
            "name": "Q1"
        }
    ],
    "pinLists": [
        {
            "id": "{123456}_d",
            "name": "Personal Pins"
        }
    ],
    "taskLists": [
        {
            "id": "{123456}",
            "name": "Personal Tasks"
        },
        {
            "id": "{123456}_tg",
            "name": "Feedback"
        }
    ]
}
    </code>
</div>