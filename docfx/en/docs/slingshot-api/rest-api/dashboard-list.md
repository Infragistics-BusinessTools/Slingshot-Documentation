# Dashboard List

{base_url}/dashboardlists endpoint

## Create a dashboard list 

You can create a dashboard list by sending a `POST` request to the {base_url}/dashboardlists endpoint.   

`POST`/{base_url}/dashboardlists

Required parameters: None 

When you request to create a dashboard list, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| user   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | OneOf|
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| OneOf|  
 | project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | OneOf| 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created dashboard list will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Marketing",
  "user": {
    "id": "{123456}_u"
  }
}
  ```

Example of a successful response: 

```
{
  "id": "{123456}_repo",
  "modified": "2023-02-03T14:07:34.0000000",
  "created": "2023-02-03T14:07:34.0000000",
  "name": "Marketing",
  "user": {
    "id": "{123456}_u",
    "name": "Teddy Mitkova"
  },
  "dashboardSections": []
}
```

## Get a dashboard list 

You can check all the information about a dashboard list by sending a `GET` request to the {base_url}/dashboardlists/{id}endpoint.

`GET`/{base_url}/dashboardlists/{id}

Required parameters: the **id** of the dashboard list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the dashboard list with its dashboards. The requested [DashboardList](#dashboardlist-schema) will be returned in the response body.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a dashboard list

You can update a dashboard list by sending the `PATCH` request to the {base_url}/tasklists/{id} endpoint.  
`PATCH` {base_url}/dashboardlists/{id}

Required parameters: the **id** of the dashboard list

When you request to update a dashboards list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100 |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The dashboards list is updated. The updated dashboard list will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
  "name": "Marketing"
}
```

Example of a successful response: 

```
{
  "id": "{123456}_repo",
  "modified": "2023-02-06T12:34:39.0000000",
  "created": "2023-02-06T12:08:44.0000000",
  "name": "Marketing",
  "user": {
    "id": "{123456}_u",
    "name": "Vyara Todorova"
  },
  "dashboardSections": [
    {
      "id":"{123456}_f",
      "name": "Q1"
    }
  ]
}
```

## Delete a dashboard list

You can delete a dashboard list by sending a `DELETE` request to the {base_url}/dashboardlists/{id} endpoint. 

`DELETE` {base_url}/dashboardlists/{id}

Required parameters: the **id** of the dashboard list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The dashboard list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all Dashboard Lists for a parent document

You can view all the dashboard lists that are in a parent document (workspace, user or a project) by submitting a `GET` request with the {base_url}/dashboardlists/parent/{id} endpoint.

`GET` {base_url}/dashboardlists/parent/{id}

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the dashboard lists in the parent document. The requested dashboard lists will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## DashboardList schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  
| user   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| |
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 

Example: 

```
{
  "id": "{123456}_repo",
  "modified": "2023-02-03T14:07:34.0000000",
  "created": "2023-02-03T14:07:34.0000000",
  "name": "Marketing",
  "user": {
    "id": "{123456}_u ",
    "name": "Teddy Mitkova"
  },
  "dashboardSections": []
}
```


