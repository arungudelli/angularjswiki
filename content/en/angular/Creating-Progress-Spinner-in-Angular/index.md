+++
title = "Progress Spinner in Angular using mat-progress-spinner"
subtitle = "Learn how to create a beautiful progress spinner in Angular using material design"
type="post"
summary ="We can create a Progress spinner in Angular using material design component mat-progress-spinner."
keywords=["mat-progress-bar,angular material progress bar,mat-progress-bar example"]
date="2018-08-20T01:01:05+0000"
lastmod="2018-11-15T17:02:19+0000"
draft=true
authors = ["admin"]


[image]
  caption = "Angular Material Progress Spinner"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

We can create a Progress spinner in Angular using material design component `mat-progress-spinner` or `mat-spinner`.

Progress Spinner display the progress of an ongoing process by animating the indicator along a fixed invisible circular track in a clockwise direction. i.e., `mat-progress-spinner` is a circular progress indicator.

`mat-progress-spinner` is part of angular material module called `MatProgressSpinnerModule`.

This tutorial contains step by step tutorial to implement progress spinner in angular by following material design specifications.

{{% toc %}}

## Angular Material Progress Spinner

Steps to implement Progress Spinner in Angular using material design

### Step 1: Import MatProgressSpinnerModule 

We can import progress spinner module in our component ts file or `app.module.ts` file or some common material module which can be used across the application as explained in this tutorial.

```
import {MatProgressSpinnerModule} from '@angular/material'
```

### Step 2: Use mat-progress-spinner selector in component html

After importing progress spinner module. We can use one of the two selectors `<mat-progress-spinner>` or `<mat-spinner>` selector in component html file as shown below.

```
<mat-spinner></mat-spinner>
```

### Step 3: Give progress indicator value to mat-progress-spinner

The `value` property of mat-progress-spinner indicates the progress of an on going process. 

The property `value` range is from 0 to 100. 

```
<mat-spinner value="50"></mat-spinner>
```

### Step 4: Define mat-progress-spinner mode or type

We can use `mat-progress-spinner` in two different modes

1. Determinate mode
2. Indeterminate mode

`mode` property indicates the type of progress spinner.

```
<mat-progress-spinner mode="determinate"></mat-progress-spinner>
<mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
```

#### mat-progress-spinner determinate mode

We will use progress spinner with `determinate` mode, when we can detect the process completion rate. 

Process completion determined by `value` property of `mat-progress-spinner`.

If the value is 100, that means the process has been completed.

We should bind the `value` property to the process completion rate to animate the progress spinner.

```
<mat-progress-spinner mode="determinate" value=50>
</mat-progress-spinner>
```

`value` property indicates the progress of the process.

Here the value is static.

`value` property is must when we use determinate progress spinner, otherwise no progress indicator is visible.

```
<mat-progress-spinner mode="determinate">
</mat-progress-spinner>
//No Progress Indicator as there is no value property
```

#### mat-progress-bar indeterminate mode

When an action progress isn’t detectable, or if it’s not necessary to indicate how long an activity will take, we will use `indeterminate` mode.

```
<mat-progress-spinner mode="indeterminate" *ngIf="IsWait">
</mat-progress-spinner>
```

To display the progress indicator we can use `*ngIf` directive.

Ones `ngIf` condition i.e., `IsWait` becomes false. Progress spinner will be removed.

`value` property is ignored in this `indeterminate` mode.

### Step 5: Changing Progress Spinner Styles

`mat-progress-spinner` has three additional properties to style the progress spinner.

1. diameter
2. strokeWidth
2. color

#### Changing Color of mat-progress-spinner

To change the color of mat-progress-spinner, we can use color property.

The default color is themes `primary` color. We can change it to `accent` or `warn`

```

```


## mat-progress-bar real world example

How we can use progress bar in our daily projects?

To understand this we will develop a reading position indicator using mat-progress-bar

## Reading position indicator in Angular using mat-progress-bar

We will implement reading position indicator,based upon scroll position of webpage.

We should calculate the percentage of scroll position and assign it to angular material progress bar percentage property i.e., value property.

We will add a new component in our Angular project called `progress-bar`

```
export class ProgressBarComponent implements OnInit {
 progresValue:number;
 rangeArray:number[];
 constructor() { 
  this.progresValue =0;
  this.rangeArray= new Array(100);
 }

@HostListener("window:scroll", [])
onWindowScroll() {
 var element = document.documentElement, 
 body = document.body,
 scrollTop = 'scrollTop',
 scrollHeight = 'scrollHeight';
 this.progresValue = 
 (element[scrollTop]||body[scrollTop]) / 
 ((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;
}
ngOnInit() {
}
}
```

`progressValue` property binds to `value` property of `mat-progress-bar` selector. `rangeArray` used to generate dummy content.

And `@HostListener` decorator used to track window scroll event. 

As the `value` property is between 0 to 100.
All we need to do is calculate scroll percentage and assign it to `progressValue`

```
<mat-progress-bar [value]="progresValue" *ngIf="progresValue > 0">
</mat-progress-bar>
<div>
<p *ngFor="let i of rangeArray">
Angular Progress Bar
</p>
</div>

```

<a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">*ngIf</a> used to display `mat-progress-bar` only when the value is greater than 0. Otherwise an empty progress bar track displayed on top of webpage.

```
.mat-progress-bar{
 position:fixed;
 top:0px;
}
```

To fix the progress bar on top of the web page. I have added the above css to `.mat-progress-bar` class.

See the <a href="https://angular-twjwtd.stackblitz.io" target="_blank" rel="noopener">read position indicator demo</a>.


## mat-progress-bar is not a known element

If you miss importing Angular material progress bar module `MatProgressBarModule`.You will get mat-progress-bar is not a known element error.

It is better to import all material module in once place as explained in <a href="https://www.angularjswiki.com/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">Angular Material tutorial</a>

## mat-progress-bar properties

We will summarise all the mat-progress-bar properties in one place.

<div class="table-responsive">
<table class="table">
	<thead>
		<tr>
			<th>MatProgressBar property</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>value</td>
			<td>Indicates the progress bar value. Range is 0 to 100. Default value is 0</td>
		</tr>
		<tr>
			<td>mode</td>
			<td>mode values are determinate,indeterminate,buffer, query. Default mode is determinate.</td>
		</tr>
		<tr>
			<td>bufferValue</td>
			<td>bufferValue indicates value of buffer indicator of buffered progress value</td>
		</tr>
		<tr>
			<td>color</td>
			<td>ThemePalette of the theme. defaults to primary.</td>
		</tr>
		<tr>
			<td>progressbarId</td>
			<td>ID of the material progress bar.</td>
		</tr>
	</tbody>
</table>
</div>