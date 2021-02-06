+++
title = "Short Circuiting Assignment Operators in Typescript 4.0 & Angular 11"
subtitle = "how to use query parameters in Angular"
type="post"
summary ="Using Query parameters in Angular, we can pass optional parameters to angular routes in our applications. "
keywords=["query parameters,queryParamsHandling,queryParams"]
date="2021-01-20T00:00:05+0000"
lastmod="2021-01-20T00:00:49+0000"
draft=true
authors = ["admin"]

[image]
  caption = "ng-template"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Angular 11 supports only Typescript 4.0 version.

There some cool features in Typescipt 4.0 those can be used in Angular 11. 

One of such feature is **Short Circuiting Assignment Operators**

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

But we cannot use logical and (&&), logical or (||), and [nullish coalescing (??)]() operators for compound assignment.

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

There are some uses if you