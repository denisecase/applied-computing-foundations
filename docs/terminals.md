# Working with Terminals (Foundations)

<!-- On a page that could be read aloud,
use two asterisks instead of backticks
for code. -->

A **terminal** (also called the command line or shell)
is a text-based interface where you type commands and see results.

Terminals are a professional tool used across operating systems to run commands,
navigate folders, and launch programs.

Terminal commands are reliable, can be easily copied-and-pasted,
can save time, and help prevent mistakes.

## Terminal Types By Platform

Common terminals by platform:

- **Windows:** PowerShell
- **macOS:** Terminal (zsh)
- **Linux:** Terminal (bash or similar)

## Terminal Types By Location

There are two key locations for opening terminals.
Sometimes we need:

- a **machine terminal** (opened directly on the computer)
- a **VS Code terminal** (opened inside the VS Code editor)

Both behave the same for the following commands.

## How to Open a Machine Terminal

- **Windows:** Start Menu / PowerShell
- **macOS:** Applications / Utilities / Terminal
- **Linux:** Applications / Terminal

## How to Open a Machine Terminal from VS Code

- Use the VS Code menu: **Terminal / New Terminal**

## Know The Working Directory

Terminal commands always run in the **working directory** - the current folder.

Know **where you are** before running commands.
Running a command when in an unexpected location will not work and can cause
significant errors.

## Essential Commands

1. Use **pwd** to print working directory
2. Use **ls** to list folder contents
3. Use **cd** to change directory
4. Use **clear** to keep the terminal readable
5. Use **Up Arrow** key and **Down Arrow** key to scroll through past commands

## More About Essential Commands

### pwd (Print Working Directory)

Prints the full path of the current folder.
Use this to confirm you are in the expected directory.

```shell
pwd
```

### ls (List Contents)

Lists files and folders in the current directory.
Use this to check for files like `README.md` or project folders.

```shell
ls
```

### cd (Change directory)

Moves into another folder.

```shell
cd folder_name
```

### clear (Clear the screen)

Clears previous output from the terminal.
This does **not** delete files or undo commands.
It only makes the terminal easier to read.

```shell
clear
```

### Up Arrow Key and Down Arrow Key

Use the **UP ARROW** and **DOWN ARROW** in the terminal
to scroll through past commands.

## Terminal Path Abbreviations

A **path** is the address of a file or folder.
There are two kinds of paths:

- **Absolute** - the full address from the top.
  Windows: `C:\Repos\my-project`.
  Mac/Linux: `/Users/you/Repos/my-project`.
- **Relative** - an address starting from the current folder. `my-project`
  means "my-project inside where I already am."

Useful shorthands:

- **~** means your home folder (Mac/Linux).
- **.** means the current folder;
- **..** means the folder one level up.

Windows separates folders with a backslash while Mac/Linux use a forward slash.
Most tools accept **/**.

So **cd ~/Repos** means "go to the Repos folder in my home directory," and
**cd ..** means "go up one level."

---

[◄ Back to Home](index.md)
