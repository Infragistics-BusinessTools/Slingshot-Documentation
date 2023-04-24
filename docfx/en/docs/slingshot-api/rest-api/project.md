# Project

In case you want to have a better overview of different initiatives and processes, bound to a group of people, you can create a project. You can create multiple projects. 
 
Note that users can have different roles and permissions in a project. [Here](https://www.slingshotapp.io/en/help/docs/security) you can find out more about each role.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | read-only |
| modified             | string | read-only |
| created             | string | read-only |
| name               | string |  min = 1, max = 100 |
|description|string| min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
|members| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> |read-only |
|requests| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> |read-only |
| pendingInvites           | array <[MemberInfo](../generic-slingshot-resources#member-info-object)> | read-only |
|pinLists| array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only|
|taskLists| array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|read-only |
| discussionLists           | array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only |
| dashboardLists      | array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |

<br/>

## Example:

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

## Create a project

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/projects***</span>

Required parameters: None

When you request to create a project, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | required, min = 1, max = 100 |
|description|string| min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |required | 
|members| 	array <[MemberInfo](../generic-slingshot-resources#member-info-object)> ||

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a project. The newly created project will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

<br/>

## Get all projects for a current user 

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/projects***</span>

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the projects that you take part in. The requested Project(s) (hyperlink) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a project  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

Required parameters: the **id** of the project

When you request to update a project, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|description|string|min = 1, max = 144, nullable|
|startDate|string <DateTime> | |
|endDate|string <DateTime> | |
|status| string enum ("none", "ontarget", "atrisk", "danger", "completed")| |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The project is updated. The updated project will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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
    <summary><b>Example of a successful response body:</b></summary>
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

## Delete a project

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}***

Required parameters: the **id** of the project

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The project is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Add members to a project

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project 

When you request to add members to a project, the request body will have the following content: 

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](../generic-slingshot-resources#member-info-object)>

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added members to the project. The updated project will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

## Update members’ roles of a project 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](../generic-slingshot-resources#member-info-object)>

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The project is updated. The updated project will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

## Remove members from a project 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/members***

Required parameters: the **id** of the project

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](../generic-slingshot-resources#member-info-object)>

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully removed members from the project. The updated project will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

## Grant requests access to add members to a project
  
<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

Required parameters: the **id** of the project

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](../generic-slingshot-resources#member-info-object)>

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You granted access to the project.   |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

>[!NOTE] Only Owners can grant requests access to add members to a project. 

<br/>

## Deny requests to add members to a project 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/projects/{id}/requests***

Required parameters: the **id** of the project

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](../generic-slingshot-resources#member-info-object)>

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The requests are denied.   |
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

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
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

>[!NOTE] Only Owners can deny requests access to add members to a project. 