---
name: data-source-docs
description: Create or update Slingshot (Analytics) data-source connector documentation in the Slingshot-Documentation DocFX repository. Use this whenever the user asks to add a new connector topic under supported-data-sources, document a new data source based on existing ones, keep the data-sources toc.yml / overview list in sync, or mirror a connector page into the Japanese (and, when present, Korean) locale. This skill is especially relevant for work touching docfx/en/docs/analytics/datasources/supported-data-sources, the datasources overview page, or the localized docfx/jp trees — even if the user does not explicitly say "skill" or "workflow."
---

# Slingshot data-source connector docs

Create connector documentation by following the patterns already used by the Slingshot connector topics in this DocFX repository. Prefer consistency with the nearest existing connector page over inventing a new structure. Slingshot uses **DocFX**, not Docusaurus — HTML `<img>` tags, `>[!NOTE]` callouts, and `toc.yml` navigation, not MDX/JSX or `sidebars.ts`.

## What this skill covers

Use this skill for work such as:

- adding a new connector page under `docfx/en/docs/analytics/datasources/supported-data-sources/`
- choosing the closest existing connector page as a template
- keeping the companion files (`toc.yml`, `overview.md`) in sync
- creating the Japanese localized topic under `docfx/jp/...` (and Korean under `docfx/kr/...` **only if that tree exists**)
- mirroring screenshot assets into each locale's `images` folder
- fixing broken links/anchors or DocFX xref problems found during the build

## Repository map

- English topic: `docfx/en/docs/analytics/datasources/supported-data-sources/<data-source>.md`
- Connector nav: `docfx/en/docs/analytics/datasources/supported-data-sources/toc.yml`
- Data Sources overview (link list): `docfx/en/docs/analytics/datasources/overview.md`
- Connector screenshots: `docfx/en/docs/analytics/datasources/supported-data-sources/images/`
- Japanese mirror: `docfx/jp/docs/analytics/datasources/supported-data-sources/` (same file names)
- Korean mirror: `docfx/kr/docs/analytics/datasources/supported-data-sources/` — **verify it exists before writing to it.** The README mentions `kr`, but the repo may only ship `en` and `jp`. Do not fabricate a `kr` tree.

## Default workflow

Follow this sequence unless the user narrows the scope.

1. Inspect the closest matching English connector topics first.
2. Draft the new English topic.
3. Update the companion files (`toc.yml`, `overview.md`).
4. Create the Japanese localized page and its `toc.yml` entry (Korean too, only if that locale exists).
5. Mirror screenshots into each locale's `images` folder.
6. Build the docs and fix any broken links, anchors, or hrefs.

A new connector page is rarely complete in isolation — the nav and overview list must stay coherent with it.

## Step 1: choose the right templates

Before editing, pick the closest reference page(s) by **connector shape**:

- **Relational / server database** (Server, Port, Credentials → pick database → pick table/view): `postgresql.md`, `mysql.md`, `mariadb.md`, `snowflake.md`, `oracle.md`, `sybase.md`, `clickhouse.md`, `redshift.md`, `athena.md`, `azure-sql.md`
- **Analytics platform with token / OAuth machine-to-machine** (Client ID / Client Secret, HTTP Path): `databricks.md`
- **Interactive OAuth cloud / marketing / social** (provider login popup → allow → pick account/resource, often a date-range filter): `google-ads.md`, `google-analytics4.md`, `facebook-ads.md`, `instagram.md`, `linkedin.md`, `hubspot.md`, `salesforce.md`, `youtube.md`
- **File / cloud storage**: `box.md`, `dropbox.md`, `onedrive.md`, `google-drive.md`, `sharepoint.md`
- **Endpoint / feed**: `rest-api.md`, `odata-feed.md`, `web-resource.md`

Pick one **primary template** (structure, section order, tone) and, when needed, one **secondary template** for a special capability (server-info tables, custom queries/functions, OAuth flow, date-range filter). Use the minimum set needed to stay consistent. `clickhouse.md` is the newest relational page and is a good style reference for current conventions (frontmatter + `>[!NOTE]` Web limitation).

## Step 2: draft the English topic

Create the page at `docfx/en/docs/analytics/datasources/supported-data-sources/<data-source>.md`.

Mirror the section flow of the chosen template. Current relational connectors typically use:

1. Frontmatter (`title`, `_description`)
2. `# <Data source name>` H1
3. Short intro sentence describing the connector and what it enables
4. Optional `>[!NOTE]` **Limitations in Web** callout (reuse the wording from `postgresql.md` / `clickhouse.md` when the same Web restriction applies)
5. `## Connecting to <name>` — numbered steps for Server / Port / Credentials (Username, Password, Alias), ending with **Add Server**
6. Optional `## How to find your Server Information` (Windows/Linux/Mac table) for server databases
7. `## Setting Up Your Data` (or `## Configuring a <name> Data Source`) — select database, table/view, functions
8. `## Working in the Visualization Editor`
9. Optional trailing sections: `## Performance Considerations`, `## Limitations ...`

OAuth/cloud connectors instead follow: intro → `## Connecting to <name>` (login popup → Allow → choose account/resource) → `## Working in the Visualization Editor` (Dimensions/Segments/Measures) → optional `### The Date Range Data Filter` and `## Performance Considerations`. Match whichever template you selected.

### English topic (DocFX) rules

- **Frontmatter**: add the `title` / `_description` block matching newer pages (see `postgresql.md`, `clickhouse.md`). Some older pages (e.g. `snowflake.md`) omit it — prefer adding it for new pages.
- **Callouts**: use DocFX alerts — `>[!NOTE]`, `>[!WARNING]`, `>[!TIP]` — not Docusaurus admonitions.
- **Images**: use HTML `<img>` tags exactly like neighbors, e.g. `<img src="./images/<file>.png" alt="..." class="responsive-img" width="55%"/>`. Keep `class="responsive-img"`. Reference files from the local `images/` folder (relative `./images/...`; shared parent images use `../images/...`).
- **Emphasis conventions**: UI element names in **bold**, app/mode names (*Analytics Web*, *Visualization Editor*) in *italics*, external links as `<a href="..." target="_blank" rel="noopener">`.
- Only document capabilities the connector actually supports (views, functions, custom queries, date filters). Do not copy a template's function/view section into a connector that lacks it.
- Keep code blocks, hostnames, ports, package names, and example identifiers intact.
- Keep DocFX cross-references working: internal links use repo-relative paths or `~/docs/...` xrefs as neighboring pages do.

## Step 3: update the companion files

- **`toc.yml`** (connector nav): add a `- name:` / `href:` entry. Match the display name style already used. For a brand-new connector, add `new: true` under the entry the way `clickhouse.md` does. Insert it in the same order the file already uses (it is broadly alphabetical with a few product-grouped exceptions — follow the existing local ordering rather than forcing strict alpha).
- **`overview.md`**: add the connector to the bulleted link list (`- [<Name>](~/docs/analytics/datasources/supported-data-sources/<data-source>.md)`), keeping the list's existing order.
- Update any shared reference/capability page **only if** the connector genuinely changes that shared list (e.g. a custom-query or server-side-processing capability matrix). Do not touch unrelated pages.

## Step 4: create localizations

Japanese localization is part of the standard path for this repository.

- Create `docfx/jp/docs/analytics/datasources/supported-data-sources/<data-source>.md` with the **same file name**.
- Add the matching entry to `docfx/jp/docs/analytics/datasources/supported-data-sources/toc.yml` and update the JP `overview.md` list.
- Korean: only if `docfx/kr/...` exists in the repo — mirror the same way. If there is no `kr` tree, skip it and say so; do not create one.

### Localization rules

- Translate headings, prose, callouts, and resource labels.
- Preserve code blocks, hostnames, ports, identifiers, package names, URLs, `<img>` `src`/`class`, and example values unless nearby localized pages localize a given comment.
- Match the tone and structure of nearby localized connector topics (e.g. the JP `postgresql.md` / `databricks.md`).
- Keep the same image file names so the localized page never points at a missing asset.

## Step 5: mirror screenshot assets

- Put connector screenshots in `docfx/en/docs/analytics/datasources/supported-data-sources/images/`, named descriptively like existing files (`add-<name>-server.png`, `<name>-database-dialog.png`, `<name>-data-source-details.png`, `<name>-visualization-editor.png`).
- Every `<img src>` in the topic must resolve to a real file. When real screenshots are not available yet, create clearly-named placeholder files at those exact paths, mirror them into each locale's `images/` folder, and **tell the user they must replace the placeholders with real screenshots**. Do not silently reference missing images.
- Mirror the English asset names exactly into `docfx/jp/.../images/` (and `docfx/kr/.../images/` when that locale exists).

## Step 6: validate with the docs build

DocFX link/anchor problems are easy to miss, especially per-locale. After editing, build the docs.

```bash
npm install   # first time; also restores the docfx dotnet tool via postinstall
npm run build
```

To preview a specific locale (watches for changes):

```bash
yarn start --lang=en
```

(`--lang=jp` / `--lang=kr` for the localized sites.)

If the build reports a broken link, anchor, or xref:

1. fix the actual target or link path
2. prefer repo-consistent links/xrefs over ad-hoc workarounds
3. fix the root cause — do not suppress the warning

## Output expectations

When done, report:

1. the English topic file created or updated
2. which companion files changed (`toc.yml`, `overview.md`, any justified shared reference)
3. which localized files changed (JP, and KR only if that tree exists)
4. any validation fixes (repaired links, anchors, or xrefs)
5. whether placeholder screenshots were created and still need real replacements

Keep the report concise and repository-specific.

## Example prompts this skill should handle

**Example 1**
User: "Based on PostgreSQL and Databricks, add a new DuckDB connector topic and localize it to Japanese."
Expected: inspect `postgresql.md` (relational shape) and `databricks.md` (token auth); add English `duckdb.md`; add the `toc.yml` entry (`new: true`) and the `overview.md` link; create the JP page and its toc/overview entries; only document capabilities DuckDB actually supports; create placeholder screenshots if real ones are missing; build the docs and fix link issues.

**Example 2**
User: "Add a ClickHouse-style connector page and keep the Japanese docs in sync."
Expected: use the closest relational connector pages as templates; update English and Japanese in the same pass; keep the connector nav and overview list coherent; preserve the file's existing ordering; verify whether a `kr` tree exists before touching it.

**Example 3**
User: "I already added the English connector page — finish the workflow."
Expected: add the `toc.yml` and `overview.md` entries; update shared reference pages only if justified; add the JP localized page matching nearby localized topics; mirror images; build and fix any locale-specific link problems — without rewriting unrelated pages.

## Boundaries

- This is a **DocFX** repo — do not import Docusaurus/MDX patterns (`sidebars.ts`, JSX imports, `:::note` admonitions).
- Do not update unrelated docs just because they are nearby.
- Do not create a `kr` locale that does not already exist; do not assume Japanese is out of scope — it is part of the normal path.
- Do not leave `<img>` tags pointing at files that do not exist.
- Do not document connector capabilities (views, functions, custom queries, date filters) that the connector does not actually have.
