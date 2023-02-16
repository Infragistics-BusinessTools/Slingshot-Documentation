# Task list

## Create a task list

You can create a task by sending a `POST` request to the {base_url}/tasks endpoint.   

`POST` {base_url}/tasks  

Schema: TaskList (hyperlink)

Required parameters: None 

When you request to create a task, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |
| user             | DocumentInfo | oneOf| 
| workspace            |DocumentInfo | oneOf|  
| project    |DocumentInfo |oneOf|

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a tasks list. The newly created TaskList (hyperlink) will be returned in the response body.  |
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
| 200 (Success) |You can view the tasks list. The requested TaskList (hyperlink) will be returned in the response body.   |
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
| 200 (Success) |The tasks list is updated. The updated TaskList (hyperlink) will be returned in the response body.   |
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



