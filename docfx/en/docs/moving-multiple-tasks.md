---
title: Moving Multiple Tasks
_description: Move several tasks at once to a new list or section in Slingshot, with guided field mapping when the destination uses a different task type.
---

# Moving Multiple Tasks

When you select multiple tasks at once, you can move them all to a new list or section in a single step. If the destination uses a different task type, Slingshot guides you through mapping their fields so nothing gets lost.

## How to Move Multiple Tasks

### Step 1: Select the Tasks

There are two ways to start multi-select mode:

- **From a task list** — Hover over any task row and click the checkbox that appears on the left. A floating action popup opens at the bottom of the screen.
- **From a Kanban board** — Click the multi-select button in the board toolbar to turn on multi-select mode, then click each task card you want to include. You can also select entire sections by clicking the section header checkbox.

You can keep adding to your selection as you scroll, switch sections, or change views — your selection stays intact until you exit multi-select mode.

> [!NOTE]
> You can select up to **2,000 tasks** at a time. If you try to go beyond that — for example, by using **Select All** on a large list — Slingshot caps the selection at 2,000 and lets you know.

### Step 2: Choose a Destination

In the floating action popup, click **Move**. A destination picker opens, scoped to your current workspace. Browse to the list or section where you want the tasks to land, then confirm.

- The **source list stays selectable** — moving tasks between sections of the same list is perfectly valid. If you pick the section the tasks already live in, they simply stay put.
- If you pick a list rather than a specific section, the tasks drop into that list's default section.
- Click **Cancel** to close the picker without moving anything; your selection stays active.

### Step 3: Map Fields (If the Task Type Changes)

If the destination uses a different task type than your selected tasks, Slingshot opens a short mapping wizard so nothing is lost. The wizard has up to three steps and skips any that aren't needed:

1. **Custom Fields to Keep** — choose which custom fields from the original task type should carry over.
2. **Status** — match each status your tasks use to a status available in the destination.
3. **Priority** — match each priority value the same way.

When you're moving several tasks at once, each step shows **one row per distinct value** across your whole selection, and that choice applies to every task using that value. The **Continue** button stays disabled until every row has a destination value.

Use **Back** to revisit an earlier step — your choices are kept — or close the wizard with **✕** to cancel the move entirely. Nothing moves until you finish the wizard.

> [!NOTE]
> If your tasks and the destination already use the same task type, no mapping is needed and the move runs right away.

> [!IMPORTANT]
> **Slingshot Tip**: Subtasks of the tasks you're moving are mapped automatically — you won't see them as separate rows in the wizard. As long as the parent is moving, its subtasks come along with the correct field mapping.

### Step 4: Move Your Tasks

When you're ready, confirm the move. A **Moving Tasks** progress dialog shows the move running across your selected tasks. This dialog stays open until the move finishes — a move that's already underway can't be cancelled.

When the move completes:

- **Everything succeeded** — your tasks appear in their new location right away, and multi-select turns off.
- **Some tasks couldn't be moved** — a **Bulk Report** opens (the same report you'll see from other bulk actions, like Edit Fields), listing each task that failed and why. From here you can:
  - **Retry All** — re-runs the tasks that didn't make it, reusing the field mappings you already chose, so you're not asked to map anything again.
  - **Dismiss (✕)** — close the report; your selection narrows down to just the tasks that still need attention.

## Why Move Might Be Unavailable

Some selections can't be moved as a group. When that's the case, the **Move** action shows a warning badge — hover over it to see why:

| Situation | What it means |
|---|---|
| Tasks from more than one workspace are selected | Moving keeps tasks within a single workspace. The tooltip reads *"All selected tasks must be in the same workspace."* This can happen in filter or search views that pull tasks from across workspaces. |
| More than one default task type is in the selection | You can move one default task-type group at a time. The tooltip reads *"Only one unnamed task type can be moved at a time."* Custom task types don't have this restriction — see the note below. |
| The selection is over the 2,000-task limit | Trim your selection to 2,000 or fewer, then try again. |

> [!NOTE]
> Custom task types you've named can be combined freely in a single move — they travel to the destination without any mapping. You can even mix the default task type together with several custom task types; the only limit is moving more than one *default* task-type group at once.

## How Subtasks Are Handled

When you move a parent task, its subtasks come along automatically and keep their parent-child relationship — even if you didn't select the subtasks yourself. If you happen to select both a parent and one of its subtasks, the subtask still simply rides along with its parent; it isn't moved twice or detached.

If you select a subtask **without** its parent, it moves on its own and becomes a top-level task in the destination — the same as moving a single subtask.

## Tips for Moving Tasks

- **Reorganize within a list** — Moving multiple tasks isn't only for sending them elsewhere. Use it to shuffle tasks between sections of the same list in one step.
- **Match task types to skip the wizard** — Moving tasks into a list that uses the same task type runs instantly, with no field mapping.
- **Keep large moves running** — For big selections, give the progress dialog a moment to finish; Slingshot processes the move efficiently in the background.
- **Use Retry for transient failures** — If a few tasks fail because of a temporary hiccup, **Retry All** re-runs them without making you set up the mapping again.
