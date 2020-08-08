+++
title = "fxFlexOrder API in Angular flex layout"
date = 2020-07-31T00:00:00
lastmod = 2020-07-31T01:00:00
draft = false  # Is this a draft? true/false 
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
prev = "flexlayout/fxLayoutGap"
parentdoc="flexlayout"
featured="fxFlex_api.jpg"
authors = ["admin"]
summary ="fxFlexOrder is used to order the flex children elements inside a flex container in Angular flex layout"
keywords=["fxFlexOrder,fxFlexOrder example,fxFlexOrder api"]

#Add menu entry to sidebar.
linktitle = "fxFlexOrder"
[menu.flexlayout]
  parent = "Tutorial"
  weight = 4
+++

fxFlexOrder is used to order the flex children elements inside a flex container in Angular flex layout.

{{% toc %}}

## What is fxFlexOrder API?

1. fxFlexOrder should be added to flex children items inside flex container.
2. fxFlexOrder defines the positional ordering the of the elements.

We will create a component called `fxFlexOrderExampleComponent` in our angular project to understand it further.

## fxFlexOrder example

The default order of elements inside the flex container decided based upon the position of the elements placed inside the parent container.  

The default value of fxFlexOrder is '0'.

```
<h2> Without fxFlexOrder</h2>

<mat-card fxLayout>
    <mat-card class="child-1">1. Children</mat-card> 
    <mat-card class="child-2">2. Children</mat-card> 
    <mat-card class="child-3">3. Children</mat-card>
</mat-card>

```

Now we will define the order of children elements using fxFlexOrder.

```
<h2> With fxFlexOrder</h2>

<mat-card fxLayout>
    <mat-card class="child-1" fxFlexOrder="3">1. Children</mat-card> 
    <mat-card class="child-2" fxFlexOrder="2">2. Children</mat-card> 
    <mat-card class="child-3" fxFlexOrder="1">3. Children</mat-card>
</mat-card>

```

## How fxFlexOrder will work?

If we add fxFlexOrder to the flex children, Angular flex layout will add equivalent CSS `order` to the flex children items.

{{< figure src="/img/flexLayout/fxFlexOrder/fxFlexOrder-CSS.PNG" title="fxFlexOrder CSS" alt="fxFlexOrder CSS">}} 

## fxFlexOrder row example

In row layout, fxFlexOrder will change the order of flex items along the main axis depending upon the fxFlexOrder value.

```
<h2> With fxFlexOrder row</h2>

<mat-card fxLayout="row">
    <mat-card class="child-1" fxFlexOrder="3">1. Children</mat-card> 
    <mat-card class="child-2" fxFlexOrder="2">2. Children</mat-card> 
    <mat-card class="child-3" fxFlexOrder="1">3. Children</mat-card>
</mat-card>

```

{{< figure src="/img/flexLayout/fxFlexOrder/fxFlexOrder-row.PNG" title="fxLayoutGap row example" alt="fxLayoutGap row example">}} 

## fxFlexOrder column example

In column layout, fxFlexOrder will change the order of flex items along the vertical axis.

```
<h2> With fxFlexOrder column</h2>

<mat-card fxLayout="column">
    <mat-card class="child-1" fxFlexOrder="3">1. Children</mat-card> 
    <mat-card class="child-2" fxFlexOrder="2">2. Children</mat-card> 
    <mat-card class="child-3" fxFlexOrder="1">3. Children</mat-card>
</mat-card>

```
{{< figure src="/img/flexLayout/fxFlexOrder/fxFlexOrder-column.PNG" title="fxFlexOrder column example" alt="fxFlexOrder column example">}} 

