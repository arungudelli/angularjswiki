+++
title = "Pipes in Angular"
date = 2020-02-11T00:00:00
lastmod = 2020-02-11T01:00:00
draft = true  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes"
next="pipes/list"
featured="angular flex layout tutorial.jpg"
authors = ["admin"]
summary ="Understanding pipes in angular in with examples."
keywords=["Angular pipe,Pipes in Angular,Pipes"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 1

+++

In this tutorial we will understand pipes in angular in with examples.

## Introduction to Pipes in Angular

In any web application, we will get the data and display it in HTML pages in string formats.

The data might be coming from the server or some static local variables.

But in most of the cases we will not display the information directly in webpages. 

We will do some transformations before displaying them in HTML pages.

For example, we will get the date information from the server in raw string format as shown below

```
Sun July 28 2019 00:00:00 GMT-0700 (Pacific Daylight Time)
```

Generally users likes to see the simple date formats in their locale or simply the might need to see the date shown below.

```
July 28 2019
```

If you think of such cases we will be getting so many scenarios like formatting currencies, formatting numbers, uppercase text, lowercase text or titlecase text etc..

So to transform data directly in template html files Angular team came with the concept called Pipes.

It is similar to pipes in linux operating systems like ubuntu,debian etc.

In Linux Pipe is an operator that takes a stream of inputs, transforms it, and returns. 

The pipes may be combined(chained) to perform complex operations,

Pipes can be used with some input parameters to get the desired result.


## What is an Angular Pipe?

1. Angular Pipe is just like a function which accepts input parameters and perform some operations and returns the data.
2. Angular Pipes are used directly in component template html files to transform the data just like styles.
3. Angular Pipes takes the input value and parameters convert it into desired output format.
4. 

3. To transform the data, we have to use Pipe Character `|` followed by the pipe name after the input as shown below.

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

Yes we can always do this, But i see two problems here 

1. I cannot modify the input variable because i might use it in other places for some business logic. So i have to create a new variable purely for displaying.
2. And other problem is by looking at the component file i will not know how the data being displayed.
3. If I use the pipe `{{input | uppercase}}` by looking at the code itself i will know it is being displayed as uppercase.

The reasons I mentioned are only my personal opinions and may not be relevant at all.

