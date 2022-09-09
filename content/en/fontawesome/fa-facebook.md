
+++
title='Facebook font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Facebook font awesome icon CSS class is fa-facebook & CSS Content Code is  \f09a'
keywords =['Facebook, \f09a,fa-facebook']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-facebook-messenger'
next = 'fa-fantasy-flight-games'
linktitle = 'fa-facebook_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Facebook` font awesome icon css class name is `fa-facebook` and CSS Content Code is ` \f09a`**.
 

`Facebook` font awesome icon is part of brands icons. 



{{%toc%}}
## `Facebook` font awesome icon usage
We can display `Facebook` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Facebook` font awesome icon CSS class name

To display `Facebook` font awesome icon, add predefined class name i.e.,`fa-facebook` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Facebook` icon.


`Facebook` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-facebook'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-facebook'></i>

</div>


## `Facebook` font awesome icon CSS Content Code 

We can display `Facebook` font awesome icon using it's CSS Content Code ` \f09a` 

Use the following HTML code 

```
<li><span class='Facebook fontawesomeicon'></span>Facebook</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Facebook::before {
   font: var(--fa-font-brands);
    content: ' \f09a';
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

.Facebook::before {
   font: var(--fa-font-brands);
    content: ' \f09a';
 }</style>

<li><span class='Facebook fontawesomeicon'></span>Facebook</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Facebook` font awesome icon SVG 

Use the following icon SVG to display `Facebook` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
 Facebook displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
 Facebook displayed using SVG</p>
</div>

## Change `Facebook` font awesome icon size
To increase `Facebook` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f09a.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-facebook fa-lg'>fa-lg</i><br/>
<i class='fab fa-facebook fa-2x'>fa-2x</i><br/>
<i class='fab fa-facebook fa-3x'>fa-3x</i><br/>
<i class='fab fa-facebook fa-4x'>fa-4x</i><br/>
<i class='fab fa-facebook fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-facebook fa-lg'>fa-lg</i><br/>
<i class='fab fa-facebook fa-2x'>fa-2x</i><br/>
<i class='fab fa-facebook fa-3x'>fa-3x</i><br/>
<i class='fab fa-facebook fa-4x'>fa-4x</i><br/>
<i class='fab fa-facebook fa-5x'>fa-5x</i><br/>

</div>

## `Facebook` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Facebook` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-facebook fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-facebook fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-facebook fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-facebook fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Facebook` font awesome icon Border
To add border to `Facebook` font awesome icon, use `fa-border` class.
```
<i class='fab fa-facebook fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-facebook fa-border fa-3x'></i>
</div>

## Pull `Facebook` font awesome icon To the left
To pull `Facebook` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-facebook fa-pull-left fa-3x'></i>
  ... The text after Facebook Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-facebook fa-pull-left fa-3x'></i>
  ... The text after Facebook Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Facebook` font awesome icon To the left
To pull `Facebook` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-facebook fa-pull-right fa-3x'></i>
  ... The text after Facebook Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-facebook fa-pull-right fa-3x'></i>
  ... The text after Facebook Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Facebook` font awesome icon
To animate `Facebook` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-facebook fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-facebook fa-spin fa-3x'></i>
</div>

## Animate `Facebook` font awesome icon with steps
While animating the font awesome icon,We can rotate `Facebook` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-facebook fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-facebook fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Facebook` font awesome icon
 To rotate `Facebook` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-facebook fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-facebook fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-facebook fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-facebook fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-facebook fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-facebook fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-facebook fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-facebook fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Facebook` font awesome icon
 To flip `Facebook` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-facebook fa-3x'>F</i> Normal <br>
<i class='fab fa-facebook fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-facebook fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-facebook fa-3x'>F</i> Normal <br>
<i class='fab fa-facebook fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-facebook fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Facebook` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Facebook` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-facebook fa-stack-1x'></i>
    </span>
      Facebook on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-facebook fa-stack-1x fa-inverse'></i>
    </span>
      Facebook on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-facebook fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Facebook on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-facebook fa-stack-1x'></i>
    </span>
      Facebook on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-facebook fa-stack-1x fa-inverse'></i>
    </span>
      Facebook on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-facebook fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Facebook on fa-ban
</div>
</div>

