+++
title = "fxLayoutGap API in Angular flex layout"
date = 2020-07-31T00:00:00
lastmod = 2020-07-31T01:00:00
draft = true  # Is this a draft? true/false 
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
prev = "flexlayout/fxLayout"
parentdoc="flexlayout"
featured="fxFlex_api.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to use fxLayoutGap API in Angular flex layout with examples."
keywords=["fxLayout,fxLayout example,fxLayout api"]

#Add menu entry to sidebar.
linktitle = "fxLayoutGap"
[menu.flexlayout]
  parent = "Tutorial"
  weight = 3
+++

fxLayoutGap API is one of the static API in Angular flex layout. And in this tutorial we will understand how fxLayoutGap will work using simple detailed examples.

{{% toc %}}

## What is fxLayoutGap API?

1. fxLayoutGap is used to specify gap between flex children items inside flex container.
2. fxLayoutGap is an optional API.
3. fxLayoutGap directive should be added to parent container i.e, flex container.

{{% alert note%}}
fxLayout is case sensitive. So Use "fxLayout" only. "L" Capital.
{{% /alert %}}

We will create a component called `FxLayoutGapExampleComponent` in our angular project to understand in further.

## fxLayoutGap example

First we will see how children elements inside the container renders without fxLayoutGap directive.

```
<h2> Without fxLayoutGap API</h2>

<mat-card fxLayout>
    <mat-card class="child-1">1. Children</mat-card> 
    <mat-card class="child-2">2. Children</mat-card> 
    <mat-card class="child-3">3. Children</mat-card>
</mat-card>

```

Now we will add a gap between flex children items using fxLayoutGap. 

I have added a 20px gap between flex items inside the flex container.

```
<h2> With fxLayoutGap API</h2>

<mat-card fxLayout fxLayoutGap="20px">
    <mat-card class="child-1">1. Children</mat-card> 
    <mat-card class="child-2">2. Children</mat-card> 
    <mat-card class="child-3">3. Children</mat-card>
</mat-card>
```

## How fxLayoutGap will work?

When we add fxLayoutGap to the parent container, Angular flex layout will add an inline CSS `margin-right` or `margin-bottom` to the children items depending upon the flex layout row or column.

And the this inline CSS will be added to all the children items except last one.

## fxLayoutGap with fxLayout row

When we are using fxLayputGap with row layout margin-right inline CSS will be added to the flex children.

```
<h2> With fxLayoutGap With Row fxLayout</h2>

<mat-card fxLayout="row" fxLayoutGap="30px">
    <mat-card class="child-1">1. Children</mat-card> 
    <mat-card class="child-2">2. Children</mat-card> 
    <mat-card class="child-3">3. Children</mat-card>
</mat-card>
```

In the above row layout example, I have added a gap of 30px between flex children items using fxLayoutGap.

## fxLayoutGap with fxLayout column

When we fxLayputGap to the column layout margin-bottom inline CSS will be added to the flex children.

```
<h2> With fxLayoutGap With column fxLayout</h2>

<mat-card fxLayout="column" fxLayoutGap="20px">
    <mat-card class="child-1">1. Children</mat-card> 
    <mat-card class="child-2">2. Children</mat-card> 
    <mat-card class="child-3">3. Children</mat-card>
</mat-card>
```

In the above column layout example, A gap of 20px will be added between flex children items as I have added fxLayoutGap as 20px.

{{< figure src="/img/flexLayout/fxLayout/fxLayout-row.PNG" title="fxLayout row example" alt="fxLayout row example">}} 






## fxLayout column

fxLayout column will display flex items children along the vertical axis inside the container.


```
<div fxLayout="column">
  <div>1. One</div>
  <div>2. Two</div>
  <div>3. Three</div>
  <div>4. Four</div>
</div>
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-column.PNG" title="fxLayout column example" alt="fxLayout column example">}} 


## How fxLayout works?

You might be wondering how adding an attribute `fxLayout` will magically change the flow of elements inside the container.

If you have prior experience in CSS flex box you might be knowing, how it will work internally.

When we add `fxLayout` attribute with row value, Angular flex layout internally adds inline css to the flex container, which decides the flow of children.

In the above example fxLayout row attribute adds the below CSS to the flex container.

```
flex-direction: row;
box-sizing: border-box;
display: flex;
```

The above CSS properties will decides the flow of flex items. 

fxLayout row will adds the `flex-direction` property with the value `row`.

Similarly fxLayout column attribute adds the below inline CSS.

```
flex-direction: column;
box-sizing: border-box;
display: flex;
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-row-CSS.PNG" title="fxLayout row CSS example" alt="fxLayout row CSS example">}} 

{{< figure src="/img/flexLayout/fxLayout/fxLayout-column-CSS.PNG" title="fxLayout column CSS example" alt="fxLayout column CSS example">}} 

## fxLayout wrap

Even though there is no space along the horizontal axis, Flex items inside the flex container always displayed in single line.

By default wrapping is not enabled. 

```
<h2>With fxLayout no row wrap</h2>

<mat-card fxLayout="row" fxLayoutGap="30px">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. Four</mat-card>
    <mat-card class="child-3">1. Five</mat-card>
    <mat-card class="child-3">1. Six</mat-card>
</mat-card>
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-row-no-wrap.PNG" title="fxLayout row no wrap" alt="fxLayout row no wrap">}} 

## fxLayout row wrap

To wrap flex items in multiple lines add "wrap" parameter in addition to the direction. 

```
<div fxLayout="row wrap"></div>
```

I have added fxLayoutGap to give some space between flex items.

```
<h2>With fxLayout row wrap</h2>

<mat-card fxLayout="row wrap" fxLayoutGap="30px">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. Four</mat-card>
    <mat-card class="child-3">1. Five</mat-card>
    <mat-card class="child-3">1. Six</mat-card>
</mat-card>
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-row-wrap.PNG" title="fxLayout row wrap" alt="fxLayout row wrap">}} 


fxLayout row wrap will add following inline CSS to the fxLayout container.

```
flex-flow: row wrap;
box-sizing: border-box;
display: flex;
```

## fxLayout column wrap

Similary to wrap flex items in column layout, along the vertical axis we should add "wrap" along with "column" property to the fxLayout.

To understand this I have added fixed height (style="height:200px;") to fxLayout container. 

```
<h2>With fxLayout no column wrap</h2>

<mat-card fxLayout="column" fxLayoutGap="30px" style="height:200px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. Four</mat-card>
    <mat-card class="child-3">1. Five</mat-card>
    <mat-card class="child-3">1. Six</mat-card>
</mat-card>

```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-column-no-wrap.PNG" title="fxLayout column no wrap" alt="fxLayout column no wrap">}} 

Now we will add wrap to fxLayout column and see how it will work.

```
<h2>With fxLayout column wrap</h2>

<mat-card fxLayout="column wrap" fxLayoutGap="30px" style="height:200px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. Four</mat-card>
    <mat-card class="child-3">1. Five</mat-card>
    <mat-card class="child-3">1. Six</mat-card>
    <mat-card class="child-3">1. Six</mat-card>

</mat-card>

```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-column-wrap.PNG" title="fxLayout column wrap" alt="fxLayout column wrap">}} 

The following CSS code will be added to the fxLayout container.

```
height: 200px;
flex-flow: column wrap;
box-sizing: border-box;
display: flex;
```

## fxLayout inline

If you want use inline-flex CSS display property, instead of the default flex. 

We can add `inline` as secondary parameter along with layout direction property.

```
<div fxLayout="row inline">
  <div>1. Child</div> <div>2. Child</div> <div>3. Child</div>
</div>
```

So what's the difference between display flex vs display inline flex?

## fxLayout display flex vs inline flex

Display inline flex makes the flex container(parent) display inline not flex items(children).

I have added inline property to the fxLayout and some text after flex container.

```
<h2>With fxLayout row inline</h2>

<mat-card fxLayout="row inline" fxLayoutGap="30px" style="width: 500px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. four</mat-card>
    <mat-card class="child-3">1. five</mat-card>
    <mat-card class="child-3">1. six</mat-card>

</mat-card>

Element After flex row

```
As I gave "width:500px" and no wrap. The elements inside the flex container will not wrap and will be overflowed on top of text because the parent container has display inline flex.

```
width: 500px;
flex-direction: row;
box-sizing: border-box;
display: inline-flex;
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-inline.PNG" title="fxLayout inline" alt="fxLayout inline">}} 

In the default view it's not the case. As flex container takes entire available width, so elements after flex container will be displayed in next line.

```
<h2>With fxLayout default</h2>

<mat-card fxLayout="row" fxLayoutGap="30px" style="width: 500px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">1. Two</mat-card> 
    <mat-card class="child-3">1. Three</mat-card>
    <mat-card class="child-3">1. four</mat-card>
    <mat-card class="child-3">1. five</mat-card>
    <mat-card class="child-3">1. six</mat-card>
</mat-card>

Element After flex row

```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-default-flex.PNG" title="fxLayout default flex" alt="fxLayout default flex">}} 

{{% alert note%}}
when using wrap or inline, we must specify the fxLayout direction i.e, row or column.
{{% /alert %}}


## fxLayout row-reverse

When you add fxLayout with row-reverse value, The display of flex items will start from the opposite direction along the main axis.

```
<h2>fxLayout Normal</h2>

<mat-card fxLayout="row" fxLayoutGap="30px" style="width: 500px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">2. Two</mat-card> 
    <mat-card class="child-3">3. Three</mat-card>
</mat-card>

<h2>fxLayout row reverse</h2>

<mat-card fxLayout="row-reverse" fxLayoutGap="30px" style="width: 500px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">2. Two</mat-card> 
    <mat-card class="child-3">3. Three</mat-card>
</mat-card>
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-row-reverse.PNG" title="fxLayout row reverse" alt="fxLayout row reverse">}} 

## fxLayout column-reverse

If you use fxLayout column-reverse, the display of flex items will start from botton to top along the vertical axis.

```
<h2>fxLayout Column Normal</h2>

<mat-card fxLayout="column" fxLayoutGap="30px" style="height: 200px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">2. Two</mat-card> 
    <mat-card class="child-3">3. Three</mat-card>
</mat-card>

<h2>fxLayout column reverse</h2>

<mat-card fxLayout="column-reverse" fxLayoutGap="30px" style="height: 200px;">
    <mat-card class="child-1">1. One</mat-card> 
    <mat-card class="child-2">2. Two</mat-card> 
    <mat-card class="child-3">3. Three</mat-card>
</mat-card>
```

{{< figure src="/img/flexLayout/fxLayout/fxLayout-column-reverse.PNG" title="fxLayout column reverse" alt="fxLayout column reverse">}} 

## Changing fxLayout from row to column and vice versa.

As explained in [Angular flex layout basics](https://www.angularjswiki.com/flexlayout/basics/#angular-flex-layout-responsive-api). We can changed fxLayout value from row to column and column to row using flex layout responsive API.

```
<mat-card fxLayout="row" fxLayout.xs="column">
   <mat-card class="child-1">1. Children</mat-card> 
   <mat-card class="child-2">2. Children</mat-card> 
   <mat-card class="child-3">3. Children</mat-card>
</mat-card>
```

In the above example the flow of children will be along the main axis, But whenever the width of the screen is extra small they will flow along the vertical axis.