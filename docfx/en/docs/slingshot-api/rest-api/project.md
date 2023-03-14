# Project

In case you want to have a better overview of different initiatives and processes, bound to a group of people, you can create a project. You can create multiple projects.

## Schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string |  min = 1, max = 100 |
|description|string| min = 1, max = 144, nullable|
|startDate|string, date-time| |
|endDate|string, date-time| |
|status| string, enum (none, ontarget, atrisk, danger completed)| | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | | 
|members| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | |
|requests| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | |
| pendingInvites           | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
|pinLists| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |
|taskLists| object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| |
| discussionLists           | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|  |

Example:

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
    "requests": [],
    "pendingInvites": [],
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

---

## Create a project

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/projects***</span>

Required parameters: None

When you request to create a project, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|description|string| min = 1, max = 144, nullable|
|startDate|string, date-time| |
|endDate|string, date-time| |
|status| string, enum (none, ontarget, atrisk, danger completed)| | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | | 
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a project. The newly created project will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body: 

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
    "requests": [],
    "pendingInvites": [],
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

---

## Get a project

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/>
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/projects/{id}***</span>

Required parameters: the **id** of the project

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the project. The requested project will be returned in the response body  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Get all projects for a current user 

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/projects***</span>

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the projects that you take part in. The requested Project(s) (hyperlink) will be returned in the response body in an [ItemsObject](..generic-slingshot-resources#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Update a project  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

Required parameters: the **id** of the project

When you request to update a project, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|description|string|min = 1, max = 144, nullable|
|startDate|string, date-time| |
|endDate|string, date-time| |
|status| string, enum (none, ontarget, atrisk, danger, completed)| |  
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The project is updated. The updated project will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Feedback",
    "startDate": "2023-02-08T11:01:23.607Z",
    "endDate": "2023-02-08T11:01:23.607Z",
    "status": "none",
    "members": [
        {
            "id": "{123456}_u ",
            "role": "owner"
        }
    ],
    "description": "Implementing Feedback"
}
```

Example of a successful response body: 

```
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
    "requests": [],
    "pendingInvites": [],
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

---

## Delete a project

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

Required parameters: the **id** of the project

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The project is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Add members to a project

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project 

When you request to add members to a project, the request body will have the following content: 

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added members to the project. The updated project will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan",
            "email": "joan@gmail.com"
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
```

---

## Update members of a project 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The project is updated. The updated project will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [],
    "pinLists": [
        {
            "id": "{123456}_proj_d",
            "name": "Project Pins"
        },
        {
            "id": "{123456}_b",
            "name": "string"
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
```

---

## Remove members from a project 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully removed members from the project. The updated project will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

```
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
    "requests": [],
    "pendingInvites": [
        {
            "id": "{123456}_u",
            "role": "owner",
            "name": "Joan Doe",
            "email": "joan@gmail.com"
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
```

---

## Grant requests access to add members to a project
  
<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

Required parameters: the **id** of the project

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You granted access to the project.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
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
    "requests": [],
    "pendingInvites": [],
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

---

## Deny requests to add members to a project 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

Required parameters: the **id** of the project

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The requests are denied.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
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
    "requests": [],
    "pendingInvites": [],
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