+++ title = "Angular 11 Release date, features & update to Angular 11 version" subtitle = "Angular 11 version" summary ="Angular 11 is in currently in pre release state. As of now there is no official information regarding Angular 11 release date.In this post I will explain the features of Angular 11 version in detail." keywords=["Angular 11 release date, ng update angular"] date="2020-09-18T01:01:05+0000" lastmod="2020-11-11T00:00:00+0000" type="post" draft=false authors = ["admin"]

[image] caption = "Update Angular CLI version in Angular"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false

+++

Angular 11 version is available now. Before upgrading to Angular 11 version follow the below steps.

1. Upgrade your application to Angular 10 version [Update to Angular 10](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/).
2. Then run `ng update` command.

Today i.e., 11-11-2020 Angular 11 version has released. [Angular 11 version is released](https://www.angularjswiki.com/angular/angular-11-released/)

## Update to Angular 11 Version

If you are running your application in version 10 or Angular 11 pre release versions, it's very easy to upgrade your application to Angular 11.

Just run `ng update` it will suggest the necessary steps as shown below.

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
    We analyzed your package.json, there are some packages to update:

      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       11.0.0-next.2 -> 11.0.0  ng update @angular/cli
      @angular/core                      11.0.0-next.2 -> 11.0.0  ng update @angular/core

    There might be additional packages which don't provide 'ng update' capabilities that are outdated.
    You can update the addition packages by running the update command of your package manager.

```

As I am already using Angular 11.0.0-next.2 version it's suggesting me to run `ng update @angular/cli` and `ng update @angular/core`.

First I ran `ng update @angular/cli`. And it got succeeded.

```
Installing packages for tooling via npm.
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "0.1100.0" (was "0.1100.0-next.2")...
    Updating package.json with dependency @angular/cli @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency karma @ "5.1.1" (was "5.0.9")...
  UPDATE package.json (1361 bytes)
√ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

> Remove deprecated options from 'angular.json' that are no longer present in v11.
  Migration completed.
```

Please commit your changes before running @angular/core update command.

After running `ng update @angular/core` I got following errors it's failed to upgrate to Angular 11 version.

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
                  Package "codelyzer" has an incompatible peer dependency to "@angular/compiler" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0").
                  Package "codelyzer" has an incompatible peer dependency to "@angular/core" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0").
× Migration failed: Incompatible peer dependencies found.
Peer dependency warnings when installing dependencies means that those dependencies might not work correctly together.
You can use the '--force' option to ignore incompatible peer dependencies and instead address these warnings later.
  See "C:\Users\arunkumarg\AppData\Local\Temp\ng-9s5fCf\angular-errors.log" for further details.
```

## Troubleshooting Angular 11 update errors.

I was kind of shocked to see the errors because everytime I update to new version of Angular, I will get errors.

The first step I did to fix the error is to run command with --force flag.

```
ng update @angular/core --force
```

Then it gave one more error `Error: EPERM: operation not permitted`.

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
                  Package "codelyzer" has an incompatible peer dependency to "@angular/compiler" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0").
                  Package "codelyzer" has an incompatible peer dependency to "@angular/core" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0").
    Updating package.json with dependency @angular/compiler-cli @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/language-service @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/animations @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/common @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/compiler @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/core @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/forms @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/platform-browser @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "11.0.0" (was "11.0.0-next.2")...
    Updating package.json with dependency @angular/router @ "11.0.0" (was "11.0.0-next.2")...
  UPDATE package.json (1291 bytes)
\ Installing packages (npm)...npm WARN @angular-devkit/build-angular@0.1100.0 requires a peer of @angular/localize@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @angular-devkit/build-angular@0.1100.0 requires a peer of ng-packagr@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.2.2 requires a peer of @angular/compiler@>=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.2.2 requires a peer of @angular/core@>=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.4.0 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.4.0 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN icss-utils@5.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-extract-imports@3.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-local-by-default@4.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-scope@3.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-values@4.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@10.0.5 requires a peer of node-sass@^4.0.0 || ^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@10.0.5 requires a peer of fibers@>= 3.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-subresource-integrity@1.5.1 requires a peer of html-webpack-plugin@>= 2.21.0 < 5 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

npm ERR! path D:\Angular-Version\hello\node_modules\@angular\core\package.json.189621508
npm ERR! code EPERM
npm ERR! errno -4048
npm ERR! syscall rename
npm ERR! Error: EPERM: operation not permitted, rename 'D:\Angular-Version\hello\node_modules\@angular\core\package.json.189621508' -> 'D:\Angular-Version\hello\node_modules\@angular\core\package.json'
npm ERR!  { [Error: EPERM: operation not permitted, rename 'D:\Angular-Version\hello\node_modules\@angular\core\package.json.189621508' -> 'D:\Angular-Version\hello\node_modules\@angular\core\package.json']
npm ERR!   cause:
npm ERR!    { Error: EPERM: operation not permitted, rename 'D:\Angular-Version\hello\node_modules\@angular\core\package.json.189621508' -> 'D:\Angular-Version\hello\node_modules\@angular\core\package.json'
npm ERR!      errno: -4048,
npm ERR!      code: 'EPERM',
npm ERR!      syscall: 'rename',
npm ERR!      path:
npm ERR!       'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json.189621508',
npm ERR!      dest:
npm ERR!       'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json' },
npm ERR!   stack:
npm ERR!    'Error: EPERM: operation not permitted, rename \'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json.189621508\' -> \'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json\'',
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'rename',
npm ERR!   path:
npm ERR!    'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json.189621508',
npm ERR!   dest:
npm ERR!    'D:\\Angular-Version\\hello\\node_modules\\@angular\\core\\package.json',
npm ERR!   parent: 'hello' }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator (though this is not recommended).

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\arunkumarg\AppData\Roaming\npm-cache\_logs\2020-11-12T03_44_21_161Z-debug.log
× Package install failed, see above.
× Migration failed. See above for further details.  
```

After that I found our that it's related node_modules, so I ran `npm install` command.

```
npm WARN @angular-devkit/build-angular@0.1100.0 requires a peer of @angular/localize@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @angular-devkit/build-angular@0.1100.0 requires a peer of ng-packagr@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.2.2 requires a peer of @angular/compiler@>=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.2.2 requires a peer of @angular/core@>=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.4.0 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.4.0 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN icss-utils@5.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-extract-imports@3.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-local-by-default@4.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-scope@3.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN postcss-modules-values@4.0.0 requires a peer of postcss@^8.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@10.0.5 requires a peer of node-sass@^4.0.0 || ^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@10.0.5 requires a peer of fibers@>= 3.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-subresource-integrity@1.5.1 requires a peer of html-webpack-plugin@>= 2.21.0 < 5 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1 package from 1 contributor and audited 1482 packages in 11.984s
found 0 vulnerabilities
```

Then I ran `ng update @angular/core` command. It got succeeded.

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
```

## Verifying Angular 11 update.

After the update please verify the Angular 11 version update by running `ng version` command.

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 11.0.0
Node: 10.16.0
OS: win32 x64

Angular: 11.0.0
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.0
@angular-devkit/build-angular   0.1100.0
@angular-devkit/core            11.0.0
@angular-devkit/schematics      11.0.0
@schematics/angular             11.0.0
@schematics/update              0.1100.0
rxjs                            6.6.3
typescript                      4.0.3
```

Angular 11 is in currently in pre release state. As of now there is no official information regarding Angular 11 release date.

However our applications can be update to Angular 11 pre release versions.

If your application is in Angular 10 and want to update it to Angular 11 you can use following `ng update` command to upgrate to version 11 of Angular.

```
ng update --next
```

Just add `--next` flag as Angular 11 version is in pre release state.

I strongly suggest you to update your app to Angular 10 before upgrading to Angular 11. [Update to Angular 10](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/)

The command will update the app to Angualr 11 or suggest steps to update it to Angular 11.

```
Installing packages for tooling via npm.
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
Found 3 dependencies.
    We analyzed your package.json, there are some packages to update:

      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       10.1.2 -> 11.0.0-next.2  ng update @angular/cli --next
      @angular/core                      10.1.2 -> 11.0.0-next.2  ng update @angular/core --next
```

So we need to update Angular cli to the version 11.0.0-next.2 version

```
 ng update @angular/cli@11.0.0-next.2 --force
```

As Angular 11 is in pre release state, its better to add version to the command.

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
                  Package "codelyzer" has an incompatible peer dependency to "@angular/compiler" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0-next.2").
                  Package "codelyzer" has an incompatible peer dependency to "@angular/core" (requires ">=2.3.1 <10.0.0 || >9.0.0-beta <10.0.0 || >9.1.0-beta <10.0.0 || >9.2.0-beta <10.0.0" (extended), would install "11.0.0-next.2").
    Updating package.json with dependency @angular-devkit/build-angular @ "0.1100.0-next.2" (was "0.1001.2")...
    Updating package.json with dependency @angular/cli @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/compiler-cli @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/language-service @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/animations @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/common @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/compiler @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/core @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/forms @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/platform-browser @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "11.0.0-next.2" (was "10.1.2")...
    Updating package.json with dependency @angular/router @ "11.0.0-next.2" (was "10.1.2")...
UPDATE package.json (1375 bytes)
√ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

> Replace deprecated library builder '@angular-devkit/build-ng-packagr'.
  Migration completed.

> Remove deprecated options from 'angular.json' that are no longer present in v11.
UPDATE angular.json (3577 bytes)
  Migration completed.
```

Mostly @angular/core will be updated to version 11.0.0-next.2.

You can verify the Angular 11 update by running. `ng --version` command.

```
Angular CLI: 11.0.0-next.2
Node: 10.16.0
OS: win32 x64

Angular: 11.0.0-next.2
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.0-next.2
@angular-devkit/build-angular   0.1100.0-next.2
@angular-devkit/core            11.0.0-next.2
@angular-devkit/schematics      11.0.0-next.2
@schematics/angular             11.0.0-next.2
@schematics/update              0.1100.0-next.2
rxjs                            6.6.3
typescript                      4.0.3

```

[List of features in Angular 11](https://www.angularjswiki.com/angular/angular-11-features/)

## Agnular 11.0.0-rc.1 Released

On 28-10-2020 Angular team released their 11.0.0-rc.1 version.

As part of this release they have fixed few bugs listed below

### Bug Fixes

1. @angular/bazel: Providing stamping information only when if --stamp flag is used [#39392](https://github.com/angular/angular/issues/39392)
2. @angular/compiler: Stopping render3's parseTemplate throwing away the parsed abstract syntax tree(AST) and returning an empty list of HTML nodes if HTML->R3 translation failed.[#39413](https://github.com/angular/angular/pull/39413)
3. @angular/compiler: Fixing issue with i18n and ivy while injecting translated attribute[#38231](https://github.com/angular/angular/issues/38231)
4. @angular/core: stopping errors when ngDevMode is undeclared [#39415](https://github.com/angular/angular/pull/39415)
5. @angular/core: Storing ICU state in LView not in TView [#39233](https://github.com/angular/angular/pull/39233)
6. @angular/core: updating the expected size for cli-hello-world-ivy-i18n after changes to i18n[#39402](https://github.com/angular/angular/pull/39402)
7. @angular/localize: rendering placeholder types in extracted XLIFF files.[#39398](https://github.com/angular/angular/pull/39398)
8. @angular/localize: serializing all the message locations to XLIFF [#39411](https://github.com/angular/angular/issues/39411)
9. @angular/ngcc: capturing UMD/CommonJS inner class implementation node correctly [#39346](https://github.com/angular/angular/pull/39346)

## Angular 11.0.0-rc.0 Released.

Angular version 11.0.0-rc.0 released.

This is the first RC version of Angular 11 which is released on 21st October 2020.

There are few breaking changes happened as part of this release.

Angular 11 no longer supports typescript 3.9 version. We should upgrade to typescript 4.0 version.

## Bug Fixes

1. @angular/common: updating the locales using new Common Locale Data Repository(CLDR) data. [#39343](https://github.com/angular/angular/pull/39343)
2. @angular/compiler: promoting constants in angular templates to Trusted Types [#39211](https://github.com/angular/angular/pull/39211).
3. @angular/core: Checking whether global ngDevMode defined or not.[#36055](https://github.com/angular/angular/pull/36055)
4. language-service: A new Ivy Compiler is created every time language service receives a new request. This is not required if the ts.Program has not changed. [#39231](https://github.com/angular/angular/pull/39231)
5. ngcc: ensuring "inline exports" are interpreted correctly [#39267](https://github.com/angular/angular/pull/39267)
6. platform-server: User should explicitly set the baseUrl when they turn on useAbsoluteUrl.[#39334](https://github.com/angular/angular/pull/39334)
7. @angular/router: Correcting the signature for createUrlTree [#39347](https://github.com/angular/angular/pull/39347)


## Angular 11.0.0-next.2 Released

Angular 11.0.0-next.2 Released on 16th September 2020.

The bug fixes and features of this release are as follows

### Bug Fixes

1. @angular/common: Datepipe rounds up date when fractional second is more than 3 digits.[#37989](https://github.com/angular/angular/issues/37989)
2. @angular/common: i18n locale methods always returns the same reference.[#27003](https://github.com/angular/angular/issues/27003)
3. @angular/compiler: source span for microsyntax text attr should be key span.[#38766](https://github.com/angular/angular/pull/38766)
4. @angular/router: RouteReuseStrategy.shouldReuseRoute has arguments swapped.[#16192](https://github.com/angular/angular/issues/16192)

### Features

There are few features has been added to compiler-cli.

1. Now TemplateTypeChecker operation will get Symbol from a template node
2. Adding an ability to get Symbol of Templates and Elements in component template
3. Adding an ability to get Symbol of AST expression in component template
4. Adding an ability to get symbol of reference or variable
5. We can define interfaces that are used for TemplateTypeChecker.

The changes related to above features has been tracked here [#38618](https://github.com/angular/angular/issues/38618)

### Performance Improvements

1. @angular/compiler-cli: AOT compilation optimizations: Only emit directive/pipe references that are used [#38539](https://github.com/angular/angular/pull/38539)
2. @angular/compiler-cli: Optimize computation of type-check scope information. [#38539](https://github.com/angular/angular/pull/38539)
3. @angular/router: using `ngDevMode` to tree-shake error messages in router [#38674](https://github.com/angular/angular/issues/38674)


## Angular 11.0.0-next.1 Released

Angular 11.0.0-next.1 Released on 9th September 2020.

The bug fixes and features of this release are as follows

### Bug Fixes

1. @angular/compiler-cli: ICU expression (plural) does not work with angular and HTML tags, since angular 9 [#38588](https://github.com/angular/angular/issues/38588)
2. @angular/core: removing CollectionChangeRecord symbol [#38668](https://github.com/angular/angular/pull/38668)
3. @angular/router: Lazy loaded module in named outlet throws error(support lazy loading for empty path named outlets)[#12842](https://github.com/angular/angular/issues/12842)

## Anguar 11.0.0-next.0 Released

Angular 11.0.0-next.0 Released on 2nd September 2020.

The bug fixes and features of this release are as follows

### Bug Fixes

1. @angular/forms: When replacing form control which has async validator the status from statusChange stays PENDING [#20424](https://github.com/angular/angular/issues/20424)
2. @angular/forms: FormGroup & FormControl statusChanges are not emitted on creation. [#14542](https://github.com/angular/angular/issues/14542)
3. @angular/service-worker: Handle eagerly-cached assets unexpectedly missing from the cache [#36539](https://github.com/angular/angular/issues/36539)

### Features

1. service-worker: add `UNRECOVERABLE_STATE` handler. [#36847](https://github.com/angular/angular/pull/36847)

