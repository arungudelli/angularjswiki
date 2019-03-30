+++
title = "Creating Progress Bar In Angular Using Mat-Progress-Bar Example"
subtitle = "Learn how to create beautiful progress bar using material design"
type="post"
summary ="We can create a beatiful Progress bar in Angular using mat-progress-bar which is part of angular material progress bar module called MatProgressBarModule"
keywords=["mat-progress-bar,angular material progress bar,mat-progress-bar example"]
date="2019-01-30T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
draft=false
authors = ["admin"]


[image]
  caption = "Angular Material Checkbox"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

We can create a beatiful Progress bar in Angular using `<mat-progress-bar>` which is part of angular material progress bar module called `MatProgressBarModule`

In this tutorial we learn how basics of angular material progress bar and then we will create reading position indicator.

{{% toc %}}

## Angular Material Progress Bar

`<mat-progress-bar>` is a horizontal progress bar in Angular, used to inform users about the progress of ongoing tasks like loading a webpage, reading position indicator of a web page or submitting the form data to the server etc. by following material design specifications.

## mat-progress-bar example

To use mat-progress-bar we need to import `MatProgressBarModule` from `@angular/material`

<pre>import {MatProgressBarModule} from '@angular/material'</pre>

After importing angular material progress bar module. We can use <mat-progress-bar> selector in component html file.

`<mat-progress-bar value=40></mat-progress-bar>`
  
## Angular Progress Bar with percentage

mat-progress-bar `value` property represents the progress of an on going process. The property `value` range is from 0 to 100. Its basically percentage of Angular material progress bar.

Now go through the below reading position indicator example to understand mat-progress-bar further.

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

`progressValue` property binds to `value` property of `mat-progress-bar` selector. `rangArray` used to generate dummy content.

And `@HostListener` decorator used to track window scroll event. As the `value` property is between 0 to 100. All we need to do is calculate scroll percentage and assign it to `progressValue`

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

## Angular Material progress bar types

Angular material progress bar mat-progress-bar supports four different types of progress bars.

  1. Determinate mode
  2. Indeterminate mode
  3. Buffer mode
  4. Query mode

`mode` property used to decide type of progress bar. Default mode is `determinate` mode. As explained above.

A progress bar contains two elements

  1. track
  2. indicator

progress bar indicator display progress by animating the indicator along fixed visible track usually width of webpage. The indicator behavior is dependent on mode property of `mat-progress-bar`.

## mat-progress-bar determinate mode

When we know the process completion time before, we use _determinate_ mode. As explained above read position indicator example.

The progress bar indicator increases it's width from 0 to 100% on the track, in sync with the process progress.

```
<mat-progress-bar mode="determinate" value=50></mat-progress-bar>
```

`value` property indicates the progress of the process.

In Google Chrome mobile browser loading of webpage usually indicated by `determinate` progress bar.

## mat-progress-bar indeterminate mode

When we don't know how much time it will take to complete the process we will use `indeterminate` mode.

Sometimes the user is asked to wait from some time, while something finishes like submitting the form data to server or doing some background work.

In that cases,It’s not required to indicate how much time it will take to complete.

```
<mat-progress-bar mode="indeterminate" *ngIf="IsWait"></mat-progress-bar>
```

We can use `*ngIf` to display the mat-progress-bar. Ones `ngIf` condition becoms false. Progress bar will be removed.

value property is ignored in this `indeterminate` mode.

Google products like adwords uses indeterminate progress bar.

## mat-progress-bar buffer mode

buffer mode is useful when we want to display the progress in steps. For example we have a process that is divided into four sub tasks.

Each task completion represented by buffer indicator. And the overall progress represented by normal progress bar indicator along the track.

```
<mat-progress-bar mode="buffer" value=25 bufferValue=50></mat-progress-bar>
```
`bufferValue` property indicates buffer indicator progress.

Make sure `bufferValue` is greater than `value`.Otherwise buffer indicator progress hidden by normal progress indicator.

## mat-progress-bar query mode

query mode is useful when we want to show pre loading of progress.

Once the process loading starts mode should be changed to determinate or indeterminate mode to show the progress of the action.

In query mode mat-progress-bar `value` property is ignored.

```
<mat-progress-bar mode="query"></mat-progress-bar>
```

See the <a href="https://angular-effyrv.stackblitz.io" target="_blank" rel="noopener">different types of progress modes demo</a> example

## mat-progress-bar change color

We can use `color` property of mat-progress-bar to change the color of the progress bar. The default color is themes `primary` color. We can change it to `accent` or `warn`

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