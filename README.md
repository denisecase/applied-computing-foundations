# Applied Computing Foundations

[![Docs](https://img.shields.io/badge/Docs-site-blue.svg)](https://denisecase.github.io/applied-computing-foundations/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)
![Python 3.15](https://img.shields.io/badge/Python-3.15-blue.svg)
![uv](https://img.shields.io/badge/uv-managed-DE5FE9)
![CI Status](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-python-zensical.yml/badge.svg?branch=main)
[![Check Links](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/denisecase/applied-computing-foundations/security)

> Applied computing foundations, including how to set up a place for
> repositories, how to view file extensions, and how to work with hidden files
> and folders.

See the hosted documentation at <https://denisecase.github.io/applied-computing-foundations/>.

## Requirements

No setup is required to view or use the documentation site linked above.

## To Host an Zensical Site (Like This)

While viewing your GitHub repository in the browser, click the Settings (gear) icon.

1. Click the **Pages** tab.

   - Set **Build and deployment** / **Source** to **GitHub Actions**

2. (Optional, but required if you keep the Dependabot badge)
   - Click the **Security & analysis** tab
   - Enable **Dependabot alerts**

## Developer (Updating The Documentation)

Pre-commit is optional; GitHub Actions will report issues if it fails.

Steps to run pre-commit locally (optional).
First, install `uv`.
Then, initialize once:

```shell
# reset uv cache only after suspected cache corruption or strange dependency errors
# uv cache clean

uv self update
uv python pin 3.15
uv lock --upgrade
uv sync

uvx pre-commit install
uv run pre-commit autoupdate

git add -A
uvx pre-commit run --all-files
# repeat if changes were made
git add -A
uvx pre-commit run --all-files

npx markdownlint-cli2 --fix

uv run python -m zensical build
```

While editing project code and docs,
repeat the commands above to run files, check them, and
rebuild docs as needed.

Save progress frequently (some tools may make changes;
you may need to **re-run git `add` and `commit`**
to ensure everything gets committed before pushing):

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
