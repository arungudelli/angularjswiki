+++
title = "How To Use Ng-Template In Angular?"
menuTitle = "ng template"
description ="ng-template is a virtual element and its contents are displayed only when needed.ng-template should be used along with structural directives like [ngIf],[ngFor],[NgSwitch] or custom structural directives"
keywords="ng-template,ng-template tag in angular,ng-template and *ngif,ng-template and *ngfor,ng-template and ngswitch"
og_image="https://www.angularjswiki.com/wp-content/uploads/2018/07/NgIf-Defination-min.png"
+++

ng-template is an Angular element used to render HTML templates.

We use ng-template with angular *_ngIf_ directive to display _else_ template.

So what exactly this ng-template will do?

Whether it really renders HTML template we will see with an example.

<div>
  <pre>&lt;div&gt; ng-template works!&lt;/div&gt;
&lt;ng-template&gt;Inside ng-template tag&lt;/ng-template&gt;</pre>
</div>

If you see the output it will display only _ng-template works _which is in div element.And have a look at the generated HTML source code.

<!-- ![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/ng-template-min.png "ng-template example") -->

You can see an empty comment section in place of ng-template tag. Lets go through deep into ng-template to understand this behaviour.

## Table Of Contents:

  1. [What is <ng-template> in Angular](#step-1)
  2. [Using <ng-template> with *ngIf example](#step-2)
  3. [Using <ng-template> with *ngFor example](#step-3)
  4. [Using <ng-template> with NgSwitch example](#step-4)
  5. [Summary](#step-5)

## What is <ng-template> in Angular: {#step-1}

  1. ng-template is a virtual element and its contents are displayed only when needed (based on conditions).
  2. ng-template should be used along with structural directives like [ngIf],[ngFor],[NgSwitch] or custom structural directives.That is why in the above example the contents of ng-template are not displayed.
  3. ng-template never meant to be used like other HTML elements. It&#8217;s an internal implementation of Angular&#8217;s structural directives.
  4. When you use a structural directive in Angular we will add a prefix asterisk(*) before the directive name. This asterisk is short hand notation for _<ng-template>._
  5. Whenever Angular encounter with the asterisk(*) symbol, we are informing Angular saying that it is a structural directive and Angular will convert directive attribute to ng-template element.
  6. ng-template is not exactly a true web element. When we compile our code, we will not see a ng-template tag in HTML DOM.
  7. Angular will evaluate the ng-template element to convert it into a comment section in HTML DOM.

We will go through the different structural directives like _*ngIf_,_*ngFor_ and _[NgSwitch]_ to understand this further.

## Using <ng-template> with *ngIf example: {#step-2}

Take an examle of <a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">*ngIf directive</a> in Angular

<div>
  <pre>&lt;div *ngIf="display" class="ng-template-example"&gt;
  ng-template example
&lt;/div&gt;
&lt;ng-template [ngIf]="display"&gt;
  &lt;div class="ng-template-example"&gt;ng-template example&lt;/div&gt;
&lt;/ng-template&gt;</pre>
</div>

  * The directive being converted to data member of ng-template
  * The inline template element along with the attributes (class etc), moved inside the ng-template element

<div>
  <div>
  </div>
  
  <div>
    So we have only <em>then</em> template which is an inline template and there is no <em>else</em> template.Now will dig into the source code of <em>NgIf</em> Class to understand how <em><ng-template></em> element will work.
  </div>
  
  <div>
  </div>
  
  <!-- ![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/NgIf-Defination-min.png "NgIf Source Code and <ng-template>") -->

</div>

Any structural directive in Angular will have two properties

  1. TemplateRef
  2. ViewContainerRef

A structural directive creates the view from ng-template and inserts it in view container adjacent to directive host element.

That means structural directive access the contents of ng-template through _TemplateRef_ and updates the _ViewContainerRef_

<span style="text-decoration: underline;">Tem</span><span style="text-decoration: underline;">plateRef</span> <span style="text-decoration: underline;">is the class name and <ng-template> is the corresponding HTML tag</span>

And if you see the above source code of NgIf class It has four properties

  1. _thenTemplateRef : <ng-template> reference of then
  2. _elseTemplateRef : <ng-template> reference of else
  3. _thenViewRef : embedded view ref of then
  4. _elseViewRef : embedded view ref of else

If you see the constructor it has two parameters _private _viewContainer: ViewContainerRef_ and _templateRef: TemplateRef<NgIfContext>._

Constructor will access the ng-template via _templateRef_ parameter and assign it to __thenTemplateRef_ . inline template will be the default then template in ngIf directive.

And in the above example we are not passing any else or then templates and the only input we are giving is _[ngIf]. _

Based upon the condition we are updating the view. See the source code of __updateView()_ method of _NgIf_ class.

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/NgIf-Update-View-min.png "NgIf Update View ng-template")

In the update view method Angular will assign __thenViewRef_ to the embedded view created from __thenTemplateRef._ i.e, view from ng-template

So if the condition _display_ is true web page displayes _I am Visible. _

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-comment-min.png "ngIf comment section")

And If you see the generated HTML ng-template being converted to a comment section which gives the information about the evaluated condition.

If we pass _else_ template via [ngIfElse] it is being assigned to __elseTemplateRef._

_ _If the condition is false in __updateView()_ method Angular will assign _elseViewRef to the embedded view created from __elseTemplateRef__._

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIfElse.png "ngIfElse ng-template")

And we can <a href="https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/" target="_blank" rel="noopener">dynamically change else or then templates runtime</a> by updating [ngIfElse] and [ngIfThen] template references

## Using <ng-template> with *ngFor example: {#step-3}

You might be thinking that why we need to use asterisk(*) notation when we can use ng-template element directly. Yes we can use <ng-template> instead of short hand notation.

\*ngIf is a simple directive without much complexity. This asterisk notation or microsyntax (in Angular terms) is very useful incase complex structural directives like \*ngFor. Take a look at the below example

<div>
  <pre>&lt;div 
     *ngFor="let task of tasks; 
             let i=index; 
             let even=even; 
             trackBy: trackById"&gt;
   ({{i}}) {{task.name}}
&lt;/div&gt;

&lt;ng-template 
   ngFor let-task [ngForOf]="tasks" 
   let-i="index" 
   let-even="even"
   [ngForTrackBy]="trackById"&gt;
&lt;div&gt;({{i}}) {{task.name}}&lt;/div&gt;
&lt;/ng-template&gt;</pre>
</div>

With the asterisk notation or Angular microsyntax we can give instructions to the directive in simple string format. And Angular microsyntax parser convert that string into the attributes of ng-template as shown above

I dont want to get into the implementation details of _*ngFor_. All we need to understand is asterisk (*) notation easy to write and understand.

Until unless you have good reason, prefer asterisk(*) notation instead of ng-template

## Using <ng-template> with NgSwitch example: {#step-4}

_NgSwitch_ is not a single directive it is actually used along with other directives _*ngSwitchCase_ and _*ngSwitchDefault_

Have a look at the below _ngSwitch_ example

<pre><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">ngSwitch</span>]=<span class="hljs-string">"Course"</span>&gt;</span> 
<span class="hljs-tag">  &lt;<span class="hljs-name">p</span> *<span class="hljs-attr">ngSwitchCase</span>=<span class="hljs-string">"'Angular'"</span>&gt;</span>Angular Course<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;
</span>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> *<span class="hljs-attr">ngSwitchCase</span>=<span class="hljs-string">"'TypeScript'"</span>&gt;TypeScript Course</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;
</span>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> *<span class="hljs-attr">ngSwitchCase</span>=<span class="hljs-string">"'JavaScript'"</span>&gt;</span>JavaScript Course<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> 
<span class="hljs-tag">  &lt;<span class="hljs-name">p</span> *<span class="hljs-attr">ngSwitchDefault</span>&gt;HTML Course</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> 
<span class="hljs-tag">&lt;/div&gt;
</span></pre>

<div>
  <pre>&lt;div [ngSwitch]="Course"&gt;
  &lt;ng-template *ngSwitchCase="'Angular'"&gt;
    &lt;p&gt;Angular Course&lt;/p&gt;
  &lt;/ng-template&gt;
  &lt;ng-template [ngSwitchCase]="'TypeScript'"&gt;
    &lt;p&gt;TypeScript Course&lt;/p&gt;
  &lt;/ng-template&gt;
  &lt;ng-template [ngSwitchCase]="'JavaScript'"&gt;
    &lt;p&gt;JavaScript Course&lt;/p&gt;
  &lt;/ng-template&gt;
  &lt;ng-template [ngSwitchDefault]&gt;
    &lt;p&gt;HTML Course&lt;/p&gt;
  &lt;/ng-template&gt;
&lt;/div&gt;</pre>
</div>

If you see the above code I have not used asterisk before _ngSwitch_ why because, NgSwitch is not a structural directive. It&#8217;s an attribute directive.

NgSwitch controls the behavior of the other two switch directives _ngSwitchCase_ and _ngSwitchDefault_.

Both _ngSwitchCase_,_ngSwitchDefault_ are structural directives that&#8217;s why i have used asterisk before them. And those will be converted to ng-template elements

## Summary: {#step-5}

I hope you understand what is _ng-template_ in Angular and why it is useful. And if you are writing you own structural directives you should have clear idea about _<ng-template>._ In my next article I will explain how to write a custom structural directive with the help of ng-template
