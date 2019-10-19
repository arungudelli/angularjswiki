+++
title = "How To Use Ng-Template In Angular?"
subtitle = "understanding ng-template in Angular"
type="post"
summary ="ng-template is a virtual element and its contents are displayed only when needed.ng-template should be used along with structural directives like [ngIf],[ngFor],[NgSwitch] or custom structural directives"
keywords=["ng-template,ng-template tag in angular,ng-template and *ngif,ng-template and *ngfor,ng-template and ngswitch"]
date="2018-08-10T01:01:05+0000"
lastmod="2019-01-30T05:31:49+0000"
draft=false
authors = ["admin"]

[image]
  caption = "ng-template"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

`ng-template` is an Angular element used to render HTML templates.

We use `ng-template` with angular `*ngIf` directive to display `else` template.

So what exactly this `ng-template` will do?

Whether it really renders HTML template, we will see with an example.

```
<div> ng-template works!</div>
<ng-template>Inside ng-template tag</ng-template>
```

If you see the output it will display only `ng-template works` which is in div element.And have a look at the generated HTML source code.

{{< figure src="ng-template-min.png" title="ng-template example" alt="ng-template example">}} 


You can see an empty comment section in place of `ng-template` tag. Lets go through deep into `ng-template` to understand this behaviour.

{{%toc%}}

## What is `ng-template` in Angular

  1. `ng-template` is a virtual element and its contents are displayed only when needed (based on conditions).
  2. `ng-template` should be used along with structural directives like [ngIf],[ngFor],[NgSwitch] or custom structural directives.That is why in the above example the contents of `ng-template` are not displayed.
  3. `ng-template` never meant to be used like other HTML elements. It&#8217;s an internal implementation of Angular&#8217;s structural directives.
  4. When you use a structural directive in Angular we will add a prefix asterisk(*) before the directive name. This asterisk is short hand notation for _`ng-template`._
  5. Whenever Angular encounter with the asterisk(*) symbol, we are informing Angular saying that it is a structural directive and Angular will convert directive attribute to `ng-template` element.
  6. `ng-template` is not exactly a true web element. When we compile our code, we will not see a `ng-template` tag in HTML DOM.
  7. Angular will evaluate the `ng-template` element to convert it into a comment section in HTML DOM.

We will go through the different structural directives like `*ngIf`,`*ngFor` and `[NgSwitch]` to understand this further.

## Using `ng-template` with *ngIf example

Take an examle of <a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">*ngIf directive</a> in Angular

```
<div *ngIf="display" class="ng-template-example">
  ng-template example
</div>
<ng-template [ngIf]="display">
  <div class="ng-template-example">ng-template example</div>
</ng-template>
```

  * The directive being converted to data member of `ng-template`
  * The inline template element along with the attributes (class etc), moved inside the `ng-template` element

So we have only `then` template which is an inline template and there is no `else` template.Now will dig into the source code of `NgIf` Class to understand how `ng-template` element will work.

{{< figure src="NgIf-Defination-min.png" title="NgIf Source Code and ng-template" alt="NgIf Source Code and ng-template">}} 

Any structural directive in Angular will have two properties

  1. TemplateRef
  2. ViewContainerRef

A structural directive creates the view from `ng-template` and inserts it in view container adjacent to directive host element.

That means structural directive access the contents of `ng-template` through _TemplateRef_ and updates the _ViewContainerRef_

{{% alert note %}}
TemplateRef is the class name and `ng-template` is the corresponding HTML tag
{{% /alert %}}


And if you see the above source code of NgIf class It has four properties

  1. _thenTemplateRef : `ng-template` reference of then
  2. _elseTemplateRef : `ng-template` reference of else
  3. _thenViewRef : embedded view ref of then
  4. _elseViewRef : embedded view ref of else

If you see the constructor it has two parameters `private _viewContainer: ViewContainerRef and _templateRef: TemplateRef<NgIfContext>`

Constructor will access the `ng-template` via `templateRef` parameter and assign it to `thenTemplateRef`. inline template will be the default then template in ngIf directive.

And in the above example we are not passing any else or then templates and the only input we are giving is `[ngIf]`

Based upon the condition we are updating the view. See the source code of `updateView()` method of `NgIf` class.

{{< figure src="NgIf-Update-View-min.png" title="NgIf Update View and ng-template" alt="NgIf Update View and ng-template">}} 

In the update view method Angular will assign `thenViewRef` to the embedded view created from `thenTemplateRef` i.e, view from `ng-template`

So if the condition `display` is true web page displayes `I am Visible.`

{{< figure src="ngIf-comment-min.png" title="ngIf comment section" alt="ngIf comment section">}} 

And If you see the generated HTML `ng-template` being converted to a comment section which gives the information about the evaluated condition.

If we pass `else` template via [ngIfElse] it is being assigned to `elseTemplateRef`

If the condition is false in `updateView()` method Angular will assign `elseViewRef` to the embedded view created from `elseTemplateRef`

{{< figure src="ngIfElse.png" title="ngIfElse ng-template" alt="ngIfElse ng-template">}} 

And we can <a href="https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/" target="_blank" rel="noopener">dynamically change else or then templates runtime</a> by updating [ngIfElse] and [ngIfThen] template references

## Using `ng-template` with *ngFor example

You might be thinking that why we need to use asterisk(*) notation when we can use `ng-template` element directly. Yes we can use `ng-template` instead of short hand notation.

*ngIf is a simple directive without much complexity. This asterisk notation or microsyntax (in Angular terms) is very useful incase complex structural directives like `*ngFor`. Take a look at the below example

```
<div 
     *ngFor="let task of tasks; 
             let i=index; 
             let even=even; 
             trackBy: trackById">
   ({{i}}) {{task.name}}
</div>

<ng-template 
   ngFor let-task [ngForOf]="tasks" 
   let-i="index" 
   let-even="even"
   [ngForTrackBy]="trackById">
<div>({{i}}) {{task.name}}</div>
</ng-template>
```

With the asterisk notation or Angular microsyntax we can give instructions to the directive in simple string format. And Angular microsyntax parser convert that string into the attributes of `ng-template` as shown above

I dont want to get into the implementation details of `*ngFor`. All we need to understand is asterisk (*) notation easy to write and understand.

Until unless you have good reason, prefer asterisk(*) notation instead of `ng-template`

## Using `ng-template` with NgSwitch example

`NgSwitch` is not a single directive it is actually used along with other directives `*ngSwitchCase` and `*ngSwitchDefault`

Have a look at the below `ngSwitch` example

```
<div [ngSwitch]="Course"> 
  <p *ngSwitchCase="'Angular'">Angular Course</p>
  <p *ngSwitchCase="'TypeScript'">TypeScript Course</p>
  <p *ngSwitchCase="'JavaScript'">JavaScript Course</p> 
  <p *ngSwitchDefault>HTML Course</p> 
</div>
<div [ngSwitch]="Course">
  <ng-template *ngSwitchCase="'Angular'">
    <p>Angular Course</p>
  </ng-template>
  <ng-template [ngSwitchCase]="'TypeScript'">
    <p>TypeScript Course</p>
  </ng-template>
  <ng-template [ngSwitchCase]="'JavaScript'">
    <p>JavaScript Course</p>
  </ng-template>
  <ng-template [ngSwitchDefault]>
    <p>HTML Course</p>
  </ng-template>
</div>
```

If you see the above code I have not used asterisk before `ngSwitch` why because, NgSwitch is not a structural directive. It is an attribute directive.

NgSwitch controls the behavior of the other two switch directives `ngSwitchCase` and `ngSwitchDefault`.

Both `ngSwitchCase`,`ngSwitchDefault` are structural directives that is why i have used asterisk before them. And those will be converted to `ng-template` elements

## Summary

I hope you understand what is `ng-template` in Angular and why it is useful. And if you are writing you own structural directives you should have clear idea about `ng-template>`
 
In my next article I will explain how to write a custom structural directive with the help of `ng-template`
