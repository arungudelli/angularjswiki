+++
title = "How to Run Angular commands (ng command) in Windows Powershell"
subtitle = "Fixing ng command error in powershell"
type="post"
summary ="There are two ways to run Angular cli commands from the powershell. 1. By setting the powershell execution policy 2. By deleting 'ng.ps1' file"
keywords=["Angular CLI powershell commands"]
date="2023-02-08T01:01:05+0000"
lastmod="2023-02-08T03:56:11+0000"
draft=false
authors = ["admin"]

+++

By default after installing Angular CLI in our windows systems, `ng` commands will not working in powershell. 

If you try to run Angular CLI commands i.e., `ng` commands in windows powershell you might get following error.

```text
ng : File C:\Users\<username>\AppData\Roaming\npm\ng.ps1 cannot be loaded. The file
C:\Users\<username>\AppData\Roaming\npm\ng.ps1 is not digitally signed. You cannot run this script on the current system.
For more information about running scripts and setting execution policy, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ ng serve
+ ~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

There are two ways to run Angular cli commands from the powershell.

1. By setting the powershell execution policy
2. By deleting `ng.ps1` file

{{%toc%}}

## By setting the powershell execution policy

In Windows OS, the execution of PowerShell scripts is disabled by default. 

To allow the execution of PowerShell scripts, which is required for `npm` global binaries, We need to set the following execution policy.

```text
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): y

```

Go through the link to understand more about the changing execution policy and select appropriate option.

After that verify whether angular commands are running in powershell by checking `ng version` command.

## By deleting `ng.ps1` file

The simple way to fix the issue is to removing `ng.ps1` from the `C:\Users\%username%\AppData\Roaming\npm\` directory.

And then try clearing the `npm` cache located at `C:\Users\%username%\AppData\Roaming\npm-cache\`.

Now if you run `ng` commands in powershell they will execute without any problems.

By default windows blocks running unsigned powershell scripts because of security concerns. 

Still Angular team keeps `ng.ps1` script which is unsigned and if you try to run Angular CLI commands from the powershell they will fail.  

If you remove powershell script `ng.ps1`, As there is no `.ps1` file it will fall back to old `cmd` prompt.
