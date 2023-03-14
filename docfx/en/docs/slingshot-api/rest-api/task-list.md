# Task List

You can use tasks in order to better organize your work. For better visibility, you can organize them in different lists.

## Schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | read-only |
| modified             | string | read-only |
| created             | string | read-only |
| name               | string |  min = 1, max = 100 |  
| user             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| taskSection   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only| 

Example:

```
{
    "items": [
        {
            "id": "{123456}_tg",
            "modified": "2023-01-23T15:15:30.0000000",
            "created": "2023-01-23T15:15:30.0000000",
            "name": "Workspace Tasks",
            "workspace": {
                "id": "{123456}_ws",
                "name": "Customer support"
            },
            "taskSections": []
        },
        {
            "id": "{123456}_tg",
            "modified": "2023-01-26T08:16:35.0000000",
            "created": "2023-01-26T08:16:34.0000000",
            "name": "Feedback",
            "workspace": {
                "id": "{123456}_ws",
                "name": "Marketing"
            },
            "taskSections": []
        }
    ]
}
```

---

## Create a task list 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

Required parameters: None 

When you request to create a task, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |
| user             |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | oneOf| 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | oneOf|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| oneOf|

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a tasks list. The newly created task list will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    }
}
```

Example of a successful response body: 

```
{
    "id": "{123456}_tg",
    "modified": "2023-02-16T11:36:57.0000000",
    "created": "2023-02-16T11:36:56.0000000",
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskSections": []
}
```

---

## Get a task list

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

Required parameters: the **id** of the tasks list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the tasks list. The requested [TaskList](#task-list-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Get all task lists for a parent document

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/parent/{id}***

Required parameters: the **id** of the parent document

Possible responses:

 Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all task lists in the parent document. The requested task list will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Update a task list  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

Required parameters: the **id** of the tasks list

When you request to update a task, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The tasks list is updated. The updated task list will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Q4"
}
```

Example of a successful response body: 

```
{
    "id": "{123456}_tg",
    "modified": "2023-02-16T11:49:56.0000000",
    "created": "2023-02-16T11:36:56.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskSections": []
}
```

---

## Delete a task list

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasklists/{id}***

Required parameters: the **id** of the task list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |