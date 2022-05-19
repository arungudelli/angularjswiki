+++
title = "Angular 14 version release"
subtitle = "Angular v14 release"
summary ="Angular team at Google planning to release Angular v14 in coming June. i.e., June 2022."
keywords=["Angular 14 release date, ng update angular, Angular version 14, Angular v14"]
date="2022-05-18T00:00:00+0000"
lastmod="2022-05-18T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Angular 14"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular 14 version is coming.

Angular 14 is the next major update after, Angular v13 released in November 2021.


## Angular 14 version release date

Angular team at Google planning to release Angular v14 in coming June. i.e., June 2022.

The release candidate 1, i.e., Angular v14.0.0-rc.1 released on 18th May 2022.

## Major features of Angular 14

Here are the list of Major features in Angular 14.

1. Strictly Typed Reactive Forms 
2. Standalone Components with Optional NgModule
3. Extended diagnostics in Compiler

### Strictly Typed Reactive Forms feature

Personally I am waiting for this feature for the long time. 

Consider the below example. 

```
type User = {
  name:string;
  phoneNumber:Number;
}
```

We can represent the above User type in reactive form as shown below.

```
const userForm = new FormGroup({
  name: new FormControl(''),
  phoneNumber: new FormArray(0))
});
```

Let's read the form values.

```
const userDetails = userForm.getRawValue(); 
```

The above userDetails will have `any` type. 

The type `any` is very unsafe. We can change the property type easily. 

```
const name = userForm.get('name')!.value; // type `any`

userForm.controls.name.setValue(123456);  // We can do this.
```

But with `name` should be `string`, as it has `any` type we can assign numeric values as well.

But with the strongly typed reactive forms, the user details will have `User` type.

### Standalone Components with Optional NgModule feature

`NgModule` is one of the Angular's core concepts. 

Developers new to Angular must understand this concept before creating even the most basic "Hello, World" application.

Angular is one of the only web frameworks where components are not the “units of reuse”.

Having Angular conceptually centered around `NgModule` has a significant impact on the developer experience. 

A standalone component is not declared in any existing NgModule, and it directly manages its own dependencies (instead of having them managed by an NgModule), can be depended upon directly, without the need for an intermediate NgModule.

The standalone `flag` is used to mark the component as "standalone". 

It is a property of a metadata object of the decorator @Component.

Adding the standalone flag is a signal that components are independently usable. 

Such components don't depend on any "intermediate context" of a NgModule.

```
import {Component} from '@angular/core';

@Component({
  standalone: true,  
  template: `I'm a standalone component!`
})
export class HelloStandaloneComponent {}
```

### Extended diagnostics in Compiler feature

The compiler should have some capability for "extended template diagnostics".

That means diagnostics applied after type checking. 

Currently, the compiler doesn't really have any warnings, and only ever fails for fatal issues that directly prevent compilation (with some minor exceptions). 

These extended diagnostics will allow warnings to be easily authored to check for smaller mistakes like getting two-way binding syntax backwards ([foo])="bar" or having extraneous operators like using foo ?? 'bar' when foo is not nullable.

The Proposed solution includes a new private flag in the compiler which enables "extended template diagnostic" feature.

And checks that give warning/information diagnostics about user templates which aren't strictly fatal errors. 

This issue is mostly about building the required infrastructure, but we should include one or two simple checks to validate the system.

## Update to Angular 14 

Angular 14 version is not released yet. 

But we can try out Angular v14.0.0-rc.1 by using below command.

```
npm install -g @angular/cli@next
```

Now check `ng v` command.

```

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 14.0.0-rc.1
Node: 16.13.1
Package Manager: npm 8.1.2
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1400.0-rc.1 (cli-only)
@angular-devkit/core         14.0.0-rc.1 (cli-only)
@angular-devkit/schematics   14.0.0-rc.1 (cli-only)
@schematics/angular          14.0.0-rc.1 (cli-only)
```



