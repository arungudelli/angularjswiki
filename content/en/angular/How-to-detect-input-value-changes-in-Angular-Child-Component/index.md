+++
title = "How to detect @input value changes in Angular Child Component?"
subtitle = "detect @input value changes in Angular Child Component"
summary =""
keywords=["detect @input value changes in Angular"]
date="2022-08-17T01:01:05+0000"
lastmod="2022-08-17T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

+++

In this tutorial we **learn how to detect @input value changes in Angular Child component** with simple examples.

{{%toc%}}

## Using `@input` property

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

{{< video src="/img/videos/detect-input-changes/input_value_changes_not_detected.mp4" srcwebm="/img/videos/detect-input-changes/input_value_changes_not_detected.webm">}} 


We have to call `getDescription()` method whenever there is a change in `@input` values. 

## Detect `@input` value changes using `ngOnChanges()` method 

`ngOnChanges()` method called when there is a change in input values in the component. 

Let's implement `ngOnChanges()` method inside the child component. 

```
ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
}
```

`ngOnChanges()` method will have a parameter of type `SimpleChanges`, which tracks the all changes happened in the component. 

We have to import `SimpleChanges` object from `@angular/core`.

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

{{< video src="/img/videos/detect-input-changes/detecting_input_value_changes.mp4" srcwebm="/img/videos/detect-input-changes/detecting_input_value_changes.webm">}} 

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

{{< video src="/img/videos/detect-input-changes/tracking_input_value_changes.mp4" srcwebm="/img/videos/detect-input-changes/tracking_input_value_changes.webm">}} 

## Detect `@input` value changes using TypeScript `set` and `get` Properties on `@input()`

Instead of `ngOnChanges()` method and `SimpleChanges` object, we can use TypeScript's `setter` and `getter` on `@input` property to detect input value changes.

Let's rewrite the above code using `set` and `get` properties.

```
private _minor: Number;
  
@Input()
set minor(value: Number) {
    this._minor = value;
    console.log(value);
}
get minor(): Number {
    return this._minor;
}

private _major: Number;

@Input()
set major(value: Number) {
  this._major = value;
  console.log(value);
}
get major(): Number {
  return this._major;
}
```

And to detect input value changes use Typescript `setter` property.

This is the simplest way.

```
set major(value: Number) {
    this._major = value;
    this.description = this.getDescription();

    // Do your work
    console.log(value);
}

set minor(value: Number) {
    this._minor = value;
    this.description = this.getDescription();
    console.log(value);
}
```

{{< video src="/img/videos/detect-input-changes/input_changes_using_ts_get_set.mp4" srcwebm="/img/videos/detect-input-changes/input_changes_using_ts_get_set.webm">}} 

And if you have more complex functionality like tracking input values changes use `ngOnChanges()` as explained above.

## Detecting Changes in arrays and objects `@input` values

If you are passing objects and arrays via `@input` property, change detection will not happen if you change the data in the parent component. 

The object data will be changed, just that detection will not happen.

I have added an `appVersion` object in the parent component.

And changing the `appVersion` properties, whenever we click the buttons in the parent component. 

```
  appVersion: AppVersion = { major: this.major, minor: this.minor };

  inputChangeMinor() {
    this.minor++;
    this.appVersion.minor = this.minor;

  }

  inputChangeMajor() {
    this.major++;
    this.minor = 0;
    
    this.appVersion.minor = this.minor;
    this.appVersion.major = this.major;
  }
```
And passing the object to the child component via `@input`. 

```
// In parent component
<div class="child">
    <h3>Using ngOnChanges</h3>
    <app-child
      [major]="major"
      [minor]="minor"
      [appVersion]="appVersion"
    ></app-child>
  </div>
```

And in the child component displaying the object 

```
// In child.component.ts file
@Input() appVersion: AppVersion;

// In child.component.html file
<p>Version Object is : {{ appVersion | json }}</p>

```

On initial load `ngOnChanges()` displays all `@input` values.

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

    },
    "appVersion": {
        "currentValue": {
            "major": 1,
            "minor": 23
        },
        "firstChange": true,
        "previousValue": undefined
    }
}
```

When we change the `appVersion` object properties, `minor` and `major` inputs in parent component `ngOnChanges()` won't display the changes related to the `appVersion` object. 

```
{
    "major": {
        "previousValue": 1,
        "currentValue": 2,
        "firstChange": false
    },
    "minor": {
        "previousValue": 23,
        "currentValue": 0,
        "firstChange": false
    }
}
```

{{< video src="/img/videos/detect-input-changes/object_input_changes_not_detected.mp4" srcwebm="/img/videos/detect-input-changes/object_input_changes_not_detected.webm">}} 

The reason is Objects and Arrays are passed by reference. And when object properties are changed inside the component, reference won't change. 

And `ngOnChanges()` hook will only fire when the reference changes. 

To avoid this we need to change reference of the object by cloning it, instead of changing only properties.

```

  inputChangeMinor() {
    this.minor++;

    //The below code wont trigger ngOnChanges
    // this.appVersion.minor = this.minor;

    this.appVersion = { ...this.appVersion, minor: this.minor };
  }

  inputChangeMajor() {
    this.major++;
    this.minor = 0;

    //The below code wont trigger ngOnChanges
    // this.appVersion.minor = this.minor;
    // this.appVersion.major = this.major;

    this.appVersion = {
      ...this.appVersion,
      minor: this.minor,
      major: this.major,
    };
  }
``` 

I am using spread operator `...` to clone the object.

```
this.appVersion = {
      ...this.appVersion,
      minor: this.minor,
      major: this.major,
};
```

Now in the `ngOnChanges()` method we can see the changes related the `appVersion` object.

```
{
    "major": {
        "previousValue": 1,
        "currentValue": 2,
        "firstChange": false
    },
    "minor": {
        "previousValue": 23,
        "currentValue": 0,
        "firstChange": false
    },
    "appVersion": {
        "previousValue": {
            "major": 1,
            "minor": 23
        },
        "currentValue": {
            "major": 2,
            "minor": 0
        },
        "firstChange": false
    }
}
```

{{< video src="/img/videos/detect-input-changes/detect_object_input_changes_in_ngOnChanges.mp4" srcwebm="/img/videos/detect-input-changes/detect_object_input_changes_in_ngOnChanges.webm">}} 

## Best way to detect `@input` changes in Angular

If your component contains multiple inputs then it's better to use `ngOnChanges()` method.

Because we will get all input changes at a time inside `ngOnChanges()` method and in addition to that we can compare current and previous values of `@input` values with the help of `SimpleChanges` object.

And if you are interested in detecting only single input change and don't care about current and previous values then it's better to use `@input` property `setters` and `getters`.


## Stackblitz Demo 

Here is the link for Stackblitz Demo

[How to Detect @input value changes in Angular](https://stackblitz.com/edit/how-detect-input-value-changes-in-angular)