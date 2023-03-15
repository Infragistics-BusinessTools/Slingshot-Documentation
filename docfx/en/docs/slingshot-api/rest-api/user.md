# User

In the object hierarchy, the *users* objects represent accounts in Slingshot. Every user can find their own information, such as credentials, profile information, settings and content, in their account. 

## Schema

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string | read-only |    
| modified              | string | read-only |  
| created             | string | read-only | 
|email| string| |
| name               | string |min = 1, max = 200| 
|locale|string|read-only |
|organizations|array<[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|read-only|
| workspaces             | array<[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|
| projects             | array<[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| pinLists           | array<[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| taskLists      | array<[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| dashboardLists      | <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |

---

## Get current user document

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/user***</span>

Schema: [User](#user-schema)

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view your account’s information. The requested user document will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Update current user document

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/user***</span>

Required parameters: None

When you request to update the document, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The user document is updated. The updated user document will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Ver"
}
```

Example of a successful response body:

```
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
```