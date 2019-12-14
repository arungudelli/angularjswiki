+++
title = "Angular Material Tutorial with examples"
date = 2019-12-13T00:00:00
lastmod = 2019-12-13T01:00:00

draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
next="material/badge"
featured="Angular-Material-Tutorial.jpg"
authors = ["admin"]
summary ="Understanding Angular Material Modules with examples"
keywords=["Angular Material,Material Modules"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.material]
  parent = "Tutorial"
  weight = 1

+++



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

<div class="table-responsive">
<table class="table">
	<thead>
		<tr>
			<th>Form Components</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Autocomplete</td>
			<td>&lt;mat-form-field&gt;
  &lt;input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto"&gt;
&lt;&#47;mat-form-field&gt;

&lt;mat-autocomplete #auto="matAutocomplete"&gt;
  &lt;mat-option *ngFor="let option of options" [value]="option"&gt;{{option}}&lt;&#47;mat-option&gt;
&lt;&#47;mat-autocomplete&gt;</td>
		</tr>
		<tr>
			<td><a href="https://www.angularjswiki.com/angular/checkbox-implementation-in-angular-using-angular-material/" target="_blank">Checkbox</a></td>
			<td>&lt;mat-checkbox&gt;Check me!&lt;&#47;mat-checkbox&gt;
</td>
		</tr>
		<tr>
			<td>Datepicker</td>
			<td>&lt;input matInput [matDatepicker]="picker" placeholder="Choose a date"&gt;
  &lt;mat-datepicker-toggle matSuffix [for]="picker"&gt;&lt;&#47;mat-datepicker-toggle&gt;
  &lt;mat-datepicker #picker&gt;&lt;&#47;mat-datepicker&gt;</td>
		</tr>
		<tr>
			<td>Form field</td>
			<td>&lt;mat-form-field&gt;
    &lt;input matInput placeholder="Input"&gt;
  &lt;&#47;mat-form-field&gt;</td>
		</tr>
		<tr>
			<td>Input</td>
			<td>&lt;mat-form-field class="example-width"&gt;
    &lt;textarea matInput placeholder="Leave a comment"&gt;&lt;&#47;textarea&gt;
  &lt;&#47;mat-form-field&gt;</td>
		</tr>
		<tr>
			<td>Radio button</td>
			<td>&lt;mat-radio-group&gt;
  &lt;mat-radio-button value="1"&gt;Option 1&lt;&#47;mat-radio-button&gt;
  &lt;mat-radio-button value="2"&gt;Option 2&lt;&#47;mat-radio-button&gt;
&lt;&#47;mat-radio-group&gt;</td>
		</tr>
		<tr>
			<td>Select</td>
			<td>&lt;mat-select placeholder="Select City"&gt;
    &lt;mat-option *ngFor="let city of cities" [value]="city.id"&gt;
      {{city.name}}
    &lt;&#47;mat-option&gt;
  &lt;&#47;mat-select&gt;</td>
		</tr>
		<tr>
			<td>Slider</td>
			<td>&lt;mat-slider&gt;&lt;&#47;mat-slider&gt;
</td>
		</tr>
		<tr>
			<td>Slide toggle</td>
			<td>&lt;mat-slide-toggle&gt;Slide me!&lt;&#47;mat-slide-toggle&gt;
</td>
		</tr>
	</tbody>
</table>
</div>


## Angular Material Navigation Components List

<div class="table-responsive"><table class="table">	<thead>
		<tr>
			<th>Navigation Components</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Menu</td>
			<td>&lt;button mat-button [matMenuTriggerFor]="menu"&gt;Menu&lt;&#47;button&gt;
&lt;mat-menu #menu="matMenu"&gt;
  &lt;button mat-menu-item&gt;Item 1&lt;&#47;button&gt;
  &lt;button mat-menu-item&gt;Item 2&lt;&#47;button&gt;
&lt;&#47;mat-menu&gt;</td>
		</tr>
		<tr>
			<td>Side Nav</td>
			<td>&lt;mat-sidenav-container&gt;
  &lt;mat-sidenav mode="side" opened&gt;Sidenav content&lt;&#47;mat-sidenav&gt;
  &lt;mat-sidenav-content&gt;Main content&lt;&#47;mat-sidenav-content&gt;
&lt;&#47;mat-sidenav-container&gt;</td>
		</tr>
		<tr>
			<td>Toolbar</td>
			<td>&lt;mat-toolbar&gt;Toolbar&lt;&#47;mat-toolbar&gt;
</td>
		</tr>
	</tbody>
</table></div>


## Angular Material Layout Components List

<div class="table-responsive"><table class="table">	<thead>
		<tr>
			<th>layout Components</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Card</td>
			<td>  &lt;mat-card&gt;Simple card&lt;&#47;mat-card&gt;
</td>
		</tr>
		<tr>
			<td><a href="https://www.angularjswiki.com/angular/angular-material-divider-mat-divider-example/" target="_blank">Divider</a></td>
			<td>  &lt;mat-divider&gt;&lt;&#47;mat-divider&gt;
</td>
		</tr>
		<tr>
			<td>Expansion Panel</td>
			<td>&lt;mat-expansion-panel&gt;
    &lt;mat-expansion-panel-header&gt;
      &lt;mat-panel-title&gt;
        Panel Title
      &lt;&#47;mat-panel-title&gt;
      &lt;mat-panel-description&gt;
        panel Description
      &lt;&#47;mat-panel-description&gt;
    &lt;&#47;mat-expansion-panel-header&gt;
    &lt;p>I'm visible When opened&lt;&#47;p>
  &lt;&#47;mat-expansion-panel&gt;</td>
		</tr>
		<tr>
			<td>Grid list</td>
			<td>&lt;mat-grid-list&gt;
  &lt;mat-grid-tile&gt;1&lt;&#47;mat-grid-tile&gt;
  &lt;mat-grid-tile&gt;2&lt;&#47;mat-grid-tile&gt;
&lt;&#47;mat-grid-list&gt;
</td>
		</tr>
		<tr>
			<td>List</td>
			<td>&lt;mat-list role="list"&gt;
  &lt;mat-list-item role="listitem"&gt;Item 1&lt;&#47;mat-list-item&gt;
  &lt;mat-list-item role="listitem"&gt;Item 2&lt;&#47;mat-list-item&gt;
&lt;&#47;mat-list&gt;
</td>
		</tr>
		<tr>
			<td>Stepper</td>
			<td>&lt;mat-horizontal-stepper&gt;
  &lt;mat-step&gt;
  Step 1
  &lt;&#47;mat-step&gt;
  &lt;mat-step&gt;
  Step 2  
  &lt;&#47;mat-step&gt;
  &lt;mat-step&gt;
    Done
  &lt;&#47;mat-step&gt;
&lt;&#47;mat-horizontal-stepper&gt;
</td>
		</tr>
		<tr>
			<td>Tabs</td>
			<td>&lt;mat-tab-group&gt;
  &lt;mat-tab label="First"&gt; Tab 1 &lt;&#47;mat-tab&gt;
  &lt;mat-tab label="Second"&gt; Tab 2 &lt;&#47;mat-tab&gt;
  &lt;mat-tab label="Third"&gt; Tab 3 &lt;&#47;mat-tab&gt;
&lt;&#47;mat-tab-group&gt;
</td>
		</tr>
		<tr>
			<td>Tree</td>
			<td>&lt;mat-tree&gt;
  &lt;mat-tree-node&gt; parent&lt;&#47;mat-tree-node&gt;
  &lt;mat-tree-node&gt; -- child1 &lt;&#47;mat-tree-node&gt;
  &lt;mat-tree-node&gt; -- child2 &lt;&#47;mat-tree-node&gt;
&lt;&#47;mat-tree&gt;</td>
		</tr>
	</tbody>
</table></div>


## Angular Material Buttons & indicators Components

<div class="table-responsive"><table class="table">	<thead>
		<tr>
			<th>Buttons&amp; indicators</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Button</td>
			<td>&lt;button mat-button&gt;Click me!&lt;&#47;button&gt;
</td>
		</tr>
		<tr>
			<td>Button toggle</td>
			<td>&lt;mat-button-toggle-group name="fontStyle" aria-label="Font Style"&gt;
  &lt;mat-button-toggle value="bold"&gt;Bold&lt;&#47;mat-button-toggle&gt;
  &lt;mat-button-toggle value="italic"&gt;Italic&lt;&#47;mat-button-toggle&gt;
  &lt;mat-button-toggle value="underline"&gt;Underline&lt;&#47;mat-button-toggle&gt;
&lt;&#47;mat-button-toggle-group&gt;
</td>
		</tr>
		<tr>
			<td>Badge</td>
			<td>&lt;p matBadge="4" matBadgeOverlap="false"&gt;Text with a badge&lt;&#47;p&gt;</td>
		</tr>
		<tr>
			<td>Chips</td>
			<td>&lt;mat-chip-list&gt;
  &lt;mat-chip&gt;Chip 1&lt;&#47;mat-chip&gt;
  &lt;mat-chip&gt;Chip 2&lt;&#47;mat-chip&gt;
  &lt;mat-chip&gt;Chip 3&lt;&#47;mat-chip&gt;
&lt;&#47;mat-chip-list&gt;</td>
		</tr>
		<tr>
			<td>Icon</td>
			<td>&lt;mat-icon&gt;home&lt;&#47;mat-icon&gt;</td>
		</tr>
		<tr>
			<td>Progress spinner</td>
			<td>&lt;mat-spinner&gt;&lt;&#47;mat-spinner&gt;
</td>
		</tr>
		<tr>
			<td><a href="https://www.angularjswiki.com/angular/progress-bar-in-angular-mat-progress-bar-examplematerial-design/" target="_blank">Progress bar</a></td>
			<td>&lt;mat-progress-bar mode="determinate" value="40"&gt;&lt;&#47;mat-progress-bar&gt;
</td>
		</tr>
		<tr>
			<td>Ripples</td>
			<td>&lt;div
     matRipple
     [matRippleCentered]="centered"
     [matRippleDisabled]="disabled"
     [matRippleUnbounded]="unbounded"
     [matRippleRadius]="radius"
     [matRippleColor]="color"&gt;
  Click me
&lt;&#47;div&gt;</td>
		</tr>
	</tbody>
</table></div>


## Angular Material Popups & modals Components

<div class="table-responsive"><table class="table">	<thead>
		<tr>
			<th>popups &amp; modals</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Bottom Sheet</td>
			<td>const bottomSheetRef = bottomSheet.open(SocialShareComponent, {
  ariaLabel: 'Share on social media'
});</td>
		</tr>
		<tr>
			<td>Dialog</td>
			<td>let dialogRef = dialog.open(UserProfileComponent, {
  height: '400px',
  width: '600px',
});</td>
		</tr>
		<tr>
			<td>Snackbar</td>
			<td>let snackBarRef = snackBar.open('Message archived');
</td>
		</tr>
		<tr>
			<td>Tooltip</td>
			<td>&lt;button mat-raised-button
        matTooltip="Tooltip Action"
        &gt;
  Tooltip
&lt;&#47;button&gt;</td>
		</tr>
	</tbody>
</table></div>


## Angular Material DataTable Components

<div class="table-responsive"><table class="table">	<thead>
		<tr>
			<th>DataTable Components</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Paginator</td>
			<td>&lt;mat-paginator [length]="100"
              [pageSize]="10"
              [pageSizeOptions]="[5, 10, 25, 100]"&gt;
&lt;&#47;mat-paginator&gt;
</td>
		</tr>
		<tr>
			<td>Sort Header</td>
			<td>&lt;table matSort (matSortChange)="sortData($event)"&gt;
  &lt;tr&gt;
    &lt;th mat-sort-header="name"&gt;name&lt;&#47;th&gt;
    &lt;th mat-sort-header="id"&gt;id&lt;&#47;th&gt;
  &lt;&#47;tr&gt;

  &lt;tr *ngFor="let item of sortedData"&gt;
    &lt;td&gt;{{item.name}}&lt;&#47;td&gt;
    &lt;td&gt;{{item.id}}
  &lt;&#47;tr&gt;
&lt;&#47;table&gt;
</td>
		</tr>
		<tr>
			<td>Table</td>
			<td>&lt;table mat-table [dataSource]="dataSource"&gt;
  &lt;ng-container matColumnDef="position"&gt;
    &lt;th mat-header-cell *matHeaderCellDef>id&lt;&#47;th&gt;
    &lt;td mat-cell *matCellDef="let element"&gt; {{element.id}} &lt;&#47;td&gt;
  &lt;&#47;ng-container&gt;
  &lt;ng-container matColumnDef="name"&gt;
    &lt;th mat-header-cell *matHeaderCellDef> Name &lt;&#47;th&gt;
    &lt;td mat-cell *matCellDef="let element"&gt; {{element.name}} &lt;&#47;td&gt;
  &lt;&#47;ng-container&gt;

  &lt;tr mat-header-row *matHeaderRowDef="displayedColumns"&gt;&lt;&#47;tr&gt;
  &lt;tr mat-row *matRowDef="let row; columns: displayedColumns;"&gt;&lt;&#47;tr&gt;
&lt;&#47;table&gt;
</td>
		</tr>
	</tbody>
</table></div>


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
