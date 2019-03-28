# NgOnInit & Constructor Differences In Angular With Examples

ngOnInit and constructor methods in Angular might be confusing to you,if you are new to Angular.In this tutorial, we&#8217;ll cover the differences between _ngOnInit & __constructor_.

  1. [What is a Constructor?](#step-1)
  2. [What is ngOnInit() in Angular?](#step-2)
  3. [When is ngOnInit Executed?](#step-516)
  4. [Understand difference between constructor & ngOnInit() in Angular with example](#step-3)
  5. [When to use a constructor & when to use ngOnInit? in Angular](#step-4)
  6. [Constructor usage in Angular](#step-41)
  7. [ngOnInit() method usage in Angular](#step-42)
  8. [ngOnInit vs Constructor in Angular](#step-5)<figure id="attachment_491" style="width: 800px" class="wp-caption aligncenter">

<img class="size-full wp-image-491" src="https://www.angularjswiki.com/wp-content/uploads/2018/07/Difference-between-Constructor-and-ngOnInit.jpg" alt="Difference between Constructor and ngOnInit" width="800" height="533" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/07/Difference-between-Constructor-and-ngOnInit.jpg 800w, https://www.angularjswiki.com/wp-content/uploads/2018/07/Difference-between-Constructor-and-ngOnInit-300x200.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2018/07/Difference-between-Constructor-and-ngOnInit-768x512.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" /> <figcaption class="wp-caption-text">Difference between Constructor and ngOnInit</figcaption></figure> 

## What is a Constructor? {#step-1}

A constructor is a special method which will be called whenever we create new objects. And generally used of initializing the class members. It is a feature of the class(typescript) itself, an object-oriented design concept not Angular.

If you are coming from the object-oriented programming background, you will know what exactly is a constructor & what it will do.

Have a look at the below typescript class example to understand constructor

<pre>class AddNumbers{
     x: number;
     y: number;
     constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
     }
     add() {
      return this.x+this.y;
     }
}</pre>

The above class will be translated to JavaScript function

<pre>var AddNumbers= (function () {
    function AddNumbers(x, y) {
        this.x = x;
        this.y = y;
    }
    AddNumbers.prototype.add = function () {
      return this.x + point.x;
    };
    return AddNumbers;
})();

var numbers = new AddNumbers(2,4);
var additionOfNumbers = numbers.add();
console.log(additionOfNumbers); //Prints 6</pre>

&nbsp;

If you see the above example constructor will be automatically invoked by JavaScript engine when we create a new object. Whereas add() method is being added to the prototype of the class.

We will call it whenever it is required. Our _ngOnInit()_ method is just a method being added to the prototype of the class. We will take an angular component example to understand it further.

## What is ngOnInit() in Angular? {#step-2}

  1. _ngOnInit_ is a life cycle hook managed by Angular
  2. _ngOnInit_ being added to prototype of the class created
  3. _ngOnInit_ called by Angular when component is initialized
  4. Actual business logic performed ngOnInit method

Every component we create has a life cycle managed by Angular.

As part of the life cycle, angular creates it, renders it and checks when its bounded data properties changes, destroys the component before removing it from the DOM.

Angular exposes few lifecycle hooks that gives visibility into this events and to do post initialization operations when they occur.

One of the lifecycle hooks is _ngOnInit()_

ngOnInit() called by Angular to indicate that Angular is done with initializing the component.

To use ngOnInit() we have to import _OnInit _from _@angular/core _(Actually it is not required but as a good practice import the _OnInit_)

Whenever you create a new component using <a href="http://www.angularjswiki.com/tutorial/angular/angular-2-or-angular-local-development-environment-setup/" target="_blank" rel="noopener">angular-cli</a> ngOnInit being added by default.

Go through the sample example

<div>
  <pre>import { Component, OnInit } from '@angular/core';

@Component({
selector:'app-checkbox',
templateUrl:'./checkbox.component.html',
styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent implements OnInit {
constructor() {
console.log('Called Constructor');
}

ngOnInit() {
console.log('Called ngOnInit method');
}

}</pre>
</div>

This will be transformed the below Javascript function

<div>
  <pre>var CheckboxComponent = /** @class */ (function () {

function CheckboxComponent() {
}

CheckboxComponent.prototype.ngOnInit=function () {
};

CheckboxComponent=__decorate([

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
selector:'app-checkbox',
template:
__webpack_require__(/*! ./checkbox.component.html */"./src/app/checkbox/checkbox.component.html"),
styles:
[__webpack_require__(/*! ./checkbox.component.css */"./src/app/checkbox/checkbox.component.css")]
}),
__metadata("design:paramtypes", [])],
CheckboxComponent);

return CheckboxComponent;
}());</pre>
</div>

<div>
</div>

<div>
  <em>ngOnInit()</em> method is added to the prototype of the checkbox component function.
</div>

That means someone has to invoke it, whereas constructor is automatically called by JavaScript engine. And this method is called Angular when the component is rendered.

That means somewhere in the angular core _checkboxcomponent.ngOnInit() _will be called when it finishes rendering the component.

So the first <span style="text-decoration: underline;">main difference between <em>constructor</em> and <em>ngOnInit</em> method is <em>constructor</em> called by JavaScript engine whereas <em>ngOnInit()</em> called by Angular</span>.

## When is ngOnInit Executed? {#step-516}

  1. ngOnInit will be executed, When Angular done with the creating of component DOM.
  2. ngOnInit will be called after the constructor execution and after first ngOnChanges

To understand it further will take an example

## Understand difference between constructor & ngOnInit() in Angular with example: {#step-3}

We will take an example of the <a href="http://www.angularjswiki.com/tutorial/angular/checkbox-implementation-in-angular-using-angular-material/" target="_blank" rel="noopener">Angular Material Checkbox</a> component.

I have created a checkbox list component _<app-checkboxlist>_ which displays two material checkboxes using a child component _<app-checkbox>_

<pre>import { Component, OnInit } from '@angular/core';
import { checkboxInformation } from '../checkboxInformation';
@Component({
selector: 'app-checkboxlist',
templateUrl: './checkboxlist.component.html',
styleUrls: ['./checkboxlist.component.css']
})
export class CheckboxlistComponent implements OnInit {

checkboxes : checkboxInformation[]=
[new checkboxInformation(true,"Angular Material Checkbox Checked"),
new checkboxInformation(false,"Angular Material Checkbox UnChecked")];

constructor() { }
ngOnInit() {}
}

//checkboxlist.component.html
&lt;div&gt;
&lt;app-checkbox *ngFor="let item of checkboxes" [checkboxInfo]="item"&gt;&lt;/app-checkbox&gt;
&lt;/div&gt;

</pre>

And the child component is

<pre>import { checkboxInformation } from '../checkboxInformation';
import { Component,Input, OnInit } from '@angular/core';

@Component({
selector: 'app-checkbox',
templateUrl: './checkbox.component.html',
styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent implements OnInit {

@Input() checkboxInfo : checkboxInformation; 

constructor() { 
console.log('Called Constructor method');
console.log(this.checkboxInfo);
//Displays undefined
}

ngOnInit() {
console.log('Called ngOnInit method');
console.log(this.checkboxInfo);
}
}

// And checkbox.component.html file is 
&lt;p&gt;&lt;mat-checkbox [(checked)]="checkboxInfo.status"&gt;
{{checkboxInfo.label}}&lt;/mat-checkbox&gt;&lt;/p&gt;

</pre>

<div>
  And in addition to it, I have created a class checkboxInformation
</div>

<div>
</div>

<pre>export class checkboxInformation{
    label:string;
    status:boolean;
    constructor(_enabled : boolean, _label :string ){
       this.label = _label;
       this.status = _enabled;
   }
}

</pre>

The output is<figure id="attachment_476" style="width: 369px" class="wp-caption aligncenter">

<img class="size-full wp-image-476" src="http://www.angularjswiki.com/wp-content/uploads/2018/07/constructo-vs-ngOnInit-Difference-example.png" alt="Constructor vs ngOnInit Difference example" width="369" height="415" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/07/constructo-vs-ngOnInit-Difference-example.png 369w, https://www.angularjswiki.com/wp-content/uploads/2018/07/constructo-vs-ngOnInit-Difference-example-267x300.png 267w" sizes="(max-width: 369px) 100vw, 369px" /> <figcaption class="wp-caption-text">Constructor vs ngOnInit Difference example</figcaption></figure> 

&nbsp;

Here I am using _@Input_ Decorator to pass value from parent component  _CheckboxlistComponent  _to child component _CheckboxComponent_

_@Input_ property isn&#8217;t initialized until the component view is set up. Which will not happen at the time of constructor invocation, that is why if I try to access the _@Input_ property _checkboxInfo_ in constructor  _console.log(this.checkboxInfo)_

It will be displayed as _undefined_

_ngOnInit()_ is invoked when everything in the component is initialized. So that is why _checkboxInfo_ value is available inside the _ngOnInit()_ method.

In other words, The _ngOnInit()_ lifecycle hook Initialize the component after Angular first displays the data-bound properties and sets the component&#8217;s input properties It is a guarantee that our bindings are readily available.

It is called only once.

## When to use constructor & when to use ngOnInit in Angular? {#step-4}

In object-oriented programming, world constructor is used to initialize the class members and used for dependency injection.

## Constructor usage in Angular: {#step-41}

In Angular, the constructor is used for injecting dependencies into the component class. Nothing much. And keep the constructor as simple as possible. Unit testing can be very easy if the constructor logic is simple.

## ngOnInit() method usage in Angular: {#step-42}

As explained above Angular calls ngOnInit when it finishes creating a component DOM. And we will use constructors to inject all required dependencies and processed input bindings.

So we have everything in place so put actual logic in ngOnInit() method.

It’s a common practice to use ngOnInit to do actual work even though the logic doesn’t depend on DI, DOM or input bindings.

## ngOnInit vs Constructor in Angular: {#step-5}

[table id=2 /]

I hope you understand all the differences between _constructor_ and _ngOnInit_ method in Angular.