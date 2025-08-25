@echo off
setlocal enabledelayedexpansion

echo ========================================
echo    NARVA Website - GitHub Upload
echo ========================================
echo.

:: Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Check if we're in a Git repository
git status >nul 2>&1
if errorlevel 1 (
    echo Initializing new Git repository...
    git init
    echo.
)

:: Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo No remote repository configured.
    echo.
    echo Please enter your GitHub repository URL:
    echo Example: https://github.com/username/narva-fragrance-website.git
    echo.
    set /p repo_url="Repository URL: "
    if "!repo_url!"=="" (
        echo Using default repository: https://github.com/mohanad-alsharef/narva-demo.git
        set repo_url=https://github.com/mohanad-alsharef/narva-demo.git
    )
    git remote add origin "!repo_url!"
    echo Remote repository added successfully.
    echo.
)

:: Add all files
echo Adding all files to Git...
git add .

:: Check if there are changes to commit
git diff --cached --quiet
if errorlevel 1 (
    echo.
    echo Changes detected. Please enter a commit message:
    echo (Press Enter to use default message)
    set /p commit_msg="Commit message: "
    if "!commit_msg!"=="" (
        set commit_msg="Update Narva Fragrance website - %date% %time%"
    )
    
    echo.
    echo Committing changes...
    git commit -m !commit_msg!
    
    echo.
    echo Pushing to GitHub...
    git push origin main
    
    if errorlevel 1 (
        echo.
        echo First time pushing? Setting upstream branch...
        git push -u origin main
    )
    
    echo.
    echo ========================================
    echo    Upload Complete!
    echo ========================================
    echo.
    echo Your website has been updated on GitHub!
    echo.
    echo To enable GitHub Pages:
    echo 1. Go to your repository on GitHub
    echo 2. Click Settings ^> Pages
    echo 3. Select 'Deploy from a branch'
    echo 4. Choose 'main' branch and '/ (root)' folder
    echo 5. Click Save
    echo.
    echo Your site will be available at: https://username.github.io/repository-name/
    echo.
) else (
    echo.
    echo No changes detected. Everything is up to date!
    echo.
)

echo Press any key to exit...
pause >nul
