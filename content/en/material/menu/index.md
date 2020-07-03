+++
title = " Angular Material Menu: mat Menu example"
date = 2020-07-02T00:00:00
lastmod = 2020-07-02T01:00:00

draft = true  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "badge"
next ="datepicker"
featured="angular-material-tooltip.jpg"
authors = ["admin"]
summary ="To implement menu items in Angular we can use angular material menu module called MatMenuModule."
keywords=["mat menu,Angular Material Menu"]


# Add menu entry to sidebar.
linktitle = "Menu"
[menu.material]
  parent = "Tutorial"
  weight = 6
+++

To implement menu items in Angular we can use angular material menu module called `MatMenuModule`.

`mat-menu` selector is used to display floating menu panel containing list of menu items.

{{%toc%}}


## Menu items in Angular

Steps to implement Menu items in Angular applications.

### step 1: Import Angular material Menu module 

We can import Menu module (MatMenuModule) in our components ts file or app.module.ts file or some common material module which can be used across the application as explained in angular material tutorial.

```
import {MatMenuModule} from '@angular/material/menu';
```

### step 2: Use mat Menu selector to display Menu Items

After importing `MatMenuModule` in our component file, use `mat-menu` selector which is nothing but a floating panel containing list of menu options.

```
<mat-menu #menu="matMenu">
  <button mat-menu-item>Menu Item 1</button>
  <button mat-menu-item>Menu Item 2</button>
</mat-menu>
```

I am using `button` element as Menu Item. And do not forgot to add `mat-menu-item` to the menu options.

### step 3: Add matMenuTriggerFor Element

The above `mat-menu` element does not render anything in the UI. 

The menu should be attached to a trigger element which will open and close the menu using `matMenuTriggerFor` directive

```
<button mat-button [matMenuTriggerFor]="menu">Simple Menu</button>

<mat-menu #menu="matMenu">
  <button mat-menu-item>Menu Item 1</button>
  <button mat-menu-item>Menu Item 2</button>
</mat-menu>
```

In the above example I am attaching `mat-menu` container to a button called "Simple Menu" via  `matMenuTriggerFor` attribute.

## Changing mat Menu Position

By default material menu will be displayed under the menu trigger element. 

To change the menu position we can use xPosition and yPosition properties of mat-menu selector.

### mat Menu position Before or after

If you want display menu before and after the menu trigger element we can pass xPosition value as "before" or "after".

xPosition property changes the menu position across the horizontal axis. 

```
<button mat-button [matMenuTriggerFor]="beforeMenu">Before</button>
<mat-menu #beforeMenu="matMenu" xPosition="before">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>


<button mat-button [matMenuTriggerFor]="afterMenu">After</button>
<mat-menu #afterMenu="matMenu" xPosition="after">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
```

### mat Menu position above or below

To display the menu position above the menu trigger element set yPosition property as "above".

yPosition property used to change the menu position across the vertical axis.

yPosition accepts the values "above" or "below".

```
<button mat-button [matMenuTriggerFor]="aboveMenu">Above</button>
<mat-menu #aboveMenu="matMenu" yPosition="above">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>

<button mat-button [matMenuTriggerFor]="belowMenu">Below</button>
<mat-menu #belowMenu="matMenu" yPosition="below">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
```

## Mat Menu with Icons

We can display material icons before the menu item text by placing `mat-icon` elements.

```
<button mat-button [matMenuTriggerFor]="menu">MenuIcon</button>

<mat-menu #menu="matMenu">
  <button mat-menu-item><mat-icon>home</mat-icon><span>Home</span></button>
</mat-menu>
```

Further we can use icons as menu trigger elements.

```
<button mat-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>

<mat-menu #menu="matMenu">
  <button mat-menu-item><mat-icon>home</mat-icon><span>Home</span></button>
</mat-menu>
```

## Creating Nested Menus

