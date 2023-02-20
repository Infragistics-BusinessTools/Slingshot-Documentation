# Task list

## Create a task list

You can create a task by sending a `POST` request to the {base_url}/tasks endpoint.   

`POST` {base_url}/tasks  

Required parameters: None 

When you request to create a task, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |
| user             |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | oneOf| 
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | oneOf|  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) |oneOf|

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a tasks list. The newly created task list will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Q3",
  "user": {
    "id": "{123456}_u",
    "name": "Vyara Yan"
  }
}
```

Example of a successful response: 

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

## Get a task list

You can check all the information about a task by sending a `GET` request to the the {base_url}/tasklists/{id}endpoint.
`GET`/{base_url}/tasklists/{id}

Required parameters: the **id** of the tasks list.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the tasks list. The requested [TaskList](#task-list-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a task list

You can update a tasks list by sending the `PATCH` request to the {base_url}/tasklists/{id} endpoint.  

`PATCH` {base_url}/tasklists/{id}

Required parameters: the **id** of the tasks list

When you request to update a task, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The tasks list is updated. The updated task list will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Q4"
}
```

Example of a successful response: 

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

## Delete a task list

You can delete a tasks list by sending a `DELETE` request to the {base_url}/tasklists/{id} endpoint. 

`DELETE` {base_url}/tasklists/{id}

Required parameters: the **id** of the task list.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all task lists for a parent document

You can view all the task lists that are in a parent document(workspace, user or a project) by submitting a `GET` request with the {base_url}/tasklists/parent/{id}endpoint.

`GET` {base_url}/tasklists/parent/{id}

Required parameters: the **id** of the parent document.

Possible responses:

 Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all task lists in the parent document. The requested task list will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Task list schema:

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string |  Min = 1, Max = 100 |  
| user             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| taskSection   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | | 

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


