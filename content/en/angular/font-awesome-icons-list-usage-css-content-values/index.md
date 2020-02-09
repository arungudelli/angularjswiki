
+++
title = "Font Awesome Icons list & Font Awesome CSS content values cheatsheet"
subtitle = "Complete list of 1534 free font awesome icons cheatsheet"
type="post"
summary ="This post contains complete font awesome icons list with their CSS content values and step by step tutorial to use font awesome icons in our webpages"
keywords=["font awesome icons,font awesome icons list,fa icons list,icons"]
date="2019-07-14T01:01:05+0000"
lastmod="2019-07-14T17:18:08+0000"
draft=false
authors = ["admin"]
categories=["faicons"]
[image]
  caption = "font awesome icons"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

This post contains complete font awesome icons list with their CSS content values and step by step tutorial to use font awesome icons in our webpages.

In font awesome 5.9 version we have around 1534 free icons.

And these free font awesome icons divided into three categories. 

1. font awesome solid icons
2. font awesome regular icons
3. font awesome brand icons

We can <a href="https://use.fontawesome.com/releases/v5.9.0/fontawesome-free-5.9.0-web.zip" rel="noopener" target="_blank">download</a> font awesome icons css file and serve them from our own server Or we can serve them from public CDNs.

{{% toc %}}

## What is font awesome?

1. font awesome is web's most popular font and icon toolkit based on CSS and LESS.
2. font awesome is created by by Dave Gandy.
3. font awesome was github's most popular new open source project in 2012 and is  currently one of the top 10 projects overall.
4. Font Awesome is currently live on 47M websites and half the world's web developers use font awesome icons.
5. Font Awesome makes it easy to add vector icons and social logos to our websites.

## How to use font awesome icons

Follow the below steps To use font awesome icons 

1. Add the font awesome icons css file in head section of html
2. And then display font awesome icons using class attribute with the prefix `fa` followed by the font awesome icon name.
3. Additionally we have to add category classes.

First we will add the font awesome icons css in head section of html file as shown below

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
</link>
</head>

```
I am using cloudfare font awesome icons cdn link. 

Now to display facebook icon using font awesome icons use the below html code

```
<i class="fab fa-facebook"></i>
```

Facebook icon is part of brand icons so i have added `fab` as additional class name.

To use font awesome icons in Angular applications go through the article

[How To Use Font Awesome icons in Angular Applications]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Using font awesome icons as CSS content values.

The above approach requires us to change our icon html classes names.

If your project is new then we can follow the above approach. 

But if it is an existing project, it is very difficult to change the icon html classes.

In this case we can display the font awesome icons using their CSS content values.

We can use the CSS Pseudo-elements elements features `::before` or `::after` to display them.

For example to display login icons

```
<li>
<span class="icons login"></span> Login
</li>
``` 

I gave one class as `icons` (for all icons) and icon name as `login`.

I have added few common css properties which are applicable to all icons, in the `icons` css class as below. 

```
 .icons::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
```

This is to simplify our main icon CSS definition.

Now for the actual icon i.e., login add the below css properties.

```
.login::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f007";
}
```

I gave content as `\f007` which is unicode value for login defined by font awesome icons.

For all 1534 free font awesome icons, unicode values are already defined.

To display font awesome icons using CSS Pseudo elements we have to follow the below steps

1. Set the font-family to "Font Awesome 5 Free" (For regular,solid icons) or "Font Awesome 5 Pro" (If you buy a pro license) or "Font Awesome 5 Brands" (For brand icons)
2. Set the font-weight: 900 (For Solid), 400 (Regular or Brands), 300 (Light for pro icons)
3. Set the content to the unicode value font awesome icons
4. And like explained, add common CSS definitions for all icons as explained above.

To display twitter icon using Pseudo element use the following CSS content code

```
<li>
<span class="icons twitter"></span> Login
</li>

.twitter::before {
    font-family: "Font Awesome 5 Brands"; 
	font-weight: 400;
	content: "\f099";
}
```

## Font Awesome CDN

Font Awesome CDN is the best way to get Font Awesome on websites or applications, We need to create an account in font awesome website. 

Then font awesome will provides a javascript file's cdn, which can be added to websites with single line of code.

```
<script src="https://kit.fontawesome.com/samplekit.js"
 crossorigin="anonymous"></script>
```

Or we can use font awesome icons cdns like cdnjs or maxcdn

### Font awesome 5 CDN link 

For the latest font awesome 5 version cdn use cdnjs (cloudfare).

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css

https://cdnjs.com/libraries/font-awesome
```
### Font awesome Bootstrap CDN link

For the earlier version like font awesome 4.7 we can use bootstap cdn links

```
https://www.bootstrapcdn.com/fontawesome/
https://stackpath.bootstrapcdn.com/
font-awesome/4.7.0/css/font-awesome.min.css
```

## Complete Font Awesome Icons List

Here is the complete list of 1534 free font awesome icons cheatsheet.

To use font awesome brand icons use class name as `fab`

For example to display twitter icon use the following html code

```
<i class="fab fa-twitter"></i>
```

To use font awesome solid icons add the class name as `fas`

For example to display barcode icon use the following html code

```
<i class="fas fa-barcode"></i>
```
To use font awesome regular icons add the class name as `far`

To display bookmark icon use the following html code

```
<i class="far fa-bookmark"></i>
```


## Font Awesome Icons List - Solid Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>Name</th>
<th>Code</th>
<th>CSS Content code</th>
</tr>
 <tr><td><i class="fas fa-ad"></i> ad</td><td>fa-ad</td><td>f641</td></tr>
 <tr><td><i class="fas fa-address-book"></i> address-book</td><td>fa-address-book</td><td>f2b9</td></tr>
 <tr><td><i class="fas fa-address-card"></i> address-card</td><td>fa-address-card</td><td>f2bb</td></tr>
 <tr><td><i class="fas fa-adjust"></i> adjust</td><td>fa-adjust</td><td>f042</td></tr>
 <tr><td><i class="fas fa-air-freshener"></i> air-freshener</td><td>fa-air-freshener</td><td>f5d0</td></tr>
 <tr><td><i class="fas fa-align-center"></i> align-center</td><td>fa-align-center</td><td>f037</td></tr>
 <tr><td><i class="fas fa-align-justify"></i> align-justify</td><td>fa-align-justify</td><td>f039</td></tr>
 <tr><td><i class="fas fa-align-left"></i> align-left</td><td>fa-align-left</td><td>f036</td></tr>
 <tr><td><i class="fas fa-align-right"></i> align-right</td><td>fa-align-right</td><td>f038</td></tr>
 <tr><td><i class="fas fa-allergies"></i> allergies</td><td>fa-allergies</td><td>f461</td></tr>
 <tr><td><i class="fas fa-ambulance"></i> ambulance</td><td>fa-ambulance</td><td>f0f9</td></tr>
 <tr><td><i class="fas fa-american-sign-language-interpreting"></i> american-sign-language-interpreting</td><td>fa-american-sign-language-interpreting</td><td>f2a3</td></tr>
 <tr><td><i class="fas fa-anchor"></i> anchor</td><td>fa-anchor</td><td>f13d</td></tr>
 <tr><td><i class="fas fa-angle-double-down"></i> angle-double-down</td><td>fa-angle-double-down</td><td>f103</td></tr>
 <tr><td><i class="fas fa-angle-double-left"></i> angle-double-left</td><td>fa-angle-double-left</td><td>f100</td></tr>
 <tr><td><i class="fas fa-angle-double-right"></i> angle-double-right</td><td>fa-angle-double-right</td><td>f101</td></tr>
 <tr><td><i class="fas fa-angle-double-up"></i> angle-double-up</td><td>fa-angle-double-up</td><td>f102</td></tr>
 <tr><td><i class="fas fa-angle-down"></i> angle-down</td><td>fa-angle-down</td><td>f107</td></tr>
 <tr><td><i class="fas fa-angle-left"></i> angle-left</td><td>fa-angle-left</td><td>f104</td></tr>
 <tr><td><i class="fas fa-angle-right"></i> angle-right</td><td>fa-angle-right</td><td>f105</td></tr>
 <tr><td><i class="fas fa-angle-up"></i> angle-up</td><td>fa-angle-up</td><td>f106</td></tr>
 <tr><td><i class="fas fa-angry"></i> angry</td><td>fa-angry</td><td>f556</td></tr>
 <tr><td><i class="fas fa-ankh"></i> ankh</td><td>fa-ankh</td><td>f644</td></tr>
 <tr><td><i class="fas fa-apple-alt"></i> apple-alt</td><td>fa-apple-alt</td><td>f5d1</td></tr>
 <tr><td><i class="fas fa-archive"></i> archive</td><td>fa-archive</td><td>f187</td></tr>
 <tr><td><i class="fas fa-archway"></i> archway</td><td>fa-archway</td><td>f557</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-down"></i> arrow-alt-circle-down</td><td>fa-arrow-alt-circle-down</td><td>f358</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-left"></i> arrow-alt-circle-left</td><td>fa-arrow-alt-circle-left</td><td>f359</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-right"></i> arrow-alt-circle-right</td><td>fa-arrow-alt-circle-right</td><td>f35a</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-up"></i> arrow-alt-circle-up</td><td>fa-arrow-alt-circle-up</td><td>f35b</td></tr>
 <tr><td><i class="fas fa-arrow-circle-down"></i> arrow-circle-down</td><td>fa-arrow-circle-down</td><td>f0ab</td></tr>
 <tr><td><i class="fas fa-arrow-circle-left"></i> arrow-circle-left</td><td>fa-arrow-circle-left</td><td>f0a8</td></tr>
 <tr><td><i class="fas fa-arrow-circle-right"></i> arrow-circle-right</td><td>fa-arrow-circle-right</td><td>f0a9</td></tr>
 <tr><td><i class="fas fa-arrow-circle-up"></i> arrow-circle-up</td><td>fa-arrow-circle-up</td><td>f0aa</td></tr>
 <tr><td><i class="fas fa-arrow-down"></i> arrow-down</td><td>fa-arrow-down</td><td>f063</td></tr>
 <tr><td><i class="fas fa-arrow-left"></i> arrow-left</td><td>fa-arrow-left</td><td>f060</td></tr>
 <tr><td><i class="fas fa-arrow-right"></i> arrow-right</td><td>fa-arrow-right</td><td>f061</td></tr>
 <tr><td><i class="fas fa-arrow-up"></i> arrow-up</td><td>fa-arrow-up</td><td>f062</td></tr>
 <tr><td><i class="fas fa-arrows-alt"></i> arrows-alt</td><td>fa-arrows-alt</td><td>f0b2</td></tr>
 <tr><td><i class="fas fa-arrows-alt-h"></i> arrows-alt-h</td><td>fa-arrows-alt-h</td><td>f337</td></tr>
 <tr><td><i class="fas fa-arrows-alt-v"></i> arrows-alt-v</td><td>fa-arrows-alt-v</td><td>f338</td></tr>
 <tr><td><i class="fas fa-assistive-listening-systems"></i> assistive-listening-systems</td><td>fa-assistive-listening-systems</td><td>f2a2</td></tr>
 <tr><td><i class="fas fa-asterisk"></i> asterisk</td><td>fa-asterisk</td><td>f069</td></tr>
 <tr><td><i class="fas fa-at"></i> at</td><td>fa-at</td><td>f1fa</td></tr>
 <tr><td><i class="fas fa-atlas"></i> atlas</td><td>fa-atlas</td><td>f558</td></tr>
 <tr><td><i class="fas fa-atom"></i> atom</td><td>fa-atom</td><td>f5d2</td></tr>
 <tr><td><i class="fas fa-audio-description"></i> audio-description</td><td>fa-audio-description</td><td>f29e</td></tr>
 <tr><td><i class="fas fa-award"></i> award</td><td>fa-award</td><td>f559</td></tr>
 <tr><td><i class="fas fa-baby"></i> baby</td><td>fa-baby</td><td>f77c</td></tr>
 <tr><td><i class="fas fa-baby-carriage"></i> baby-carriage</td><td>fa-baby-carriage</td><td>f77d</td></tr>
 <tr><td><i class="fas fa-backspace"></i> backspace</td><td>fa-backspace</td><td>f55a</td></tr>
 <tr><td><i class="fas fa-backward"></i> backward</td><td>fa-backward</td><td>f04a</td></tr>
 <tr><td><i class="fas fa-bacon"></i> bacon</td><td>fa-bacon</td><td>f7e5</td></tr>
 <tr><td><i class="fas fa-balance-scale"></i> balance-scale</td><td>fa-balance-scale</td><td>f24e</td></tr>
 <tr><td><i class="fas fa-balance-scale-left"></i> balance-scale-left</td><td>fa-balance-scale-left</td><td>f515</td></tr>
 <tr><td><i class="fas fa-balance-scale-right"></i> balance-scale-right</td><td>fa-balance-scale-right</td><td>f516</td></tr>
 <tr><td><i class="fas fa-ban"></i> ban</td><td>fa-ban</td><td>f05e</td></tr>
 <tr><td><i class="fas fa-band-aid"></i> band-aid</td><td>fa-band-aid</td><td>f462</td></tr>
 <tr><td><i class="fas fa-barcode"></i> barcode</td><td>fa-barcode</td><td>f02a</td></tr>
 <tr><td><i class="fas fa-bars"></i> bars</td><td>fa-bars</td><td>f0c9</td></tr>
 <tr><td><i class="fas fa-baseball-ball"></i> baseball-ball</td><td>fa-baseball-ball</td><td>f433</td></tr>
 <tr><td><i class="fas fa-basketball-ball"></i> basketball-ball</td><td>fa-basketball-ball</td><td>f434</td></tr>
 <tr><td><i class="fas fa-bath"></i> bath</td><td>fa-bath</td><td>f2cd</td></tr>
 <tr><td><i class="fas fa-battery-empty"></i> battery-empty</td><td>fa-battery-empty</td><td>f244</td></tr>
 <tr><td><i class="fas fa-battery-full"></i> battery-full</td><td>fa-battery-full</td><td>f240</td></tr>
 <tr><td><i class="fas fa-battery-half"></i> battery-half</td><td>fa-battery-half</td><td>f242</td></tr>
 <tr><td><i class="fas fa-battery-quarter"></i> battery-quarter</td><td>fa-battery-quarter</td><td>f243</td></tr>
 <tr><td><i class="fas fa-battery-three-quarters"></i> battery-three-quarters</td><td>fa-battery-three-quarters</td><td>f241</td></tr>
 <tr><td><i class="fas fa-bed"></i> bed</td><td>fa-bed</td><td>f236</td></tr>
 <tr><td><i class="fas fa-beer"></i> beer</td><td>fa-beer</td><td>f0fc</td></tr>
 <tr><td><i class="fas fa-bell"></i> bell</td><td>fa-bell</td><td>f0f3</td></tr>
 <tr><td><i class="fas fa-bell-slash"></i> bell-slash</td><td>fa-bell-slash</td><td>f1f6</td></tr>
 <tr><td><i class="fas fa-bezier-curve"></i> bezier-curve</td><td>fa-bezier-curve</td><td>f55b</td></tr>
 <tr><td><i class="fas fa-bible"></i> bible</td><td>fa-bible</td><td>f647</td></tr>
 <tr><td><i class="fas fa-bicycle"></i> bicycle</td><td>fa-bicycle</td><td>f206</td></tr>
 <tr><td><i class="fas fa-biking"></i> biking</td><td>fa-biking</td><td>f84a</td></tr>
 <tr><td><i class="fas fa-binoculars"></i> binoculars</td><td>fa-binoculars</td><td>f1e5</td></tr>
 <tr><td><i class="fas fa-biohazard"></i> biohazard</td><td>fa-biohazard</td><td>f780</td></tr>
 <tr><td><i class="fas fa-birthday-cake"></i> birthday-cake</td><td>fa-birthday-cake</td><td>f1fd</td></tr>
 <tr><td><i class="fas fa-blender"></i> blender</td><td>fa-blender</td><td>f517</td></tr>
 <tr><td><i class="fas fa-blender-phone"></i> blender-phone</td><td>fa-blender-phone</td><td>f6b6</td></tr>
 <tr><td><i class="fas fa-blind"></i> blind</td><td>fa-blind</td><td>f29d</td></tr>
 <tr><td><i class="fas fa-blog"></i> blog</td><td>fa-blog</td><td>f781</td></tr>
 <tr><td><i class="fas fa-bold"></i> bold</td><td>fa-bold</td><td>f032</td></tr>
 <tr><td><i class="fas fa-bolt"></i> bolt</td><td>fa-bolt</td><td>f0e7</td></tr>
 <tr><td><i class="fas fa-bomb"></i> bomb</td><td>fa-bomb</td><td>f1e2</td></tr>
 <tr><td><i class="fas fa-bone"></i> bone</td><td>fa-bone</td><td>f5d7</td></tr>
 <tr><td><i class="fas fa-bong"></i> bong</td><td>fa-bong</td><td>f55c</td></tr>
 <tr><td><i class="fas fa-book"></i> book</td><td>fa-book</td><td>f02d</td></tr>
 <tr><td><i class="fas fa-book-dead"></i> book-dead</td><td>fa-book-dead</td><td>f6b7</td></tr>
 <tr><td><i class="fas fa-book-medical"></i> book-medical</td><td>fa-book-medical</td><td>f7e6</td></tr>
 <tr><td><i class="fas fa-book-open"></i> book-open</td><td>fa-book-open</td><td>f518</td></tr>
 <tr><td><i class="fas fa-book-reader"></i> book-reader</td><td>fa-book-reader</td><td>f5da</td></tr>
 <tr><td><i class="fas fa-bookmark"></i> bookmark</td><td>fa-bookmark</td><td>f02e</td></tr>
 <tr><td><i class="fas fa-border-all"></i> border-all</td><td>fa-border-all</td><td>f84c</td></tr>
 <tr><td><i class="fas fa-border-none"></i> border-none</td><td>fa-border-none</td><td>f850</td></tr>
 <tr><td><i class="fas fa-border-style"></i> border-style</td><td>fa-border-style</td><td>f853</td></tr>
 <tr><td><i class="fas fa-bowling-ball"></i> bowling-ball</td><td>fa-bowling-ball</td><td>f436</td></tr>
 <tr><td><i class="fas fa-box"></i> box</td><td>fa-box</td><td>f466</td></tr>
 <tr><td><i class="fas fa-box-open"></i> box-open</td><td>fa-box-open</td><td>f49e</td></tr>
 <tr><td><i class="fas fa-boxes"></i> boxes</td><td>fa-boxes</td><td>f468</td></tr>
 <tr><td><i class="fas fa-braille"></i> braille</td><td>fa-braille</td><td>f2a1</td></tr>
 <tr><td><i class="fas fa-brain"></i> brain</td><td>fa-brain</td><td>f5dc</td></tr>
 <tr><td><i class="fas fa-bread-slice"></i> bread-slice</td><td>fa-bread-slice</td><td>f7ec</td></tr>
 <tr><td><i class="fas fa-briefcase"></i> briefcase</td><td>fa-briefcase</td><td>f0b1</td></tr>
 <tr><td><i class="fas fa-briefcase-medical"></i> briefcase-medical</td><td>fa-briefcase-medical</td><td>f469</td></tr>
 <tr><td><i class="fas fa-broadcast-tower"></i> broadcast-tower</td><td>fa-broadcast-tower</td><td>f519</td></tr>
 <tr><td><i class="fas fa-broom"></i> broom</td><td>fa-broom</td><td>f51a</td></tr>
 <tr><td><i class="fas fa-brush"></i> brush</td><td>fa-brush</td><td>f55d</td></tr>
 <tr><td><i class="fas fa-bug"></i> bug</td><td>fa-bug</td><td>f188</td></tr>
 <tr><td><i class="fas fa-building"></i> building</td><td>fa-building</td><td>f1ad</td></tr>
 <tr><td><i class="fas fa-bullhorn"></i> bullhorn</td><td>fa-bullhorn</td><td>f0a1</td></tr>
 <tr><td><i class="fas fa-bullseye"></i> bullseye</td><td>fa-bullseye</td><td>f140</td></tr>
 <tr><td><i class="fas fa-burn"></i> burn</td><td>fa-burn</td><td>f46a</td></tr>
 <tr><td><i class="fas fa-bus"></i> bus</td><td>fa-bus</td><td>f207</td></tr>
 <tr><td><i class="fas fa-bus-alt"></i> bus-alt</td><td>fa-bus-alt</td><td>f55e</td></tr>
 <tr><td><i class="fas fa-business-time"></i> business-time</td><td>fa-business-time</td><td>f64a</td></tr>
 <tr><td><i class="fas fa-calculator"></i> calculator</td><td>fa-calculator</td><td>f1ec</td></tr>
 <tr><td><i class="fas fa-calendar"></i> calendar</td><td>fa-calendar</td><td>f133</td></tr>
 <tr><td><i class="fas fa-calendar-alt"></i> calendar-alt</td><td>fa-calendar-alt</td><td>f073</td></tr>
 <tr><td><i class="fas fa-calendar-check"></i> calendar-check</td><td>fa-calendar-check</td><td>f274</td></tr>
 <tr><td><i class="fas fa-calendar-day"></i> calendar-day</td><td>fa-calendar-day</td><td>f783</td></tr>
 <tr><td><i class="fas fa-calendar-minus"></i> calendar-minus</td><td>fa-calendar-minus</td><td>f272</td></tr>
 <tr><td><i class="fas fa-calendar-plus"></i> calendar-plus</td><td>fa-calendar-plus</td><td>f271</td></tr>
 <tr><td><i class="fas fa-calendar-times"></i> calendar-times</td><td>fa-calendar-times</td><td>f273</td></tr>
 <tr><td><i class="fas fa-calendar-week"></i> calendar-week</td><td>fa-calendar-week</td><td>f784</td></tr>
 <tr><td><i class="fas fa-camera"></i> camera</td><td>fa-camera</td><td>f030</td></tr>
 <tr><td><i class="fas fa-camera-retro"></i> camera-retro</td><td>fa-camera-retro</td><td>f083</td></tr>
 <tr><td><i class="fas fa-campground"></i> campground</td><td>fa-campground</td><td>f6bb</td></tr>
 <tr><td><i class="fas fa-candy-cane"></i> candy-cane</td><td>fa-candy-cane</td><td>f786</td></tr>
 <tr><td><i class="fas fa-cannabis"></i> cannabis</td><td>fa-cannabis</td><td>f55f</td></tr>
 <tr><td><i class="fas fa-capsules"></i> capsules</td><td>fa-capsules</td><td>f46b</td></tr>
 <tr><td><i class="fas fa-car"></i> car</td><td>fa-car</td><td>f1b9</td></tr>
 <tr><td><i class="fas fa-car-alt"></i> car-alt</td><td>fa-car-alt</td><td>f5de</td></tr>
 <tr><td><i class="fas fa-car-battery"></i> car-battery</td><td>fa-car-battery</td><td>f5df</td></tr>
 <tr><td><i class="fas fa-car-crash"></i> car-crash</td><td>fa-car-crash</td><td>f5e1</td></tr>
 <tr><td><i class="fas fa-car-side"></i> car-side</td><td>fa-car-side</td><td>f5e4</td></tr>
 <tr><td><i class="fas fa-caret-down"></i> caret-down</td><td>fa-caret-down</td><td>f0d7</td></tr>
 <tr><td><i class="fas fa-caret-left"></i> caret-left</td><td>fa-caret-left</td><td>f0d9</td></tr>
 <tr><td><i class="fas fa-caret-right"></i> caret-right</td><td>fa-caret-right</td><td>f0da</td></tr>
 <tr><td><i class="fas fa-caret-square-down"></i> caret-square-down</td><td>fa-caret-square-down</td><td>f150</td></tr>
 <tr><td><i class="fas fa-caret-square-left"></i> caret-square-left</td><td>fa-caret-square-left</td><td>f191</td></tr>
 <tr><td><i class="fas fa-caret-square-right"></i> caret-square-right</td><td>fa-caret-square-right</td><td>f152</td></tr>
 <tr><td><i class="fas fa-caret-square-up"></i> caret-square-up</td><td>fa-caret-square-up</td><td>f151</td></tr>
 <tr><td><i class="fas fa-caret-up"></i> caret-up</td><td>fa-caret-up</td><td>f0d8</td></tr>
 <tr><td><i class="fas fa-carrot"></i> carrot</td><td>fa-carrot</td><td>f787</td></tr>
 <tr><td><i class="fas fa-cart-arrow-down"></i> cart-arrow-down</td><td>fa-cart-arrow-down</td><td>f218</td></tr>
 <tr><td><i class="fas fa-cart-plus"></i> cart-plus</td><td>fa-cart-plus</td><td>f217</td></tr>
 <tr><td><i class="fas fa-cash-register"></i> cash-register</td><td>fa-cash-register</td><td>f788</td></tr>
 <tr><td><i class="fas fa-cat"></i> cat</td><td>fa-cat</td><td>f6be</td></tr>
 <tr><td><i class="fas fa-certificate"></i> certificate</td><td>fa-certificate</td><td>f0a3</td></tr>
 <tr><td><i class="fas fa-chair"></i> chair</td><td>fa-chair</td><td>f6c0</td></tr>
 <tr><td><i class="fas fa-chalkboard"></i> chalkboard</td><td>fa-chalkboard</td><td>f51b</td></tr>
 <tr><td><i class="fas fa-chalkboard-teacher"></i> chalkboard-teacher</td><td>fa-chalkboard-teacher</td><td>f51c</td></tr>
 <tr><td><i class="fas fa-charging-station"></i> charging-station</td><td>fa-charging-station</td><td>f5e7</td></tr>
 <tr><td><i class="fas fa-chart-area"></i> chart-area</td><td>fa-chart-area</td><td>f1fe</td></tr>
 <tr><td><i class="fas fa-chart-bar"></i> chart-bar</td><td>fa-chart-bar</td><td>f080</td></tr>
 <tr><td><i class="fas fa-chart-line"></i> chart-line</td><td>fa-chart-line</td><td>f201</td></tr>
 <tr><td><i class="fas fa-chart-pie"></i> chart-pie</td><td>fa-chart-pie</td><td>f200</td></tr>
 <tr><td><i class="fas fa-check"></i> check</td><td>fa-check</td><td>f00c</td></tr>
 <tr><td><i class="fas fa-check-circle"></i> check-circle</td><td>fa-check-circle</td><td>f058</td></tr>
 <tr><td><i class="fas fa-check-double"></i> check-double</td><td>fa-check-double</td><td>f560</td></tr>
 <tr><td><i class="fas fa-check-square"></i> check-square</td><td>fa-check-square</td><td>f14a</td></tr>
 <tr><td><i class="fas fa-cheese"></i> cheese</td><td>fa-cheese</td><td>f7ef</td></tr>
 <tr><td><i class="fas fa-chess"></i> chess</td><td>fa-chess</td><td>f439</td></tr>
 <tr><td><i class="fas fa-chess-bishop"></i> chess-bishop</td><td>fa-chess-bishop</td><td>f43a</td></tr>
 <tr><td><i class="fas fa-chess-board"></i> chess-board</td><td>fa-chess-board</td><td>f43c</td></tr>
 <tr><td><i class="fas fa-chess-king"></i> chess-king</td><td>fa-chess-king</td><td>f43f</td></tr>
 <tr><td><i class="fas fa-chess-knight"></i> chess-knight</td><td>fa-chess-knight</td><td>f441</td></tr>
 <tr><td><i class="fas fa-chess-pawn"></i> chess-pawn</td><td>fa-chess-pawn</td><td>f443</td></tr>
 <tr><td><i class="fas fa-chess-queen"></i> chess-queen</td><td>fa-chess-queen</td><td>f445</td></tr>
 <tr><td><i class="fas fa-chess-rook"></i> chess-rook</td><td>fa-chess-rook</td><td>f447</td></tr>
 <tr><td><i class="fas fa-chevron-circle-down"></i> chevron-circle-down</td><td>fa-chevron-circle-down</td><td>f13a</td></tr>
 <tr><td><i class="fas fa-chevron-circle-left"></i> chevron-circle-left</td><td>fa-chevron-circle-left</td><td>f137</td></tr>
 <tr><td><i class="fas fa-chevron-circle-right"></i> chevron-circle-right</td><td>fa-chevron-circle-right</td><td>f138</td></tr>
 <tr><td><i class="fas fa-chevron-circle-up"></i> chevron-circle-up</td><td>fa-chevron-circle-up</td><td>f139</td></tr>
 <tr><td><i class="fas fa-chevron-down"></i> chevron-down</td><td>fa-chevron-down</td><td>f078</td></tr>
 <tr><td><i class="fas fa-chevron-left"></i> chevron-left</td><td>fa-chevron-left</td><td>f053</td></tr>
 <tr><td><i class="fas fa-chevron-right"></i> chevron-right</td><td>fa-chevron-right</td><td>f054</td></tr>
 <tr><td><i class="fas fa-chevron-up"></i> chevron-up</td><td>fa-chevron-up</td><td>f077</td></tr>
 <tr><td><i class="fas fa-child"></i> child</td><td>fa-child</td><td>f1ae</td></tr>
 <tr><td><i class="fas fa-church"></i> church</td><td>fa-church</td><td>f51d</td></tr>
 <tr><td><i class="fas fa-circle"></i> circle</td><td>fa-circle</td><td>f111</td></tr>
 <tr><td><i class="fas fa-circle-notch"></i> circle-notch</td><td>fa-circle-notch</td><td>f1ce</td></tr>
 <tr><td><i class="fas fa-city"></i> city</td><td>fa-city</td><td>f64f</td></tr>
 <tr><td><i class="fas fa-clinic-medical"></i> clinic-medical</td><td>fa-clinic-medical</td><td>f7f2</td></tr>
 <tr><td><i class="fas fa-clipboard"></i> clipboard</td><td>fa-clipboard</td><td>f328</td></tr>
 <tr><td><i class="fas fa-clipboard-check"></i> clipboard-check</td><td>fa-clipboard-check</td><td>f46c</td></tr>
 <tr><td><i class="fas fa-clipboard-list"></i> clipboard-list</td><td>fa-clipboard-list</td><td>f46d</td></tr>
 <tr><td><i class="fas fa-clock"></i> clock</td><td>fa-clock</td><td>f017</td></tr>
 <tr><td><i class="fas fa-clone"></i> clone</td><td>fa-clone</td><td>f24d</td></tr>
 <tr><td><i class="fas fa-closed-captioning"></i> closed-captioning</td><td>fa-closed-captioning</td><td>f20a</td></tr>
 <tr><td><i class="fas fa-cloud"></i> cloud</td><td>fa-cloud</td><td>f0c2</td></tr>
 <tr><td><i class="fas fa-cloud-download-alt"></i> cloud-download-alt</td><td>fa-cloud-download-alt</td><td>f381</td></tr>
 <tr><td><i class="fas fa-cloud-meatball"></i> cloud-meatball</td><td>fa-cloud-meatball</td><td>f73b</td></tr>
 <tr><td><i class="fas fa-cloud-moon"></i> cloud-moon</td><td>fa-cloud-moon</td><td>f6c3</td></tr>
 <tr><td><i class="fas fa-cloud-moon-rain"></i> cloud-moon-rain</td><td>fa-cloud-moon-rain</td><td>f73c</td></tr>
 <tr><td><i class="fas fa-cloud-rain"></i> cloud-rain</td><td>fa-cloud-rain</td><td>f73d</td></tr>
 <tr><td><i class="fas fa-cloud-showers-heavy"></i> cloud-showers-heavy</td><td>fa-cloud-showers-heavy</td><td>f740</td></tr>
 <tr><td><i class="fas fa-cloud-sun"></i> cloud-sun</td><td>fa-cloud-sun</td><td>f6c4</td></tr>
 <tr><td><i class="fas fa-cloud-sun-rain"></i> cloud-sun-rain</td><td>fa-cloud-sun-rain</td><td>f743</td></tr>
 <tr><td><i class="fas fa-cloud-upload-alt"></i> cloud-upload-alt</td><td>fa-cloud-upload-alt</td><td>f382</td></tr>
 <tr><td><i class="fas fa-cocktail"></i> cocktail</td><td>fa-cocktail</td><td>f561</td></tr>
 <tr><td><i class="fas fa-code"></i> code</td><td>fa-code</td><td>f121</td></tr>
 <tr><td><i class="fas fa-code-branch"></i> code-branch</td><td>fa-code-branch</td><td>f126</td></tr>
 <tr><td><i class="fas fa-coffee"></i> coffee</td><td>fa-coffee</td><td>f0f4</td></tr>
 <tr><td><i class="fas fa-cog"></i> cog</td><td>fa-cog</td><td>f013</td></tr>
 <tr><td><i class="fas fa-cogs"></i> cogs</td><td>fa-cogs</td><td>f085</td></tr>
 <tr><td><i class="fas fa-coins"></i> coins</td><td>fa-coins</td><td>f51e</td></tr>
 <tr><td><i class="fas fa-columns"></i> columns</td><td>fa-columns</td><td>f0db</td></tr>
 <tr><td><i class="fas fa-comment"></i> comment</td><td>fa-comment</td><td>f075</td></tr>
 <tr><td><i class="fas fa-comment-alt"></i> comment-alt</td><td>fa-comment-alt</td><td>f27a</td></tr>
 <tr><td><i class="fas fa-comment-dollar"></i> comment-dollar</td><td>fa-comment-dollar</td><td>f651</td></tr>
 <tr><td><i class="fas fa-comment-dots"></i> comment-dots</td><td>fa-comment-dots</td><td>f4ad</td></tr>
 <tr><td><i class="fas fa-comment-medical"></i> comment-medical</td><td>fa-comment-medical</td><td>f7f5</td></tr>
 <tr><td><i class="fas fa-comment-slash"></i> comment-slash</td><td>fa-comment-slash</td><td>f4b3</td></tr>
 <tr><td><i class="fas fa-comments"></i> comments</td><td>fa-comments</td><td>f086</td></tr>
 <tr><td><i class="fas fa-comments-dollar"></i> comments-dollar</td><td>fa-comments-dollar</td><td>f653</td></tr>
 <tr><td><i class="fas fa-compact-disc"></i> compact-disc</td><td>fa-compact-disc</td><td>f51f</td></tr>
 <tr><td><i class="fas fa-compass"></i> compass</td><td>fa-compass</td><td>f14e</td></tr>
 <tr><td><i class="fas fa-compress"></i> compress</td><td>fa-compress</td><td>f066</td></tr>
 <tr><td><i class="fas fa-compress-arrows-alt"></i> compress-arrows-alt</td><td>fa-compress-arrows-alt</td><td>f78c</td></tr>
 <tr><td><i class="fas fa-concierge-bell"></i> concierge-bell</td><td>fa-concierge-bell</td><td>f562</td></tr>
 <tr><td><i class="fas fa-cookie"></i> cookie</td><td>fa-cookie</td><td>f563</td></tr>
 <tr><td><i class="fas fa-cookie-bite"></i> cookie-bite</td><td>fa-cookie-bite</td><td>f564</td></tr>
 <tr><td><i class="fas fa-copy"></i> copy</td><td>fa-copy</td><td>f0c5</td></tr>
 <tr><td><i class="fas fa-copyright"></i> copyright</td><td>fa-copyright</td><td>f1f9</td></tr>
 <tr><td><i class="fas fa-couch"></i> couch</td><td>fa-couch</td><td>f4b8</td></tr>
 <tr><td><i class="fas fa-credit-card"></i> credit-card</td><td>fa-credit-card</td><td>f09d</td></tr>
 <tr><td><i class="fas fa-crop"></i> crop</td><td>fa-crop</td><td>f125</td></tr>
 <tr><td><i class="fas fa-crop-alt"></i> crop-alt</td><td>fa-crop-alt</td><td>f565</td></tr>
 <tr><td><i class="fas fa-cross"></i> cross</td><td>fa-cross</td><td>f654</td></tr>
 <tr><td><i class="fas fa-crosshairs"></i> crosshairs</td><td>fa-crosshairs</td><td>f05b</td></tr>
 <tr><td><i class="fas fa-crow"></i> crow</td><td>fa-crow</td><td>f520</td></tr>
 <tr><td><i class="fas fa-crown"></i> crown</td><td>fa-crown</td><td>f521</td></tr>
 <tr><td><i class="fas fa-crutch"></i> crutch</td><td>fa-crutch</td><td>f7f7</td></tr>
 <tr><td><i class="fas fa-cube"></i> cube</td><td>fa-cube</td><td>f1b2</td></tr>
 <tr><td><i class="fas fa-cubes"></i> cubes</td><td>fa-cubes</td><td>f1b3</td></tr>
 <tr><td><i class="fas fa-cut"></i> cut</td><td>fa-cut</td><td>f0c4</td></tr>
 <tr><td><i class="fas fa-database"></i> database</td><td>fa-database</td><td>f1c0</td></tr>
 <tr><td><i class="fas fa-deaf"></i> deaf</td><td>fa-deaf</td><td>f2a4</td></tr>
 <tr><td><i class="fas fa-democrat"></i> democrat</td><td>fa-democrat</td><td>f747</td></tr>
 <tr><td><i class="fas fa-desktop"></i> desktop</td><td>fa-desktop</td><td>f108</td></tr>
 <tr><td><i class="fas fa-dharmachakra"></i> dharmachakra</td><td>fa-dharmachakra</td><td>f655</td></tr>
 <tr><td><i class="fas fa-diagnoses"></i> diagnoses</td><td>fa-diagnoses</td><td>f470</td></tr>
 <tr><td><i class="fas fa-dice"></i> dice</td><td>fa-dice</td><td>f522</td></tr>
 <tr><td><i class="fas fa-dice-d20"></i> dice-d20</td><td>fa-dice-d20</td><td>f6cf</td></tr>
 <tr><td><i class="fas fa-dice-d6"></i> dice-d6</td><td>fa-dice-d6</td><td>f6d1</td></tr>
 <tr><td><i class="fas fa-dice-five"></i> dice-five</td><td>fa-dice-five</td><td>f523</td></tr>
 <tr><td><i class="fas fa-dice-four"></i> dice-four</td><td>fa-dice-four</td><td>f524</td></tr>
 <tr><td><i class="fas fa-dice-one"></i> dice-one</td><td>fa-dice-one</td><td>f525</td></tr>
 <tr><td><i class="fas fa-dice-six"></i> dice-six</td><td>fa-dice-six</td><td>f526</td></tr>
 <tr><td><i class="fas fa-dice-three"></i> dice-three</td><td>fa-dice-three</td><td>f527</td></tr>
 <tr><td><i class="fas fa-dice-two"></i> dice-two</td><td>fa-dice-two</td><td>f528</td></tr>
 <tr><td><i class="fas fa-digital-tachograph"></i> digital-tachograph</td><td>fa-digital-tachograph</td><td>f566</td></tr>
 <tr><td><i class="fas fa-directions"></i> directions</td><td>fa-directions</td><td>f5eb</td></tr>
 <tr><td><i class="fas fa-divide"></i> divide</td><td>fa-divide</td><td>f529</td></tr>
 <tr><td><i class="fas fa-dizzy"></i> dizzy</td><td>fa-dizzy</td><td>f567</td></tr>
 <tr><td><i class="fas fa-dna"></i> dna</td><td>fa-dna</td><td>f471</td></tr>
 <tr><td><i class="fas fa-dog"></i> dog</td><td>fa-dog</td><td>f6d3</td></tr>
 <tr><td><i class="fas fa-dollar-sign"></i> dollar-sign</td><td>fa-dollar-sign</td><td>f155</td></tr>
 <tr><td><i class="fas fa-dolly"></i> dolly</td><td>fa-dolly</td><td>f472</td></tr>
 <tr><td><i class="fas fa-dolly-flatbed"></i> dolly-flatbed</td><td>fa-dolly-flatbed</td><td>f474</td></tr>
 <tr><td><i class="fas fa-donate"></i> donate</td><td>fa-donate</td><td>f4b9</td></tr>
 <tr><td><i class="fas fa-door-closed"></i> door-closed</td><td>fa-door-closed</td><td>f52a</td></tr>
 <tr><td><i class="fas fa-door-open"></i> door-open</td><td>fa-door-open</td><td>f52b</td></tr>
 <tr><td><i class="fas fa-dot-circle"></i> dot-circle</td><td>fa-dot-circle</td><td>f192</td></tr>
 <tr><td><i class="fas fa-dove"></i> dove</td><td>fa-dove</td><td>f4ba</td></tr>
 <tr><td><i class="fas fa-download"></i> download</td><td>fa-download</td><td>f019</td></tr>
 <tr><td><i class="fas fa-drafting-compass"></i> drafting-compass</td><td>fa-drafting-compass</td><td>f568</td></tr>
 <tr><td><i class="fas fa-dragon"></i> dragon</td><td>fa-dragon</td><td>f6d5</td></tr>
 <tr><td><i class="fas fa-draw-polygon"></i> draw-polygon</td><td>fa-draw-polygon</td><td>f5ee</td></tr>
 <tr><td><i class="fas fa-drum"></i> drum</td><td>fa-drum</td><td>f569</td></tr>
 <tr><td><i class="fas fa-drum-steelpan"></i> drum-steelpan</td><td>fa-drum-steelpan</td><td>f56a</td></tr>
 <tr><td><i class="fas fa-drumstick-bite"></i> drumstick-bite</td><td>fa-drumstick-bite</td><td>f6d7</td></tr>
 <tr><td><i class="fas fa-dumbbell"></i> dumbbell</td><td>fa-dumbbell</td><td>f44b</td></tr>
 <tr><td><i class="fas fa-dumpster"></i> dumpster</td><td>fa-dumpster</td><td>f793</td></tr>
 <tr><td><i class="fas fa-dumpster-fire"></i> dumpster-fire</td><td>fa-dumpster-fire</td><td>f794</td></tr>
 <tr><td><i class="fas fa-dungeon"></i> dungeon</td><td>fa-dungeon</td><td>f6d9</td></tr>
 <tr><td><i class="fas fa-edit"></i> edit</td><td>fa-edit</td><td>f044</td></tr>
 <tr><td><i class="fas fa-egg"></i> egg</td><td>fa-egg</td><td>f7fb</td></tr>
 <tr><td><i class="fas fa-eject"></i> eject</td><td>fa-eject</td><td>f052</td></tr>
 <tr><td><i class="fas fa-ellipsis-h"></i> ellipsis-h</td><td>fa-ellipsis-h</td><td>f141</td></tr>
 <tr><td><i class="fas fa-ellipsis-v"></i> ellipsis-v</td><td>fa-ellipsis-v</td><td>f142</td></tr>
 <tr><td><i class="fas fa-envelope"></i> envelope</td><td>fa-envelope</td><td>f0e0</td></tr>
 <tr><td><i class="fas fa-envelope-open"></i> envelope-open</td><td>fa-envelope-open</td><td>f2b6</td></tr>
 <tr><td><i class="fas fa-envelope-open-text"></i> envelope-open-text</td><td>fa-envelope-open-text</td><td>f658</td></tr>
 <tr><td><i class="fas fa-envelope-square"></i> envelope-square</td><td>fa-envelope-square</td><td>f199</td></tr>
 <tr><td><i class="fas fa-equals"></i> equals</td><td>fa-equals</td><td>f52c</td></tr>
 <tr><td><i class="fas fa-eraser"></i> eraser</td><td>fa-eraser</td><td>f12d</td></tr>
 <tr><td><i class="fas fa-ethernet"></i> ethernet</td><td>fa-ethernet</td><td>f796</td></tr>
 <tr><td><i class="fas fa-euro-sign"></i> euro-sign</td><td>fa-euro-sign</td><td>f153</td></tr>
 <tr><td><i class="fas fa-exchange-alt"></i> exchange-alt</td><td>fa-exchange-alt</td><td>f362</td></tr>
 <tr><td><i class="fas fa-exclamation"></i> exclamation</td><td>fa-exclamation</td><td>f12a</td></tr>
 <tr><td><i class="fas fa-exclamation-circle"></i> exclamation-circle</td><td>fa-exclamation-circle</td><td>f06a</td></tr>
 <tr><td><i class="fas fa-exclamation-triangle"></i> exclamation-triangle</td><td>fa-exclamation-triangle</td><td>f071</td></tr>
 <tr><td><i class="fas fa-expand"></i> expand</td><td>fa-expand</td><td>f065</td></tr>
 <tr><td><i class="fas fa-expand-arrows-alt"></i> expand-arrows-alt</td><td>fa-expand-arrows-alt</td><td>f31e</td></tr>
 <tr><td><i class="fas fa-external-link-alt"></i> external-link-alt</td><td>fa-external-link-alt</td><td>f35d</td></tr>
 <tr><td><i class="fas fa-external-link-square-alt"></i> external-link-square-alt</td><td>fa-external-link-square-alt</td><td>f360</td></tr>
 <tr><td><i class="fas fa-eye"></i> eye</td><td>fa-eye</td><td>f06e</td></tr>
 <tr><td><i class="fas fa-eye-dropper"></i> eye-dropper</td><td>fa-eye-dropper</td><td>f1fb</td></tr>
 <tr><td><i class="fas fa-eye-slash"></i> eye-slash</td><td>fa-eye-slash</td><td>f070</td></tr>
 <tr><td><i class="fas fa-fan"></i> fan</td><td>fa-fan</td><td>f863</td></tr>
 <tr><td><i class="fas fa-fast-backward"></i> fast-backward</td><td>fa-fast-backward</td><td>f049</td></tr>
 <tr><td><i class="fas fa-fast-forward"></i> fast-forward</td><td>fa-fast-forward</td><td>f050</td></tr>
 <tr><td><i class="fas fa-fax"></i> fax</td><td>fa-fax</td><td>f1ac</td></tr>
 <tr><td><i class="fas fa-feather"></i> feather</td><td>fa-feather</td><td>f52d</td></tr>
 <tr><td><i class="fas fa-feather-alt"></i> feather-alt</td><td>fa-feather-alt</td><td>f56b</td></tr>
 <tr><td><i class="fas fa-female"></i> female</td><td>fa-female</td><td>f182</td></tr>
 <tr><td><i class="fas fa-fighter-jet"></i> fighter-jet</td><td>fa-fighter-jet</td><td>f0fb</td></tr>
 <tr><td><i class="fas fa-file"></i> file</td><td>fa-file</td><td>f15b</td></tr>
 <tr><td><i class="fas fa-file-alt"></i> file-alt</td><td>fa-file-alt</td><td>f15c</td></tr>
 <tr><td><i class="fas fa-file-archive"></i> file-archive</td><td>fa-file-archive</td><td>f1c6</td></tr>
 <tr><td><i class="fas fa-file-audio"></i> file-audio</td><td>fa-file-audio</td><td>f1c7</td></tr>
 <tr><td><i class="fas fa-file-code"></i> file-code</td><td>fa-file-code</td><td>f1c9</td></tr>
 <tr><td><i class="fas fa-file-contract"></i> file-contract</td><td>fa-file-contract</td><td>f56c</td></tr>
 <tr><td><i class="fas fa-file-csv"></i> file-csv</td><td>fa-file-csv</td><td>f6dd</td></tr>
 <tr><td><i class="fas fa-file-download"></i> file-download</td><td>fa-file-download</td><td>f56d</td></tr>
 <tr><td><i class="fas fa-file-excel"></i> file-excel</td><td>fa-file-excel</td><td>f1c3</td></tr>
 <tr><td><i class="fas fa-file-export"></i> file-export</td><td>fa-file-export</td><td>f56e</td></tr>
 <tr><td><i class="fas fa-file-image"></i> file-image</td><td>fa-file-image</td><td>f1c5</td></tr>
 <tr><td><i class="fas fa-file-import"></i> file-import</td><td>fa-file-import</td><td>f56f</td></tr>
 <tr><td><i class="fas fa-file-invoice"></i> file-invoice</td><td>fa-file-invoice</td><td>f570</td></tr>
 <tr><td><i class="fas fa-file-invoice-dollar"></i> file-invoice-dollar</td><td>fa-file-invoice-dollar</td><td>f571</td></tr>
 <tr><td><i class="fas fa-file-medical"></i> file-medical</td><td>fa-file-medical</td><td>f477</td></tr>
 <tr><td><i class="fas fa-file-medical-alt"></i> file-medical-alt</td><td>fa-file-medical-alt</td><td>f478</td></tr>
 <tr><td><i class="fas fa-file-pdf"></i> file-pdf</td><td>fa-file-pdf</td><td>f1c1</td></tr>
 <tr><td><i class="fas fa-file-powerpoint"></i> file-powerpoint</td><td>fa-file-powerpoint</td><td>f1c4</td></tr>
 <tr><td><i class="fas fa-file-prescription"></i> file-prescription</td><td>fa-file-prescription</td><td>f572</td></tr>
 <tr><td><i class="fas fa-file-signature"></i> file-signature</td><td>fa-file-signature</td><td>f573</td></tr>
 <tr><td><i class="fas fa-file-upload"></i> file-upload</td><td>fa-file-upload</td><td>f574</td></tr>
 <tr><td><i class="fas fa-file-video"></i> file-video</td><td>fa-file-video</td><td>f1c8</td></tr>
 <tr><td><i class="fas fa-file-word"></i> file-word</td><td>fa-file-word</td><td>f1c2</td></tr>
 <tr><td><i class="fas fa-fill"></i> fill</td><td>fa-fill</td><td>f575</td></tr>
 <tr><td><i class="fas fa-fill-drip"></i> fill-drip</td><td>fa-fill-drip</td><td>f576</td></tr>
 <tr><td><i class="fas fa-film"></i> film</td><td>fa-film</td><td>f008</td></tr>
 <tr><td><i class="fas fa-filter"></i> filter</td><td>fa-filter</td><td>f0b0</td></tr>
 <tr><td><i class="fas fa-fingerprint"></i> fingerprint</td><td>fa-fingerprint</td><td>f577</td></tr>
 <tr><td><i class="fas fa-fire"></i> fire</td><td>fa-fire</td><td>f06d</td></tr>
 <tr><td><i class="fas fa-fire-alt"></i> fire-alt</td><td>fa-fire-alt</td><td>f7e4</td></tr>
 <tr><td><i class="fas fa-fire-extinguisher"></i> fire-extinguisher</td><td>fa-fire-extinguisher</td><td>f134</td></tr>
 <tr><td><i class="fas fa-first-aid"></i> first-aid</td><td>fa-first-aid</td><td>f479</td></tr>
 <tr><td><i class="fas fa-fish"></i> fish</td><td>fa-fish</td><td>f578</td></tr>
 <tr><td><i class="fas fa-fist-raised"></i> fist-raised</td><td>fa-fist-raised</td><td>f6de</td></tr>
 <tr><td><i class="fas fa-flag"></i> flag</td><td>fa-flag</td><td>f024</td></tr>
 <tr><td><i class="fas fa-flag-checkered"></i> flag-checkered</td><td>fa-flag-checkered</td><td>f11e</td></tr>
 <tr><td><i class="fas fa-flag-usa"></i> flag-usa</td><td>fa-flag-usa</td><td>f74d</td></tr>
 <tr><td><i class="fas fa-flask"></i> flask</td><td>fa-flask</td><td>f0c3</td></tr>
 <tr><td><i class="fas fa-flushed"></i> flushed</td><td>fa-flushed</td><td>f579</td></tr>
 <tr><td><i class="fas fa-folder"></i> folder</td><td>fa-folder</td><td>f07b</td></tr>
 <tr><td><i class="fas fa-folder-minus"></i> folder-minus</td><td>fa-folder-minus</td><td>f65d</td></tr>
 <tr><td><i class="fas fa-folder-open"></i> folder-open</td><td>fa-folder-open</td><td>f07c</td></tr>
 <tr><td><i class="fas fa-folder-plus"></i> folder-plus</td><td>fa-folder-plus</td><td>f65e</td></tr>
 <tr><td><i class="fas fa-font"></i> font</td><td>fa-font</td><td>f031</td></tr>
 <tr><td><i class="fas fa-football-ball"></i> football-ball</td><td>fa-football-ball</td><td>f44e</td></tr>
 <tr><td><i class="fas fa-forward"></i> forward</td><td>fa-forward</td><td>f04e</td></tr>
 <tr><td><i class="fas fa-frog"></i> frog</td><td>fa-frog</td><td>f52e</td></tr>
 <tr><td><i class="fas fa-frown"></i> frown</td><td>fa-frown</td><td>f119</td></tr>
 <tr><td><i class="fas fa-frown-open"></i> frown-open</td><td>fa-frown-open</td><td>f57a</td></tr>
 <tr><td><i class="fas fa-funnel-dollar"></i> funnel-dollar</td><td>fa-funnel-dollar</td><td>f662</td></tr>
 <tr><td><i class="fas fa-futbol"></i> futbol</td><td>fa-futbol</td><td>f1e3</td></tr>
 <tr><td><i class="fas fa-gamepad"></i> gamepad</td><td>fa-gamepad</td><td>f11b</td></tr>
 <tr><td><i class="fas fa-gas-pump"></i> gas-pump</td><td>fa-gas-pump</td><td>f52f</td></tr>
 <tr><td><i class="fas fa-gavel"></i> gavel</td><td>fa-gavel</td><td>f0e3</td></tr>
 <tr><td><i class="fas fa-gem"></i> gem</td><td>fa-gem</td><td>f3a5</td></tr>
 <tr><td><i class="fas fa-genderless"></i> genderless</td><td>fa-genderless</td><td>f22d</td></tr>
 <tr><td><i class="fas fa-ghost"></i> ghost</td><td>fa-ghost</td><td>f6e2</td></tr>
 <tr><td><i class="fas fa-gift"></i> gift</td><td>fa-gift</td><td>f06b</td></tr>
 <tr><td><i class="fas fa-gifts"></i> gifts</td><td>fa-gifts</td><td>f79c</td></tr>
 <tr><td><i class="fas fa-glass-cheers"></i> glass-cheers</td><td>fa-glass-cheers</td><td>f79f</td></tr>
 <tr><td><i class="fas fa-glass-martini"></i> glass-martini</td><td>fa-glass-martini</td><td>f000</td></tr>
 <tr><td><i class="fas fa-glass-martini-alt"></i> glass-martini-alt</td><td>fa-glass-martini-alt</td><td>f57b</td></tr>
 <tr><td><i class="fas fa-glass-whiskey"></i> glass-whiskey</td><td>fa-glass-whiskey</td><td>f7a0</td></tr>
 <tr><td><i class="fas fa-glasses"></i> glasses</td><td>fa-glasses</td><td>f530</td></tr>
 <tr><td><i class="fas fa-globe"></i> globe</td><td>fa-globe</td><td>f0ac</td></tr>
 <tr><td><i class="fas fa-globe-africa"></i> globe-africa</td><td>fa-globe-africa</td><td>f57c</td></tr>
 <tr><td><i class="fas fa-globe-americas"></i> globe-americas</td><td>fa-globe-americas</td><td>f57d</td></tr>
 <tr><td><i class="fas fa-globe-asia"></i> globe-asia</td><td>fa-globe-asia</td><td>f57e</td></tr>
 <tr><td><i class="fas fa-globe-europe"></i> globe-europe</td><td>fa-globe-europe</td><td>f7a2</td></tr>
 <tr><td><i class="fas fa-golf-ball"></i> golf-ball</td><td>fa-golf-ball</td><td>f450</td></tr>
 <tr><td><i class="fas fa-gopuram"></i> gopuram</td><td>fa-gopuram</td><td>f664</td></tr>
 <tr><td><i class="fas fa-graduation-cap"></i> graduation-cap</td><td>fa-graduation-cap</td><td>f19d</td></tr>
 <tr><td><i class="fas fa-greater-than"></i> greater-than</td><td>fa-greater-than</td><td>f531</td></tr>
 <tr><td><i class="fas fa-greater-than-equal"></i> greater-than-equal</td><td>fa-greater-than-equal</td><td>f532</td></tr>
 <tr><td><i class="fas fa-grimace"></i> grimace</td><td>fa-grimace</td><td>f57f</td></tr>
 <tr><td><i class="fas fa-grin"></i> grin</td><td>fa-grin</td><td>f580</td></tr>
 <tr><td><i class="fas fa-grin-alt"></i> grin-alt</td><td>fa-grin-alt</td><td>f581</td></tr>
 <tr><td><i class="fas fa-grin-beam"></i> grin-beam</td><td>fa-grin-beam</td><td>f582</td></tr>
 <tr><td><i class="fas fa-grin-beam-sweat"></i> grin-beam-sweat</td><td>fa-grin-beam-sweat</td><td>f583</td></tr>
 <tr><td><i class="fas fa-grin-hearts"></i> grin-hearts</td><td>fa-grin-hearts</td><td>f584</td></tr>
 <tr><td><i class="fas fa-grin-squint"></i> grin-squint</td><td>fa-grin-squint</td><td>f585</td></tr>
 <tr><td><i class="fas fa-grin-squint-tears"></i> grin-squint-tears</td><td>fa-grin-squint-tears</td><td>f586</td></tr>
 <tr><td><i class="fas fa-grin-stars"></i> grin-stars</td><td>fa-grin-stars</td><td>f587</td></tr>
 <tr><td><i class="fas fa-grin-tears"></i> grin-tears</td><td>fa-grin-tears</td><td>f588</td></tr>
 <tr><td><i class="fas fa-grin-tongue"></i> grin-tongue</td><td>fa-grin-tongue</td><td>f589</td></tr>
 <tr><td><i class="fas fa-grin-tongue-squint"></i> grin-tongue-squint</td><td>fa-grin-tongue-squint</td><td>f58a</td></tr>
 <tr><td><i class="fas fa-grin-tongue-wink"></i> grin-tongue-wink</td><td>fa-grin-tongue-wink</td><td>f58b</td></tr>
 <tr><td><i class="fas fa-grin-wink"></i> grin-wink</td><td>fa-grin-wink</td><td>f58c</td></tr>
 <tr><td><i class="fas fa-grip-horizontal"></i> grip-horizontal</td><td>fa-grip-horizontal</td><td>f58d</td></tr>
 <tr><td><i class="fas fa-grip-lines"></i> grip-lines</td><td>fa-grip-lines</td><td>f7a4</td></tr>
 <tr><td><i class="fas fa-grip-lines-vertical"></i> grip-lines-vertical</td><td>fa-grip-lines-vertical</td><td>f7a5</td></tr>
 <tr><td><i class="fas fa-grip-vertical"></i> grip-vertical</td><td>fa-grip-vertical</td><td>f58e</td></tr>
 <tr><td><i class="fas fa-guitar"></i> guitar</td><td>fa-guitar</td><td>f7a6</td></tr>
 <tr><td><i class="fas fa-h-square"></i> h-square</td><td>fa-h-square</td><td>f0fd</td></tr>
 <tr><td><i class="fas fa-hamburger"></i> hamburger</td><td>fa-hamburger</td><td>f805</td></tr>
 <tr><td><i class="fas fa-hammer"></i> hammer</td><td>fa-hammer</td><td>f6e3</td></tr>
 <tr><td><i class="fas fa-hamsa"></i> hamsa</td><td>fa-hamsa</td><td>f665</td></tr>
 <tr><td><i class="fas fa-hand-holding"></i> hand-holding</td><td>fa-hand-holding</td><td>f4bd</td></tr>
 <tr><td><i class="fas fa-hand-holding-heart"></i> hand-holding-heart</td><td>fa-hand-holding-heart</td><td>f4be</td></tr>
 <tr><td><i class="fas fa-hand-holding-usd"></i> hand-holding-usd</td><td>fa-hand-holding-usd</td><td>f4c0</td></tr>
 <tr><td><i class="fas fa-hand-lizard"></i> hand-lizard</td><td>fa-hand-lizard</td><td>f258</td></tr>
 <tr><td><i class="fas fa-hand-middle-finger"></i> hand-middle-finger</td><td>fa-hand-middle-finger</td><td>f806</td></tr>
 <tr><td><i class="fas fa-hand-paper"></i> hand-paper</td><td>fa-hand-paper</td><td>f256</td></tr>
 <tr><td><i class="fas fa-hand-peace"></i> hand-peace</td><td>fa-hand-peace</td><td>f25b</td></tr>
 <tr><td><i class="fas fa-hand-point-down"></i> hand-point-down</td><td>fa-hand-point-down</td><td>f0a7</td></tr>
 <tr><td><i class="fas fa-hand-point-left"></i> hand-point-left</td><td>fa-hand-point-left</td><td>f0a5</td></tr>
 <tr><td><i class="fas fa-hand-point-right"></i> hand-point-right</td><td>fa-hand-point-right</td><td>f0a4</td></tr>
 <tr><td><i class="fas fa-hand-point-up"></i> hand-point-up</td><td>fa-hand-point-up</td><td>f0a6</td></tr>
 <tr><td><i class="fas fa-hand-pointer"></i> hand-pointer</td><td>fa-hand-pointer</td><td>f25a</td></tr>
 <tr><td><i class="fas fa-hand-rock"></i> hand-rock</td><td>fa-hand-rock</td><td>f255</td></tr>
 <tr><td><i class="fas fa-hand-scissors"></i> hand-scissors</td><td>fa-hand-scissors</td><td>f257</td></tr>
 <tr><td><i class="fas fa-hand-spock"></i> hand-spock</td><td>fa-hand-spock</td><td>f259</td></tr>
 <tr><td><i class="fas fa-hands"></i> hands</td><td>fa-hands</td><td>f4c2</td></tr>
 <tr><td><i class="fas fa-hands-helping"></i> hands-helping</td><td>fa-hands-helping</td><td>f4c4</td></tr>
 <tr><td><i class="fas fa-handshake"></i> handshake</td><td>fa-handshake</td><td>f2b5</td></tr>
 <tr><td><i class="fas fa-hanukiah"></i> hanukiah</td><td>fa-hanukiah</td><td>f6e6</td></tr>
 <tr><td><i class="fas fa-hard-hat"></i> hard-hat</td><td>fa-hard-hat</td><td>f807</td></tr>
 <tr><td><i class="fas fa-hashtag"></i> hashtag</td><td>fa-hashtag</td><td>f292</td></tr>
 <tr><td><i class="fas fa-hat-wizard"></i> hat-wizard</td><td>fa-hat-wizard</td><td>f6e8</td></tr>
 <tr><td><i class="fas fa-haykal"></i> haykal</td><td>fa-haykal</td><td>f666</td></tr>
 <tr><td><i class="fas fa-hdd"></i> hdd</td><td>fa-hdd</td><td>f0a0</td></tr>
 <tr><td><i class="fas fa-heading"></i> heading</td><td>fa-heading</td><td>f1dc</td></tr>
 <tr><td><i class="fas fa-headphones"></i> headphones</td><td>fa-headphones</td><td>f025</td></tr>
 <tr><td><i class="fas fa-headphones-alt"></i> headphones-alt</td><td>fa-headphones-alt</td><td>f58f</td></tr>
 <tr><td><i class="fas fa-headset"></i> headset</td><td>fa-headset</td><td>f590</td></tr>
 <tr><td><i class="fas fa-heart"></i> heart</td><td>fa-heart</td><td>f004</td></tr>
 <tr><td><i class="fas fa-heart-broken"></i> heart-broken</td><td>fa-heart-broken</td><td>f7a9</td></tr>
 <tr><td><i class="fas fa-heartbeat"></i> heartbeat</td><td>fa-heartbeat</td><td>f21e</td></tr>
 <tr><td><i class="fas fa-helicopter"></i> helicopter</td><td>fa-helicopter</td><td>f533</td></tr>
 <tr><td><i class="fas fa-highlighter"></i> highlighter</td><td>fa-highlighter</td><td>f591</td></tr>
 <tr><td><i class="fas fa-hiking"></i> hiking</td><td>fa-hiking</td><td>f6ec</td></tr>
 <tr><td><i class="fas fa-hippo"></i> hippo</td><td>fa-hippo</td><td>f6ed</td></tr>
 <tr><td><i class="fas fa-history"></i> history</td><td>fa-history</td><td>f1da</td></tr>
 <tr><td><i class="fas fa-hockey-puck"></i> hockey-puck</td><td>fa-hockey-puck</td><td>f453</td></tr>
 <tr><td><i class="fas fa-holly-berry"></i> holly-berry</td><td>fa-holly-berry</td><td>f7aa</td></tr>
 <tr><td><i class="fas fa-home"></i> home</td><td>fa-home</td><td>f015</td></tr>
 <tr><td><i class="fas fa-horse"></i> horse</td><td>fa-horse</td><td>f6f0</td></tr>
 <tr><td><i class="fas fa-horse-head"></i> horse-head</td><td>fa-horse-head</td><td>f7ab</td></tr>
 <tr><td><i class="fas fa-hospital"></i> hospital</td><td>fa-hospital</td><td>f0f8</td></tr>
 <tr><td><i class="fas fa-hospital-alt"></i> hospital-alt</td><td>fa-hospital-alt</td><td>f47d</td></tr>
 <tr><td><i class="fas fa-hospital-symbol"></i> hospital-symbol</td><td>fa-hospital-symbol</td><td>f47e</td></tr>
 <tr><td><i class="fas fa-hot-tub"></i> hot-tub</td><td>fa-hot-tub</td><td>f593</td></tr>
 <tr><td><i class="fas fa-hotdog"></i> hotdog</td><td>fa-hotdog</td><td>f80f</td></tr>
 <tr><td><i class="fas fa-hotel"></i> hotel</td><td>fa-hotel</td><td>f594</td></tr>
 <tr><td><i class="fas fa-hourglass"></i> hourglass</td><td>fa-hourglass</td><td>f254</td></tr>
 <tr><td><i class="fas fa-hourglass-end"></i> hourglass-end</td><td>fa-hourglass-end</td><td>f253</td></tr>
 <tr><td><i class="fas fa-hourglass-half"></i> hourglass-half</td><td>fa-hourglass-half</td><td>f252</td></tr>
 <tr><td><i class="fas fa-hourglass-start"></i> hourglass-start</td><td>fa-hourglass-start</td><td>f251</td></tr>
 <tr><td><i class="fas fa-house-damage"></i> house-damage</td><td>fa-house-damage</td><td>f6f1</td></tr>
 <tr><td><i class="fas fa-hryvnia"></i> hryvnia</td><td>fa-hryvnia</td><td>f6f2</td></tr>
 <tr><td><i class="fas fa-i-cursor"></i> i-cursor</td><td>fa-i-cursor</td><td>f246</td></tr>
 <tr><td><i class="fas fa-ice-cream"></i> ice-cream</td><td>fa-ice-cream</td><td>f810</td></tr>
 <tr><td><i class="fas fa-icicles"></i> icicles</td><td>fa-icicles</td><td>f7ad</td></tr>
 <tr><td><i class="fas fa-icons"></i> icons</td><td>fa-icons</td><td>f86d</td></tr>
 <tr><td><i class="fas fa-id-badge"></i> id-badge</td><td>fa-id-badge</td><td>f2c1</td></tr>
 <tr><td><i class="fas fa-id-card"></i> id-card</td><td>fa-id-card</td><td>f2c2</td></tr>
 <tr><td><i class="fas fa-id-card-alt"></i> id-card-alt</td><td>fa-id-card-alt</td><td>f47f</td></tr>
 <tr><td><i class="fas fa-igloo"></i> igloo</td><td>fa-igloo</td><td>f7ae</td></tr>
 <tr><td><i class="fas fa-image"></i> image</td><td>fa-image</td><td>f03e</td></tr>
 <tr><td><i class="fas fa-images"></i> images</td><td>fa-images</td><td>f302</td></tr>
 <tr><td><i class="fas fa-inbox"></i> inbox</td><td>fa-inbox</td><td>f01c</td></tr>
 <tr><td><i class="fas fa-indent"></i> indent</td><td>fa-indent</td><td>f03c</td></tr>
 <tr><td><i class="fas fa-industry"></i> industry</td><td>fa-industry</td><td>f275</td></tr>
 <tr><td><i class="fas fa-infinity"></i> infinity</td><td>fa-infinity</td><td>f534</td></tr>
 <tr><td><i class="fas fa-info"></i> info</td><td>fa-info</td><td>f129</td></tr>
 <tr><td><i class="fas fa-info-circle"></i> info-circle</td><td>fa-info-circle</td><td>f05a</td></tr>
 <tr><td><i class="fas fa-italic"></i> italic</td><td>fa-italic</td><td>f033</td></tr>
 <tr><td><i class="fas fa-jedi"></i> jedi</td><td>fa-jedi</td><td>f669</td></tr>
 <tr><td><i class="fas fa-joint"></i> joint</td><td>fa-joint</td><td>f595</td></tr>
 <tr><td><i class="fas fa-journal-whills"></i> journal-whills</td><td>fa-journal-whills</td><td>f66a</td></tr>
 <tr><td><i class="fas fa-kaaba"></i> kaaba</td><td>fa-kaaba</td><td>f66b</td></tr>
 <tr><td><i class="fas fa-key"></i> key</td><td>fa-key</td><td>f084</td></tr>
 <tr><td><i class="fas fa-keyboard"></i> keyboard</td><td>fa-keyboard</td><td>f11c</td></tr>
 <tr><td><i class="fas fa-khanda"></i> khanda</td><td>fa-khanda</td><td>f66d</td></tr>
 <tr><td><i class="fas fa-kiss"></i> kiss</td><td>fa-kiss</td><td>f596</td></tr>
 <tr><td><i class="fas fa-kiss-beam"></i> kiss-beam</td><td>fa-kiss-beam</td><td>f597</td></tr>
 <tr><td><i class="fas fa-kiss-wink-heart"></i> kiss-wink-heart</td><td>fa-kiss-wink-heart</td><td>f598</td></tr>
 <tr><td><i class="fas fa-kiwi-bird"></i> kiwi-bird</td><td>fa-kiwi-bird</td><td>f535</td></tr>
 <tr><td><i class="fas fa-landmark"></i> landmark</td><td>fa-landmark</td><td>f66f</td></tr>
 <tr><td><i class="fas fa-language"></i> language</td><td>fa-language</td><td>f1ab</td></tr>
 <tr><td><i class="fas fa-laptop"></i> laptop</td><td>fa-laptop</td><td>f109</td></tr>
 <tr><td><i class="fas fa-laptop-code"></i> laptop-code</td><td>fa-laptop-code</td><td>f5fc</td></tr>
 <tr><td><i class="fas fa-laptop-medical"></i> laptop-medical</td><td>fa-laptop-medical</td><td>f812</td></tr>
 <tr><td><i class="fas fa-laugh"></i> laugh</td><td>fa-laugh</td><td>f599</td></tr>
 <tr><td><i class="fas fa-laugh-beam"></i> laugh-beam</td><td>fa-laugh-beam</td><td>f59a</td></tr>
 <tr><td><i class="fas fa-laugh-squint"></i> laugh-squint</td><td>fa-laugh-squint</td><td>f59b</td></tr>
 <tr><td><i class="fas fa-laugh-wink"></i> laugh-wink</td><td>fa-laugh-wink</td><td>f59c</td></tr>
 <tr><td><i class="fas fa-layer-group"></i> layer-group</td><td>fa-layer-group</td><td>f5fd</td></tr>
 <tr><td><i class="fas fa-leaf"></i> leaf</td><td>fa-leaf</td><td>f06c</td></tr>
 <tr><td><i class="fas fa-lemon"></i> lemon</td><td>fa-lemon</td><td>f094</td></tr>
 <tr><td><i class="fas fa-less-than"></i> less-than</td><td>fa-less-than</td><td>f536</td></tr>
 <tr><td><i class="fas fa-less-than-equal"></i> less-than-equal</td><td>fa-less-than-equal</td><td>f537</td></tr>
 <tr><td><i class="fas fa-level-down-alt"></i> level-down-alt</td><td>fa-level-down-alt</td><td>f3be</td></tr>
 <tr><td><i class="fas fa-level-up-alt"></i> level-up-alt</td><td>fa-level-up-alt</td><td>f3bf</td></tr>
 <tr><td><i class="fas fa-life-ring"></i> life-ring</td><td>fa-life-ring</td><td>f1cd</td></tr>
 <tr><td><i class="fas fa-lightbulb"></i> lightbulb</td><td>fa-lightbulb</td><td>f0eb</td></tr>
 <tr><td><i class="fas fa-link"></i> link</td><td>fa-link</td><td>f0c1</td></tr>
 <tr><td><i class="fas fa-lira-sign"></i> lira-sign</td><td>fa-lira-sign</td><td>f195</td></tr>
 <tr><td><i class="fas fa-list"></i> list</td><td>fa-list</td><td>f03a</td></tr>
 <tr><td><i class="fas fa-list-alt"></i> list-alt</td><td>fa-list-alt</td><td>f022</td></tr>
 <tr><td><i class="fas fa-list-ol"></i> list-ol</td><td>fa-list-ol</td><td>f0cb</td></tr>
 <tr><td><i class="fas fa-list-ul"></i> list-ul</td><td>fa-list-ul</td><td>f0ca</td></tr>
 <tr><td><i class="fas fa-location-arrow"></i> location-arrow</td><td>fa-location-arrow</td><td>f124</td></tr>
 <tr><td><i class="fas fa-lock"></i> lock</td><td>fa-lock</td><td>f023</td></tr>
 <tr><td><i class="fas fa-lock-open"></i> lock-open</td><td>fa-lock-open</td><td>f3c1</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-down"></i> long-arrow-alt-down</td><td>fa-long-arrow-alt-down</td><td>f309</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-left"></i> long-arrow-alt-left</td><td>fa-long-arrow-alt-left</td><td>f30a</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-right"></i> long-arrow-alt-right</td><td>fa-long-arrow-alt-right</td><td>f30b</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-up"></i> long-arrow-alt-up</td><td>fa-long-arrow-alt-up</td><td>f30c</td></tr>
 <tr><td><i class="fas fa-low-vision"></i> low-vision</td><td>fa-low-vision</td><td>f2a8</td></tr>
 <tr><td><i class="fas fa-luggage-cart"></i> luggage-cart</td><td>fa-luggage-cart</td><td>f59d</td></tr>
 <tr><td><i class="fas fa-magic"></i> magic</td><td>fa-magic</td><td>f0d0</td></tr>
 <tr><td><i class="fas fa-magnet"></i> magnet</td><td>fa-magnet</td><td>f076</td></tr>
 <tr><td><i class="fas fa-mail-bulk"></i> mail-bulk</td><td>fa-mail-bulk</td><td>f674</td></tr>
 <tr><td><i class="fas fa-male"></i> male</td><td>fa-male</td><td>f183</td></tr>
 <tr><td><i class="fas fa-map"></i> map</td><td>fa-map</td><td>f279</td></tr>
 <tr><td><i class="fas fa-map-marked"></i> map-marked</td><td>fa-map-marked</td><td>f59f</td></tr>
 <tr><td><i class="fas fa-map-marked-alt"></i> map-marked-alt</td><td>fa-map-marked-alt</td><td>f5a0</td></tr>
 <tr><td><i class="fas fa-map-marker"></i> map-marker</td><td>fa-map-marker</td><td>f041</td></tr>
 <tr><td><i class="fas fa-map-marker-alt"></i> map-marker-alt</td><td>fa-map-marker-alt</td><td>f3c5</td></tr>
 <tr><td><i class="fas fa-map-pin"></i> map-pin</td><td>fa-map-pin</td><td>f276</td></tr>
 <tr><td><i class="fas fa-map-signs"></i> map-signs</td><td>fa-map-signs</td><td>f277</td></tr>
 <tr><td><i class="fas fa-marker"></i> marker</td><td>fa-marker</td><td>f5a1</td></tr>
 <tr><td><i class="fas fa-mars"></i> mars</td><td>fa-mars</td><td>f222</td></tr>
 <tr><td><i class="fas fa-mars-double"></i> mars-double</td><td>fa-mars-double</td><td>f227</td></tr>
 <tr><td><i class="fas fa-mars-stroke"></i> mars-stroke</td><td>fa-mars-stroke</td><td>f229</td></tr>
 <tr><td><i class="fas fa-mars-stroke-h"></i> mars-stroke-h</td><td>fa-mars-stroke-h</td><td>f22b</td></tr>
 <tr><td><i class="fas fa-mars-stroke-v"></i> mars-stroke-v</td><td>fa-mars-stroke-v</td><td>f22a</td></tr>
 <tr><td><i class="fas fa-mask"></i> mask</td><td>fa-mask</td><td>f6fa</td></tr>
 <tr><td><i class="fas fa-medal"></i> medal</td><td>fa-medal</td><td>f5a2</td></tr>
 <tr><td><i class="fas fa-medkit"></i> medkit</td><td>fa-medkit</td><td>f0fa</td></tr>
 <tr><td><i class="fas fa-meh"></i> meh</td><td>fa-meh</td><td>f11a</td></tr>
 <tr><td><i class="fas fa-meh-blank"></i> meh-blank</td><td>fa-meh-blank</td><td>f5a4</td></tr>
 <tr><td><i class="fas fa-meh-rolling-eyes"></i> meh-rolling-eyes</td><td>fa-meh-rolling-eyes</td><td>f5a5</td></tr>
 <tr><td><i class="fas fa-memory"></i> memory</td><td>fa-memory</td><td>f538</td></tr>
 <tr><td><i class="fas fa-menorah"></i> menorah</td><td>fa-menorah</td><td>f676</td></tr>
 <tr><td><i class="fas fa-mercury"></i> mercury</td><td>fa-mercury</td><td>f223</td></tr>
 <tr><td><i class="fas fa-meteor"></i> meteor</td><td>fa-meteor</td><td>f753</td></tr>
 <tr><td><i class="fas fa-microchip"></i> microchip</td><td>fa-microchip</td><td>f2db</td></tr>
 <tr><td><i class="fas fa-microphone"></i> microphone</td><td>fa-microphone</td><td>f130</td></tr>
 <tr><td><i class="fas fa-microphone-alt"></i> microphone-alt</td><td>fa-microphone-alt</td><td>f3c9</td></tr>
 <tr><td><i class="fas fa-microphone-alt-slash"></i> microphone-alt-slash</td><td>fa-microphone-alt-slash</td><td>f539</td></tr>
 <tr><td><i class="fas fa-microphone-slash"></i> microphone-slash</td><td>fa-microphone-slash</td><td>f131</td></tr>
 <tr><td><i class="fas fa-microscope"></i> microscope</td><td>fa-microscope</td><td>f610</td></tr>
 <tr><td><i class="fas fa-minus"></i> minus</td><td>fa-minus</td><td>f068</td></tr>
 <tr><td><i class="fas fa-minus-circle"></i> minus-circle</td><td>fa-minus-circle</td><td>f056</td></tr>
 <tr><td><i class="fas fa-minus-square"></i> minus-square</td><td>fa-minus-square</td><td>f146</td></tr>
 <tr><td><i class="fas fa-mitten"></i> mitten</td><td>fa-mitten</td><td>f7b5</td></tr>
 <tr><td><i class="fas fa-mobile"></i> mobile</td><td>fa-mobile</td><td>f10b</td></tr>
 <tr><td><i class="fas fa-mobile-alt"></i> mobile-alt</td><td>fa-mobile-alt</td><td>f3cd</td></tr>
 <tr><td><i class="fas fa-money-bill"></i> money-bill</td><td>fa-money-bill</td><td>f0d6</td></tr>
 <tr><td><i class="fas fa-money-bill-alt"></i> money-bill-alt</td><td>fa-money-bill-alt</td><td>f3d1</td></tr>
 <tr><td><i class="fas fa-money-bill-wave"></i> money-bill-wave</td><td>fa-money-bill-wave</td><td>f53a</td></tr>
 <tr><td><i class="fas fa-money-bill-wave-alt"></i> money-bill-wave-alt</td><td>fa-money-bill-wave-alt</td><td>f53b</td></tr>
 <tr><td><i class="fas fa-money-check"></i> money-check</td><td>fa-money-check</td><td>f53c</td></tr>
 <tr><td><i class="fas fa-money-check-alt"></i> money-check-alt</td><td>fa-money-check-alt</td><td>f53d</td></tr>
 <tr><td><i class="fas fa-monument"></i> monument</td><td>fa-monument</td><td>f5a6</td></tr>
 <tr><td><i class="fas fa-moon"></i> moon</td><td>fa-moon</td><td>f186</td></tr>
 <tr><td><i class="fas fa-mortar-pestle"></i> mortar-pestle</td><td>fa-mortar-pestle</td><td>f5a7</td></tr>
 <tr><td><i class="fas fa-mosque"></i> mosque</td><td>fa-mosque</td><td>f678</td></tr>
 <tr><td><i class="fas fa-motorcycle"></i> motorcycle</td><td>fa-motorcycle</td><td>f21c</td></tr>
 <tr><td><i class="fas fa-mountain"></i> mountain</td><td>fa-mountain</td><td>f6fc</td></tr>
 <tr><td><i class="fas fa-mouse-pointer"></i> mouse-pointer</td><td>fa-mouse-pointer</td><td>f245</td></tr>
 <tr><td><i class="fas fa-mug-hot"></i> mug-hot</td><td>fa-mug-hot</td><td>f7b6</td></tr>
 <tr><td><i class="fas fa-music"></i> music</td><td>fa-music</td><td>f001</td></tr>
 <tr><td><i class="fas fa-network-wired"></i> network-wired</td><td>fa-network-wired</td><td>f6ff</td></tr>
 <tr><td><i class="fas fa-neuter"></i> neuter</td><td>fa-neuter</td><td>f22c</td></tr>
 <tr><td><i class="fas fa-newspaper"></i> newspaper</td><td>fa-newspaper</td><td>f1ea</td></tr>
 <tr><td><i class="fas fa-not-equal"></i> not-equal</td><td>fa-not-equal</td><td>f53e</td></tr>
 <tr><td><i class="fas fa-notes-medical"></i> notes-medical</td><td>fa-notes-medical</td><td>f481</td></tr>
 <tr><td><i class="fas fa-object-group"></i> object-group</td><td>fa-object-group</td><td>f247</td></tr>
 <tr><td><i class="fas fa-object-ungroup"></i> object-ungroup</td><td>fa-object-ungroup</td><td>f248</td></tr>
 <tr><td><i class="fas fa-oil-can"></i> oil-can</td><td>fa-oil-can</td><td>f613</td></tr>
 <tr><td><i class="fas fa-om"></i> om</td><td>fa-om</td><td>f679</td></tr>
 <tr><td><i class="fas fa-otter"></i> otter</td><td>fa-otter</td><td>f700</td></tr>
 <tr><td><i class="fas fa-outdent"></i> outdent</td><td>fa-outdent</td><td>f03b</td></tr>
 <tr><td><i class="fas fa-pager"></i> pager</td><td>fa-pager</td><td>f815</td></tr>
 <tr><td><i class="fas fa-paint-brush"></i> paint-brush</td><td>fa-paint-brush</td><td>f1fc</td></tr>
 <tr><td><i class="fas fa-paint-roller"></i> paint-roller</td><td>fa-paint-roller</td><td>f5aa</td></tr>
 <tr><td><i class="fas fa-palette"></i> palette</td><td>fa-palette</td><td>f53f</td></tr>
 <tr><td><i class="fas fa-pallet"></i> pallet</td><td>fa-pallet</td><td>f482</td></tr>
 <tr><td><i class="fas fa-paper-plane"></i> paper-plane</td><td>fa-paper-plane</td><td>f1d8</td></tr>
 <tr><td><i class="fas fa-paperclip"></i> paperclip</td><td>fa-paperclip</td><td>f0c6</td></tr>
 <tr><td><i class="fas fa-parachute-box"></i> parachute-box</td><td>fa-parachute-box</td><td>f4cd</td></tr>
 <tr><td><i class="fas fa-paragraph"></i> paragraph</td><td>fa-paragraph</td><td>f1dd</td></tr>
 <tr><td><i class="fas fa-parking"></i> parking</td><td>fa-parking</td><td>f540</td></tr>
 <tr><td><i class="fas fa-passport"></i> passport</td><td>fa-passport</td><td>f5ab</td></tr>
 <tr><td><i class="fas fa-pastafarianism"></i> pastafarianism</td><td>fa-pastafarianism</td><td>f67b</td></tr>
 <tr><td><i class="fas fa-paste"></i> paste</td><td>fa-paste</td><td>f0ea</td></tr>
 <tr><td><i class="fas fa-pause"></i> pause</td><td>fa-pause</td><td>f04c</td></tr>
 <tr><td><i class="fas fa-pause-circle"></i> pause-circle</td><td>fa-pause-circle</td><td>f28b</td></tr>
 <tr><td><i class="fas fa-paw"></i> paw</td><td>fa-paw</td><td>f1b0</td></tr>
 <tr><td><i class="fas fa-peace"></i> peace</td><td>fa-peace</td><td>f67c</td></tr>
 <tr><td><i class="fas fa-pen"></i> pen</td><td>fa-pen</td><td>f304</td></tr>
 <tr><td><i class="fas fa-pen-alt"></i> pen-alt</td><td>fa-pen-alt</td><td>f305</td></tr>
 <tr><td><i class="fas fa-pen-fancy"></i> pen-fancy</td><td>fa-pen-fancy</td><td>f5ac</td></tr>
 <tr><td><i class="fas fa-pen-nib"></i> pen-nib</td><td>fa-pen-nib</td><td>f5ad</td></tr>
 <tr><td><i class="fas fa-pen-square"></i> pen-square</td><td>fa-pen-square</td><td>f14b</td></tr>
 <tr><td><i class="fas fa-pencil-alt"></i> pencil-alt</td><td>fa-pencil-alt</td><td>f303</td></tr>
 <tr><td><i class="fas fa-pencil-ruler"></i> pencil-ruler</td><td>fa-pencil-ruler</td><td>f5ae</td></tr>
 <tr><td><i class="fas fa-people-carry"></i> people-carry</td><td>fa-people-carry</td><td>f4ce</td></tr>
 <tr><td><i class="fas fa-pepper-hot"></i> pepper-hot</td><td>fa-pepper-hot</td><td>f816</td></tr>
 <tr><td><i class="fas fa-percent"></i> percent</td><td>fa-percent</td><td>f295</td></tr>
 <tr><td><i class="fas fa-percentage"></i> percentage</td><td>fa-percentage</td><td>f541</td></tr>
 <tr><td><i class="fas fa-person-booth"></i> person-booth</td><td>fa-person-booth</td><td>f756</td></tr>
 <tr><td><i class="fas fa-phone"></i> phone</td><td>fa-phone</td><td>f095</td></tr>
 <tr><td><i class="fas fa-phone-alt"></i> phone-alt</td><td>fa-phone-alt</td><td>f879</td></tr>
 <tr><td><i class="fas fa-phone-slash"></i> phone-slash</td><td>fa-phone-slash</td><td>f3dd</td></tr>
 <tr><td><i class="fas fa-phone-square"></i> phone-square</td><td>fa-phone-square</td><td>f098</td></tr>
 <tr><td><i class="fas fa-phone-square-alt"></i> phone-square-alt</td><td>fa-phone-square-alt</td><td>f87b</td></tr>
 <tr><td><i class="fas fa-phone-volume"></i> phone-volume</td><td>fa-phone-volume</td><td>f2a0</td></tr>
 <tr><td><i class="fas fa-photo-video"></i> photo-video</td><td>fa-photo-video</td><td>f87c</td></tr>
 <tr><td><i class="fas fa-piggy-bank"></i> piggy-bank</td><td>fa-piggy-bank</td><td>f4d3</td></tr>
 <tr><td><i class="fas fa-pills"></i> pills</td><td>fa-pills</td><td>f484</td></tr>
 <tr><td><i class="fas fa-pizza-slice"></i> pizza-slice</td><td>fa-pizza-slice</td><td>f818</td></tr>
 <tr><td><i class="fas fa-place-of-worship"></i> place-of-worship</td><td>fa-place-of-worship</td><td>f67f</td></tr>
 <tr><td><i class="fas fa-plane"></i> plane</td><td>fa-plane</td><td>f072</td></tr>
 <tr><td><i class="fas fa-plane-arrival"></i> plane-arrival</td><td>fa-plane-arrival</td><td>f5af</td></tr>
 <tr><td><i class="fas fa-plane-departure"></i> plane-departure</td><td>fa-plane-departure</td><td>f5b0</td></tr>
 <tr><td><i class="fas fa-play"></i> play</td><td>fa-play</td><td>f04b</td></tr>
 <tr><td><i class="fas fa-play-circle"></i> play-circle</td><td>fa-play-circle</td><td>f144</td></tr>
 <tr><td><i class="fas fa-plug"></i> plug</td><td>fa-plug</td><td>f1e6</td></tr>
 <tr><td><i class="fas fa-plus"></i> plus</td><td>fa-plus</td><td>f067</td></tr>
 <tr><td><i class="fas fa-plus-circle"></i> plus-circle</td><td>fa-plus-circle</td><td>f055</td></tr>
 <tr><td><i class="fas fa-plus-square"></i> plus-square</td><td>fa-plus-square</td><td>f0fe</td></tr>
 <tr><td><i class="fas fa-podcast"></i> podcast</td><td>fa-podcast</td><td>f2ce</td></tr>
 <tr><td><i class="fas fa-poll"></i> poll</td><td>fa-poll</td><td>f681</td></tr>
 <tr><td><i class="fas fa-poll-h"></i> poll-h</td><td>fa-poll-h</td><td>f682</td></tr>
 <tr><td><i class="fas fa-poo"></i> poo</td><td>fa-poo</td><td>f2fe</td></tr>
 <tr><td><i class="fas fa-poo-storm"></i> poo-storm</td><td>fa-poo-storm</td><td>f75a</td></tr>
 <tr><td><i class="fas fa-poop"></i> poop</td><td>fa-poop</td><td>f619</td></tr>
 <tr><td><i class="fas fa-portrait"></i> portrait</td><td>fa-portrait</td><td>f3e0</td></tr>
 <tr><td><i class="fas fa-pound-sign"></i> pound-sign</td><td>fa-pound-sign</td><td>f154</td></tr>
 <tr><td><i class="fas fa-power-off"></i> power-off</td><td>fa-power-off</td><td>f011</td></tr>
 <tr><td><i class="fas fa-pray"></i> pray</td><td>fa-pray</td><td>f683</td></tr>
 <tr><td><i class="fas fa-praying-hands"></i> praying-hands</td><td>fa-praying-hands</td><td>f684</td></tr>
 <tr><td><i class="fas fa-prescription"></i> prescription</td><td>fa-prescription</td><td>f5b1</td></tr>
 <tr><td><i class="fas fa-prescription-bottle"></i> prescription-bottle</td><td>fa-prescription-bottle</td><td>f485</td></tr>
 <tr><td><i class="fas fa-prescription-bottle-alt"></i> prescription-bottle-alt</td><td>fa-prescription-bottle-alt</td><td>f486</td></tr>
 <tr><td><i class="fas fa-print"></i> print</td><td>fa-print</td><td>f02f</td></tr>
 <tr><td><i class="fas fa-procedures"></i> procedures</td><td>fa-procedures</td><td>f487</td></tr>
 <tr><td><i class="fas fa-project-diagram"></i> project-diagram</td><td>fa-project-diagram</td><td>f542</td></tr>
 <tr><td><i class="fas fa-puzzle-piece"></i> puzzle-piece</td><td>fa-puzzle-piece</td><td>f12e</td></tr>
 <tr><td><i class="fas fa-qrcode"></i> qrcode</td><td>fa-qrcode</td><td>f029</td></tr>
 <tr><td><i class="fas fa-question"></i> question</td><td>fa-question</td><td>f128</td></tr>
 <tr><td><i class="fas fa-question-circle"></i> question-circle</td><td>fa-question-circle</td><td>f059</td></tr>
 <tr><td><i class="fas fa-quidditch"></i> quidditch</td><td>fa-quidditch</td><td>f458</td></tr>
 <tr><td><i class="fas fa-quote-left"></i> quote-left</td><td>fa-quote-left</td><td>f10d</td></tr>
 <tr><td><i class="fas fa-quote-right"></i> quote-right</td><td>fa-quote-right</td><td>f10e</td></tr>
 <tr><td><i class="fas fa-quran"></i> quran</td><td>fa-quran</td><td>f687</td></tr>
 <tr><td><i class="fas fa-radiation"></i> radiation</td><td>fa-radiation</td><td>f7b9</td></tr>
 <tr><td><i class="fas fa-radiation-alt"></i> radiation-alt</td><td>fa-radiation-alt</td><td>f7ba</td></tr>
 <tr><td><i class="fas fa-rainbow"></i> rainbow</td><td>fa-rainbow</td><td>f75b</td></tr>
 <tr><td><i class="fas fa-random"></i> random</td><td>fa-random</td><td>f074</td></tr>
 <tr><td><i class="fas fa-receipt"></i> receipt</td><td>fa-receipt</td><td>f543</td></tr>
 <tr><td><i class="fas fa-recycle"></i> recycle</td><td>fa-recycle</td><td>f1b8</td></tr>
 <tr><td><i class="fas fa-redo"></i> redo</td><td>fa-redo</td><td>f01e</td></tr>
 <tr><td><i class="fas fa-redo-alt"></i> redo-alt</td><td>fa-redo-alt</td><td>f2f9</td></tr>
 <tr><td><i class="fas fa-registered"></i> registered</td><td>fa-registered</td><td>f25d</td></tr>
 <tr><td><i class="fas fa-remove-format"></i> remove-format</td><td>fa-remove-format</td><td>f87d</td></tr>
 <tr><td><i class="fas fa-reply"></i> reply</td><td>fa-reply</td><td>f3e5</td></tr>
 <tr><td><i class="fas fa-reply-all"></i> reply-all</td><td>fa-reply-all</td><td>f122</td></tr>
 <tr><td><i class="fas fa-republican"></i> republican</td><td>fa-republican</td><td>f75e</td></tr>
 <tr><td><i class="fas fa-restroom"></i> restroom</td><td>fa-restroom</td><td>f7bd</td></tr>
 <tr><td><i class="fas fa-retweet"></i> retweet</td><td>fa-retweet</td><td>f079</td></tr>
 <tr><td><i class="fas fa-ribbon"></i> ribbon</td><td>fa-ribbon</td><td>f4d6</td></tr>
 <tr><td><i class="fas fa-ring"></i> ring</td><td>fa-ring</td><td>f70b</td></tr>
 <tr><td><i class="fas fa-road"></i> road</td><td>fa-road</td><td>f018</td></tr>
 <tr><td><i class="fas fa-robot"></i> robot</td><td>fa-robot</td><td>f544</td></tr>
 <tr><td><i class="fas fa-rocket"></i> rocket</td><td>fa-rocket</td><td>f135</td></tr>
 <tr><td><i class="fas fa-route"></i> route</td><td>fa-route</td><td>f4d7</td></tr>
 <tr><td><i class="fas fa-rss"></i> rss</td><td>fa-rss</td><td>f09e</td></tr>
 <tr><td><i class="fas fa-rss-square"></i> rss-square</td><td>fa-rss-square</td><td>f143</td></tr>
 <tr><td><i class="fas fa-ruble-sign"></i> ruble-sign</td><td>fa-ruble-sign</td><td>f158</td></tr>
 <tr><td><i class="fas fa-ruler"></i> ruler</td><td>fa-ruler</td><td>f545</td></tr>
 <tr><td><i class="fas fa-ruler-combined"></i> ruler-combined</td><td>fa-ruler-combined</td><td>f546</td></tr>
 <tr><td><i class="fas fa-ruler-horizontal"></i> ruler-horizontal</td><td>fa-ruler-horizontal</td><td>f547</td></tr>
 <tr><td><i class="fas fa-ruler-vertical"></i> ruler-vertical</td><td>fa-ruler-vertical</td><td>f548</td></tr>
 <tr><td><i class="fas fa-running"></i> running</td><td>fa-running</td><td>f70c</td></tr>
 <tr><td><i class="fas fa-rupee-sign"></i> rupee-sign</td><td>fa-rupee-sign</td><td>f156</td></tr>
 <tr><td><i class="fas fa-sad-cry"></i> sad-cry</td><td>fa-sad-cry</td><td>f5b3</td></tr>
 <tr><td><i class="fas fa-sad-tear"></i> sad-tear</td><td>fa-sad-tear</td><td>f5b4</td></tr>
 <tr><td><i class="fas fa-satellite"></i> satellite</td><td>fa-satellite</td><td>f7bf</td></tr>
 <tr><td><i class="fas fa-satellite-dish"></i> satellite-dish</td><td>fa-satellite-dish</td><td>f7c0</td></tr>
 <tr><td><i class="fas fa-save"></i> save</td><td>fa-save</td><td>f0c7</td></tr>
 <tr><td><i class="fas fa-school"></i> school</td><td>fa-school</td><td>f549</td></tr>
 <tr><td><i class="fas fa-screwdriver"></i> screwdriver</td><td>fa-screwdriver</td><td>f54a</td></tr>
 <tr><td><i class="fas fa-scroll"></i> scroll</td><td>fa-scroll</td><td>f70e</td></tr>
 <tr><td><i class="fas fa-sd-card"></i> sd-card</td><td>fa-sd-card</td><td>f7c2</td></tr>
 <tr><td><i class="fas fa-search"></i> search</td><td>fa-search</td><td>f002</td></tr>
 <tr><td><i class="fas fa-search-dollar"></i> search-dollar</td><td>fa-search-dollar</td><td>f688</td></tr>
 <tr><td><i class="fas fa-search-location"></i> search-location</td><td>fa-search-location</td><td>f689</td></tr>
 <tr><td><i class="fas fa-search-minus"></i> search-minus</td><td>fa-search-minus</td><td>f010</td></tr>
 <tr><td><i class="fas fa-search-plus"></i> search-plus</td><td>fa-search-plus</td><td>f00e</td></tr>
 <tr><td><i class="fas fa-seedling"></i> seedling</td><td>fa-seedling</td><td>f4d8</td></tr>
 <tr><td><i class="fas fa-server"></i> server</td><td>fa-server</td><td>f233</td></tr>
 <tr><td><i class="fas fa-shapes"></i> shapes</td><td>fa-shapes</td><td>f61f</td></tr>
 <tr><td><i class="fas fa-share"></i> share</td><td>fa-share</td><td>f064</td></tr>
 <tr><td><i class="fas fa-share-alt"></i> share-alt</td><td>fa-share-alt</td><td>f1e0</td></tr>
 <tr><td><i class="fas fa-share-alt-square"></i> share-alt-square</td><td>fa-share-alt-square</td><td>f1e1</td></tr>
 <tr><td><i class="fas fa-share-square"></i> share-square</td><td>fa-share-square</td><td>f14d</td></tr>
 <tr><td><i class="fas fa-shekel-sign"></i> shekel-sign</td><td>fa-shekel-sign</td><td>f20b</td></tr>
 <tr><td><i class="fas fa-shield-alt"></i> shield-alt</td><td>fa-shield-alt</td><td>f3ed</td></tr>
 <tr><td><i class="fas fa-ship"></i> ship</td><td>fa-ship</td><td>f21a</td></tr>
 <tr><td><i class="fas fa-shipping-fast"></i> shipping-fast</td><td>fa-shipping-fast</td><td>f48b</td></tr>
 <tr><td><i class="fas fa-shoe-prints"></i> shoe-prints</td><td>fa-shoe-prints</td><td>f54b</td></tr>
 <tr><td><i class="fas fa-shopping-bag"></i> shopping-bag</td><td>fa-shopping-bag</td><td>f290</td></tr>
 <tr><td><i class="fas fa-shopping-basket"></i> shopping-basket</td><td>fa-shopping-basket</td><td>f291</td></tr>
 <tr><td><i class="fas fa-shopping-cart"></i> shopping-cart</td><td>fa-shopping-cart</td><td>f07a</td></tr>
 <tr><td><i class="fas fa-shower"></i> shower</td><td>fa-shower</td><td>f2cc</td></tr>
 <tr><td><i class="fas fa-shuttle-van"></i> shuttle-van</td><td>fa-shuttle-van</td><td>f5b6</td></tr>
 <tr><td><i class="fas fa-sign"></i> sign</td><td>fa-sign</td><td>f4d9</td></tr>
 <tr><td><i class="fas fa-sign-in-alt"></i> sign-in-alt</td><td>fa-sign-in-alt</td><td>f2f6</td></tr>
 <tr><td><i class="fas fa-sign-language"></i> sign-language</td><td>fa-sign-language</td><td>f2a7</td></tr>
 <tr><td><i class="fas fa-sign-out-alt"></i> sign-out-alt</td><td>fa-sign-out-alt</td><td>f2f5</td></tr>
 <tr><td><i class="fas fa-signal"></i> signal</td><td>fa-signal</td><td>f012</td></tr>
 <tr><td><i class="fas fa-signature"></i> signature</td><td>fa-signature</td><td>f5b7</td></tr>
 <tr><td><i class="fas fa-sim-card"></i> sim-card</td><td>fa-sim-card</td><td>f7c4</td></tr>
 <tr><td><i class="fas fa-sitemap"></i> sitemap</td><td>fa-sitemap</td><td>f0e8</td></tr>
 <tr><td><i class="fas fa-skating"></i> skating</td><td>fa-skating</td><td>f7c5</td></tr>
 <tr><td><i class="fas fa-skiing"></i> skiing</td><td>fa-skiing</td><td>f7c9</td></tr>
 <tr><td><i class="fas fa-skiing-nordic"></i> skiing-nordic</td><td>fa-skiing-nordic</td><td>f7ca</td></tr>
 <tr><td><i class="fas fa-skull"></i> skull</td><td>fa-skull</td><td>f54c</td></tr>
 <tr><td><i class="fas fa-skull-crossbones"></i> skull-crossbones</td><td>fa-skull-crossbones</td><td>f714</td></tr>
 <tr><td><i class="fas fa-slash"></i> slash</td><td>fa-slash</td><td>f715</td></tr>
 <tr><td><i class="fas fa-sleigh"></i> sleigh</td><td>fa-sleigh</td><td>f7cc</td></tr>
 <tr><td><i class="fas fa-sliders-h"></i> sliders-h</td><td>fa-sliders-h</td><td>f1de</td></tr>
 <tr><td><i class="fas fa-smile"></i> smile</td><td>fa-smile</td><td>f118</td></tr>
 <tr><td><i class="fas fa-smile-beam"></i> smile-beam</td><td>fa-smile-beam</td><td>f5b8</td></tr>
 <tr><td><i class="fas fa-smile-wink"></i> smile-wink</td><td>fa-smile-wink</td><td>f4da</td></tr>
 <tr><td><i class="fas fa-smog"></i> smog</td><td>fa-smog</td><td>f75f</td></tr>
 <tr><td><i class="fas fa-smoking"></i> smoking</td><td>fa-smoking</td><td>f48d</td></tr>
 <tr><td><i class="fas fa-smoking-ban"></i> smoking-ban</td><td>fa-smoking-ban</td><td>f54d</td></tr>
 <tr><td><i class="fas fa-sms"></i> sms</td><td>fa-sms</td><td>f7cd</td></tr>
 <tr><td><i class="fas fa-snowboarding"></i> snowboarding</td><td>fa-snowboarding</td><td>f7ce</td></tr>
 <tr><td><i class="fas fa-snowflake"></i> snowflake</td><td>fa-snowflake</td><td>f2dc</td></tr>
 <tr><td><i class="fas fa-snowman"></i> snowman</td><td>fa-snowman</td><td>f7d0</td></tr>
 <tr><td><i class="fas fa-snowplow"></i> snowplow</td><td>fa-snowplow</td><td>f7d2</td></tr>
 <tr><td><i class="fas fa-socks"></i> socks</td><td>fa-socks</td><td>f696</td></tr>
 <tr><td><i class="fas fa-solar-panel"></i> solar-panel</td><td>fa-solar-panel</td><td>f5ba</td></tr>
 <tr><td><i class="fas fa-sort"></i> sort</td><td>fa-sort</td><td>f0dc</td></tr>
 <tr><td><i class="fas fa-sort-alpha-down"></i> sort-alpha-down</td><td>fa-sort-alpha-down</td><td>f15d</td></tr>
 <tr><td><i class="fas fa-sort-alpha-down-alt"></i> sort-alpha-down-alt</td><td>fa-sort-alpha-down-alt</td><td>f881</td></tr>
 <tr><td><i class="fas fa-sort-alpha-up"></i> sort-alpha-up</td><td>fa-sort-alpha-up</td><td>f15e</td></tr>
 <tr><td><i class="fas fa-sort-alpha-up-alt"></i> sort-alpha-up-alt</td><td>fa-sort-alpha-up-alt</td><td>f882</td></tr>
 <tr><td><i class="fas fa-sort-amount-down"></i> sort-amount-down</td><td>fa-sort-amount-down</td><td>f160</td></tr>
 <tr><td><i class="fas fa-sort-amount-down-alt"></i> sort-amount-down-alt</td><td>fa-sort-amount-down-alt</td><td>f884</td></tr>
 <tr><td><i class="fas fa-sort-amount-up"></i> sort-amount-up</td><td>fa-sort-amount-up</td><td>f161</td></tr>
 <tr><td><i class="fas fa-sort-amount-up-alt"></i> sort-amount-up-alt</td><td>fa-sort-amount-up-alt</td><td>f885</td></tr>
 <tr><td><i class="fas fa-sort-down"></i> sort-down</td><td>fa-sort-down</td><td>f0dd</td></tr>
 <tr><td><i class="fas fa-sort-numeric-down"></i> sort-numeric-down</td><td>fa-sort-numeric-down</td><td>f162</td></tr>
 <tr><td><i class="fas fa-sort-numeric-down-alt"></i> sort-numeric-down-alt</td><td>fa-sort-numeric-down-alt</td><td>f886</td></tr>
 <tr><td><i class="fas fa-sort-numeric-up"></i> sort-numeric-up</td><td>fa-sort-numeric-up</td><td>f163</td></tr>
 <tr><td><i class="fas fa-sort-numeric-up-alt"></i> sort-numeric-up-alt</td><td>fa-sort-numeric-up-alt</td><td>f887</td></tr>
 <tr><td><i class="fas fa-sort-up"></i> sort-up</td><td>fa-sort-up</td><td>f0de</td></tr>
 <tr><td><i class="fas fa-spa"></i> spa</td><td>fa-spa</td><td>f5bb</td></tr>
 <tr><td><i class="fas fa-space-shuttle"></i> space-shuttle</td><td>fa-space-shuttle</td><td>f197</td></tr>
 <tr><td><i class="fas fa-spell-check"></i> spell-check</td><td>fa-spell-check</td><td>f891</td></tr>
 <tr><td><i class="fas fa-spider"></i> spider</td><td>fa-spider</td><td>f717</td></tr>
 <tr><td><i class="fas fa-spinner"></i> spinner</td><td>fa-spinner</td><td>f110</td></tr>
 <tr><td><i class="fas fa-splotch"></i> splotch</td><td>fa-splotch</td><td>f5bc</td></tr>
 <tr><td><i class="fas fa-spray-can"></i> spray-can</td><td>fa-spray-can</td><td>f5bd</td></tr>
 <tr><td><i class="fas fa-square"></i> square</td><td>fa-square</td><td>f0c8</td></tr>
 <tr><td><i class="fas fa-square-full"></i> square-full</td><td>fa-square-full</td><td>f45c</td></tr>
 <tr><td><i class="fas fa-square-root-alt"></i> square-root-alt</td><td>fa-square-root-alt</td><td>f698</td></tr>
 <tr><td><i class="fas fa-stamp"></i> stamp</td><td>fa-stamp</td><td>f5bf</td></tr>
 <tr><td><i class="fas fa-star"></i> star</td><td>fa-star</td><td>f005</td></tr>
 <tr><td><i class="fas fa-star-and-crescent"></i> star-and-crescent</td><td>fa-star-and-crescent</td><td>f699</td></tr>
 <tr><td><i class="fas fa-star-half"></i> star-half</td><td>fa-star-half</td><td>f089</td></tr>
 <tr><td><i class="fas fa-star-half-alt"></i> star-half-alt</td><td>fa-star-half-alt</td><td>f5c0</td></tr>
 <tr><td><i class="fas fa-star-of-david"></i> star-of-david</td><td>fa-star-of-david</td><td>f69a</td></tr>
 <tr><td><i class="fas fa-star-of-life"></i> star-of-life</td><td>fa-star-of-life</td><td>f621</td></tr>
 <tr><td><i class="fas fa-step-backward"></i> step-backward</td><td>fa-step-backward</td><td>f048</td></tr>
 <tr><td><i class="fas fa-step-forward"></i> step-forward</td><td>fa-step-forward</td><td>f051</td></tr>
 <tr><td><i class="fas fa-stethoscope"></i> stethoscope</td><td>fa-stethoscope</td><td>f0f1</td></tr>
 <tr><td><i class="fas fa-sticky-note"></i> sticky-note</td><td>fa-sticky-note</td><td>f249</td></tr>
 <tr><td><i class="fas fa-stop"></i> stop</td><td>fa-stop</td><td>f04d</td></tr>
 <tr><td><i class="fas fa-stop-circle"></i> stop-circle</td><td>fa-stop-circle</td><td>f28d</td></tr>
 <tr><td><i class="fas fa-stopwatch"></i> stopwatch</td><td>fa-stopwatch</td><td>f2f2</td></tr>
 <tr><td><i class="fas fa-store"></i> store</td><td>fa-store</td><td>f54e</td></tr>
 <tr><td><i class="fas fa-store-alt"></i> store-alt</td><td>fa-store-alt</td><td>f54f</td></tr>
 <tr><td><i class="fas fa-stream"></i> stream</td><td>fa-stream</td><td>f550</td></tr>
 <tr><td><i class="fas fa-street-view"></i> street-view</td><td>fa-street-view</td><td>f21d</td></tr>
 <tr><td><i class="fas fa-strikethrough"></i> strikethrough</td><td>fa-strikethrough</td><td>f0cc</td></tr>
 <tr><td><i class="fas fa-stroopwafel"></i> stroopwafel</td><td>fa-stroopwafel</td><td>f551</td></tr>
 <tr><td><i class="fas fa-subscript"></i> subscript</td><td>fa-subscript</td><td>f12c</td></tr>
 <tr><td><i class="fas fa-subway"></i> subway</td><td>fa-subway</td><td>f239</td></tr>
 <tr><td><i class="fas fa-suitcase"></i> suitcase</td><td>fa-suitcase</td><td>f0f2</td></tr>
 <tr><td><i class="fas fa-suitcase-rolling"></i> suitcase-rolling</td><td>fa-suitcase-rolling</td><td>f5c1</td></tr>
 <tr><td><i class="fas fa-sun"></i> sun</td><td>fa-sun</td><td>f185</td></tr>
 <tr><td><i class="fas fa-superscript"></i> superscript</td><td>fa-superscript</td><td>f12b</td></tr>
 <tr><td><i class="fas fa-surprise"></i> surprise</td><td>fa-surprise</td><td>f5c2</td></tr>
 <tr><td><i class="fas fa-swatchbook"></i> swatchbook</td><td>fa-swatchbook</td><td>f5c3</td></tr>
 <tr><td><i class="fas fa-swimmer"></i> swimmer</td><td>fa-swimmer</td><td>f5c4</td></tr>
 <tr><td><i class="fas fa-swimming-pool"></i> swimming-pool</td><td>fa-swimming-pool</td><td>f5c5</td></tr>
 <tr><td><i class="fas fa-synagogue"></i> synagogue</td><td>fa-synagogue</td><td>f69b</td></tr>
 <tr><td><i class="fas fa-sync"></i> sync</td><td>fa-sync</td><td>f021</td></tr>
 <tr><td><i class="fas fa-sync-alt"></i> sync-alt</td><td>fa-sync-alt</td><td>f2f1</td></tr>
 <tr><td><i class="fas fa-syringe"></i> syringe</td><td>fa-syringe</td><td>f48e</td></tr>
 <tr><td><i class="fas fa-table"></i> table</td><td>fa-table</td><td>f0ce</td></tr>
 <tr><td><i class="fas fa-table-tennis"></i> table-tennis</td><td>fa-table-tennis</td><td>f45d</td></tr>
 <tr><td><i class="fas fa-tablet"></i> tablet</td><td>fa-tablet</td><td>f10a</td></tr>
 <tr><td><i class="fas fa-tablet-alt"></i> tablet-alt</td><td>fa-tablet-alt</td><td>f3fa</td></tr>
 <tr><td><i class="fas fa-tablets"></i> tablets</td><td>fa-tablets</td><td>f490</td></tr>
 <tr><td><i class="fas fa-tachometer-alt"></i> tachometer-alt</td><td>fa-tachometer-alt</td><td>f3fd</td></tr>
 <tr><td><i class="fas fa-tag"></i> tag</td><td>fa-tag</td><td>f02b</td></tr>
 <tr><td><i class="fas fa-tags"></i> tags</td><td>fa-tags</td><td>f02c</td></tr>
 <tr><td><i class="fas fa-tape"></i> tape</td><td>fa-tape</td><td>f4db</td></tr>
 <tr><td><i class="fas fa-tasks"></i> tasks</td><td>fa-tasks</td><td>f0ae</td></tr>
 <tr><td><i class="fas fa-taxi"></i> taxi</td><td>fa-taxi</td><td>f1ba</td></tr>
 <tr><td><i class="fas fa-teeth"></i> teeth</td><td>fa-teeth</td><td>f62e</td></tr>
 <tr><td><i class="fas fa-teeth-open"></i> teeth-open</td><td>fa-teeth-open</td><td>f62f</td></tr>
 <tr><td><i class="fas fa-temperature-high"></i> temperature-high</td><td>fa-temperature-high</td><td>f769</td></tr>
 <tr><td><i class="fas fa-temperature-low"></i> temperature-low</td><td>fa-temperature-low</td><td>f76b</td></tr>
 <tr><td><i class="fas fa-tenge"></i> tenge</td><td>fa-tenge</td><td>f7d7</td></tr>
 <tr><td><i class="fas fa-terminal"></i> terminal</td><td>fa-terminal</td><td>f120</td></tr>
 <tr><td><i class="fas fa-text-height"></i> text-height</td><td>fa-text-height</td><td>f034</td></tr>
 <tr><td><i class="fas fa-text-width"></i> text-width</td><td>fa-text-width</td><td>f035</td></tr>
 <tr><td><i class="fas fa-th"></i> th</td><td>fa-th</td><td>f00a</td></tr>
 <tr><td><i class="fas fa-th-large"></i> th-large</td><td>fa-th-large</td><td>f009</td></tr>
 <tr><td><i class="fas fa-th-list"></i> th-list</td><td>fa-th-list</td><td>f00b</td></tr>
 <tr><td><i class="fas fa-theater-masks"></i> theater-masks</td><td>fa-theater-masks</td><td>f630</td></tr>
 <tr><td><i class="fas fa-thermometer"></i> thermometer</td><td>fa-thermometer</td><td>f491</td></tr>
 <tr><td><i class="fas fa-thermometer-empty"></i> thermometer-empty</td><td>fa-thermometer-empty</td><td>f2cb</td></tr>
 <tr><td><i class="fas fa-thermometer-full"></i> thermometer-full</td><td>fa-thermometer-full</td><td>f2c7</td></tr>
 <tr><td><i class="fas fa-thermometer-half"></i> thermometer-half</td><td>fa-thermometer-half</td><td>f2c9</td></tr>
 <tr><td><i class="fas fa-thermometer-quarter"></i> thermometer-quarter</td><td>fa-thermometer-quarter</td><td>f2ca</td></tr>
 <tr><td><i class="fas fa-thermometer-three-quarters"></i> thermometer-three-quarters</td><td>fa-thermometer-three-quarters</td><td>f2c8</td></tr>
 <tr><td><i class="fas fa-thumbs-down"></i> thumbs-down</td><td>fa-thumbs-down</td><td>f165</td></tr>
 <tr><td><i class="fas fa-thumbs-up"></i> thumbs-up</td><td>fa-thumbs-up</td><td>f164</td></tr>
 <tr><td><i class="fas fa-thumbtack"></i> thumbtack</td><td>fa-thumbtack</td><td>f08d</td></tr>
 <tr><td><i class="fas fa-ticket-alt"></i> ticket-alt</td><td>fa-ticket-alt</td><td>f3ff</td></tr>
 <tr><td><i class="fas fa-times"></i> times</td><td>fa-times</td><td>f00d</td></tr>
 <tr><td><i class="fas fa-times-circle"></i> times-circle</td><td>fa-times-circle</td><td>f057</td></tr>
 <tr><td><i class="fas fa-tint"></i> tint</td><td>fa-tint</td><td>f043</td></tr>
 <tr><td><i class="fas fa-tint-slash"></i> tint-slash</td><td>fa-tint-slash</td><td>f5c7</td></tr>
 <tr><td><i class="fas fa-tired"></i> tired</td><td>fa-tired</td><td>f5c8</td></tr>
 <tr><td><i class="fas fa-toggle-off"></i> toggle-off</td><td>fa-toggle-off</td><td>f204</td></tr>
 <tr><td><i class="fas fa-toggle-on"></i> toggle-on</td><td>fa-toggle-on</td><td>f205</td></tr>
 <tr><td><i class="fas fa-toilet"></i> toilet</td><td>fa-toilet</td><td>f7d8</td></tr>
 <tr><td><i class="fas fa-toilet-paper"></i> toilet-paper</td><td>fa-toilet-paper</td><td>f71e</td></tr>
 <tr><td><i class="fas fa-toolbox"></i> toolbox</td><td>fa-toolbox</td><td>f552</td></tr>
 <tr><td><i class="fas fa-tools"></i> tools</td><td>fa-tools</td><td>f7d9</td></tr>
 <tr><td><i class="fas fa-tooth"></i> tooth</td><td>fa-tooth</td><td>f5c9</td></tr>
 <tr><td><i class="fas fa-torah"></i> torah</td><td>fa-torah</td><td>f6a0</td></tr>
 <tr><td><i class="fas fa-torii-gate"></i> torii-gate</td><td>fa-torii-gate</td><td>f6a1</td></tr>
 <tr><td><i class="fas fa-tractor"></i> tractor</td><td>fa-tractor</td><td>f722</td></tr>
 <tr><td><i class="fas fa-trademark"></i> trademark</td><td>fa-trademark</td><td>f25c</td></tr>
 <tr><td><i class="fas fa-traffic-light"></i> traffic-light</td><td>fa-traffic-light</td><td>f637</td></tr>
 <tr><td><i class="fas fa-train"></i> train</td><td>fa-train</td><td>f238</td></tr>
 <tr><td><i class="fas fa-tram"></i> tram</td><td>fa-tram</td><td>f7da</td></tr>
 <tr><td><i class="fas fa-transgender"></i> transgender</td><td>fa-transgender</td><td>f224</td></tr>
 <tr><td><i class="fas fa-transgender-alt"></i> transgender-alt</td><td>fa-transgender-alt</td><td>f225</td></tr>
 <tr><td><i class="fas fa-trash"></i> trash</td><td>fa-trash</td><td>f1f8</td></tr>
 <tr><td><i class="fas fa-trash-alt"></i> trash-alt</td><td>fa-trash-alt</td><td>f2ed</td></tr>
 <tr><td><i class="fas fa-trash-restore"></i> trash-restore</td><td>fa-trash-restore</td><td>f829</td></tr>
 <tr><td><i class="fas fa-trash-restore-alt"></i> trash-restore-alt</td><td>fa-trash-restore-alt</td><td>f82a</td></tr>
 <tr><td><i class="fas fa-tree"></i> tree</td><td>fa-tree</td><td>f1bb</td></tr>
 <tr><td><i class="fas fa-trophy"></i> trophy</td><td>fa-trophy</td><td>f091</td></tr>
 <tr><td><i class="fas fa-truck"></i> truck</td><td>fa-truck</td><td>f0d1</td></tr>
 <tr><td><i class="fas fa-truck-loading"></i> truck-loading</td><td>fa-truck-loading</td><td>f4de</td></tr>
 <tr><td><i class="fas fa-truck-monster"></i> truck-monster</td><td>fa-truck-monster</td><td>f63b</td></tr>
 <tr><td><i class="fas fa-truck-moving"></i> truck-moving</td><td>fa-truck-moving</td><td>f4df</td></tr>
 <tr><td><i class="fas fa-truck-pickup"></i> truck-pickup</td><td>fa-truck-pickup</td><td>f63c</td></tr>
 <tr><td><i class="fas fa-tshirt"></i> tshirt</td><td>fa-tshirt</td><td>f553</td></tr>
 <tr><td><i class="fas fa-tty"></i> tty</td><td>fa-tty</td><td>f1e4</td></tr>
 <tr><td><i class="fas fa-tv"></i> tv</td><td>fa-tv</td><td>f26c</td></tr>
 <tr><td><i class="fas fa-umbrella"></i> umbrella</td><td>fa-umbrella</td><td>f0e9</td></tr>
 <tr><td><i class="fas fa-umbrella-beach"></i> umbrella-beach</td><td>fa-umbrella-beach</td><td>f5ca</td></tr>
 <tr><td><i class="fas fa-underline"></i> underline</td><td>fa-underline</td><td>f0cd</td></tr>
 <tr><td><i class="fas fa-undo"></i> undo</td><td>fa-undo</td><td>f0e2</td></tr>
 <tr><td><i class="fas fa-undo-alt"></i> undo-alt</td><td>fa-undo-alt</td><td>f2ea</td></tr>
 <tr><td><i class="fas fa-universal-access"></i> universal-access</td><td>fa-universal-access</td><td>f29a</td></tr>
 <tr><td><i class="fas fa-university"></i> university</td><td>fa-university</td><td>f19c</td></tr>
 <tr><td><i class="fas fa-unlink"></i> unlink</td><td>fa-unlink</td><td>f127</td></tr>
 <tr><td><i class="fas fa-unlock"></i> unlock</td><td>fa-unlock</td><td>f09c</td></tr>
 <tr><td><i class="fas fa-unlock-alt"></i> unlock-alt</td><td>fa-unlock-alt</td><td>f13e</td></tr>
 <tr><td><i class="fas fa-upload"></i> upload</td><td>fa-upload</td><td>f093</td></tr>
 <tr><td><i class="fas fa-user"></i> user</td><td>fa-user</td><td>f007</td></tr>
 <tr><td><i class="fas fa-user-alt"></i> user-alt</td><td>fa-user-alt</td><td>f406</td></tr>
 <tr><td><i class="fas fa-user-alt-slash"></i> user-alt-slash</td><td>fa-user-alt-slash</td><td>f4fa</td></tr>
 <tr><td><i class="fas fa-user-astronaut"></i> user-astronaut</td><td>fa-user-astronaut</td><td>f4fb</td></tr>
 <tr><td><i class="fas fa-user-check"></i> user-check</td><td>fa-user-check</td><td>f4fc</td></tr>
 <tr><td><i class="fas fa-user-circle"></i> user-circle</td><td>fa-user-circle</td><td>f2bd</td></tr>
 <tr><td><i class="fas fa-user-clock"></i> user-clock</td><td>fa-user-clock</td><td>f4fd</td></tr>
 <tr><td><i class="fas fa-user-cog"></i> user-cog</td><td>fa-user-cog</td><td>f4fe</td></tr>
 <tr><td><i class="fas fa-user-edit"></i> user-edit</td><td>fa-user-edit</td><td>f4ff</td></tr>
 <tr><td><i class="fas fa-user-friends"></i> user-friends</td><td>fa-user-friends</td><td>f500</td></tr>
 <tr><td><i class="fas fa-user-graduate"></i> user-graduate</td><td>fa-user-graduate</td><td>f501</td></tr>
 <tr><td><i class="fas fa-user-injured"></i> user-injured</td><td>fa-user-injured</td><td>f728</td></tr>
 <tr><td><i class="fas fa-user-lock"></i> user-lock</td><td>fa-user-lock</td><td>f502</td></tr>
 <tr><td><i class="fas fa-user-md"></i> user-md</td><td>fa-user-md</td><td>f0f0</td></tr>
 <tr><td><i class="fas fa-user-minus"></i> user-minus</td><td>fa-user-minus</td><td>f503</td></tr>
 <tr><td><i class="fas fa-user-ninja"></i> user-ninja</td><td>fa-user-ninja</td><td>f504</td></tr>
 <tr><td><i class="fas fa-user-nurse"></i> user-nurse</td><td>fa-user-nurse</td><td>f82f</td></tr>
 <tr><td><i class="fas fa-user-plus"></i> user-plus</td><td>fa-user-plus</td><td>f234</td></tr>
 <tr><td><i class="fas fa-user-secret"></i> user-secret</td><td>fa-user-secret</td><td>f21b</td></tr>
 <tr><td><i class="fas fa-user-shield"></i> user-shield</td><td>fa-user-shield</td><td>f505</td></tr>
 <tr><td><i class="fas fa-user-slash"></i> user-slash</td><td>fa-user-slash</td><td>f506</td></tr>
 <tr><td><i class="fas fa-user-tag"></i> user-tag</td><td>fa-user-tag</td><td>f507</td></tr>
 <tr><td><i class="fas fa-user-tie"></i> user-tie</td><td>fa-user-tie</td><td>f508</td></tr>
 <tr><td><i class="fas fa-user-times"></i> user-times</td><td>fa-user-times</td><td>f235</td></tr>
 <tr><td><i class="fas fa-users"></i> users</td><td>fa-users</td><td>f0c0</td></tr>
 <tr><td><i class="fas fa-users-cog"></i> users-cog</td><td>fa-users-cog</td><td>f509</td></tr>
 <tr><td><i class="fas fa-utensil-spoon"></i> utensil-spoon</td><td>fa-utensil-spoon</td><td>f2e5</td></tr>
 <tr><td><i class="fas fa-utensils"></i> utensils</td><td>fa-utensils</td><td>f2e7</td></tr>
 <tr><td><i class="fas fa-vector-square"></i> vector-square</td><td>fa-vector-square</td><td>f5cb</td></tr>
 <tr><td><i class="fas fa-venus"></i> venus</td><td>fa-venus</td><td>f221</td></tr>
 <tr><td><i class="fas fa-venus-double"></i> venus-double</td><td>fa-venus-double</td><td>f226</td></tr>
 <tr><td><i class="fas fa-venus-mars"></i> venus-mars</td><td>fa-venus-mars</td><td>f228</td></tr>
 <tr><td><i class="fas fa-vial"></i> vial</td><td>fa-vial</td><td>f492</td></tr>
 <tr><td><i class="fas fa-vials"></i> vials</td><td>fa-vials</td><td>f493</td></tr>
 <tr><td><i class="fas fa-video"></i> video</td><td>fa-video</td><td>f03d</td></tr>
 <tr><td><i class="fas fa-video-slash"></i> video-slash</td><td>fa-video-slash</td><td>f4e2</td></tr>
 <tr><td><i class="fas fa-vihara"></i> vihara</td><td>fa-vihara</td><td>f6a7</td></tr>
 <tr><td><i class="fas fa-voicemail"></i> voicemail</td><td>fa-voicemail</td><td>f897</td></tr>
 <tr><td><i class="fas fa-volleyball-ball"></i> volleyball-ball</td><td>fa-volleyball-ball</td><td>f45f</td></tr>
 <tr><td><i class="fas fa-volume-down"></i> volume-down</td><td>fa-volume-down</td><td>f027</td></tr>
 <tr><td><i class="fas fa-volume-mute"></i> volume-mute</td><td>fa-volume-mute</td><td>f6a9</td></tr>
 <tr><td><i class="fas fa-volume-off"></i> volume-off</td><td>fa-volume-off</td><td>f026</td></tr>
 <tr><td><i class="fas fa-volume-up"></i> volume-up</td><td>fa-volume-up</td><td>f028</td></tr>
 <tr><td><i class="fas fa-vote-yea"></i> vote-yea</td><td>fa-vote-yea</td><td>f772</td></tr>
 <tr><td><i class="fas fa-vr-cardboard"></i> vr-cardboard</td><td>fa-vr-cardboard</td><td>f729</td></tr>
 <tr><td><i class="fas fa-walking"></i> walking</td><td>fa-walking</td><td>f554</td></tr>
 <tr><td><i class="fas fa-wallet"></i> wallet</td><td>fa-wallet</td><td>f555</td></tr>
 <tr><td><i class="fas fa-warehouse"></i> warehouse</td><td>fa-warehouse</td><td>f494</td></tr>
 <tr><td><i class="fas fa-water"></i> water</td><td>fa-water</td><td>f773</td></tr>
 <tr><td><i class="fas fa-wave-square"></i> wave-square</td><td>fa-wave-square</td><td>f83e</td></tr>
 <tr><td><i class="fas fa-weight"></i> weight</td><td>fa-weight</td><td>f496</td></tr>
 <tr><td><i class="fas fa-weight-hanging"></i> weight-hanging</td><td>fa-weight-hanging</td><td>f5cd</td></tr>
 <tr><td><i class="fas fa-wheelchair"></i> wheelchair</td><td>fa-wheelchair</td><td>f193</td></tr>
 <tr><td><i class="fas fa-wifi"></i> wifi</td><td>fa-wifi</td><td>f1eb</td></tr>
 <tr><td><i class="fas fa-wind"></i> wind</td><td>fa-wind</td><td>f72e</td></tr>
 <tr><td><i class="fas fa-window-close"></i> window-close</td><td>fa-window-close</td><td>f410</td></tr>
 <tr><td><i class="fas fa-window-maximize"></i> window-maximize</td><td>fa-window-maximize</td><td>f2d0</td></tr>
 <tr><td><i class="fas fa-window-minimize"></i> window-minimize</td><td>fa-window-minimize</td><td>f2d1</td></tr>
 <tr><td><i class="fas fa-window-restore"></i> window-restore</td><td>fa-window-restore</td><td>f2d2</td></tr>
 <tr><td><i class="fas fa-wine-bottle"></i> wine-bottle</td><td>fa-wine-bottle</td><td>f72f</td></tr>
 <tr><td><i class="fas fa-wine-glass"></i> wine-glass</td><td>fa-wine-glass</td><td>f4e3</td></tr>
 <tr><td><i class="fas fa-wine-glass-alt"></i> wine-glass-alt</td><td>fa-wine-glass-alt</td><td>f5ce</td></tr>
 <tr><td><i class="fas fa-won-sign"></i> won-sign</td><td>fa-won-sign</td><td>f159</td></tr>
 <tr><td><i class="fas fa-wrench"></i> wrench</td><td>fa-wrench</td><td>f0ad</td></tr>
 <tr><td><i class="fas fa-x-ray"></i> x-ray</td><td>fa-x-ray</td><td>f497</td></tr>
 <tr><td><i class="fas fa-yen-sign"></i> yen-sign</td><td>fa-yen-sign</td><td>f157</td></tr>
 <tr><td><i class="fas fa-yin-yang"></i> yin-yang</td><td>fa-yin-yang</td><td>f6ad</td></tr>
</table>

</div>

## Font Awesome Icons List - Regular Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>Icon</th>
<th>Code</th>
<th>CSS Content Code</th>
</tr>
 <tr><td><i class="far fa-address-book"></i> address-book</td><td>fa-address-book</td><td>f2b9</td></tr>
 <tr><td><i class="far fa-address-card"></i> address-card</td><td>fa-address-card</td><td>f2bb</td></tr>
 <tr><td><i class="far fa-angry"></i> angry</td><td>fa-angry</td><td>f556</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-down"></i> arrow-alt-circle-down</td><td>fa-arrow-alt-circle-down</td><td>f358</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-left"></i> arrow-alt-circle-left</td><td>fa-arrow-alt-circle-left</td><td>f359</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-right"></i> arrow-alt-circle-right</td><td>fa-arrow-alt-circle-right</td><td>f35a</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-up"></i> arrow-alt-circle-up</td><td>fa-arrow-alt-circle-up</td><td>f35b</td></tr>
 <tr><td><i class="far fa-bell"></i> bell</td><td>fa-bell</td><td>f0f3</td></tr>
 <tr><td><i class="far fa-bell-slash"></i> bell-slash</td><td>fa-bell-slash</td><td>f1f6</td></tr>
 <tr><td><i class="far fa-bookmark"></i> bookmark</td><td>fa-bookmark</td><td>f02e</td></tr>
 <tr><td><i class="far fa-building"></i> building</td><td>fa-building</td><td>f1ad</td></tr>
 <tr><td><i class="far fa-calendar"></i> calendar</td><td>fa-calendar</td><td>f133</td></tr>
 <tr><td><i class="far fa-calendar-alt"></i> calendar-alt</td><td>fa-calendar-alt</td><td>f073</td></tr>
 <tr><td><i class="far fa-calendar-check"></i> calendar-check</td><td>fa-calendar-check</td><td>f274</td></tr>
 <tr><td><i class="far fa-calendar-minus"></i> calendar-minus</td><td>fa-calendar-minus</td><td>f272</td></tr>
 <tr><td><i class="far fa-calendar-plus"></i> calendar-plus</td><td>fa-calendar-plus</td><td>f271</td></tr>
 <tr><td><i class="far fa-calendar-times"></i> calendar-times</td><td>fa-calendar-times</td><td>f273</td></tr>
 <tr><td><i class="far fa-caret-square-down"></i> caret-square-down</td><td>fa-caret-square-down</td><td>f150</td></tr>
 <tr><td><i class="far fa-caret-square-left"></i> caret-square-left</td><td>fa-caret-square-left</td><td>f191</td></tr>
 <tr><td><i class="far fa-caret-square-right"></i> caret-square-right</td><td>fa-caret-square-right</td><td>f152</td></tr>
 <tr><td><i class="far fa-caret-square-up"></i> caret-square-up</td><td>fa-caret-square-up</td><td>f151</td></tr>
 <tr><td><i class="far fa-chart-bar"></i> chart-bar</td><td>fa-chart-bar</td><td>f080</td></tr>
 <tr><td><i class="far fa-check-circle"></i> check-circle</td><td>fa-check-circle</td><td>f058</td></tr>
 <tr><td><i class="far fa-check-square"></i> check-square</td><td>fa-check-square</td><td>f14a</td></tr>
 <tr><td><i class="far fa-circle"></i> circle</td><td>fa-circle</td><td>f111</td></tr>
 <tr><td><i class="far fa-clipboard"></i> clipboard</td><td>fa-clipboard</td><td>f328</td></tr>
 <tr><td><i class="far fa-clock"></i> clock</td><td>fa-clock</td><td>f017</td></tr>
 <tr><td><i class="far fa-clone"></i> clone</td><td>fa-clone</td><td>f24d</td></tr>
 <tr><td><i class="far fa-closed-captioning"></i> closed-captioning</td><td>fa-closed-captioning</td><td>f20a</td></tr>
 <tr><td><i class="far fa-comment"></i> comment</td><td>fa-comment</td><td>f075</td></tr>
 <tr><td><i class="far fa-comment-alt"></i> comment-alt</td><td>fa-comment-alt</td><td>f27a</td></tr>
 <tr><td><i class="far fa-comment-dots"></i> comment-dots</td><td>fa-comment-dots</td><td>f4ad</td></tr>
 <tr><td><i class="far fa-comments"></i> comments</td><td>fa-comments</td><td>f086</td></tr>
 <tr><td><i class="far fa-compass"></i> compass</td><td>fa-compass</td><td>f14e</td></tr>
 <tr><td><i class="far fa-copy"></i> copy</td><td>fa-copy</td><td>f0c5</td></tr>
 <tr><td><i class="far fa-copyright"></i> copyright</td><td>fa-copyright</td><td>f1f9</td></tr>
 <tr><td><i class="far fa-credit-card"></i> credit-card</td><td>fa-credit-card</td><td>f09d</td></tr>
 <tr><td><i class="far fa-dizzy"></i> dizzy</td><td>fa-dizzy</td><td>f567</td></tr>
 <tr><td><i class="far fa-dot-circle"></i> dot-circle</td><td>fa-dot-circle</td><td>f192</td></tr>
 <tr><td><i class="far fa-edit"></i> edit</td><td>fa-edit</td><td>f044</td></tr>
 <tr><td><i class="far fa-envelope"></i> envelope</td><td>fa-envelope</td><td>f0e0</td></tr>
 <tr><td><i class="far fa-envelope-open"></i> envelope-open</td><td>fa-envelope-open</td><td>f2b6</td></tr>
 <tr><td><i class="far fa-eye"></i> eye</td><td>fa-eye</td><td>f06e</td></tr>
 <tr><td><i class="far fa-eye-slash"></i> eye-slash</td><td>fa-eye-slash</td><td>f070</td></tr>
 <tr><td><i class="far fa-file"></i> file</td><td>fa-file</td><td>f15b</td></tr>
 <tr><td><i class="far fa-file-alt"></i> file-alt</td><td>fa-file-alt</td><td>f15c</td></tr>
 <tr><td><i class="far fa-file-archive"></i> file-archive</td><td>fa-file-archive</td><td>f1c6</td></tr>
 <tr><td><i class="far fa-file-audio"></i> file-audio</td><td>fa-file-audio</td><td>f1c7</td></tr>
 <tr><td><i class="far fa-file-code"></i> file-code</td><td>fa-file-code</td><td>f1c9</td></tr>
 <tr><td><i class="far fa-file-excel"></i> file-excel</td><td>fa-file-excel</td><td>f1c3</td></tr>
 <tr><td><i class="far fa-file-image"></i> file-image</td><td>fa-file-image</td><td>f1c5</td></tr>
 <tr><td><i class="far fa-file-pdf"></i> file-pdf</td><td>fa-file-pdf</td><td>f1c1</td></tr>
 <tr><td><i class="far fa-file-powerpoint"></i> file-powerpoint</td><td>fa-file-powerpoint</td><td>f1c4</td></tr>
 <tr><td><i class="far fa-file-video"></i> file-video</td><td>fa-file-video</td><td>f1c8</td></tr>
 <tr><td><i class="far fa-file-word"></i> file-word</td><td>fa-file-word</td><td>f1c2</td></tr>
 <tr><td><i class="far fa-flag"></i> flag</td><td>fa-flag</td><td>f024</td></tr>
 <tr><td><i class="far fa-flushed"></i> flushed</td><td>fa-flushed</td><td>f579</td></tr>
 <tr><td><i class="far fa-folder"></i> folder</td><td>fa-folder</td><td>f07b</td></tr>
 <tr><td><i class="far fa-folder-open"></i> folder-open</td><td>fa-folder-open</td><td>f07c</td></tr>
 <tr><td><i class="far fa-frown"></i> frown</td><td>fa-frown</td><td>f119</td></tr>
 <tr><td><i class="far fa-frown-open"></i> frown-open</td><td>fa-frown-open</td><td>f57a</td></tr>
 <tr><td><i class="far fa-futbol"></i> futbol</td><td>fa-futbol</td><td>f1e3</td></tr>
 <tr><td><i class="far fa-gem"></i> gem</td><td>fa-gem</td><td>f3a5</td></tr>
 <tr><td><i class="far fa-grimace"></i> grimace</td><td>fa-grimace</td><td>f57f</td></tr>
 <tr><td><i class="far fa-grin"></i> grin</td><td>fa-grin</td><td>f580</td></tr>
 <tr><td><i class="far fa-grin-alt"></i> grin-alt</td><td>fa-grin-alt</td><td>f581</td></tr>
 <tr><td><i class="far fa-grin-beam"></i> grin-beam</td><td>fa-grin-beam</td><td>f582</td></tr>
 <tr><td><i class="far fa-grin-beam-sweat"></i> grin-beam-sweat</td><td>fa-grin-beam-sweat</td><td>f583</td></tr>
 <tr><td><i class="far fa-grin-hearts"></i> grin-hearts</td><td>fa-grin-hearts</td><td>f584</td></tr>
 <tr><td><i class="far fa-grin-squint"></i> grin-squint</td><td>fa-grin-squint</td><td>f585</td></tr>
 <tr><td><i class="far fa-grin-squint-tears"></i> grin-squint-tears</td><td>fa-grin-squint-tears</td><td>f586</td></tr>
 <tr><td><i class="far fa-grin-stars"></i> grin-stars</td><td>fa-grin-stars</td><td>f587</td></tr>
 <tr><td><i class="far fa-grin-tears"></i> grin-tears</td><td>fa-grin-tears</td><td>f588</td></tr>
 <tr><td><i class="far fa-grin-tongue"></i> grin-tongue</td><td>fa-grin-tongue</td><td>f589</td></tr>
 <tr><td><i class="far fa-grin-tongue-squint"></i> grin-tongue-squint</td><td>fa-grin-tongue-squint</td><td>f58a</td></tr>
 <tr><td><i class="far fa-grin-tongue-wink"></i> grin-tongue-wink</td><td>fa-grin-tongue-wink</td><td>f58b</td></tr>
 <tr><td><i class="far fa-grin-wink"></i> grin-wink</td><td>fa-grin-wink</td><td>f58c</td></tr>
 <tr><td><i class="far fa-hand-lizard"></i> hand-lizard</td><td>fa-hand-lizard</td><td>f258</td></tr>
 <tr><td><i class="far fa-hand-paper"></i> hand-paper</td><td>fa-hand-paper</td><td>f256</td></tr>
 <tr><td><i class="far fa-hand-peace"></i> hand-peace</td><td>fa-hand-peace</td><td>f25b</td></tr>
 <tr><td><i class="far fa-hand-point-down"></i> hand-point-down</td><td>fa-hand-point-down</td><td>f0a7</td></tr>
 <tr><td><i class="far fa-hand-point-left"></i> hand-point-left</td><td>fa-hand-point-left</td><td>f0a5</td></tr>
 <tr><td><i class="far fa-hand-point-right"></i> hand-point-right</td><td>fa-hand-point-right</td><td>f0a4</td></tr>
 <tr><td><i class="far fa-hand-point-up"></i> hand-point-up</td><td>fa-hand-point-up</td><td>f0a6</td></tr>
 <tr><td><i class="far fa-hand-pointer"></i> hand-pointer</td><td>fa-hand-pointer</td><td>f25a</td></tr>
 <tr><td><i class="far fa-hand-rock"></i> hand-rock</td><td>fa-hand-rock</td><td>f255</td></tr>
 <tr><td><i class="far fa-hand-scissors"></i> hand-scissors</td><td>fa-hand-scissors</td><td>f257</td></tr>
 <tr><td><i class="far fa-hand-spock"></i> hand-spock</td><td>fa-hand-spock</td><td>f259</td></tr>
 <tr><td><i class="far fa-handshake"></i> handshake</td><td>fa-handshake</td><td>f2b5</td></tr>
 <tr><td><i class="far fa-hdd"></i> hdd</td><td>fa-hdd</td><td>f0a0</td></tr>
 <tr><td><i class="far fa-heart"></i> heart</td><td>fa-heart</td><td>f004</td></tr>
 <tr><td><i class="far fa-hospital"></i> hospital</td><td>fa-hospital</td><td>f0f8</td></tr>
 <tr><td><i class="far fa-hourglass"></i> hourglass</td><td>fa-hourglass</td><td>f254</td></tr>
 <tr><td><i class="far fa-id-badge"></i> id-badge</td><td>fa-id-badge</td><td>f2c1</td></tr>
 <tr><td><i class="far fa-id-card"></i> id-card</td><td>fa-id-card</td><td>f2c2</td></tr>
 <tr><td><i class="far fa-image"></i> image</td><td>fa-image</td><td>f03e</td></tr>
 <tr><td><i class="far fa-images"></i> images</td><td>fa-images</td><td>f302</td></tr>
 <tr><td><i class="far fa-keyboard"></i> keyboard</td><td>fa-keyboard</td><td>f11c</td></tr>
 <tr><td><i class="far fa-kiss"></i> kiss</td><td>fa-kiss</td><td>f596</td></tr>
 <tr><td><i class="far fa-kiss-beam"></i> kiss-beam</td><td>fa-kiss-beam</td><td>f597</td></tr>
 <tr><td><i class="far fa-kiss-wink-heart"></i> kiss-wink-heart</td><td>fa-kiss-wink-heart</td><td>f598</td></tr>
 <tr><td><i class="far fa-laugh"></i> laugh</td><td>fa-laugh</td><td>f599</td></tr>
 <tr><td><i class="far fa-laugh-beam"></i> laugh-beam</td><td>fa-laugh-beam</td><td>f59a</td></tr>
 <tr><td><i class="far fa-laugh-squint"></i> laugh-squint</td><td>fa-laugh-squint</td><td>f59b</td></tr>
 <tr><td><i class="far fa-laugh-wink"></i> laugh-wink</td><td>fa-laugh-wink</td><td>f59c</td></tr>
 <tr><td><i class="far fa-lemon"></i> lemon</td><td>fa-lemon</td><td>f094</td></tr>
 <tr><td><i class="far fa-life-ring"></i> life-ring</td><td>fa-life-ring</td><td>f1cd</td></tr>
 <tr><td><i class="far fa-lightbulb"></i> lightbulb</td><td>fa-lightbulb</td><td>f0eb</td></tr>
 <tr><td><i class="far fa-list-alt"></i> list-alt</td><td>fa-list-alt</td><td>f022</td></tr>
 <tr><td><i class="far fa-map"></i> map</td><td>fa-map</td><td>f279</td></tr>
 <tr><td><i class="far fa-meh"></i> meh</td><td>fa-meh</td><td>f11a</td></tr>
 <tr><td><i class="far fa-meh-blank"></i> meh-blank</td><td>fa-meh-blank</td><td>f5a4</td></tr>
 <tr><td><i class="far fa-meh-rolling-eyes"></i> meh-rolling-eyes</td><td>fa-meh-rolling-eyes</td><td>f5a5</td></tr>
 <tr><td><i class="far fa-minus-square"></i> minus-square</td><td>fa-minus-square</td><td>f146</td></tr>
 <tr><td><i class="far fa-money-bill-alt"></i> money-bill-alt</td><td>fa-money-bill-alt</td><td>f3d1</td></tr>
 <tr><td><i class="far fa-moon"></i> moon</td><td>fa-moon</td><td>f186</td></tr>
 <tr><td><i class="far fa-newspaper"></i> newspaper</td><td>fa-newspaper</td><td>f1ea</td></tr>
 <tr><td><i class="far fa-object-group"></i> object-group</td><td>fa-object-group</td><td>f247</td></tr>
 <tr><td><i class="far fa-object-ungroup"></i> object-ungroup</td><td>fa-object-ungroup</td><td>f248</td></tr>
 <tr><td><i class="far fa-paper-plane"></i> paper-plane</td><td>fa-paper-plane</td><td>f1d8</td></tr>
 <tr><td><i class="far fa-pause-circle"></i> pause-circle</td><td>fa-pause-circle</td><td>f28b</td></tr>
 <tr><td><i class="far fa-play-circle"></i> play-circle</td><td>fa-play-circle</td><td>f144</td></tr>
 <tr><td><i class="far fa-plus-square"></i> plus-square</td><td>fa-plus-square</td><td>f0fe</td></tr>
 <tr><td><i class="far fa-question-circle"></i> question-circle</td><td>fa-question-circle</td><td>f059</td></tr>
 <tr><td><i class="far fa-registered"></i> registered</td><td>fa-registered</td><td>f25d</td></tr>
 <tr><td><i class="far fa-sad-cry"></i> sad-cry</td><td>fa-sad-cry</td><td>f5b3</td></tr>
 <tr><td><i class="far fa-sad-tear"></i> sad-tear</td><td>fa-sad-tear</td><td>f5b4</td></tr>
 <tr><td><i class="far fa-save"></i> save</td><td>fa-save</td><td>f0c7</td></tr>
 <tr><td><i class="far fa-share-square"></i> share-square</td><td>fa-share-square</td><td>f14d</td></tr>
 <tr><td><i class="far fa-smile"></i> smile</td><td>fa-smile</td><td>f118</td></tr>
 <tr><td><i class="far fa-smile-beam"></i> smile-beam</td><td>fa-smile-beam</td><td>f5b8</td></tr>
 <tr><td><i class="far fa-smile-wink"></i> smile-wink</td><td>fa-smile-wink</td><td>f4da</td></tr>
 <tr><td><i class="far fa-snowflake"></i> snowflake</td><td>fa-snowflake</td><td>f2dc</td></tr>
 <tr><td><i class="far fa-square"></i> square</td><td>fa-square</td><td>f0c8</td></tr>
 <tr><td><i class="far fa-star"></i> star</td><td>fa-star</td><td>f005</td></tr>
 <tr><td><i class="far fa-star-half"></i> star-half</td><td>fa-star-half</td><td>f089</td></tr>
 <tr><td><i class="far fa-sticky-note"></i> sticky-note</td><td>fa-sticky-note</td><td>f249</td></tr>
 <tr><td><i class="far fa-stop-circle"></i> stop-circle</td><td>fa-stop-circle</td><td>f28d</td></tr>
 <tr><td><i class="far fa-sun"></i> sun</td><td>fa-sun</td><td>f185</td></tr>
 <tr><td><i class="far fa-surprise"></i> surprise</td><td>fa-surprise</td><td>f5c2</td></tr>
 <tr><td><i class="far fa-thumbs-down"></i> thumbs-down</td><td>fa-thumbs-down</td><td>f165</td></tr>
 <tr><td><i class="far fa-thumbs-up"></i> thumbs-up</td><td>fa-thumbs-up</td><td>f164</td></tr>
 <tr><td><i class="far fa-times-circle"></i> times-circle</td><td>fa-times-circle</td><td>f057</td></tr>
 <tr><td><i class="far fa-tired"></i> tired</td><td>fa-tired</td><td>f5c8</td></tr>
 <tr><td><i class="far fa-trash-alt"></i> trash-alt</td><td>fa-trash-alt</td><td>f2ed</td></tr>
 <tr><td><i class="far fa-user"></i> user</td><td>fa-user</td><td>f007</td></tr>
 <tr><td><i class="far fa-user-circle"></i> user-circle</td><td>fa-user-circle</td><td>f2bd</td></tr>
 <tr><td><i class="far fa-window-close"></i> window-close</td><td>fa-window-close</td><td>f410</td></tr>
 <tr><td><i class="far fa-window-maximize"></i> window-maximize</td><td>fa-window-maximize</td><td>f2d0</td></tr>
 <tr><td><i class="far fa-window-minimize"></i> window-minimize</td><td>fa-window-minimize</td><td>f2d1</td></tr>
 <tr><td><i class="far fa-window-restore"></i> window-restore</td><td>fa-window-restore</td><td>f2d2</td></tr>
</table>

</div>

## Font Awesome Icons List - Brand Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>Name</th>
<th>Code</th>
<th>CSS Content Code</th>
</tr>
 <tr><td><i class="fab fa-500px"></i> 500px</td><td>fa-500px</td><td>f26e</td></tr>
 <tr><td><i class="fab fa-accessible-icon"></i> accessible-icon</td><td>fa-accessible-icon</td><td>f368</td></tr>
 <tr><td><i class="fab fa-accusoft"></i> accusoft</td><td>fa-accusoft</td><td>f369</td></tr>
 <tr><td><i class="fab fa-acquisitions-incorporated"></i> acquisitions-incorporated</td><td>fa-acquisitions-incorporated</td><td>f6af</td></tr>
 <tr><td><i class="fab fa-adn"></i> adn</td><td>fa-adn</td><td>f170</td></tr>
 <tr><td><i class="fab fa-adobe"></i> adobe</td><td>fa-adobe</td><td>f778</td></tr>
 <tr><td><i class="fab fa-adversal"></i> adversal</td><td>fa-adversal</td><td>f36a</td></tr>
 <tr><td><i class="fab fa-affiliatetheme"></i> affiliatetheme</td><td>fa-affiliatetheme</td><td>f36b</td></tr>
 <tr><td><i class="fab fa-airbnb"></i> airbnb</td><td>fa-airbnb</td><td>f834</td></tr>
 <tr><td><i class="fab fa-algolia"></i> algolia</td><td>fa-algolia</td><td>f36c</td></tr>
 <tr><td><i class="fab fa-alipay"></i> alipay</td><td>fa-alipay</td><td>f642</td></tr>
 <tr><td><i class="fab fa-amazon"></i> amazon</td><td>fa-amazon</td><td>f270</td></tr>
 <tr><td><i class="fab fa-amazon-pay"></i> amazon-pay</td><td>fa-amazon-pay</td><td>f42c</td></tr>
 <tr><td><i class="fab fa-amilia"></i> amilia</td><td>fa-amilia</td><td>f36d</td></tr>
 <tr><td><i class="fab fa-android"></i> android</td><td>fa-android</td><td>f17b</td></tr>
 <tr><td><i class="fab fa-angellist"></i> angellist</td><td>fa-angellist</td><td>f209</td></tr>
 <tr><td><i class="fab fa-angrycreative"></i> angrycreative</td><td>fa-angrycreative</td><td>f36e</td></tr>
 <tr><td><i class="fab fa-angular"></i> angular</td><td>fa-angular</td><td>f420</td></tr>
 <tr><td><i class="fab fa-app-store"></i> app-store</td><td>fa-app-store</td><td>f36f</td></tr>
 <tr><td><i class="fab fa-app-store-ios"></i> app-store-ios</td><td>fa-app-store-ios</td><td>f370</td></tr>
 <tr><td><i class="fab fa-apper"></i> apper</td><td>fa-apper</td><td>f371</td></tr>
 <tr><td><i class="fab fa-apple"></i> apple</td><td>fa-apple</td><td>f179</td></tr>
 <tr><td><i class="fab fa-apple-pay"></i> apple-pay</td><td>fa-apple-pay</td><td>f415</td></tr>
 <tr><td><i class="fab fa-artstation"></i> artstation</td><td>fa-artstation</td><td>f77a</td></tr>
 <tr><td><i class="fab fa-asymmetrik"></i> asymmetrik</td><td>fa-asymmetrik</td><td>f372</td></tr>
 <tr><td><i class="fab fa-atlassian"></i> atlassian</td><td>fa-atlassian</td><td>f77b</td></tr>
 <tr><td><i class="fab fa-audible"></i> audible</td><td>fa-audible</td><td>f373</td></tr>
 <tr><td><i class="fab fa-autoprefixer"></i> autoprefixer</td><td>fa-autoprefixer</td><td>f41c</td></tr>
 <tr><td><i class="fab fa-avianex"></i> avianex</td><td>fa-avianex</td><td>f374</td></tr>
 <tr><td><i class="fab fa-aviato"></i> aviato</td><td>fa-aviato</td><td>f421</td></tr>
 <tr><td><i class="fab fa-aws"></i> aws</td><td>fa-aws</td><td>f375</td></tr>
 <tr><td><i class="fab fa-bandcamp"></i> bandcamp</td><td>fa-bandcamp</td><td>f2d5</td></tr>
 <tr><td><i class="fab fa-battle-net"></i> battle-net</td><td>fa-battle-net</td><td>f835</td></tr>
 <tr><td><i class="fab fa-behance"></i> behance</td><td>fa-behance</td><td>f1b4</td></tr>
 <tr><td><i class="fab fa-behance-square"></i> behance-square</td><td>fa-behance-square</td><td>f1b5</td></tr>
 <tr><td><i class="fab fa-bimobject"></i> bimobject</td><td>fa-bimobject</td><td>f378</td></tr>
 <tr><td><i class="fab fa-bitbucket"></i> bitbucket</td><td>fa-bitbucket</td><td>f171</td></tr>
 <tr><td><i class="fab fa-bitcoin"></i> bitcoin</td><td>fa-bitcoin</td><td>f379</td></tr>
 <tr><td><i class="fab fa-bity"></i> bity</td><td>fa-bity</td><td>f37a</td></tr>
 <tr><td><i class="fab fa-black-tie"></i> black-tie</td><td>fa-black-tie</td><td>f27e</td></tr>
 <tr><td><i class="fab fa-blackberry"></i> blackberry</td><td>fa-blackberry</td><td>f37b</td></tr>
 <tr><td><i class="fab fa-blogger"></i> blogger</td><td>fa-blogger</td><td>f37c</td></tr>
 <tr><td><i class="fab fa-blogger-b"></i> blogger-b</td><td>fa-blogger-b</td><td>f37d</td></tr>
 <tr><td><i class="fab fa-bluetooth"></i> bluetooth</td><td>fa-bluetooth</td><td>f293</td></tr>
 <tr><td><i class="fab fa-bluetooth-b"></i> bluetooth-b</td><td>fa-bluetooth-b</td><td>f294</td></tr>
 <tr><td><i class="fab fa-bootstrap"></i> bootstrap</td><td>fa-bootstrap</td><td>f836</td></tr>
 <tr><td><i class="fab fa-btc"></i> btc</td><td>fa-btc</td><td>f15a</td></tr>
 <tr><td><i class="fab fa-buffer"></i> buffer</td><td>fa-buffer</td><td>f837</td></tr>
 <tr><td><i class="fab fa-buromobelexperte"></i> buromobelexperte</td><td>fa-buromobelexperte</td><td>f37f</td></tr>
 <tr><td><i class="fab fa-buysellads"></i> buysellads</td><td>fa-buysellads</td><td>f20d</td></tr>
 <tr><td><i class="fab fa-canadian-maple-leaf"></i> canadian-maple-leaf</td><td>fa-canadian-maple-leaf</td><td>f785</td></tr>
 <tr><td><i class="fab fa-cc-amazon-pay"></i> cc-amazon-pay</td><td>fa-cc-amazon-pay</td><td>f42d</td></tr>
 <tr><td><i class="fab fa-cc-amex"></i> cc-amex</td><td>fa-cc-amex</td><td>f1f3</td></tr>
 <tr><td><i class="fab fa-cc-apple-pay"></i> cc-apple-pay</td><td>fa-cc-apple-pay</td><td>f416</td></tr>
 <tr><td><i class="fab fa-cc-diners-club"></i> cc-diners-club</td><td>fa-cc-diners-club</td><td>f24c</td></tr>
 <tr><td><i class="fab fa-cc-discover"></i> cc-discover</td><td>fa-cc-discover</td><td>f1f2</td></tr>
 <tr><td><i class="fab fa-cc-jcb"></i> cc-jcb</td><td>fa-cc-jcb</td><td>f24b</td></tr>
 <tr><td><i class="fab fa-cc-mastercard"></i> cc-mastercard</td><td>fa-cc-mastercard</td><td>f1f1</td></tr>
 <tr><td><i class="fab fa-cc-paypal"></i> cc-paypal</td><td>fa-cc-paypal</td><td>f1f4</td></tr>
 <tr><td><i class="fab fa-cc-stripe"></i> cc-stripe</td><td>fa-cc-stripe</td><td>f1f5</td></tr>
 <tr><td><i class="fab fa-cc-visa"></i> cc-visa</td><td>fa-cc-visa</td><td>f1f0</td></tr>
 <tr><td><i class="fab fa-centercode"></i> centercode</td><td>fa-centercode</td><td>f380</td></tr>
 <tr><td><i class="fab fa-centos"></i> centos</td><td>fa-centos</td><td>f789</td></tr>
 <tr><td><i class="fab fa-chrome"></i> chrome</td><td>fa-chrome</td><td>f268</td></tr>
 <tr><td><i class="fab fa-chromecast"></i> chromecast</td><td>fa-chromecast</td><td>f838</td></tr>
 <tr><td><i class="fab fa-cloudscale"></i> cloudscale</td><td>fa-cloudscale</td><td>f383</td></tr>
 <tr><td><i class="fab fa-cloudsmith"></i> cloudsmith</td><td>fa-cloudsmith</td><td>f384</td></tr>
 <tr><td><i class="fab fa-cloudversify"></i> cloudversify</td><td>fa-cloudversify</td><td>f385</td></tr>
 <tr><td><i class="fab fa-codepen"></i> codepen</td><td>fa-codepen</td><td>f1cb</td></tr>
 <tr><td><i class="fab fa-codiepie"></i> codiepie</td><td>fa-codiepie</td><td>f284</td></tr>
 <tr><td><i class="fab fa-confluence"></i> confluence</td><td>fa-confluence</td><td>f78d</td></tr>
 <tr><td><i class="fab fa-connectdevelop"></i> connectdevelop</td><td>fa-connectdevelop</td><td>f20e</td></tr>
 <tr><td><i class="fab fa-contao"></i> contao</td><td>fa-contao</td><td>f26d</td></tr>
 <tr><td><i class="fab fa-cpanel"></i> cpanel</td><td>fa-cpanel</td><td>f388</td></tr>
 <tr><td><i class="fab fa-creative-commons"></i> creative-commons</td><td>fa-creative-commons</td><td>f25e</td></tr>
 <tr><td><i class="fab fa-creative-commons-by"></i> creative-commons-by</td><td>fa-creative-commons-by</td><td>f4e7</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc"></i> creative-commons-nc</td><td>fa-creative-commons-nc</td><td>f4e8</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc-eu"></i> creative-commons-nc-eu</td><td>fa-creative-commons-nc-eu</td><td>f4e9</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc-jp"></i> creative-commons-nc-jp</td><td>fa-creative-commons-nc-jp</td><td>f4ea</td></tr>
 <tr><td><i class="fab fa-creative-commons-nd"></i> creative-commons-nd</td><td>fa-creative-commons-nd</td><td>f4eb</td></tr>
 <tr><td><i class="fab fa-creative-commons-pd"></i> creative-commons-pd</td><td>fa-creative-commons-pd</td><td>f4ec</td></tr>
 <tr><td><i class="fab fa-creative-commons-pd-alt"></i> creative-commons-pd-alt</td><td>fa-creative-commons-pd-alt</td><td>f4ed</td></tr>
 <tr><td><i class="fab fa-creative-commons-remix"></i> creative-commons-remix</td><td>fa-creative-commons-remix</td><td>f4ee</td></tr>
 <tr><td><i class="fab fa-creative-commons-sa"></i> creative-commons-sa</td><td>fa-creative-commons-sa</td><td>f4ef</td></tr>
 <tr><td><i class="fab fa-creative-commons-sampling"></i> creative-commons-sampling</td><td>fa-creative-commons-sampling</td><td>f4f0</td></tr>
 <tr><td><i class="fab fa-creative-commons-sampling-plus"></i> creative-commons-sampling-plus</td><td>fa-creative-commons-sampling-plus</td><td>f4f1</td></tr>
 <tr><td><i class="fab fa-creative-commons-share"></i> creative-commons-share</td><td>fa-creative-commons-share</td><td>f4f2</td></tr>
 <tr><td><i class="fab fa-creative-commons-zero"></i> creative-commons-zero</td><td>fa-creative-commons-zero</td><td>f4f3</td></tr>
 <tr><td><i class="fab fa-critical-role"></i> critical-role</td><td>fa-critical-role</td><td>f6c9</td></tr>
 <tr><td><i class="fab fa-css3"></i> css3</td><td>fa-css3</td><td>f13c</td></tr>
 <tr><td><i class="fab fa-css3-alt"></i> css3-alt</td><td>fa-css3-alt</td><td>f38b</td></tr>
 <tr><td><i class="fab fa-cuttlefish"></i> cuttlefish</td><td>fa-cuttlefish</td><td>f38c</td></tr>
 <tr><td><i class="fab fa-d-and-d"></i> d-and-d</td><td>fa-d-and-d</td><td>f38d</td></tr>
 <tr><td><i class="fab fa-d-and-d-beyond"></i> d-and-d-beyond</td><td>fa-d-and-d-beyond</td><td>f6ca</td></tr>
 <tr><td><i class="fab fa-dashcube"></i> dashcube</td><td>fa-dashcube</td><td>f210</td></tr>
 <tr><td><i class="fab fa-delicious"></i> delicious</td><td>fa-delicious</td><td>f1a5</td></tr>
 <tr><td><i class="fab fa-deploydog"></i> deploydog</td><td>fa-deploydog</td><td>f38e</td></tr>
 <tr><td><i class="fab fa-deskpro"></i> deskpro</td><td>fa-deskpro</td><td>f38f</td></tr>
 <tr><td><i class="fab fa-dev"></i> dev</td><td>fa-dev</td><td>f6cc</td></tr>
 <tr><td><i class="fab fa-deviantart"></i> deviantart</td><td>fa-deviantart</td><td>f1bd</td></tr>
 <tr><td><i class="fab fa-dhl"></i> dhl</td><td>fa-dhl</td><td>f790</td></tr>
 <tr><td><i class="fab fa-diaspora"></i> diaspora</td><td>fa-diaspora</td><td>f791</td></tr>
 <tr><td><i class="fab fa-digg"></i> digg</td><td>fa-digg</td><td>f1a6</td></tr>
 <tr><td><i class="fab fa-digital-ocean"></i> digital-ocean</td><td>fa-digital-ocean</td><td>f391</td></tr>
 <tr><td><i class="fab fa-discord"></i> discord</td><td>fa-discord</td><td>f392</td></tr>
 <tr><td><i class="fab fa-discourse"></i> discourse</td><td>fa-discourse</td><td>f393</td></tr>
 <tr><td><i class="fab fa-dochub"></i> dochub</td><td>fa-dochub</td><td>f394</td></tr>
 <tr><td><i class="fab fa-docker"></i> docker</td><td>fa-docker</td><td>f395</td></tr>
 <tr><td><i class="fab fa-draft2digital"></i> draft2digital</td><td>fa-draft2digital</td><td>f396</td></tr>
 <tr><td><i class="fab fa-dribbble"></i> dribbble</td><td>fa-dribbble</td><td>f17d</td></tr>
 <tr><td><i class="fab fa-dribbble-square"></i> dribbble-square</td><td>fa-dribbble-square</td><td>f397</td></tr>
 <tr><td><i class="fab fa-dropbox"></i> dropbox</td><td>fa-dropbox</td><td>f16b</td></tr>
 <tr><td><i class="fab fa-drupal"></i> drupal</td><td>fa-drupal</td><td>f1a9</td></tr>
 <tr><td><i class="fab fa-dyalog"></i> dyalog</td><td>fa-dyalog</td><td>f399</td></tr>
 <tr><td><i class="fab fa-earlybirds"></i> earlybirds</td><td>fa-earlybirds</td><td>f39a</td></tr>
 <tr><td><i class="fab fa-ebay"></i> ebay</td><td>fa-ebay</td><td>f4f4</td></tr>
 <tr><td><i class="fab fa-edge"></i> edge</td><td>fa-edge</td><td>f282</td></tr>
 <tr><td><i class="fab fa-elementor"></i> elementor</td><td>fa-elementor</td><td>f430</td></tr>
 <tr><td><i class="fab fa-ello"></i> ello</td><td>fa-ello</td><td>f5f1</td></tr>
 <tr><td><i class="fab fa-ember"></i> ember</td><td>fa-ember</td><td>f423</td></tr>
 <tr><td><i class="fab fa-empire"></i> empire</td><td>fa-empire</td><td>f1d1</td></tr>
 <tr><td><i class="fab fa-envira"></i> envira</td><td>fa-envira</td><td>f299</td></tr>
 <tr><td><i class="fab fa-erlang"></i> erlang</td><td>fa-erlang</td><td>f39d</td></tr>
 <tr><td><i class="fab fa-ethereum"></i> ethereum</td><td>fa-ethereum</td><td>f42e</td></tr>
 <tr><td><i class="fab fa-etsy"></i> etsy</td><td>fa-etsy</td><td>f2d7</td></tr>
 <tr><td><i class="fab fa-evernote"></i> evernote</td><td>fa-evernote</td><td>f839</td></tr>
 <tr><td><i class="fab fa-expeditedssl"></i> expeditedssl</td><td>fa-expeditedssl</td><td>f23e</td></tr>
 <tr><td><i class="fab fa-facebook"></i> facebook</td><td>fa-facebook</td><td>f09a</td></tr>
 <tr><td><i class="fab fa-facebook-f"></i> facebook-f</td><td>fa-facebook-f</td><td>f39e</td></tr>
 <tr><td><i class="fab fa-facebook-messenger"></i> facebook-messenger</td><td>fa-facebook-messenger</td><td>f39f</td></tr>
 <tr><td><i class="fab fa-facebook-square"></i> facebook-square</td><td>fa-facebook-square</td><td>f082</td></tr>
 <tr><td><i class="fab fa-fantasy-flight-games"></i> fantasy-flight-games</td><td>fa-fantasy-flight-games</td><td>f6dc</td></tr>
 <tr><td><i class="fab fa-fedex"></i> fedex</td><td>fa-fedex</td><td>f797</td></tr>
 <tr><td><i class="fab fa-fedora"></i> fedora</td><td>fa-fedora</td><td>f798</td></tr>
 <tr><td><i class="fab fa-figma"></i> figma</td><td>fa-figma</td><td>f799</td></tr>
 <tr><td><i class="fab fa-firefox"></i> firefox</td><td>fa-firefox</td><td>f269</td></tr>
 <tr><td><i class="fab fa-first-order"></i> first-order</td><td>fa-first-order</td><td>f2b0</td></tr>
 <tr><td><i class="fab fa-first-order-alt"></i> first-order-alt</td><td>fa-first-order-alt</td><td>f50a</td></tr>
 <tr><td><i class="fab fa-firstdraft"></i> firstdraft</td><td>fa-firstdraft</td><td>f3a1</td></tr>
 <tr><td><i class="fab fa-flickr"></i> flickr</td><td>fa-flickr</td><td>f16e</td></tr>
 <tr><td><i class="fab fa-flipboard"></i> flipboard</td><td>fa-flipboard</td><td>f44d</td></tr>
 <tr><td><i class="fab fa-fly"></i> fly</td><td>fa-fly</td><td>f417</td></tr>
 <tr><td><i class="fab fa-font-awesome"></i> font-awesome</td><td>fa-font-awesome</td><td>f2b4</td></tr>
 <tr><td><i class="fab fa-font-awesome-alt"></i> font-awesome-alt</td><td>fa-font-awesome-alt</td><td>f35c</td></tr>
 <tr><td><i class="fab fa-font-awesome-flag"></i> font-awesome-flag</td><td>fa-font-awesome-flag</td><td>f425</td></tr>
 <tr><td><i class="fab fa-fonticons"></i> fonticons</td><td>fa-fonticons</td><td>f280</td></tr>
 <tr><td><i class="fab fa-fonticons-fi"></i> fonticons-fi</td><td>fa-fonticons-fi</td><td>f3a2</td></tr>
 <tr><td><i class="fab fa-fort-awesome"></i> fort-awesome</td><td>fa-fort-awesome</td><td>f286</td></tr>
 <tr><td><i class="fab fa-fort-awesome-alt"></i> fort-awesome-alt</td><td>fa-fort-awesome-alt</td><td>f3a3</td></tr>
 <tr><td><i class="fab fa-forumbee"></i> forumbee</td><td>fa-forumbee</td><td>f211</td></tr>
 <tr><td><i class="fab fa-foursquare"></i> foursquare</td><td>fa-foursquare</td><td>f180</td></tr>
 <tr><td><i class="fab fa-free-code-camp"></i> free-code-camp</td><td>fa-free-code-camp</td><td>f2c5</td></tr>
 <tr><td><i class="fab fa-freebsd"></i> freebsd</td><td>fa-freebsd</td><td>f3a4</td></tr>
 <tr><td><i class="fab fa-fulcrum"></i> fulcrum</td><td>fa-fulcrum</td><td>f50b</td></tr>
 <tr><td><i class="fab fa-galactic-republic"></i> galactic-republic</td><td>fa-galactic-republic</td><td>f50c</td></tr>
 <tr><td><i class="fab fa-galactic-senate"></i> galactic-senate</td><td>fa-galactic-senate</td><td>f50d</td></tr>
 <tr><td><i class="fab fa-get-pocket"></i> get-pocket</td><td>fa-get-pocket</td><td>f265</td></tr>
 <tr><td><i class="fab fa-gg"></i> gg</td><td>fa-gg</td><td>f260</td></tr>
 <tr><td><i class="fab fa-gg-circle"></i> gg-circle</td><td>fa-gg-circle</td><td>f261</td></tr>
 <tr><td><i class="fab fa-git"></i> git</td><td>fa-git</td><td>f1d3</td></tr>
 <tr><td><i class="fab fa-git-alt"></i> git-alt</td><td>fa-git-alt</td><td>f841</td></tr>
 <tr><td><i class="fab fa-git-square"></i> git-square</td><td>fa-git-square</td><td>f1d2</td></tr>
 <tr><td><i class="fab fa-github"></i> github</td><td>fa-github</td><td>f09b</td></tr>
 <tr><td><i class="fab fa-github-alt"></i> github-alt</td><td>fa-github-alt</td><td>f113</td></tr>
 <tr><td><i class="fab fa-github-square"></i> github-square</td><td>fa-github-square</td><td>f092</td></tr>
 <tr><td><i class="fab fa-gitkraken"></i> gitkraken</td><td>fa-gitkraken</td><td>f3a6</td></tr>
 <tr><td><i class="fab fa-gitlab"></i> gitlab</td><td>fa-gitlab</td><td>f296</td></tr>
 <tr><td><i class="fab fa-gitter"></i> gitter</td><td>fa-gitter</td><td>f426</td></tr>
 <tr><td><i class="fab fa-glide"></i> glide</td><td>fa-glide</td><td>f2a5</td></tr>
 <tr><td><i class="fab fa-glide-g"></i> glide-g</td><td>fa-glide-g</td><td>f2a6</td></tr>
 <tr><td><i class="fab fa-gofore"></i> gofore</td><td>fa-gofore</td><td>f3a7</td></tr>
 <tr><td><i class="fab fa-goodreads"></i> goodreads</td><td>fa-goodreads</td><td>f3a8</td></tr>
 <tr><td><i class="fab fa-goodreads-g"></i> goodreads-g</td><td>fa-goodreads-g</td><td>f3a9</td></tr>
 <tr><td><i class="fab fa-google"></i> google</td><td>fa-google</td><td>f1a0</td></tr>
 <tr><td><i class="fab fa-google-drive"></i> google-drive</td><td>fa-google-drive</td><td>f3aa</td></tr>
 <tr><td><i class="fab fa-google-play"></i> google-play</td><td>fa-google-play</td><td>f3ab</td></tr>
 <tr><td><i class="fab fa-google-plus"></i> google-plus</td><td>fa-google-plus</td><td>f2b3</td></tr>
 <tr><td><i class="fab fa-google-plus-g"></i> google-plus-g</td><td>fa-google-plus-g</td><td>f0d5</td></tr>
 <tr><td><i class="fab fa-google-plus-square"></i> google-plus-square</td><td>fa-google-plus-square</td><td>f0d4</td></tr>
 <tr><td><i class="fab fa-google-wallet"></i> google-wallet</td><td>fa-google-wallet</td><td>f1ee</td></tr>
 <tr><td><i class="fab fa-gratipay"></i> gratipay</td><td>fa-gratipay</td><td>f184</td></tr>
 <tr><td><i class="fab fa-grav"></i> grav</td><td>fa-grav</td><td>f2d6</td></tr>
 <tr><td><i class="fab fa-gripfire"></i> gripfire</td><td>fa-gripfire</td><td>f3ac</td></tr>
 <tr><td><i class="fab fa-grunt"></i> grunt</td><td>fa-grunt</td><td>f3ad</td></tr>
 <tr><td><i class="fab fa-gulp"></i> gulp</td><td>fa-gulp</td><td>f3ae</td></tr>
 <tr><td><i class="fab fa-hacker-news"></i> hacker-news</td><td>fa-hacker-news</td><td>f1d4</td></tr>
 <tr><td><i class="fab fa-hacker-news-square"></i> hacker-news-square</td><td>fa-hacker-news-square</td><td>f3af</td></tr>
 <tr><td><i class="fab fa-hackerrank"></i> hackerrank</td><td>fa-hackerrank</td><td>f5f7</td></tr>
 <tr><td><i class="fab fa-hips"></i> hips</td><td>fa-hips</td><td>f452</td></tr>
 <tr><td><i class="fab fa-hire-a-helper"></i> hire-a-helper</td><td>fa-hire-a-helper</td><td>f3b0</td></tr>
 <tr><td><i class="fab fa-hooli"></i> hooli</td><td>fa-hooli</td><td>f427</td></tr>
 <tr><td><i class="fab fa-hornbill"></i> hornbill</td><td>fa-hornbill</td><td>f592</td></tr>
 <tr><td><i class="fab fa-hotjar"></i> hotjar</td><td>fa-hotjar</td><td>f3b1</td></tr>
 <tr><td><i class="fab fa-houzz"></i> houzz</td><td>fa-houzz</td><td>f27c</td></tr>
 <tr><td><i class="fab fa-html5"></i> html5</td><td>fa-html5</td><td>f13b</td></tr>
 <tr><td><i class="fab fa-hubspot"></i> hubspot</td><td>fa-hubspot</td><td>f3b2</td></tr>
 <tr><td><i class="fab fa-imdb"></i> imdb</td><td>fa-imdb</td><td>f2d8</td></tr>
 <tr><td><i class="fab fa-instagram"></i> instagram</td><td>fa-instagram</td><td>f16d</td></tr>
 <tr><td><i class="fab fa-intercom"></i> intercom</td><td>fa-intercom</td><td>f7af</td></tr>
 <tr><td><i class="fab fa-internet-explorer"></i> internet-explorer</td><td>fa-internet-explorer</td><td>f26b</td></tr>
 <tr><td><i class="fab fa-invision"></i> invision</td><td>fa-invision</td><td>f7b0</td></tr>
 <tr><td><i class="fab fa-ioxhost"></i> ioxhost</td><td>fa-ioxhost</td><td>f208</td></tr>
 <tr><td><i class="fab fa-itch-io"></i> itch-io</td><td>fa-itch-io</td><td>f83a</td></tr>
 <tr><td><i class="fab fa-itunes"></i> itunes</td><td>fa-itunes</td><td>f3b4</td></tr>
 <tr><td><i class="fab fa-itunes-note"></i> itunes-note</td><td>fa-itunes-note</td><td>f3b5</td></tr>
 <tr><td><i class="fab fa-java"></i> java</td><td>fa-java</td><td>f4e4</td></tr>
 <tr><td><i class="fab fa-jedi-order"></i> jedi-order</td><td>fa-jedi-order</td><td>f50e</td></tr>
 <tr><td><i class="fab fa-jenkins"></i> jenkins</td><td>fa-jenkins</td><td>f3b6</td></tr>
 <tr><td><i class="fab fa-jira"></i> jira</td><td>fa-jira</td><td>f7b1</td></tr>
 <tr><td><i class="fab fa-joget"></i> joget</td><td>fa-joget</td><td>f3b7</td></tr>
 <tr><td><i class="fab fa-joomla"></i> joomla</td><td>fa-joomla</td><td>f1aa</td></tr>
 <tr><td><i class="fab fa-js"></i> js</td><td>fa-js</td><td>f3b8</td></tr>
 <tr><td><i class="fab fa-js-square"></i> js-square</td><td>fa-js-square</td><td>f3b9</td></tr>
 <tr><td><i class="fab fa-jsfiddle"></i> jsfiddle</td><td>fa-jsfiddle</td><td>f1cc</td></tr>
 <tr><td><i class="fab fa-kaggle"></i> kaggle</td><td>fa-kaggle</td><td>f5fa</td></tr>
 <tr><td><i class="fab fa-keybase"></i> keybase</td><td>fa-keybase</td><td>f4f5</td></tr>
 <tr><td><i class="fab fa-keycdn"></i> keycdn</td><td>fa-keycdn</td><td>f3ba</td></tr>
 <tr><td><i class="fab fa-kickstarter"></i> kickstarter</td><td>fa-kickstarter</td><td>f3bb</td></tr>
 <tr><td><i class="fab fa-kickstarter-k"></i> kickstarter-k</td><td>fa-kickstarter-k</td><td>f3bc</td></tr>
 <tr><td><i class="fab fa-korvue"></i> korvue</td><td>fa-korvue</td><td>f42f</td></tr>
 <tr><td><i class="fab fa-laravel"></i> laravel</td><td>fa-laravel</td><td>f3bd</td></tr>
 <tr><td><i class="fab fa-lastfm"></i> lastfm</td><td>fa-lastfm</td><td>f202</td></tr>
 <tr><td><i class="fab fa-lastfm-square"></i> lastfm-square</td><td>fa-lastfm-square</td><td>f203</td></tr>
 <tr><td><i class="fab fa-leanpub"></i> leanpub</td><td>fa-leanpub</td><td>f212</td></tr>
 <tr><td><i class="fab fa-less"></i> less</td><td>fa-less</td><td>f41d</td></tr>
 <tr><td><i class="fab fa-line"></i> line</td><td>fa-line</td><td>f3c0</td></tr>
 <tr><td><i class="fab fa-linkedin"></i> linkedin</td><td>fa-linkedin</td><td>f08c</td></tr>
 <tr><td><i class="fab fa-linkedin-in"></i> linkedin-in</td><td>fa-linkedin-in</td><td>f0e1</td></tr>
 <tr><td><i class="fab fa-linode"></i> linode</td><td>fa-linode</td><td>f2b8</td></tr>
 <tr><td><i class="fab fa-linux"></i> linux</td><td>fa-linux</td><td>f17c</td></tr>
 <tr><td><i class="fab fa-lyft"></i> lyft</td><td>fa-lyft</td><td>f3c3</td></tr>
 <tr><td><i class="fab fa-magento"></i> magento</td><td>fa-magento</td><td>f3c4</td></tr>
 <tr><td><i class="fab fa-mailchimp"></i> mailchimp</td><td>fa-mailchimp</td><td>f59e</td></tr>
 <tr><td><i class="fab fa-mandalorian"></i> mandalorian</td><td>fa-mandalorian</td><td>f50f</td></tr>
 <tr><td><i class="fab fa-markdown"></i> markdown</td><td>fa-markdown</td><td>f60f</td></tr>
 <tr><td><i class="fab fa-mastodon"></i> mastodon</td><td>fa-mastodon</td><td>f4f6</td></tr>
 <tr><td><i class="fab fa-maxcdn"></i> maxcdn</td><td>fa-maxcdn</td><td>f136</td></tr>
 <tr><td><i class="fab fa-medapps"></i> medapps</td><td>fa-medapps</td><td>f3c6</td></tr>
 <tr><td><i class="fab fa-medium"></i> medium</td><td>fa-medium</td><td>f23a</td></tr>
 <tr><td><i class="fab fa-medium-m"></i> medium-m</td><td>fa-medium-m</td><td>f3c7</td></tr>
 <tr><td><i class="fab fa-medrt"></i> medrt</td><td>fa-medrt</td><td>f3c8</td></tr>
 <tr><td><i class="fab fa-meetup"></i> meetup</td><td>fa-meetup</td><td>f2e0</td></tr>
 <tr><td><i class="fab fa-megaport"></i> megaport</td><td>fa-megaport</td><td>f5a3</td></tr>
 <tr><td><i class="fab fa-mendeley"></i> mendeley</td><td>fa-mendeley</td><td>f7b3</td></tr>
 <tr><td><i class="fab fa-microsoft"></i> microsoft</td><td>fa-microsoft</td><td>f3ca</td></tr>
 <tr><td><i class="fab fa-mix"></i> mix</td><td>fa-mix</td><td>f3cb</td></tr>
 <tr><td><i class="fab fa-mixcloud"></i> mixcloud</td><td>fa-mixcloud</td><td>f289</td></tr>
 <tr><td><i class="fab fa-mizuni"></i> mizuni</td><td>fa-mizuni</td><td>f3cc</td></tr>
 <tr><td><i class="fab fa-modx"></i> modx</td><td>fa-modx</td><td>f285</td></tr>
 <tr><td><i class="fab fa-monero"></i> monero</td><td>fa-monero</td><td>f3d0</td></tr>
 <tr><td><i class="fab fa-napster"></i> napster</td><td>fa-napster</td><td>f3d2</td></tr>
 <tr><td><i class="fab fa-neos"></i> neos</td><td>fa-neos</td><td>f612</td></tr>
 <tr><td><i class="fab fa-nimblr"></i> nimblr</td><td>fa-nimblr</td><td>f5a8</td></tr>
 <tr><td><i class="fab fa-node"></i> node</td><td>fa-node</td><td>f419</td></tr>
 <tr><td><i class="fab fa-node-js"></i> node-js</td><td>fa-node-js</td><td>f3d3</td></tr>
 <tr><td><i class="fab fa-npm"></i> npm</td><td>fa-npm</td><td>f3d4</td></tr>
 <tr><td><i class="fab fa-ns8"></i> ns8</td><td>fa-ns8</td><td>f3d5</td></tr>
 <tr><td><i class="fab fa-nutritionix"></i> nutritionix</td><td>fa-nutritionix</td><td>f3d6</td></tr>
 <tr><td><i class="fab fa-odnoklassniki"></i> odnoklassniki</td><td>fa-odnoklassniki</td><td>f263</td></tr>
 <tr><td><i class="fab fa-odnoklassniki-square"></i> odnoklassniki-square</td><td>fa-odnoklassniki-square</td><td>f264</td></tr>
 <tr><td><i class="fab fa-old-republic"></i> old-republic</td><td>fa-old-republic</td><td>f510</td></tr>
 <tr><td><i class="fab fa-opencart"></i> opencart</td><td>fa-opencart</td><td>f23d</td></tr>
 <tr><td><i class="fab fa-openid"></i> openid</td><td>fa-openid</td><td>f19b</td></tr>
 <tr><td><i class="fab fa-opera"></i> opera</td><td>fa-opera</td><td>f26a</td></tr>
 <tr><td><i class="fab fa-optin-monster"></i> optin-monster</td><td>fa-optin-monster</td><td>f23c</td></tr>
 <tr><td><i class="fab fa-osi"></i> osi</td><td>fa-osi</td><td>f41a</td></tr>
 <tr><td><i class="fab fa-page4"></i> page4</td><td>fa-page4</td><td>f3d7</td></tr>
 <tr><td><i class="fab fa-pagelines"></i> pagelines</td><td>fa-pagelines</td><td>f18c</td></tr>
 <tr><td><i class="fab fa-palfed"></i> palfed</td><td>fa-palfed</td><td>f3d8</td></tr>
 <tr><td><i class="fab fa-patreon"></i> patreon</td><td>fa-patreon</td><td>f3d9</td></tr>
 <tr><td><i class="fab fa-paypal"></i> paypal</td><td>fa-paypal</td><td>f1ed</td></tr>
 <tr><td><i class="fab fa-penny-arcade"></i> penny-arcade</td><td>fa-penny-arcade</td><td>f704</td></tr>
 <tr><td><i class="fab fa-periscope"></i> periscope</td><td>fa-periscope</td><td>f3da</td></tr>
 <tr><td><i class="fab fa-phabricator"></i> phabricator</td><td>fa-phabricator</td><td>f3db</td></tr>
 <tr><td><i class="fab fa-phoenix-framework"></i> phoenix-framework</td><td>fa-phoenix-framework</td><td>f3dc</td></tr>
 <tr><td><i class="fab fa-phoenix-squadron"></i> phoenix-squadron</td><td>fa-phoenix-squadron</td><td>f511</td></tr>
 <tr><td><i class="fab fa-php"></i> php</td><td>fa-php</td><td>f457</td></tr>
 <tr><td><i class="fab fa-pied-piper"></i> pied-piper</td><td>fa-pied-piper</td><td>f2ae</td></tr>
 <tr><td><i class="fab fa-pied-piper-alt"></i> pied-piper-alt</td><td>fa-pied-piper-alt</td><td>f1a8</td></tr>
 <tr><td><i class="fab fa-pied-piper-hat"></i> pied-piper-hat</td><td>fa-pied-piper-hat</td><td>f4e5</td></tr>
 <tr><td><i class="fab fa-pied-piper-pp"></i> pied-piper-pp</td><td>fa-pied-piper-pp</td><td>f1a7</td></tr>
 <tr><td><i class="fab fa-pinterest"></i> pinterest</td><td>fa-pinterest</td><td>f0d2</td></tr>
 <tr><td><i class="fab fa-pinterest-p"></i> pinterest-p</td><td>fa-pinterest-p</td><td>f231</td></tr>
 <tr><td><i class="fab fa-pinterest-square"></i> pinterest-square</td><td>fa-pinterest-square</td><td>f0d3</td></tr>
 <tr><td><i class="fab fa-playstation"></i> playstation</td><td>fa-playstation</td><td>f3df</td></tr>
 <tr><td><i class="fab fa-product-hunt"></i> product-hunt</td><td>fa-product-hunt</td><td>f288</td></tr>
 <tr><td><i class="fab fa-pushed"></i> pushed</td><td>fa-pushed</td><td>f3e1</td></tr>
 <tr><td><i class="fab fa-python"></i> python</td><td>fa-python</td><td>f3e2</td></tr>
 <tr><td><i class="fab fa-qq"></i> qq</td><td>fa-qq</td><td>f1d6</td></tr>
 <tr><td><i class="fab fa-quinscape"></i> quinscape</td><td>fa-quinscape</td><td>f459</td></tr>
 <tr><td><i class="fab fa-quora"></i> quora</td><td>fa-quora</td><td>f2c4</td></tr>
 <tr><td><i class="fab fa-r-project"></i> r-project</td><td>fa-r-project</td><td>f4f7</td></tr>
 <tr><td><i class="fab fa-raspberry-pi"></i> raspberry-pi</td><td>fa-raspberry-pi</td><td>f7bb</td></tr>
 <tr><td><i class="fab fa-ravelry"></i> ravelry</td><td>fa-ravelry</td><td>f2d9</td></tr>
 <tr><td><i class="fab fa-react"></i> react</td><td>fa-react</td><td>f41b</td></tr>
 <tr><td><i class="fab fa-reacteurope"></i> reacteurope</td><td>fa-reacteurope</td><td>f75d</td></tr>
 <tr><td><i class="fab fa-readme"></i> readme</td><td>fa-readme</td><td>f4d5</td></tr>
 <tr><td><i class="fab fa-rebel"></i> rebel</td><td>fa-rebel</td><td>f1d0</td></tr>
 <tr><td><i class="fab fa-red-river"></i> red-river</td><td>fa-red-river</td><td>f3e3</td></tr>
 <tr><td><i class="fab fa-reddit"></i> reddit</td><td>fa-reddit</td><td>f1a1</td></tr>
 <tr><td><i class="fab fa-reddit-alien"></i> reddit-alien</td><td>fa-reddit-alien</td><td>f281</td></tr>
 <tr><td><i class="fab fa-reddit-square"></i> reddit-square</td><td>fa-reddit-square</td><td>f1a2</td></tr>
 <tr><td><i class="fab fa-redhat"></i> redhat</td><td>fa-redhat</td><td>f7bc</td></tr>
 <tr><td><i class="fab fa-renren"></i> renren</td><td>fa-renren</td><td>f18b</td></tr>
 <tr><td><i class="fab fa-replyd"></i> replyd</td><td>fa-replyd</td><td>f3e6</td></tr>
 <tr><td><i class="fab fa-researchgate"></i> researchgate</td><td>fa-researchgate</td><td>f4f8</td></tr>
 <tr><td><i class="fab fa-resolving"></i> resolving</td><td>fa-resolving</td><td>f3e7</td></tr>
 <tr><td><i class="fab fa-rev"></i> rev</td><td>fa-rev</td><td>f5b2</td></tr>
 <tr><td><i class="fab fa-rocketchat"></i> rocketchat</td><td>fa-rocketchat</td><td>f3e8</td></tr>
 <tr><td><i class="fab fa-rockrms"></i> rockrms</td><td>fa-rockrms</td><td>f3e9</td></tr>
 <tr><td><i class="fab fa-safari"></i> safari</td><td>fa-safari</td><td>f267</td></tr>
 <tr><td><i class="fab fa-salesforce"></i> salesforce</td><td>fa-salesforce</td><td>f83b</td></tr>
 <tr><td><i class="fab fa-sass"></i> sass</td><td>fa-sass</td><td>f41e</td></tr>
 <tr><td><i class="fab fa-schlix"></i> schlix</td><td>fa-schlix</td><td>f3ea</td></tr>
 <tr><td><i class="fab fa-scribd"></i> scribd</td><td>fa-scribd</td><td>f28a</td></tr>
 <tr><td><i class="fab fa-searchengin"></i> searchengin</td><td>fa-searchengin</td><td>f3eb</td></tr>
 <tr><td><i class="fab fa-sellcast"></i> sellcast</td><td>fa-sellcast</td><td>f2da</td></tr>
 <tr><td><i class="fab fa-sellsy"></i> sellsy</td><td>fa-sellsy</td><td>f213</td></tr>
 <tr><td><i class="fab fa-servicestack"></i> servicestack</td><td>fa-servicestack</td><td>f3ec</td></tr>
 <tr><td><i class="fab fa-shirtsinbulk"></i> shirtsinbulk</td><td>fa-shirtsinbulk</td><td>f214</td></tr>
 <tr><td><i class="fab fa-shopware"></i> shopware</td><td>fa-shopware</td><td>f5b5</td></tr>
 <tr><td><i class="fab fa-simplybuilt"></i> simplybuilt</td><td>fa-simplybuilt</td><td>f215</td></tr>
 <tr><td><i class="fab fa-sistrix"></i> sistrix</td><td>fa-sistrix</td><td>f3ee</td></tr>
 <tr><td><i class="fab fa-sith"></i> sith</td><td>fa-sith</td><td>f512</td></tr>
 <tr><td><i class="fab fa-sketch"></i> sketch</td><td>fa-sketch</td><td>f7c6</td></tr>
 <tr><td><i class="fab fa-skyatlas"></i> skyatlas</td><td>fa-skyatlas</td><td>f216</td></tr>
 <tr><td><i class="fab fa-skype"></i> skype</td><td>fa-skype</td><td>f17e</td></tr>
 <tr><td><i class="fab fa-slack"></i> slack</td><td>fa-slack</td><td>f198</td></tr>
 <tr><td><i class="fab fa-slack-hash"></i> slack-hash</td><td>fa-slack-hash</td><td>f3ef</td></tr>
 <tr><td><i class="fab fa-slideshare"></i> slideshare</td><td>fa-slideshare</td><td>f1e7</td></tr>
 <tr><td><i class="fab fa-snapchat"></i> snapchat</td><td>fa-snapchat</td><td>f2ab</td></tr>
 <tr><td><i class="fab fa-snapchat-ghost"></i> snapchat-ghost</td><td>fa-snapchat-ghost</td><td>f2ac</td></tr>
 <tr><td><i class="fab fa-snapchat-square"></i> snapchat-square</td><td>fa-snapchat-square</td><td>f2ad</td></tr>
 <tr><td><i class="fab fa-soundcloud"></i> soundcloud</td><td>fa-soundcloud</td><td>f1be</td></tr>
 <tr><td><i class="fab fa-sourcetree"></i> sourcetree</td><td>fa-sourcetree</td><td>f7d3</td></tr>
 <tr><td><i class="fab fa-speakap"></i> speakap</td><td>fa-speakap</td><td>f3f3</td></tr>
 <tr><td><i class="fab fa-speaker-deck"></i> speaker-deck</td><td>fa-speaker-deck</td><td>f83c</td></tr>
 <tr><td><i class="fab fa-spotify"></i> spotify</td><td>fa-spotify</td><td>f1bc</td></tr>
 <tr><td><i class="fab fa-squarespace"></i> squarespace</td><td>fa-squarespace</td><td>f5be</td></tr>
 <tr><td><i class="fab fa-stack-exchange"></i> stack-exchange</td><td>fa-stack-exchange</td><td>f18d</td></tr>
 <tr><td><i class="fab fa-stack-overflow"></i> stack-overflow</td><td>fa-stack-overflow</td><td>f16c</td></tr>
 <tr><td><i class="fab fa-stackpath"></i> stackpath</td><td>fa-stackpath</td><td>f842</td></tr>
 <tr><td><i class="fab fa-staylinked"></i> staylinked</td><td>fa-staylinked</td><td>f3f5</td></tr>
 <tr><td><i class="fab fa-steam"></i> steam</td><td>fa-steam</td><td>f1b6</td></tr>
 <tr><td><i class="fab fa-steam-square"></i> steam-square</td><td>fa-steam-square</td><td>f1b7</td></tr>
 <tr><td><i class="fab fa-steam-symbol"></i> steam-symbol</td><td>fa-steam-symbol</td><td>f3f6</td></tr>
 <tr><td><i class="fab fa-sticker-mule"></i> sticker-mule</td><td>fa-sticker-mule</td><td>f3f7</td></tr>
 <tr><td><i class="fab fa-strava"></i> strava</td><td>fa-strava</td><td>f428</td></tr>
 <tr><td><i class="fab fa-stripe"></i> stripe</td><td>fa-stripe</td><td>f429</td></tr>
 <tr><td><i class="fab fa-stripe-s"></i> stripe-s</td><td>fa-stripe-s</td><td>f42a</td></tr>
 <tr><td><i class="fab fa-studiovinari"></i> studiovinari</td><td>fa-studiovinari</td><td>f3f8</td></tr>
 <tr><td><i class="fab fa-stumbleupon"></i> stumbleupon</td><td>fa-stumbleupon</td><td>f1a4</td></tr>
 <tr><td><i class="fab fa-stumbleupon-circle"></i> stumbleupon-circle</td><td>fa-stumbleupon-circle</td><td>f1a3</td></tr>
 <tr><td><i class="fab fa-superpowers"></i> superpowers</td><td>fa-superpowers</td><td>f2dd</td></tr>
 <tr><td><i class="fab fa-supple"></i> supple</td><td>fa-supple</td><td>f3f9</td></tr>
 <tr><td><i class="fab fa-suse"></i> suse</td><td>fa-suse</td><td>f7d6</td></tr>
 <tr><td><i class="fab fa-symfony"></i> symfony</td><td>fa-symfony</td><td>f83d</td></tr>
 <tr><td><i class="fab fa-teamspeak"></i> teamspeak</td><td>fa-teamspeak</td><td>f4f9</td></tr>
 <tr><td><i class="fab fa-telegram"></i> telegram</td><td>fa-telegram</td><td>f2c6</td></tr>
 <tr><td><i class="fab fa-telegram-plane"></i> telegram-plane</td><td>fa-telegram-plane</td><td>f3fe</td></tr>
 <tr><td><i class="fab fa-tencent-weibo"></i> tencent-weibo</td><td>fa-tencent-weibo</td><td>f1d5</td></tr>
 <tr><td><i class="fab fa-the-red-yeti"></i> the-red-yeti</td><td>fa-the-red-yeti</td><td>f69d</td></tr>
 <tr><td><i class="fab fa-themeco"></i> themeco</td><td>fa-themeco</td><td>f5c6</td></tr>
 <tr><td><i class="fab fa-themeisle"></i> themeisle</td><td>fa-themeisle</td><td>f2b2</td></tr>
 <tr><td><i class="fab fa-think-peaks"></i> think-peaks</td><td>fa-think-peaks</td><td>f731</td></tr>
 <tr><td><i class="fab fa-trade-federation"></i> trade-federation</td><td>fa-trade-federation</td><td>f513</td></tr>
 <tr><td><i class="fab fa-trello"></i> trello</td><td>fa-trello</td><td>f181</td></tr>
 <tr><td><i class="fab fa-tripadvisor"></i> tripadvisor</td><td>fa-tripadvisor</td><td>f262</td></tr>
 <tr><td><i class="fab fa-tumblr"></i> tumblr</td><td>fa-tumblr</td><td>f173</td></tr>
 <tr><td><i class="fab fa-tumblr-square"></i> tumblr-square</td><td>fa-tumblr-square</td><td>f174</td></tr>
 <tr><td><i class="fab fa-twitch"></i> twitch</td><td>fa-twitch</td><td>f1e8</td></tr>
 <tr><td><i class="fab fa-twitter"></i> twitter</td><td>fa-twitter</td><td>f099</td></tr>
 <tr><td><i class="fab fa-twitter-square"></i> twitter-square</td><td>fa-twitter-square</td><td>f081</td></tr>
 <tr><td><i class="fab fa-typo3"></i> typo3</td><td>fa-typo3</td><td>f42b</td></tr>
 <tr><td><i class="fab fa-uber"></i> uber</td><td>fa-uber</td><td>f402</td></tr>
 <tr><td><i class="fab fa-ubuntu"></i> ubuntu</td><td>fa-ubuntu</td><td>f7df</td></tr>
 <tr><td><i class="fab fa-uikit"></i> uikit</td><td>fa-uikit</td><td>f403</td></tr>
 <tr><td><i class="fab fa-uniregistry"></i> uniregistry</td><td>fa-uniregistry</td><td>f404</td></tr>
 <tr><td><i class="fab fa-untappd"></i> untappd</td><td>fa-untappd</td><td>f405</td></tr>
 <tr><td><i class="fab fa-ups"></i> ups</td><td>fa-ups</td><td>f7e0</td></tr>
 <tr><td><i class="fab fa-usb"></i> usb</td><td>fa-usb</td><td>f287</td></tr>
 <tr><td><i class="fab fa-usps"></i> usps</td><td>fa-usps</td><td>f7e1</td></tr>
 <tr><td><i class="fab fa-ussunnah"></i> ussunnah</td><td>fa-ussunnah</td><td>f407</td></tr>
 <tr><td><i class="fab fa-vaadin"></i> vaadin</td><td>fa-vaadin</td><td>f408</td></tr>
 <tr><td><i class="fab fa-viacoin"></i> viacoin</td><td>fa-viacoin</td><td>f237</td></tr>
 <tr><td><i class="fab fa-viadeo"></i> viadeo</td><td>fa-viadeo</td><td>f2a9</td></tr>
 <tr><td><i class="fab fa-viadeo-square"></i> viadeo-square</td><td>fa-viadeo-square</td><td>f2aa</td></tr>
 <tr><td><i class="fab fa-viber"></i> viber</td><td>fa-viber</td><td>f409</td></tr>
 <tr><td><i class="fab fa-vimeo"></i> vimeo</td><td>fa-vimeo</td><td>f40a</td></tr>
 <tr><td><i class="fab fa-vimeo-square"></i> vimeo-square</td><td>fa-vimeo-square</td><td>f194</td></tr>
 <tr><td><i class="fab fa-vimeo-v"></i> vimeo-v</td><td>fa-vimeo-v</td><td>f27d</td></tr>
 <tr><td><i class="fab fa-vine"></i> vine</td><td>fa-vine</td><td>f1ca</td></tr>
 <tr><td><i class="fab fa-vk"></i> vk</td><td>fa-vk</td><td>f189</td></tr>
 <tr><td><i class="fab fa-vnv"></i> vnv</td><td>fa-vnv</td><td>f40b</td></tr>
 <tr><td><i class="fab fa-vuejs"></i> vuejs</td><td>fa-vuejs</td><td>f41f</td></tr>
 <tr><td><i class="fab fa-waze"></i> waze</td><td>fa-waze</td><td>f83f</td></tr>
 <tr><td><i class="fab fa-weebly"></i> weebly</td><td>fa-weebly</td><td>f5cc</td></tr>
 <tr><td><i class="fab fa-weibo"></i> weibo</td><td>fa-weibo</td><td>f18a</td></tr>
 <tr><td><i class="fab fa-weixin"></i> weixin</td><td>fa-weixin</td><td>f1d7</td></tr>
 <tr><td><i class="fab fa-whatsapp"></i> whatsapp</td><td>fa-whatsapp</td><td>f232</td></tr>
 <tr><td><i class="fab fa-whatsapp-square"></i> whatsapp-square</td><td>fa-whatsapp-square</td><td>f40c</td></tr>
 <tr><td><i class="fab fa-whmcs"></i> whmcs</td><td>fa-whmcs</td><td>f40d</td></tr>
 <tr><td><i class="fab fa-wikipedia-w"></i> wikipedia-w</td><td>fa-wikipedia-w</td><td>f266</td></tr>
 <tr><td><i class="fab fa-windows"></i> windows</td><td>fa-windows</td><td>f17a</td></tr>
 <tr><td><i class="fab fa-wix"></i> wix</td><td>fa-wix</td><td>f5cf</td></tr>
 <tr><td><i class="fab fa-wizards-of-the-coast"></i> wizards-of-the-coast</td><td>fa-wizards-of-the-coast</td><td>f730</td></tr>
 <tr><td><i class="fab fa-wolf-pack-battalion"></i> wolf-pack-battalion</td><td>fa-wolf-pack-battalion</td><td>f514</td></tr>
 <tr><td><i class="fab fa-wordpress"></i> wordpress</td><td>fa-wordpress</td><td>f19a</td></tr>
 <tr><td><i class="fab fa-wordpress-simple"></i> wordpress-simple</td><td>fa-wordpress-simple</td><td>f411</td></tr>
 <tr><td><i class="fab fa-wpbeginner"></i> wpbeginner</td><td>fa-wpbeginner</td><td>f297</td></tr>
 <tr><td><i class="fab fa-wpexplorer"></i> wpexplorer</td><td>fa-wpexplorer</td><td>f2de</td></tr>
 <tr><td><i class="fab fa-wpforms"></i> wpforms</td><td>fa-wpforms</td><td>f298</td></tr>
 <tr><td><i class="fab fa-wpressr"></i> wpressr</td><td>fa-wpressr</td><td>f3e4</td></tr>
 <tr><td><i class="fab fa-xbox"></i> xbox</td><td>fa-xbox</td><td>f412</td></tr>
 <tr><td><i class="fab fa-xing"></i> xing</td><td>fa-xing</td><td>f168</td></tr>
 <tr><td><i class="fab fa-xing-square"></i> xing-square</td><td>fa-xing-square</td><td>f169</td></tr>
 <tr><td><i class="fab fa-y-combinator"></i> y-combinator</td><td>fa-y-combinator</td><td>f23b</td></tr>
 <tr><td><i class="fab fa-yahoo"></i> yahoo</td><td>fa-yahoo</td><td>f19e</td></tr>
 <tr><td><i class="fab fa-yammer"></i> yammer</td><td>fa-yammer</td><td>f840</td></tr>
 <tr><td><i class="fab fa-yandex"></i> yandex</td><td>fa-yandex</td><td>f413</td></tr>
 <tr><td><i class="fab fa-yandex-international"></i> yandex-international</td><td>fa-yandex-international</td><td>f414</td></tr>
 <tr><td><i class="fab fa-yarn"></i> yarn</td><td>fa-yarn</td><td>f7e3</td></tr>
 <tr><td><i class="fab fa-yelp"></i> yelp</td><td>fa-yelp</td><td>f1e9</td></tr>
 <tr><td><i class="fab fa-yoast"></i> yoast</td><td>fa-yoast</td><td>f2b1</td></tr>
 <tr><td><i class="fab fa-youtube"></i> youtube</td><td>fa-youtube</td><td>f167</td></tr>
 <tr><td><i class="fab fa-youtube-square"></i> youtube-square</td><td>fa-youtube-square</td><td>f431</td></tr>
 <tr><td><i class="fab fa-zhihu"></i> zhihu</td><td>fa-zhihu</td><td>f63f</td></tr>
</table>
</div>