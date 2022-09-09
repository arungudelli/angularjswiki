
+++
title='Google font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Google font awesome icon CSS class is fa-google & CSS Content Code is  \f1a0'
keywords =['Google, \f1a0,fa-google']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-google-wallet'
next = 'fa-gratipay'
linktitle = 'fa-google_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Google` font awesome icon css class name is `fa-google` and CSS Content Code is ` \f1a0`**.
 

`Google` font awesome icon is part of brands icons. 



{{%toc%}}
## `Google` font awesome icon usage
We can display `Google` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Google` font awesome icon CSS class name

To display `Google` font awesome icon, add predefined class name i.e.,`fa-google` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Google` icon.


`Google` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-google'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-google'></i>

</div>


## `Google` font awesome icon CSS Content Code 

We can display `Google` font awesome icon using it's CSS Content Code ` \f1a0` 

Use the following HTML code 

```
<li><span class='Google fontawesomeicon'></span>Google</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Google::before {
   font: var(--fa-font-brands);
    content: ' \f1a0';
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

.Google::before {
   font: var(--fa-font-brands);
    content: ' \f1a0';
 }</style>

<li><span class='Google fontawesomeicon'></span>Google</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Google` font awesome icon SVG 

Use the following icon SVG to display `Google` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
 Google displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
 Google displayed using SVG</p>
</div>

## Change `Google` font awesome icon size
To increase `Google` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f1a0.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-google fa-lg'>fa-lg</i><br/>
<i class='fab fa-google fa-2x'>fa-2x</i><br/>
<i class='fab fa-google fa-3x'>fa-3x</i><br/>
<i class='fab fa-google fa-4x'>fa-4x</i><br/>
<i class='fab fa-google fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-google fa-lg'>fa-lg</i><br/>
<i class='fab fa-google fa-2x'>fa-2x</i><br/>
<i class='fab fa-google fa-3x'>fa-3x</i><br/>
<i class='fab fa-google fa-4x'>fa-4x</i><br/>
<i class='fab fa-google fa-5x'>fa-5x</i><br/>

</div>

## `Google` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Google` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-google fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-google fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-google fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-google fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Google` font awesome icon Border
To add border to `Google` font awesome icon, use `fa-border` class.
```
<i class='fab fa-google fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-google fa-border fa-3x'></i>
</div>

## Pull `Google` font awesome icon To the left
To pull `Google` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-google fa-pull-left fa-3x'></i>
  ... The text after Google Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-google fa-pull-left fa-3x'></i>
  ... The text after Google Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Google` font awesome icon To the left
To pull `Google` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-google fa-pull-right fa-3x'></i>
  ... The text after Google Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-google fa-pull-right fa-3x'></i>
  ... The text after Google Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Google` font awesome icon
To animate `Google` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-google fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-google fa-spin fa-3x'></i>
</div>

## Animate `Google` font awesome icon with steps
While animating the font awesome icon,We can rotate `Google` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-google fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-google fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Google` font awesome icon
 To rotate `Google` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-google fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-google fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-google fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-google fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-google fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-google fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-google fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-google fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Google` font awesome icon
 To flip `Google` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-google fa-3x'>F</i> Normal <br>
<i class='fab fa-google fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-google fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-google fa-3x'>F</i> Normal <br>
<i class='fab fa-google fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-google fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Google` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Google` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-google fa-stack-1x'></i>
    </span>
      Google on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-google fa-stack-1x fa-inverse'></i>
    </span>
      Google on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-google fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Google on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-google fa-stack-1x'></i>
    </span>
      Google on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-google fa-stack-1x fa-inverse'></i>
    </span>
      Google on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-google fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Google on fa-ban
</div>
</div>

