---
title: How to configure a MariaDB data source
_description: Connect to MariaDB and use it as a data source for your visualizations in Slingshot.
---

# MariaDB

>[!NOTE] **Limitations in Web**. In the *Analytics Web* app, you can connect only to publicly accessible MariaDB addresses. If your MariaDB address is restricted for the general public (private or hosted in the company's intranet, for example), you can use *Analytics Desktop*, *iOS* or *Android* to connect to it. The device where you're running Analytics needs to have access to this MariaDB address. This limitation does not apply to *Analytics Embedded*.

## Connecting to MariaDB

To configure a MariaDB data source, you will need to enter the following information:

1.  **Server**: the computer name or IP address assigned to the computer on which the server is running.

2.  **Port**: if applicable, the server port details. If no information is entered, Analytics will connect to the port in the hint text (3306) by default.

3.  **Credentials**: after selecting *Credentials*, you will be able to enter the credentials for your MariaDB server or choose existing ones if applicable.

      - **Username**: the user account for the MariaDB server.

      - **Password**: the password to access the MariaDB server.

      - **Alias**: the name for your data source account. It will be displayed in the list of accounts in the previous dialog.

    Once ready, select **Add** and then **Add Data Source**.

## How to Find Your Server Information

You can find your server by following the steps below. Please note that the commands should be executed on the server.

| WINDOWS                                                                                                         | LINUX                                                                                                         | MAC                                                                  |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1\. Open the File Explorer.                                                                                     | 1\. Open a Terminal.                                                                                          | 1\. Open System Preferences.                                         |
| 2\. Right Click on My Computer \> Properties.                                                                   | 2\. Type in **$hostname**                                                                                     | 2\. Navigate to the Sharing Section.                                 |
| Your Hostname will appear as "Computer Name" under the *Computer name, domain, and workgroups settings* section. | Your Hostname will appear along with your DNS domain name. Make sure you only include **Hostname** in Analytics. | Your Hostname will be listed under the "Computer Name" field on top. |

You can find your *IP address* by following the steps below. Please note that the commands should be executed on the server.

| WINDOWS                              | LINUX                             | MAC                                                           |
| ------------------------------------ | --------------------------------- | ------------------------------------------------------------- |
| 1\. Open a Command Prompt.           | 1\. Open a Terminal.              | 1\. Launch your Network app.                                  |
| 2\. Type in **ipconfig**             | 2\. Type in **$ /bin/ifconfig**   | 2\. Select your connection.                                   |
| **IPv4 Address** is your IP address. | **Inet addr** is your IP address. | The **IP Address** field will have the necessary information. |

## Setting Up Your Data

With Analytics, you can retrieve MariaDB data from entire tables. You can also select a particular view that returns a subset of data from a table or a set of tables instead.

For more information on views and MariaDB, visit <a href="https://mariadb.com/kb/en/views/" target="_blank">this documentation page</a>.

## Working in the Visualization Editor

Once you have chosen your table or view, you will be taken to the *Visualization Editor*. Here you can build your dashboard. By default, the *Column* visualization will be selected. You can select it in order to choose another chart type.

When you are ready with the visualization editor, you can save the dashboard in **My Analytics** ⇒ **My Dashboards** or in a specific workspace.

## Related Articles

  - [Data Sources Overview](~/docs/analytics/datasources/overview.md)
  - [Managing Your Data Source Credentials](~/docs/analytics/datasources/managing-data-source-credentials.md)
  - [Combining Data Sources in One Visualization](~/docs/analytics/datasources/data-blending.md)
