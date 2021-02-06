+++
title = "Short Circuiting Assignment Operators in Typescript 4.0 & Angular 11"
subtitle = "Using Short Circuiting Assignment Operators in Angular"
type="post"
summary ="Angular 11 supports only Typescript 4.0 version.Typescript 4.0 has some cool features that can be used in Angular 11. One such feature is short-circuiting assignment operators"
keywords=["Short Circuiting Assignment Operators,Typescript 4.0,Angular 11"]
date="2021-02-05T00:00:05+0000"
lastmod="2021-02-05T00:00:49+0000"
draft=false
authors = ["admin"]

[image]
  caption = "ng-template"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Angular 11 supports only [Typescript 4.0 version](https://www.angularjswiki.com/angular/angular-11-typescript-version/).

Typescript 4.0 has some cool features that can be used in Angular 11. 

One such feature is **short-circuiting assignment operators**.

JavaScript and other languages, supports `compound assignment operators`. 

Compound-assignment operators perform the operation specified by the additional operator, then assign the result to the left operand as shown below.

```
// Addition 
// a = a + b
a += b;

// Subtraction
// a = a - b
a -= b;

// Multiplication
// a = a * b
a *= b;

// Division
// a = a / b
a /= b;

// Exponentiation
// a = a ** b
a **= b;

// Left Bit Shift
// a = a << b
a <<= b;
```

But we cannot use logical and (&&), logical or (||), and [nullish coalescing (??)](https://www.angularjswiki.com/angular/double-question-marks-or-nullish-coalescing-operator-in-angular-typescript/) operators for compound assignment.

Typescript 4.0 supports now these three operators for compound assignment.

```
if (!a) {
  a = b;
}
```

We can replace the above statment with single line logical OR compound assignment `a ||= b`.

```
a = a && b; // a &&=b
a = a || b; // a ||=b
a = a ?? b; // a ??=b
```

With this shorthand notation we can lazily initialize values, only if they needed.

```
let arrayOfString: string[];

(arrayOfString ??= []).push("hello");

```

The logical assignment operators work differently when compare to other mathematical assignment operators.

Mathematical assignment operators always trigger a `set` operation.

But logical assignment operators uses its short-circuiting semantics and avoids `set` operation if possible.

```
let x = 0;
const obj = {
  get x() {
    return x;
  },
  
  set x(value) {
    console.log('setter called');
    x = value;
  }
};

console.log("Set method called");
obj.x += 1;

console.log("Normal Logical OR");
obj.x = obj.x || 2;

// Logical operators do not call setters unnecessarily
// This will not log setter method.
console.log("ShortHand Notation");
obj.x ||= 2;

console.log("&& operator")

obj.x &&= 3;
```

We won't be getting much performance benefit, but calling set operation unnecessarily has it's side effects.

In the following example, if the.innerHTML setter was invoked unnecessarily, it might result in the loss of state (such as focus) that is not serialized in HTML:

```
document.getElementById('previewZone').innerHTML ||= '<i>Nothing to preview</i>';
```