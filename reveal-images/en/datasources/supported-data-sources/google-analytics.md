# Google Analytics

Google Analytics is one of the most used web analytics services in the
web, it tracks and reports website traffic. In addition, Google also
provides an SDK to gather usage data from iOS and Android apps.

## Adding a New Google Analytics Data Source

If you have already added your Google Analytics data source to the <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> *Data Sources* list, you can skip this part and continue with [Setting Up Your Data](#setting-up-your-data).

To add a Google Analytics data source to your list, follow the steps described below.

1. Go to the <img src="images/data-source-icon.png" alt="the data sources icon used in Analytics" width="24px" height="24px" /> Data Sources tab > select the *+ Data Source* blue button > scroll down to *Marketing, Sales and CRMs* > select <img src="images/google-analytics-icon.png" alt="the Athena data source icon used in Analytics" width="24px" height="24px" />*Google Analytics*. 

2. A new dialog will open (see the screenshot) where you will need to add the following data to connect to your Google Analytics account: 

    <img src="images/configure-analytics-dialog.png" alt="Configure Amazon Athena dialog" class="responsive-img" width="75%"/>

    a. **Log in** - you will see
        Google's login screen.
    
    b. Enter your login credentials and click/tap _Sign In_. You will then see an **authorization prompt**; click/tap _Allow_.

    c. If you have several Google Analytics accounts, select the one you
    want to use.

    d. Select the *Google Analytics* property that you want to use. In Google Analytics, **properties** can be websites, mobile apps,
    blogs, among others.

    e. Select the **data cube** that you want to use.

## Working in the Visualizations Editor

When you create a dashboard with information coming from Google Analytics, you will see fields organized differently (see screenshot below).

<img src="images/ga-visualizationeditor.png" alt="Visualization Editor showing a Google Analytics data cube" class="responsive-img"/>

You may notice that there is no "Fields" heading on the left. Instead, there are two sections in their own query field:

1.  **Dimensions** (depicted by a cube icon with a pink side): Dimensions are attributes of your data. For example, the dimension _Gender_ (under the _Audience_ cube) indicates the gender of your web site's audience.

2.  **Measures** (depicted by *123* icon): Measures consist of numeric data. For example, the measure _AdX Clicks_ is the number of times AdX ads were clicked on the site.

If you need to learn more, check this Google Analytics article: [Dimensions and metrics](https://support.google.com/analytics/answer/1033861?hl=en). 

>[!NOTE] 
> Some dimensions and measures cannot be used together. For a list of valid dimensions-measures combinations, refer to the [Dimensions & Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/) on the Google Developer website.

### Data Filters

There are two *Data Filters* when using the GA data source in Reveal. 

* **Segment** filter. The *Segment filters* are predefined. *System* Segments are defined by Google, and *Custom* Segments are defined by the user on the Google Analytics website. You can choose only one segment to filter your data. 
* **Date Range**. Select a specific date range in the calendar to filter your data. You can also choose one of the preset date ranges by clicking the arrow in the upper right corner: 

  <img src="images/ga-data-source-date-range-preset.png" alt="Date Range dialog" class="responsive-img"/>

  >[!NOTE] Default date range is _Last 30 days_. This means data will be retrieved for the last 30-day period, including today. 

### Using Goals from Google Analytics

You can use *Goals* defined in Google Analytics in the *Visualization
Editor*. Your *Goals* are listed as part of the metrics in both
**Dimensions** and **Measures** data types.

<img src="images/goals-google-analytics-2-option.png" alt="goals google analytics 2 option" class="responsive-img"/>

As you can see in the example above, the titles of your Google Analytics
*Goals* in Reveal include one or more of the following:

  - a **numeric ID**, from 1 to 20.

  - a **label** at the beginning - this is the name of the goal you
    configured for the specific goal, e.g. *Completed Download* for
    *Goal 19*.

  - a goal **type** at the end - e.g. *Completions*, *Abandoned Funnels*, etc.

For more information about Goals, please refer to this Google Analytics
[help page](https://support.google.com/analytics/answer/1012040?hl=en).
