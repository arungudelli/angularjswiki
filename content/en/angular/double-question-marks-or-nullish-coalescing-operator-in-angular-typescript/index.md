+++
title = "Double Question Marks(??) or Nullish coalescing Operator in Angular/Typescript"
subtitle = "understanding null coalescing operator in Angular or typescript"
summary ="Double question marks(??) or nullish coalescing operator helps us to assign default values to null or undefined variables in Angular and Typescript."
keywords=["Double question marks operator,nullish coalescing operator,Null coalescing operator"]
date="2020-11-04T00:01:05+0000"
lastmod="2020-11-04T00:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

Double question marks(??) or nullish coalescing operator helps us to assign default values to null or undefined variables in Angular and Typescript. 

It's often called as Null coalescing operator.

It's introduced as part of Typescript 3.7 version. 

So to use double question marks or null coalescing operator in Angular we should update our application to latest version of Angular (Minimum Angular 9)

[Update to latest versions of Angular](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/)

If you are familiar with C# language, you will be using it as part of your regular day to day programs.

{{%toc%}}


## Nullish coalescing operator(??) syntax

The syntax of nullish coalescing operator is very simple just use double question marks '??' after the variable followed by default value.

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
var bookType = book.Type || "PDF"; // Type is undefined so default is "PDF"
var publisher = book.Publisher || "Angular publisher"; // Angular Publisher
var amount = book.Amount || 400; // 400
var version = book.Version || 1; // 1
var title = book.Title || "Angular"; // Angular
var subTitle = book.SubTitle || "Angular Book"; // Angular Book
var isFreeBook = book.IsFreeBook || true; // true
```

You might be thinking that the above code is perfectly fine. 

But there are few problems with assigning default values to the variables version, subTitle and isFreeBook.

We have version as '0'. That's pefectly fine having version 0 of the book. But in this case OR operator assigns the value to the '1'

We want to display empty sub title to the book. But || operator parsing it to "Angular Book".

And the most tricky part is with the boolean variables like 'IsFreeBook' by default the book is free.

For example if we want charge amount for the book using Amount variable, we can just send the variable isFreeBook as 'false' from the server. 

In this case the book still displays it as free book.

Because OR operator consider it as 'falsy'.

The OR operator considers 0, '' (empty string) and 'false' values as falsy. 

The nullish coalescing operator solves the above problem.

The nullary coalescing operator solves the above problem by doing equality check against nullary values (null or undefined).

```
var bookType = book.Type ?? "PDF"; // Type is undefined so default is "PDF"
var publisher = book.Publisher ?? "Angular publisher"; // Angular Publisher
var amount = book.Amount ?? 400; // 400
var version = book.Version ?? 1; // 0
var title = book.Title ?? "Angular"; // Angular
var subTitle = book.SubTitle ?? "Angular Book"; // ''
var isFreeBook = book.IsFreeBook ?? true; // false

```

For instance the above code is equivalent to the following statement

```
var isFreeBook = book.IsFreeBook !== null && book.IsFreeBook !== undefined ? book.IsFreeBook : true;
```

We will take a simple statement

```
var dValue = nValue ?? "defaultValue"; 

var dValue = nValue !== null && nValue !== undefined ? nValue : "defaultValue"; 

```

## Difference between nullish coalescing operator(??) and OR(||) operator

As explained in the above example, the major difference between double question mark operator(||) aka nullish coalescing operator and OR(||) is 

{{%alert note%}}

Nullish coalescing operator(??) does the equality check for null or undefined values.
OR(||) operator considers 0,''(empty string) and false as falsy values

{{% /alert %}}
