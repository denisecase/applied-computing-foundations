# Set Up Repos Folder on Windows

This guide provides step-by-step instructions for completing required setup tasks
on a Windows system using File Explorer.

All course repositories should be stored in a single local folder named `Repos`.

## Task 1: Create `C:\Repos` (do not use Documents/OneDrive)

Windows often syncs the `Documents` folder with OneDrive, which can cause confusion
and slowdowns when working with project repositories.
Instead, create a local `Repos` folder that is not automatically synced.

### Steps

1. Open **File Explorer**.
2. Navigate to **This PC** > **Local Disk (C:)**.
3. Create a new folder in the root of `C:\` named **Repos**.

Keep all your project repositories in `C:\Repos`, not in `Documents` or other
folders that may be syncing with OneDrive.

## Task 2: Organize Repositories Inside `C:\Repos`

Each GitHub repository you use will have its own folder inside `C:\Repos`.

### Verify

- Confirm the folder path is exactly `C:\Repos`.
- All cloned repositories should live directly inside this folder
  (for example: `C:\Repos\applied-computing-foundations`).

## Task 3: Show File Extensions and Hidden Items

Hidden files (such as `.git`) and file extensions are commonly used in
computing and programming work and must be visible.

### Steps

1. Open **File Explorer**.
2. Click the **View** tab on the ribbon.
3. In the **Show/Hide** group, check **File name extensions**.
4. In the **Show/Hide** group, check **Hidden items**.

## Task 4: OPTIONAL: Confirm OneDrive Is Not Syncing `Repos`

If OneDrive is enabled, confirm that your `Repos` folder is not being synced.

### Steps

1. Check the OneDrive icon in the taskbar (lower right).
2. Right-click the icon and select **Settings**.
3. Under the **Account** tab, review the folders being synced.
4. Ensure the `Repos` folder (`C:\Repos`) is not listed.

## Tips & Troubleshooting

- **Accidentally saved to OneDrive?**
  Move the folder back to `C:\Repos` by dragging it in File Explorer.
