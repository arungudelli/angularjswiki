+++
title = "NgOnInit & Constructor Differences In Angular With Examples"
subtitle = "Understanding differences between ngOnInit & Constructor"
type="post"
summary ="We can create a beatiful Progress bar in Angular using mat-progress-bar which is part of angular material progress bar module called MatProgressBarModule"
keywords=["mat-progress-bar,angular material progress bar,mat-progress-bar example"]
date="2018-08-01T01:01:05+0000"
lastmod="2019-01-30T05:38:07+0000"
draft=false
authors = ["admin"]


[image]
  caption = "Difference between Constructor and ngOnInit"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

ngOnInit and constructor methods in Angular might be confusing to you,if you are new to Angular.In this tutorial, we will cover the differences between `ngOnInit` & `constructor`.

{{% toc %}}

## What is a Constructor?

A constructor is a special method which will be called whenever we create new objects. And generally used of initializing the class members. It is a feature of the class(typescript) itself, an object-oriented design concept not Angular.

If you are coming from the object-oriented programming background, you will know what exactly is a constructor & what it will do.

Have a look at the below typescript class example to understand constructor

```
class AddNumbers{
     x: number;
     y: number;
     constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
     }
     add() {
      return this.x+this.y;
     }
}
```

The above class will be translated to JavaScript function

```
var AddNumbers= (function () {
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
console.log(additionOfNumbers); //Prints 6
```

If you see the above example constructor will be automatically invoked by JavaScript engine when we create a new object. Whereas add() method is being added to the prototype of the class.

We will call it whenever it is required. Our `ngOnInit()` method is just a method being added to the prototype of the class. We will take an angular component example to understand it further.

## What is ngOnInit() in Angular?

  1. `ngOnInit` is a life cycle hook managed by Angular
  2. `ngOnInit` being added to prototype of the class created
  3. `ngOnInit` called by Angular when component is initialized
  4. Actual business logic performed ngOnInit method

Every component we create has a life cycle managed by Angular.

As part of the life cycle, angular creates it, renders it and checks when its bounded data properties changes, destroys the component before removing it from the DOM.

Angular exposes few lifecycle hooks that gives visibility into this events and to do post initialization operations when they occur.

One of the lifecycle hooks is `ngOnInit()`

ngOnInit() called by Angular to indicate that Angular is done with initializing the component.

To use ngOnInit() we have to import `OnInit` from `@angular/core` (Actually it is not required but as a good practice import the `OnInit`)

Whenever you create a new component using <a href="http://www.angularjswiki.com/tutorial/angular/angular-2-or-angular-local-development-environment-setup/" target="_blank" rel="noopener">angular-cli</a> ngOnInit being added by default.

Go through the sample example

```
import { Component, OnInit } from '@angular/core';

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

}
```

This will be transformed the below Javascript function

```
var CheckboxComponent = /** @class */ (function () {

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
}());
```
ngOnInit() method is added to the prototype of the checkbox component function.

That means someone has to invoke it, whereas constructor is automatically called by JavaScript engine. And this method is called Angular when the component is rendered.

That means somewhere in the angular core `checkboxcomponent.ngOnInit()` will be called when it finishes rendering the component.

{{% alert note %}}
So the first main difference between `constructor` and `ngOnInit` method is 
`constructor` called by JavaScript engine whereas `ngOnInit()` called by Angular.
{{% /alert %}}


## When is ngOnInit Executed?

  1. ngOnInit will be executed, When Angular done with the creating of component DOM.
  2. ngOnInit will be called after the constructor execution and after first ngOnChanges

To understand it further will take an example

## Understand difference between constructor & ngOnInit() in Angular with example

We will take an example of the <a href="http://www.angularjswiki.com/tutorial/angular/checkbox-implementation-in-angular-using-angular-material/" target="_blank" rel="noopener">Angular Material Checkbox</a> component.

I have created a checkbox list component `<app-checkboxlist>` which displays two material checkboxes using a child component `<app-checkbox>`

```
import { Component, OnInit } from '@angular/core';
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
<div>
<app-checkbox *ngFor="let item of checkboxes" [checkboxInfo]="item"></app-checkbox>
</div>
```

And the child component is

```
import { checkboxInformation } from '../checkboxInformation';
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
<p><mat-checkbox [(checked)]="checkboxInfo.status">
{{checkboxInfo.label}}</mat-checkbox></p>
```

And in addition to it, I have created a class checkboxInformation

```
export class checkboxInformation{
    label:string;
    status:boolean;
    constructor(_enabled : boolean, _label :string ){
       this.label = _label;
       this.status = _enabled;
   }
}
```

The output is

{{< figure src="constructo-vs-ngOnInit-Difference-example.png" title="Constructor vs ngOnInit Difference example" alt="Constructor vs ngOnInit Difference example">}}

Here I am using `@Input` Decorator to pass value from parent component  `CheckboxlistComponent`  to child component `CheckboxComponent`

`@Input` property is not initialized until the component view is set up. Which will not happen at the time of constructor invocation, that is why if I try to access the `@Input` property `checkboxInfo` in constructor  `console.log(this.checkboxInfo)`

It will be displayed as `undefined`

`ngOnInit()` is invoked when everything in the component is initialized. So that is why `checkboxInfo` value is available inside the `ngOnInit()` method.

In other words, The `ngOnInit()` lifecycle hook Initialize the component after Angular first displays the data-bound properties and sets the component's input properties It is a guarantee that our bindings are readily available.

It is called only once.

## When to use constructor & when to use ngOnInit in Angular

In object-oriented programming, world constructor is used to initialize the class members and used for dependency injection.

## Constructor usage in Angular

In Angular, the constructor is used for injecting dependencies into the component class. Nothing much. And keep the constructor as simple as possible. Unit testing can be very easy if the constructor logic is simple.

## ngOnInit() method usage in Angular

As explained above Angular calls ngOnInit when it finishes creating a component DOM. And we will use constructors to inject all required dependencies and processed input bindings.

So we have everything in place so put actual logic in ngOnInit() method.

It’s a common practice to use ngOnInit to do actual work even though the logic doesn’t depend on DI, DOM or input bindings.

## ngOnInit vs Constructor in Angular

<div class="table-responsive">
<table class="table">
	<thead>
		<tr>
			<th>ngOnInit</th>
			<th>Constructor</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>One of the Angular life cycle hook method</td>
			<td>Typescript feature nothing to do with Angular</td>
		</tr>
		<tr>
			<td>ngOnInit being added to prototype of the class created</td>
			<td>constructor is transformed to function with the same name as class created</td>
		</tr>
		<tr>
			<td>Called by Angular</td>
			<td>Called by Javascript Engine</td>
		</tr>
		<tr>
			<td>Invoked by Angular when component is initialized</td>
			<td>Constructor is automaticlly called at the time of creating object of the class</td>
		</tr>
		<tr>
			<td>Actual business logic performed here</td>
			<td>Used for Injecting dependencies</td>
		</tr>
		<tr>
			<td>Everything is ready at the time of invocation </td>
			<td>Not everything in  component is initialized at the time of invocation</td>
		</tr>
	</tbody>
</table>


I hope you understand all the differences between `constructor` and `ngOnInit` method in Angular.