
+++
title='Vimeo font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Vimeo font awesome icon CSS class is fa-vimeo & CSS Content Code is  \f40a'
keywords =['Vimeo, \f40a,fa-vimeo']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-vimeo-v'
next = 'fa-vine'
linktitle = 'fa-vimeo_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Vimeo` font awesome icon css class name is `fa-vimeo` and CSS Content Code is ` \f40a`**.
 

`Vimeo` font awesome icon is part of brands icons. 



{{%toc%}}
## `Vimeo` font awesome icon usage
We can display `Vimeo` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Vimeo` font awesome icon CSS class name

To display `Vimeo` font awesome icon, add predefined class name i.e.,`fa-vimeo` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Vimeo` icon.


`Vimeo` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-vimeo'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-vimeo'></i>

</div>


## `Vimeo` font awesome icon CSS Content Code 

We can display `Vimeo` font awesome icon using it's CSS Content Code ` \f40a` 

Use the following HTML code 

```
<li><span class='Vimeo fontawesomeicon'></span>Vimeo</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Vimeo::before {
   font: var(--fa-font-brands);
    content: ' \f40a';
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

.Vimeo::before {
   font: var(--fa-font-brands);
    content: ' \f40a';
 }</style>

<li><span class='Vimeo fontawesomeicon'></span>Vimeo</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Vimeo` font awesome icon SVG 

Use the following icon SVG to display `Vimeo` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"/></svg>
 Vimeo displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"/></svg>
 Vimeo displayed using SVG</p>
</div>

## Change `Vimeo` font awesome icon size
To increase `Vimeo` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f40a.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-vimeo fa-lg'>fa-lg</i><br/>
<i class='fab fa-vimeo fa-2x'>fa-2x</i><br/>
<i class='fab fa-vimeo fa-3x'>fa-3x</i><br/>
<i class='fab fa-vimeo fa-4x'>fa-4x</i><br/>
<i class='fab fa-vimeo fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-vimeo fa-lg'>fa-lg</i><br/>
<i class='fab fa-vimeo fa-2x'>fa-2x</i><br/>
<i class='fab fa-vimeo fa-3x'>fa-3x</i><br/>
<i class='fab fa-vimeo fa-4x'>fa-4x</i><br/>
<i class='fab fa-vimeo fa-5x'>fa-5x</i><br/>

</div>

## `Vimeo` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Vimeo` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-vimeo fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-vimeo fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-vimeo fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-vimeo fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Vimeo` font awesome icon Border
To add border to `Vimeo` font awesome icon, use `fa-border` class.
```
<i class='fab fa-vimeo fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-vimeo fa-border fa-3x'></i>
</div>

## Pull `Vimeo` font awesome icon To the left
To pull `Vimeo` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-vimeo fa-pull-left fa-3x'></i>
  ... The text after Vimeo Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-vimeo fa-pull-left fa-3x'></i>
  ... The text after Vimeo Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Vimeo` font awesome icon To the left
To pull `Vimeo` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-vimeo fa-pull-right fa-3x'></i>
  ... The text after Vimeo Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-vimeo fa-pull-right fa-3x'></i>
  ... The text after Vimeo Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Vimeo` font awesome icon
To animate `Vimeo` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-vimeo fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-vimeo fa-spin fa-3x'></i>
</div>

## Animate `Vimeo` font awesome icon with steps
While animating the font awesome icon,We can rotate `Vimeo` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-vimeo fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-vimeo fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Vimeo` font awesome icon
 To rotate `Vimeo` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-vimeo fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-vimeo fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-vimeo fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-vimeo fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-vimeo fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-vimeo fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-vimeo fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-vimeo fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Vimeo` font awesome icon
 To flip `Vimeo` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-vimeo fa-3x'>F</i> Normal <br>
<i class='fab fa-vimeo fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-vimeo fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-vimeo fa-3x'>F</i> Normal <br>
<i class='fab fa-vimeo fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-vimeo fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Vimeo` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Vimeo` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-vimeo fa-stack-1x'></i>
    </span>
      Vimeo on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-vimeo fa-stack-1x fa-inverse'></i>
    </span>
      Vimeo on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-vimeo fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Vimeo on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-vimeo fa-stack-1x'></i>
    </span>
      Vimeo on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-vimeo fa-stack-1x fa-inverse'></i>
    </span>
      Vimeo on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-vimeo fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Vimeo on fa-ban
</div>
</div>

