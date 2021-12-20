+++
title = "How To Check Both null or undefined in TypeScript/Angular"
subtitle = "null or undefined check in Angular/TypeScript"
type="post"
summary ="different ways we can check both null or undefined in TypeScript or Angular. 1. By using simple if condition 2. By using TypeScript Nullish Coalescing & Optional chaining. 3. By using Array.include() function."
keywords=["null check angular,undefined check angular,null check typescript,undefined check typescript"]
date="2021-12-16T00:00:00+0000"
lastmod="2021-12-16T00:00:00+0000"
draft=false
authors = ["admin"]

[image]
  caption = "null or undefined check in Angular/TypeScript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

While accessing the properties of TypeScript class or interface or objects it's better to do null or undefined checks.

There are different ways we can check both null or undefined in TypeScript or Angular.

1. By using simple if condition.
2. By using TypeScript Nullish Coalescing & Optional chaining. 
3. By using Array.include() function.

## Method 1: Use Simple If Condition

TypeScript is super set of JavaScript. So we can simply use if condition to do null or undefined checks. 

Often people thinks that there will be a TypeScript utility function to do the job. But that's not the case here. 

If we pass null,undefined,0,false,"",NaN values to the if condition it evaluates to false.  

Initially I have defined a variable, and by default it will be `undefined`.

```
//Clear the console.
console.clear();

var a;
if(a){
    console.log(a);
}else{
    console.log(a); //undefined
}
```

And next I am assigning it's value to `null`.

I have used the same `if` condition. 

```
a=null; 

if(a){
    console.log(a);
}else{
    console.log(a); //null
}

```

If you want to check only `null` or `undefined` values, use the below if condition.

```
var checkVariable;

if(checkVariable == null or checkVariable == undefined){

}

//Check if a variable is only null 
if(checkVariable == null){

}

//Check if a variable is only undefined
if(checkVariable == undefined){

}

```

## Method 2: Use Nullish Coalescing & Optional Chaining in TypeScript 

From TypeScript 3.7 version onwards we can use Nullish Coalescing and Optional chaining to check both `null` or `undefined`.

Let's consider a real world example, usually we will get the data from the server in JSON object format. 

Consider an Employee object in an Angular application.

```
let emp= {
    Id:1,
    Name:"Arun",
    Position:undefined,
    Address:{
      City:"Hyderabad",
      Country:"India",
      Street:undefined
    }
};

```

Before accessing the properties of the object, usually we will do the `null` or `undefined` check using if condition as explained above.

We have received employee name and other details but the position is `undefined`. 

```
var employePosition;
if(emp.Position){
  employePosition = emp.Position;
}
else{
  employePosition = "No Role";
}
console.log(employePosition);

//No Role
```

The above undefined check code can be refactored into single line using TypeScript Nullish Coalescing or [double question mark operator](https://www.angularjswiki.com/angular/double-question-marks-or-nullish-coalescing-operator-in-angular-typescript/). 

```
var employePosition = emp.Position ?? "No Role";

```

Further we have employee address which contains City,Street and Country Information. 

If the Address is undefined or null, If we try to access properties of address object we will get error. 

So to access the child property we need to check trustworthy of parent object.

We have to do multiple null or undefined checks as shown below.

```
var employeeCountry = (emp && emp.Address && emp.Address.Country) ?? "";
```

Now using Optional chaining in TypeScript We can simplify the above code as shown below.

```
var employeeCountry = emp?.Address?.Country ?? "";
```

## Method 3: Use Array.include()


Nullish Coalescing & Optional Chaining are very useful in real world cases. 

For simple variables, Array.include() method can be very handy as shown below. 

```
var a;

console.log([null,undefined].include(a))

//true
```