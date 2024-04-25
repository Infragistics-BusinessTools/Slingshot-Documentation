# ピン固定

ピン固定は、共有またはアクセスできるさまざまな種類のリソースへの単純なリンクです。ピン固定をさまざまなリストやセクションに整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 |  read-only|
| modified             | 文字列 | read-only |
| created             | 文字列 | read-only |
| name               | 文字列 | min = 1, max = 100 |  
| pinType |文字列列挙体 ("document", "url") |read-only |
| documentId  |文字列| read-only|  
| documentType   |文字列列挙体(see below)  |read-only | 
| url |文字列 | |

### ドキュメント タイプ

|    リソース | ドキュメント タイプ          | 
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|ワークスペース             | Workspace | 
|プロジェクト                 |Project|
|組織           |Organization|
|タスク リスト             |TaskList|
|タスク セクション          |TaskSection|
|タスク                     |Task|
|リストのピン固定                |PinList|
|セクションのピン固定            | PinSection|
|ピン固定                     |Pin|
|ディスカッション リスト         |DiscussionList|
|ディスカッション             |Discussion|
|プライベート チャット           |PrivateChat|
|ダッシュボード リスト          |DashboardList|
|ダッシュボード セクション       |DashboardSection|
|ダッシュボード               |Dashboard|

<br/>

## 例:

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:32:37.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Q1",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "vv"
    },
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Strategy"
        }
    ]
}
```

<br/>

## ピン固定を作成する

<img src="../images/post-request.png" alt="Post request for a pin" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pins/{pinSectionId}***</span>

必須パラメーター: ピン固定セクションの **id**。 

ピン固定の作成を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 文字列           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |  
| pinType |文字列列挙体 ("document", "url") |required |
| documentId  |文字列|required, one-of, groupId = 1|  
| documentType   |文字列列挙体  |required, one-of, groupId = 1| 
| url |文字列 | required, one-of, groupId = 2|

要求本文で documentId を使用する場合は、documentType も指定する必要があります。そうしないと、エラー メッセージが表示されます。 

要求本文でコンポーネントの URL を使用する場合は、エラーを回避するために pinType も指定する必要があります。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ピン固定が正常に作成されました。新しく作成されたピン固定は、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
    "name": "Strategy",
    "pinType": "url"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:32:37.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Q1",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "vv"
    },
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Strategy"
        }
    ]
}
    </code>
</div>

<br/>

## ピン固定を更新する 

<img src="../images/patch.png" alt="Patch request for a pin" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pins/{pinSectionId}/{pinId}***

必須パラメーター: ピン固定セクションの **id** と更新されるピン固定の **id**。

ピン固定セクションの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |   
| url |文字列 | |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ピン固定が更新されました。更新されたピン固定は、応答本文で返されます。    |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
    "name": "Goals"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-09T10:49:24.0000000",
    "created": "2023-02-07T10:24:36.0000000",
    "name": "Strategy",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "vv"
    },
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Goals"
        },
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:37:52.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Ideas"
        }
    ]
}
    </code>
</div>
 
<br/>

## ピン固定を削除する 

<img src="../images/delete.png" alt="Delete request for a pin" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pins/{pinSectionId}/{pinId}***

必須パラメーター: ピン固定セクションの **id** と削除されるピンの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ピン固定が削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |