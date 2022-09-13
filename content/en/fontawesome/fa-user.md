
+++
title='User font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'User font awesome icon CSS class is fa-user & CSS Content Code is  \f007'
keywords =['User, \f007,fa-user']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-user-xmark'
next = 'fa-users-between-lines'
linktitle = 'fa-user'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`User` font awesome icon css class name is `fa-user` and CSS Content Code is ` \f007`**.

`User` font awesome icon has 2 style types i.e.,  regular(far), solid(fas) 


{{%toc%}}
## `User` font awesome icon usage
We can display `User` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `User` font awesome icon CSS class name

To display `User` font awesome icon, add predefined class name i.e.,`fa-user` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `User` icon.


 `User` font awesome icon has 2 icon styles.
 To Display regular icon use `far` class. 
 To Display solid icon use `fas` class. 

```
<i class='far fa-user'></i>
<i class='fas fa-user'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='far fa-user'></i>
<i class='fas fa-user'></i>

</div>


## `User` font awesome icon CSS Content Code 

We can display `User` font awesome icon using it's CSS Content Code ` \f007` 

Use the following HTML code 

```
<li><span class='User fontawesomeicon'></span>User</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.User::before {
   font: var(--fa-font-solid);
    content: ' \f007';
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

.User::before {
   font: var(--fa-font-solid);
    content: ' \f007';
 }</style>

<li><span class='User fontawesomeicon'></span>User</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `User` font awesome icon SVG 

Use the following icon SVG to display `User` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
 User displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
 User displayed using SVG</p>
</div>

## Change `User` font awesome icon size
To increase `User` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f007.
Increase in icon size will be relative to their parent container.
```
<i class='fas fa-user fa-lg'>fa-lg</i><br/>
<i class='fas fa-user fa-2x'>fa-2x</i><br/>
<i class='fas fa-user fa-3x'>fa-3x</i><br/>
<i class='fas fa-user fa-4x'>fa-4x</i><br/>
<i class='fas fa-user fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-user fa-lg'>fa-lg</i><br/>
<i class='fas fa-user fa-2x'>fa-2x</i><br/>
<i class='fas fa-user fa-3x'>fa-3x</i><br/>
<i class='fas fa-user fa-4x'>fa-4x</i><br/>
<i class='fas fa-user fa-5x'>fa-5x</i><br/>

</div>

## `User` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `User` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fas fa-user fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-user fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fas fa-user fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-user fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `User` font awesome icon Border
To add border to `User` font awesome icon, use `fa-border` class.
```
<i class='fas fa-user fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-user fa-border fa-3x'></i>
</div>

## Pull `User` font awesome icon To the left
To pull `User` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fas fa-user fa-pull-left fa-3x'></i>
  ... The text after User Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-user fa-pull-left fa-3x'></i>
  ... The text after User Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `User` font awesome icon To the left
To pull `User` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fas fa-user fa-pull-right fa-3x'></i>
  ... The text after User Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fas fa-user fa-pull-right fa-3x'></i>
  ... The text after User Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `User` font awesome icon
To animate `User` font awesome icon, use `fa-spin` class.
```
<i class='fas fa-user fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-user fa-spin fa-3x'></i>
</div>

## Animate `User` font awesome icon with steps
While animating the font awesome icon,We can rotate `User` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fas fa-user fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fas fa-user fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `User` font awesome icon
 To rotate `User` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fas fa-user fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-user fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-user fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-user fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-user fa-3x'>R</i>normal<br/><br/>
<i class='fas fa-user fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fas fa-user fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fas fa-user fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `User` font awesome icon
 To flip `User` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fas fa-user fa-3x'>F</i> Normal <br>
<i class='fas fa-user fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-user fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fas fa-user fa-3x'>F</i> Normal <br>
<i class='fas fa-user fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fas fa-user fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `User` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `User` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-user fa-stack-1x'></i>
    </span>
      User on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-user fa-stack-1x fa-inverse'></i>
    </span>
      User on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-user fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      User on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fas fa-user fa-stack-1x'></i>
    </span>
      User on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fas fa-user fa-stack-1x fa-inverse'></i>
    </span>
      User on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fas fa-user fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      User on fa-ban
</div>
</div>

