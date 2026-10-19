# Set Up Repos Folder on Mac/Linux

<!-- On a page that could be read aloud,
use two asterisks instead of backticks
for code. -->

Each project has its own folder.
We need one place on the machine to keep all project folders together.

This page explains how to create a **Repos/** folder to hold project folders.

<details markdown>
<summary>WHY?</summary>

Keep your projects outside any cloud-sync folders
like iCloud's Desktop or Documents.

Git projects can get very large, and automatic cloud syncing can interfere
with project files and development tools.

This ensures smoother performance and avoids syncing unnecessary
temporary files from your GitHub Python projects.

</details>

Do NOT create this folder inside a location that is automatically synced,
such as OneDrive, iCloud Drive, Google Drive, or Dropbox.

We recommend creating a dedicated folder named
**~/Repos** (short for _repositories_).

## Mac Task 1. Create ~/Repos Directory

1. Click the Finder icon in your Dock to open a new Finder window.
2. Access Your Home Directory: In the Finder menu bar
3. at the top of your screen, click Go, then select Home.
4. Alternatively, press Command + Shift + H to open your Home folder.
5. Right-click (or Control-click) in the Home folder and select New Folder.
6. Name the folder Repos.

Important

- Use **Repos** (with a capital R), to keep paths consistent with instructions.
- Verify the folder is directly in your Home folder (~/Repos),
  not inside another folder like Documents or Desktop.
- Ensure this folder is NOT being backed up by iCloud
  if you have iCloud syncing enabled for your Desktop or Documents.
  To check: Go to System Settings > Apple ID > iCloud > iCloud Drive > Options
  and ensure "Desktop & Documents Folders" is unchecked.

### Verify on Mac

Your terminal should be your machine's native shell
(usually **zsh** or **bash**) and open in the Repos folder.

From in the Repos directory, you should be able to
see **~/Repos $** or **Repos %** in the terminal prompt.

## Success

Once verified, this folder is ready to hold your GitHub project repositories.

You only need to create a **~/Repos** folder once.

---

[◄ Back to Home](index.md)
