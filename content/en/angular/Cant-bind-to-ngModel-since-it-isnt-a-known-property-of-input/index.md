+++
title = "ngModel Angular Error: Can't bind to 'ngModel' since it isn't a known property of 'input'"
subtitle = "Can't bind to 'ngModel' since it isn't a known property of 'input'"
type="post"
summary ="To fix Can't bind to 'ngModel' since it isn't a known property of 'input' error in Angular we have to import FormsModule in app.module.ts"
keywords=["ngModel,Cant bind to ngModel since it isnt a known property of input"]
date="2019-12-30T00:00:00+0000"
lastmod="2019-12-30T00:00:05+0000"
draft=false
authors = ["admin"]
[image]
  caption = "Can't bind to 'ngModel' since it isn't a known property of 'input'"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If you are new to Angular, you might have encountered `Can't bind to 'ngModel' since it isn't a known property of 'input'` error when you use input element with `[(ngModel)]`.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements OnInit {

  public inputValue : string;
  constructor() { 
      this.inputValue = "two way Binding";
  }

  ngOnInit() {
  }

}
```

And in `input-element.component.html` file I have added an input element with [(ngModel)].

```
<input type="text" [(ngModel)]="inputValue"/>
```

When you try to compile the above code you will get following error.

{{% alert warning %}}
error TS8002: Can't bind to 'ngModel' since it isn't a known property of 'input'.
{{% /alert %}}

In Angular applications, If you want to use two-way data binding for form inputs in we need to import the `FormsModule` from `@angular/core`.

**To fix `Can't bind to 'ngModel' since it isn't a known property of 'input' error` in Angular applications we have to import `FormModule` in `app.module.ts` file.**

```
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  declarations: []
  }
)

```

If you are using FormBuilder class to create reactive form we have to import `ReactiveFormsModule` as well to avoid below error.

[Can't bind to 'formGroup' since it isn't a known property of 'form'](https://www.angularjswiki.com/angular/cant-bind-to-formgroup-since-it-is-not-a-known-property-of-form/)