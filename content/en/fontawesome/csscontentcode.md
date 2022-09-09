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


## Step 1: Load the font awesome CSS file.

Add the font awesome CSS file in the `<head>` tag of the page

I am using latest font awesome icon version 6.2.0.

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>
```

## Step 2: Define the CSS class names for the icons

We need to add unique class name to the icon element. 

```
<!--Brand Icon -->
<span class="twitter"></span>

<!--Regular Icon -->
<span class="user"></span>

<!--Solid Icon -->
<span class="cloud"></span>
```

## Step 3: Set the CSS content code for the icon.

Go through the [2016 free font awesome icons](https://www.angularjswiki.com/fontawesome/), to get the CSS content code.

For all icons, unicode values are already defined.

```

/* Brand icon*/
.twitter::before {
  content: '\f099';
}

/* Regular Icon */
.user::before {
  content: '\f007';
}

/* Solid Icon */
.cloud::before {
  content: '\f0c2';
}
```
No icon will be displayed, because we need to add the font family.

## Step 4: Set the icon font style

For each style of icons i.e., regular, solid and brand icons we have to set the appropriate `font` style.

In font awesome 6, there are predefined CSS custom properties.

We can use them to set the `font` style.

See the below list.

<div class='table-responsive'>
<table class='table'>
<thead><tr><th>Icon Style</th><th>CSS custom property</th></tr></thead>
<tbody>
<tr><td>Brands</td><td>--fa-font-brands</td></tr>
<tr><td>Solid</td><td>--fa-font-solid</td></tr>
<tr><td>Regular</td><td>--fa-font-regular</td></tr>
</tbody>
</table>
</div>

```

/* Brand icon*/
.twitter::before {
  content: '\f099';
  font: var(--fa-font-brands);
}

/* Regular Icon */
.user::before {
  content: '\f007';
  font: var(--fa-font-regular);
}

/* Solid Icon */
.cloud::before {
  content: '\f0c2';
  font: var(--fa-font-solid);
}
```

<div style="border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;">
<style>

/* Brand icon*/
.twitter::before {
  content: '\f099';
  font: var(--fa-font-brands);
}

/* Regular Icon */
.user::before {
  content: '\f007';
  font: var(--fa-font-regular);
}

/* Solid Icon */
.cloud::before {
  content: '\f0c2';
  font: var(--fa-font-solid);
}
</style>
<p>Output:</p>


<!--Brand Icon -->
<span class="twitter"></span>

<!--Regular Icon -->
<span class="user"></span>

<!--Solid Icon -->
<span class="cloud"></span>

</div>

## Step 5: Add common styles to the icons

The above code displays the icons in default style. 

If you want to add some custom styles to the icon add a common class to the icons.

```
<!--Brand Icon -->
<span class="twitter fontawesomeicon"></span>

<!--Regular Icon -->
<span class="user fontawesomeicon"></span>

<!--Solid Icon -->
<span class="cloud fontawesomeicon"></span>
```

Then add necessary styles, I am changing the color of icons to the `red` colour.

```
.fontawesomeicon {
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  color: red;
}
```

<div style="border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;">
<style>

.fontawesomeicon {
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  color: red;
}
</style>
<p>Output:</p>


<!--Brand Icon -->
<span class="twitter fontawesomeicon"></span>

<!--Regular Icon -->
<span class="user fontawesomeicon"></span>

<!--Solid Icon -->
<span class="cloud fontawesomeicon"></span>

</div>

We can use font awesome predefined CSS custom properties for that.

1. Add a unique CSS class name to the icon element you want to use.
2. Set the font-family to "Font Awesome 5 Free" (For regular,solid icons) or "Font Awesome 5 Pro" (If you buy a pro license) or "Font Awesome 5 Brands" (For brand icons)
3. Set the font-weight css property as 900 (For Solid), 400 (Regular or Brands), 300 (Light for pro icons).
4. Set the content css property to the unicode value font awesome icon.
5. And if required,add a common CSS class name for all icon elements, for example "font-awesome-icons" (This is to add your own CSS to the icons).

For example to display facebook icon using CSS content code use the below code snippet.

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

{{% toc %}}

## Why to use CSS content Code to display font awesome icons?

The regular approach requires us to change the all icon element names to font awesome icon names like fa-facebook and further adding category fab, far and fas class names.

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
<span class="font-awesome-icons twitter"></span> twitter
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

## Font awesome css content not working

If you follow the above steps, font awesome css content code should be working fine.

Otherwise you might see an empty square icon.

So to display font awesome icons using their CSS content code 

1. Do not forgot to add font-family 
2. Add font-weight. 

<div class='table-responsive'>
<table class='table'>
<thead>
<tr><th>Icon type</th><th>font-family</th><th>font-weight</th></tr>
</thead>
<tbody>
<tr>
<td>Solid</td>
<td>Font Awesome 5 Free</td>
<td>900</td>
</tr>
<tr>
<td>Regular</td>
<td>Font Awesome 5 Free</td>
<td>400</td>
</tr>
<tr>
<td>Brand</td>
<td>Font Awesome 5 Brands</td>
<td>400</td>
</tr>
</tbody>
</table>
</div>

If you are using pro icons you need to add font-family as "Font Awesome 5 Pro" For regular, solid icons.


