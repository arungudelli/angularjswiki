
+++
title='Elementor font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Elementor font awesome icon CSS class is fa-elementor & CSS Content Code is  \f430'
keywords =['Elementor, \f430,fa-elementor']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-edge'
next = 'fa-ello'
linktitle = 'fa-elementor_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Elementor` font awesome icon css class name is `fa-elementor` and CSS Content Code is ` \f430`**.
 

`Elementor` font awesome icon is part of brands icons. 



{{%toc%}}
## `Elementor` font awesome icon usage
We can display `Elementor` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Elementor` font awesome icon CSS class name

To display `Elementor` font awesome icon, add predefined class name i.e.,`fa-elementor` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Elementor` icon.


`Elementor` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-elementor'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-elementor'></i>

</div>


## `Elementor` font awesome icon CSS Content Code 

We can display `Elementor` font awesome icon using it's CSS Content Code ` \f430` 

Use the following HTML code 

```
<li><span class='Elementor fontawesomeicon'></span>Elementor</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Elementor::before {
   font: var(--fa-font-brands);
    content: ' \f430';
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

.Elementor::before {
   font: var(--fa-font-brands);
    content: ' \f430';
 }</style>

<li><span class='Elementor fontawesomeicon'></span>Elementor</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Elementor` font awesome icon SVG 

Use the following icon SVG to display `Elementor` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"/></svg>
 Elementor displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"/></svg>
 Elementor displayed using SVG</p>
</div>

## Change `Elementor` font awesome icon size
To increase `Elementor` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f430.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-elementor fa-lg'>fa-lg</i><br/>
<i class='fab fa-elementor fa-2x'>fa-2x</i><br/>
<i class='fab fa-elementor fa-3x'>fa-3x</i><br/>
<i class='fab fa-elementor fa-4x'>fa-4x</i><br/>
<i class='fab fa-elementor fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-elementor fa-lg'>fa-lg</i><br/>
<i class='fab fa-elementor fa-2x'>fa-2x</i><br/>
<i class='fab fa-elementor fa-3x'>fa-3x</i><br/>
<i class='fab fa-elementor fa-4x'>fa-4x</i><br/>
<i class='fab fa-elementor fa-5x'>fa-5x</i><br/>

</div>

## `Elementor` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Elementor` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-elementor fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-elementor fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-elementor fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-elementor fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Elementor` font awesome icon Border
To add border to `Elementor` font awesome icon, use `fa-border` class.
```
<i class='fab fa-elementor fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-elementor fa-border fa-3x'></i>
</div>

## Pull `Elementor` font awesome icon To the left
To pull `Elementor` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-elementor fa-pull-left fa-3x'></i>
  ... The text after Elementor Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-elementor fa-pull-left fa-3x'></i>
  ... The text after Elementor Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Elementor` font awesome icon To the left
To pull `Elementor` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-elementor fa-pull-right fa-3x'></i>
  ... The text after Elementor Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-elementor fa-pull-right fa-3x'></i>
  ... The text after Elementor Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Elementor` font awesome icon
To animate `Elementor` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-elementor fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-elementor fa-spin fa-3x'></i>
</div>

## Animate `Elementor` font awesome icon with steps
While animating the font awesome icon,We can rotate `Elementor` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-elementor fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-elementor fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Elementor` font awesome icon
 To rotate `Elementor` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-elementor fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-elementor fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-elementor fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-elementor fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-elementor fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-elementor fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-elementor fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-elementor fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Elementor` font awesome icon
 To flip `Elementor` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-elementor fa-3x'>F</i> Normal <br>
<i class='fab fa-elementor fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-elementor fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-elementor fa-3x'>F</i> Normal <br>
<i class='fab fa-elementor fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-elementor fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Elementor` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Elementor` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-elementor fa-stack-1x'></i>
    </span>
      Elementor on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-elementor fa-stack-1x fa-inverse'></i>
    </span>
      Elementor on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-elementor fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Elementor on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-elementor fa-stack-1x'></i>
    </span>
      Elementor on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-elementor fa-stack-1x fa-inverse'></i>
    </span>
      Elementor on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-elementor fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Elementor on fa-ban
</div>
</div>

