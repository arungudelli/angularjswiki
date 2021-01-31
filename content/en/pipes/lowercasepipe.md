+++
title = "Angular Lowercase Pipe : Convert string/text to lowercase in Angular"
subtitle="Lower case pipe example"
date = 2021-01-30T00:00:00
lastmod = 2021-01-30T01:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes" 
prev = "pipes/uppercase"
next = "pipes/example" 
featured="lowercase.jpg"
authors = ["admin"]
summary ="Angular lowercase Pipe used to convert string or text to lowercase in Angular component templates"
keywords=["convert string to lowercase,Angular lowercase pipe"]


# Add menu entry to sidebar.
linktitle = "Lower Case Pipe"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 2
+++

**Angular lowercase Pipe** used to convert string or text to lowercase in Angular component templates.

To convert a string to small letters in template HTML file, pass the input string to the lowercase pipe using pipe operator as shown below.

```
<p>{{'LOWERCASE pipe convert string to small letters in ANGULAR'
| lowercase}}</p>
<!-- Output -->
<!--lowercase pipe convert string to small letters in angular-->
```

It's one of the built-in pipes in Angular and very handy pipe similar to [uppercase pipe](https://www.angularjswiki.com/pipes/uppercasepipe/)

{{% toc %}}

## Lowercasepipe Usage & Syntax

The syntax is very similar to other built in pipes, we need to pass input text to the lowercase pipe without any parameters.

```
{{ text | lowercase }}
```

## LowerCasePipe Examples

Now We will go through the different types of strings and convert them to small case letters using Angular LowerCasePipe.

Let's create a component called lowercasepipe in our Angular project.

```
ng generate component lowercasepipe 

//
CREATE src/app/lowercasepipe/lowercasepipe.component.html (28 bytes)
CREATE src/app/lowercasepipe/lowercasepipe.component.spec.ts (677 bytes)
CREATE src/app/lowercasepipe/lowercasepipe.component.ts (304 bytes)
CREATE src/app/lowercasepipe/lowercasepipe.component.scss (0 bytes)
UPDATE src/app/app.module.ts (3991 bytes)

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowercasepipe',
  templateUrl: './lowercasepipe.component.html',
  styleUrls: ['./lowercasepipe.component.scss']
})
export class LowercasepipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

Convering ultra numerica string to lowercase

```
<p>{{'ANGULAR LOWERCASE' | lowercase}}</p>
<!-- output is "angular lowercase" --> 

<!-- Ultra numeric string to lowercase -->
<p>{{'ANGULAR version 11' | lowercase}}</p> 
<!-- output is "angular version 11" --> 
```

## Error: InvalidPipeArgument for pipe 'LowerCasePipe'

Angular lowercase pipe accepts **only string types**. 

If we pass other types like number or object etc. we will get  
**`Error: InvalidPipeArgument for pipe 'LowerCasePipe'`** error.

```
{{ 1 | lowercase}}
```

The above code won't compile and angular cli returns following error

```
TS2345: Argument of type '1' is not assignable to parameter of type 'string'.
```

We will test lowercase pipe with other type variables.

```
export class LowercasepipeComponent implements OnInit {

id : number;
products : Product[];

constructor() { 
    this.id = 123;
    this.products = [
       {id:1,name:"product1"},
       {id:2,name:"product2"}
    ];
}

}  


interface Product{
  id: number;
  name : string;
}


```

In file `lowercasepipe.component.html` file

 ```
 {{ id | lowercase}}
 ```

 And now angular cli will return `error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.` error when we try to compile below code.

 Same with the type product 

 ```
    {{ products | lowercase}}

 error TS2345: Argument of type 'Product[]' is not 
 assignable to parameter of type 'string'.
 ```

 Now we will test lowercase pipe with variable of type `any`. 

 
 ```
 lowercasevariable: any;

 constructor(){
   this.lowercasevariable = 1;
 }


 {{ lowercasevariable | lowercase}}
 ```

 And now there will be no compile time errors and at run time we will get following error.

 {{% alert warning%}}

  Error: InvalidPipeArgument: '1' for pipe 'LowerCasePipe'

 {{% /alert %}}

If you pass object to lowercase pipe you will get following error. 

I mean when we assign a object to variable type of `any`.

{{% alert warning %}}
Error: InvalidPipeArgument: '[object Object]'
 for pipe 'LowerCasePipe'
{{% /alert %}}

If you assign string to `any` type variable lowercase pipe will work as expected.
