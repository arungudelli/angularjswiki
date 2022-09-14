
+++
title='Copy font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Copy font awesome icon CSS class is fa-copy & CSS Content Code is f0c5'
keywords =['Copy, \f0c5,fa-copy']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-cookie'
next = 'fa-copyright'
linktitle = 'fa-copy'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Copy` font awesome icon css class name is `fa-copy` and CSS Content Code is ` \f0c5`**.

`Copy` font awesome icon has 2 style types i.e.,  regular(far), solid(fas) 


{{%toc%}}
## `Copy` font awesome icon usage
We can display `Copy` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Copy` font awesome icon CSS class name

To display `Copy` font awesome icon, add predefined class name i.e.,`fa-copy` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Copy` icon.


 `Copy` font awesome icon has 2 icon styles.
 To Display regular icon use `far` class. 
 To Display solid icon use `fas` class. 

```
<i class='far fa-copy'></i>
<i class='fas fa-copy'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='far fa-copy'></i>
<i class='fas fa-copy'></i>

</div>


## `Copy` font awesome icon CSS Content Code 

We can display `Copy` font awesome icon using it's CSS Content Code ` \f0c5` 

Use the following HTML code 

```
<li><span class='Copy fontawesomeicon'></span>Copy</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Copy::before {
   font: var(--fa-font-solid);
    content: ' \f0c5';
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

.Copy::before {
   font: var(--fa-font-solid);
    content: ' \f0c5';
 }</style>

<li><span class='Copy fontawesomeicon'></span>Copy</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Copy` font awesome icon SVG 

Use the following icon SVG to display `Copy` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
 Copy displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
 Copy displayed using SVG</p>
</div>

## Change `Copy` font awesome icon size
To increase `Copy` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f0c5.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-copy fa-lg'>fa-lg</i><br/>
<i class='fas fa-copy fa-2x'>fa-2x</i><br/>
<i class='fas fa-copy fa-3x'>fa-3x</i><br/>
<i class='fas fa-copy fa-4x'>fa-4x</i><br/>
<i class='fas fa-copy fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-copy fa-lg'>fa-lg</i><br/>
<i class='fas fa-copy fa-2x'>fa-2x</i><br/>
<i class='fas fa-copy fa-3x'>fa-3x</i><br/>
<i class='fas fa-copy fa-4x'>fa-4x</i><br/>
<i class='fas fa-copy fa-5x'>fa-5x</i><br/>

</div>

## `Copy` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Copy` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-copy fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-copy fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-copy fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-copy fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Copy` font awesome icon Border
To add border to `Copy` font awesome icon, use `fa-border` class.
```
<i class='fas fa-copy fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-copy fa-border fa-3x'></i>
</div>

## Pull `Copy` font awesome icon To the left
To pull `Copy` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-copy fa-pull-left fa-3x'></i>
  ... The text after Copy Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-copy fa-pull-left fa-3x'></i>
  ... The text after Copy Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Copy` font awesome icon To the left
To pull `Copy` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-copy fa-pull-right fa-3x'></i>
  ... The text after Copy Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-copy fa-pull-right fa-3x'></i>
  ... The text after Copy Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Copy` font awesome icon
To animate `Copy` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-copy fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-copy fa-spin fa-3x'></i>
</div>

## Animate `Copy` font awesome icon with steps
While animating the font awesome icon,We can rotate `Copy` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-copy fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-copy fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Copy` font awesome icon
 To rotate `Copy` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-copy fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-copy fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-copy fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-copy fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-copy fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-copy fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-copy fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-copy fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Copy` font awesome icon
 To flip `Copy` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-copy fa-3x'>F</i> Normal <br>
<i class='fas fa-copy fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-copy fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-copy fa-3x'>F</i> Normal <br>
<i class='fas fa-copy fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-copy fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Copy` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Copy` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-copy fa-stack-1x'></i>
    </span>
      Copy on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-copy fa-stack-1x fa-inverse'></i>
    </span>
      Copy on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-copy fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Copy on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-copy fa-stack-1x'></i>
    </span>
      Copy on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-copy fa-stack-1x fa-inverse'></i>
    </span>
      Copy on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-copy fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Copy on fa-ban
</div>
</div>

