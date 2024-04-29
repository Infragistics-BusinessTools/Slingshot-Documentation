# リストのピン固定

ピン固定は、共有またはアクセスできるさまざまな種類のリソースへの単純なリンクです。見やすくするために、別のリストに整理できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 | read-only |
| modified             | 文字列 |read-only  |
| created             | 文字列 |  read-only|
| name               | 文字列 | min = 1, max = 100 |
| user            | オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| read-only |
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)> | read-only| 
| pinSections   |配列 <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>  | read-only|

<br/>

## 例:

```
{
    "id": "{123456}_b",
    "modified": "2023-02-07T08:47:54.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "HR",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Team 1"
    },
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Info"
        }
    ]
}
```

<br/>

## ピン固定リストを作成する 

<img src="../images/post-request.png" alt="Post request for  a pin list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists***</span>

必須パラメーター: なし

ピン固定リストの作成を要求すると、要求本文には次の内容が含まれます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |  
| user   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| required, one-of|
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>| required, one-of|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.md#ドキュメント情報オブジェクト)>|  required, one-of| 

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ピン固定リストが正常に作成されました。新しく作成されたピン固定リストは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "HR",
    "project": {
        "id": "{123456}_proj",
        "name": "Management"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_b",
    "modified": "2023-02-07T08:47:54.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "HR",
    "workspace": {
        "id": "{123456}_ws",
        "name": "CEO"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Management"
    },
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Research"
        }
    ]
}
    </code>
</div>

<br/>

## ピン固定リストを取得する

<img src="../images/get.png" alt="Get request for a pin list" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

必須パラメーター: ピン固定リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ピン固定リストを表示できます。要求された [PinList](#pinlist-schema) は、応答本文で返されます。    |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## すべてのピン固定リストを取得する

<img src="../images/get-all.png" alt="Get all request for pin lists" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/parent/{id}***

必須パラメーター: 親ドキュメントの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ドキュメントにあるすべてのピン固定リストを表示できます。要求された [PinList(s)](#pinlist-schema) は、[ItemsObject](../generic-slingshot-resources.md#項目オブジェクト) 配列の応答本文で返されます。    |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。|

<br/>

## ピン固定リストを更新する

<img src="../images/patch.png" alt="Patch request for a pin list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

必須パラメーター: ピン固定リストの **id**。

ピン固定リストの更新を要求すると、要求本文には次の内容が含まれます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ピン固定リストを更新しました。更新されたピン固定リストは、応答本文で返されます。    |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Statistics"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_b",
    "modified": "2023-02-07T09:49:25.0000000",
    "created": "2023-02-07T08:47:54.0000000",
    "name": "Statistics",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Customer Support"
    },
    "pinSections": [
        {
            "id": "{123456}_bs",
            "name": "Info"
        }
    ]
}
    </code>
</div>

<br/>

## ピン固定リストを削除する

<img src="../images/delete.png" alt="Delete request for a pin list" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinlists/{id}***

必須パラメーター: ピン固定リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ピン固定リストが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。|