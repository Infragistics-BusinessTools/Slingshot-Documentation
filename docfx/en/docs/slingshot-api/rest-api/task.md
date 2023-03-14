# Task

You can use tasks in order to better organize your work. For better visibility, you can organize them in different lists and sections. 

## Schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string |  |    
| modified              | string |  |  
| created             | string |  |  
| name               | string |min = 1, max = 200|  
| description              | string | nullable |  
| startDate               | string <DateTime>  |  |  
| dueDate               | string <DateTime>  |  |  
| status              | string (open, progress, review, blocked or completed) |  | 
| priority             | string(none, low, medium or high) |  |   
| assignee               | ListObject[AssigneeInfo](slingshot-api/generic-slingshot-resources.html#assignee-info-object)  | |
| user               | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
| workspace              | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | |
| project             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
| taskList            | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
| taskSection      | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
| parentTask      | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |
 | subtasks      | ListObject<Object[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |  |

Example:

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

---

## Create a Task

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

Required parameters: None 

When you request to create a task, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |  min = 1, max = 100 |
| startDate              | string | |
| dueDate               | string | |
| status             | string enum ("open", "progress", "review", "blocked", "completed")| |  
| priority            | string enum ("none", "low", "medium", "high") | |  
| taskSection   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  |oneOf | 
| parentTask   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |oneOf | 

>[!NOTE]  To create a task, you need to provide the **id** and **name** of the parent task section under the **taskSection** property. Alternatively, if you want to create a subtask, you need to first provide the **id** and **name** of the parent task under the **parentTask** property. Only one can be provided as both taskSection and parentTask properties being present in the request will result in an error.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a task. The newly created task will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

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

---

## Get a task

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

Required parameters: the **id** of the task  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the task.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Get all tasks for a parent task section

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/parent/{id}***

Required parameters: the **id** of the specific task

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the tasks in the task section.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Update a task list

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}***

Required parameters: the **id** of the task 

When you request to update a task, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |  
| name               | string |min = 1, max = 200|  
| description              | string | Nullable |  
| startDate               | string <DateTime>  |  |  
| dueDate               | string <DateTime>  |  |  
| status              | string (open, progress, review, blocked or completed) |  | 
| priority             | string(none, low, medium or high) |  |   
| assignee               | ListObject[AssigneeInfo](slingshot-api/generic-slingshot-resources.html#assignee-info-object)  | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The task is updated. The updated [Task](#task-schema) will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Feedback Q2",
    "description": "to check the feedback ",
    "startDate": "2023-02-17T11:33:10.710Z",
    "dueDate": "2023-02-17T11:33:10.710Z",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u"
        }
    ]
}
```

Example of a successful response body:

```
{
    "id": "{123456}",
    "modified": "2023-02-17T11:37:22.0000000",
    "created": "2022-07-26T09:31:00.0000000",
    "name": "Feedback Q2",
    "description": "to check the feedback",
    "startDate": "2023-02-17T11:33:10.0000000",
    "dueDate": "2023-02-17T11:33:10.0000000",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u",
            "name": "Vyara Yan",
            "email": null
        }
    ],
    "workspace": {
        "id": "{123456}_ws",
        "name": "Customer Support "
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Emails"
    },
    "taskList": {
        "id": "{123456}",
        "name": "Project Tasks"
    },
    "taskSection": {
        "id": "{123456}",
        "name": null
    },
    "subtasks": []
}
```

---

## Delete a task

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}***

Required parameters: the **id** of the specific task

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The task is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

---

## Add assignee to a task

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}/assignees***

Required parameters: the **id** of that specific task

Request body: [AssigneeInfo](slingshot-api/generic-slingshot-resources.html#assignee-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added assignees to the task. The updated task will be returned.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:
```
{
    "items": [
        {
            "id": "{123456}_u"
        }
    ]
}
```

Example of a successful response body:

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

---
## Remove assigness from a task

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}/assignees***

Required parameters: the **id** of the task

Request body: [AssigneeInfo](slingshot-api/generic-slingshot-resources.html#assignee-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You removed assignees from the task.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

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

Example of a successful response body:

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