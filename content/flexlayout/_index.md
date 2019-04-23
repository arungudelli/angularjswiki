+++
title = "Angular Flex Layout Tutorial with examples"
date = 2018-09-09T00:00:00
# lastmod = 2018-09-09T00:00:00

draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.

# Add menu entry to sidebar.
[menu.flexlayout]
  name = "Overview"
  weight = 1
+++

In this Angular Flexlayout tutorial, we will learn how to build powerful responsive HTML UI layouts in Angular apps using flex layout module.

## What is Angular Flex Layout

Using flexbox CSS layout we can change the width and height of HTML DOM elements based upon the available space.

We can define different kinds of layouts for different kinds of display devices and different screen sizes.

And this flexbox CSS layout is direction-agnostic i.e its free from any directional constraints, 

whereas the existing display block layout is vertically biased and inline layout is horizontally biased.

A flex container expands its child elements to fill available free space, or shrinks them to prevent overflow.

This kind of approach works well with small pages, but this approach is not flexible enough to support larger and complex applications when it comes to orientation changing, resizing, stretching, shrinking.

## Problems with CSS based flexbox

Most of the Flexbox CSS libraries are either

* pure CSS-only implementations or
* JS+CSS stylesheets.

AngularJS (1.x version) material layout API is built using JS+CSS.

AngularJS Material clearly explained the limitations of a CSS based FlexBox layout like limitations with using parameterized values.

Even for limited set of allowed value variations we need to write so many required CSS classes which increses the complexity of the code.

Other problems includes

* CSS specific issues are increasing rapidly
* The amount of CSS generated for flexbox CSS is extremely huge(>250k)
* And if you chane the layout direction we need to change the child flexbox stylings.
* And there is no support for customized media query breakpoints.

Angular flex layout addressed the above problems.Angular flex layout is a pure-Typescript based UI Layout engine which uses HTML markup (aka Layout API) to specify the layout configurations.

Angular flex layout is only available for Angular applications and requires Angular version 4.1 and above.

Angular Flex Layout is an UI layout engine built on top of CSS flexbox,mediaquery and exposes FlexBoxModule and few Angular directives through which we can develop powerful UI layouts.

In normal CSS flexbox or CSS grid, we have to write complex CSS code with the help of  mediaqueries to build responsive layouts. And it also difficult to understand.

But with this new Angular flexbox layout we can directly define flexbox layout settings inside the HTML template with the help of flexbox directives.

## Advantages of Angular flex layout

When compare to AngularJS Material layout, angular flex layout has several advantages.

1. The Angular flex layout code is easier to maintain and debug
2. Angular flex layout does not depend upon Angular Material
3. There is no external CSS requirements
4. Angular flex layout Supports different kinds of Handset/Tablet and Orientation breakpoints
5. Support for ANY Layout injector value (instead of increments for 5)
6. Support for raw values or interpolated values
7. Support for raw, percentage or px-suffix values and Change detection for Layout injector values
8. Uses provider to supply custom breakpoints
9. Notifications for breakpoints changes
10. Includes workaround for MediaQuery issues with overlapping breakpoints
11. MediaQuery Activation detection

## Angular flex layout basics

Angular flex layout features divided into two main categories

1. Static API
2. Responsive API

Each API has its own directives or APIs which can be applied on flexbox container or flexbox child elements.

In this section we will learn about basic flex layout directives

## Angular flex layout directives for flexbox containers

The following API or directives are used on flexbox container

1. fxLayout
2. fxLayoutGap
3. fxLayoutAlign

### fxLayout

1. fxLayout is a directive used to define the layout of the HTML elements. i.e., it decides the flow of children elements within a flexbox container
2. fxLayout should be applied on the parent DOM element i.e., flexbox container.And fxLayout directive case sensitive.
3. The allowed values of fxLayout are row,coumn,row-reverse,column-reverse.

```
<div fxLayout="row" fxLayout.xs="column">
<div class="child-1"></div>
<div class="child-2"></div>
</div>
```
### fxLayoutGap

fxLayoutGap is a directive that defines the gap between the children items within a flexbox container.

```
<div fxLayoutGap="5px"></div>
```

### fxLayoutAlign

fxLayoutAlign directive defines alignment of children element within the flexbox parent container.

We can set the alignment of both main-axis and cross axis as shown below.

```
<div fxLayout="row" fxLayoutAlign="<main-axis> <cross-axis>" >
</div>
```

You will understand it further while going through the example.

## Angular flex layout directives for flexbox children:

The following directives are applicable to flexbox children elements

1. fxFlex
2. fxFlexOrderfx
3. FlexOffset
4. fxFlexAlign
5. fxFlexFill

### fxFlex 

This markup specifies the resizing of its host element within a flexbox container flow

```
<div fxFlex="1 2 calc(15em + 20px)"></div>
```
### fxFlexOrder

Defines the order of a flexbox item

```
<div fxFlexOrder="2"></div>
```

### fxFlexOffset

Offset a flexbox item in its parent container flow layout

```
<div fxFlexOffset="20px"></div>
```

### fxFlexAlign 

Works like fxLayoutAlign, but applies only to a single flexbox item, instead of all of them

```
<div fxFlexAlign="center"></div>
```

### fxFlexFill

Maximizes width and height of element in a layout container

```
<div fxFlexFill></div>
```
## Installing Angular Flex Layout

To install angular flex layout in our Anguar projects use the below command
```
npm install --save @angular/flex-layout @angular/cdk
```
After installing flex layout we need to import flexLayoutModule in our `app.module.ts` file as shown below.
```
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
imports: [ FlexLayoutModule ],
});
```
## Angular Flex Layout desktop API

Angular flex static API contains a list HTML attributes that can be applied on layout containers and elements to build responsive HTML layouts.

It is called as desktop API because it provides UX that will adjust element sizes and positions as the browser window width changes.

We will understand each one of them using simple examples.

## Angular Flex layout Examples

Angular Flex layout has four differenct types of layout options as listed below

1. row
2. column
3. row-reverse
4. column-reverse

## Angular Flex Layout row example

After installing angular flex layout, we will create a component called angular-flex-layout in our project.
```
ng generate component angular-flex-layout
```
And in the template file add the below code
```
<div class="container">
<div class="flex-container" fxLayout="row">
  <mat-card class="child-1">1. One</mat-card> 
  <mat-card class="child-2">2. Two</mat-card> 
  <mat-card class="child-3">3. Three</mat-card>
</div>
</div>
```
Add fxLayout attribute to the flexbox container.

To understand the behaviour of flexbox items we will background color to to the children element. 

Here I have used material card as flexbox items.

```
.child-1{
background-color: orange;
}
.child-2{
background-color: yellow;
}
.child-3{
background-color: green;
}

.container{
 margin: 15px;
 height:200px;
 border:2px solid red;
}
```
The above flex layout code generates output as shown below

One thing you need to understand is alignment of elements.

Elements are positioned across main axis (horizontal incase of row layout) and cross axis (vertical incase of row layout)

In angular flex layout row alignment by default elements are positioned at start of the flex container and expanded (streched) vertically as shown above.

We can chane this alignment using fxLayoutAlign API.

fxLayoutAlign is an API used to change the alignment of children elements in flex box container.

We can give different kinds of values to fxLayoutAlign attribute as shown below.

Main Axis values

* start
* center
* end
* space-around
* space-between
* space-evenly

Cross Axis values

* start
* center
* end
* stretch

See the below flex layout row demo to understand how to align children elements inside the flex box container.

Angular Flex layout row example demo

## Angular Flex Layout column example 

Now we will go through the column layout example.

Just add fxLayout  attribute value as column as shown below.

```
<div class="container">
<div class="flex-container" fxLayout="column">
<mat-card class="child-1">1. One</mat-card> 
<mat-card class="child-2">2. Two</mat-card> 
<mat-card class="child-3">3. Three</mat-card>
</div>
</div>
```

Similarly we can change the alignment of children element using fxLayoutAlign attribute.

Angular Flex layout column example demo

## Angular Flex Layout responsive API

Using Angular flex layout responsive API engine we can easily change the UX layout to adopt different sizes devices.

Responsive engine has some predefined breakpoint aliases with its mediaquery values.

We have to extend the static flex layout API by using these breakpoint aliases.

Go through the below list of breakpoint aliases and its media query values.

|breakpoint | mediaQuery|
|-----------|-----------|
|xs: extra small|'screen and (max-width: 599px)'|
|sm: small medium|'screen and (min-width: 600px) and (max-width: 959px)'
|md: medium|'screen and (min-width: 960px) and (max-width: 1279px)'|
|lg: large|'screen and (min-width: 1280px) and (max-width: 1919px)'|
|xl: extra large|'screen and (min-width: 1920px) and (max-width: 5000px)'|
|lt-sm: less than small medium|'screen and (max-width: 599px)'|
|lt-md: less than medium|'screen and (max-width: 959px)'|
|lt-lg: less than large|'screen and (max-width: 1279px)'|
|lt-xl: less than extra large|'screen and (max-width: 1919px)'|
|gt-xs: greater than extra large|'screen and (min-width: 600px)'|
|gt-sm: greater than small medium|'screen and (min-width: 960px)'|
|gt-md: greater than medium|'screen and (min-width: 1280px)'|
|gt-lg: greater than large|'screen and (min-width: 1920px)'|

Now we will take an example of row layout

Usually the elements in row layout are aligned horizontally as explained above.

But in mobile devices we cannot show all the elements in row layout as the width of the mobile device is small.

In this case we need to change flexbox elements layout from row to column incase of mobile devices.

The suitable breakpoint aliase is extra small i.e., xs maximum width is 599px.

```
<div class="container">
<div class="flex-container" fxLayout="row" fxLayout.xs="column">
<mat-card class="child-1">1. One</mat-card> 
<mat-card class="child-2">2. Two</mat-card> 
<mat-card class="child-3">3. Three</mat-card>
</div>
</div>
```
I have added an extra attribute `fxLayout.xs` with values as column.

So basically we are giving instructions to flex layout engine saying if the device width is extra small follow the column layout otherwise default layout i.e., row layout.

Responsive engine example
