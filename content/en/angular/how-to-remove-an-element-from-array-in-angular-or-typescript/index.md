+++
title = "How To Remove an element from Array in Angular/Typescript"
subtitle = "Removing an element from array in angular/Typescript"
type="post"
summary ="To remove an element from array in Angular or Typescript we can use javascript's delete operator or Array splice function"
keywords=["remove element from array angular,remove element from array typescript"]
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

To remove an element from an array in Angular or Typescript we can use javascript's delete operator or Array splice function.

{{% toc %}}

## Using delete Operator

Using javascript delete operator we can remove an element from array in Angular or typescript as shown below.

```
var arrayElements = [1,2,3,4];

console.log(arrayElements);

//[1, 2, 3, 4] 

delete arrayElements[1];

console.log(arrayElements);

// [1, , 3, 4] 
```

If you see the above output delete operator removing an element from array at the position 1, instead of element 1.

That means we need to pass index of the element to the delete operator.

So first we need to find out the index of array element before using delete operator.

We will use simple for loop or foreach to find the index of element and then using delete operator remove the array element.

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

So it's better to use array slice function.

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

Now we will write a function to remove an element from an array.

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

Similarly If we have a string array, we can follow the same approach as above to remove the string element from an array.

```
var stringArray = ["a","b","c","d","e","a","f"];

console.log(stringArray);
["a", "b", "c", "d", "e", "a", "f"] 

function RemoveElementFromStringArray(element: string) {
    stringArray.forEach((value,index)=>{
        if(value==element) stringArray.splice(index,1);
    });
}

RemoveElementFromStringArray("a");
RemoveElementFromStringArray("b");
RemoveElementFromStringArray("c");
RemoveElementFromStringArray("d");
RemoveElementFromStringArray("e");
RemoveElementFromStringArray("f");

["a", "b", "c", "d", "e", "a", "f"] 
["b", "c", "d", "e", "f"] 
["c", "d", "e", "f"] 
["d", "e", "f"] 
["e", "f"] 
["f"]  
[] 

```

## Remove an element from an object array

In Angular and typescript we will be working with complex real time time objects and it's pretty much common that some times we might need to remove an element from the object array.

So we will follow the same approach as above we have used for numbers and strings to remove the element from object array in Angular or typescript.

Let's take an example to understand it further.

```
export class RemoveArrayElementExample implements OnInit {

objectArray : Book[];

constructor() { 
  this.objectArray = [
        {id:1,name:"Angular"},
        {id:2,name:"Typescript"},
        {id:3,name:"Javascript"},
        {id:4,name:"HTML"},
        {id:5,name:"Java"},
        {id:6,name:"dotnet"}

  ];
}

}

interface Book{
  id: number;
  name : string;
}
```

I have created a interface called Book. 

And added an array of books in our Angular component file.

We will write a function to remove an element from object array by using the unique id i.e., book id.

```
function RemoveElementFromObjectArray(key: number) {
    objectArray.forEach((value,index)=>{
        if(value.id==key) objectArray.splice(index,1);
    });
} 


RemoveElementFromObjectArray(6);
RemoveElementFromObjectArray(5);
RemoveElementFromObjectArray(4);
RemoveElementFromObjectArray(3);
RemoveElementFromObjectArray(2);
RemoveElementFromObjectArray(1);

[{ "id": 1, "name": "Angular" }, 
{ "id": 2, "name": "Typescript" }, 
{ "id": 3, "name": "Javascript" }, 
{ "id": 4, "name": "HTML" }, 
{ "id": 5, "name": "Java" }] 

[LOG]: 
[{ "id": 1, "name": "Angular" }, 
{ "id": 2, "name": "Typescript" }, 
{ "id": 3, "name": "Javascript" },
 { "id": 4, "name": "HTML" }] 

[LOG]: 
[{ "id": 1, "name": "Angular" }, 
{ "id": 2, "name": "Typescript" },
 { "id": 3, "name": "Javascript" }]

[LOG]: [{ "id": 1, "name": "Angular" }, 
{ "id": 2, "name": "Typescript" }] 

[LOG]: [{ "id": 1, "name": "Angular" }] 

[] 


```

As we are using Foreach loop, the above methods will remove all elements from the array which satisfies the given conditions.
