---
title: How to use Calculated Fields
_description: Learn how to use Calculated fields and all their types to create a more precise data visualization.
---

# Calculated Fields

Analytics allows you to define new fields in the data set, named calculated
fields. These fields are created by using expressions (formulas). An
expression can be a combination of existing field(s), constant values
and:

  - [Predefined functions](#using-the-predefined-analytics-functions)

  - [Simple math calculations and other functions that are not predefined](#creating-calculated-fields-without-using-the-predefined-functions)

There are two types of calculated fields:

  - [Pre-calculated](#pre-calculated-fields) (also called "calculated")

  - [Post-calculated](#post-calculated-fields)

<a name='precalculated-fields'></a>
## Pre-Calculated Fields

Pre-calculated fields are evaluated before executing data editor
aggregations. This means in order to apply a certain formula, Analytics will go through every record in your field's dataset once or several times. Because of this, pre-calculation is likely to be underperforming in terms of speed when working with large datasets.

To add a new pre-calculated field, you need to:

1. Click/tap on the **+ button** in the
*Fields* panel.

2. Choose **Calculated Field**.

<img src="images/calculated-field-option.png" alt="Pre-calculated field option in data editor for a dashboard" class="responsive-img"/>

3. The *New Calculated Field* screen will open up.

<img src="images/new-calculated-field-dialog.png" alt="New calculated field dialog" class="responsive-img"/>

4. Here you will need to:

   4.1.  Assign a name to your new pre-calculated field.

   4.2.  Enter a *Formula* (expression). In the *Fields* section you will
    find a list of all the existing fields to choose from. You can use
    one or more fields to create the formula by clicking on the selected
    field or typing its name in square brackets. Choose one of the
    predefined functions listed in the *Functions* section or use a
    simple math calculation (as shown above).

5. The new pre-calculated field will show up in your *Fields*
list. From here on, you can use it for your visualization.

<img src="images/new-calculated-field-visualization-example.png" alt="New calculated field shown in the column placeholder and in the visualization" class="responsive-img"/>

In the example above, the new calculated field is used with a grid
visualization where no aggregation is being applied on the data fields.
Pre-calculated fields can also be used with *Pivot Grids*. In this case,
aggregation (e.g. summarization) will be applied to the already
calculated records in the pre-calculated field.

<a name='postcalculated-fields'></a>
## Post-Calculated Fields

Post-calculated fields can be created when working with *Pivot tables*
and other visualizations, which execute an aggregation on the data
fields in the *Data Editor*. Post-calculated fields are always built by
applying a formula on already summarized values.

To create a post calculated field you will need to:

1.  Create a visualization (or a *Pivot table*) by adding fields from
    your data source in the *Data editor*.

  <img src="images/data-editor-example.png" alt="Example of Data Editor" class="responsive-img"/>

2.  Click/tap on the *F(x)* button next to *Values* to open the *New
    Calculated Field* screen:

  <img src="images/post-calculated-field-new-calculated-field-dialog.png" alt="Post calculated field new calculated field screen" class="responsive-img"/>

3.  Give a name to your new calculated field and apply a formula to the
    summarized value(s). Pay attention that the list of *Values*
    includes the data fields you used in your visualization after they
    have been aggregated (*Sum of Spend*, *Sum of Budget*, not: *Spend*,
    *Budget*).

If you need to use other fields from your data source, that are not
included in the *Data Editor*, you can add them by clicking/tapping on
the *+* button next to *Values*. Since post-calculated fields are
created only by using aggregated values, you will first need to select
an aggregation from the drop-down list to be executed on the data field.

<img src="images/new-calculated-field-dialog-new-fields-option.png" alt="Adding fields in the calculated field screen" class="responsive-img"/>

You can also skip *step 1*, create your post-calculated fields first or
use only post-calculated fields in your visualization.

Post-calculation tends to perform better than pre-calculation when
working with large datasets.

<a name='predefined-functions'></a>
## Using the Predefined Analytics Functions

For both pre-calculated and post-calculated fields, you can use one of
the available functions within Analytics:

  - [**Aggregation**](aggregation.md):
    [average](aggregation.html#average),
    [averageif](aggregation.html#averageif),
    [count](aggregation.html#count),
    [countif](aggregation.html#countif),
    [max](aggregation.html#max),
    [maxif](aggregation.html#maxif),
    [min](aggregation.html#min),
    [minif](aggregation.html#minif).

  - [**Date**](date.md):
    [date](date.html#date-date),
    [datevalue](date.html#datevalue),
    [day](date.html#day),
    [formatdate](date.html#formatdate),
    [fquarter](date.html#fquarter),
    [semester](date.html#semester),
    [fsemester](date.html#fsemester),
    [fyear](date.html#fyear),
    [hour](date.html#hour),
    [millisecond](date.html#millisecond),
    [minute](date.html#minute),
    [month](date.html#month),
    [monthname](date.html#monthname),
    [monthshortname](date.html#monthshortname),
    [applytimezone](date.html#applytimezone),
    [currenttimezone](date.html#currenttimezone),
    [datetimefromunixts](date.html#datetimefromunixts),
    [now](date.html#now),
    [quarter](date.html#quarter),
    [second](date.html#second),
    [time](date.html#date-time),
    [today](date.html#today),
    [weekday](date.html#weekday),
    [weeknum](date.html#weeknum),
    [year](date.html#year).

  - [**Information**](information.md):
    [empty](information.html#empty),
    [isempty](information.html#isempty).

  - [**Logic**](logic.md):
    [and](logic.html#and),
    [false](logic.html#false),
    [if](logic.html#if),
    [not](logic.html#not),
    [or](logic.html#or),
    [true](logic.html#true).

  - [**Lookup & Reference**](lookup-reference.md):
    [previous](lookup-reference.html#previous),
    [row](lookup-reference.html#row).

  - [**Math**](math.md):
    [abs](math.html#abs),
    [exp](math.html#exp),
    [log](math.html#log),
    [log10](math.html#log10),
    [mod](math.html#mod),
    [rand](math.html#rand),
    [randbetween](math.html#randbetween),
    [sign](math.html#sign),
    [sqrt](math.html#sqrt),
    [trunc](math.html#trunc).

  - [**String**](string.md):
    [concatenate](string.html#concatenate),
    [find](string.html#find),
    [len](string.html#len),
    [lower](string.html#lower),
    [mid](string.html#mid),
    [replace](string.html#replace),
    [sortinterval](string.html#sortinterval),
    [trim](string.html#trim),
    [upper](string.html#upper).

>[!NOTE] **Limitations to IF Conditions**.
>IF conditions have known limitations when included in aggregation functions in pre-calculated fields. The need to go through every record that many times, trying to check an IF condition within an aggregation formula causes underperformance issues, hence it's not supported.

<a name='without-predefined-functions'></a>
## Creating Calculated Fields without using the predefined functions

You can also create Calculated Fields without using any of the
predefined functions; for instance, for simple math calculations like
subtractions, divisions, additions or multiplications. In [this table](samples.md), you will find some examples that do
not use the predefined functions.

## What to consider when using the Analytics functions

  - **Text strings should be included between quotation marks**.
    Examples include locale ("en") and date formats ("dd/mm/yyyy").

  - **Fields included in your formula should be included between square brackets**. Examples include [Wage], [BirthDate] and [EmployeeID] for the HR Dataset.
