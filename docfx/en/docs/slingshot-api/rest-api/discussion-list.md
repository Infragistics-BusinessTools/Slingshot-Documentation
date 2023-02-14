# DiscussionList

## Create a Discussion List

You can create a list of discussions by sending a `POST` request to the {base_url}/discussionlists endpoint.  

`POST` {base_url}/discussionlists

Required parameters: None

When you request to create a discussion list, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100, Required |  
| workspace            |DocumentInfo | OneOf, Required|  
 | project    |DocumentInfo | OneOf, Required| 

 Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Feedback",
  "project": {
    "id": "e91e10ef_26d3b1d8-2a0b-41c0-846a-31ca3e24f831_proj",
    "name": "Customer Support"
  }
}
```

Example of a successful response:

```
{
  "id": "e96e11ef_67054d3e-0c51-44c0-bef3-17a30344d31c",
  "modified": "2023-02-07T07:43:52.0000000",
  "created": "2023-02-07T07:43:52.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "e96e11ef_a10ead14-feec-4590-a2d5-a0ba4a27acd5_ws",
    "name": "General Management"
  },
  "project": {
    "id": "e91e10ef_26d3b1d8-2a0b-41c0-846a-31ca3e24f831_proj",
    "name": "Customer Support"
  },
  "discussionsCount": 0,
  "discussions": []
}
```

## Get a Discussion List

You can check all the information about a discussion list by sending a `GET` request to the {base_url}/discussionlists/{id}endpoint.

`GET`/{base_url}/discussionlists/{id}

Schema: DiscussionList (link)

Required parameters: the **id** of the discussion list

 Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussionlist. The requested DiscussionList (hyperlink) will be returned in the response body.   |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a Discussion List

You can update a discussion list by sending the `PATCH` request to the {base_url}/discussionlists/{id} endpoint.  

`PATCH` {base_url}/discussionlists/{id}

Required parameters: the **id** of the discussion list

When you request to update a discussion list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100, Required |  
| workspace            |DocumentInfo | OneOf, Required|  
 | project    |DocumentInfo | OneOf, Required| 

 Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion list is updated. The updated DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Feedback",
}
```

Example of a successful response: 

```
{
  "id": "e91e10ef_e7d508cb-3e56-4fd9-b625-c7384baf8fa4",
  "modified": "2023-02-07T07:56:13.0000000",
  "created": "2023-02-07T07:55:22.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "e91e10ef_a10ead14-feec-4691-a2d4-a0ba4a27acd1_ws",
    "name": "General Management"
  },
  "project": {
    "id": "e91e10ef_26d3b1d8-2a0b-41c0-846a-31ca3e25f831_proj",
    "name": "Q1"
  },
  "discussionsCount": 0,
  "discussions": []
}
```
## Delete a Discussion List

You can delete a discussion list by sending a `DELETE` request to the {base_url}/discussionlists/{id} endpoint. 

`DELETE` {base_url}/discussionlists/{id}

Required parameters: the **id** of the discussion list

Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion list is deleted. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all discussion lists for a parent document 

You can view all the discussion lists that are in a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/discussionlists/parent/{id}endpoint.

`GET` {base_url}/discussionlists/parent/{id}

Schema: DiscussionList (hyperlink)

Required parameters: the **id** of the parent document.

Possible responses:

| Response code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussion lists in the parent document. The requested DiscussionList(s) (hyperlink) will be returned in the response body in an ItemsObject (hyperlink) array. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## DiscussionList Schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | ReadOnly |
| modified             | string | ReadOnly |
| created             | string | ReadOnly |
| name               | string | HasCharLimitations, Min = 1, Max = 100, RequiredOnCreateOnly |  
| workspace            |DocumentInfo | OneOf, RequiredOnCreateOnly|  
| project    |DocumentInfo | OneOf, RequiredOnCreateOnly| 
| discussionsCount             | Int | ReadOnly |
| discussions             | array<DocumentInfo> | ReadOnly |

Example:

```
{
  "id": "e91e11eg_67054d3e-0c51-44c0-bef3-17a25344d31c",
  "modified": "2023-02-07T07:43:52.0000000",
  "created": "2023-02-07T07:43:52.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "e91e11eg_a10ead14-feec-3790-a2d5-a0ba4a22acd5_ws",
    "name": "General Management"
  },
  "project": {
    "id": "e91e10ef_26d3b1d8-2a0b-41c0-846a-31ca3e24f888_proj",
    "name": "Customer Support"
  },
  "discussionsCount": 0,
  "discussions": []
}
```



















