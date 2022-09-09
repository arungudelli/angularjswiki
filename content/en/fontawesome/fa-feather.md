
+++
title='Feather font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Feather font awesome icon CSS class is fa-feather & CSS Content Code is  \f52d'
keywords =['Feather, \f52d,fa-feather']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-feather-pointed'
next = 'fa-ferry'
linktitle = 'fa-feather_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Feather` font awesome icon css class name is `fa-feather` and CSS Content Code is ` \f52d`**.
 

`Feather` font awesome icon is part of solid icons. 



{{%toc%}}
## `Feather` font awesome icon usage
We can display `Feather` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Feather` font awesome icon CSS class name

To display `Feather` font awesome icon, add predefined class name i.e.,`fa-feather` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Feather` icon.


`Feather` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-feather'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-feather'></i>

</div>


## `Feather` font awesome icon CSS Content Code 

We can display `Feather` font awesome icon using it's CSS Content Code ` \f52d` 

Use the following HTML code 

```
<li><span class='Feather fontawesomeicon'></span>Feather</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Feather::before {
   font: var(--fa-font-solid);
    content: ' \f52d';
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

.Feather::before {
   font: var(--fa-font-solid);
    content: ' \f52d';
 }</style>

<li><span class='Feather fontawesomeicon'></span>Feather</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Feather` font awesome icon SVG 

Use the following icon SVG to display `Feather` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg>
 Feather displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg>
 Feather displayed using SVG</p>
</div>

## Change `Feather` font awesome icon size
To increase `Feather` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f52d.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-feather fa-lg'>fa-lg</i><br/>
<i class='fas fa-feather fa-2x'>fa-2x</i><br/>
<i class='fas fa-feather fa-3x'>fa-3x</i><br/>
<i class='fas fa-feather fa-4x'>fa-4x</i><br/>
<i class='fas fa-feather fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-feather fa-lg'>fa-lg</i><br/>
<i class='fas fa-feather fa-2x'>fa-2x</i><br/>
<i class='fas fa-feather fa-3x'>fa-3x</i><br/>
<i class='fas fa-feather fa-4x'>fa-4x</i><br/>
<i class='fas fa-feather fa-5x'>fa-5x</i><br/>

</div>

## `Feather` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Feather` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-feather fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-feather fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-feather fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-feather fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Feather` font awesome icon Border
To add border to `Feather` font awesome icon, use `fa-border` class.
```
<i class='fas fa-feather fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-feather fa-border fa-3x'></i>
</div>

## Pull `Feather` font awesome icon To the left
To pull `Feather` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-feather fa-pull-left fa-3x'></i>
  ... The text after Feather Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-feather fa-pull-left fa-3x'></i>
  ... The text after Feather Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Feather` font awesome icon To the left
To pull `Feather` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-feather fa-pull-right fa-3x'></i>
  ... The text after Feather Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-feather fa-pull-right fa-3x'></i>
  ... The text after Feather Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Feather` font awesome icon
To animate `Feather` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-feather fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-feather fa-spin fa-3x'></i>
</div>

## Animate `Feather` font awesome icon with steps
While animating the font awesome icon,We can rotate `Feather` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-feather fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-feather fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Feather` font awesome icon
 To rotate `Feather` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-feather fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-feather fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-feather fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-feather fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-feather fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-feather fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-feather fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-feather fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Feather` font awesome icon
 To flip `Feather` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-feather fa-3x'>F</i> Normal <br>
<i class='fas fa-feather fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-feather fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-feather fa-3x'>F</i> Normal <br>
<i class='fas fa-feather fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-feather fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Feather` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Feather` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-feather fa-stack-1x'></i>
    </span>
      Feather on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-feather fa-stack-1x fa-inverse'></i>
    </span>
      Feather on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-feather fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Feather on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-feather fa-stack-1x'></i>
    </span>
      Feather on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-feather fa-stack-1x fa-inverse'></i>
    </span>
      Feather on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-feather fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Feather on fa-ban
</div>
</div>

