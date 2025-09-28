@echo off
echo 🚀 FILIPINO REVIEWER - GitHub Deployment Script
echo ================================================

echo.
echo 📁 Checking current directory...
dir /b *.html *.css *.js *.md

echo.
echo 🔄 Adding all files to git...
git add .

echo.
echo 💾 Committing changes...
git commit -m "Add Filipino Wika at Kultura study system - Complete flashcard app with lesson filtering and mobile responsive design"

echo.
echo 📤 Pushing to GitHub repository...
git push origin main

echo.
echo ✅ Deployment complete!
echo.
echo 🌐 Your site will be available at:
echo https://arisugawa123.github.io/FILIPINO-REVIEWER/
echo.
echo 📋 To enable GitHub Pages:
echo 1. Go to repository Settings
echo 2. Scroll to Pages section
echo 3. Select 'Deploy from branch'
echo 4. Choose 'main' branch
echo 5. Save and wait for deployment
echo.
pause