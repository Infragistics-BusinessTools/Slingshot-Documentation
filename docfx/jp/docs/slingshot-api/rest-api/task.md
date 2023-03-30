# タスク

作業をより適切に整理するために、タスクを使用できます。見やすくするために、タスクを別のリストおよびセクションに整理できます。 

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id               | 文字列 | read-only |    
| modified              | 文字列 | read-only |  
| created             | 文字列 | read-only |  
| name               | 文字列 |min = 1, max = 200|  
| description              | 文字列 | nullable |  
| startDate               | 文字列 <DateTime>  |  |  
| dueDate               | 文字列 <DateTime>  |  |  
| status              | 文字列 ("open", "progress", "review", "blocked", "completed") |  | 
| priority             | 文字列 ("none", "low", "medium", "high") |  |   
| assignees               | 配列 <[AssigneeInfo](https://www.slingshotapp.io/en/help/docs/slingshot-api/generic-slingshot-resources#assignee-info-object)>  |read-only |
| user               | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| workspace              | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only|
| project             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| taskList            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| taskSection      | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| parentTask      | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |
| subtasks      | 配列 <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> | read-only |

 <br/>

## 例:

```
{
    "id": "{123456}_tk",
    "modified": "2023-01-25T13:58:34.0000000",
    "created": "2023-01-25T13:55:05.0000000",
    "name": "Customer Support",
    "description": "Feedback",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "email": "v@gmai.com"
        }
    ],
    "user": {
        "id": "{123456}_u",
        "name": "Ver"
    },
    "taskList": {
        "id": "{123456}",
        "name": "1"
    },
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Q1"
    },
    "subtasks": [
        {
            "id": "{123456}_tk",
            "name": "Forum"
        }
    ]
}
```

<br/>

## タスクを作成する

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

必須パラメーター: なし 

タスクの作成を要求する場合、要求の本文には次の内容を含めます。  

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
| startDate              | 文字列 | |
| dueDate               | 文字列 | |
| status             | 文字列列挙体 ("open", "progress", "review", "blocked", "completed")|required |  
| priority            | 文字列列挙体 ("none", "low", "medium", "high") |required |  
| taskSection   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)>  |required, one-of | 
| parentTask   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#document-info-object)> |required, one-of | 
| assignees               | 配列 <[AssigneeInfo](https://www.slingshotapp.io/en/help/docs/slingshot-api/generic-slingshot-resources#assignee-info-object)>  ||

>[!NOTE]  タスクを作成するには、親タスク セクションの **id** と**名前**を **taskSection** プロパティに指定する必要があります。または、サブタスクを作成する場合は、まず、**parentTask** プロパティで親タスクの **id** と**名前**を指定する必要があります。taskSection プロパティと parentTask プロパティの両方が要求に存在するとエラーが発生するため、指定できるのは 1 つだけです。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |タスクが正常に作成されました。新しく作成されたタスクは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |要求を承認できません。これは、必要な権限がない場合に発生する可能性があります。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback",
    "description": "To check the feedback",
    "startDate": "2023-02-15T14:50:57.299Z",
    "dueDate": "2023-02-15T14:50:57.299Z",
    "status": "open",
    "priority": "none",
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Section Test"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tk",
    "modified": "2023-02-15T15:45:49.0000000",
    "created": "2023-02-15T15:45:49.0000000",
    "name": "Feedback",
    "description": "To check the feedback",
    "startDate": "2023-02-15T14:50:57.0000000",
    "dueDate": "2023-02-15T14:50:57.0000000",
    "status": "open",
    "priority": "none",
    "assignees": [],
    "workspace": {
        "id": "{123456}_ws",
        "name": "Email support"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Workspace Tasks"
    },
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Section 1"
    },
    "subtasks": [
        {
            "id": "{123456}_tk",
            "name": "Event"
        }
    ]
}
    </code>
</div>

<br/>

## タスクを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> 
<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/tasks***</span>

必須パラメーター: タスクの **id**。  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスクを表示できます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親タスク セクションのすべてのタスクを取得

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/parent/{id}***

必須パラメーター: 特定のタスクの **id**。

可能な応答:

コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスク セクションですべてのタスクを表示できます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## タスクを更新する 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}***

必須パラメーター: タスクの **id**。 

タスクの更新を要求する場合、要求の本文には次の内容を含めます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |  
| name               | 文字列 |min = 1, max = 200|  
| description              | 文字列 | nullable |  
| startDate               | 文字列 <DateTime>  |  |  
| dueDate               | 文字列 <DateTime>  |  |  
| status              | 文字列 ("open", "progress", "review", "blocked", "completed") |  | 
| priority             | 文字列 ("none", "low", "medium","high") |  |   

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスクが更新されました。更新された [Task](#task-schema) は、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Feedback Q2",
    "description": "to check the feedback ",
    "startDate": "2023-02-17T11:33:10.710Z",
    "dueDate": "2023-02-17T11:33:10.710Z",
    "status": "open",
    "priority": "none"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}",
    "modified": "2023-02-17T11:37:22.0000000",
    "created": "2022-07-26T09:31:00.0000000",
    "name": "Feedback Q2",
    "description": "to check the feedback",
    "startDate": "2023-02-17T11:33:10.0000000",
    "dueDate": "2023-02-17T11:33:10.0000000",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u",
            "name": "Vyara Yan",
            "email": "v@gmail.com"
        }
    ],
    "workspace": {
        "id": "{123456}_ws",
        "name": "Customer Support "
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Emails"
    },
    "taskList": {
        "id": "{123456}_tg",
        "name": "Project Tasks"
    },
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Feedback"
    },
    "subtasks": [
        {
            "id": "{123456}_tk",
            "name": "Forum"
        }
    ]
}
    </code>
</div>

<br/>

## タスクを削除する

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}***

必須パラメーター: 特定のタスクの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |タスクが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## タスクに割り当て先を追加する

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}/assignees***

必須パラメーター: 特定のタスクの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#item-object) <[AssigneeInfo](https://www.slingshotapp.io/en/help/docs/slingshot-api/generic-slingshot-resources#assignee-info-object)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスクに割り当て先を正常に追加しました。更新されたタスクが返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:
```
{
    "items": [
        {
            "id": "{123456}_u"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tk",
    "modified": "2023-02-10T13:55:53.0000000",
    "created": "2023-01-25T09:07:44.0000000",
    "name": "To check the feedback",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u",
            "name": "T Petkov",
            "email": "t@gmai.com"
        }
    ],
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskList": {
        "id": "{123456}",
        "name": "Personal Tasks"
    },
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Section 3"
    },
    "subtasks": [
        {
            "id": "{123456}_tk",
            "name": "Q1"
        }
    ]
}
    </code>
</div>

<br/>

## タスクから割り当て先を削除する

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/tasks/{id}/assignees***

必須パラメーター: タスクの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#item-object) <[AssigneeInfo](https://www.slingshotapp.io/en/help/docs/slingshot-api/generic-slingshot-resources#assignee-info-object)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |タスクから割り当て先を削除しました。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_tk",
    "modified": "2023-02-16T15:00:02.0000000",
    "created": "2023-01-25T09:07:44.0000000",
    "name": "Test test",
    "status": "open",
    "priority": "none",
    "assignees": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "email": "v@gmai.com"
        }
    ],
    "user": {
        "id": "{123456}_u",
        "name": "Vyara Yan"
    },
    "taskList": {
        "id": "{123456}",
        "name": "Personal Tasks"
    },
    "taskSection": {
        "id": "{123456}_tg",
        "name": "Section 3"
    },
    "subtasks": [
        {
            "id": "{123456}_tk",
            "name": "Test"
        }
    ]
}
    </code>
</div>