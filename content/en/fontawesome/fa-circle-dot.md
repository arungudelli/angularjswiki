
+++
title='Circle-Dot font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Circle-Dot font awesome icon CSS class is fa-circle-dot & CSS Content Code is f192'
keywords =['Circle-Dot, \f192,fa-circle-dot']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-circle-dollar-to-slot'
next = 'fa-circle-down'
linktitle = 'fa-circle-dot'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Circle-Dot` font awesome icon css class name is `fa-circle-dot` and CSS Content Code is ` \f192`**.

`Circle-Dot` font awesome icon has 2 style types i.e.,  regular(far), solid(fas) 


{{%toc%}}
## `Circle-Dot` font awesome icon usage
We can display `Circle-Dot` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Circle-Dot` font awesome icon CSS class name

To display `Circle-Dot` font awesome icon, add predefined class name i.e.,`fa-circle-dot` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Circle-Dot` icon.


 `Circle-Dot` font awesome icon has 2 icon styles.
 To Display regular icon use `far` class. 
 To Display solid icon use `fas` class. 

```
<i class='far fa-circle-dot'></i>
<i class='fas fa-circle-dot'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='far fa-circle-dot'></i>
<i class='fas fa-circle-dot'></i>

</div>


## `Circle-Dot` font awesome icon CSS Content Code 

We can display `Circle-Dot` font awesome icon using it's CSS Content Code ` \f192` 

Use the following HTML code 

```
<li><span class='Circle-Dot fontawesomeicon'></span>Circle-Dot</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Circle-Dot::before {
   font: var(--fa-font-solid);
    content: ' \f192';
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

.Circle-Dot::before {
   font: var(--fa-font-solid);
    content: ' \f192';
 }</style>

<li><span class='Circle-Dot fontawesomeicon'></span>Circle-Dot</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Circle-Dot` font awesome icon SVG 

Use the following icon SVG to display `Circle-Dot` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
 Circle-Dot displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
 Circle-Dot displayed using SVG</p>
</div>

## Change `Circle-Dot` font awesome icon size
To increase `Circle-Dot` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f192.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-circle-dot fa-lg'>fa-lg</i><br/>
<i class='fas fa-circle-dot fa-2x'>fa-2x</i><br/>
<i class='fas fa-circle-dot fa-3x'>fa-3x</i><br/>
<i class='fas fa-circle-dot fa-4x'>fa-4x</i><br/>
<i class='fas fa-circle-dot fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-circle-dot fa-lg'>fa-lg</i><br/>
<i class='fas fa-circle-dot fa-2x'>fa-2x</i><br/>
<i class='fas fa-circle-dot fa-3x'>fa-3x</i><br/>
<i class='fas fa-circle-dot fa-4x'>fa-4x</i><br/>
<i class='fas fa-circle-dot fa-5x'>fa-5x</i><br/>

</div>

## `Circle-Dot` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Circle-Dot` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-circle-dot fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-circle-dot fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-circle-dot fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-circle-dot fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Circle-Dot` font awesome icon Border
To add border to `Circle-Dot` font awesome icon, use `fa-border` class.
```
<i class='fas fa-circle-dot fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-circle-dot fa-border fa-3x'></i>
</div>

## Pull `Circle-Dot` font awesome icon To the left
To pull `Circle-Dot` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-circle-dot fa-pull-left fa-3x'></i>
  ... The text after Circle-Dot Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-circle-dot fa-pull-left fa-3x'></i>
  ... The text after Circle-Dot Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Circle-Dot` font awesome icon To the left
To pull `Circle-Dot` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-circle-dot fa-pull-right fa-3x'></i>
  ... The text after Circle-Dot Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-circle-dot fa-pull-right fa-3x'></i>
  ... The text after Circle-Dot Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Circle-Dot` font awesome icon
To animate `Circle-Dot` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-circle-dot fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-circle-dot fa-spin fa-3x'></i>
</div>

## Animate `Circle-Dot` font awesome icon with steps
While animating the font awesome icon,We can rotate `Circle-Dot` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-circle-dot fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-circle-dot fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Circle-Dot` font awesome icon
 To rotate `Circle-Dot` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-circle-dot fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-circle-dot fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-circle-dot fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-circle-dot fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-circle-dot fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-circle-dot fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-circle-dot fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-circle-dot fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Circle-Dot` font awesome icon
 To flip `Circle-Dot` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-circle-dot fa-3x'>F</i> Normal <br>
<i class='fas fa-circle-dot fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-circle-dot fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-circle-dot fa-3x'>F</i> Normal <br>
<i class='fas fa-circle-dot fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-circle-dot fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Circle-Dot` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Circle-Dot` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-circle-dot fa-stack-1x'></i>
    </span>
      Circle-Dot on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-circle-dot fa-stack-1x fa-inverse'></i>
    </span>
      Circle-Dot on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle-dot fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Circle-Dot on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-circle-dot fa-stack-1x'></i>
    </span>
      Circle-Dot on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-circle-dot fa-stack-1x fa-inverse'></i>
    </span>
      Circle-Dot on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle-dot fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Circle-Dot on fa-ban
</div>
</div>

