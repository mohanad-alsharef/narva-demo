@echo off
echo ========================================
echo    NARVA Website - GitHub Upload
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files to Git...
git add .

echo.
echo Step 3: Making initial commit...
git commit -m "Initial commit: Narva Fragrance luxury ecommerce website"

echo.
echo Step 4: Adding GitHub remote repository...
echo Please enter your GitHub repository URL (e.g., https://github.com/username/narva-fragrance-website.git):
set /p repo_url="Repository URL: "
git remote add origin %repo_url%

echo.
echo Step 5: Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo    Upload Complete!
echo ========================================
echo.
echo Your website is now live on GitHub!
echo You can enable GitHub Pages to make it publicly accessible.
echo.
pause
