+++
title = "How To Install And Use JQuery In Angular Projects"
subtitle = "learn how to use jQuery in Angular"
type="post"
summary ="Use below commands to install and use jquery in Angular with jquery types npm install --save jquery; npm install --save @types/jquery"
keywords=["npm install --save jquery,npm install --save @types/jquery,jquery in angular,install jquery in angular should we use jquery in angular"]
date="2019-01-30T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
draft=false
authors = ["admin"]

[image]
  caption = "jQuery in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

jQuery plugin in Angular will be very useful while we are doing DOM manipulations.In this tutorial I will be explaining how to install and use jquery in Angular Projects

{{%toc%}}
  

## Install and Use jquery in Angular

To install jquery in Angular use the following node npm command

```
npm install jquery -- save
```
{{< figure src="Installing-jquery-in-Angular.png" title="Installing jquery in Angular" alt="Installing jquery in Angular">}} 


In your [local angular development setup](https://www.angularjswiki.com/angular/angular-2-or-angular-local-development-environment-setup/) you can see jquery folder under node_modules

And then add the reference to jquery file in Angular.json or Angular-cli.json depending upon the [version of Angular](https://www.angularjswiki.com/angular/is-it-angular-2-or-angular-4-or-just-angular)

In Latest versions like Angular 7 or Angular 6 it is Angular.json file.

```
"scripts": [
  "node_modules/jquery/dist/jquery.min.js"
]
```

Add the reference in scripts array of Angular.json

And finally declare a variable called jQuery or $ in the angular component where you want to use jQuery plugin as shown below.

```
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
 selector: 'app-jquery-example',
 templateUrl: './jquery-example.component.html',
 styleUrls: ['./jquery-example.component.css']
})
export class JqueryExampleComponent implements OnInit {

constructor() { }

ngOnInit() {
   $(document).ready(function() {
     alert('I am Called From jQuery');
   });
}
}
```

Now you can see the alert saying I am Called from jQuery in the UI.

```
declare var $: any; or
declare var jQuery: any;
```

But this is not a good practice at all.

As typescript does not know anything about a third party plugin like jquery which is written in JavaScript.

It cannot perform static type checking, further it cannot discover the errors written in jQuery.

To satisfy typescript compiler, we are declaring $ or jQuery variable in Angular component so that at runtime as all typescript files are converted to js files, whenever it encounters $ or jQuery it will perform jQuery operations.

We will understand the problem with this kind of approach in Angular with an example.

I have added a [button in Angular](https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/) component html file and on clicking on it we will display a message

```
<button id="my-button">Click me</button>

// In JqueryExampleComponent  ts file 

ngOnInit() {
   $(document).ready(function() {
     $('#my-button').click(1);
   });
}
```
  
Ideally jquery click function excepts a parameter as function, but i wrote a buggy code `$('#my-button').click(1);` (passing an integer to it).

And typescript compiler does not know the defination of jquery click function and the code will compile and at runtime it will throw an error whenever click the angular buttons.

Moreover we wont be getting intellisense in visual code editor.

To avoid such kind of errors in Angular, we need to have type defination files for every third party library we use in typescript or angular projects in this case jQuery.

Luckily we have jquery type definations are available as part of separate npm packages.

## Install and Use jquery in Angular with typescript jquery @types

To install jQuery type definations file in Angular projects use the following command.

```
npm install --save jquery
npm install --save @types/jquery
```

After successful installation you will see a folder inside the node_modules/@types with jQuery type defination files.

{{< figure src="jquery-types-installation-in-angular-project.png" title="jquery types installation in angular project" alt="jquery types installation in angular project">}} 

If you use jquery @types no need to add jquery.min.js file reference in angular.json file.

And in the Angular component file import the jquery as shown below.

```
import * as $ from 'jquery';
```

And if you hover over the $ element you will see the defination of jquery object as shown below.

And we can also you give your own name for jQuery imports as shown below. In previous example it is not the case.

```
import * as myjQuery from 'jquery';
```

{{< figure src="jquery-types-definations-in-Angular.png" title="jquery types definations in Angular" alt="jquery types definations in Angular">}} 

And now the same code wont compile at all it will return an error saying.

{{% alert warning %}}
Argument of type '1' is not assignable to parameter of type 'false | EventHandlerBase<HTMLElement, ClickEvent<HTMLElement, null, HTMLElement, HTMLElement>>'.
{{% /alert %}}


{{< figure src="jquery-types-definations-example-in-Angular.png" title="jquery types definations example in Angular" alt="jquery types definations example in Angular">}} 

See the above defination of click function in visual studio code intellisense.

So we are catching error before running the applications, that&#8217;s what typescript known for.

## Should I use jquery in Angular Projects

There is no straight away answers for this. It is upto the developers to decide whether to use jquery in Angular or not.

But generally it is not a good practice to use jQuery in Angular projects because

  1. In Angular it is not advisable to manipulate the DOM directly that is what jquery does.
  2. If you manipulate dom elements that are not part of component template model then it will not create a problem but it you are changing elements that are part of component template model it might cause errors and performence issues.
  3. Everything you want to do with jquery can be done with Angular as well, [it is just the learning curve](https://www.angularjswiki.com/angular/angular-2-hello-world-example/)

It is only my personal opinion.