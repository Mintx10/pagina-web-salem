@echo off
title Jeans SLM - Servidor Local
echo ========================================================
echo   Iniciando Tienda Online: Jeans SLM / Indumentaria Salem
echo ========================================================
echo.
if exist "build.js" (
  call node build.js
)
echo Abriendo tu navegador en http://localhost:8080 ...
start http://localhost:8080
node server.js
pause
