# Dashboard List

With dashboards you can display information with the help of beautiful visualizations. You can organize them in different lists for better visibility.

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

## Create a dashboard list   

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/dashboardlists***</span>

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
| 201 (Created) |You successfully created a dashboard list. The newly created dashboard list will be returned in the response body. |
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

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

Required parameters: the **id** of the dashboard list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view the dashboard list with its dashboards. The requested [DashboardList](#dashboardlist-schema) will be returned in the response body.    |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Get all Dashboard Lists for a parent document

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/parent/{id}***

Required parameters: the **id** of the parent document

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all the dashboard lists in the parent document. The requested dashboard lists will be returned in the response body in an [ItemsObject](../generic-slingshot-resources.html#item-object) array. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

## Update a dashboard list  

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

Required parameters: the **id** of the dashboard list

When you request to update a dashboards list, the request body will have the following content: 

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | Min = 1, Max = 100 |  

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
            "id": "{123456}_f",
            "name": "Q1"
        }
    ]
}
```

## Delete a dashboard list

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/dashboardlists/{id}***

Required parameters: the **id** of the dashboard list

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |The dashboard list is deleted. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |
