# Discussion List

## Create a discussion list

You can create a list of discussions by sending a `POST` request to the {base_url}/discussionlists endpoint.  

`POST` {base_url}/discussionlists

Required parameters: None

When you request to create a discussion list, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| workspace            |DocumentInfo | OneOf|  
 | project    |DocumentInfo | OneOf| 

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Feedback",
  "project": {
    "id": "{123456}_proj",
    "name": "Customer Support"
  }
}
```

Example of a successful response:

```
{
  "id": "{123456}",
  "modified": "2023-02-07T07:43:52.0000000",
  "created": "2023-02-07T07:43:52.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "{123456}_ws",
    "name": "General Management"
  },
  "project": {
    "id": "{123456}_proj",
    "name": "Customer Support"
  },
  "discussionsCount": 0,
  "discussions": []
}
```

## Get a discussion list

You can check all the information about a discussion list by sending a `GET` request to the {base_url}/discussionlists/{id}endpoint.

`GET`/{base_url}/discussionlists/{id}

Schema: DiscussionList (link)

Required parameters: the **id** of the discussion list

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussionlist. The requested DiscussionList (hyperlink) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a discussion list

You can update a discussion list by sending the `PATCH` request to the {base_url}/discussionlists/{id} endpoint.  

`PATCH` {base_url}/discussionlists/{id}

Required parameters: the **id** of the discussion list

When you request to update a discussion list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  


 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion list is updated. The updated DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
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
  "id": "{123456}",
  "modified": "2023-02-07T07:56:13.0000000",
  "created": "2023-02-07T07:55:22.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "{123456}_ws",
    "name": "General Management"
  },
  "project": {
    "id": "{123456}_proj",
    "name": "Q1"
  },
  "discussionsCount": 0,
  "discussions": []
}
```
## Delete a discussion list

You can delete a discussion list by sending a `DELETE` request to the {base_url}/discussionlists/{id} endpoint. 

`DELETE` {base_url}/discussionlists/{id}

Required parameters: the **id** of the discussion list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication..  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all discussion lists for a parent document 

You can view all the discussion lists that are in a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/discussionlists/parent/{id}endpoint.

`GET` {base_url}/discussionlists/parent/{id}

Schema: DiscussionList (hyperlink)

Required parameters: the **id** of the parent document.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussion lists in the parent document. The requested DiscussionList(s) (hyperlink) will be returned in the response body in an ItemsObject (hyperlink) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## DiscussionList schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string | Min = 1, Max = 100 |  
| workspace            |DocumentInfo | |  
| project    |DocumentInfo | | 
| discussionsCount             | int |  |
| discussions             | array<DocumentInfo> | |

Example:

```
{
  "id": "{123456}",
  "modified": "2023-02-07T07:43:52.0000000",
  "created": "2023-02-07T07:43:52.0000000",
  "name": "Feedback",
  "workspace": {
    "id": "{123456}_ws",
    "name": "General Management"
  },
  "project": {
    "id": "{123456}_proj",
    "name": "Customer Support"
  },
  "discussionsCount": 0,
  "discussions": []
}
```



















