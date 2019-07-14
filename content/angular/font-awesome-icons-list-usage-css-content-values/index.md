
+++
title = "1534 font awesome icons list,usage,css content values cheatsheet"
subtitle = "Complete list of 1534 free font awesome icons cheatsheet"
type="post"
summary ="To use font awesome icons, add the font awesome icons cdn link css file in head section & display fa icons using class name with the prefix fa followed by the fa icon name"
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

In font awesome 5.9 version we have around 1534 free icons.Free font awesome icons divided into three categories. 

1. font awesome solid icons
2. font awesome regular icons
3. font awesome brand icons

We can <a href="https://use.fontawesome.com/releases/v5.9.0/fontawesome-free-5.9.0-web.zip" rel="noopener" target="_blank">download</a> font awesome icons css file and serve them from our own server Or we can serve them from public CDNs.

{{% toc %}}

## How to use font awesome icons

To use free font awesome icons, add the font awesome icons cdn link css file in head section & display fa icons using class name with the prefix fa followed by the fa icon name.

To use font awesome icons follow the below steps

1. Add the font awesome icons css file in head section of html
2. And then display fa icons using class name with the prefix `fa` followed by the `fa icon` name.
3. Additionally we have to add category classes.
4. To use font awesome brand icons use class name as `fab`
5. To use font awesome solid icons add the class name as `fas`
6. To use font awesome regular icons add the class name as `far`

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

## Complete Font Awesome Icons List

Here is the complete list of 1534 free font awesome icons

## Font Awesome Icons List - Solid Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>font awesome icon name</th>
<th>font awesome icon  HTML code</th>
<th>font awesome icon CSS content code</th>
</tr>
 <tr><td><i class="fas fa-ad" style="font-size: 20px;"></i> ad</td><td>&lt;i class="fas fa-ad"&gt;&lt;/i&gt;</td><td>f641</td></tr>
 <tr><td><i class="fas fa-address-book" style="font-size: 20px;"></i> address-book</td><td>&lt;i class="fas fa-address-book"&gt;&lt;/i&gt;</td><td>f2b9</td></tr>
 <tr><td><i class="fas fa-address-card" style="font-size: 20px;"></i> address-card</td><td>&lt;i class="fas fa-address-card"&gt;&lt;/i&gt;</td><td>f2bb</td></tr>
 <tr><td><i class="fas fa-adjust" style="font-size: 20px;"></i> adjust</td><td>&lt;i class="fas fa-adjust"&gt;&lt;/i&gt;</td><td>f042</td></tr>
 <tr><td><i class="fas fa-air-freshener" style="font-size: 20px;"></i> air-freshener</td><td>&lt;i class="fas fa-air-freshener"&gt;&lt;/i&gt;</td><td>f5d0</td></tr>
 <tr><td><i class="fas fa-align-center" style="font-size: 20px;"></i> align-center</td><td>&lt;i class="fas fa-align-center"&gt;&lt;/i&gt;</td><td>f037</td></tr>
 <tr><td><i class="fas fa-align-justify" style="font-size: 20px;"></i> align-justify</td><td>&lt;i class="fas fa-align-justify"&gt;&lt;/i&gt;</td><td>f039</td></tr>
 <tr><td><i class="fas fa-align-left" style="font-size: 20px;"></i> align-left</td><td>&lt;i class="fas fa-align-left"&gt;&lt;/i&gt;</td><td>f036</td></tr>
 <tr><td><i class="fas fa-align-right" style="font-size: 20px;"></i> align-right</td><td>&lt;i class="fas fa-align-right"&gt;&lt;/i&gt;</td><td>f038</td></tr>
 <tr><td><i class="fas fa-allergies" style="font-size: 20px;"></i> allergies</td><td>&lt;i class="fas fa-allergies"&gt;&lt;/i&gt;</td><td>f461</td></tr>
 <tr><td><i class="fas fa-ambulance" style="font-size: 20px;"></i> ambulance</td><td>&lt;i class="fas fa-ambulance"&gt;&lt;/i&gt;</td><td>f0f9</td></tr>
 <tr><td><i class="fas fa-american-sign-language-interpreting" style="font-size: 20px;"></i> american-sign-language-interpreting</td><td>&lt;i class="fas fa-american-sign-language-interpreting"&gt;&lt;/i&gt;</td><td>f2a3</td></tr>
 <tr><td><i class="fas fa-anchor" style="font-size: 20px;"></i> anchor</td><td>&lt;i class="fas fa-anchor"&gt;&lt;/i&gt;</td><td>f13d</td></tr>
 <tr><td><i class="fas fa-angle-double-down" style="font-size: 20px;"></i> angle-double-down</td><td>&lt;i class="fas fa-angle-double-down"&gt;&lt;/i&gt;</td><td>f103</td></tr>
 <tr><td><i class="fas fa-angle-double-left" style="font-size: 20px;"></i> angle-double-left</td><td>&lt;i class="fas fa-angle-double-left"&gt;&lt;/i&gt;</td><td>f100</td></tr>
 <tr><td><i class="fas fa-angle-double-right" style="font-size: 20px;"></i> angle-double-right</td><td>&lt;i class="fas fa-angle-double-right"&gt;&lt;/i&gt;</td><td>f101</td></tr>
 <tr><td><i class="fas fa-angle-double-up" style="font-size: 20px;"></i> angle-double-up</td><td>&lt;i class="fas fa-angle-double-up"&gt;&lt;/i&gt;</td><td>f102</td></tr>
 <tr><td><i class="fas fa-angle-down" style="font-size: 20px;"></i> angle-down</td><td>&lt;i class="fas fa-angle-down"&gt;&lt;/i&gt;</td><td>f107</td></tr>
 <tr><td><i class="fas fa-angle-left" style="font-size: 20px;"></i> angle-left</td><td>&lt;i class="fas fa-angle-left"&gt;&lt;/i&gt;</td><td>f104</td></tr>
 <tr><td><i class="fas fa-angle-right" style="font-size: 20px;"></i> angle-right</td><td>&lt;i class="fas fa-angle-right"&gt;&lt;/i&gt;</td><td>f105</td></tr>
 <tr><td><i class="fas fa-angle-up" style="font-size: 20px;"></i> angle-up</td><td>&lt;i class="fas fa-angle-up"&gt;&lt;/i&gt;</td><td>f106</td></tr>
 <tr><td><i class="fas fa-angry" style="font-size: 20px;"></i> angry</td><td>&lt;i class="fas fa-angry"&gt;&lt;/i&gt;</td><td>f556</td></tr>
 <tr><td><i class="fas fa-ankh" style="font-size: 20px;"></i> ankh</td><td>&lt;i class="fas fa-ankh"&gt;&lt;/i&gt;</td><td>f644</td></tr>
 <tr><td><i class="fas fa-apple-alt" style="font-size: 20px;"></i> apple-alt</td><td>&lt;i class="fas fa-apple-alt"&gt;&lt;/i&gt;</td><td>f5d1</td></tr>
 <tr><td><i class="fas fa-archive" style="font-size: 20px;"></i> archive</td><td>&lt;i class="fas fa-archive"&gt;&lt;/i&gt;</td><td>f187</td></tr>
 <tr><td><i class="fas fa-archway" style="font-size: 20px;"></i> archway</td><td>&lt;i class="fas fa-archway"&gt;&lt;/i&gt;</td><td>f557</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-down" style="font-size: 20px;"></i> arrow-alt-circle-down</td><td>&lt;i class="fas fa-arrow-alt-circle-down"&gt;&lt;/i&gt;</td><td>f358</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-left" style="font-size: 20px;"></i> arrow-alt-circle-left</td><td>&lt;i class="fas fa-arrow-alt-circle-left"&gt;&lt;/i&gt;</td><td>f359</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-right" style="font-size: 20px;"></i> arrow-alt-circle-right</td><td>&lt;i class="fas fa-arrow-alt-circle-right"&gt;&lt;/i&gt;</td><td>f35a</td></tr>
 <tr><td><i class="fas fa-arrow-alt-circle-up" style="font-size: 20px;"></i> arrow-alt-circle-up</td><td>&lt;i class="fas fa-arrow-alt-circle-up"&gt;&lt;/i&gt;</td><td>f35b</td></tr>
 <tr><td><i class="fas fa-arrow-circle-down" style="font-size: 20px;"></i> arrow-circle-down</td><td>&lt;i class="fas fa-arrow-circle-down"&gt;&lt;/i&gt;</td><td>f0ab</td></tr>
 <tr><td><i class="fas fa-arrow-circle-left" style="font-size: 20px;"></i> arrow-circle-left</td><td>&lt;i class="fas fa-arrow-circle-left"&gt;&lt;/i&gt;</td><td>f0a8</td></tr>
 <tr><td><i class="fas fa-arrow-circle-right" style="font-size: 20px;"></i> arrow-circle-right</td><td>&lt;i class="fas fa-arrow-circle-right"&gt;&lt;/i&gt;</td><td>f0a9</td></tr>
 <tr><td><i class="fas fa-arrow-circle-up" style="font-size: 20px;"></i> arrow-circle-up</td><td>&lt;i class="fas fa-arrow-circle-up"&gt;&lt;/i&gt;</td><td>f0aa</td></tr>
 <tr><td><i class="fas fa-arrow-down" style="font-size: 20px;"></i> arrow-down</td><td>&lt;i class="fas fa-arrow-down"&gt;&lt;/i&gt;</td><td>f063</td></tr>
 <tr><td><i class="fas fa-arrow-left" style="font-size: 20px;"></i> arrow-left</td><td>&lt;i class="fas fa-arrow-left"&gt;&lt;/i&gt;</td><td>f060</td></tr>
 <tr><td><i class="fas fa-arrow-right" style="font-size: 20px;"></i> arrow-right</td><td>&lt;i class="fas fa-arrow-right"&gt;&lt;/i&gt;</td><td>f061</td></tr>
 <tr><td><i class="fas fa-arrow-up" style="font-size: 20px;"></i> arrow-up</td><td>&lt;i class="fas fa-arrow-up"&gt;&lt;/i&gt;</td><td>f062</td></tr>
 <tr><td><i class="fas fa-arrows-alt" style="font-size: 20px;"></i> arrows-alt</td><td>&lt;i class="fas fa-arrows-alt"&gt;&lt;/i&gt;</td><td>f0b2</td></tr>
 <tr><td><i class="fas fa-arrows-alt-h" style="font-size: 20px;"></i> arrows-alt-h</td><td>&lt;i class="fas fa-arrows-alt-h"&gt;&lt;/i&gt;</td><td>f337</td></tr>
 <tr><td><i class="fas fa-arrows-alt-v" style="font-size: 20px;"></i> arrows-alt-v</td><td>&lt;i class="fas fa-arrows-alt-v"&gt;&lt;/i&gt;</td><td>f338</td></tr>
 <tr><td><i class="fas fa-assistive-listening-systems" style="font-size: 20px;"></i> assistive-listening-systems</td><td>&lt;i class="fas fa-assistive-listening-systems"&gt;&lt;/i&gt;</td><td>f2a2</td></tr>
 <tr><td><i class="fas fa-asterisk" style="font-size: 20px;"></i> asterisk</td><td>&lt;i class="fas fa-asterisk"&gt;&lt;/i&gt;</td><td>f069</td></tr>
 <tr><td><i class="fas fa-at" style="font-size: 20px;"></i> at</td><td>&lt;i class="fas fa-at"&gt;&lt;/i&gt;</td><td>f1fa</td></tr>
 <tr><td><i class="fas fa-atlas" style="font-size: 20px;"></i> atlas</td><td>&lt;i class="fas fa-atlas"&gt;&lt;/i&gt;</td><td>f558</td></tr>
 <tr><td><i class="fas fa-atom" style="font-size: 20px;"></i> atom</td><td>&lt;i class="fas fa-atom"&gt;&lt;/i&gt;</td><td>f5d2</td></tr>
 <tr><td><i class="fas fa-audio-description" style="font-size: 20px;"></i> audio-description</td><td>&lt;i class="fas fa-audio-description"&gt;&lt;/i&gt;</td><td>f29e</td></tr>
 <tr><td><i class="fas fa-award" style="font-size: 20px;"></i> award</td><td>&lt;i class="fas fa-award"&gt;&lt;/i&gt;</td><td>f559</td></tr>
 <tr><td><i class="fas fa-baby" style="font-size: 20px;"></i> baby</td><td>&lt;i class="fas fa-baby"&gt;&lt;/i&gt;</td><td>f77c</td></tr>
 <tr><td><i class="fas fa-baby-carriage" style="font-size: 20px;"></i> baby-carriage</td><td>&lt;i class="fas fa-baby-carriage"&gt;&lt;/i&gt;</td><td>f77d</td></tr>
 <tr><td><i class="fas fa-backspace" style="font-size: 20px;"></i> backspace</td><td>&lt;i class="fas fa-backspace"&gt;&lt;/i&gt;</td><td>f55a</td></tr>
 <tr><td><i class="fas fa-backward" style="font-size: 20px;"></i> backward</td><td>&lt;i class="fas fa-backward"&gt;&lt;/i&gt;</td><td>f04a</td></tr>
 <tr><td><i class="fas fa-bacon" style="font-size: 20px;"></i> bacon</td><td>&lt;i class="fas fa-bacon"&gt;&lt;/i&gt;</td><td>f7e5</td></tr>
 <tr><td><i class="fas fa-balance-scale" style="font-size: 20px;"></i> balance-scale</td><td>&lt;i class="fas fa-balance-scale"&gt;&lt;/i&gt;</td><td>f24e</td></tr>
 <tr><td><i class="fas fa-balance-scale-left" style="font-size: 20px;"></i> balance-scale-left</td><td>&lt;i class="fas fa-balance-scale-left"&gt;&lt;/i&gt;</td><td>f515</td></tr>
 <tr><td><i class="fas fa-balance-scale-right" style="font-size: 20px;"></i> balance-scale-right</td><td>&lt;i class="fas fa-balance-scale-right"&gt;&lt;/i&gt;</td><td>f516</td></tr>
 <tr><td><i class="fas fa-ban" style="font-size: 20px;"></i> ban</td><td>&lt;i class="fas fa-ban"&gt;&lt;/i&gt;</td><td>f05e</td></tr>
 <tr><td><i class="fas fa-band-aid" style="font-size: 20px;"></i> band-aid</td><td>&lt;i class="fas fa-band-aid"&gt;&lt;/i&gt;</td><td>f462</td></tr>
 <tr><td><i class="fas fa-barcode" style="font-size: 20px;"></i> barcode</td><td>&lt;i class="fas fa-barcode"&gt;&lt;/i&gt;</td><td>f02a</td></tr>
 <tr><td><i class="fas fa-bars" style="font-size: 20px;"></i> bars</td><td>&lt;i class="fas fa-bars"&gt;&lt;/i&gt;</td><td>f0c9</td></tr>
 <tr><td><i class="fas fa-baseball-ball" style="font-size: 20px;"></i> baseball-ball</td><td>&lt;i class="fas fa-baseball-ball"&gt;&lt;/i&gt;</td><td>f433</td></tr>
 <tr><td><i class="fas fa-basketball-ball" style="font-size: 20px;"></i> basketball-ball</td><td>&lt;i class="fas fa-basketball-ball"&gt;&lt;/i&gt;</td><td>f434</td></tr>
 <tr><td><i class="fas fa-bath" style="font-size: 20px;"></i> bath</td><td>&lt;i class="fas fa-bath"&gt;&lt;/i&gt;</td><td>f2cd</td></tr>
 <tr><td><i class="fas fa-battery-empty" style="font-size: 20px;"></i> battery-empty</td><td>&lt;i class="fas fa-battery-empty"&gt;&lt;/i&gt;</td><td>f244</td></tr>
 <tr><td><i class="fas fa-battery-full" style="font-size: 20px;"></i> battery-full</td><td>&lt;i class="fas fa-battery-full"&gt;&lt;/i&gt;</td><td>f240</td></tr>
 <tr><td><i class="fas fa-battery-half" style="font-size: 20px;"></i> battery-half</td><td>&lt;i class="fas fa-battery-half"&gt;&lt;/i&gt;</td><td>f242</td></tr>
 <tr><td><i class="fas fa-battery-quarter" style="font-size: 20px;"></i> battery-quarter</td><td>&lt;i class="fas fa-battery-quarter"&gt;&lt;/i&gt;</td><td>f243</td></tr>
 <tr><td><i class="fas fa-battery-three-quarters" style="font-size: 20px;"></i> battery-three-quarters</td><td>&lt;i class="fas fa-battery-three-quarters"&gt;&lt;/i&gt;</td><td>f241</td></tr>
 <tr><td><i class="fas fa-bed" style="font-size: 20px;"></i> bed</td><td>&lt;i class="fas fa-bed"&gt;&lt;/i&gt;</td><td>f236</td></tr>
 <tr><td><i class="fas fa-beer" style="font-size: 20px;"></i> beer</td><td>&lt;i class="fas fa-beer"&gt;&lt;/i&gt;</td><td>f0fc</td></tr>
 <tr><td><i class="fas fa-bell" style="font-size: 20px;"></i> bell</td><td>&lt;i class="fas fa-bell"&gt;&lt;/i&gt;</td><td>f0f3</td></tr>
 <tr><td><i class="fas fa-bell-slash" style="font-size: 20px;"></i> bell-slash</td><td>&lt;i class="fas fa-bell-slash"&gt;&lt;/i&gt;</td><td>f1f6</td></tr>
 <tr><td><i class="fas fa-bezier-curve" style="font-size: 20px;"></i> bezier-curve</td><td>&lt;i class="fas fa-bezier-curve"&gt;&lt;/i&gt;</td><td>f55b</td></tr>
 <tr><td><i class="fas fa-bible" style="font-size: 20px;"></i> bible</td><td>&lt;i class="fas fa-bible"&gt;&lt;/i&gt;</td><td>f647</td></tr>
 <tr><td><i class="fas fa-bicycle" style="font-size: 20px;"></i> bicycle</td><td>&lt;i class="fas fa-bicycle"&gt;&lt;/i&gt;</td><td>f206</td></tr>
 <tr><td><i class="fas fa-biking" style="font-size: 20px;"></i> biking</td><td>&lt;i class="fas fa-biking"&gt;&lt;/i&gt;</td><td>f84a</td></tr>
 <tr><td><i class="fas fa-binoculars" style="font-size: 20px;"></i> binoculars</td><td>&lt;i class="fas fa-binoculars"&gt;&lt;/i&gt;</td><td>f1e5</td></tr>
 <tr><td><i class="fas fa-biohazard" style="font-size: 20px;"></i> biohazard</td><td>&lt;i class="fas fa-biohazard"&gt;&lt;/i&gt;</td><td>f780</td></tr>
 <tr><td><i class="fas fa-birthday-cake" style="font-size: 20px;"></i> birthday-cake</td><td>&lt;i class="fas fa-birthday-cake"&gt;&lt;/i&gt;</td><td>f1fd</td></tr>
 <tr><td><i class="fas fa-blender" style="font-size: 20px;"></i> blender</td><td>&lt;i class="fas fa-blender"&gt;&lt;/i&gt;</td><td>f517</td></tr>
 <tr><td><i class="fas fa-blender-phone" style="font-size: 20px;"></i> blender-phone</td><td>&lt;i class="fas fa-blender-phone"&gt;&lt;/i&gt;</td><td>f6b6</td></tr>
 <tr><td><i class="fas fa-blind" style="font-size: 20px;"></i> blind</td><td>&lt;i class="fas fa-blind"&gt;&lt;/i&gt;</td><td>f29d</td></tr>
 <tr><td><i class="fas fa-blog" style="font-size: 20px;"></i> blog</td><td>&lt;i class="fas fa-blog"&gt;&lt;/i&gt;</td><td>f781</td></tr>
 <tr><td><i class="fas fa-bold" style="font-size: 20px;"></i> bold</td><td>&lt;i class="fas fa-bold"&gt;&lt;/i&gt;</td><td>f032</td></tr>
 <tr><td><i class="fas fa-bolt" style="font-size: 20px;"></i> bolt</td><td>&lt;i class="fas fa-bolt"&gt;&lt;/i&gt;</td><td>f0e7</td></tr>
 <tr><td><i class="fas fa-bomb" style="font-size: 20px;"></i> bomb</td><td>&lt;i class="fas fa-bomb"&gt;&lt;/i&gt;</td><td>f1e2</td></tr>
 <tr><td><i class="fas fa-bone" style="font-size: 20px;"></i> bone</td><td>&lt;i class="fas fa-bone"&gt;&lt;/i&gt;</td><td>f5d7</td></tr>
 <tr><td><i class="fas fa-bong" style="font-size: 20px;"></i> bong</td><td>&lt;i class="fas fa-bong"&gt;&lt;/i&gt;</td><td>f55c</td></tr>
 <tr><td><i class="fas fa-book" style="font-size: 20px;"></i> book</td><td>&lt;i class="fas fa-book"&gt;&lt;/i&gt;</td><td>f02d</td></tr>
 <tr><td><i class="fas fa-book-dead" style="font-size: 20px;"></i> book-dead</td><td>&lt;i class="fas fa-book-dead"&gt;&lt;/i&gt;</td><td>f6b7</td></tr>
 <tr><td><i class="fas fa-book-medical" style="font-size: 20px;"></i> book-medical</td><td>&lt;i class="fas fa-book-medical"&gt;&lt;/i&gt;</td><td>f7e6</td></tr>
 <tr><td><i class="fas fa-book-open" style="font-size: 20px;"></i> book-open</td><td>&lt;i class="fas fa-book-open"&gt;&lt;/i&gt;</td><td>f518</td></tr>
 <tr><td><i class="fas fa-book-reader" style="font-size: 20px;"></i> book-reader</td><td>&lt;i class="fas fa-book-reader"&gt;&lt;/i&gt;</td><td>f5da</td></tr>
 <tr><td><i class="fas fa-bookmark" style="font-size: 20px;"></i> bookmark</td><td>&lt;i class="fas fa-bookmark"&gt;&lt;/i&gt;</td><td>f02e</td></tr>
 <tr><td><i class="fas fa-border-all" style="font-size: 20px;"></i> border-all</td><td>&lt;i class="fas fa-border-all"&gt;&lt;/i&gt;</td><td>f84c</td></tr>
 <tr><td><i class="fas fa-border-none" style="font-size: 20px;"></i> border-none</td><td>&lt;i class="fas fa-border-none"&gt;&lt;/i&gt;</td><td>f850</td></tr>
 <tr><td><i class="fas fa-border-style" style="font-size: 20px;"></i> border-style</td><td>&lt;i class="fas fa-border-style"&gt;&lt;/i&gt;</td><td>f853</td></tr>
 <tr><td><i class="fas fa-bowling-ball" style="font-size: 20px;"></i> bowling-ball</td><td>&lt;i class="fas fa-bowling-ball"&gt;&lt;/i&gt;</td><td>f436</td></tr>
 <tr><td><i class="fas fa-box" style="font-size: 20px;"></i> box</td><td>&lt;i class="fas fa-box"&gt;&lt;/i&gt;</td><td>f466</td></tr>
 <tr><td><i class="fas fa-box-open" style="font-size: 20px;"></i> box-open</td><td>&lt;i class="fas fa-box-open"&gt;&lt;/i&gt;</td><td>f49e</td></tr>
 <tr><td><i class="fas fa-boxes" style="font-size: 20px;"></i> boxes</td><td>&lt;i class="fas fa-boxes"&gt;&lt;/i&gt;</td><td>f468</td></tr>
 <tr><td><i class="fas fa-braille" style="font-size: 20px;"></i> braille</td><td>&lt;i class="fas fa-braille"&gt;&lt;/i&gt;</td><td>f2a1</td></tr>
 <tr><td><i class="fas fa-brain" style="font-size: 20px;"></i> brain</td><td>&lt;i class="fas fa-brain"&gt;&lt;/i&gt;</td><td>f5dc</td></tr>
 <tr><td><i class="fas fa-bread-slice" style="font-size: 20px;"></i> bread-slice</td><td>&lt;i class="fas fa-bread-slice"&gt;&lt;/i&gt;</td><td>f7ec</td></tr>
 <tr><td><i class="fas fa-briefcase" style="font-size: 20px;"></i> briefcase</td><td>&lt;i class="fas fa-briefcase"&gt;&lt;/i&gt;</td><td>f0b1</td></tr>
 <tr><td><i class="fas fa-briefcase-medical" style="font-size: 20px;"></i> briefcase-medical</td><td>&lt;i class="fas fa-briefcase-medical"&gt;&lt;/i&gt;</td><td>f469</td></tr>
 <tr><td><i class="fas fa-broadcast-tower" style="font-size: 20px;"></i> broadcast-tower</td><td>&lt;i class="fas fa-broadcast-tower"&gt;&lt;/i&gt;</td><td>f519</td></tr>
 <tr><td><i class="fas fa-broom" style="font-size: 20px;"></i> broom</td><td>&lt;i class="fas fa-broom"&gt;&lt;/i&gt;</td><td>f51a</td></tr>
 <tr><td><i class="fas fa-brush" style="font-size: 20px;"></i> brush</td><td>&lt;i class="fas fa-brush"&gt;&lt;/i&gt;</td><td>f55d</td></tr>
 <tr><td><i class="fas fa-bug" style="font-size: 20px;"></i> bug</td><td>&lt;i class="fas fa-bug"&gt;&lt;/i&gt;</td><td>f188</td></tr>
 <tr><td><i class="fas fa-building" style="font-size: 20px;"></i> building</td><td>&lt;i class="fas fa-building"&gt;&lt;/i&gt;</td><td>f1ad</td></tr>
 <tr><td><i class="fas fa-bullhorn" style="font-size: 20px;"></i> bullhorn</td><td>&lt;i class="fas fa-bullhorn"&gt;&lt;/i&gt;</td><td>f0a1</td></tr>
 <tr><td><i class="fas fa-bullseye" style="font-size: 20px;"></i> bullseye</td><td>&lt;i class="fas fa-bullseye"&gt;&lt;/i&gt;</td><td>f140</td></tr>
 <tr><td><i class="fas fa-burn" style="font-size: 20px;"></i> burn</td><td>&lt;i class="fas fa-burn"&gt;&lt;/i&gt;</td><td>f46a</td></tr>
 <tr><td><i class="fas fa-bus" style="font-size: 20px;"></i> bus</td><td>&lt;i class="fas fa-bus"&gt;&lt;/i&gt;</td><td>f207</td></tr>
 <tr><td><i class="fas fa-bus-alt" style="font-size: 20px;"></i> bus-alt</td><td>&lt;i class="fas fa-bus-alt"&gt;&lt;/i&gt;</td><td>f55e</td></tr>
 <tr><td><i class="fas fa-business-time" style="font-size: 20px;"></i> business-time</td><td>&lt;i class="fas fa-business-time"&gt;&lt;/i&gt;</td><td>f64a</td></tr>
 <tr><td><i class="fas fa-calculator" style="font-size: 20px;"></i> calculator</td><td>&lt;i class="fas fa-calculator"&gt;&lt;/i&gt;</td><td>f1ec</td></tr>
 <tr><td><i class="fas fa-calendar" style="font-size: 20px;"></i> calendar</td><td>&lt;i class="fas fa-calendar"&gt;&lt;/i&gt;</td><td>f133</td></tr>
 <tr><td><i class="fas fa-calendar-alt" style="font-size: 20px;"></i> calendar-alt</td><td>&lt;i class="fas fa-calendar-alt"&gt;&lt;/i&gt;</td><td>f073</td></tr>
 <tr><td><i class="fas fa-calendar-check" style="font-size: 20px;"></i> calendar-check</td><td>&lt;i class="fas fa-calendar-check"&gt;&lt;/i&gt;</td><td>f274</td></tr>
 <tr><td><i class="fas fa-calendar-day" style="font-size: 20px;"></i> calendar-day</td><td>&lt;i class="fas fa-calendar-day"&gt;&lt;/i&gt;</td><td>f783</td></tr>
 <tr><td><i class="fas fa-calendar-minus" style="font-size: 20px;"></i> calendar-minus</td><td>&lt;i class="fas fa-calendar-minus"&gt;&lt;/i&gt;</td><td>f272</td></tr>
 <tr><td><i class="fas fa-calendar-plus" style="font-size: 20px;"></i> calendar-plus</td><td>&lt;i class="fas fa-calendar-plus"&gt;&lt;/i&gt;</td><td>f271</td></tr>
 <tr><td><i class="fas fa-calendar-times" style="font-size: 20px;"></i> calendar-times</td><td>&lt;i class="fas fa-calendar-times"&gt;&lt;/i&gt;</td><td>f273</td></tr>
 <tr><td><i class="fas fa-calendar-week" style="font-size: 20px;"></i> calendar-week</td><td>&lt;i class="fas fa-calendar-week"&gt;&lt;/i&gt;</td><td>f784</td></tr>
 <tr><td><i class="fas fa-camera" style="font-size: 20px;"></i> camera</td><td>&lt;i class="fas fa-camera"&gt;&lt;/i&gt;</td><td>f030</td></tr>
 <tr><td><i class="fas fa-camera-retro" style="font-size: 20px;"></i> camera-retro</td><td>&lt;i class="fas fa-camera-retro"&gt;&lt;/i&gt;</td><td>f083</td></tr>
 <tr><td><i class="fas fa-campground" style="font-size: 20px;"></i> campground</td><td>&lt;i class="fas fa-campground"&gt;&lt;/i&gt;</td><td>f6bb</td></tr>
 <tr><td><i class="fas fa-candy-cane" style="font-size: 20px;"></i> candy-cane</td><td>&lt;i class="fas fa-candy-cane"&gt;&lt;/i&gt;</td><td>f786</td></tr>
 <tr><td><i class="fas fa-cannabis" style="font-size: 20px;"></i> cannabis</td><td>&lt;i class="fas fa-cannabis"&gt;&lt;/i&gt;</td><td>f55f</td></tr>
 <tr><td><i class="fas fa-capsules" style="font-size: 20px;"></i> capsules</td><td>&lt;i class="fas fa-capsules"&gt;&lt;/i&gt;</td><td>f46b</td></tr>
 <tr><td><i class="fas fa-car" style="font-size: 20px;"></i> car</td><td>&lt;i class="fas fa-car"&gt;&lt;/i&gt;</td><td>f1b9</td></tr>
 <tr><td><i class="fas fa-car-alt" style="font-size: 20px;"></i> car-alt</td><td>&lt;i class="fas fa-car-alt"&gt;&lt;/i&gt;</td><td>f5de</td></tr>
 <tr><td><i class="fas fa-car-battery" style="font-size: 20px;"></i> car-battery</td><td>&lt;i class="fas fa-car-battery"&gt;&lt;/i&gt;</td><td>f5df</td></tr>
 <tr><td><i class="fas fa-car-crash" style="font-size: 20px;"></i> car-crash</td><td>&lt;i class="fas fa-car-crash"&gt;&lt;/i&gt;</td><td>f5e1</td></tr>
 <tr><td><i class="fas fa-car-side" style="font-size: 20px;"></i> car-side</td><td>&lt;i class="fas fa-car-side"&gt;&lt;/i&gt;</td><td>f5e4</td></tr>
 <tr><td><i class="fas fa-caret-down" style="font-size: 20px;"></i> caret-down</td><td>&lt;i class="fas fa-caret-down"&gt;&lt;/i&gt;</td><td>f0d7</td></tr>
 <tr><td><i class="fas fa-caret-left" style="font-size: 20px;"></i> caret-left</td><td>&lt;i class="fas fa-caret-left"&gt;&lt;/i&gt;</td><td>f0d9</td></tr>
 <tr><td><i class="fas fa-caret-right" style="font-size: 20px;"></i> caret-right</td><td>&lt;i class="fas fa-caret-right"&gt;&lt;/i&gt;</td><td>f0da</td></tr>
 <tr><td><i class="fas fa-caret-square-down" style="font-size: 20px;"></i> caret-square-down</td><td>&lt;i class="fas fa-caret-square-down"&gt;&lt;/i&gt;</td><td>f150</td></tr>
 <tr><td><i class="fas fa-caret-square-left" style="font-size: 20px;"></i> caret-square-left</td><td>&lt;i class="fas fa-caret-square-left"&gt;&lt;/i&gt;</td><td>f191</td></tr>
 <tr><td><i class="fas fa-caret-square-right" style="font-size: 20px;"></i> caret-square-right</td><td>&lt;i class="fas fa-caret-square-right"&gt;&lt;/i&gt;</td><td>f152</td></tr>
 <tr><td><i class="fas fa-caret-square-up" style="font-size: 20px;"></i> caret-square-up</td><td>&lt;i class="fas fa-caret-square-up"&gt;&lt;/i&gt;</td><td>f151</td></tr>
 <tr><td><i class="fas fa-caret-up" style="font-size: 20px;"></i> caret-up</td><td>&lt;i class="fas fa-caret-up"&gt;&lt;/i&gt;</td><td>f0d8</td></tr>
 <tr><td><i class="fas fa-carrot" style="font-size: 20px;"></i> carrot</td><td>&lt;i class="fas fa-carrot"&gt;&lt;/i&gt;</td><td>f787</td></tr>
 <tr><td><i class="fas fa-cart-arrow-down" style="font-size: 20px;"></i> cart-arrow-down</td><td>&lt;i class="fas fa-cart-arrow-down"&gt;&lt;/i&gt;</td><td>f218</td></tr>
 <tr><td><i class="fas fa-cart-plus" style="font-size: 20px;"></i> cart-plus</td><td>&lt;i class="fas fa-cart-plus"&gt;&lt;/i&gt;</td><td>f217</td></tr>
 <tr><td><i class="fas fa-cash-register" style="font-size: 20px;"></i> cash-register</td><td>&lt;i class="fas fa-cash-register"&gt;&lt;/i&gt;</td><td>f788</td></tr>
 <tr><td><i class="fas fa-cat" style="font-size: 20px;"></i> cat</td><td>&lt;i class="fas fa-cat"&gt;&lt;/i&gt;</td><td>f6be</td></tr>
 <tr><td><i class="fas fa-certificate" style="font-size: 20px;"></i> certificate</td><td>&lt;i class="fas fa-certificate"&gt;&lt;/i&gt;</td><td>f0a3</td></tr>
 <tr><td><i class="fas fa-chair" style="font-size: 20px;"></i> chair</td><td>&lt;i class="fas fa-chair"&gt;&lt;/i&gt;</td><td>f6c0</td></tr>
 <tr><td><i class="fas fa-chalkboard" style="font-size: 20px;"></i> chalkboard</td><td>&lt;i class="fas fa-chalkboard"&gt;&lt;/i&gt;</td><td>f51b</td></tr>
 <tr><td><i class="fas fa-chalkboard-teacher" style="font-size: 20px;"></i> chalkboard-teacher</td><td>&lt;i class="fas fa-chalkboard-teacher"&gt;&lt;/i&gt;</td><td>f51c</td></tr>
 <tr><td><i class="fas fa-charging-station" style="font-size: 20px;"></i> charging-station</td><td>&lt;i class="fas fa-charging-station"&gt;&lt;/i&gt;</td><td>f5e7</td></tr>
 <tr><td><i class="fas fa-chart-area" style="font-size: 20px;"></i> chart-area</td><td>&lt;i class="fas fa-chart-area"&gt;&lt;/i&gt;</td><td>f1fe</td></tr>
 <tr><td><i class="fas fa-chart-bar" style="font-size: 20px;"></i> chart-bar</td><td>&lt;i class="fas fa-chart-bar"&gt;&lt;/i&gt;</td><td>f080</td></tr>
 <tr><td><i class="fas fa-chart-line" style="font-size: 20px;"></i> chart-line</td><td>&lt;i class="fas fa-chart-line"&gt;&lt;/i&gt;</td><td>f201</td></tr>
 <tr><td><i class="fas fa-chart-pie" style="font-size: 20px;"></i> chart-pie</td><td>&lt;i class="fas fa-chart-pie"&gt;&lt;/i&gt;</td><td>f200</td></tr>
 <tr><td><i class="fas fa-check" style="font-size: 20px;"></i> check</td><td>&lt;i class="fas fa-check"&gt;&lt;/i&gt;</td><td>f00c</td></tr>
 <tr><td><i class="fas fa-check-circle" style="font-size: 20px;"></i> check-circle</td><td>&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;</td><td>f058</td></tr>
 <tr><td><i class="fas fa-check-double" style="font-size: 20px;"></i> check-double</td><td>&lt;i class="fas fa-check-double"&gt;&lt;/i&gt;</td><td>f560</td></tr>
 <tr><td><i class="fas fa-check-square" style="font-size: 20px;"></i> check-square</td><td>&lt;i class="fas fa-check-square"&gt;&lt;/i&gt;</td><td>f14a</td></tr>
 <tr><td><i class="fas fa-cheese" style="font-size: 20px;"></i> cheese</td><td>&lt;i class="fas fa-cheese"&gt;&lt;/i&gt;</td><td>f7ef</td></tr>
 <tr><td><i class="fas fa-chess" style="font-size: 20px;"></i> chess</td><td>&lt;i class="fas fa-chess"&gt;&lt;/i&gt;</td><td>f439</td></tr>
 <tr><td><i class="fas fa-chess-bishop" style="font-size: 20px;"></i> chess-bishop</td><td>&lt;i class="fas fa-chess-bishop"&gt;&lt;/i&gt;</td><td>f43a</td></tr>
 <tr><td><i class="fas fa-chess-board" style="font-size: 20px;"></i> chess-board</td><td>&lt;i class="fas fa-chess-board"&gt;&lt;/i&gt;</td><td>f43c</td></tr>
 <tr><td><i class="fas fa-chess-king" style="font-size: 20px;"></i> chess-king</td><td>&lt;i class="fas fa-chess-king"&gt;&lt;/i&gt;</td><td>f43f</td></tr>
 <tr><td><i class="fas fa-chess-knight" style="font-size: 20px;"></i> chess-knight</td><td>&lt;i class="fas fa-chess-knight"&gt;&lt;/i&gt;</td><td>f441</td></tr>
 <tr><td><i class="fas fa-chess-pawn" style="font-size: 20px;"></i> chess-pawn</td><td>&lt;i class="fas fa-chess-pawn"&gt;&lt;/i&gt;</td><td>f443</td></tr>
 <tr><td><i class="fas fa-chess-queen" style="font-size: 20px;"></i> chess-queen</td><td>&lt;i class="fas fa-chess-queen"&gt;&lt;/i&gt;</td><td>f445</td></tr>
 <tr><td><i class="fas fa-chess-rook" style="font-size: 20px;"></i> chess-rook</td><td>&lt;i class="fas fa-chess-rook"&gt;&lt;/i&gt;</td><td>f447</td></tr>
 <tr><td><i class="fas fa-chevron-circle-down" style="font-size: 20px;"></i> chevron-circle-down</td><td>&lt;i class="fas fa-chevron-circle-down"&gt;&lt;/i&gt;</td><td>f13a</td></tr>
 <tr><td><i class="fas fa-chevron-circle-left" style="font-size: 20px;"></i> chevron-circle-left</td><td>&lt;i class="fas fa-chevron-circle-left"&gt;&lt;/i&gt;</td><td>f137</td></tr>
 <tr><td><i class="fas fa-chevron-circle-right" style="font-size: 20px;"></i> chevron-circle-right</td><td>&lt;i class="fas fa-chevron-circle-right"&gt;&lt;/i&gt;</td><td>f138</td></tr>
 <tr><td><i class="fas fa-chevron-circle-up" style="font-size: 20px;"></i> chevron-circle-up</td><td>&lt;i class="fas fa-chevron-circle-up"&gt;&lt;/i&gt;</td><td>f139</td></tr>
 <tr><td><i class="fas fa-chevron-down" style="font-size: 20px;"></i> chevron-down</td><td>&lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;</td><td>f078</td></tr>
 <tr><td><i class="fas fa-chevron-left" style="font-size: 20px;"></i> chevron-left</td><td>&lt;i class="fas fa-chevron-left"&gt;&lt;/i&gt;</td><td>f053</td></tr>
 <tr><td><i class="fas fa-chevron-right" style="font-size: 20px;"></i> chevron-right</td><td>&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;</td><td>f054</td></tr>
 <tr><td><i class="fas fa-chevron-up" style="font-size: 20px;"></i> chevron-up</td><td>&lt;i class="fas fa-chevron-up"&gt;&lt;/i&gt;</td><td>f077</td></tr>
 <tr><td><i class="fas fa-child" style="font-size: 20px;"></i> child</td><td>&lt;i class="fas fa-child"&gt;&lt;/i&gt;</td><td>f1ae</td></tr>
 <tr><td><i class="fas fa-church" style="font-size: 20px;"></i> church</td><td>&lt;i class="fas fa-church"&gt;&lt;/i&gt;</td><td>f51d</td></tr>
 <tr><td><i class="fas fa-circle" style="font-size: 20px;"></i> circle</td><td>&lt;i class="fas fa-circle"&gt;&lt;/i&gt;</td><td>f111</td></tr>
 <tr><td><i class="fas fa-circle-notch" style="font-size: 20px;"></i> circle-notch</td><td>&lt;i class="fas fa-circle-notch"&gt;&lt;/i&gt;</td><td>f1ce</td></tr>
 <tr><td><i class="fas fa-city" style="font-size: 20px;"></i> city</td><td>&lt;i class="fas fa-city"&gt;&lt;/i&gt;</td><td>f64f</td></tr>
 <tr><td><i class="fas fa-clinic-medical" style="font-size: 20px;"></i> clinic-medical</td><td>&lt;i class="fas fa-clinic-medical"&gt;&lt;/i&gt;</td><td>f7f2</td></tr>
 <tr><td><i class="fas fa-clipboard" style="font-size: 20px;"></i> clipboard</td><td>&lt;i class="fas fa-clipboard"&gt;&lt;/i&gt;</td><td>f328</td></tr>
 <tr><td><i class="fas fa-clipboard-check" style="font-size: 20px;"></i> clipboard-check</td><td>&lt;i class="fas fa-clipboard-check"&gt;&lt;/i&gt;</td><td>f46c</td></tr>
 <tr><td><i class="fas fa-clipboard-list" style="font-size: 20px;"></i> clipboard-list</td><td>&lt;i class="fas fa-clipboard-list"&gt;&lt;/i&gt;</td><td>f46d</td></tr>
 <tr><td><i class="fas fa-clock" style="font-size: 20px;"></i> clock</td><td>&lt;i class="fas fa-clock"&gt;&lt;/i&gt;</td><td>f017</td></tr>
 <tr><td><i class="fas fa-clone" style="font-size: 20px;"></i> clone</td><td>&lt;i class="fas fa-clone"&gt;&lt;/i&gt;</td><td>f24d</td></tr>
 <tr><td><i class="fas fa-closed-captioning" style="font-size: 20px;"></i> closed-captioning</td><td>&lt;i class="fas fa-closed-captioning"&gt;&lt;/i&gt;</td><td>f20a</td></tr>
 <tr><td><i class="fas fa-cloud" style="font-size: 20px;"></i> cloud</td><td>&lt;i class="fas fa-cloud"&gt;&lt;/i&gt;</td><td>f0c2</td></tr>
 <tr><td><i class="fas fa-cloud-download-alt" style="font-size: 20px;"></i> cloud-download-alt</td><td>&lt;i class="fas fa-cloud-download-alt"&gt;&lt;/i&gt;</td><td>f381</td></tr>
 <tr><td><i class="fas fa-cloud-meatball" style="font-size: 20px;"></i> cloud-meatball</td><td>&lt;i class="fas fa-cloud-meatball"&gt;&lt;/i&gt;</td><td>f73b</td></tr>
 <tr><td><i class="fas fa-cloud-moon" style="font-size: 20px;"></i> cloud-moon</td><td>&lt;i class="fas fa-cloud-moon"&gt;&lt;/i&gt;</td><td>f6c3</td></tr>
 <tr><td><i class="fas fa-cloud-moon-rain" style="font-size: 20px;"></i> cloud-moon-rain</td><td>&lt;i class="fas fa-cloud-moon-rain"&gt;&lt;/i&gt;</td><td>f73c</td></tr>
 <tr><td><i class="fas fa-cloud-rain" style="font-size: 20px;"></i> cloud-rain</td><td>&lt;i class="fas fa-cloud-rain"&gt;&lt;/i&gt;</td><td>f73d</td></tr>
 <tr><td><i class="fas fa-cloud-showers-heavy" style="font-size: 20px;"></i> cloud-showers-heavy</td><td>&lt;i class="fas fa-cloud-showers-heavy"&gt;&lt;/i&gt;</td><td>f740</td></tr>
 <tr><td><i class="fas fa-cloud-sun" style="font-size: 20px;"></i> cloud-sun</td><td>&lt;i class="fas fa-cloud-sun"&gt;&lt;/i&gt;</td><td>f6c4</td></tr>
 <tr><td><i class="fas fa-cloud-sun-rain" style="font-size: 20px;"></i> cloud-sun-rain</td><td>&lt;i class="fas fa-cloud-sun-rain"&gt;&lt;/i&gt;</td><td>f743</td></tr>
 <tr><td><i class="fas fa-cloud-upload-alt" style="font-size: 20px;"></i> cloud-upload-alt</td><td>&lt;i class="fas fa-cloud-upload-alt"&gt;&lt;/i&gt;</td><td>f382</td></tr>
 <tr><td><i class="fas fa-cocktail" style="font-size: 20px;"></i> cocktail</td><td>&lt;i class="fas fa-cocktail"&gt;&lt;/i&gt;</td><td>f561</td></tr>
 <tr><td><i class="fas fa-code" style="font-size: 20px;"></i> code</td><td>&lt;i class="fas fa-code"&gt;&lt;/i&gt;</td><td>f121</td></tr>
 <tr><td><i class="fas fa-code-branch" style="font-size: 20px;"></i> code-branch</td><td>&lt;i class="fas fa-code-branch"&gt;&lt;/i&gt;</td><td>f126</td></tr>
 <tr><td><i class="fas fa-coffee" style="font-size: 20px;"></i> coffee</td><td>&lt;i class="fas fa-coffee"&gt;&lt;/i&gt;</td><td>f0f4</td></tr>
 <tr><td><i class="fas fa-cog" style="font-size: 20px;"></i> cog</td><td>&lt;i class="fas fa-cog"&gt;&lt;/i&gt;</td><td>f013</td></tr>
 <tr><td><i class="fas fa-cogs" style="font-size: 20px;"></i> cogs</td><td>&lt;i class="fas fa-cogs"&gt;&lt;/i&gt;</td><td>f085</td></tr>
 <tr><td><i class="fas fa-coins" style="font-size: 20px;"></i> coins</td><td>&lt;i class="fas fa-coins"&gt;&lt;/i&gt;</td><td>f51e</td></tr>
 <tr><td><i class="fas fa-columns" style="font-size: 20px;"></i> columns</td><td>&lt;i class="fas fa-columns"&gt;&lt;/i&gt;</td><td>f0db</td></tr>
 <tr><td><i class="fas fa-comment" style="font-size: 20px;"></i> comment</td><td>&lt;i class="fas fa-comment"&gt;&lt;/i&gt;</td><td>f075</td></tr>
 <tr><td><i class="fas fa-comment-alt" style="font-size: 20px;"></i> comment-alt</td><td>&lt;i class="fas fa-comment-alt"&gt;&lt;/i&gt;</td><td>f27a</td></tr>
 <tr><td><i class="fas fa-comment-dollar" style="font-size: 20px;"></i> comment-dollar</td><td>&lt;i class="fas fa-comment-dollar"&gt;&lt;/i&gt;</td><td>f651</td></tr>
 <tr><td><i class="fas fa-comment-dots" style="font-size: 20px;"></i> comment-dots</td><td>&lt;i class="fas fa-comment-dots"&gt;&lt;/i&gt;</td><td>f4ad</td></tr>
 <tr><td><i class="fas fa-comment-medical" style="font-size: 20px;"></i> comment-medical</td><td>&lt;i class="fas fa-comment-medical"&gt;&lt;/i&gt;</td><td>f7f5</td></tr>
 <tr><td><i class="fas fa-comment-slash" style="font-size: 20px;"></i> comment-slash</td><td>&lt;i class="fas fa-comment-slash"&gt;&lt;/i&gt;</td><td>f4b3</td></tr>
 <tr><td><i class="fas fa-comments" style="font-size: 20px;"></i> comments</td><td>&lt;i class="fas fa-comments"&gt;&lt;/i&gt;</td><td>f086</td></tr>
 <tr><td><i class="fas fa-comments-dollar" style="font-size: 20px;"></i> comments-dollar</td><td>&lt;i class="fas fa-comments-dollar"&gt;&lt;/i&gt;</td><td>f653</td></tr>
 <tr><td><i class="fas fa-compact-disc" style="font-size: 20px;"></i> compact-disc</td><td>&lt;i class="fas fa-compact-disc"&gt;&lt;/i&gt;</td><td>f51f</td></tr>
 <tr><td><i class="fas fa-compass" style="font-size: 20px;"></i> compass</td><td>&lt;i class="fas fa-compass"&gt;&lt;/i&gt;</td><td>f14e</td></tr>
 <tr><td><i class="fas fa-compress" style="font-size: 20px;"></i> compress</td><td>&lt;i class="fas fa-compress"&gt;&lt;/i&gt;</td><td>f066</td></tr>
 <tr><td><i class="fas fa-compress-arrows-alt" style="font-size: 20px;"></i> compress-arrows-alt</td><td>&lt;i class="fas fa-compress-arrows-alt"&gt;&lt;/i&gt;</td><td>f78c</td></tr>
 <tr><td><i class="fas fa-concierge-bell" style="font-size: 20px;"></i> concierge-bell</td><td>&lt;i class="fas fa-concierge-bell"&gt;&lt;/i&gt;</td><td>f562</td></tr>
 <tr><td><i class="fas fa-cookie" style="font-size: 20px;"></i> cookie</td><td>&lt;i class="fas fa-cookie"&gt;&lt;/i&gt;</td><td>f563</td></tr>
 <tr><td><i class="fas fa-cookie-bite" style="font-size: 20px;"></i> cookie-bite</td><td>&lt;i class="fas fa-cookie-bite"&gt;&lt;/i&gt;</td><td>f564</td></tr>
 <tr><td><i class="fas fa-copy" style="font-size: 20px;"></i> copy</td><td>&lt;i class="fas fa-copy"&gt;&lt;/i&gt;</td><td>f0c5</td></tr>
 <tr><td><i class="fas fa-copyright" style="font-size: 20px;"></i> copyright</td><td>&lt;i class="fas fa-copyright"&gt;&lt;/i&gt;</td><td>f1f9</td></tr>
 <tr><td><i class="fas fa-couch" style="font-size: 20px;"></i> couch</td><td>&lt;i class="fas fa-couch"&gt;&lt;/i&gt;</td><td>f4b8</td></tr>
 <tr><td><i class="fas fa-credit-card" style="font-size: 20px;"></i> credit-card</td><td>&lt;i class="fas fa-credit-card"&gt;&lt;/i&gt;</td><td>f09d</td></tr>
 <tr><td><i class="fas fa-crop" style="font-size: 20px;"></i> crop</td><td>&lt;i class="fas fa-crop"&gt;&lt;/i&gt;</td><td>f125</td></tr>
 <tr><td><i class="fas fa-crop-alt" style="font-size: 20px;"></i> crop-alt</td><td>&lt;i class="fas fa-crop-alt"&gt;&lt;/i&gt;</td><td>f565</td></tr>
 <tr><td><i class="fas fa-cross" style="font-size: 20px;"></i> cross</td><td>&lt;i class="fas fa-cross"&gt;&lt;/i&gt;</td><td>f654</td></tr>
 <tr><td><i class="fas fa-crosshairs" style="font-size: 20px;"></i> crosshairs</td><td>&lt;i class="fas fa-crosshairs"&gt;&lt;/i&gt;</td><td>f05b</td></tr>
 <tr><td><i class="fas fa-crow" style="font-size: 20px;"></i> crow</td><td>&lt;i class="fas fa-crow"&gt;&lt;/i&gt;</td><td>f520</td></tr>
 <tr><td><i class="fas fa-crown" style="font-size: 20px;"></i> crown</td><td>&lt;i class="fas fa-crown"&gt;&lt;/i&gt;</td><td>f521</td></tr>
 <tr><td><i class="fas fa-crutch" style="font-size: 20px;"></i> crutch</td><td>&lt;i class="fas fa-crutch"&gt;&lt;/i&gt;</td><td>f7f7</td></tr>
 <tr><td><i class="fas fa-cube" style="font-size: 20px;"></i> cube</td><td>&lt;i class="fas fa-cube"&gt;&lt;/i&gt;</td><td>f1b2</td></tr>
 <tr><td><i class="fas fa-cubes" style="font-size: 20px;"></i> cubes</td><td>&lt;i class="fas fa-cubes"&gt;&lt;/i&gt;</td><td>f1b3</td></tr>
 <tr><td><i class="fas fa-cut" style="font-size: 20px;"></i> cut</td><td>&lt;i class="fas fa-cut"&gt;&lt;/i&gt;</td><td>f0c4</td></tr>
 <tr><td><i class="fas fa-database" style="font-size: 20px;"></i> database</td><td>&lt;i class="fas fa-database"&gt;&lt;/i&gt;</td><td>f1c0</td></tr>
 <tr><td><i class="fas fa-deaf" style="font-size: 20px;"></i> deaf</td><td>&lt;i class="fas fa-deaf"&gt;&lt;/i&gt;</td><td>f2a4</td></tr>
 <tr><td><i class="fas fa-democrat" style="font-size: 20px;"></i> democrat</td><td>&lt;i class="fas fa-democrat"&gt;&lt;/i&gt;</td><td>f747</td></tr>
 <tr><td><i class="fas fa-desktop" style="font-size: 20px;"></i> desktop</td><td>&lt;i class="fas fa-desktop"&gt;&lt;/i&gt;</td><td>f108</td></tr>
 <tr><td><i class="fas fa-dharmachakra" style="font-size: 20px;"></i> dharmachakra</td><td>&lt;i class="fas fa-dharmachakra"&gt;&lt;/i&gt;</td><td>f655</td></tr>
 <tr><td><i class="fas fa-diagnoses" style="font-size: 20px;"></i> diagnoses</td><td>&lt;i class="fas fa-diagnoses"&gt;&lt;/i&gt;</td><td>f470</td></tr>
 <tr><td><i class="fas fa-dice" style="font-size: 20px;"></i> dice</td><td>&lt;i class="fas fa-dice"&gt;&lt;/i&gt;</td><td>f522</td></tr>
 <tr><td><i class="fas fa-dice-d20" style="font-size: 20px;"></i> dice-d20</td><td>&lt;i class="fas fa-dice-d20"&gt;&lt;/i&gt;</td><td>f6cf</td></tr>
 <tr><td><i class="fas fa-dice-d6" style="font-size: 20px;"></i> dice-d6</td><td>&lt;i class="fas fa-dice-d6"&gt;&lt;/i&gt;</td><td>f6d1</td></tr>
 <tr><td><i class="fas fa-dice-five" style="font-size: 20px;"></i> dice-five</td><td>&lt;i class="fas fa-dice-five"&gt;&lt;/i&gt;</td><td>f523</td></tr>
 <tr><td><i class="fas fa-dice-four" style="font-size: 20px;"></i> dice-four</td><td>&lt;i class="fas fa-dice-four"&gt;&lt;/i&gt;</td><td>f524</td></tr>
 <tr><td><i class="fas fa-dice-one" style="font-size: 20px;"></i> dice-one</td><td>&lt;i class="fas fa-dice-one"&gt;&lt;/i&gt;</td><td>f525</td></tr>
 <tr><td><i class="fas fa-dice-six" style="font-size: 20px;"></i> dice-six</td><td>&lt;i class="fas fa-dice-six"&gt;&lt;/i&gt;</td><td>f526</td></tr>
 <tr><td><i class="fas fa-dice-three" style="font-size: 20px;"></i> dice-three</td><td>&lt;i class="fas fa-dice-three"&gt;&lt;/i&gt;</td><td>f527</td></tr>
 <tr><td><i class="fas fa-dice-two" style="font-size: 20px;"></i> dice-two</td><td>&lt;i class="fas fa-dice-two"&gt;&lt;/i&gt;</td><td>f528</td></tr>
 <tr><td><i class="fas fa-digital-tachograph" style="font-size: 20px;"></i> digital-tachograph</td><td>&lt;i class="fas fa-digital-tachograph"&gt;&lt;/i&gt;</td><td>f566</td></tr>
 <tr><td><i class="fas fa-directions" style="font-size: 20px;"></i> directions</td><td>&lt;i class="fas fa-directions"&gt;&lt;/i&gt;</td><td>f5eb</td></tr>
 <tr><td><i class="fas fa-divide" style="font-size: 20px;"></i> divide</td><td>&lt;i class="fas fa-divide"&gt;&lt;/i&gt;</td><td>f529</td></tr>
 <tr><td><i class="fas fa-dizzy" style="font-size: 20px;"></i> dizzy</td><td>&lt;i class="fas fa-dizzy"&gt;&lt;/i&gt;</td><td>f567</td></tr>
 <tr><td><i class="fas fa-dna" style="font-size: 20px;"></i> dna</td><td>&lt;i class="fas fa-dna"&gt;&lt;/i&gt;</td><td>f471</td></tr>
 <tr><td><i class="fas fa-dog" style="font-size: 20px;"></i> dog</td><td>&lt;i class="fas fa-dog"&gt;&lt;/i&gt;</td><td>f6d3</td></tr>
 <tr><td><i class="fas fa-dollar-sign" style="font-size: 20px;"></i> dollar-sign</td><td>&lt;i class="fas fa-dollar-sign"&gt;&lt;/i&gt;</td><td>f155</td></tr>
 <tr><td><i class="fas fa-dolly" style="font-size: 20px;"></i> dolly</td><td>&lt;i class="fas fa-dolly"&gt;&lt;/i&gt;</td><td>f472</td></tr>
 <tr><td><i class="fas fa-dolly-flatbed" style="font-size: 20px;"></i> dolly-flatbed</td><td>&lt;i class="fas fa-dolly-flatbed"&gt;&lt;/i&gt;</td><td>f474</td></tr>
 <tr><td><i class="fas fa-donate" style="font-size: 20px;"></i> donate</td><td>&lt;i class="fas fa-donate"&gt;&lt;/i&gt;</td><td>f4b9</td></tr>
 <tr><td><i class="fas fa-door-closed" style="font-size: 20px;"></i> door-closed</td><td>&lt;i class="fas fa-door-closed"&gt;&lt;/i&gt;</td><td>f52a</td></tr>
 <tr><td><i class="fas fa-door-open" style="font-size: 20px;"></i> door-open</td><td>&lt;i class="fas fa-door-open"&gt;&lt;/i&gt;</td><td>f52b</td></tr>
 <tr><td><i class="fas fa-dot-circle" style="font-size: 20px;"></i> dot-circle</td><td>&lt;i class="fas fa-dot-circle"&gt;&lt;/i&gt;</td><td>f192</td></tr>
 <tr><td><i class="fas fa-dove" style="font-size: 20px;"></i> dove</td><td>&lt;i class="fas fa-dove"&gt;&lt;/i&gt;</td><td>f4ba</td></tr>
 <tr><td><i class="fas fa-download" style="font-size: 20px;"></i> download</td><td>&lt;i class="fas fa-download"&gt;&lt;/i&gt;</td><td>f019</td></tr>
 <tr><td><i class="fas fa-drafting-compass" style="font-size: 20px;"></i> drafting-compass</td><td>&lt;i class="fas fa-drafting-compass"&gt;&lt;/i&gt;</td><td>f568</td></tr>
 <tr><td><i class="fas fa-dragon" style="font-size: 20px;"></i> dragon</td><td>&lt;i class="fas fa-dragon"&gt;&lt;/i&gt;</td><td>f6d5</td></tr>
 <tr><td><i class="fas fa-draw-polygon" style="font-size: 20px;"></i> draw-polygon</td><td>&lt;i class="fas fa-draw-polygon"&gt;&lt;/i&gt;</td><td>f5ee</td></tr>
 <tr><td><i class="fas fa-drum" style="font-size: 20px;"></i> drum</td><td>&lt;i class="fas fa-drum"&gt;&lt;/i&gt;</td><td>f569</td></tr>
 <tr><td><i class="fas fa-drum-steelpan" style="font-size: 20px;"></i> drum-steelpan</td><td>&lt;i class="fas fa-drum-steelpan"&gt;&lt;/i&gt;</td><td>f56a</td></tr>
 <tr><td><i class="fas fa-drumstick-bite" style="font-size: 20px;"></i> drumstick-bite</td><td>&lt;i class="fas fa-drumstick-bite"&gt;&lt;/i&gt;</td><td>f6d7</td></tr>
 <tr><td><i class="fas fa-dumbbell" style="font-size: 20px;"></i> dumbbell</td><td>&lt;i class="fas fa-dumbbell"&gt;&lt;/i&gt;</td><td>f44b</td></tr>
 <tr><td><i class="fas fa-dumpster" style="font-size: 20px;"></i> dumpster</td><td>&lt;i class="fas fa-dumpster"&gt;&lt;/i&gt;</td><td>f793</td></tr>
 <tr><td><i class="fas fa-dumpster-fire" style="font-size: 20px;"></i> dumpster-fire</td><td>&lt;i class="fas fa-dumpster-fire"&gt;&lt;/i&gt;</td><td>f794</td></tr>
 <tr><td><i class="fas fa-dungeon" style="font-size: 20px;"></i> dungeon</td><td>&lt;i class="fas fa-dungeon"&gt;&lt;/i&gt;</td><td>f6d9</td></tr>
 <tr><td><i class="fas fa-edit" style="font-size: 20px;"></i> edit</td><td>&lt;i class="fas fa-edit"&gt;&lt;/i&gt;</td><td>f044</td></tr>
 <tr><td><i class="fas fa-egg" style="font-size: 20px;"></i> egg</td><td>&lt;i class="fas fa-egg"&gt;&lt;/i&gt;</td><td>f7fb</td></tr>
 <tr><td><i class="fas fa-eject" style="font-size: 20px;"></i> eject</td><td>&lt;i class="fas fa-eject"&gt;&lt;/i&gt;</td><td>f052</td></tr>
 <tr><td><i class="fas fa-ellipsis-h" style="font-size: 20px;"></i> ellipsis-h</td><td>&lt;i class="fas fa-ellipsis-h"&gt;&lt;/i&gt;</td><td>f141</td></tr>
 <tr><td><i class="fas fa-ellipsis-v" style="font-size: 20px;"></i> ellipsis-v</td><td>&lt;i class="fas fa-ellipsis-v"&gt;&lt;/i&gt;</td><td>f142</td></tr>
 <tr><td><i class="fas fa-envelope" style="font-size: 20px;"></i> envelope</td><td>&lt;i class="fas fa-envelope"&gt;&lt;/i&gt;</td><td>f0e0</td></tr>
 <tr><td><i class="fas fa-envelope-open" style="font-size: 20px;"></i> envelope-open</td><td>&lt;i class="fas fa-envelope-open"&gt;&lt;/i&gt;</td><td>f2b6</td></tr>
 <tr><td><i class="fas fa-envelope-open-text" style="font-size: 20px;"></i> envelope-open-text</td><td>&lt;i class="fas fa-envelope-open-text"&gt;&lt;/i&gt;</td><td>f658</td></tr>
 <tr><td><i class="fas fa-envelope-square" style="font-size: 20px;"></i> envelope-square</td><td>&lt;i class="fas fa-envelope-square"&gt;&lt;/i&gt;</td><td>f199</td></tr>
 <tr><td><i class="fas fa-equals" style="font-size: 20px;"></i> equals</td><td>&lt;i class="fas fa-equals"&gt;&lt;/i&gt;</td><td>f52c</td></tr>
 <tr><td><i class="fas fa-eraser" style="font-size: 20px;"></i> eraser</td><td>&lt;i class="fas fa-eraser"&gt;&lt;/i&gt;</td><td>f12d</td></tr>
 <tr><td><i class="fas fa-ethernet" style="font-size: 20px;"></i> ethernet</td><td>&lt;i class="fas fa-ethernet"&gt;&lt;/i&gt;</td><td>f796</td></tr>
 <tr><td><i class="fas fa-euro-sign" style="font-size: 20px;"></i> euro-sign</td><td>&lt;i class="fas fa-euro-sign"&gt;&lt;/i&gt;</td><td>f153</td></tr>
 <tr><td><i class="fas fa-exchange-alt" style="font-size: 20px;"></i> exchange-alt</td><td>&lt;i class="fas fa-exchange-alt"&gt;&lt;/i&gt;</td><td>f362</td></tr>
 <tr><td><i class="fas fa-exclamation" style="font-size: 20px;"></i> exclamation</td><td>&lt;i class="fas fa-exclamation"&gt;&lt;/i&gt;</td><td>f12a</td></tr>
 <tr><td><i class="fas fa-exclamation-circle" style="font-size: 20px;"></i> exclamation-circle</td><td>&lt;i class="fas fa-exclamation-circle"&gt;&lt;/i&gt;</td><td>f06a</td></tr>
 <tr><td><i class="fas fa-exclamation-triangle" style="font-size: 20px;"></i> exclamation-triangle</td><td>&lt;i class="fas fa-exclamation-triangle"&gt;&lt;/i&gt;</td><td>f071</td></tr>
 <tr><td><i class="fas fa-expand" style="font-size: 20px;"></i> expand</td><td>&lt;i class="fas fa-expand"&gt;&lt;/i&gt;</td><td>f065</td></tr>
 <tr><td><i class="fas fa-expand-arrows-alt" style="font-size: 20px;"></i> expand-arrows-alt</td><td>&lt;i class="fas fa-expand-arrows-alt"&gt;&lt;/i&gt;</td><td>f31e</td></tr>
 <tr><td><i class="fas fa-external-link-alt" style="font-size: 20px;"></i> external-link-alt</td><td>&lt;i class="fas fa-external-link-alt"&gt;&lt;/i&gt;</td><td>f35d</td></tr>
 <tr><td><i class="fas fa-external-link-square-alt" style="font-size: 20px;"></i> external-link-square-alt</td><td>&lt;i class="fas fa-external-link-square-alt"&gt;&lt;/i&gt;</td><td>f360</td></tr>
 <tr><td><i class="fas fa-eye" style="font-size: 20px;"></i> eye</td><td>&lt;i class="fas fa-eye"&gt;&lt;/i&gt;</td><td>f06e</td></tr>
 <tr><td><i class="fas fa-eye-dropper" style="font-size: 20px;"></i> eye-dropper</td><td>&lt;i class="fas fa-eye-dropper"&gt;&lt;/i&gt;</td><td>f1fb</td></tr>
 <tr><td><i class="fas fa-eye-slash" style="font-size: 20px;"></i> eye-slash</td><td>&lt;i class="fas fa-eye-slash"&gt;&lt;/i&gt;</td><td>f070</td></tr>
 <tr><td><i class="fas fa-fan" style="font-size: 20px;"></i> fan</td><td>&lt;i class="fas fa-fan"&gt;&lt;/i&gt;</td><td>f863</td></tr>
 <tr><td><i class="fas fa-fast-backward" style="font-size: 20px;"></i> fast-backward</td><td>&lt;i class="fas fa-fast-backward"&gt;&lt;/i&gt;</td><td>f049</td></tr>
 <tr><td><i class="fas fa-fast-forward" style="font-size: 20px;"></i> fast-forward</td><td>&lt;i class="fas fa-fast-forward"&gt;&lt;/i&gt;</td><td>f050</td></tr>
 <tr><td><i class="fas fa-fax" style="font-size: 20px;"></i> fax</td><td>&lt;i class="fas fa-fax"&gt;&lt;/i&gt;</td><td>f1ac</td></tr>
 <tr><td><i class="fas fa-feather" style="font-size: 20px;"></i> feather</td><td>&lt;i class="fas fa-feather"&gt;&lt;/i&gt;</td><td>f52d</td></tr>
 <tr><td><i class="fas fa-feather-alt" style="font-size: 20px;"></i> feather-alt</td><td>&lt;i class="fas fa-feather-alt"&gt;&lt;/i&gt;</td><td>f56b</td></tr>
 <tr><td><i class="fas fa-female" style="font-size: 20px;"></i> female</td><td>&lt;i class="fas fa-female"&gt;&lt;/i&gt;</td><td>f182</td></tr>
 <tr><td><i class="fas fa-fighter-jet" style="font-size: 20px;"></i> fighter-jet</td><td>&lt;i class="fas fa-fighter-jet"&gt;&lt;/i&gt;</td><td>f0fb</td></tr>
 <tr><td><i class="fas fa-file" style="font-size: 20px;"></i> file</td><td>&lt;i class="fas fa-file"&gt;&lt;/i&gt;</td><td>f15b</td></tr>
 <tr><td><i class="fas fa-file-alt" style="font-size: 20px;"></i> file-alt</td><td>&lt;i class="fas fa-file-alt"&gt;&lt;/i&gt;</td><td>f15c</td></tr>
 <tr><td><i class="fas fa-file-archive" style="font-size: 20px;"></i> file-archive</td><td>&lt;i class="fas fa-file-archive"&gt;&lt;/i&gt;</td><td>f1c6</td></tr>
 <tr><td><i class="fas fa-file-audio" style="font-size: 20px;"></i> file-audio</td><td>&lt;i class="fas fa-file-audio"&gt;&lt;/i&gt;</td><td>f1c7</td></tr>
 <tr><td><i class="fas fa-file-code" style="font-size: 20px;"></i> file-code</td><td>&lt;i class="fas fa-file-code"&gt;&lt;/i&gt;</td><td>f1c9</td></tr>
 <tr><td><i class="fas fa-file-contract" style="font-size: 20px;"></i> file-contract</td><td>&lt;i class="fas fa-file-contract"&gt;&lt;/i&gt;</td><td>f56c</td></tr>
 <tr><td><i class="fas fa-file-csv" style="font-size: 20px;"></i> file-csv</td><td>&lt;i class="fas fa-file-csv"&gt;&lt;/i&gt;</td><td>f6dd</td></tr>
 <tr><td><i class="fas fa-file-download" style="font-size: 20px;"></i> file-download</td><td>&lt;i class="fas fa-file-download"&gt;&lt;/i&gt;</td><td>f56d</td></tr>
 <tr><td><i class="fas fa-file-excel" style="font-size: 20px;"></i> file-excel</td><td>&lt;i class="fas fa-file-excel"&gt;&lt;/i&gt;</td><td>f1c3</td></tr>
 <tr><td><i class="fas fa-file-export" style="font-size: 20px;"></i> file-export</td><td>&lt;i class="fas fa-file-export"&gt;&lt;/i&gt;</td><td>f56e</td></tr>
 <tr><td><i class="fas fa-file-image" style="font-size: 20px;"></i> file-image</td><td>&lt;i class="fas fa-file-image"&gt;&lt;/i&gt;</td><td>f1c5</td></tr>
 <tr><td><i class="fas fa-file-import" style="font-size: 20px;"></i> file-import</td><td>&lt;i class="fas fa-file-import"&gt;&lt;/i&gt;</td><td>f56f</td></tr>
 <tr><td><i class="fas fa-file-invoice" style="font-size: 20px;"></i> file-invoice</td><td>&lt;i class="fas fa-file-invoice"&gt;&lt;/i&gt;</td><td>f570</td></tr>
 <tr><td><i class="fas fa-file-invoice-dollar" style="font-size: 20px;"></i> file-invoice-dollar</td><td>&lt;i class="fas fa-file-invoice-dollar"&gt;&lt;/i&gt;</td><td>f571</td></tr>
 <tr><td><i class="fas fa-file-medical" style="font-size: 20px;"></i> file-medical</td><td>&lt;i class="fas fa-file-medical"&gt;&lt;/i&gt;</td><td>f477</td></tr>
 <tr><td><i class="fas fa-file-medical-alt" style="font-size: 20px;"></i> file-medical-alt</td><td>&lt;i class="fas fa-file-medical-alt"&gt;&lt;/i&gt;</td><td>f478</td></tr>
 <tr><td><i class="fas fa-file-pdf" style="font-size: 20px;"></i> file-pdf</td><td>&lt;i class="fas fa-file-pdf"&gt;&lt;/i&gt;</td><td>f1c1</td></tr>
 <tr><td><i class="fas fa-file-powerpoint" style="font-size: 20px;"></i> file-powerpoint</td><td>&lt;i class="fas fa-file-powerpoint"&gt;&lt;/i&gt;</td><td>f1c4</td></tr>
 <tr><td><i class="fas fa-file-prescription" style="font-size: 20px;"></i> file-prescription</td><td>&lt;i class="fas fa-file-prescription"&gt;&lt;/i&gt;</td><td>f572</td></tr>
 <tr><td><i class="fas fa-file-signature" style="font-size: 20px;"></i> file-signature</td><td>&lt;i class="fas fa-file-signature"&gt;&lt;/i&gt;</td><td>f573</td></tr>
 <tr><td><i class="fas fa-file-upload" style="font-size: 20px;"></i> file-upload</td><td>&lt;i class="fas fa-file-upload"&gt;&lt;/i&gt;</td><td>f574</td></tr>
 <tr><td><i class="fas fa-file-video" style="font-size: 20px;"></i> file-video</td><td>&lt;i class="fas fa-file-video"&gt;&lt;/i&gt;</td><td>f1c8</td></tr>
 <tr><td><i class="fas fa-file-word" style="font-size: 20px;"></i> file-word</td><td>&lt;i class="fas fa-file-word"&gt;&lt;/i&gt;</td><td>f1c2</td></tr>
 <tr><td><i class="fas fa-fill" style="font-size: 20px;"></i> fill</td><td>&lt;i class="fas fa-fill"&gt;&lt;/i&gt;</td><td>f575</td></tr>
 <tr><td><i class="fas fa-fill-drip" style="font-size: 20px;"></i> fill-drip</td><td>&lt;i class="fas fa-fill-drip"&gt;&lt;/i&gt;</td><td>f576</td></tr>
 <tr><td><i class="fas fa-film" style="font-size: 20px;"></i> film</td><td>&lt;i class="fas fa-film"&gt;&lt;/i&gt;</td><td>f008</td></tr>
 <tr><td><i class="fas fa-filter" style="font-size: 20px;"></i> filter</td><td>&lt;i class="fas fa-filter"&gt;&lt;/i&gt;</td><td>f0b0</td></tr>
 <tr><td><i class="fas fa-fingerprint" style="font-size: 20px;"></i> fingerprint</td><td>&lt;i class="fas fa-fingerprint"&gt;&lt;/i&gt;</td><td>f577</td></tr>
 <tr><td><i class="fas fa-fire" style="font-size: 20px;"></i> fire</td><td>&lt;i class="fas fa-fire"&gt;&lt;/i&gt;</td><td>f06d</td></tr>
 <tr><td><i class="fas fa-fire-alt" style="font-size: 20px;"></i> fire-alt</td><td>&lt;i class="fas fa-fire-alt"&gt;&lt;/i&gt;</td><td>f7e4</td></tr>
 <tr><td><i class="fas fa-fire-extinguisher" style="font-size: 20px;"></i> fire-extinguisher</td><td>&lt;i class="fas fa-fire-extinguisher"&gt;&lt;/i&gt;</td><td>f134</td></tr>
 <tr><td><i class="fas fa-first-aid" style="font-size: 20px;"></i> first-aid</td><td>&lt;i class="fas fa-first-aid"&gt;&lt;/i&gt;</td><td>f479</td></tr>
 <tr><td><i class="fas fa-fish" style="font-size: 20px;"></i> fish</td><td>&lt;i class="fas fa-fish"&gt;&lt;/i&gt;</td><td>f578</td></tr>
 <tr><td><i class="fas fa-fist-raised" style="font-size: 20px;"></i> fist-raised</td><td>&lt;i class="fas fa-fist-raised"&gt;&lt;/i&gt;</td><td>f6de</td></tr>
 <tr><td><i class="fas fa-flag" style="font-size: 20px;"></i> flag</td><td>&lt;i class="fas fa-flag"&gt;&lt;/i&gt;</td><td>f024</td></tr>
 <tr><td><i class="fas fa-flag-checkered" style="font-size: 20px;"></i> flag-checkered</td><td>&lt;i class="fas fa-flag-checkered"&gt;&lt;/i&gt;</td><td>f11e</td></tr>
 <tr><td><i class="fas fa-flag-usa" style="font-size: 20px;"></i> flag-usa</td><td>&lt;i class="fas fa-flag-usa"&gt;&lt;/i&gt;</td><td>f74d</td></tr>
 <tr><td><i class="fas fa-flask" style="font-size: 20px;"></i> flask</td><td>&lt;i class="fas fa-flask"&gt;&lt;/i&gt;</td><td>f0c3</td></tr>
 <tr><td><i class="fas fa-flushed" style="font-size: 20px;"></i> flushed</td><td>&lt;i class="fas fa-flushed"&gt;&lt;/i&gt;</td><td>f579</td></tr>
 <tr><td><i class="fas fa-folder" style="font-size: 20px;"></i> folder</td><td>&lt;i class="fas fa-folder"&gt;&lt;/i&gt;</td><td>f07b</td></tr>
 <tr><td><i class="fas fa-folder-minus" style="font-size: 20px;"></i> folder-minus</td><td>&lt;i class="fas fa-folder-minus"&gt;&lt;/i&gt;</td><td>f65d</td></tr>
 <tr><td><i class="fas fa-folder-open" style="font-size: 20px;"></i> folder-open</td><td>&lt;i class="fas fa-folder-open"&gt;&lt;/i&gt;</td><td>f07c</td></tr>
 <tr><td><i class="fas fa-folder-plus" style="font-size: 20px;"></i> folder-plus</td><td>&lt;i class="fas fa-folder-plus"&gt;&lt;/i&gt;</td><td>f65e</td></tr>
 <tr><td><i class="fas fa-font" style="font-size: 20px;"></i> font</td><td>&lt;i class="fas fa-font"&gt;&lt;/i&gt;</td><td>f031</td></tr>
 <tr><td><i class="fas fa-football-ball" style="font-size: 20px;"></i> football-ball</td><td>&lt;i class="fas fa-football-ball"&gt;&lt;/i&gt;</td><td>f44e</td></tr>
 <tr><td><i class="fas fa-forward" style="font-size: 20px;"></i> forward</td><td>&lt;i class="fas fa-forward"&gt;&lt;/i&gt;</td><td>f04e</td></tr>
 <tr><td><i class="fas fa-frog" style="font-size: 20px;"></i> frog</td><td>&lt;i class="fas fa-frog"&gt;&lt;/i&gt;</td><td>f52e</td></tr>
 <tr><td><i class="fas fa-frown" style="font-size: 20px;"></i> frown</td><td>&lt;i class="fas fa-frown"&gt;&lt;/i&gt;</td><td>f119</td></tr>
 <tr><td><i class="fas fa-frown-open" style="font-size: 20px;"></i> frown-open</td><td>&lt;i class="fas fa-frown-open"&gt;&lt;/i&gt;</td><td>f57a</td></tr>
 <tr><td><i class="fas fa-funnel-dollar" style="font-size: 20px;"></i> funnel-dollar</td><td>&lt;i class="fas fa-funnel-dollar"&gt;&lt;/i&gt;</td><td>f662</td></tr>
 <tr><td><i class="fas fa-futbol" style="font-size: 20px;"></i> futbol</td><td>&lt;i class="fas fa-futbol"&gt;&lt;/i&gt;</td><td>f1e3</td></tr>
 <tr><td><i class="fas fa-gamepad" style="font-size: 20px;"></i> gamepad</td><td>&lt;i class="fas fa-gamepad"&gt;&lt;/i&gt;</td><td>f11b</td></tr>
 <tr><td><i class="fas fa-gas-pump" style="font-size: 20px;"></i> gas-pump</td><td>&lt;i class="fas fa-gas-pump"&gt;&lt;/i&gt;</td><td>f52f</td></tr>
 <tr><td><i class="fas fa-gavel" style="font-size: 20px;"></i> gavel</td><td>&lt;i class="fas fa-gavel"&gt;&lt;/i&gt;</td><td>f0e3</td></tr>
 <tr><td><i class="fas fa-gem" style="font-size: 20px;"></i> gem</td><td>&lt;i class="fas fa-gem"&gt;&lt;/i&gt;</td><td>f3a5</td></tr>
 <tr><td><i class="fas fa-genderless" style="font-size: 20px;"></i> genderless</td><td>&lt;i class="fas fa-genderless"&gt;&lt;/i&gt;</td><td>f22d</td></tr>
 <tr><td><i class="fas fa-ghost" style="font-size: 20px;"></i> ghost</td><td>&lt;i class="fas fa-ghost"&gt;&lt;/i&gt;</td><td>f6e2</td></tr>
 <tr><td><i class="fas fa-gift" style="font-size: 20px;"></i> gift</td><td>&lt;i class="fas fa-gift"&gt;&lt;/i&gt;</td><td>f06b</td></tr>
 <tr><td><i class="fas fa-gifts" style="font-size: 20px;"></i> gifts</td><td>&lt;i class="fas fa-gifts"&gt;&lt;/i&gt;</td><td>f79c</td></tr>
 <tr><td><i class="fas fa-glass-cheers" style="font-size: 20px;"></i> glass-cheers</td><td>&lt;i class="fas fa-glass-cheers"&gt;&lt;/i&gt;</td><td>f79f</td></tr>
 <tr><td><i class="fas fa-glass-martini" style="font-size: 20px;"></i> glass-martini</td><td>&lt;i class="fas fa-glass-martini"&gt;&lt;/i&gt;</td><td>f000</td></tr>
 <tr><td><i class="fas fa-glass-martini-alt" style="font-size: 20px;"></i> glass-martini-alt</td><td>&lt;i class="fas fa-glass-martini-alt"&gt;&lt;/i&gt;</td><td>f57b</td></tr>
 <tr><td><i class="fas fa-glass-whiskey" style="font-size: 20px;"></i> glass-whiskey</td><td>&lt;i class="fas fa-glass-whiskey"&gt;&lt;/i&gt;</td><td>f7a0</td></tr>
 <tr><td><i class="fas fa-glasses" style="font-size: 20px;"></i> glasses</td><td>&lt;i class="fas fa-glasses"&gt;&lt;/i&gt;</td><td>f530</td></tr>
 <tr><td><i class="fas fa-globe" style="font-size: 20px;"></i> globe</td><td>&lt;i class="fas fa-globe"&gt;&lt;/i&gt;</td><td>f0ac</td></tr>
 <tr><td><i class="fas fa-globe-africa" style="font-size: 20px;"></i> globe-africa</td><td>&lt;i class="fas fa-globe-africa"&gt;&lt;/i&gt;</td><td>f57c</td></tr>
 <tr><td><i class="fas fa-globe-americas" style="font-size: 20px;"></i> globe-americas</td><td>&lt;i class="fas fa-globe-americas"&gt;&lt;/i&gt;</td><td>f57d</td></tr>
 <tr><td><i class="fas fa-globe-asia" style="font-size: 20px;"></i> globe-asia</td><td>&lt;i class="fas fa-globe-asia"&gt;&lt;/i&gt;</td><td>f57e</td></tr>
 <tr><td><i class="fas fa-globe-europe" style="font-size: 20px;"></i> globe-europe</td><td>&lt;i class="fas fa-globe-europe"&gt;&lt;/i&gt;</td><td>f7a2</td></tr>
 <tr><td><i class="fas fa-golf-ball" style="font-size: 20px;"></i> golf-ball</td><td>&lt;i class="fas fa-golf-ball"&gt;&lt;/i&gt;</td><td>f450</td></tr>
 <tr><td><i class="fas fa-gopuram" style="font-size: 20px;"></i> gopuram</td><td>&lt;i class="fas fa-gopuram"&gt;&lt;/i&gt;</td><td>f664</td></tr>
 <tr><td><i class="fas fa-graduation-cap" style="font-size: 20px;"></i> graduation-cap</td><td>&lt;i class="fas fa-graduation-cap"&gt;&lt;/i&gt;</td><td>f19d</td></tr>
 <tr><td><i class="fas fa-greater-than" style="font-size: 20px;"></i> greater-than</td><td>&lt;i class="fas fa-greater-than"&gt;&lt;/i&gt;</td><td>f531</td></tr>
 <tr><td><i class="fas fa-greater-than-equal" style="font-size: 20px;"></i> greater-than-equal</td><td>&lt;i class="fas fa-greater-than-equal"&gt;&lt;/i&gt;</td><td>f532</td></tr>
 <tr><td><i class="fas fa-grimace" style="font-size: 20px;"></i> grimace</td><td>&lt;i class="fas fa-grimace"&gt;&lt;/i&gt;</td><td>f57f</td></tr>
 <tr><td><i class="fas fa-grin" style="font-size: 20px;"></i> grin</td><td>&lt;i class="fas fa-grin"&gt;&lt;/i&gt;</td><td>f580</td></tr>
 <tr><td><i class="fas fa-grin-alt" style="font-size: 20px;"></i> grin-alt</td><td>&lt;i class="fas fa-grin-alt"&gt;&lt;/i&gt;</td><td>f581</td></tr>
 <tr><td><i class="fas fa-grin-beam" style="font-size: 20px;"></i> grin-beam</td><td>&lt;i class="fas fa-grin-beam"&gt;&lt;/i&gt;</td><td>f582</td></tr>
 <tr><td><i class="fas fa-grin-beam-sweat" style="font-size: 20px;"></i> grin-beam-sweat</td><td>&lt;i class="fas fa-grin-beam-sweat"&gt;&lt;/i&gt;</td><td>f583</td></tr>
 <tr><td><i class="fas fa-grin-hearts" style="font-size: 20px;"></i> grin-hearts</td><td>&lt;i class="fas fa-grin-hearts"&gt;&lt;/i&gt;</td><td>f584</td></tr>
 <tr><td><i class="fas fa-grin-squint" style="font-size: 20px;"></i> grin-squint</td><td>&lt;i class="fas fa-grin-squint"&gt;&lt;/i&gt;</td><td>f585</td></tr>
 <tr><td><i class="fas fa-grin-squint-tears" style="font-size: 20px;"></i> grin-squint-tears</td><td>&lt;i class="fas fa-grin-squint-tears"&gt;&lt;/i&gt;</td><td>f586</td></tr>
 <tr><td><i class="fas fa-grin-stars" style="font-size: 20px;"></i> grin-stars</td><td>&lt;i class="fas fa-grin-stars"&gt;&lt;/i&gt;</td><td>f587</td></tr>
 <tr><td><i class="fas fa-grin-tears" style="font-size: 20px;"></i> grin-tears</td><td>&lt;i class="fas fa-grin-tears"&gt;&lt;/i&gt;</td><td>f588</td></tr>
 <tr><td><i class="fas fa-grin-tongue" style="font-size: 20px;"></i> grin-tongue</td><td>&lt;i class="fas fa-grin-tongue"&gt;&lt;/i&gt;</td><td>f589</td></tr>
 <tr><td><i class="fas fa-grin-tongue-squint" style="font-size: 20px;"></i> grin-tongue-squint</td><td>&lt;i class="fas fa-grin-tongue-squint"&gt;&lt;/i&gt;</td><td>f58a</td></tr>
 <tr><td><i class="fas fa-grin-tongue-wink" style="font-size: 20px;"></i> grin-tongue-wink</td><td>&lt;i class="fas fa-grin-tongue-wink"&gt;&lt;/i&gt;</td><td>f58b</td></tr>
 <tr><td><i class="fas fa-grin-wink" style="font-size: 20px;"></i> grin-wink</td><td>&lt;i class="fas fa-grin-wink"&gt;&lt;/i&gt;</td><td>f58c</td></tr>
 <tr><td><i class="fas fa-grip-horizontal" style="font-size: 20px;"></i> grip-horizontal</td><td>&lt;i class="fas fa-grip-horizontal"&gt;&lt;/i&gt;</td><td>f58d</td></tr>
 <tr><td><i class="fas fa-grip-lines" style="font-size: 20px;"></i> grip-lines</td><td>&lt;i class="fas fa-grip-lines"&gt;&lt;/i&gt;</td><td>f7a4</td></tr>
 <tr><td><i class="fas fa-grip-lines-vertical" style="font-size: 20px;"></i> grip-lines-vertical</td><td>&lt;i class="fas fa-grip-lines-vertical"&gt;&lt;/i&gt;</td><td>f7a5</td></tr>
 <tr><td><i class="fas fa-grip-vertical" style="font-size: 20px;"></i> grip-vertical</td><td>&lt;i class="fas fa-grip-vertical"&gt;&lt;/i&gt;</td><td>f58e</td></tr>
 <tr><td><i class="fas fa-guitar" style="font-size: 20px;"></i> guitar</td><td>&lt;i class="fas fa-guitar"&gt;&lt;/i&gt;</td><td>f7a6</td></tr>
 <tr><td><i class="fas fa-h-square" style="font-size: 20px;"></i> h-square</td><td>&lt;i class="fas fa-h-square"&gt;&lt;/i&gt;</td><td>f0fd</td></tr>
 <tr><td><i class="fas fa-hamburger" style="font-size: 20px;"></i> hamburger</td><td>&lt;i class="fas fa-hamburger"&gt;&lt;/i&gt;</td><td>f805</td></tr>
 <tr><td><i class="fas fa-hammer" style="font-size: 20px;"></i> hammer</td><td>&lt;i class="fas fa-hammer"&gt;&lt;/i&gt;</td><td>f6e3</td></tr>
 <tr><td><i class="fas fa-hamsa" style="font-size: 20px;"></i> hamsa</td><td>&lt;i class="fas fa-hamsa"&gt;&lt;/i&gt;</td><td>f665</td></tr>
 <tr><td><i class="fas fa-hand-holding" style="font-size: 20px;"></i> hand-holding</td><td>&lt;i class="fas fa-hand-holding"&gt;&lt;/i&gt;</td><td>f4bd</td></tr>
 <tr><td><i class="fas fa-hand-holding-heart" style="font-size: 20px;"></i> hand-holding-heart</td><td>&lt;i class="fas fa-hand-holding-heart"&gt;&lt;/i&gt;</td><td>f4be</td></tr>
 <tr><td><i class="fas fa-hand-holding-usd" style="font-size: 20px;"></i> hand-holding-usd</td><td>&lt;i class="fas fa-hand-holding-usd"&gt;&lt;/i&gt;</td><td>f4c0</td></tr>
 <tr><td><i class="fas fa-hand-lizard" style="font-size: 20px;"></i> hand-lizard</td><td>&lt;i class="fas fa-hand-lizard"&gt;&lt;/i&gt;</td><td>f258</td></tr>
 <tr><td><i class="fas fa-hand-middle-finger" style="font-size: 20px;"></i> hand-middle-finger</td><td>&lt;i class="fas fa-hand-middle-finger"&gt;&lt;/i&gt;</td><td>f806</td></tr>
 <tr><td><i class="fas fa-hand-paper" style="font-size: 20px;"></i> hand-paper</td><td>&lt;i class="fas fa-hand-paper"&gt;&lt;/i&gt;</td><td>f256</td></tr>
 <tr><td><i class="fas fa-hand-peace" style="font-size: 20px;"></i> hand-peace</td><td>&lt;i class="fas fa-hand-peace"&gt;&lt;/i&gt;</td><td>f25b</td></tr>
 <tr><td><i class="fas fa-hand-point-down" style="font-size: 20px;"></i> hand-point-down</td><td>&lt;i class="fas fa-hand-point-down"&gt;&lt;/i&gt;</td><td>f0a7</td></tr>
 <tr><td><i class="fas fa-hand-point-left" style="font-size: 20px;"></i> hand-point-left</td><td>&lt;i class="fas fa-hand-point-left"&gt;&lt;/i&gt;</td><td>f0a5</td></tr>
 <tr><td><i class="fas fa-hand-point-right" style="font-size: 20px;"></i> hand-point-right</td><td>&lt;i class="fas fa-hand-point-right"&gt;&lt;/i&gt;</td><td>f0a4</td></tr>
 <tr><td><i class="fas fa-hand-point-up" style="font-size: 20px;"></i> hand-point-up</td><td>&lt;i class="fas fa-hand-point-up"&gt;&lt;/i&gt;</td><td>f0a6</td></tr>
 <tr><td><i class="fas fa-hand-pointer" style="font-size: 20px;"></i> hand-pointer</td><td>&lt;i class="fas fa-hand-pointer"&gt;&lt;/i&gt;</td><td>f25a</td></tr>
 <tr><td><i class="fas fa-hand-rock" style="font-size: 20px;"></i> hand-rock</td><td>&lt;i class="fas fa-hand-rock"&gt;&lt;/i&gt;</td><td>f255</td></tr>
 <tr><td><i class="fas fa-hand-scissors" style="font-size: 20px;"></i> hand-scissors</td><td>&lt;i class="fas fa-hand-scissors"&gt;&lt;/i&gt;</td><td>f257</td></tr>
 <tr><td><i class="fas fa-hand-spock" style="font-size: 20px;"></i> hand-spock</td><td>&lt;i class="fas fa-hand-spock"&gt;&lt;/i&gt;</td><td>f259</td></tr>
 <tr><td><i class="fas fa-hands" style="font-size: 20px;"></i> hands</td><td>&lt;i class="fas fa-hands"&gt;&lt;/i&gt;</td><td>f4c2</td></tr>
 <tr><td><i class="fas fa-hands-helping" style="font-size: 20px;"></i> hands-helping</td><td>&lt;i class="fas fa-hands-helping"&gt;&lt;/i&gt;</td><td>f4c4</td></tr>
 <tr><td><i class="fas fa-handshake" style="font-size: 20px;"></i> handshake</td><td>&lt;i class="fas fa-handshake"&gt;&lt;/i&gt;</td><td>f2b5</td></tr>
 <tr><td><i class="fas fa-hanukiah" style="font-size: 20px;"></i> hanukiah</td><td>&lt;i class="fas fa-hanukiah"&gt;&lt;/i&gt;</td><td>f6e6</td></tr>
 <tr><td><i class="fas fa-hard-hat" style="font-size: 20px;"></i> hard-hat</td><td>&lt;i class="fas fa-hard-hat"&gt;&lt;/i&gt;</td><td>f807</td></tr>
 <tr><td><i class="fas fa-hashtag" style="font-size: 20px;"></i> hashtag</td><td>&lt;i class="fas fa-hashtag"&gt;&lt;/i&gt;</td><td>f292</td></tr>
 <tr><td><i class="fas fa-hat-wizard" style="font-size: 20px;"></i> hat-wizard</td><td>&lt;i class="fas fa-hat-wizard"&gt;&lt;/i&gt;</td><td>f6e8</td></tr>
 <tr><td><i class="fas fa-haykal" style="font-size: 20px;"></i> haykal</td><td>&lt;i class="fas fa-haykal"&gt;&lt;/i&gt;</td><td>f666</td></tr>
 <tr><td><i class="fas fa-hdd" style="font-size: 20px;"></i> hdd</td><td>&lt;i class="fas fa-hdd"&gt;&lt;/i&gt;</td><td>f0a0</td></tr>
 <tr><td><i class="fas fa-heading" style="font-size: 20px;"></i> heading</td><td>&lt;i class="fas fa-heading"&gt;&lt;/i&gt;</td><td>f1dc</td></tr>
 <tr><td><i class="fas fa-headphones" style="font-size: 20px;"></i> headphones</td><td>&lt;i class="fas fa-headphones"&gt;&lt;/i&gt;</td><td>f025</td></tr>
 <tr><td><i class="fas fa-headphones-alt" style="font-size: 20px;"></i> headphones-alt</td><td>&lt;i class="fas fa-headphones-alt"&gt;&lt;/i&gt;</td><td>f58f</td></tr>
 <tr><td><i class="fas fa-headset" style="font-size: 20px;"></i> headset</td><td>&lt;i class="fas fa-headset"&gt;&lt;/i&gt;</td><td>f590</td></tr>
 <tr><td><i class="fas fa-heart" style="font-size: 20px;"></i> heart</td><td>&lt;i class="fas fa-heart"&gt;&lt;/i&gt;</td><td>f004</td></tr>
 <tr><td><i class="fas fa-heart-broken" style="font-size: 20px;"></i> heart-broken</td><td>&lt;i class="fas fa-heart-broken"&gt;&lt;/i&gt;</td><td>f7a9</td></tr>
 <tr><td><i class="fas fa-heartbeat" style="font-size: 20px;"></i> heartbeat</td><td>&lt;i class="fas fa-heartbeat"&gt;&lt;/i&gt;</td><td>f21e</td></tr>
 <tr><td><i class="fas fa-helicopter" style="font-size: 20px;"></i> helicopter</td><td>&lt;i class="fas fa-helicopter"&gt;&lt;/i&gt;</td><td>f533</td></tr>
 <tr><td><i class="fas fa-highlighter" style="font-size: 20px;"></i> highlighter</td><td>&lt;i class="fas fa-highlighter"&gt;&lt;/i&gt;</td><td>f591</td></tr>
 <tr><td><i class="fas fa-hiking" style="font-size: 20px;"></i> hiking</td><td>&lt;i class="fas fa-hiking"&gt;&lt;/i&gt;</td><td>f6ec</td></tr>
 <tr><td><i class="fas fa-hippo" style="font-size: 20px;"></i> hippo</td><td>&lt;i class="fas fa-hippo"&gt;&lt;/i&gt;</td><td>f6ed</td></tr>
 <tr><td><i class="fas fa-history" style="font-size: 20px;"></i> history</td><td>&lt;i class="fas fa-history"&gt;&lt;/i&gt;</td><td>f1da</td></tr>
 <tr><td><i class="fas fa-hockey-puck" style="font-size: 20px;"></i> hockey-puck</td><td>&lt;i class="fas fa-hockey-puck"&gt;&lt;/i&gt;</td><td>f453</td></tr>
 <tr><td><i class="fas fa-holly-berry" style="font-size: 20px;"></i> holly-berry</td><td>&lt;i class="fas fa-holly-berry"&gt;&lt;/i&gt;</td><td>f7aa</td></tr>
 <tr><td><i class="fas fa-home" style="font-size: 20px;"></i> home</td><td>&lt;i class="fas fa-home"&gt;&lt;/i&gt;</td><td>f015</td></tr>
 <tr><td><i class="fas fa-horse" style="font-size: 20px;"></i> horse</td><td>&lt;i class="fas fa-horse"&gt;&lt;/i&gt;</td><td>f6f0</td></tr>
 <tr><td><i class="fas fa-horse-head" style="font-size: 20px;"></i> horse-head</td><td>&lt;i class="fas fa-horse-head"&gt;&lt;/i&gt;</td><td>f7ab</td></tr>
 <tr><td><i class="fas fa-hospital" style="font-size: 20px;"></i> hospital</td><td>&lt;i class="fas fa-hospital"&gt;&lt;/i&gt;</td><td>f0f8</td></tr>
 <tr><td><i class="fas fa-hospital-alt" style="font-size: 20px;"></i> hospital-alt</td><td>&lt;i class="fas fa-hospital-alt"&gt;&lt;/i&gt;</td><td>f47d</td></tr>
 <tr><td><i class="fas fa-hospital-symbol" style="font-size: 20px;"></i> hospital-symbol</td><td>&lt;i class="fas fa-hospital-symbol"&gt;&lt;/i&gt;</td><td>f47e</td></tr>
 <tr><td><i class="fas fa-hot-tub" style="font-size: 20px;"></i> hot-tub</td><td>&lt;i class="fas fa-hot-tub"&gt;&lt;/i&gt;</td><td>f593</td></tr>
 <tr><td><i class="fas fa-hotdog" style="font-size: 20px;"></i> hotdog</td><td>&lt;i class="fas fa-hotdog"&gt;&lt;/i&gt;</td><td>f80f</td></tr>
 <tr><td><i class="fas fa-hotel" style="font-size: 20px;"></i> hotel</td><td>&lt;i class="fas fa-hotel"&gt;&lt;/i&gt;</td><td>f594</td></tr>
 <tr><td><i class="fas fa-hourglass" style="font-size: 20px;"></i> hourglass</td><td>&lt;i class="fas fa-hourglass"&gt;&lt;/i&gt;</td><td>f254</td></tr>
 <tr><td><i class="fas fa-hourglass-end" style="font-size: 20px;"></i> hourglass-end</td><td>&lt;i class="fas fa-hourglass-end"&gt;&lt;/i&gt;</td><td>f253</td></tr>
 <tr><td><i class="fas fa-hourglass-half" style="font-size: 20px;"></i> hourglass-half</td><td>&lt;i class="fas fa-hourglass-half"&gt;&lt;/i&gt;</td><td>f252</td></tr>
 <tr><td><i class="fas fa-hourglass-start" style="font-size: 20px;"></i> hourglass-start</td><td>&lt;i class="fas fa-hourglass-start"&gt;&lt;/i&gt;</td><td>f251</td></tr>
 <tr><td><i class="fas fa-house-damage" style="font-size: 20px;"></i> house-damage</td><td>&lt;i class="fas fa-house-damage"&gt;&lt;/i&gt;</td><td>f6f1</td></tr>
 <tr><td><i class="fas fa-hryvnia" style="font-size: 20px;"></i> hryvnia</td><td>&lt;i class="fas fa-hryvnia"&gt;&lt;/i&gt;</td><td>f6f2</td></tr>
 <tr><td><i class="fas fa-i-cursor" style="font-size: 20px;"></i> i-cursor</td><td>&lt;i class="fas fa-i-cursor"&gt;&lt;/i&gt;</td><td>f246</td></tr>
 <tr><td><i class="fas fa-ice-cream" style="font-size: 20px;"></i> ice-cream</td><td>&lt;i class="fas fa-ice-cream"&gt;&lt;/i&gt;</td><td>f810</td></tr>
 <tr><td><i class="fas fa-icicles" style="font-size: 20px;"></i> icicles</td><td>&lt;i class="fas fa-icicles"&gt;&lt;/i&gt;</td><td>f7ad</td></tr>
 <tr><td><i class="fas fa-icons" style="font-size: 20px;"></i> icons</td><td>&lt;i class="fas fa-icons"&gt;&lt;/i&gt;</td><td>f86d</td></tr>
 <tr><td><i class="fas fa-id-badge" style="font-size: 20px;"></i> id-badge</td><td>&lt;i class="fas fa-id-badge"&gt;&lt;/i&gt;</td><td>f2c1</td></tr>
 <tr><td><i class="fas fa-id-card" style="font-size: 20px;"></i> id-card</td><td>&lt;i class="fas fa-id-card"&gt;&lt;/i&gt;</td><td>f2c2</td></tr>
 <tr><td><i class="fas fa-id-card-alt" style="font-size: 20px;"></i> id-card-alt</td><td>&lt;i class="fas fa-id-card-alt"&gt;&lt;/i&gt;</td><td>f47f</td></tr>
 <tr><td><i class="fas fa-igloo" style="font-size: 20px;"></i> igloo</td><td>&lt;i class="fas fa-igloo"&gt;&lt;/i&gt;</td><td>f7ae</td></tr>
 <tr><td><i class="fas fa-image" style="font-size: 20px;"></i> image</td><td>&lt;i class="fas fa-image"&gt;&lt;/i&gt;</td><td>f03e</td></tr>
 <tr><td><i class="fas fa-images" style="font-size: 20px;"></i> images</td><td>&lt;i class="fas fa-images"&gt;&lt;/i&gt;</td><td>f302</td></tr>
 <tr><td><i class="fas fa-inbox" style="font-size: 20px;"></i> inbox</td><td>&lt;i class="fas fa-inbox"&gt;&lt;/i&gt;</td><td>f01c</td></tr>
 <tr><td><i class="fas fa-indent" style="font-size: 20px;"></i> indent</td><td>&lt;i class="fas fa-indent"&gt;&lt;/i&gt;</td><td>f03c</td></tr>
 <tr><td><i class="fas fa-industry" style="font-size: 20px;"></i> industry</td><td>&lt;i class="fas fa-industry"&gt;&lt;/i&gt;</td><td>f275</td></tr>
 <tr><td><i class="fas fa-infinity" style="font-size: 20px;"></i> infinity</td><td>&lt;i class="fas fa-infinity"&gt;&lt;/i&gt;</td><td>f534</td></tr>
 <tr><td><i class="fas fa-info" style="font-size: 20px;"></i> info</td><td>&lt;i class="fas fa-info"&gt;&lt;/i&gt;</td><td>f129</td></tr>
 <tr><td><i class="fas fa-info-circle" style="font-size: 20px;"></i> info-circle</td><td>&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;</td><td>f05a</td></tr>
 <tr><td><i class="fas fa-italic" style="font-size: 20px;"></i> italic</td><td>&lt;i class="fas fa-italic"&gt;&lt;/i&gt;</td><td>f033</td></tr>
 <tr><td><i class="fas fa-jedi" style="font-size: 20px;"></i> jedi</td><td>&lt;i class="fas fa-jedi"&gt;&lt;/i&gt;</td><td>f669</td></tr>
 <tr><td><i class="fas fa-joint" style="font-size: 20px;"></i> joint</td><td>&lt;i class="fas fa-joint"&gt;&lt;/i&gt;</td><td>f595</td></tr>
 <tr><td><i class="fas fa-journal-whills" style="font-size: 20px;"></i> journal-whills</td><td>&lt;i class="fas fa-journal-whills"&gt;&lt;/i&gt;</td><td>f66a</td></tr>
 <tr><td><i class="fas fa-kaaba" style="font-size: 20px;"></i> kaaba</td><td>&lt;i class="fas fa-kaaba"&gt;&lt;/i&gt;</td><td>f66b</td></tr>
 <tr><td><i class="fas fa-key" style="font-size: 20px;"></i> key</td><td>&lt;i class="fas fa-key"&gt;&lt;/i&gt;</td><td>f084</td></tr>
 <tr><td><i class="fas fa-keyboard" style="font-size: 20px;"></i> keyboard</td><td>&lt;i class="fas fa-keyboard"&gt;&lt;/i&gt;</td><td>f11c</td></tr>
 <tr><td><i class="fas fa-khanda" style="font-size: 20px;"></i> khanda</td><td>&lt;i class="fas fa-khanda"&gt;&lt;/i&gt;</td><td>f66d</td></tr>
 <tr><td><i class="fas fa-kiss" style="font-size: 20px;"></i> kiss</td><td>&lt;i class="fas fa-kiss"&gt;&lt;/i&gt;</td><td>f596</td></tr>
 <tr><td><i class="fas fa-kiss-beam" style="font-size: 20px;"></i> kiss-beam</td><td>&lt;i class="fas fa-kiss-beam"&gt;&lt;/i&gt;</td><td>f597</td></tr>
 <tr><td><i class="fas fa-kiss-wink-heart" style="font-size: 20px;"></i> kiss-wink-heart</td><td>&lt;i class="fas fa-kiss-wink-heart"&gt;&lt;/i&gt;</td><td>f598</td></tr>
 <tr><td><i class="fas fa-kiwi-bird" style="font-size: 20px;"></i> kiwi-bird</td><td>&lt;i class="fas fa-kiwi-bird"&gt;&lt;/i&gt;</td><td>f535</td></tr>
 <tr><td><i class="fas fa-landmark" style="font-size: 20px;"></i> landmark</td><td>&lt;i class="fas fa-landmark"&gt;&lt;/i&gt;</td><td>f66f</td></tr>
 <tr><td><i class="fas fa-language" style="font-size: 20px;"></i> language</td><td>&lt;i class="fas fa-language"&gt;&lt;/i&gt;</td><td>f1ab</td></tr>
 <tr><td><i class="fas fa-laptop" style="font-size: 20px;"></i> laptop</td><td>&lt;i class="fas fa-laptop"&gt;&lt;/i&gt;</td><td>f109</td></tr>
 <tr><td><i class="fas fa-laptop-code" style="font-size: 20px;"></i> laptop-code</td><td>&lt;i class="fas fa-laptop-code"&gt;&lt;/i&gt;</td><td>f5fc</td></tr>
 <tr><td><i class="fas fa-laptop-medical" style="font-size: 20px;"></i> laptop-medical</td><td>&lt;i class="fas fa-laptop-medical"&gt;&lt;/i&gt;</td><td>f812</td></tr>
 <tr><td><i class="fas fa-laugh" style="font-size: 20px;"></i> laugh</td><td>&lt;i class="fas fa-laugh"&gt;&lt;/i&gt;</td><td>f599</td></tr>
 <tr><td><i class="fas fa-laugh-beam" style="font-size: 20px;"></i> laugh-beam</td><td>&lt;i class="fas fa-laugh-beam"&gt;&lt;/i&gt;</td><td>f59a</td></tr>
 <tr><td><i class="fas fa-laugh-squint" style="font-size: 20px;"></i> laugh-squint</td><td>&lt;i class="fas fa-laugh-squint"&gt;&lt;/i&gt;</td><td>f59b</td></tr>
 <tr><td><i class="fas fa-laugh-wink" style="font-size: 20px;"></i> laugh-wink</td><td>&lt;i class="fas fa-laugh-wink"&gt;&lt;/i&gt;</td><td>f59c</td></tr>
 <tr><td><i class="fas fa-layer-group" style="font-size: 20px;"></i> layer-group</td><td>&lt;i class="fas fa-layer-group"&gt;&lt;/i&gt;</td><td>f5fd</td></tr>
 <tr><td><i class="fas fa-leaf" style="font-size: 20px;"></i> leaf</td><td>&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;</td><td>f06c</td></tr>
 <tr><td><i class="fas fa-lemon" style="font-size: 20px;"></i> lemon</td><td>&lt;i class="fas fa-lemon"&gt;&lt;/i&gt;</td><td>f094</td></tr>
 <tr><td><i class="fas fa-less-than" style="font-size: 20px;"></i> less-than</td><td>&lt;i class="fas fa-less-than"&gt;&lt;/i&gt;</td><td>f536</td></tr>
 <tr><td><i class="fas fa-less-than-equal" style="font-size: 20px;"></i> less-than-equal</td><td>&lt;i class="fas fa-less-than-equal"&gt;&lt;/i&gt;</td><td>f537</td></tr>
 <tr><td><i class="fas fa-level-down-alt" style="font-size: 20px;"></i> level-down-alt</td><td>&lt;i class="fas fa-level-down-alt"&gt;&lt;/i&gt;</td><td>f3be</td></tr>
 <tr><td><i class="fas fa-level-up-alt" style="font-size: 20px;"></i> level-up-alt</td><td>&lt;i class="fas fa-level-up-alt"&gt;&lt;/i&gt;</td><td>f3bf</td></tr>
 <tr><td><i class="fas fa-life-ring" style="font-size: 20px;"></i> life-ring</td><td>&lt;i class="fas fa-life-ring"&gt;&lt;/i&gt;</td><td>f1cd</td></tr>
 <tr><td><i class="fas fa-lightbulb" style="font-size: 20px;"></i> lightbulb</td><td>&lt;i class="fas fa-lightbulb"&gt;&lt;/i&gt;</td><td>f0eb</td></tr>
 <tr><td><i class="fas fa-link" style="font-size: 20px;"></i> link</td><td>&lt;i class="fas fa-link"&gt;&lt;/i&gt;</td><td>f0c1</td></tr>
 <tr><td><i class="fas fa-lira-sign" style="font-size: 20px;"></i> lira-sign</td><td>&lt;i class="fas fa-lira-sign"&gt;&lt;/i&gt;</td><td>f195</td></tr>
 <tr><td><i class="fas fa-list" style="font-size: 20px;"></i> list</td><td>&lt;i class="fas fa-list"&gt;&lt;/i&gt;</td><td>f03a</td></tr>
 <tr><td><i class="fas fa-list-alt" style="font-size: 20px;"></i> list-alt</td><td>&lt;i class="fas fa-list-alt"&gt;&lt;/i&gt;</td><td>f022</td></tr>
 <tr><td><i class="fas fa-list-ol" style="font-size: 20px;"></i> list-ol</td><td>&lt;i class="fas fa-list-ol"&gt;&lt;/i&gt;</td><td>f0cb</td></tr>
 <tr><td><i class="fas fa-list-ul" style="font-size: 20px;"></i> list-ul</td><td>&lt;i class="fas fa-list-ul"&gt;&lt;/i&gt;</td><td>f0ca</td></tr>
 <tr><td><i class="fas fa-location-arrow" style="font-size: 20px;"></i> location-arrow</td><td>&lt;i class="fas fa-location-arrow"&gt;&lt;/i&gt;</td><td>f124</td></tr>
 <tr><td><i class="fas fa-lock" style="font-size: 20px;"></i> lock</td><td>&lt;i class="fas fa-lock"&gt;&lt;/i&gt;</td><td>f023</td></tr>
 <tr><td><i class="fas fa-lock-open" style="font-size: 20px;"></i> lock-open</td><td>&lt;i class="fas fa-lock-open"&gt;&lt;/i&gt;</td><td>f3c1</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-down" style="font-size: 20px;"></i> long-arrow-alt-down</td><td>&lt;i class="fas fa-long-arrow-alt-down"&gt;&lt;/i&gt;</td><td>f309</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-left" style="font-size: 20px;"></i> long-arrow-alt-left</td><td>&lt;i class="fas fa-long-arrow-alt-left"&gt;&lt;/i&gt;</td><td>f30a</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-right" style="font-size: 20px;"></i> long-arrow-alt-right</td><td>&lt;i class="fas fa-long-arrow-alt-right"&gt;&lt;/i&gt;</td><td>f30b</td></tr>
 <tr><td><i class="fas fa-long-arrow-alt-up" style="font-size: 20px;"></i> long-arrow-alt-up</td><td>&lt;i class="fas fa-long-arrow-alt-up"&gt;&lt;/i&gt;</td><td>f30c</td></tr>
 <tr><td><i class="fas fa-low-vision" style="font-size: 20px;"></i> low-vision</td><td>&lt;i class="fas fa-low-vision"&gt;&lt;/i&gt;</td><td>f2a8</td></tr>
 <tr><td><i class="fas fa-luggage-cart" style="font-size: 20px;"></i> luggage-cart</td><td>&lt;i class="fas fa-luggage-cart"&gt;&lt;/i&gt;</td><td>f59d</td></tr>
 <tr><td><i class="fas fa-magic" style="font-size: 20px;"></i> magic</td><td>&lt;i class="fas fa-magic"&gt;&lt;/i&gt;</td><td>f0d0</td></tr>
 <tr><td><i class="fas fa-magnet" style="font-size: 20px;"></i> magnet</td><td>&lt;i class="fas fa-magnet"&gt;&lt;/i&gt;</td><td>f076</td></tr>
 <tr><td><i class="fas fa-mail-bulk" style="font-size: 20px;"></i> mail-bulk</td><td>&lt;i class="fas fa-mail-bulk"&gt;&lt;/i&gt;</td><td>f674</td></tr>
 <tr><td><i class="fas fa-male" style="font-size: 20px;"></i> male</td><td>&lt;i class="fas fa-male"&gt;&lt;/i&gt;</td><td>f183</td></tr>
 <tr><td><i class="fas fa-map" style="font-size: 20px;"></i> map</td><td>&lt;i class="fas fa-map"&gt;&lt;/i&gt;</td><td>f279</td></tr>
 <tr><td><i class="fas fa-map-marked" style="font-size: 20px;"></i> map-marked</td><td>&lt;i class="fas fa-map-marked"&gt;&lt;/i&gt;</td><td>f59f</td></tr>
 <tr><td><i class="fas fa-map-marked-alt" style="font-size: 20px;"></i> map-marked-alt</td><td>&lt;i class="fas fa-map-marked-alt"&gt;&lt;/i&gt;</td><td>f5a0</td></tr>
 <tr><td><i class="fas fa-map-marker" style="font-size: 20px;"></i> map-marker</td><td>&lt;i class="fas fa-map-marker"&gt;&lt;/i&gt;</td><td>f041</td></tr>
 <tr><td><i class="fas fa-map-marker-alt" style="font-size: 20px;"></i> map-marker-alt</td><td>&lt;i class="fas fa-map-marker-alt"&gt;&lt;/i&gt;</td><td>f3c5</td></tr>
 <tr><td><i class="fas fa-map-pin" style="font-size: 20px;"></i> map-pin</td><td>&lt;i class="fas fa-map-pin"&gt;&lt;/i&gt;</td><td>f276</td></tr>
 <tr><td><i class="fas fa-map-signs" style="font-size: 20px;"></i> map-signs</td><td>&lt;i class="fas fa-map-signs"&gt;&lt;/i&gt;</td><td>f277</td></tr>
 <tr><td><i class="fas fa-marker" style="font-size: 20px;"></i> marker</td><td>&lt;i class="fas fa-marker"&gt;&lt;/i&gt;</td><td>f5a1</td></tr>
 <tr><td><i class="fas fa-mars" style="font-size: 20px;"></i> mars</td><td>&lt;i class="fas fa-mars"&gt;&lt;/i&gt;</td><td>f222</td></tr>
 <tr><td><i class="fas fa-mars-double" style="font-size: 20px;"></i> mars-double</td><td>&lt;i class="fas fa-mars-double"&gt;&lt;/i&gt;</td><td>f227</td></tr>
 <tr><td><i class="fas fa-mars-stroke" style="font-size: 20px;"></i> mars-stroke</td><td>&lt;i class="fas fa-mars-stroke"&gt;&lt;/i&gt;</td><td>f229</td></tr>
 <tr><td><i class="fas fa-mars-stroke-h" style="font-size: 20px;"></i> mars-stroke-h</td><td>&lt;i class="fas fa-mars-stroke-h"&gt;&lt;/i&gt;</td><td>f22b</td></tr>
 <tr><td><i class="fas fa-mars-stroke-v" style="font-size: 20px;"></i> mars-stroke-v</td><td>&lt;i class="fas fa-mars-stroke-v"&gt;&lt;/i&gt;</td><td>f22a</td></tr>
 <tr><td><i class="fas fa-mask" style="font-size: 20px;"></i> mask</td><td>&lt;i class="fas fa-mask"&gt;&lt;/i&gt;</td><td>f6fa</td></tr>
 <tr><td><i class="fas fa-medal" style="font-size: 20px;"></i> medal</td><td>&lt;i class="fas fa-medal"&gt;&lt;/i&gt;</td><td>f5a2</td></tr>
 <tr><td><i class="fas fa-medkit" style="font-size: 20px;"></i> medkit</td><td>&lt;i class="fas fa-medkit"&gt;&lt;/i&gt;</td><td>f0fa</td></tr>
 <tr><td><i class="fas fa-meh" style="font-size: 20px;"></i> meh</td><td>&lt;i class="fas fa-meh"&gt;&lt;/i&gt;</td><td>f11a</td></tr>
 <tr><td><i class="fas fa-meh-blank" style="font-size: 20px;"></i> meh-blank</td><td>&lt;i class="fas fa-meh-blank"&gt;&lt;/i&gt;</td><td>f5a4</td></tr>
 <tr><td><i class="fas fa-meh-rolling-eyes" style="font-size: 20px;"></i> meh-rolling-eyes</td><td>&lt;i class="fas fa-meh-rolling-eyes"&gt;&lt;/i&gt;</td><td>f5a5</td></tr>
 <tr><td><i class="fas fa-memory" style="font-size: 20px;"></i> memory</td><td>&lt;i class="fas fa-memory"&gt;&lt;/i&gt;</td><td>f538</td></tr>
 <tr><td><i class="fas fa-menorah" style="font-size: 20px;"></i> menorah</td><td>&lt;i class="fas fa-menorah"&gt;&lt;/i&gt;</td><td>f676</td></tr>
 <tr><td><i class="fas fa-mercury" style="font-size: 20px;"></i> mercury</td><td>&lt;i class="fas fa-mercury"&gt;&lt;/i&gt;</td><td>f223</td></tr>
 <tr><td><i class="fas fa-meteor" style="font-size: 20px;"></i> meteor</td><td>&lt;i class="fas fa-meteor"&gt;&lt;/i&gt;</td><td>f753</td></tr>
 <tr><td><i class="fas fa-microchip" style="font-size: 20px;"></i> microchip</td><td>&lt;i class="fas fa-microchip"&gt;&lt;/i&gt;</td><td>f2db</td></tr>
 <tr><td><i class="fas fa-microphone" style="font-size: 20px;"></i> microphone</td><td>&lt;i class="fas fa-microphone"&gt;&lt;/i&gt;</td><td>f130</td></tr>
 <tr><td><i class="fas fa-microphone-alt" style="font-size: 20px;"></i> microphone-alt</td><td>&lt;i class="fas fa-microphone-alt"&gt;&lt;/i&gt;</td><td>f3c9</td></tr>
 <tr><td><i class="fas fa-microphone-alt-slash" style="font-size: 20px;"></i> microphone-alt-slash</td><td>&lt;i class="fas fa-microphone-alt-slash"&gt;&lt;/i&gt;</td><td>f539</td></tr>
 <tr><td><i class="fas fa-microphone-slash" style="font-size: 20px;"></i> microphone-slash</td><td>&lt;i class="fas fa-microphone-slash"&gt;&lt;/i&gt;</td><td>f131</td></tr>
 <tr><td><i class="fas fa-microscope" style="font-size: 20px;"></i> microscope</td><td>&lt;i class="fas fa-microscope"&gt;&lt;/i&gt;</td><td>f610</td></tr>
 <tr><td><i class="fas fa-minus" style="font-size: 20px;"></i> minus</td><td>&lt;i class="fas fa-minus"&gt;&lt;/i&gt;</td><td>f068</td></tr>
 <tr><td><i class="fas fa-minus-circle" style="font-size: 20px;"></i> minus-circle</td><td>&lt;i class="fas fa-minus-circle"&gt;&lt;/i&gt;</td><td>f056</td></tr>
 <tr><td><i class="fas fa-minus-square" style="font-size: 20px;"></i> minus-square</td><td>&lt;i class="fas fa-minus-square"&gt;&lt;/i&gt;</td><td>f146</td></tr>
 <tr><td><i class="fas fa-mitten" style="font-size: 20px;"></i> mitten</td><td>&lt;i class="fas fa-mitten"&gt;&lt;/i&gt;</td><td>f7b5</td></tr>
 <tr><td><i class="fas fa-mobile" style="font-size: 20px;"></i> mobile</td><td>&lt;i class="fas fa-mobile"&gt;&lt;/i&gt;</td><td>f10b</td></tr>
 <tr><td><i class="fas fa-mobile-alt" style="font-size: 20px;"></i> mobile-alt</td><td>&lt;i class="fas fa-mobile-alt"&gt;&lt;/i&gt;</td><td>f3cd</td></tr>
 <tr><td><i class="fas fa-money-bill" style="font-size: 20px;"></i> money-bill</td><td>&lt;i class="fas fa-money-bill"&gt;&lt;/i&gt;</td><td>f0d6</td></tr>
 <tr><td><i class="fas fa-money-bill-alt" style="font-size: 20px;"></i> money-bill-alt</td><td>&lt;i class="fas fa-money-bill-alt"&gt;&lt;/i&gt;</td><td>f3d1</td></tr>
 <tr><td><i class="fas fa-money-bill-wave" style="font-size: 20px;"></i> money-bill-wave</td><td>&lt;i class="fas fa-money-bill-wave"&gt;&lt;/i&gt;</td><td>f53a</td></tr>
 <tr><td><i class="fas fa-money-bill-wave-alt" style="font-size: 20px;"></i> money-bill-wave-alt</td><td>&lt;i class="fas fa-money-bill-wave-alt"&gt;&lt;/i&gt;</td><td>f53b</td></tr>
 <tr><td><i class="fas fa-money-check" style="font-size: 20px;"></i> money-check</td><td>&lt;i class="fas fa-money-check"&gt;&lt;/i&gt;</td><td>f53c</td></tr>
 <tr><td><i class="fas fa-money-check-alt" style="font-size: 20px;"></i> money-check-alt</td><td>&lt;i class="fas fa-money-check-alt"&gt;&lt;/i&gt;</td><td>f53d</td></tr>
 <tr><td><i class="fas fa-monument" style="font-size: 20px;"></i> monument</td><td>&lt;i class="fas fa-monument"&gt;&lt;/i&gt;</td><td>f5a6</td></tr>
 <tr><td><i class="fas fa-moon" style="font-size: 20px;"></i> moon</td><td>&lt;i class="fas fa-moon"&gt;&lt;/i&gt;</td><td>f186</td></tr>
 <tr><td><i class="fas fa-mortar-pestle" style="font-size: 20px;"></i> mortar-pestle</td><td>&lt;i class="fas fa-mortar-pestle"&gt;&lt;/i&gt;</td><td>f5a7</td></tr>
 <tr><td><i class="fas fa-mosque" style="font-size: 20px;"></i> mosque</td><td>&lt;i class="fas fa-mosque"&gt;&lt;/i&gt;</td><td>f678</td></tr>
 <tr><td><i class="fas fa-motorcycle" style="font-size: 20px;"></i> motorcycle</td><td>&lt;i class="fas fa-motorcycle"&gt;&lt;/i&gt;</td><td>f21c</td></tr>
 <tr><td><i class="fas fa-mountain" style="font-size: 20px;"></i> mountain</td><td>&lt;i class="fas fa-mountain"&gt;&lt;/i&gt;</td><td>f6fc</td></tr>
 <tr><td><i class="fas fa-mouse-pointer" style="font-size: 20px;"></i> mouse-pointer</td><td>&lt;i class="fas fa-mouse-pointer"&gt;&lt;/i&gt;</td><td>f245</td></tr>
 <tr><td><i class="fas fa-mug-hot" style="font-size: 20px;"></i> mug-hot</td><td>&lt;i class="fas fa-mug-hot"&gt;&lt;/i&gt;</td><td>f7b6</td></tr>
 <tr><td><i class="fas fa-music" style="font-size: 20px;"></i> music</td><td>&lt;i class="fas fa-music"&gt;&lt;/i&gt;</td><td>f001</td></tr>
 <tr><td><i class="fas fa-network-wired" style="font-size: 20px;"></i> network-wired</td><td>&lt;i class="fas fa-network-wired"&gt;&lt;/i&gt;</td><td>f6ff</td></tr>
 <tr><td><i class="fas fa-neuter" style="font-size: 20px;"></i> neuter</td><td>&lt;i class="fas fa-neuter"&gt;&lt;/i&gt;</td><td>f22c</td></tr>
 <tr><td><i class="fas fa-newspaper" style="font-size: 20px;"></i> newspaper</td><td>&lt;i class="fas fa-newspaper"&gt;&lt;/i&gt;</td><td>f1ea</td></tr>
 <tr><td><i class="fas fa-not-equal" style="font-size: 20px;"></i> not-equal</td><td>&lt;i class="fas fa-not-equal"&gt;&lt;/i&gt;</td><td>f53e</td></tr>
 <tr><td><i class="fas fa-notes-medical" style="font-size: 20px;"></i> notes-medical</td><td>&lt;i class="fas fa-notes-medical"&gt;&lt;/i&gt;</td><td>f481</td></tr>
 <tr><td><i class="fas fa-object-group" style="font-size: 20px;"></i> object-group</td><td>&lt;i class="fas fa-object-group"&gt;&lt;/i&gt;</td><td>f247</td></tr>
 <tr><td><i class="fas fa-object-ungroup" style="font-size: 20px;"></i> object-ungroup</td><td>&lt;i class="fas fa-object-ungroup"&gt;&lt;/i&gt;</td><td>f248</td></tr>
 <tr><td><i class="fas fa-oil-can" style="font-size: 20px;"></i> oil-can</td><td>&lt;i class="fas fa-oil-can"&gt;&lt;/i&gt;</td><td>f613</td></tr>
 <tr><td><i class="fas fa-om" style="font-size: 20px;"></i> om</td><td>&lt;i class="fas fa-om"&gt;&lt;/i&gt;</td><td>f679</td></tr>
 <tr><td><i class="fas fa-otter" style="font-size: 20px;"></i> otter</td><td>&lt;i class="fas fa-otter"&gt;&lt;/i&gt;</td><td>f700</td></tr>
 <tr><td><i class="fas fa-outdent" style="font-size: 20px;"></i> outdent</td><td>&lt;i class="fas fa-outdent"&gt;&lt;/i&gt;</td><td>f03b</td></tr>
 <tr><td><i class="fas fa-pager" style="font-size: 20px;"></i> pager</td><td>&lt;i class="fas fa-pager"&gt;&lt;/i&gt;</td><td>f815</td></tr>
 <tr><td><i class="fas fa-paint-brush" style="font-size: 20px;"></i> paint-brush</td><td>&lt;i class="fas fa-paint-brush"&gt;&lt;/i&gt;</td><td>f1fc</td></tr>
 <tr><td><i class="fas fa-paint-roller" style="font-size: 20px;"></i> paint-roller</td><td>&lt;i class="fas fa-paint-roller"&gt;&lt;/i&gt;</td><td>f5aa</td></tr>
 <tr><td><i class="fas fa-palette" style="font-size: 20px;"></i> palette</td><td>&lt;i class="fas fa-palette"&gt;&lt;/i&gt;</td><td>f53f</td></tr>
 <tr><td><i class="fas fa-pallet" style="font-size: 20px;"></i> pallet</td><td>&lt;i class="fas fa-pallet"&gt;&lt;/i&gt;</td><td>f482</td></tr>
 <tr><td><i class="fas fa-paper-plane" style="font-size: 20px;"></i> paper-plane</td><td>&lt;i class="fas fa-paper-plane"&gt;&lt;/i&gt;</td><td>f1d8</td></tr>
 <tr><td><i class="fas fa-paperclip" style="font-size: 20px;"></i> paperclip</td><td>&lt;i class="fas fa-paperclip"&gt;&lt;/i&gt;</td><td>f0c6</td></tr>
 <tr><td><i class="fas fa-parachute-box" style="font-size: 20px;"></i> parachute-box</td><td>&lt;i class="fas fa-parachute-box"&gt;&lt;/i&gt;</td><td>f4cd</td></tr>
 <tr><td><i class="fas fa-paragraph" style="font-size: 20px;"></i> paragraph</td><td>&lt;i class="fas fa-paragraph"&gt;&lt;/i&gt;</td><td>f1dd</td></tr>
 <tr><td><i class="fas fa-parking" style="font-size: 20px;"></i> parking</td><td>&lt;i class="fas fa-parking"&gt;&lt;/i&gt;</td><td>f540</td></tr>
 <tr><td><i class="fas fa-passport" style="font-size: 20px;"></i> passport</td><td>&lt;i class="fas fa-passport"&gt;&lt;/i&gt;</td><td>f5ab</td></tr>
 <tr><td><i class="fas fa-pastafarianism" style="font-size: 20px;"></i> pastafarianism</td><td>&lt;i class="fas fa-pastafarianism"&gt;&lt;/i&gt;</td><td>f67b</td></tr>
 <tr><td><i class="fas fa-paste" style="font-size: 20px;"></i> paste</td><td>&lt;i class="fas fa-paste"&gt;&lt;/i&gt;</td><td>f0ea</td></tr>
 <tr><td><i class="fas fa-pause" style="font-size: 20px;"></i> pause</td><td>&lt;i class="fas fa-pause"&gt;&lt;/i&gt;</td><td>f04c</td></tr>
 <tr><td><i class="fas fa-pause-circle" style="font-size: 20px;"></i> pause-circle</td><td>&lt;i class="fas fa-pause-circle"&gt;&lt;/i&gt;</td><td>f28b</td></tr>
 <tr><td><i class="fas fa-paw" style="font-size: 20px;"></i> paw</td><td>&lt;i class="fas fa-paw"&gt;&lt;/i&gt;</td><td>f1b0</td></tr>
 <tr><td><i class="fas fa-peace" style="font-size: 20px;"></i> peace</td><td>&lt;i class="fas fa-peace"&gt;&lt;/i&gt;</td><td>f67c</td></tr>
 <tr><td><i class="fas fa-pen" style="font-size: 20px;"></i> pen</td><td>&lt;i class="fas fa-pen"&gt;&lt;/i&gt;</td><td>f304</td></tr>
 <tr><td><i class="fas fa-pen-alt" style="font-size: 20px;"></i> pen-alt</td><td>&lt;i class="fas fa-pen-alt"&gt;&lt;/i&gt;</td><td>f305</td></tr>
 <tr><td><i class="fas fa-pen-fancy" style="font-size: 20px;"></i> pen-fancy</td><td>&lt;i class="fas fa-pen-fancy"&gt;&lt;/i&gt;</td><td>f5ac</td></tr>
 <tr><td><i class="fas fa-pen-nib" style="font-size: 20px;"></i> pen-nib</td><td>&lt;i class="fas fa-pen-nib"&gt;&lt;/i&gt;</td><td>f5ad</td></tr>
 <tr><td><i class="fas fa-pen-square" style="font-size: 20px;"></i> pen-square</td><td>&lt;i class="fas fa-pen-square"&gt;&lt;/i&gt;</td><td>f14b</td></tr>
 <tr><td><i class="fas fa-pencil-alt" style="font-size: 20px;"></i> pencil-alt</td><td>&lt;i class="fas fa-pencil-alt"&gt;&lt;/i&gt;</td><td>f303</td></tr>
 <tr><td><i class="fas fa-pencil-ruler" style="font-size: 20px;"></i> pencil-ruler</td><td>&lt;i class="fas fa-pencil-ruler"&gt;&lt;/i&gt;</td><td>f5ae</td></tr>
 <tr><td><i class="fas fa-people-carry" style="font-size: 20px;"></i> people-carry</td><td>&lt;i class="fas fa-people-carry"&gt;&lt;/i&gt;</td><td>f4ce</td></tr>
 <tr><td><i class="fas fa-pepper-hot" style="font-size: 20px;"></i> pepper-hot</td><td>&lt;i class="fas fa-pepper-hot"&gt;&lt;/i&gt;</td><td>f816</td></tr>
 <tr><td><i class="fas fa-percent" style="font-size: 20px;"></i> percent</td><td>&lt;i class="fas fa-percent"&gt;&lt;/i&gt;</td><td>f295</td></tr>
 <tr><td><i class="fas fa-percentage" style="font-size: 20px;"></i> percentage</td><td>&lt;i class="fas fa-percentage"&gt;&lt;/i&gt;</td><td>f541</td></tr>
 <tr><td><i class="fas fa-person-booth" style="font-size: 20px;"></i> person-booth</td><td>&lt;i class="fas fa-person-booth"&gt;&lt;/i&gt;</td><td>f756</td></tr>
 <tr><td><i class="fas fa-phone" style="font-size: 20px;"></i> phone</td><td>&lt;i class="fas fa-phone"&gt;&lt;/i&gt;</td><td>f095</td></tr>
 <tr><td><i class="fas fa-phone-alt" style="font-size: 20px;"></i> phone-alt</td><td>&lt;i class="fas fa-phone-alt"&gt;&lt;/i&gt;</td><td>f879</td></tr>
 <tr><td><i class="fas fa-phone-slash" style="font-size: 20px;"></i> phone-slash</td><td>&lt;i class="fas fa-phone-slash"&gt;&lt;/i&gt;</td><td>f3dd</td></tr>
 <tr><td><i class="fas fa-phone-square" style="font-size: 20px;"></i> phone-square</td><td>&lt;i class="fas fa-phone-square"&gt;&lt;/i&gt;</td><td>f098</td></tr>
 <tr><td><i class="fas fa-phone-square-alt" style="font-size: 20px;"></i> phone-square-alt</td><td>&lt;i class="fas fa-phone-square-alt"&gt;&lt;/i&gt;</td><td>f87b</td></tr>
 <tr><td><i class="fas fa-phone-volume" style="font-size: 20px;"></i> phone-volume</td><td>&lt;i class="fas fa-phone-volume"&gt;&lt;/i&gt;</td><td>f2a0</td></tr>
 <tr><td><i class="fas fa-photo-video" style="font-size: 20px;"></i> photo-video</td><td>&lt;i class="fas fa-photo-video"&gt;&lt;/i&gt;</td><td>f87c</td></tr>
 <tr><td><i class="fas fa-piggy-bank" style="font-size: 20px;"></i> piggy-bank</td><td>&lt;i class="fas fa-piggy-bank"&gt;&lt;/i&gt;</td><td>f4d3</td></tr>
 <tr><td><i class="fas fa-pills" style="font-size: 20px;"></i> pills</td><td>&lt;i class="fas fa-pills"&gt;&lt;/i&gt;</td><td>f484</td></tr>
 <tr><td><i class="fas fa-pizza-slice" style="font-size: 20px;"></i> pizza-slice</td><td>&lt;i class="fas fa-pizza-slice"&gt;&lt;/i&gt;</td><td>f818</td></tr>
 <tr><td><i class="fas fa-place-of-worship" style="font-size: 20px;"></i> place-of-worship</td><td>&lt;i class="fas fa-place-of-worship"&gt;&lt;/i&gt;</td><td>f67f</td></tr>
 <tr><td><i class="fas fa-plane" style="font-size: 20px;"></i> plane</td><td>&lt;i class="fas fa-plane"&gt;&lt;/i&gt;</td><td>f072</td></tr>
 <tr><td><i class="fas fa-plane-arrival" style="font-size: 20px;"></i> plane-arrival</td><td>&lt;i class="fas fa-plane-arrival"&gt;&lt;/i&gt;</td><td>f5af</td></tr>
 <tr><td><i class="fas fa-plane-departure" style="font-size: 20px;"></i> plane-departure</td><td>&lt;i class="fas fa-plane-departure"&gt;&lt;/i&gt;</td><td>f5b0</td></tr>
 <tr><td><i class="fas fa-play" style="font-size: 20px;"></i> play</td><td>&lt;i class="fas fa-play"&gt;&lt;/i&gt;</td><td>f04b</td></tr>
 <tr><td><i class="fas fa-play-circle" style="font-size: 20px;"></i> play-circle</td><td>&lt;i class="fas fa-play-circle"&gt;&lt;/i&gt;</td><td>f144</td></tr>
 <tr><td><i class="fas fa-plug" style="font-size: 20px;"></i> plug</td><td>&lt;i class="fas fa-plug"&gt;&lt;/i&gt;</td><td>f1e6</td></tr>
 <tr><td><i class="fas fa-plus" style="font-size: 20px;"></i> plus</td><td>&lt;i class="fas fa-plus"&gt;&lt;/i&gt;</td><td>f067</td></tr>
 <tr><td><i class="fas fa-plus-circle" style="font-size: 20px;"></i> plus-circle</td><td>&lt;i class="fas fa-plus-circle"&gt;&lt;/i&gt;</td><td>f055</td></tr>
 <tr><td><i class="fas fa-plus-square" style="font-size: 20px;"></i> plus-square</td><td>&lt;i class="fas fa-plus-square"&gt;&lt;/i&gt;</td><td>f0fe</td></tr>
 <tr><td><i class="fas fa-podcast" style="font-size: 20px;"></i> podcast</td><td>&lt;i class="fas fa-podcast"&gt;&lt;/i&gt;</td><td>f2ce</td></tr>
 <tr><td><i class="fas fa-poll" style="font-size: 20px;"></i> poll</td><td>&lt;i class="fas fa-poll"&gt;&lt;/i&gt;</td><td>f681</td></tr>
 <tr><td><i class="fas fa-poll-h" style="font-size: 20px;"></i> poll-h</td><td>&lt;i class="fas fa-poll-h"&gt;&lt;/i&gt;</td><td>f682</td></tr>
 <tr><td><i class="fas fa-poo" style="font-size: 20px;"></i> poo</td><td>&lt;i class="fas fa-poo"&gt;&lt;/i&gt;</td><td>f2fe</td></tr>
 <tr><td><i class="fas fa-poo-storm" style="font-size: 20px;"></i> poo-storm</td><td>&lt;i class="fas fa-poo-storm"&gt;&lt;/i&gt;</td><td>f75a</td></tr>
 <tr><td><i class="fas fa-poop" style="font-size: 20px;"></i> poop</td><td>&lt;i class="fas fa-poop"&gt;&lt;/i&gt;</td><td>f619</td></tr>
 <tr><td><i class="fas fa-portrait" style="font-size: 20px;"></i> portrait</td><td>&lt;i class="fas fa-portrait"&gt;&lt;/i&gt;</td><td>f3e0</td></tr>
 <tr><td><i class="fas fa-pound-sign" style="font-size: 20px;"></i> pound-sign</td><td>&lt;i class="fas fa-pound-sign"&gt;&lt;/i&gt;</td><td>f154</td></tr>
 <tr><td><i class="fas fa-power-off" style="font-size: 20px;"></i> power-off</td><td>&lt;i class="fas fa-power-off"&gt;&lt;/i&gt;</td><td>f011</td></tr>
 <tr><td><i class="fas fa-pray" style="font-size: 20px;"></i> pray</td><td>&lt;i class="fas fa-pray"&gt;&lt;/i&gt;</td><td>f683</td></tr>
 <tr><td><i class="fas fa-praying-hands" style="font-size: 20px;"></i> praying-hands</td><td>&lt;i class="fas fa-praying-hands"&gt;&lt;/i&gt;</td><td>f684</td></tr>
 <tr><td><i class="fas fa-prescription" style="font-size: 20px;"></i> prescription</td><td>&lt;i class="fas fa-prescription"&gt;&lt;/i&gt;</td><td>f5b1</td></tr>
 <tr><td><i class="fas fa-prescription-bottle" style="font-size: 20px;"></i> prescription-bottle</td><td>&lt;i class="fas fa-prescription-bottle"&gt;&lt;/i&gt;</td><td>f485</td></tr>
 <tr><td><i class="fas fa-prescription-bottle-alt" style="font-size: 20px;"></i> prescription-bottle-alt</td><td>&lt;i class="fas fa-prescription-bottle-alt"&gt;&lt;/i&gt;</td><td>f486</td></tr>
 <tr><td><i class="fas fa-print" style="font-size: 20px;"></i> print</td><td>&lt;i class="fas fa-print"&gt;&lt;/i&gt;</td><td>f02f</td></tr>
 <tr><td><i class="fas fa-procedures" style="font-size: 20px;"></i> procedures</td><td>&lt;i class="fas fa-procedures"&gt;&lt;/i&gt;</td><td>f487</td></tr>
 <tr><td><i class="fas fa-project-diagram" style="font-size: 20px;"></i> project-diagram</td><td>&lt;i class="fas fa-project-diagram"&gt;&lt;/i&gt;</td><td>f542</td></tr>
 <tr><td><i class="fas fa-puzzle-piece" style="font-size: 20px;"></i> puzzle-piece</td><td>&lt;i class="fas fa-puzzle-piece"&gt;&lt;/i&gt;</td><td>f12e</td></tr>
 <tr><td><i class="fas fa-qrcode" style="font-size: 20px;"></i> qrcode</td><td>&lt;i class="fas fa-qrcode"&gt;&lt;/i&gt;</td><td>f029</td></tr>
 <tr><td><i class="fas fa-question" style="font-size: 20px;"></i> question</td><td>&lt;i class="fas fa-question"&gt;&lt;/i&gt;</td><td>f128</td></tr>
 <tr><td><i class="fas fa-question-circle" style="font-size: 20px;"></i> question-circle</td><td>&lt;i class="fas fa-question-circle"&gt;&lt;/i&gt;</td><td>f059</td></tr>
 <tr><td><i class="fas fa-quidditch" style="font-size: 20px;"></i> quidditch</td><td>&lt;i class="fas fa-quidditch"&gt;&lt;/i&gt;</td><td>f458</td></tr>
 <tr><td><i class="fas fa-quote-left" style="font-size: 20px;"></i> quote-left</td><td>&lt;i class="fas fa-quote-left"&gt;&lt;/i&gt;</td><td>f10d</td></tr>
 <tr><td><i class="fas fa-quote-right" style="font-size: 20px;"></i> quote-right</td><td>&lt;i class="fas fa-quote-right"&gt;&lt;/i&gt;</td><td>f10e</td></tr>
 <tr><td><i class="fas fa-quran" style="font-size: 20px;"></i> quran</td><td>&lt;i class="fas fa-quran"&gt;&lt;/i&gt;</td><td>f687</td></tr>
 <tr><td><i class="fas fa-radiation" style="font-size: 20px;"></i> radiation</td><td>&lt;i class="fas fa-radiation"&gt;&lt;/i&gt;</td><td>f7b9</td></tr>
 <tr><td><i class="fas fa-radiation-alt" style="font-size: 20px;"></i> radiation-alt</td><td>&lt;i class="fas fa-radiation-alt"&gt;&lt;/i&gt;</td><td>f7ba</td></tr>
 <tr><td><i class="fas fa-rainbow" style="font-size: 20px;"></i> rainbow</td><td>&lt;i class="fas fa-rainbow"&gt;&lt;/i&gt;</td><td>f75b</td></tr>
 <tr><td><i class="fas fa-random" style="font-size: 20px;"></i> random</td><td>&lt;i class="fas fa-random"&gt;&lt;/i&gt;</td><td>f074</td></tr>
 <tr><td><i class="fas fa-receipt" style="font-size: 20px;"></i> receipt</td><td>&lt;i class="fas fa-receipt"&gt;&lt;/i&gt;</td><td>f543</td></tr>
 <tr><td><i class="fas fa-recycle" style="font-size: 20px;"></i> recycle</td><td>&lt;i class="fas fa-recycle"&gt;&lt;/i&gt;</td><td>f1b8</td></tr>
 <tr><td><i class="fas fa-redo" style="font-size: 20px;"></i> redo</td><td>&lt;i class="fas fa-redo"&gt;&lt;/i&gt;</td><td>f01e</td></tr>
 <tr><td><i class="fas fa-redo-alt" style="font-size: 20px;"></i> redo-alt</td><td>&lt;i class="fas fa-redo-alt"&gt;&lt;/i&gt;</td><td>f2f9</td></tr>
 <tr><td><i class="fas fa-registered" style="font-size: 20px;"></i> registered</td><td>&lt;i class="fas fa-registered"&gt;&lt;/i&gt;</td><td>f25d</td></tr>
 <tr><td><i class="fas fa-remove-format" style="font-size: 20px;"></i> remove-format</td><td>&lt;i class="fas fa-remove-format"&gt;&lt;/i&gt;</td><td>f87d</td></tr>
 <tr><td><i class="fas fa-reply" style="font-size: 20px;"></i> reply</td><td>&lt;i class="fas fa-reply"&gt;&lt;/i&gt;</td><td>f3e5</td></tr>
 <tr><td><i class="fas fa-reply-all" style="font-size: 20px;"></i> reply-all</td><td>&lt;i class="fas fa-reply-all"&gt;&lt;/i&gt;</td><td>f122</td></tr>
 <tr><td><i class="fas fa-republican" style="font-size: 20px;"></i> republican</td><td>&lt;i class="fas fa-republican"&gt;&lt;/i&gt;</td><td>f75e</td></tr>
 <tr><td><i class="fas fa-restroom" style="font-size: 20px;"></i> restroom</td><td>&lt;i class="fas fa-restroom"&gt;&lt;/i&gt;</td><td>f7bd</td></tr>
 <tr><td><i class="fas fa-retweet" style="font-size: 20px;"></i> retweet</td><td>&lt;i class="fas fa-retweet"&gt;&lt;/i&gt;</td><td>f079</td></tr>
 <tr><td><i class="fas fa-ribbon" style="font-size: 20px;"></i> ribbon</td><td>&lt;i class="fas fa-ribbon"&gt;&lt;/i&gt;</td><td>f4d6</td></tr>
 <tr><td><i class="fas fa-ring" style="font-size: 20px;"></i> ring</td><td>&lt;i class="fas fa-ring"&gt;&lt;/i&gt;</td><td>f70b</td></tr>
 <tr><td><i class="fas fa-road" style="font-size: 20px;"></i> road</td><td>&lt;i class="fas fa-road"&gt;&lt;/i&gt;</td><td>f018</td></tr>
 <tr><td><i class="fas fa-robot" style="font-size: 20px;"></i> robot</td><td>&lt;i class="fas fa-robot"&gt;&lt;/i&gt;</td><td>f544</td></tr>
 <tr><td><i class="fas fa-rocket" style="font-size: 20px;"></i> rocket</td><td>&lt;i class="fas fa-rocket"&gt;&lt;/i&gt;</td><td>f135</td></tr>
 <tr><td><i class="fas fa-route" style="font-size: 20px;"></i> route</td><td>&lt;i class="fas fa-route"&gt;&lt;/i&gt;</td><td>f4d7</td></tr>
 <tr><td><i class="fas fa-rss" style="font-size: 20px;"></i> rss</td><td>&lt;i class="fas fa-rss"&gt;&lt;/i&gt;</td><td>f09e</td></tr>
 <tr><td><i class="fas fa-rss-square" style="font-size: 20px;"></i> rss-square</td><td>&lt;i class="fas fa-rss-square"&gt;&lt;/i&gt;</td><td>f143</td></tr>
 <tr><td><i class="fas fa-ruble-sign" style="font-size: 20px;"></i> ruble-sign</td><td>&lt;i class="fas fa-ruble-sign"&gt;&lt;/i&gt;</td><td>f158</td></tr>
 <tr><td><i class="fas fa-ruler" style="font-size: 20px;"></i> ruler</td><td>&lt;i class="fas fa-ruler"&gt;&lt;/i&gt;</td><td>f545</td></tr>
 <tr><td><i class="fas fa-ruler-combined" style="font-size: 20px;"></i> ruler-combined</td><td>&lt;i class="fas fa-ruler-combined"&gt;&lt;/i&gt;</td><td>f546</td></tr>
 <tr><td><i class="fas fa-ruler-horizontal" style="font-size: 20px;"></i> ruler-horizontal</td><td>&lt;i class="fas fa-ruler-horizontal"&gt;&lt;/i&gt;</td><td>f547</td></tr>
 <tr><td><i class="fas fa-ruler-vertical" style="font-size: 20px;"></i> ruler-vertical</td><td>&lt;i class="fas fa-ruler-vertical"&gt;&lt;/i&gt;</td><td>f548</td></tr>
 <tr><td><i class="fas fa-running" style="font-size: 20px;"></i> running</td><td>&lt;i class="fas fa-running"&gt;&lt;/i&gt;</td><td>f70c</td></tr>
 <tr><td><i class="fas fa-rupee-sign" style="font-size: 20px;"></i> rupee-sign</td><td>&lt;i class="fas fa-rupee-sign"&gt;&lt;/i&gt;</td><td>f156</td></tr>
 <tr><td><i class="fas fa-sad-cry" style="font-size: 20px;"></i> sad-cry</td><td>&lt;i class="fas fa-sad-cry"&gt;&lt;/i&gt;</td><td>f5b3</td></tr>
 <tr><td><i class="fas fa-sad-tear" style="font-size: 20px;"></i> sad-tear</td><td>&lt;i class="fas fa-sad-tear"&gt;&lt;/i&gt;</td><td>f5b4</td></tr>
 <tr><td><i class="fas fa-satellite" style="font-size: 20px;"></i> satellite</td><td>&lt;i class="fas fa-satellite"&gt;&lt;/i&gt;</td><td>f7bf</td></tr>
 <tr><td><i class="fas fa-satellite-dish" style="font-size: 20px;"></i> satellite-dish</td><td>&lt;i class="fas fa-satellite-dish"&gt;&lt;/i&gt;</td><td>f7c0</td></tr>
 <tr><td><i class="fas fa-save" style="font-size: 20px;"></i> save</td><td>&lt;i class="fas fa-save"&gt;&lt;/i&gt;</td><td>f0c7</td></tr>
 <tr><td><i class="fas fa-school" style="font-size: 20px;"></i> school</td><td>&lt;i class="fas fa-school"&gt;&lt;/i&gt;</td><td>f549</td></tr>
 <tr><td><i class="fas fa-screwdriver" style="font-size: 20px;"></i> screwdriver</td><td>&lt;i class="fas fa-screwdriver"&gt;&lt;/i&gt;</td><td>f54a</td></tr>
 <tr><td><i class="fas fa-scroll" style="font-size: 20px;"></i> scroll</td><td>&lt;i class="fas fa-scroll"&gt;&lt;/i&gt;</td><td>f70e</td></tr>
 <tr><td><i class="fas fa-sd-card" style="font-size: 20px;"></i> sd-card</td><td>&lt;i class="fas fa-sd-card"&gt;&lt;/i&gt;</td><td>f7c2</td></tr>
 <tr><td><i class="fas fa-search" style="font-size: 20px;"></i> search</td><td>&lt;i class="fas fa-search"&gt;&lt;/i&gt;</td><td>f002</td></tr>
 <tr><td><i class="fas fa-search-dollar" style="font-size: 20px;"></i> search-dollar</td><td>&lt;i class="fas fa-search-dollar"&gt;&lt;/i&gt;</td><td>f688</td></tr>
 <tr><td><i class="fas fa-search-location" style="font-size: 20px;"></i> search-location</td><td>&lt;i class="fas fa-search-location"&gt;&lt;/i&gt;</td><td>f689</td></tr>
 <tr><td><i class="fas fa-search-minus" style="font-size: 20px;"></i> search-minus</td><td>&lt;i class="fas fa-search-minus"&gt;&lt;/i&gt;</td><td>f010</td></tr>
 <tr><td><i class="fas fa-search-plus" style="font-size: 20px;"></i> search-plus</td><td>&lt;i class="fas fa-search-plus"&gt;&lt;/i&gt;</td><td>f00e</td></tr>
 <tr><td><i class="fas fa-seedling" style="font-size: 20px;"></i> seedling</td><td>&lt;i class="fas fa-seedling"&gt;&lt;/i&gt;</td><td>f4d8</td></tr>
 <tr><td><i class="fas fa-server" style="font-size: 20px;"></i> server</td><td>&lt;i class="fas fa-server"&gt;&lt;/i&gt;</td><td>f233</td></tr>
 <tr><td><i class="fas fa-shapes" style="font-size: 20px;"></i> shapes</td><td>&lt;i class="fas fa-shapes"&gt;&lt;/i&gt;</td><td>f61f</td></tr>
 <tr><td><i class="fas fa-share" style="font-size: 20px;"></i> share</td><td>&lt;i class="fas fa-share"&gt;&lt;/i&gt;</td><td>f064</td></tr>
 <tr><td><i class="fas fa-share-alt" style="font-size: 20px;"></i> share-alt</td><td>&lt;i class="fas fa-share-alt"&gt;&lt;/i&gt;</td><td>f1e0</td></tr>
 <tr><td><i class="fas fa-share-alt-square" style="font-size: 20px;"></i> share-alt-square</td><td>&lt;i class="fas fa-share-alt-square"&gt;&lt;/i&gt;</td><td>f1e1</td></tr>
 <tr><td><i class="fas fa-share-square" style="font-size: 20px;"></i> share-square</td><td>&lt;i class="fas fa-share-square"&gt;&lt;/i&gt;</td><td>f14d</td></tr>
 <tr><td><i class="fas fa-shekel-sign" style="font-size: 20px;"></i> shekel-sign</td><td>&lt;i class="fas fa-shekel-sign"&gt;&lt;/i&gt;</td><td>f20b</td></tr>
 <tr><td><i class="fas fa-shield-alt" style="font-size: 20px;"></i> shield-alt</td><td>&lt;i class="fas fa-shield-alt"&gt;&lt;/i&gt;</td><td>f3ed</td></tr>
 <tr><td><i class="fas fa-ship" style="font-size: 20px;"></i> ship</td><td>&lt;i class="fas fa-ship"&gt;&lt;/i&gt;</td><td>f21a</td></tr>
 <tr><td><i class="fas fa-shipping-fast" style="font-size: 20px;"></i> shipping-fast</td><td>&lt;i class="fas fa-shipping-fast"&gt;&lt;/i&gt;</td><td>f48b</td></tr>
 <tr><td><i class="fas fa-shoe-prints" style="font-size: 20px;"></i> shoe-prints</td><td>&lt;i class="fas fa-shoe-prints"&gt;&lt;/i&gt;</td><td>f54b</td></tr>
 <tr><td><i class="fas fa-shopping-bag" style="font-size: 20px;"></i> shopping-bag</td><td>&lt;i class="fas fa-shopping-bag"&gt;&lt;/i&gt;</td><td>f290</td></tr>
 <tr><td><i class="fas fa-shopping-basket" style="font-size: 20px;"></i> shopping-basket</td><td>&lt;i class="fas fa-shopping-basket"&gt;&lt;/i&gt;</td><td>f291</td></tr>
 <tr><td><i class="fas fa-shopping-cart" style="font-size: 20px;"></i> shopping-cart</td><td>&lt;i class="fas fa-shopping-cart"&gt;&lt;/i&gt;</td><td>f07a</td></tr>
 <tr><td><i class="fas fa-shower" style="font-size: 20px;"></i> shower</td><td>&lt;i class="fas fa-shower"&gt;&lt;/i&gt;</td><td>f2cc</td></tr>
 <tr><td><i class="fas fa-shuttle-van" style="font-size: 20px;"></i> shuttle-van</td><td>&lt;i class="fas fa-shuttle-van"&gt;&lt;/i&gt;</td><td>f5b6</td></tr>
 <tr><td><i class="fas fa-sign" style="font-size: 20px;"></i> sign</td><td>&lt;i class="fas fa-sign"&gt;&lt;/i&gt;</td><td>f4d9</td></tr>
 <tr><td><i class="fas fa-sign-in-alt" style="font-size: 20px;"></i> sign-in-alt</td><td>&lt;i class="fas fa-sign-in-alt"&gt;&lt;/i&gt;</td><td>f2f6</td></tr>
 <tr><td><i class="fas fa-sign-language" style="font-size: 20px;"></i> sign-language</td><td>&lt;i class="fas fa-sign-language"&gt;&lt;/i&gt;</td><td>f2a7</td></tr>
 <tr><td><i class="fas fa-sign-out-alt" style="font-size: 20px;"></i> sign-out-alt</td><td>&lt;i class="fas fa-sign-out-alt"&gt;&lt;/i&gt;</td><td>f2f5</td></tr>
 <tr><td><i class="fas fa-signal" style="font-size: 20px;"></i> signal</td><td>&lt;i class="fas fa-signal"&gt;&lt;/i&gt;</td><td>f012</td></tr>
 <tr><td><i class="fas fa-signature" style="font-size: 20px;"></i> signature</td><td>&lt;i class="fas fa-signature"&gt;&lt;/i&gt;</td><td>f5b7</td></tr>
 <tr><td><i class="fas fa-sim-card" style="font-size: 20px;"></i> sim-card</td><td>&lt;i class="fas fa-sim-card"&gt;&lt;/i&gt;</td><td>f7c4</td></tr>
 <tr><td><i class="fas fa-sitemap" style="font-size: 20px;"></i> sitemap</td><td>&lt;i class="fas fa-sitemap"&gt;&lt;/i&gt;</td><td>f0e8</td></tr>
 <tr><td><i class="fas fa-skating" style="font-size: 20px;"></i> skating</td><td>&lt;i class="fas fa-skating"&gt;&lt;/i&gt;</td><td>f7c5</td></tr>
 <tr><td><i class="fas fa-skiing" style="font-size: 20px;"></i> skiing</td><td>&lt;i class="fas fa-skiing"&gt;&lt;/i&gt;</td><td>f7c9</td></tr>
 <tr><td><i class="fas fa-skiing-nordic" style="font-size: 20px;"></i> skiing-nordic</td><td>&lt;i class="fas fa-skiing-nordic"&gt;&lt;/i&gt;</td><td>f7ca</td></tr>
 <tr><td><i class="fas fa-skull" style="font-size: 20px;"></i> skull</td><td>&lt;i class="fas fa-skull"&gt;&lt;/i&gt;</td><td>f54c</td></tr>
 <tr><td><i class="fas fa-skull-crossbones" style="font-size: 20px;"></i> skull-crossbones</td><td>&lt;i class="fas fa-skull-crossbones"&gt;&lt;/i&gt;</td><td>f714</td></tr>
 <tr><td><i class="fas fa-slash" style="font-size: 20px;"></i> slash</td><td>&lt;i class="fas fa-slash"&gt;&lt;/i&gt;</td><td>f715</td></tr>
 <tr><td><i class="fas fa-sleigh" style="font-size: 20px;"></i> sleigh</td><td>&lt;i class="fas fa-sleigh"&gt;&lt;/i&gt;</td><td>f7cc</td></tr>
 <tr><td><i class="fas fa-sliders-h" style="font-size: 20px;"></i> sliders-h</td><td>&lt;i class="fas fa-sliders-h"&gt;&lt;/i&gt;</td><td>f1de</td></tr>
 <tr><td><i class="fas fa-smile" style="font-size: 20px;"></i> smile</td><td>&lt;i class="fas fa-smile"&gt;&lt;/i&gt;</td><td>f118</td></tr>
 <tr><td><i class="fas fa-smile-beam" style="font-size: 20px;"></i> smile-beam</td><td>&lt;i class="fas fa-smile-beam"&gt;&lt;/i&gt;</td><td>f5b8</td></tr>
 <tr><td><i class="fas fa-smile-wink" style="font-size: 20px;"></i> smile-wink</td><td>&lt;i class="fas fa-smile-wink"&gt;&lt;/i&gt;</td><td>f4da</td></tr>
 <tr><td><i class="fas fa-smog" style="font-size: 20px;"></i> smog</td><td>&lt;i class="fas fa-smog"&gt;&lt;/i&gt;</td><td>f75f</td></tr>
 <tr><td><i class="fas fa-smoking" style="font-size: 20px;"></i> smoking</td><td>&lt;i class="fas fa-smoking"&gt;&lt;/i&gt;</td><td>f48d</td></tr>
 <tr><td><i class="fas fa-smoking-ban" style="font-size: 20px;"></i> smoking-ban</td><td>&lt;i class="fas fa-smoking-ban"&gt;&lt;/i&gt;</td><td>f54d</td></tr>
 <tr><td><i class="fas fa-sms" style="font-size: 20px;"></i> sms</td><td>&lt;i class="fas fa-sms"&gt;&lt;/i&gt;</td><td>f7cd</td></tr>
 <tr><td><i class="fas fa-snowboarding" style="font-size: 20px;"></i> snowboarding</td><td>&lt;i class="fas fa-snowboarding"&gt;&lt;/i&gt;</td><td>f7ce</td></tr>
 <tr><td><i class="fas fa-snowflake" style="font-size: 20px;"></i> snowflake</td><td>&lt;i class="fas fa-snowflake"&gt;&lt;/i&gt;</td><td>f2dc</td></tr>
 <tr><td><i class="fas fa-snowman" style="font-size: 20px;"></i> snowman</td><td>&lt;i class="fas fa-snowman"&gt;&lt;/i&gt;</td><td>f7d0</td></tr>
 <tr><td><i class="fas fa-snowplow" style="font-size: 20px;"></i> snowplow</td><td>&lt;i class="fas fa-snowplow"&gt;&lt;/i&gt;</td><td>f7d2</td></tr>
 <tr><td><i class="fas fa-socks" style="font-size: 20px;"></i> socks</td><td>&lt;i class="fas fa-socks"&gt;&lt;/i&gt;</td><td>f696</td></tr>
 <tr><td><i class="fas fa-solar-panel" style="font-size: 20px;"></i> solar-panel</td><td>&lt;i class="fas fa-solar-panel"&gt;&lt;/i&gt;</td><td>f5ba</td></tr>
 <tr><td><i class="fas fa-sort" style="font-size: 20px;"></i> sort</td><td>&lt;i class="fas fa-sort"&gt;&lt;/i&gt;</td><td>f0dc</td></tr>
 <tr><td><i class="fas fa-sort-alpha-down" style="font-size: 20px;"></i> sort-alpha-down</td><td>&lt;i class="fas fa-sort-alpha-down"&gt;&lt;/i&gt;</td><td>f15d</td></tr>
 <tr><td><i class="fas fa-sort-alpha-down-alt" style="font-size: 20px;"></i> sort-alpha-down-alt</td><td>&lt;i class="fas fa-sort-alpha-down-alt"&gt;&lt;/i&gt;</td><td>f881</td></tr>
 <tr><td><i class="fas fa-sort-alpha-up" style="font-size: 20px;"></i> sort-alpha-up</td><td>&lt;i class="fas fa-sort-alpha-up"&gt;&lt;/i&gt;</td><td>f15e</td></tr>
 <tr><td><i class="fas fa-sort-alpha-up-alt" style="font-size: 20px;"></i> sort-alpha-up-alt</td><td>&lt;i class="fas fa-sort-alpha-up-alt"&gt;&lt;/i&gt;</td><td>f882</td></tr>
 <tr><td><i class="fas fa-sort-amount-down" style="font-size: 20px;"></i> sort-amount-down</td><td>&lt;i class="fas fa-sort-amount-down"&gt;&lt;/i&gt;</td><td>f160</td></tr>
 <tr><td><i class="fas fa-sort-amount-down-alt" style="font-size: 20px;"></i> sort-amount-down-alt</td><td>&lt;i class="fas fa-sort-amount-down-alt"&gt;&lt;/i&gt;</td><td>f884</td></tr>
 <tr><td><i class="fas fa-sort-amount-up" style="font-size: 20px;"></i> sort-amount-up</td><td>&lt;i class="fas fa-sort-amount-up"&gt;&lt;/i&gt;</td><td>f161</td></tr>
 <tr><td><i class="fas fa-sort-amount-up-alt" style="font-size: 20px;"></i> sort-amount-up-alt</td><td>&lt;i class="fas fa-sort-amount-up-alt"&gt;&lt;/i&gt;</td><td>f885</td></tr>
 <tr><td><i class="fas fa-sort-down" style="font-size: 20px;"></i> sort-down</td><td>&lt;i class="fas fa-sort-down"&gt;&lt;/i&gt;</td><td>f0dd</td></tr>
 <tr><td><i class="fas fa-sort-numeric-down" style="font-size: 20px;"></i> sort-numeric-down</td><td>&lt;i class="fas fa-sort-numeric-down"&gt;&lt;/i&gt;</td><td>f162</td></tr>
 <tr><td><i class="fas fa-sort-numeric-down-alt" style="font-size: 20px;"></i> sort-numeric-down-alt</td><td>&lt;i class="fas fa-sort-numeric-down-alt"&gt;&lt;/i&gt;</td><td>f886</td></tr>
 <tr><td><i class="fas fa-sort-numeric-up" style="font-size: 20px;"></i> sort-numeric-up</td><td>&lt;i class="fas fa-sort-numeric-up"&gt;&lt;/i&gt;</td><td>f163</td></tr>
 <tr><td><i class="fas fa-sort-numeric-up-alt" style="font-size: 20px;"></i> sort-numeric-up-alt</td><td>&lt;i class="fas fa-sort-numeric-up-alt"&gt;&lt;/i&gt;</td><td>f887</td></tr>
 <tr><td><i class="fas fa-sort-up" style="font-size: 20px;"></i> sort-up</td><td>&lt;i class="fas fa-sort-up"&gt;&lt;/i&gt;</td><td>f0de</td></tr>
 <tr><td><i class="fas fa-spa" style="font-size: 20px;"></i> spa</td><td>&lt;i class="fas fa-spa"&gt;&lt;/i&gt;</td><td>f5bb</td></tr>
 <tr><td><i class="fas fa-space-shuttle" style="font-size: 20px;"></i> space-shuttle</td><td>&lt;i class="fas fa-space-shuttle"&gt;&lt;/i&gt;</td><td>f197</td></tr>
 <tr><td><i class="fas fa-spell-check" style="font-size: 20px;"></i> spell-check</td><td>&lt;i class="fas fa-spell-check"&gt;&lt;/i&gt;</td><td>f891</td></tr>
 <tr><td><i class="fas fa-spider" style="font-size: 20px;"></i> spider</td><td>&lt;i class="fas fa-spider"&gt;&lt;/i&gt;</td><td>f717</td></tr>
 <tr><td><i class="fas fa-spinner" style="font-size: 20px;"></i> spinner</td><td>&lt;i class="fas fa-spinner"&gt;&lt;/i&gt;</td><td>f110</td></tr>
 <tr><td><i class="fas fa-splotch" style="font-size: 20px;"></i> splotch</td><td>&lt;i class="fas fa-splotch"&gt;&lt;/i&gt;</td><td>f5bc</td></tr>
 <tr><td><i class="fas fa-spray-can" style="font-size: 20px;"></i> spray-can</td><td>&lt;i class="fas fa-spray-can"&gt;&lt;/i&gt;</td><td>f5bd</td></tr>
 <tr><td><i class="fas fa-square" style="font-size: 20px;"></i> square</td><td>&lt;i class="fas fa-square"&gt;&lt;/i&gt;</td><td>f0c8</td></tr>
 <tr><td><i class="fas fa-square-full" style="font-size: 20px;"></i> square-full</td><td>&lt;i class="fas fa-square-full"&gt;&lt;/i&gt;</td><td>f45c</td></tr>
 <tr><td><i class="fas fa-square-root-alt" style="font-size: 20px;"></i> square-root-alt</td><td>&lt;i class="fas fa-square-root-alt"&gt;&lt;/i&gt;</td><td>f698</td></tr>
 <tr><td><i class="fas fa-stamp" style="font-size: 20px;"></i> stamp</td><td>&lt;i class="fas fa-stamp"&gt;&lt;/i&gt;</td><td>f5bf</td></tr>
 <tr><td><i class="fas fa-star" style="font-size: 20px;"></i> star</td><td>&lt;i class="fas fa-star"&gt;&lt;/i&gt;</td><td>f005</td></tr>
 <tr><td><i class="fas fa-star-and-crescent" style="font-size: 20px;"></i> star-and-crescent</td><td>&lt;i class="fas fa-star-and-crescent"&gt;&lt;/i&gt;</td><td>f699</td></tr>
 <tr><td><i class="fas fa-star-half" style="font-size: 20px;"></i> star-half</td><td>&lt;i class="fas fa-star-half"&gt;&lt;/i&gt;</td><td>f089</td></tr>
 <tr><td><i class="fas fa-star-half-alt" style="font-size: 20px;"></i> star-half-alt</td><td>&lt;i class="fas fa-star-half-alt"&gt;&lt;/i&gt;</td><td>f5c0</td></tr>
 <tr><td><i class="fas fa-star-of-david" style="font-size: 20px;"></i> star-of-david</td><td>&lt;i class="fas fa-star-of-david"&gt;&lt;/i&gt;</td><td>f69a</td></tr>
 <tr><td><i class="fas fa-star-of-life" style="font-size: 20px;"></i> star-of-life</td><td>&lt;i class="fas fa-star-of-life"&gt;&lt;/i&gt;</td><td>f621</td></tr>
 <tr><td><i class="fas fa-step-backward" style="font-size: 20px;"></i> step-backward</td><td>&lt;i class="fas fa-step-backward"&gt;&lt;/i&gt;</td><td>f048</td></tr>
 <tr><td><i class="fas fa-step-forward" style="font-size: 20px;"></i> step-forward</td><td>&lt;i class="fas fa-step-forward"&gt;&lt;/i&gt;</td><td>f051</td></tr>
 <tr><td><i class="fas fa-stethoscope" style="font-size: 20px;"></i> stethoscope</td><td>&lt;i class="fas fa-stethoscope"&gt;&lt;/i&gt;</td><td>f0f1</td></tr>
 <tr><td><i class="fas fa-sticky-note" style="font-size: 20px;"></i> sticky-note</td><td>&lt;i class="fas fa-sticky-note"&gt;&lt;/i&gt;</td><td>f249</td></tr>
 <tr><td><i class="fas fa-stop" style="font-size: 20px;"></i> stop</td><td>&lt;i class="fas fa-stop"&gt;&lt;/i&gt;</td><td>f04d</td></tr>
 <tr><td><i class="fas fa-stop-circle" style="font-size: 20px;"></i> stop-circle</td><td>&lt;i class="fas fa-stop-circle"&gt;&lt;/i&gt;</td><td>f28d</td></tr>
 <tr><td><i class="fas fa-stopwatch" style="font-size: 20px;"></i> stopwatch</td><td>&lt;i class="fas fa-stopwatch"&gt;&lt;/i&gt;</td><td>f2f2</td></tr>
 <tr><td><i class="fas fa-store" style="font-size: 20px;"></i> store</td><td>&lt;i class="fas fa-store"&gt;&lt;/i&gt;</td><td>f54e</td></tr>
 <tr><td><i class="fas fa-store-alt" style="font-size: 20px;"></i> store-alt</td><td>&lt;i class="fas fa-store-alt"&gt;&lt;/i&gt;</td><td>f54f</td></tr>
 <tr><td><i class="fas fa-stream" style="font-size: 20px;"></i> stream</td><td>&lt;i class="fas fa-stream"&gt;&lt;/i&gt;</td><td>f550</td></tr>
 <tr><td><i class="fas fa-street-view" style="font-size: 20px;"></i> street-view</td><td>&lt;i class="fas fa-street-view"&gt;&lt;/i&gt;</td><td>f21d</td></tr>
 <tr><td><i class="fas fa-strikethrough" style="font-size: 20px;"></i> strikethrough</td><td>&lt;i class="fas fa-strikethrough"&gt;&lt;/i&gt;</td><td>f0cc</td></tr>
 <tr><td><i class="fas fa-stroopwafel" style="font-size: 20px;"></i> stroopwafel</td><td>&lt;i class="fas fa-stroopwafel"&gt;&lt;/i&gt;</td><td>f551</td></tr>
 <tr><td><i class="fas fa-subscript" style="font-size: 20px;"></i> subscript</td><td>&lt;i class="fas fa-subscript"&gt;&lt;/i&gt;</td><td>f12c</td></tr>
 <tr><td><i class="fas fa-subway" style="font-size: 20px;"></i> subway</td><td>&lt;i class="fas fa-subway"&gt;&lt;/i&gt;</td><td>f239</td></tr>
 <tr><td><i class="fas fa-suitcase" style="font-size: 20px;"></i> suitcase</td><td>&lt;i class="fas fa-suitcase"&gt;&lt;/i&gt;</td><td>f0f2</td></tr>
 <tr><td><i class="fas fa-suitcase-rolling" style="font-size: 20px;"></i> suitcase-rolling</td><td>&lt;i class="fas fa-suitcase-rolling"&gt;&lt;/i&gt;</td><td>f5c1</td></tr>
 <tr><td><i class="fas fa-sun" style="font-size: 20px;"></i> sun</td><td>&lt;i class="fas fa-sun"&gt;&lt;/i&gt;</td><td>f185</td></tr>
 <tr><td><i class="fas fa-superscript" style="font-size: 20px;"></i> superscript</td><td>&lt;i class="fas fa-superscript"&gt;&lt;/i&gt;</td><td>f12b</td></tr>
 <tr><td><i class="fas fa-surprise" style="font-size: 20px;"></i> surprise</td><td>&lt;i class="fas fa-surprise"&gt;&lt;/i&gt;</td><td>f5c2</td></tr>
 <tr><td><i class="fas fa-swatchbook" style="font-size: 20px;"></i> swatchbook</td><td>&lt;i class="fas fa-swatchbook"&gt;&lt;/i&gt;</td><td>f5c3</td></tr>
 <tr><td><i class="fas fa-swimmer" style="font-size: 20px;"></i> swimmer</td><td>&lt;i class="fas fa-swimmer"&gt;&lt;/i&gt;</td><td>f5c4</td></tr>
 <tr><td><i class="fas fa-swimming-pool" style="font-size: 20px;"></i> swimming-pool</td><td>&lt;i class="fas fa-swimming-pool"&gt;&lt;/i&gt;</td><td>f5c5</td></tr>
 <tr><td><i class="fas fa-synagogue" style="font-size: 20px;"></i> synagogue</td><td>&lt;i class="fas fa-synagogue"&gt;&lt;/i&gt;</td><td>f69b</td></tr>
 <tr><td><i class="fas fa-sync" style="font-size: 20px;"></i> sync</td><td>&lt;i class="fas fa-sync"&gt;&lt;/i&gt;</td><td>f021</td></tr>
 <tr><td><i class="fas fa-sync-alt" style="font-size: 20px;"></i> sync-alt</td><td>&lt;i class="fas fa-sync-alt"&gt;&lt;/i&gt;</td><td>f2f1</td></tr>
 <tr><td><i class="fas fa-syringe" style="font-size: 20px;"></i> syringe</td><td>&lt;i class="fas fa-syringe"&gt;&lt;/i&gt;</td><td>f48e</td></tr>
 <tr><td><i class="fas fa-table" style="font-size: 20px;"></i> table</td><td>&lt;i class="fas fa-table"&gt;&lt;/i&gt;</td><td>f0ce</td></tr>
 <tr><td><i class="fas fa-table-tennis" style="font-size: 20px;"></i> table-tennis</td><td>&lt;i class="fas fa-table-tennis"&gt;&lt;/i&gt;</td><td>f45d</td></tr>
 <tr><td><i class="fas fa-tablet" style="font-size: 20px;"></i> tablet</td><td>&lt;i class="fas fa-tablet"&gt;&lt;/i&gt;</td><td>f10a</td></tr>
 <tr><td><i class="fas fa-tablet-alt" style="font-size: 20px;"></i> tablet-alt</td><td>&lt;i class="fas fa-tablet-alt"&gt;&lt;/i&gt;</td><td>f3fa</td></tr>
 <tr><td><i class="fas fa-tablets" style="font-size: 20px;"></i> tablets</td><td>&lt;i class="fas fa-tablets"&gt;&lt;/i&gt;</td><td>f490</td></tr>
 <tr><td><i class="fas fa-tachometer-alt" style="font-size: 20px;"></i> tachometer-alt</td><td>&lt;i class="fas fa-tachometer-alt"&gt;&lt;/i&gt;</td><td>f3fd</td></tr>
 <tr><td><i class="fas fa-tag" style="font-size: 20px;"></i> tag</td><td>&lt;i class="fas fa-tag"&gt;&lt;/i&gt;</td><td>f02b</td></tr>
 <tr><td><i class="fas fa-tags" style="font-size: 20px;"></i> tags</td><td>&lt;i class="fas fa-tags"&gt;&lt;/i&gt;</td><td>f02c</td></tr>
 <tr><td><i class="fas fa-tape" style="font-size: 20px;"></i> tape</td><td>&lt;i class="fas fa-tape"&gt;&lt;/i&gt;</td><td>f4db</td></tr>
 <tr><td><i class="fas fa-tasks" style="font-size: 20px;"></i> tasks</td><td>&lt;i class="fas fa-tasks"&gt;&lt;/i&gt;</td><td>f0ae</td></tr>
 <tr><td><i class="fas fa-taxi" style="font-size: 20px;"></i> taxi</td><td>&lt;i class="fas fa-taxi"&gt;&lt;/i&gt;</td><td>f1ba</td></tr>
 <tr><td><i class="fas fa-teeth" style="font-size: 20px;"></i> teeth</td><td>&lt;i class="fas fa-teeth"&gt;&lt;/i&gt;</td><td>f62e</td></tr>
 <tr><td><i class="fas fa-teeth-open" style="font-size: 20px;"></i> teeth-open</td><td>&lt;i class="fas fa-teeth-open"&gt;&lt;/i&gt;</td><td>f62f</td></tr>
 <tr><td><i class="fas fa-temperature-high" style="font-size: 20px;"></i> temperature-high</td><td>&lt;i class="fas fa-temperature-high"&gt;&lt;/i&gt;</td><td>f769</td></tr>
 <tr><td><i class="fas fa-temperature-low" style="font-size: 20px;"></i> temperature-low</td><td>&lt;i class="fas fa-temperature-low"&gt;&lt;/i&gt;</td><td>f76b</td></tr>
 <tr><td><i class="fas fa-tenge" style="font-size: 20px;"></i> tenge</td><td>&lt;i class="fas fa-tenge"&gt;&lt;/i&gt;</td><td>f7d7</td></tr>
 <tr><td><i class="fas fa-terminal" style="font-size: 20px;"></i> terminal</td><td>&lt;i class="fas fa-terminal"&gt;&lt;/i&gt;</td><td>f120</td></tr>
 <tr><td><i class="fas fa-text-height" style="font-size: 20px;"></i> text-height</td><td>&lt;i class="fas fa-text-height"&gt;&lt;/i&gt;</td><td>f034</td></tr>
 <tr><td><i class="fas fa-text-width" style="font-size: 20px;"></i> text-width</td><td>&lt;i class="fas fa-text-width"&gt;&lt;/i&gt;</td><td>f035</td></tr>
 <tr><td><i class="fas fa-th" style="font-size: 20px;"></i> th</td><td>&lt;i class="fas fa-th"&gt;&lt;/i&gt;</td><td>f00a</td></tr>
 <tr><td><i class="fas fa-th-large" style="font-size: 20px;"></i> th-large</td><td>&lt;i class="fas fa-th-large"&gt;&lt;/i&gt;</td><td>f009</td></tr>
 <tr><td><i class="fas fa-th-list" style="font-size: 20px;"></i> th-list</td><td>&lt;i class="fas fa-th-list"&gt;&lt;/i&gt;</td><td>f00b</td></tr>
 <tr><td><i class="fas fa-theater-masks" style="font-size: 20px;"></i> theater-masks</td><td>&lt;i class="fas fa-theater-masks"&gt;&lt;/i&gt;</td><td>f630</td></tr>
 <tr><td><i class="fas fa-thermometer" style="font-size: 20px;"></i> thermometer</td><td>&lt;i class="fas fa-thermometer"&gt;&lt;/i&gt;</td><td>f491</td></tr>
 <tr><td><i class="fas fa-thermometer-empty" style="font-size: 20px;"></i> thermometer-empty</td><td>&lt;i class="fas fa-thermometer-empty"&gt;&lt;/i&gt;</td><td>f2cb</td></tr>
 <tr><td><i class="fas fa-thermometer-full" style="font-size: 20px;"></i> thermometer-full</td><td>&lt;i class="fas fa-thermometer-full"&gt;&lt;/i&gt;</td><td>f2c7</td></tr>
 <tr><td><i class="fas fa-thermometer-half" style="font-size: 20px;"></i> thermometer-half</td><td>&lt;i class="fas fa-thermometer-half"&gt;&lt;/i&gt;</td><td>f2c9</td></tr>
 <tr><td><i class="fas fa-thermometer-quarter" style="font-size: 20px;"></i> thermometer-quarter</td><td>&lt;i class="fas fa-thermometer-quarter"&gt;&lt;/i&gt;</td><td>f2ca</td></tr>
 <tr><td><i class="fas fa-thermometer-three-quarters" style="font-size: 20px;"></i> thermometer-three-quarters</td><td>&lt;i class="fas fa-thermometer-three-quarters"&gt;&lt;/i&gt;</td><td>f2c8</td></tr>
 <tr><td><i class="fas fa-thumbs-down" style="font-size: 20px;"></i> thumbs-down</td><td>&lt;i class="fas fa-thumbs-down"&gt;&lt;/i&gt;</td><td>f165</td></tr>
 <tr><td><i class="fas fa-thumbs-up" style="font-size: 20px;"></i> thumbs-up</td><td>&lt;i class="fas fa-thumbs-up"&gt;&lt;/i&gt;</td><td>f164</td></tr>
 <tr><td><i class="fas fa-thumbtack" style="font-size: 20px;"></i> thumbtack</td><td>&lt;i class="fas fa-thumbtack"&gt;&lt;/i&gt;</td><td>f08d</td></tr>
 <tr><td><i class="fas fa-ticket-alt" style="font-size: 20px;"></i> ticket-alt</td><td>&lt;i class="fas fa-ticket-alt"&gt;&lt;/i&gt;</td><td>f3ff</td></tr>
 <tr><td><i class="fas fa-times" style="font-size: 20px;"></i> times</td><td>&lt;i class="fas fa-times"&gt;&lt;/i&gt;</td><td>f00d</td></tr>
 <tr><td><i class="fas fa-times-circle" style="font-size: 20px;"></i> times-circle</td><td>&lt;i class="fas fa-times-circle"&gt;&lt;/i&gt;</td><td>f057</td></tr>
 <tr><td><i class="fas fa-tint" style="font-size: 20px;"></i> tint</td><td>&lt;i class="fas fa-tint"&gt;&lt;/i&gt;</td><td>f043</td></tr>
 <tr><td><i class="fas fa-tint-slash" style="font-size: 20px;"></i> tint-slash</td><td>&lt;i class="fas fa-tint-slash"&gt;&lt;/i&gt;</td><td>f5c7</td></tr>
 <tr><td><i class="fas fa-tired" style="font-size: 20px;"></i> tired</td><td>&lt;i class="fas fa-tired"&gt;&lt;/i&gt;</td><td>f5c8</td></tr>
 <tr><td><i class="fas fa-toggle-off" style="font-size: 20px;"></i> toggle-off</td><td>&lt;i class="fas fa-toggle-off"&gt;&lt;/i&gt;</td><td>f204</td></tr>
 <tr><td><i class="fas fa-toggle-on" style="font-size: 20px;"></i> toggle-on</td><td>&lt;i class="fas fa-toggle-on"&gt;&lt;/i&gt;</td><td>f205</td></tr>
 <tr><td><i class="fas fa-toilet" style="font-size: 20px;"></i> toilet</td><td>&lt;i class="fas fa-toilet"&gt;&lt;/i&gt;</td><td>f7d8</td></tr>
 <tr><td><i class="fas fa-toilet-paper" style="font-size: 20px;"></i> toilet-paper</td><td>&lt;i class="fas fa-toilet-paper"&gt;&lt;/i&gt;</td><td>f71e</td></tr>
 <tr><td><i class="fas fa-toolbox" style="font-size: 20px;"></i> toolbox</td><td>&lt;i class="fas fa-toolbox"&gt;&lt;/i&gt;</td><td>f552</td></tr>
 <tr><td><i class="fas fa-tools" style="font-size: 20px;"></i> tools</td><td>&lt;i class="fas fa-tools"&gt;&lt;/i&gt;</td><td>f7d9</td></tr>
 <tr><td><i class="fas fa-tooth" style="font-size: 20px;"></i> tooth</td><td>&lt;i class="fas fa-tooth"&gt;&lt;/i&gt;</td><td>f5c9</td></tr>
 <tr><td><i class="fas fa-torah" style="font-size: 20px;"></i> torah</td><td>&lt;i class="fas fa-torah"&gt;&lt;/i&gt;</td><td>f6a0</td></tr>
 <tr><td><i class="fas fa-torii-gate" style="font-size: 20px;"></i> torii-gate</td><td>&lt;i class="fas fa-torii-gate"&gt;&lt;/i&gt;</td><td>f6a1</td></tr>
 <tr><td><i class="fas fa-tractor" style="font-size: 20px;"></i> tractor</td><td>&lt;i class="fas fa-tractor"&gt;&lt;/i&gt;</td><td>f722</td></tr>
 <tr><td><i class="fas fa-trademark" style="font-size: 20px;"></i> trademark</td><td>&lt;i class="fas fa-trademark"&gt;&lt;/i&gt;</td><td>f25c</td></tr>
 <tr><td><i class="fas fa-traffic-light" style="font-size: 20px;"></i> traffic-light</td><td>&lt;i class="fas fa-traffic-light"&gt;&lt;/i&gt;</td><td>f637</td></tr>
 <tr><td><i class="fas fa-train" style="font-size: 20px;"></i> train</td><td>&lt;i class="fas fa-train"&gt;&lt;/i&gt;</td><td>f238</td></tr>
 <tr><td><i class="fas fa-tram" style="font-size: 20px;"></i> tram</td><td>&lt;i class="fas fa-tram"&gt;&lt;/i&gt;</td><td>f7da</td></tr>
 <tr><td><i class="fas fa-transgender" style="font-size: 20px;"></i> transgender</td><td>&lt;i class="fas fa-transgender"&gt;&lt;/i&gt;</td><td>f224</td></tr>
 <tr><td><i class="fas fa-transgender-alt" style="font-size: 20px;"></i> transgender-alt</td><td>&lt;i class="fas fa-transgender-alt"&gt;&lt;/i&gt;</td><td>f225</td></tr>
 <tr><td><i class="fas fa-trash" style="font-size: 20px;"></i> trash</td><td>&lt;i class="fas fa-trash"&gt;&lt;/i&gt;</td><td>f1f8</td></tr>
 <tr><td><i class="fas fa-trash-alt" style="font-size: 20px;"></i> trash-alt</td><td>&lt;i class="fas fa-trash-alt"&gt;&lt;/i&gt;</td><td>f2ed</td></tr>
 <tr><td><i class="fas fa-trash-restore" style="font-size: 20px;"></i> trash-restore</td><td>&lt;i class="fas fa-trash-restore"&gt;&lt;/i&gt;</td><td>f829</td></tr>
 <tr><td><i class="fas fa-trash-restore-alt" style="font-size: 20px;"></i> trash-restore-alt</td><td>&lt;i class="fas fa-trash-restore-alt"&gt;&lt;/i&gt;</td><td>f82a</td></tr>
 <tr><td><i class="fas fa-tree" style="font-size: 20px;"></i> tree</td><td>&lt;i class="fas fa-tree"&gt;&lt;/i&gt;</td><td>f1bb</td></tr>
 <tr><td><i class="fas fa-trophy" style="font-size: 20px;"></i> trophy</td><td>&lt;i class="fas fa-trophy"&gt;&lt;/i&gt;</td><td>f091</td></tr>
 <tr><td><i class="fas fa-truck" style="font-size: 20px;"></i> truck</td><td>&lt;i class="fas fa-truck"&gt;&lt;/i&gt;</td><td>f0d1</td></tr>
 <tr><td><i class="fas fa-truck-loading" style="font-size: 20px;"></i> truck-loading</td><td>&lt;i class="fas fa-truck-loading"&gt;&lt;/i&gt;</td><td>f4de</td></tr>
 <tr><td><i class="fas fa-truck-monster" style="font-size: 20px;"></i> truck-monster</td><td>&lt;i class="fas fa-truck-monster"&gt;&lt;/i&gt;</td><td>f63b</td></tr>
 <tr><td><i class="fas fa-truck-moving" style="font-size: 20px;"></i> truck-moving</td><td>&lt;i class="fas fa-truck-moving"&gt;&lt;/i&gt;</td><td>f4df</td></tr>
 <tr><td><i class="fas fa-truck-pickup" style="font-size: 20px;"></i> truck-pickup</td><td>&lt;i class="fas fa-truck-pickup"&gt;&lt;/i&gt;</td><td>f63c</td></tr>
 <tr><td><i class="fas fa-tshirt" style="font-size: 20px;"></i> tshirt</td><td>&lt;i class="fas fa-tshirt"&gt;&lt;/i&gt;</td><td>f553</td></tr>
 <tr><td><i class="fas fa-tty" style="font-size: 20px;"></i> tty</td><td>&lt;i class="fas fa-tty"&gt;&lt;/i&gt;</td><td>f1e4</td></tr>
 <tr><td><i class="fas fa-tv" style="font-size: 20px;"></i> tv</td><td>&lt;i class="fas fa-tv"&gt;&lt;/i&gt;</td><td>f26c</td></tr>
 <tr><td><i class="fas fa-umbrella" style="font-size: 20px;"></i> umbrella</td><td>&lt;i class="fas fa-umbrella"&gt;&lt;/i&gt;</td><td>f0e9</td></tr>
 <tr><td><i class="fas fa-umbrella-beach" style="font-size: 20px;"></i> umbrella-beach</td><td>&lt;i class="fas fa-umbrella-beach"&gt;&lt;/i&gt;</td><td>f5ca</td></tr>
 <tr><td><i class="fas fa-underline" style="font-size: 20px;"></i> underline</td><td>&lt;i class="fas fa-underline"&gt;&lt;/i&gt;</td><td>f0cd</td></tr>
 <tr><td><i class="fas fa-undo" style="font-size: 20px;"></i> undo</td><td>&lt;i class="fas fa-undo"&gt;&lt;/i&gt;</td><td>f0e2</td></tr>
 <tr><td><i class="fas fa-undo-alt" style="font-size: 20px;"></i> undo-alt</td><td>&lt;i class="fas fa-undo-alt"&gt;&lt;/i&gt;</td><td>f2ea</td></tr>
 <tr><td><i class="fas fa-universal-access" style="font-size: 20px;"></i> universal-access</td><td>&lt;i class="fas fa-universal-access"&gt;&lt;/i&gt;</td><td>f29a</td></tr>
 <tr><td><i class="fas fa-university" style="font-size: 20px;"></i> university</td><td>&lt;i class="fas fa-university"&gt;&lt;/i&gt;</td><td>f19c</td></tr>
 <tr><td><i class="fas fa-unlink" style="font-size: 20px;"></i> unlink</td><td>&lt;i class="fas fa-unlink"&gt;&lt;/i&gt;</td><td>f127</td></tr>
 <tr><td><i class="fas fa-unlock" style="font-size: 20px;"></i> unlock</td><td>&lt;i class="fas fa-unlock"&gt;&lt;/i&gt;</td><td>f09c</td></tr>
 <tr><td><i class="fas fa-unlock-alt" style="font-size: 20px;"></i> unlock-alt</td><td>&lt;i class="fas fa-unlock-alt"&gt;&lt;/i&gt;</td><td>f13e</td></tr>
 <tr><td><i class="fas fa-upload" style="font-size: 20px;"></i> upload</td><td>&lt;i class="fas fa-upload"&gt;&lt;/i&gt;</td><td>f093</td></tr>
 <tr><td><i class="fas fa-user" style="font-size: 20px;"></i> user</td><td>&lt;i class="fas fa-user"&gt;&lt;/i&gt;</td><td>f007</td></tr>
 <tr><td><i class="fas fa-user-alt" style="font-size: 20px;"></i> user-alt</td><td>&lt;i class="fas fa-user-alt"&gt;&lt;/i&gt;</td><td>f406</td></tr>
 <tr><td><i class="fas fa-user-alt-slash" style="font-size: 20px;"></i> user-alt-slash</td><td>&lt;i class="fas fa-user-alt-slash"&gt;&lt;/i&gt;</td><td>f4fa</td></tr>
 <tr><td><i class="fas fa-user-astronaut" style="font-size: 20px;"></i> user-astronaut</td><td>&lt;i class="fas fa-user-astronaut"&gt;&lt;/i&gt;</td><td>f4fb</td></tr>
 <tr><td><i class="fas fa-user-check" style="font-size: 20px;"></i> user-check</td><td>&lt;i class="fas fa-user-check"&gt;&lt;/i&gt;</td><td>f4fc</td></tr>
 <tr><td><i class="fas fa-user-circle" style="font-size: 20px;"></i> user-circle</td><td>&lt;i class="fas fa-user-circle"&gt;&lt;/i&gt;</td><td>f2bd</td></tr>
 <tr><td><i class="fas fa-user-clock" style="font-size: 20px;"></i> user-clock</td><td>&lt;i class="fas fa-user-clock"&gt;&lt;/i&gt;</td><td>f4fd</td></tr>
 <tr><td><i class="fas fa-user-cog" style="font-size: 20px;"></i> user-cog</td><td>&lt;i class="fas fa-user-cog"&gt;&lt;/i&gt;</td><td>f4fe</td></tr>
 <tr><td><i class="fas fa-user-edit" style="font-size: 20px;"></i> user-edit</td><td>&lt;i class="fas fa-user-edit"&gt;&lt;/i&gt;</td><td>f4ff</td></tr>
 <tr><td><i class="fas fa-user-friends" style="font-size: 20px;"></i> user-friends</td><td>&lt;i class="fas fa-user-friends"&gt;&lt;/i&gt;</td><td>f500</td></tr>
 <tr><td><i class="fas fa-user-graduate" style="font-size: 20px;"></i> user-graduate</td><td>&lt;i class="fas fa-user-graduate"&gt;&lt;/i&gt;</td><td>f501</td></tr>
 <tr><td><i class="fas fa-user-injured" style="font-size: 20px;"></i> user-injured</td><td>&lt;i class="fas fa-user-injured"&gt;&lt;/i&gt;</td><td>f728</td></tr>
 <tr><td><i class="fas fa-user-lock" style="font-size: 20px;"></i> user-lock</td><td>&lt;i class="fas fa-user-lock"&gt;&lt;/i&gt;</td><td>f502</td></tr>
 <tr><td><i class="fas fa-user-md" style="font-size: 20px;"></i> user-md</td><td>&lt;i class="fas fa-user-md"&gt;&lt;/i&gt;</td><td>f0f0</td></tr>
 <tr><td><i class="fas fa-user-minus" style="font-size: 20px;"></i> user-minus</td><td>&lt;i class="fas fa-user-minus"&gt;&lt;/i&gt;</td><td>f503</td></tr>
 <tr><td><i class="fas fa-user-ninja" style="font-size: 20px;"></i> user-ninja</td><td>&lt;i class="fas fa-user-ninja"&gt;&lt;/i&gt;</td><td>f504</td></tr>
 <tr><td><i class="fas fa-user-nurse" style="font-size: 20px;"></i> user-nurse</td><td>&lt;i class="fas fa-user-nurse"&gt;&lt;/i&gt;</td><td>f82f</td></tr>
 <tr><td><i class="fas fa-user-plus" style="font-size: 20px;"></i> user-plus</td><td>&lt;i class="fas fa-user-plus"&gt;&lt;/i&gt;</td><td>f234</td></tr>
 <tr><td><i class="fas fa-user-secret" style="font-size: 20px;"></i> user-secret</td><td>&lt;i class="fas fa-user-secret"&gt;&lt;/i&gt;</td><td>f21b</td></tr>
 <tr><td><i class="fas fa-user-shield" style="font-size: 20px;"></i> user-shield</td><td>&lt;i class="fas fa-user-shield"&gt;&lt;/i&gt;</td><td>f505</td></tr>
 <tr><td><i class="fas fa-user-slash" style="font-size: 20px;"></i> user-slash</td><td>&lt;i class="fas fa-user-slash"&gt;&lt;/i&gt;</td><td>f506</td></tr>
 <tr><td><i class="fas fa-user-tag" style="font-size: 20px;"></i> user-tag</td><td>&lt;i class="fas fa-user-tag"&gt;&lt;/i&gt;</td><td>f507</td></tr>
 <tr><td><i class="fas fa-user-tie" style="font-size: 20px;"></i> user-tie</td><td>&lt;i class="fas fa-user-tie"&gt;&lt;/i&gt;</td><td>f508</td></tr>
 <tr><td><i class="fas fa-user-times" style="font-size: 20px;"></i> user-times</td><td>&lt;i class="fas fa-user-times"&gt;&lt;/i&gt;</td><td>f235</td></tr>
 <tr><td><i class="fas fa-users" style="font-size: 20px;"></i> users</td><td>&lt;i class="fas fa-users"&gt;&lt;/i&gt;</td><td>f0c0</td></tr>
 <tr><td><i class="fas fa-users-cog" style="font-size: 20px;"></i> users-cog</td><td>&lt;i class="fas fa-users-cog"&gt;&lt;/i&gt;</td><td>f509</td></tr>
 <tr><td><i class="fas fa-utensil-spoon" style="font-size: 20px;"></i> utensil-spoon</td><td>&lt;i class="fas fa-utensil-spoon"&gt;&lt;/i&gt;</td><td>f2e5</td></tr>
 <tr><td><i class="fas fa-utensils" style="font-size: 20px;"></i> utensils</td><td>&lt;i class="fas fa-utensils"&gt;&lt;/i&gt;</td><td>f2e7</td></tr>
 <tr><td><i class="fas fa-vector-square" style="font-size: 20px;"></i> vector-square</td><td>&lt;i class="fas fa-vector-square"&gt;&lt;/i&gt;</td><td>f5cb</td></tr>
 <tr><td><i class="fas fa-venus" style="font-size: 20px;"></i> venus</td><td>&lt;i class="fas fa-venus"&gt;&lt;/i&gt;</td><td>f221</td></tr>
 <tr><td><i class="fas fa-venus-double" style="font-size: 20px;"></i> venus-double</td><td>&lt;i class="fas fa-venus-double"&gt;&lt;/i&gt;</td><td>f226</td></tr>
 <tr><td><i class="fas fa-venus-mars" style="font-size: 20px;"></i> venus-mars</td><td>&lt;i class="fas fa-venus-mars"&gt;&lt;/i&gt;</td><td>f228</td></tr>
 <tr><td><i class="fas fa-vial" style="font-size: 20px;"></i> vial</td><td>&lt;i class="fas fa-vial"&gt;&lt;/i&gt;</td><td>f492</td></tr>
 <tr><td><i class="fas fa-vials" style="font-size: 20px;"></i> vials</td><td>&lt;i class="fas fa-vials"&gt;&lt;/i&gt;</td><td>f493</td></tr>
 <tr><td><i class="fas fa-video" style="font-size: 20px;"></i> video</td><td>&lt;i class="fas fa-video"&gt;&lt;/i&gt;</td><td>f03d</td></tr>
 <tr><td><i class="fas fa-video-slash" style="font-size: 20px;"></i> video-slash</td><td>&lt;i class="fas fa-video-slash"&gt;&lt;/i&gt;</td><td>f4e2</td></tr>
 <tr><td><i class="fas fa-vihara" style="font-size: 20px;"></i> vihara</td><td>&lt;i class="fas fa-vihara"&gt;&lt;/i&gt;</td><td>f6a7</td></tr>
 <tr><td><i class="fas fa-voicemail" style="font-size: 20px;"></i> voicemail</td><td>&lt;i class="fas fa-voicemail"&gt;&lt;/i&gt;</td><td>f897</td></tr>
 <tr><td><i class="fas fa-volleyball-ball" style="font-size: 20px;"></i> volleyball-ball</td><td>&lt;i class="fas fa-volleyball-ball"&gt;&lt;/i&gt;</td><td>f45f</td></tr>
 <tr><td><i class="fas fa-volume-down" style="font-size: 20px;"></i> volume-down</td><td>&lt;i class="fas fa-volume-down"&gt;&lt;/i&gt;</td><td>f027</td></tr>
 <tr><td><i class="fas fa-volume-mute" style="font-size: 20px;"></i> volume-mute</td><td>&lt;i class="fas fa-volume-mute"&gt;&lt;/i&gt;</td><td>f6a9</td></tr>
 <tr><td><i class="fas fa-volume-off" style="font-size: 20px;"></i> volume-off</td><td>&lt;i class="fas fa-volume-off"&gt;&lt;/i&gt;</td><td>f026</td></tr>
 <tr><td><i class="fas fa-volume-up" style="font-size: 20px;"></i> volume-up</td><td>&lt;i class="fas fa-volume-up"&gt;&lt;/i&gt;</td><td>f028</td></tr>
 <tr><td><i class="fas fa-vote-yea" style="font-size: 20px;"></i> vote-yea</td><td>&lt;i class="fas fa-vote-yea"&gt;&lt;/i&gt;</td><td>f772</td></tr>
 <tr><td><i class="fas fa-vr-cardboard" style="font-size: 20px;"></i> vr-cardboard</td><td>&lt;i class="fas fa-vr-cardboard"&gt;&lt;/i&gt;</td><td>f729</td></tr>
 <tr><td><i class="fas fa-walking" style="font-size: 20px;"></i> walking</td><td>&lt;i class="fas fa-walking"&gt;&lt;/i&gt;</td><td>f554</td></tr>
 <tr><td><i class="fas fa-wallet" style="font-size: 20px;"></i> wallet</td><td>&lt;i class="fas fa-wallet"&gt;&lt;/i&gt;</td><td>f555</td></tr>
 <tr><td><i class="fas fa-warehouse" style="font-size: 20px;"></i> warehouse</td><td>&lt;i class="fas fa-warehouse"&gt;&lt;/i&gt;</td><td>f494</td></tr>
 <tr><td><i class="fas fa-water" style="font-size: 20px;"></i> water</td><td>&lt;i class="fas fa-water"&gt;&lt;/i&gt;</td><td>f773</td></tr>
 <tr><td><i class="fas fa-wave-square" style="font-size: 20px;"></i> wave-square</td><td>&lt;i class="fas fa-wave-square"&gt;&lt;/i&gt;</td><td>f83e</td></tr>
 <tr><td><i class="fas fa-weight" style="font-size: 20px;"></i> weight</td><td>&lt;i class="fas fa-weight"&gt;&lt;/i&gt;</td><td>f496</td></tr>
 <tr><td><i class="fas fa-weight-hanging" style="font-size: 20px;"></i> weight-hanging</td><td>&lt;i class="fas fa-weight-hanging"&gt;&lt;/i&gt;</td><td>f5cd</td></tr>
 <tr><td><i class="fas fa-wheelchair" style="font-size: 20px;"></i> wheelchair</td><td>&lt;i class="fas fa-wheelchair"&gt;&lt;/i&gt;</td><td>f193</td></tr>
 <tr><td><i class="fas fa-wifi" style="font-size: 20px;"></i> wifi</td><td>&lt;i class="fas fa-wifi"&gt;&lt;/i&gt;</td><td>f1eb</td></tr>
 <tr><td><i class="fas fa-wind" style="font-size: 20px;"></i> wind</td><td>&lt;i class="fas fa-wind"&gt;&lt;/i&gt;</td><td>f72e</td></tr>
 <tr><td><i class="fas fa-window-close" style="font-size: 20px;"></i> window-close</td><td>&lt;i class="fas fa-window-close"&gt;&lt;/i&gt;</td><td>f410</td></tr>
 <tr><td><i class="fas fa-window-maximize" style="font-size: 20px;"></i> window-maximize</td><td>&lt;i class="fas fa-window-maximize"&gt;&lt;/i&gt;</td><td>f2d0</td></tr>
 <tr><td><i class="fas fa-window-minimize" style="font-size: 20px;"></i> window-minimize</td><td>&lt;i class="fas fa-window-minimize"&gt;&lt;/i&gt;</td><td>f2d1</td></tr>
 <tr><td><i class="fas fa-window-restore" style="font-size: 20px;"></i> window-restore</td><td>&lt;i class="fas fa-window-restore"&gt;&lt;/i&gt;</td><td>f2d2</td></tr>
 <tr><td><i class="fas fa-wine-bottle" style="font-size: 20px;"></i> wine-bottle</td><td>&lt;i class="fas fa-wine-bottle"&gt;&lt;/i&gt;</td><td>f72f</td></tr>
 <tr><td><i class="fas fa-wine-glass" style="font-size: 20px;"></i> wine-glass</td><td>&lt;i class="fas fa-wine-glass"&gt;&lt;/i&gt;</td><td>f4e3</td></tr>
 <tr><td><i class="fas fa-wine-glass-alt" style="font-size: 20px;"></i> wine-glass-alt</td><td>&lt;i class="fas fa-wine-glass-alt"&gt;&lt;/i&gt;</td><td>f5ce</td></tr>
 <tr><td><i class="fas fa-won-sign" style="font-size: 20px;"></i> won-sign</td><td>&lt;i class="fas fa-won-sign"&gt;&lt;/i&gt;</td><td>f159</td></tr>
 <tr><td><i class="fas fa-wrench" style="font-size: 20px;"></i> wrench</td><td>&lt;i class="fas fa-wrench"&gt;&lt;/i&gt;</td><td>f0ad</td></tr>
 <tr><td><i class="fas fa-x-ray" style="font-size: 20px;"></i> x-ray</td><td>&lt;i class="fas fa-x-ray"&gt;&lt;/i&gt;</td><td>f497</td></tr>
 <tr><td><i class="fas fa-yen-sign" style="font-size: 20px;"></i> yen-sign</td><td>&lt;i class="fas fa-yen-sign"&gt;&lt;/i&gt;</td><td>f157</td></tr>
 <tr><td><i class="fas fa-yin-yang" style="font-size: 20px;"></i> yin-yang</td><td>&lt;i class="fas fa-yin-yang"&gt;&lt;/i&gt;</td><td>f6ad</td></tr>
</table>

</div>

## Font Awesome Icons List - Regular Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>font awesome icon name</th>
<th>font awesome icon  HTML code</th>
<th>font awesome icon CSS content code</th>
</tr>
 <tr><td><i class="far fa-address-book" style="font-size: 20px;"></i> address-book</td><td>&lt;i class="far fa-address-book"&gt;&lt;/i&gt;</td><td>f2b9</td></tr>
 <tr><td><i class="far fa-address-card" style="font-size: 20px;"></i> address-card</td><td>&lt;i class="far fa-address-card"&gt;&lt;/i&gt;</td><td>f2bb</td></tr>
 <tr><td><i class="far fa-angry" style="font-size: 20px;"></i> angry</td><td>&lt;i class="far fa-angry"&gt;&lt;/i&gt;</td><td>f556</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-down" style="font-size: 20px;"></i> arrow-alt-circle-down</td><td>&lt;i class="far fa-arrow-alt-circle-down"&gt;&lt;/i&gt;</td><td>f358</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-left" style="font-size: 20px;"></i> arrow-alt-circle-left</td><td>&lt;i class="far fa-arrow-alt-circle-left"&gt;&lt;/i&gt;</td><td>f359</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-right" style="font-size: 20px;"></i> arrow-alt-circle-right</td><td>&lt;i class="far fa-arrow-alt-circle-right"&gt;&lt;/i&gt;</td><td>f35a</td></tr>
 <tr><td><i class="far fa-arrow-alt-circle-up" style="font-size: 20px;"></i> arrow-alt-circle-up</td><td>&lt;i class="far fa-arrow-alt-circle-up"&gt;&lt;/i&gt;</td><td>f35b</td></tr>
 <tr><td><i class="far fa-bell" style="font-size: 20px;"></i> bell</td><td>&lt;i class="far fa-bell"&gt;&lt;/i&gt;</td><td>f0f3</td></tr>
 <tr><td><i class="far fa-bell-slash" style="font-size: 20px;"></i> bell-slash</td><td>&lt;i class="far fa-bell-slash"&gt;&lt;/i&gt;</td><td>f1f6</td></tr>
 <tr><td><i class="far fa-bookmark" style="font-size: 20px;"></i> bookmark</td><td>&lt;i class="far fa-bookmark"&gt;&lt;/i&gt;</td><td>f02e</td></tr>
 <tr><td><i class="far fa-building" style="font-size: 20px;"></i> building</td><td>&lt;i class="far fa-building"&gt;&lt;/i&gt;</td><td>f1ad</td></tr>
 <tr><td><i class="far fa-calendar" style="font-size: 20px;"></i> calendar</td><td>&lt;i class="far fa-calendar"&gt;&lt;/i&gt;</td><td>f133</td></tr>
 <tr><td><i class="far fa-calendar-alt" style="font-size: 20px;"></i> calendar-alt</td><td>&lt;i class="far fa-calendar-alt"&gt;&lt;/i&gt;</td><td>f073</td></tr>
 <tr><td><i class="far fa-calendar-check" style="font-size: 20px;"></i> calendar-check</td><td>&lt;i class="far fa-calendar-check"&gt;&lt;/i&gt;</td><td>f274</td></tr>
 <tr><td><i class="far fa-calendar-minus" style="font-size: 20px;"></i> calendar-minus</td><td>&lt;i class="far fa-calendar-minus"&gt;&lt;/i&gt;</td><td>f272</td></tr>
 <tr><td><i class="far fa-calendar-plus" style="font-size: 20px;"></i> calendar-plus</td><td>&lt;i class="far fa-calendar-plus"&gt;&lt;/i&gt;</td><td>f271</td></tr>
 <tr><td><i class="far fa-calendar-times" style="font-size: 20px;"></i> calendar-times</td><td>&lt;i class="far fa-calendar-times"&gt;&lt;/i&gt;</td><td>f273</td></tr>
 <tr><td><i class="far fa-caret-square-down" style="font-size: 20px;"></i> caret-square-down</td><td>&lt;i class="far fa-caret-square-down"&gt;&lt;/i&gt;</td><td>f150</td></tr>
 <tr><td><i class="far fa-caret-square-left" style="font-size: 20px;"></i> caret-square-left</td><td>&lt;i class="far fa-caret-square-left"&gt;&lt;/i&gt;</td><td>f191</td></tr>
 <tr><td><i class="far fa-caret-square-right" style="font-size: 20px;"></i> caret-square-right</td><td>&lt;i class="far fa-caret-square-right"&gt;&lt;/i&gt;</td><td>f152</td></tr>
 <tr><td><i class="far fa-caret-square-up" style="font-size: 20px;"></i> caret-square-up</td><td>&lt;i class="far fa-caret-square-up"&gt;&lt;/i&gt;</td><td>f151</td></tr>
 <tr><td><i class="far fa-chart-bar" style="font-size: 20px;"></i> chart-bar</td><td>&lt;i class="far fa-chart-bar"&gt;&lt;/i&gt;</td><td>f080</td></tr>
 <tr><td><i class="far fa-check-circle" style="font-size: 20px;"></i> check-circle</td><td>&lt;i class="far fa-check-circle"&gt;&lt;/i&gt;</td><td>f058</td></tr>
 <tr><td><i class="far fa-check-square" style="font-size: 20px;"></i> check-square</td><td>&lt;i class="far fa-check-square"&gt;&lt;/i&gt;</td><td>f14a</td></tr>
 <tr><td><i class="far fa-circle" style="font-size: 20px;"></i> circle</td><td>&lt;i class="far fa-circle"&gt;&lt;/i&gt;</td><td>f111</td></tr>
 <tr><td><i class="far fa-clipboard" style="font-size: 20px;"></i> clipboard</td><td>&lt;i class="far fa-clipboard"&gt;&lt;/i&gt;</td><td>f328</td></tr>
 <tr><td><i class="far fa-clock" style="font-size: 20px;"></i> clock</td><td>&lt;i class="far fa-clock"&gt;&lt;/i&gt;</td><td>f017</td></tr>
 <tr><td><i class="far fa-clone" style="font-size: 20px;"></i> clone</td><td>&lt;i class="far fa-clone"&gt;&lt;/i&gt;</td><td>f24d</td></tr>
 <tr><td><i class="far fa-closed-captioning" style="font-size: 20px;"></i> closed-captioning</td><td>&lt;i class="far fa-closed-captioning"&gt;&lt;/i&gt;</td><td>f20a</td></tr>
 <tr><td><i class="far fa-comment" style="font-size: 20px;"></i> comment</td><td>&lt;i class="far fa-comment"&gt;&lt;/i&gt;</td><td>f075</td></tr>
 <tr><td><i class="far fa-comment-alt" style="font-size: 20px;"></i> comment-alt</td><td>&lt;i class="far fa-comment-alt"&gt;&lt;/i&gt;</td><td>f27a</td></tr>
 <tr><td><i class="far fa-comment-dots" style="font-size: 20px;"></i> comment-dots</td><td>&lt;i class="far fa-comment-dots"&gt;&lt;/i&gt;</td><td>f4ad</td></tr>
 <tr><td><i class="far fa-comments" style="font-size: 20px;"></i> comments</td><td>&lt;i class="far fa-comments"&gt;&lt;/i&gt;</td><td>f086</td></tr>
 <tr><td><i class="far fa-compass" style="font-size: 20px;"></i> compass</td><td>&lt;i class="far fa-compass"&gt;&lt;/i&gt;</td><td>f14e</td></tr>
 <tr><td><i class="far fa-copy" style="font-size: 20px;"></i> copy</td><td>&lt;i class="far fa-copy"&gt;&lt;/i&gt;</td><td>f0c5</td></tr>
 <tr><td><i class="far fa-copyright" style="font-size: 20px;"></i> copyright</td><td>&lt;i class="far fa-copyright"&gt;&lt;/i&gt;</td><td>f1f9</td></tr>
 <tr><td><i class="far fa-credit-card" style="font-size: 20px;"></i> credit-card</td><td>&lt;i class="far fa-credit-card"&gt;&lt;/i&gt;</td><td>f09d</td></tr>
 <tr><td><i class="far fa-dizzy" style="font-size: 20px;"></i> dizzy</td><td>&lt;i class="far fa-dizzy"&gt;&lt;/i&gt;</td><td>f567</td></tr>
 <tr><td><i class="far fa-dot-circle" style="font-size: 20px;"></i> dot-circle</td><td>&lt;i class="far fa-dot-circle"&gt;&lt;/i&gt;</td><td>f192</td></tr>
 <tr><td><i class="far fa-edit" style="font-size: 20px;"></i> edit</td><td>&lt;i class="far fa-edit"&gt;&lt;/i&gt;</td><td>f044</td></tr>
 <tr><td><i class="far fa-envelope" style="font-size: 20px;"></i> envelope</td><td>&lt;i class="far fa-envelope"&gt;&lt;/i&gt;</td><td>f0e0</td></tr>
 <tr><td><i class="far fa-envelope-open" style="font-size: 20px;"></i> envelope-open</td><td>&lt;i class="far fa-envelope-open"&gt;&lt;/i&gt;</td><td>f2b6</td></tr>
 <tr><td><i class="far fa-eye" style="font-size: 20px;"></i> eye</td><td>&lt;i class="far fa-eye"&gt;&lt;/i&gt;</td><td>f06e</td></tr>
 <tr><td><i class="far fa-eye-slash" style="font-size: 20px;"></i> eye-slash</td><td>&lt;i class="far fa-eye-slash"&gt;&lt;/i&gt;</td><td>f070</td></tr>
 <tr><td><i class="far fa-file" style="font-size: 20px;"></i> file</td><td>&lt;i class="far fa-file"&gt;&lt;/i&gt;</td><td>f15b</td></tr>
 <tr><td><i class="far fa-file-alt" style="font-size: 20px;"></i> file-alt</td><td>&lt;i class="far fa-file-alt"&gt;&lt;/i&gt;</td><td>f15c</td></tr>
 <tr><td><i class="far fa-file-archive" style="font-size: 20px;"></i> file-archive</td><td>&lt;i class="far fa-file-archive"&gt;&lt;/i&gt;</td><td>f1c6</td></tr>
 <tr><td><i class="far fa-file-audio" style="font-size: 20px;"></i> file-audio</td><td>&lt;i class="far fa-file-audio"&gt;&lt;/i&gt;</td><td>f1c7</td></tr>
 <tr><td><i class="far fa-file-code" style="font-size: 20px;"></i> file-code</td><td>&lt;i class="far fa-file-code"&gt;&lt;/i&gt;</td><td>f1c9</td></tr>
 <tr><td><i class="far fa-file-excel" style="font-size: 20px;"></i> file-excel</td><td>&lt;i class="far fa-file-excel"&gt;&lt;/i&gt;</td><td>f1c3</td></tr>
 <tr><td><i class="far fa-file-image" style="font-size: 20px;"></i> file-image</td><td>&lt;i class="far fa-file-image"&gt;&lt;/i&gt;</td><td>f1c5</td></tr>
 <tr><td><i class="far fa-file-pdf" style="font-size: 20px;"></i> file-pdf</td><td>&lt;i class="far fa-file-pdf"&gt;&lt;/i&gt;</td><td>f1c1</td></tr>
 <tr><td><i class="far fa-file-powerpoint" style="font-size: 20px;"></i> file-powerpoint</td><td>&lt;i class="far fa-file-powerpoint"&gt;&lt;/i&gt;</td><td>f1c4</td></tr>
 <tr><td><i class="far fa-file-video" style="font-size: 20px;"></i> file-video</td><td>&lt;i class="far fa-file-video"&gt;&lt;/i&gt;</td><td>f1c8</td></tr>
 <tr><td><i class="far fa-file-word" style="font-size: 20px;"></i> file-word</td><td>&lt;i class="far fa-file-word"&gt;&lt;/i&gt;</td><td>f1c2</td></tr>
 <tr><td><i class="far fa-flag" style="font-size: 20px;"></i> flag</td><td>&lt;i class="far fa-flag"&gt;&lt;/i&gt;</td><td>f024</td></tr>
 <tr><td><i class="far fa-flushed" style="font-size: 20px;"></i> flushed</td><td>&lt;i class="far fa-flushed"&gt;&lt;/i&gt;</td><td>f579</td></tr>
 <tr><td><i class="far fa-folder" style="font-size: 20px;"></i> folder</td><td>&lt;i class="far fa-folder"&gt;&lt;/i&gt;</td><td>f07b</td></tr>
 <tr><td><i class="far fa-folder-open" style="font-size: 20px;"></i> folder-open</td><td>&lt;i class="far fa-folder-open"&gt;&lt;/i&gt;</td><td>f07c</td></tr>
 <tr><td><i class="far fa-frown" style="font-size: 20px;"></i> frown</td><td>&lt;i class="far fa-frown"&gt;&lt;/i&gt;</td><td>f119</td></tr>
 <tr><td><i class="far fa-frown-open" style="font-size: 20px;"></i> frown-open</td><td>&lt;i class="far fa-frown-open"&gt;&lt;/i&gt;</td><td>f57a</td></tr>
 <tr><td><i class="far fa-futbol" style="font-size: 20px;"></i> futbol</td><td>&lt;i class="far fa-futbol"&gt;&lt;/i&gt;</td><td>f1e3</td></tr>
 <tr><td><i class="far fa-gem" style="font-size: 20px;"></i> gem</td><td>&lt;i class="far fa-gem"&gt;&lt;/i&gt;</td><td>f3a5</td></tr>
 <tr><td><i class="far fa-grimace" style="font-size: 20px;"></i> grimace</td><td>&lt;i class="far fa-grimace"&gt;&lt;/i&gt;</td><td>f57f</td></tr>
 <tr><td><i class="far fa-grin" style="font-size: 20px;"></i> grin</td><td>&lt;i class="far fa-grin"&gt;&lt;/i&gt;</td><td>f580</td></tr>
 <tr><td><i class="far fa-grin-alt" style="font-size: 20px;"></i> grin-alt</td><td>&lt;i class="far fa-grin-alt"&gt;&lt;/i&gt;</td><td>f581</td></tr>
 <tr><td><i class="far fa-grin-beam" style="font-size: 20px;"></i> grin-beam</td><td>&lt;i class="far fa-grin-beam"&gt;&lt;/i&gt;</td><td>f582</td></tr>
 <tr><td><i class="far fa-grin-beam-sweat" style="font-size: 20px;"></i> grin-beam-sweat</td><td>&lt;i class="far fa-grin-beam-sweat"&gt;&lt;/i&gt;</td><td>f583</td></tr>
 <tr><td><i class="far fa-grin-hearts" style="font-size: 20px;"></i> grin-hearts</td><td>&lt;i class="far fa-grin-hearts"&gt;&lt;/i&gt;</td><td>f584</td></tr>
 <tr><td><i class="far fa-grin-squint" style="font-size: 20px;"></i> grin-squint</td><td>&lt;i class="far fa-grin-squint"&gt;&lt;/i&gt;</td><td>f585</td></tr>
 <tr><td><i class="far fa-grin-squint-tears" style="font-size: 20px;"></i> grin-squint-tears</td><td>&lt;i class="far fa-grin-squint-tears"&gt;&lt;/i&gt;</td><td>f586</td></tr>
 <tr><td><i class="far fa-grin-stars" style="font-size: 20px;"></i> grin-stars</td><td>&lt;i class="far fa-grin-stars"&gt;&lt;/i&gt;</td><td>f587</td></tr>
 <tr><td><i class="far fa-grin-tears" style="font-size: 20px;"></i> grin-tears</td><td>&lt;i class="far fa-grin-tears"&gt;&lt;/i&gt;</td><td>f588</td></tr>
 <tr><td><i class="far fa-grin-tongue" style="font-size: 20px;"></i> grin-tongue</td><td>&lt;i class="far fa-grin-tongue"&gt;&lt;/i&gt;</td><td>f589</td></tr>
 <tr><td><i class="far fa-grin-tongue-squint" style="font-size: 20px;"></i> grin-tongue-squint</td><td>&lt;i class="far fa-grin-tongue-squint"&gt;&lt;/i&gt;</td><td>f58a</td></tr>
 <tr><td><i class="far fa-grin-tongue-wink" style="font-size: 20px;"></i> grin-tongue-wink</td><td>&lt;i class="far fa-grin-tongue-wink"&gt;&lt;/i&gt;</td><td>f58b</td></tr>
 <tr><td><i class="far fa-grin-wink" style="font-size: 20px;"></i> grin-wink</td><td>&lt;i class="far fa-grin-wink"&gt;&lt;/i&gt;</td><td>f58c</td></tr>
 <tr><td><i class="far fa-hand-lizard" style="font-size: 20px;"></i> hand-lizard</td><td>&lt;i class="far fa-hand-lizard"&gt;&lt;/i&gt;</td><td>f258</td></tr>
 <tr><td><i class="far fa-hand-paper" style="font-size: 20px;"></i> hand-paper</td><td>&lt;i class="far fa-hand-paper"&gt;&lt;/i&gt;</td><td>f256</td></tr>
 <tr><td><i class="far fa-hand-peace" style="font-size: 20px;"></i> hand-peace</td><td>&lt;i class="far fa-hand-peace"&gt;&lt;/i&gt;</td><td>f25b</td></tr>
 <tr><td><i class="far fa-hand-point-down" style="font-size: 20px;"></i> hand-point-down</td><td>&lt;i class="far fa-hand-point-down"&gt;&lt;/i&gt;</td><td>f0a7</td></tr>
 <tr><td><i class="far fa-hand-point-left" style="font-size: 20px;"></i> hand-point-left</td><td>&lt;i class="far fa-hand-point-left"&gt;&lt;/i&gt;</td><td>f0a5</td></tr>
 <tr><td><i class="far fa-hand-point-right" style="font-size: 20px;"></i> hand-point-right</td><td>&lt;i class="far fa-hand-point-right"&gt;&lt;/i&gt;</td><td>f0a4</td></tr>
 <tr><td><i class="far fa-hand-point-up" style="font-size: 20px;"></i> hand-point-up</td><td>&lt;i class="far fa-hand-point-up"&gt;&lt;/i&gt;</td><td>f0a6</td></tr>
 <tr><td><i class="far fa-hand-pointer" style="font-size: 20px;"></i> hand-pointer</td><td>&lt;i class="far fa-hand-pointer"&gt;&lt;/i&gt;</td><td>f25a</td></tr>
 <tr><td><i class="far fa-hand-rock" style="font-size: 20px;"></i> hand-rock</td><td>&lt;i class="far fa-hand-rock"&gt;&lt;/i&gt;</td><td>f255</td></tr>
 <tr><td><i class="far fa-hand-scissors" style="font-size: 20px;"></i> hand-scissors</td><td>&lt;i class="far fa-hand-scissors"&gt;&lt;/i&gt;</td><td>f257</td></tr>
 <tr><td><i class="far fa-hand-spock" style="font-size: 20px;"></i> hand-spock</td><td>&lt;i class="far fa-hand-spock"&gt;&lt;/i&gt;</td><td>f259</td></tr>
 <tr><td><i class="far fa-handshake" style="font-size: 20px;"></i> handshake</td><td>&lt;i class="far fa-handshake"&gt;&lt;/i&gt;</td><td>f2b5</td></tr>
 <tr><td><i class="far fa-hdd" style="font-size: 20px;"></i> hdd</td><td>&lt;i class="far fa-hdd"&gt;&lt;/i&gt;</td><td>f0a0</td></tr>
 <tr><td><i class="far fa-heart" style="font-size: 20px;"></i> heart</td><td>&lt;i class="far fa-heart"&gt;&lt;/i&gt;</td><td>f004</td></tr>
 <tr><td><i class="far fa-hospital" style="font-size: 20px;"></i> hospital</td><td>&lt;i class="far fa-hospital"&gt;&lt;/i&gt;</td><td>f0f8</td></tr>
 <tr><td><i class="far fa-hourglass" style="font-size: 20px;"></i> hourglass</td><td>&lt;i class="far fa-hourglass"&gt;&lt;/i&gt;</td><td>f254</td></tr>
 <tr><td><i class="far fa-id-badge" style="font-size: 20px;"></i> id-badge</td><td>&lt;i class="far fa-id-badge"&gt;&lt;/i&gt;</td><td>f2c1</td></tr>
 <tr><td><i class="far fa-id-card" style="font-size: 20px;"></i> id-card</td><td>&lt;i class="far fa-id-card"&gt;&lt;/i&gt;</td><td>f2c2</td></tr>
 <tr><td><i class="far fa-image" style="font-size: 20px;"></i> image</td><td>&lt;i class="far fa-image"&gt;&lt;/i&gt;</td><td>f03e</td></tr>
 <tr><td><i class="far fa-images" style="font-size: 20px;"></i> images</td><td>&lt;i class="far fa-images"&gt;&lt;/i&gt;</td><td>f302</td></tr>
 <tr><td><i class="far fa-keyboard" style="font-size: 20px;"></i> keyboard</td><td>&lt;i class="far fa-keyboard"&gt;&lt;/i&gt;</td><td>f11c</td></tr>
 <tr><td><i class="far fa-kiss" style="font-size: 20px;"></i> kiss</td><td>&lt;i class="far fa-kiss"&gt;&lt;/i&gt;</td><td>f596</td></tr>
 <tr><td><i class="far fa-kiss-beam" style="font-size: 20px;"></i> kiss-beam</td><td>&lt;i class="far fa-kiss-beam"&gt;&lt;/i&gt;</td><td>f597</td></tr>
 <tr><td><i class="far fa-kiss-wink-heart" style="font-size: 20px;"></i> kiss-wink-heart</td><td>&lt;i class="far fa-kiss-wink-heart"&gt;&lt;/i&gt;</td><td>f598</td></tr>
 <tr><td><i class="far fa-laugh" style="font-size: 20px;"></i> laugh</td><td>&lt;i class="far fa-laugh"&gt;&lt;/i&gt;</td><td>f599</td></tr>
 <tr><td><i class="far fa-laugh-beam" style="font-size: 20px;"></i> laugh-beam</td><td>&lt;i class="far fa-laugh-beam"&gt;&lt;/i&gt;</td><td>f59a</td></tr>
 <tr><td><i class="far fa-laugh-squint" style="font-size: 20px;"></i> laugh-squint</td><td>&lt;i class="far fa-laugh-squint"&gt;&lt;/i&gt;</td><td>f59b</td></tr>
 <tr><td><i class="far fa-laugh-wink" style="font-size: 20px;"></i> laugh-wink</td><td>&lt;i class="far fa-laugh-wink"&gt;&lt;/i&gt;</td><td>f59c</td></tr>
 <tr><td><i class="far fa-lemon" style="font-size: 20px;"></i> lemon</td><td>&lt;i class="far fa-lemon"&gt;&lt;/i&gt;</td><td>f094</td></tr>
 <tr><td><i class="far fa-life-ring" style="font-size: 20px;"></i> life-ring</td><td>&lt;i class="far fa-life-ring"&gt;&lt;/i&gt;</td><td>f1cd</td></tr>
 <tr><td><i class="far fa-lightbulb" style="font-size: 20px;"></i> lightbulb</td><td>&lt;i class="far fa-lightbulb"&gt;&lt;/i&gt;</td><td>f0eb</td></tr>
 <tr><td><i class="far fa-list-alt" style="font-size: 20px;"></i> list-alt</td><td>&lt;i class="far fa-list-alt"&gt;&lt;/i&gt;</td><td>f022</td></tr>
 <tr><td><i class="far fa-map" style="font-size: 20px;"></i> map</td><td>&lt;i class="far fa-map"&gt;&lt;/i&gt;</td><td>f279</td></tr>
 <tr><td><i class="far fa-meh" style="font-size: 20px;"></i> meh</td><td>&lt;i class="far fa-meh"&gt;&lt;/i&gt;</td><td>f11a</td></tr>
 <tr><td><i class="far fa-meh-blank" style="font-size: 20px;"></i> meh-blank</td><td>&lt;i class="far fa-meh-blank"&gt;&lt;/i&gt;</td><td>f5a4</td></tr>
 <tr><td><i class="far fa-meh-rolling-eyes" style="font-size: 20px;"></i> meh-rolling-eyes</td><td>&lt;i class="far fa-meh-rolling-eyes"&gt;&lt;/i&gt;</td><td>f5a5</td></tr>
 <tr><td><i class="far fa-minus-square" style="font-size: 20px;"></i> minus-square</td><td>&lt;i class="far fa-minus-square"&gt;&lt;/i&gt;</td><td>f146</td></tr>
 <tr><td><i class="far fa-money-bill-alt" style="font-size: 20px;"></i> money-bill-alt</td><td>&lt;i class="far fa-money-bill-alt"&gt;&lt;/i&gt;</td><td>f3d1</td></tr>
 <tr><td><i class="far fa-moon" style="font-size: 20px;"></i> moon</td><td>&lt;i class="far fa-moon"&gt;&lt;/i&gt;</td><td>f186</td></tr>
 <tr><td><i class="far fa-newspaper" style="font-size: 20px;"></i> newspaper</td><td>&lt;i class="far fa-newspaper"&gt;&lt;/i&gt;</td><td>f1ea</td></tr>
 <tr><td><i class="far fa-object-group" style="font-size: 20px;"></i> object-group</td><td>&lt;i class="far fa-object-group"&gt;&lt;/i&gt;</td><td>f247</td></tr>
 <tr><td><i class="far fa-object-ungroup" style="font-size: 20px;"></i> object-ungroup</td><td>&lt;i class="far fa-object-ungroup"&gt;&lt;/i&gt;</td><td>f248</td></tr>
 <tr><td><i class="far fa-paper-plane" style="font-size: 20px;"></i> paper-plane</td><td>&lt;i class="far fa-paper-plane"&gt;&lt;/i&gt;</td><td>f1d8</td></tr>
 <tr><td><i class="far fa-pause-circle" style="font-size: 20px;"></i> pause-circle</td><td>&lt;i class="far fa-pause-circle"&gt;&lt;/i&gt;</td><td>f28b</td></tr>
 <tr><td><i class="far fa-play-circle" style="font-size: 20px;"></i> play-circle</td><td>&lt;i class="far fa-play-circle"&gt;&lt;/i&gt;</td><td>f144</td></tr>
 <tr><td><i class="far fa-plus-square" style="font-size: 20px;"></i> plus-square</td><td>&lt;i class="far fa-plus-square"&gt;&lt;/i&gt;</td><td>f0fe</td></tr>
 <tr><td><i class="far fa-question-circle" style="font-size: 20px;"></i> question-circle</td><td>&lt;i class="far fa-question-circle"&gt;&lt;/i&gt;</td><td>f059</td></tr>
 <tr><td><i class="far fa-registered" style="font-size: 20px;"></i> registered</td><td>&lt;i class="far fa-registered"&gt;&lt;/i&gt;</td><td>f25d</td></tr>
 <tr><td><i class="far fa-sad-cry" style="font-size: 20px;"></i> sad-cry</td><td>&lt;i class="far fa-sad-cry"&gt;&lt;/i&gt;</td><td>f5b3</td></tr>
 <tr><td><i class="far fa-sad-tear" style="font-size: 20px;"></i> sad-tear</td><td>&lt;i class="far fa-sad-tear"&gt;&lt;/i&gt;</td><td>f5b4</td></tr>
 <tr><td><i class="far fa-save" style="font-size: 20px;"></i> save</td><td>&lt;i class="far fa-save"&gt;&lt;/i&gt;</td><td>f0c7</td></tr>
 <tr><td><i class="far fa-share-square" style="font-size: 20px;"></i> share-square</td><td>&lt;i class="far fa-share-square"&gt;&lt;/i&gt;</td><td>f14d</td></tr>
 <tr><td><i class="far fa-smile" style="font-size: 20px;"></i> smile</td><td>&lt;i class="far fa-smile"&gt;&lt;/i&gt;</td><td>f118</td></tr>
 <tr><td><i class="far fa-smile-beam" style="font-size: 20px;"></i> smile-beam</td><td>&lt;i class="far fa-smile-beam"&gt;&lt;/i&gt;</td><td>f5b8</td></tr>
 <tr><td><i class="far fa-smile-wink" style="font-size: 20px;"></i> smile-wink</td><td>&lt;i class="far fa-smile-wink"&gt;&lt;/i&gt;</td><td>f4da</td></tr>
 <tr><td><i class="far fa-snowflake" style="font-size: 20px;"></i> snowflake</td><td>&lt;i class="far fa-snowflake"&gt;&lt;/i&gt;</td><td>f2dc</td></tr>
 <tr><td><i class="far fa-square" style="font-size: 20px;"></i> square</td><td>&lt;i class="far fa-square"&gt;&lt;/i&gt;</td><td>f0c8</td></tr>
 <tr><td><i class="far fa-star" style="font-size: 20px;"></i> star</td><td>&lt;i class="far fa-star"&gt;&lt;/i&gt;</td><td>f005</td></tr>
 <tr><td><i class="far fa-star-half" style="font-size: 20px;"></i> star-half</td><td>&lt;i class="far fa-star-half"&gt;&lt;/i&gt;</td><td>f089</td></tr>
 <tr><td><i class="far fa-sticky-note" style="font-size: 20px;"></i> sticky-note</td><td>&lt;i class="far fa-sticky-note"&gt;&lt;/i&gt;</td><td>f249</td></tr>
 <tr><td><i class="far fa-stop-circle" style="font-size: 20px;"></i> stop-circle</td><td>&lt;i class="far fa-stop-circle"&gt;&lt;/i&gt;</td><td>f28d</td></tr>
 <tr><td><i class="far fa-sun" style="font-size: 20px;"></i> sun</td><td>&lt;i class="far fa-sun"&gt;&lt;/i&gt;</td><td>f185</td></tr>
 <tr><td><i class="far fa-surprise" style="font-size: 20px;"></i> surprise</td><td>&lt;i class="far fa-surprise"&gt;&lt;/i&gt;</td><td>f5c2</td></tr>
 <tr><td><i class="far fa-thumbs-down" style="font-size: 20px;"></i> thumbs-down</td><td>&lt;i class="far fa-thumbs-down"&gt;&lt;/i&gt;</td><td>f165</td></tr>
 <tr><td><i class="far fa-thumbs-up" style="font-size: 20px;"></i> thumbs-up</td><td>&lt;i class="far fa-thumbs-up"&gt;&lt;/i&gt;</td><td>f164</td></tr>
 <tr><td><i class="far fa-times-circle" style="font-size: 20px;"></i> times-circle</td><td>&lt;i class="far fa-times-circle"&gt;&lt;/i&gt;</td><td>f057</td></tr>
 <tr><td><i class="far fa-tired" style="font-size: 20px;"></i> tired</td><td>&lt;i class="far fa-tired"&gt;&lt;/i&gt;</td><td>f5c8</td></tr>
 <tr><td><i class="far fa-trash-alt" style="font-size: 20px;"></i> trash-alt</td><td>&lt;i class="far fa-trash-alt"&gt;&lt;/i&gt;</td><td>f2ed</td></tr>
 <tr><td><i class="far fa-user" style="font-size: 20px;"></i> user</td><td>&lt;i class="far fa-user"&gt;&lt;/i&gt;</td><td>f007</td></tr>
 <tr><td><i class="far fa-user-circle" style="font-size: 20px;"></i> user-circle</td><td>&lt;i class="far fa-user-circle"&gt;&lt;/i&gt;</td><td>f2bd</td></tr>
 <tr><td><i class="far fa-window-close" style="font-size: 20px;"></i> window-close</td><td>&lt;i class="far fa-window-close"&gt;&lt;/i&gt;</td><td>f410</td></tr>
 <tr><td><i class="far fa-window-maximize" style="font-size: 20px;"></i> window-maximize</td><td>&lt;i class="far fa-window-maximize"&gt;&lt;/i&gt;</td><td>f2d0</td></tr>
 <tr><td><i class="far fa-window-minimize" style="font-size: 20px;"></i> window-minimize</td><td>&lt;i class="far fa-window-minimize"&gt;&lt;/i&gt;</td><td>f2d1</td></tr>
 <tr><td><i class="far fa-window-restore" style="font-size: 20px;"></i> window-restore</td><td>&lt;i class="far fa-window-restore"&gt;&lt;/i&gt;</td><td>f2d2</td></tr>
</table>

</div>

## Font Awesome Icons List - Brand Icons

<div class="table-responsive">
<table class="table">
<tr>
<th>font awesome icon name</th>
<th>font awesome icon  HTML code</th>
<th>font awesome icon CSS content code</th>
</tr>
 <tr><td><i class="fab fa-500px" style="font-size: 20px;"></i> 500px</td><td>&lt;i class="fab fa-500px"&gt;&lt;/i&gt;</td><td>f26e</td></tr>
 <tr><td><i class="fab fa-accessible-icon" style="font-size: 20px;"></i> accessible-icon</td><td>&lt;i class="fab fa-accessible-icon"&gt;&lt;/i&gt;</td><td>f368</td></tr>
 <tr><td><i class="fab fa-accusoft" style="font-size: 20px;"></i> accusoft</td><td>&lt;i class="fab fa-accusoft"&gt;&lt;/i&gt;</td><td>f369</td></tr>
 <tr><td><i class="fab fa-acquisitions-incorporated" style="font-size: 20px;"></i> acquisitions-incorporated</td><td>&lt;i class="fab fa-acquisitions-incorporated"&gt;&lt;/i&gt;</td><td>f6af</td></tr>
 <tr><td><i class="fab fa-adn" style="font-size: 20px;"></i> adn</td><td>&lt;i class="fab fa-adn"&gt;&lt;/i&gt;</td><td>f170</td></tr>
 <tr><td><i class="fab fa-adobe" style="font-size: 20px;"></i> adobe</td><td>&lt;i class="fab fa-adobe"&gt;&lt;/i&gt;</td><td>f778</td></tr>
 <tr><td><i class="fab fa-adversal" style="font-size: 20px;"></i> adversal</td><td>&lt;i class="fab fa-adversal"&gt;&lt;/i&gt;</td><td>f36a</td></tr>
 <tr><td><i class="fab fa-affiliatetheme" style="font-size: 20px;"></i> affiliatetheme</td><td>&lt;i class="fab fa-affiliatetheme"&gt;&lt;/i&gt;</td><td>f36b</td></tr>
 <tr><td><i class="fab fa-airbnb" style="font-size: 20px;"></i> airbnb</td><td>&lt;i class="fab fa-airbnb"&gt;&lt;/i&gt;</td><td>f834</td></tr>
 <tr><td><i class="fab fa-algolia" style="font-size: 20px;"></i> algolia</td><td>&lt;i class="fab fa-algolia"&gt;&lt;/i&gt;</td><td>f36c</td></tr>
 <tr><td><i class="fab fa-alipay" style="font-size: 20px;"></i> alipay</td><td>&lt;i class="fab fa-alipay"&gt;&lt;/i&gt;</td><td>f642</td></tr>
 <tr><td><i class="fab fa-amazon" style="font-size: 20px;"></i> amazon</td><td>&lt;i class="fab fa-amazon"&gt;&lt;/i&gt;</td><td>f270</td></tr>
 <tr><td><i class="fab fa-amazon-pay" style="font-size: 20px;"></i> amazon-pay</td><td>&lt;i class="fab fa-amazon-pay"&gt;&lt;/i&gt;</td><td>f42c</td></tr>
 <tr><td><i class="fab fa-amilia" style="font-size: 20px;"></i> amilia</td><td>&lt;i class="fab fa-amilia"&gt;&lt;/i&gt;</td><td>f36d</td></tr>
 <tr><td><i class="fab fa-android" style="font-size: 20px;"></i> android</td><td>&lt;i class="fab fa-android"&gt;&lt;/i&gt;</td><td>f17b</td></tr>
 <tr><td><i class="fab fa-angellist" style="font-size: 20px;"></i> angellist</td><td>&lt;i class="fab fa-angellist"&gt;&lt;/i&gt;</td><td>f209</td></tr>
 <tr><td><i class="fab fa-angrycreative" style="font-size: 20px;"></i> angrycreative</td><td>&lt;i class="fab fa-angrycreative"&gt;&lt;/i&gt;</td><td>f36e</td></tr>
 <tr><td><i class="fab fa-angular" style="font-size: 20px;"></i> angular</td><td>&lt;i class="fab fa-angular"&gt;&lt;/i&gt;</td><td>f420</td></tr>
 <tr><td><i class="fab fa-app-store" style="font-size: 20px;"></i> app-store</td><td>&lt;i class="fab fa-app-store"&gt;&lt;/i&gt;</td><td>f36f</td></tr>
 <tr><td><i class="fab fa-app-store-ios" style="font-size: 20px;"></i> app-store-ios</td><td>&lt;i class="fab fa-app-store-ios"&gt;&lt;/i&gt;</td><td>f370</td></tr>
 <tr><td><i class="fab fa-apper" style="font-size: 20px;"></i> apper</td><td>&lt;i class="fab fa-apper"&gt;&lt;/i&gt;</td><td>f371</td></tr>
 <tr><td><i class="fab fa-apple" style="font-size: 20px;"></i> apple</td><td>&lt;i class="fab fa-apple"&gt;&lt;/i&gt;</td><td>f179</td></tr>
 <tr><td><i class="fab fa-apple-pay" style="font-size: 20px;"></i> apple-pay</td><td>&lt;i class="fab fa-apple-pay"&gt;&lt;/i&gt;</td><td>f415</td></tr>
 <tr><td><i class="fab fa-artstation" style="font-size: 20px;"></i> artstation</td><td>&lt;i class="fab fa-artstation"&gt;&lt;/i&gt;</td><td>f77a</td></tr>
 <tr><td><i class="fab fa-asymmetrik" style="font-size: 20px;"></i> asymmetrik</td><td>&lt;i class="fab fa-asymmetrik"&gt;&lt;/i&gt;</td><td>f372</td></tr>
 <tr><td><i class="fab fa-atlassian" style="font-size: 20px;"></i> atlassian</td><td>&lt;i class="fab fa-atlassian"&gt;&lt;/i&gt;</td><td>f77b</td></tr>
 <tr><td><i class="fab fa-audible" style="font-size: 20px;"></i> audible</td><td>&lt;i class="fab fa-audible"&gt;&lt;/i&gt;</td><td>f373</td></tr>
 <tr><td><i class="fab fa-autoprefixer" style="font-size: 20px;"></i> autoprefixer</td><td>&lt;i class="fab fa-autoprefixer"&gt;&lt;/i&gt;</td><td>f41c</td></tr>
 <tr><td><i class="fab fa-avianex" style="font-size: 20px;"></i> avianex</td><td>&lt;i class="fab fa-avianex"&gt;&lt;/i&gt;</td><td>f374</td></tr>
 <tr><td><i class="fab fa-aviato" style="font-size: 20px;"></i> aviato</td><td>&lt;i class="fab fa-aviato"&gt;&lt;/i&gt;</td><td>f421</td></tr>
 <tr><td><i class="fab fa-aws" style="font-size: 20px;"></i> aws</td><td>&lt;i class="fab fa-aws"&gt;&lt;/i&gt;</td><td>f375</td></tr>
 <tr><td><i class="fab fa-bandcamp" style="font-size: 20px;"></i> bandcamp</td><td>&lt;i class="fab fa-bandcamp"&gt;&lt;/i&gt;</td><td>f2d5</td></tr>
 <tr><td><i class="fab fa-battle-net" style="font-size: 20px;"></i> battle-net</td><td>&lt;i class="fab fa-battle-net"&gt;&lt;/i&gt;</td><td>f835</td></tr>
 <tr><td><i class="fab fa-behance" style="font-size: 20px;"></i> behance</td><td>&lt;i class="fab fa-behance"&gt;&lt;/i&gt;</td><td>f1b4</td></tr>
 <tr><td><i class="fab fa-behance-square" style="font-size: 20px;"></i> behance-square</td><td>&lt;i class="fab fa-behance-square"&gt;&lt;/i&gt;</td><td>f1b5</td></tr>
 <tr><td><i class="fab fa-bimobject" style="font-size: 20px;"></i> bimobject</td><td>&lt;i class="fab fa-bimobject"&gt;&lt;/i&gt;</td><td>f378</td></tr>
 <tr><td><i class="fab fa-bitbucket" style="font-size: 20px;"></i> bitbucket</td><td>&lt;i class="fab fa-bitbucket"&gt;&lt;/i&gt;</td><td>f171</td></tr>
 <tr><td><i class="fab fa-bitcoin" style="font-size: 20px;"></i> bitcoin</td><td>&lt;i class="fab fa-bitcoin"&gt;&lt;/i&gt;</td><td>f379</td></tr>
 <tr><td><i class="fab fa-bity" style="font-size: 20px;"></i> bity</td><td>&lt;i class="fab fa-bity"&gt;&lt;/i&gt;</td><td>f37a</td></tr>
 <tr><td><i class="fab fa-black-tie" style="font-size: 20px;"></i> black-tie</td><td>&lt;i class="fab fa-black-tie"&gt;&lt;/i&gt;</td><td>f27e</td></tr>
 <tr><td><i class="fab fa-blackberry" style="font-size: 20px;"></i> blackberry</td><td>&lt;i class="fab fa-blackberry"&gt;&lt;/i&gt;</td><td>f37b</td></tr>
 <tr><td><i class="fab fa-blogger" style="font-size: 20px;"></i> blogger</td><td>&lt;i class="fab fa-blogger"&gt;&lt;/i&gt;</td><td>f37c</td></tr>
 <tr><td><i class="fab fa-blogger-b" style="font-size: 20px;"></i> blogger-b</td><td>&lt;i class="fab fa-blogger-b"&gt;&lt;/i&gt;</td><td>f37d</td></tr>
 <tr><td><i class="fab fa-bluetooth" style="font-size: 20px;"></i> bluetooth</td><td>&lt;i class="fab fa-bluetooth"&gt;&lt;/i&gt;</td><td>f293</td></tr>
 <tr><td><i class="fab fa-bluetooth-b" style="font-size: 20px;"></i> bluetooth-b</td><td>&lt;i class="fab fa-bluetooth-b"&gt;&lt;/i&gt;</td><td>f294</td></tr>
 <tr><td><i class="fab fa-bootstrap" style="font-size: 20px;"></i> bootstrap</td><td>&lt;i class="fab fa-bootstrap"&gt;&lt;/i&gt;</td><td>f836</td></tr>
 <tr><td><i class="fab fa-btc" style="font-size: 20px;"></i> btc</td><td>&lt;i class="fab fa-btc"&gt;&lt;/i&gt;</td><td>f15a</td></tr>
 <tr><td><i class="fab fa-buffer" style="font-size: 20px;"></i> buffer</td><td>&lt;i class="fab fa-buffer"&gt;&lt;/i&gt;</td><td>f837</td></tr>
 <tr><td><i class="fab fa-buromobelexperte" style="font-size: 20px;"></i> buromobelexperte</td><td>&lt;i class="fab fa-buromobelexperte"&gt;&lt;/i&gt;</td><td>f37f</td></tr>
 <tr><td><i class="fab fa-buysellads" style="font-size: 20px;"></i> buysellads</td><td>&lt;i class="fab fa-buysellads"&gt;&lt;/i&gt;</td><td>f20d</td></tr>
 <tr><td><i class="fab fa-canadian-maple-leaf" style="font-size: 20px;"></i> canadian-maple-leaf</td><td>&lt;i class="fab fa-canadian-maple-leaf"&gt;&lt;/i&gt;</td><td>f785</td></tr>
 <tr><td><i class="fab fa-cc-amazon-pay" style="font-size: 20px;"></i> cc-amazon-pay</td><td>&lt;i class="fab fa-cc-amazon-pay"&gt;&lt;/i&gt;</td><td>f42d</td></tr>
 <tr><td><i class="fab fa-cc-amex" style="font-size: 20px;"></i> cc-amex</td><td>&lt;i class="fab fa-cc-amex"&gt;&lt;/i&gt;</td><td>f1f3</td></tr>
 <tr><td><i class="fab fa-cc-apple-pay" style="font-size: 20px;"></i> cc-apple-pay</td><td>&lt;i class="fab fa-cc-apple-pay"&gt;&lt;/i&gt;</td><td>f416</td></tr>
 <tr><td><i class="fab fa-cc-diners-club" style="font-size: 20px;"></i> cc-diners-club</td><td>&lt;i class="fab fa-cc-diners-club"&gt;&lt;/i&gt;</td><td>f24c</td></tr>
 <tr><td><i class="fab fa-cc-discover" style="font-size: 20px;"></i> cc-discover</td><td>&lt;i class="fab fa-cc-discover"&gt;&lt;/i&gt;</td><td>f1f2</td></tr>
 <tr><td><i class="fab fa-cc-jcb" style="font-size: 20px;"></i> cc-jcb</td><td>&lt;i class="fab fa-cc-jcb"&gt;&lt;/i&gt;</td><td>f24b</td></tr>
 <tr><td><i class="fab fa-cc-mastercard" style="font-size: 20px;"></i> cc-mastercard</td><td>&lt;i class="fab fa-cc-mastercard"&gt;&lt;/i&gt;</td><td>f1f1</td></tr>
 <tr><td><i class="fab fa-cc-paypal" style="font-size: 20px;"></i> cc-paypal</td><td>&lt;i class="fab fa-cc-paypal"&gt;&lt;/i&gt;</td><td>f1f4</td></tr>
 <tr><td><i class="fab fa-cc-stripe" style="font-size: 20px;"></i> cc-stripe</td><td>&lt;i class="fab fa-cc-stripe"&gt;&lt;/i&gt;</td><td>f1f5</td></tr>
 <tr><td><i class="fab fa-cc-visa" style="font-size: 20px;"></i> cc-visa</td><td>&lt;i class="fab fa-cc-visa"&gt;&lt;/i&gt;</td><td>f1f0</td></tr>
 <tr><td><i class="fab fa-centercode" style="font-size: 20px;"></i> centercode</td><td>&lt;i class="fab fa-centercode"&gt;&lt;/i&gt;</td><td>f380</td></tr>
 <tr><td><i class="fab fa-centos" style="font-size: 20px;"></i> centos</td><td>&lt;i class="fab fa-centos"&gt;&lt;/i&gt;</td><td>f789</td></tr>
 <tr><td><i class="fab fa-chrome" style="font-size: 20px;"></i> chrome</td><td>&lt;i class="fab fa-chrome"&gt;&lt;/i&gt;</td><td>f268</td></tr>
 <tr><td><i class="fab fa-chromecast" style="font-size: 20px;"></i> chromecast</td><td>&lt;i class="fab fa-chromecast"&gt;&lt;/i&gt;</td><td>f838</td></tr>
 <tr><td><i class="fab fa-cloudscale" style="font-size: 20px;"></i> cloudscale</td><td>&lt;i class="fab fa-cloudscale"&gt;&lt;/i&gt;</td><td>f383</td></tr>
 <tr><td><i class="fab fa-cloudsmith" style="font-size: 20px;"></i> cloudsmith</td><td>&lt;i class="fab fa-cloudsmith"&gt;&lt;/i&gt;</td><td>f384</td></tr>
 <tr><td><i class="fab fa-cloudversify" style="font-size: 20px;"></i> cloudversify</td><td>&lt;i class="fab fa-cloudversify"&gt;&lt;/i&gt;</td><td>f385</td></tr>
 <tr><td><i class="fab fa-codepen" style="font-size: 20px;"></i> codepen</td><td>&lt;i class="fab fa-codepen"&gt;&lt;/i&gt;</td><td>f1cb</td></tr>
 <tr><td><i class="fab fa-codiepie" style="font-size: 20px;"></i> codiepie</td><td>&lt;i class="fab fa-codiepie"&gt;&lt;/i&gt;</td><td>f284</td></tr>
 <tr><td><i class="fab fa-confluence" style="font-size: 20px;"></i> confluence</td><td>&lt;i class="fab fa-confluence"&gt;&lt;/i&gt;</td><td>f78d</td></tr>
 <tr><td><i class="fab fa-connectdevelop" style="font-size: 20px;"></i> connectdevelop</td><td>&lt;i class="fab fa-connectdevelop"&gt;&lt;/i&gt;</td><td>f20e</td></tr>
 <tr><td><i class="fab fa-contao" style="font-size: 20px;"></i> contao</td><td>&lt;i class="fab fa-contao"&gt;&lt;/i&gt;</td><td>f26d</td></tr>
 <tr><td><i class="fab fa-cpanel" style="font-size: 20px;"></i> cpanel</td><td>&lt;i class="fab fa-cpanel"&gt;&lt;/i&gt;</td><td>f388</td></tr>
 <tr><td><i class="fab fa-creative-commons" style="font-size: 20px;"></i> creative-commons</td><td>&lt;i class="fab fa-creative-commons"&gt;&lt;/i&gt;</td><td>f25e</td></tr>
 <tr><td><i class="fab fa-creative-commons-by" style="font-size: 20px;"></i> creative-commons-by</td><td>&lt;i class="fab fa-creative-commons-by"&gt;&lt;/i&gt;</td><td>f4e7</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc" style="font-size: 20px;"></i> creative-commons-nc</td><td>&lt;i class="fab fa-creative-commons-nc"&gt;&lt;/i&gt;</td><td>f4e8</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc-eu" style="font-size: 20px;"></i> creative-commons-nc-eu</td><td>&lt;i class="fab fa-creative-commons-nc-eu"&gt;&lt;/i&gt;</td><td>f4e9</td></tr>
 <tr><td><i class="fab fa-creative-commons-nc-jp" style="font-size: 20px;"></i> creative-commons-nc-jp</td><td>&lt;i class="fab fa-creative-commons-nc-jp"&gt;&lt;/i&gt;</td><td>f4ea</td></tr>
 <tr><td><i class="fab fa-creative-commons-nd" style="font-size: 20px;"></i> creative-commons-nd</td><td>&lt;i class="fab fa-creative-commons-nd"&gt;&lt;/i&gt;</td><td>f4eb</td></tr>
 <tr><td><i class="fab fa-creative-commons-pd" style="font-size: 20px;"></i> creative-commons-pd</td><td>&lt;i class="fab fa-creative-commons-pd"&gt;&lt;/i&gt;</td><td>f4ec</td></tr>
 <tr><td><i class="fab fa-creative-commons-pd-alt" style="font-size: 20px;"></i> creative-commons-pd-alt</td><td>&lt;i class="fab fa-creative-commons-pd-alt"&gt;&lt;/i&gt;</td><td>f4ed</td></tr>
 <tr><td><i class="fab fa-creative-commons-remix" style="font-size: 20px;"></i> creative-commons-remix</td><td>&lt;i class="fab fa-creative-commons-remix"&gt;&lt;/i&gt;</td><td>f4ee</td></tr>
 <tr><td><i class="fab fa-creative-commons-sa" style="font-size: 20px;"></i> creative-commons-sa</td><td>&lt;i class="fab fa-creative-commons-sa"&gt;&lt;/i&gt;</td><td>f4ef</td></tr>
 <tr><td><i class="fab fa-creative-commons-sampling" style="font-size: 20px;"></i> creative-commons-sampling</td><td>&lt;i class="fab fa-creative-commons-sampling"&gt;&lt;/i&gt;</td><td>f4f0</td></tr>
 <tr><td><i class="fab fa-creative-commons-sampling-plus" style="font-size: 20px;"></i> creative-commons-sampling-plus</td><td>&lt;i class="fab fa-creative-commons-sampling-plus"&gt;&lt;/i&gt;</td><td>f4f1</td></tr>
 <tr><td><i class="fab fa-creative-commons-share" style="font-size: 20px;"></i> creative-commons-share</td><td>&lt;i class="fab fa-creative-commons-share"&gt;&lt;/i&gt;</td><td>f4f2</td></tr>
 <tr><td><i class="fab fa-creative-commons-zero" style="font-size: 20px;"></i> creative-commons-zero</td><td>&lt;i class="fab fa-creative-commons-zero"&gt;&lt;/i&gt;</td><td>f4f3</td></tr>
 <tr><td><i class="fab fa-critical-role" style="font-size: 20px;"></i> critical-role</td><td>&lt;i class="fab fa-critical-role"&gt;&lt;/i&gt;</td><td>f6c9</td></tr>
 <tr><td><i class="fab fa-css3" style="font-size: 20px;"></i> css3</td><td>&lt;i class="fab fa-css3"&gt;&lt;/i&gt;</td><td>f13c</td></tr>
 <tr><td><i class="fab fa-css3-alt" style="font-size: 20px;"></i> css3-alt</td><td>&lt;i class="fab fa-css3-alt"&gt;&lt;/i&gt;</td><td>f38b</td></tr>
 <tr><td><i class="fab fa-cuttlefish" style="font-size: 20px;"></i> cuttlefish</td><td>&lt;i class="fab fa-cuttlefish"&gt;&lt;/i&gt;</td><td>f38c</td></tr>
 <tr><td><i class="fab fa-d-and-d" style="font-size: 20px;"></i> d-and-d</td><td>&lt;i class="fab fa-d-and-d"&gt;&lt;/i&gt;</td><td>f38d</td></tr>
 <tr><td><i class="fab fa-d-and-d-beyond" style="font-size: 20px;"></i> d-and-d-beyond</td><td>&lt;i class="fab fa-d-and-d-beyond"&gt;&lt;/i&gt;</td><td>f6ca</td></tr>
 <tr><td><i class="fab fa-dashcube" style="font-size: 20px;"></i> dashcube</td><td>&lt;i class="fab fa-dashcube"&gt;&lt;/i&gt;</td><td>f210</td></tr>
 <tr><td><i class="fab fa-delicious" style="font-size: 20px;"></i> delicious</td><td>&lt;i class="fab fa-delicious"&gt;&lt;/i&gt;</td><td>f1a5</td></tr>
 <tr><td><i class="fab fa-deploydog" style="font-size: 20px;"></i> deploydog</td><td>&lt;i class="fab fa-deploydog"&gt;&lt;/i&gt;</td><td>f38e</td></tr>
 <tr><td><i class="fab fa-deskpro" style="font-size: 20px;"></i> deskpro</td><td>&lt;i class="fab fa-deskpro"&gt;&lt;/i&gt;</td><td>f38f</td></tr>
 <tr><td><i class="fab fa-dev" style="font-size: 20px;"></i> dev</td><td>&lt;i class="fab fa-dev"&gt;&lt;/i&gt;</td><td>f6cc</td></tr>
 <tr><td><i class="fab fa-deviantart" style="font-size: 20px;"></i> deviantart</td><td>&lt;i class="fab fa-deviantart"&gt;&lt;/i&gt;</td><td>f1bd</td></tr>
 <tr><td><i class="fab fa-dhl" style="font-size: 20px;"></i> dhl</td><td>&lt;i class="fab fa-dhl"&gt;&lt;/i&gt;</td><td>f790</td></tr>
 <tr><td><i class="fab fa-diaspora" style="font-size: 20px;"></i> diaspora</td><td>&lt;i class="fab fa-diaspora"&gt;&lt;/i&gt;</td><td>f791</td></tr>
 <tr><td><i class="fab fa-digg" style="font-size: 20px;"></i> digg</td><td>&lt;i class="fab fa-digg"&gt;&lt;/i&gt;</td><td>f1a6</td></tr>
 <tr><td><i class="fab fa-digital-ocean" style="font-size: 20px;"></i> digital-ocean</td><td>&lt;i class="fab fa-digital-ocean"&gt;&lt;/i&gt;</td><td>f391</td></tr>
 <tr><td><i class="fab fa-discord" style="font-size: 20px;"></i> discord</td><td>&lt;i class="fab fa-discord"&gt;&lt;/i&gt;</td><td>f392</td></tr>
 <tr><td><i class="fab fa-discourse" style="font-size: 20px;"></i> discourse</td><td>&lt;i class="fab fa-discourse"&gt;&lt;/i&gt;</td><td>f393</td></tr>
 <tr><td><i class="fab fa-dochub" style="font-size: 20px;"></i> dochub</td><td>&lt;i class="fab fa-dochub"&gt;&lt;/i&gt;</td><td>f394</td></tr>
 <tr><td><i class="fab fa-docker" style="font-size: 20px;"></i> docker</td><td>&lt;i class="fab fa-docker"&gt;&lt;/i&gt;</td><td>f395</td></tr>
 <tr><td><i class="fab fa-draft2digital" style="font-size: 20px;"></i> draft2digital</td><td>&lt;i class="fab fa-draft2digital"&gt;&lt;/i&gt;</td><td>f396</td></tr>
 <tr><td><i class="fab fa-dribbble" style="font-size: 20px;"></i> dribbble</td><td>&lt;i class="fab fa-dribbble"&gt;&lt;/i&gt;</td><td>f17d</td></tr>
 <tr><td><i class="fab fa-dribbble-square" style="font-size: 20px;"></i> dribbble-square</td><td>&lt;i class="fab fa-dribbble-square"&gt;&lt;/i&gt;</td><td>f397</td></tr>
 <tr><td><i class="fab fa-dropbox" style="font-size: 20px;"></i> dropbox</td><td>&lt;i class="fab fa-dropbox"&gt;&lt;/i&gt;</td><td>f16b</td></tr>
 <tr><td><i class="fab fa-drupal" style="font-size: 20px;"></i> drupal</td><td>&lt;i class="fab fa-drupal"&gt;&lt;/i&gt;</td><td>f1a9</td></tr>
 <tr><td><i class="fab fa-dyalog" style="font-size: 20px;"></i> dyalog</td><td>&lt;i class="fab fa-dyalog"&gt;&lt;/i&gt;</td><td>f399</td></tr>
 <tr><td><i class="fab fa-earlybirds" style="font-size: 20px;"></i> earlybirds</td><td>&lt;i class="fab fa-earlybirds"&gt;&lt;/i&gt;</td><td>f39a</td></tr>
 <tr><td><i class="fab fa-ebay" style="font-size: 20px;"></i> ebay</td><td>&lt;i class="fab fa-ebay"&gt;&lt;/i&gt;</td><td>f4f4</td></tr>
 <tr><td><i class="fab fa-edge" style="font-size: 20px;"></i> edge</td><td>&lt;i class="fab fa-edge"&gt;&lt;/i&gt;</td><td>f282</td></tr>
 <tr><td><i class="fab fa-elementor" style="font-size: 20px;"></i> elementor</td><td>&lt;i class="fab fa-elementor"&gt;&lt;/i&gt;</td><td>f430</td></tr>
 <tr><td><i class="fab fa-ello" style="font-size: 20px;"></i> ello</td><td>&lt;i class="fab fa-ello"&gt;&lt;/i&gt;</td><td>f5f1</td></tr>
 <tr><td><i class="fab fa-ember" style="font-size: 20px;"></i> ember</td><td>&lt;i class="fab fa-ember"&gt;&lt;/i&gt;</td><td>f423</td></tr>
 <tr><td><i class="fab fa-empire" style="font-size: 20px;"></i> empire</td><td>&lt;i class="fab fa-empire"&gt;&lt;/i&gt;</td><td>f1d1</td></tr>
 <tr><td><i class="fab fa-envira" style="font-size: 20px;"></i> envira</td><td>&lt;i class="fab fa-envira"&gt;&lt;/i&gt;</td><td>f299</td></tr>
 <tr><td><i class="fab fa-erlang" style="font-size: 20px;"></i> erlang</td><td>&lt;i class="fab fa-erlang"&gt;&lt;/i&gt;</td><td>f39d</td></tr>
 <tr><td><i class="fab fa-ethereum" style="font-size: 20px;"></i> ethereum</td><td>&lt;i class="fab fa-ethereum"&gt;&lt;/i&gt;</td><td>f42e</td></tr>
 <tr><td><i class="fab fa-etsy" style="font-size: 20px;"></i> etsy</td><td>&lt;i class="fab fa-etsy"&gt;&lt;/i&gt;</td><td>f2d7</td></tr>
 <tr><td><i class="fab fa-evernote" style="font-size: 20px;"></i> evernote</td><td>&lt;i class="fab fa-evernote"&gt;&lt;/i&gt;</td><td>f839</td></tr>
 <tr><td><i class="fab fa-expeditedssl" style="font-size: 20px;"></i> expeditedssl</td><td>&lt;i class="fab fa-expeditedssl"&gt;&lt;/i&gt;</td><td>f23e</td></tr>
 <tr><td><i class="fab fa-facebook" style="font-size: 20px;"></i> facebook</td><td>&lt;i class="fab fa-facebook"&gt;&lt;/i&gt;</td><td>f09a</td></tr>
 <tr><td><i class="fab fa-facebook-f" style="font-size: 20px;"></i> facebook-f</td><td>&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;</td><td>f39e</td></tr>
 <tr><td><i class="fab fa-facebook-messenger" style="font-size: 20px;"></i> facebook-messenger</td><td>&lt;i class="fab fa-facebook-messenger"&gt;&lt;/i&gt;</td><td>f39f</td></tr>
 <tr><td><i class="fab fa-facebook-square" style="font-size: 20px;"></i> facebook-square</td><td>&lt;i class="fab fa-facebook-square"&gt;&lt;/i&gt;</td><td>f082</td></tr>
 <tr><td><i class="fab fa-fantasy-flight-games" style="font-size: 20px;"></i> fantasy-flight-games</td><td>&lt;i class="fab fa-fantasy-flight-games"&gt;&lt;/i&gt;</td><td>f6dc</td></tr>
 <tr><td><i class="fab fa-fedex" style="font-size: 20px;"></i> fedex</td><td>&lt;i class="fab fa-fedex"&gt;&lt;/i&gt;</td><td>f797</td></tr>
 <tr><td><i class="fab fa-fedora" style="font-size: 20px;"></i> fedora</td><td>&lt;i class="fab fa-fedora"&gt;&lt;/i&gt;</td><td>f798</td></tr>
 <tr><td><i class="fab fa-figma" style="font-size: 20px;"></i> figma</td><td>&lt;i class="fab fa-figma"&gt;&lt;/i&gt;</td><td>f799</td></tr>
 <tr><td><i class="fab fa-firefox" style="font-size: 20px;"></i> firefox</td><td>&lt;i class="fab fa-firefox"&gt;&lt;/i&gt;</td><td>f269</td></tr>
 <tr><td><i class="fab fa-first-order" style="font-size: 20px;"></i> first-order</td><td>&lt;i class="fab fa-first-order"&gt;&lt;/i&gt;</td><td>f2b0</td></tr>
 <tr><td><i class="fab fa-first-order-alt" style="font-size: 20px;"></i> first-order-alt</td><td>&lt;i class="fab fa-first-order-alt"&gt;&lt;/i&gt;</td><td>f50a</td></tr>
 <tr><td><i class="fab fa-firstdraft" style="font-size: 20px;"></i> firstdraft</td><td>&lt;i class="fab fa-firstdraft"&gt;&lt;/i&gt;</td><td>f3a1</td></tr>
 <tr><td><i class="fab fa-flickr" style="font-size: 20px;"></i> flickr</td><td>&lt;i class="fab fa-flickr"&gt;&lt;/i&gt;</td><td>f16e</td></tr>
 <tr><td><i class="fab fa-flipboard" style="font-size: 20px;"></i> flipboard</td><td>&lt;i class="fab fa-flipboard"&gt;&lt;/i&gt;</td><td>f44d</td></tr>
 <tr><td><i class="fab fa-fly" style="font-size: 20px;"></i> fly</td><td>&lt;i class="fab fa-fly"&gt;&lt;/i&gt;</td><td>f417</td></tr>
 <tr><td><i class="fab fa-font-awesome" style="font-size: 20px;"></i> font-awesome</td><td>&lt;i class="fab fa-font-awesome"&gt;&lt;/i&gt;</td><td>f2b4</td></tr>
 <tr><td><i class="fab fa-font-awesome-alt" style="font-size: 20px;"></i> font-awesome-alt</td><td>&lt;i class="fab fa-font-awesome-alt"&gt;&lt;/i&gt;</td><td>f35c</td></tr>
 <tr><td><i class="fab fa-font-awesome-flag" style="font-size: 20px;"></i> font-awesome-flag</td><td>&lt;i class="fab fa-font-awesome-flag"&gt;&lt;/i&gt;</td><td>f425</td></tr>
 <tr><td><i class="fab fa-fonticons" style="font-size: 20px;"></i> fonticons</td><td>&lt;i class="fab fa-fonticons"&gt;&lt;/i&gt;</td><td>f280</td></tr>
 <tr><td><i class="fab fa-fonticons-fi" style="font-size: 20px;"></i> fonticons-fi</td><td>&lt;i class="fab fa-fonticons-fi"&gt;&lt;/i&gt;</td><td>f3a2</td></tr>
 <tr><td><i class="fab fa-fort-awesome" style="font-size: 20px;"></i> fort-awesome</td><td>&lt;i class="fab fa-fort-awesome"&gt;&lt;/i&gt;</td><td>f286</td></tr>
 <tr><td><i class="fab fa-fort-awesome-alt" style="font-size: 20px;"></i> fort-awesome-alt</td><td>&lt;i class="fab fa-fort-awesome-alt"&gt;&lt;/i&gt;</td><td>f3a3</td></tr>
 <tr><td><i class="fab fa-forumbee" style="font-size: 20px;"></i> forumbee</td><td>&lt;i class="fab fa-forumbee"&gt;&lt;/i&gt;</td><td>f211</td></tr>
 <tr><td><i class="fab fa-foursquare" style="font-size: 20px;"></i> foursquare</td><td>&lt;i class="fab fa-foursquare"&gt;&lt;/i&gt;</td><td>f180</td></tr>
 <tr><td><i class="fab fa-free-code-camp" style="font-size: 20px;"></i> free-code-camp</td><td>&lt;i class="fab fa-free-code-camp"&gt;&lt;/i&gt;</td><td>f2c5</td></tr>
 <tr><td><i class="fab fa-freebsd" style="font-size: 20px;"></i> freebsd</td><td>&lt;i class="fab fa-freebsd"&gt;&lt;/i&gt;</td><td>f3a4</td></tr>
 <tr><td><i class="fab fa-fulcrum" style="font-size: 20px;"></i> fulcrum</td><td>&lt;i class="fab fa-fulcrum"&gt;&lt;/i&gt;</td><td>f50b</td></tr>
 <tr><td><i class="fab fa-galactic-republic" style="font-size: 20px;"></i> galactic-republic</td><td>&lt;i class="fab fa-galactic-republic"&gt;&lt;/i&gt;</td><td>f50c</td></tr>
 <tr><td><i class="fab fa-galactic-senate" style="font-size: 20px;"></i> galactic-senate</td><td>&lt;i class="fab fa-galactic-senate"&gt;&lt;/i&gt;</td><td>f50d</td></tr>
 <tr><td><i class="fab fa-get-pocket" style="font-size: 20px;"></i> get-pocket</td><td>&lt;i class="fab fa-get-pocket"&gt;&lt;/i&gt;</td><td>f265</td></tr>
 <tr><td><i class="fab fa-gg" style="font-size: 20px;"></i> gg</td><td>&lt;i class="fab fa-gg"&gt;&lt;/i&gt;</td><td>f260</td></tr>
 <tr><td><i class="fab fa-gg-circle" style="font-size: 20px;"></i> gg-circle</td><td>&lt;i class="fab fa-gg-circle"&gt;&lt;/i&gt;</td><td>f261</td></tr>
 <tr><td><i class="fab fa-git" style="font-size: 20px;"></i> git</td><td>&lt;i class="fab fa-git"&gt;&lt;/i&gt;</td><td>f1d3</td></tr>
 <tr><td><i class="fab fa-git-alt" style="font-size: 20px;"></i> git-alt</td><td>&lt;i class="fab fa-git-alt"&gt;&lt;/i&gt;</td><td>f841</td></tr>
 <tr><td><i class="fab fa-git-square" style="font-size: 20px;"></i> git-square</td><td>&lt;i class="fab fa-git-square"&gt;&lt;/i&gt;</td><td>f1d2</td></tr>
 <tr><td><i class="fab fa-github" style="font-size: 20px;"></i> github</td><td>&lt;i class="fab fa-github"&gt;&lt;/i&gt;</td><td>f09b</td></tr>
 <tr><td><i class="fab fa-github-alt" style="font-size: 20px;"></i> github-alt</td><td>&lt;i class="fab fa-github-alt"&gt;&lt;/i&gt;</td><td>f113</td></tr>
 <tr><td><i class="fab fa-github-square" style="font-size: 20px;"></i> github-square</td><td>&lt;i class="fab fa-github-square"&gt;&lt;/i&gt;</td><td>f092</td></tr>
 <tr><td><i class="fab fa-gitkraken" style="font-size: 20px;"></i> gitkraken</td><td>&lt;i class="fab fa-gitkraken"&gt;&lt;/i&gt;</td><td>f3a6</td></tr>
 <tr><td><i class="fab fa-gitlab" style="font-size: 20px;"></i> gitlab</td><td>&lt;i class="fab fa-gitlab"&gt;&lt;/i&gt;</td><td>f296</td></tr>
 <tr><td><i class="fab fa-gitter" style="font-size: 20px;"></i> gitter</td><td>&lt;i class="fab fa-gitter"&gt;&lt;/i&gt;</td><td>f426</td></tr>
 <tr><td><i class="fab fa-glide" style="font-size: 20px;"></i> glide</td><td>&lt;i class="fab fa-glide"&gt;&lt;/i&gt;</td><td>f2a5</td></tr>
 <tr><td><i class="fab fa-glide-g" style="font-size: 20px;"></i> glide-g</td><td>&lt;i class="fab fa-glide-g"&gt;&lt;/i&gt;</td><td>f2a6</td></tr>
 <tr><td><i class="fab fa-gofore" style="font-size: 20px;"></i> gofore</td><td>&lt;i class="fab fa-gofore"&gt;&lt;/i&gt;</td><td>f3a7</td></tr>
 <tr><td><i class="fab fa-goodreads" style="font-size: 20px;"></i> goodreads</td><td>&lt;i class="fab fa-goodreads"&gt;&lt;/i&gt;</td><td>f3a8</td></tr>
 <tr><td><i class="fab fa-goodreads-g" style="font-size: 20px;"></i> goodreads-g</td><td>&lt;i class="fab fa-goodreads-g"&gt;&lt;/i&gt;</td><td>f3a9</td></tr>
 <tr><td><i class="fab fa-google" style="font-size: 20px;"></i> google</td><td>&lt;i class="fab fa-google"&gt;&lt;/i&gt;</td><td>f1a0</td></tr>
 <tr><td><i class="fab fa-google-drive" style="font-size: 20px;"></i> google-drive</td><td>&lt;i class="fab fa-google-drive"&gt;&lt;/i&gt;</td><td>f3aa</td></tr>
 <tr><td><i class="fab fa-google-play" style="font-size: 20px;"></i> google-play</td><td>&lt;i class="fab fa-google-play"&gt;&lt;/i&gt;</td><td>f3ab</td></tr>
 <tr><td><i class="fab fa-google-plus" style="font-size: 20px;"></i> google-plus</td><td>&lt;i class="fab fa-google-plus"&gt;&lt;/i&gt;</td><td>f2b3</td></tr>
 <tr><td><i class="fab fa-google-plus-g" style="font-size: 20px;"></i> google-plus-g</td><td>&lt;i class="fab fa-google-plus-g"&gt;&lt;/i&gt;</td><td>f0d5</td></tr>
 <tr><td><i class="fab fa-google-plus-square" style="font-size: 20px;"></i> google-plus-square</td><td>&lt;i class="fab fa-google-plus-square"&gt;&lt;/i&gt;</td><td>f0d4</td></tr>
 <tr><td><i class="fab fa-google-wallet" style="font-size: 20px;"></i> google-wallet</td><td>&lt;i class="fab fa-google-wallet"&gt;&lt;/i&gt;</td><td>f1ee</td></tr>
 <tr><td><i class="fab fa-gratipay" style="font-size: 20px;"></i> gratipay</td><td>&lt;i class="fab fa-gratipay"&gt;&lt;/i&gt;</td><td>f184</td></tr>
 <tr><td><i class="fab fa-grav" style="font-size: 20px;"></i> grav</td><td>&lt;i class="fab fa-grav"&gt;&lt;/i&gt;</td><td>f2d6</td></tr>
 <tr><td><i class="fab fa-gripfire" style="font-size: 20px;"></i> gripfire</td><td>&lt;i class="fab fa-gripfire"&gt;&lt;/i&gt;</td><td>f3ac</td></tr>
 <tr><td><i class="fab fa-grunt" style="font-size: 20px;"></i> grunt</td><td>&lt;i class="fab fa-grunt"&gt;&lt;/i&gt;</td><td>f3ad</td></tr>
 <tr><td><i class="fab fa-gulp" style="font-size: 20px;"></i> gulp</td><td>&lt;i class="fab fa-gulp"&gt;&lt;/i&gt;</td><td>f3ae</td></tr>
 <tr><td><i class="fab fa-hacker-news" style="font-size: 20px;"></i> hacker-news</td><td>&lt;i class="fab fa-hacker-news"&gt;&lt;/i&gt;</td><td>f1d4</td></tr>
 <tr><td><i class="fab fa-hacker-news-square" style="font-size: 20px;"></i> hacker-news-square</td><td>&lt;i class="fab fa-hacker-news-square"&gt;&lt;/i&gt;</td><td>f3af</td></tr>
 <tr><td><i class="fab fa-hackerrank" style="font-size: 20px;"></i> hackerrank</td><td>&lt;i class="fab fa-hackerrank"&gt;&lt;/i&gt;</td><td>f5f7</td></tr>
 <tr><td><i class="fab fa-hips" style="font-size: 20px;"></i> hips</td><td>&lt;i class="fab fa-hips"&gt;&lt;/i&gt;</td><td>f452</td></tr>
 <tr><td><i class="fab fa-hire-a-helper" style="font-size: 20px;"></i> hire-a-helper</td><td>&lt;i class="fab fa-hire-a-helper"&gt;&lt;/i&gt;</td><td>f3b0</td></tr>
 <tr><td><i class="fab fa-hooli" style="font-size: 20px;"></i> hooli</td><td>&lt;i class="fab fa-hooli"&gt;&lt;/i&gt;</td><td>f427</td></tr>
 <tr><td><i class="fab fa-hornbill" style="font-size: 20px;"></i> hornbill</td><td>&lt;i class="fab fa-hornbill"&gt;&lt;/i&gt;</td><td>f592</td></tr>
 <tr><td><i class="fab fa-hotjar" style="font-size: 20px;"></i> hotjar</td><td>&lt;i class="fab fa-hotjar"&gt;&lt;/i&gt;</td><td>f3b1</td></tr>
 <tr><td><i class="fab fa-houzz" style="font-size: 20px;"></i> houzz</td><td>&lt;i class="fab fa-houzz"&gt;&lt;/i&gt;</td><td>f27c</td></tr>
 <tr><td><i class="fab fa-html5" style="font-size: 20px;"></i> html5</td><td>&lt;i class="fab fa-html5"&gt;&lt;/i&gt;</td><td>f13b</td></tr>
 <tr><td><i class="fab fa-hubspot" style="font-size: 20px;"></i> hubspot</td><td>&lt;i class="fab fa-hubspot"&gt;&lt;/i&gt;</td><td>f3b2</td></tr>
 <tr><td><i class="fab fa-imdb" style="font-size: 20px;"></i> imdb</td><td>&lt;i class="fab fa-imdb"&gt;&lt;/i&gt;</td><td>f2d8</td></tr>
 <tr><td><i class="fab fa-instagram" style="font-size: 20px;"></i> instagram</td><td>&lt;i class="fab fa-instagram"&gt;&lt;/i&gt;</td><td>f16d</td></tr>
 <tr><td><i class="fab fa-intercom" style="font-size: 20px;"></i> intercom</td><td>&lt;i class="fab fa-intercom"&gt;&lt;/i&gt;</td><td>f7af</td></tr>
 <tr><td><i class="fab fa-internet-explorer" style="font-size: 20px;"></i> internet-explorer</td><td>&lt;i class="fab fa-internet-explorer"&gt;&lt;/i&gt;</td><td>f26b</td></tr>
 <tr><td><i class="fab fa-invision" style="font-size: 20px;"></i> invision</td><td>&lt;i class="fab fa-invision"&gt;&lt;/i&gt;</td><td>f7b0</td></tr>
 <tr><td><i class="fab fa-ioxhost" style="font-size: 20px;"></i> ioxhost</td><td>&lt;i class="fab fa-ioxhost"&gt;&lt;/i&gt;</td><td>f208</td></tr>
 <tr><td><i class="fab fa-itch-io" style="font-size: 20px;"></i> itch-io</td><td>&lt;i class="fab fa-itch-io"&gt;&lt;/i&gt;</td><td>f83a</td></tr>
 <tr><td><i class="fab fa-itunes" style="font-size: 20px;"></i> itunes</td><td>&lt;i class="fab fa-itunes"&gt;&lt;/i&gt;</td><td>f3b4</td></tr>
 <tr><td><i class="fab fa-itunes-note" style="font-size: 20px;"></i> itunes-note</td><td>&lt;i class="fab fa-itunes-note"&gt;&lt;/i&gt;</td><td>f3b5</td></tr>
 <tr><td><i class="fab fa-java" style="font-size: 20px;"></i> java</td><td>&lt;i class="fab fa-java"&gt;&lt;/i&gt;</td><td>f4e4</td></tr>
 <tr><td><i class="fab fa-jedi-order" style="font-size: 20px;"></i> jedi-order</td><td>&lt;i class="fab fa-jedi-order"&gt;&lt;/i&gt;</td><td>f50e</td></tr>
 <tr><td><i class="fab fa-jenkins" style="font-size: 20px;"></i> jenkins</td><td>&lt;i class="fab fa-jenkins"&gt;&lt;/i&gt;</td><td>f3b6</td></tr>
 <tr><td><i class="fab fa-jira" style="font-size: 20px;"></i> jira</td><td>&lt;i class="fab fa-jira"&gt;&lt;/i&gt;</td><td>f7b1</td></tr>
 <tr><td><i class="fab fa-joget" style="font-size: 20px;"></i> joget</td><td>&lt;i class="fab fa-joget"&gt;&lt;/i&gt;</td><td>f3b7</td></tr>
 <tr><td><i class="fab fa-joomla" style="font-size: 20px;"></i> joomla</td><td>&lt;i class="fab fa-joomla"&gt;&lt;/i&gt;</td><td>f1aa</td></tr>
 <tr><td><i class="fab fa-js" style="font-size: 20px;"></i> js</td><td>&lt;i class="fab fa-js"&gt;&lt;/i&gt;</td><td>f3b8</td></tr>
 <tr><td><i class="fab fa-js-square" style="font-size: 20px;"></i> js-square</td><td>&lt;i class="fab fa-js-square"&gt;&lt;/i&gt;</td><td>f3b9</td></tr>
 <tr><td><i class="fab fa-jsfiddle" style="font-size: 20px;"></i> jsfiddle</td><td>&lt;i class="fab fa-jsfiddle"&gt;&lt;/i&gt;</td><td>f1cc</td></tr>
 <tr><td><i class="fab fa-kaggle" style="font-size: 20px;"></i> kaggle</td><td>&lt;i class="fab fa-kaggle"&gt;&lt;/i&gt;</td><td>f5fa</td></tr>
 <tr><td><i class="fab fa-keybase" style="font-size: 20px;"></i> keybase</td><td>&lt;i class="fab fa-keybase"&gt;&lt;/i&gt;</td><td>f4f5</td></tr>
 <tr><td><i class="fab fa-keycdn" style="font-size: 20px;"></i> keycdn</td><td>&lt;i class="fab fa-keycdn"&gt;&lt;/i&gt;</td><td>f3ba</td></tr>
 <tr><td><i class="fab fa-kickstarter" style="font-size: 20px;"></i> kickstarter</td><td>&lt;i class="fab fa-kickstarter"&gt;&lt;/i&gt;</td><td>f3bb</td></tr>
 <tr><td><i class="fab fa-kickstarter-k" style="font-size: 20px;"></i> kickstarter-k</td><td>&lt;i class="fab fa-kickstarter-k"&gt;&lt;/i&gt;</td><td>f3bc</td></tr>
 <tr><td><i class="fab fa-korvue" style="font-size: 20px;"></i> korvue</td><td>&lt;i class="fab fa-korvue"&gt;&lt;/i&gt;</td><td>f42f</td></tr>
 <tr><td><i class="fab fa-laravel" style="font-size: 20px;"></i> laravel</td><td>&lt;i class="fab fa-laravel"&gt;&lt;/i&gt;</td><td>f3bd</td></tr>
 <tr><td><i class="fab fa-lastfm" style="font-size: 20px;"></i> lastfm</td><td>&lt;i class="fab fa-lastfm"&gt;&lt;/i&gt;</td><td>f202</td></tr>
 <tr><td><i class="fab fa-lastfm-square" style="font-size: 20px;"></i> lastfm-square</td><td>&lt;i class="fab fa-lastfm-square"&gt;&lt;/i&gt;</td><td>f203</td></tr>
 <tr><td><i class="fab fa-leanpub" style="font-size: 20px;"></i> leanpub</td><td>&lt;i class="fab fa-leanpub"&gt;&lt;/i&gt;</td><td>f212</td></tr>
 <tr><td><i class="fab fa-less" style="font-size: 20px;"></i> less</td><td>&lt;i class="fab fa-less"&gt;&lt;/i&gt;</td><td>f41d</td></tr>
 <tr><td><i class="fab fa-line" style="font-size: 20px;"></i> line</td><td>&lt;i class="fab fa-line"&gt;&lt;/i&gt;</td><td>f3c0</td></tr>
 <tr><td><i class="fab fa-linkedin" style="font-size: 20px;"></i> linkedin</td><td>&lt;i class="fab fa-linkedin"&gt;&lt;/i&gt;</td><td>f08c</td></tr>
 <tr><td><i class="fab fa-linkedin-in" style="font-size: 20px;"></i> linkedin-in</td><td>&lt;i class="fab fa-linkedin-in"&gt;&lt;/i&gt;</td><td>f0e1</td></tr>
 <tr><td><i class="fab fa-linode" style="font-size: 20px;"></i> linode</td><td>&lt;i class="fab fa-linode"&gt;&lt;/i&gt;</td><td>f2b8</td></tr>
 <tr><td><i class="fab fa-linux" style="font-size: 20px;"></i> linux</td><td>&lt;i class="fab fa-linux"&gt;&lt;/i&gt;</td><td>f17c</td></tr>
 <tr><td><i class="fab fa-lyft" style="font-size: 20px;"></i> lyft</td><td>&lt;i class="fab fa-lyft"&gt;&lt;/i&gt;</td><td>f3c3</td></tr>
 <tr><td><i class="fab fa-magento" style="font-size: 20px;"></i> magento</td><td>&lt;i class="fab fa-magento"&gt;&lt;/i&gt;</td><td>f3c4</td></tr>
 <tr><td><i class="fab fa-mailchimp" style="font-size: 20px;"></i> mailchimp</td><td>&lt;i class="fab fa-mailchimp"&gt;&lt;/i&gt;</td><td>f59e</td></tr>
 <tr><td><i class="fab fa-mandalorian" style="font-size: 20px;"></i> mandalorian</td><td>&lt;i class="fab fa-mandalorian"&gt;&lt;/i&gt;</td><td>f50f</td></tr>
 <tr><td><i class="fab fa-markdown" style="font-size: 20px;"></i> markdown</td><td>&lt;i class="fab fa-markdown"&gt;&lt;/i&gt;</td><td>f60f</td></tr>
 <tr><td><i class="fab fa-mastodon" style="font-size: 20px;"></i> mastodon</td><td>&lt;i class="fab fa-mastodon"&gt;&lt;/i&gt;</td><td>f4f6</td></tr>
 <tr><td><i class="fab fa-maxcdn" style="font-size: 20px;"></i> maxcdn</td><td>&lt;i class="fab fa-maxcdn"&gt;&lt;/i&gt;</td><td>f136</td></tr>
 <tr><td><i class="fab fa-medapps" style="font-size: 20px;"></i> medapps</td><td>&lt;i class="fab fa-medapps"&gt;&lt;/i&gt;</td><td>f3c6</td></tr>
 <tr><td><i class="fab fa-medium" style="font-size: 20px;"></i> medium</td><td>&lt;i class="fab fa-medium"&gt;&lt;/i&gt;</td><td>f23a</td></tr>
 <tr><td><i class="fab fa-medium-m" style="font-size: 20px;"></i> medium-m</td><td>&lt;i class="fab fa-medium-m"&gt;&lt;/i&gt;</td><td>f3c7</td></tr>
 <tr><td><i class="fab fa-medrt" style="font-size: 20px;"></i> medrt</td><td>&lt;i class="fab fa-medrt"&gt;&lt;/i&gt;</td><td>f3c8</td></tr>
 <tr><td><i class="fab fa-meetup" style="font-size: 20px;"></i> meetup</td><td>&lt;i class="fab fa-meetup"&gt;&lt;/i&gt;</td><td>f2e0</td></tr>
 <tr><td><i class="fab fa-megaport" style="font-size: 20px;"></i> megaport</td><td>&lt;i class="fab fa-megaport"&gt;&lt;/i&gt;</td><td>f5a3</td></tr>
 <tr><td><i class="fab fa-mendeley" style="font-size: 20px;"></i> mendeley</td><td>&lt;i class="fab fa-mendeley"&gt;&lt;/i&gt;</td><td>f7b3</td></tr>
 <tr><td><i class="fab fa-microsoft" style="font-size: 20px;"></i> microsoft</td><td>&lt;i class="fab fa-microsoft"&gt;&lt;/i&gt;</td><td>f3ca</td></tr>
 <tr><td><i class="fab fa-mix" style="font-size: 20px;"></i> mix</td><td>&lt;i class="fab fa-mix"&gt;&lt;/i&gt;</td><td>f3cb</td></tr>
 <tr><td><i class="fab fa-mixcloud" style="font-size: 20px;"></i> mixcloud</td><td>&lt;i class="fab fa-mixcloud"&gt;&lt;/i&gt;</td><td>f289</td></tr>
 <tr><td><i class="fab fa-mizuni" style="font-size: 20px;"></i> mizuni</td><td>&lt;i class="fab fa-mizuni"&gt;&lt;/i&gt;</td><td>f3cc</td></tr>
 <tr><td><i class="fab fa-modx" style="font-size: 20px;"></i> modx</td><td>&lt;i class="fab fa-modx"&gt;&lt;/i&gt;</td><td>f285</td></tr>
 <tr><td><i class="fab fa-monero" style="font-size: 20px;"></i> monero</td><td>&lt;i class="fab fa-monero"&gt;&lt;/i&gt;</td><td>f3d0</td></tr>
 <tr><td><i class="fab fa-napster" style="font-size: 20px;"></i> napster</td><td>&lt;i class="fab fa-napster"&gt;&lt;/i&gt;</td><td>f3d2</td></tr>
 <tr><td><i class="fab fa-neos" style="font-size: 20px;"></i> neos</td><td>&lt;i class="fab fa-neos"&gt;&lt;/i&gt;</td><td>f612</td></tr>
 <tr><td><i class="fab fa-nimblr" style="font-size: 20px;"></i> nimblr</td><td>&lt;i class="fab fa-nimblr"&gt;&lt;/i&gt;</td><td>f5a8</td></tr>
 <tr><td><i class="fab fa-node" style="font-size: 20px;"></i> node</td><td>&lt;i class="fab fa-node"&gt;&lt;/i&gt;</td><td>f419</td></tr>
 <tr><td><i class="fab fa-node-js" style="font-size: 20px;"></i> node-js</td><td>&lt;i class="fab fa-node-js"&gt;&lt;/i&gt;</td><td>f3d3</td></tr>
 <tr><td><i class="fab fa-npm" style="font-size: 20px;"></i> npm</td><td>&lt;i class="fab fa-npm"&gt;&lt;/i&gt;</td><td>f3d4</td></tr>
 <tr><td><i class="fab fa-ns8" style="font-size: 20px;"></i> ns8</td><td>&lt;i class="fab fa-ns8"&gt;&lt;/i&gt;</td><td>f3d5</td></tr>
 <tr><td><i class="fab fa-nutritionix" style="font-size: 20px;"></i> nutritionix</td><td>&lt;i class="fab fa-nutritionix"&gt;&lt;/i&gt;</td><td>f3d6</td></tr>
 <tr><td><i class="fab fa-odnoklassniki" style="font-size: 20px;"></i> odnoklassniki</td><td>&lt;i class="fab fa-odnoklassniki"&gt;&lt;/i&gt;</td><td>f263</td></tr>
 <tr><td><i class="fab fa-odnoklassniki-square" style="font-size: 20px;"></i> odnoklassniki-square</td><td>&lt;i class="fab fa-odnoklassniki-square"&gt;&lt;/i&gt;</td><td>f264</td></tr>
 <tr><td><i class="fab fa-old-republic" style="font-size: 20px;"></i> old-republic</td><td>&lt;i class="fab fa-old-republic"&gt;&lt;/i&gt;</td><td>f510</td></tr>
 <tr><td><i class="fab fa-opencart" style="font-size: 20px;"></i> opencart</td><td>&lt;i class="fab fa-opencart"&gt;&lt;/i&gt;</td><td>f23d</td></tr>
 <tr><td><i class="fab fa-openid" style="font-size: 20px;"></i> openid</td><td>&lt;i class="fab fa-openid"&gt;&lt;/i&gt;</td><td>f19b</td></tr>
 <tr><td><i class="fab fa-opera" style="font-size: 20px;"></i> opera</td><td>&lt;i class="fab fa-opera"&gt;&lt;/i&gt;</td><td>f26a</td></tr>
 <tr><td><i class="fab fa-optin-monster" style="font-size: 20px;"></i> optin-monster</td><td>&lt;i class="fab fa-optin-monster"&gt;&lt;/i&gt;</td><td>f23c</td></tr>
 <tr><td><i class="fab fa-osi" style="font-size: 20px;"></i> osi</td><td>&lt;i class="fab fa-osi"&gt;&lt;/i&gt;</td><td>f41a</td></tr>
 <tr><td><i class="fab fa-page4" style="font-size: 20px;"></i> page4</td><td>&lt;i class="fab fa-page4"&gt;&lt;/i&gt;</td><td>f3d7</td></tr>
 <tr><td><i class="fab fa-pagelines" style="font-size: 20px;"></i> pagelines</td><td>&lt;i class="fab fa-pagelines"&gt;&lt;/i&gt;</td><td>f18c</td></tr>
 <tr><td><i class="fab fa-palfed" style="font-size: 20px;"></i> palfed</td><td>&lt;i class="fab fa-palfed"&gt;&lt;/i&gt;</td><td>f3d8</td></tr>
 <tr><td><i class="fab fa-patreon" style="font-size: 20px;"></i> patreon</td><td>&lt;i class="fab fa-patreon"&gt;&lt;/i&gt;</td><td>f3d9</td></tr>
 <tr><td><i class="fab fa-paypal" style="font-size: 20px;"></i> paypal</td><td>&lt;i class="fab fa-paypal"&gt;&lt;/i&gt;</td><td>f1ed</td></tr>
 <tr><td><i class="fab fa-penny-arcade" style="font-size: 20px;"></i> penny-arcade</td><td>&lt;i class="fab fa-penny-arcade"&gt;&lt;/i&gt;</td><td>f704</td></tr>
 <tr><td><i class="fab fa-periscope" style="font-size: 20px;"></i> periscope</td><td>&lt;i class="fab fa-periscope"&gt;&lt;/i&gt;</td><td>f3da</td></tr>
 <tr><td><i class="fab fa-phabricator" style="font-size: 20px;"></i> phabricator</td><td>&lt;i class="fab fa-phabricator"&gt;&lt;/i&gt;</td><td>f3db</td></tr>
 <tr><td><i class="fab fa-phoenix-framework" style="font-size: 20px;"></i> phoenix-framework</td><td>&lt;i class="fab fa-phoenix-framework"&gt;&lt;/i&gt;</td><td>f3dc</td></tr>
 <tr><td><i class="fab fa-phoenix-squadron" style="font-size: 20px;"></i> phoenix-squadron</td><td>&lt;i class="fab fa-phoenix-squadron"&gt;&lt;/i&gt;</td><td>f511</td></tr>
 <tr><td><i class="fab fa-php" style="font-size: 20px;"></i> php</td><td>&lt;i class="fab fa-php"&gt;&lt;/i&gt;</td><td>f457</td></tr>
 <tr><td><i class="fab fa-pied-piper" style="font-size: 20px;"></i> pied-piper</td><td>&lt;i class="fab fa-pied-piper"&gt;&lt;/i&gt;</td><td>f2ae</td></tr>
 <tr><td><i class="fab fa-pied-piper-alt" style="font-size: 20px;"></i> pied-piper-alt</td><td>&lt;i class="fab fa-pied-piper-alt"&gt;&lt;/i&gt;</td><td>f1a8</td></tr>
 <tr><td><i class="fab fa-pied-piper-hat" style="font-size: 20px;"></i> pied-piper-hat</td><td>&lt;i class="fab fa-pied-piper-hat"&gt;&lt;/i&gt;</td><td>f4e5</td></tr>
 <tr><td><i class="fab fa-pied-piper-pp" style="font-size: 20px;"></i> pied-piper-pp</td><td>&lt;i class="fab fa-pied-piper-pp"&gt;&lt;/i&gt;</td><td>f1a7</td></tr>
 <tr><td><i class="fab fa-pinterest" style="font-size: 20px;"></i> pinterest</td><td>&lt;i class="fab fa-pinterest"&gt;&lt;/i&gt;</td><td>f0d2</td></tr>
 <tr><td><i class="fab fa-pinterest-p" style="font-size: 20px;"></i> pinterest-p</td><td>&lt;i class="fab fa-pinterest-p"&gt;&lt;/i&gt;</td><td>f231</td></tr>
 <tr><td><i class="fab fa-pinterest-square" style="font-size: 20px;"></i> pinterest-square</td><td>&lt;i class="fab fa-pinterest-square"&gt;&lt;/i&gt;</td><td>f0d3</td></tr>
 <tr><td><i class="fab fa-playstation" style="font-size: 20px;"></i> playstation</td><td>&lt;i class="fab fa-playstation"&gt;&lt;/i&gt;</td><td>f3df</td></tr>
 <tr><td><i class="fab fa-product-hunt" style="font-size: 20px;"></i> product-hunt</td><td>&lt;i class="fab fa-product-hunt"&gt;&lt;/i&gt;</td><td>f288</td></tr>
 <tr><td><i class="fab fa-pushed" style="font-size: 20px;"></i> pushed</td><td>&lt;i class="fab fa-pushed"&gt;&lt;/i&gt;</td><td>f3e1</td></tr>
 <tr><td><i class="fab fa-python" style="font-size: 20px;"></i> python</td><td>&lt;i class="fab fa-python"&gt;&lt;/i&gt;</td><td>f3e2</td></tr>
 <tr><td><i class="fab fa-qq" style="font-size: 20px;"></i> qq</td><td>&lt;i class="fab fa-qq"&gt;&lt;/i&gt;</td><td>f1d6</td></tr>
 <tr><td><i class="fab fa-quinscape" style="font-size: 20px;"></i> quinscape</td><td>&lt;i class="fab fa-quinscape"&gt;&lt;/i&gt;</td><td>f459</td></tr>
 <tr><td><i class="fab fa-quora" style="font-size: 20px;"></i> quora</td><td>&lt;i class="fab fa-quora"&gt;&lt;/i&gt;</td><td>f2c4</td></tr>
 <tr><td><i class="fab fa-r-project" style="font-size: 20px;"></i> r-project</td><td>&lt;i class="fab fa-r-project"&gt;&lt;/i&gt;</td><td>f4f7</td></tr>
 <tr><td><i class="fab fa-raspberry-pi" style="font-size: 20px;"></i> raspberry-pi</td><td>&lt;i class="fab fa-raspberry-pi"&gt;&lt;/i&gt;</td><td>f7bb</td></tr>
 <tr><td><i class="fab fa-ravelry" style="font-size: 20px;"></i> ravelry</td><td>&lt;i class="fab fa-ravelry"&gt;&lt;/i&gt;</td><td>f2d9</td></tr>
 <tr><td><i class="fab fa-react" style="font-size: 20px;"></i> react</td><td>&lt;i class="fab fa-react"&gt;&lt;/i&gt;</td><td>f41b</td></tr>
 <tr><td><i class="fab fa-reacteurope" style="font-size: 20px;"></i> reacteurope</td><td>&lt;i class="fab fa-reacteurope"&gt;&lt;/i&gt;</td><td>f75d</td></tr>
 <tr><td><i class="fab fa-readme" style="font-size: 20px;"></i> readme</td><td>&lt;i class="fab fa-readme"&gt;&lt;/i&gt;</td><td>f4d5</td></tr>
 <tr><td><i class="fab fa-rebel" style="font-size: 20px;"></i> rebel</td><td>&lt;i class="fab fa-rebel"&gt;&lt;/i&gt;</td><td>f1d0</td></tr>
 <tr><td><i class="fab fa-red-river" style="font-size: 20px;"></i> red-river</td><td>&lt;i class="fab fa-red-river"&gt;&lt;/i&gt;</td><td>f3e3</td></tr>
 <tr><td><i class="fab fa-reddit" style="font-size: 20px;"></i> reddit</td><td>&lt;i class="fab fa-reddit"&gt;&lt;/i&gt;</td><td>f1a1</td></tr>
 <tr><td><i class="fab fa-reddit-alien" style="font-size: 20px;"></i> reddit-alien</td><td>&lt;i class="fab fa-reddit-alien"&gt;&lt;/i&gt;</td><td>f281</td></tr>
 <tr><td><i class="fab fa-reddit-square" style="font-size: 20px;"></i> reddit-square</td><td>&lt;i class="fab fa-reddit-square"&gt;&lt;/i&gt;</td><td>f1a2</td></tr>
 <tr><td><i class="fab fa-redhat" style="font-size: 20px;"></i> redhat</td><td>&lt;i class="fab fa-redhat"&gt;&lt;/i&gt;</td><td>f7bc</td></tr>
 <tr><td><i class="fab fa-renren" style="font-size: 20px;"></i> renren</td><td>&lt;i class="fab fa-renren"&gt;&lt;/i&gt;</td><td>f18b</td></tr>
 <tr><td><i class="fab fa-replyd" style="font-size: 20px;"></i> replyd</td><td>&lt;i class="fab fa-replyd"&gt;&lt;/i&gt;</td><td>f3e6</td></tr>
 <tr><td><i class="fab fa-researchgate" style="font-size: 20px;"></i> researchgate</td><td>&lt;i class="fab fa-researchgate"&gt;&lt;/i&gt;</td><td>f4f8</td></tr>
 <tr><td><i class="fab fa-resolving" style="font-size: 20px;"></i> resolving</td><td>&lt;i class="fab fa-resolving"&gt;&lt;/i&gt;</td><td>f3e7</td></tr>
 <tr><td><i class="fab fa-rev" style="font-size: 20px;"></i> rev</td><td>&lt;i class="fab fa-rev"&gt;&lt;/i&gt;</td><td>f5b2</td></tr>
 <tr><td><i class="fab fa-rocketchat" style="font-size: 20px;"></i> rocketchat</td><td>&lt;i class="fab fa-rocketchat"&gt;&lt;/i&gt;</td><td>f3e8</td></tr>
 <tr><td><i class="fab fa-rockrms" style="font-size: 20px;"></i> rockrms</td><td>&lt;i class="fab fa-rockrms"&gt;&lt;/i&gt;</td><td>f3e9</td></tr>
 <tr><td><i class="fab fa-safari" style="font-size: 20px;"></i> safari</td><td>&lt;i class="fab fa-safari"&gt;&lt;/i&gt;</td><td>f267</td></tr>
 <tr><td><i class="fab fa-salesforce" style="font-size: 20px;"></i> salesforce</td><td>&lt;i class="fab fa-salesforce"&gt;&lt;/i&gt;</td><td>f83b</td></tr>
 <tr><td><i class="fab fa-sass" style="font-size: 20px;"></i> sass</td><td>&lt;i class="fab fa-sass"&gt;&lt;/i&gt;</td><td>f41e</td></tr>
 <tr><td><i class="fab fa-schlix" style="font-size: 20px;"></i> schlix</td><td>&lt;i class="fab fa-schlix"&gt;&lt;/i&gt;</td><td>f3ea</td></tr>
 <tr><td><i class="fab fa-scribd" style="font-size: 20px;"></i> scribd</td><td>&lt;i class="fab fa-scribd"&gt;&lt;/i&gt;</td><td>f28a</td></tr>
 <tr><td><i class="fab fa-searchengin" style="font-size: 20px;"></i> searchengin</td><td>&lt;i class="fab fa-searchengin"&gt;&lt;/i&gt;</td><td>f3eb</td></tr>
 <tr><td><i class="fab fa-sellcast" style="font-size: 20px;"></i> sellcast</td><td>&lt;i class="fab fa-sellcast"&gt;&lt;/i&gt;</td><td>f2da</td></tr>
 <tr><td><i class="fab fa-sellsy" style="font-size: 20px;"></i> sellsy</td><td>&lt;i class="fab fa-sellsy"&gt;&lt;/i&gt;</td><td>f213</td></tr>
 <tr><td><i class="fab fa-servicestack" style="font-size: 20px;"></i> servicestack</td><td>&lt;i class="fab fa-servicestack"&gt;&lt;/i&gt;</td><td>f3ec</td></tr>
 <tr><td><i class="fab fa-shirtsinbulk" style="font-size: 20px;"></i> shirtsinbulk</td><td>&lt;i class="fab fa-shirtsinbulk"&gt;&lt;/i&gt;</td><td>f214</td></tr>
 <tr><td><i class="fab fa-shopware" style="font-size: 20px;"></i> shopware</td><td>&lt;i class="fab fa-shopware"&gt;&lt;/i&gt;</td><td>f5b5</td></tr>
 <tr><td><i class="fab fa-simplybuilt" style="font-size: 20px;"></i> simplybuilt</td><td>&lt;i class="fab fa-simplybuilt"&gt;&lt;/i&gt;</td><td>f215</td></tr>
 <tr><td><i class="fab fa-sistrix" style="font-size: 20px;"></i> sistrix</td><td>&lt;i class="fab fa-sistrix"&gt;&lt;/i&gt;</td><td>f3ee</td></tr>
 <tr><td><i class="fab fa-sith" style="font-size: 20px;"></i> sith</td><td>&lt;i class="fab fa-sith"&gt;&lt;/i&gt;</td><td>f512</td></tr>
 <tr><td><i class="fab fa-sketch" style="font-size: 20px;"></i> sketch</td><td>&lt;i class="fab fa-sketch"&gt;&lt;/i&gt;</td><td>f7c6</td></tr>
 <tr><td><i class="fab fa-skyatlas" style="font-size: 20px;"></i> skyatlas</td><td>&lt;i class="fab fa-skyatlas"&gt;&lt;/i&gt;</td><td>f216</td></tr>
 <tr><td><i class="fab fa-skype" style="font-size: 20px;"></i> skype</td><td>&lt;i class="fab fa-skype"&gt;&lt;/i&gt;</td><td>f17e</td></tr>
 <tr><td><i class="fab fa-slack" style="font-size: 20px;"></i> slack</td><td>&lt;i class="fab fa-slack"&gt;&lt;/i&gt;</td><td>f198</td></tr>
 <tr><td><i class="fab fa-slack-hash" style="font-size: 20px;"></i> slack-hash</td><td>&lt;i class="fab fa-slack-hash"&gt;&lt;/i&gt;</td><td>f3ef</td></tr>
 <tr><td><i class="fab fa-slideshare" style="font-size: 20px;"></i> slideshare</td><td>&lt;i class="fab fa-slideshare"&gt;&lt;/i&gt;</td><td>f1e7</td></tr>
 <tr><td><i class="fab fa-snapchat" style="font-size: 20px;"></i> snapchat</td><td>&lt;i class="fab fa-snapchat"&gt;&lt;/i&gt;</td><td>f2ab</td></tr>
 <tr><td><i class="fab fa-snapchat-ghost" style="font-size: 20px;"></i> snapchat-ghost</td><td>&lt;i class="fab fa-snapchat-ghost"&gt;&lt;/i&gt;</td><td>f2ac</td></tr>
 <tr><td><i class="fab fa-snapchat-square" style="font-size: 20px;"></i> snapchat-square</td><td>&lt;i class="fab fa-snapchat-square"&gt;&lt;/i&gt;</td><td>f2ad</td></tr>
 <tr><td><i class="fab fa-soundcloud" style="font-size: 20px;"></i> soundcloud</td><td>&lt;i class="fab fa-soundcloud"&gt;&lt;/i&gt;</td><td>f1be</td></tr>
 <tr><td><i class="fab fa-sourcetree" style="font-size: 20px;"></i> sourcetree</td><td>&lt;i class="fab fa-sourcetree"&gt;&lt;/i&gt;</td><td>f7d3</td></tr>
 <tr><td><i class="fab fa-speakap" style="font-size: 20px;"></i> speakap</td><td>&lt;i class="fab fa-speakap"&gt;&lt;/i&gt;</td><td>f3f3</td></tr>
 <tr><td><i class="fab fa-speaker-deck" style="font-size: 20px;"></i> speaker-deck</td><td>&lt;i class="fab fa-speaker-deck"&gt;&lt;/i&gt;</td><td>f83c</td></tr>
 <tr><td><i class="fab fa-spotify" style="font-size: 20px;"></i> spotify</td><td>&lt;i class="fab fa-spotify"&gt;&lt;/i&gt;</td><td>f1bc</td></tr>
 <tr><td><i class="fab fa-squarespace" style="font-size: 20px;"></i> squarespace</td><td>&lt;i class="fab fa-squarespace"&gt;&lt;/i&gt;</td><td>f5be</td></tr>
 <tr><td><i class="fab fa-stack-exchange" style="font-size: 20px;"></i> stack-exchange</td><td>&lt;i class="fab fa-stack-exchange"&gt;&lt;/i&gt;</td><td>f18d</td></tr>
 <tr><td><i class="fab fa-stack-overflow" style="font-size: 20px;"></i> stack-overflow</td><td>&lt;i class="fab fa-stack-overflow"&gt;&lt;/i&gt;</td><td>f16c</td></tr>
 <tr><td><i class="fab fa-stackpath" style="font-size: 20px;"></i> stackpath</td><td>&lt;i class="fab fa-stackpath"&gt;&lt;/i&gt;</td><td>f842</td></tr>
 <tr><td><i class="fab fa-staylinked" style="font-size: 20px;"></i> staylinked</td><td>&lt;i class="fab fa-staylinked"&gt;&lt;/i&gt;</td><td>f3f5</td></tr>
 <tr><td><i class="fab fa-steam" style="font-size: 20px;"></i> steam</td><td>&lt;i class="fab fa-steam"&gt;&lt;/i&gt;</td><td>f1b6</td></tr>
 <tr><td><i class="fab fa-steam-square" style="font-size: 20px;"></i> steam-square</td><td>&lt;i class="fab fa-steam-square"&gt;&lt;/i&gt;</td><td>f1b7</td></tr>
 <tr><td><i class="fab fa-steam-symbol" style="font-size: 20px;"></i> steam-symbol</td><td>&lt;i class="fab fa-steam-symbol"&gt;&lt;/i&gt;</td><td>f3f6</td></tr>
 <tr><td><i class="fab fa-sticker-mule" style="font-size: 20px;"></i> sticker-mule</td><td>&lt;i class="fab fa-sticker-mule"&gt;&lt;/i&gt;</td><td>f3f7</td></tr>
 <tr><td><i class="fab fa-strava" style="font-size: 20px;"></i> strava</td><td>&lt;i class="fab fa-strava"&gt;&lt;/i&gt;</td><td>f428</td></tr>
 <tr><td><i class="fab fa-stripe" style="font-size: 20px;"></i> stripe</td><td>&lt;i class="fab fa-stripe"&gt;&lt;/i&gt;</td><td>f429</td></tr>
 <tr><td><i class="fab fa-stripe-s" style="font-size: 20px;"></i> stripe-s</td><td>&lt;i class="fab fa-stripe-s"&gt;&lt;/i&gt;</td><td>f42a</td></tr>
 <tr><td><i class="fab fa-studiovinari" style="font-size: 20px;"></i> studiovinari</td><td>&lt;i class="fab fa-studiovinari"&gt;&lt;/i&gt;</td><td>f3f8</td></tr>
 <tr><td><i class="fab fa-stumbleupon" style="font-size: 20px;"></i> stumbleupon</td><td>&lt;i class="fab fa-stumbleupon"&gt;&lt;/i&gt;</td><td>f1a4</td></tr>
 <tr><td><i class="fab fa-stumbleupon-circle" style="font-size: 20px;"></i> stumbleupon-circle</td><td>&lt;i class="fab fa-stumbleupon-circle"&gt;&lt;/i&gt;</td><td>f1a3</td></tr>
 <tr><td><i class="fab fa-superpowers" style="font-size: 20px;"></i> superpowers</td><td>&lt;i class="fab fa-superpowers"&gt;&lt;/i&gt;</td><td>f2dd</td></tr>
 <tr><td><i class="fab fa-supple" style="font-size: 20px;"></i> supple</td><td>&lt;i class="fab fa-supple"&gt;&lt;/i&gt;</td><td>f3f9</td></tr>
 <tr><td><i class="fab fa-suse" style="font-size: 20px;"></i> suse</td><td>&lt;i class="fab fa-suse"&gt;&lt;/i&gt;</td><td>f7d6</td></tr>
 <tr><td><i class="fab fa-symfony" style="font-size: 20px;"></i> symfony</td><td>&lt;i class="fab fa-symfony"&gt;&lt;/i&gt;</td><td>f83d</td></tr>
 <tr><td><i class="fab fa-teamspeak" style="font-size: 20px;"></i> teamspeak</td><td>&lt;i class="fab fa-teamspeak"&gt;&lt;/i&gt;</td><td>f4f9</td></tr>
 <tr><td><i class="fab fa-telegram" style="font-size: 20px;"></i> telegram</td><td>&lt;i class="fab fa-telegram"&gt;&lt;/i&gt;</td><td>f2c6</td></tr>
 <tr><td><i class="fab fa-telegram-plane" style="font-size: 20px;"></i> telegram-plane</td><td>&lt;i class="fab fa-telegram-plane"&gt;&lt;/i&gt;</td><td>f3fe</td></tr>
 <tr><td><i class="fab fa-tencent-weibo" style="font-size: 20px;"></i> tencent-weibo</td><td>&lt;i class="fab fa-tencent-weibo"&gt;&lt;/i&gt;</td><td>f1d5</td></tr>
 <tr><td><i class="fab fa-the-red-yeti" style="font-size: 20px;"></i> the-red-yeti</td><td>&lt;i class="fab fa-the-red-yeti"&gt;&lt;/i&gt;</td><td>f69d</td></tr>
 <tr><td><i class="fab fa-themeco" style="font-size: 20px;"></i> themeco</td><td>&lt;i class="fab fa-themeco"&gt;&lt;/i&gt;</td><td>f5c6</td></tr>
 <tr><td><i class="fab fa-themeisle" style="font-size: 20px;"></i> themeisle</td><td>&lt;i class="fab fa-themeisle"&gt;&lt;/i&gt;</td><td>f2b2</td></tr>
 <tr><td><i class="fab fa-think-peaks" style="font-size: 20px;"></i> think-peaks</td><td>&lt;i class="fab fa-think-peaks"&gt;&lt;/i&gt;</td><td>f731</td></tr>
 <tr><td><i class="fab fa-trade-federation" style="font-size: 20px;"></i> trade-federation</td><td>&lt;i class="fab fa-trade-federation"&gt;&lt;/i&gt;</td><td>f513</td></tr>
 <tr><td><i class="fab fa-trello" style="font-size: 20px;"></i> trello</td><td>&lt;i class="fab fa-trello"&gt;&lt;/i&gt;</td><td>f181</td></tr>
 <tr><td><i class="fab fa-tripadvisor" style="font-size: 20px;"></i> tripadvisor</td><td>&lt;i class="fab fa-tripadvisor"&gt;&lt;/i&gt;</td><td>f262</td></tr>
 <tr><td><i class="fab fa-tumblr" style="font-size: 20px;"></i> tumblr</td><td>&lt;i class="fab fa-tumblr"&gt;&lt;/i&gt;</td><td>f173</td></tr>
 <tr><td><i class="fab fa-tumblr-square" style="font-size: 20px;"></i> tumblr-square</td><td>&lt;i class="fab fa-tumblr-square"&gt;&lt;/i&gt;</td><td>f174</td></tr>
 <tr><td><i class="fab fa-twitch" style="font-size: 20px;"></i> twitch</td><td>&lt;i class="fab fa-twitch"&gt;&lt;/i&gt;</td><td>f1e8</td></tr>
 <tr><td><i class="fab fa-twitter" style="font-size: 20px;"></i> twitter</td><td>&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;</td><td>f099</td></tr>
 <tr><td><i class="fab fa-twitter-square" style="font-size: 20px;"></i> twitter-square</td><td>&lt;i class="fab fa-twitter-square"&gt;&lt;/i&gt;</td><td>f081</td></tr>
 <tr><td><i class="fab fa-typo3" style="font-size: 20px;"></i> typo3</td><td>&lt;i class="fab fa-typo3"&gt;&lt;/i&gt;</td><td>f42b</td></tr>
 <tr><td><i class="fab fa-uber" style="font-size: 20px;"></i> uber</td><td>&lt;i class="fab fa-uber"&gt;&lt;/i&gt;</td><td>f402</td></tr>
 <tr><td><i class="fab fa-ubuntu" style="font-size: 20px;"></i> ubuntu</td><td>&lt;i class="fab fa-ubuntu"&gt;&lt;/i&gt;</td><td>f7df</td></tr>
 <tr><td><i class="fab fa-uikit" style="font-size: 20px;"></i> uikit</td><td>&lt;i class="fab fa-uikit"&gt;&lt;/i&gt;</td><td>f403</td></tr>
 <tr><td><i class="fab fa-uniregistry" style="font-size: 20px;"></i> uniregistry</td><td>&lt;i class="fab fa-uniregistry"&gt;&lt;/i&gt;</td><td>f404</td></tr>
 <tr><td><i class="fab fa-untappd" style="font-size: 20px;"></i> untappd</td><td>&lt;i class="fab fa-untappd"&gt;&lt;/i&gt;</td><td>f405</td></tr>
 <tr><td><i class="fab fa-ups" style="font-size: 20px;"></i> ups</td><td>&lt;i class="fab fa-ups"&gt;&lt;/i&gt;</td><td>f7e0</td></tr>
 <tr><td><i class="fab fa-usb" style="font-size: 20px;"></i> usb</td><td>&lt;i class="fab fa-usb"&gt;&lt;/i&gt;</td><td>f287</td></tr>
 <tr><td><i class="fab fa-usps" style="font-size: 20px;"></i> usps</td><td>&lt;i class="fab fa-usps"&gt;&lt;/i&gt;</td><td>f7e1</td></tr>
 <tr><td><i class="fab fa-ussunnah" style="font-size: 20px;"></i> ussunnah</td><td>&lt;i class="fab fa-ussunnah"&gt;&lt;/i&gt;</td><td>f407</td></tr>
 <tr><td><i class="fab fa-vaadin" style="font-size: 20px;"></i> vaadin</td><td>&lt;i class="fab fa-vaadin"&gt;&lt;/i&gt;</td><td>f408</td></tr>
 <tr><td><i class="fab fa-viacoin" style="font-size: 20px;"></i> viacoin</td><td>&lt;i class="fab fa-viacoin"&gt;&lt;/i&gt;</td><td>f237</td></tr>
 <tr><td><i class="fab fa-viadeo" style="font-size: 20px;"></i> viadeo</td><td>&lt;i class="fab fa-viadeo"&gt;&lt;/i&gt;</td><td>f2a9</td></tr>
 <tr><td><i class="fab fa-viadeo-square" style="font-size: 20px;"></i> viadeo-square</td><td>&lt;i class="fab fa-viadeo-square"&gt;&lt;/i&gt;</td><td>f2aa</td></tr>
 <tr><td><i class="fab fa-viber" style="font-size: 20px;"></i> viber</td><td>&lt;i class="fab fa-viber"&gt;&lt;/i&gt;</td><td>f409</td></tr>
 <tr><td><i class="fab fa-vimeo" style="font-size: 20px;"></i> vimeo</td><td>&lt;i class="fab fa-vimeo"&gt;&lt;/i&gt;</td><td>f40a</td></tr>
 <tr><td><i class="fab fa-vimeo-square" style="font-size: 20px;"></i> vimeo-square</td><td>&lt;i class="fab fa-vimeo-square"&gt;&lt;/i&gt;</td><td>f194</td></tr>
 <tr><td><i class="fab fa-vimeo-v" style="font-size: 20px;"></i> vimeo-v</td><td>&lt;i class="fab fa-vimeo-v"&gt;&lt;/i&gt;</td><td>f27d</td></tr>
 <tr><td><i class="fab fa-vine" style="font-size: 20px;"></i> vine</td><td>&lt;i class="fab fa-vine"&gt;&lt;/i&gt;</td><td>f1ca</td></tr>
 <tr><td><i class="fab fa-vk" style="font-size: 20px;"></i> vk</td><td>&lt;i class="fab fa-vk"&gt;&lt;/i&gt;</td><td>f189</td></tr>
 <tr><td><i class="fab fa-vnv" style="font-size: 20px;"></i> vnv</td><td>&lt;i class="fab fa-vnv"&gt;&lt;/i&gt;</td><td>f40b</td></tr>
 <tr><td><i class="fab fa-vuejs" style="font-size: 20px;"></i> vuejs</td><td>&lt;i class="fab fa-vuejs"&gt;&lt;/i&gt;</td><td>f41f</td></tr>
 <tr><td><i class="fab fa-waze" style="font-size: 20px;"></i> waze</td><td>&lt;i class="fab fa-waze"&gt;&lt;/i&gt;</td><td>f83f</td></tr>
 <tr><td><i class="fab fa-weebly" style="font-size: 20px;"></i> weebly</td><td>&lt;i class="fab fa-weebly"&gt;&lt;/i&gt;</td><td>f5cc</td></tr>
 <tr><td><i class="fab fa-weibo" style="font-size: 20px;"></i> weibo</td><td>&lt;i class="fab fa-weibo"&gt;&lt;/i&gt;</td><td>f18a</td></tr>
 <tr><td><i class="fab fa-weixin" style="font-size: 20px;"></i> weixin</td><td>&lt;i class="fab fa-weixin"&gt;&lt;/i&gt;</td><td>f1d7</td></tr>
 <tr><td><i class="fab fa-whatsapp" style="font-size: 20px;"></i> whatsapp</td><td>&lt;i class="fab fa-whatsapp"&gt;&lt;/i&gt;</td><td>f232</td></tr>
 <tr><td><i class="fab fa-whatsapp-square" style="font-size: 20px;"></i> whatsapp-square</td><td>&lt;i class="fab fa-whatsapp-square"&gt;&lt;/i&gt;</td><td>f40c</td></tr>
 <tr><td><i class="fab fa-whmcs" style="font-size: 20px;"></i> whmcs</td><td>&lt;i class="fab fa-whmcs"&gt;&lt;/i&gt;</td><td>f40d</td></tr>
 <tr><td><i class="fab fa-wikipedia-w" style="font-size: 20px;"></i> wikipedia-w</td><td>&lt;i class="fab fa-wikipedia-w"&gt;&lt;/i&gt;</td><td>f266</td></tr>
 <tr><td><i class="fab fa-windows" style="font-size: 20px;"></i> windows</td><td>&lt;i class="fab fa-windows"&gt;&lt;/i&gt;</td><td>f17a</td></tr>
 <tr><td><i class="fab fa-wix" style="font-size: 20px;"></i> wix</td><td>&lt;i class="fab fa-wix"&gt;&lt;/i&gt;</td><td>f5cf</td></tr>
 <tr><td><i class="fab fa-wizards-of-the-coast" style="font-size: 20px;"></i> wizards-of-the-coast</td><td>&lt;i class="fab fa-wizards-of-the-coast"&gt;&lt;/i&gt;</td><td>f730</td></tr>
 <tr><td><i class="fab fa-wolf-pack-battalion" style="font-size: 20px;"></i> wolf-pack-battalion</td><td>&lt;i class="fab fa-wolf-pack-battalion"&gt;&lt;/i&gt;</td><td>f514</td></tr>
 <tr><td><i class="fab fa-wordpress" style="font-size: 20px;"></i> wordpress</td><td>&lt;i class="fab fa-wordpress"&gt;&lt;/i&gt;</td><td>f19a</td></tr>
 <tr><td><i class="fab fa-wordpress-simple" style="font-size: 20px;"></i> wordpress-simple</td><td>&lt;i class="fab fa-wordpress-simple"&gt;&lt;/i&gt;</td><td>f411</td></tr>
 <tr><td><i class="fab fa-wpbeginner" style="font-size: 20px;"></i> wpbeginner</td><td>&lt;i class="fab fa-wpbeginner"&gt;&lt;/i&gt;</td><td>f297</td></tr>
 <tr><td><i class="fab fa-wpexplorer" style="font-size: 20px;"></i> wpexplorer</td><td>&lt;i class="fab fa-wpexplorer"&gt;&lt;/i&gt;</td><td>f2de</td></tr>
 <tr><td><i class="fab fa-wpforms" style="font-size: 20px;"></i> wpforms</td><td>&lt;i class="fab fa-wpforms"&gt;&lt;/i&gt;</td><td>f298</td></tr>
 <tr><td><i class="fab fa-wpressr" style="font-size: 20px;"></i> wpressr</td><td>&lt;i class="fab fa-wpressr"&gt;&lt;/i&gt;</td><td>f3e4</td></tr>
 <tr><td><i class="fab fa-xbox" style="font-size: 20px;"></i> xbox</td><td>&lt;i class="fab fa-xbox"&gt;&lt;/i&gt;</td><td>f412</td></tr>
 <tr><td><i class="fab fa-xing" style="font-size: 20px;"></i> xing</td><td>&lt;i class="fab fa-xing"&gt;&lt;/i&gt;</td><td>f168</td></tr>
 <tr><td><i class="fab fa-xing-square" style="font-size: 20px;"></i> xing-square</td><td>&lt;i class="fab fa-xing-square"&gt;&lt;/i&gt;</td><td>f169</td></tr>
 <tr><td><i class="fab fa-y-combinator" style="font-size: 20px;"></i> y-combinator</td><td>&lt;i class="fab fa-y-combinator"&gt;&lt;/i&gt;</td><td>f23b</td></tr>
 <tr><td><i class="fab fa-yahoo" style="font-size: 20px;"></i> yahoo</td><td>&lt;i class="fab fa-yahoo"&gt;&lt;/i&gt;</td><td>f19e</td></tr>
 <tr><td><i class="fab fa-yammer" style="font-size: 20px;"></i> yammer</td><td>&lt;i class="fab fa-yammer"&gt;&lt;/i&gt;</td><td>f840</td></tr>
 <tr><td><i class="fab fa-yandex" style="font-size: 20px;"></i> yandex</td><td>&lt;i class="fab fa-yandex"&gt;&lt;/i&gt;</td><td>f413</td></tr>
 <tr><td><i class="fab fa-yandex-international" style="font-size: 20px;"></i> yandex-international</td><td>&lt;i class="fab fa-yandex-international"&gt;&lt;/i&gt;</td><td>f414</td></tr>
 <tr><td><i class="fab fa-yarn" style="font-size: 20px;"></i> yarn</td><td>&lt;i class="fab fa-yarn"&gt;&lt;/i&gt;</td><td>f7e3</td></tr>
 <tr><td><i class="fab fa-yelp" style="font-size: 20px;"></i> yelp</td><td>&lt;i class="fab fa-yelp"&gt;&lt;/i&gt;</td><td>f1e9</td></tr>
 <tr><td><i class="fab fa-yoast" style="font-size: 20px;"></i> yoast</td><td>&lt;i class="fab fa-yoast"&gt;&lt;/i&gt;</td><td>f2b1</td></tr>
 <tr><td><i class="fab fa-youtube" style="font-size: 20px;"></i> youtube</td><td>&lt;i class="fab fa-youtube"&gt;&lt;/i&gt;</td><td>f167</td></tr>
 <tr><td><i class="fab fa-youtube-square" style="font-size: 20px;"></i> youtube-square</td><td>&lt;i class="fab fa-youtube-square"&gt;&lt;/i&gt;</td><td>f431</td></tr>
 <tr><td><i class="fab fa-zhihu" style="font-size: 20px;"></i> zhihu</td><td>&lt;i class="fab fa-zhihu"&gt;&lt;/i&gt;</td><td>f63f</td></tr>
</table>
</div>