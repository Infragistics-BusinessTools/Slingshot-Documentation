# Private Chat

You can use private chats in order to communicate with other users. As they are workspace and project independent, the users don’t need to be a part of your organization. Only you and the users, with whom you communicate with, can see the information in the chat.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |read-only  |
| modified             | string |read-only  |
|timestamp |	double| read-only| 
| created             | string | read-only |
| name               | string |  min = 1, max = 100 |  
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> |read-only|
|lastMessage| object <[ChatMessageInfo](..generic-slingshot-resources#chat-message-info-object)>|read-only |

<br/>

## Example:

```
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T15:45:21.0000000",
    "timestamp": 1676043921598.1133,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "I will check it."
    }
}
```

<br/>

## Create a private chat 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats***</span>

Required parameters: None

When you request to create a private chat, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | required, min = 1, max = 100 |
| members         | array <[MemberInfo](..generic-slingshot-resources#member-info-object)>|required | 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a private chat. The newly created private chat will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ],
    "name": "Feedback"
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-09T15:26:48.0000000",
    "timestamp": 1675956408697.267,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ]
}
    </code>
</div>

<br/>

## Get a private chat

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}***

Required parameters: the **id** of the private chat 

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the private chat. The requested private chat will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all private chats

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats***</span>

Required parameters: None

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all your private chats. The requested [PrivateChat(s)](#private-chat-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a private chat 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}***

Required parameters: the **id** of the private chat

When you request to update a discussion, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully updated the private chat.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Check"
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-20T07:53:06.0000000",
    "timestamp": 1676879586281.6526,
    "created": "2022-08-16T09:57:46.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "B",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "I will double-check."
    }
}
    </code>
</div>

<br/>

## Get private chat messages

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats/{id}/messages***</span>***

Required parameters: the **id** of the private chat

>[!NOTE] In case you don’t set a number of returned messages or a start index, they will be automatically added. The default value for the number of returned messages is 10, and for the start index is 0.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the messages in the private chat. The requested private chat will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Send a private chat message  

<img src="../images/post-sending-private-chat.png" alt="Sending private chat with post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/send***

Required parameters: the **id** of the private chat 

When you request to send a private chat, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| text              | string | min = 1, max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |You send a private chat message. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Add members to a private chat 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/members***

Required parameters: the **id** of the private chat

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](..generic-slingshot-resources#member-info-object)>

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added members to the private chat. The updated private chat will be returned.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T09:09:23.0000000",
    "timestamp": 1676020163550.34,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Vyara",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "Okay, I will check it again."
    }
}
    </code>
</div>

<br/>

>[!NOTE] You can assign a member only an owner role.

<br/>

## Remove members from a private chat

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/members***

Required parameters: the **id** of the private chat

Request body: [ItemsObject](../generic-slingshot-resources.html#item-object) <[MemberInfo](..generic-slingshot-resources#member-info-object)>

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You removed the members from the private chat. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T09:41:56.0000000",
    "timestamp": 1676022116747.258,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "LeftGroupChat"
    }
}
    </code>
</div>