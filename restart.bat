@echo off
cd /d C:\temp\remont-site
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
start /B "NextJS" cmd /c "node node_modules\next\dist\bin\next dev -p 3000"
timeout /t 5 /nobreak >nul
echo Server restarted