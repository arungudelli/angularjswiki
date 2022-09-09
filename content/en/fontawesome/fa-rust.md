
+++
title='Rust font awesome icon Usage,CSS Class Name,SVG & CSS Content Code'
summary = 'Rust font awesome icon CSS class is fa-rust & CSS Content Code is  \e07a'
keywords =['Rust, \e07a,fa-rust']
date = '08-09-2022T00:00:00'
lastmod = '08-09-2022T00:00:01'
type = 'docs'
parentdoc = 'fontawesome'
featured = 'font-awesome-icons.png'
categories =['faicons']
prev = 'fa-rockrms'
next = 'fa-safari'
linktitle = 'fa-rust_1'
[menu.fontawesome]
parent = 'fontawesome'
weight = 20
draft = 'true'
+++ 

**`Rust` font awesome icon css class name is `fa-rust` and CSS Content Code is ` \e07a`**.
 

`Rust` font awesome icon is part of brands icons. 



{{%toc%}}
## `Rust` font awesome icon usage
We can display `Rust` font awesome icon using 3 different ways depending upon our requirement.

1. Using CSS Class Name 

2. Using CSS Content Code 

3. Using SVG 



## `Rust` font awesome icon CSS class name

To display `Rust` font awesome icon, add predefined class name i.e.,`fa-rust` (with prefix `fa-`) to the `i` tag. 

And we need to add corresponding font awesome icon style for the `Rust` icon.


`Rust` icon has 1 icon style i.e.,brands. 
 We need to append icon style class `fab`.
```
<i class='fab fa-rust'></i>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-rust'></i>

</div>


## `Rust` font awesome icon CSS Content Code 

We can display `Rust` font awesome icon using it's CSS Content Code ` \e07a` 

Use the following HTML code 

```
<li><span class='Rust fontawesomeicon'></span>Rust</li>
```

Apply CSS code 

```
<style> 
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

.Rust::before {
   font: var(--fa-font-brands);
    content: ' \e07a';
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

.Rust::before {
   font: var(--fa-font-brands);
    content: ' \e07a';
 }</style>

<li><span class='Rust fontawesomeicon'></span>Rust</li>
</div>

For the detailed tutorial visit
[https://www.angularjswiki.com/fontawesome/csscontentcode/](https://www.angularjswiki.com/fontawesome/csscontentcode/)

## `Rust` font awesome icon SVG 

Use the following icon SVG to display `Rust` font awesome icon.
```
<svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"/></svg>

```

Use the following HTML code
```
<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"/></svg>
 Rust displayed using SVG</p>
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


<p>This <svg class='fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"/></svg>
 Rust displayed using SVG</p>
</div>

## Change `Rust` font awesome icon size
To increase `Rust` font awesome icon size, use the `fa-lg(33 % increase)`, `fa-2x`, `fa-3x`, `fa-4x`, or `fa-5x` classes along with icon class  \e07a.
Increase in icon size will be relative to their parent container.
```
<i class='fab fa-rust fa-lg'>fa-lg</i><br/>
<i class='fab fa-rust fa-2x'>fa-2x</i><br/>
<i class='fab fa-rust fa-3x'>fa-3x</i><br/>
<i class='fab fa-rust fa-4x'>fa-4x</i><br/>
<i class='fab fa-rust fa-5x'>fa-5x</i><br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-rust fa-lg'>fa-lg</i><br/>
<i class='fab fa-rust fa-2x'>fa-2x</i><br/>
<i class='fab fa-rust fa-3x'>fa-3x</i><br/>
<i class='fab fa-rust fa-4x'>fa-4x</i><br/>
<i class='fab fa-rust fa-5x'>fa-5x</i><br/>

</div>

## `Rust` font awesome icon with Fixed Width
All the font awesome icons does not have same width.

For example `Rust` icon and `home` icon may not have same height and width.

So to display two icons with fixed width and height we can use `fa-fw` class.
```
<i style='border:1px solid;' class='fab fa-rust fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-rust fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i style='border:1px solid;' class='fab fa-rust fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fab fa-rust fa-3x'></i>Normal<br/>
<i style='border:1px solid;' class='fas fa-home fa-fw fa-3x'></i>Fixed Width<i style='border:1px solid;' class='fas fa-home fa-3x'></i>Normal<br/>

</div>

## `Rust` font awesome icon Border
To add border to `Rust` font awesome icon, use `fa-border` class.
```
<i class='fab fa-rust fa-border fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-rust fa-border fa-3x'></i>
</div>

## Pull `Rust` font awesome icon To the left
To pull `Rust` icon to the left of the container use `fa-pull-left` class.
```
<div style='width: 200px;'>
<i class='fab fa-rust fa-pull-left fa-3x'></i>
  ... The text after Rust Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-rust fa-pull-left fa-3x'></i>
  ... The text after Rust Icon will be displayed on the right side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Pull `Rust` font awesome icon To the left
To pull `Rust` icon to the right of the container use `fa-pull-right` class.
```
<div style='width: 200px;'>
<i class='fab fa-rust fa-pull-right fa-3x'></i>
  ... The text after Rust Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div style='width: 200px;'>
<i class='fab fa-rust fa-pull-right fa-3x'></i>
  ... The text after Rust Icon will be displayed on the left side of the icon.
</div>
<div style = 'clear: both;'></div>
</div>

## Animate `Rust` font awesome icon
To animate `Rust` font awesome icon, use `fa-spin` class.
```
<i class='fab fa-rust fa-spin fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-rust fa-spin fa-3x'></i>
</div>

## Animate `Rust` font awesome icon with steps
While animating the font awesome icon,We can rotate `Rust` icon in 8 steps instead of uniform rotation.

We can use `fa-pulse` icon along with `fa-spin` class.
```
<i class='fab fa-rust fa-spin fa-pulse fa-3x'></i>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<i class='fab fa-rust fa-spin fa-pulse fa-3x'></i>
</div>

## Rotate `Rust` font awesome icon
 To rotate `Rust` font awesome icon, Use `fa-rotate-x` class

Where 'x' represents degree of rotation.
```
<div>
<i class='fab fa-rust fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-rust fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-rust fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-rust fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-rust fa-3x'>R</i>normal<br/><br/>
<i class='fab fa-rust fa-rotate-90 fa-3x'>R</i> fa-rotate-90<br/><br/> 
<i class='fab fa-rust fa-rotate-180  fa-3x'>R</i> fa-rotate-180<br/><br/> 
<i class='fab fa-rust fa-rotate-270 fa-3x'>R</i> fa-rotate-270<br/><br/>
</div>
</div>

## Flip `Rust` font awesome icon
 To flip `Rust` font awesome icon horizontally and vertically use `fa-flip-horizontal` and `fa-flip-vertical` classes.

```
<div>
<i class='fab fa-rust fa-3x'>F</i> Normal <br>
<i class='fab fa-rust fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-rust fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
<i class='fab fa-rust fa-3x'>F</i> Normal <br>
<i class='fab fa-rust fa-flip-horizontal fa-3x'>F</i> fa-flip-horizontal<br>
<i class='fab fa-rust fa-flip-vertical fa-3x'>F</i> fa-flip-vertical<br>
</div>
</div>

## Combine `Rust` font awesome icon with other font awesome icons

In font awesome icons,using stacking we can combine multiple icons and display it as one icon.

To do that use the `fa-stack` class on the parent, the `fa-stack-1x` for the regularly sized icon, and `fa-stack-2x` for the larger icon.

And use class `fa-inverse` for an alternative icon color. 

In the below example, I am displaying `Rust` font awesome icon on top of icons like `fa-square`,`fa-circle` and `fa-ban`.

And used `fa-inverse` in the second example to invert the color of the icon.
```
<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-rust fa-stack-1x'></i>
    </span>
      Rust on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-rust fa-stack-1x fa-inverse'></i>
    </span>
      Rust on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-rust fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Rust on fa-ban
</div>
```

<div style='border:1px solid rgba(0,0,0,.1);margin-bottom:10px;padding:5px;'>
<p>Output:</p>


<div>
    <span class='fa-stack fa-lg'>
        <i class='far fa-square fa-stack-2x'></i>
        <i class='fab fa-rust fa-stack-1x'></i>
    </span>
      Rust on fa-square<br>
    <span class='fa-stack fa-lg'>
        <i class='fas fa-circle fa-stack-2x'></i>
        <i class='fab fa-rust fa-stack-1x fa-inverse'></i>
    </span>
      Rust on fa-circle<br>

    <span class='fa-stack fa-lg'>
        <i class='fab fa-rust fa-stack-1x'></i>
        <i class='fas fa-ban fa-stack-2x'></i>
    </span>
      Rust on fa-ban
</div>
</div>

