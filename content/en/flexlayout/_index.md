+++
title = "Angular Flex Layout Tutorial with examples"
date = 2019-04-24T00:00:00
lastmod = 2019-04-24T01:00:00

draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "flexlayout"
next="flexlayout/basics"
featured="angular flex layout tutorial.jpg"
authors = ["admin"]
summary ="Understanding Angular flex layout and flex layout advantages over css flexbox approach"
keywords=["Angular flex layout,flexbox css"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.flexlayout]
  parent = "Tutorial"
  weight = 1

+++

In this Angular Flexlayout tutorial, we will learn how to build powerful responsive HTML UI layouts in Angular apps using flex layout module.

{{%toc%}}

## What is Angular Flex Layout

Using flexbox CSS layout we can change the width and height of HTML DOM elements based upon the available space.

We can define different kinds of layouts for different kinds of display devices and different screen sizes.

And this flexbox CSS layout is direction-agnostic i.e its free from any directional constraints, 

whereas the existing display block layout is vertically biased and inline layout is horizontally biased.

A flex container expands its child elements to fill available free space, or shrinks them to prevent overflow.

This kind of approach works well with small pages, but this approach is not flexible enough to support larger and complex applications when it comes to orientation changing, resizing, stretching, shrinking.

## Problems with CSS based flexbox

Most of the Flexbox CSS libraries are either

* pure CSS-only implementations or
* JS+CSS stylesheets.

AngularJS (1.x version) [material layout API](https://material.angularjs.org/latest/layout/container) is built using JS+CSS.

AngularJS Material clearly explained the limitations of a CSS based FlexBox layout like limitations with using parameterized values.

Even for limited set of allowed value variations we need to write so many required CSS classes which increses the complexity of the code.

Other problems includes

* CSS specific issues are increasing rapidly
* The amount of CSS generated for flexbox CSS is extremely huge(>250k)
* And if you chane the layout direction we need to change the child flexbox stylings.
* And there is no support for customized media query breakpoints.

Angular flex layout addressed the above problems.Angular flex layout is a pure-Typescript based UI Layout engine which uses HTML markup (aka Layout API) to specify the layout configurations.

Angular flex layout is only available for Angular applications and requires Angular version 4.1 and above.

Angular Flex Layout is an UI layout engine built on top of CSS flexbox,mediaquery and exposes FlexBoxModule and few Angular directives through which we can develop powerful UI layouts.

In normal CSS flexbox or CSS grid, we have to write complex CSS code with the help of  mediaqueries to build responsive layouts. And it also difficult to understand.

But with this new Angular flexbox layout we can directly define flexbox layout settings inside the HTML template with the help of flexbox directives.

## Advantages of Angular flex layout

When compare to AngularJS Material layout, angular flex layout has several advantages.

1. The Angular flex layout code is easier to maintain and debug
2. Angular flex layout does not depend upon Angular Material
3. There is no external CSS requirements
4. Angular flex layout Supports different kinds of Handset/Tablet and Orientation breakpoints
5. Support for ANY Layout injector value (instead of increments for 5)
6. Support for raw values or interpolated values
7. Support for raw, percentage or px-suffix values and Change detection for Layout injector values
8. Uses provider to supply custom breakpoints
9. Notifications for breakpoints changes
10. Includes workaround for MediaQuery issues with overlapping breakpoints
11. MediaQuery Activation detection

## Installing Angular Flex Layout

To install angular flex layout in our Anguar projects use the below command
```
npm install --save @angular/flex-layout @angular/cdk
```
After installing flex layout we need to import flexLayoutModule in our `app.module.ts` file as shown below.
```
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
imports: [ FlexLayoutModule ],
});
```

Now go through the basics of Angular flex layout.