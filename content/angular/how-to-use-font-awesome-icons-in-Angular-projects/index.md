+++
title = "How To Use fontawesome icons in Angular Applications"
subtitle = "Learn how to use fontawesome icons in Angular"
type="post"
summary ="Step by step tutotial to use fontawesome icons in Angular applications"
keywords=["fontawesome icons in Angular,fontawesome"]
date="2019-06-06T01:01:05+0000"
lastmod="2019-06-06T13:15:51+0000"
draft=false
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
4. Animating icons
5. Adding border to the icons
6. Pulled icons
7. Changing default styles of icons like color and stroke

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

### Mirroting fontawesome icons in Angular

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

