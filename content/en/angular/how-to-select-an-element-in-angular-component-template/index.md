+++
title = "How to select an element in Angular Component Template"
subtitle = "add a class dynamically using ngClass"
summary ="To add a conditional class in Angular we can pass an object to `ngClass` where key is the class name and value is condition i.e., true or false"
keywords=["conditional class angular,add class dynamically in Angular,ngClass angular"]
date="2019-12-26T01:01:05+0000"
lastmod="2019-12-26T02:45:18+0000"
type="post"
draft=true
authors = ["admin"]

+++

Steps to select an element in Angular component template

1. Add a template reference variable to the component HTML element.
2. Import `@ViewChild` decorator from `@angular/core` in component ts file.
3. Use `ViewChild` decorator to access template reference variable inside the component.
4. And finally use the reference in `ngAfterViewInit` method by accessing `nativeElement` property.

Now we will go through an example to understand it further.

We will create a component called `select-element` in our angular project.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.scss']
})

export class SelectElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
In `select-element.component.html` file I have added a `input` element with template reference variable `#inputElement`

```
<input #inputElement value="Angular Wiki">
```

In component file we can access `#inputElement` by using `@ViewChild` decorator.

```
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.scss']
})
export class SelectElementComponent implements OnInit {

  @ViewChild('inputElement') inputElement:ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.inputElement.nativeElement.value);
  }

}
```

In `ngAfterViewInit` method I am logging the value of inputElement i.e., "Angular Wiki"
