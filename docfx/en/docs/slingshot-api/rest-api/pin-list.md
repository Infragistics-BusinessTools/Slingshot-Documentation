# Pin List

## PinList schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string | Min = 1, Max = 100 |
| user            | [DocumentInfo](../generic-slingshot-resources.html#document-info-object)|  |
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| pinSections   |array [DocumentInfo](../generic-slingshot-resources.html#document-info-object)  | |

Example:

```
{
    "id": "{123456}_b",
    "modified": "2023-02-07T08:47:54.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "HR",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Team 1"
    },
    "pinSections": []
}
```

## Create a pin list 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> https://my.slingshotapp.io/v1/pinlists

Required parameters: None

When you request to create a pin list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| user   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | oneOf|
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)|| oneOf|  
 | project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | oneOf| 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin list. The newly created pin list will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "HR",
    "project": {
        "id": "{123456}_proj",
        "name": "Management"
    }
}
```

Example of a successful response: 

```
{
    "id": "{123456}_b",
    "modified": "2023-02-07T08:47:54.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "HR",
    "workspace": {
        "id": "{123456}_ws",
        "name": "CEO"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Management"
    },
    "pinSections": []
}
```

## Get a Pin List

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> / https://my.slingshotapp.io/v1/pinlists/{id}

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the pin list. The requested [PinList](#pinlist-schema) will be returned in the response body.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all pin lists

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> https://my.slingshotapp.io/v1/pinlists/parent/{id}

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the pin lists that are in the parent document. The requested [PinList(s)](#pinlist-schema) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a pin list

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> https://my.slingshotapp.io/v1/pinlists/{id}

Required parameters: the **id** of the pin list

When you request to update a pin list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| user   |DocumentInfo | OneOf|
| workspace            |DocumentInfo | OneOf|  
 | project    |DocumentInfo | OneOf| 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The pin list is updated. The updated pin list will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Statistics"
}
```

Example of a successful response: 

```
{
    "id": "{123456}_b",
    "modified": "2023-02-07T09:49:25.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "Statistics",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    },
    "pinSections": []
}
```

## Delete a pin list

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> https://my.slingshotapp.io/v1/pinlists/{id}

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |