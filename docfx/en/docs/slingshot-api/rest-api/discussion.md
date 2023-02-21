# Discussion

## Create a discussion

You can create a discussion by sending a `POST` request to the {base_url}/discussions endpoint.   

`POST` {base_url}/discussions

Required parameters: None 

When you request to create a discussion, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| discussionList         |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion. The newly created discussion will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Feedback",
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
```

Example of a successful response: 

```
{
    "id": "{123456}",
    "modified": "2023-02-03T10:11:36.0000000",
    "timestamp": 1675419096390.1465,
    "created": "2023-02-03T10:11:36.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Documentation"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
```

## Get a discussion

You can check a discussion by submitting a GET request to the {base_url}/discussions/{id} endpoint.
 
`GET` {base_url}/discussions  

Required parameters: the **id** of the discussion
 
Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussion. The requested [Discussion](#discussion-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a discussion

You can update a discussion by sending a `PATCH` request to the {base_url}/discussions/{id}  endpoint. 

`PATCH`{base_url}/discussions/{id}

Required parameters: the **id** of the discussion 

When you request to update a discussion, the request body will have the following content

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion is updated. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Emails"
}
```

Example of a successful response: 

```
{
    "id": "{123456}",
    "modified": "2023-02-03T11:42:39.0000000",
    "timestamp": 1675424559437.8538,
    "created": "2023-01-27T11:53:13.0000000",
    "name": "Emails",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Support"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "List 1"
    },
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "We should check this again."
    }
}
```

## Delete a discussion

You can delete a discussion by sending a `DELETE` request to the {base_url}/discussions/{id} endpoint. 

`DELETE` {base_url}/discussions/{id}

Required parameters: the **id** of the specific discussion

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all discussions for a parent document

You can view all the discussions for a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/discussions/parent/{id}endpoint.

`GET` {base_url}/discussions/parent/{id}

Required parameters: the **id** of the parent discussion list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussions that are in the parent document. The requested discussions will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Send a discussion message

You can send a discussion message by submitting a `POST` request to the {base_url}/discussions/{id}/send endpoint.  

`POST` {base_url}/discussions/{id}/send

Required parameters: the **id** of the discussion

When you request to send a discussion message, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string |Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The message is sent. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "text": "I will schedule a meeting for tomorrrow."
}
```

## Get discussion messages

You can view all the messages from a discussion by submitting a `GET` request with the {base_url}/discussions/{id}/messages endpoint.

`GET` {base_url}/discussions/{id}/messages

Required parameters: the **id** of the discussion 

>[!NOTE] In case you don’t set a number of returned messages or a start index, they will be automatically added. The default value for the number of returned messages is 10 and for the start index is 0.

Possible responses:

|Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the messages in the discussion. The requested [Discussion](#discussion-schema) messages will be returned in the response body. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Discussion schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| timestamp           | Double |  |
| created             | string |  |
| name               | string |  Min = 1, Max = 100 |  
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | 
| discussionList             | [ChatMessageInfo](../generic-slingshot-resources.html#chat-message-info-object ) |  |
| lastMessage   |[ChatMessageInfo](../generic-slingshot-resources.html#chat-message-info-object ) | |

Example: 

```
{
    "id": "{123456}",
    "modified": "2023-02-03T10:11:36.0000000",
    "timestamp": 1675419096390.1465,
    "created": "2023-02-03T10:11:36.0000000",
    "name": "Feedback",
    "workspace": {
        "id": "{123456}_ws",
        "name": "Documentation"
    },
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
```



















