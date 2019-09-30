+++
title = "How To Use Font Awesome icons in Angular Applications"
subtitle = "Learn how to use Font Awesome icons in Angular"
type="post"
summary ="Step by step tutotial to use Font Awesome icons in Angular applications"
keywords=["Font Awesome icons in Angular,Font Awesome"]
date="2019-06-09T01:01:05+0000"
lastmod="2019-06-09T13:15:51+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Font Awesome icons in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++
In this tutorial I will explain how to use Font Awesome icons in Angular applications.

First we will learn basic Font Awesome icons rendering in Angular and then we will go through some cool Font Awesome features like animations,layering,transforming etc..

{{% toc %}}

## Installing free version Font Awesome icons in Angular

To install Font Awesome icons in Angular applications use the below npm or yarn commands

```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/angular-fontawesome

yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-brands-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/angular-fontawesome
```

## Installing pro version Font Awesome icons in Angular

To install pro version Font Awesome icons follow the below steps

1. Configure npm registry to install icons from Font Awesome npm package.
2. If you buy a license for Font Awesome icons you will be given an authentication token through which you can set your npm registry.

This configuration can be done at global level or per project level

## Global level configuration

To use Font Awesome icons across all the angular projects add @fortawesome scope to use Font Awesome pro npm package source
i.e., npm.fontawesome.com

```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
  npm config set "//npm.fontawesome.com/:_authToken" TOKEN
```

TOKEN will be given when you buy a professional license.

## Project level configuration

To use Font Awesome icons in a single project create a .npmrc file at project root level and set the below configuration

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN
```

After the configurations install the pro Font Awesome icons by using below npm commands

```
npm install --save-dev @fortawesome/fontawesome-pro
npm install @fortawesome/pro-solid-svg-icons
npm install @fortawesome/pro-regular-svg-icons
npm install @fortawesome/pro-light-svg-icons
```

## Using Font Awesome icons in Angular applications

We can use Font Awesome icons in Angular applications two ways depending upon our requirements

1. Using Explicitly in Component
2. Using Icon library 

Steps to use Font Awesome icons at component level

1. In app.module.ts file import FontAwesomeModule from @fortawesome package as shown below 
```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
``` 

2. And then add FontAwesomeModuel in imports array as shown below

```
@NgModule({
  declarations: [
    AppComponent,
    FontawesomeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
I have created a component called FontAwesomeDemo in my angular application to use Font Awesome icons

Import the required icons from `@fortawesome/free-solid-svg-icons` file as shown below.
In this example I am importing Film Icon.

```
import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fontawesome-demo',
  templateUrl: './fontawesome-demo.component.html',
  styleUrls: ['./fontawesome-demo.component.scss']
})
export class FontawesomeDemoComponent implements OnInit {

  filmIcon = faFilm;
  constructor() { }
  ngOnInit() {
  }

}
```
I have created a variable called coffeeIcon and assign it to the faCoffee imported from free svg icons package.

In the component html render using `fa-icon` selector show below

```
<fa-icon [icon]="filmIcon"></fa-icon>
```

 {{< figure src="fontawesome film icon.png" title="fontawesome film icon" alt="fontawesome film icon">}}

This approach is good when you are using Font Awesome icons in a single component. But most of the times this is not the case We will be using icons across the applications.

So each time importing icons in individual components is not a good idea. 

That's where Icon library very useful. 

We can import all necessary icons in one place and use them across the application. Go through the below example

## Using Font Awesome Icon library

To use Font Awesome icons across the application follow the below steps.

1. In app.module.ts file Import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
2. Next add FontAwesomeModule to imports array as shown above.
3. To use the icon library  Import { library } from '@fortawesome/fontawesome-svg-core'
4. Import required icons for example { faFilm } from '@fortawesome/free-solid-svg-icons'
5. And finally Add them the library with library.add(faFilm)
6. Ideally we will be using more than one icon, so to add multiple icons just pass them to library.add method as comma separated values.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFilm);
  }
}
```

To add the multiple icons to Font Awesome library use the following code snippet.

```
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';

//Adding to the library

library.add(faFilm,faFish);

```

After setting up library icons now we can use icons directly in our component file using their name as shown below

```
<fa-icon icon="film"></fa-icon>
```

The default icon style in Font Awesome is 'fas' i.e., font awesome solid style.

If you want to change the icon style we can pass the style to icon attribute as shown below. (You need to import corresponding icon style)

```
<fa-icon [icon]="['far', 'film']"></fa-icon>
```
far means font awesome regular styles.

As the icons are not managed by component file, if you remove the icons from library at app module level the components which are using those icons will break. 

If you want to use all available icons, You can add them to library as shown below

```
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
```

Here I am adding bothe regular and solid styles to the library. 
Now we can use all free icons within our project.

The only disadvantage of this approach is angular project bundle size will increase.

So it is better to add necessary icons to the library instead of adding all icons.

## Available icon styles in Font Awesome

There are four different types of icon styles available in Font Awesome

1. regular icons (imported from @fortawesome/free-solid-svg-icons)
2. solid icons   (imported from @fortawesome/free-regular-svg-icons)
3. brand icons   (imported from @fortawesome/free-brands-svg-icons)
4. pro light icons (imported from @fortawesome/pro-light-svg-icons)

To use regular icons use the prefix 'far'

```
<fa-icon [icon]="['far', 'bell']"></fa-icon>
```

To use solid icons use the prefix 'fas'

```
<fa-icon [icon]="['fas', 'bell']"></fa-icon>
```

To use brand icons such as twitter,facebook etc use the prefix 'fab'

```
<fa-icon [icon]="['fab', 'angular']"></fa-icon>
<fa-icon [icon]="['fab', 'twitter']"></fa-icon>
<fa-icon [icon]="['fab', 'facebook']"></fa-icon>

```
 {{< figure src="fontawesome brand icons.png" title="fontawesome brand icons" alt="fontawesome brand icons">}} 


To use the pro only light icons use the prefix 'fal'

```
<fa-icon [icon]="['fal', 'calendar']"></fa-icon>
```

In some cases we might need to add same icon from different kinds of styles.

To use same icon from multiple styles, we have to import icons using alias names as shown below.

```
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';

library.add(farBell, fasBell);
```

Now we can use bell icon in our component file as shown below

```
<fa-icon [icon]="['fas', 'bell']"></fa-icon>
<fa-icon [icon]="['far', 'bell']"></fa-icon>
```
 {{< figure src="Regular vs solid icons.png" title="Regular vs solid icons" alt="Regular vs solid icons">}} 

## Changing Font Awesome Icons color and stroke in Angular

To change the Font Awesome Icons color and stroke we can use `style` attribute of `fa-icon` selector
as shown below

```
<fa-icon [icon]="['fas', 'film']" 
[styles]="{'stroke': 'red', 'color': 'red'}"></fa-icon>
```

## Changing default icon style in Font Awesome Angular

To change the default icon style in Font Awesome we have to inject `FaIconService` and change the `defaultPrefix` property as shown below

The default icon style in Font Awesome is `fas`

```
import { FaIconService } from '@fortawesome/angular-fontawesome';

export class AppComponent {

  constructor(private faIconService: FaIconService) {
      this.faIconService.defaultPrefix = 'far';
  }

}
```

## Font Awesome icons features

Angular Font Awesome icons comes up with useful features like  

1. Changing icons size
2. Fixed width icons
3. Rotating icons
4. Mirroring icons
5. Animating icons
6. Adding border to the icons
7. Pulled icons
8. Changing default styles of icons like color and stroke

## Changing size of Font Awesome icons in Angular

We can change the size of Font Awesome icons in Angular using `size` property of `fa-icon` selector.

Normally Font Awesome icons inherit the size of parent container. By using size property we can relatively increase or decrease the size of icons with respect to the inherited `font-size`.

```
<div style="font-size:15px;color:red">
  <fa-icon [icon]="['fab', 'angular']"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="xs"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="sm"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="lg"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="2x"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="3x"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="5x"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="6x"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="7x"></fa-icon>
  <fa-icon [icon]="['fab', 'angular']" size="10x"></fa-icon>
</div>
```
 {{< figure src="fontawesome icon different sizes.png" title="fontawesome icon different sizes" alt="fontawesome icon different sizes">}} 


## Fixed width Font Awesome icons in Angular

Font Awesome icons contains more than 1500+ free icons and 3500+ pro icons. But all the icons are not of same size.

To force the icons to render in a fixed size we can use `fixedWidth` property of `<fa-icon>`

This fixedWidth property is very useful when we want vertically align a series of icons in a list or navigation menu.

To understand it further I have added android,apple brand icons which are of different width and rendered them normally and with fixedWidth.

I have added background color to Font Awesome icons for visual indication of icons width.

```
<div style="font-size:5em">
    <fa-icon class="normal" [icon]="['fab', 'android']"></fa-icon>
    <br/>
    <fa-icon class="normal" [icon]="['fab', 'apple']"></fa-icon>
    <br/>
    <fa-icon class="fixed" [icon]="['fab', 'android']" 
    [fixedWidth]="true"></fa-icon>
    <br/>
    <fa-icon class="fixed" [icon]="['fab', 'apple']" 
    [fixedWidth]="true"></fa-icon>
</div>

//Adding background color to see the width of the icons

.normal{
    background-color: red;
    color:white;
}
.fixed{
    background-color: red;
    color:white;
}
```

 {{< figure src="fixed width fontawesome icons.png" title="fixed width fontawesome icons" alt="fixed width fontawesome icons">}} 

As you can see, the icons rendered with `fixedWidth` are vertically aligned with same width

Often in our projects we might need to rotate,flip or mirror an icon depending upon the project design.

Font Awesome angular comes up with handy utilities to help us in such scenarios.

## Rotating Font Awesome icons in Angular

We can rotate the Font Awesome icons in Angular using rotate property of `<fa-icon>`

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" rotate="90"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" rotate="180"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" rotate="270"></fa-icon>
```

 {{< figure src="Rotating fontawesome icons.png" title="Rotating fontawesome icons" alt="Rotating fontawesome icons">}} 

## Mirroring Font Awesome icons in Angular

We can mirror the Font Awesome icons using `flip` property as shown below

Allowed values for `flip` property are 

1. horizontal : mirrors icon horizontally
2. vertical : mirrors icon vertically
3. both : mirrors icon vertically and horizontally (requires 5.7.0 or greater)

```
<h3>horizontal</h3> 
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" flip="horizontal">
</fa-icon><br/>
<h3>Vertically</h3> 
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon><br/>
<fa-icon [icon]="['fas', 'snowboarding']" flip="vertical">
</fa-icon><br/>
<h3>Both Vertical and horizontal</h3>
<fa-icon [icon]="['fas', 'snowboarding']" flip="both"></fa-icon>

```

 {{< figure src="Mirroring fontawesome icons.png" title="Mirroring fontawesome icons" alt="Mirroring fontawesome icons">}} 


## Animating Font Awesome icons in Angular

One of the beautiful features of Font Awesome icons is the ability to add animation to the icons.

This feature very useful when we want to add loading or status communicating symbols.

In Font Awesome Angular we can use `spin` and `pulse` to animate the icons.

Have a look at the rotating fan icon
```
<fa-icon [icon]="['fas', 'fan']" [spin]="true"></fa-icon>
<fa-icon [icon]="['fas', 'fan']" [pulse]="true"></fa-icon>
```

And spinner and sync icons are usually used along with animations.

```
<fa-icon [icon]="['fas', 'spinner']" [spin]="true"></fa-icon>
<fa-icon [icon]="['fas', 'spinner']" [pulse]="true"></fa-icon>

<fa-icon [icon]="['fas', 'sync']" [spin]="true"></fa-icon>
<fa-icon [icon]="['fas', 'sync']" [pulse]="true"></fa-icon>
```
{{< video src="/img/fontawesome/fontawesome icons animations.mp4" srcwebm="/img/fontawesome/fontawesome icons animations.webm">}} 

The real fun is we can bind the `spin` and `pulse` values to angular component variables.
As shown below

I have created a variable called `isAnimated` and binding it to the `fa-icon` spin property.
On clicking the icon Iam toggling the isAnimated value

```
<fa-icon 
size="5x"
[icon]="['fas', 'volleyball-ball']" 
[spin]="isAnimated" 
(click)="isAnimated=!isAnimated">
</fa-icon>

<fa-icon 
size="5x"
[icon]="['fas', 'walking']" 
[spin]="isAnimated" 
(click)="isAnimated=!isAnimated">
</fa-icon>

<fa-icon 
size="5x"
[icon]="['fas', 'biking']" 
[spin]="isAnimated" 
(click)="isAnimated=!isAnimated">
</fa-icon>

<fa-icon 
size="5x"
[icon]="['fas', 'car-crash']" 
[spin]="isAnimated" 
(click)="isAnimated=!isAnimated">
</fa-icon>

<fa-icon 
size="5x"
[icon]="['fas', 'fighter-jet']" 
[spin]="isAnimated" 
(click)="isAnimated=!isAnimated">
</fa-icon>
```


{{< video src="/img/fontawesome/FontawesomeAnimation.mp4" srcwebm="/img/fontawesome/FontawesomeAnimation.webm">}} 

## Pulled Font Awesome Icons

Usually notes and tips are wrapped around the single quotes or double quotes to give us some visual distinction.

We can use `pull` property of Font Awesome angular to wrap text around icons.

```
<fa-icon [icon]="['fas', 'quote-left']" pull="left"></fa-icon>
If You Are Working On Something That You Really Care About, 
You Don’t Have To Be Pushed. The Vision Pulls You
<fa-icon [icon]="['fas', 'quote-right']" pull="right"></fa-icon>
```
The allowed values of `pull` are left,right.

 {{< figure src="fontawesome pulled icons.png" title="fontawesome pulled icons" alt="fontawesome pulled icons">}} 


## Transform Font Awesome icons in Angular

we can scale,position,flip and rotate icons using `transform` attribute of Font Awesome selector in Angular.

And further we can combine them for some beautiful effects.

To scale Font Awesome icons using transform attribute use `shrink-x` or `grow-x`. Where `x` is any numeric value including decimals.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-5">
</fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="grow-5">
</fa-icon>
```
 {{< figure src="scaling fontawesome icons.png" title="scaling fontawesome icons" alt="scaling fontawesome icons">}} 


To position the icons i.e., to move icons up, down, left, or right, use `up-x, down-x, left-x, and right-x` where `x` any numeric value, including decimals.

```

<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="up-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="left-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="down-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="right-5"></fa-icon>
```
 {{< figure src="fontawesome position icons.png" title="fontawesome position icons" alt="fontawesome position icons">}} 


Now we will combine both position and scaling as shown below.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="shrink-10 up-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="shrink-10 down-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="shrink-10 left-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="shrink-10 right-5"></fa-icon>
```
 {{< figure src="positioning fontawesome icons.png" title="positioning fontawesome icons" alt="positioning fontawesome icons">}} 


To rotate the icons using Font Awesome transform property use `rotate-x`. Where `x` is degrees to rotate and negative values also allowed.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="rotate-90"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="rotate--90"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="rotate-180"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="rotate-270"></fa-icon>
```
 {{< figure src="fontawesome icons transform rotate.png" title="fontawesome icons transform rotate" alt="fontawesome icons transform rotate">}} 


We can bind `rotate` values to our component variables to create animatation effect. 
Have a look at the below jumping horse animation.

{{< video src="/img/fontawesome/Jumping horce animation.mp4" srcwebm="/img/fontawesome/Jumping horce animation.webm">}} 

```
<fa-icon 
size="5x"
[icon]="['fas', 'horse']" 
transform="rotate-{{rotation}}">
</fa-icon>
<br/>
<input type='range' min="-15" max="0" 
[value]="rotation" 
(input)="rotation=$event.target.value"/>
```
I have created a range input with minimum value as `-15` and maximum value as `0`. And bound it to rotation value of horse icon.

The horse icon will jump from -15 to 0 angle whenever we change the range.

To mirror or flip the icons we can use `flip-h` (horizontal) or `flip-v` (vertical) or we can use both `flip-h flip-v` to flip both horizontally and vertically.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="flip-h"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="flip-v"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="flip-v flip-h"></fa-icon>
```
 {{< figure src="transform fontawesome icons flipping.png" title="transform fontawesome icons flipping" alt="transform fontawesome icons flipping">}} 


We can use all of them in one tranform as shown below

```
<fa-icon [icon]="['fas', 'snowboarding']" 
transform="flip-h rotate-90 shrink-10 up-5"></fa-icon>
```
 {{< figure src="Transform fontawesome icons.png" title="Transform fontawesome icons" alt="Transform fontawesome icons">}} 


## Combine two icons using Font Awesome mask

We can combine two icons into one single color icons using mask property for `fa-icon` as shown below

```
<fa-icon [icon]="['fas', 'headphones']" transform="shrink-6" 
[mask]="['fas', 'square']"></fa-icon>
<fa-icon [icon]="['fas', 'pencil-alt']" transform="shrink-6" 
[mask]="['fas', 'comment']"></fa-icon>
```

mask icon i.e., outer icon acts like background to the actual icon as shown below. 
transform property will be applied on actual icon.

In the above example headphones and pencil-alt are actual icons. Whereas square and comment icons acts like background.

 {{< figure src="masking fontawesome icons.png" title="masking fontawesome icons" alt="masking fontawesome icons">}} 


## Layering, Text, & Counters Font Awesome icons

Font Awesome layers have some cool features like

1. we can place multiple icons on top of each other.
2. We can add text on top of icons.
3. We can add counters to the icons.

Angular Font Awesome has a selector called `fa-layers` which is used to place icons on top of each other.

We will try to place twitter icon on top of square icon. To achieve this use the below code snippet

``` 
<fa-layers>
        <fa-icon [icon]="['fas', 'square']"></fa-icon>
        <fa-icon [icon]="['fab', 'twitter']"></fa-icon>
</fa-layers> 
```

The above code first renders square icon (layer one) on top of that it will add one more layer with twitter icon.

But if you see the output you won't see anything other than square icon because both icon layers are of same color.

So if you give some other color to the twitter icons it will be visible

```
<fa-layers>
    <fa-icon [icon]="['fas', 'square']"></fa-icon>
    <fa-icon [icon]="['fab', 'twitter']" style="color:yellow"></fa-icon>
</fa-layers> 
```

Or instead of giving color you can use `inverse` attribute to create knock-out looking effect.

```
<fa-layers>
    <fa-icon [icon]="['fas', 'square']"></fa-icon>
    <fa-icon [inverse]="true" [icon]="['fab', 'twitter']" ></fa-icon>
</fa-layers> 
```

Further we can use `transform` to shrink and position the twitter icon exactly middle of square icon.

```
<fa-layers>
    <fa-icon [icon]="['fas', 'square']"></fa-icon>
    <fa-icon [inverse]="true" [icon]="['fab', 'twitter']" 
    transform="right-1 shrink-5"></fa-icon>
</fa-layers> 
```
 {{< figure src="fontawesome icons layers.png" title="fontawesome icons layers" alt="fontawesome icons layers">}} 

Now we will see how to combine more than two icons into one icon using Font Awesome layers

```
  <fa-layers>
      <fa-icon [icon]="['fas', 'play']" 
       transform="rotate--90 grow-2"></fa-icon>
      <fa-icon [inverse]="true" [icon]="['fas', 'sun']" 
       transform="shrink-10 up-2"></fa-icon>
      <fa-icon [inverse]="true" [icon]="['fas', 'moon']" 
       transform="shrink-11 down-4.2 left-4"></fa-icon>
      <fa-icon [inverse]="true" [icon]="['fas', 'star']" 
      transform="shrink-11 down-4.2 right-4"></fa-icon>
  </fa-layers>
```

I am placing sun,moon,star on top of rotated play icon (i.e., triangle). I have used transform property to align them properly as shown below

 {{< figure src="fontawesome multiple icons.png" title="fontawesome multiple icons" alt="fontawesome multiple icons">}} 

Placing multiple icons on top of each other has several real world use cases. 

For example banning cellphones and camera symbols icons.  

```
<fa-layers>
  <fa-icon [icon]="['fas', 'camera']" 
  transform="shrink-7"></fa-icon>
  <fa-icon [icon]="['fas', 'ban']" style="color:red"></fa-icon>
</fa-layers>
<br/>

<fa-layers>
  <fa-icon [icon]="['fas', 'mobile-alt']" 
   transform="shrink-7"></fa-icon>
  <fa-icon [icon]="['fas', 'ban']" style="color:red"></fa-icon>
</fa-layers>
```
 {{< figure src="fontawesome ban icons.png" title="fontawesome ban icons" alt="fontawesome ban icons">}} 


## Adding text to Font Awesome icons in Angular
 
To add text to the icon we can use `fa-layers-text` selector inside `fa-layer` as shown below

Here we are adding date to the calendar icons using `fa-layer-text`.

```
<fa-layers>
    <fa-icon [icon]="['fas', 'calendar']"></fa-icon>
    <fa-layers-text content="16" style="color: white;font-weight: bold" 
     transform="shrink-5 down-3"></fa-layers-text>
</fa-layers>
```
 {{< figure src="fontawesome icon layer text.png" title="fontawesome icons layer text" alt="fontawesome icons layer text">}} 


## Adding counters to Font Awesome icons in Angular

To add counters to Font Awesome icons in Angular we can use `fa-layers-counter` along with `fa-layer`.

This feature very useful while showing notification counters or email counters.

```
<fa-layers size="5x">
    <fa-icon [icon]="['fas', 'envelope']"></fa-icon>
    <fa-layers-counter content="100+"></fa-layers-counter>
</fa-layers>

<fa-layers size="5x">
    <fa-icon [icon]="['fas', 'bell']"></fa-icon>
    <fa-layers-counter content=""></fa-layers-counter>
</fa-layers>
```

 {{< figure src="fontawesome icons layer counter.png" title="fontawesome icons layer counter" alt="fontawesome icons layer counter">}} 
