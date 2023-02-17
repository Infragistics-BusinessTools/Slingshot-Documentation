# Pin List

## Create a pin list

You can create a pin list by sending a `POST` request to the {base_url}/pinlists endpoint.  

`POST` {base_url}/pinlists

Required parameters: None

When you request to create a pin list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| user   |DocumentInfo | oneOf|
| workspace            |DocumentInfo | oneOf|  
 | project    |DocumentInfo | oneOf| 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a pin list. The newly created PinList (hyperlink) will be returned in the response body.  |
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

You can check all the information about a pin list by sending a `GET` request to the {base_url}/pinlists/{id}endpoint.

`GET`/{base_url}/pinlists/{id}

Schema: PinList (hyperlink)

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the pin list. The requested PinList (hyperlink) will be returned in the response body.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a pin list

You can update a pin list by sending the `PATCH` request to the {base_url}/pinlists/{id} endpoint.  

`PATCH` {base_url}/pinlists/{id}

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
| 200 (Success) |The pin list is updated. The updated PinList (hyperlink) will be returned in the response body.    |
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

You can delete a pin list by sending a `DELETE` request to the {base_url}/pinlists/{id} endpoint. 

`DELETE` {base_url}/pinlists/{id}

Required parameters: the **id** of the pin list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The pin list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all pin lists

You can view all the pin lists that are in a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/pinlists/parent/{id}endpoint.

`GET` {base_url}/pinlists/parent/{id}

Schema: PinList(s) (hyperlink)

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the pin lists that are in the parent document. The requested PinList(s) (hyperlink) will be returned in the response body in an ItemsObject (hyperlink) array.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## PinList schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string |  |
| created             | string |  |
| name               | string | Min = 1, Max = 100 |
| user            | DocumentInfo |  |
| workspace            |DocumentInfo | |  
| project    |DocumentInfo | | 
| pinSections   |array <DocumentInfo>  | |

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
