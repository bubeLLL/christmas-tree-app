@echo off
chcp 65001 >nul
echo ========================================
echo    Сборка Christmas Tree для Windows
echo ========================================
echo.

:: Проверка Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ОШИБКА] Node.js не установлен!
    echo Скачайте с https://nodejs.org/
    pause
    exit /b 1
)

echo [1/3] Установка зависимостей...
call npm install

echo.
echo [2/3] Сборка приложения...
call npm run build:win

echo.
echo [3/3] Готово!
echo.
echo ========================================
echo Файлы для установки находятся в папке:
echo   dist\
echo.
echo - ChristmasTree-Portable.exe (без установки)
echo - Рождественская Ёлка Setup.exe (с установкой)
echo ========================================
echo.
pause
