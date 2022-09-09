
+++
title='Umbraco font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Umbraco font awesome icon CSS class is fa-umbraco & CSS Content Code is  \f8e8'
keywords =['Umbraco, \f8e8,fa-umbraco']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-uikit'
next = 'fa-uncharted'
linktitle = 'fa-umbraco'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Umbraco` font awesome icon css class name is `fa-umbraco` and CSS Content Code is ` \f8e8`**.
 

`Umbraco` font awesome icon is part of brands icons. 



{{%toc%}}
## `Umbraco` font awesome icon usage
We can display `Umbraco` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Umbraco` font awesome icon CSS class name

To display `Umbraco` font awesome icon, add predefined class name i.e.,`fa-umbraco` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Umbraco` icon.


`Umbraco` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-umbraco'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-umbraco'></i>

</div>


## `Umbraco` font awesome icon CSS Content Code 

We can display `Umbraco` font awesome icon using it's CSS Content Code ` \f8e8` 

Use the following HTML code 

```
<li><span class='Umbraco fontawesomeicon'></span>Umbraco</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Umbraco::before {
   font: var(--fa-font-brands);
    content: ' \f8e8';
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

.Umbraco::before {
   font: var(--fa-font-brands);
    content: ' \f8e8';
 }</style>

<li><span class='Umbraco fontawesomeicon'></span>Umbraco</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Umbraco` font awesome icon SVG 

Use the following icon SVG to display `Umbraco` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M255.35 8C118.36 7.83 7.14 118.72 7 255.68c-.07 137 111 248.2 248 248.27 136.85 0 247.82-110.7 248-247.67S392.34 8.17 255.35 8zm145 266q-1.14 40.68-14 65t-43.51 35q-30.61 10.7-85.45 10.47h-4.6q-54.78.22-85.44-10.47t-43.52-35q-12.85-24.36-14-65a224.81 224.81 0 0 1 0-30.71 418.37 418.37 0 0 1 3.6-43.88c1.88-13.39 3.57-22.58 5.4-32 1-4.88 1.28-6.42 1.82-8.45a5.09 5.09 0 0 1 4.9-3.89h.69l32 5a5.07 5.07 0 0 1 4.16 5 5 5 0 0 1 0 .77l-1.7 8.78q-2.41 13.25-4.84 33.68a380.62 380.62 0 0 0-2.64 42.15q-.28 40.43 8.13 59.83a43.87 43.87 0 0 0 31.31 25.18A243 243 0 0 0 250 340.6h10.25a242.64 242.64 0 0 0 57.27-5.16 43.86 43.86 0 0 0 31.15-25.23q8.53-19.42 8.13-59.78a388 388 0 0 0-2.6-42.15q-2.48-20.38-4.89-33.68l-1.69-8.78a5 5 0 0 1 0-.77 5 5 0 0 1 4.2-5l32-5h.82a5 5 0 0 1 4.9 3.89c.55 2.05.81 3.57 1.83 8.45 1.82 9.62 3.52 18.78 5.39 32a415.71 415.71 0 0 1 3.61 43.88 228.06 228.06 0 0 1-.04 30.73z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M255.35 8C118.36 7.83 7.14 118.72 7 255.68c-.07 137 111 248.2 248 248.27 136.85 0 247.82-110.7 248-247.67S392.34 8.17 255.35 8zm145 266q-1.14 40.68-14 65t-43.51 35q-30.61 10.7-85.45 10.47h-4.6q-54.78.22-85.44-10.47t-43.52-35q-12.85-24.36-14-65a224.81 224.81 0 0 1 0-30.71 418.37 418.37 0 0 1 3.6-43.88c1.88-13.39 3.57-22.58 5.4-32 1-4.88 1.28-6.42 1.82-8.45a5.09 5.09 0 0 1 4.9-3.89h.69l32 5a5.07 5.07 0 0 1 4.16 5 5 5 0 0 1 0 .77l-1.7 8.78q-2.41 13.25-4.84 33.68a380.62 380.62 0 0 0-2.64 42.15q-.28 40.43 8.13 59.83a43.87 43.87 0 0 0 31.31 25.18A243 243 0 0 0 250 340.6h10.25a242.64 242.64 0 0 0 57.27-5.16 43.86 43.86 0 0 0 31.15-25.23q8.53-19.42 8.13-59.78a388 388 0 0 0-2.6-42.15q-2.48-20.38-4.89-33.68l-1.69-8.78a5 5 0 0 1 0-.77 5 5 0 0 1 4.2-5l32-5h.82a5 5 0 0 1 4.9 3.89c.55 2.05.81 3.57 1.83 8.45 1.82 9.62 3.52 18.78 5.39 32a415.71 415.71 0 0 1 3.61 43.88 228.06 228.06 0 0 1-.04 30.73z"/></svg>
 Umbraco displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M255.35 8C118.36 7.83 7.14 118.72 7 255.68c-.07 137 111 248.2 248 248.27 136.85 0 247.82-110.7 248-247.67S392.34 8.17 255.35 8zm145 266q-1.14 40.68-14 65t-43.51 35q-30.61 10.7-85.45 10.47h-4.6q-54.78.22-85.44-10.47t-43.52-35q-12.85-24.36-14-65a224.81 224.81 0 0 1 0-30.71 418.37 418.37 0 0 1 3.6-43.88c1.88-13.39 3.57-22.58 5.4-32 1-4.88 1.28-6.42 1.82-8.45a5.09 5.09 0 0 1 4.9-3.89h.69l32 5a5.07 5.07 0 0 1 4.16 5 5 5 0 0 1 0 .77l-1.7 8.78q-2.41 13.25-4.84 33.68a380.62 380.62 0 0 0-2.64 42.15q-.28 40.43 8.13 59.83a43.87 43.87 0 0 0 31.31 25.18A243 243 0 0 0 250 340.6h10.25a242.64 242.64 0 0 0 57.27-5.16 43.86 43.86 0 0 0 31.15-25.23q8.53-19.42 8.13-59.78a388 388 0 0 0-2.6-42.15q-2.48-20.38-4.89-33.68l-1.69-8.78a5 5 0 0 1 0-.77 5 5 0 0 1 4.2-5l32-5h.82a5 5 0 0 1 4.9 3.89c.55 2.05.81 3.57 1.83 8.45 1.82 9.62 3.52 18.78 5.39 32a415.71 415.71 0 0 1 3.61 43.88 228.06 228.06 0 0 1-.04 30.73z"/></svg>
 Umbraco displayed using SVG</p>
</div>

## Change `Umbraco` font awesome icon size
To increase `Umbraco` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f8e8.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-umbraco fa-lg'>fa-lg</i><br/>
<i class='fab fa-umbraco fa-2x'>fa-2x</i><br/>
<i class='fab fa-umbraco fa-3x'>fa-3x</i><br/>
<i class='fab fa-umbraco fa-4x'>fa-4x</i><br/>
<i class='fab fa-umbraco fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-umbraco fa-lg'>fa-lg</i><br/>
<i class='fab fa-umbraco fa-2x'>fa-2x</i><br/>
<i class='fab fa-umbraco fa-3x'>fa-3x</i><br/>
<i class='fab fa-umbraco fa-4x'>fa-4x</i><br/>
<i class='fab fa-umbraco fa-5x'>fa-5x</i><br/>

</div>

## `Umbraco` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Umbraco` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-umbraco fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-umbraco fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-umbraco fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-umbraco fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Umbraco` font awesome icon Border
To add border to `Umbraco` font awesome icon, use `fa-border` class.
```
<i class='fab fa-umbraco fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-umbraco fa-border fa-3x'></i>
</div>

## Pull `Umbraco` font awesome icon To the left
To pull `Umbraco` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-umbraco fa-pull-left fa-3x'></i>
  ... The text after Umbraco Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-umbraco fa-pull-left fa-3x'></i>
  ... The text after Umbraco Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Umbraco` font awesome icon To the left
To pull `Umbraco` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-umbraco fa-pull-right fa-3x'></i>
  ... The text after Umbraco Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-umbraco fa-pull-right fa-3x'></i>
  ... The text after Umbraco Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Umbraco` font awesome icon
To animate `Umbraco` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-umbraco fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-umbraco fa-spin fa-3x'></i>
</div>

## Animate `Umbraco` font awesome icon with steps
While animating the font awesome icon,We can rotate `Umbraco` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-umbraco fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-umbraco fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Umbraco` font awesome icon
 To rotate `Umbraco` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-umbraco fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-umbraco fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-umbraco fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-umbraco fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-umbraco fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-umbraco fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-umbraco fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-umbraco fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Umbraco` font awesome icon
 To flip `Umbraco` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-umbraco fa-3x'>F</i> Normal <br>
<i class='fab fa-umbraco fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-umbraco fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-umbraco fa-3x'>F</i> Normal <br>
<i class='fab fa-umbraco fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-umbraco fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Umbraco` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Umbraco` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-umbraco fa-stack-1x'></i>
    </span>
      Umbraco on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-umbraco fa-stack-1x fa-inverse'></i>
    </span>
      Umbraco on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-umbraco fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Umbraco on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-umbraco fa-stack-1x'></i>
    </span>
      Umbraco on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-umbraco fa-stack-1x fa-inverse'></i>
    </span>
      Umbraco on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-umbraco fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Umbraco on fa-ban
</div>
</div>

