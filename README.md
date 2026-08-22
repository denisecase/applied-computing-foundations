# Applied Computing Foundations

<!-- README opening order

1. Title
2. Project-specific resource badges (NotebookLM, etc.)
3. Standard badges: Docs Site / Python / uv / CI / License / Links / Dependabot
4. One-line positioning statement
5. Hosted documentation link
6. Requirements
7. Developer / Updating the Documentation
8. Resources
9. Citation
10. License
-->

[![Docs Site](https://img.shields.io/badge/Docs-site-blue.svg)](https://denisecase.github.io/applied-computing-foundations/)
[![Python 3.15](https://img.shields.io/badge/Python-3.15-blue.svg)](./pyproject.toml)
[![uv managed](https://img.shields.io/badge/uv-managed-DE5FE9)](https://docs.astral.sh/uv/)
[![Zensical docs](https://img.shields.io/badge/Zensical-docs-purple)](https://zensical.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

[![CI Status](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-python-zensical.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-python-zensical.yml)
[![Deploy Docs](https://github.com/denisecase/applied-computing-foundations/actions/workflows/deploy-zensical.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/deploy-zensical.yml)
[![Check Links](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/denisecase/applied-computing-foundations/security)

> Applied computing foundations, including
> how to work with terminals,
> a bit about Git, and how to set up a place for project repositories,
> and how to take screenshots.

## View This Guide

[Applied Computing Foundations](https://denisecase.github.io/applied-computing-foundations/)

## Requirements

No setup is required to view or use the documentation site linked above.

## Key Files

- `docs/` (folder with Markdown files)
- `zensical.toml` (in the root project folder): scroll to end for the `nav` section

If curious about the supporting files, see
[this explainer site](https://denisecase.github.io/professional-python-project-explainer/).

## Developers and Maintainers

This is a reference site.
Most people do not need this running on their machine.
The following steps are for developers and maintainers of this guide.

## Command Reference

The commands below are used in the workflow guide above.
They are provided here for convenience.
Follow the guide for the **full instructions**.

<details markdown>
<summary>Show command reference</summary>

### Set Up Machine

- Complete [Workflow A. Set Up Machine](https://denisecase.github.io/pro-analytics-02/workflow-a-set-up-machine/)
  to **set up a machine** and create a non-cloud-synced
  `Repos` folder for development.

### In a machine terminal (open in your `Repos` folder)

Open a machine terminal in your `Repos` folder,
change directory (cd) into the new folder,
and run `code .` to open only this project in VS Code:

```shell
git clone https://github.com/denisecase/applied-computing-foundations

cd applied-computing-foundations
code .
```

When VS Code opens, accept the Extension Recommendations
(click **`Install All`** or similar when asked).

### In a VS Code terminal

To set up a local project Python environment (managed by `uv`)
and align VS Code with it, run the following commands.

These are listed for convenience.
For best results, follow the detailed instructions in
[pro-analytics-02 guide](https://denisecase.github.io/pro-analytics-02/).

Use VS Code menu option `Terminal` / `New Terminal` to open a **VS Code terminal**
in the root project folder.
Copy each command, paste into your terminal, and hit ENTER,
to run each command one at a time.

```shell
uv self update
uv python pin 3.15

uv python install
uv lock --upgrade
uv sync
```

If asked: "We noticed a new environment has been created.
Do you want to select it for the workspace folder?" Click **"Yes"**.
If successful, you'll see a new `.venv` folder appear in the root project folder.

Install and run pre-commit checks (twice if necessary as shown below):

```shell
uv run pre-commit install
uv run pre-commit autoupdate

git add -A
uv run pre-commit run --all-files
# repeat if changes were made by pre-commit tasks
uv run pre-commit run --all-files
```

### Daily Workflow (Working With Python Project Code)

VS Code should have only this project open.
Open a VS Code terminal (menu: `Terminal` / `New Terminal`) and run:

```shell
git pull

# build docs after editing
uv run python -m zensical build
# serve locally to test
uv run python -m zensical serve
```

While editing docs, repeat the commands above to
rebuild docs as needed.

Save progress frequently.
Some tools may make changes;
you may need to **re-run git `add` and `commit`**
to ensure everything gets committed before pushing.

```shell
git add -A
git commit -m "your message here"
# repeat if changes were made (try the UP ARROW)
git add -A
git commit -m "your message here"

git push -u origin main
```

</details>

## Helpful Tips

- Use the **UP ARROW** and **DOWN ARROW** in the terminal
  to scroll through past commands.
- Use `CTRL+f` to find (and replace) text within a file.

## As Needed

If VS Code does not automatically use the new `.venv` environment:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Run **Python: Select Interpreter**.
3. Select the interpreter from this project's `.venv` folder.

If VS Code still does not recognize the environment or newly installed tools:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Run **Developer: Reload Window**.

## Resources

[Pro Analytics 02: Guide to Professional Python](https://denisecase.github.io/pro-analytics-02/)

## Documentation

[Applied Computing Foundations](https://denisecase.github.io/applied-computing-foundations/)

## Annotations

[.annotations/annotations.md](./.annotations/annotations.md)

## Citation

[CITATION.cff](./CITATION.cff)

## License

This project is licensed under the [MIT License](./LICENSE).
