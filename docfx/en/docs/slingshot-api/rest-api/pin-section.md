# Pin section

## Create a pin section

You can create a pin section by sending a `POST` request to the {base_url}/pinsections endpoint.  

`POST` {base_url}/pinsections

Required parameters: None

When you request to create a pin section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| pinList   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin section. The newly created pin section will be returned in the response body.   |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Q3",
  "pinList": {
    "id": "{123456}_b",
    "name": "Statistics"
      }
}
```

Example of a successful response: 

```
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
  "pins": []
}
```

## Get a pin section

You can check all the information about a pin section by sending a `GET` request to the {base_url}/pinsections/{id}endpoint.
`GET`/{base_url}/pinsections/{id}

Required parameters: the **id** of the pin section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the pin section. The requested [PinSection](#pinsection-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a pin section

You can update a pin section by sending the `PATCH` request to the {base_url}/pinsections/{id} endpoint.  

`PATCH` {base_url}/pinsections/{id}

Required parameters: the **id** of the pin section

When you request to update a pin section, the request body will have the following content: 

    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The pin section is updated. The updated pin section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Strategy"
}
```

Example of a successful response: 

```
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
  "pins": []
}
```

## Delete a pin section

You can delete a pin section by sending a `DELETE` request to the {base_url}/pinsections/{id} endpoint. 

`DELETE` {base_url}/pinsections/{id}

Required parameters: the **id** of the pin section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin section is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all pin sections for a parent pin list

You can view all the pin sections for a parent pin list by submitting a `GET` request with the {base_url}/pinsections/parent/{id} endpoint.

`GET` {base_url}/pinsections/parent/{id}

Required parameters: the **id** of the parent pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the pin sections in the parent pin list. The requested [PinSection](#pinsection-schema) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## PinSection schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string |  Min = 1, Max = 100 |  
| user             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | 
| pinList   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | 
| pins   |array [DocumentInfo](../generic-slingshot-resources.html#document-info-object)  | | 

Example:

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
  "pins": []
}
```




