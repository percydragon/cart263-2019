@ECHO OFF
set file1="%CD%\Icons\miku_recyclebin_empty.ico"
set file2="%CD%\Icons\miku_recyclebin_full.ico"
set file3="%CD%\Registry\RecycleBin_miku.reg"
set file4="%CD%\Registry\RecycleBin_default.reg"
set file5="%CD%\Other\Uninstall.cmd"
set destination="%SystemRoot%\MikuRecycleBin\"

:START
cls
echo Hatsune Miku Recycle Bin - Installer
echo.
echo 1: Install
echo 2: Uninstall
SET /P RESPONSE=Choose an option: 
IF /I "%RESPONSE:~0,1%"=="1" GOTO INSTALL
IF /I "%RESPONSE:~0,1%"=="2" GOTO UNINSTALL
GOTO START

:INSTALL
echo.
echo Copying files...
echo.
xcopy %file1% %destination% /v /y
xcopy %file2% %destination% /v /y
xcopy %file4% %destination%\Registry\ /v /y
xcopy %file5% %destination% /v /y
echo.
echo Applying Miku icons...
echo.
regedit.exe /s %file3%
echo.
echo Installed!
echo.
pause
GOTO END

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