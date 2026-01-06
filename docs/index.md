# Applied Computing Foundations

Explore the tabs and sidebars for content.

## What does `Repos` mean?

**Repos** is short for **repositories**.

A repository (often called a _repo_) is a folder that contains:

- project files
- a record of changes over time
- metadata used by tools like Git and GitHub

Typically, every project lives in its own repository folder.
All repositories are stored together inside a single folder named `Repos`.

## How to Create a Repos/ Folder

- [On Mac/Linux Machines](./repos_on_mac_linux.md)
- [On Windows Machines](./repos_windows.md)

## What Are Some of these "dot" Files?

> You must be able to view **file extensions** and **hidden files and folders**.
> See the links above for more.

Files that start with a dot (.) are usually configuration files.
They don't contain project content;
they describe how the project should behave.

These three files belong in nearly every professional repository:

### 1. `.editorconfig` - keeps files consistent no matter how they’re edited.

  This file helps different editors agree on things like:

  - line endings
  - indentation
  - trailing spaces

  It prevents formatting noise when people use different tools.

### 2. `.gitattributes` - keeps files consistent across operating systems.

  This file helps Git handle files correctly on:

  - Windows
  - macOS
  - Linux

  It prevents problems caused by different line endings and file-handling rules.

### 3. `.gitignore` - keeps unnecessary or unsafe files out of the repository.

  This file tells Git which files **not** to track, such as:

  - temporary files
  - system files
  - local settings
  - secrets or credentials

  It helps keep repositories clean, safe, and shareable.

---

## To Customize These Documents, Modify:

- `docs/` (folder with Markdown files)
- `mkdocs.yaml` (in the root project folder)
  - scroll to the end for the `nav` section
