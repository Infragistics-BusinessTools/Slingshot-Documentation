---
title: Importing Tasks from a CSV File
_description: Learn how to import tasks from a CSV file into Slingshot task lists, including column mapping, value matching, and subtask creation.
---

# Importing Tasks from a CSV File

With CSV task import, you can quickly move tasks from spreadsheets, other project management tools, or any source that exports to CSV directly into your Slingshot task lists. Slingshot automatically detects your column types and maps them to task fields, so you spend less time on setup and more time getting work done.

>[!Note]
>CSV import is available to **workspace owners** only. If you don't see the **Import** option, check with your workspace owner.

## How to Import Tasks

### Step 1: Start the Import

There are two ways to begin a CSV import:

- **From a task list** — Click/tap on the overflow menu of the task list and choose **Import**. This creates a new section called "Import" where your tasks will be added.
- **From a section** — Click/tap on the overflow menu of a specific section and choose **Import**. Your tasks will be added directly to that section.

>[!Note]
>If you import from the task list menu multiple times, each import creates a new section with an incremented name (e.g., "Import", "Import 2", "Import 3").

### Step 2: Upload Your File

After selecting **Import**, a file picker opens. Choose your `.csv` file and Slingshot will parse it automatically.

Your CSV file should follow these guidelines:

- The **first row** must contain your column headers (field names).
- Each subsequent row represents a task.
- Files can have up to **50 columns** and **2,000 rows**.

### Step 3: Review the Mapping Grid

Once your file is uploaded, Slingshot displays a **mapping grid** showing your CSV data organized by columns. Each column header shows:

- The **CSV column name** from your file
- An **icon** representing the detected field type
- A **dropdown** you can click/tap to change the field mapping

Slingshot automatically analyzes your data and maps each CSV column to the best matching task field. For example, a column named "Due Date" containing date values will be mapped to the **Due Date** field automatically.

#### What Slingshot Detects Automatically

| Data Pattern | Detected Field Type |
|---|---|
| "true" / "false" values | **Checkbox** |
| Date values | **Date** |
| Numbers between 0 and 5 | **Rating** |
| Numbers between 0 and 100 | **Manual Progress** |
| Other numbers | **Numeric** |
| Long text (over 255 characters) | **Long Text** |
| Short text with repeated values | **Dropdown** |
| Everything else | **Text** |

If a column doesn't match any existing field in your task list, Slingshot suggests creating a new custom field based on the data it finds. These suggested fields are only added to your task list when you confirm the import — nothing changes until you're ready.

>[!IMPORTANT]
>**Slingshot Tip**: If a column contains no data, Slingshot defaults it to **Text**, but you can manually change it to any supported field type using the column header dropdown.

#### Adjusting Column Mappings

You can change any column's mapping by clicking/tapping its header and selecting a different field from the dropdown. Your options include:

- **Existing task fields** — such as _Title_, _Status_, _Priority_, _Due Date_, _Assignee_, and any custom fields already in your task list.
- **Suggested new fields** — custom fields that Slingshot recommends based on your data.
- **Ignore** — skip this column entirely during import. Ignored columns appear dimmed in the grid.

#### Choosing a Task Type

The mapping grid includes a **task type selector** at the top. If your workspace uses multiple task types, you can switch between them to change which fields are available for mapping.

>[!IMPORTANT]
>Changing the task type resets all your column mappings. Your CSV data is preserved — only the field assignments are cleared so you can remap them to the new task type's fields.

### Step 4: Resolve Any Mismatches

If a column is mapped to a **Dropdown** or **Label** field and some of your CSV values don't match the existing options, a **warning icon** appears on that column header.

Click/tap the warning icon to open the **Value Mapping** dialog, where you can:

- **Map** unrecognized values to existing dropdown or label options
- **Add new options** — create new items with custom colors directly from the dialog using the color picker

Any new options you create here are only saved when you confirm the import. If you cancel, nothing changes in your existing fields.

### Step 5: Confirm and Import

Once you're satisfied with your mappings, click/tap **Apply Mapping** to start the import.

>[!Note]
>The **Apply Mapping** button is disabled until at least one column is mapped to the **Title** field. Every task needs a title, and the Title column must have a value in every row — columns with blank cells won't be available for Title.

If there are any unresolved dropdown or label mismatches, Slingshot walks you through the value mapping dialogs one at a time before proceeding.

## Tracking Import Progress

After you confirm the import, a **progress dialog** shows the status of your import in real time. You don't need to wait — close this dialog and continue working in Slingshot. A small **floating progress indicator** appears in the bottom-right corner of the screen so you can keep an eye on things.

When the import finishes:

- **All tasks imported successfully** — You'll see a summary with the total number of tasks created and a **Take me there** button to navigate directly to your task list.
- **Some tasks had errors** — The summary shows how many tasks succeeded along with the details for any rows that couldn't be imported.

>[!Note]
>Only one import can run at a time. If you try to start a new import while one is already in progress, Slingshot will let you know.

## Creating Subtasks During Import

You can set up parent-child relationships between tasks by including a **Parent Task Name** column in your CSV.

To create subtasks during import:

1. Map one of your CSV columns to the **Parent Task Name** field type.
2. In each row, enter the **exact title** of the parent task in this column.
3. Make sure the parent task appears **above** the child task in your CSV file.
4. Leave the **Parent Task Name** column empty for top-level tasks.

>[!Note]
>Only one level of subtask nesting is supported — a subtask cannot itself be a parent of another subtask.

**Example CSV:**

| Title | Status | Parent Task Name |
|---|---|---|
| Design Homepage | In Progress | |
| Create wireframes | To Do | Design Homepage |
| Choose color palette | To Do | Design Homepage |
| Build API | To Do | |

In this example, "Create wireframes" and "Choose color palette" become subtasks of "Design Homepage", while "Build API" remains a top-level task.

## Supported Fields

The following task fields can be populated through CSV import:

| Field | Notes |
|---|---|
| **Title** | **Required.** Every row must have a value. Exactly one column must be mapped to Title. |
| **Status** | Optional. If no column is mapped to Status, tasks default to **To Do**. |
| **Description** | Optional. |
| **Priority** | Optional. |
| **Due Date** | Optional. |
| **Start Date** | Optional. |
| **Assignee** | Optional. Supports multiple assignees separated by commas within a single cell. Names or emails are matched against workspace members. |
| **Labels** | Optional. |
| **Email** | Optional. Supports multiple emails separated by commas within a single cell. |
| **Phone** | Optional. |
| **People** | Optional. Supports multiple entries separated by commas. Unmatched names create invite-by-email members. |
| **Custom Fields** | _Text_, _Numeric_, _Date_, _Checkbox_, _Rating_, _Dropdown_, _Long Text_, _Manual Progress_ fields are all supported. |
| **Parent Task Name** | Optional. Establishes parent-child relationships (see above). |

>[!Note]
>Some fields cannot be populated through CSV import, including _Attachments_, _Time Tracking_, _Recurring_, _Created On_, and _Completed On_.

## Tips for a Smooth Import

- **Prepare your CSV** — Make sure your first row contains clear column headers. Slingshot uses these to auto-detect field mappings.
- **Keep titles filled in** — The _Title_ column cannot have any blank cells. Fill in any gaps before importing.
- **Use consistent dropdown values** — If you're importing into an existing dropdown field, match the option names in your CSV to avoid extra mapping steps.
- **Check your date formats** — Standard date formats are recognized automatically.
- **Use commas for multiple values** — For _Assignee_, _People_, and _Email_ fields, you can include multiple values in a single cell by separating them with commas (e.g., "alice@example.com, bob@example.com").
- **Split date ranges** — Date ranges aren't supported as a single field. Use separate _Start Date_ and _End Date_ columns instead.
