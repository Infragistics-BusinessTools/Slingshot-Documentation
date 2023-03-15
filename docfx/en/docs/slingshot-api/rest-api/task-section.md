# Task Section

You can use tasks in order to better organize your work. For better visibility, you can organize them in different sections. Sections are divisions of a task list.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string | read-only |    
| modified              | string |  read-only|  
| created             | string |  read-only|  
| name               | string |min = 1, max = 100|  
| user             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only |  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
|tasklist|object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|read-only|
| tasks  |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only| 

<br/>

## Example:

```
{
    "id": "{123456}_tg",
    "modified": "2023-01-26T13:44:26.0000000",
    "created": "2023-01-26T13:44:26.0000000",
    "name": "Q1",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Customer support"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Feedback"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Approval"
        }
    ]
}
  ```

<br/>

## Create a task section

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasksections***</span>

Required parameters: None 

When you request to create a tasks section, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
|taskList|object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| required|

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a task section. The newly created task section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Q3",
    "taskList": {
        "id": "{123456}_tg",
        "name": "3"
    }
}
```

Example of a successful response body: 

```
{
    "id": "{123456}_tg",
    "modified": "2023-02-03T12:03:58.0000000",
    "created": "2023-02-03T12:03:58.0000000",
    "name": "Q3",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Petrova"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "3"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Feedback"
        }
    ]
}
```

<br/>

## Get a task section
 
<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

Required parameters: the **id** of the task  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the task section. The requested [TaskSection](#) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all task sections for a parent task list

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/parent/{id}***

Required parameters: the **id** of the parent task list

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the task sections that are in the parent task list. The requested task sections will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a task section  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

Required parameters: the **id** of the tasks section

When you request to update a task section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The task section is updated. The updated [TaskSection] will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Support cases"
}
```

Example of a successful response body: 

```
{
    "id": "{123456}_tg",
    "modified": "2023-02-03T12:22:07.0000000",
    "created": "2023-02-03T12:03:58.0000000",
    "name": "Support cases",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Petrova"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Support"
    },
    "tasks": [
        {
            "id": "{123456}_tk",
            "name": "Approval"
        }
    ]
}
```

<br/>

## Delete a task section 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasksections/{id}***

Required parameters: the **id** of the tasks section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task section is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |