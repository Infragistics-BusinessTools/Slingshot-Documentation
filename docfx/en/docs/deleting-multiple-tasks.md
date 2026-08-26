---
title: Deleting Multiple Tasks
_description: Delete several tasks at once in Slingshot, including how subtasks are handled and what happens when a task can't be deleted.
---

# Deleting Multiple Tasks

When you select multiple tasks at once, you can delete all of them in a single step. Slingshot confirms before anything happens, tells you up front when subtasks are involved, and reports back on any task it couldn't delete.

> [!IMPORTANT]
> **Slingshot Tip**: Deleting tasks can't be undone. There's no trash or recycle bin to recover them from, so read the confirmation carefully before you continue.

## How to Delete Multiple Tasks

### Step 1: Select the Tasks

There are two ways to start multi-select mode:

- **From a task list**. Hover over any task row and click the checkbox that appears on the left. A floating action popup opens at the bottom of the screen.
- **From a Kanban board**. Click the multi-select button in the board toolbar to turn on multi-select mode, then click each task card you want to include. You can also select entire sections by clicking the section header checkbox.

You can keep adding to your selection as you scroll, switch sections, or change views. Your selection stays intact until you exit multi-select mode.

> [!NOTE]
> You can select up to **2,000 tasks** at a time. If you try to go beyond that, for example by using **Select All** on a large list, Slingshot caps the selection at 2,000 and lets you know.

### Step 2: Confirm the Delete

In the floating action popup, click **Delete**. It's the last action in the row, shown in red. A confirmation dialog opens:

- The **title** counts the tasks you selected, for example **Delete 12 Tasks**.
- The **body** asks you to confirm and reminds you that the action can't be undone.
- If any task you're deleting has subtasks, the body also warns you that those subtasks will be deleted along with it.

Click the red **Delete** to go ahead, or **Cancel** to back out. Clicking outside the dialog won't dismiss it, so you always make an explicit choice. Cancelling leaves your selection exactly as it was.

> [!NOTE]
> The count in the title is the number of tasks **you selected**, not the total number that will be removed. Deleting one parent task that has three subtasks reads **Delete 1 Tasks**, and all four tasks are removed.

### Step 3: Delete Your Tasks

Once you confirm, a **Deleting Tasks** progress dialog shows the delete running across your selected tasks. This dialog stays open until the delete finishes; a delete that's already underway can't be cancelled.

When the delete completes:

- **Everything succeeded**. Your tasks disappear from every view right away, a toast confirms how many were deleted, and multi-select turns off.
- **Some tasks couldn't be deleted**. A **Delete Report** opens, the same report you'll see from other bulk actions like **Move** and **Convert To**, listing each task that failed and why. From here you can:
  - **Retry Failed**. Re-runs just the tasks that didn't make it. You won't be asked to confirm a second time, since you already confirmed the delete.
  - **Dismiss (✕)**. Closes the report. Your selection narrows down to just the tasks that still need attention.

## When Delete Is Unavailable

Unlike **Move** and **Convert To**, deleting has no restrictions on which tasks can be grouped together. You can delete tasks from different lists, different task types, and different workspaces in a single pass. There are two things that will stop it:

| Situation | What it means |
|---|---|
| You don't have permission to delete every selected task | The **Delete** action shows a warning badge. Hover over it and the tooltip reads *"You don't have permission to delete all of the selected tasks."* Remove the tasks you can't delete from your selection, then try again. |
| The selection is over the 2,000-task limit | Trim your selection to 2,000 or fewer, then try again. |

> [!NOTE]
> Deleting requires edit permission on the list. If you can only view a list, you won't be able to enter multi-select mode there at all.

## How Subtasks Are Handled

When you delete a parent task, its subtasks are deleted with it, even the ones you didn't select. The confirmation dialog warns you whenever this applies to your selection, so you always know before you commit.

- **Parent and subtask both selected**. The subtask is deleted once, along with its parent. It isn't reported as a failure.
- **Subtask selected without its parent**. Only that subtask is deleted. The parent stays where it is, and its subtask list updates to reflect the change.

## Tips for Deleting Tasks

- **Check the subtasks warning**. When the confirmation mentions subtasks, the real number of tasks being removed is higher than the count in the title. Expand a few parents first if you want to know exactly what's going.
- **Review before you confirm**. Since there's no undo, the confirmation dialog is your last chance. **Cancel** always leaves your selection intact so you can adjust it.
- **Consider moving instead**. If you're clearing out a list but might want the tasks later, **Move** them to an archive list rather than deleting them.
- **Use Retry for transient failures**. If a few tasks fail because of a temporary hiccup, **Retry Failed** re-runs them straight away.
