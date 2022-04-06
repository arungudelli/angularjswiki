+++
title = "fxFlexFill in Angular flex layout example"
date = 2022-04-05T00:00:00
lastmod = 2022-04-05T01:00:00
draft = false  # Is this a draft? true/false 
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
prev = "flexlayout/fxFlexOrder"
parentdoc="flexlayout"
featured="fxFlex_api.jpg"
authors = ["admin"]
summary ="fxFlexFill is used to maximizes width and height of flex element inside a flex container in Angular flex layout."
keywords=["fxFlexFill,fxFlexFill example,fxFlexFill api"]

#Add menu entry to sidebar.
linktitle = "fxFlexFill"
[menu.flexlayout]
  parent = "Tutorial"
  weight = 6
+++

`fxFlexFill` is used to maximize the width and height of flex elements inside a flex container in Angular flex layout.

{{% toc %}}

## What is `fxFlexFill` Directive?

1. `fxFlexFill` should be added to a flex container.
2. However we can use this directive on flex children elements as well but it will mess up your design.

## How `fxFlexFill` works?

When we add `fxFlexFill` directive to an element it will add following inline styles.

```
{
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
}
```
Have a look at the below HTML div element.

```
<div fxFlexFill></div>

<div fxflexfill="" style="height: 100%; min-height: 100%; min-width: 100%; width: 100%;">
</div>
```

So irrespective of the element i.e, flex parent container or children elements the inline styles will be added. 

We can add this `fxFlexFill` to any HTML elements, not necessarily flex layout elements.

```
<p fxFlexFill></p>
<p fxflexfill="" style="height: 100%; min-height: 100%; min-width: 100%; width: 100%;">
</p>
```

## `fxFlexFill` example

Let's go through an example to understand it further. 

I have added `fxFlexFill` to the flex layout container.

```
<div class="content" fxLayout="row" fxFlexFill>
  <div class="sec1">first-section</div>
  <div class="sec2">second-section</div>
  <div class="sec3">third-section</div>
</div>

<div class="content" fxLayout="row">
  <div class="sec1">first-section</div>
  <div class="sec2">second-section</div>
  <div class="sec3">third-section</div>
</div>
``` 

For the first row layout the inline styles being added.

But you don't see any difference between two flex layout row elements. 

{{< figure src="/img/flexLayout/fxFlexFill/fxFlexFill-no-difference.png" title="fxFlexFill no difference" alt="fxFlexFill no difference">}} 


Let's add a parent element with the height to the angular flex layout container.

```
Without fxFlexFill
<div style="height:200px">
  <div class="content" fxLayout="row">
    <div class="sec1">first-section</div>
    <div class="sec2">second-section</div>
    <div class="sec3">third-section</div>
  </div>
</div>

With fxFlexFill

<div style="height:200px">
  <div class="content" fxLayout="row" fxFlexFill>
    <div class="sec1">first-section</div>
    <div class="sec2">second-section</div>
    <div class="sec3">third-section</div>
  </div>
</div>
```

Now the children elements inside the `fxFlexFill` container will occupy full width and height.

When we apply `fxFlexFill` to the parent flex container the children elements spread across the flex container. 

{{< figure src="/img/flexLayout/fxFlexFill/fxFlexFill-example.png" title="fxFlexFill example" alt="fxFlexFill example">}} 



## `fxFlexFill` on children elements

Let's understand what happens when we apply `fxFlexFill` on children elements inside Angular flex layout container.

I have added height and width of 200px for parent container and 100px for flex container.

If we apply `fxFlexFill` on children elements each element takes 100px width and height.

```
<div style="height:200px;width:200px;background-color:black">
  <div class="content" fxLayout="row" style="height:100px;width:100px">
    <div class="sec4" fxFlexFill></div>
    <div class="sec5" fxFlexFill></div>
    <div class="sec6" fxFlexFill></div>
  </div>
</div>
```

{{< figure src="/img/flexLayout/fxFlexFill/fxFlexFill-children-element.png" title="fxFlexFill children element" alt="fxFlexFill children element">}} 

## fxFlexFill StackBlitz demo & source code.

Here is the link to StackBlitz demo and source code.

[https://stackblitz.com/edit/fxflexfill](https://stackblitz.com/edit/fxflexfill)




