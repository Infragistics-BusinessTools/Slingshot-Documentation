# Dashboard

## Get a dashboard

You can check all the information about a dashboard by sending a `GET` request to the the {base_url}/dashboards/{id} endpoint.

`GET`/{base_url}/dashboards/{id}

Required parameters: the **id** of the dashboard

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the dashboard. The requested [Dashboard](#dashboard-schema) will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a dashboard

You can update a dashboard by sending the `PATCH` request to the {base_url}/dashboards/{id} endpoint.  

`PATCH` {base_url}/dashboards/{id}

Required parameters: the **id** of the dashboard

When you request to update a dashboard, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100|  
| description    |string | Min = 0, Max = 144, Nullable | 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The dashboard is updated. The updated dashboard will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request:

```
{
    "description": "Results",
    "name": "Results(2022)"
}
```

Example of a successful response: 

```
{
    "id": "{123456}",
    "modified": "2023-02-06T13:39:17.0000000",
    "created": "2022-09-29T13:07:03.0000000",
    "name": "Results(2022)",
    "description": "Results",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Mihailova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "My Dashboards"
    },
    "dashboardSection": {
        "id": "{123456}_f",
        "name": "Section 1"
    }
}
```

## Delete a dashboard

You can delete a dashboard by sending a `DELETE` request to the {base_url}/dashboards/{id} endpoint. 

`DELETE` {base_url}/dashboards/{id}

Required parameters: the **id** of the dashboard

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The dashboard is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Dashboard schema

Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string | |
| modified             | string | |
| created             | string |  |
| name               | string | Min = 1, Max = 100 | 
| description           | string | Min = 1, Max = 144, Nullable |
| user            | [DocumentInfo](../generic-slingshot-resources.html#document-info-object)|  |
| workspace            |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | |  
| project    |[DocumentInfo](../generic-slingshot-resources.html#document-info-object) | | 
| dashboardList             | [DocumentInfo](../generic-slingshot-resources.html#document-info-object) |  |
| dashboardSection   |[DocumentInfo](../generic-slingshot-resources.html#document-info-object)|  |

Example:

```
{
    "id": "{123456}",
    "modified": "2023-02-06T12:34:39.0000000",
    "created": "2022-09-29T13:27:25.0000000",
    "name": "Absences",
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Todorova"
    },
    "dashboardList": {
        "id": "{123456}_repo",
        "name": "HR"
    },
    "dashboardSection": {
        "id": "{123456}_f",
        "name": "June"
    }
}
```

