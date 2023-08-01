---
title: Amazon Redshift データ ソースを構成して使用する方法
_description: Amazon Redshift を Slingshot のデータ ソースとして接続して使用する方法を説明します。
_language: ja
---

# Amazon Redshift

## Amazon Redshift への接続
Amazon Redshift のデータ ソースを設定するには、以下の情報が必要です:

<img src="./images/add-amazon-redshift-credentials.png" alt="Configure Redshift Server details" class="responsive-img" width="50%"/>

1.  データ ソースの **デフォルト名**: データ ソース名は前のダイアログのアカウントのリストに表示されます。デフォルトでは、Slingshot は *Amazon Redshift* という名前を付けます。好みに合わせて変更できます。 

2.  [**サーバー**](#how-to-find-your-server-information): コンピューター名またはサーバーを実行しているコンピューターに割り当てられた IP アドレス。

3.  **[Port]**: 該当する場合、サーバー ポートの詳細。情報が入力されない場合、Slingshot はデフォルトでヒント テキスト (5432) のポートに接続します。

4.  **[資格情報]**: **資格情報**を選択した後、*Redshift* サーバーの資格情報を入力するか、既存の資格情報 (利用可能な場合) を選択できます。

      - **ユーザー名**: *Redshift* サーバーのユーザー アカウントまたはドメインの名前。

      - **[パスワード]**: *Redshift* サーバーにアクセスするためのパスワード。

      - **エイリアス**: データ ソース アカウントの名前。以前のダイアログのアカウントのリストに表示されます。


<a name='how-to-find-server'></a>
## サーバー情報を見つける方法

以下の手順でサーバーも確認できます。コマンドはサーバーで実行する必要があることに注意してください。

| WINDOWS                                                                                                         | LINUX                                                                                                         | MAC                                                                  |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1\. ファイル エクスプローラーを開きます。                                                                                     | 1\. ターミナルを開きます。                                                                                          | 1\. システム環境設定を開きます。                                         |
| 2\. [マイ コンピューター] → [プロパティ] を右クリックします。                                                                   | 2\. **$hostname** を入力します。                                                                                     | 2\. 共有セクションに移動します。                                 |
| ホスト名は、[コンピューター名、ドメインおよびワークグループの設定] セクションの下に [コンピューター名] として表示されます。 | [ホスト名] と [DNS ドメイン名] が表示されます。Reveal には**ホスト名**のみを含めるようにしてください。| [ホスト名] は、上部の [コンピューター名] の下に表示されます。 |

以下の手順で *IP アドレス*も確認できます。コマンドはサーバーで実行する必要があることに注意してください。

| WINDOWS                              | LINUX                             | MAC                                                           |
| ------------------------------------ | --------------------------------- | ------------------------------------------------------------- |
| 1\. コマンド プロンプトを開きます。           | 1\. ターミナルを開きます。              | 1\. ネットワーク アプリケーションを起動します。                                  |
| 2\. **ipconfig** を入力します。             | 2\. **$ /bin/ifconfig** を入力します。   | 2\. 接続を選択します。                                   |
| **IPv4 Address** は IP アドレスです。 | **Inet addr** は IP アドレスです。 | **IP アドレス** フィールドに必要な情報が含まれます。 |

## データの設定

Slingshot ではすべてのテーブルから *Redshift* データを取得できますが、その他にもテーブルまたはテーブルのセットからデータのサブセットを返す特定の<a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_VIEW.html" target="_blank">ビュー</a>を選択することもできます。

<img src="./images/amazon-redshift-tables.png" alt="Redshift tables dialog" class="responsive-img" width="55%"/>

## 表示形式エディターでの作業

Once your data source has been added, you will be taken to the Visualization Editor. 

<img src="./images/amazon-redshift-visualization-editor.png" alt="Using the data from the Facebook data source in the visualization editor" class="responsive-img" width= "88%"/>

By default, the *Column* visualization will be selected. You can click/tap on it in order to choose another chart type from the drop-down menu. 

When you are ready with the visualization editor, you can save the dashboard in **My Analytics** ⇒ **My Dashboards**, a specific workspace or a project by clicking/tapping on the checkmark in the upper right corner. 

If you want to find more information about the data sources, you can head [here](../../datasources/overview.md). 