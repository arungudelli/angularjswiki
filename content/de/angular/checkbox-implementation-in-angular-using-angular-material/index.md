+++ title = "Checkbox Implementation In Angular Using Mat-Checkbox(Material Component)" subtitle = "Learn how to build checkboxes using material design" type="post" summary ="mat-checkbox selector is an angular material checkbox component, it works like input type=checkbox sugar coated with Material design styling and animations.mat-checkbox part of Angular Material module called MatCheckboxModule." keywords=["angular,angular material design,angular checkbox,angular material checkbox,mat-checkbox"] date="2018-02-15T01:01:05+0000" lastmod="2019-06-25T06:00:24+0530" draft=true authors = ["admin"]


[image] caption = "Angular Material Checkbox"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false

+++

`<mat-checkbox>` selector is an angular material checkbox component, it works like `<input type=”checkbox”>` & sugar coated with Material design styling and animations.`<mat-checkbox>` part of Angular Material module called `MatCheckboxModule`.

The simple usage of `<mat-checkbox>` is as follows

`<mat-checkbox>Checkbox example</mat-checkbox>`

To use `<mat-checkbox>` we have to import `MatCheckboxModule` from `@angular/Material` module.

`import {MatCheckboxModule} from '@angular/material'</pre>`

{{% toc %}}

## Properties of mat-checkbox
<div class="table-responsive">
<table class="table">
    <thead>
        <tr>
            <th>Angular Material Checkbox Property</th>
            <th>Description </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Checked : boolean</td>
            <td>Indicates whether checkbox is checked</td>
        </tr>
        <tr>
            <td>Unchecked : Boolean</td>
            <td>Indicates whether checkbox is unchecked</td>
        </tr>
        <tr>
            <td>Indeterminate : Boolean</td>
            <td>Indicates whether checkbox is indeterminate or we can call it as mixed state</td>
        </tr>
        <tr>
            <td>Disabled</td>
            <td>Indicated whether checkbox is disabled</td>
        </tr>
        <tr>
            <td>Id</td>
            <td>A unique id to represent checkbox elements if nothing is supplied then auto generated</td>
        </tr>
        <tr>
            <td>labelPosition : before or after</td>
            <td>Indicates whether label should appear before or after the checkbox</td>
        </tr>
        <tr>
            <td>Required : Boolean</td>
            <td>Indicates whether the checkbox is required inside a form</td>
        </tr>
        <tr>
            <td>Value:string</td>
            <td>Indicates the value of checkbox element</td>
        </tr>
        <tr>
            <td>Color:ThemePalatte (primary or accent or warn)</td>
            <td>Indicates theme color palette of checkbox element</td>
        </tr>
        <tr>
            <td>disableRipple : Boolean</td>
            <td>Indicates whether ripple animation disabled on checkbox element</td>
        </tr>
        <tr>
            <td>areaLabel : string</td>
            <td>Will be attached ‘area-label’ attribute of checkbox element</td>
        </tr>
        <tr>
            <td>ariaLabelledby : string or null</td>
            <td>Will be attached ‘area-labelledby’ attribute of checkbox element</td>
        </tr>
    </tbody>
</table>
</div>

## mat-checkbox Label

Content of the `<mat-checkbox>` element acts as label for checkbox in angular material. Label position can be before or after the checkbox.

We can control the label position using `labelPosition` property of `<mat-checkbox>`.

```
<mat-checkbox labelPosition="before">Angular Checkbox Label before
</mat-checkbox>
<mat-checkbox labelPosition="after">Angular Checkbox Label After
</mat-checkbox>
```

## mat-checkbox Checked state

Using checked property value of `<mat-checkbox>` we can control the state of checkbox either `checked` or `unchecked`

```
<mat-checkbox checked="true">Angular Checkbox Checked</mat-checkbox>
<mat-checkbox checked="false">Angular Checkbox UnChecked</mat-checkbox>
```

## mat-checkbox UnChecked state

Provides exact opposite functionality of `checked` property. If its true in `<mat-checkbox>` then checkbox is unchecked and vice versa

```
<mat-checkbox unchecked="true">Angular Checkbox UnChecked
</mat-checkbox>
<mat-checkbox unchecked="false">Angular Checkbox Checked
</mat-checkbox>
```

## mat-checkbox Indeterminate state

`<mat-checkbox>` supports Indeterminate state. Indicates whether checkbox is indeterminate or we can call it as mixed state.The value can be set through Indeterminate property of `<mat-checkbox>` value can be true or false

For example say there is one parent checkbox under which we have four children checkboxes, if all children checkbozes are checked then parent checkbox should be checked and if all checkboxes are unchecked then it should be unchecked if any one of them is unchecked then parent checkbox should indicate mixed state.that is Indeterminate state.

And it is only for visual representation. You can't make a checkbox indeterminate through HTML there is no attribute.

```
var checkbox = document.getElementById(“indeterminate-checkbox”);
checkbox.indeterminate = true;
```

But in Angular we can set indeterminate state through <code>Indeterminate</code> property.

```
<mat-checkbox indeterminate=“true”>Checkbox Indeterminate</mat-checkbox>
```
Any click action on `<mat-checkbox>` will remove the indeterminate state.

And if the checkbox contain both <code>indeterminate</code> and <code>checked</code> properties true. Then it will displayed as <code>indeterminate</code> state.

```
<mat-checkbox indeterminate="true" checed="true">Checkbox Indeterminate
</mat-checkbox>
//Checkbox displayed as indeterminate state.
```

## mat-checkbox Disabled State

Using <code>disabled</code> propery of <code>&lt;mat-checkbox&gt;</code> we can disable angular material checkbox.

```
<mat-checkbox disabled>Checkbox Disabled</mat-checkbox>
```
## mat-checkbox color and Theming

The color of Angular Checkbox can be changed by color property of `<mat-checkbox>`. By default value is "accent" and can be change to primary or warn according to Material design theming guidelines.

And We can disable ripple animation using Angular Material Checkbox property <code>disableRipple</code>

```
<mat-checkbox disableRipple=true>Checkbox Ripple Disabled</mat-checkbox>
```
## mat-checkbox Example

Now we will go though the simple example to understand the properties of Angular Material Checkbox.

First setup <a href="http://www.angularjswiki.com/tutorials/angular/angular-2-or-angular-local-development-environment-setup/" target="_blank" rel="noopener">Angular in your local development environment</a> and install Angular Material module as explained in <a href="http://www.angularjswiki.com/tutorials/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">Angular Material Tutorial</a> previous article.

Add a new material module by following command

`ng generate module material`

And import <code>MatCheckboxModule</code> from @angular/Material as shown below.Add below line in generated material.module.ts file.

`import { MatCheckboxModule } from '@angular/Material'`

And additionally i have added <code>MatToolbarModule</code>,<code>MatCardModule</code>,<code>MatListModule</code> for design purpose.

```
import { NgModule } from '@angular/core';
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
export class MaterialModule { }
```
And import material module in app.module.ts file so that we can use material module across the application.

`import { MaterialModule } from './material/material.module';`

And also add MaterialModule in imports array property of @NgModule

```
import { BrowserModule } from '@angular/platform-browser';
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

export class AppModule { }
```

Our Material Module is ready Now we will create a new component to use `<mat-checkbox>` and other angular material components.

`ng generate component AngularMaterialCheckbox`

And add following code in generated `angular-material-checkbox.component.html` file

```
<mat-card>
<mat-card-content>
<h2>Basic Example</h2>
<mat-list>
<mat-list-item><mat-checkbox checked=“true”>Checkbox Checked</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox>Checkbox UnChecked</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox indeterminate=“true”>Checkbox Indeterminate
</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox labelPosition=“before”>Checkbox Label before
</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox disableRipple=true>Checkbox Ripple Disabled
</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox disabled=true>Checkbox Disabled</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox color=“primary”checked=true>Checkbox Theme Primary
</mat-checkbox>
</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item><mat-checkbox color=“warn”checked=true>Checkbox Theme Warn
</mat-checkbox>
</mat-list-item>
</mat-list>
</mat-card-content>
</mat-card>
```

Now we will use the component,add following code in `app.component.html` file


```
<h1>
{{ title }}
</h1>
<app-angular-material-checkbox></app-angular-material-checkbox>
```

And I assigned title variable to Angular Material Checkbox in `app.component.ts` file.

Now type <code>ng serve</code> and browse <code>http://localhost:4200</code> in browser to see the demo.

## Bind Data to mat-checkbox using ngModel

Now we will bind the data to angular material checkbox. In `angular-material-checkbox.component.ts` file add the following code

```
import { Component, OnInit } from '@angular/core';
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

}}
```

I declared four variables

  * IsChecked : Used to control angular material checkbox state which is a boolean variable
  * IsIndeterminate : Used to control angular material checkbox Indeterminate which is a boolean variable
  * LabelAlign : Used to control angular material checkbox label alignment which is a string variable
  * IsDisabled: Used to control angular material checkbox disabled state.

And in constructor I am assigning default values to the declared variables.

Now we will use this model,Add the following code in `angular-material-checkbox.component.html`

```
<mat-card class="result">

<mat-card-content>
<h2class="example-h2">Result</h2>
<sectionclass="example-section">

<mat-checkbox class="example-margin"
(change)="OnChange($event)"
(indeterminateChange)="OnIndeterminateChange($event)"
[(checked)]="IsChecked"
[(indeterminate)]="IsIndeterminate"
[labelPosition]="LabelAlign"
[disabled]="IsDisabled">
Angular Material Checkbox Data Binding
</mat-checkbox>
</section>
</mat-card-content>
</mat-card>
```

I have binded checked property to our model variable IsChecked,indeterminate property to model IsIndeterminate variable, labelPosition property to LabelAlign variable and disabled property to IsDisabled variable.

And as per the initial values of binding variables the result will be displayed.i.e., The checkbox is uncheked and label will be after the checkbox.

Now we will change our model variables using below `<mat-checkbox>` and `<mat-radio-group>` elements as shown below. Add the following code in the same `angular-material-checkbox.component.html` file

```
<mat-card>

<mat-card-content>
<h2 class="example-h2">Angular Checkbox configuration</h2>
<section class="example-section">
<mat-checkbox class="example-margin" [(ngModel)]="Ischecked">Checked
</mat-checkbox>
<mat-checkbox class="example-margin" [(ngModel)]="IsIndeterminate">Indeterminate
</mat-checkbox>
<mat-checkbox class="example-margin" [(ngModel)]="IsDisabled">Disabled
</mat-checkbox>
</section>

<section class="example-section">

<label class="example-margin">Angular Checkbox Alignment:</label>
<mat-radio-group [(ngModel)]="LabelAlign">
<mat-radio-button class="example-margin" value="after">After</mat-radio-button>
<mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
</mat-radio-group>
</section>
</mat-card-content>
</mat-card>
```

In the Angular Checkbox configuration section we have three angular material checkboxes and for each `<mat-checkbox>` model variables are binded using `[(ngModel)]` property.

As `<mat-checkbox>` can have only two values true or false i.e., `checked` or `unchecked` (indeterminate is only for visual purpose). Whenever we click on `<mat-checkbox>` corresponding binding variable also changes (as they are boolean variables) which results in changing `<mat-checkbox>` in Result section.

And to change label alignment I have added `<mat-radio-group>` and binded LabelAlign model variable using `[(ngModel)]`. The radio group has two `<mat-radio-button>` elements with values `after` and `before`. Whenever we select radio button, corresponding value will be assigned to LabelAlign variable which results in changing `<mat-checkbox>` in Result section.

{{< figure src="Angular-material-checkbox.png" title="Angular material checkbox Basic Example" alt="Angular material checkbox Basic Example">}}

{{< figure src="Angular-material-checkbox-Bind-data.png" title="Angular material-checkbox Bind data" alt="Angular material-checkbox Bind data">}}

And if we select both `Checked` and `Indeterminate` checkboxes. The checkbox in result section displayed as Indeterminate as explained above.

## mat checkbox checked by default

To set mat-checkbox checked by default we use `checked` attribute or [ngModel] as shown below.

```
<mat-checkbox [(ngModel)]="IsChecked">
    <label>Checked by default using ngModel</label>
</mat-checkbox>


<mat-checkbox [checked]="IsChecked">
    <label>Checked by default using checked attribute</label>
</mat-checkbox>
```

We can set the `IsChecked` property to `true` in constructor.

## mat-checkbox change event

`<mat-checkbox>` provides two kinds of events

  1. **change event**: triggers when the mat-checkbox's `checked` value changes (of type `MatCheckboxChange`)
  2. **indeterminateChange event**: triggers when the mat-checkbox's `indeterminate` value changes (`boolean` type)

## mat-checkbox checked event

By using `change` property of `mat-checkbox` we can track the checked,unchecked states of checkbox.

I have added a method called `OnChange()`

Which will be triggered when the checkbox checked state changes. It will emmit the change event object of type `MatCheckboxChange`

## MatCheckboxChange class

MatCheckboxChange class has two properties, `source` and `checked`.

`source` is nothing but source of the mat-checkbox from which event triggered.

`checked` tells whether `mat-checkbox` is checked i.e.,true or unchecked i.e., false.

See the event emmitted by mat-checkbox in console.log();

{{< figure src="MatCheckboxChange-Class.png" title="MatCheckboxChange Class" alt="MatCheckboxChange Class">}}

One thing you need to understand checkbox on change event fires only by user interaction. But if you set the checked value dynamically change event will not be triggered.

In the above demo, result section checkbox value is driven by  other checkboxes in checkbox configuration section. In that case change event wont fire as we are changing the value dynamically without user interaction.

So we need to check or uncheck the checkbox in result section to fire the change event by clicking on it. You can check this behaviour in demo.

## mat-checkbox Indeterminate Change event

Through mat-checkbox's  `indeterminateChange` property we can track the indeterminate state change of checkbox.

I have added a method called `OnindeterminateChange()` to check this behaviour.It will emmit the change event object of type `boolean`.

As we cannot set indeterminate state by user interaction.`indeterminateChange` event will be triggered when the value is set dynamically.

## mat-checkbox toggle method

We can toggle the checked or unchecked state of mat-checkbox using `toggle()` method.

```
OnChange($event){ 
 console.log($event);
 $event.source.toggle();
 //MatCheckboxChange {checked,MatCheckbox}
}
```

If you use toggle method inside on change event, the checkbox state wont change at all, whatever the initial state of checkbox,that will be preserved.

## mat-checkbox focus method

We can set the focus of mat-checkbox by using `focus()` method.

```
OnChange($event){
 console.log($event);
 $event.source.focus();
 //MatCheckboxChange {checked,MatCheckbox}
}
```

The above code focuses the checkbox whenever on change event triggers.

## mat-checkbox demo

See the demo of mat-checkbox <a href="https://angular-zyrtja.stackblitz.io/" target="_blank" rel="nofollow noopener">here</a>

## <code>mat-checkbox</code> is not a known element

`<mat-checkbox>` is not a known element is a common parse error we will get if we are not configured Angular Material module properly.

Initially we have to import `MatCheckboxModule` from `@angular/Material`

And we should export `MatCheckboxModule` to use it in other modules. In the above example I have created MaterialModule and i have added `MatCheckboxModule` in exports array of `@NgModule`.

```
import {
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

]
```

And then I have imported materialmodule in `app.module.ts` so that I can use Material components across the application

```
import {FormsModule} from '@angular/forms';
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
export class AppModule { }
```

If you miss any one of the step you will get Template parse error: `<mat-checkbox>` is not a known element

## Can't bind to <code>ngModel</code> since it isn't a known property of <code>mat-checkbox</code>

While binding data to the `<mat-checkbox> ` we have to import `FormsModule `from `@angular/forms `and should add it in imports array of `app.module.ts` file other wise we will get this Can't bind to `ngModel` since it is not a known property of `mat-checkbox` template parse error.

In above example i have imported `FormsModule `from `@angular/material`

## References

<a href="https://material.angular.io" target="_blank" rel="noopener">Angular Material</a>