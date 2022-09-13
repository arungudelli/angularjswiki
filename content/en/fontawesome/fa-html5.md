
+++
title='Html5 font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Html5 font awesome icon CSS class is fa-html5 & CSS Content Code is  \f13b'
keywords =['Html5, \f13b,fa-html5']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-houzz'
next = 'fa-hubspot'
linktitle = 'fa-html5'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Html5` font awesome icon css class name is `fa-html5` and CSS Content Code is ` \f13b`**.
 

`Html5` font awesome icon is part of brands icons. 



{{%toc%}}
## `Html5` font awesome icon usage
We can display `Html5` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Html5` font awesome icon CSS class name

To display `Html5` font awesome icon, add predefined class name i.e.,`fa-html5` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Html5` icon.


`Html5` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-html5'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-html5'></i>

</div>


## `Html5` font awesome icon CSS Content Code 

We can display `Html5` font awesome icon using it's CSS Content Code ` \f13b` 

Use the following HTML code 

```
<li><span class='Html5 fontawesomeicon'></span>Html5</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Html5::before {
   font: var(--fa-font-brands);
    content: ' \f13b';
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

.Html5::before {
   font: var(--fa-font-brands);
    content: ' \f13b';
 }</style>

<li><span class='Html5 fontawesomeicon'></span>Html5</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Html5` font awesome icon SVG 

Use the following icon SVG to display `Html5` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
 Html5 displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
 Html5 displayed using SVG</p>
</div>

## Change `Html5` font awesome icon size
To increase `Html5` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f13b.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-html5 fa-lg'>fa-lg</i><br/>
<i class='fab fa-html5 fa-2x'>fa-2x</i><br/>
<i class='fab fa-html5 fa-3x'>fa-3x</i><br/>
<i class='fab fa-html5 fa-4x'>fa-4x</i><br/>
<i class='fab fa-html5 fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-html5 fa-lg'>fa-lg</i><br/>
<i class='fab fa-html5 fa-2x'>fa-2x</i><br/>
<i class='fab fa-html5 fa-3x'>fa-3x</i><br/>
<i class='fab fa-html5 fa-4x'>fa-4x</i><br/>
<i class='fab fa-html5 fa-5x'>fa-5x</i><br/>

</div>

## `Html5` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Html5` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-html5 fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-html5 fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-html5 fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-html5 fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Html5` font awesome icon Border
To add border to `Html5` font awesome icon, use `fa-border` class.
```
<i class='fab fa-html5 fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-html5 fa-border fa-3x'></i>
</div>

## Pull `Html5` font awesome icon To the left
To pull `Html5` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-html5 fa-pull-left fa-3x'></i>
  ... The text after Html5 Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-html5 fa-pull-left fa-3x'></i>
  ... The text after Html5 Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Html5` font awesome icon To the left
To pull `Html5` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-html5 fa-pull-right fa-3x'></i>
  ... The text after Html5 Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-html5 fa-pull-right fa-3x'></i>
  ... The text after Html5 Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Html5` font awesome icon
To animate `Html5` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-html5 fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-html5 fa-spin fa-3x'></i>
</div>

## Animate `Html5` font awesome icon with steps
While animating the font awesome icon,We can rotate `Html5` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-html5 fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-html5 fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Html5` font awesome icon
 To rotate `Html5` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-html5 fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-html5 fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-html5 fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-html5 fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-html5 fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-html5 fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-html5 fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-html5 fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Html5` font awesome icon
 To flip `Html5` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-html5 fa-3x'>F</i> Normal <br>
<i class='fab fa-html5 fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-html5 fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-html5 fa-3x'>F</i> Normal <br>
<i class='fab fa-html5 fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-html5 fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Html5` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Html5` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-html5 fa-stack-1x'></i>
    </span>
      Html5 on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-html5 fa-stack-1x fa-inverse'></i>
    </span>
      Html5 on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-html5 fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Html5 on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-html5 fa-stack-1x'></i>
    </span>
      Html5 on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-html5 fa-stack-1x fa-inverse'></i>
    </span>
      Html5 on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-html5 fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Html5 on fa-ban
</div>
</div>

