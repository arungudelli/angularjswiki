+++
title = "How to select an element in Angular Component Template"
subtitle = "select an element in component template"
summary ="To select an element in Angular component template use ViewChild decorator"
keywords=["select an element in component template,ViewChild"]
date="2019-12-26T01:01:05+0000"
lastmod="2019-12-26T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

Steps to select an element in Angular component template

1. Add a template reference variable to the component HTML element.
2. Import `@ViewChild` decorator from `@angular/core` in component ts file.
3. Use `ViewChild` decorator to access template reference variable inside the component.
4. And finally select the element in `ngAfterViewInit` method by accessing element's `nativeElement` property.

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
In component html file I have added a `input` element with template reference variable `#inputElement`

```
<input #inputElement value="Angular Wiki">
```

In component file we can access `#inputElement` by using `@ViewChild` decorator.

```
import { Component, OnInit, ViewChild, ElementRef } 
from '@angular/core';

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

{{< figure src="select an element in component template.png" title="select an element in component template" alt="select an element in component template">}} 