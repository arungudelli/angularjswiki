+++
title = "Angular Material Tutorial: Creating Angular Apps Using Material Design"
type="post"
summary ="This Angular Material tutorial covers basics of Angular material.Material module helps us to create high-quality UI apps with Angular framework by using Material Design"
keywords=["angular material tutorial,material design,angular material,angular 7 material apps"]
date="2018-02-14T01:01:05+0000"
lastmod="2019-02-02T08:07:46+0000"
draft=false
authors = ["admin"]
[image]
  caption = "Angular keyValue pipe"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++
# 

Angular Material module helps us to create high-quality UI applications with Angular framework by following Material Design specifications.

In this Angular material tutorial I will explain basics of Angular Material with simple examples,starting from setting up Angular material project in our local machine.

Angular Material project is under active development. New features are being added regularly.Official latest version of Angular Material is 7.0.

{{%toc%}}

## What is Angular Material?

In 2014 Google I/O conference Google announced their new design language called Material Design.

Most of the Android apps like Gmail, Youtube, Google Drive etc developed based on this Material Design spec.

Now with this Angular Material project, we can develop Material Design components for web and mobile browsers.

## Creating Angular Material Project

We will create a new project in our [local development environment](https://www.angularjswiki.com/angular/angular-2-or-angular-local-development-environment-setup/) called Angular-Material-tutorial with Angular CLI command. as mentioned in above tutorial setup your local development environment.

<pre>ng new Angular-Material-tutorial</pre>

Now navigate to Angular-Material project folder.

<pre>cd Angular-Material-tutorial</pre>

## Installing Angular Material and Angular CDK Modules

Make sure you install NodeJs in your systems. [NodeJs is required](https://www.angularjswiki.com/angular/is-node-js-required-for-angular-2-or-angular/) to develop Angular Apps.

Install Angular Material and Angular CDK modules by using below node command.

<pre>npm install --save @angular/material @angular/cdk @angular/core @angular/common</pre>

After successful installation, you can see them in _node_modules_ folder as shown below. And inside the material folder, we can see different UI components like buttons, bundles, autocomplete etc.

{{< figure src="Angular-Material-And-CDK-min.png" title="Angular Material And CDK modules" alt="Angular Material And CDK modules">}} 

{{< figure src="Angular-Material-Components-min.png" title="Angular Material Components" alt="Angular Material Components">}} 
 
## Installing Angular Animations Module

Few Material components depend upon Angular Animations modules. Install Angular Animation module with the below command.

<pre>npm install --save @angular/animations</pre>

## Install HammerJS for Gesture Support

Some Angular Material components like mat-slider, matTooltip,mat-slide-toggle rely on HammerJS for gestures.

<pre>npm install --save hammerjs</pre>

After successful installation, add the reference of HammerJS in angular-cli.json file

```
"scripts": [
"../node_modules/hammerjs/hammer.min.js"
]
```
## Adding a Pre-built Angular Material Theme
  
When we install Angular Material few pre-built themes are being installed automatically. Available pre-built themes are
1. indigo-pink
2. deeppurple-amber
3. purple-green
4. pink-bluegrey

Add the theme to global style.css

<pre>@import '~@angular/material/prebuilt-themes/indigo-pink.css';</pre>
    
## Adding Angular Material Icons

If you want to use Material icons, load the official icon fonts in index.html file.

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
    
Then we can `mat-icon` component tag to display named icons

```
<mat-icon>favorite</mat-icon> //Displays love symbol
```
Now we will add a Material Module in our project.

[Complete Angular Material Icon List](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/)
    
## Adding a Custom Angular Material Module

Create a new material module by using following angular-cli command

<pre>ng generate module material</pre>
    
We will use following material UI components in our project

1. [MatButtonModule](https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/)
2. MatToolbarModule
3. MatIconModule
4. MatCardModule
        
Add them in material.module.ts file

```
import { NgModule } from '@angular/core';

import {

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

} from '@angular/material';

@NgModule({

imports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

],

exports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

]

})

export class MaterialModule {}
```
   
I have added them in exports to use them in other modules.

Now our Material Module is ready we will use it in our default app module. Add the MaterialModule in app.module.ts file
        
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } 
       from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({

declarations: [

AppComponent

],

imports: [

BrowserModule,
FormsModule,
HttpModule,
MaterialModule,
BrowserAnimationsModule 

],

providers: [],

bootstrap: [AppComponent]

})

export class AppModule { }
```
        
Make sure you add it after BrowserModule because Material components depend upon BrowserModule. I have added BrowserAnimationModule to support animations.

Angular Material is ready. Now will use available Angular Material components in our template file

I have used `<mat-toolbar> <mat-card> and mat-button` components in this project. Add the following code in app.component.html file.

```
<div id="material-example">
   
  <h1>ToolBar</h1>
   
  <mat-toolbar color="primary">
     
        <span>Material Design Rocks!</span>
   
  </mat-toolbar>
   
   <br/>
   
   <h1>Buttons</h1>

 <mat-card>

  <button mat-button>Basic</button>
  <button mat-raised-button>Raised</button>
  <button mat-icon-button><mat-icon>favorite</mat-icon></button>
  <button mat-fab>Fab</button>
  <button mat-mini-fab>mFab</button>

</mat-card>

</div>
```
I added different types of buttons like basic (mat-button) , Raised (mat-raised-button), icon button(mat-icon-button),fab button (mat-fab) and mini-fab button (mat-mini-fab).

Now open the command prompt and type `ng serve` command after successful compilation browse http://localhost:4200 to load the Angular Material Project.

{{< figure src="Angular-Material-Example-min-1.png" title="Angular Material Example Demo" alt="Angular Material Example Demo">}} 


## List of Available UI components in Angular Material

We can learn how to write Angular code by following best principles with the help of Angular Material UI components

Here is the list of UI components available in Angular Material project.


## Angular Material Form Components List

[table id=33 /]

## Angular Material Navigation Components List

[table id=34 /]

## Angular Material Layout Components List

[table id=35 /]

## Angular Material Buttons & indicators Components

[table id=36 /]

## Angular Material Popups & modals Components

[table id=37 /]

## Angular Material DataTable Components

[table id=38 /]

## Angular Material components Browser support

Angular Material components will work in most of the modern web browsers like Chrome (Android as well), Mozilla, Safari (IOS as well), and IE11/Edge.

[Download Source Code](https://drive.google.com/open?id=0B1CHusWqE9T6cTBBbkd5bnpDSXc) 

## Common errors while setting up Angular Material project</span>:

As Angular and Angular Material projects are receiving continuous updates you might run into few problems setting up Angular Material in your local machine.

You might get few errors if the version of Angular Material not align with the angular core modules versions

<pre>@angular/material/expansion/typings/index.d.ts, found version 4, expected 3</pre>
        
If angular is already installed in your local machine and if it is not the latest version. If you try to install Angular Material you will get following warnings.

```
npm i -g @angular/material
npm WARN @angular/material@6.1.0 requires a peer of @angular/cdk@6.1.0 but none
is installed. You must install peer dependencies yourself.
npm WARN @angular/material@6.1.0 requires a peer of @angular/core@>=6.0.0-beta.0
<7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@6.1.0 requires a peer of @angular/common@>=6.0.0-beta
.0 <7.0.0 but none is installed. You must install peer dependencies yourself.
```

Latest Angular Material Module depend upon Angular CDK,Angular Core and Angular Common modules.

So its always better to install these three modules together.
        
```
npm install @angular/material @angular/cdk @angular/core @angular/common
```
And further @angular/core has a dependency on reactive js and zone.js modules. Install both modules using below command
        
<pre>npm install rxjs zone.js</pre>
