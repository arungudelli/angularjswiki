+++
title = "How to Iterate/loop map in TypeScript or Angular"
subtitle = "Loop TypeScript Map in Angular"
type="post"
summary ="In this tutorial, we learn how to iterate over a Map object in TypeScript or Angular"
keywords=["typescript map,loop map in TypeScript"]
date="2021-12-25T00:00:00+0000"
lastmod="2021-12-25T00:00:00+0000"
draft=false
authors = ["admin"]

[image]

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

In this tutorial, we learn how to iterate over a Map object in TypeScript or Angular.

Map() object is introduced in ES-6 or ECMA Script 6. 

So we can use it in TypeScript also. 

A TypeScript Map Object contains key value pairs.

TypeScript Map() can be very handy incase, if we want to use dictionary of objects in Angular applications.

The below Map object contains string keys and boolean values. 

```
var mapObject = new Map<string,boolean>();
```

We can add values to Map Object using set() method. 

```
mapObject.set("Angular",true);
mapObject.set("TypeScript",true);
mapObject.set("JavaScript",true);
mapObject.set("Java",true);
```

The most common use case is to loop through key values in Map. 

There are different ways we can iterate over typescript Map in our Angular applications.

1. Using built-in Map forEach function().
2. Using ES6 [key,value] syntax.
3. Using Map entries() method.
4. Using Array.from() Map entries.

{{%toc%}}

## Solution 1 : Use built-in Map forEach function().

Map() object contains a built-in forEach function to iterate over key values. 

```
mapObject.forEach(function(value,key){
    console.log(`Map key is:${key} and value is:${value}`);
});

[LOG]: "Map key is:Angular and value is:true" 
[LOG]: "Map key is:TypeScript and value is:true" 
[LOG]: "Map key is:JavaScript and value is:true" 
[LOG]: "Map key is:Java and value is:true" 

```

## Solution 2: Use ES6 [key,value] syntax

In ES6 we can loop through TypeScript map object using for loop and [key,value] syntax.

```
for(let [key,value] of mapObject){
    console.log(`Map key is:${key} and value is:${value}`);
}
```

## Solution 3: Using Map entries method

Map object contains a built-in method called `entries()` which returns an iterable of key, value pairs for every entry in the map. 

Further, we can use simple for loop to iterate over key values in Map.


```

for (let entry of mapObject.entries()) {
    let mapKey = entry[0];
    let mapValue = entry[1];
    console.log(`Map key is:${mapKey} and value is:${mapValue}`);
}


```

## Solution 4: Using Array.from() Map entries.

In older versions of TypeScript, we can use Array.from() method to convert map entries to Array.

```
for (let entry of Array.from(mapObject.entries())) {
    let mapKey = entry[0];
    let mapValue = entry[1];
    console.log(`Map key is:${mapKey} and value is:${mapValue}`);
}
```

In latest versions of Angular and TypeScript simply use built-in Map.forEach() function to loop over key values. 
