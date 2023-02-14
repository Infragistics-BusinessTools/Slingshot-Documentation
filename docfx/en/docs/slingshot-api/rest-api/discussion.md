# Discussion

## Create a Discussion

You can create a discussion by sending a `POST` request to the {base_url}/discussions endpoint.   

`POST` {base_url}/discussions

Schema: Discussion (hyperlink)

Required parameters: None 

When you request to create a discussion, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100, Required |  
| discussionList         |DocumentInfo (link) | Required|  

 Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion. The newly created Discussion (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Feedback",
  "discussionList": {
    "id": "e91e11eg_d227f65b-cb1e-4341-b00b-d08733cf8921",
    "name": "Threads",
  }
}
```

Example of a successful response: 

```
{
  "id": "e91e11eg_086f2bea-5aa6-4139-8325-78484f10d4b1",
  "modified": "2023-02-03T10:11:36.0000000",
  "timestamp": 1675419096390.1465,
  "created": "2023-02-03T10:11:36.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "e91e11eg_433d321f-1659-4228-b5f4-6cbbf630b99d_ws",
    "name": "Documentation"
  },
  "discussionList": {
    "id": "e91e11eg_d227f65b-cb1e-4341-b00b-d08733cf8921",
    "name": "Threads"
  }
}
```

## Get a Discussion

You can check a discussion by submitting a GET request to the {base_url}/discussions/{id} endpoint.
 
`GET` {base_url}/discussions  

Schema: Discussion (hyperlink)

Required parameters: the **id** of the discussion
 
Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussion. The requested Discussion (hyperlink) will be returned in the response body.   |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a Discussion

You can update a discussion by sending a `PATCH` request to the {base_url}/discussions/{id}  endpoint. 

`PATCH`{base_url}/discussions/{id}

Required parameters: the **id** of the discussion 

When you request to update a discussion, the request body will have the following content

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100 |

Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion is updated. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:


```{
  "name": "Emails"
}
```

Example of a successful response: 

```
{
  "id": "e91e11eg_01c02ecd-332f-450c-bc52-41667c21c9e1",
  "modified": "2023-02-03T11:42:39.0000000",
  "timestamp": 1675424559437.8538,
  "created": "2023-01-27T11:53:13.0000000",
  "name": "Emails",
  "workspace": {
    "id": "e91e11eg_498d321f-2336-4178-b5f4-8cbbf630b91d_ws",
    "name": "Support"
  },
  "discussionList": {
    "id": "e91e11eg_d221f70b-cb5e-3341-b00b-d03739cf8921",
    "name": "List 1"
  },
  "lastMessage": {
    "id": "bdde224b-a5f4-4469-b172-eea3f9804dcd",
    "userId": "e91e11eg_75a1312c-ce3c-452b-85f8-f9d093be71de_u",
    "text": "We should check this again."
  }
}
```

## Delete a Discussion

You can delete a discussion by sending a `DELETE` request to the {base_url}/discussions/{id} endpoint. 

`DELETE` {base_url}/discussions/{id}

Required parameters: the **id** of the specific discussion

Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion is deleted. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all discussions for a parent document

You can view all the discussions for a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/discussions/parent/{id}endpoint.

`GET` {base_url}/discussions/parent/{id}

Schema: Discussion (hyperlink)

Required parameters: the **id** of the parent discussion list

Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussions that are in the parent document. The requested Discussions (hyperlink) will be returned in the response body.  |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Send a Discussion message

You can send a discussion message by submitting a `POST` request to the {base_url}/discussions/{id}/send endpoint.  

`POST` {base_url}/discussions/{id}/send

Schema: Discussion (hyperlink)

Required parameters: the **id** of the discussion

When you request to send a discussion message, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |

| name               | string | HasCharLimitations, Min CharCount= 1, Max CharCount = 100, RequiredOnCreateOnly |
| discussionList      | DocumentInfo | RequiredOnCreateOnly, ReadOnlyAfterCreate |


--------




## Get discussion messages

You can view all the messages from a discussion by submitting a `GET` request with the {base_url}/discussions/{id}/messages endpoint.

`GET` {base_url}/discussions/{id}/messages

Schema: Discussion (hyperlink)

Required parameters: the **id** of the discussion 

>[!NOTE] In case you don’t set a number of returned messages or a start index, they will be automatically added. The default value for the number of returned messages is 10 and for the start index is 0.

Possible responses:

|Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the messages in the discussion. The requested Discussion (hyperlink) messages will be returned in the response body. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Discussion Schema

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | ReadOnly |
| modified             | string | ReadOnly |
| timestamp           | Double | ReadOnly |
| created             | string | ReadOnly |
| name               | string | HasCharLimitations, Min = 1, Max = 100, RequiredOnCreateOnly |  
| workspace            |DocumentInfo | ReadOnly|  
| project    |DocumentInfo | ReadOnly| 
| discussionList             | ChatMesssageInfo(link) | RequiredOnCreateOnly |
| lastMessage   |ChatMessageInfo | ReadOnly|

Example of a successful response: 

```
{
  "id": "e91e11eg_011f2bea-6aa3-5675-8325-78484f10d4b1",
  "modified": "2023-02-03T10:11:36.0000000",
  "timestamp": 1675419096390.1465,
  "created": "2023-02-03T10:11:36.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "e91e11eg_492d321f-3022-4178-b5f4-8cbbf685b22d_ws",
    "name": "Documentation"
  },
  "discussionList": {
    "id": "e91e11eg_d222f20b-cb2e-4341-b00b-d08739cf3321",
    "name": "Threads"
  }
}
```



















