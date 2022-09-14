
+++
title='Chevron-Right font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Chevron-Right font awesome icon CSS class is fa-chevron-right & CSS Content Code is f054'
keywords =['Chevron-Right, \f054,fa-chevron-right']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-chevron-left'
next = 'fa-chevron-up'
linktitle = 'fa-chevron-right'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Chevron-Right` font awesome icon css class name is `fa-chevron-right` and CSS Content Code is ` \f054`**.
 

`Chevron-Right` font awesome icon is part of solid icons. 



{{%toc%}}
## `Chevron-Right` font awesome icon usage
We can display `Chevron-Right` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Chevron-Right` font awesome icon CSS class name

To display `Chevron-Right` font awesome icon, add predefined class name i.e.,`fa-chevron-right` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Chevron-Right` icon.


`Chevron-Right` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-chevron-right'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-chevron-right'></i>

</div>


## `Chevron-Right` font awesome icon CSS Content Code 

We can display `Chevron-Right` font awesome icon using it's CSS Content Code ` \f054` 

Use the following HTML code 

```
<li><span class='Chevron-Right fontawesomeicon'></span>Chevron-Right</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Chevron-Right::before {
   font: var(--fa-font-solid);
    content: ' \f054';
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

.Chevron-Right::before {
   font: var(--fa-font-solid);
    content: ' \f054';
 }</style>

<li><span class='Chevron-Right fontawesomeicon'></span>Chevron-Right</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Chevron-Right` font awesome icon SVG 

Use the following icon SVG to display `Chevron-Right` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
 Chevron-Right displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
 Chevron-Right displayed using SVG</p>
</div>

## Change `Chevron-Right` font awesome icon size
To increase `Chevron-Right` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f054.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-chevron-right fa-lg'>fa-lg</i><br/>
<i class='fas fa-chevron-right fa-2x'>fa-2x</i><br/>
<i class='fas fa-chevron-right fa-3x'>fa-3x</i><br/>
<i class='fas fa-chevron-right fa-4x'>fa-4x</i><br/>
<i class='fas fa-chevron-right fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-chevron-right fa-lg'>fa-lg</i><br/>
<i class='fas fa-chevron-right fa-2x'>fa-2x</i><br/>
<i class='fas fa-chevron-right fa-3x'>fa-3x</i><br/>
<i class='fas fa-chevron-right fa-4x'>fa-4x</i><br/>
<i class='fas fa-chevron-right fa-5x'>fa-5x</i><br/>

</div>

## `Chevron-Right` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Chevron-Right` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-chevron-right fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-chevron-right fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-chevron-right fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-chevron-right fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Chevron-Right` font awesome icon Border
To add border to `Chevron-Right` font awesome icon, use `fa-border` class.
```
<i class='fas fa-chevron-right fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-chevron-right fa-border fa-3x'></i>
</div>

## Pull `Chevron-Right` font awesome icon To the left
To pull `Chevron-Right` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-chevron-right fa-pull-left fa-3x'></i>
  ... The text after Chevron-Right Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-chevron-right fa-pull-left fa-3x'></i>
  ... The text after Chevron-Right Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Chevron-Right` font awesome icon To the left
To pull `Chevron-Right` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-chevron-right fa-pull-right fa-3x'></i>
  ... The text after Chevron-Right Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-chevron-right fa-pull-right fa-3x'></i>
  ... The text after Chevron-Right Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Chevron-Right` font awesome icon
To animate `Chevron-Right` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-chevron-right fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-chevron-right fa-spin fa-3x'></i>
</div>

## Animate `Chevron-Right` font awesome icon with steps
While animating the font awesome icon,We can rotate `Chevron-Right` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-chevron-right fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-chevron-right fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Chevron-Right` font awesome icon
 To rotate `Chevron-Right` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-chevron-right fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-chevron-right fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-chevron-right fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-chevron-right fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-chevron-right fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-chevron-right fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-chevron-right fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-chevron-right fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Chevron-Right` font awesome icon
 To flip `Chevron-Right` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-chevron-right fa-3x'>F</i> Normal <br>
<i class='fas fa-chevron-right fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-chevron-right fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-chevron-right fa-3x'>F</i> Normal <br>
<i class='fas fa-chevron-right fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-chevron-right fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Chevron-Right` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Chevron-Right` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-chevron-right fa-stack-1x'></i>
    </span>
      Chevron-Right on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-chevron-right fa-stack-1x fa-inverse'></i>
    </span>
      Chevron-Right on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-chevron-right fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Chevron-Right on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-chevron-right fa-stack-1x'></i>
    </span>
      Chevron-Right on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-chevron-right fa-stack-1x fa-inverse'></i>
    </span>
      Chevron-Right on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-chevron-right fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Chevron-Right on fa-ban
</div>
</div>

