# セクションのピン固定

ピン固定は、共有またはアクセスできるさまざまな種類のリソースへの単純なリンクです。ダッシュボードをセクションで整理できます。セクションは、ピン固定リストの分割です。1 つのリストに複数のセクションを作成できます。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 |read-only  |
| modified             | 文字列 | read-only |
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |  
| user             | オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> |read-only | 
| workspace            |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)> | read-only|  
| project    |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| read-only| 
| pinList   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>|read-only | 
| pins   |配列 <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>  |read-only | 

<br/>

## 例:

```
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T10:37:52.0000000",
    "created": "2023-02-07T10:37:52.0000000",
    "name": "Q3",
    "workspace": {
        "id": "123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "123456}_proj",
        "name": "Support"
    },
    "pinList": {
        "id": "123456}_b",
        "name": "Statistics"
    },
    "pins": [
        {
            "pinType": "url",
            "id": "{123456}",
            "created": "2023-02-09T10:32:37.0000000",
            "url": "https://my.slingshotapp.io/openBoardSection/{123456}_bs",
            "name": "Research"
        }
    ]
}
```

<br/>

## ピン固定セクションを作成する 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/pinsections***</span>

必須パラメーター: なし

ピン固定セクションの作成を要求する場合、要求の本文には次の内容が含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100|  
| pinList   |オブジェクト <[DocumentInfo](../generic-slingshot-resources.html#ドキュメント情報オブジェクト)>| required|

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |ピン固定セクションが正常に作成されました。新しく作成されたピン固定セクションは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Q3",
    "pinList": {
        "id": "{123456}_b",
        "name": "Statistics"
    }
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T10:37:52.0000000",
    "created": "2023-02-07T10:37:52.0000000",
    "name": "Q3",
    "workspace": {
        "id": "{123456}_ws",
        "name": "General Management"
    },
    "project": {
        "id": "{123456}_proj",
        "name": "Support"
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
            "name": "Research"
        }
    ]
}
    </code>
</div>

<br/>

## ピン固定セクションを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

必須パラメーター: ピン固定セクションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ピン固定セクションを表示できます。要求された [PinSection](#pinsection-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## 親ピン固定リストのすべてのピン固定セクションを取得

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/parent/{id}***

必須パラメーター: 親ピン固定リストの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |親ピン固定リストですべてのピン固定セクションを表示できます。要求された [PinSection](#pinsection-schema) は、[ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) 配列の応答本文で返されます。    |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## ピン固定セクションを更新する

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

必須パラメーター: ピン固定セクションの **id**。

ピン固定セクションの更新を要求する場合、要求の本文には次の内容を含めます。 

プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |  

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |ピン固定セクションを更新しました。更新されたピン固定セクションは、応答本文で返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Strategy"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_bs",
    "modified": "2023-02-07T11:11:50.0000000",
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
            "name": "Feedback"
        }
    ]
}
    </code>
</div>

<br/>

## ピン固定セクションを削除する

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/pinsections/{id}***

必須パラメーター: ピン固定セクションの **id**。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |ピン固定セクションが削除されました。 |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |