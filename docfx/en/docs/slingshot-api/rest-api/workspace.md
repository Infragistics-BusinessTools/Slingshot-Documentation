# Workspace

Workspaces can be viewed as digital workplaces. With workspaces you can collaborate with other users, prioritize work and share different types of content – all in one place. You can create multiple workspaces. One workspace can have many projects.

## Schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string |  min = 1, max = 100 |
|description|string|min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| |
|organization| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |  
|members| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | |
|requests| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | |
| pendingInvites           | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
|projects| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |
|pinLists| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |
|taskLists| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |
| discussionLists           | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|  |


Example:

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
        "name": null
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara"
        }
    ],
    "requests": [],
    "pendingInvites": [],
    "projects": [],
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

---

## Create a workspace 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/workspaces***</span>

Required parameters: None

When you request to create a workspace, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|description|string|min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| | 
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a workspace. The newly created workspace will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body: 

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
        "name": null
    },
    "members": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Vyara"
        }
    ],
    "requests": [],
    "pendingInvites": [],
    "projects": [],
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

---

## Get a workspace

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/workspaces/{id}***</span>

Required parameters: the **id** of the workspace

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view your workspaces. The requested [Workspaces]() will be returned in the response body in an [ItemsObject](..generic-slingshot-resources#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Get all workspaces for a current user

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/workspaces***</span>

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view your workspaces. The requested [Workspaces]() will be returned in the response body in an [ItemsObject](..generic-slingshot-resources#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Update a workspace

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/workspaces/{id}***</span>

Required parameters: the **id** of the workspace

When you request to update a workspace, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|description|string|min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| | 
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The workspace is updated. The updated workspace will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Management",
    "startDate": "2023-02-08T09:05:22.195Z",
    "endDate": "2023-02-08T09:05:22.195Z",
    "status": "none",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Vyara",
            "role": "owner"
        }
    ],
    "description": "2022"
}
```

Example of a successful response body: 

```
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
    "requests": [],
    "pendingInvites": [],
    "projects": [],
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

---

## Delete a workspace

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}***

Required parameters: the **id** of the workspace

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The workspace is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Add members to a workspace  

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

Required parameters: the **id** of the workspace

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added members to the workspace.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
{
    "id": "{123456}_ws",
    "modified": "2023-02-09T14:51:20.0000000",
    "created": "2023-01-23T15:15:29.0000000",
    "name": "Documentation",
    "organization": {
        "id": "{123456}_org",
        "name": null
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
    "requests": [],
    "pendingInvites": [],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Testing"
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
```

---

## Update members of a workspace

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

Required parameters: the **id** of the workspace

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You updated the members of the workspace.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedack"
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
```

---

## Remove members from a workspace

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/members***

Required parameters: the **id** of the workspace

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You removed members from the workspace.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
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
            "name": "string"
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
```

---

## Grant requests to add members to a workspace  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/requests***

Required parameters: the **id** of the workspace

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You granted access to the users.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
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

---

## Deny requests to add members to a workspace

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/workspaces/{id}/requests***

Required parameters: the **id** of the workspace

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You denied access to the users.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [],
    "projects": [
        {
            "id": "{123456}_proj",
            "name": "Feedback"
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