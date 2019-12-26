+++
title = " Angular Material Tooltip: mattooltip example"
date = 2019-12-13T00:00:00
lastmod = 2019-12-13T01:00:00

draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "badge"
featured="angular-material-badge.jpg"
authors = ["admin"]
summary ="To add tooltips in Angular we can use angular material tooltip module called MatTooltipModule."
keywords=["mattooltip,Angular Material Tooltip"]


# Add menu entry to sidebar.
linktitle = "Tooltip"
[menu.material]
  parent = "Tutorial"
  weight = 2
+++

To add tooltips in Angular we can use angular material tooltip module called `MatTooltipModule`.

`matTooltip` selector is used to display the tooltip when the user hovers over an element or longpresses an elements in mobile devices.

{{%toc%}}


## Tooltip in Angular

Steps to add tooltips in Angular applications.

### step 1: Import Angular material tooltip module 

We can import tooltip module (MatTooltipModule) in our components ts file or app.module.ts file or some common material module which can be used across the application as explained in angular material tutorial.

```
import {MatTooltipModule} from '@angular/material';
```

### step 2: Use matTooltip selector to display tooltips

After importing `MatTooltipModule` in our component file, we can use `matTooltip` selector to add tooltip texts as shown below. 

```
<button mat-raised-button
        matTooltip="Tooltips in Angular">
  Tooltip
</button>
```
In the above code I am adding tooltip to a button element.

### step 3: Set the tooltip Position using matTooltipPosition 

By default tooltip is displayed below the element. 

we can change the tooltip position by using `matTooltipPosition` input property.  

#### matTooltip above

To display tooltip above the element set the `matTooltipPosition` property as `above`

```
<button mat-raised-button
        matTooltip="Tooltip above the element"
        matTooltipPosition="after">
  Tooltip
</button>
```

#### matTooltip below

Default behavior.

Tooltip always displayed below the element

```
<button mat-raised-button
        matTooltip="Tooltip below the element"
        matTooltipPosition="below">
  Tooltip
</button>
```

#### matTooltip left

To display tooltip on the left side of element we can set property to "left" as shown below.

```
<button mat-raised-button
        matTooltip="Tooltip on the left side of  the element"
        matTooltipPosition="left">
  Tooltip
</button>
```

If there is no enough space to display tooltip on the left side, then it will be displayed on the right side of element.

#### matTooltip right

To display tooltip on the right side of element we can set property to "right" as shown below.

```
<button mat-raised-button
        matTooltip="Tooltip on the right side of  the element"
        matTooltipPosition="right">
  Tooltip
</button>
```

If there is no enough space to display tooltip on the right side, then it will be displayed on the left side of element.

### Angular tooltips in RTL websites

If you are developing RTL (Right To Left) websites, and to display tooltips on the left side or right of the HTML elements we have to use "before" and "after" instead of "left" or "right".

#### matTooltip before

In RTL website layouts,below code displays the tooltip on the left side of the element. 

```
<button mat-raised-button
        matTooltip="Tooltip before the element"
        matTooltipPosition="before">
  Tooltip
</button>
```

#### matTooltip after

If you set `matTooltipPosition` property to "after", the tooltip will be displayed after the element in RTL websites.

```
<button mat-raised-button
        matTooltip="Tooltip on the right side of  the element"
        matTooltipPosition="after">
  Tooltip
</button>
```

## Disable tooltips in Angular using matTooltipDisabled

`matTooltipDisabled` is used to disable tooltips in Angular. 

```
<button mat-raised-button
        matTooltip="Disable tooltip"
        matTooltipDisabled="true">
Disable tooltip
</button>
```

We can dynamically change the `[matTooltipDisabled]` input property by binding to a variable. 

So depending upon the usage we can disable or enable tooltip from showing.

```
<button mat-raised-button
        matTooltip="Disable tooltip"
        [matTooltipDisabled]="isDisabled">
Disable tooltip
</button>
```

## Adding delay before showing or hiding the tooltip

Generally, the tooltip will be displayed immediately when the user's mouse hovers over the element and hides immediately when the user's mouse leaves.

In mobile devices, the tooltip is displayed when the user longpresses the tooltip's trigger element and it will hide after a delay.

The default tooltip hide delay is 1500ms.

To add a delay before showing or hiding the tooltip, we can use `matTooltipShowDelay` and `matTooltipHideDelay` input properties.

The two properties accepts delay time in milliseconds.

### matTooltipShowDelay And matTooltipHideDelay example

Now we will learn how to add delay before showing or hiding the tooltip with an example.

```
<!--Input to add a delay between hovering over the element and displaying the tooltip-->
<mat-form-field>
  <input matInput placeholder="Show delay in milliseconds)"
         type="number"
         [formControl]="showDelay">
</mat-form-field>

<!--Input to add a delay between hovering away from the element and hiding the tooltip-->

<mat-form-field>
  <input matInput placeholder="Hide delay in milliseconds"
         type="number"
         [formControl]="hideDelay">
</mat-form-field>

<!--Element that displays a tooltip with a custom delay in showing and hiding-->
<button mat-raised-button
        matTooltip="Info about the action"
        [matTooltipShowDelay]="showDelay.value"
        [matTooltipHideDelay]="hideDelay.value">
  Action
</button>
```
And in our component ts file we can assign some default values to `showDelay` and `hideDelay` form elements as shown below.

```
@Component({
  selector: 'app-tooltip-delay-example',
  templateUrl: 'app-tooltip-delay-example.html',
  styleUrls: ['app-tooltip-delay-example.css'],
})
export class TooltipDelayExample implements OnInit {

  showDelay = new FormControl(2000);
  hideDelay = new FormControl(3000);
  constructor() { }
  ngOnInit() {}

}
```

## Adding a class to tooltip container using matTooltipClass

We can give custom class to tooltip container using `matTooltipClass`.It has similar syntax as `ngClass`.

This is very useful incase if we want to style our tooltip like changing the background color of tooltip container, increase or decrease font size of tooltip or adding a line break to the tooltip text etc.

```
<button mat-raised-button
        matTooltip="Adding a class to the tooltip container"
        matTooltipClass="custom-tooltip">
  Custom tooltip
</button>
```

And in our component's style.css file we can override the existing tooltip styles by using `matTooltipClass` value.

```
.custom-tooltip {

}
```

### Set font size of Angular Material Tooltip

