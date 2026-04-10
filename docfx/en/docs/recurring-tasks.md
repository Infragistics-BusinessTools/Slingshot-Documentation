---
title: Recurring Tasks
_description: Learn how to set up recurring tasks in Slingshot so that tasks are automatically recreated on a schedule or after completion.
---

# Recurring Tasks

Recurring tasks let you automate task repetition so that important work is never missed. Instead of manually creating the same task again and again, you can configure a task to repeat on a schedule that fits your workflow — daily, weekly, monthly, or at any other interval.

## What Are Recurring Tasks?

A recurring task is a task configured to automatically create a new copy of itself either when the current task is completed or at a fixed calendar interval. Each new copy inherits the same recurrence schedule, so the chain continues until you stop it.

Recurring tasks are useful for:

- Regular check-ins or stand-ups
- Monthly reports or reviews
- Periodic maintenance tasks
- Any work that repeats on a predictable schedule

> [!NOTE]
> Subtasks (tasks with a parent task) do not support recurrence. The recurrence option is not shown for subtasks.

## How to Set Up a Recurring Task

### Step 1: Open the Recurrence Scheduler

There are two ways to open the recurrence scheduler:

- **From the task editor** — Open a task, then click the **recurring arrows icon** in the toolbar. This icon is always available in the editor for tasks that support recurrence.
- **From the task overflow menu** — In board or list view, open the **⋯** overflow menu on a task with no existing recurrence and select **Set Recurrence**.

> [!NOTE]
> If a task already has a recurrence configured, use the recurring arrows icon in the task editor to open and edit it. The overflow menu only shows **Set Recurrence** for tasks that do not yet have a recurrence.

### Step 2: Choose a Trigger

The trigger determines what causes the next task to be created:

| Trigger | How It Works |
|---|---|
| **On Completion** | A new task is created when you mark the current task as complete. Use this for work that should repeat after the previous cycle finishes. |
| **On Schedule** | A new task is created at a fixed calendar interval, regardless of whether the current task is complete. Use this for time-based work like weekly reviews. |

### Step 3: Set the Frequency

Choose how often the task repeats:

| Frequency | Description |
|---|---|
| **Daily** | Repeats every day. You can choose whether to include weekends. |
| **Weekly** | Repeats on selected days of the week. Pick one or more days (for example, Monday and Thursday). |
| **Monthly** | Repeats monthly on a specific day of the month (for example, the 15th) or a specific weekday (for example, the 2nd Tuesday). |
| **Yearly** | Repeats yearly on a specific date (for example, March 15th) or a specific weekday in a month (for example, the 2nd Tuesday of March). |
| **Days After** | Repeats a set number of days after the previous task's due date. You can choose whether to include weekends. Enter a value from 1 to 365. |

### Step 4: Set an End Condition

Choose when the recurrence should stop:

| Option | Description |
|---|---|
| **Never** | The recurrence continues indefinitely until you delete it. |
| **After X times** | The recurrence stops after a set number of repetitions (up to 365). Slingshot tracks how many repetitions have occurred. |
| **By date** | The recurrence stops after a specified date. No new tasks are created after that date. |

### Step 5: Choose an Anchor Date and Remap Option

**Anchor Date** — Select which date field on the task (for example, Due Date or Start Date) Slingshot uses to calculate the timing of the next task. When the next task is created, its anchor date is set to the next occurrence date.

**Remap additional dates** — When this option is enabled, all other date fields on the task are automatically recalculated relative to the new anchor date, preserving their original offsets. For example, if a Draft Date is set 2 days before the Due Date, the new task's Draft Date will also be 2 days before its Due Date.

> [!NOTE]
> When **On Schedule** is selected as the trigger, an additional **At Time** setting appears. Enter the time of day when you want the new task to be created. The scheduler displays both your local time and the equivalent UTC time.

### Step 6: Save the Recurrence

Click **Apply** to save a new recurrence, or **Update** to save changes to an existing one.

If you close the scheduler without saving, Slingshot asks whether you want to **Save** or **Discard** your unsaved changes.

## Editing or Deleting a Recurrence

To edit an existing recurrence, open the task editor and click the **recurring arrows icon** in the toolbar. The scheduler opens with the current settings pre-filled.

To delete a recurrence, open the scheduler and click the **trash icon** (shown instead of the Cancel button when a recurrence exists). The recurrence schedule is removed from the task.

> [!NOTE]
> Deleting a task that has an active recurrence shows a confirmation dialog explaining that the recurrence will also be deleted.

## Identifying Recurring Tasks

Tasks with an active recurrence display a **recurring arrows badge** on their icon in board view, list view, and overview cards. This badge helps you quickly spot which tasks are part of a recurring series.

If a recurring task encounters an error, the badge changes to an **alert icon**. Open the task editor to review the recurrence settings and correct the issue.

## Filtering Recurring Tasks

You can filter your task list to show only recurring or non-recurring tasks:

1. Open the **Filters** panel in your task list.
2. Select the **Recurring** field.
3. Choose **Is Recurring** to show only tasks with an active recurrence, or **Is Not Recurring** to show tasks without one.

> [!NOTE]
> The **Recurring** filter is not available on task templates.

## Permissions

| Role | Access |
|---|---|
| **Editor** | Can create, edit, and delete recurrence schedules on tasks they have edit access to. |
| **View-only** | Can open the recurrence scheduler to view an existing schedule, but cannot make changes. All settings appear in read-only mode. |

Recurrence settings on archived tasks are also read-only.

## Frequency Reference

### Weekly

Select one or more days of the week. At least one day must remain selected. The current day is pre-selected by default when you first choose Weekly.

### Monthly and Yearly

Both Monthly and Yearly frequencies support two variants:

- **Day of the month** — Repeat on a specific numbered day (for example, the 15th). If you select a day that exceeds the number of days in a given month, Slingshot uses the last day of that month instead.
- **Day of the week** — Repeat on a specific weekday occurrence (for example, the 2nd Tuesday).

### Days After

Enter any value from 1 to 365. The **Include weekends** option controls whether weekend days count toward the interval.

## Tips and Best Practices

- Use **On Completion** for task-dependent workflows where the next cycle should only start after the previous one is done.
- Use **On Schedule** for time-sensitive work that must happen on a fixed calendar date regardless of task status.
- Enable **Remap additional dates** when your task has multiple date fields that should shift together (for example, a draft date and a publish date relative to a due date).
- Use the **After X times** end condition for tasks with a defined number of repetitions, such as a 6-week onboarding process.

## Related Articles

- [Tasks](tasks.md)
- [Task Types](task-types.md)
- [Custom Fields](custom-fields.md)
