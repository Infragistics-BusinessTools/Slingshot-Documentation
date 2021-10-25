# MySQL

>[!NOTE] **Limitations in Web**. In the *Slingshot Web* app, you can connect only to publicly accessible MySQL addresses. If the MySQL address is restricted for the general public (private or hosted in the company's intranet, for example), you can use *Slingshot Desktop*, *iOS* or *Android* to connect to it. The device where you're running the application needs to have access to this MySQL address. 


## Adding a New  MySQL Data Source

If you have already added a MySQL server to the <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> *Data Sources* list, you can skip this part and continue with [Setting Up Your Data](#setting-up-your-data).

To add a MySQL server to your list, follow the steps described below.

1. Go to the <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> Data Sources tab > select the *+ Data Source* blue button > scroll down to *Databases* > select <img src="images/mysql-icon.png" alt="MySQL data source icon used in Analytics" width="24px" height="24px" /> *MySQL*. 

2. A new dialog will open (see the screenshot) where you will need to add the following data to connect to MySQL:

    <img src="images/configure-mysql-server-dialog.png" alt="Configure MySQL dialog" class="responsive-img" width="75%"/>

    a. [**Server**](how-to-find-server.md): the computer name or IP address
    assigned to the computer on which the server is running.

    b. **Port**: if applicable, the server port details. If no information is entered, Slingshot will connect to the port in the hint text (3306) by default.

    c. **Credentials**:  click/tap the *Choose* dropdown. To add new credentials select the *+Credential* button. A new dialog will open. There you will need to enter your *username*, *password* and (optionally) an *alias*, which will serve as a label for saved credentials when you have more than one reporting service added.

3. Select *Add Server*.

4. Adding a database. After configuring the MySQL Server, you will be prompted to choose a database, that will be added in your  <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> Data Sources list.

    <img src="images/mysql-set-up-database.png" alt="Enter MySQL Server Details dialog" class="responsive-img"/>

If you want to add another MySQL server, you can quickly do this by clicking/tapping the  *+ Server* button on the left (see above).

After choosing a database, click/tap _Select and Continue_.

### Editing the data source information 

In the last dialog that opens, you can change the original database name and add a description. Both will be shown in the Data Sources list to help users choose the source of data they need for their visualization. 

If you are a certifier in your Organization, you can also certify the data source by selecting the <img src="images/not-certified-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> badge certificate dropdown. If you want to know more about the certification in Analytics, read the [Using Data Sources Certification](~/docs/analytics/datasources/certification.md) topic.

If you want to additionally edit what tables, views and data sets other users can see and work with, click/tap the _Switch to advanced info edition_ button. Find more information in the [Editing the information for a data source](data-sources-advanced-editing.md) topic.  

When ready, select _Add Data Source_.

## Setting Up Your Data

Now that you have added a MySQL database, you will see it in the <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> Data Sources list. If you have more than one MySQL database added, select the database you want to use. You will open the *Data Source details* dialog, which allows you to review and set up your data (look at the screenshot below). 

<img src="images/mysql-data-source-details.png" alt="the data sources details dialog" class="responsive-img" width="75%" />

Here you will find the following information about the data source:

* type, name, description; 
* [certification](../certification.md);
* who added, modified and has access to the data source
* how often the data is auto-refreshed. 

With *Analytics*, you can retrieve MySQL data from entire tables. Still, you can also select a particular view that returns a subset of data from a table or a set of tables instead.

Views contain modified versions of the data in the tables on the MySQL server. 

For more information on views and MySQL, visit [this documentation page](https://dev.mysql.com/doc/refman/8.0/en/views.html).
