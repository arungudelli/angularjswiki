+++
title = "How to detect @input value changes in Angular Child Component?"
subtitle = "detect @input value changes in Angular Child Component"
summary =""
keywords=["detect @input value changes in Angular"]
date="2022-08-18T01:01:05+0000"
lastmod="2022-08-18T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

+++

In this tutorial we **learn how to detect @input value changes in Angular Child component** with simple examples. 

Most of the real world Angular applications will contain parent and child component relations. 

The data is passed from parent component to child component with help of `@input` binding.

If the parent component changes the data, the child component reflect the changes automatically.

And in the child component we can use `@input` value in so many ways

1. Display in child component UI
2. We can get additional data from the server via an API service based on `@input` value.  


If we directly display the `@input` value there is no issue, the value is updated in the child component UI automatically. 

But if we use `@input` value to call an API service to get additional data, we may have to call the API service again.

For this purpose **We need to detect `@input` value change event in Angular Child components**. 

There are two ways we can detect `@input` value change in Angular 

1. Using `ngOnChanges()` method
2. Using TypeScript Setter and Getter Properties on `@input()`

Let's go through an example to understand further.

I have a parent component which passes two `@input` values (major and minor) to the child component. 

```
export class ParentComponent implements OnInit {
  
  major = 1;
  minor = 23;
  
  inputChangeMinor() {
    this.minor++;
  }

  inputChangeMajor() {
    this.major++;
    this.minor = 0;
  }

  constructor() {}

  ngOnInit() {}
}

<div class="parent">
  <h2>Code versions</h2>
  <button type="button" (click)="inputChangeMinor()">Change input minor version</button>
  <button type="button" (click)="inputChangeMajor()">Change input major version</button>
  <div class="child">
    <app-child
      [major]="major"
      [minor]="minor"
    ></app-child>
  </div>
</div>
``` 

With the help of `Change input minor version` and `Change input major version` buttons we will change the `@input` variables.

And child component display the version information based on the passed `@input` data.

```
export class ChildComponent implements OnInit {

  @Input() major = 0;
  @Input() minor = 0;

  description: string;

  getDescription(major, minor) {
    let desc = `Version is ${major}.${minor}`;
    return desc;
  }

  ngOnInit() {
    this.description = this.getDescription(this.major, this.minor);
  }

  constructor() {}
  
}

<div class="child-original">
  <strong>{{ description }}</strong>
  <h3>Major: {{ major }} Minor: {{ minor }}</h3>
</div>
```

I have created a `description` variable which displays the version information in the UI.

But the changes to the `@input` major and minor versions does not change the `description` variable.

We have to call `getDescription()` method whenever there is a change in `@input` values. 

## Using `ngOnChanges()` method 

`ngOnChanges()` method called when there is a change in input values in the component. 

Let's implement `ngOnChanges()` method inside the child component. 

```
ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
}
```

`ngOnChanges()` method will have a parameter of type `SimpleChanges`, which tracks the all changes happened in the component. 

We have to import `SimpleChanges` from `@angular/core`.

``
import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
``

Let's ignore this `changes` variable as of now simply call the `getDescription()` inside the `ngOnChanges()` method.

```
export class ChildComponent implements OnInit {

  @Input() major = 0;
  @Input() minor = 0;

  description: string;

  getDescription() {
    let desc = `Version is ${this.major}.${this.minor}`;
    return desc;
  }

  ngOnInit() {
    this.description = this.getDescription();
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    
    console.log(changes);
    this.description = this.getDescription();

  }
  
}
```

Now in the real world case, we may call an API service inside the `ngOnChanges()`.

For example we have an `userId` input, based on that we will display user information inside the child component. 

```
getUserDetails(userid:Number){

// Call an API

}

ngOnChanges(changes: SimpleChanges) {
    
  //update user Details  
  
  this.getUserDetails(changes.userId.currentValue);

}

```

Don't worry about what is `changes.userId.currentValue`. Read further.

## Tracking changes using `ngOnChanges()` method

The `SimpleChanges` object contains information related to the changes happened in input values.

On first load `console.log(changes)` in `ngOnChanges()` displays the following information.

```
{
    "major": {
        "currentValue": 1,
        "firstChange": true,
        "previousValue": undefined
    },
    "minor": {
        "currentValue": 23,
        "firstChange": true,
        "previousValue": undefined
    }
}
```

`SimpleChanges` object contains three properties `currentValue`,`firstChange` and `previousValue`. 

As the name suggests `currentValue` contains the changed value, `previousValue` contains the previous input value and `firstChange` represents whether it's initial value or not.

So on first load both input values contains `firstChange` as true.

We can access the input value change information by using index notation. 

To access the `minor` input value use `console.log(changes.major)`.

```
console.log(changes.minor);

{
    "currentValue": 23,
    "firstChange": true,
    "previousValue": undefined
}
```

Every time there is a change in input values `ngOnChanges()` will be called and by using `SimpleChanges` object we can track all changes. 

```
changeLog: string[] = [];

ngOnChanges(changes: SimpleChanges) {

    this.description = this.getDescription(this.major, this.minor);
    const logging: string[] = [];

    console.log(changes);

    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      
      if (changedProp.isFirstChange) {
        logging.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        logging.push(`@input ${propName} changed from ${from} to ${to}`);
      }

    }

    this.changeLog.push(logging.join(', '));
}
```

And display them in the UI

```
  <h4>@input Major and Minor Changes log:</h4>
  <ul>
    <li *ngFor="let change of changeLog">{{ change }}</li>
  </ul>
```
