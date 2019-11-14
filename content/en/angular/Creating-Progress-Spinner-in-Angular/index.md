+++
title = "Progress Spinner in Angular using mat-progress-spinner"
subtitle = "Learn how to create a beautiful progress spinner in Angular using material design"
type="post"
summary ="We can create a Progress spinner in Angular using material design component mat-progress-spinner."
keywords=["mat-progress-bar,angular material progress bar,mat-progress-bar example"]
date="2019-11-10T01:01:05+0000"
lastmod="2019-11-10T17:02:19+0000"
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

Progress Spinner displays the progress of an ongoing process by animating the indicator along a fixed invisible circular track in a clockwise direction. i.e., `mat-progress-spinner` is a circular progress indicator.

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

### Step 3: Define mat-progress-spinner mode or type

We can use `mat-progress-spinner` in two different modes

1. Determinate mode
2. Indeterminate mode

`mode` property indicates the type of progress spinner.

```
<mat-progress-spinner value="100" mode="determinate"></mat-progress-spinner>
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

Here the value is static.

`value` property is must, when we use determinate progress spinner, otherwise no progress indicator will be visible.

```
<mat-progress-spinner mode="determinate">
</mat-progress-spinner>
//No Progress Indicator as there is no value property
```

#### mat-progress-bar indeterminate mode

When progress of an action isn’t detectable, or if it’s not necessary to indicate how long an activity will take, we will use `indeterminate` mode.

```
<mat-progress-spinner mode="indeterminate" *ngIf="IsWait">
</mat-progress-spinner>
```

To display the progress indicator we can use `*ngIf` directive.

Ones `ngIf` condition i.e., `IsWait` becomes false. Progress spinner will be removed from the DOM.

`value` property is ignored in this `indeterminate` mode.

{{< video src="/img/material/mat-progress-spinner-indeterminate.mp4" srcwebm="/img/material/mat-progress-spinner-indeterminate.webm">}} 


### Step 4: Give progress indicator value to mat-progress-spinner

As explained above the `value` property of mat-progress-spinner indicates the progress of an on going process. 

And it's applicable only in 'determinate' mode

The property `value` range is from 0 to 100. 

```
<mat-progress-spinner mode="determinate" value="50">
</mat-progress-spinner>
```

#### mat-spinner vs mat-progress-spinner

You might be wondering why we have two elements `mat-spinner` and `mat-progress-spinner`.

In most of the cases we will be using progress spinner with indeterminate mode.

`mat-spinner` is alias for `mat-progress-spinner` with indeterminate mode.

i.e., the below code snippets are same.

```
<mat-progress-spinner mode="indeterminate">
</mat-progress-spinner>

<mat-spinner></mat-spinner>
```

And in `mat-progress-spinner` element `mode` property is required. otherwise no indicator will be displayed.

`mode` is optional in case of `mat-spinner` as the default mode is "indeterminate".

```
<mat-progress-spinner>
</mat-progress-spinner>

//Nothing will be displayed
```

### Step 5: Changing Progress Spinner Styles

`mat-spinner` has three additional properties through which we can style the progress spinner.

1. diameter
2. strokeWidth
2. color

#### Changing Color of mat-progress-spinner

To change the color of mat-progress-spinner, we can use color property.

The default color is themes `primary` color. We can change it to `accent` or `warn`

```
<mat-progress-spinner mode="indeterminate" color="warn">
</mat-progress-spinner>

<mat-progress-spinner mode="indeterminate" color="accent">
</mat-progress-spinner>
```
{{< figure src="mat spinner color example.png" title="mat spinner color example" alt="mat spinner color example">}} 

{{< video src="/img/material/mat spinner color indeterminate.mp4" srcwebm="/img/material/mat spinner color indeterminate.webm">}} 

### Giving custom color to mat-progress-spinner

Color property accepts only default theme ThemePalettes or our custom themes.

In case if you want to give custom color to `mat-spinner`, not color from prebiult-themes, you can override the theme CSS colors by changing circle element stroke property.

```
:host ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {   
    stroke: #0CC20C;
}
```

Or you can give a class name to the mat-spinner element, add the necessary CSS properties and use it wherever required.

```
:host ::ng-deep .custom-spinner circle{   
    stroke: #0CC20C;
}

<mat-spinner class="custom-spinner"
mode="determinate" value="100"></mat-spinner>

```

{{< figure src="mat spinner custom color.png" title="mat spinner custom color" alt="mat spinner custom color">}} 

### Changing Size of mat-spinner using diameter

The default height and width of mat-spinner is "100px".

To change the size of mat-spinner we have to use `diameter` property.

For example to resize height and width of `mat-spinner` to "50px". Give daimeter value as "50"

```
<mat-progress-spinner
mode="determinate" value="100"></mat-progress-spinner>
<mat-progress-spinner diameter="70"
mode="determinate" value="100"></mat-progress-spinner>
<mat-progress-spinner diameter="40"
mode="determinate" value="100"></mat-progress-spinner>
<mat-progress-spinner diameter="20"
mode="determinate" value="100"></mat-progress-spinner>
```

{{< figure src="mat progress spinner size.png" title="mat progress spinner size" alt="mat progress spinner size">}} 


### Changing the Stroke width of progress spinner track

Usually stroke width of progress spinner track will be 10% of progress spinner diameter.

So the default stroke width of `mat-spinner` is "10px"

To change the stroke width of `mat-progress-spinner` we can use `strokeWidth` property.

To set stroke width to "20px". Give "strokeWidth"  value as "20"

```
<mat-spinner
mode="determinate" value="100"></mat-spinner>
<mat-spinner strokeWidth="50"
mode="determinate" value="100"></mat-spinner>
<mat-spinner strokeWidth="40"
mode="determinate" value="100"></mat-spinner>
<mat-spinner strokeWidth="30"
mode="determinate" value="100"></mat-spinner>
<mat-spinner strokeWidth="20"
mode="determinate" value="100"></mat-spinner>
```

{{< figure src="mat progress spinner stroke width.png" title="mat progress spinner stroke width" alt="mat progress spinner stroke width">}} 

## How to Center Mat Progress Spinner

By default progress spinner will be displayed at the top-left corner of the webpage.

To center the progress spinner, set the margin of `mat-spinner` element to "0 auto" 

```
<mat-spinner style="margin:0 auto;"></mat-spinner>
```

The above CSS code will center the progress spinner horizontally.

## Mat-Progress-Spinner Overlay

In some cases, we will display a progress spinner overlay over an HTML element or entire DOM.
 
Follow the below steps to display `mat-spinner`, overlay over entire webpage.

1. First center the `mat-spinner` in the middle of the webpage.
2. Place it inside an overlay div element

To center the progress spinner middle of the webpage. I have added a div element with the class name "center" and placed `mat-spinner` inside that element.

```
<div class="center">
    <mat-progress-spinner diameter=50 
	                      mode="indeterminate"
						  color="accent">
	</mat-progress-spinner> 
</div>
```

Added the below CSS to center the div

```
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}
```

Now progress spinner will be displayed at center of the screen.

And in next step we will create an overlay `<div>` and place the above `<div>` along with `mat-progress-spinner` element inside that element.

```
<div class="overlay">
<div class="center">
    <mat-progress-spinner diameter=50 
	                      mode="indeterminate" 
						  color="accent">
	</mat-progress-spinner> 
</div>
</div>
```

The below CSS overlay the div element.

```
.overlay{
  height:100vh;
  width:100%;
  background-color:rgba(0, 0, 0, 0.286);
  z-index:    10;
  top:        0; 
  left:       0; 
  position:   fixed;
}
```

We are setting overlay div element's height to 100% of viewport height.

This may add scrollbar to the webpage because of default margin of body element.

To avoid scroll bar we have to set the body element margin to 0.

This should be added to global style sheet (styles.scss) file.

```
body{
	margin:0;
}
```

We might use overlay progress spinner in many places in our application.

Instead of copy pasting the above code in all places, we will create a reusable component.

{{< video src="/img/material/mat spinner overlay.mp4" srcwebm="/img/material/mat spinner overlay.webm">}}



## Creating mat-spinner-overlay component

Using `ng generate` command, we will create a component called `mat-spinner-overlay`.

```
ng generate component mat-spinner-overlay
```

In `mat-spinner-overlay.component.ts` file add the below code snippet.

```
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-spinner-overlay',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss']
})
export class MatSpinnerOverlayComponent implements OnInit {

  constructor() { }

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  ngOnInit() {

  }

}

```

I have added all input properties supported by `mat-spinner` component and an extra property called `overlay` to decide whether it's an overlay spinner or not.

And now in `mat-spinner-overlay.component.html` file we will use `overlay` property to toggle between regular `mat-progress-spinner` and overlay progress spinner with the help of [*ngIf](https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples) and [ng-template](https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/)

```
<ng-container *ngIf="overlay;else progressSpinner">
<div class="overlay">
    <div class="center">
        <ng-template [ngTemplateOutlet]="progressSpinner"></ng-template>
    </div>
</div>
</ng-container>
<ng-template #progressSpinner>
    <mat-progress-spinner 
     [diameter]="diameter"
     [mode]="mode" 
     [color]="color"
     [strokeWidth]="strokeWidth"
     [value]="value">
    </mat-progress-spinner>
</ng-template>
```


And finally add the necessary CSS `mat-spinner-overlay.component.scss` file as explained above.

```
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

.overlay{
  height:100vh;
  width:100%;
  background-color:rgba(0, 0, 0, 0.286);
  z-index:    10;
  top:        0; 
  left:       0; 
  position:   fixed;
}

```

So to display overlay spinner use `app-mat-spinner-overlay` element with overlay propery true.

```
<app-mat-spinner-overlay overlay="true">
</app-mat-spinner-overlay>

```
To use regular progress spinner just use `app-mat-spinner-overlay`

```
<app-mat-spinner-overlay>
</app-mat-spinner-overlay>
```

Progress Spinner displays the progress of an ongoing process by animating the indicator along a fixed invisible circular track in a clockwise direction

In `mat-progress-spinner`, animation will happen along invisible circular track.

What if we want to animate the progress on a visible circular track? 

Just like twitter loading spinner as shown below

{{< figure src="Twitter like circular indicator.png" title="twitter loading spinner" alt="twitter loading spinner">}} 


Now we will learn how to create such progress indicator using mat-progress-spinner.

## Creating twitter like loading spinner using mat-spinner.

If you observe the above picture there are two main elements are there

1. One circular track with color opacity.
2. Other one is animating circle.

To animvate `mat-progress-spinner` along a fixed visible track we can use two `mat-spinner` elements.

One element will act as circular track. So we can use `mat-progress-spinner` with determinate mode and value as "100" to complete the circle.

Other will be regular indeterminate progress spinner element which is nothing but animating circle.

```
<mat-spinner class="track" 
mode="determinate" value="100">
</mat-spinner>
<mat-spinner></mat-spinner>
```
Now we have to give opacity to circular track `mat-spinner` element.

So I have added `stroke-opacity:0.3` CSS to mat progress spinner circle element.

```
:host ::ng-deep .track circle{       
    stroke-opacity: 0.3 !important;
}
```

And finally we need to place the animating circle on top of circular track element.

The default display CSS property of `mat-progress-element` is "block".

If we change it to inline they will be placed on top of each other.

So I have created an element with the class name "twitter-like" and placed both `mat-spinner` elements inside of it.

```
<div class="twitter-like">
<mat-spinner class="background" 
    mode="determinate" 
	value="100">
</mat-spinner>
<mat-spinner></mat-spinner>
</div>
```

And now we will override the default display property of both elements using `.mat-progress-spinner` class.

```
.twitter-like{
    .mat-progress-spinner{
        display: inline;
    }
}
```

{{< video src="/img/material/Twitter like progress spinner.mp4" srcwebm="/img/material/Twitter like progress spinner.webm">}} 

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