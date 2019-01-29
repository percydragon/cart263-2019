@ECHO OFF
set file4="%CD%\Registry\RecycleBin_default.reg"
set destination="%SystemRoot%\MikuRecycleBin\"

cls
echo Hatsune Miku Recycle Bin - Uninstaller
echo.

:UNINSTALL
echo.
echo Removing files...
echo.
RD /S /Q %destination%
echo.
echo Applying default icons...
echo.
regedit.exe /s %file4%
echo.
echo Uninstalled!
echo.
pause
GOTO END

:END