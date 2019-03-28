# Checkbox Implementation In Angular Using Mat-Checkbox(Material Component)

_<mat-checkbox>_ selector is an angular material checkbox component, it works like _<input type=”checkbox”>_ & sugar coated with Material design styling and animations.`<mat-checkbox>` part of Angular Material module called `MatCheckboxModule`.

The simple usage of `<mat-checkbox>` is as follows

<pre>&lt;mat-checkbox&gt;Checkbox example&lt;/mat-checkbox&gt;</pre>

To use `<mat-checkbox>` we have to import `MatCheckboxModule` from `@angular/Material` module.

<pre>import {MatCheckboxModule} from '@angular/material'</pre>

### <span style="text-decoration: underline;">Table of Contents:</span>

  * [Properties of mat-checkbox element](#angular-checkbox-1)
  * [mat-checkbox Label](#angular-checkbox-2)
  * [mat-checkbox Checked State](#angular-checkbox-3)
  * [mat-checkbox UnChecked State](#angular-checkbox-4)
  * [mat-checkbox Indeterminate State](#angular-checkbox-5)
  * [mat-checkbox Disabled State](#angular-material-6)
  * [mat-checkbox color and Theming](#angular-checkbox-7)
  * [mat-checkbox Example](#angular-checkbox-9)
  * [Bind Data to mat-checkbox using `ngModel`](#angular-checkbox-9)
  * [mat-checkbox change event](#angular-step-6)
  * [mat-checkbox checked event](#angular-step-5)
  * [MatCheckboxChange class](#angular-step-4)
  * [mat-checkbox indeterminate change event](#angular-step-3)
  * [mat-checkbox toggle method](#angular-step-2)
  * [mat-checkbox focus method](#angular-step-1)
  * [mat-checkbox Demo](#step-0)
  * [&#8216;`mat-checkbox`&#8216; is not a known element](#angular-checkbox-10)
  * [Can&#8217;t bind to &#8216;`ngModel`&#8216; since it isn&#8217;t a known property of &#8216;`mat-checkbox`&#8216;](#angular-checkbox-11)<figure id="attachment_429" style="width: 600px" class="wp-caption aligncenter">

<img class="size-full wp-image-429" src="http://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-Material-Checkbox-1.jpg" alt="Angular Material Checkbox" width="600" height="399" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-Material-Checkbox-1.jpg 600w, https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-Material-Checkbox-1-300x200.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" /> <figcaption class="wp-caption-text">Angular Material Checkbox</figcaption></figure> 

### <span style="text-decoration: underline;">Properties of mat-checkbox:</span> {#angular-checkbox-1}

[table id=1 /]

### <span style="text-decoration: underline;">mat-checkbox Label:</span> {#angular-checkbox-2}

Content of the `<mat-checkbox>` element acts as label for checkbox in angular material. Label position can be before or after the checkbox.

We can control the label position using `labelPosition` property of `<mat-checkbox>`.

<div>
  <pre>&lt;mat-checkbox labelPosition="before"&gt;Angular Checkbox Label before
&lt;/mat-checkbox&gt;
&lt;mat-checkbox labelPosition="after"&gt;Angular Checkbox Label After
&lt;/mat-checkbox&gt;
</pre>
</div>

### <span style="text-decoration: underline;">mat-checkbox Checked state:</span> {#angular-checkbox-3}

Using checked property value of `<mat-checkbox>` we can control the state of checkbox either `checked` or `unchecked`

<div>
  <pre>&lt;mat-checkbox checked="true"&gt;Angular Checkbox Checked&lt;/mat-checkbox&gt;
&lt;mat-checkbox checked="false"&gt;Angular Checkbox UnChecked&lt;/mat-checkbox&gt;

</pre>
  
  <h3 id="angular-checkbox-4">
    <span style="text-decoration: underline;">mat-checkbox UnChecked state:</span>
  </h3>
  
  <p>
    Provides exact opposite functionality of <code>checked</code> property. If its true in <code>&lt;mat-checkbox&gt;</code> then checkbox is <code>unchecked</code> and vice versa
  </p>
  
  <pre>&lt;mat-checkbox unchecked="true"&gt;Angular Checkbox UnChecked
&lt;/mat-checkbox&gt;
&lt;mat-checkbox unchecked="false"&gt;Angular Checkbox Checked
&lt;/mat-checkbox&gt;</pre>
  
  <h3 id="angular-checkbox-5">
    <span style="text-decoration: underline;">mat-checkbox Indeterminate state:</span>
  </h3>
  
  <p>
    <code>&lt;mat-checkbox&gt;</code> supports <code>Indeterminate</code> state. Indicates whether checkbox is <code>indeterminate</code> or we can call it as mixed state.The value can be set through Indeterminate property of <code>&lt;mat-checkbox&gt;</code> value can be true or false.
  </p>
  
  <p>
    For example say there is one parent checkbox under which we have four children checkboxes, if all children checkbozes are checked then parent checkbox should be checked and if all checkboxes are unchecked then it should be unchecked if any one of them is unchecked then parent checkbox should indicate mixed state.that is Indeterminate state.
  </p>
  
  <p>
    And it is only for visual representation. You can&#8217;t make a checkbox indeterminate through HTML there is no attribute.
  </p>
  
  <pre>var checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;</pre>
  
  <p>
    But in Angular we can set indeterminate state through <code>Indeterminate</code> property.
  </p>
  
  <pre>&lt;mat-checkbox indeterminate="true"&gt;Checkbox Indeterminate&lt;/mat-checkbox&gt;</pre>
  
  <p>
    Any click action on <code>&lt;mat-checkbox&gt;</code> will remove the indeterminate state.
  </p>
  
  <p>
    And if the checkbox contain both <code>indeterminate</code> and <code>checked</code> properties true. Then it will displayed as <code>indeterminate</code> state.
  </p>
  
  <pre>&lt;mat-checkbox indeterminate="true" checed="true"&gt;Checkbox Indeterminate
&lt;/mat-checkbox&gt;
//Checkbox displayed as indeterminate state.</pre>
  
  <h3 id="angular-material-6">
    <span style="text-decoration: underline;">mat-checkbox Disabled State:</span>
  </h3>
  
  <p>
    Using <code>disabled</code> propery of <code>&lt;mat-checkbox&gt;</code> we can disable angular material checkbox.
  </p>
  
  <pre>&lt;mat-checkbox disabled&gt;Checkbox Disabled&lt;/mat-checkbox&gt;</pre>
  
  <h3 id="angular-checkbox-7">
    <span style="text-decoration: underline;">mat-checkbox color and Theming:</span>
  </h3>
  
  <p>
    The color of Angular Checkbox can be changed by color property of <code>&lt;mat-checkbox&gt;</code>. By default value is &#8220;<code>accent</code>&#8221; and can be change to <code>primary</code> or <code>warn</code> according to Material design theming guidelines.
  </p>
  
  <p>
    And We can disable ripple animation using Angular Material Checkbox property <code>disableRipple</code>
  </p>
  
  <pre>&lt;mat-checkbox disableRipple=true&gt;Checkbox Ripple Disabled&lt;/mat-checkbox&gt;</pre>
  
  <h3 id="angular-checkbox-8">
    <span style="text-decoration: underline;">mat-checkbox Example:</span>
  </h3>
  
  <p>
    Now we will go though the simple example to understand the properties of Angular Material Checkbox.
  </p>
  
  <p>
    First setup <a href="http://www.angularjswiki.com/tutorials/angular/angular-2-or-angular-local-development-environment-setup/" target="_blank" rel="noopener">Angular in your local development environment</a> and install Angular Material module as explained in <a href="http://www.angularjswiki.com/tutorials/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">Angular Material Tutorial</a> previous article.
  </p>
  
  <p>
    Add a new material module by following command
  </p>
  
  <pre>ng generate module material</pre>
  
  <p>
    And import <code>MatCheckboxModule</code> from @angular/Material as shown below.Add below line in generated material.module.ts file.
  </p>
  
  <div>
    <pre>import { MatCheckboxModule } from '@angular/Material'</pre>
  </div>
</div>

<div>
</div>

<div>
  And additionally i have added <code>MatToolbarModule</code>,<code>MatCardModule</code>,<code>MatListModule</code> for design purpose.
</div>

<div>
</div>

<div>
  <pre>import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
MatToolbarModule,
MatCardModule,
MatCheckboxModule,
MatListModule,
} from '@angular/material';

@NgModule({

exports:[
MatToolbarModule,
MatCardModule,
MatCheckboxModule,
MatListModule
],

providers: [

],
declarations: []
})
export class MaterialModule { }</pre>
</div>

<div>
</div>

<div>
  And import material module in <span style="text-decoration: underline;">app.module.ts</span> file so that we can use material module across the application.
</div>

<div>
</div>

<div>
  <div>
    <pre>import { MaterialModule } from './material/material.module';</pre>
  </div>
</div>

<div>
</div>

<div>
  And also add <span style="text-decoration: underline;">MaterialModule</span> in imports array property of @NgModule
</div>

<div>
</div>

<div>
  <div>
    <pre>import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';

@NgModule({

declarations: [
AppComponent],

imports: [
BrowserModule,
MaterialModule
],

providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }</pre>
  </div>
</div>

<div>
</div>

<div>
  Our Material Module is ready Now we will create a new component to use <code>&lt;mat-checkbox&gt;</code> and other angular material components.
</div>

<div>
</div>

<pre>ng generate component AngularMaterialCheckbox</pre>

<div>
</div>

<div>
  And add following code in generated <span style="text-decoration: underline;">angular-material-checkbox.component.html</span> file
</div>

<div>
</div>

<div>
  <pre>&lt;mat-card&gt;
&lt;mat-card-content&gt;
&lt;h2&gt;Basic Example&lt;/h2&gt;
&lt;mat-list&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox checked="true"&gt;Checkbox Checked&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox&gt;Checkbox UnChecked&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox indeterminate="true"&gt;Checkbox Indeterminate
&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox labelPosition="before"&gt;Checkbox Label before
&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox disableRipple=true&gt;Checkbox Ripple Disabled
&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox disabled=true&gt;Checkbox Disabled&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox color="primary"checked=true&gt;Checkbox Theme Primary
&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;&lt;mat-checkbox color="warn"checked=true&gt;Checkbox Theme Warn
&lt;/mat-checkbox&gt;
&lt;/mat-list-item&gt;
&lt;/mat-list&gt;
&lt;/mat-card-content&gt;
&lt;/mat-card&gt;</pre>
</div>

<div>
</div>

<div>
  Now we will use the component,add following code in <span style="text-decoration: underline;">app.component.html</span> file
</div>

<div>
</div>

<div>
  <div>
    <pre>&lt;h1&gt;
{{ title }}
&lt;/h1&gt;
&lt;app-angular-material-checkbox&gt;&lt;/app-angular-material-checkbox&gt;</pre>
  </div>
</div>

<div>
  And I assigned title variable to &#8220;Angular Material Checkbox&#8221; in <span style="text-decoration: underline;">app.component.ts</span> file.
</div>

<div>
</div>

<div>
  Now type <code>ng serve</code> and browse <code>http://localhost:4200</code> in browser to see the demo.
</div>

### <span style="text-decoration: underline;">Bind Data to mat-checkbox using ngModel:</span> {#angular-checkbox-9}

Now we will bind the data to angular material checkbox. In <span style="text-decoration: underline;">angular-material-checkbox.component.ts</span> file add the following code

<pre>import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-angular-material-checkbox',
templateUrl: './angular-material-checkbox.component.html',
styleUrls: ['./angular-material-checkbox.component.css']
})

export class AngularMaterialCheckboxComponent implements OnInit {
IsChecked:boolean;
IsIndeterminate:boolean;
LabelAlign:string;
IsDisabled:boolean;

constructor() {
this.IsChecked =false;
this.IsIndeterminate =false;
this.LabelAlign ='after';
this.IsDisabled =false;
}

OnChange($event){
    console.log($event); 
    //MatCheckboxChange {checked,MatCheckbox}
}

OnIndeterminateChange($event){
   console.log($event); 
   //true or false
}

ngOnInit() {

}}</pre>

&nbsp;

I declared four variables

  * IsChecked : Used to control angular material checkbox state which is a boolean variable
  * IsIndeterminate : Used to control angular material checkbox Indeterminate which is a boolean variable
  * LabelAlign : Used to control angular material checkbox label alignment which is a string variable
  * IsDisabled: Used to control angular material checkbox disabled state.

And in constructor I am assigning default values to the declared variables.

Now we will use this model,Add the following code in <span style="text-decoration: underline;">angular-material-checkbox.component.html</span> file

&nbsp;

<pre>&lt;mat-card class="result"&gt;

&lt;mat-card-content&gt;
&lt;h2class="example-h2"&gt;Result&lt;/h2&gt;
&lt;sectionclass="example-section"&gt;

&lt;mat-checkbox class="example-margin"
(change)="OnChange($event)"
(indeterminateChange)="OnIndeterminateChange($event)"
[(checked)]="IsChecked"
[(indeterminate)]="IsIndeterminate"
[labelPosition]="LabelAlign"
[disabled]="IsDisabled"&gt;
Angular Material Checkbox Data Binding
&lt;/mat-checkbox&gt;
&lt;/section&gt;
&lt;/mat-card-content&gt;
&lt;/mat-card&gt;</pre>

I have binded checked property to our model variable IsChecked,indeterminate property to model IsIndeterminate variable, labelPosition property to LabelAlign variable and disabled property to IsDisabled variable.

And as per the initial values of binding variables the result will be displayed.i.e., The checkbox is uncheked and label will be after the checkbox.

Now we will change our model variables using below `<mat-checkbox>` and `<mat-radio-group>` elements as shown below. Add the following code in the same <span style="text-decoration: underline;">angular-material-checkbox.component.html</span> file

<pre>&lt;mat-card&gt;

&lt;mat-card-content&gt;
&lt;h2 class="example-h2"&gt;Angular Checkbox configuration&lt;/h2&gt;
&lt;section class="example-section"&gt;
&lt;mat-checkbox class="example-margin" [(ngModel)]="Ischecked"&gt;Checked
&lt;/mat-checkbox&gt;
&lt;mat-checkbox class="example-margin" [(ngModel)]="IsIndeterminate"&gt;Indeterminate
&lt;/mat-checkbox&gt;
&lt;mat-checkbox class="example-margin" [(ngModel)]="IsDisabled"&gt;Disabled
&lt;/mat-checkbox&gt;
&lt;/section&gt;

&lt;section class="example-section"&gt;

&lt;label class="example-margin"&gt;Angular Checkbox Alignment:&lt;/label&gt;
&lt;mat-radio-group [(ngModel)]="LabelAlign"&gt;
&lt;mat-radio-button class="example-margin" value="after"&gt;After&lt;/mat-radio-button&gt;
&lt;mat-radio-button class="example-margin" value="before"&gt;Before&lt;/mat-radio-button&gt;
&lt;/mat-radio-group&gt;
&lt;/section&gt;
&lt;/mat-card-content&gt;
&lt;/mat-card&gt;</pre>

In the Angular Checkbox configuration section we have three angular material checkboxes and for each `<mat-checkbox>` model variables are binded using `[(ngModel)]` property.

As `<mat-checkbox>` can have only two values true or false i.e., `checked` or `unchecked` (indeterminate is only for visual purpose). Whenever we click on `<mat-checkbox>` corresponding binding variable also changes (as they are boolean variables) which results in changing `<mat-checkbox>` in Result section.

And to change label alignment I have added `<mat-radio-group>` and binded LabelAlign model variable using `[(ngModel)]`. The radio group has two `<mat-radio-button>` elements with values &#8220;`after`&#8221; and &#8220;`before`&#8220;. Whenever we select radio button corresponding value will be assigned to LabelAlign variable. Results in changing `<mat-checkbox>` in Result section.<figure id="attachment_414" style="width: 320px" class="wp-caption aligncenter">

[<img class="wp-image-414 size-full" src="http://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox.png" alt="Angular material checkbox Basic Example" width="320" height="459" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox.png 320w, https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-209x300.png 209w" sizes="(max-width: 320px) 100vw, 320px" />](http://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox.png)<figcaption class="wp-caption-text">Angular material checkbox Basic Example</figcaption></figure> 

&nbsp;<figure id="attachment_415" style="width: 415px" class="wp-caption aligncenter">

[<img class="wp-image-415 size-full" src="http://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-Bind-data.png" alt="Angular material-checkbox Bind data" width="415" height="290" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-Bind-data.png 415w, https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-Bind-data-300x210.png 300w, https://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-Bind-data-320x224.png 320w" sizes="(max-width: 415px) 100vw, 415px" />](http://www.angularjswiki.com/wp-content/uploads/2018/06/Angular-material-checkbox-Bind-data.png)<figcaption class="wp-caption-text">Angular material-checkbox Bind data</figcaption></figure> 

And if we select both `Checked` and `Indeterminate` checkboxes. The checkbox in result section displayed as Indeterminate as explained above.

### <span style="text-decoration: underline;">mat-checkbox change event:</span> {#angular-step-6}

_<mat-checkbox>_ provides two kinds of events

  1. **change event**: triggers when the mat-checkbox&#8217;s _checked_ value changes (of type _MatCheckboxChange_)
  2. **indeterminateChange event**: triggers when the mat-checkbox&#8217;s _indeterminate_ value changes (_boolean_ type)

### <span style="text-decoration: underline;">mat-checkbox checked event:</span> {#angular-step-5}

By using _change_ property of _mat-checkbox_ we can track the checked,unchecked states of checkbox.

I have added a method called _OnChange()._

Which will be triggered when the checkbox checked state changes. It will emmit the change event object of type _MatCheckboxChange. _

### <span style="text-decoration: underline;">MatCheckboxChange class:</span> {#angular-step-4}

MatCheckboxChange class has two properties, _source_ and _checked_.

_source_ is nothing but source of the mat-checkbox from which event triggered.

_checked_ tells whether _mat-checkbox_ is checked i.e.,true or unchecked i.e., false.

See the event emmitted by mat-checkbox in console.log();<figure id="attachment_754" style="width: 375px" class="wp-caption aligncenter">

<img class="size-full wp-image-754" src="https://www.angularjswiki.com/wp-content/uploads/2018/06/MatCheckboxChange-Class.png" alt="MatCheckboxChange Class" width="375" height="68" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/06/MatCheckboxChange-Class.png 375w, https://www.angularjswiki.com/wp-content/uploads/2018/06/MatCheckboxChange-Class-300x54.png 300w" sizes="(max-width: 375px) 100vw, 375px" /> <figcaption class="wp-caption-text">MatCheckboxChange Class</figcaption></figure> 

One thing you need to understand checkbox on change event fires only by user interaction. But if you set the checked value dynamically change event will not be triggered.

In the above demo, result section checkbox value is driven by  other checkboxes in checkbox configuration section. In that case change event wont fire as we are changing the value dynamically without user interaction.

So we need to check or uncheck the checkbox in result section to fire the change event by clicking on it. You can check this behaviour in demo.

### <span style="text-decoration: underline;">mat-checkbox Indeterminate Change event:</span> {#angular-step-3}

Through mat-checkbox&#8217;s  _indeterminateChange _property we can track the indeterminate state change of checkbox.

I have added a method called _OnindeterminateChange()_ to check this behaviour.It will emmit the change event object of type _boolean_.

As we cannot set indeterminate state by user interaction._indeterminateChange_ event will be triggered when the value is set dynamically.

### <span style="text-decoration: underline;">mat-checkbox toggle method:</span> {#angular-step-2}

We can toggle the checked or unchecked state of mat-checkbox using toggle() method.

<div>
  <pre>OnChange($event){ 
 console.log($event);
 $event.source.toggle();
 //MatCheckboxChange {checked,MatCheckbox}
}</pre>
</div>

If you use toggle method inside on change event, the checkbox state wont change at all, whatever the initial state of checkbox,that will be preserved.

### <span style="text-decoration: underline;">mat-checkbox focus method:</span> {#angular-step-1}

We can set the focus of mat-checkbox by using focus() method.

<pre>OnChange($event){
 console.log($event);
 $event.source.focus();
 //MatCheckboxChange {checked,MatCheckbox}
}</pre>

The above code focuses the checkbox whenever on change event triggers.

### <span style="text-decoration: underline;">mat-checkbox demo:</span> {#step-0}

See the demo of mat-checkbox <a href="https://angular-zyrtja.stackblitz.io/" target="_blank" rel="nofollow noopener">here</a>

### <span style="text-decoration: underline;">&#8216;<code>mat-checkbox</code>&#8216; is not a known element:</span> {#angular-checkbox-10}

`<mat-checkbox>` is not a known element is a common parse error we will get if we are not configured Angular Material module properly.

Initially we have to import `MatCheckboxModule` from `@angular/Material`

And we should export `MatCheckboxModule` to use it in other modules. In the above example I have created MaterialModule and i have added `MatCheckboxModule` in exports array of `@NgModule`.

<div>
  <pre>import {
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatCheckboxModule,
MatRadioModule,
MAT_CHECKBOX_CLICK_ACTION,
MatListModule,
} from '@angular/material';

@NgModule({

exports:[

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatCheckboxModule,
MatRadioModule,
MatListModule

]</pre>
</div>

And then I have imported materialmodule in app.module.ts so that I can use Material components across the application

&nbsp;

<pre>import {FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
@NgModule({
declarations: [
AppComponent,
AngularMaterialCheckboxComponent,
SampleComponent
],
imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
MaterialModule
],
bootstrap: [AppComponent]
})
export class AppModule { }</pre>

If you miss any one of the step you will get Template parse error: `<mat-checkbox>` is not a known element

### <span style="text-decoration: underline;">Can&#8217;t bind to &#8216;<code>ngModel</code>&#8216; since it isn&#8217;t a known property of &#8216;<code>mat-checkbox</code>&#8216;:</span> {#angular-checkbox-11}

While binding data to the `<mat-checkbox>  `we have to import `FormsModule `from `@angular/forms `and should add it in imports array of <span style="text-decoration: underline;">app.module.ts</span> file other wise we will get this Can&#8217;t bind to &#8216;`ngModel`&#8216; since it isn&#8217;t a known property of &#8216;`mat-checkbox`&#8216; template parse error.

In above example i have imported `FormsModule `from `@angular/material`

### <span style="text-decoration: underline;">References : </span>

<a href="https://material.angular.io" target="_blank" rel="noopener">Angular Material</a>