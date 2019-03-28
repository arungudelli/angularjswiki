# How To Install And Use JQuery In Angular Projects

jQuery plugin in Angular will be very useful while we are doing DOM manipulations.In this tutorial I will be explaining how to install and use jquery in Angular Projects

  1. [Install and Use jquery in Angular](#step-1)
  2. [Install and Use jquery in Angular with typescript jquery @types](#step-2)
  3. [Should I use jquery in Angular Projects?](#step-3)<figure id="attachment_1159" style="width: 1600px" class="wp-caption aligncenter">

<img class="size-full wp-image-1159" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/jQuery-in-Angular.jpg" alt="jQuery in Angular" width="1600" height="1067" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/02/jQuery-in-Angular.jpg 1600w, https://www.angularjswiki.com/wp-content/uploads/2019/02/jQuery-in-Angular-300x200.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2019/02/jQuery-in-Angular-768x512.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2019/02/jQuery-in-Angular-1024x683.jpg 1024w" sizes="(max-width: 1600px) 100vw, 1600px" /> <figcaption class="wp-caption-text">jQuery in Angular</figcaption></figure> 

## Install and Use jquery in Angular: {#step-1}

To install jquery in Angular use the following node npm command

<pre>npm install jquery -- save</pre>

&nbsp;<figure style="width: 278px" class="wp-caption aligncenter">

<img class="size-full" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/Installing-jquery-in-Angular.png" alt="Installing jquery in Angular" width="278" height="207" /> <figcaption class="wp-caption-text">Installing jquery in Angular</figcaption></figure> 

In your <a href="https://www.angularjswiki.com/angular/angular-2-or-angular-local-development-environment-setup/" target="_blank" rel="noopener">local angular development setup</a> you can see jquery folder under node_modules

And then add the reference to jquery file in Angular.json or Angular-cli.json depending upon the <a href="https://www.angularjswiki.com/angular/is-it-angular-2-or-angular-4-or-just-angular/" target="_blank" rel="noopener">version of Angular</a>.

In Latest versions like Angular 7 or Angular 6 it is Angular.json file.

<pre>"scripts": [
  "node_modules/jquery/dist/jquery.min.js"
]</pre>

Add the reference in scripts array of Angular.json

And finally declare a variable called jQuery or $ in the angular component where you want to use jQuery plugin as shown below.

<pre>import { Component, OnInit } from '@angular/core';
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
}</pre>

Now you can see the alert saying I am Called from jQuery in the UI.

<pre>declare var $: any; or
declare var jQuery: any;</pre>

But this is not a good practice at all.

As typescript does not know anything about a third party plugin like jquery which is written in JavaScript.

It cannot perform static type checking, further it cannot discover the errors written in jQuery.

To satisfy typescript compiler, we are declaring $ or jQuery variable in Angular component so that at runtime as all typescript files are converted to js files, whenever it encounters $ or jQuery it will perform jQuery operations.

We will understand the problem with this kind of approach in Angular with an example.

I have added a <a href="https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/" target="_blank" rel="noopener">button in angular</a> component html file and on clicking on it we will display a message

<div>
  <pre>&lt;button id="my-button"&gt;Click me&lt;/button&gt;

// In JqueryExampleComponent  ts file 

ngOnInit() {
   $(document).ready(function() {
     $('#my-button').click(1);
   });
}</pre>
  
  <p>
    Ideally jquery click function excepts a parameter as function, but i wrote a buggy code <em>$(&#8216;#my-button&#8217;).click(1);</em>  (passing an integer to it).
  </p>
</div>

<div>
</div>

<div>
  And typescript compiler does not know the defination of jquery click function and the code will compile and at runtime it will throw an error whenever click the angular buttons.
</div>

Moreover we wont be getting intellisense in visual code editor.

To avoid such kind of errors in Angular, we need to have type defination files for every third party library we use in typescript or angular projects in this case jQuery.

Luckily we have jquery type definations are available as part of separate npm packages.

## Install and Use jquery in Angular with typescript jquery @types: {#step-2}

To install jQuery type definations file in Angular projects use the following command.

<pre>npm install --save jquery
npm install --save @types/jquery</pre>

After successful installation you will see a folder inside the node_modules/@types with jQuery type defination files.<figure style="width: 215px" class="wp-caption aligncenter">

<img class="size-full" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/jquery-types-installation-in-angular-project.png" alt="jquery types installation in angular project" width="215" height="287" /> <figcaption class="wp-caption-text">jquery types installation in angular project</figcaption></figure> 

If you use jquery @types no need to add jquery.min.js file reference in angular.json file.

And in the Angular component file import the jquery as shown below.

<pre>import * as $ from 'jquery';</pre>

And if you hover over the $ element you will see the defination of jquery object as shown below.

And we can also you give your own name for jQuery imports as shown below. In previous example it is not the case.

<pre>import * as myjQuery from 'jquery';</pre><figure style="width: 555px" class="wp-caption aligncenter">

<img class="size-full" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/jquery-types-definations-in-Angular.png" alt="jquery types definations in Angular" width="555" height="302" /> <figcaption class="wp-caption-text">jquery types definations in Angular</figcaption></figure> 

And now the same code wont compile at all it will return an error saying.

_Argument of type &#8216;1&#8217; is not assignable to parameter of type &#8216;false | EventHandlerBase<HTMLElement, ClickEvent<HTMLElement, null, HTMLElement, HTMLElement>>&#8217;._<figure id="attachment_1157" style="width: 518px" class="wp-caption aligncenter">

<img class="size-full wp-image-1157" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/jquery-types-definations-example-in-Angular.png" alt="jquery types definations example in Angular" width="518" height="289" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/02/jquery-types-definations-example-in-Angular.png 518w, https://www.angularjswiki.com/wp-content/uploads/2019/02/jquery-types-definations-example-in-Angular-300x167.png 300w" sizes="(max-width: 518px) 100vw, 518px" /> <figcaption class="wp-caption-text">jquery types definations example in Angular</figcaption></figure> 

See the above defination of click function in visual studio code intellisense.

So we are catching error before running the applications, that&#8217;s what typescript known for.

## Should I use jquery in Angular Projects? {#step-3}

There is no straight away answers for this. It&#8217;s upto the developers to decide whether to use jquery in Angular or not.

But generally it is not a good practice to use jQuery in Angular projects because

  1. In Angular it is not advisable to manipulate the DOM directly that&#8217;s what jquery does.
  2. If you manipulate dom elements that are not part of component template model then it will not create a problem but it you are changing elements that are part of component template model it might cause errors and performence issues.
  3. Everything you want to do with jquery can be done with Angular as well, <a href="https://www.angularjswiki.com/angular/angular-2-hello-world-example/" target="_blank" rel="noopener">it is just the learning curve</a>.

It is only my personal opinion.