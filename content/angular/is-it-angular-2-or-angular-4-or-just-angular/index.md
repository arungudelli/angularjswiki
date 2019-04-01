+++
title = "Is It Angular 2 Or Angular 4 Or Just Angular?"
type="post"
subtitle = "Angular Version History"
summary ="Explains the version change history of Angular 2 or angular &amp; why we should call just Angular instead of adding suffix like angular 2 or Angular 4."
keywords=["angular 2,angular 4,version history of angular 2,angular"]
date="2019-01-30T01:01:05+0000"
lastmod="2018-10-15T17:01:18+0000"
draft=false
authors = ["admin"]

+++

Angular 2 is completely new framework than Angular Js 1.X and written in typescript. It was a total breaking change.

Recently in March 2017, Google released Angular 4. However, it just an update to Angular 2. To remove this confusion Google started calling it as “Angular” without version suffix.

So It’s just “Angular”.

Go through [History of AngularJs](http://www.angularjswiki.com/angularjs/history-of-angularjs/)

Google clearly mentioned that, we should start avoiding GitHub/NPM libraries prefixed with ng2- or angular2-.

Tweet from Igor Minor one of the key member of Angular Team.

{{< figure src="Its-just-angular.png" title="Its just angular" alt="Its just angular">}} 

## Naming guidelines from Google:

Use “Angular” for versions 2 and later (without version suffix) (Eg: I am an Angular developer).

Use “Angular JS” to descript versions 1.x or earlier.

Use version number only if necessary (Eg: This feature introduced in Angular 4).

Use full semver while reporting bugs (Eg: This bug present in version 2.x.x).

## Why Angular 4 not Angular 3? Version History of Angular.

You might have a doubt why google went for version 4 instead of Version 3.

The core Angular libraries are in one single GitHub repository at github.com/angular/angular.

@angular/Core : Version : v2.3.0

@angular/Compiler : Version : v2.3.0

@angular/Compiler-cli: Version : v2.3.0

@angular/http : Version : v2.3.0

@angular/router : Version : v3.3.0

All of them are having similar versions (except router) and distributed as different NPM packages.

[Why Node Js required for Angular?](http://www.angularjswiki.com/tutorials/angular/is-node-js-required-for-angular-2-or-angular/)

Due to misalignment of router version, Angular team went for Angular 4 instead of Angular 3. So that all the core libraries are aligned and will be easier to maintain, further avoiding confusion.

So do not worry about version numbers here after.

If you are using Angular CLI for creating Angular Apps `ng new my-angular-app` will use Angular version 4.

If you want to use version 2 please install older version CLI and use ng new command to create Angular app in version 2

`npm install -g @angular/cli@1.0.0-rc.4`