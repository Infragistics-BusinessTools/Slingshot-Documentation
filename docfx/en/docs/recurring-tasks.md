---
title: Recurring Tasks
_description: Learn how to set up recurring tasks in Slingshot so that tasks are automatically repeated on a schedule or after completion.
---

# Recurring Tasks

Recurring tasks let you automate task repetition so that important work is never missed. Instead of manually creating the same task again and again, you can configure a task to repeat on a schedule that fits your workflow, such as daily, weekly, monthly, or at any other interval.

## What Are Recurring Tasks?

A recurring task is a task configured to repeat automatically, either when the current task is completed or at a fixed calendar interval. Each cycle, Slingshot either creates a new copy of the task or resets the same task, depending on how you configure it:

- **Create a new task** (the default): each cycle produces a fresh copy of the task. Previous copies stay in your list as a record of completed cycles.
- **Reuse and reset the same task**: the same task is reset at the start of each cycle, so you work with one persistent task instead of a growing list of copies.

Recurring tasks are useful for:

- Regular check-ins or stand-ups
- Monthly reports or reviews
- Periodic maintenance tasks
- Checklist-style routines, like a daily cleaning log
- Any work that repeats on a predictable schedule

## How to Set Up a Recurring Task

### Step 1: Open the Recurrence Scheduler

There are two ways to open the recurrence scheduler:

- **From the task overflow menu**: Open a task's overflow menu and select **Set Recurrence**. On a task that already recurs, the same menu item reads **Edit Recurrence**, and view-only users see **View Recurrence Details**.
- **From the task editor**: On a task that already has a recurrence, click/tap the **recurring arrows icon** in the editor toolbar to open its schedule.

### Step 2: Choose a Trigger

The trigger determines when the task repeats:

| Trigger | How It Works |
|---|---|
| **On Completion** | The task repeats when you mark the current task as complete. Use this for work that should repeat after the previous cycle finishes. |
| **On Schedule** | The task repeats at a fixed calendar interval, regardless of whether the current task is complete. Use this for time-based work like weekly reviews. |

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

For **On Schedule** recurrences, choose when the recurrence should stop:

| Option | Description |
|---|---|
| **Never** | The recurrence continues indefinitely until you remove it. |
| **After X Times** | The recurrence stops after a set number of repetitions (up to 365). Slingshot tracks how many repetitions have occurred. |
| **By Specific Date** | The recurrence stops after a specified date. No new cycles start after that date. |

> [!NOTE]
> **On Schedule** recurrences also have an **At** setting. Enter the time of day when you want the next cycle to start. The scheduler displays both your local time and the equivalent UTC time.

### Step 5: Choose the Recurrence Source Date

Select which date field on the task (for example, Due Date or Start Date) Slingshot uses to calculate the timing of the next cycle. Each cycle, this date advances to the next occurrence.

### Step 6: Choose the Remap Option

Enable **Remap Additional Dates** to shift all other date fields on the task with the new source date, keeping their original offsets. For example, if a Draft Date is 2 days before the Due Date, the next cycle's Draft Date is also 2 days before its Due Date.

### Step 7: Choose the Reset Option

By default, each cycle creates a new copy of the task. Enable **Reuse and Reset Task** to reuse the same task instead. The task carries on from cycle to cycle, links to it keep working, and its activity builds up a full history of every cycle.

When a cycle starts, Slingshot resets the task:

| What Resets | Details |
|---|---|
| **Status** | Returns to the default status, on the task and on its subtasks. |
| **Dates** | The source date advances to the next occurrence, and subtask dates shift along with it, keeping their offsets. With **Remap Additional Dates** enabled, the task's other dates shift too. |
| **Time logs** | Logged time is cleared for the new cycle. The time estimate stays, and the previous cycle's total is recorded in the task activity. |

Everything else stays exactly as it was:

| What Stays | Details |
|---|---|
| **Assignees** | The same people stay assigned. |
| **Content** | Title, description, custom field values, attachments, and links are all kept. |
| **Activity history** | The full history accumulates across cycles, including a note each time the task is reset. |

> [!IMPORTANT]
> **Slingshot Tip**: Use **Reuse and Reset Task** for checklist-style routines like a daily cleaning log or a weekly review checklist, where a new task every cycle would clutter your list.

### Step 8: Save the Recurrence

Click/tap **Apply** to save a new recurrence, or **Update** to save changes to an existing one.

## Recurring Subtasks

Subtasks can have a recurrence of their own, set up the same way as any other task.

**A parent task and its subtask cannot both recur.** Slingshot guides you whenever the two would overlap, so you can decide which recurrence to keep.

Completing or archiving a parent task stops the recurrence on its subtasks.

## Editing or Removing a Recurrence

To edit an existing recurrence, open the task editor and click/tap the **recurring arrows icon** in the toolbar. The scheduler opens with the current settings pre-filled.

To remove a recurrence, open the scheduler and click/tap **Remove Recurrence**. Slingshot asks you to confirm that the task will stop recurring, and that it will not be reset or create new tasks. Confirm with **Remove**, or **Cancel** to keep the recurrence.

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
| **Editor** | Can create, edit, and remove recurrence schedules on tasks they have edit access to. |
| **View-only** | Can open the recurrence scheduler to view an existing schedule, but cannot make changes. All settings appear in read-only mode. |

Recurrence settings on archived tasks are also read-only.

## Frequency Reference

### Weekly

Select one or more days of the week. At least one day must remain selected. The day matching the task's Recurrence Source Date is pre-selected when you first choose Weekly.

### Monthly and Yearly

Both Monthly and Yearly frequencies support two variants:

- **Day of the month**: Repeat on a specific numbered day (for example, the 15th). If you select a day that exceeds the number of days in a given month, Slingshot uses the last day of that month instead.
- **Day of the week**: Repeat on a specific weekday occurrence (for example, the 2nd Tuesday).

### Days After

Enter any value from 1 to 365. The **Include Weekends** option controls whether weekend days count toward the interval.

## Tips and Best Practices

- Use **On Completion** for task-dependent workflows where the next cycle should only start after the previous one is done.
- Use **On Schedule** for time-sensitive work that must happen on a fixed calendar date regardless of task status.
- Enable **Remap Additional Dates** when your task has multiple date fields that should shift together (for example, a draft date and a publish date relative to a due date).
- Enable **Reuse and Reset Task** for recurring checklists, so your team always works from the same task.
- Use the **After X Times** end condition for tasks with a defined number of repetitions, such as a 6-week onboarding process.

## Related Articles

- [Tasks](tasks.md)
- [Task Types](task-types.md)
- [Custom Fields](custom-fields.md)
- [Notifications](notifications.md)
