# Applied Computing Foundations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)
[![Docs (MkDocs)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/deploy-mkdocs.yml/badge.svg?branch=main)](https://denisecase.github.io/applied-computing-foundations/)
![Build Status](https://github.com/denisecase/applied-computing-foundations/actions/workflows/ci-hygiene-mkdocs.yml/badge.svg?branch=main)
[![Check Links](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml/badge.svg)](https://github.com/denisecase/applied-computing-foundations/actions/workflows/links.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/denisecase/applied-computing-foundations/security/dependabot)

> Applied computing foundations, including how to set up a place for
> repositories, how to view file extensions, and how to work with hidden files
> and folders.

See the hosted documentation at <https://denisecase.github.io/applied-computing-foundations/>.

## Requirements

No setup is required to view or use the documentation site linked above.

## To Host an MkDocs Site (Like This)

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
uv self update
uv python pin 3.12
uv sync --extra dev --extra docs --upgrade
uvx pre-commit install
uvx pre-commit run --all-files
```

Build and serve docs:

```shell
uv run mkdocs build --strict
uv run mkdocs serve
```

> To stop a running Python program, press `Ctrl + C` in the terminal

Save progress:

```shell
git add -A
# If pre-commit makes changes, re-run `git add -A` before committing.
git commit -m "update"
git push -u origin main
```

## Annotations

[ANNOTATIONS.md](./ANNOTATIONS.md)

## Citation

[CITATION.cff](./CITATION.cff)

## License

[MIT](./LICENSE)

## SE Manifest

[SE_MANIFEST.md](./SE_MANIFEST.toml)
