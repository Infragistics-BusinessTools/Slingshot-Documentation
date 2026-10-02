---
title: Goals
_description: Learn how to set, track, and close out goals in Slingshot, including Strategies, SMART Goals, and OKRs measured by manual check-ins or live dashboard data.
---

# Goals

With Goals, you can set clear targets for yourself, your workspace, or your whole organization, and see at a glance whether you're on track to hit them. Track progress by checking in by hand, or connect a goal to a dashboard widget so Slingshot keeps it up to date automatically. Group related goals under a Strategy, or use OKRs to measure an objective through its key results.

## Types of Goals

Slingshot has four goal types. Each one plays a different role.

| Type | What it's for |
|---|---|
| **Strategy** | Groups related OKRs and SMART Goals in one place. A Strategy has a title and description only. It has no target or progress of its own. |
| **SMART Goal** | A measurable target with an owner, a cycle, and a status. Track it with check-ins or with live data. |
| **OKR** | An objective: a qualitative outcome, such as "Delight our customers". Its progress and status are calculated from its Key Results. |
| **Key Result** | A measurable target inside an OKR. It works just like a SMART Goal and always belongs to its OKR. |

You can organize goals like this:

- A **Strategy** can contain OKRs and SMART Goals.
- An **OKR** can contain Key Results only.
- **SMART Goals** can sit inside a Strategy or on their own.

### Cycles

Every SMART Goal, OKR, and Key Result has a **Cycle**: the time period it covers. You can choose a year (**Annual**), a quarter (**Quarterly**), or a month (**Monthly**). Cycles appear as "2026", "Q2 2026", or "Feb 2026".

A Key Result uses its OKR's cycle by default. You can switch it to a shorter period that falls inside the OKR's cycle. For example, a Key Result under a Q3 OKR can use Q3, July, August, or September.

### Statuses

Each goal shows one of these statuses: **Not Started**, **On Track**, **At Risk**, **Off Track**, **Completed**, or **Not Achieved**. **Completed** and **Not Achieved** are final outcomes, set when the goal is closed out at the end of its cycle.

## Where Goals Live

You can create goals in three locations:

| Location | Who can see them |
|---|---|
| **Personal** | Only you. They appear as _Personal Goals_. |
| **Organization** | Everyone in your organization. |
| **Workspace** | Members of that workspace. |

### Finding Your Goals

Open **Goals** from the main navigation to see goals from every location in one place. Goals are organized into four tabs:

- **All**: every goal you can see. The _Location_ column shows where each goal lives.
- **Organization**: your organization's goals. This tab only appears if you belong to an organization.
- **Workspaces**: goals from all of your workspaces. Click/tap **Locations** to choose which workspaces to include. Slingshot remembers your selection.
- **Personal**: your personal goals.

You'll also find a **Goals and Strategies** tab on each organization and workspace page.

The goals list shows _Owner_, _Status_, _Progress_, and _Cycle_ by default. You can group the list by _Status_, _Owner_, or _Cycle_, and filter it by cycle or any other field. Hover over a goal to see a quick preview of its description and whether a check-in is overdue.

> [!NOTE]
> You can also find goals using Slingshot's search. Look for the **Goals** category in the results.

## How to Create a Goal

### Step 1: Choose What to Create

Click/tap the **+Create** button on any goals list, and choose a type:

- **Strategy**: Group related goals and objectives in one place.
- **SMART Goal**: Track a measurable target with check-ins or live dashboard data.
- **OKR**: A qualitative outcome measured by its Key Results.

You can also start a goal from the global **+** menu by choosing **Goal**. To add a goal inside an existing Strategy or OKR, open it and click/tap **Create OKR**, **Create SMART Goal**, or **Create Key Result**. These options are also in the overflow menu as **Add OKR**, **Add SMART Goal**, and **Add Key Result**.

> [!IMPORTANT]
> **Slingshot Tip**: If Slingshot AI is available to you, you'll first be asked to describe your goal in your own words. Slingshot AI drafts the goal for you to review. Prefer to fill it in yourself? Click/tap **Or create it manually**.

### Step 2: Pick a Location

Use **Choose Location** at the top of the dialog to decide where the goal lives: **Personal**, your organization, or one of your workspaces. Slingshot pre-selects the page you're on if you can create goals there. Otherwise, it picks your organization, then Personal.

The picker only lists locations where you're allowed to create goals. Key Results always live in their OKR, so the picker doesn't appear when you create one.

### Step 3: Fill In the Details

Give your goal a _Title_ and an optional _Description_, then set:

- **Owner**: who's responsible for the goal. You're the owner by default, and you can add more people. Owners can edit the goal and add check-ins.
- **Cycle**: the time period the goal covers. Slingshot suggests one based on today's date.
- **Check-in Frequency**: how often owners should update the goal. Choose **Weekly**, **Bi-Weekly**, or **Monthly** (for example, "the first Monday of every month").
- **Strategy**: optionally place the goal inside an existing Strategy, or create a new one on the spot.
- **Impact** (Key Results only): how much this Key Result counts toward its OKR. See [How OKR Progress Is Calculated](#how-okr-progress-is-calculated).

OKRs have no target or check-in frequency, because their progress comes from their Key Results. Strategies need only a title and description.

### Step 4: Set Up the Measurement

SMART Goals and Key Results have a **Measurement** section that defines how progress is tracked. First, choose a **Tracking Source**:

| Tracking Source | Use it when |
|---|---|
| **Manual** | You'll enter the current value by hand with each check-in. |
| **Dashboard Widget** | The number already lives in a Slingshot dashboard and you want it tracked automatically. |
| **Data Source** | You want to build the metric straight from your data, without a dashboard. |

Then define what success looks like:

- **Success Condition**: **Greater Than or Equal to**, **Less Than or Equal to**, or **Between** (with a **Min** and **Max**).
- **Target**: the number you're aiming for. For yearly and quarterly goals, you can enter it per period instead (for example, **per month**), and Slingshot works out the total.
- **Baseline**: the value you're starting from (manual goals). Defaults to 0.
- **Format**: show the value as a number, a percentage, or a currency, with options for decimals and separators.

For Dashboard Widget and Data Source goals, also choose how to **Measure As**:

| Option | Best for |
|---|---|
| **Total** | Adds up each period. Use for revenue, new signups, or tickets closed. |
| **Average** | Averages across the cycle. Use for rates like conversion, CSAT, or bounce rate. |
| **Latest** | Uses the most recent value. Use for running totals like subscriber count or headcount. |

### Step 5: Create the Goal

Click/tap **Create**. Your new goal opens automatically.

## Tracking Progress with Live Data

When you choose **Dashboard Widget** as the tracking source, click/tap **Select Widget…** and browse to a dashboard. Pick the widget that holds your number, then review:

- **Metric**: the value to track, if the widget has more than one.
- **Category**: track the **Grand Total** or a single item, such as one region or product.
- **Plan** (optional): a second value from the same widget with your planned numbers for each period. When you use a plan, your target is calculated from it, and status is measured against the plan to date.
- **Prior Year** (optional): last year's values, shown on the chart for comparison. They don't affect your target or status.
- **Filters**: check that the widget's filters are right for this goal. You don't need a date filter, because the goal's cycle sets the time range.

Line, column, bar, and combo charts work, and so do gauges, KPI and single-value widgets. Grids and pivots work when they have one date row plus values. Pie, doughnut, area, scatter, funnel, treemap, and map widgets aren't supported yet.

If your data works better with a different cycle (for example, monthly data on a quarterly goal), Slingshot offers to switch the cycle for you.

Slingshot refreshes live-data goals every day, and right away when you create or change one. The goal shows when its data was last updated in **Latest Data From**. Click/tap the refresh icon to update it now. If a refresh fails, a banner explains the problem and keeps showing the last values that synced. Click/tap **View Error Details** to learn more.

To open the dashboard behind a goal, click/tap **Original Source** below its trend chart.

> [!NOTE]
> **Data Source** goals work the same way, but you build the metric yourself. Pick a data source and table, then choose the date field, the metric, an optional plan and prior year, and any filters. This option may not be available on all accounts yet.

### Creating a Goal from a Dashboard

You can also start from the dashboard itself. Open the overflow menu of a dashboard or a dashboard widget, and choose **Create SMART Goal** from the _Productivity Boost_ section. Slingshot opens the goal editor with that dashboard already selected (and the widget, if you started from one). The option appears only when the dashboard has at least one widget that goals can track.

### Automatic Status

For live-data goals, Slingshot sets the status for you. For **Total** goals, it compares your progress to how much of the cycle has passed:

| Your progress compared to the cycle | Status |
|---|---|
| At least 90% of where you should be | **On Track** |
| Between 70% and 90% | **At Risk** |
| Less than 70% | **Off Track** |

For **Average** and **Latest** goals, you're **On Track** when you meet the target, **At Risk** when you're within about 10% of it, and **Off Track** otherwise. Goals with a plan are measured against the plan to date.

## Checking In on a Goal

Check-ins are how owners record progress and share updates. Only goal owners can add check-ins.

1. Open the goal and go to the **Check-ins** tab.
2. Click/tap **+Check-in**.
3. For manual goals, enter the **Date**, the **Current Value**, and the **Status**.
4. Add a note about what's happening, plus any attachments.
5. Click/tap **Save**.

> [!IMPORTANT]
> **Slingshot Tip**: _Current Value_ is your running total, not the change since last time. If you were at 85 and gained 95, enter **180**.

A few things to keep in mind:

- You can add one check-in per day. Saving another on the same day replaces it.
- The date can't be in the future or outside the goal's cycle.
- You can't add a check-in until the cycle has started.
- The goal's status always comes from the most recent check-in by date.
- For live-data goals, the value and status come from the data, so a check-in is just a note.
- Owners can edit or delete any check-in from its overflow menu.

If a check-in is overdue, based on the goal's check-in frequency, the goal shows a banner. Owners also get a notification. You can change this under **Goals** in your notification settings.

## Viewing a Goal

Open any goal to see three tabs: **Overview**, **Check-ins**, and **Attachments**.

The **Overview** tab shows the goal's status, owners, cycle, and description, followed by its progress:

- **Progress card**: the current value, how it changed, and a gauge showing where you are against your target. Total goals also show your **Velocity** (your average gain per period) and how much more is needed.
- **AI summary**: for live-data goals, Slingshot AI writes a short summary of how the goal is going. It updates when the data changes.
- **Trend chart**: your progress over time, with check-in markers, your projected trend, and the ideal path to your target. If you're behind, an **Adjusted Target** line shows the pace you need from here to still finish on target.

Switch the view to see the whole cycle at once (**Yearly**, **Quarterly**, or **Monthly**) or one period at a time (**By Month**, **By Week**, or **By Day**). The period-by-period view is available for live-data goals.

### How OKR Progress Is Calculated

An OKR's progress is the average of its Key Results' progress, weighted by each Key Result's **Impact**:

| Impact | Effect |
|---|---|
| **High** | Counts more toward the objective's progress and status. |
| **Normal** | Counts the same as other key results. This is the default. |
| **None** | Tracked on its own, without affecting the objective's progress or status. |

If a **High** impact Key Result is **Off Track**, the OKR is shown as **At Risk** at best. When all of an OKR's Key Results that count are closed out, the OKR closes too. It's **Completed** if all of them were completed, and **Not Achieved** otherwise. An OKR's view also includes an AI summary and a list of its Key Results.

## Closing Out a Goal

When a goal's cycle ends, Slingshot asks you to close it out:

- **Manual goals**: add a final check-in and choose **Completed** or **Not Achieved**. To change the outcome later, add another final check-in.
- **Live-data goals**: Slingshot closes the goal automatically once the final data arrives (or 30 days after the cycle ends). The goal is **Completed** if it reached its target, and **Not Achieved** otherwise.

Once a cycle ends, the goal's settings are locked and **Edit** is no longer available. You can still add a closing check-in. To run the same goal again next cycle, use **Create a Copy and Edit**.

## Managing Goals

Open a goal's overflow menu for more actions:

| Action | What it does |
|---|---|
| **Edit** | Change the goal's details. Not available after the cycle ends. |
| **Move to...** | Move a Strategy, SMART Goal, or OKR to another location. Anything inside it moves too. |
| **Convert to SMART Goal** | Turn a Key Result into a standalone SMART Goal. Its target, check-ins, and history are kept. This can't be undone. |
| **Create a Copy and Edit** | Start a new SMART Goal or Key Result with the same settings. Check-ins and history aren't copied, and the status starts at **Not Started**. |
| **Add to Overview** | Add the goal to an overview as a widget. |
| **Delete** | Permanently delete the goal. |

You can also drag and drop goals to reorder them, or to move them into and out of a Strategy.

## Goals on Overviews

Keep your most important goals in front of your team by adding them to an overview. There are two goal widgets, found in the widget library under _Dashboards and Analytics_:

- **Goal**: track a single goal's progress, with its trend or key results when there's room.
- **Goals**: pin several goals, objectives, and key results to see their progress at a glance.

You can also choose **Add to Overview** from a goal's overflow menu. Only overview owners can add widgets to an overview.

## Goals with Slingshot AI

Slingshot AI can help you work with goals in chat. Ask it to find goals, create new ones, or update existing ones. When Slingshot AI suggests a goal, it shows you a card to review first. You can approve it, edit it, or skip it. If it suggests several goals at once, you can step through them one by one.

## Permissions

| Action | Who can do it |
|---|---|
| View goals | Anyone who can see the goal's location. |
| Create goals | Anyone with edit access to the location. Personal goals are always available to you. |
| Edit, move, or convert a goal | People with edit access to the goal, including its owners. |
| Add, edit, or delete check-ins | Goal owners only. |
| Delete a goal | People with delete permission on the goal. |

> [!NOTE]
> Adding someone as an owner gives them permission to edit the goal.

## Tips for Setting Great Goals

- **Measure what matters**: pick one clear number per goal, and use OKRs when the outcome is qualitative.
- **Connect live data where you can**: dashboard-backed goals update themselves and set their own status, so you spend less time on check-ins.
- **Use Total, Average, or Latest deliberately**: revenue adds up, but conversion rates and headcount don't.
- **Set a realistic check-in rhythm**: weekly works well for quarterly goals, and monthly for annual ones.
- **Use Impact on Key Results**: mark the results that matter most as **High** so your OKR reflects what really counts.
