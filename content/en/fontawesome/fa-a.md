
+++
title='A font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'A font awesome icon CSS class is fa-a & CSS Content Code is  \41'
keywords =['A, \41,fa-a']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-9'
next = 'fa-address-book'
linktitle = 'fa-a'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`A` font awesome icon css class name is `fa-a` and CSS Content Code is ` \41`**.
 

`A` font awesome icon is part of solid icons. 



{{%toc%}}
## `A` font awesome icon usage
We can display `A` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `A` font awesome icon CSS class name

To display `A` font awesome icon, add predefined class name i.e.,`fa-a` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `A` icon.


`A` icon has 1 icon style i.e.,solid. 
 We need to append icon style class `fas`.
```
<i class='fas fa-a'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-a'></i>

</div>


## `A` font awesome icon CSS Content Code 

We can display `A` font awesome icon using it's CSS Content Code ` \41` 

Use the following HTML code 

```
<li><span class='A fontawesomeicon'></span>A</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.A::before {
   font: var(--fa-font-solid);
    content: ' \41';
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

.A::before {
   font: var(--fa-font-solid);
    content: ' \41';
 }</style>

<li><span class='A fontawesomeicon'></span>A</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `A` font awesome icon SVG 

Use the following icon SVG to display `A` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z"/></svg>
 A displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z"/></svg>
 A displayed using SVG</p>
</div>

## Change `A` font awesome icon size
To increase `A` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \41.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-a fa-lg'>fa-lg</i><br/>
<i class='fas fa-a fa-2x'>fa-2x</i><br/>
<i class='fas fa-a fa-3x'>fa-3x</i><br/>
<i class='fas fa-a fa-4x'>fa-4x</i><br/>
<i class='fas fa-a fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-a fa-lg'>fa-lg</i><br/>
<i class='fas fa-a fa-2x'>fa-2x</i><br/>
<i class='fas fa-a fa-3x'>fa-3x</i><br/>
<i class='fas fa-a fa-4x'>fa-4x</i><br/>
<i class='fas fa-a fa-5x'>fa-5x</i><br/>

</div>

## `A` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `A` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-a fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-a fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-a fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-a fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `A` font awesome icon Border
To add border to `A` font awesome icon, use `fa-border` class.
```
<i class='fas fa-a fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-a fa-border fa-3x'></i>
</div>

## Pull `A` font awesome icon To the left
To pull `A` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-a fa-pull-left fa-3x'></i>
  ... The text after A Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-a fa-pull-left fa-3x'></i>
  ... The text after A Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `A` font awesome icon To the left
To pull `A` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-a fa-pull-right fa-3x'></i>
  ... The text after A Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-a fa-pull-right fa-3x'></i>
  ... The text after A Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `A` font awesome icon
To animate `A` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-a fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-a fa-spin fa-3x'></i>
</div>

## Animate `A` font awesome icon with steps
While animating the font awesome icon,We can rotate `A` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-a fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-a fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `A` font awesome icon
 To rotate `A` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-a fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-a fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-a fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-a fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-a fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-a fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-a fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-a fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `A` font awesome icon
 To flip `A` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-a fa-3x'>F</i> Normal <br>
<i class='fas fa-a fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-a fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-a fa-3x'>F</i> Normal <br>
<i class='fas fa-a fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-a fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `A` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `A` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-a fa-stack-1x'></i>
    </span>
      A on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-a fa-stack-1x fa-inverse'></i>
    </span>
      A on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-a fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      A on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-a fa-stack-1x'></i>
    </span>
      A on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-a fa-stack-1x fa-inverse'></i>
    </span>
      A on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-a fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      A on fa-ban
</div>
</div>

