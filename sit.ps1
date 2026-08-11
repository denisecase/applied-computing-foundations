#Requires -Version 7.0

<#
============================================================
sit.ps1 (ALL-PY-REPOS)
============================================================
Updated: 2026-08-10 (uses pyproject.toml [dependency-groups]; uv sync installs dev and docs groups by default)

Situate project dependencies, lint, test, and build docs.
For Python tooling repos only.

Run with:
.\sit.ps1
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ============================================================
# Precheck: pyproject.toml must use [dependency-groups], not the
# old [project.optional-dependencies]. With the old table, `uv sync`
# succeeds but does NOT install dev/docs, and later steps fail confusingly.
# ============================================================
if (Test-Path "pyproject.toml") {
    $pyproject = Get-Content "pyproject.toml" -Raw
    if ($pyproject -match '(?m)^\[project\.optional-dependencies\]') {
        Write-Host ""
        Write-Host "ERROR: pyproject.toml uses the old [project.optional-dependencies] table." -ForegroundColor Red
        Write-Host ""
        Write-Host "This repo has not been migrated. 'uv sync' would run but NOT install" -ForegroundColor Yellow
        Write-Host "the dev and docs dependencies, so linting, tests, and docs would fail." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "FIX: open pyproject.toml and rename this one line:" -ForegroundColor Cyan
        Write-Host "    [project.optional-dependencies]   ->   [dependency-groups]" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Then run .\sit.ps1 again." -ForegroundColor Cyan
        Write-Host ""
        exit 1
    }
}

uv self update
uv python pin 3.15
uv lock --upgrade
uv sync

uv run pre-commit install
uv run pre-commit autoupdate

git add -A
uv run pre-commit run --all-files
# repeat if changes were made
uv run pre-commit run --all-files

# build docs
uv run python -m zensical build

Write-Host "All commands executed successfully."
