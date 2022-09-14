
+++
title='Discourse font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Discourse font awesome icon CSS class is fa-discourse & CSS Content Code is f393'
keywords =['Discourse, \f393,fa-discourse']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-discord'
next = 'fa-dochub'
linktitle = 'fa-discourse'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Discourse` font awesome icon css class name is `fa-discourse` and CSS Content Code is ` \f393`**.
 

`Discourse` font awesome icon is part of brands icons. 



{{%toc%}}
## `Discourse` font awesome icon usage
We can display `Discourse` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Discourse` font awesome icon CSS class name

To display `Discourse` font awesome icon, add predefined class name i.e.,`fa-discourse` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Discourse` icon.


`Discourse` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-discourse'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-discourse'></i>

</div>


## `Discourse` font awesome icon CSS Content Code 

We can display `Discourse` font awesome icon using it's CSS Content Code ` \f393` 

Use the following HTML code 

```
<li><span class='Discourse fontawesomeicon'></span>Discourse</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Discourse::before {
   font: var(--fa-font-brands);
    content: ' \f393';
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

.Discourse::before {
   font: var(--fa-font-brands);
    content: ' \f393';
 }</style>

<li><span class='Discourse fontawesomeicon'></span>Discourse</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Discourse` font awesome icon SVG 

Use the following icon SVG to display `Discourse` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"/></svg>
 Discourse displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"/></svg>
 Discourse displayed using SVG</p>
</div>

## Change `Discourse` font awesome icon size
To increase `Discourse` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f393.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-discourse fa-lg'>fa-lg</i><br/>
<i class='fab fa-discourse fa-2x'>fa-2x</i><br/>
<i class='fab fa-discourse fa-3x'>fa-3x</i><br/>
<i class='fab fa-discourse fa-4x'>fa-4x</i><br/>
<i class='fab fa-discourse fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-discourse fa-lg'>fa-lg</i><br/>
<i class='fab fa-discourse fa-2x'>fa-2x</i><br/>
<i class='fab fa-discourse fa-3x'>fa-3x</i><br/>
<i class='fab fa-discourse fa-4x'>fa-4x</i><br/>
<i class='fab fa-discourse fa-5x'>fa-5x</i><br/>

</div>

## `Discourse` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Discourse` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-discourse fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-discourse fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-discourse fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-discourse fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Discourse` font awesome icon Border
To add border to `Discourse` font awesome icon, use `fa-border` class.
```
<i class='fab fa-discourse fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-discourse fa-border fa-3x'></i>
</div>

## Pull `Discourse` font awesome icon To the left
To pull `Discourse` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-discourse fa-pull-left fa-3x'></i>
  ... The text after Discourse Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-discourse fa-pull-left fa-3x'></i>
  ... The text after Discourse Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Discourse` font awesome icon To the left
To pull `Discourse` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-discourse fa-pull-right fa-3x'></i>
  ... The text after Discourse Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-discourse fa-pull-right fa-3x'></i>
  ... The text after Discourse Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Discourse` font awesome icon
To animate `Discourse` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-discourse fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-discourse fa-spin fa-3x'></i>
</div>

## Animate `Discourse` font awesome icon with steps
While animating the font awesome icon,We can rotate `Discourse` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-discourse fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-discourse fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Discourse` font awesome icon
 To rotate `Discourse` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-discourse fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-discourse fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-discourse fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-discourse fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-discourse fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-discourse fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-discourse fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-discourse fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Discourse` font awesome icon
 To flip `Discourse` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-discourse fa-3x'>F</i> Normal <br>
<i class='fab fa-discourse fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-discourse fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-discourse fa-3x'>F</i> Normal <br>
<i class='fab fa-discourse fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-discourse fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Discourse` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Discourse` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-discourse fa-stack-1x'></i>
    </span>
      Discourse on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-discourse fa-stack-1x fa-inverse'></i>
    </span>
      Discourse on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-discourse fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Discourse on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-discourse fa-stack-1x'></i>
    </span>
      Discourse on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-discourse fa-stack-1x fa-inverse'></i>
    </span>
      Discourse on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-discourse fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Discourse on fa-ban
</div>
</div>

