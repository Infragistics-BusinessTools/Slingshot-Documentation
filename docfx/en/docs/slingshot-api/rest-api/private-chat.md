# Pravite Chat

## Create a private chat 

You can create a private chat by sending a `POST` request to the {base_url}/privatechats endpoint.  

`POST` {base_url}/privatechats

Required parameters: None

When you request to create a private chat, the request body will have the following content:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |
| members         | array <[MemberInfo](..generic-slingshot-resources#member-info-object)>| | 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a private chat. The newly created private chat will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

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

Example of a successful response: 

```
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
```

## Get all private chats

You can check all your private chats by sending a `GET` request to the {base_url}/privatechats endpoint.

`GET`/{base_url}/privatechats

Required parameters: None

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all your private chats. The requested [PrivateChat(s)](#private-chat-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get a private chat

You can check a private chat by sending a `GET` request to the {base_url}/privatechats/{id} endpoint.

`GET`/{base_url}/privatechats/{id}

Required parameters: the **id** of the private chat 

Possible responses:

Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the private chat. The requested private chat will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a private chat 

You can update a private chat by sending a `PATCH` request to the {base_url}/privatechats/{id}  endpoint. 

`PATCH`/{base_url}/privatechats/{id}

Required parameters: the **id** of the private chat

When you request to update a discussion, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully updated the private chat.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Check"
}
```

Example of a successful response:

```
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
```

## Send a private chat message

You can send a private chat by sending a `POST` request to the {base_url}/privatechats/{id}/send endpoint.  

`POST` {base_url}/privatechats/{id}/send

Required parameters: the **id** of the private chat 

When you request to send a private chat, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |You send a private chat message. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get private chat messages

You can view all the messages that are in a private chat by submitting a `GET` request with the base_url}/privatechats/{id}/messages endpoint.

`GET`/{base_url}/privatechats/{id}/messages

Required parameters: the **id** of the private chat

>[!NOTE] In case you don’t set a number of returned messages or a start index, they will be automatically added. The default value for the number of returned messages is 10, and for the start index is 0.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the messages in the private chat. The requested private chat will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Add members to a private chat

You can add members to a private chat by sending `POST` request to the /{base_url}/privatechats/{id}/members endpoint. 

`POST`/{base_url}/privatechats/{id}/members

Required parameters: the **id** of the private chat

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You successfully added members to the private chat. The updated private chat will be returned.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

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

Example of a successful response:

```
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
```

## Remove members from a private chat

You can remove members from a private chat by sending a `DELETE` request to the /{base_url}/privatechats/{id}/members endpoint. 

`DELETE`/{base_url}/privatechats/{id}/members

Required parameters: the **id** of the private chat

Request body: [MemberInfo](..generic-slingshot-resources#member-info-object)

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You removed the members from the private chat. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

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

Example of a successful response:

```
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
```

## Private chat schema:

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
|timestamp |	double| | 
| created             | string |  |
| name               | string |  Min = 1, Max = 100 |  
|members| 	array <[MemberInfo](..generic-slingshot-resources#member-info-object)> |
|lastMessage| 	[ChatMessageInfo](..generic-slingshot-resources#chat-message-info-object)| |

Example:

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












