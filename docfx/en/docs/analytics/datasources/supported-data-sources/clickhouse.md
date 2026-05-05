---
title: How to configure a ClickHouse data source
_description: Connecting and using ClickHouse as a data source in Slingshot.
---

# ClickHouse

ClickHouse is a high-performance, column-oriented database management system designed for real-time analytical queries on large datasets. Use it as a data source in Slingshot to build fast, insight-driven dashboards.

> [!NOTE]
> **Limitations in Web**. In the *Analytics Web* app, you can connect only to publicly accessible ClickHouse addresses. If your ClickHouse address is restricted for the general public (private or hosted in your company's intranet, for example), you can use *Analytics Desktop*, *iOS*, or *Android* to connect to it. The device where you're running Analytics needs to have access to this ClickHouse address. This limitation does not apply to *Analytics Embedded*.

## Connecting to ClickHouse

To configure a ClickHouse data source, you will need to enter the following information:

1. [**Server**](#how-to-find-your-server-information): the computer name or IP address assigned to the computer on which the ClickHouse server is running.

2. **Port**: if applicable, the server port details. If no information is entered, Analytics will connect to the port in the hint text (8123) by default.

3. **Credentials**: after selecting *Credentials*, you will be able to enter the credentials for your ClickHouse server or select existing ones if applicable.

   - **Username**: the user account for the ClickHouse server.

   - **Password**: the password to access the ClickHouse server.

   - **Alias**: the name for your data source account. It will be displayed in the list of accounts in the previous dialog.

   Once ready, select **Add** and then **Add Server**.

<a name='how-to-find-your-server-information'></a>
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

After connecting to the server, you will see a list of available ClickHouse databases. Select the database you want to use, then choose a table to load your data.

> [!TIP]
> Use ClickHouse views to return a filtered or aggregated subset of data instead of loading an entire table.

### Working with Views

With Analytics, you can retrieve ClickHouse data from entire tables or select a particular view that returns a subset of data from one or more tables.

In the data source dialog, views appear alongside tables. Select the view you need to load only the data relevant to your analysis.

### Working with Functions

ClickHouse table functions let you query data from external sources or use parameterized access patterns. After selecting a function, set any required parameters before proceeding.

> [!NOTE]
> Functions that return no result sets will appear in the Data Sources list but will fail to load.

## Working in the Visualization Editor

Once you have selected your table or view, you will be taken to the *Visualization Editor*. Here you can build your dashboard. By default, the *Column* visualization will be selected. Select it to choose a different chart type.

When you are ready with the visualization editor, you can save the dashboard in **My Analytics** ⇒ **My Dashboards** or in a specific workspace.

## Limitations

- Output parameters in ClickHouse functions are ignored.
- Functions that return no result sets will be listed in the Data Sources list but will fail.

## Related Articles

- [Data Sources Overview](~/docs/analytics/datasources/overview.md)
- [Managing Your Data Source Credentials](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [Combining Data Sources in One Visualization](~/docs/analytics/datasources/data-blending.md)
