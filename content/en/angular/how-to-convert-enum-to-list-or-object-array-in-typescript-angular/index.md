+++
title = "How To Convert Enum to list or object array in Typescript/Angular"
subtitle = "Converting Enum to list or object array in Typescript/Angular"
type="post"
summary ="To convert string to number in angular or typescript follow the below steps 1.Check if a string is number or not using Number() function.2.If the string is number then convert Number() returns the numeric value or `NaN` (Not a Number)"
keywords=["string to number in typescript,string to number angular"]
date="2022-03-16T00:00:00+0000"
lastmod="2022-03-16T00:00:00+0001"
draft=true
authors = ["admin"]

[image]
  caption = "Converting string to number in angular/Typescript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To convert string to number in angular or typescript follow the below steps. 

1. Check if a string is number or not using `Number()` function.
2. If the string is number then convert Number() returns the numeric value or `NaN` (Not a Number).

We will take a sample typescript string and convert it to number.

```
var stringToConvert = "759";
var numberValue = Number(stringToConvert);
console.log(numberValue);
//Returns 759

var stringToConvert = "A123";
var numberValue = Number(stringToConvert);
console.log(numberValue);
//Returns NaN

```

It's better to check if the string is NaN before converting it to a number.

We will use `isNaN()` typescript function to check if a string is `NaN`.

```
var stringToConvert = "A123";

if(!isNaN(Number(stringToConvert))){
  var numberValue = Number(stringToConvert);
} else{
    console.log('Not a Number');
}

```

Now we will write a function to convert string to number in our angular project.

```
function ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
}

ConvertStringToNumber('124'); //124
ConvertStringToNumber('080909'); //80909
ConvertStringToNumber('A345');//NaN
ConvertStringToNumber('-1908');//-1908
ConvertStringToNumber('');//0
ConvertStringToNumber('   ');//0
```

Typescript's Number() method returns `0`,if the string is empty or contain whitespces.

To handle this scenario we will first check if the string is empty or not

```
function ConvertStringToNumber(input: string) { 
    if (input.trim().length==0) { 
        return NaN;
    }
    return Number(input);
}
```

Now the above method return `NaN` incase if the string is empty or contain white spaces.

Instead of using Number() function we can use unary plus operator to convert string to number.

```
+'1278'; //1278
+'asfa34'; //NaN
```

If typescript compiler `--stringNullCheck` option is disabled we can assign null values to strings. In that case Number(null) returns `0`.

To handle this case we will add a null check condition for our above ConvertToNumber() method

```
function ConvertStringToNumber(input: string) { 
    
    if (!input) return NaN;

    if (input.trim().length==0) { 
        return NaN;
    }
    return Number(input);
}

```