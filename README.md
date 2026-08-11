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
![uv](https://img.shields.io/badge/uv-managed-DE5FE9)
[![CI Status](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-python-zensical.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-python-zensical.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Check Links](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/denisecase/applied-computing-foundations/security)

> Applied computing foundations, including
> how to set up a place for project repositories,
> how to view file extensions,
> how to work with hidden files and folders, and
> how to work with terminals.

See the hosted documentation at <https://denisecase.github.io/applied-computing-foundations/>.

## Requirements

No setup is required to view or use the documentation site linked above.

## Requirements to Modify the Documentation

- Git
- VS Code
- uv
- Node.js (optional, for additional Markdown tooling)

## Helpful Commands

```shell
# reset uv cache only after suspected cache corruption or strange dependency errors
# uv cache clean

uv self update
uv python pin 3.15
uv lock --upgrade
uv sync

uv run pre-commit install
uv run pre-commit autoupdate

git add -A
uv run pre-commit run --all-files
# repeat if changes were made
git add -A
uv run pre-commit run --all-files

# optional: requires Node installed locally
npx markdownlint-cli2 --fix

# build docs
uv run python -m zensical build
```

Save progress:

```shell
git add -A
git commit -m "your message here"
git push -u origin main
```

## Resources

[GUIDE: Pro Analytics 02](https://denisecase.github.io/pro-analytics-02/) - Professional
Python Guide

## Citation

[CITATION.cff](./CITATION.cff)

## License

[MIT](./LICENSE)
