# Git and GitHub

<!-- On a page that could be read aloud,
use two asterisks instead of backticks
for code. -->

## Git and GitHub Basics

Git and GitHub work together to record, store, share, and collaborate on projects.

- **Git** is a tool that records the history of a project,
  including changes over time.
  We install Git locally on our machine.

- **GitHub** is a website that stores a copy of a project online.
  It is a cloud service for saving, sharing, and collaborating on projects
  and enables work from multiple contributors and machines.

## Repositories

A repository, often called a **repo**, is a project folder tracked by Git.

Typically, every project lives in its own repository folder.
We can store many repos in a single folder, e.g. one named **Repos**.

This folder **must NOT automatically sync contents to the cloud**.
Git projects can get very large (we often download lots of free code) and
automatic syncing can kill a machine.

## How to Create a Repos/ Folder

- [On Mac/Linux Machines](./repos_on_mac_linux.md)
- [On Windows Machines](./repos_on_windows.md)

## Local and Remote

With Git, there are at least two copies of a project:

- The **local** copy is on your computer.
- The **remote** copy is on GitHub.

A few Git commands keep them in sync:

- **git clone** - make the first local copy of a GitHub repository
- **git add** - add changes to Git's history tracking
- **git commit** - save a snapshot of changes with a message to locate it in history
- **git push** - send local commits back up to GitHub
- **git pull** - fetch any new changes from GitHub and merge into local history

Use **git clone** once to get a copy on a local machine.
After that, a common workflow is:

1. **git pull** down any changes from GitHub
2. Make changes.
3. **git add, commit, push** changes back up to GitHub

---

[◄ Back to Home](index.md)
