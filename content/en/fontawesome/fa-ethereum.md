
+++
title='Ethereum font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Ethereum font awesome icon CSS class is fa-ethereum & CSS Content Code is f42e'
keywords =['Ethereum, \f42e,fa-ethereum']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-erlang'
next = 'fa-etsy'
linktitle = 'fa-ethereum'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Ethereum` font awesome icon css class name is `fa-ethereum` and CSS Content Code is ` \f42e`**.
 

`Ethereum` font awesome icon is part of brands icons. 



{{%toc%}}
## `Ethereum` font awesome icon usage
We can display `Ethereum` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Ethereum` font awesome icon CSS class name

To display `Ethereum` font awesome icon, add predefined class name i.e.,`fa-ethereum` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Ethereum` icon.


`Ethereum` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-ethereum'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-ethereum'></i>

</div>


## `Ethereum` font awesome icon CSS Content Code 

We can display `Ethereum` font awesome icon using it's CSS Content Code ` \f42e` 

Use the following HTML code 

```
<li><span class='Ethereum fontawesomeicon'></span>Ethereum</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Ethereum::before {
   font: var(--fa-font-brands);
    content: ' \f42e';
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

.Ethereum::before {
   font: var(--fa-font-brands);
    content: ' \f42e';
 }</style>

<li><span class='Ethereum fontawesomeicon'></span>Ethereum</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Ethereum` font awesome icon SVG 

Use the following icon SVG to display `Ethereum` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
 Ethereum displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
 Ethereum displayed using SVG</p>
</div>

## Change `Ethereum` font awesome icon size
To increase `Ethereum` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f42e.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-ethereum fa-lg'>fa-lg</i><br/>
<i class='fab fa-ethereum fa-2x'>fa-2x</i><br/>
<i class='fab fa-ethereum fa-3x'>fa-3x</i><br/>
<i class='fab fa-ethereum fa-4x'>fa-4x</i><br/>
<i class='fab fa-ethereum fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-ethereum fa-lg'>fa-lg</i><br/>
<i class='fab fa-ethereum fa-2x'>fa-2x</i><br/>
<i class='fab fa-ethereum fa-3x'>fa-3x</i><br/>
<i class='fab fa-ethereum fa-4x'>fa-4x</i><br/>
<i class='fab fa-ethereum fa-5x'>fa-5x</i><br/>

</div>

## `Ethereum` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Ethereum` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-ethereum fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-ethereum fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-ethereum fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-ethereum fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Ethereum` font awesome icon Border
To add border to `Ethereum` font awesome icon, use `fa-border` class.
```
<i class='fab fa-ethereum fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-ethereum fa-border fa-3x'></i>
</div>

## Pull `Ethereum` font awesome icon To the left
To pull `Ethereum` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-ethereum fa-pull-left fa-3x'></i>
  ... The text after Ethereum Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-ethereum fa-pull-left fa-3x'></i>
  ... The text after Ethereum Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Ethereum` font awesome icon To the left
To pull `Ethereum` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-ethereum fa-pull-right fa-3x'></i>
  ... The text after Ethereum Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-ethereum fa-pull-right fa-3x'></i>
  ... The text after Ethereum Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Ethereum` font awesome icon
To animate `Ethereum` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-ethereum fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-ethereum fa-spin fa-3x'></i>
</div>

## Animate `Ethereum` font awesome icon with steps
While animating the font awesome icon,We can rotate `Ethereum` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-ethereum fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-ethereum fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Ethereum` font awesome icon
 To rotate `Ethereum` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-ethereum fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-ethereum fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-ethereum fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-ethereum fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-ethereum fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-ethereum fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-ethereum fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-ethereum fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Ethereum` font awesome icon
 To flip `Ethereum` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-ethereum fa-3x'>F</i> Normal <br>
<i class='fab fa-ethereum fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-ethereum fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-ethereum fa-3x'>F</i> Normal <br>
<i class='fab fa-ethereum fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-ethereum fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Ethereum` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Ethereum` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-ethereum fa-stack-1x'></i>
    </span>
      Ethereum on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-ethereum fa-stack-1x fa-inverse'></i>
    </span>
      Ethereum on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-ethereum fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Ethereum on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-ethereum fa-stack-1x'></i>
    </span>
      Ethereum on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-ethereum fa-stack-1x fa-inverse'></i>
    </span>
      Ethereum on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-ethereum fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Ethereum on fa-ban
</div>
</div>

