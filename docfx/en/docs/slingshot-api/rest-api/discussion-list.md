# Discussion List

Discussions can be created in projects and workspaces. You can organize discussions in different lists. Discussion lists are sections dedicated to a specific subject.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |read-only  |
| modified             | string |read-only  |
| created             | string | read-only |
| name               | string | min = 1, max = 100 |  
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| discussionsCount             | int | read-only |
| discussions             | array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only |

<br/>

## Example:

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
    "discussions": [
        {
            "id": "{123456}",
            "name": "Threads"
        }
    ]
}
```

<br/>

## Create a discussion list  

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/discussionlists***</span>

Required parameters: None

When you request to create a discussion list, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |  
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| OneOf|  
 | project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | OneOf| 

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created discussion list will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Feedback",
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    }
}
```

Example of a successful response body:

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
    "discussions": [
        {
            "id": "{123456}",
            "name": "Threads"
        }
    ]
}
```

<br/>

## Get a discussion list

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/discussionlists/{id}***</span>

Required parameters: the **id** of the discussion list

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussion list. The requested [DiscussionList](#discussionlist-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all discussion lists for a parent document 

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/parent/{id}***

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussion lists in the parent document. The requested [DiscussionList(s)](#discussionlist-schema) will be returned in the response body in an ItemsObject (hyperlink) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a discussion list

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/{id}***

Required parameters: the **id** of the discussion list

When you request to update a discussion list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |  


 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion list is updated. The updated discussion list will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Feedback"
}
```

Example of a successful response body: 

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
    "discussions": [
        {
            "id": "{123456}",
            "name": "Customer support"
        }
    ]
}
```

<br/>

## Delete a discussion list

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussionlists/{id}***

Required parameters: the **id** of the discussion list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication..  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |