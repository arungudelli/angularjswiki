+++
title = "fxLayout API in Angular flex layout"
date = 2019-04-24T00:00:00
lastmod = 2019-04-24T01:00:00
draft = true  # Is this a draft? true/false 
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
prev = "flexlayout/basics"
parentdoc="flexlayout"
featured="fxFlex_api.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to use fxFlex API in Angular flex layout with examples"
keywords=["fxFlex,fxFlex example,fxFlex api"]

#Add menu entry to sidebar.
linktitle = "fxFlex"
[menu.flexlayout]
  parent = "Tutorial"
  weight = 2
+++

## What is fxLayout API?

1. fxLayout is a required and necessary API in Angular flex layout, should be used on flex container.
2. fxLayout defines flow of children element along the main-axis or cross-axis, inside the flex container.
3. fxLayout
The fxLayout directive should be used on DOM containers whose children should layout or flow as the text direction along the main-axis or the cross-axis.

```
<div fxLayout="row">
  <div>1. One</div> <div>2. Two</div> <div>3. Three</div> <div>4. Four</div>
</div>
```
or

```
<div fxLayout="column">
  <div>1. One</div>
  <div>2. Two</div>
  <div>3. Three</div>
  <div>4. Four</div>
</div>
```
fxlayout

fxLayout Options
Shown below are the supported fxLayout directive values and their resulting CSS stylings on the hosting element container:

Value	Equivalent CSS
'' (default)	flex-direction: row
row	flex-direction: row
row-reverse	flex-direction: row-reverse
column	flex-direction: column
column-reverse	flex-direction: column-reverse
fxLayout + wrap
By default, flex items will not wrap in their container. Formerly published as distinct directive, fxLayoutWrap was deprecated in favor of simply adding the wrap parameter as a secondary option to the fxLayout directive.

<div fxLayout="row wrap">
  <div>1. One</div> <div>2. Two</div> <div>3. Three</div> <div>4. Four</div>
</div>
Note: when using wrap, developers must first specify the layout direction.

fxLayout Side-Effects
Changes to the fxLayout value will cause the following directives to update and modify their element stylings:

fxLayoutGap
fxFlex
fxLayoutAlign