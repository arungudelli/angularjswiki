+++
title = "How to use ngfor,ngif together on same element in angular"
subtitle = "ngFor ngIf on same element"
summary ="In Angular,To use ngfor and ngif together on same element place the *ngIf on a parent element that wraps the *ngFor element"
keywords=["ngFor,ngIf"]
date="2019-12-28T01:01:05+0000"
lastmod="2019-12-28T02:45:18+0000"
type="post"
draft=true
authors = ["admin"]

+++

In Angular, we cannot use two structural directives on the same element.

i.e., we cannot place *ngFor,*ngIf together on same element.

```
<div *ngIf="shouldShow" *ngFor="let order of orders">
  <li></li>
</div>
```

The above code returns a following error.

{{% alert warning %}}
Can't have multiple template bindings on one element. 
Use only one attribute prefixed with *
{{% /alert %}}

## Reasons Why we cannot use two structural directives on same element.

1. Structural directives like ngfor can do complex things with the host element and its childrens.
2. When two directives placed on same element we cannot decide which one takes precedence i.e., which should execute first *ngIf or *ngFor?
3. What if *ngFor executes before *ngIf, which will supposed to display or hide the elements.

There are no easy solutions for this. The only way is to prohibiting use of multiple structural directives on same element.

## Use ngFor and ngIf on same element.

It's very common scenario where we want to repeat a block of HTML using ngFor only when a particular condition is true. i.e., if ngIf is true.

So in this case to use *ngIf and *ngFor on same element, place the *ngIf on a parent element that wraps the *ngFor element as shown below.

```
<div *ngIf="shouldShow">
  <div *ngFor="let order of orders">
      <li></li>
  </div>
</div>
```

But we are adding one extra div element which will be added to the DOM if ngIf is true.
To avoid this we can use `ng-container` element.

## Use ngFor and ngIf together using ng-container

`ng-container` is a logical grouping element that will not be added to the DOM. that means no styles or layout applied to it.

The above code can be refactored to use `ng-container` as shown below

```
<ng-container *ngIf="shouldShow">
  <div *ngFor="let order of orders">
      <li></li>
  </div>
</ng-container>
```
