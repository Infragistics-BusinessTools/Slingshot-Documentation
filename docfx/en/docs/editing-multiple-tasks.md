---
title: Editing Multiple Tasks
_description: Learn how to edit fields across multiple tasks at once in Slingshot, including handling tasks that share or differ in their field values.
---

# Editing Multiple Tasks

When you select multiple tasks at once, you can quickly update the same fields across all of them — change a _Status_, reassign owners, shift _Due Dates_, or clear a value from every selected task — all in a single step. Slingshot only shows the fields that all your selected tasks share, so you never have to wonder whether a change will land everywhere.

## How to Edit Multiple Tasks

### Step 1: Select the Tasks

There are two ways to start a multi-selection:

- **From a task list** — Hover over any task row and click the checkbox that appears on the left. A floating action popup opens at the bottom of the screen.
- **From a kanban board** — Click the multi-select button in the board toolbar to turn on selection mode, then click each task card you want to include. You can also select entire sections by clicking the section header checkbox.

You can keep adding to your selection as you scroll, switch sections, or change views — your selection stays intact until you exit multi-select mode.

> [!NOTE]
> You can select up to **2,000 tasks** at a time. If you try to go beyond that — for example, by using **Select All** on a large list — Slingshot caps the selection at 2,000 and lets you know.

### Step 2: Open the Edit Fields Dialog

In the floating action popup, click **Edit Fields**. A dialog opens with a list of every field you can edit across your selected tasks.

If your selected tasks use different task types, Slingshot shows only the fields they have in common. Fields specific to one task type — such as _Status_ or _Priority_ when their available options differ between task types — are hidden so you can't accidentally apply a value that doesn't exist on every task.

> [!NOTE]
> If the selected tasks share no editable fields in common, Slingshot lets you know with an alert instead of opening the dialog.

### Step 3: Change the Fields You Want to Update

Each row in the dialog shows a field, its current value, and a **Clear** button on the right.

- **Same value across all tasks** — The field shows that value. Edit it as you would on a single task.
- **Different values across tasks** — The field shows **Multiple Values**. For dropdown-style fields (_Status_, _Priority_, _Labels_, _Members_, _Date_, _Date Range_), click the **Multiple Values** button to open the picker and choose a new value. For text or numeric fields, just start typing.
- **Empty across all tasks** — The field is blank. Enter a value to add it everywhere at once.

When you change a field, a small **dot indicator** appears next to its label so you can see at a glance which fields you've modified.

> [!IMPORTANT]
> **Slingshot Tip**: Picking a new value on a **Multiple Values** field overwrites that field on every selected task. There's no way to keep the original mixed values once you've picked a replacement, so make sure you really want to apply the same value everywhere.

#### Clearing a Field

The **Clear** button to the right of each field lets you wipe the value from every selected task in one click.

- **Optional fields** clear to empty.
- **Required fields with a default value** reset to the default for that field.
- **Required fields without a default** can't be cleared — clicking has no effect.

If you change your mind, you can pick a new value after clearing — the new value supersedes the clear.

### Step 4: Apply Your Changes

When you're happy with your changes, click **Update**. A progress dialog shows the update running across all your selected tasks. Once the update finishes, the dialog closes and your tasks reflect the new values immediately — no need to refresh.

## Coming Back to Your Edits

If you close the **Edit Fields** dialog without clicking **Update**, your in-progress changes are preserved. Reopen the dialog at any time while you're still in multi-select mode and your edits will be right where you left them.

If you change your selection and reopen the dialog, Slingshot recalculates the shared fields. Any edits you made to fields that are still shared will be preserved.

Your pending edits clear when the update completes or you exit multi-select mode.
