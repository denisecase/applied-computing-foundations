# Working with Terminals (Foundations)

> Introduction to the **terminal** (also called the command line or shell).

Terminals are a professional tool used across operating systems to run commands,
navigate folders, and launch programs.

These basics apply to **Windows**, **macOS**, and **Linux**.

---

## What Is a Terminal?

A terminal is a text-based interface where you type commands and see results.

Common terminals by platform:

- **Windows:** PowerShell
- **macOS:** Terminal (zsh)
- **Linux:** Terminal (bash or similar)

We differentiate:

- a **machine terminal** (opened directly on the computer)
- a **VS Code terminal** (opened inside the VS Code editor)

Both behave the same for the commands shown here.

## How to Open a Terminal

### On Your Machine

- **Windows:** Start Menu → PowerShell
- **macOS:** Applications → Utilities → Terminal
- **Linux:** Applications → Terminal

### In VS Code

- Use the menu: **Terminal → New Terminal**

## The Current Folder Matters

Terminal commands always run in a **current folder** (also called the working directory).
Many errors happen when commands are run in the wrong folder.

Know **where you are** before running commands.

## Essential Cross-Platform Commands

The following commands work the same on Windows, macOS, and Linux.

### `pwd` - Where am I?

Prints the full path of the current folder.

```shell
pwd
```

Use this to confirm you are in the expected directory.

### `ls` - List Contents

Lists files and folders in the current directory.

```shell
ls
```

Use this to check for files like `README.md` or project folders.

---

## Paths

A **path** is the address of a file or folder.
There are two kinds of paths:

- **Absolute** - the full address from the top.
  Windows: `C:\Repos\my-project`.
  Mac/Linux: `/Users/you/Repos/my-project`.
- **Relative** - an address starting from the current folder. `my-project`
  means "my-project inside where I already am."

Useful shorthands:

- `~` means your home folder (Mac/Linux).
- `.` means the current folder; `..` means the folder one level up.
- Windows separates folders with `\`; Mac/Linux use `/`. Most tools accept `/`
  on all three, which is why you will see it most often.

So `cd ~/Repos` means "go to the Repos folder in my home directory," and
`cd ..` means "go up one level."

### `cd` - Change directory

Moves into another folder.

```shell
cd folder_name
```

Use `ls` first to see available folder names.

---

### `code .` - Open VS Code Here

Opens **VS Code** in the current folder.

```shell
code .
```

This is the **recommended way** to open projects.
It ensures VS Code, the terminal, and the project are aligned.

---

### `clear` - Clear the screen

Clears previous output from the terminal.

```shell
clear
```

This does **not** delete files or undo commands.
It only makes the terminal easier to read.

---

## Suggestions

1. Use `pwd` to confirm where you are
2. Use `ls` to see folder contents
3. Use `code .` to open the project
4. Use `clear` to keep the terminal readable

Terminal commands are reliable and often save time and help prevent mistakes.
