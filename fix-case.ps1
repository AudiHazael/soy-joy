param (
    [string]$Path = "src/components",
    [string]$From = "header.jsx",
    [string]$To = "Header.jsx"
)

$OldFile = Join-Path $Path $From
$TempFile = Join-Path $Path "temp.jsx"
$NewFile = Join-Path $Path $To

# Step 1: Rename to temp
if (Test-Path $OldFile) {
    Rename-Item $OldFile $TempFile
    Write-Host "Renamed $OldFile to temp.jsx"
} else {
    Write-Host "$OldFile not found!"
    exit
}

# Step 2: Rename to new (correct) case
Rename-Item $TempFile $NewFile
Write-Host "Renamed temp.jsx to $To"

# Step 3: Git add, commit, and push
git add -A
git commit -m "Fix case of $From to $To"
git push
