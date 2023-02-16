# Task

## Create a Task

You can create a task by sending a `POST` request to the {base_url}/tasks endpoint.   

`POST` {base_url}/tasks  

Schema: Task (hyperlink)

Required parameters: None 

When you request to create a task, the request body will have the following content:  





Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |







## Task Schema

**Schema:**

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | string | ReadOnly |    
| modified              | string | ReadOnly |  
| created             | string | ReadOnly |  
| name               | string | HasCharLimitations, Min CharCount = 1, Max CharCount = 200, RequiredOnCreateOnly |  
| description              | string | Nullable |  
| startDate               | string (date-time) |  |  
| dueDate               | string (date-time) |  |  
| status              | string (open, progress, review, blocked or completed) | RequiredOnCreateOnly | 
| priority             | string(none, low, medium or high) | RequiredOnCreateOnly |   
| assignee               | ListObject<object(AssigneeInfo)>  | |
| user               | object(DocumentInfo) | ReadOnly |
| workspace              | object(DocumentInfo) | ReadOnly |
| project             | object(DocumentInfo) | ReadOnly |
| taskList            | object(DocumentInfo) | ReadOnly |
| taskSection      | object(DocumentInfo) | OneOf, RequiredOnCreateOnly |
| parentTask      | object(DocumentInfo) | OneOf, RequiredOnCreateOnly |
 | subtasks      | ListObject<Object(DocumentInfo)> | OneOf, ReadOnly |


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

