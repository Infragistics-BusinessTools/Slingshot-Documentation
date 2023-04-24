# レート制限

API をスムーズに実行するために、レート リミッタが設定されています。1 分あたり 150 リクエストのレート制限があります。制限を超えた場合、次のエラーが表示されます: 


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

>[!NOTE] この制限は将来変更される可能性があります。

