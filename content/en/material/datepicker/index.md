+++
title = "Datepicker in Angular using mat-datepicker | Material Design"
date = 2019-12-25T00:00:00
lastmod = 2019-12-25T01:00:00
draft = true  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "badge"
featured="angular-material-tooltip.jpg"
authors = ["admin"]
summary ="To add tooltips in Angular we can use angular material tooltip module called MatTooltipModule."
keywords=["matdatepicker,Angular Material datepicker"]


# Add menu entry to sidebar.
linktitle = "Datepicker"
[menu.material]
  parent = "Tutorial"
  weight = 2
+++

To implement date picker in Angular we can use angular material datepicker module called `MatDatepickerModule`.

Date picker is a component which allow users to choose a date from the calendar pop up or enter a date through text input.

`MatDatepickerModule` made up of several material components and directives that work together.

{{%toc%}}

## Datepicker Angular

Steps to create datepicker in Angular applications.

### step 1: Import Angular material datepicker module 

We should add `MatTooltipModule` in our components ts file or `app.module.ts` file or some common material module which can be used across the application as explained in angular material tutorial.

```
import {MatDatepickerModule} from '@angular/material';
```

### step 2: Use matDatepicker selector along with input element

After importing `MatDatepickerModule` in our component file, use `mat-datepicker`,`mat-datepicker-toggle` and `input` elements together as shown below to display calender pop up.

## mat-datepicker example

Now we will implement a basic date picker in angular using `mat-datepicker` element.

1. Add a template reference variable `mat-datepicker` element.   
2. Connect `mat-datepicker` to input element via `[matDatepicker]` property. 
3. Finally add date picker toggle button to display or hide calender popup by using `mat-datepicker-toggle` element. 

```
<input [matDatepicker]="basicDatepicker">
<mat-datepicker-toggle [for]="basicDatepicker"></mat-datepicker-toggle>
<mat-datepicker #basicDatepicker></mat-datepicker>
```

## Change the icon of mat-datepicker-toggle 

To change the icon of datepicker toggle button use `mat-icon` along with `matDatepickerToggleIcon` property inside `mat-datepicker-toggle` element.

```
<input [matDatepicker]="basicDatepicker">
<mat-datepicker-toggle [for]="basicDatepicker">
  <mat-icon matDatepickerToggleIcon>
      keyboard_arrow_down
  </mat-icon>
</mat-datepicker-toggle>
<mat-datepicker #basicDatepicker></mat-datepicker>
```

## mat-datepicker Start View

By default when we open calender pop up it will show the current month calender. Instead of that if we want to set the view to current year we can use `startView` property of `mat-datepicker`.

Allowed values of startView are 

1. month (default)
2. year
3. multi-year

### mat-datepicker startView year

To set the start view to current year (which displays months in the year)set the `startView` property to `year`.

```
<mat-form-field>
    <input matInput [matDatepicker]="pickeryear" placeholder="Choose a date">
    <mat-datepicker-toggle  [for]="pickeryear"></mat-datepicker-toggle>
    <mat-datepicker #pickeryear startView="year"></mat-datepicker>
</mat-form-field>
```
### mat-datepicker startView multi-year

Similary we can set the calender pop up view to `multi-year` to display 24 years.

```
<mat-form-field>
    <input matInput [matDatepicker]="pickeryear" placeholder="Choose a date">
    <mat-datepicker-toggle  [for]="pickeryear"></mat-datepicker-toggle>
    <mat-datepicker #pickeryear startView="year"></mat-datepicker>
</mat-form-field>
```

## mat-datepicker startAt

By default calender pop up shows the month or year containing today's date.

To change this behavior we can use `startAt` property of `mat-datepicker`.

```
<mat-form-field>
    <input matInput [matDatepicker]="startatpicker" placeholder="Choose a date">
    <mat-datepicker-toggle  [for]="startatpicker"></mat-datepicker-toggle>
    <mat-datepicker #startatpicker startView="year" [startAt]="startDate"></mat-datepicker>
</mat-form-field>

```

For example to show calender pop up to display previous year i.e., 2019 we can assign startDate variable to January 2019 as show below.

```
export class DatepickerComponent implements OnInit {

  constructor() { }
  startDate = new Date(2019, 0, 1);
  ngOnInit() {
  }

}
```
## Angular Date picker validations

To 

## mat-datepicker min max validations
