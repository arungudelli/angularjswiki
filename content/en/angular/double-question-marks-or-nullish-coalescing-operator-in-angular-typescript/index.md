+++
title = "Double Question Marks(??) or Nullish coalescing Operator in Angular/Typescript"
subtitle = "understanding null coalescing operator in Angular or typescript"
summary ="To add a conditional class in Angular we can pass an object to `ngClass` where key is the class name and value is condition i.e., true or false"
keywords=["conditional class angular,add class dynamically in Angular,ngClass angular"]
date="2019-10-17T01:01:05+0000"
lastmod="2019-10-17T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

Double question marks(??) or nullish coalescing operator helps us to assign default values to null or undefined variables in Angular and Typescript. 

It's often called as Null coalescing operator.

It's introduced as part of Typescript 3.7 version. So to use double question marks or null coalescing operator in Angular we should update our application to latest version of Angular (Minimum Angular 9)

[Update to latest versions of Angular](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/)

If you are familiar with C# language, you will be using it as part of your regular day to day programs.

The syntax of nullish coalescing operator very simple just use double question marks '??' after the variable followed by default value.

```
var dValue = nValue ?? "defaultValue"; 
```

You might be thinking that I could be just using OR operator '||' to assign default values. 

But there are few problems with OR operator to understand them we will go through an example.


The nullish coalescing operator is another upcoming ECMAScript feature that goes hand-in-hand with optional chaining, and which our team has been involved with championing in TC39.

You can think of this feature - the ?? operator - as a way to “fall back” to a default value when dealing with null or undefined. When we write code like

let x = foo ?? bar();
this is a new way to say that the value foo will be used when it’s “present”; but when it’s null or undefined, calculate bar() in its place.

Again, the above code is equivalent to the following.

let x = foo !== null && foo !== undefined ? foo : bar();
The ?? operator can replace uses of || when trying to use a default value. For example, the following code snippet tries to fetch the volume that was last saved in localStorage (if it ever was); however, it has a bug because it uses ||.

function initializeAudio() {
  let volume = localStorage.volume || 0.5;

  // ...
}
When localStorage.volume is set to 0, the page will set the volume to 0.5 which is unintended. ?? avoids some unintended behavior from 0, NaN and "" being treated as falsy values.

We owe a large thanks to