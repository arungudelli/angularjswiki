+++
title = "How to change mat-icon size in Angular Material"
subtitle = "Change mat-icon size"
summary ="To increase the mat-icon size, we need to change the icon height,width along with font-size"
keywords=["mat-icon size, Angular material"]
date="2023-02-21T00:00:05+0000"
lastmod="2023-02-21T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Change mat-icon size"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To change `mat-icon` size in Angular Material follow the below steps.

1. Give a common class name for the material icons i.e., `mat-icon`. For instance `class="mat-icon-size"`.
2. Add `height` and `width` CSS to the `mat-icon` class.
3. Add `font-size` to the `mat-icon` class. 

Let's go through an example to understand it further. 

To display home icon in material icons we use `fontIcon` name as `home`.

```html
 <mat-icon
    aria-hidden="false"
    aria-label="home icon"
    fontIcon="home"
  ></mat-icon>
```

The default Angular `mat-icon` size is `24px`.

To increase the `mat-icon` size we need to increase the icon `height`,`width` along with `font-size`

Let's add a class name to the `mat-icon`

```html
 <mat-icon
    aria-hidden="false"
    aria-label="home icon"
    fontIcon="home"
    class="mat-icon-size"
  ></mat-icon>
```

And then add CSS properties to the given class name.

```css
.icon-size {
  font-size: 50px;
  height: 50px;
  width: 50px;
}
```

And we can use `transform` property to change the size of `mat-icon` in Angular material.

```css
.icon-size {
   transform: scale(2);
}
```

The original icon size is `24px`, and if we add `transform: scale(2);` to the `mat-icon`, the icon size two times of the original size. That is `48px`


## Change `mat-icon` size StackBlitz demo

Here is the link to StackBlitz demo for `mat-icon` size change.

[Change mat-icon size](https://stackblitz.com/edit/change-mat-icon-size-in-angular-material)


