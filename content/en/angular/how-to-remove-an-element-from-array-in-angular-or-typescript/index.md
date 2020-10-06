+++
title = "How To Remove an element from Array in Angular/Typescript"
subtitle = "Removing an element from array in angular/Typescript"
type="post"
summary ="To remove an element from array in Angular or Typescript we can use javascript's delete operator or Array splice function"
keywords=["string to number in typescript,string to number angular"]
date="2020-10-05T01:01:05+0000"
lastmod="2020-10-05T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Removing an element from array in angular/Typescript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To remove an element from array in Angular or Typescript we can use javascript's delete operator or Array splice function.

{{% toc %}}

## Using delete

Using javascript delete operator we can remove an element from array in Angular or typescript as shown below.

```
var arrayElements = [1,2,3,4];

console.log(arrayElements);

//[1, 2, 3, 4] 

delete arrayElements[1];

console.log(arrayElements);

// [1, , 3, 4] 
```

If you see the above output delete operator removing an element from array at the index 1, instead of element 1.

That means we need to pass index of the element to the delete operator.

So first we need to find out the index of array element before using delete operator.

We will use simple for loop or foreach to find the index of element and then using delete removes array element.

```

var arrayElements = [1,2,3,4,2];

//[1, 2, 3, 4, 2]

//Removing the element 2
arrayElements.forEach((element,index)=>{
   if(element==2) delete arrayElements[index];
});

//[1, , 3, 4, ] 

```

But the disadvantage of this method is delete operator sets the array element to undefined.

## Using Array Splice function

In Angular or typescript, If you want to remove array element completely use Javascript Array splice function as shown below.

```
var arrayElements = [1,2,3,4,2];

console.log(arrayElements);

//[1, 2, 3, 4, 2] 

arrayElements.forEach((element,index)=>{
   if(element==2) arrayElements.splice(index,1);
});

console.log(arrayElements);

//[1, 3, 4]
```

If you see the above output, the element 2 is completely removed from the array.

Now we will write a function to remove an element from array.

```
var arrayElements = [1,2,3,4,5,6,2];

function RemoveElementFromArray(element: number) {
    this.arrayElements.forEach((value,index)=>{
        if(value==element) this.arrayElements.splice(index,1);
    });
}

console.log(arrayElements);
//[1, 2, 3, 4, 5, 6, 2] 

RemoveElementFromArray(2);
RemoveElementFromArray(1);
RemoveElementFromArray(3);
RemoveElementFromArray(4);
RemoveElementFromArray(5);
RemoveElementFromArray(6);

console.log(arrayElements);
//[]


```

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