# Task

## Create a Task

You can create a task by sending a `POST` request to the {base_url}/tasks endpoint.   

`POST` {base_url}/tasks  

Schema: Task (hyperlink)

Required parameters: None 

When you request to create a task, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  Min = 1, Max = 100 |
| startDate              | string | |
| dueDate               | string | |
| status             | string, Enum ("open" "progress" "review" "blocked" "completed")| |  
| priority            | string, Enum: ("none" "low" "medium" "high") | |  
| taskSection   |DocumentInfo  |oneOf | 
| parentTask   |DocumentInfo  |oneOf | 

To create a task, you need to provide the *id* and *name* of the parent task section. If you want to create a subtask, you need to first provide the *id* and *name* of the parent task. 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a task. The newly created Task will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Feedback",
  "description": "To check the feedback",
  "startDate": "2023-02-15T14:50:57.299Z",
  "dueDate": "2023-02-15T14:50:57.299Z",
  "status": "open",
  "priority": "none",
  "taskSection": {
    "id": "{123456}_tg",
    "name": "Section Test"
  }

}
```

Example of a successful response:

```
{
  "id": "{123456}_tk",
  "modified": "2023-02-15T15:45:49.0000000",
  "created": "2023-02-15T15:45:49.0000000",
  "name": "Feedback",
  "description": "To check the feedback",
  "startDate": "2023-02-15T14:50:57.0000000",
  "dueDate": "2023-02-15T14:50:57.0000000",
  "status": "open",
  "priority": "none",
  "assignees": [],
  "workspace": {
    "id": "{123456}_ws",
    "name": "Email support"
  },
  "taskList": {
    "id": "{123456}_tg",
    "name": "Workspace Tasks"
  },
  "taskSection": {
    "id": "{123456}_tg",
    "name": "Section 1"
  },
  "subtasks": []
}
```

## Get a task

You can check all the information about a task when you submit a `GET` request with {base_url}/tasks/{id} as an endpoint.

`GET` {base_url}/tasks  

Schema: Task (hyperlink)

Required parameters: the **id** of the task.  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the tasks.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a task list

You can update a task by sending a `PATCH` request to the /{base_url}/tasks/{id}  endpoint. 

`PATCH`/{base_url}/tasks/{id}

Required parameters: the **id** of the task 

When you request to update a task, the request body will have the following content:



Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The tasks list is updated. The updated TaskList (hyperlink) will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:



Example of a successful response:


## Delete a task

You can delete a task by sending a `DELETE` request to the {base_url}/tasks/{id} endpoint. 

`DELETE` {base_url}/tasks/{id}

Required parameters: the **id** of the specific task

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all tasks for a parent task section

You can view all the tasks that are in a specific task section by submitting a `GET` request with the {base_url}/tasks/parent/{id}endpoint.
`GET`/{base_url}/tasks/parent/{id}

Schema: Task (hyperlink)

Required parameters: the **id** of the specific task

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the tasks in the task section.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Add assignee to a task

You can add assignees to a task by sending `POST` request to the {base_url}/tasks/{id}/assignees endpoint. 

`POST`/{base_url}/tasks/{id}/assignees

Required parameters: the **id** of that specific task

Request body: AssigneeInfo (hyperlink) 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added assignees to the task. The updated Task will be returned.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:
```
{
  "items": [
    {
      "id": "{123456}_u"
    }
  ]
}
```

Example of a successful response:

```
{
  "id": "{123456}_tk",
  "modified": "2023-02-10T13:55:53.0000000",
  "created": "2023-01-25T09:07:44.0000000",
  "name": "To check the feedback",
  "status": "open",
  "priority": "none",
  "assignees": [
    {
      "id": "{123456}_u",
      "name": "T Petkov",
      "email": "t@gmai.com"
    }
  ],
  "user": {
    "id": "{123456}_u",
    "name": "Vyara Yan"
  },
  "taskList": {
    "id": "{123456}",
    "name": "Personal Tasks"
  },
  "taskSection": {
    "id": "{123456}_tg",
    "name": "Section 3"
  },
  "subtasks": [
    {
      "id": "{123456}_tk",
      "name": "Q1"
    }
  ]
}
```
## Remove assigness from a task

You can remove assignees from a task with the `DELETE` method and the /{base_url}/tasks/{id}/assignees endpoint.
`DELETE`/{base_url}/tasks/{id}/assignees

Required parameters: the **id** of the task

Request body: AssigneeInfo (hyperlink)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You removed assignees from the task.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "items": [
    {
      "id": "{123456}_u",
      "name": "Nik"
    }
  ]
}
```

Example of a successful response:

```
{
  "id": "{123456}_tk",
  "modified": "2023-02-16T15:00:02.0000000",
  "created": "2023-01-25T09:07:44.0000000",
  "name": "Test test",
  "status": "open",
  "priority": "none",
  "assignees": [],
  "user": {
    "id": "{123456}_u",
    "name": "Vyara Yan"
  },
  "taskList": {
    "id": "{123456}",
    "name": "Personal Tasks"
  },
  "taskSection": {
    "id": "{123456}_tg",
    "name": "Section 3"
  },
  "subtasks": [
    {
      "id": "{123456}_tk",
      "name": "Test"
    }
  ]
}
```

## Task Schema

**Schema:**

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string |  |    
| modified              | string |  |  
| created             | string |  |  
| name               | string |Min = 1, Max = 200|  
| description              | string | Nullable |  
| startDate               | string (date-time) |  |  
| dueDate               | string (date-time) |  |  
| status              | string (open, progress, review, blocked or completed) |  | 
| priority             | string(none, low, medium or high) |  |   
| assignee               | ListObject<object(AssigneeInfo)>  | |
| user               | object(DocumentInfo) |  |
| workspace              | object(DocumentInfo) | |
| project             | object(DocumentInfo) |  |
| taskList            | object(DocumentInfo) |  |
| taskSection      | object(DocumentInfo) |  |
| parentTask      | object(DocumentInfo) |  |
 | subtasks      | ListObject<Object(DocumentInfo)> |  |


**Example:**

```
{
  "id": "{123456}_tk",
  "modified": "2023-01-25T13:58:34.0000000",
  "created": "2023-01-25T13:55:05.0000000",
  "name": "Customer Support",
  "description": "Feedback",
  "status": "open",
  "priority": "none",
  "assignees": [],
  "user": {
    "id": "{123456}_u",
    "name": "Ver"
  },
  "taskList": {
    "id": "{123456}",
    "name": "1"
  },
  "taskSection": {
    "id": "{123456}_tg",
    "name": "Q1"
  },
  "subtasks": []
}
```

