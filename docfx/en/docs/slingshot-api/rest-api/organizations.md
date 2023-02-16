# Organizations

## Get all organizations for a current user 

You can view all the organizations you are in by submitting a `GET` request with the {base_url}/ organizations endpoint.

`GET` {base_url}/organizations

Required parameters: None

Possible responses:

| Code | Description|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |You can view all your organizations. The requested Organizations (hyperlink) will be returned in the response body.   |
| 403 (Forbidden) |The server understands the request, but the request cannot be authorized. This can happen, for example, when you try reading an object without access. No need for re-authentication. |
| 404 (Not Found) |The requested resource cannot be found by the server. This can be, for example, due to a specified object that doesn’t exist. |

Example of a successful response:

```
{
  "items": [
    {
      "id": "{123456}_org",
      "modified": "2023-02-06T23:17:35.0000000",
      "created": "2020-09-02T11:46:32.0000000",
      "name": "Doe",
      "members": [
        {
          "id": "e91e11eg_fe0b4111-c5f2-4111-1c1d-dz011eaf1982_u",
          "role": "contributor",
          "name": "George",
          "email": "g@gmail.com "
        }
  ],
      "workspaces": [],
      "projects": [],
      "pinLists": [
        {
          "id": "{123456}",
          "name": "Test"
        },
        {
          "id": "{123456}",
          "name": "General"
        } ]
}
```

