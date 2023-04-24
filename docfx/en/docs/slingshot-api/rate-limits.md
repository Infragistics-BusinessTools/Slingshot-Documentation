# Rate Limits

In order for the API to run smoothly, a rate limiter is put into place. There is a rate limit of 150 requests per minute. In case you have exceeded the limit, the following error will show up: 


```
{
    "errors": [
        {
            "type": "rate-limit-exceeded-error",
            "path": "request",
            "message": "The rate limit of 150 requests per 60 seconds has been exceeded. Please wait and try again."
        }
    ],
    "type": "https://slingshot.infragistics.com/apiv1/problems/request-validation-failed-error",
    "title": "Request validation failed.",
    "status": 429,
    "detail": "The request has failed validation. Please see the 'errors' property for a list of errors that caused the request to fail.",
    "instance": "urn:uuid:0101533b-09ae-4450-a6d9-a97f2a45a452"
}
```

>[!NOTE] This quota might change in the future. 

