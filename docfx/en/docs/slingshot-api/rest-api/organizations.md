# Organizations

Organization is a workspace, where you and your colleagues can find information, uploaded by your company/workplace.



## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | read-only |
| modified             | string |read-only  |
| created             | string |  read-only|
| name               | string | read-only |
| members            | array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | read-only |
| workspaces            |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| projects    |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| pinLists   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only|
| discussionLists  |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only|
| dashboardLists   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only|

<br/>

## Get all organizations for a current user 

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/organizations***</span>

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all your organizations. The requested Organizations will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful response body:

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
