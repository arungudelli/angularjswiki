+++
title = "How To Update Angular CLI To Latest Version 9 & Angular 10"
subtitle = "Update Angular CLI version"
summary ="To update Angular CLI to latest version 9 & Angular 10 use ng update @angular/core @angular/cli@latest command."
keywords=["ng update angular cli,update angular cli version to 7,update angular cli version to 6"]
date="2019-01-22T01:01:05+0000"
lastmod="2020-06-24T00:00:00+0000"
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

Angular 10.0.0 is finally here. While upgrading to Angular 10 version remember few things before running `ng update` command.

1. Its always advisable to update your app to its next major version.
2. That is if you are using Angular 7 or Angular 8 or Angular 6,5, 4 etc versions, Do not try to update to Angular 10 Directly.
3. First Update your Angular app to Angular 9.
4. Then use `ng update` command. 

On June 25, 2020 Angular version 10.0.0 is released.

Angular 10 version one of the major release after version 9 which was released 4 months
ago.

As I said above, Updating to Angular 10 is easy If your application using using Angular 9 version. 

Just update @angular/core and @angular/cli by using `ng update` command.

```
ng update @angular/core @angular/cli
```

If you are using Angular material You have to update it as well using `ng update` command.

```
ng update @angular/material
```

If you are using older versions other than 9. First better to update to Angular 9 as mentioned below.

Steps to upgrade Angular application are same across the operating systems like Windows OS,MacOS and Linux OS or Unix based machines.

## Major breaking changes in Angular 10 version

1. Angular 10 supports only typescript 3.9. We have to update Typescript to version 3.9. Typescript versions 3.6, 3.7, and 3.8 are no longer supported.
2. In earlier versions of angular input field of type number used to fire valueChanges two times. First time after typing in the input field and second time when the input field loses the focus. (<a href="https://github.com/angular/angular/pull/36087" target="_blank">PR 36087</a>)
3. The minLength and maxLength validators now verify that a value has numeric length property and only then validation will occur.(<a href="https://github.com/angular/angular/pull/36157" target="_blank">PR 36157</a>)
4. in Angular 10,The Warnings about unknown elements are now logged as errors instead of warnings (console.warn to console.error)(<a href="https://github.com/angular/angular/pull/36399" target="_blank">PR 36399</a>)
5. In previous versions of angular if you return null for UrlMatchResult we used to get `Type 'null' is not assignable to type 'UrlMatchResult'.` error. This has been fixed now 
(<a href="https://github.com/angular/angular/pull/36402" target="_blank">PR 36402</a>)
6. In Angular 10 version transplanted views will refresh only at the insertion location in Ivy.(<a href="https://github.com/angular/angular/pull/35968" target="_blank">PR 35968</a>)
7. If you try to use `formatDate` or [DatePipe](https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/) with the "B" or "b" format codes ("at night", "in the morning", etc.), this does not work for locale "en" (and sublocales) between 21:00 and 06:00. Instead of getting "at night", you'll get "AM/PM".In the older versions the code was not able to cope with a period that crossed midnight. This is fixed as part of (<a href="https://github.com/angular/angular/pull/36611" target="_blank">PR 36611</a>)
8. When an angular route has at least two resolvers, and if any resolver resolves to empty, navigation will be canceled, as it is the behaviour for a single resolver
and if all resolvers resolve to empty, the router will not throw any errors. earlier it used to emit uncaught errors (<a target="_blank" href="https://github.com/angular/angular/pull/24621">PR 24621</a>)

New Angular 10 projects use the filename `.browserslistrc` instead of `browserslist`. And `ng update` will migrate it automatically if your updating from older versions.

Angular 10 recommends the use of a `tsconfig.base.json` to help organize the various typings contexts (shared, unit tests, end to end tests, application, etc). ng update will migrate you automatically.

{{< figure src="Angular 10 update.png" title="Angular 10 update" alt="Angular 10 update">}}

I updated a sample Angular application to Angular 10 (Which is in version Angular 9).

Updating to Angular 10 is pretty much simple. You can see the version update log below.

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

If you are using older versions of Angular like 5 or 6 or 7. You need to follow some additional steps as show below.

## Angular CLI version check

To check the Angular CLI version use to below command

`ng -version`

## Update Angular CLI version Globally

To update Angular CLI version globally in your system use the below commands

```
npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm &gt; 5)
npm install -g @angular/cli@latest
```

First you need to uninstall the existing angular cli packages followed by _npm cache verify_ command to clear the cache related problems.

And the install the Angular CLI version again by using _npm install -g @angular/cli@latest_

If you are using MAC or linux systems you might need to add the prefix before npm

```
sudo npm uninstall -g angular-cli
sudo npm cache clean or sudo npm cache verify (if npm > 5)
sudo npm install -g @angular/cli@latest
```

## Your global Angular CLI version is greater than your local version.The local Angular CLI version is used

After updating Angular CLI globally you might get this warning if your local project's angular cli version less than the global angular cli version.

As local packages have more priority than global packages you will get _Your global Angular CLI version is greater than your local version.The local Angular CLI version is used_

So mostly you need to update your local Angular CLI version as well

## Update Angular CLI version Locally

To update Angular CLI version in your local projects use the following commands. Navigate to your local Angular project and execute the below commands.

```
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

## Update Angular CLI version to 6

If you are migrating from older Angular CLI versions like 1.x to latest Angular version 6. You need to do few additional checks apart from above commands.

First of all you need to convert _angular-cli.json_ file older Angular CLI version to latest _angular.json_ used in version 6.

To convert it use the following command

```
ng update @angular/cli --from=1.7.4 --migrate-only
```

To convert _angular-cli.json_ file pass the current version to ng update by using from flag and additionally use _--migrate-only._ The migrate only  flag makes sure that it will do only a migration but does not update the Angular CLI.

And if you RxJs you need to update it as well use the below command

`ng update rxjs`

It will update the RxJs version to 6. To support older RxJs imports the above command automatically installs the _rxjs-compat_ package. If you get any error try manual installation.

```
npm i rxjs-compat
npm i @angular-devkit/build-angular
```

And Angular CLI version 6 no longer uses _intl_ in _polyfills.ts. _You can remove the below lines from polyfills.ts

```
import 'intl';
import 'intl/locale-data/jsonp/en';
```

And additionally you need to update the @angular core modules as well

`ng update @angular/core`

## Update Angular CLI version to 7

Once you upgraded to Angular CLI version 6. Its very easy to update it to the current latest Angular CLI version 7.

To update Angular CLI version to 7. Just run the following commands

`ng update @angular/cli @angular/core`

The above command updates Angular cli as well as angular core packages.

In addition to that you can refactor the TypeScript code so that it does not depend on _rxjs-compat_ modules(as explained above).

To refactor TypeScript code run following command

```
npm install -g rxjs-tslint 
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

Once all of your dependencies have updated to latest RxJS 6, remove rxjs-compat package as it increases bundle size.

`npm uninstall rxjs-compat`

## ng update @angular/cli not working

If you follow the above steps carefully mostly Angular cli version will be updated without any problems. And do not forgot to add @latest suffix.

`ng update @angular/cli@latest`