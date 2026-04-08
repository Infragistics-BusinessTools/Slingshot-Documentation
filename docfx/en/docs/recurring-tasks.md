# Recurring Tasks — Feature Specification & Test Plan

## 1. Overview

The recurring tasks feature allows users to configure automated task repetition on a flexible schedule. Users can set tasks to recur daily, weekly, monthly, yearly, or a specified number of days after completion. The configuration is done through a popup scheduler UI accessible from the document editor, where users define the trigger type, frequency, optional rules (specific weekdays, ordinal days, months), end conditions, and scheduling time.

---

## 2. Terminology

| Term | Definition |
|---|---|
| **Recurrence Schedule** | An `EMRecurrenceSchedule` — the persisted configuration that defines how and when a task repeats. Stored as a JSON object on the task document. |
| **Recurrence State** | An `EMRecurrenceState` — a mutable in-memory copy of the schedule that the user edits in the popup. Not persisted until Save is clicked. |
| **Trigger** | Determines what causes the next occurrence: **On Completion** (next occurrence is created when the current task is completed) or **On Schedule** (next occurrence is created at a fixed calendar interval regardless of completion). |
| **Frequency Type** | The repetition interval: Daily, Weekly, Monthly, Yearly, or Days After. |
| **Day Type** | For Monthly and Yearly frequencies, whether the rule targets a **Day of the Month** (e.g., the 15th) or a **Day of the Week** (e.g., the 2nd Tuesday). |
| **Ends Type** | When the recurrence stops: **Never**, **After X Times**, or **By Date**. |
| **Anchor Date** | A date field from the task's schema used as the reference point for scheduling (e.g., Due Date, Start Date). |
| **Remap** | An option to remap additional date fields on the task when the next occurrence is created. |
| **Cron Parts** | Internal parsed representation of the recurrence rule, used for comparison and change detection. |
| **Provider** | A stateless strategy object that encapsulates frequency-type-specific logic (header text, picker buttons, default values, change detection). |

---

## 3. Permissions

| Rule | Detail |
|---|---|
| **Any task editor** | Any user with edit access to the task document can configure or modify a recurrence schedule. |
| **View-only users** | The recurrence button is visible but the scheduler opens in read-only mode (Save/Delete disabled). |

---

## 4. Entry Point

The recurrence scheduler is accessed from the **document editor view** (`EMDocumentEditorView`). A recurrence button (with a repeating-arrows icon) is displayed in the editor toolbar. Clicking this button opens the recurrence scheduler popup.

| Rule | Detail |
|---|---|
| **Button visibility** | The recurrence button is shown when the document type supports recurrence (determined by `EMManager.ManagerForDocType`). |
| **Adorner icon** | When a recurrence schedule already exists on the document, the button displays an adorner icon indicating the active schedule. |
| **Opening the popup** | Clicking the button calls `manager.OpenRecurrenceScheduler(button, document, false, callback)`, which creates and presents the `EMRecurrenceScheduler` popup anchored to the button. |

---

## 5. Scheduler Popup UI

The scheduler popup presents a vertically scrollable list of configuration cells. Each cell controls one aspect of the recurrence rule. Cells are shown or hidden dynamically based on the current trigger type and frequency selection.

### 5.1 Cell Layout (Top to Bottom)

| # | Cell | Description | Visibility |
|---|---|---|---|
| 1 | **Trigger** | Picker: "On Completion" or "On Schedule". | Always visible. |
| 2 | **Frequency** | Picker: Daily, Weekly, Monthly, Yearly, or Days After. Also includes a numeric input for Days After count and secondary buttons for weekday selection (Weekly). | Always visible. |
| 3 | **Frequency Rule** | Sub-rule row for Monthly/Yearly: ordinal day picker, weekday picker, month picker. Number and type of buttons depends on frequency + day type. | Visible only for Monthly and Yearly frequencies. |
| 4 | **Include Weekends** | Checkbox: "Include weekends". | Visible only for Daily and Days After frequencies. |
| 5 | **At Time** | Time editor: the scheduled time of day for the recurrence. | Visible when trigger is "On Schedule". |
| 6 | **Ends Type** | Picker: "Never", "After X times", or "By date". | Always visible (schedule cell group). |
| 7 | **Ends After Count** | Numeric input: number of repetitions (max 365). | Visible only when Ends Type is "After X Times". |
| 8 | **Ends Repetition** | Read-only label: "X of Y repetitions completed". | Visible only when Ends Type is "After X Times" and repetitions have occurred. |
| 9 | **Ends By Date** | Date picker: the date after which no more occurrences are created. | Visible only when Ends Type is "By Date". |
| 10 | **Anchor Date** | Picker: selects which date field on the task schema to use as the scheduling anchor. | Always visible. |
| 11 | **Remap** | Checkbox: remap additional date fields on the next occurrence. | Always visible. |

### 5.2 Popup Actions

| Action | Behaviour |
|---|---|
| **Save** | Persists the current `EMRecurrenceState` back to the `EMRecurrenceSchedule` on the document. Only enabled when `HasChanges` is true and validation passes. |
| **Cancel** | Discards all edits. The `EMRecurrenceState` is thrown away; the persisted `EMRecurrenceSchedule` is unchanged. |
| **Delete** | Removes the recurrence schedule from the document entirely. Only shown when a schedule already exists. |

### 5.3 At Time Cell — Time Editor & UTC Label

The At Time cell provides a time entry editor and a right-footer label showing the equivalent UTC time.

| Element | Description |
|---|---|
| **Time editor** | An `EMTimeTrackingTimeEntryEditor` that accepts time input in the user's local time zone. Displays time in 12-hour or 24-hour format depending on the device's locale setting. |
| **UTC label** | A right-footer label beneath the time editor showing the UTC equivalent of the entered local time, formatted as `"(3:00 PM UTC)"`. Uses `CPDateTime.TimeOnlyString` for locale-aware formatting. |
| **Conversion** | Local time entered by the user is converted to UTC for storage via `CPDateTime`. UTC is converted back to local for display when loading an existing schedule. |

### 5.4 Ordinal Day Picker — Day of the Month

The ordinal day picker shows the days available for the selected context:

| Rule | Detail |
|---|---|
| **Monthly frequency** | Shows days 1–31. If the user selects a day that exceeds the selected month's length (Yearly only), it defaults to "Last Day". |
| **Yearly frequency** | Shows all days for the currently selected month (e.g., 1–28 for February, 1–31 for January). Only one "Last Day" entry appears at the end of the list. |
| **Last Day** | When the selected day exceeds the number of days in the selected month, the picker displays "Last Day" and stores the appropriate value. |
| **Month switching (Yearly)** | When the user changes the month, if the currently selected day exceeds the new month's day count, the selection automatically defaults to "Last Day". |

---

## 6. Frequency Types

### 6.1 Daily

| Setting | Value |
|---|---|
| **Header** | "Daily" |
| **Options** | Include Weekends checkbox (defaults to included). |
| **Rule cell** | Not shown. |
| **Change detection** | Compares `state.IncludeWeekends` to `recurrence.IncludeWeekends`. |

### 6.2 Weekly

| Setting | Value |
|---|---|
| **Header** | "Weekly" |
| **Options** | Multi-select weekday picker (Sunday through Saturday). Button text adapts responsively: full names → short names → abbreviated with "+N" overflow. |
| **Rule cell** | Not shown. |
| **Default** | The current day of the week is pre-selected. |
| **Change detection** | Compares `state.SelectedWeekdays` list against `recurrence.CronParts.Weekdays`. |

### 6.3 Monthly

Monthly supports two day-type variants:

| Day Type | Rule Cell Buttons | Example |
|---|---|---|
| **Day of the Month** | `[ordinal day]` — e.g., "15th" | Repeat monthly on the 15th. |
| **Day of the Week** | `[ordinal weekday, weekday]` — e.g., "2nd", "Tuesday" | Repeat monthly on the 2nd Tuesday. |

A day-type picker button allows switching between these variants.

### 6.4 Yearly

Yearly also supports two day-type variants:

| Day Type | Rule Cell Buttons | Example |
|---|---|---|
| **Day of the Month** | `[month, ordinal day]` — e.g., "March", "15th" | Repeat yearly on March 15th. |
| **Day of the Week** | `[ordinal weekday, weekday, month]` — e.g., "2nd", "Tuesday", "March" | Repeat yearly on the 2nd Tuesday of March. |

### 6.5 Days After

| Setting | Value |
|---|---|
| **Header** | "Days After" |
| **Numeric input** | Number of days (1–365). |
| **Options** | Include Weekends checkbox. |
| **Rule cell** | Not shown. |
| **Change detection** | Compares `state.DaysAfterCount` and `state.IncludeWeekends` against the persisted schedule, with early-out on validation error. |

---

## 7. Trigger Types

| Trigger | Constant | Behaviour |
|---|---|---|
| **On Completion** | `TriggerOnCompletion (0)` | The next occurrence is created when the user marks the current task as complete. The "At Time" cell is hidden. |
| **On Schedule** | `TriggerOnSchedule (1)` | The next occurrence is created automatically at the specified calendar interval, regardless of whether the current task is complete. The "At Time" cell is visible. |

---

## 8. End Conditions

| Ends Type | Constant | Behaviour |
|---|---|---|
| **Never** | `EndsNever (0)` | The recurrence continues indefinitely. No additional input needed. |
| **After X Times** | `EndsAfterXTimes (1)` | Stops after a specified number of repetitions. Shows the "Ends After Count" numeric input (max 365) and the "Ends Repetition" label. |
| **By Date** | `EndsByDate (2)` | Stops after a specified date. Shows the "Ends By Date" date picker. |

---

## 9. State Management

### 9.1 Initialization

When the scheduler popup opens:

1. If the document already has a recurrence schedule (`_hasRecurrence` is true), the state is created from the existing schedule via `EMRecurrenceState.CreateStateFromRecurrence(_recurrence)`.
2. If no recurrence exists, a default state is created via `EMRecurrenceState.CreateDefaultState()`.
3. If the schedule has no anchor date set, the state's anchor date is populated with the provided default anchor date ID.

### 9.2 Editing

All user interactions modify the `EMRecurrenceState` object in memory. The persisted `EMRecurrenceSchedule` is never modified during editing.

### 9.3 Change Detection

The scheduler's `HasChanges` property aggregates change detection across all cells:

- Trigger type change
- Frequency type/rule changes (delegated to the active provider's `HasChanges` method)
- Schedule-group cell changes (ends type, ends count, ends date, at-time)
- Anchor date change
- Remap flag change

Validation guards prevent saving invalid configurations (e.g., empty Days After count, zero Ends After count, null Ends By Date).

### 9.4 Save

On save, the edited state is written back to the `EMRecurrenceSchedule` JSON on the document. The scheduler popup is closed.

### 9.5 Cancel / Delete

Cancel discards the state object. Delete removes the recurrence JSON from the document entirely.

---

## 10. Error Handling

| Scenario | Behaviour |
|---|---|
| Invalid Days After count (empty or 0) | Save button disabled; inline validation. |
| Invalid Ends After count (empty or 0) | Save button disabled; inline validation. |
| Null Ends By Date when "By Date" is selected | Save button disabled. |
| No anchor date available in schema | Anchor date cell shows empty picker; user must select before saving. |
| No weekdays selected (Weekly) | At least one weekday must remain selected; deselecting all is prevented. |
| Network error on save | Save fails; user sees error notification. Schedule is not modified. |
| Concurrent edit conflict | If another user modified the document while the scheduler was open, the save overwrites with the latest state. |

---

## 11. Data Flow Summary

```
User clicks recurrence button in document editor
        │
        ▼
  EMManager.OpenRecurrenceScheduler()
        │
        ▼
  EMRecurrenceScheduler created
  ── LoadRecurrenceData: create EMRecurrenceState from existing schedule or defaults
  ── BuildRecurrenceUI: create popup chrome (header, scroll container, save/cancel/delete buttons)
  ── BuildCells: create all 11 cell instances, register in order
  ── BuildProviderLookup: create all 7 provider instances, set on each cell
  ── PopulateRecurrenceCellData: wire each cell with state + callbacks
        │
        ▼
  Popup displayed anchored to recurrence button
        │
        ▼
  User configures recurrence
  ── selects trigger type (On Completion / On Schedule)
  ── selects frequency (Daily / Weekly / Monthly / Yearly / Days After)
  ── configures frequency-specific rules (weekdays, ordinal day, month, etc.)
  ── sets end condition (Never / After X Times / By Date)
  ── selects anchor date field
  ── toggles remap option
        │
        ▼
  User clicks Save / Cancel / Delete
  ── Save: state written to EMRecurrenceSchedule JSON on document
  ── Cancel: state discarded, no changes persisted
  ── Delete: recurrence schedule removed from document
        │
        ▼
  Popup closed
```

---

## 12. Test Plan

### 12.1 Entry Point Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| E-01 | **Open scheduler — no existing recurrence** | Click recurrence button on a task with no recurrence. | Scheduler popup opens with default state (On Completion, Daily, Ends Never). |
| E-02 | **Open scheduler — existing recurrence** | Click recurrence button on a task that already has a daily recurrence. | Scheduler popup opens pre-populated with the saved configuration. |
| E-03 | **Adorner icon — recurrence exists** | View a task that has an active recurrence schedule. | The recurrence button displays the adorner icon indicating active recurrence. |
| E-04 | **Adorner icon — no recurrence** | View a task with no recurrence schedule. | The recurrence button has no adorner icon. |

### 12.2 Trigger Type Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| T-01 | **Select On Completion** | Open scheduler; select "On Completion" trigger. | Trigger is set. "At Time" cell is hidden. |
| T-02 | **Select On Schedule** | Open scheduler; select "On Schedule" trigger. | Trigger is set. "At Time" cell becomes visible. |
| T-03 | **Switch trigger type** | Start with On Schedule; switch to On Completion. | "At Time" cell hides. Trigger change is reflected in `HasChanges`. |

### 12.3 Frequency Type Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| F-01 | **Select Daily** | Select Daily frequency. | Header shows "Daily". Include Weekends checkbox visible. Rule cell hidden. |
| F-02 | **Select Weekly** | Select Weekly frequency. | Header shows "Weekly". Weekday picker button visible with current day pre-selected. Rule cell hidden. |
| F-03 | **Select Monthly — Day of the Month** | Select Monthly frequency, Day of the Month variant. | Rule cell shows 1 button: ordinal day picker (e.g., "15th"). |
| F-04 | **Select Monthly — Day of the Week** | Select Monthly frequency, Day of the Week variant. | Rule cell shows 2 buttons: ordinal weekday picker (e.g., "2nd") and weekday picker (e.g., "Tuesday"). |
| F-05 | **Select Yearly — Day of the Month** | Select Yearly frequency, Day of the Month variant. | Rule cell shows 2 buttons: month picker and ordinal day picker. |
| F-06 | **Select Yearly — Day of the Week** | Select Yearly frequency, Day of the Week variant. | Rule cell shows 3 buttons: ordinal weekday picker, weekday picker, month picker. |
| F-07 | **Select Days After** | Select Days After frequency. | Header shows "Days After". Numeric input visible (default 1). Include Weekends checkbox visible. Rule cell hidden. |
| F-08 | **Switch frequency type** | Change from Daily to Weekly to Monthly. | Each switch updates cells correctly; previous frequency-specific UI is replaced. |

### 12.4 Weekly Frequency Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| W-01 | **Default weekday selection** | Open scheduler; select Weekly. | Current day of the week is pre-selected in the weekday picker. |
| W-02 | **Select multiple weekdays** | Open weekday picker; select Monday, Wednesday, Friday. | All three days selected. Button text shows "Mon, Wed, Fri". |
| W-03 | **Responsive button text — overflow** | Select 5+ weekdays in a narrow layout. | Button text abbreviates: e.g., "Mon, Wed +3". |
| W-04 | **Deselect all weekdays** | Deselect all days in the weekday picker. | At least one day must remain selected (validation prevents empty selection). |
| W-05 | **Change detection — weekdays modified** | Change selected weekdays from saved configuration. | `HasChanges` returns true. Save button enabled. |

### 12.5 Monthly / Yearly Rule Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| R-01 | **Monthly DOM — change ordinal day** | Select Monthly DOM; pick "22nd" in the ordinal day picker. | Rule button updates to show "22nd". |
| R-02 | **Monthly DOW — change ordinal weekday** | Select Monthly DOW; pick "3rd" in ordinal picker. | First rule button updates to "3rd". |
| R-03 | **Monthly DOW — change weekday** | Select Monthly DOW; pick "Friday" in weekday picker. | Second rule button updates to "Friday". |
| R-04 | **Yearly DOM — change month** | Select Yearly DOM; pick "September" in month picker. | First rule button updates to "September". |
| R-05 | **Yearly DOM — change ordinal day** | Select Yearly DOM; pick "1st" in ordinal day picker. | Second rule button updates to "1st". |
| R-06 | **Yearly DOW — all three pickers** | Select Yearly DOW; change ordinal weekday, weekday, and month. | All three rule buttons update to reflect selections. |
| R-07 | **Switch day type — Monthly** | Switch Monthly from Day of the Month to Day of the Week. | Rule cell buttons change from 1 to 2. Default values are populated. |
| R-08 | **Switch day type — Yearly** | Switch Yearly from Day of the Month to Day of the Week. | Rule cell buttons change from 2 to 3. Default values are populated. |
| R-09 | **Default ordinal day** | Open Monthly DOM for the first time. | Ordinal day defaults to the current day of the month (or nearest valid). |
| R-10 | **Last day options** | Open Monthly DOM ordinal picker. | "Last" (or "Last Day") option is available in the ordinal picker list. |

### 12.6 Days After Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| DA-01 | **Set days after count** | Select Days After; type "14" in numeric input. | Count updated to 14. |
| DA-02 | **Max days after count** | Type "400" in numeric input. | Value clamped or rejected; max is 365. |
| DA-03 | **Empty days after count** | Clear the numeric input. | Save button disabled (validation error). |
| DA-04 | **Include weekends toggle** | Toggle the Include Weekends checkbox. | `HasChanges` reflects the change. |

### 12.7 End Condition Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| EC-01 | **Select Ends Never** | Select "Never" in the ends type picker. | Ends After Count and Ends By Date cells hidden. |
| EC-02 | **Select Ends After X Times** | Select "After X Times" in the ends type picker. | Ends After Count numeric input visible. Ends Repetition label visible (if applicable). |
| EC-03 | **Set ends after count** | Select After X Times; enter "10". | Count set to 10. |
| EC-04 | **Max ends after count** | Enter "365" in the ends after count. | Accepted (max is 365). |
| EC-05 | **Empty ends after count** | Clear the ends after count input. | Save button disabled (validation error). |
| EC-06 | **Select Ends By Date** | Select "By Date" in the ends type picker. | Date picker cell visible. |
| EC-07 | **Set ends by date** | Pick a future date in the date picker. | Date stored in state. |
| EC-08 | **Null ends by date** | Select "By Date" but do not pick a date. | Save button disabled. |
| EC-09 | **Ends repetition display** | Set After X Times = 5; task has completed 2 repetitions. | Label shows "2 of 5 repetitions". |

### 12.8 Anchor Date & Remap Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| A-01 | **Default anchor date** | Open scheduler for a task with a Due Date field. | Anchor date defaults to the Due Date field. |
| A-02 | **Change anchor date** | Pick a different date field (e.g., Start Date) from the anchor picker. | Anchor date updated in state. `HasChanges` returns true. |
| A-03 | **Remap toggle** | Toggle the Remap checkbox. | `HasChanges` returns true. |
| A-04 | **Schema with no date fields** | Open scheduler for a task whose schema has no date-type fields. | Anchor date picker is empty; user cannot configure a valid schedule. |

### 12.9 Save / Cancel / Delete Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| SC-01 | **Save with changes** | Modify the frequency type and click Save. | Schedule is persisted to the document. Popup closes. |
| SC-02 | **Save button disabled — no changes** | Open scheduler without modifying anything. | Save button is disabled. |
| SC-03 | **Save button disabled — validation error** | Set Days After with empty count; click Save. | Save button disabled. |
| SC-04 | **Cancel discards changes** | Modify several fields then click Cancel. | No changes persisted. Reopening the scheduler shows the original configuration. |
| SC-05 | **Delete existing recurrence** | Open scheduler on a task with a recurrence; click Delete. | Recurrence schedule removed from document. Adorner icon disappears. |
| SC-06 | **Delete — no existing recurrence** | Open scheduler on a task with no recurrence. | Delete button is not shown. |

### 12.10 Visibility & Cell Group Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| V-01 | **Frequency group — switching to Daily** | Switch from Weekly to Daily. | Weekday picker hides. Include Weekends appears. Rule cell hides. |
| V-02 | **Frequency group — switching to Monthly** | Switch from Daily to Monthly. | Include Weekends hides. Rule cell appears with appropriate buttons. |
| V-03 | **Schedule group — On Completion** | Set trigger to On Completion. | At Time cell hidden. Ends type, anchor date, remap visible. |
| V-04 | **Schedule group — On Schedule** | Set trigger to On Schedule. | At Time cell visible along with ends type, anchor date, remap. |
| V-05 | **Ends type group — Never** | Select Ends Never. | Ends After Count, Ends Repetition, Ends By Date all hidden. |
| V-06 | **Ends type group — After X Times** | Select Ends After X Times. | Ends After Count visible. Ends By Date hidden. |
| V-07 | **Ends type group — By Date** | Select Ends By Date. | Ends By Date visible. Ends After Count and Ends Repetition hidden. |

### 12.11 Change Detection Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| CD-01 | **No changes — save disabled** | Open scheduler, make no changes. | `HasChanges` is false. Save button disabled. |
| CD-02 | **Trigger change detected** | Change trigger from On Completion to On Schedule. | `HasChanges` returns true. |
| CD-03 | **Frequency type change detected** | Change frequency from Daily to Weekly. | `HasChanges` returns true. |
| CD-04 | **Day type change detected** | Switch Monthly from Day of the Month to Day of the Week. | `HasChanges` returns true. |
| CD-05 | **Ends type change detected** | Change ends type from Never to After X Times. | `HasChanges` returns true. |
| CD-06 | **Anchor date change detected** | Change anchor date from Due Date to Start Date. | `HasChanges` returns true. |
| CD-07 | **Revert to original — save disabled** | Change frequency, then change it back to original. | `HasChanges` returns false. Save button disabled. |

### 12.12 At Time & UTC Label Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| AT-01 | **At Time cell visible on On Schedule** | Set trigger to On Schedule. | At Time cell is visible with time editor and UTC label. |
| AT-02 | **At Time cell hidden on On Completion** | Set trigger to On Completion. | At Time cell is hidden. |
| AT-03 | **UTC label shows correct UTC equivalent** | Set local time to 3:00 PM (UTC-5 timezone). | UTC label displays "(8:00 PM UTC)". |
| AT-04 | **UTC label updates on time change** | Change local time from 9:00 AM to 2:00 PM. | UTC label updates immediately to reflect the new UTC equivalent. |
| AT-05 | **12-hour format display** | Open At Time on a device with 12-hour locale setting. | Time displayed as "3:00 PM". UTC label also uses 12-hour format. |
| AT-06 | **24-hour format display** | Open At Time on a device with 24-hour locale setting. | Time displayed as "15:00". UTC label also uses 24-hour format. |
| AT-07 | **Boundary — midnight (00:00)** | Set local time to 00:00. | Accepted. UTC label shows correct UTC equivalent. |
| AT-08 | **Boundary — 23:59** | Set local time to 23:59. | Accepted. UTC label shows correct UTC equivalent. |
| AT-09 | **Load existing schedule time** | Open scheduler for a task with existing At Time = 14:00 UTC. | Time editor shows the local equivalent of 14:00 UTC. UTC label shows "(2:00 PM UTC)". |
| AT-10 | **AM/PM toggle** | In 12-hour mode, toggle AM ↔ PM. | Time and UTC label update correctly. |

### 12.13 Ordinal Day & Month Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| OD-01 | **Monthly — ordinal day picker shows 1–31** | Select Monthly DOM; open ordinal day picker. | Picker shows days 1 through 31 plus "Last Day". |
| OD-02 | **Yearly Feb — ordinal day picker shows 1–28** | Select Yearly DOM; set month to February; open ordinal day picker. | Picker shows days 1 through 28 plus "Last Day". |
| OD-03 | **Yearly — switch month with high day** | Select Yearly DOM; set day to 31, then switch month to February. | Day automatically defaults to "Last Day". |
| OD-04 | **Yearly — switch month with valid day** | Select Yearly DOM; set day to 15, then switch month to February. | Day remains 15. |
| OD-05 | **Last Day selection** | Select Monthly DOM; pick "Last Day" from ordinal picker. | Button shows "Last Day". State stores the appropriate value. |
| OD-06 | **Yearly — month picker shows all 12 months** | Select Yearly; open month picker. | All 12 months listed in order. |

### 12.14 Permission Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| P-01 | **Editor opens scheduler** | User with edit access clicks recurrence button. | Scheduler opens in edit mode. Save/Delete enabled. |
| P-02 | **View-only user opens scheduler** | User with view-only access clicks recurrence button. | Scheduler opens in read-only mode. Save/Delete disabled. |

### 12.15 Layout & Responsive Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| L-01 | **Cell layout on wide screen** | Open scheduler on a wide window/screen. | All cells have header and content side-by-side (non-stacked). |
| L-02 | **Cell layout on narrow screen** | Open scheduler on a narrow window/screen (below stacking threshold). | Cells stack: header on top, content below with correct padding. |
| L-03 | **Right footer label positioning** | Open At Time cell on a wide screen. | UTC label appears as a right-footer below the time editor, right-aligned. |
| L-04 | **Weekly button text responsive overflow** | Select Weekly with 5+ weekdays on a narrow screen. | Button text abbreviates with "+N" overflow indicator. |
| L-05 | **Scroll container with all cells visible** | Set On Schedule, Monthly, Ends After X Times. | All relevant cells visible in the scroll container; user can scroll to all of them. |

### 12.16 Edge Case & Robustness Tests

| ID | Test Case | Steps | Expected Result |
|---|---|---|---|
| EG-01 | **Rapid frequency switching** | Quickly cycle through all 5 frequency types. | UI updates correctly each time; no stale state or visual glitches. |
| EG-02 | **Open scheduler twice** | Open, cancel, then immediately reopen the scheduler. | Fresh state loaded from the persisted schedule each time. |
| EG-03 | **Monthly DOW — default weekday on first open** | Select Monthly DOW for the first time (no prior config). | Default weekday is populated (current day of week). |
| EG-04 | **Yearly — month validation** | Select Yearly; try to set ordinal day to 31 with month = February. | System handles gracefully (defaults to last valid day or shows "Last"). |
| EG-05 | **Large Ends After count** | Set Ends After X Times to 365. | Accepted. |
| EG-06 | **Network error during save** | Simulate a network failure while saving a recurrence. | Save fails; error notification shown. Schedule is not modified. |
| EG-07 | **Scheduler popup closed externally** | Open scheduler; click outside the popup to close it. | Popup closes; no changes persisted (same as Cancel). |

---

## 13. Acceptance Criteria

1. Users can open the recurrence scheduler from the document editor via the recurrence button.
2. The scheduler popup displays all relevant cells based on the current trigger type and frequency selection.
3. Users can select any of the 5 frequency types (Daily, Weekly, Monthly, Yearly, Days After) and configure the associated rules.
4. Weekly frequency provides a multi-select weekday picker with responsive text overflow.
5. Monthly and Yearly frequencies support both Day of the Month and Day of the Week variants with appropriate picker buttons.
6. Users can set the trigger to On Completion or On Schedule (which reveals the At Time editor).
7. Users can set end conditions to Never, After X Times (with count input), or By Date (with date picker).
8. The anchor date picker lists all date-type fields from the task schema.
9. The remap checkbox allows toggling additional date field remapping.
10. The Save button is only enabled when there are valid changes (validation passes and `HasChanges` is true).
11. Cancel discards all in-memory edits without modifying the persisted schedule.
12. Delete removes the recurrence schedule from the document entirely.
13. Adorner icon on the recurrence button reflects whether an active schedule exists.
14. Cell visibility toggles correctly when switching trigger types, frequency types, day types, and end conditions.
15. Change detection accurately identifies modifications across all configurable fields.
16. Default values are populated sensibly when a frequency type or day type is selected for the first time (current day of week, current day of month, current month).

---
---

# Architecture & Developer Reference

> **Everything below this line is internal developer documentation.** The sections above describe the feature from a product and testing perspective. The sections below detail the code architecture, class responsibilities, and conventions for developers working on the recurrence codebase.

---

## Overview

The recurrence feature follows a **provider pattern** where each frequency type is encapsulated in its own stateless provider class, keeping cells as thin UI orchestrators. Providers are created per-scheduler instance (not static) to avoid translation issues.

---

## Key Concepts

- **Recurrence Cells:** UI components (views) representing different parts of a recurrence rule. Each cell owns its views and delegates type-specific logic to a provider when one exists. Cells that have no type variation are self-contained.
- **Providers:** Stateless strategy objects that encapsulate all type-specific logic for each frequency type (header text, button lists, click handling, change detection, defaults). State is passed via method parameters — providers never store state. Providers are instantiated by the scheduler and passed to cells via a lookup dictionary.
- **State (`EMRecurrenceState`):** Mutable object holding the current configuration of the recurrence as the user edits it.
- **Schedule (`EMRecurrenceSchedule`):** The persisted/saved recurrence data. Used as the baseline for change detection.
- **Scheduler (`EMRecurrenceScheduler`):** Top-level orchestrator that creates all cells, builds and distributes providers, manages popup lifecycle, cell visibility groups, save/cancel, and aggregates change detection.

---

## Layered Architecture

```
EMRecurrenceScheduler           ← Top-level orchestrator (popup, layout, save/cancel, provider creation)
  └─ EMRecurrenceCell subclasses  ← UI layer (views, buttons, layout, visibility)
      └─ EMRecurrenceProvider         ← Logic layer (stateless: header text, button lists, pickers, change detection)
            └─ EMRecurrenceState  ← Model layer (mutable editing state)
            └─ EMRecurrenceSchedule ← Model layer (persisted baseline)
```

**Separation summary:**
- **Scheduler** — creates cells, builds provider lookup, wires callbacks, manages popup, aggregates `HasChanges`. No business logic.
- **Cells** — own views (labels, buttons, checkboxes, numeric textboxes, time editors). Delegate type-specific logic to providers. Handle visibility and layout. Receive the provider lookup via `SetProviderLookup()`.
- **Providers** — contain all frequency-type-specific logic. Interact with the popup system to show pickers (ordinal day, weekday, month, day type). No view ownership or layout. Instance-based — no static members.
- **State/Schedule** — pure data. State is the mutable editing copy; Schedule is the persisted baseline.

---

## All Cell Types

### Cells WITH providers (frequency-type-varying behavior)

| Cell | Provider | Purpose |
|------|----------|---------|
| `EMRecurrenceFrequencyCell` | Resolved via cell's `Provider` property (instance-based lookup) | Main frequency picker (Daily/Weekly/Monthly/Yearly/DaysAfter). Delegates button lists, click handling, numeric textbox config, change detection, and button text updates to the provider. |
| `EMRecurrenceFrequencyRuleCell` | Same provider as above | Sub-rule row for Monthly/Yearly (ordinal day, weekday, month pickers). Thin orchestrator: calls `provider.EnsureDefaultValues()`, `provider.BuildButtonTextList()`, `provider.HandleChildButtonClick()`. ~130 lines. |

### Cells WITHOUT providers (fixed behavior, no type variation)

| Cell | Purpose | Why no provider needed |
|------|---------|----------------------|
| `EMRecurrenceTriggerCell` | Picker: OnCompletion / OnSchedule | Only 2 fixed options, name resolver, no type-varying logic |
| `EMRecurrenceEndsTypeCell` | Picker: Never / AfterXTimes / ByDate | Only 3 fixed options, name resolver, no type-varying logic |
| `EMRecurrenceIncludeWeekendsCell` | Checkbox: include weekends | Single checkbox, visibility conditional (Daily/DaysAfter only) |
| `EMRecurrenceEndsAfterCountCell` | Numeric input: ends after X times | Single textbox with max=365, visibility conditional (EndsAfterXTimes only) |
| `EMRecurrenceEndsByDateCell` | Date picker: ends by date | Single date picker button, visibility conditional (EndsByDate only) |
| `EMRecurrenceAtTimeCell` | Time editor: schedule at time | Single time editor, visibility managed by scheduler |
| `EMRecurrenceRemapCell` | Checkbox: remap additional dates | Single checkbox |
| `EMRecurrenceAnchorDateCell` | Picker: anchor date field from schema | Schema-driven picker, data comes from `EMDocumentSchema`, self-contained name resolution via `_anchorDateLookup` |
| `EMRecurrenceEndsRepetitionCell` | Read-only label: "X of Y repetitions" | Display-only, no user interaction |

---

## Provider Architecture

### Provider Lifecycle

Providers are **instance-based**, created by the scheduler's `BuildProviderLookup()` method each time a scheduler is instantiated. This avoids static constructors and static state, which cause issues in the translation layer (C# → Obj-C / Java / JS).

The scheduler creates all 7 provider instances, stores them in a `CPDictionary` keyed by `"frequencyType_dayType"`, and distributes the lookup to every cell via `cell.SetProviderLookup(providerLookup)`. Each cell resolves its active provider through the `Provider` property using `ResolveProviderKey(state.FrequencyType, state.FrequencyDayType)`.

### `EMRecurrenceProvider` (abstract base)

The base class provides:

- **Instance list builders:** `FrequencyTypesList()`, `DayTypesList()` — ordered lists for picker popups.
- **Instance name resolution:** `HeaderTextForFrequencyType(int frequencyType)` — single source of truth for frequency display names (protected, called via inheritance).
- **Virtual methods** — `BuildButtonTextList`, `BuildLabelList`, `HandleSecondaryButtonClick`, `HandleChildButtonClick`, `HandleButtonTextUpdate`, `RefreshButtonText`, `EnsureDefaultValues`, numeric textbox properties. All default to no-op or null.
- **Abstract:** `HeaderText` (get), `HasChanges(EMRecurrenceState state, EMRecurrenceSchedule recurrence, bool hasInvalidError)`.
- **Primary button click:** `HandleButtonClick()` always shows the frequency-type picker popup (shared across all providers). Only the secondary button (index > 0) is dispatched to `HandleSecondaryButtonClick()` which is overridden per provider.

### Concrete Providers

#### `EMRecurrenceProviderDaily`
- **Minimal.** Returns `HeaderText` ("Daily"). `HasChanges` compares `state.IncludeWeekends` to `recurrence.IncludeWeekends`.
- No secondary button, no child buttons, no numeric textbox.

#### `EMRecurrenceProviderWeekly`
- Handles **Weekly** frequency.
- Shared instance is passed to `EMRecurrenceProviderCalendar` constructors for weekday utility access (name resolution, default weekday index).
- **Weekday multi-select:** `HandleSecondaryButtonClick` shows a multi-select weekday picker. `HandleButtonTextUpdate` / `RefreshButtonText` manage responsive button text (full name → short name → "Mon, Tue +2" → abbreviated).
- **Weekday utilities:** `ResolveWeekdayName`, `ResolveDefaultWeekdayIndex`, `ResolveWeekdayForIndex`, `WeekdayCount`. Used by both this provider and `EMRecurrenceProviderCalendar`.
- **Caching:** `_weekdayTextBlockList` (per-cell button text blocks, lazy-initialized).
- `HasChanges` compares `state.SelectedWeekdays` list against `recurrence.CronParts.Weekdays`.

#### `EMRecurrenceProviderCalendar`
- Handles **Monthly** and **Yearly** frequencies (both DayOfTheMonth and DayOfTheWeek variants).
- **4 instances** created in `BuildProviderLookup()`, each parameterized with `(frequencyType, dayType, childHeaderText, weeklyProvider)`.
- **Constructor wiring:** Based on `_dayType` and `_frequencyType`, the constructor populates two parallel `CPList` fields:
  - `_resolveTextBlockList` — `TwoObjectsBlock` lambdas that resolve button text from state (e.g., ordinal day name, weekday name, month name).
  - `_clickHandlers` — `DoubleObjectBlock` lambdas that open the appropriate picker popup.
  - Button index in the rule cell maps directly to the same index in both lists. `HandleChildButtonClick` dispatches to `_clickHandlers[buttonIndex]` — no branching needed.
- **Configurations:**
  - Monthly DOM: `[ordinalDay]` — 1 button
  - Monthly DOW: `[ordinalWeekday, weekday]` — 2 buttons  
  - Yearly DOM: `[month, ordinalDay]` — 2 buttons
  - Yearly DOW: `[ordinalWeekday, weekday, month]` — 3 buttons
- **Rule logic regions:** Ordinal Day picker, Weekday picker (delegates to the injected `_weeklyProvider` for name resolution), Month picker, Date Helpers.
- **Default values:** `EnsureDefaultValues` ensures state has valid ordinal day/weekday/month before building buttons. Branches on `_dayType` (DayOfTheMonth vs DayOfTheWeek) and `_frequencyType` (for yearly month validation).
- **HasChanges:** Uses if/else chain on `_frequencyType` and `_dayType` to compare the relevant state fields against `recurrence.CronParts`. Early-out if `recurrence.DayType != _dayType` (day type switch alone constitutes a change).
- **Additional fields:** `_ordinalWeekList` (1st/2nd/3rd/4th), `_orderedMonthLookup` (month index → name), `_lastDayName` (localized "Last" or "Last Day").

#### `EMRecurrenceProviderDaysAfter`
- Handles **DaysAfter** frequency.
- `HasNumericTextbox = true`, `MaxNumericInputValue = 365`.
- `HasChanges` checks `state.DaysAfterCount != recurrence.DaysAfterCount || state.IncludeWeekends != recurrence.IncludeWeekends`, with early-out on `hasInvalidError`.

---

## Scheduler (`EMRecurrenceScheduler`)

- Creates all 11 cells in `BuildCells()`, registers them in order via `RegisterCell()`.
- **Provider creation:** After registering all cells, calls `BuildProviderLookup()` to create all 7 provider instances. The weekly provider is created once and shared with all 4 calendar provider instances. The lookup dictionary is then set on every cell via `cell.SetProviderLookup(providerLookup)`.
- **Initialization flow:** `LoadRecurrenceData` → `BuildRecurrenceUI` → `PopulateRecurrenceCellData` — creates state, builds UI chrome (header, scroll, buttons), then wires each cell with state + callbacks.
- **Cell groups:** Cells belong to groups (`FrequencyCellGroup`, `ScheduleCellGroup`, or `NoGroup`). `CellChanged(group)` → `ShowCellGroup(group)` iterates cells in that group, calling `UpdateGroupVisibility()` and `UpdateGroupCell()`.
- **Change detection:** `HasChanges` property aggregates: trigger change, frequency changes (`_frequencyCell.HasFrequencyChanges`), schedule group changes (`HasScheduleGroupChanges()`), anchor date change, remap change. Includes validation guards (invalid DaysAfter, invalid EndsAfterCount, null EndsByDate).
- **Static helpers:** `ConvertTimeToSeconds`, `GetHoursFromSeconds`, `GetMinutesFromSeconds` — time conversion utilities used by `EMRecurrenceAtTimeCell`.
- **Popup management:** Implements `CPPopupViewDelegate` and `CPPopupCloseDelegate` for popup lifecycle.

---

## How Type Logic is Dispatched

- The cell's `Provider` property resolves the correct provider from `_providerLookup` using `ResolveProviderKey(_state.FrequencyType, _state.FrequencyDayType)`. The key normalizes Daily/Weekly/DaysAfter to `DayOfTheMonth`, and preserves the actual day type for Monthly/Yearly.
- The frequency cell delegates to the provider for: button text lists, label lists, secondary button click handling, numeric textbox config, button text updates, and change detection.
- The rule cell delegates to the provider for: default value initialization, child button text lists, and child button click dispatch.
- For Monthly/Yearly, `HandleChildButtonClick` dispatches to `_clickHandlers[buttonIndex]` — each handler is a `DoubleObjectBlock` lambda wired in the constructor that opens the appropriate picker. No branching on button index.
- For Weekly, `HandleSecondaryButtonClick` opens the multi-select weekday picker. `RefreshButtonText` manages responsive weekday button text via `_weekdayTextBlockList`.

---

## Efficiency

- **Instance provider lookup** — all 7 providers created once per scheduler instance, looked up by key. No static state.
- **Weekday list cache** — built once per weekly provider instance, shared across all weekday operations.
- **Recycle view utility** — button views are recycled, not recreated.
- **Lazy initialization** — `_weekdayTextBlockList` in `EMRecurrenceProviderWeekly` built on first `RefreshButtonText` call.
- **No unnecessary allocations in hot paths.** `HasChanges` does simple field comparisons.
- **Minor note:** `FrequencyTypesList()` and `DayTypesList()` create new `CPList` instances on each call, but they are only called when the user opens a picker popup — not a hot path.

---

## Extensibility

- **To add a new simple frequency type:** Create a new `EMRecurrenceProvider` subclass, add it to `BuildProviderLookup()` in `EMRecurrenceScheduler`, and add it to `FrequencyTypesList()`.
- **To add a new Monthly/Yearly picker button:** Add a `TwoObjectsBlock` (text resolver) and `DoubleObjectBlock` (click handler) to the constructor's `_resolveTextBlockList` and `_clickHandlers` lists in `EMRecurrenceProviderCalendar`. The rule cell will automatically render the additional button.
- **To add a new Monthly/Yearly configuration variant:** Add a new `EMRecurrenceProviderCalendar` construction call in `BuildProviderLookup()` with the desired `(frequencyType, dayType, childHeaderText, weeklyProvider)`, and add a `HasChanges` branch.
- **To add a new ends type:** Add the constant to `EMRecurrenceSchedule`, add it to the inline list in `EMRecurrenceEndsTypeCell.ScheduleEndsButtonClicked`, add a branch in `ResolveEndsTypeText`, and create the corresponding conditional cell if needed.
- No changes to existing cell UI logic are needed for frequency type additions.

---

## Source Files

Whenever making changes to the recurrence feature, always review and update the following files:

### Provider Files
- `EMRecurrenceProvider.cs` — Abstract base provider class
- `EMRecurrenceProviderDaily.cs` — Daily frequency provider
- `EMRecurrenceProviderWeekly.cs` — Weekly frequency provider (weekday selection + utilities)
- `EMRecurrenceProviderCalendar.cs` — Monthly/Yearly provider (4 instances, parameterized)
- `EMRecurrenceProviderDaysAfter.cs` — Days After frequency provider

### Cell Files
- `EMRecurrenceCell.cs` — Abstract base cell (views, layout, recycling, group visibility, provider lookup)
- `EMRecurrenceFrequencyCell.cs` — Main frequency picker (uses provider)
- `EMRecurrenceFrequencyRuleCell.cs` — Monthly/Yearly sub-rules (uses provider)
- `EMRecurrenceEndsTypeCell.cs` — Ends type picker (self-contained)
- `EMRecurrenceTriggerCell.cs` — Trigger type picker (self-contained)
- `EMRecurrenceIncludeWeekendsCell.cs` — Include weekends checkbox (self-contained)
- `EMRecurrenceEndsAfterCountCell.cs` — Ends after count input (self-contained)
- `EMRecurrenceEndsByDateCell.cs` — Ends by date picker (self-contained)
- `EMRecurrenceAtTimeCell.cs` — At time editor (self-contained)
- `EMRecurrenceRemapCell.cs` — Remap checkbox (self-contained)
- `EMRecurrenceAnchorDateCell.cs` — Anchor date picker (self-contained)
- `EMRecurrenceEndsRepetitionCell.cs` — Repetitions label (self-contained)

### Orchestrator
- `EMRecurrenceScheduler.cs` — Top-level orchestrator (popup, layout, save/cancel, cell wiring, provider creation)

### Model
- `EMRecurrenceState.cs` — Mutable editing state
- `EMRecurrenceSchedule.cs` — Persisted recurrence data + constants

### Reference Documentation
- `AGENTS.md` (root of Shared folder): Always review for codebase-wide conventions, translation model, and agent guidelines before making changes to recurrence or any other feature.

> **Always update this list if new recurrence-related files are added or removed.**