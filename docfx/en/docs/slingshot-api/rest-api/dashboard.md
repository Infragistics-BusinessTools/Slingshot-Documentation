# Dashboard

With dashboards you can display information with the help of beautiful visualizations. They can be used, for example, to show the performance of a business. You can organize them in sections and lists.

## Schema:

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | string |read-only |
| modified             | string |read-only |
| created             | string | read-only |
| name               | string | min = 1, max = 100 | 
| description           | string | min = 1, max = 144, nullable |
| user            | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>| read-only |
| workspace            |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only |  
| project    |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |read-only | 
| dashboardList             | object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| dashboardSection   |object <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>|  read-only|

<br/>

## Example:

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

<br/>

## Get a dashboard

<img src="../images/get.png" alt="Get request for a dashboard" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboards/{id}***

Required parameters: the **id** of the dashboard

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the dashboard. The requested [Dashboard](#dashboard-schema) will be returned in the response body.  |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

<br/>

## Update a dashboard

<img src="../images/patch.png" alt="Patch request for a dashboard" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/>  ***https://my.slingshotapp.io/v1/dashboards/{id}***

Required parameters: the **id** of the dashboard

When you request to update a dashboard, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | min = 1, max = 100|  
| description    |string | min = 0, max = 144, nullable | 

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |The dashboard is updated. The updated dashboard will be returned in the response body.  |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request body:

```
{
    "description": "Results",
    "name": "Results(2022)"
}
```

<br/>

<div class="fancy-details">
    <summary><b>Example of a successful response body:</b></summary>
    <code>
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
    </code>
</div>

<br/>

## Delete a dashboard 

<img src="../images/delete.png" alt="Delete request for a dashboard" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/>  ***https://my.slingshotapp.io/v1/dashboards/{id}***

Required parameters: the **id** of the dashboard

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The dashboard is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |