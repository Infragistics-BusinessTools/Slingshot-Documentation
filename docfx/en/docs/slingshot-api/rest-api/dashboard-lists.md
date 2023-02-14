# DashboardLists

## Create a Dashboard list 

You can create a dashboard list by sending a `POST` request to the {base_url}/dashboardlists endpoint.   

`POST`/{base_url}/dashboardlists

Required parameters: None 

When you request to create a dashboard list, the request body will have the following content:  

|    Property  | Type            | Attributes           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | string | HasCharLimitations, Min = 1, Max = 100, Required |  
| user   |DocumentInfo | OneOf, Required|
| workspace            |DocumentInfo | OneOf, Required|  
 | project    |DocumentInfo | OneOf, Required| 

 Possible responses:

| Response Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |You successfully created a discussion list. The newly created DiscussionList (hyperlink) will be returned in the response body. |
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the errors array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The request cannot be authorized. This can happen when you don’t have the necessary permissions.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful request: