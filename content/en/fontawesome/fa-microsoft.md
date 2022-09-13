
+++
title='Microsoft font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Microsoft font awesome icon CSS class is fa-microsoft & CSS Content Code is  \f3ca'
keywords =['Microsoft, \f3ca,fa-microsoft']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-microblog'
next = 'fa-mix'
linktitle = 'fa-microsoft'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Microsoft` font awesome icon css class name is `fa-microsoft` and CSS Content Code is ` \f3ca`**.
 

`Microsoft` font awesome icon is part of brands icons. 



{{%toc%}}
## `Microsoft` font awesome icon usage
We can display `Microsoft` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Microsoft` font awesome icon CSS class name

To display `Microsoft` font awesome icon, add predefined class name i.e.,`fa-microsoft` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Microsoft` icon.


`Microsoft` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-microsoft'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-microsoft'></i>

</div>


## `Microsoft` font awesome icon CSS Content Code 

We can display `Microsoft` font awesome icon using it's CSS Content Code ` \f3ca` 

Use the following HTML code 

```
<li><span class='Microsoft fontawesomeicon'></span>Microsoft</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Microsoft::before {
   font: var(--fa-font-brands);
    content: ' \f3ca';
 }</style>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Microsoft::before {
   font: var(--fa-font-brands);
    content: ' \f3ca';
 }</style>

<li><span class='Microsoft fontawesomeicon'></span>Microsoft</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Microsoft` font awesome icon SVG 

Use the following icon SVG to display `Microsoft` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
 Microsoft displayed using SVG</p>
```

Apply CSS code
```

  <style>
    .fontawesomesvg {width: 1em;
      height: 1em;
      vertical-align: -.125em;
    }
  </style>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>

  <style>
    .fontawesomesvg {width: 1em;
      height: 1em;
      vertical-align: -.125em;
    }
  </style>


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
 Microsoft displayed using SVG</p>
</div>

## Change `Microsoft` font awesome icon size
To increase `Microsoft` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f3ca.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-microsoft fa-lg'>fa-lg</i><br/>
<i class='fab fa-microsoft fa-2x'>fa-2x</i><br/>
<i class='fab fa-microsoft fa-3x'>fa-3x</i><br/>
<i class='fab fa-microsoft fa-4x'>fa-4x</i><br/>
<i class='fab fa-microsoft fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-microsoft fa-lg'>fa-lg</i><br/>
<i class='fab fa-microsoft fa-2x'>fa-2x</i><br/>
<i class='fab fa-microsoft fa-3x'>fa-3x</i><br/>
<i class='fab fa-microsoft fa-4x'>fa-4x</i><br/>
<i class='fab fa-microsoft fa-5x'>fa-5x</i><br/>

</div>

## `Microsoft` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Microsoft` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-microsoft fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-microsoft fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-microsoft fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-microsoft fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Microsoft` font awesome icon Border
To add border to `Microsoft` font awesome icon, use `fa-border` class.
```
<i class='fab fa-microsoft fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-microsoft fa-border fa-3x'></i>
</div>

## Pull `Microsoft` font awesome icon To the left
To pull `Microsoft` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-microsoft fa-pull-left fa-3x'></i>
  ... The text after Microsoft Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-microsoft fa-pull-left fa-3x'></i>
  ... The text after Microsoft Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Microsoft` font awesome icon To the left
To pull `Microsoft` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-microsoft fa-pull-right fa-3x'></i>
  ... The text after Microsoft Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-microsoft fa-pull-right fa-3x'></i>
  ... The text after Microsoft Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Microsoft` font awesome icon
To animate `Microsoft` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-microsoft fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-microsoft fa-spin fa-3x'></i>
</div>

## Animate `Microsoft` font awesome icon with steps
While animating the font awesome icon,We can rotate `Microsoft` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-microsoft fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-microsoft fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Microsoft` font awesome icon
 To rotate `Microsoft` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-microsoft fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-microsoft fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-microsoft fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-microsoft fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-microsoft fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-microsoft fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-microsoft fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-microsoft fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Microsoft` font awesome icon
 To flip `Microsoft` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-microsoft fa-3x'>F</i> Normal <br>
<i class='fab fa-microsoft fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-microsoft fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-microsoft fa-3x'>F</i> Normal <br>
<i class='fab fa-microsoft fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-microsoft fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Microsoft` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Microsoft` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-microsoft fa-stack-1x'></i>
    </span>
      Microsoft on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-microsoft fa-stack-1x fa-inverse'></i>
    </span>
      Microsoft on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-microsoft fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Microsoft on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-microsoft fa-stack-1x'></i>
    </span>
      Microsoft on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-microsoft fa-stack-1x fa-inverse'></i>
    </span>
      Microsoft on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-microsoft fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Microsoft on fa-ban
</div>
</div>

