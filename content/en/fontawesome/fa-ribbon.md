
+++
title='Ribbon font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Ribbon font awesome icon CSS class is fa-ribbon & CSS Content Code is f4d6'
keywords =['Ribbon, \f4d6,fa-ribbon']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-retweet'
next = 'fa-right-from-bracket'
linktitle = 'fa-ribbon'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Ribbon` font awesome icon css class name is `fa-ribbon` and CSS Content Code is ` \f4d6`**.
 

`Ribbon` font awesome icon is part of solid icons. 



{{%toc%}}
## `Ribbon` font awesome icon usage
We can display `Ribbon` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Ribbon` font awesome icon CSS class name

To display `Ribbon` font awesome icon, add predefined class name i.e.,`fa-ribbon` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Ribbon` icon.


`Ribbon` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-ribbon'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-ribbon'></i>

</div>


## `Ribbon` font awesome icon CSS Content Code 

We can display `Ribbon` font awesome icon using it's CSS Content Code ` \f4d6` 

Use the following HTML code 

```
<li><span class='Ribbon fontawesomeicon'></span>Ribbon</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Ribbon::before {
   font: var(--fa-font-solid);
    content: ' \f4d6';
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

.Ribbon::before {
   font: var(--fa-font-solid);
    content: ' \f4d6';
 }</style>

<li><span class='Ribbon fontawesomeicon'></span>Ribbon</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Ribbon` font awesome icon SVG 

Use the following icon SVG to display `Ribbon` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 96c39.5 0 66.8 12.2 81.9 21.5L245.6 184l79.3 87.4 36.3-40c14.7-16.2 22.8-37.3 22.8-59.1v-27c0-15.6-4.1-30.8-12-44.3L337.7 42C326.4 22.7 307 6.8 282.1 3.5C267.8 1.6 248.4 0 224 0s-43.8 1.6-58 3.5C141 6.8 121.7 22.7 110.4 42L76 101c-7.8 13.4-12 28.7-12 44.3v27c0 21.9 8.1 42.9 22.8 59.1l57.9 63.8L224 382.6 334.2 504.1c6.4 7 16.3 9.7 25.4 6.6l72-24c7.7-2.6 13.6-8.8 15.6-16.7s0-16.2-5.4-22.2L303.3 295.2 224 207.8l-81.9-90.3C157.3 108.2 184.5 96 224 96zM202.4 406.5L123.2 319 6.3 447.9c-5.4 6-7.5 14.4-5.4 22.2s7.9 14.1 15.6 16.7l72 24c9 3 19 .4 25.4-6.6l88.6-97.7z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 96c39.5 0 66.8 12.2 81.9 21.5L245.6 184l79.3 87.4 36.3-40c14.7-16.2 22.8-37.3 22.8-59.1v-27c0-15.6-4.1-30.8-12-44.3L337.7 42C326.4 22.7 307 6.8 282.1 3.5C267.8 1.6 248.4 0 224 0s-43.8 1.6-58 3.5C141 6.8 121.7 22.7 110.4 42L76 101c-7.8 13.4-12 28.7-12 44.3v27c0 21.9 8.1 42.9 22.8 59.1l57.9 63.8L224 382.6 334.2 504.1c6.4 7 16.3 9.7 25.4 6.6l72-24c7.7-2.6 13.6-8.8 15.6-16.7s0-16.2-5.4-22.2L303.3 295.2 224 207.8l-81.9-90.3C157.3 108.2 184.5 96 224 96zM202.4 406.5L123.2 319 6.3 447.9c-5.4 6-7.5 14.4-5.4 22.2s7.9 14.1 15.6 16.7l72 24c9 3 19 .4 25.4-6.6l88.6-97.7z"/></svg>
 Ribbon displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 96c39.5 0 66.8 12.2 81.9 21.5L245.6 184l79.3 87.4 36.3-40c14.7-16.2 22.8-37.3 22.8-59.1v-27c0-15.6-4.1-30.8-12-44.3L337.7 42C326.4 22.7 307 6.8 282.1 3.5C267.8 1.6 248.4 0 224 0s-43.8 1.6-58 3.5C141 6.8 121.7 22.7 110.4 42L76 101c-7.8 13.4-12 28.7-12 44.3v27c0 21.9 8.1 42.9 22.8 59.1l57.9 63.8L224 382.6 334.2 504.1c6.4 7 16.3 9.7 25.4 6.6l72-24c7.7-2.6 13.6-8.8 15.6-16.7s0-16.2-5.4-22.2L303.3 295.2 224 207.8l-81.9-90.3C157.3 108.2 184.5 96 224 96zM202.4 406.5L123.2 319 6.3 447.9c-5.4 6-7.5 14.4-5.4 22.2s7.9 14.1 15.6 16.7l72 24c9 3 19 .4 25.4-6.6l88.6-97.7z"/></svg>
 Ribbon displayed using SVG</p>
</div>

## Change `Ribbon` font awesome icon size
To increase `Ribbon` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f4d6.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-ribbon fa-lg'>fa-lg</i><br/>
<i class='fas fa-ribbon fa-2x'>fa-2x</i><br/>
<i class='fas fa-ribbon fa-3x'>fa-3x</i><br/>
<i class='fas fa-ribbon fa-4x'>fa-4x</i><br/>
<i class='fas fa-ribbon fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-ribbon fa-lg'>fa-lg</i><br/>
<i class='fas fa-ribbon fa-2x'>fa-2x</i><br/>
<i class='fas fa-ribbon fa-3x'>fa-3x</i><br/>
<i class='fas fa-ribbon fa-4x'>fa-4x</i><br/>
<i class='fas fa-ribbon fa-5x'>fa-5x</i><br/>

</div>

## `Ribbon` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Ribbon` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-ribbon fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-ribbon fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-ribbon fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-ribbon fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Ribbon` font awesome icon Border
To add border to `Ribbon` font awesome icon, use `fa-border` class.
```
<i class='fas fa-ribbon fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-ribbon fa-border fa-3x'></i>
</div>

## Pull `Ribbon` font awesome icon To the left
To pull `Ribbon` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-ribbon fa-pull-left fa-3x'></i>
  ... The text after Ribbon Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-ribbon fa-pull-left fa-3x'></i>
  ... The text after Ribbon Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Ribbon` font awesome icon To the left
To pull `Ribbon` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-ribbon fa-pull-right fa-3x'></i>
  ... The text after Ribbon Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-ribbon fa-pull-right fa-3x'></i>
  ... The text after Ribbon Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Ribbon` font awesome icon
To animate `Ribbon` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-ribbon fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-ribbon fa-spin fa-3x'></i>
</div>

## Animate `Ribbon` font awesome icon with steps
While animating the font awesome icon,We can rotate `Ribbon` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-ribbon fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-ribbon fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Ribbon` font awesome icon
 To rotate `Ribbon` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-ribbon fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-ribbon fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-ribbon fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-ribbon fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-ribbon fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-ribbon fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-ribbon fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-ribbon fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Ribbon` font awesome icon
 To flip `Ribbon` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-ribbon fa-3x'>F</i> Normal <br>
<i class='fas fa-ribbon fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-ribbon fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-ribbon fa-3x'>F</i> Normal <br>
<i class='fas fa-ribbon fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-ribbon fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Ribbon` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Ribbon` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-ribbon fa-stack-1x'></i>
    </span>
      Ribbon on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-ribbon fa-stack-1x fa-inverse'></i>
    </span>
      Ribbon on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-ribbon fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Ribbon on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-ribbon fa-stack-1x'></i>
    </span>
      Ribbon on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-ribbon fa-stack-1x fa-inverse'></i>
    </span>
      Ribbon on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-ribbon fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Ribbon on fa-ban
</div>
</div>

