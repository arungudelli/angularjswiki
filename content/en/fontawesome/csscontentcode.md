+++
title = "How to Use font awesome icons as CSS content code"
subtitle = "Font awesome icons as CSS content code"
type="docs"
summary ='To use font awesome icons as CSS content code add font style using custom css properties in font awesome 6.And manually add the font-style and font-weight css properties in font awesome 5'
keywords=["font awesome icons,font awesome icons Css Content Code"]
date="2020-08-25T01:01:05+0000"
lastmod="2022-09-09T00:00:08+0000"
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

CSS has an awesome feature called `Pseudo-elements`.

Using `Pseudo-elements` we can add content to the web page with just CSS.

Font awesome uses `::before` pseudo-element to add icons to the page using their CSS content codes. 

{{% toc %}}

## Display font awesome icons using CSS Content Code & `::before` pseudo-element

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

The above CSS custom properties adds the `font-family` and `font-weight` properties to the icon.

```
/* Brand icon*/
.twitter::before {
  content: '\f099';
  font-family: "Font Awesome 6 brands"; 
	font-weight: 400;
}

/* Regular Icon */
.user::before {
  content: '\f007';
  font-family: "Font Awesome 6 free"; 
	font-weight: 400;
}

/* Solid Icon */
.cloud::before {
  content: '\f0c2';
  font-family: "Font Awesome 6 free"; 
	font-weight: 900;
}
```

<div class='table-responsive'>
<table class='table'>
<thead><tr><th>CSS custom property</th><th>font-family</th><th>font-weight</th></tr></thead>
<tbody>
<tr><td>--fa-font-brands</td><td>Font Awesome 6 brands</td><td>400</td></tr>
<tr><td>--fa-font-solid</td><td>Font Awesome 6 free</td><td>900</td></tr>
<tr><td>--fa-font-regular</td><td>Font Awesome 6 free</td><td>400</td></tr>
</tbody>
</table>
</div>

And if you are using font awesome 5 version icons, use the following `font-family` and `font-weight` css styles.

There are no custom css properties defined in font awesome 5 version.

<div class='table-responsive'>
<table class='table'>
<thead><tr><th>Icon Style</th><th>font-family</th><th>font-weight</th></tr></thead>
<tbody>
<tr><td>brands</td><td>Font Awesome 5 brands</td><td>400</td></tr>
<tr><td>solid</td><td>Font Awesome 5 free</td><td>900</td></tr>
<tr><td>regular</td><td>Font Awesome 5 free</td><td>400</td></tr>
</tbody>
</table>
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


## Why to use font awesome CSS content Code & `::before` ?

The general practice is to display font awesome icons using their css class names & icon style class.

If you are starting a new project then it's fine. 

When font awesome icons project started people are using other existing icons.

Think about an existing project where icons are displayed using other class names.

```
<li>
<span class="twitter"></span> twitter
</li>

```

The class name is different than font awesome icon i.e., `fa-twitter`.

Changing all icon class names in a project is difficult. 

So font awesome used `::before` pseudo-element to display icons using CSS content codes.

This way we can simple change the CSS styles for the icon elements no changes required in HTML pages.

```
.twitter::before {
  font: var(--fa-font-brands);
	content: "\f099";
}
```

I gave content as `\f099` which is unicode value for twitter icon defined by font awesome icons.

## Font awesome css content not working

If you follow the above steps, font awesome css content code should be working fine.

Otherwise you might see an empty square icon.

Remember two things while display font awesome icons using their CSS content code 

1. Add correct CSS content code 
2. Do not forgot to add `font-family` & `font-weight`. 

As explained above if you are using font awesome 6 version icons use `custom CSS properties`.

And for the font awesome 5 version icons use `font-family` & `font-weight`.

```
/* Brand icon*/
.twitter::before {
  content: '\f099';
  font-family: "Font Awesome 5 brands"; 
    font-weight: 400;
}

/* Regular Icon */
.user::before {
  content: '\f007';
  font-family: "Font Awesome 5 free"; 
    font-weight: 400;
}

/* Solid Icon */
.cloud::before {
  content: '\f0c2';
  font-family: "Font Awesome 5 free"; 
    font-weight: 900;
}

```

If you are using pro icons you need to add `font-family` as "Font Awesome 5 Pro" or "Font Awesome 6 Pro"

## font awesome CSS content code StackBlitz Demo

Here is the StackBlitz demo for font awesome CSS content code.

[https://stackblitz.com/edit/use-font-awesome-icons-as-css-content-code](https://stackblitz.com/edit/use-font-awesome-icons-as-css-content-code)


