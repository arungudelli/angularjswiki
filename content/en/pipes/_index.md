+++
title = "Pipes in Angular"
date = 2020-02-11T00:00:00
lastmod = 2020-02-11T01:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes"
next="pipes/list"
featured="pipes-in-angular.jpg"
authors = ["admin"]
summary ="Understanding pipes in angular with examples."
keywords=["Angular pipe,Pipes in Angular,Pipes"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 1

+++

In this tutorial we will understand pipes in angular with examples.

{{%toc%}}

## Introduction to Pipes in Angular

In any web application, we will get the data and display it in HTML pages in string formats.

The data might be coming from the server or some static local variables.

But in most of the cases we will not display the information directly in webpages. 

We will do some transformations before displaying them in HTML pages.

For example, we will get the date information from the server in raw string format as shown below

```
Sun July 28 2019 00:00:00 GMT-0700 (Pacific Daylight Time)
```

Generally users likes to see the simple date formats in their locale or simply they want to see the date in the format shown below.

```
July 28 2019
```

If you think of such cases we will be getting so many scenarios like formatting currencies, formatting numbers, uppercase text, lowercase text or titlecase text etc..

So to transform data directly in template html files Angular team came with the concept called Pipes.

It is similar to pipes in linux operating systems.

In Linux, Pipe is an operator that takes a stream of inputs, transforms it, and returns. 

## What is an Angular Pipe?

1. Angular Pipe is just like a function which accepts input data and parameters,perform some operations and returns the data.
2. Angular Pipes are used directly in component template html files to transform the data just like styles.
3. Angular pipe takes in data as input and transforms it to a desired result.
4. We can pass optional parameters to Angular Pipe to transform the data further.
5. Angular Pipe can be combined with other pipes to perform series of operations.
6. Use Pipe Character `|` followed by the angular pipe name after the input data to transform the data as shown below.

```
{{ 8907.56 | currency : 'USD' }}
// $8907.56
```

## Why to use Pipes In Angular?

You might be thinking why I have to use angular pipes in template HTML files, when I can transform the data in component ts file itself?

For example we have a built in uppercase Pipe in Angular, which converts the text into uppercase
as shown below

```
input: angular wiki
{{input | uppercase}}
ANGULAR WIKI
```

The transformation can be done in component file itself as shown below

```
input : string;
formattedinput : string;
constructor(){
this.input = "angular wiki";
this.formattedinput = this.input.toUpperCase();
}

In component html file

{{formattedinput}}

ANGULAR WIKI

```

Yes we can always do this, But few problems here 

1. I cannot modify the input variable because, I might use it in other places for some business logic. So I have to create a new variable purely for displaying.
2. And other problem is by looking at the component file I will not know how the data being displayed.
3. If I use the pipe `{{input | uppercase}}` by looking at the code itself, I will understand it is being displayed as uppercase.

## Angular Pipes are reusable

We can reuse Angular pipes whenever we want to perform some business logic on data inside our component html files.

Built in pipes like uppercase or lowercase pipes can be used in every component html files. 

```
{{ data | uppercase}}

// angular pipe 
// ANGULAR PIPE
```
We can create our own custome pipes according to our requirements use them in angular applications.

For example we want to perform square operation on numbers before displaying them, in that case we can create our own pipe called `squarepipe` and use it across the application.

```
{{ numbervalue | squarepipe}}

//2
//4
```

## Angular Pipes Performance

In the above example instead of creating squarepipe, we can declare a function in component file use it in template html file as shown below.

```
@Component({
  selector: 'app-square',
  template:  `
    Input value: {{inputValue}} <br>
    Square value: {{square(inputValue)}} <br>
    <button (click)="changeInputValue()">Change Value</button>
  `,
})
export class SquareComponent {
  
  public inputValue = 0;

  square(input) {
    return input * input;
  }

  changeInputValue() {
    this.inputValue += 1;
  }
}
```

But the probelm with the above approach is the function in component template html is called every time when change detection occurs.

For simple operations it might not be a problem. 

But if you perform a time consuming complex business logic in a function and invoking it each and every change detection cycle can be a performance bottleneck.

So in this case it is better to create with a pipe (pure pipe) that performs the complex logic.

So what is pure pipe how it is used to improve perfomance? 

Will discuss them in coming articles
