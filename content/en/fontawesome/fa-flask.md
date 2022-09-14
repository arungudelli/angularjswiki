
+++
title='Flask font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Flask font awesome icon CSS class is fa-flask & CSS Content Code is f0c3'
keywords =['Flask, \f0c3,fa-flask']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-flask-vial'
next = 'fa-floppy-disk'
linktitle = 'fa-flask'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Flask` font awesome icon css class name is `fa-flask` and CSS Content Code is ` \f0c3`**.
 

`Flask` font awesome icon is part of solid icons. 



{{%toc%}}
## `Flask` font awesome icon usage
We can display `Flask` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Flask` font awesome icon CSS class name

To display `Flask` font awesome icon, add predefined class name i.e.,`fa-flask` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Flask` icon.


`Flask` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-flask'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-flask'></i>

</div>


## `Flask` font awesome icon CSS Content Code 

We can display `Flask` font awesome icon using it's CSS Content Code ` \f0c3` 

Use the following HTML code 

```
<li><span class='Flask fontawesomeicon'></span>Flask</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Flask::before {
   font: var(--fa-font-solid);
    content: ' \f0c3';
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

.Flask::before {
   font: var(--fa-font-solid);
    content: ' \f0c3';
 }</style>

<li><span class='Flask fontawesomeicon'></span>Flask</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Flask` font awesome icon SVG 

Use the following icon SVG to display `Flask` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>
 Flask displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>
 Flask displayed using SVG</p>
</div>

## Change `Flask` font awesome icon size
To increase `Flask` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f0c3.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-flask fa-lg'>fa-lg</i><br/>
<i class='fas fa-flask fa-2x'>fa-2x</i><br/>
<i class='fas fa-flask fa-3x'>fa-3x</i><br/>
<i class='fas fa-flask fa-4x'>fa-4x</i><br/>
<i class='fas fa-flask fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-flask fa-lg'>fa-lg</i><br/>
<i class='fas fa-flask fa-2x'>fa-2x</i><br/>
<i class='fas fa-flask fa-3x'>fa-3x</i><br/>
<i class='fas fa-flask fa-4x'>fa-4x</i><br/>
<i class='fas fa-flask fa-5x'>fa-5x</i><br/>

</div>

## `Flask` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Flask` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-flask fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-flask fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-flask fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-flask fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Flask` font awesome icon Border
To add border to `Flask` font awesome icon, use `fa-border` class.
```
<i class='fas fa-flask fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-flask fa-border fa-3x'></i>
</div>

## Pull `Flask` font awesome icon To the left
To pull `Flask` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-flask fa-pull-left fa-3x'></i>
  ... The text after Flask Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-flask fa-pull-left fa-3x'></i>
  ... The text after Flask Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Flask` font awesome icon To the left
To pull `Flask` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-flask fa-pull-right fa-3x'></i>
  ... The text after Flask Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-flask fa-pull-right fa-3x'></i>
  ... The text after Flask Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Flask` font awesome icon
To animate `Flask` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-flask fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-flask fa-spin fa-3x'></i>
</div>

## Animate `Flask` font awesome icon with steps
While animating the font awesome icon,We can rotate `Flask` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-flask fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-flask fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Flask` font awesome icon
 To rotate `Flask` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-flask fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-flask fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-flask fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-flask fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-flask fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-flask fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-flask fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-flask fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Flask` font awesome icon
 To flip `Flask` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-flask fa-3x'>F</i> Normal <br>
<i class='fas fa-flask fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-flask fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-flask fa-3x'>F</i> Normal <br>
<i class='fas fa-flask fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-flask fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Flask` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Flask` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-flask fa-stack-1x'></i>
    </span>
      Flask on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-flask fa-stack-1x fa-inverse'></i>
    </span>
      Flask on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-flask fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Flask on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-flask fa-stack-1x'></i>
    </span>
      Flask on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-flask fa-stack-1x fa-inverse'></i>
    </span>
      Flask on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-flask fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Flask on fa-ban
</div>
</div>

