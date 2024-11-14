---
title: How to Use Dashboard Filters Properties 
_description: Learn how to quickly apply and use Dashboard filters properties to achieve maximum effect for your visualization.
---

# Dashboard Filters and Their Properties

## Accessing Dashboard Filter Properties

In order to add a new dashboard filter:

1. Go to the *Dashboard Editor* and select **Add Filter**.

2. Click/tap on **Add Dashboard Filter**.

<img src="images/dashboard-filter-option.png" alt="Dashboard Filter option" class="responsive-img"/>

2. Choose a data source. 

3. The *Dashboard Filter* menu will open. Here you can switch to another data source and select dataset to use as a dashboard.

  <img src="images/dashboard-filter-configuration.png" alt="Dashboard Filter confugaration" class="responsive-img"/>

3. Once you have selected a field, click/tap on **Create Filter**.

<img src="images/dashboard-filter-create-button.png" alt="Dashboard Filter create button" class="responsive-img"/>

## Filter Settings Overview

You will be able to change the following settings for the filter:

<img src="images/dashboard-filter-dialog.png" alt="Dashboard Filter settings menu" class="responsive-img" width="58%">

- Title. The title for the dashboard filter, which will be displayed right under the dashboard title. By default, this is the name of the field that will be used as a filter.</th>

- <a href="#displayed-field">Displayed Field/Element</a>. The field in your dataset, which will be used as a dashboard filter.

- Selection. This setting allows you to configure: <a href="#multiple-selection">Multiple Selection</a> (more than one value can be selected at a time) and/or <a href="#required-selection">Required Selection</a> (at least one value must always be selected).

- <a href="#data-filters">Data Filters</a>. This setting allows you to apply any <a href="~/docs/analytics/data-visualizations/fields/field-filters-rules.md">field filters and rules</a> to the data source used for the dashboard filter.

- <a href="connecting-dashboard-filters-visualization.md">Connected Visualizations</a>. Whether your dashboard will be connected to any visualization or not.

<a name='displayed-field'></a>
## Displayed Field

>[!NOTE] For dashboard filters using data from *Microsoft Analysis Services* and *Google Analytics*, this setting is named **Displayed Element**.

The *Displayed Field/Element* setting specifies the dataset field that will be used to display
the values in the *Dashboard Filters*. Listed values will not be repeated
even if they appear multiple times in the original dataset.

You can change the displayed column in *Edit mode* by selecting the **Edit** button in the overflow menu next to the dashboard filter name.

<img src="images/edit-mode-filter.png" alt="Edit dashboard filter" class="responsive-img"/>

<a name='multiple-selection'></a>
## Multiple Selection

Analytics supports the selection of multiple dashboard filter values
simultaneously. This is meant to enable side by side comparison between different elements in a collection. For instance, in the *HR Dashboard* dashboard you can compare the hires and absences over time of different
offices by enabling multiple selection.

<img src="images/multiple-selection-dashboard-filters.png" alt="Filters multiple selections applied to a dashboard" class="responsive-img"/>

In order to enable *Multiple Selection*, you need to:

1. Switch the dashboard to *Edit* mode.

2. Choose **Edit** from the overflow menu of a
dashboard filter.

3. Click/tap on **Selection**.

4. Tick **Multiple Selection** checkbox.

<img src="images/multiple-selection-option-dashboard-filter-dialog.png" alt="Multiple selections for dashboard filters" class="responsive-img"/>

<a name='required-selection'></a>
## Required Selection

Dashboard filters can be configured to require a selected option or not.
By default, selections are not required. Making selections optional
allows the user to uncheck all dashboard filter values, which removes
the filter from the performed query. The query retrieves all data from
the data source, and *No Selection* is displayed in the dashboard
filters row.

In order to enable *Required Selection*, you need to:

1. Switch the dashboard to *Edit* mode.

2. Choose **Edit** from the overflow menu of a
dashboard filter.

3. Click/tap on **Selection**.

4. Tick **Required Selection** checkbox.

<img src="images/required-selection-option-filters.png" alt="Required selection fo dashboard filters" class="responsive-img"/>

<a name='data-filters'></a>
## Data Filters

You can also apply filters to the fields in the dataset displayed in the
Dashboard Filter. This allows you to filter out null or empty values on
a specific field ([empty values filter](~/docs/analytics/data-visualizations/fields/field-filters-rules.html#empty-values)). You can also select [specific values](~/docs/analytics/data-visualizations/fields/field-filters-rules.html#select-values), or add
[rules](~/docs/analytics/data-visualizations/fields/field-filters-rules.html#rules) to your field in order to change the
options depending on the field type. For more information, visit the
[field filters and rules](../data-visualizations/fields/field-filters-rules.md) section.

For example, if you use the *Fullname* field to filter the data in
your *HR Dashboard*, the *Dashboard filter* will show a list of all
employees in all offices of the company:

<img src="images/data-filters-dashboard-filters-hr-dashboard.png" alt="Fullname dashboard filter applied to HR Dashboard" class="responsive-img"/>

If you want your filter list to contain only employees working in a particular office, e.g.
*London, UK*, apply a data filter as shown below.

### Applying a data filter to your dashboard filter

To apply field filters and rules to the data source used as a dashboard
filter and have the dashboard filter show only the employees in the
*London, UK* office (as in the example above), follow these steps:

1.  Go to **Data Filters** in Dashboard Filter settings.

2.  Select **Fullname** for the *Displayed Field* property.

3.  Click/tap on **Select a Field** and choose *Office* from the list.

  <img src="images/dashboard-filters-select-data-filter-field.png" alt="Select a field for a data filter in the dashboard filter settings menu" class="responsive-img"/>

4.  In the following dialog, select the filter type you want to apply
    (choose **Select Values** for the purposes of this example):

  <img src="images/filter-types.png" alt="Dashboard Filters Filter type option" class="responsive-img"/>

5.  Choose *London, UK* from the list and click/tap on the **Create Filter** button.

<img src="images/filter-data-example.png" alt="Filter data example" class="responsive-img"/>

## Dashboard Filters Using Microsoft Analysis Data

There are some specifics when configuring an MS Analysis dashboard filter.

<img src="images/microsoft-analysis-services-dashboard-filter.png" alt="Dashboard Filter dialog when configuring an SSRS filter" class="responsive-img"/>

 1. **Displayed Element** - you can select a *Dimension*, *Hierarchy* or *Level* data field to display dashboard filter values, but not a *Measure* data field. 

 2. (*Optional*) **Show only when Measure has data** - select a *Measure* to limit the dashboard filter list to values that contain data for a certain Measure.

Look at the screenshot above. In this example, the *Product* Dimension is selected as a *Displayed element*, so the dashboard filter will show a list of products (e.g. bikes, clothes, etc.). 
By additionally selecting the *Internet orders* Measure for *Show only when Measure has data* field, you will exclude dashboard filter values, which do not contain information about the *Internet orders* Measure. So, if there are no internet orders of the product bike, *bike* will not show up as a possible selection in the *Dashboard Filters* list.

## Next Steps 

Now that you have already created your dashboard filter, you will need
to **connect it to the visualizations** you want to apply filtering to.
To learn more about this, please read [Connecting Dashboard Filters to a Visualization](connecting-dashboard-filters-visualization.md).

