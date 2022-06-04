+++
title   = "mat-form-field must contain a MatFormFieldControl error fix in Angular"
subtitle= "Fixing `mat-form-field` must contain a `MatFormFieldControl` error"
summary = "If your `mat-form-field` contains an `input` or `textarea` element, make sure you've added the `matInput` directive to it and have imported `MatInputModule` other wise you will get `mat-form-field must contain a MatFormFieldControl` error in your application."
keywords=["mat-form-field must contain a MatFormFieldControl"]
type="post"
date="2022-06-01T01:01:05+0000"
lastmod="2022-06-01T04:00:07+0000"
draft=false
authors = ["admin"]
[image]
  caption = "mat-form-field must contain a MatFormFieldControl"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If you are using Angular material modules you might have encountered `mat-form-field must contain a MatFormFieldControl` error while using `MatFormFieldModule`.

This error occurs when you have missed to add a form field control to your form field.

{{%toc%}}

## what are form field controls? 

The native elements like `<input>` or `<textarea>`, which are placed inside `mat-form-field` acts as form field controls. 

If your `mat-form-field` contains an `<input>` or `<textarea>` element, make sure you've added the `matInput` directive to it and have imported `MatInputModule` other wise you will get `mat-form-field must contain a MatFormFieldControl` error in your application.

And other components that can act as a form field control includes `<mat-select>`, `<mat-chip-list>` and any custom form field controls you've created.


## Fixing `mat-form-field must contain a MatFormFieldControl` error.

To fix the error, add `MatInputModule` and `MatFormFieldModule` inside a necessary module or `app.module.ts`. 

Or as explained in [Angular material tutorial](https://www.angularjswiki.com/material/) add all material modules in a common module and add it to `app.module.ts` file so that we can use them across the application. 

```
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AppModule { }

```

And next make sure you have added `matInput` directive to `mat-form-field` control.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

The above code throws error because we have not added `matInput` directive.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

And **`matInput` is case-sensitive**. 

So if you have a spelling mistake in `matInput` or capital case(`MatInput`) or small case letters(`matinput`) in `matInput`, still you will encounter the error.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` control input should not contain `*ngIf`

If you are using `*ngIf` on mat-form-field control i.e., `<input>` tag, you will get `mat-form-field must contain a MatFormFieldControl` error.

The below code will not work.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Instead of that you should use `*ngIf` on `mat-form-field` element.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Summary

To fix `mat-form-field must contain a MatFormFieldControl` error follow the below steps

1. Import `MatInputModule` and `MatFormFieldModule` 
2. Add `matInput` directive to the `mat-form-field` control. i.e., `input` or `textarea`
3. Check `matInput` spelling.
4. Don't use `*ngIf` on `mat-form-field` control instead use it on `mat-form-field` element

