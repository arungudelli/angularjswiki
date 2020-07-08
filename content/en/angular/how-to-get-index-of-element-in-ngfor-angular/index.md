+++
title = "How to get index of ngFor element in Angular"
subtitle = "get index of ngFor element"
summary ="Steps to get index of ngFor element in Angular 1. Declare a variable inside *ngFor directive using let or as keyword. for instance say indexofelement. 2. Assign the variable value to index 3. And display the index of ngFor element using angular expression."
keywords=["ngFor index,get index of ngFor element"]
date="2020-02-13T01:01:05+0000"
lastmod="2020-02-13T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

Steps to get index of ngFor element in Angular

1. Declare a variable inside *ngFor directive using `let` or `as` keyword. for instance say `indexofelement` or simply `i`.
2. Assign the variable value to `index`.
3. And display the index of ngFor element using angular expression.

We will go through an example to understand it further.

I have created a component called `NgForGetIndex` in my Angular project and added an array of books.

```
export class NgForGetIndexComponent implements OnInit {

  books : Book[];

  constructor() { 
     this.books = [
        {id:1,name:"Angular"},
        {id:2,name:"Typescript"},
        {id:3,name:"Javascript"},
        {id:4,name:"HTML"}
     ];
  }
  
  ngOnInit(): void {
  }

}

interface Books{
  id: number;
  name : string;
}
```

And in component html I have declared a variable (indexOfelement) inside of ngFor directive using `let` keyword as shown below.

```
<ul>
    <li *ngFor="let book of books;let indexOfelement=index;">
      ngFor index: {{indexOfelement}} value : {{book.name}} 
    </li>
</ul>

```

And the index of ngFor element will be displayed in webpage as shown below.

```
ngFor index: 0 value : Angular
ngFor index: 1 value : Typescript
ngFor index: 2 value : Javascript
ngFor index: 3 value : HTML
```

We can use `as` keyword to refer the value of ngFor element index as shown below.

```
*ngFor="let product of products;
        index as indexOfelement;"
```
