+++
title = "Angular Uppercase Pipe : Convert string/text to uppercase in Angular"
date = 2019-04-24T00:00:00
lastmod = 2019-04-24T01:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes" 
prev = "pipes/list"
next = "pipes/example" 
featured="uppercase.jpg"
authors = ["admin"]
summary ="Angular Uppercase Pipe used to convert string or text to uppercase in Angular"
keywords=["convert string to uppercase,Angular uppercase pipe"]


# Add menu entry to sidebar.
linktitle = "Upper Case Pipe"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 2
+++

To convert string or text to uppercase in Angular we can use Angular UpperCasePipe.

Pass input string to the uppercase pipe as shown below.

```
<p>{{'uppercasepipe convert string to uppercase in angular'
| uppercase}}</p>
<!-- Output -->
<!--UPPERCASEPIPE CONVERT STRING TO UPPERCASE IN ANGULAR-->
```

Angular UpperCasePipe is one of the built in pipes which converts text to uppercase.

{{% toc %}}

## Angular UpperCasePipe Usage & Syntax

The syntax is very similar to other built in pipes, we need to pass input string to uppercase pipe without any parameters

```
{{ string | uppercase }}
```

## Angular UpperCasePipe Examples

We go through the different types of strings and convert them to uppercase using Angular TitleCasePipe.

We will create a component called uppercase component in our Angular project, will convert different kind of inputs to uppercase.

```
<p>{{'angular uppercase' | uppercase}}</p>
<!-- output is "ANGULAR UPPERCASE" --> 
<!-- Ultra numeric string to uppercase -->
<p>{{'angular version 9' | titlecase}}</p> 
<!-- output is "ANGULAR VERSION 9" --> 
```

## Error: InvalidPipeArgument for pipe 'UpperCasePipe'

Angular uppercase pipe accepts only string types. If you pass other types like number or object etc. you will get  `Error: InvalidPipeArgument for pipe 'UpperCasePipe'` error.

```
{{ 1 | uppercase}}
```

The above code won't compile at all and angular cli returns following error

```
error TS2345: Argument of type '1' is not assignable 
to parameter of type 'string'.
```

We will test uppercase pipe with other type variables.

```
export class UpperCasePipeComponent implements OnInit {

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

And now angular cli will return `error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.` error when we try to execute below code.

 ```
 {{ id | uppercase}}
 ```

 Same with the type product 

 ```
 {{ products | uppercase}}

 error TS2345: Argument of type 'Product[]' is not 
 assignable to parameter of type 'string'.
 ```

 Now we will test uppercase pipe with variable of type `any`. 

 
 ```
 uppercasevariable: any;

 constructor(){
   this.uppercasevariable = 1;
 }


 {{ uppercasevariable | uppercase}}
 ```

 And now there will be no compile time errors and at run time we will get following error.

 {{% alert warning%}}

  Error: InvalidPipeArgument: '1' for pipe 'UpperCasePipe'

 {{% /alert %}}

 and in addition to that you will get another error

{{% alert warning%}}
Error: ASSERTION ERROR: Stored value should never be NO_CHANGE. 
[Expected=> [object Object] !== [object Object] <=Actual]
{{% /alert %}}

If you pass object to uppercase pipe you will get following error. I mean when I assign a object to variable type of `any`.

{{% alert warning %}}
Error: InvalidPipeArgument: '[object Object]'
 for pipe 'UpperCasePipe'
{{% /alert %}}

If you assign string to `any` type variable uppercase pipe will work as expected.
