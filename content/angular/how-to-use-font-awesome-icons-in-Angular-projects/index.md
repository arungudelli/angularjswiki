+++
title = "How To Use fontawesome icons in Angular Applications"
subtitle = "Learn how to use fontawesome icons in Angular"
type="post"
summary ="Step by step tutotial to use fontawesome icons in Angular applications"
keywords=["fontawesome icons in Angular,fontawesome"]
date="2019-06-06T01:01:05+0000"
lastmod="2019-06-06T13:15:51+0000"
draft=true
authors = ["admin"]

[image]
  caption = "fontawesome icons in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++
In this tutorial I will explain how to use fontawesome icons in our Angular applications.

{{% toc %}}

## Installing free version fontawesome icons

To install fontawesome icons use the below npm or yarn commands

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

## Installing pro version fontawesome icons

If you buy a license for fontawesome icons you have to configure your npm registry to use pro icons

This configuration can be done at global level or per project level

### Global level configuration

To use fontawesome icons across all the projects add @fortawesome scope to use fontawesome pro npm package source
i.e., npm.fontawesome.com

```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
  npm config set "//npm.fontawesome.com/:_authToken" TOKEN
```

TOKEN will be given when you buy a professional license.

### Project level configuration

To use fontawesome icons in a single project creat a .npmrc file at project root level and set the below configuration

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN
```

After the configurations install the pro fontawesome icons by using below npm commands

```
npm install --save-dev @fortawesome/fontawesome-pro
npm install @fortawesome/pro-solid-svg-icons
npm install @fortawesome/pro-regular-svg-icons
npm install @fortawesome/pro-light-svg-icons
```

## Using fontawesome icons in Angular applications

We can use fontawesome icons in Angular applications two ways depending upon our requirements

1. Using Explicitly in Component
2. Using Icon library 

Steps to use fontawesome icons at component level

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
I have created a component called FontAwesomeDemo in my angular application to use fontawesome icons

Import the required icons from `@fortawesome/free-solid-svg-icons` file as shown below.
In this example I am importing Coffee Icon.

```
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fontawesome-demo',
  templateUrl: './fontawesome-demo.component.html',
  styleUrls: ['./fontawesome-demo.component.scss']
})
export class FontawesomeDemoComponent implements OnInit {

  coffeeIcon = faCoffee;
  constructor() { }
  ngOnInit() {
  }

}
```
I have created a variable called coffeeIcon and assign it to the faCoffee imported from free svg icons package.

In the component html render using `fa-icon` selector show below

```
<fa-icon [icon]="coffeeIcon"></fa-icon>
```

This approach is good when you are using fontawesome icons in a single component. But most of the times this is not the case We will be using icons across the applications.

So each time importing icons in individual components is not a good idea. 

That's where Icon library very useful. We can import all necessary icons in one place and use them across the application. Go through the below example

## Using fontawesome Icon library

To use fontawesome icons across the application follow the below steps.

1. In app.module.ts file Import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
2. Next add FontAwesomeModule to imports array as shown above.
3. To use the icon library  Import { library } from '@fortawesome/fontawesome-svg-core'
4. Import required icons for example { faCoffee } from '@fortawesome/free-solid-svg-icons'
5. And finally Add them the library with library.add(faCoffee)
6. Ideally we will be using more than one icons, so to add multiple icons just pass them to library.add method as comma separated values.

After setting up library icons now we can use icons directly in our component file using their name as shown below

```
<fa-icon icon="coffee"></fa-icon>
```

by default the icon style is 'fas' i.e., font awesome solid style.

If you want to change the icon style we can pass the style to icon attribute as shown below

```
<fa-icon [icon]="['far', 'coffee']"></fa-icon>
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

Here I am adding bothe regular and solid styles to the library. Now we can use all free icons within our project.

The only disadvantage of this approach is angular project bundle size will increase.

So it is better to add necessary icons to the library instead of adding all icons.

## Available icon styles in fontawesome

There are four different types of icon styles available in fontawesome

1. regular icons (imported from @fortawesome/free-solid-svg-icons)
2. solid icons   (imported from @fortawesome/free-regular-svg-icons)
3. brand icons   (imported from @fortawesome/free-brands-svg-icons)
4. pro light icons (imported from @fortawesome/pro-light-svg-icons)

To use regular icons use the prefix 'far'

```
<fa-icon [icon]="['far', 'calendar']"></fa-icon>
```

To use solid icons use the prefix 'fas'

```
<fa-icon [icon]="['fas', 'calendar']"></fa-icon>
```

To use brand icons such as twitter,facebook etc use the prefix 'fab'

```
<fa-icon [icon]="['fab', 'twitter']"></fa-icon>
```

To use the pro only light icons use the prefix 'fal'

```
<fa-icon [icon]="['fal', 'calendar']"></fa-icon>
```

In some cases we might need to add same icon from different kinds of styles.

To use same icon from multiple styles, we have to import icons using alias names as shown below.

```
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

library.add(fasStar, farStar);
```

Now we can use star icon in our component file as shown below

```
<fa-icon [icon]="['fas', 'star']"></fa-icon>
<fa-icon [icon]="['far', 'star']"></fa-icon>
```

## fontawesome icons features

Angular fontawesome icons comes up with useful features like  

1. Changing icons size
2. Fixed width icons
3. Rotating icons
4. Mirroring icons
5. Animating icons
6. Adding border to the icons
7. Pulled icons
8. Changing default styles of icons like color and stroke

### Changin size of fontawesome icons in Angular

We can change the size of fontawesome icons in Angular using size property of `fa-icon` selector.

```
<fa-icon [icon]="['fas', 'coffee']" size="xs"></fa-icon>
<fa-icon [icon]="['fas', 'coffee']" size="lg"></fa-icon>
<fa-icon [icon]="['fas', 'coffee']" size="6x"></fa-icon>
```

Normally fontawesome icons inherit the size of parent container. By using size property we can relatively increase or decrease the size of icons with respect to the inherited font-size.

```
<div style="font-size:15px">
  <fa-icon [icon]="['fas', 'coffee']" size="xs"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="sm"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="lg"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="2x"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="3x"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="5x"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="7x"></fa-icon>
  <fa-icon [icon]="['fas', 'coffee']" size="10x"></fa-icon>
</div>
```

### Fixed width fontawesome icons in Angular

Fontawesome icons contains more than 1500+ free icons and 3000+ pro icons. But all the icons or not of same size.

To force the icons to render in a fixed size we can use `fixedWidth` property of `<fa-icon>`

This fixedWidth property is very useful when we want vertically align a series of icons in a list or navigation menu.

To understand it further I have added android,apple brand icons which are of different width and rendered them normally and with fixedWidth.

I have added background color to fontawesome icons for visual indication of icons width.

```
<div style="font-size:5em">
    <fa-icon class="normal" [icon]="['fab', 'android']"></fa-icon>
    <br/>
    <fa-icon class="normal" [icon]="['fab', 'apple']"></fa-icon>
    <br/>
    <fa-icon class="fixed" [icon]="['fab', 'android']" [fixedWidth]="true"></fa-icon>
    <br/>
    <fa-icon class="fixed" [icon]="['fab', 'apple']" [fixedWidth]="true"></fa-icon>
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

As you can see the icons renderend with fixedWidth are vertically aligned and of same width

Often in our projects we might need to rotate,flip or mirror an icon depending upon the project design.

fontawesome angular comes up with handy utilities to help us in such scenarios.

### Rotating fontawesome icons in Angular

We can rotate the fontawesome icons in Angular using rotate property of `<fa-icon>`

```
Normal <fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
90 <fa-icon [icon]="['fas', 'snowboarding']" rotate="90"></fa-icon>
180 <fa-icon [icon]="['fas', 'snowboarding']" rotate="180"></fa-icon>
270 <fa-icon [icon]="['fas', 'snowboarding']" rotate="270"></fa-icon>
```

### Mirroing fontawesome icons in Angular

We can mirror the fontawesome icons using `flip` property as shown below

Allowed values for `flip` property are 

1. horizontal : mirrors icon horizontally
2. vertical : mirrors icon vertically
3. both : mirrors icon vertically and horizontally (requires 5.7.0 or greater)

```
<h3>horizontal</h3> 
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" flip="horizontal"></fa-icon><br/>
<h3>Vertically</h3> 
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon><br/>
<fa-icon [icon]="['fas', 'snowboarding']" flip="vertical"></fa-icon><br/>
<h3>Both Vertical and horizontal</h3>
<fa-icon [icon]="['fas', 'snowboarding']" flip="both"></fa-icon>

```

### Animating fontawesome icons in Angular

One of the best features of fontawesome icons is the ability to add animation to the icons.

This feature very useful when we want to add loading or status communicating symbols.

In fontawesome Angular we can use `spin` and `pulse` to animate the icons.

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

### Pulled Icons

Usually notes and tips are wrapped around the single quotes or double quotes to give us some visual distinction.

We can use `pull` property of fontawesome angular to wrap text around icons.

```
<fa-icon [icon]="['fas', 'quote-left']" pull="left"></fa-icon>
If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You
<fa-icon [icon]="['fas', 'quote-right']" pull="right"></fa-icon>
```
The allowed values of `pull` are left,right.

### Transform fontawesome icons in Angular

we can scale,position,flip and rotate icons using `transform` attribute of fontawesome selector in Angular.

And further we can combine them for some beatiful effects.

To scale fontawesome icons using transform attribute use `shrink-x` or `grow-x`. Where `x` is any numeric value including decimals.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="grow-5"></fa-icon>
```

To position the icons i.e., to move icons up, down, left, or right, use `up-x, down-x, left-x, and right-x` where `x` any numeric value, including decimals.

```

<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="up-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="down-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="left-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="right-5"></fa-icon>
```

Now we will combine both position and scaling as shown below.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-10 up-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-10 down-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-10 left-5"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="shrink-10 right-5"></fa-icon>
```

To rotate the icons using fontawesome transform property use `rotate-x`. Where `x` is degrees to rotate and negative values also allowed.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="rotate-90"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="rotate--90"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="rotate-180"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="rotate-270"></fa-icon>
```

To mirror or flip the icons we can use `flip-h` (horizontal) or `flip-v` (vertical) or we can use both `flip-h flip-v` to flip both horiztontally and vertically.

```
<fa-icon [icon]="['fas', 'snowboarding']"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="flip-h"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="flip-v"></fa-icon>
<fa-icon [icon]="['fas', 'snowboarding']" transform="flip-v flip-h"></fa-icon>
```

We can use all of them in one tranform as shown below

```
<fa-icon [icon]="['fas', 'snowboarding']" transform="flip-h rotate-90 shrink-10 up-5"></fa-icon>
```

### Combine two icons using fontawesome mask

We can combine two icons into one single color icons using mask property for `fa-icon` as shown below

```
<fa-icon [icon]="['fas', 'headphones']" transform="shrink-6" [mask]="['fas', 'square']"></fa-icon>
<fa-icon [icon]="['fas', 'pencil-alt']" transform="shrink-6" [mask]="['fas', 'comment']"></fa-icon>
```

mask icon i.e., outer icon acts like background to the actual icon as shown below. 
transform property will be applied on actual icon.

In the above example heaphones and pencil-alt are actual icons. Where as square and comment icons acts like background.

### Layering, Text, & Counters fontawesome icons

fontawesome layers have some cool features like

1. we can place multiple icons on top of each other.
2. We can add text on top of icons.
3. We can add counters to the icons.

Angular fontawesome has a selector called `fa-layers` which is used to place icons on top of each other.

We will try to place twitter icon on top of square icon. To achieve this use the below code snippet

``` 
<fa-layers>
        <fa-icon [icon]="['fas', 'square']"></fa-icon>
        <fa-icon [icon]="['fab', 'twitter']"></fa-icon>
</fa-layers> 
```

The above code first renderes square icon (layer one) on top of that it will add one more layer with twitter icon.

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
    <fa-icon [inverse]="true" [icon]="['fab', 'twitter']" transform="left-1 shrink-5"></fa-icon>
</fa-layers> 
```

Placing multiple icons on top of each other has several real world usecases. 

For example banning cellphones and camera symbols icons.  

```
<fa-layers>
  <fa-icon [icon]="['fas', 'camera']" transform="shrink-7"></fa-icon>
  <fa-icon [icon]="['fas', 'ban']" style="color:red"></fa-icon>
</fa-layers>
<br/>

<fa-layers>
  <fa-icon [icon]="['fas', 'mobile-alt']" transform="shrink-7 right-3"></fa-icon>
  <fa-icon [icon]="['fas', 'ban']" style="color:red"></fa-icon>
</fa-layers>
```

### Adding text to fontawesome icons in Angular
 
To add text to the icon we can use `fa-layers-text` selector inside `fa-layer` as shown below

Here we are adding date to the calender icons using `fa-layer-text`.

```
<fa-layers>
    <fa-icon [icon]="['fas', 'calendar']"></fa-icon>
    <fa-layers-text content="16" style="color: white;font-weight: bold" transform="shrink-5 right-6 down-3"></fa-layers-text>
</fa-layers>
```

### Adding counters to fontaweomse icons in Angular