
+++
title='Font-Awesome font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Font-Awesome font awesome icon CSS class is fa-font-awesome & CSS Content Code is  \f2b4'
keywords =['Font-Awesome, \f2b4,fa-font-awesome']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-folder'
next = 'fa-font'
linktitle = 'fa-font-awesome_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Font-Awesome` font awesome icon css class name is `fa-font-awesome` and CSS Content Code is ` \f2b4`**.

`Font-Awesome` font awesome icon has 3 style types i.e.,  brands(fab), regular(far), solid(fas) 


{{%toc%}}
## `Font-Awesome` font awesome icon usage
We can display `Font-Awesome` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Font-Awesome` font awesome icon CSS class name

To display `Font-Awesome` font awesome icon, add predefined class name i.e.,`fa-font-awesome` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Font-Awesome` icon.


 `Font-Awesome` font awesome icon has 3 icon styles.
 To Display brands icon use `fab` class. 
 To Display regular icon use `far` class. 
 To Display solid icon use `fas` class. 

```
<i class='fab fa-font-awesome'></i>
<i class='far fa-font-awesome'></i>
<i class='fas fa-font-awesome'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-font-awesome'></i>
<i class='far fa-font-awesome'></i>
<i class='fas fa-font-awesome'></i>

</div>


## `Font-Awesome` font awesome icon CSS Content Code 

We can display `Font-Awesome` font awesome icon using it's CSS Content Code ` \f2b4` 

Use the following HTML code 

```
<li><span class='Font-Awesome fontawesomeicon'></span>Font-Awesome</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Font-Awesome::before {
   font: var(--fa-font-solid);
    content: ' \f2b4';
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

.Font-Awesome::before {
   font: var(--fa-font-solid);
    content: ' \f2b4';
 }</style>

<li><span class='Font-Awesome fontawesomeicon'></span>Font-Awesome</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Font-Awesome` font awesome icon SVG 

Use the following icon SVG to display `Font-Awesome` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"/></svg>
 Font-Awesome displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"/></svg>
 Font-Awesome displayed using SVG</p>
</div>

## Change `Font-Awesome` font awesome icon size
To increase `Font-Awesome` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f2b4.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-font-awesome fa-lg'>fa-lg</i><br/>
<i class='fas fa-font-awesome fa-2x'>fa-2x</i><br/>
<i class='fas fa-font-awesome fa-3x'>fa-3x</i><br/>
<i class='fas fa-font-awesome fa-4x'>fa-4x</i><br/>
<i class='fas fa-font-awesome fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-font-awesome fa-lg'>fa-lg</i><br/>
<i class='fas fa-font-awesome fa-2x'>fa-2x</i><br/>
<i class='fas fa-font-awesome fa-3x'>fa-3x</i><br/>
<i class='fas fa-font-awesome fa-4x'>fa-4x</i><br/>
<i class='fas fa-font-awesome fa-5x'>fa-5x</i><br/>

</div>

## `Font-Awesome` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Font-Awesome` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-font-awesome fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-font-awesome fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-font-awesome fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-font-awesome fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Font-Awesome` font awesome icon Border
To add border to `Font-Awesome` font awesome icon, use `fa-border` class.
```
<i class='fas fa-font-awesome fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-font-awesome fa-border fa-3x'></i>
</div>

## Pull `Font-Awesome` font awesome icon To the left
To pull `Font-Awesome` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-font-awesome fa-pull-left fa-3x'></i>
  ... The text after Font-Awesome Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-font-awesome fa-pull-left fa-3x'></i>
  ... The text after Font-Awesome Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Font-Awesome` font awesome icon To the left
To pull `Font-Awesome` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-font-awesome fa-pull-right fa-3x'></i>
  ... The text after Font-Awesome Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-font-awesome fa-pull-right fa-3x'></i>
  ... The text after Font-Awesome Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Font-Awesome` font awesome icon
To animate `Font-Awesome` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-font-awesome fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-font-awesome fa-spin fa-3x'></i>
</div>

## Animate `Font-Awesome` font awesome icon with steps
While animating the font awesome icon,We can rotate `Font-Awesome` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-font-awesome fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-font-awesome fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Font-Awesome` font awesome icon
 To rotate `Font-Awesome` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-font-awesome fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-font-awesome fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-font-awesome fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-font-awesome fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-font-awesome fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-font-awesome fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-font-awesome fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-font-awesome fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Font-Awesome` font awesome icon
 To flip `Font-Awesome` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-font-awesome fa-3x'>F</i> Normal <br>
<i class='fas fa-font-awesome fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-font-awesome fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-font-awesome fa-3x'>F</i> Normal <br>
<i class='fas fa-font-awesome fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-font-awesome fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Font-Awesome` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Font-Awesome` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-font-awesome fa-stack-1x'></i>
    </span>
      Font-Awesome on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-font-awesome fa-stack-1x fa-inverse'></i>
    </span>
      Font-Awesome on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-font-awesome fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Font-Awesome on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-font-awesome fa-stack-1x'></i>
    </span>
      Font-Awesome on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-font-awesome fa-stack-1x fa-inverse'></i>
    </span>
      Font-Awesome on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-font-awesome fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Font-Awesome on fa-ban
</div>
</div>

