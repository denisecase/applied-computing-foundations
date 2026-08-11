# .\AGENTS.md (ALL-PY-REPOS)

## WHY

This repository uses a uniform, reproducible Python workflow
based on `uv` and `pyproject.toml`.

These instructions exist to prevent tool drift, especially accidental use of
`pip` commands or OS-specific workflows.

## Python Workflow Requirements

Use `uv` for Python environment, dependency, and run commands.
Do not recommend or use `pip install` as the primary workflow.
This repository targets a specific Python version pinned through `uv`.
Use repository-defined dependency groups rather than inventing ad hoc install
commands.

## Common Commands

Read README.md for common commands and follow that approach.

## Python Style

Follow the repository Ruff configuration.
Do not replace the configured lint policy with generic Ruff defaults.
Do not suggest broad rule removals unless a specific rule is creating confirmed
bad results for this repository.
