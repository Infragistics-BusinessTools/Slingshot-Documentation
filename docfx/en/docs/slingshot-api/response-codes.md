# Response Codes

When you submit an API request, an [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS) (Hypertext Transfer Protocol Secure) response with a status code will be returned. 

Sometimes the requests to the API might not be successful. In such cases, you can find information regarding the failure (error message and error code) in the HTTP response status code. The response body is in a [JSON](https://www.json.org/json-en.html) format.

The reasons for these errors can vary. Below you can see the different types of status codes that can appear in the process.

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|200 (Success)|The submitted request was successfully executed, and the data is available for usage. |
| 201 (Created) |The request was successfully executed, and a resource was created. |
|204 (No Content)|The request was successful. No need for navigating away from the current page that you are using.|
| 400 (Bad Request) |The request was not processed because of missing or malformed parameter(s). Check the error array in the response to get an idea of what went wrong. |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication.  |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |
|429 (Too Many Requests)|There are too many requests in a given period of time. For more information about the Slingshot API rate limits, head [here](rate-limits.md).|
|500 (Internal Server Error)| Something unexpected has occurred on the Slingshot’s end.|

>[!NOTE] Error 400 (Bad Request) returns an error array, containing information about what went wrong.
 




