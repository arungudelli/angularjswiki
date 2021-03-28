+++
title = "Angular Json Pipe"
subtitle="Angular Json Pipe example"
date = 2021-01-30T00:00:00
lastmod = 2021-01-30T01:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes" 
prev = "pipes/list"
next = "pipes/example" 
featured="lowercase.jpg"
authors = ["admin"]
summary ="Angular Json Pipe converts a value or object into JSON formatted string"
keywords=["Angular Json Pipe,pipes"]


# Add menu entry to sidebar.
linktitle = "Json Pipe"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 2
+++


**Angular Json Pipe** converts a value or object into JSON formatted string.

Usually we will get the data from the server in JSON format, and we will bind it to HTML.

To know the exact JSON data coming from the server we can use network tab in browser developer tools. 

It's very helpful while debugging the data issues in JSON. 

Angular JSON pipe will take this debugging it to next level by displaying JSON data, directly in HTML page.

## Angular JSON pipe Syntax

The syntax is similar to other pipes in Angular, we need append pipe operator followed by **json** keyword to our object. 

```
{{ json_object | json }}
```

And the input value i.e., json_data can be of type "any".

## How JSON Pipe Works?

Let's go through the json pipe source code to know how it works.

```
export class JsonPipe implements PipeTransform {
  /**
   * @param value A value of any type to convert into a JSON-format string.
   */
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
```

Angular Json Pipe uses javascript's built in `JSON.stringify()` method to convert object or value to a JSON string

## Angular Json Pipe example

Let's go through an example to understand it further. 

We have a product object which contains two properties Id and Name.

```
export class AppComponent  {

  product : Product;

  constructor(){
    this.product = {Id:1,Name:'Angular wiki'};
  }

  name = 'Angular ' + VERSION.major;
}

export class Product{
  Id : Number;
  Name: string;
}
```

### object without Json Pipe

In the component HTML file, I am displaying product without json pipe.  

```
{{ product}}

//OUTPUT
[object Object]
```

Instead of displaying actual object, it displayed **[object Object]**.

### object with Json Pipe

Now let's change our code to use json pipe.

```
{{ product | json }}

//OUTPUT
{ "Id": 1, "Name": "Angular wiki" }

```

## Using json pipe with array of objects

As explained above json pipe will accepts "any" type as input. So whether we will pass single object or multiple array of objects does not matter.

Internally it will use JSON.stringify only.

```
this.products = [
      {
        Id: 1,
        Name: "Angular wiki"
      },
      {
        Id: 2,
        Name: "Typescript"
      }
    ];

//Component HTML file
{{products | json}}

[ { "Id": 1, "Name": "Angular wiki" }, { "Id": 2, "Name": "Typescript" } ]


```

without Json Pipe it will display **[object Object],[object Object]**

## Angular Json Pipe Stackblitz Demo

Here is the stackblitz demo link for Angular Json Pipe

[Stackblitz Json Pipe](https://stackblitz.com/edit/angular-json-pipe?file=src%2Fapp%2Fapp.component.html)

{{< figure src="/img/pipes/Angular-json-pipe.png" title="Angular Json Pipe" alt="Angular Json Pipe">}}






