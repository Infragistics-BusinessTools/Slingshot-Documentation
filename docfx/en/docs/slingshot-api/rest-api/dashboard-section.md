# Dashboard Section

**https://my.slingshotapp.io/v1/dashboardsections endpoint**

## Create a dashboard section

You can create a dashboard section by sending a `POST` request to the https://my.slingshotapp.io/v1/dashboardsections endpoint.  

`POST` https://my.slingshotapp.io/v1/dashboardsections

Required parameters: None

When you request to create a dashboard section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 | 
| dashboardList             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) |  |

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a dashboards section. The newly created dashboard section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Q4",
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    }
}
```

Example of a successful response: 

```
{
    "id": "{123456}_f",
    "modified": "2023-02-06T14:52:33.0000000",
    "created": "2023-02-06T14:52:33.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    },
    "dashboards": []
}
```

## Get a dashboard section

You can check all the information about a dashboard section by sending a `GET` request to the the https://my.slingshotapp.io/v1/dashboardsections/{id} endpoint.

`GET` https://my.slingshotapp.io/v1/dashboardsections/{id}

Required parameters: the **id** of the dashboard section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the dashboards section. The requested [DashboardSection](#dashboardsection-schema) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a dashboard section

You can update a specific dashboard section by sending the `PATCH` request to the https://my.slingshotapp.io/v1/dashboardsections/{id} endpoint.  

`PATCH` https://my.slingshotapp.io/v1/dashboardsections/{id}

Required parameters: the **id** of the dashboard section

When you request to update a dashboard section, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The dashboards section is updated. The updated dashboard section will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "name": "Q2"
}
```

Example of a successful response: 

```
{
    "id": "{123456}_f",
    "modified": "2023-02-06T15:08:45.0000000",
    "created": "2023-02-06T14:51:44.0000000",
    "name": "Q2",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Marketing"
    },
    "dashboards": []
}
```

## Delete a dashboard section

You can delete a dashboards section by sending a `DELETE` request to the https://my.slingshotapp.io/v1/dashboardsections/{id} endpoint. 

`DELETE` https://my.slingshotapp.io/v1/dashboardsections/{id}

Required parameters: the **id** of the dashboard section

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The dashboard section is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all dashboard sections for a parent dashboard list 

You can view all the dashboard section for a parent dashboard list by submitting a `GET` request with the https://my.slingshotapp.io/v1/dashboardsections/parent/{id} endpoint.

`GET` https://my.slingshotapp.io/v1/dashboardsections/parent/{id}

Required parameters: the **id** of the dashboard list 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the dashboard sections in the parent dashboard list. The requested [DashboardSection](#dashboardsection-schema) will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#document-info-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## DashboardSection schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |  |
| modified             | string | |
| created             | string |  |
| name               | string | Min = 1, Max = 100 | 
| user            | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)| | 
| dashboardList             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) |  |
| dashboards   |array [DocumentInfo](../generic-slingshot-resources.html#document-info-object)  |  |

Example:

```
{
    "id": "{123456}_f",
    "modified": "2023-02-06T14:52:33.0000000",
    "created": "2023-02-06T14:52:33.0000000",
    "name": "Q4",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "Test"
    },
    "dashboards": []
}
```





