@echo off
title Breeze Trip MVP Launcher
color 0A
echo =========================================================================
echo    BREEZE TRIP - ALL-INDIA TRAVEL DISCOVERY ^& PLANNER (MVP)
echo =========================================================================
echo.
echo  [1/2] Checking Python runtime...
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python is not installed or not in PATH.
    echo Please install Python 3.10+ to run the local server.
    echo Opening index.html directly in your default browser...
    start index.html
    exit /b
)

echo  [2/2] Launching Breeze Trip MVP server on http://localhost:8000 ...
echo.
echo  Website will open automatically in your default browser.
echo  Press Ctrl+C in this terminal window to stop the server anytime.
echo =========================================================================
echo.

python server.py
pause
