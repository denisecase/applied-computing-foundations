# Git and GitHub

- **Git** is a tool that records the history of a  project - every change, over time.
- **GitHub** is a website that stores a copy of a project online.

Git is a tool we install on our machine locally.
GitHub is a cloud service for saving, sharing, and collaborating on projects.
GitHub enables work from multiple contributors and machines.

## Repositories (aka Repos)

A repository (often called a _repo_) is a folder that contains:

- project files
- a record of changes over time
- metadata used by tools like Git and GitHub

Typically, every project lives in its own repository folder.
We can store many repos in a single folder named `Repos`.

## How to Create a Repos/ Folder

- [On Mac/Linux Machines](./repos_on_mac_linux.md)
- [On Windows Machines](./repos_on_windows.md)

## Local and Remote: Keeping a Project in Sync

With git, **there are (at least) two copies of a project:**

- The **remote** copy lives on GitHub, in the cloud.
- The **local** copy lives on a computer, often inside a `Repos` folder.

Four commands move work between them.
It helps to recognize what each command does.

| Command    | Plain-English meaning                                                |
| ---------- | -------------------------------------------------------------------- |
| **clone**  | Make the first local copy of a GitHub repo, into the `Repos` folder. |
| **commit** | Save a snapshot of changes to the local history.                     |
| **push**   | Send local changes (commits) up to GitHub.                           |
| **pull**   | Bring new changes down from GitHub into the local copy.              |

A normal working rhythm is:

- **pull** the latest changes from GitHub
- make changes locally on a computer
- **commit** the changes with a helpful message
- **push** the committed changes back up to GitHub

A repo is cloned once to get a copy on a local machine.
After that, we git add, commit, and push back up to GitHub.

Because we can make easy updates directly in GitHub (using any web browser),
we always **git pull** before making changes locally.

Starting to make changes locally with unsynced changes in GitHub can create
a **merge conflict**, a special challenge that is better avoided.
**Always git pull first** when working locally.

## Project Configuration Files

When working with code projects,
we must be able to view **file extensions** and **hidden files and folders**.

Files that start with a dot (.) are often configuration files.
They describe how the project should behave.

For example, some key files belong in nearly every professional repository.

### 1. `.editorconfig`: keeps files consistent regardless of editor

This file prevents formatting noise when people use different tools.
It helps different editors agree on things like:

- line endings
- indentation
- trailing spaces

### 2. `.gitattributes`: keeps files consistent across operating systems

This file prevents problems caused by different line endings and file-handling rules.
It helps Git handle files correctly on Windows, macOS, and Linux.

### 3. `.gitignore`: keeps unnecessary or unsafe files out of the repository

This file helps keep repositories clean, safe, and shareable.
The project history we care about typically involves the files we write,
rather than the supporting files that may be very large and can be easily regenerated.
This file tells Git which files not to track, and includes:

- temporary files
- system files
- local settings
- secrets or credentials
