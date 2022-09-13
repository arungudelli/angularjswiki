
+++
title='Markdown font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Markdown font awesome icon CSS class is fa-markdown & CSS Content Code is  \f60f'
keywords =['Markdown, \f60f,fa-markdown']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-mandalorian'
next = 'fa-mastodon'
linktitle = 'fa-markdown'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'false'
+++ 

**`Markdown` font awesome icon css class name is `fa-markdown` and CSS Content Code is ` \f60f`**.
 

`Markdown` font awesome icon is part of brands icons. 



{{%toc%}}
## `Markdown` font awesome icon usage
We can display `Markdown` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Markdown` font awesome icon CSS class name

To display `Markdown` font awesome icon, add predefined class name i.e.,`fa-markdown` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Markdown` icon.


`Markdown` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-markdown'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-markdown'></i>

</div>


## `Markdown` font awesome icon CSS Content Code 

We can display `Markdown` font awesome icon using it's CSS Content Code ` \f60f` 

Use the following HTML code 

```
<li><span class='Markdown fontawesomeicon'></span>Markdown</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Markdown::before {
   font: var(--fa-font-brands);
    content: ' \f60f';
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

.Markdown::before {
   font: var(--fa-font-brands);
    content: ' \f60f';
 }</style>

<li><span class='Markdown fontawesomeicon'></span>Markdown</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Markdown` font awesome icon SVG 

Use the following icon SVG to display `Markdown` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/></svg>
 Markdown displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/></svg>
 Markdown displayed using SVG</p>
</div>

## Change `Markdown` font awesome icon size
To increase `Markdown` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f60f.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-markdown fa-lg'>fa-lg</i><br/>
<i class='fab fa-markdown fa-2x'>fa-2x</i><br/>
<i class='fab fa-markdown fa-3x'>fa-3x</i><br/>
<i class='fab fa-markdown fa-4x'>fa-4x</i><br/>
<i class='fab fa-markdown fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-markdown fa-lg'>fa-lg</i><br/>
<i class='fab fa-markdown fa-2x'>fa-2x</i><br/>
<i class='fab fa-markdown fa-3x'>fa-3x</i><br/>
<i class='fab fa-markdown fa-4x'>fa-4x</i><br/>
<i class='fab fa-markdown fa-5x'>fa-5x</i><br/>

</div>

## `Markdown` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Markdown` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-markdown fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-markdown fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-markdown fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-markdown fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Markdown` font awesome icon Border
To add border to `Markdown` font awesome icon, use `fa-border` class.
```
<i class='fab fa-markdown fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-markdown fa-border fa-3x'></i>
</div>

## Pull `Markdown` font awesome icon To the left
To pull `Markdown` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-markdown fa-pull-left fa-3x'></i>
  ... The text after Markdown Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-markdown fa-pull-left fa-3x'></i>
  ... The text after Markdown Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Markdown` font awesome icon To the left
To pull `Markdown` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-markdown fa-pull-right fa-3x'></i>
  ... The text after Markdown Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-markdown fa-pull-right fa-3x'></i>
  ... The text after Markdown Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Markdown` font awesome icon
To animate `Markdown` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-markdown fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-markdown fa-spin fa-3x'></i>
</div>

## Animate `Markdown` font awesome icon with steps
While animating the font awesome icon,We can rotate `Markdown` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-markdown fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-markdown fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Markdown` font awesome icon
 To rotate `Markdown` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-markdown fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-markdown fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-markdown fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-markdown fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-markdown fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-markdown fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-markdown fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-markdown fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Markdown` font awesome icon
 To flip `Markdown` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-markdown fa-3x'>F</i> Normal <br>
<i class='fab fa-markdown fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-markdown fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-markdown fa-3x'>F</i> Normal <br>
<i class='fab fa-markdown fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-markdown fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Markdown` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Markdown` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-markdown fa-stack-1x'></i>
    </span>
      Markdown on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-markdown fa-stack-1x fa-inverse'></i>
    </span>
      Markdown on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-markdown fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Markdown on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-markdown fa-stack-1x'></i>
    </span>
      Markdown on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-markdown fa-stack-1x fa-inverse'></i>
    </span>
      Markdown on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-markdown fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Markdown on fa-ban
</div>
</div>

