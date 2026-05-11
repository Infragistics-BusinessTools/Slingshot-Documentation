---
title: How to configure an Azure Cosmos DB data source
_description: Connecting and using Azure Cosmos DB as a data source in Slingshot.
---

# Azure Cosmos DB

Azure Cosmos DB is a fully managed, globally distributed NoSQL database service
provided by Microsoft Azure. It stores data as JSON documents organized into
*containers* within a *database*, and exposes a SQL-like API (Core SQL / API for
NoSQL) that allows querying documents using familiar SELECT statements.

Slingshot connects to Azure Cosmos DB using the **Core (SQL) API** and
automatically infers a flat schema from your containers so you can build
visualizations without writing any queries.

---

## Connecting to Azure Cosmos DB

To configure an Azure Cosmos DB data source, you will need to enter the following
information:

| Field | Description |
|-------|-------------|
| **Account Endpoint** *(required)* | The URI of your Cosmos DB account, e.g. `https://myaccount.documents.azure.com:443/`. You can find this in the Azure portal under **Keys** → **URI**. |
| **Application Region** | *(Optional)* The preferred Azure region for read and write operations (e.g. `East US`). Leave blank to use your account's default region. |
| **Connection Mode** | How the SDK communicates with the Cosmos DB service. Choose one of: **Gateway** *(default)* — uses HTTPS through the Cosmos DB gateway, compatible with most network environments; or **Direct** — uses direct TCP connections to Cosmos DB replicas for lower latency and higher throughput, but requires that outbound TCP traffic is not restricted by your network. |
| **Accept Any Server Certificate** | Toggle **on** only in development or testing environments that use self-signed TLS certificates. **Do not enable this in production.** |

After filling in the connection details, select the **Credentials** picker to
attach an existing account key credential or create a new one. Azure Cosmos DB
uses a primary or secondary **Account Key** for authentication, which you can
copy from the Azure portal under **Keys** → **Primary Key**.

Once ready, select **Add** and then **Add Server**.

---

## Setting Up Your Data

After connecting, Slingshot displays the containers available in the selected
database. Select a container to open it as a data set and proceed to the
Visualization Editor.

### Working with Containers

Each Azure Cosmos DB **container** maps to a table in Slingshot. When you select
a container, Slingshot infers the
column schema:

- **Scalar fields** (strings, numbers, booleans, dates) are exposed as columns.
- **Nested objects** are flattened using dot notation — for example, a document
  field `address.city` becomes the column `address.city`.
- **Array fields** are excluded from the schema and are not available as columns.
- **Cosmos DB system properties** (`_rid`, `_self`, `_etag`, `_attachments`,
  `_ts`) are excluded automatically.
- Fields whose names contain **special characters** (`.` or `$`) are excluded.
- Fields that are `null` in all sampled documents are inferred as `String` type.
- If a field contains **mixed types** across documents, it is inferred as
  `String`.

Because the schema is inferred from a sample, containers with highly variable
document structures may not expose all possible fields. If a field is missing,
consider adding it to a few documents so it is included in the sample.

---

## Working in the Visualization Editor

Once your container is loaded, you can use the full range of Slingshot
visualizations — charts, grids, gauges, maps, and more — with your Cosmos DB
data.

---

## Limitations

The following behaviors and features are **not supported** or behave differently
when using Azure Cosmos DB as a data source:

- **Array fields** — document properties that are arrays are excluded from the
  schema and cannot be used in visualizations.
- **Variance and Standard Deviation aggregations** — the Cosmos DB SQL API does
  not natively support `VAR` or `STDEV`; these aggregation functions are
  unavailable.
- **Self-signed certificates in production** — the *Accept Any Server
  Certificate* option bypasses TLS validation and should never be used outside
  of local development or test environments.
- **Schema completeness** — the schema is inferred from a sample of up to 100
  documents. Fields that do not appear in the sample will not be available as
  columns.
- **Direct connection mode and network restrictions** — Direct mode requires
  outbound TCP connectivity to Cosmos DB replica ports. If your network restricts
  this traffic, use Gateway mode instead.
- **Core (SQL) API only** — Slingshot connects via the Cosmos DB Core (SQL) API.
  Other Cosmos DB APIs (MongoDB, Cassandra, Gremlin, Table) are not supported
  through this connector.

---

## Related Articles

- [Data Sources Overview](~/docs/analytics/datasources/overview.md)
- [Managing Your Data Source Credentials](~/docs/analytics/datasources/managing-data-source-credentials.md)
- [Combining Data Sources in One Visualization](~/docs/analytics/datasources/data-blending.md)
