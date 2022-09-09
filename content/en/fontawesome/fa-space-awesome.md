
+++
title='Space-Awesome font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Space-Awesome font awesome icon CSS class is fa-space-awesome & CSS Content Code is  \e5ac'
keywords =['Space-Awesome, \e5ac,fa-space-awesome']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-sourcetree'
next = 'fa-speakap'
linktitle = 'fa-space-awesome'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Space-Awesome` font awesome icon css class name is `fa-space-awesome` and CSS Content Code is ` \e5ac`**.
 

`Space-Awesome` font awesome icon is part of brands icons. 



{{%toc%}}
## `Space-Awesome` font awesome icon usage
We can display `Space-Awesome` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Space-Awesome` font awesome icon CSS class name

To display `Space-Awesome` font awesome icon, add predefined class name i.e.,`fa-space-awesome` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Space-Awesome` icon.


`Space-Awesome` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-space-awesome'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-space-awesome'></i>

</div>


## `Space-Awesome` font awesome icon CSS Content Code 

We can display `Space-Awesome` font awesome icon using it's CSS Content Code ` \e5ac` 

Use the following HTML code 

```
<li><span class='Space-Awesome fontawesomeicon'></span>Space-Awesome</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Space-Awesome::before {
   font: var(--fa-font-brands);
    content: ' \e5ac';
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

.Space-Awesome::before {
   font: var(--fa-font-brands);
    content: ' \e5ac';
 }</style>

<li><span class='Space-Awesome fontawesomeicon'></span>Space-Awesome</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Space-Awesome` font awesome icon SVG 

Use the following icon SVG to display `Space-Awesome` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"/></svg>
 Space-Awesome displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"/></svg>
 Space-Awesome displayed using SVG</p>
</div>

## Change `Space-Awesome` font awesome icon size
To increase `Space-Awesome` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \e5ac.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-space-awesome fa-lg'>fa-lg</i><br/>
<i class='fab fa-space-awesome fa-2x'>fa-2x</i><br/>
<i class='fab fa-space-awesome fa-3x'>fa-3x</i><br/>
<i class='fab fa-space-awesome fa-4x'>fa-4x</i><br/>
<i class='fab fa-space-awesome fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-space-awesome fa-lg'>fa-lg</i><br/>
<i class='fab fa-space-awesome fa-2x'>fa-2x</i><br/>
<i class='fab fa-space-awesome fa-3x'>fa-3x</i><br/>
<i class='fab fa-space-awesome fa-4x'>fa-4x</i><br/>
<i class='fab fa-space-awesome fa-5x'>fa-5x</i><br/>

</div>

## `Space-Awesome` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Space-Awesome` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-space-awesome fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-space-awesome fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-space-awesome fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-space-awesome fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Space-Awesome` font awesome icon Border
To add border to `Space-Awesome` font awesome icon, use `fa-border` class.
```
<i class='fab fa-space-awesome fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-space-awesome fa-border fa-3x'></i>
</div>

## Pull `Space-Awesome` font awesome icon To the left
To pull `Space-Awesome` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-space-awesome fa-pull-left fa-3x'></i>
  ... The text after Space-Awesome Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-space-awesome fa-pull-left fa-3x'></i>
  ... The text after Space-Awesome Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Space-Awesome` font awesome icon To the left
To pull `Space-Awesome` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-space-awesome fa-pull-right fa-3x'></i>
  ... The text after Space-Awesome Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-space-awesome fa-pull-right fa-3x'></i>
  ... The text after Space-Awesome Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Space-Awesome` font awesome icon
To animate `Space-Awesome` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-space-awesome fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-space-awesome fa-spin fa-3x'></i>
</div>

## Animate `Space-Awesome` font awesome icon with steps
While animating the font awesome icon,We can rotate `Space-Awesome` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-space-awesome fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-space-awesome fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Space-Awesome` font awesome icon
 To rotate `Space-Awesome` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-space-awesome fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-space-awesome fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-space-awesome fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-space-awesome fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-space-awesome fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-space-awesome fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-space-awesome fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-space-awesome fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Space-Awesome` font awesome icon
 To flip `Space-Awesome` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-space-awesome fa-3x'>F</i> Normal <br>
<i class='fab fa-space-awesome fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-space-awesome fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-space-awesome fa-3x'>F</i> Normal <br>
<i class='fab fa-space-awesome fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-space-awesome fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Space-Awesome` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Space-Awesome` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-space-awesome fa-stack-1x'></i>
    </span>
      Space-Awesome on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-space-awesome fa-stack-1x fa-inverse'></i>
    </span>
      Space-Awesome on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-space-awesome fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Space-Awesome on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-space-awesome fa-stack-1x'></i>
    </span>
      Space-Awesome on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-space-awesome fa-stack-1x fa-inverse'></i>
    </span>
      Space-Awesome on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-space-awesome fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Space-Awesome on fa-ban
</div>
</div>

