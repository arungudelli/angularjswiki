
+++
title='Cross font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Cross font awesome icon CSS class is fa-cross & CSS Content Code is f654'
keywords =['Cross, \f654,fa-cross']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-crop'
next = 'fa-crosshairs'
linktitle = 'fa-cross'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Cross` font awesome icon css class name is `fa-cross` and CSS Content Code is ` \f654`**.
 

`Cross` font awesome icon is part of solid icons. 



{{%toc%}}
## `Cross` font awesome icon usage
We can display `Cross` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Cross` font awesome icon CSS class name

To display `Cross` font awesome icon, add predefined class name i.e.,`fa-cross` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Cross` icon.


`Cross` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-cross'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-cross'></i>

</div>


## `Cross` font awesome icon CSS Content Code 

We can display `Cross` font awesome icon using it's CSS Content Code ` \f654` 

Use the following HTML code 

```
<li><span class='Cross fontawesomeicon'></span>Cross</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Cross::before {
   font: var(--fa-font-solid);
    content: ' \f654';
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

.Cross::before {
   font: var(--fa-font-solid);
    content: ' \f654';
 }</style>

<li><span class='Cross fontawesomeicon'></span>Cross</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Cross` font awesome icon SVG 

Use the following icon SVG to display `Cross` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z"/></svg>
 Cross displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z"/></svg>
 Cross displayed using SVG</p>
</div>

## Change `Cross` font awesome icon size
To increase `Cross` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f654.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-cross fa-lg'>fa-lg</i><br/>
<i class='fas fa-cross fa-2x'>fa-2x</i><br/>
<i class='fas fa-cross fa-3x'>fa-3x</i><br/>
<i class='fas fa-cross fa-4x'>fa-4x</i><br/>
<i class='fas fa-cross fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-cross fa-lg'>fa-lg</i><br/>
<i class='fas fa-cross fa-2x'>fa-2x</i><br/>
<i class='fas fa-cross fa-3x'>fa-3x</i><br/>
<i class='fas fa-cross fa-4x'>fa-4x</i><br/>
<i class='fas fa-cross fa-5x'>fa-5x</i><br/>

</div>

## `Cross` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Cross` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-cross fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-cross fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-cross fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-cross fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Cross` font awesome icon Border
To add border to `Cross` font awesome icon, use `fa-border` class.
```
<i class='fas fa-cross fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-cross fa-border fa-3x'></i>
</div>

## Pull `Cross` font awesome icon To the left
To pull `Cross` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-cross fa-pull-left fa-3x'></i>
  ... The text after Cross Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-cross fa-pull-left fa-3x'></i>
  ... The text after Cross Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Cross` font awesome icon To the left
To pull `Cross` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-cross fa-pull-right fa-3x'></i>
  ... The text after Cross Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-cross fa-pull-right fa-3x'></i>
  ... The text after Cross Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Cross` font awesome icon
To animate `Cross` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-cross fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-cross fa-spin fa-3x'></i>
</div>

## Animate `Cross` font awesome icon with steps
While animating the font awesome icon,We can rotate `Cross` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-cross fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-cross fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Cross` font awesome icon
 To rotate `Cross` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-cross fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-cross fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-cross fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-cross fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-cross fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-cross fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-cross fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-cross fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Cross` font awesome icon
 To flip `Cross` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-cross fa-3x'>F</i> Normal <br>
<i class='fas fa-cross fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-cross fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-cross fa-3x'>F</i> Normal <br>
<i class='fas fa-cross fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-cross fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Cross` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Cross` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-cross fa-stack-1x'></i>
    </span>
      Cross on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-cross fa-stack-1x fa-inverse'></i>
    </span>
      Cross on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-cross fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Cross on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-cross fa-stack-1x'></i>
    </span>
      Cross on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-cross fa-stack-1x fa-inverse'></i>
    </span>
      Cross on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-cross fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Cross on fa-ban
</div>
</div>

