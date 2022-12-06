+++
title = "Object is possibly 'null' error fix in Angular reactive form validation"
subtitle = "Can't bind to 'formGroup' since it isn't a known property of 'form'"
type="post"
summary ="Fixing Object is possibly 'null' error fix in Angular reactive form validation"
keywords=["Object is possibly 'null'"]
date="2022-12-06T00:00:00+0000"
lastmod="2022-12-06T00:01:05+0000"
draft=false
authors = ["admin"]
[image]

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If you are using latest versions of Angular i.e, Angular v10 above, you might be getting **Object is possibly 'null'** error in Angular reactive from validations. 

Especially when accessing `errors` property of ``formControl` you might get this `Object is possibly 'null'` error.

```html

<span
    class="text-danger"
    *ngIf="
      profileForm.get('firstName').errors &&
      profileForm.get('firstName').hasError('required')
    "
    >* Required</span
  >
```

{{%toc%}}

## What is Object is possibly 'null' error?

Object is possibly 'null' is a compile time error, which helps us to identify the null objects before run time. 

It's basically typescript error. 

From the Angular v10 above, typescript `strict` mode enabled by default in Angular applications. 

In Angular application directory, Open `tsconfig.json` file and under `compilerOptions` you will see `"strict": true` option.

```json

"compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "strict": true,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "esnext",
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2018", "dom"]
  },

```

## Three ways to Fix Object is possibly 'null' error 

There are three ways to fix this problem in Angular applications.

### Solution 1: Disable `strict` mode.

The simple way to fix Object is possibly 'null' error in Angular is to disable `strict` mode. 

Open `tsconfig.json` file Change the value of `strict` to `false`. 

But this practice is not recommended. Avoid it. 

### Solution 2: Using (`!`) not null assertion operator.

If you are absolutely sure that an object can never be `null`, Use `!` not null assertion operator.

While getting the `formGroup` properties, use `!` null assertion operator and then access `errors` object.

```html

<span
    class="text-danger"
    *ngIf="
      profileForm.get('firstName')!.errors &&
      profileForm.get('firstName')!.hasError('required')
    "
    >* Required</span
  >

```

But if the property does not exist in the `formGroup` and if you try to access the property using not null assertion operator, you will get run time error.

```html

<span
    class="text-danger"
    *ngIf="
      profileForm.get('firstname')!.errors &&
      profileForm.get('firstName')!.hasError('required')
    "
    >* Required</span
  >

```

I just changed the case of `firstname`, the compiler is happy as I am using (`!`) not null assertion operator, but at runtime I got following error.

```text
ERROR
Error: Cannot read properties of null (reading 'errors')
```

So if are sure that the object is not null then only use this operator.

### Solution 2: Using (`?`) optional chaining operator.

And if you are not sure whether the object is null or not use (`?`) optional chaining operator.


```html
<span
    class="text-danger"
    *ngIf="
      profileForm.get('firstName')?.errors &&
      profileForm.get('firstName')?.hasError('required')
    "
    >* Required</span
  >
```

This is the safest way.

Even though if the property does not exist on `formGroup`, at run time you wont get any errors.

```html
<span
    class="text-danger"
    *ngIf="
      profileForm.get('firstname')?.errors && <!-- No error -->
      profileForm.get('firstName')?.hasError('required')
    "
    >* Required</span
  >

```

## StackBlitz Demo

Here is the demo for Object is possibly 'null' error in Angular reactive forms.

[https://object-is-possibly-null.stackblitz.io](https://stackblitz.com/edit/object-is-possibly-null)





