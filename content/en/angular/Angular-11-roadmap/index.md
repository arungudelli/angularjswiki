+++
title = "Angular 11 Release date, Roadmap & update to Angular 11 version"
subtitle = "Angular 11 version"
summary ="Angular 11 is in currently in pre release state. As of now there is no official information regarding Angular 11 release date."
keywords=["Angular 11 release date, ng update angular"]
date="2020-09-18T01:01:05+0000"
lastmod="2020-09-18T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Update Angular CLI version in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular 11 is in currently in pre release state. As of now there is no official information regarding Angular 11 release date. 

However our applications can be update to Angular 11 pre release versions.

In this post I will explain the features of Angular 11 version in detail.


## Update to Angular 11 Version

If your application is in Angular 10 and want to update it to Angular 11 you can use following `ng update` command to upgrate to version 11 of Angular.

```
ng update --next
```

Just add `--next` flag as Angular 11 version is in pre release state.

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

