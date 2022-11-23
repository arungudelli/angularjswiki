+++
title = "How To Update Angular CLI To Latest Version"
subtitle = "Update Angular CLI version"
summary ="To update Angular CLI to latest version Angular, use ng update @angular/core @angular/cli@latest command."
keywords=["ng update angular cli,update angular cli version to 7,update angular cli version to 6"]
date="2019-01-22T01:01:05+0000"
lastmod="2022-11-22T00:00:00+0000"
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

Updating Angular CLI to the latest version (Angular v15) is pretty much simple if you are using Angular 9 or 10 version above. 

Just update `@angular/core` and `@angular/cli` by using `ng update` command.

```
ng update @angular/core @angular/cli
```

or you can use npx command

```
npx @angular/cli update @angular/core @angular/cli
```

If you are using Angular material You have to update it as well using `ng update` command.

```
ng update @angular/material
```

The **Angular latest Official stable version is Angular v15** which is released on 17 November 2022.

Angular 14 version released on 2nd June 2022.

~~The **Angular latest Official stable version is Angular v13.2.5**, which is released on 2nd March 2022.~~ 

Remember below important things, before updating your Angular applications.

{{%toc%}}

## Important things to remember while updating Angular applications.

1. Its always advisable to update your app to its next major version.
2. That is, if you are using Angular 10 then update the application to Angular 11 version.
3. And if you are using Angular 8 or Angular 6,5, 4 etc versions, Do not try to update to latest version of Angular Directly.
3. First Update your Angular app to Angular 9.
4. Then use `ng update` command. 

## Angular CLI version check

Before updating check the Angular version installed in your system by using `ng --version` command.

To update Angular CLI to a new version, It's better to update both the global Angular CLI installed in your machine as well as your project's local Angular CLI.

## Update Angular CLI version Globally

Steps To update Angular CLI version globally in your system.

1. First uninstall the existing Angular cli packages.
2. Then run `npm cache verify` command to clear the node packages cache.
3. Then install latest Angular CLI version using `npm install -g @angular/cli@latest` command.

```
npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm > 5)
npm install -g @angular/cli@latest
```

If you are using MAC or linux systems you might need to add the prefix sudo before npm

```
sudo npm uninstall -g angular-cli
sudo npm cache clean or sudo npm cache verify (if npm > 5)
sudo npm install -g @angular/cli@latest
```

## Your global Angular CLI version is greater than your local version.The local Angular CLI version is used

After updating Angular CLI globally you might get this warning if your local project's angular cli version less than the global angular cli version.

As local packages have more priority than global packages you will get **Your global Angular CLI version is greater than your local version.The local Angular CLI version is used** warning.

So mostly you need to update your local Angular CLI version as well

## Update Angular CLI version Locally

To update Angular CLI version in your local projects use the following commands. 

Navigate to your local Angular project folder and execute the below commands.

```
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

Steps to upgrade Angular application are same across the operating systems like Windows OS,MacOS and Linux OS or Unix based machines.

If you are using older versions of Angular like 5 or 6 or 7. You need to follow some additional steps as shown below.

First update to Angular CLI 6 version and then Angular CLI 7 ==> Angular CLI 8 and finally Angular CLI 9 version.

## Update Angular CLI version to 6

If you are migrating from older versions of Angular CLI like 1.x to Angular 6 version. 

You need to do few additional checks apart from the above commands.

First you need to convert "angular-cli.json" file in older Angular CLI version to the latest "angular.json" file used in version 6.

To convert "angular-cli.json" file, use the following command

```
ng update @angular/cli --from=1.7.4 --migrate-only
```

To convert `angular-cli.json` file pass the current version to ng update by using `--from` flag and additionally use `--migrate-only`. 

The migrate only  flag makes sure that it will do only a migration but does not update the Angular CLI.

And if you use RxJs, you need to update it as well use the below command

`ng update rxjs`

It will update the RxJs version to 6. 

To support older RxJs imports the above command automatically installs the `rxjs-compat` package. 

If you get any error try manual installation.

```
npm i rxjs-compat
npm i @angular-devkit/build-angular
```

And Angular CLI 6 no longer uses `intl` in `polyfills.ts`. 

You can remove the below lines from polyfills.ts

```
import 'intl';
import 'intl/locale-data/jsonp/en';
```

And additionally you need to update the @angular core modules as well

`ng update @angular/core`

## Update Angular CLI version to 7

Once you upgraded to Angular CLI version 6. 

Its very easy to update it to the current latest Angular CLI version 7.

To update Angular CLI version to 7. Just run the following commands

`ng update @angular/cli @angular/core`

The above command updates Angular cli as well as angular core packages.

In addition to that you can refactor the TypeScript code so that it does not depend on `rxjs-compat` modules(as explained above).

To refactor TypeScript code run following command

```
npm install -g rxjs-tslint 
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

Once all of your dependencies have updated to latest RxJS 6, remove `rxjs-compat` package as it increases bundle size.

`npm uninstall rxjs-compat`

## Update Angular CLI version to 7

To update the Angular CLI to latest version 9 follow the below steps.

1. First update the local angular cli to version 8.3.17 or 8.x version by using below command.

    ```
      npm install --no-save @angular/cli@^8.3.15
    ```
2. After updating angular cli to version 8 and above, use the below command to update angular cli to version 9

    ```
      ng update @angular/cli @angular/core --next
    ```

{{< figure src="updating angular cli to version 9.png" title="updating angular cli to version 9" alt="updating angular cli to version 9">}} 


As Angular 9 is in RC period, the flag `--next` is required while using `ng update` command. This flag is not required, once final version of Angular 9 is released.

As there are some breaking changes are coming in Angular 9 

The above commands will run a series of small migrations that will convert the code of your application to be compatible with version 9 as shown below.

{{< figure src="migrating the project to Angular 9.png" title="migrating the project to Angular 9" alt="migrating the project to Angular 9">}} 

## Update Angular CLI version to 10

I updated a sample Angular application to Angular CLI 10 (Which is in version Angular CLI 9).

Updating to Angular 10 is pretty much simple. 

You can see the version update log below.

## Angular 10 Update Log

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 35 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/core @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular-devkit/build-angular @ "0.1000.0" (was "0.900.0")...
    Updating package.json with dependency @angular/compiler-cli @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/animations @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/compiler @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/common @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/platform-browser @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/forms @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency zone.js @ "0.10.3" (was "0.10.2")...
    Updating package.json with dependency @angular/language-service @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency typescript @ "3.9.5" (was "3.6.4")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/router @ "10.0.0" (was "9.0.0")...
UPDATE package.json (1595 bytes)
√ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

> Replace deprecated 'styleext' and 'spec' Angular schematic options.
  Migration completed.

> Update Browserslist configuration file name to '.browserslistrc' from deprecated 'browserslist'.
RENAME browserslist => .browserslistrc
  Migration completed.

> Update tslint to version 6 and adjust rules to maintain existing behavior.
UPDATE package.json (1595 bytes)
UPDATE tslint.json (3348 bytes)
  Migration completed.

> Remove deprecated 'es5BrowserSupport' browser builder option.
  The inclusion for ES5 polyfills will be determined from the browsers listed in the browserslist configuration.
  Migration completed.

> Replace deprecated and removed 'styleext' and 'spec' Angular schematic options with 'style' and 'skipTests', respectively.
  Migration completed.

> Remove deprecated options from 'angular.json' that are no longer present in v10.
  Migration completed.

> Add "Solution Style" TypeScript configuration file support.
  This improves developer experience using editors powered by TypeScript’s language server.
  Read more about this here: https://v10.angular.io/guide/migration-solution-style-tsconfig
RENAME tsconfig.json => tsconfig.base.json
CREATE tsconfig.json (427 bytes)
UPDATE tsconfig.app.json (215 bytes)
UPDATE tsconfig.spec.json (275 bytes)
UPDATE e2e/tsconfig.json (219 bytes)
  Migration completed.

> Add the tslint deprecation rule to tslint JSON configuration files.
  Migration completed.

> Update library projects to use tslib version 2 as a direct dependency.
  Read more about this here: https://v10.angular.io/guide/migration-update-libraries-tslib
  Migration completed.

> Update 'module' and 'target' TypeScript compiler options.
  Read more about this here: https://v10.angular.io/guide/migration-update-module-and-target-compiler-options
UPDATE e2e/tsconfig.json (222 bytes)
  Migration completed.

> Update workspace dependencies to match a new v10 project.
UPDATE package.json (1594 bytes)
√ Packages installed successfully.
  Migration completed.

** Executing migrations of package '@angular/core' **

> Missing @Injectable and incomplete provider definition migration.
  As of Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

> ModuleWithProviders migration.
  As of Angular 10, the ModuleWithProviders type requires a generic.
  This migration adds the generic where it is missing.
  Read more about this here: https://v10.angular.io/guide/migration-module-with-providers
  Migration completed.

> Undecorated classes with Angular features migration.
  In version 10, classes that use Angular features and do not have an Angular decorator are no longer supported.
  Read more about this here: https://v10.angular.io/guide/migration-undecorated-classes
  Migration completed.
```

## Follow the official Angular update recommendations.

The Angular team released an official Angular update guide.

```
https://update.angular.io/ 
```

Go to the website and select your Angular version and the version you wanted to update, it will show the series of recommendations. 

## ng update @angular/cli not working

If you follow the above steps carefully mostly Angular cli version will be updated without any problems. And do not forgot to add @latest suffix.

`ng update @angular/cli@latest`


## Major breaking changes in Angular 10 version

1. Angular 10 supports only typescript 3.9. We have to update Typescript to version 3.9. Typescript versions 3.6, 3.7, and 3.8 are no longer supported.
2. In earlier versions of angular input field of type number used to fire valueChanges two times. First time after typing in the input field and second time when the input field loses the focus. (<a href="https://github.com/angular/angular/pull/36087" target="_blank">PR 36087</a>)
3. The minLength and maxLength validators now verify that a value has numeric length property and only then validation will occur.(<a href="https://github.com/angular/angular/pull/36157" target="_blank">PR 36157</a>)
4. in Angular 10,The Warnings about unknown elements are now logged as errors instead of warnings (console.warn to console.error)(<a href="https://github.com/angular/angular/pull/36399" target="_blank">PR 36399</a>)
5. In previous versions of angular if you return null for UrlMatchResult we used to get `Type 'null' is not assignable to type 'UrlMatchResult'.` error. This has been fixed now 
(<a href="https://github.com/angular/angular/pull/36402" target="_blank">PR 36402</a>)
6. In Angular 10 version transplanted views will refresh only at the insertion location in Ivy.(<a href="https://github.com/angular/angular/pull/35968" target="_blank">PR 35968</a>)
7. If you try to use `formatDate` or [DatePipe](https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/) with the "B" or "b" format codes ("at night", "in the morning", etc.), This does not work for locale "en" (and sublocales) between 21:00 and 06:00. Instead of getting "at night", you'll get "AM/PM".In the older versions the code was not able to handle period of time that crossed midnight. This is fixed as part of (<a href="https://github.com/angular/angular/pull/36611" target="_blank">PR 36611</a>)
8. When an angular route has at least two resolvers, and if any resolver resolves to empty, navigation will be canceled, as it is the behaviour for a single resolver
and if all resolvers resolve to empty, the router will not throw any errors. earlier it used to emit uncaught errors (<a target="_blank" href="https://github.com/angular/angular/pull/24621">PR 24621</a>)

New Angular 10 projects use the filename `.browserslistrc` instead of `browserslist`. And `ng update` will migrate it automatically if your updating from older versions.

Angular 10 recommends the use of a `tsconfig.base.json` to help organize the various typings contexts (shared, unit tests, end to end tests, application, etc). ng update will migrate your project automatically.

{{< figure src="Angular 10 update.png" title="Angular 10 update" alt="Angular 10 update">}}



## Angular version 10.1.2

After releasing Angular 10 version, Angular team at google releasing small minor versions of Angular which fixes few existing bugs and minor features.

As part of this on 16th September 2020, Angular version 10.1.2 released.

I will be listing down the bug fixes and features of this current release.

### Bug Fixes

1. @angular/compiler: Detecting Pipes in International Components for Unicode(ICUs) in template binder. [#38810](https://github.com/angular/angular/pull/38810)
2. @angular/core: Clearing the `RefreshTransplantedView` when detached [#38768](https://github.com/angular/angular/pull/38768)
3. @angular/localize: Making `formatOptions` argument is optional for some lower level APIs used by CLI. [#38787](https://github.com/angular/angular/pull/38787)
4. @angular/router : This bug fix ensure routes are processed in priority order and only if needed. [#38780](https://github.com/angular/angular/pull/38780)
5. @angular/upgrade: Add try/catch when downgrading injectables. [#38671](https://github.com/angular/angular/pull/38671)

### Performance Improvements

Improvements in @angular/compiler-cli package

1. A patch related to AOT compilation optimization,emit directive/pipe references that are used 
2. Optimizing computation of type-check scope information.

The information related to above two improments can be found in below link
[#38843](https://github.com/angular/angular/pull/38843)

Improvements in @angular/ngcc package

1. Introduce cache for sharing data across entry-points
2. Reduce maximum worker count

The information related to above two improments can be found in below link
[#38840](https://github.com/angular/angular/pull/38840)

## Angular version 9.0.0-rc.10 released 

On January 22, 2020 Angular version 9.0.0.-rc.10 is released.

To update angular version to 9.0.0-rc.10 use the below command

```
ng update --next
```
You can see following message in command prompt

```
+ @angular/cli@9.0.0-rc.10
added 261 packages from 206 contributors in 32.549s
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
Found 35 dependencies.
    We analyzed your package.json, there are some packages to update:

Name                               Version                  Command to update
--------------------------------------------------------------------------------
@angular/cdk               8.2.3 -> 9.0.0-rc.8      ng update @angular/cdk --next
@angular/cli               9.0.0-rc.0 -> 9.0.0-rc.10 ng update @angular/cli --next
@angular/core              9.0.0-rc.0 -> 9.0.0-rc.10 ng update @angular/core --next
@angular/material          8.2.3 -> 9.0.0-rc.8      ng update @angular/material --next
```

{{< figure src="angular-cli-version-9-0-0-rc10.png" title="angular-cli-version-9-0-0-rc10" alt="angular-cli-version-9-0-0-rc10">}} 

Make sure you update the angular project to version 9 as explained above, before upgrading to Angular version 9.0.0-rc.10.

As it's pointing out we need to upgrade @angular/cli and @angular/core to 9.0.0-rc.10 version.

Use the below command to update them as well

```
ng update @angular/cli @angular/core --next
```

## Angular 9 Released

On february 7 2020 The Angular 9 version released. 

To update to angular 9 version use the below command.

```
ng update @angular/cli @angular/core
```

If everything is ok then you can see following message in console

```
Your project has been updated to Angular version 9!
For more info, please see: https://v9.angular.io/guide/updating-to-version-9
```

As the final version angular 9 is released. It is not required to use --next flag. 

