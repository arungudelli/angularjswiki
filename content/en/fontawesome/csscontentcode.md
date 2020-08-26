+++
title = "How to Use font awesome icons as CSS content code"
subtitle = "Font awesome icons as CSS content code"
type="docs"
summary ='To use font awesome icons as CSS content code follow the below steps 1. Add a unique CSS class name to the icon element you want to use.2. Set the font-family to "Font Awesome 5 Free" (For regular,solid icons) or "Font Awesome 5 Pro" (If you buy a pro license) or "Font Awesome 5 Brands" (For brand icons) 3. Set the font-weight css property as 900 (For Solid), 400 (Regular or Brands), 300 (Light for pro icons). 4. Set the content css property to the unicode value font awesome icon. 5. And if required,add a common CSS class name for all icon elements, for example "font-awesome-icons" (This is to add your own CSS to the icons).'
keywords=["font awesome icons,font awesome icons Css Content Code"]
date="2020-08-25T01:01:05+0000"
lastmod="2020-08-25T00:00:08+0000"
prev="cdn"
next="6"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
linktitle="CSS Content Code"
[menu.fontawesome]
parent="fontawesome"
weight=2
[image]
  caption = "font awesome icons"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To use font awesome icons as CSS content code follow the below steps.

1. Add a unique CSS class name to the icon element you want to use.
2. Set the font-family to "Font Awesome 5 Free" (For regular,solid icons) or "Font Awesome 5 Pro" (If you buy a pro license) or "Font Awesome 5 Brands" (For brand icons)
3. Set the font-weight css property as 900 (For Solid), 400 (Regular or Brands), 300 (Light for pro icons).
4. Set the content css property to the unicode value font awesome icon.
5. And if required,add a common CSS class name for all icon elements, for example "font-awesome-icons" (This is to add your own CSS to the icons).

For example to display facebook icon using CSS content code use the below code snippet.

To display twitter icon using Pseudo element use the following CSS content code

```
<li>
<span class="font-awesome-icons facebook"></span> Login
</li>


.facebook::before {
    font-family: "Font Awesome 5 Brands"; 
	font-weight: 400;
	content: "\f09a";
}

```

## Why to use CSS content Code to display font awesome icons?

The regular approach requires us to change the font awesome icons name for all icon elements like fa-facebook and adding category fab, far and fas class names.

If your project is new then we can follow that. 

But if it is an existing project, it is very difficult to change the icon class name.

In this case we can display the font awesome icons using their CSS content values.

We can use the CSS Pseudo-elements elements features `::before` or `::after` to display them.

For example to display twitter icon, We might have used below HTML code.

```
<li>
<span class="twitter"></span> twitter
</li>

``` 

So we can add the font awesome icon CSS properties to the existing twitter icon

```
.twitter::before {
    font-family: "Font Awesome 5 Brands"; 
	font-weight: 400;
	content: "\f099";
}
```

I gave content as `\f099` which is unicode value for twitter icon defined by font awesome icons.

For all [1598 free font awesome icons](https://www.angularjswiki.com/fontawesome/), unicode values are already defined.

And further to add our own CSS to the icons we can add a common class to icons say "font-awesome-icons".

I have added `color:red` to the icons and few other CSS properties.

```
 .font-awesome-icons::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    color:red;
    -webkit-font-smoothing: antialiased;
  }
```
Now our icons will display in red color.

```
<li>
<span class="twitter"></span> twitter
</li>

.font-awesome-icons::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    color:red;
    -webkit-font-smoothing: antialiased;
}

.twitter::before {
    font-family: "Font Awesome 5 Brands"; 
	font-weight: 400;
	content: "\f099";
}
```



