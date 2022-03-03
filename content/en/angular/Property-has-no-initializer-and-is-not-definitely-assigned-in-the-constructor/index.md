+++
title = "Property '...' has no initializer and is not definitely assigned in the constructor error fix in Angular"
subtitle = " Fixing Property '...' has no initializer and is not definitely assigned in the constructor error"
type="post"
summary ="There are 5 ways to can fix Property '...' has no initializer and is not definitely assigned in the constructor error in Angular applications"
keywords=["angular,error,strictPropertyInitialization"]
date="2022-03-02T01:01:05+0000"
lastmod="2022-03-02T04:00:07+0000"
draft=false
authors = ["admin"]
[image]
  caption = "Property '...' has no initializer and is not definitely assigned in the constructor"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If you are using latest version of Angular application, you might have encountered `Property '...' has no initializer and is not definitely assigned in the constructor` error, when you declare a variable inside a class or component. 

Consider below example. 

```
export class EmpComponent implements OnInit {
  
  employees: Employee[];
  
  constructor() {

   }

  ngOnInit() {
    
  }

}
```

It's because of `Strict Class Initialization` flag introduced in TypeScript 2.7 version. 

So If the `--strictPropertyInitialization` typescript flag is enabled, the compiler checks if each property declared inside a class or angular component

1. has an undefined type
2. has an explicit initializer
3. or checks if it's assigned in the constructor or not. 

If not it throws `Property '...' has no initializer and is not definitely assigned in the constructor` error. 

The flag is enabled by default if `--strict` flag in enabled in typescript compiler options. 

To fix `Property '...' has no initializer and is not definitely assigned in the constructor` error in Angular applications use the below methods.

1. Disable strictPropertyInitialization flag
2. Adding undefined type to the property
3. Add definite assignment assertion to property
4. Add initializer to property
5. Assignment in the Constructor

## Solution 1: Disable strictPropertyInitialization flag

The simple way to fix this error in Angular applications is to disable `--strictPropertyInitialization` flag in typescript compiler options in `tsconfig.json` file.

```
"compilerOptions": {
  ///
  ,
  "strictPropertyInitialization":false
}
```

If not there other ways we can by pass this error. 

## Solution 2: Adding undefined type to the property

It's ok to have an undefined property. 

So while declaring variable add undefined type to the property.

```
employees: Employee[];

//Change to 

employees : Employee[] | undefined;

```

But while using employees property we have to check for undefined value to avoid errors in run time. 


## Solution 3: Add definite assignment assertion to property

If you know that we will assign the property in later point in time. 

It's better to add definite assignment assertion to the property. i.e., employees.

```
employees!: Employee[];
```

To add the definite assignment assertion we have to add Exclamation mark(!) symbol after the variable name.

Be careful, we are just bypassing the compiler error, so it's our responsibility to make sure the property is definitely assigned before using it. otherwise we will get TypeError at run time.


## Solution 4: Add initializer to property

Another way to make this type error go away is to add an explicit initializer to the property.

```
employees: Employee[] = [];
```

## Solution 5: Assignment in the Constructor

Otherwise, we can assign some default value to the property in the constructor.

```
employees: Employee[];

constructor() { 
    this.employees=[];
}
```