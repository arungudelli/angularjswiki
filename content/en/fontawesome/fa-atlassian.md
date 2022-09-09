
+++
title='Atlassian font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Atlassian font awesome icon CSS class is fa-atlassian & CSS Content Code is  \f77b'
keywords =['Atlassian, \f77b,fa-atlassian']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-asymmetrik'
next = 'fa-audible'
linktitle = 'fa-atlassian_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Atlassian` font awesome icon css class name is `fa-atlassian` and CSS Content Code is ` \f77b`**.
 

`Atlassian` font awesome icon is part of brands icons. 



{{%toc%}}
## `Atlassian` font awesome icon usage
We can display `Atlassian` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Atlassian` font awesome icon CSS class name

To display `Atlassian` font awesome icon, add predefined class name i.e.,`fa-atlassian` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Atlassian` icon.


`Atlassian` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-atlassian'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-atlassian'></i>

</div>


## `Atlassian` font awesome icon CSS Content Code 

We can display `Atlassian` font awesome icon using it's CSS Content Code ` \f77b` 

Use the following HTML code 

```
<li><span class='Atlassian fontawesomeicon'></span>Atlassian</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Atlassian::before {
   font: var(--fa-font-brands);
    content: ' \f77b';
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

.Atlassian::before {
   font: var(--fa-font-brands);
    content: ' \f77b';
 }</style>

<li><span class='Atlassian fontawesomeicon'></span>Atlassian</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Atlassian` font awesome icon SVG 

Use the following icon SVG to display `Atlassian` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z"/></svg>
 Atlassian displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z"/></svg>
 Atlassian displayed using SVG</p>
</div>

## Change `Atlassian` font awesome icon size
To increase `Atlassian` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \f77b.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-atlassian fa-lg'>fa-lg</i><br/>
<i class='fab fa-atlassian fa-2x'>fa-2x</i><br/>
<i class='fab fa-atlassian fa-3x'>fa-3x</i><br/>
<i class='fab fa-atlassian fa-4x'>fa-4x</i><br/>
<i class='fab fa-atlassian fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-atlassian fa-lg'>fa-lg</i><br/>
<i class='fab fa-atlassian fa-2x'>fa-2x</i><br/>
<i class='fab fa-atlassian fa-3x'>fa-3x</i><br/>
<i class='fab fa-atlassian fa-4x'>fa-4x</i><br/>
<i class='fab fa-atlassian fa-5x'>fa-5x</i><br/>

</div>

## `Atlassian` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Atlassian` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-atlassian fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-atlassian fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-atlassian fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-atlassian fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Atlassian` font awesome icon Border
To add border to `Atlassian` font awesome icon, use `fa-border` class.
```
<i class='fab fa-atlassian fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-atlassian fa-border fa-3x'></i>
</div>

## Pull `Atlassian` font awesome icon To the left
To pull `Atlassian` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-atlassian fa-pull-left fa-3x'></i>
  ... The text after Atlassian Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-atlassian fa-pull-left fa-3x'></i>
  ... The text after Atlassian Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Atlassian` font awesome icon To the left
To pull `Atlassian` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-atlassian fa-pull-right fa-3x'></i>
  ... The text after Atlassian Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-atlassian fa-pull-right fa-3x'></i>
  ... The text after Atlassian Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Atlassian` font awesome icon
To animate `Atlassian` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-atlassian fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-atlassian fa-spin fa-3x'></i>
</div>

## Animate `Atlassian` font awesome icon with steps
While animating the font awesome icon,We can rotate `Atlassian` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-atlassian fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-atlassian fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Atlassian` font awesome icon
 To rotate `Atlassian` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-atlassian fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-atlassian fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-atlassian fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-atlassian fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-atlassian fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-atlassian fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-atlassian fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-atlassian fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Atlassian` font awesome icon
 To flip `Atlassian` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-atlassian fa-3x'>F</i> Normal <br>
<i class='fab fa-atlassian fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-atlassian fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-atlassian fa-3x'>F</i> Normal <br>
<i class='fab fa-atlassian fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-atlassian fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Atlassian` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Atlassian` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-atlassian fa-stack-1x'></i>
    </span>
      Atlassian on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-atlassian fa-stack-1x fa-inverse'></i>
    </span>
      Atlassian on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-atlassian fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Atlassian on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-atlassian fa-stack-1x'></i>
    </span>
      Atlassian on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-atlassian fa-stack-1x fa-inverse'></i>
    </span>
      Atlassian on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-atlassian fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Atlassian on fa-ban
</div>
</div>

