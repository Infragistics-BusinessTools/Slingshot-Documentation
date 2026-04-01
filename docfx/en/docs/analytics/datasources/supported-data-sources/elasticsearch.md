---
title: How to configure an Elasticsearch data source
_description: Connect to Elasticsearch and use it as a data source for your visualizations in Slingshot.
---

# Elasticsearch

## Connecting to Elasticsearch

To configure an Elasticsearch data source, you will need to enter the following information:

1.  **Hostname**: the URL of your Elasticsearch server or cluster (for example, *https://my-cluster.es.example.com*).

2.  **Port**: if applicable, the server port details. If no information
    is entered, Analytics will connect to the port in the hint text (9200)
    by default.

3.  **Credentials**: after selecting *Credentials*, you will be able to
    enter the credentials for your Elasticsearch server or select existing
    ones if applicable.

      - **Username**: the user account for the Elasticsearch server.

      - **Password**: the password to access the Elasticsearch server.

      - **Alias**: the name for your data source account. It will be
        displayed in the list of accounts in the previous dialog.

    Once ready, select **Add** and then **Add Data Source**.

## Configuring an Elasticsearch Data Source

After connecting to the server, you will see a list of available Elasticsearch indexes. Select the index you want to use for your visualization.

> [!NOTE]
> Elasticsearch indexes are similar to database tables. Each index contains a collection of documents with a similar structure.

## Working in the Visualization Editor

Once you have selected your index, you will be taken to the *Visualization Editor*. Here you can build your dashboard. By default, the *Column* visualization will be selected. You can select it in order to choose another chart type.

When you are ready with the visualization editor, you can save the dashboard in **My Analytics** ⇒ **My Dashboards** or in a specific workspace.

## Related Articles

  - [Data Sources Overview](~/docs/analytics/datasources/overview.md)
  - [Managing Your Data Source Credentials](~/docs/analytics/datasources/managing-data-source-credentials.md)
  - [Combining Data Sources in One Visualization](~/docs/analytics/datasources/data-blending.md)
