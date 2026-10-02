---
title: Automations
_description: Learn how to set up automations in Slingshot that update tasks, send notifications, apply templates, and turn meeting transcripts into tasks for you.
---

# Automations

With automations, Slingshot takes care of repetitive work for you. You set up a rule once, for example "when a task becomes overdue, notify the assignee", and Slingshot runs it whenever the rule's conditions are met. Automations can update fields, move tasks, post comments, send notifications, apply task templates, log time, and turn your meeting transcripts into tasks.

Each automation is a simple rule with three parts:

- **When**: the _trigger_, the event that starts the automation (for example, _a task is created_ or _status changes_).
- **If** _(optional)_: _conditions_ that narrow which tasks the automation applies to (for example, _only High priority tasks_).
- **Then**: one or more _actions_ Slingshot performs (for example, _set the assignee_ and _send a notification_).

As you build an automation, Slingshot shows a plain-language summary of it, such as "When a task is overdue, if Priority is High, then send a notification."

> [!NOTE]
> To create or edit automations in a workspace, you need edit rights in that workspace. Other workspace members can open an automation and see how it works, but they can't change it.

## Where to Find Automations

Open **Automations** from the main navigation. The page lists your automations grouped by where they live:

- **My Automations**: personal automations that run on your own tasks and meetings. [Meeting automations](#automations-for-meetings) can only be created here.
- **All Automations**: every automation you have access to, across your workspaces. Use the workspace picker to narrow the list.
- **One row per workspace**: automations that run on that workspace's tasks. You can drag workspace rows to reorder them.

At the top of the page, summary tiles show how many automations are **Active**, how many runs happened **this month**, and the **Total**. Turn on **Hide Paused** to show only automations that are switched on.

## How to Create an Automation

### Step 1: Start a New Automation

Click/tap **New Automation**. You can start in three ways:

- **Describe it**: type what should happen and when, such as "When a task is moved to Done, clear its due date and notify the owner", and Slingshot AI builds the automation for you to review.
- **Use a template**: pick one of the ready-made starters below. Most templates leave one setting for you to choose (such as which status or which person), so **Create** stays disabled until you fill it in.
- **Start from scratch**: open a blank automation.

| Template | What it does |
|---|---|
| **Assign new work to a default owner** | When a new task is created, one person owns it |
| **Hand work to review when it's ready** | When the status reaches the one you pick, a reviewer takes over |
| **Route new work by task type** | When a new task of one type is created, it goes to the right owner. Only offered when the workspace has a named task type |
| **Comment when work moves** | When a task lands where you pick, a comment is posted |
| **Nudge overdue work** | When a task slips past its due date, the assignee is notified |
| **Warn before a due date** | When a due date is coming up, the assignee is notified |
| **Escalate blocked work** | When the status reaches the one you pick, priority rises and someone is notified |
| **Set a default description on intake** | A new task starts with the description you write |
| **Close the parent when subtasks finish** | When every subtask is complete, the parent closes |

### Step 2: Name It and Choose Where It Runs

Slingshot fills in a name based on your configuration (for example, "Task created → Set status") and keeps it up to date until you type your own. Click/tap **Generate Name** to have Slingshot AI write a more descriptive one.

Next, choose the **workspace** and the scope the automation applies to: the whole workspace, or specific projects, lists, or sections. Automations in **My Automations** apply to your personal tasks.

> [!IMPORTANT]
> Changing the location of an automation clears the trigger, conditions, and actions you've set up, because the available fields depend on where the automation runs. Pick the location first.

### Step 3: Choose a Trigger (When)

A new automation starts with **Task created** selected. Click/tap the trigger to pick a different one. Triggers are grouped into categories:

| Trigger | Fires when |
|---|---|
| **Task created** | A task is created in the automation's location |
| **Task moved** | A task is moved into (or out of) a list or section you choose. Subtasks move with their parent, so the actions also run on each subtask |
| **Date arrives** | A date is reached: the task's _Start Date_, _Due Date_, a custom _Date_ field, or a specific calendar date you pick. You can also run it a set time before or after the date |
| **Date passed** | One day after the chosen date has gone by |
| **Task is overdue** | One day after the due date, if the task still isn't completed |
| **Start date has passed** | One day after the start date, if the task still hasn't been started |
| **Subtasks are complete** | Every direct subtask of a task is completed. The actions run on the **parent** task |
| **Title changed**, **Description changed**, **Status changed**, **Priority changed**, **Assignee changed** | That field on the task changes |
| **Field changed** | A custom field you pick changes |

For **Status changed**, **Priority changed**, and other field triggers, you can choose to fire on any change, only when the field changes **to** a value, **from** a value, or **from** one value **to** another. For people fields such as _Assignee_, you can fire when someone is **added** or **removed**.

> [!IMPORTANT]
> **Slingshot Tip**: **Date passed** doesn't check whether the task is finished, so it also fires on completed tasks. To act only on unfinished work, use **Task is overdue** instead, or add a _Status_ condition.

#### Custom Fields in Triggers and Actions

The **Field changed** trigger and the **Change field** action work with these custom field types:

| Field type | As a trigger | As an action |
|---|---|---|
| **Dropdown** | Any change, to, from, or from-to a value | Set an option, or clear it |
| **People** | Person added or removed | Set the people |
| **Numeric** | Compare the new value: is, greater than, less than, and so on, or not set | Set a number, or clear it |
| **Manual Progress** | Compare the new percentage | Set a percentage |
| **Checkbox** | Checked or unchecked | Check or uncheck |
| **Date** | Use with **Date arrives** | Set, clear, or calculate a date (see below) |

_Date Range_, _Rating_, and _Formula_ fields can't be used in triggers or actions.

### Step 4: Add Conditions (If)

Conditions are optional. Click/tap **+ Condition** to add a block of rules; the automation then runs only on tasks that match. Inside a block, click/tap **+ Rule** to add another rule.

Each rule compares a field with a value, for example _Priority_ **is** _High_. You can build conditions on _Status_, _Priority_, _Task Type_, _Title_, _Description_, dates, people, most custom fields, and the task's **Project** or **List**. A task counts as "in" a project or list if it sits anywhere inside it, including inside a section.

Every rule after the first is joined with **And** or **Or**; click/tap the connector to switch it. Rules are read from top to bottom, so "A **And** B **Or** C" means "(A and B) or C".

> [!NOTE]
> Use a **Project** or **List** condition when a trigger doesn't let you pick a location, such as **Status changed** or **Date arrives**. For example: when status changes to _Done_, if the task is in the _Launch_ list, move it to the _Shipped_ section.

### Step 5: Add Actions (Then)

The first action starts as **Set status**, so just pick a value, or change it to a different action. Click/tap **+ Action** to add more; an automation can have up to **20** actions, and they run in order.

| Action | What it does |
|---|---|
| **Mark subtasks complete** | Marks every open direct subtask of the task as completed |
| **Move task** | Moves the task to another section or list in the same workspace |
| **Apply template** | Applies a saved task template, either in the task's own section or in a location you choose |
| **Set title** | Replaces the task's title. The title can't be blank |
| **Set description** | Replaces the task's description. Formatted text and links are supported; images aren't |
| **Set status**, **Set priority**, **Set assignee**, **Set start date**, **Set due date** | Sets that field on the task |
| **Change field** | Sets or clears any other supported field, including custom fields |
| **Send notification** | Notifies the people you choose (see below) |
| **Create comment** | Posts a comment on the task. You can format text and @mention people |
| **Log time** | Logs a time entry on the task for the person and duration you choose |

**Date actions.** When setting _Start Date_, _Due Date_, or a custom _Date_ field, you can set a specific date, clear it, copy another date field, set it a number of days before or after another date, or set it relative to the moment the automation runs (for example, "one week after it runs").

> [!NOTE]
> Required fields can't be cleared by an automation.

#### Send Notification

**Send notification** has three parts:

- **Recipients**: choose **Current Assignees**, anyone listed in one of the task's custom _People_ fields, or specific workspace members.
- **Subject Line** _(required, up to 100 characters)_.
- **Message** _(optional, up to 255 characters)_.

Use the **Insert** buttons to add placeholders that Slingshot fills in when the notification goes out: **Task name**, **List**, **Workspace**, and **Automation name**.

Recipients get the notification in-app, as a push notification, and by email, depending on their own notification settings (look for **Automation notifications**). People who can't see the task, or who have muted it, aren't notified.

> [!NOTE]
> The character limits count the placeholder, not the text it becomes. A long task name can make the delivered subject longer than 100 characters, in which case it's shortened.

#### Move Task

**Move task** never changes a task's type. Tasks that use a task type specific to their list stay in that list, so a move to a different list is skipped for those tasks. Moves to another section in the same list always work.

#### Apply Template

Choose a saved task template, then choose **Apply to**: **Same location as the task** or **Choose location**. Template dates are calculated from the day the automation runs.

> [!IMPORTANT]
> One run can create at most **300** tasks and subtasks from a template. A larger template is skipped, and the run history says so. Tasks created by a template never set off another **Apply template**, so templates can't pile up on each other. Other automations still run on them.

#### Log Time

**Log time** adds a time entry every time the automation runs. If the trigger can fire more than once on the same task, time adds up with each run.

### Step 6: Save

Click/tap **Create** (or **Update** when editing). The button is enabled once the automation has a name, a trigger, and a complete set of actions. If something is missing, Slingshot highlights the setting that needs attention.

New automations are switched on as soon as you create them.

## Automations for Meetings

Automations can also run on your calendar. Create the automation in **My Automations**, then in the **When** section switch **Runs on** from **Task** to **Calendar event** to use the meeting trigger. Switching clears the trigger, conditions, and actions you've already set.

> [!IMPORTANT]
> Meeting automations can only be created in **My Automations**. They aren't available in workspaces, because each one watches the calendar of the person who created it. If you don't see **Runs on**, check that you're creating the automation in **My Automations**.

> [!NOTE]
> Meeting automations work with Microsoft Teams meetings on your connected Microsoft calendar.

**Trigger: Meeting transcript is available.** Fires after a meeting ends and its transcript is ready. Choose **Event or series** to pick one meeting or a recurring series, or **All events** to watch every meeting on your calendar.

**Conditions.** You can narrow a meeting automation by the meeting's _Title_ (contains, doesn't contain, is, or isn't), by whether you're the organizer, or by who the organizer is.

**Actions:**

- **Create tasks from action items**: Slingshot reads the transcript, finds the action items, and creates a task for each one in the section or list you choose. Under **Assign to**, pick **The attendee named in the transcript**, **Me**, or **No one**. Tasks are created only once per meeting for each destination.
- **Post summary to discussion**: posts an AI summary of the meeting into a discussion you choose. You need edit rights in that discussion.

> [!IMPORTANT]
> **Slingshot Tip**: To set up "turn this meeting's action items into tasks" quickly, look for the **Turn action items into tasks** tip on a meeting in your calendar and click/tap **Set it up**.

## Managing Automations

Click/tap an automation in the list to open it. The panel has two tabs: **Details**, where you edit the automation, and **Run History**.

- **Turn on or off**: use the automation's switch to pause it without losing its setup or history. Paused automations don't run.
- **Duplicate**: copy an automation from its overflow menu as a starting point for a similar one.
- **Delete**: removes the automation permanently. This can't be undone, so turn it off instead if you might need it again.

### Run History

**Run History** shows every time the automation ran, newest first, grouped by day. You can open it from the **Run History** tab, from the automation's overflow menu, or by clicking/tapping its run count in the list. Each run shows:

- **The task** it ran on.
- **What each action did**, such as "Set Status to In Progress" or "Already set to In Progress" when there was nothing to change.
- **Where it ran and what set it off**: the list (click/tap to open it), and either the person whose change triggered it or **Triggered by another automation**.

A run that didn't change anything appears as skipped, with the reason. A run that couldn't finish is marked as failed.

### Configuration Errors

If something an automation depends on is deleted, such as a custom field, a task template, a project, or a list, the automation is flagged with an error in the list. Open it and the setting that needs attention is highlighted in red; you can't save until you fix or replace it.

> [!NOTE]
> If you delete the list or section an automation's trigger points to, Slingshot turns that automation off.

## Good to Know

- **Who makes the change.** Changes, comments, and notifications from an automation appear in the task's activity as **Automations (_automation name_)**, so it's always clear which rule did what.
- **Actions run in order.** If one action can't complete, the others still run.
- **Automations can trigger each other.** For example, one automation sets a status and another reacts to that status change. An automation never re-triggers itself, and Slingshot stops a chain of automations after eight steps. A stopped run appears in Run History in red.
- **Pick values from the right place.** Dropdown options belong to a specific task type. If an automation sets an option that the task's type doesn't have, that action is skipped.
- **Date triggers and existing tasks.** **Date arrives** on _Start Date_, _Due Date_, or a custom date field is scheduled when a task is created or updated. **Date arrives** on a specific calendar date checks every task in scope once, when that date comes.

## Using Slingshot AI with Automations

You can also manage automations by chatting with [Slingshot AI](slingshot-ai-overview.md). Ask it to create an automation ("Notify me when a high-priority task becomes overdue"), explain what an existing one does, change it, turn it on or off, or delete it. Slingshot AI shows you a confirmation card before it creates or changes anything.

## Tips

- **Start from a template.** The starters cover the most common rules and only ask you to fill in what's specific to your team.
- **Keep the scope tight.** Apply an automation to the projects or lists that need it, or add a **Project** or **List** condition, rather than running it everywhere.
- **Add a Status condition to date triggers** so reminders stop once the work is done.
- **Check Run History after you set up a new automation** to confirm it did what you expected.
