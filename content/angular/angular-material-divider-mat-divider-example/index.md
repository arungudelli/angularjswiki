+++
title = "Angular Material Divider : Mat-Divider Example"
subtitle = "Learn how to use Angular material divider"
type="post"
summary ="Angular Material Divider component mat-divider a simple line divider that groups elements in list and layout by following material design styles."
keywords=["mat-divider example,mat-divider vertical example,mat-divider inset example"]
date="2019-01-29T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
draft=false
authors = ["admin"]


[image]
  caption = "Angular Material Divider"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular Material Divider component _mat-divider_  a simple line divider that groups elements in list and layout by following material design styles.

{{% toc %}}
  

## Importing mat-divider module

To use mat-divider we have to import MatDividerModule from angular material module.

Directive is _MatDivider_ and selector is _mat-divider_.

```javascript
import {MatDividerModule} from '@angular/material/divider';
```
## Angular Material Divider mat-divider types

We have three types of material dividers depending upon our usage.

  1. Simple divider
  2. Inset divider
  3. Vertical divider

## Simple mat-divider example

Just add <mat-divider> it will display a simple divider i.e., horizontaal line

```html
<mat-divider></mat-divider>
```

Usually we can use the mat-divider inside a list to separate the contents.

```html
<mat-list>
<mat-list-item>One</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item>Two</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item>Three</mat-list-item>
</mat-list>
```

{{< figure src="simple-mat-divider-example.png" title="Simple Mat Divider example" alt="Simple Mat Divider example">}}


## mat-divider Inset example

We can set inset attribute to _true_ to display inset divider

```html
<mat-divider [inset]="true"></mat-divider>
```

Here is the complete example which shows the difference between simple divider and inset divider

```html 
<mat-list>
 <mat-list-item>One</mat-list-item>
 <mat-divider></mat-divider>
 <mat-list-item>Two</mat-list-item>
 <mat-divider inset=“true”></mat-divider>
 <mat-list-item>Three</mat-list-item>
 <mat-divider></mat-divider>
</mat-list> 
```
{{< figure src="mat-divider-inset-example.png" title="mat-divider inset example" alt="mat-divider inset example">}}

## mat-divider vertical example

To set the orientaion of the mat-divider horizontal or vertical, we can use vertical attribute.

```html
<mat-divider [vertical]="true"></mat-divider>
```

## mat-divider style

Whenever we use material divider i.e., mat-divider, angular framework adds a class named mat-divider to the element as shown below

```html
<mat-divider _ngcontent-c1="" 
class="mat-divider mat-divider-horizontal" 
role="separator" 
aria-orientation="horizontal">
</mat-divider>
```
And the corresponding CSS for the class .mat-divider is

```css
.mat-divider {
   display: block;
   margin: 0;
   border-top-width: 1px;
   border-top-style: solid;
}
```

And the color of the .mat-divider depending upon the theme we use for instance I am using Angular Material _indigo-pink.css. _The color of the mat-divider is rgba(0,0,0,.12).

```css
.mat-divider{
  border-top-color: rgba(0,0,0,.12);
}
```

We can override these css classes to change the color or thickness of the mat-divider.

But change the color according to <a href="https://material.io/design/components/dividers.html" target="_blank" rel="noopener">material design specifications</a>

## mat-divider color

To change the color _mat-divider_ simply change the border-top-color property of .mat-divider class.

```css
.mat-divider {
  border-top-color: red;
}
```
{{< figure src="mat-divider-color-example.png" title="mat-divider color example" alt="mat-divider color example">}}

## mat-divider thickness

To change the thickness of the _mat-divider,_ override the default border-top-width or border-top-style properties of .mat-divider class.

```css
.mat-divider{
  border-top-width: 2px;
  border-top-style: dashed;
}
```
{{< figure src="mat-divider-thickness-example.png" title="mat-divider thickness example" alt="mat-divider thickness example">}}

Additionally we can change style of the mat-divider by overriding border-top-style property.

{{< figure src="mat-divider-dashed-style.png" title="mat-divider dashed style" alt="mat-divider dashed style">}}

## mat-divider properties

<table>
	<thead>
		<tr>
			<th>mat-divider property</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>inset</td>
			<td>to use inset divider set the property value to true.</td>
		</tr>
		<tr>
			<td>vertical</td>
			<td>to use vertical divider
set the property value to true</td>
		</tr>
	</tbody>
</table>


## mat-divider not showing

If you are using older versions of Angular Material i.e., version 5.1 below, mat-divider available as part of MatListModule.

So in the below example mat-divider visible only if we are using MatListModule.

```html
<p>
  No "mat-list" in component html
</p>

<p>Sample text before mat-divider</p>
<mat-divider></mat-divider>
<p>Sample text After mat-divider</p>
```

In the above case <a href="https://github.com/angular/material2/issues/9399" target="_blank" rel="noopener">mat-divider will not show</a> as we are not using MatListModule.

```html
<p>
"mat-list" in component html
</p>

<mat-list>
<mat-list-item>Sample List</mat-list-item>
</mat-list>

<p>Sample text before mat-divider</p>
<mat-divider></mat-divider>
<p>Sample text After mat-divider</p>
```

mat-divider is visible in this case because we are using MatListModules.

As part of <a href="https://github.com/angular/material2/blob/master/CHANGELOG.md#510-burlap-bezel-2018-01-17" target="_blank" rel="noopener">Angular Material 5.1</a> version they moved mat-divider out of mat-list.

## mat-divider vertical not working

It seems mat-divider vertical is not working as expected. There is a open <a href="https://github.com/angular/material2/issues/10528" target="_blank" rel="noopener">git issue</a> regarding this issue.

## mat-divider is not a known element

If you miss importing MatDividerModule from @angular/material you will get an error saying mat-divider is not a known element.

As explained in <a href="https://www.angularjswiki.com/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">angular material tutorial</a> it is better to create a separate module for material components and Add the required modules whenever required.