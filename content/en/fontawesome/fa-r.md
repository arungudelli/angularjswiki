
+++
title='R font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'R font awesome icon CSS class is fa-r & CSS Content Code is  \52'
keywords =['R, \52,fa-r']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-quote-right'
next = 'fa-radiation'
linktitle = 'fa-r'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`R` font awesome icon css class name is `fa-r` and CSS Content Code is ` \52`**.
 

`R` font awesome icon is part of solid icons. 



{{%toc%}}
## `R` font awesome icon usage
We can display `R` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `R` font awesome icon CSS class name

To display `R` font awesome icon, add predefined class name i.e.,`fa-r` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `R` icon.


`R` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-r'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-r'></i>

</div>


## `R` font awesome icon CSS Content Code 

We can display `R` font awesome icon using it's CSS Content Code ` \52` 

Use the following HTML code 

```
<li><span class='R fontawesomeicon'></span>R</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.R::before {
   font: var(--fa-font-solid);
    content: ' \52';
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

.R::before {
   font: var(--fa-font-solid);
    content: ' \52';
 }</style>

<li><span class='R fontawesomeicon'></span>R</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `R` font awesome icon SVG 

Use the following icon SVG to display `R` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64V288 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144H32zM176 256H64V96H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64V288 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144H32zM176 256H64V96H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"/></svg>
 R displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64V288 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144H32zM176 256H64V96H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"/></svg>
 R displayed using SVG</p>
</div>

## Change `R` font awesome icon size
To increase `R` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \52.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-r fa-lg'>fa-lg</i><br/>
<i class='fas fa-r fa-2x'>fa-2x</i><br/>
<i class='fas fa-r fa-3x'>fa-3x</i><br/>
<i class='fas fa-r fa-4x'>fa-4x</i><br/>
<i class='fas fa-r fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-r fa-lg'>fa-lg</i><br/>
<i class='fas fa-r fa-2x'>fa-2x</i><br/>
<i class='fas fa-r fa-3x'>fa-3x</i><br/>
<i class='fas fa-r fa-4x'>fa-4x</i><br/>
<i class='fas fa-r fa-5x'>fa-5x</i><br/>

</div>

## `R` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `R` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-r fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-r fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-r fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-r fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `R` font awesome icon Border
To add border to `R` font awesome icon, use `fa-border` class.
```
<i class='fas fa-r fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-r fa-border fa-3x'></i>
</div>

## Pull `R` font awesome icon To the left
To pull `R` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-r fa-pull-left fa-3x'></i>
  ... The text after R Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-r fa-pull-left fa-3x'></i>
  ... The text after R Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `R` font awesome icon To the left
To pull `R` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-r fa-pull-right fa-3x'></i>
  ... The text after R Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-r fa-pull-right fa-3x'></i>
  ... The text after R Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `R` font awesome icon
To animate `R` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-r fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-r fa-spin fa-3x'></i>
</div>

## Animate `R` font awesome icon with steps
While animating the font awesome icon,We can rotate `R` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-r fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-r fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `R` font awesome icon
 To rotate `R` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-r fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-r fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-r fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-r fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-r fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-r fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-r fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-r fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `R` font awesome icon
 To flip `R` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-r fa-3x'>F</i> Normal <br>
<i class='fas fa-r fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-r fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-r fa-3x'>F</i> Normal <br>
<i class='fas fa-r fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-r fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `R` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `R` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-r fa-stack-1x'></i>
    </span>
      R on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-r fa-stack-1x fa-inverse'></i>
    </span>
      R on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-r fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      R on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-r fa-stack-1x'></i>
    </span>
      R on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-r fa-stack-1x fa-inverse'></i>
    </span>
      R on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-r fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      R on fa-ban
</div>
</div>

