---
title: Data Visualizations in Slingshot – All You Need to Know  
_description: An overview of how data visualizations work in Slingshot Analytics and how to customize them.
---

# Data Visualizations

Analytics helps you get the most insight possible out of business data by providing a variety of visualizations.

## What is a Visualization?

For users to get the most insight possible out of business data, Analytics provides several options to customize the way information is visualized. These are called "visualizations". Any dashboard is composed of one or more visualizations.

The dashboard shown below contains a wide variety of visualizations, all of which analyze different aspects of Manufacturing.

<img src="images/example-data-visualizations.png" alt="Analytics's log in screen" class="responsive-img"/>

## Choosing the Right Chart Type

In choosing the best chart type you need to look at your data and answer the questions that will help you find out what story you are trying to tell with your visualization.

Are you trying to compare data, show data distribution or present it as a part to a whole breakdown? Are you doing a trend analysis of your financial, marketing or sales data, need a date/time axis? Are you looking at relationships between data? Or you just want to show KPIs and gauges, which are really easy to read and tell a quick story? Is it important to plot your data on a map?

Answer what you want to show with your data and use the table below to choose the most suitable chart.

<style type="text/css">
td {
  border: 1px solid black;
  font-size: 60%;
}
</style>
<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
</colgroup>
<body>
  <tr>
    <td><b>Compare Data</b></td>
    <td>
      <img src="images/Bar-Chart.png" alt="Bar Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Bar</a>
    </td>
    <td>
      <img src="images/Column-Chart.png" alt="Column Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Column</a>
    </td>
    <td>
      <img src="images/Area-Chart.png" alt="Area Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Area</a>
    </td>
    <td>
      <img src="images/Spline-Chart.png" alt="Spline Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Spline</a>
    </td>
    <td>
      <img src="images/Combo-chart.png" alt="Combo Chart icon" /><br/>
      <a href="visualization-types/combo-charts.md">Combo</a>
    </td>
    <td>
      <img src="images/Circular-chart.png" alt="Circular Gauge icon" /><br/>
      <a href="visualization-types/gauge-charts.html#circular-gauge">Circular Gauge</a>
    </td>
    <td>
      <img src="images/Spline-Area-chart.png" alt="Spline with Area Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Spline Area</a>
    </td>
    <td>
      <img src="images/OHLC-chart.png" alt="OHLC Chart icon" /><br/>
      <a href="visualization-types/financial-charts.md">OHLC</a>
    </td>
    <td>
      <img src="images/Candlestick-chart.png" alt="Candlestick Chart icon" /><br/>
      <a href="visualization-types/financial-charts.md">Candlestick</a>
    </td>
    <td>
      <img src="images/time-series-chart.png" alt="Time Series Chart icon" /><br/>
      <a href="visualization-types/time-series-charts.md">Time Series</a>
    </td>
  </tr>
  <tr>
    <td><b>Part to Whole</b></td>
    <td>
      <img src="images/Stacked-Column-Chart.png" alt="Stacked Column Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Stacked Column</a>
    </td>
    <td>
      <img src="images/Stacked-Bar-Chart.png" alt="Stacked Bar Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Stacked Bar</a>
    </td>
    <td>
      <img src="images/Stacked-Area-Chart.png" alt="Stacked Area Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Stacked Area</a>
    </td>
    <td>
      <img src="images/Pie-Chart.png" alt="Pie Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Pie</a>
    </td>
    <td>
      <img src="images/Doughnut-Chart.png" alt="Dougnut Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Dougnut</a>
    </td>
    <td>
      <img src ="images/funnel-chart.png" alt="Funnel Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Funnel</a>
    </td>
    <td>
      <img src ="images/treemap-chart.png" alt="Treemap Chart icon" /><br/>
      <a href="visualization-types/treemap-charts.md">Treemap</a>
    </td>
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td><b>Data Distribution</b></td>
    <td>
      <img src="images/step-area-Chart.png" alt="Step Area Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Step Area</a>
    </td>
    <td>
      <img src="images/Stacked-Column-Chart.png" alt="Stacked Column Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Stacked Column</a>
    </td>
    <td>
      <img src="images/scatter-Chart.png" alt="Scatter Chart icon" /><br/>
      <a href="visualization-types/scatter-bubble-charts.md">Scatter</a>
    </td>
    <td>
      <img src="images/bubble-Chart.png" alt="Bubble Chart icon" /><br/>
      <a href="visualization-types/scatter-bubble-charts.md">Bubble</a>
    </td>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  <tr>
    <td><b>Data Trend Analysis<b/></td>
    <td>
      <img src="images/line-chart.png" alt="Line Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Line</a>
    </td>
    <td>
      <img src="images/spline-Chart.png" alt="Spline Chart icon" /><br/>
      <a href="visualization-types/category-charts.md">Spline</a>
    </td>
    <td>
      <img src="images/Combo-Chart.png" alt="Combo Chart icon" /><br/>
      <a href="visualization-types/combo-charts.md">Combo</a>
    </td>
    <td>
      <img src="images/ohlc-Chart.png" alt="OHLC Chart icon" /><br/>
      <a href="visualization-types/financial-charts.md">OHLC</a>
    </td>
    <td>
      <img src="images/candlestick-Chart.png" alt="Candlestick Chart icon" /><br/>
      <a href="visualization-types/financial-charts.md">Candlestick</a>
    </td>
    <td>
      <img src="images/radial-Chart.png" alt="Radial Chart icon" /><br/>
      <a href="visualization-types/radial-charts.md">Radial</a>
    </td>
    <td>
      <img src="images/time-series-chart.png" alt="Time Series Chart icon" /><br/>
      <a href="visualization-types/time-series-charts.md">Time Series</a>
    </td>
    <td />
    <td />
    <td />
  </tr>
  <tr>
  <td><b>Data Relationships</b></td>
  <td>
    <img src="images/scatter-chart.png" alt="Scatter Chart icon" /><br/>
    <a href="visualization-types/scatter-bubble-charts.md">Scatter</a>
  </td>
  <td>
    <img src="images/Bubble-chart.png" alt="Bubble Chart icon" /><br/>
    <a href="visualization-types/scatter-bubble-charts.md">Bubble</a>
  </td>
  <td>
    <img src="images/line-chart.png" alt="Line Chart icon" /><br/>
    <a href="visualization-types/category-charts.md">Line</a>
  </td>
  <td />
  <td />
  <td />
  <td />
  <td />
  <td />
  <td />
  </tr>
  <tr>
  <td><b>KPIs and Gauges</b></td>
  <td>
    <img src="images/bullet-graph-gauge.png" alt="Bullet Graph Gauge icon" /><br/>
    <a href="visualization-types/gauge-charts.html#bullet-graph">Bullet Graph</a>
  </td>
  <td>
    <img src="images/linear-gauge.png" alt="Linear Gauge icon" /><br/>
    <a href="visualization-types/gauge-charts.html#linear-gauge">Linear</a>
  </td>
  <td>
    <img src="images/text-gauge.png" alt="Text Chart icon" /><br/>
    <a href="visualization-types/gauge-charts.html#text-gauge">Text</a>
  </td>
  <td>
    <img src="images/kpi.png" alt="KPI Gauge icon" /><br/>
    <a href="visualization-types/kpi-gauge.md">KPI</a>
  </td>
  <td>
    <img src="images/circular-gauge.png" alt="Circular Gauge icon" /><br/>
    <a href="visualization-types/gauge-charts.html#circular-gauge">Circular</a>
  </td>
  <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
  <td><b>Geospatial Data</b></td>
  <td>
    <img src="images/choropleth-map.png" alt="Choropleth Map icon" /><br/>
    <a href="visualization-types/choropleth-map/choropleth-map.md">Choropleth Map</a>
  </td>
  <td>
    <img src="images/scatter-map.png" alt="Scatter Map icon" /><br/>
    <a href="visualization-types/scatter-map/scatter-map.md">Scatter Map</a>
  </td>
  <td />
  <td />
  <td />
  <td />
  <td />
  <td />
  <td />
  <td />
</body>
</table>

If you need more information about how to use each of these visualizations, use the hyperlinks in the table.

## Topics Overview

In the _Visualization Types_ dropdown (see the table of contents on the left) you will find an A-Z list of all kinds of charts Analytics provides.

In [Working with the Visualizations Editor](visualizations-editor.md) you will be introduced to the Visualizations Editor's main parts and will also learn how to start creating your first visualization.

In the [_Fields_](fields/overview.md) topics you will find more information on how to aggregate, filter and highlight the most valuable aspects of the data fields you are using to build your visualization.

In [Reusing Visualization](reusing-visualizations.md) you will find useful ideas on how to speed up the dashboards creation process.

In [Statistical Functions](statistical-functions.md) you will find how advanced predictive analysis works in Analytics. See how to use the *Time series forecast*, *Linear regression*, and *Outliers Detection* function to receive more insight from your data.  


## Visualization Tutorials

Within this section, you will find basic, step-by-step tutorials for the
Analytics visualizations. All sections use the Data Visualizations data
source, which you can download using [this link](https://download.infragistics.com/slingshot/samples/Slingshot_Visualization_Tutorials.xlsx).
For specific information on what each visualization supports, visit the **Data Visualizations** section of the documentation.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><img src="images/Area-Chart.png" alt="Area Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Area</a><br />
</p></td>
<td><p><img src="images/Bar-Chart.png" alt="Bar Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Bar</a><br />
</p></td>
<td><p><img src="images/Bullet-Graph-Gauge.png" alt="Bullet Graph Gauge icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/gauge-charts.md">Bullet Graph</a><br />
</p></td>
<td><p><img src="images/Candlestick-Chart.png" alt="Candlestick Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/candlestick-chart.md">Candlestick</a><br />
</p></td>
<td><p><img src="images/Circular-Gauge.png" alt="Circular Gauge icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/gauge-charts.md">Circular</a><br />
</p></td>
</tr>
<tr class="even">
<td><p><img src="images/Column-Chart.png" alt="Column Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Column</a><br />
</p></td>
<td><p><img src="images/Doughnut-Chart.png" alt="Doughnut Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Doughnut</a><br />
</p></td>
<td><p><img src="images/Funnel-Chart.png" alt="Funnel Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Funnel</a><br />
</p></td>
<td><p><img src="images/image-view.png" alt="Image Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/image-chart.md">Image</a><br />
</p></td>
<td><p><img src="images/kpi.png" alt="kpi icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/kpi-gauge.md">KPI</a><br />
</p></td>
</tr>
<tr class="odd">
<td><p><img src="images/Line-Chart.png" alt="Line Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Line</a><br />
</p></td>
<td><p><img src="images/Linear-Gauge.png" alt="Linear Gauge icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/gauge-charts.md">Linear</a><br />
</p></td>
<td><p><img src="images/OHLC-Chart.png" alt="OHLC Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/ohlc-chart.md">OHLC</a><br />
</p></td>
<td><p><img src="images/Pie-Chart.png" alt="Pie Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Pie</a><br />
</p></td>
<td><p><img src="images/radial-Chart.png" alt="Radial Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Radial</a><br />
</p></td>
</tr>
<tr class="even">
<td><p><img src="images/Sparkline-Chart.png" alt="Sparkline Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/sparkline-charts.md">Sparkline</a><br />
</p></td>
<td><p><img src="images/Spline-Chart.png" alt="Spline Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Spline</a><br />
</p></td>
<td><p><img src="images/Spline-Area.png" alt="Spline Area icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Spline with Area</a><br />
</p></td>
<td><p><img src="images/Stacked-Area-Chart.png" alt="Stacked Area Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/stacked-charts.md">Stacked Area</a><br />
</p></td>
<td><p><img src="images/Stacked-Bar-Chart.png" alt="Stacked Bar Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/stacked-charts.md">Stacked Bar</a><br />
</p></td>
</tr>
<tr class="odd">
<td><p><img src="images/Stacked-Column-Chart.png" alt="Stacked Column Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/stacked-charts.md">Stacked Column</a><br />
</p></td>
<td><p><img src="images/Step-Area-Chart.png" alt="Step Area Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Step Area</a><br />
</p></td>
<td><p><img src="images/Step-Line-Chart.png" alt="Step Line Chart icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/simple-charts.md">Step Line</a><br />
</p></td>
<td><p><img src="images/Text-Gauge.png" alt="Text Gauge icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/gauge-charts.md">Text</a><br />
</p></td>
<td><p><img src="images/Text-View.png" alt="Text View icon" /><br />
</p>
<p><a href="~/docs/analytics/visualization-tutorials/text-view.md">Text View</a><br />
</p></td>
</tr>
</tbody>
</table>
