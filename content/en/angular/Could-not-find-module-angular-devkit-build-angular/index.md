+++
title = "Fixing Could not find module @angular-devkit/build-angular error in Angular"
subtitle = "Possible ways of fixing Could not find module @angular-devkit/build-angular error in Angular"
type="post"
summary ="To fix Could not find module angular-devkit-build-angular error in Angular follow the below steps 1. Delete node_modules folder and run npm install 2. Install `angular-devkit-build-angular` package as a dev dependency."
keywords=["@angular-devkit/build-angular","@angular-devkit/build-angular error"]
date="2021-12-11T00:00:00+0000"
lastmod="2021-12-11T00:00:05+0000"
draft=false
authors = ["admin"]
[image]
  caption = "Could not find module @angular-devkit/build-angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If you update your Angular application to newer version you might get **Could not find module @angular-devkit/build-angular** error while building or running the application. 

This package `@angular-devkit/build-angular` is introduced in Angular 6.0 as a dev dependency. 

So if you upgrade your application from older version of Angular to Angular 6 or higher, there is a chance that you will get this error. 

Unfortunately there is no straight way to fix this issue. We have to try different ways as mentioned below. 

To fix **Could not find module @angular-devkit/build-angular** error in Angular follow the below steps

1. Delete node_modules folder and run npm install
2. Install `@angular-devkit/build-angular` package as a dev dependency. 
3. Reinstall `@angular/cli`

## Solution 1: Delete node_modules folder and run npm install

If you are upgrading from older version to newer version the `package.json` file will be updated accordingly. 

But our local Angular application will have older versions of packages installed in `node_modules` folder. 

So delete the `node_modules` folder manually from the application directory. 

After that clear the cache using `npm cache clean --verify`.

And then run `npm install` command. 

As `package.json` will have latest updated versions, npm will install all the required packages again to run the Angular application.

## Solution 2 : Install `@angular-devkit/build-angular` package as a dev dependency

If the above method is not working, then install `@angular-devkit/build-angular` package as dev dependency in the new versions of Angular. 

```
npm install --save-dev @angular-devkit/build-angular
```
or if you use yarn run the below command. 
```
yarn add @angular-devkit/build-angular --dev
```
Further you might need to run `npm audit fix --force` command also. 

## Solution 3: Re-install @angular/cli

Further you can try to re-install Angular cli to fix `Could not find module @angular-devkit/build-angular` error. 

Follow the below steps to re-install Angular CLI. 

1. Uninstall Angular CLI `npm uninstall -g @angular/cli`
2. Clear the npm cache `npm cache clean --force`
3. Install Angular CLI again `npm install -g @angular/cli@latest`
4. Run `npm install` again.
5. Finally run the application using `ng build` or `ng serve`