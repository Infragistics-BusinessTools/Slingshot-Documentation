# Pin Section

Pins are simple links to different types of resources that you can share or access. You can organize them in sections. Sections are divisions of a pin list. You can create multiple sections in one list.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |read-only  |
| modified             | string | read-only |
| created             | string | read-only |
| name               | string |  min = 1, max = 100 |  
| user             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only | 
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only| 
| pinList   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|read-only | 
| pins   |array <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  |read-only | 

<br/>

## Example:

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T10:37:52.0000000",
    "created": "2023-02-07T10:37:52.0000000",
    "name": "Q3",
    "workspace": {
        "id": "123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "123456}_proj",
        "name": "Support"
    },
    "pinList": {
        "id": "123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Research"
        }
    ]
}
```

<br/>

## Create a pin section 

<img src="../images/post-request.png" alt="Post request for a pin section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/pinsections***</span>

Required parameters: None

When you request to create a pin section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | required, min = 1, max = 100|  
| pinList   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| required|

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin section. The newly created pin section will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Q3",
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T10:37:52.0000000",
    "created": "2023-02-07T10:37:52.0000000",
    "name": "Q3",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Support"
    },
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Research"
        }
    ]
}
    </code>
</div>

<br/>

## Get a pin section

<img src="../images/get.png" alt="Get request for a pin section" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

Required parameters: the **id** of the pin section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the pin section. The requested [PinSection](#pinsection-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Get all pin sections for a parent pin list

<img src="../images/get-all.png" alt="Get all request for pin sections" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/parent/{id}***

Required parameters: the **id** of the parent pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the pin sections in the parent pin list. The requested [PinSection](#pinsection-schema) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a pin section

<img src="../images/patch.png" alt="Patch request for a pin section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

Required parameters: the **id** of the pin section

When you request to update a pin section, the request body will have the following content: 

Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The pin section is updated. The updated pin section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "name": "Strategy"
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T11:11:50.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Strategy",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "vv"
    },
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Feedback"
        }
    ]
}
    </code>
</div>

<br/>

## Delete a pin section

<img src="../images/delete.png" alt="Delete request for a pin section" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

Required parameters: the **id** of the pin section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin section is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |