# Discussion

Discussions can be created in projects and workspaces. As they are specific to workspaces and projects, you won’t be able to access all of the discussions in Slingshot. You can organize discussions in different lists.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | read-only |
| modified             | string |read-only  |
| timestamp           | double |  read-only|
| created             | string | read-only |
| name               | string |  min = 1, max = 100 |  
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only| 
| discussionList             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| lastMessage   | object <[ChatMessageInfo](../generic-slingshot-resources.html#chat-message-info-object)> | read-only|

<br/>

## Example: 

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
        "name": "List 2"
    },
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "Thanks."
    }
}
```

<br/>

## Create a discussion  

<img src="../images/post-request.png" alt="Post request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/discussion***</span>

Required parameters: None 

When you request to create a discussion, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | required, min = 1, max = 100 |  
| discussionList         |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |required |  

 Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion. The newly created discussion will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Feedback",
    "discussionList": {
        "id": "{123456}",
        "name": "Threads"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
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
    </code>
</div>

<br/>

## Get a discussion
 
<img src="../images/get.png" alt="Get request for a discussion" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***https://my.slingshotapp.io/v1/discussions***</span>

Required parameters: the **id** of the discussion
 
Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the discussion. The requested [Discussion](#discussion-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all discussions for a parent document

<img src="../images/get-all.png" alt="Get all request for discussions" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/discussions/parent/{id}***</span>

Required parameters: the **id** of the parent discussion list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the discussions that are in the parent document. The requested discussions will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get discussion messages

<img src="../images/get-discussion-messages.png" alt="Delete request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}/messages***

Required parameters: the **id** of the discussion 

>[!NOTE] In case you don’t set a number of returned messages or a start index, they will be automatically added. The default value for the number of returned messages is 10 and for the start index is 0.

Possible responses:

|Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the messages in the discussion. The requested [Discussion](#discussion-schema) messages will be returned to the response body. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Send a discussion message

<img src="../images/post-send-discussion-message.png" alt="Send discussion message for discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}/send***

Required parameters: the **id** of the discussion

When you request to send a discussion message, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| text              | string |  |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The message is sent. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "text": "I will schedule a meeting for tomorrrow."
}
```

<br/>

## Update a discussion

<img src="../images/patch.png" alt="Patch request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}***

Required parameters: the **id** of the discussion 

When you request to update a discussion, the request body will have the following content

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The discussion is updated. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Emails"
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
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
    </code>
</div>

<br/>

## Delete a discussion 

<img src="../images/delete.png" alt="Delete request for a discussion" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/discussions/{id}***

Required parameters: the **id** of the specific discussion

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The discussion is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |
