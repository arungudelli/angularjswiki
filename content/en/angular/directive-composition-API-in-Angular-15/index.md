+++
title = "Directive composition API in Angular 15"
subtitle = "Understanding Directive composition API in Angular"
summary ="Angular team introduced a new feature called Directive composition API in Angular Version 15."
keywords=["Angular 15,Directive composition API"]
date="2022-10-17T00:01:05+0000"
lastmod="2022-10-17T00:45:18+0000"
type="post"
draft=false
authors = ["admin"]
+++

Angular team introduced a new feature called **"Directive composition API" in Angular 15** Version. 

It's one of the most requested feature from the Angular community since 2016. (From Angular 2 onwards)

{{%toc%}}

## Directive composition API example

Let's understand what is this directive composition in Angular. 

We will create simple directive in Angular which apply the CSS color to an Angular component. 

```bash
ng generate directive redColor
```

And in the directive definition and the below code.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appRedcolor]',
  host: { style: 'color:red' },
})
export class RedcolorDirective {
  constructor() {}
}
```

Now apply the directive to a component in Angular.

```bash
ng generate component testdirective
```

And in the component HTML add the `redColor` directive.

```html
<app-testdirective appRedColor></app-testdirective>

//Inside testdirective.component.html

<p> Hello I am displayed in red color using directive</p>
```
Now the text inside `testdirective` component will be displayed in `red` color.

Now using Directive composition API we can directly add the directive inside component declaration using `hostDirectives` property.

```typescript
import { Component } from '@angular/core';
import { RedColorDirective } from '../red-color.directive';


@Component({
  selector: 'app-testdirective',
  templateUrl: './testdirective.component.html',
  styleUrls: ['./testdirective.component.scss'],
  hostDirectives:[RedColorDirective]
})
export class TestdirectiveComponent {
}

```

Now no need to add `appRedColor` directive to the component.

```html
<app-testdirective></app-testdirective>
```

But here is the catch, you will get an error saying **Host directive must me standalone**

```text
error NG2014: Host directive RedColorDirective must be standalone

hostDirectives:[RedColorDirective]
```
That means **we can add only standalone directives in `hostDirectives` array**.

Let's make our directive stand alone by adding `standalone` property inside directive declaration and remove the definition from the `app.module.ts` file.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appRedColor]',
  host:{'style': 'color:red;'},
  standalone: true
})
export class RedColorDirective {

  constructor() { }

}
```

Now the text inside `testdirective` component will be displayed in red color.

```html
<app-testdirective></app-testdirective>
```
And our code looks simple without adding an extra directive in component tag.

We can add more than one directive inside `hostDirectives` property.

```typescript

@Component({
  selector: 'app-testdirective',
  templateUrl: './testdirective.component.html',
  styleUrls: ['./testdirective.component.scss'],
  hostDirectives:[RedColorDirective,HeightDirective,FontStyleDirective,......]
})
export class TestdirectiveComponent {
}

```

We can add `hostDirectives` inside an another directive as well. 

## Directive Composition API inside directives

Let's create multiple directives each with specific functionality. 

```bash
ng generate directive height --standalone=true
ng generate directive width --standalone=true
ng generate directive fontBold --standalone=true
ng generate directive border --standalone=true
```

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHeight]',
  host:{'style': 'height:100px;'},
  standalone: true
})
export class HeightDirective {
  constructor() { }
}
```

Now we will create a directive and add above standalone directives inside `hostDirectives` array.

```
ng generate directive style
```

Add the required directives as shown below.

```typescript
import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { FontBoldDirective } from './font-bold.directive';
import { HeightDirective } from './height.directive';
import { RedColorDirective } from './red-color.directive';
import { WidthDirective } from './width.directive';

@Directive({
  selector: '[appStyle]',
  hostDirectives:[RedColorDirective,FontBoldDirective,HeightDirective,WidthDirective,BorderDirective]
})
export class StyleDirective {

  constructor() { }

}
```

```html
<div appStyle>
    Hello Styles are added using directive composition API
</div>
```

## Chain of Host Directives 

Instead of adding host directives in one array we can create chain of host directives. 

```bash
ng generate directive size --standalone=true
```
Inside `size` directive 

```typescript
@Directive({
  selector: '[appSize]',
  standalone: true,
  hostDirectives:[WidthDirective]
})

//In the width directive chain the height directive

@Directive({
  selector: '[appWidth]',
  host:{'style': 'width:500px;'},
  hostDirectives:[HeightDirective],
  standalone: true
})

// In the height directive chain the border directive

@Directive({
  selector: '[appHeight]',
  host:{'style': 'height:100px;'},
  standalone: true,
  hostDirectives:[BorderDirective]
})

// Border Directive

@Directive({
  selector: '[appBorder]',
  host:{'style': 'border:1px solid;'},
  standalone: true
})

```

Now we can directly the `size` directive inside `hostDirectives` of the component.

```typescript
@Component({
  selector: 'app-testdirective',
  templateUrl: './testdirective.component.html',
  styleUrls: ['./testdirective.component.scss'],
  hostDirectives:[SizeDirective]
})

```

## Real use cases

I have added only simple examples to get an idea about `hostDirectives` and directive composition API in Angular 15. 

More real world use cases can be found at the following github issue. 

[directive composition API](https://github.com/angular/angular/issues/8785).

## Github Source code 

Here is the source code for the demo of directive composition API.

[host-directives](https://github.com/arungudelli/host-directives)

