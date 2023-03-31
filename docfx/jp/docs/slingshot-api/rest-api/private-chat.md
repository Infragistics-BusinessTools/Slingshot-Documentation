# プライベート チャット

他のユーザーと通信するために、プライベート チャットを使用できます。ユーザーはワークスペースやプロジェクトに依存しないため、ユーザーは組織の一員である必要はありません。チャット内の情報を見ることができるのは、通信するユーザーだけです。

## スキーマ:

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| id              | 文字列 |read-only  |
| modified             | 文字列 |read-only  |
|timestamp |	倍精度浮動小数点数型 (double) | read-only| 
| created             | 文字列 | read-only |
| name               | 文字列 |  min = 1, max = 100 |  
|members| 	配列 <[MemberInfo](../generic-slingshot-resources.html#member-info-object)> |read-only|
|lastMessage| オブジェクト <[ChatMessageInfo](../generic-slingshot-resources.html#チャット-メッセージ情報オブジェクト)>|read-only |

<br/>

## 例:

```
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T15:45:21.0000000",
    "timestamp": 1676043921598.1133,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "I will check it."
    }
}
```

<br/>

## プライベート チャットを作成する 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats***</span>

必須パラメーター: なし

プライベート チャットの作成を要求すると、要求本文には次の内容が含まれます。

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | required, min = 1, max = 100 |
| members         | 配列 <[MemberInfo](../generic-slingshot-resources.html#member-info-object)>|required | 

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 201 (Created) |プライベート チャットが正常に作成されました。新しく作成されたプライベート チャットは、応答本文で返されます。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。  |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ],
    "name": "Feedback"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-09T15:26:48.0000000",
    "timestamp": 1675956408697.267,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ]
}
    </code>
</div>

<br/>

## プライベート チャットを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}***

必須パラメーター: プライベート チャットの **id**。

可能な応答:

コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プライベート チャットを表示できます。要求されたプライベート チャットは、応答本文で返されます。  |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## すべてのプライベート チャットを取得する

<img src="../images/get-all.png" alt="Get all request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> <span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats***</span>

必須パラメーター: なし

可能な応答:

コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |すべてのプライベート チャットを表示できます。要求された [PrivateChat(s)](#private-chat-schema) は、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## プライベート チャット メッセージを送信する 

<img src="../images/patch.png" alt="Patch request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}***

必須パラメーター: プライベート チャットの **id**。

ディスカッションの更新を要求する場合、要求の本文には次の内容を含めます。 

|    プロパティ  | 型            | 属性           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| name               | 文字列 | min = 1, max = 100 |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プライベート チャットが正常に更新されました。   |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。|
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "name": "Check"
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-20T07:53:06.0000000",
    "timestamp": 1676879586281.6526,
    "created": "2022-08-16T09:57:46.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "B",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "I will double-check."
    }
}
    </code>
</div>

<br/>

## プライベート チャット メッセージを取得する

<img src="../images/get.png" alt="Get request" class="responsive-img" width="5%" style="vertical-align:middle;margin:0px 0px"/> ***<span class="italic">***htt<area>ps://my.slingshotapp<area>.io/v1/privatechats/{id}/messages***</span>***

必須パラメーター: プライベート チャットの **id**。

>[!NOTE] 返されるメッセージの数または開始インデックスを設定しない場合、それらのパラメーターは自動的に追加されます。返されるメッセージの数のデフォルト値は 10 で、開始インデックスのデフォルト値は 0 です。

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プライベート チャットですべてのメッセージを表示できます。要求されたプライベート チャットは、応答本文で返されます。   |
| 403 (Forbidden) |サーバーは要求を理解しますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## プライベート チャット メッセージを送信する
<img src="../images/post-sending-private-chat.png" alt="Sending private chat with post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/send***

必須パラメーター: プライベート チャットの **id**。 

プライベート チャットの送信を要求すると、要求本文には次の内容が含まれます。 

|    プロパティ  | 型            | 文字列           |
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| text              | 文字列 | min = 1, max = 100 |

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 204 (No Content) |プライベート チャット メッセージを送信します。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

<br/>

## プライベート チャットにメンバーを追加する 

<img src="../images/post-request.png" alt="Post request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/members***

必須パラメーター: プライベート チャットの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#member-info-object)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |メンバーをプライベート チャットに追加しました。更新されたプライベート チャットが返されます。  |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T09:09:23.0000000",
    "timestamp": 1676020163550.34,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Vyara",
            "role": "owner"
        },
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "Okay, I will check it again."
    }
}
    </code>
</div>

<br/>

>[!NOTE] メンバーには所有者ロールのみを割り当てることができます。

<br/>

## プライベート チャットからメンバーを削除する

<img src="../images/delete.png" alt="Delete request" class="responsive-img" width="6%" style="vertical-align:middle;margin:0px 0px"/> ***https://my.slingshotapp.io/v1/privatechats/{id}/members***

必須パラメーター: プライベート チャットの **id**。

要求本文: [ItemsObject](../generic-slingshot-resources.html#項目オブジェクト) <[MemberInfo](../generic-slingshot-resources.html#member-info-object)>

可能な応答:

| コード | 説明|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| 200 (Success) |プライベート チャットからメンバーを削除しました。 |
| 400 (Bad Request) |パラメーターが欠落しているか、形式が正しくないため、要求は処理されませんでした。応答のエラー配列を確認して、何が問題なのかを把握してください。 |
| 403 (Forbidden) |サーバーは要求を理解していますが、要求を承認できません。これは、たとえば、アクセスせずにオブジェクトを読み込もうとしたときに発生する可能性があります。再認証の必要はありません。 |
| 404 (Not Found) |要求されたリソースがサーバーで見つかりません。これは、たとえば、指定されたオブジェクトが存在しないことが原因である可能性があります。 |

成功した要求本文の例:

```
{
    "items": [
        {
            "id": "{123456}_u",
            "name": "Nik",
            "role": "owner"
        }
    ]
}
```

<br/>

<div class="fancy-details">
    <summary><b>成功した応答本文の例:</b></summary>
    <code>
{
    "id": "{123456}_pchat",
    "modified": "2023-02-10T09:41:56.0000000",
    "timestamp": 1676022116747.258,
    "created": "2023-02-09T15:26:48.0000000",
    "name": "Feedback",
    "members": [
        {
            "id": "{123456}_u",
            "name": "Ver",
            "role": "owner"
        }
    ],
    "lastMessage": {
        "id": "{123456}",
        "userId": "{123456}_u",
        "text": "LeftGroupChat"
    }
}
    </code>
</div>