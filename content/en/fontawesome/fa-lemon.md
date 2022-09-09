
+++
title='Lemon font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Lemon font awesome icon CSS class is fa-lemon & CSS Content Code is  \f094'
keywords =['Lemon, \f094,fa-lemon']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-left-right'
next = 'fa-less-than-equal'
linktitle = 'fa-lemon_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Lemon` font awesome icon css class name is `fa-lemon` and CSS Content Code is ` \f094`**.

`Lemon` font awesome icon has 2 style types i.e.,  regular(far), solid(fas) 


{{%toc%}}
## `Lemon` font awesome icon usage
We can display `Lemon` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Lemon` font awesome icon CSS class name

To display `Lemon` font awesome icon, add predefined class name i.e.,`fa-lemon` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Lemon` icon.


 `Lemon` font awesome icon has 2 icon styles.
 To Display regular icon use `far` class. 
 To Display solid icon use `fas` class. 

```
<i class='far fa-lemon'></i>
<i class='fas fa-lemon'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='far fa-lemon'></i>
<i class='fas fa-lemon'></i>

</div>


## `Lemon` font awesome icon CSS Content Code 

We can display `Lemon` font awesome icon using it's CSS Content Code ` \f094` 

Use the following HTML code 

```
<li><span class='Lemon fontawesomeicon'></span>Lemon</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Lemon::before {
   font: var(--fa-font-solid);
    content: ' \f094';
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

.Lemon::before {
   font: var(--fa-font-solid);
    content: ' \f094';
 }</style>

<li><span class='Lemon fontawesomeicon'></span>Lemon</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Lemon` font awesome icon SVG 

Use the following icon SVG to display `Lemon` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 96c0-35.3-28.7-64-64-64c-6.6 0-13 1-19 2.9c-22.5 7-48.1 14.9-71 9c-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71C1 403 0 409.4 0 416c0 35.3 28.7 64 64 64c6.6 0 13-1 19.1-2.9c22.5-7 48.1-14.9 71-9c75.2 19.1 156.4-11 213.7-68.3s87.5-138.5 68.3-213.7c-5.8-22.9 2-48.4 9-71c1.9-6 2.9-12.4 2.9-19.1zM212.5 127.4c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4S62.2 244 64.6 235.5c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9s-2.4 17.4-10.9 19.9z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 96c0-35.3-28.7-64-64-64c-6.6 0-13 1-19 2.9c-22.5 7-48.1 14.9-71 9c-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71C1 403 0 409.4 0 416c0 35.3 28.7 64 64 64c6.6 0 13-1 19.1-2.9c22.5-7 48.1-14.9 71-9c75.2 19.1 156.4-11 213.7-68.3s87.5-138.5 68.3-213.7c-5.8-22.9 2-48.4 9-71c1.9-6 2.9-12.4 2.9-19.1zM212.5 127.4c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4S62.2 244 64.6 235.5c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9s-2.4 17.4-10.9 19.9z"/></svg>
 Lemon displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M448 96c0-35.3-28.7-64-64-64c-6.6 0-13 1-19 2.9c-22.5 7-48.1 14.9-71 9c-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71C1 403 0 409.4 0 416c0 35.3 28.7 64 64 64c6.6 0 13-1 19.1-2.9c22.5-7 48.1-14.9 71-9c75.2 19.1 156.4-11 213.7-68.3s87.5-138.5 68.3-213.7c-5.8-22.9 2-48.4 9-71c1.9-6 2.9-12.4 2.9-19.1zM212.5 127.4c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4S62.2 244 64.6 235.5c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9s-2.4 17.4-10.9 19.9z"/></svg>
 Lemon displayed using SVG</p>
</div>

## Change `Lemon` font awesome icon size
To increase `Lemon` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f094.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-lemon fa-lg'>fa-lg</i><br/>
<i class='fas fa-lemon fa-2x'>fa-2x</i><br/>
<i class='fas fa-lemon fa-3x'>fa-3x</i><br/>
<i class='fas fa-lemon fa-4x'>fa-4x</i><br/>
<i class='fas fa-lemon fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-lemon fa-lg'>fa-lg</i><br/>
<i class='fas fa-lemon fa-2x'>fa-2x</i><br/>
<i class='fas fa-lemon fa-3x'>fa-3x</i><br/>
<i class='fas fa-lemon fa-4x'>fa-4x</i><br/>
<i class='fas fa-lemon fa-5x'>fa-5x</i><br/>

</div>

## `Lemon` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Lemon` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-lemon fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-lemon fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-lemon fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-lemon fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Lemon` font awesome icon Border
To add border to `Lemon` font awesome icon, use `fa-border` class.
```
<i class='fas fa-lemon fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-lemon fa-border fa-3x'></i>
</div>

## Pull `Lemon` font awesome icon To the left
To pull `Lemon` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-lemon fa-pull-left fa-3x'></i>
  ... The text after Lemon Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-lemon fa-pull-left fa-3x'></i>
  ... The text after Lemon Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Lemon` font awesome icon To the left
To pull `Lemon` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-lemon fa-pull-right fa-3x'></i>
  ... The text after Lemon Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-lemon fa-pull-right fa-3x'></i>
  ... The text after Lemon Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Lemon` font awesome icon
To animate `Lemon` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-lemon fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-lemon fa-spin fa-3x'></i>
</div>

## Animate `Lemon` font awesome icon with steps
While animating the font awesome icon,We can rotate `Lemon` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-lemon fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-lemon fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Lemon` font awesome icon
 To rotate `Lemon` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-lemon fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-lemon fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-lemon fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-lemon fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-lemon fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-lemon fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-lemon fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-lemon fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Lemon` font awesome icon
 To flip `Lemon` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-lemon fa-3x'>F</i> Normal <br>
<i class='fas fa-lemon fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-lemon fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-lemon fa-3x'>F</i> Normal <br>
<i class='fas fa-lemon fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-lemon fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Lemon` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Lemon` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-lemon fa-stack-1x'></i>
    </span>
      Lemon on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-lemon fa-stack-1x fa-inverse'></i>
    </span>
      Lemon on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-lemon fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Lemon on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-lemon fa-stack-1x'></i>
    </span>
      Lemon on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-lemon fa-stack-1x fa-inverse'></i>
    </span>
      Lemon on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-lemon fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Lemon on fa-ban
</div>
</div>

