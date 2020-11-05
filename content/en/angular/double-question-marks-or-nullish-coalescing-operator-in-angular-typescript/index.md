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

You might be thinking that I will use OR operator '||' to assign default values. 

But there are few problems with OR operator, to understand them we will go through an example.

## Nullish coalescing operator example

In real word cases, we will be getting the data from the server usually in JSON format.

```
var  book = {
    Publisher: null,
    Amount: 400,
    Version: 0,
    Title: 'Angular',
    SubTitle:''
    IsFreeBook: false
};
```

So before displaying the above data, we will check for the null or undefined variable in the book variable using OR operator.

```
var publisher = book.Publisher || "Angular publisher"; // Angular Publisher
var amount = book.Amount || 400; // 400
var version = book.Version || 1; // 1
var title = book.Title || "Angular"; // Angular
var subTitle = book.SubTitle || "Angular Book"; // Angular Book
var isFreeBook = book.IsFreeBook || true; // true
```

You might be thinking now that the above code is perfectly fine. 

But there are few problems with assigning default values to the variables version, subTitle and isFreeBook.

We have version as '0'. That's pefectly fine having version 0 of the book. But in this case OR operator assigns the value to the '1'

We want to display empty sub title to the book. But || operator parsing it to "Angular Book".

And the most tricky part is with the boolean variables like 'IsFreeBook' by default the book is free.

For example if we want charge amount for the book using Amount variable, we can just send the variable isFreeBook as 'false' from the server. 

In this case the book still displays it as free book.

Because OR operator consider it as 'falsy'.

The OR operator considers 0, '' (empty string) and 'false' values as falsy. 

The nullish coalescing operator solves the above problem.

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