# ============================================================
# shape.ps1 (ALL-REPOS)
# ============================================================
# Updated: 2026-08-08
#
# REQ: List project working files.
# WHY: Provide a concise, copyable view of the current project structure.
# OBS: Inside a Git repository, uses Git's own ignore rules.
# OBS: Includes tracked files and untracked non-ignored files.
# OBS: Reflects the working tree as it is NOW: files moved/renamed/deleted on
#      disk but not yet staged are dropped, so stale index paths do not appear.
# OBS: Outside a Git repository, lists all files recursively from the current
#      directory without applying .gitignore.
# CUSTOM: Add path filters only if you want a narrower project shape.

# Run in a PowerShell terminal (available cross platform) with:
# .\shape.ps1

$repoRoot = git rev-parse --show-toplevel 2>$null

if ($repoRoot) {
    # WHY: Temporarily move to the repository root while preserving the
    #      caller's original working directory.
    Push-Location $repoRoot

    try {
        # WHY: --cached lists the INDEX, which still holds files moved/renamed/
        #      deleted on disk but not staged.
        #      Subtract --deleted so the listing
        #      shows the current on-disk shape without requiring git add first.
        $deleted = git ls-files --deleted

        git ls-files --cached --others --exclude-standard |
            Where-Object { $deleted -notcontains $_ } |
            Sort-Object -Unique |
            ForEach-Object {
                ".\$_"
            }
    }
    finally {
        # WHY: Restore the working directory from which the script was called.
        Pop-Location
    }
}
else {
    # WHY: The project may need to be inspected before git init has been run.
    # OBS: Without a Git repository, report the complete on-disk file shape.
    $projectRoot = (Get-Location).Path

    Get-ChildItem -Path $projectRoot -File -Recurse -Force |
        ForEach-Object {
            $relativePath = [System.IO.Path]::GetRelativePath(
                $projectRoot,
                $_.FullName
            )

            ".\$relativePath"
        } |
        Sort-Object -Unique
}
