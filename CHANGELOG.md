# Changelog

<!-- markdownlint-disable MD024 -->

All notable changes to this project will be documented in this file.

The format is based on **[Keep a Changelog](https://keepachangelog.com/en/1.1.0/)**
and this project adheres to **[Semantic Versioning](https://semver.org/spec/v2.0.0.html)**.

---

## [Unreleased]

---

## [0.9.1] - 2026-08-11

- cleaned repo with `uvx pup-clean` and `uvx pup-clean --delete`
- updated support files with `uvx pup-up` and `uvx pup-up --write`, BACK UP ZENSICAL navigation first.
- updated to 3.15
- minor fixes

---

## Notes on Versioning and Releases

- We use **SemVer**:
  - **MAJOR** - breaking changes
  - **MINOR** - backward-compatible additions
  - **PATCH** - fixes, documentation, tooling
- Versions are driven by git tags.
- Tag `vX.Y.Z` to release.
- Docs are deployed per version tag and aliased to **latest**.

## Release Procedure

Follow these steps when creating a new release.

### Task 1. Update release metadata

1. Update `CITATION.cff`: change `version` and `date-released`
2. Update `CHANGELOG.md`: move from unreleased, add entry, update links
3. Update `pyproject.toml`: update `[tool.hatch.version] fallback-version`

### Task 2. Validate

````shell
uv lock --upgrade
uv sync
uv run pre-commit install

git add -A
uv run pre-commit run --all-files
# rerun if changes made
uv run pre-commit run --all-files

npx markdownlint-cli2 --fix
uvx cffconvert --validate

uv run python -m zensical build
```

### Task 3. Commit, push, tag

```shell
git add -A
git commit -m "Prepare X.Y.Z"
git push -u origin main
````

Verify actions run on GitHub. After success:

```shell
git tag vX.Y.Z -m "X.Y.Z"
git push origin vX.Y.Z
```

## Only As Needed (delete a tag)

```shell
git tag -d vX.Z.Y
git push origin :refs/tags/vX.Z.Y
```

## Links

[Unreleased]: https://github.com/pup-pack/pup-clean/compare/v0.9.1...HEAD
[0.9.1]: https://github.com/pup-pack/pup-clean/releases/tag/v0.9.1

<!-- markdownlint-enable MD024 -->
