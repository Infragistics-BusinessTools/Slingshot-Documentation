# Pin List

Pins are simple links to different types of resources that you can share or access. You can organize them in different lists for better visibility.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | read-only |
| modified             | string |read-only  |
| created             | string |  read-only|
| name               | string | min = 1, max = 100 |
| user            | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only |
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only| 
| pinSections   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  | read-only|

<br/>

## Example:

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
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Info"
        }
    ]
}
```

<br/>

## Create a pin list 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/pinlists***</span>

Required parameters: None

When you request to create a pin list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100, required |  
| user   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| required, one-of|
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| required, one-of|  
 | project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|  required, one-of| 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin list. The newly created pin list will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "HR",
    "project": {
        "id": "{123456}_proj",
        "name": "Management"
    }
}
```

Example of a successful response body: 

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
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Research"
        }
    ]
}
```

<br/>

## Get a pin list

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the pin list. The requested [PinList](#pinlist-schema) will be returned in the response body.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all pin lists

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/parent/{id}***

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the pin lists that are in the parent document. The requested [PinList(s)](#pinlist-schema) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a pin list

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

Required parameters: the **id** of the pin list

When you request to update a pin list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The pin list is updated. The updated pin list will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Statistics"
}
```

Example of a successful response body: 

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
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Info"
        }
    ]
}
```

<br/>

## Delete a pin list

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |