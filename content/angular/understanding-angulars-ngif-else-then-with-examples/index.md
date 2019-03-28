# NgIf Else In Angular & *NgIf Else Async Pipe Observable Example

To write **ngIf else in angular** we need to pass else template to \*ngIf directive.Angular \*ngIf else displays or removes an element from DOM based on the condition.

we can use async pipe with *ngIf to handle the data coming from an observable in a better way.

The syntax and usage of *ngIf directive is same in all the versions of Angular.

  1. [Using *ngIf in Angular with example](#step-1)
  2. [Using *ngIf else in Angular with example](#step-2)
  3. [Using *ngIf with alternative then template in Angular](#step-3)
  4. [*ngif else and then templates example in Angular](#step-4).
  5. [*ngif with Logical Operators AND (&&), OR(||), NOT(!)](#step-11)
  6. [Using &#8220;\*ngIf as&#8221; syntax to store \*ngIf condition in a local variable](#step-5)
  7. [Using *ngIf async pipe with observable example](#step-6)

## Using *ngIf in Angular with example: {#step-1}

*_ngIf_ evaluates the passed expression & then renders the _then_ or _else_ templates. Look at the below example

<pre>&lt;div *ngIf="display"&gt;Hi I am Visible&lt;/div&gt;</pre>

If _display_ property is true then the div element will be added to the DOM. Otherwise, no element will be added.

The default templates of *ngIf are

  * _then_ template is inline template of _ngIf _(in above inline template means _<div>Hi I am Visible</div>_)
  * _else_ template is blank (and there is no _else_ template)

Or we can bind alternative templates based upon our usage.

_*ngIf_ is a directive that means we can add it to any HTML element or component

<pre>&lt;p *ngIf="display"&gt;Visible only if display is true&lt;/p&gt;</pre>

Or we can apply it to other angular components, for instance, <a href="https://www.angularjswiki.com/tutorial/angular/checkbox-implementation-in-angular-using-angular-material/" target="_blank" rel="noopener">material checkbox</a> component

<pre>&lt;mat-checkbox *ngIf="display"&gt;Material Checkbox&lt;/mat-checkbox&gt;</pre>

The syntax is very simple we need to add a prefix, asterisk(*) before the directive name _ngIf_.

So why we need to add the asterisk before the directive name?

The asterisk before _ngIf_ makes our life simple. Angular will convert _*ngif_ attribute to _<ng-template>_ element as displayed below.

<pre>&lt;div *ngIf="display" class="inline"&gt;Hi I am Visible&lt;/div&gt; 

//This will be converted to 

&lt;ng-template [ngIf]="display"&gt;
&lt;div class="inline"&gt;Hi I am Visible&lt;/div&gt;
&lt;/ng-template&gt;  

//inline default template (then template)                
//And no else template

&lt;div *ngIf="false" class="inline"&gt;This is not added to DOM&lt;/div&gt;

&lt;ng-template [ngIf]="false"&gt; 
 &lt;div class="inline"&gt;This is not added to DOM
 &lt;/div&gt; 
&lt;/ng-template&gt;</pre>

Now the above definition makes sense. _then_ template is _<div>Hi I am Visible</div>_ which is inline,and there is no _else_ template.

The asterisk is just a &#8220;syntactic sugar&#8221; to <a href="https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/" target="_blank" rel="noopener"><ng-template></a>

And If you see the generated HTML,no element will be added to the DOM if _ngIf_ expression evaluated to false.<figure id="attachment_546" style="width: 259px" class="wp-caption aligncenter">

<img class="size-full wp-image-546" src="https://www.angularjswiki.com/wp-content/uploads/2018/07/ngif.png" alt="ngif" width="259" height="109" /> <figcaption class="wp-caption-text">ngif</figcaption></figure> 

So why angular will remove the element rather than hiding it. Go through the below article to understand it further.

<a href="https://www.angularjswiki.com/tutorial/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/" target="_blank" rel="noopener">Difference between ngIf and hidden in Angular</a>

We can use _ngIf _in four different ways

  1. Simple _ngIf_ (as explained above)
  2. _*ngIf_ with _else_
  3. _*ngIf_ with _then_
  4. _*ngIf_ with _then_ and _else_

Now how can we use _*ngIf_ _else _in Angular? we need bind _else_ template to _*ngIf_<figure id="attachment_1045" style="width: 640px" class="wp-caption aligncenter">

<img class="wp-image-1045 size-full" src="https://www.angularjswiki.com/wp-content/uploads/2018/07/ng-If-Else-Angular.jpeg" alt="ng If Else Angular" width="640" height="427" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/07/ng-If-Else-Angular.jpeg 640w, https://www.angularjswiki.com/wp-content/uploads/2018/07/ng-If-Else-Angular-300x200.jpeg 300w" sizes="(max-width: 640px) 100vw, 640px" /> <figcaption class="wp-caption-text">ng If Else Angular</figcaption></figure> 

## Using *ngIf else in Angular with example: {#step-2}

Now we will see how to write _*ngIf_ else by using Angular&#8217;s _<ng-template>_ with a simple example.

<pre><span class="str">&lt;div *ngIf</span><span class="str">="display; else elseTemplate" class="main"&gt;
   Visible when display is true
</span><span class="str">&lt;/div&gt;</span>
<span class="str">&lt;ng-template #elseTemplate&gt;
   &lt;div class="alternative"&gt;
      Visible when display is false
   &lt;/div&gt;
&lt;/ng-template&gt;</span></pre>

_else_ binding points to a _<ng-template>_ labeled as &#8216;_#elseTemplate_&#8216;. If the condition or expression is true then default inline template will be rendered otherwise else template will be rendered.

And this template can be defined anywhere in the component view, But as a good practice and to improve readability it is defined right below the _ngIf_ block.

<div>
  <pre>import { Component, OnInit } from '@angular/core';
@Component({
selector:'app-ngifelse',
templateUrl:'./ngifelse.component.html',
styleUrls: ['./ngifelse.component.css']
})

export class NgifelseComponent implements OnInit {
   display:boolean;
   constructor() {
    this.display=true;
   }
   ngOnInit() {}
}

//*ngIf else Component View
&lt;ng-template #elseTemplate&gt;
  &lt;div class="alternative"&gt;
      Visible when display is false
  &lt;/div&gt;
&lt;/ng-template&gt;
&lt;div&gt;
  This example explains how to write *ngIf else block
  in Angular.
  And ng-template block can be defined anywhere in
  the component view
&lt;/div&gt;
&lt;div *ngIf="display; else elseTemplate" class="main"&gt;
   Visible when display is true
&lt;/div&gt;</pre>
</div>

I have declared _else_ template above the _*ngIf_ block in _NgIfElseComponent_ view, But avoid declaring like this as it is difficult to understand.

The above _*ngIf else_ block will be converted to the following _<ng-template>_ element

<pre><span class="nt">&lt;ng-template</span> <span class="err">[</span><span class="na">ngIf</span><span class="err">]="display</span><span class="err">"</span> <span class="err">[</span><span class="na">ngIfElse</span><span class="err">]="elseTemplate</span><span class="err">"</span><span class="nt">&gt;</span> 
<span class="nt"> &lt;div class="main"&gt;
</span>    Visible when display is true
<span class="nt"> &lt;/div&gt;
</span><span class="nt">&lt;/ng-template&gt;
</span><span class="nt">&lt;ng-template</span> <span class="err">#elseTemplate</span><span class="nt">&gt;
</span> <span class="nt">&lt;div class="alternative"&gt;
    Visible when display is false</span> 
<span class="nt"> &lt;/div&gt;
</span><span class="nt">&lt;/ng-template&gt;</span></pre>

## Using *ngIf with alternative then template in Angular: {#step-3}

By default, the _then_ template of *_ngIf_ is the inline template. We can change the inline template of _ngIf_ by binding  _<ng-template>_ just like else binding as explained above. See the below example

<div>
  <pre>import { Component, OnInit } from '@angular/core';
@Component({
selector:'app-ngifthen',
templateUrl:'./ngifthen.component.html',
styleUrls: ['./ngifthen.component.css']
})
export class NgifthenComponent implements OnInit {
display:boolean;
constructor() {
this.display=true;
}
ngOnInit() {}
}

//NgIfthen Component view
&lt;div *ngIf="display; then thenTemplate"&gt;
  Inline template will be ignored
&lt;/div&gt;
&lt;ng-template #thenTemplate&gt;
  Displayed when display is true
&lt;/ng-template&gt;</pre>
</div>

Angular will convert above component view to following _<ng-template>_

<div>
  <pre>&lt;ng-template [ngIf]="display" [ngIfThen]="thenTemplate"&gt;
 Inline template will be ignored
&lt;/ng-template&gt;
&lt;ng-template #thenTemplate&gt;
 Displayed when display is true
&lt;/ng-template&gt;</pre>
</div>

You might think that why we need _[ngIfThen]_ template reference when we have Inline template.

we can change the _then_ or _else_ templates dynamically at runtime by taking adventage of these _[ngIfThen]_ and _[ngIfElse]_ Go through the below article to understand it further

<a href="https://www.angularjswiki.com/tutorial/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/" target="_blank" rel="noopener">Dynamically Change NgIf, Then,Else Templates At Runtime In Angular</a>

## *ngif else and then templates example in Angular: {#step-4}

We can pass both _else_ template and _then_ template to _*ngIf_ directive as shown below. And default inline template will be ignored in this case.

<div>
  <pre>&lt;div *ngIf="display; then thenTemplate; else elseTemplate"&gt;
 Inline template will be ignored
&lt;/div&gt;
&lt;ng-template #thenTemplate&gt;
 Displayed when display is true
&lt;/ng-template&gt;
&lt;ng-template #elseTemplate&gt;
 Displated when display is false
&lt;/ng-template&gt;</pre>
</div>

And this will be converted to

<div>
  <pre>&lt;ng-template [ngIf]="display" [ngIfThen]="thenTemplate" [ngIfElse]="elseTemplate"&gt;
 Inline template will be ignored
&lt;/ng-template&gt;
&lt;ng-template #thenTemplate&gt;
 Displayed when display is true
&lt;/ng-template&gt;
&lt;ng-template #elseTemplate&gt;
 Displayed when display is false
&lt;/ng-template&gt;</pre>
</div>

## *ngif with Logical Operators AND (&&), OR(||), NOT(!) : {#step-11}

We can pass logical operators AND (&&),OR(||) and NOT(!) in *ngif condition. Here are the examples

<pre>&lt;!-- logic AND && operator --&gt;
&lt;div *ngIf="display && hasAccess"&gt;
Visible when display and hasAccess are true
&lt;/div&gt;

&lt;!-- logic OR || operator --&gt;
&lt;div *ngIf="display || hasAccess"&gt;
Visisble when one of the variable display or hasAccess true
&lt;/div&gt;

&lt;!-- logical NOT ! operator" --&gt;
&lt;div *ngIf="!display"&gt;
Visible only when display is false.
&lt;/div&gt;</pre>

## Using &#8220;\*ngIf as&#8221; syntax to store \*ngIf condition in a local variable: {#step-5}

We can save th *ngIf condition in a local variable using _as_ so that we can use it in template. Have a look at the below example.

<div>
  <pre>&lt;div *ngIf="display as ngIfCondition;else elseTemplate"&gt;
  shows when display is {{ngIfCondition}}
&lt;/div&gt;

&lt;ng-template #elseTemplate let-ngIfCondition&gt;
  shows when display is {{ngIfCondition}}
&lt;/ng-template&gt;</pre>
</div>

We storing *ngIf condition in a local variable called _ngIfCondition._So that we can use it in _then_ or _else_ templates if required.

And in _<ng-template>_ we have to pass local variable prefixing with _let_ keyword.

You might wonder why this is useful, because anyway the expression is going to be _true_ or _false_. Or we can simply use _{{display}}_ instead of declaring local variable _ngIfCondition._

_display_ variable is readily available at the time of _*ngIf_ evaluation.What if the binded variable is asynchronous and coming from an observable.

## Using *ngIf async pipe with observable example: {#step-6}

We will bind some product data coming from an Observable to a component using _async_ pipe.

<pre>&lt;div&gt;
&lt;h3&gt;Name:&lt;/h3&gt;
&lt;p&gt;{{(product| async)?.Name}}&lt;/p&gt;

&lt;h3&gt;Category:&lt;/dh3&gt;
&lt;p&gt;{{(product| async)?.category}}&lt;/p&gt;

&lt;h3&gt;Description:&lt;/h3&gt;
&lt;p&gt;{{(product| async)?.description}}&lt;/p&gt;

&lt;h3&gt;Price:&lt;/h3&gt;
&lt;p&gt;{{(product| async)?.price}}&lt;/p&gt;

&lt;/div&gt;</pre>

We should use pipe on every property we want to display.

The problem with above approach is

  * We are using pipe on every property, this creates subscription each time async pipe is used. In the above example we will create 4 subscriptions.
  * To prevent this we can use rxjs share() operator to share subscription with multiple subscribers.

<pre>product: Observable&lt;{}&gt;;
      constructor() { }
      ngOnInit() {
        this.product= this.getAsyncData().pipe(share());
      }

</pre>

  * But the component view remains the same foreach property we have to use _async_ pipe and ? operator
  * And we cannot display alternate template during the data load.

The ideal solution will be something like below

<pre>if(product){
         //Display 
         product.Name
         product.category
         product.description
         product.price
    }else{
       //Loading
    }</pre>

That is exactly what *ngIf will does with async pipe with observable by using _*ngIf as_ syntax

<pre>&lt;h1&gt;*ngIf async pipe with observable&lt;/h1&gt;

&lt;div *ngIf="product | async as productItem; else loading"&gt;
&lt;div&gt;
 &lt;h3&gt;Name:&lt;/h3&gt;
 &lt;p&gt;{{productItem.Name}}&lt;/p&gt;
 
 &lt;h3&gt;Category:&lt;/dh3&gt;
 &lt;p&gt;{{productItem.category}}&lt;/p&gt;
 
 &lt;h3&gt;Description:&lt;/h3&gt;
 &lt;p&gt;{{(productItem.description}}&lt;/p&gt;
 
 &lt;h3&gt;Price:&lt;/h3&gt;
 &lt;p&gt;{{productItem.price}}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;ng-template #loading let-productItem&gt;
   Loading... (product is {{productItem|json}})
&lt;/ng-template&gt;</pre>

we will dig into the code and see what is happening here

<pre>&lt;div *ngIf="product | async as productItem; else loading"&gt;</pre>

We are passing product observable to _*ngIf_ with _async_ pipe and storing it in _productItem_ local variable.

Initially if product is null it will show the loading template.Once product is available it will show inline template of _*ngIf._

The above code with *ngIf is very clean and easy to understand. We are removing unwanted safe-traversal-operator.? operator and multiple subscriptions.

I hope you understood the basic concepts of the _ngIf_ directive with then and else templates.

If so spare a moment to share this article.