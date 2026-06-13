@echo off
title LeadPulse - Dev Environment
echo.
echo  ============================================
echo   LeadPulse - Iniciando ambiente de desenvolvimento
echo  ============================================
echo.

echo  [1/2] Iniciando Backend (NestJS) na porta 3333...
start "LeadPulse Backend" cmd /k "cd /d "%~dp0backend" && npm run start:dev"

echo  [2/2] Iniciando Frontend (Next.js) na porta 3000...
start "LeadPulse Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo.
echo  ============================================
echo   Tudo rodando!
echo.
echo   Backend:  http://localhost:3333
echo   Frontend: http://localhost:3000
echo  ============================================
echo.
echo  Feche esta janela quando quiser parar tudo.
pause
