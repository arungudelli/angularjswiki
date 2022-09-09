
+++
title='Pied-Piper font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Pied-Piper font awesome icon CSS class is fa-pied-piper & CSS Content Code is  \f2ae'
keywords =['Pied-Piper, \f2ae,fa-pied-piper']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-pied-piper-pp'
next = 'fa-pinterest-p'
linktitle = 'fa-pied-piper_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Pied-Piper` font awesome icon css class name is `fa-pied-piper` and CSS Content Code is ` \f2ae`**.
 

`Pied-Piper` font awesome icon is part of brands icons. 



{{%toc%}}
## `Pied-Piper` font awesome icon usage
We can display `Pied-Piper` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Pied-Piper` font awesome icon CSS class name

To display `Pied-Piper` font awesome icon, add predefined class name i.e.,`fa-pied-piper` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Pied-Piper` icon.


`Pied-Piper` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-pied-piper'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-pied-piper'></i>

</div>


## `Pied-Piper` font awesome icon CSS Content Code 

We can display `Pied-Piper` font awesome icon using it's CSS Content Code ` \f2ae` 

Use the following HTML code 

```
<li><span class='Pied-Piper fontawesomeicon'></span>Pied-Piper</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Pied-Piper::before {
   font: var(--fa-font-brands);
    content: ' \f2ae';
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

.Pied-Piper::before {
   font: var(--fa-font-brands);
    content: ' \f2ae';
 }</style>

<li><span class='Pied-Piper fontawesomeicon'></span>Pied-Piper</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Pied-Piper` font awesome icon SVG 

Use the following icon SVG to display `Pied-Piper` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M455.93,23.2C429.23,30,387.79,51.69,341.35,90.66A206,206,0,0,0,240,64C125.13,64,32,157.12,32,272s93.13,208,208,208,208-93.13,208-208a207.25,207.25,0,0,0-58.75-144.81,155.35,155.35,0,0,0-17,27.4A176.16,176.16,0,0,1,417.1,272c0,97.66-79.44,177.11-177.09,177.11a175.81,175.81,0,0,1-87.63-23.4c82.94-107.33,150.79-37.77,184.31-226.65,5.79-32.62,28-94.26,126.23-160.18C471,33.45,465.35,20.8,455.93,23.2ZM125,406.4A176.66,176.66,0,0,1,62.9,272C62.9,174.34,142.35,94.9,240,94.9a174,174,0,0,1,76.63,17.75C250.64,174.76,189.77,265.52,125,406.4Z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M455.93,23.2C429.23,30,387.79,51.69,341.35,90.66A206,206,0,0,0,240,64C125.13,64,32,157.12,32,272s93.13,208,208,208,208-93.13,208-208a207.25,207.25,0,0,0-58.75-144.81,155.35,155.35,0,0,0-17,27.4A176.16,176.16,0,0,1,417.1,272c0,97.66-79.44,177.11-177.09,177.11a175.81,175.81,0,0,1-87.63-23.4c82.94-107.33,150.79-37.77,184.31-226.65,5.79-32.62,28-94.26,126.23-160.18C471,33.45,465.35,20.8,455.93,23.2ZM125,406.4A176.66,176.66,0,0,1,62.9,272C62.9,174.34,142.35,94.9,240,94.9a174,174,0,0,1,76.63,17.75C250.64,174.76,189.77,265.52,125,406.4Z"/></svg>
 Pied-Piper displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M455.93,23.2C429.23,30,387.79,51.69,341.35,90.66A206,206,0,0,0,240,64C125.13,64,32,157.12,32,272s93.13,208,208,208,208-93.13,208-208a207.25,207.25,0,0,0-58.75-144.81,155.35,155.35,0,0,0-17,27.4A176.16,176.16,0,0,1,417.1,272c0,97.66-79.44,177.11-177.09,177.11a175.81,175.81,0,0,1-87.63-23.4c82.94-107.33,150.79-37.77,184.31-226.65,5.79-32.62,28-94.26,126.23-160.18C471,33.45,465.35,20.8,455.93,23.2ZM125,406.4A176.66,176.66,0,0,1,62.9,272C62.9,174.34,142.35,94.9,240,94.9a174,174,0,0,1,76.63,17.75C250.64,174.76,189.77,265.52,125,406.4Z"/></svg>
 Pied-Piper displayed using SVG</p>
</div>

## Change `Pied-Piper` font awesome icon size
To increase `Pied-Piper` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f2ae.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-pied-piper fa-lg'>fa-lg</i><br/>
<i class='fab fa-pied-piper fa-2x'>fa-2x</i><br/>
<i class='fab fa-pied-piper fa-3x'>fa-3x</i><br/>
<i class='fab fa-pied-piper fa-4x'>fa-4x</i><br/>
<i class='fab fa-pied-piper fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-pied-piper fa-lg'>fa-lg</i><br/>
<i class='fab fa-pied-piper fa-2x'>fa-2x</i><br/>
<i class='fab fa-pied-piper fa-3x'>fa-3x</i><br/>
<i class='fab fa-pied-piper fa-4x'>fa-4x</i><br/>
<i class='fab fa-pied-piper fa-5x'>fa-5x</i><br/>

</div>

## `Pied-Piper` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Pied-Piper` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-pied-piper fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-pied-piper fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-pied-piper fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-pied-piper fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Pied-Piper` font awesome icon Border
To add border to `Pied-Piper` font awesome icon, use `fa-border` class.
```
<i class='fab fa-pied-piper fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-pied-piper fa-border fa-3x'></i>
</div>

## Pull `Pied-Piper` font awesome icon To the left
To pull `Pied-Piper` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-pied-piper fa-pull-left fa-3x'></i>
  ... The text after Pied-Piper Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-pied-piper fa-pull-left fa-3x'></i>
  ... The text after Pied-Piper Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Pied-Piper` font awesome icon To the left
To pull `Pied-Piper` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-pied-piper fa-pull-right fa-3x'></i>
  ... The text after Pied-Piper Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-pied-piper fa-pull-right fa-3x'></i>
  ... The text after Pied-Piper Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Pied-Piper` font awesome icon
To animate `Pied-Piper` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-pied-piper fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-pied-piper fa-spin fa-3x'></i>
</div>

## Animate `Pied-Piper` font awesome icon with steps
While animating the font awesome icon,We can rotate `Pied-Piper` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-pied-piper fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-pied-piper fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Pied-Piper` font awesome icon
 To rotate `Pied-Piper` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-pied-piper fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-pied-piper fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-pied-piper fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-pied-piper fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-pied-piper fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-pied-piper fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-pied-piper fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-pied-piper fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Pied-Piper` font awesome icon
 To flip `Pied-Piper` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-pied-piper fa-3x'>F</i> Normal <br>
<i class='fab fa-pied-piper fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-pied-piper fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-pied-piper fa-3x'>F</i> Normal <br>
<i class='fab fa-pied-piper fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-pied-piper fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Pied-Piper` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Pied-Piper` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-pied-piper fa-stack-1x'></i>
    </span>
      Pied-Piper on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-pied-piper fa-stack-1x fa-inverse'></i>
    </span>
      Pied-Piper on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-pied-piper fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Pied-Piper on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-pied-piper fa-stack-1x'></i>
    </span>
      Pied-Piper on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-pied-piper fa-stack-1x fa-inverse'></i>
    </span>
      Pied-Piper on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-pied-piper fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Pied-Piper on fa-ban
</div>
</div>

