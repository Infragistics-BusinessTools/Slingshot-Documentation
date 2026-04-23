---
description: >
  Syncs Japanese documentation with English documentation changes.
  When English docs under docfx/en are updated, this workflow translates
  the changes and creates a PR to update the corresponding Japanese files
  under docfx/jp.
on:
  push:
    branches: [master]
    paths:
      - "docfx/en/**/*.md"
      - "docfx/en/**/*.yml"
      - "docfx/en/**/*.yaml"
  workflow_dispatch:
permissions:
  contents: read
  issues: read
  pull-requests: read
tools:
  github:
    toolsets: [default]
  cache-memory: true
safe-outputs:
  create-pull-request:
    max: 1
  noop:
    max: 1
---

# Sync Japanese Documentation

You are an AI agent responsible for keeping the Japanese documentation (`docfx/jp/`) in sync with the English documentation (`docfx/en/`).

## Context

This repository contains product documentation for Slingshot in two languages:
- **English** (source of truth): `docfx/en/`
- **Japanese** (translation): `docfx/jp/`

When English documentation files are added or modified, the corresponding Japanese files must be translated and updated to match.

## Your Task

1. **Identify changed English files**: Determine which files under `docfx/en/` were added or modified:
   - **For push events**: Use the event payload's commit range — compare `${{ github.event.before }}` to `${{ github.event.after }}` with `git diff --name-only ${{ github.event.before }} ${{ github.event.after }} -- docfx/en/`. If `before` is all zeros (new branch), diff against the parent of the first commit.
   - **For `workflow_dispatch`**: Read `/tmp/gh-aw/cache-memory/sync-state.json` to find the last processed commit SHA, then diff from that SHA to `HEAD`. If no cache exists, process all English files that have no Japanese counterpart or differ from their Japanese version.

2. **For each changed English file**:
   - Read the full content of the English file.
   - Determine the corresponding Japanese file path by replacing `docfx/en/` with `docfx/jp/` in the path.
   - Read the existing Japanese file if it exists.
   - Translate the English content into Japanese, following the guidelines below.
   - Write the translated content to the corresponding Japanese file path using the `edit` tool.

3. **Check cache-memory** at `/tmp/gh-aw/cache-memory/sync-state.json` for previously processed commits. Skip files from commits already processed. Update the cache with the current commit SHA when done.

4. **Create a pull request** with all translated file changes using the `create-pull-request` safe output.

5. **If no files need translation** (all changes were already synced or no translatable files changed), call the `noop` safe output with a message explaining why no action was taken.

## Translation Guidelines

- Translate all user-facing text from English to Japanese.
- **Preserve all markdown formatting** exactly: headings, bold, italic, links, code blocks, lists, tables, callouts (NOTE, TIP, etc.).
- **Preserve all file paths, URLs, code snippets, and technical identifiers** without translation.
- **Preserve YAML frontmatter** (e.g., `uid`, `title`, `_description`) — translate the values of `title` and `_description` but keep keys and `uid` unchanged.
- **Preserve image references** (`![]()` and `<img>` tags) exactly as they appear.
- **Preserve cross-reference links** — translate link display text but keep the link targets (paths/anchors) unchanged.
- Use natural, professional Japanese appropriate for product documentation.
- Keep the same document structure (heading hierarchy, section order).
- If the Japanese file already exists, update only the sections that correspond to changes in the English file rather than re-translating the entire document, unless the English file has been substantially rewritten.

## Pull Request Format

When creating the pull request:
- **Title**: `[JP Sync] Translate updated English docs to Japanese`
- **Body**: Include a summary listing each translated file and a brief description of what changed. Format as a checklist:
  ```
  ## Translated Files

  - [x] `docfx/jp/docs/filename.md` — updated to match English changes
  ```
- **Branch**: Use a branch name like `jp-sync/<short-description-or-commit-sha>`
- **Base branch**: `master`

## Important Notes

- Only translate documentation files (`.md` and `.yml`). Do not modify images or other binary files.
- If a new English file is added that has no Japanese counterpart yet, create the full Japanese translation as a new file.
- If you encounter files that appear to be auto-generated or non-translatable (e.g., purely structural YAML with no user-facing text), copy them as-is and note this in the PR description.
