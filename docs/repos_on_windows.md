# Set Up Repos Folder on Windows

<!-- On a page that could be read aloud,
use two asterisks instead of backticks
for code. -->

Each project has its own folder.
We need one place on the machine to keep all project folders together.

This page explains how to create a **C:\Repos** folder to hold project folders.

<details markdown>
<summary>WHY?</summary>

Keep your projects outside any cloud-sync folders
like **Documents** or **OneDrive**.

Git projects can get very large, and automatic cloud syncing can interfere
with project files and development tools.

This ensures smoother performance and avoids syncing unnecessary
temporary files from your GitHub Python projects.

</details>

Do NOT create this folder inside a location that is automatically synced,
such as Documents, Google Drive, or Dropbox.

## Windows Task 1. Create C:\Repos Directory

1. Open File Explorer.
2. Navigate to \*\*C:\*\*.
3. Create a new folder named **Repos**.

Important

- Use **Repos** (with a capital R), to keep paths consistent with instructions.
- Verify the folder is directly in C:\ (**C:\Repos**),
  not inside another folder such as Documents or Desktop.
- Ensure the new directory is NOT being backed
  up by OneDrive or other sync services. Check OneDrive settings.

### Verify on Windows

Your terminal should be your machine's PowerShell terminal
(not the older Command Window) and open in the Repos folder.

From in the Repos folder, should be able to see **C:\Repos>**
in the terminal prompt.

## Success

Once verified, this folder is ready to hold your GitHub project repositories.

You only need to create the **Repos** folder once.

---

[◄ Back to Home](index.md)
