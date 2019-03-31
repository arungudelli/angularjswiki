+++
title = "How To Update Angular CLI Version To Latest Versions"
subtitle = "Update Angular CLI version"
summary ="To update Angular CLI versions to latest Angular CLI versions 7 and 6 use below command ng update @angular/cli@latest."
keywords=["ng update angular cli,update angular cli version to 7,update angular cli version to 6"]
date="2019-01-30T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
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

To update the Angular CLI version to 7 simply use the below command.

```
ng update @angular/cli
```

But this command might not work, if you are using older version of Angular CLI. We will start with checking of Angular CLI version and update the Angular CLI package accordingly

{{%toc%}}

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