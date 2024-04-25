# 組織

組織はワークスペースであり、会社/職場によってアップロードされた情報を見つけることができます。



## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 |read-only  |
| created             | 文字列 |  read-only|
| name               | 文字列 | read-only |
| members            | 配列 <[MemberInfo](../generic-slingshot-resources.html#メンバー情報オブジェクト)> | read-only |
| workspaces            |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only|  
| projects    |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only| 
| pinLists   |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>  | read-only|
| discussionLists  |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>  | read-only|
| dashboardLists   |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>  | read-only|

<br/>

## 現在のユーザーのすべての組織を取得する 

<img src="../images/get-all.png" alt="Get all request for organizations" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***https://my.slingshotapp.io/v1/organizations***</span>

必須パラメーター: なし

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |すべての組織を表示できます。要求された組織は、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した応答本文の例:

```
{
    "items": [
        {
            "id": "{123456}_org",
            "modified": "2023-02-06T23:17:35.0000000",
            "created": "2020-09-02T11:46:32.0000000",
            "name": "Doe",
            "members": [
                {
                    "id": "e91e11eg_fe0b4111-c5f2-4111-1c1d-dz011eaf1982_u",
                    "role": "contributor",
                    "name": "George",
                    "email": "g@gmail.com "
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
                    "id": "e97e10ef_org_repo"
                },
                {
                    "id": "e97e10ef_org_pr_repo"
                }
            ],
            "pinLists": [
                {
                    "id": "{123456}",
                    "name": "Q1"
                },
                {
                    "id": "{123456}",
                    "name": "General"
                }
            ],
            "discussionLists": [
                {
                    "id": "e97e10ef_2fe3912c-7cdd-47f5-8109-dd4871b6dbe1",
                    "name": "Feedback"
                },
                {
                    "id": "e97e10ef_ff53341e-f1a2-44ba-be2d-b277bfa5f69e",
                    "name": "Marketing"
                }
            ]
        }
    ]
}
```
