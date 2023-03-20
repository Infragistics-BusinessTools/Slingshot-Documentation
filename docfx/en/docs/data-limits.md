# Data Limits

There are size limits server-side when using Slingshot Web regarding the size of files downloaded, the number of cells in a result set (after aggregation) and the size of pivot tables and grids (given as a number of cells). The objective of these limits is to prevent the server to run out of resources (memory and disk space).

## Default limit Values:

- 200mb when downloading csv/json/excel
- 10 million cells
- 64 million characters (adding all the strings in all cells).