---
title: How to configure a Cube data source
_description: Connecting and using Cube as a data source in Slingshot.
---

# Cube

>[!NOTE]
>**Limitations in Web**. In the *Analytics Web* app, you can connect only to publicly accessible Cube addresses. If your Cube deployment is restricted for the general public (private or hosted in the company's intranet, for example), you can use *Analytics Desktop*, *iOS* or *Android* to connect to it. The device where you're running Analytics needs to have access to this Cube address. This limitation does not apply to *Analytics Embedded*.

Cube is a headless business intelligence platform that exposes your data models through a Postgres-compatible **SQL API**. Connect to Cube as a data source in Slingshot to build dashboards on top of the metrics and dimensions defined in your Cube data model.

## Connecting to Cube

To configure a Cube data source, you will need to enter the
following information:

<img src="./images/add-cube-server-dialog.png" alt="Configure Cube data source dialog" class="responsive-img" width="53%"/>

1.  **Server**: the host name of your Cube deployment's SQL API endpoint (for
    Cube Cloud, this is the SQL API host shown in your deployment's connection
    settings).

2.  **Port**: if applicable, the server port details. If no information
    is entered, Analytics will connect to the default Cube SQL API port
    (**15432**).

3.  **Credentials**: after selecting *Credentials*, you will be able to
    enter the credentials for your Cube SQL API or select existing
    ones if applicable.

      - **Username**: the SQL API user name configured for your Cube deployment.

      - **Password**: the SQL API password configured for your Cube deployment.

      - **Alias**: the name for your data source account.

 Once ready, select **Add Server**.

For more information about enabling and configuring the SQL API, you can check the <a href="https://cube.dev/docs/product/apis-integrations/sql-api" target="_blank" rel="noopener">Cube SQL API documentation</a>.

## Setting Up Your Data

After connecting to Cube, you will see the data exposed by your Cube deployment. Through the SQL API, the **cubes** and **views** defined in your data model appear as tables that you can query.

<img src="./images/cube-data-source-dialog.png" alt="Selecting a Cube view to load into Analytics" class="responsive-img" width="55%"/>

### Working with Cubes and Views

With Analytics, you can retrieve data from a whole cube or select a particular
<a href="https://cube.dev/docs/product/data-modeling/reference/view" target="_blank" rel="noopener">view</a> that
exposes a curated subset of measures and dimensions from one or more cubes.

In the data source dialog, views appear alongside cubes. Select the cube or view you need to load only the data relevant to your analysis.

## Working in the Visualization Editor

Once your data source has been added, you will be taken to the *Visualization Editor*. Here you can build your dashboard. Note that based on the visualization that you have chosen, you will see different types of fields.

<img src="./images/visualization-editor-cube.png" alt="Working in the Visualization Editor while using Cube as a data source." class="responsive-img" width="90%"/>

When you are ready with your visualization, you can click/tap on the checkmark in the top right corner to save it as a dashboard in **My Analytics** ⇒ **My Dashboards** or in a specific workspace.

## Related Articles

- [Data Sources Overview](~/docs/analytics/datasources/overview.md)
- [Managing Your Data Source Credentials](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [Combining Data Sources in One Visualization](~/docs/analytics/datasources/data-blending.md)
