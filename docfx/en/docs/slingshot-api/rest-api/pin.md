# Pin

Pins are simple links to different types of resources that you can share or access. You can organize them in different lists and sections.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  read-only|
| modified             | string | read-only |
| created             | string | read-only |
| name               | string | min = 1, max = 100 |  
| pinType |string enum ("document", "url") |read-only |
| documentId  |string| read-only|  
| documentType   |string enum(see below)  |read-only | 
| url |string | |

### Document Types

|    Resource | Document Type           | 
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| Workspace             | Workspace | 
|Project                 |Project|
|Organization           |Organization|
|Task List               |TaskList|
|Task Section|           |TaskSection|
|Task                     |Task|
|Pin List                |PinList|
|Pin Section|            PinSection|
|Pin|                     Pin|
|Discussion List|                  |DiscussionList|
|Discussion              |Discussion|
|Private Chat|           |PrivateChat|
|Dashboard List                    |DashboardList|
|Dashboard Section               |DashboardSection|
|Dashboard|            Dashboard|

<br/>

## Example:

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:32:37.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Q1",
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
            "name": "Strategy"
        }
    ]
}
```

<br/>

## Create a pin

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/pins/{pinSectionId}***</span>

Required parameters: The **id** of the pin section 

When you request to create a pin, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100, required |  
| pinType |string enum ("document", "url") |required |
| documentId  |string|required, one-of, groupId = 1|  
| documentType   |string enum  |required, one-of, groupId = 1| 
| url |string | required, one-of, groupId = 2|

If you decide to use a documentId in the request body, you also need to specify the documentType. Otherwise, you will get an error message. 

If you decide to use a url of a component in the request body, you also need to specify the pinType in order to avoid errors.

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin. The newly created pin will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
    "name": "Strategy",
    "pinType": "url"
}
```
Example of a successful response body: 

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:32:37.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Q1",
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
            "name": "Strategy"
        }
    ]
}
```

<br/>

## Update a pin 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pins/{pinSectionId}/{pinId}***

Required parameters: the **id** of the pin section as well as the **id** of the pin being updated

When you request to update a pin in a pin section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100 |   
| url |string | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The pin is updated. The updated pin will be returned in the response body.    |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
    "name": "Goals"
}
```
Example of a successful response body: 

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:49:24.0000000",
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
            "name": "Goals"
        },
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:37:52.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Ideas"
        }
    ]
}
```
 
<br/>

## Delete a pin 

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pins/{pinSectionId}/{pinId}***

Required parameters: the **id** of the pin section and the **id** of the pin being deleted

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |