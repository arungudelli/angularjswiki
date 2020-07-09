+++
title = "Fixing Can't bind to 'formGroup' since it isn't a known property of 'form' angular error"
subtitle = "Can't bind to 'formGroup' since it isn't a known property of 'form'"
type="post"
summary ="Steps to fix Can't bind to formGroup since it isn't a known property of form error in Angular,1. Import FormsModule, ReactiveFormsModule from @angular/forms in each and every module that uses FormGroup. 2. Add FormsModule and ReactiveFormsModule into imports array of your module.3. In component html file use formGroup selector to bind the form data"
keywords=["formGroup,Cant bind to formGroup since it isnt a known property of form"]
date="2020-07-08T00:00:00+0000"
lastmod="2020-07-08T00:01:05+0000"
draft=false
authors = ["admin"]
[image]

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Steps to fix Can't bind to 'formGroup' since it isn't a known property of 'form' error in Angular

1. Import FormsModule, ReactiveFormsModule from '@angular/forms' in each and every module that uses `FormGroup`.
2. Add `FormsModule` and `ReactiveFormsModule` into imports array of your module.
3. In component html file use `formGroup` selector to bind the form data.

{{%toc%}}

## What is formGroup?

First we will understand why this error occurs. 

The error says, that `FormGroup` is not recognized or identified in the corresponding module.

`formGroup` is a selector for the directive named FormGroupDirective and it is part of `ReactiveFormsModule`.

`formGroup` is used to bind `FormGroup` data to a component element.

Let's take an example of a registration form. I am not going deep into the implementation. 

```
<form [formGroup]="RegistrationFrom" (submit)="RegisterUser()">
   <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" required>
   </div>
   <!--Other Form elements-->
   <button type="submit" class="btn btn-default">Submit</button>
</form>
```
The above component will work only when we import FormsModule, ReactiveFormsModule in the module.

```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

```

And then we need to add them in imports array of the module.

```
imports: [
        FormsModule,
        ReactiveFormsModule
]
```
Ideally, your module should have below template to work with `formModule`. 

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

}
```

## formGroup in child modules and components.

In the steps it is mentioned that, we must import FormsModule, ReactiveFormsModule from '@angular/forms' in **each and every module** that uses `FormGroup`.

You might have added it in app.module.ts file. But that might not work.

We need to follow shared modules strategy to handle errors related to this type of most commonly used modules as explained in below article.

[Angular material Tutorial](https://www.angularjswiki.com/material/#adding-a-custom-angular-material-module)

Add a shared module in your angular app. Refer it in App.module.ts file.

Further import FormsModule, ReactiveFormsModule in that module to avoid importing them in every child components.

## formGroup Spell Check

You will think of me as a dumb person, but it's happened with me. 

I have imported everything still got `Can't bind to 'formGroup' since it isn't a known property of 'form'` error. 

Why because in the component html file,while using `formGroup` I have added

```
<form [FormGroup]="RegistrationFrom" (submit)="RegisterUser()">
```

**FormGroup** : **Capital F instead of small f**

```
<form [formGroup]="RegistrationFrom" (submit)="RegisterUser()">
```

And other case might be adding `formsGroup` extra s, instead of `formGroup`

This kind of errors happens frequently, and these spell checks are very difficult to identify. So be careful.

See Also

[ngModel Angular Error: Can't bind to 'ngModel' since it isn't a known property of 'input'](https://www.angularjswiki.com/angular/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input/)