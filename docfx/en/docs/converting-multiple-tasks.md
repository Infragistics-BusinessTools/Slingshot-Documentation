---
title: Converting Multiple Tasks
_description: Change the task type across several tasks at once in Slingshot, with guided field mapping and without moving anything out of its list.
---

# Converting Multiple Tasks

When you select multiple tasks at once, you can change all of them to a different task type in a single step. Nothing moves: your tasks keep their list, their section, and their parent-child relationships. The only thing that changes is the task type, along with the fields, statuses, and priorities that come with it. If the new type is shaped differently from the old one, Slingshot walks you through mapping the values so nothing is lost.

## How to Convert Multiple Tasks

### Step 1: Select the Tasks

There are two ways to start multi-select mode:

- **From a task list**. Hover over any task row and click the checkbox that appears on the left. A floating action popup opens at the bottom of the screen.
- **From a Kanban board**. Click the multi-select button in the board toolbar to turn on multi-select mode, then click each task card you want to include. You can also select entire sections by clicking the section header checkbox.

You can keep adding to your selection as you scroll, switch sections, or change views. Your selection stays intact until you exit multi-select mode.

> [!NOTE]
> You can select up to **2,000 tasks** at a time. If you try to go beyond that, for example by using **Select All** on a large list, Slingshot caps the selection at 2,000 and lets you know.

### Step 2: Pick the New Task Type

In the floating action popup, click **Convert To**. A task type picker opens. It is the same picker you get when converting a single task.

- The type your tasks already use is left out of the list, since there is nothing to convert.
- **+ New Type** at the bottom of the picker lets you create a task type and convert straight into it, as long as you have permission to create types.
- Click **Cancel** or close the picker to back out. Nothing changes and your selection stays active, so you can open the picker again.

> [!NOTE]
> If your selection spans more than one workspace in the same organization, the picker narrows to organization-level task types plus the default task type. Those are the only types that every selected task can use. **+ New Type** is hidden in this case, because a type created there would exist in only one of the workspaces.

The default task type is offered as a target only when your whole selection lives in a single list. For selections that span several lists, pick a named task type instead.

### Step 3: Map Fields (If the New Type Is Shaped Differently)

If the type you picked has a different shape than your tasks currently use, Slingshot opens a short mapping wizard so nothing is lost. The wizard has up to three steps and skips any that aren't needed:

1. **Custom Fields to Keep**. Choose which custom fields from the current task type should carry over.
2. **Status**. Match each status your tasks use to a status available in the new type.
3. **Priority**. Match each priority value the same way.

When you're converting several tasks at once, each step shows **one row per distinct value** across your whole selection, and that choice applies to every task using that value. The **Continue** button stays disabled until every row has a value assigned.

Use **Back** to revisit an earlier step, where your choices are kept, or close the wizard with **✕** to cancel the conversion entirely. Nothing is converted until you finish the wizard.

> [!NOTE]
> If the new task type already has the same fields, statuses, and priorities as your tasks, no mapping is needed and the conversion runs right away.

> [!IMPORTANT]
> **Slingshot Tip**: Subtasks of the tasks you're converting are mapped automatically. You won't see them as separate rows in the wizard. As long as the parent is being converted, its subtasks come along with the correct field mapping.

### Step 4: Convert Your Tasks

When you're ready, confirm the conversion. A **Converting Tasks** progress dialog shows the conversion running across your selected tasks. This dialog stays open until the conversion finishes; a conversion that's already underway can't be cancelled.

When the conversion completes:

- **Everything succeeded**. Your tasks show the new type right away, everywhere they appear, with their mapped statuses and priorities and the custom fields you chose to keep. A toast confirms how many tasks were converted, and multi-select turns off.
- **Some tasks couldn't be converted**. A **Convert Report** opens, the same report you'll see from other bulk actions like **Move**, listing each task that failed and why. From here you can:
  - **Retry Failed**. Re-runs the tasks that didn't make it, reusing the field mappings you already chose, so you're not asked to map anything again.
  - **Dismiss (✕)**. Closes the report. Your selection narrows down to just the tasks that still need attention.

## Why Convert To Might Be Unavailable

Some selections can't be converted as a group. When that's the case, the **Convert To** action shows a warning badge. Hover over it to see why.

| Situation | What it means |
|---|---|
| The selection includes more than one task type | Converting changes every selected task, so they all have to start from the same type. The tooltip reads *"All selected tasks must be the same task type."* This applies to named task types too, and to a named type mixed with the default type. |
| Tasks from workspaces in different organizations are selected | The tooltip reads *"Tasks can only be converted together when their workspaces are in the same organization."* Selections that span workspaces inside a single organization are fine; see Step 2. |
| You're not a member of one of the workspaces involved | The tooltip reads *"You can only convert tasks in a workspace you're a member of."* |
| Subtasks are selected without their parent task | The tooltip reads *"Subtasks can only be converted together with their parent task."* Add the parent to your selection, or convert the parent on its own and let the subtasks ride along. |
| The selection is over the 2,000-task limit | Trim your selection to 2,000 or fewer, then try again. |

> [!NOTE]
> Converting requires edit permission on the list. If you can only view a list, you won't be able to enter multi-select mode there at all.

## How Subtasks Are Handled

When you convert a parent task, its subtasks are converted along with it and keep their parent-child relationship, even if you didn't select the subtasks yourself. If you happen to select both a parent and one of its subtasks, the subtask still simply rides along with its parent; it isn't converted twice.

Selecting a subtask **without** its parent is blocked, because converting a subtask on its own would leave it out of step with the parent it belongs to. Add the parent to your selection to continue.

## Tips for Converting Tasks

- **Start from one type**. Filter or sort by task type before you select, so your whole selection resolves to a single starting type.
- **Nothing leaves its list**. Converting only changes the task type. If you also need the tasks somewhere else, use **Move** afterwards.
- **Match the shape to skip the wizard**. Converting into a type that already has the same fields, statuses, and priorities runs instantly, with no mapping.
- **Create the type as you go**. If none of the existing types fit, use **+ New Type** in the picker and convert into it in the same pass.
- **Use Retry for transient failures**. If a few tasks fail because of a temporary hiccup, **Retry Failed** re-runs them without making you set up the mapping again.
