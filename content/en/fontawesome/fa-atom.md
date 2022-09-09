
+++
title='Atom font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Atom font awesome icon CSS class is fa-atom & CSS Content Code is  \f5d2'
keywords =['Atom, \f5d2,fa-atom']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-at'
next = 'fa-audio-description'
linktitle = 'fa-atom_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Atom` font awesome icon css class name is `fa-atom` and CSS Content Code is ` \f5d2`**.
 

`Atom` font awesome icon is part of solid icons. 



{{%toc%}}
## `Atom` font awesome icon usage
We can display `Atom` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Atom` font awesome icon CSS class name

To display `Atom` font awesome icon, add predefined class name i.e.,`fa-atom` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Atom` icon.


`Atom` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-atom'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-atom'></i>

</div>


## `Atom` font awesome icon CSS Content Code 

We can display `Atom` font awesome icon using it's CSS Content Code ` \f5d2` 

Use the following HTML code 

```
<li><span class='Atom fontawesomeicon'></span>Atom</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Atom::before {
   font: var(--fa-font-solid);
    content: ' \f5d2';
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

.Atom::before {
   font: var(--fa-font-solid);
    content: ' \f5d2';
 }</style>

<li><span class='Atom fontawesomeicon'></span>Atom</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Atom` font awesome icon SVG 

Use the following icon SVG to display `Atom` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M258.9 412.3c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5zM252.8 312c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6s.4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4zm184.8 72c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C300.4 32.7 266.8 0 224 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C-10.3 165.1 1 210.8 34 256C1 301.2-10.3 346.9 10.4 384c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2c31.8-1.4 38.6 8.7 40.2 11.7zM224 64c3.9 0 18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5C205.9 65.9 220.1 64 224 64zM106.5 147.5c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C59.4 177 64 163.3 66.3 159.1c1.6-2.9 8.4-13 40.2-11.7zM66.3 352.9c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM224 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M258.9 412.3c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5zM252.8 312c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6s.4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4zm184.8 72c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C300.4 32.7 266.8 0 224 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C-10.3 165.1 1 210.8 34 256C1 301.2-10.3 346.9 10.4 384c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2c31.8-1.4 38.6 8.7 40.2 11.7zM224 64c3.9 0 18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5C205.9 65.9 220.1 64 224 64zM106.5 147.5c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C59.4 177 64 163.3 66.3 159.1c1.6-2.9 8.4-13 40.2-11.7zM66.3 352.9c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM224 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
 Atom displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M258.9 412.3c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5zM252.8 312c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6s.4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4zm184.8 72c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C300.4 32.7 266.8 0 224 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C-10.3 165.1 1 210.8 34 256C1 301.2-10.3 346.9 10.4 384c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2c31.8-1.4 38.6 8.7 40.2 11.7zM224 64c3.9 0 18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5C205.9 65.9 220.1 64 224 64zM106.5 147.5c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C59.4 177 64 163.3 66.3 159.1c1.6-2.9 8.4-13 40.2-11.7zM66.3 352.9c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM224 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
 Atom displayed using SVG</p>
</div>

## Change `Atom` font awesome icon size
To increase `Atom` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f5d2.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-atom fa-lg'>fa-lg</i><br/>
<i class='fas fa-atom fa-2x'>fa-2x</i><br/>
<i class='fas fa-atom fa-3x'>fa-3x</i><br/>
<i class='fas fa-atom fa-4x'>fa-4x</i><br/>
<i class='fas fa-atom fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-atom fa-lg'>fa-lg</i><br/>
<i class='fas fa-atom fa-2x'>fa-2x</i><br/>
<i class='fas fa-atom fa-3x'>fa-3x</i><br/>
<i class='fas fa-atom fa-4x'>fa-4x</i><br/>
<i class='fas fa-atom fa-5x'>fa-5x</i><br/>

</div>

## `Atom` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Atom` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-atom fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-atom fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-atom fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-atom fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Atom` font awesome icon Border
To add border to `Atom` font awesome icon, use `fa-border` class.
```
<i class='fas fa-atom fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-atom fa-border fa-3x'></i>
</div>

## Pull `Atom` font awesome icon To the left
To pull `Atom` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-atom fa-pull-left fa-3x'></i>
  ... The text after Atom Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-atom fa-pull-left fa-3x'></i>
  ... The text after Atom Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Atom` font awesome icon To the left
To pull `Atom` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-atom fa-pull-right fa-3x'></i>
  ... The text after Atom Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-atom fa-pull-right fa-3x'></i>
  ... The text after Atom Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Atom` font awesome icon
To animate `Atom` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-atom fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-atom fa-spin fa-3x'></i>
</div>

## Animate `Atom` font awesome icon with steps
While animating the font awesome icon,We can rotate `Atom` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-atom fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-atom fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Atom` font awesome icon
 To rotate `Atom` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-atom fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-atom fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-atom fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-atom fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-atom fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-atom fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-atom fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-atom fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Atom` font awesome icon
 To flip `Atom` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-atom fa-3x'>F</i> Normal <br>
<i class='fas fa-atom fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-atom fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-atom fa-3x'>F</i> Normal <br>
<i class='fas fa-atom fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-atom fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Atom` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Atom` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-atom fa-stack-1x'></i>
    </span>
      Atom on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-atom fa-stack-1x fa-inverse'></i>
    </span>
      Atom on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-atom fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Atom on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-atom fa-stack-1x'></i>
    </span>
      Atom on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-atom fa-stack-1x fa-inverse'></i>
    </span>
      Atom on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-atom fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Atom on fa-ban
</div>
</div>

