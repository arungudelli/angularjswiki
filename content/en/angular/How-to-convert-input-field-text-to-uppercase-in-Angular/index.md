+++
title = "How to Convert input field text to uppercase in Angular"
subtitle = "Angular Uppercase Input"
type="post"
summary ="To convert input field text to uppercase in angular we can use (ngModelChange ) method"
keywords=["Angular Uppercase Input,angular convert input to uppercase"]
date="2020-01-30T01:01:05+0000"
lastmod="2020-01-30T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Angular Uppercase Input"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To convert input field text to uppercase in angular we can use `(ngModelChange)` method.

We will go through an example to understand it further.

We will create a component called `UppercaseInputComponent` in our Angular project and then will bind `<input>` field to a variable called `inputValue` using `(ngModel)`.

```
export class UppercaseInputComponent implements OnInit {

  inputvalue = "";
  constructor() { }

  ngOnInit() {
  }

}

```

And in our component file we will create an uppercase input field as shown below.

```
<input [ngModel]="inputvalue" 
       (ngModelChange)="inputvalue = $event.toUpperCase()">

Uppercase input Value : {{inputvalue}}

```
In `(ngModelChange)` method on every key press event we are converting input value to uppercase using javascript's toUpperCase() method.

And the final `inputValue` variable contains uppercase text only.