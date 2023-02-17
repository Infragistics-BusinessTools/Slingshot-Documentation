# Task Section

## Create a task section

You can create a tasks section by sending a `POST` request to the {base_url}/tasksections endpoint.   

`POST` {base_url}/tasksections 

Required parameters: None 

When you request to create a tasks section, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  Min = 1, Max = 100 |
|taskList|[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a task section. The newly created task section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Q3",
  "taskList": {
    "id": "{123456}_tg",
    "name": "3"
  }
}
```

Example of a successful response: 

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
  "tasks": []
}
```

## Get a task section

You can check all the information about a tasks section by submitting a `GET` request to the {base_url}/tasksections/{id} endpoint.
 
`GET` {base_url}/tasksections/{id}

Required parameters: the **id** of the task.  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the task section. The requested [TaskSection](#) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a task section 

You can update a tasks section by sending the `PATCH` request to the {base_url}/tasksections/{id} endpoint.  

`PATCH` {base_url}/tasksections/{id}

Required parameters: the **id** of the tasks section

When you request to update a task section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The task section is updated. The updated [TaskSection] will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Support cases"
}
```

Example of a successful response: 

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
  "tasks": []
}
```

## Delete a task section

You can delete a tasks section by sending a `DELETE` request to the {base_url}/tasksections/{id} endpoint. 

`DELETE` {base_url}/tasksections/{id}

Required parameters: the **id** of the tasks section.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task section is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all task sections for a parent task list

You can view all the task sections that are a parent tasks list by submitting a `GET` request with the {base_url}/tasksections/parent/{id}endpoint.

`GET` {base_url}/tasksections/parent/{id}

Required parameters: the **id** of the parent task list

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the task sections that are in the parent task list. The requested task sections will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Task section schema

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string |  |    
| modified              | string |  |  
| created             | string |  |  
| name               | string |Min = 1, Max = 100|  
| user             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
|tasklist|[DocumentInfo](../generic-slingshot-resources.html#document-info-object)||
| tasks  |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | | 

Example:

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
  "tasks": []
  ```





