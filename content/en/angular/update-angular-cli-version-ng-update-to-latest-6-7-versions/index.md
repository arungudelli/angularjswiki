+++
title = "How To Update Angular CLI To Latest Version 9"
subtitle = "Update Angular CLI version"
summary ="To update Angular CLI to latest version 9 use below command ng update @angular/cli@latest."
keywords=["ng update angular cli,update angular cli version to 7,update angular cli version to 6"]
date="2019-01-22T01:01:05+0000"
lastmod="2020-01-22T00:45:18+0000"
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