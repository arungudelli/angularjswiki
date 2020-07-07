+++
title = "How To Convert a string to Enum in Typescript/Angular"
subtitle = "Converting a string to Enum in Typescript/Angular"
type="post"
summary ="To convert string to Enum in Typescript or angular follow the below steps. 1.Pass the given string to Enum object as a key. 2.If the string is part of the enum name entry the value will be returned. 3.And then cast it to the enum object to get enum type of string."
keywords=["convert string to enum typescript,typescript string enum,convert string to enum angular"]
date="2020-07-06T01:01:05+0000"
lastmod="2020-07-06T04:44:37+0000"
draft=false
authors = ["admin"]

[image]

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To convert a string to Enum in Typescript or angular follow the below steps. 

1. Pass the given string to Enum object as a key. 
2. If the string is part of the enum name entry the value will be returned.
3. And then cast it to the enum object to get enum type of string.

Now we will go through an example to understand it further.

I have a created enum object of type `Day`, which represents time of Day and a method `returnDayOfTime()`. 

```
enum Day {
    BeforeNoon = "AM",
    AfterNoon = "PM"
} 

function returnDayOfTime(day : Day){
    console.log(day);
}

```
I have a string variable which has value `BeforeNoon`.

```
var beforeNoon : string = "BeforeNoon";
```

We will get the enum value by passing the above string to enum object. (Here I am passing Actual Value) 

```
var enumValue = Day["BeforeNoon"];
```

If the string key does not exists in enum object it will give `Property does not exist on type ` error.

```
var enumValue = Day["BeforeNoon1"];

Property 'BeforeNoon1' does not exist on 
type 'typeof Day'. Did you mean 'BeforeNoon'
```

{{%alert note%}}
To understand enum key value pairs please go through the below article.

[Enum key value Pairs](https://www.angularjswiki.com/angular/names-of-enums-typescript/)

{{%/alert%}}

What if I pass variable instead of actual string.

```
var enumValue = Day[beforeNoon];

Element implicitly has an 'any' type 
because expression of type 'string' can't be used
to index type 'typeof Day'.
```

To avoid this error we need to cast it to enum object as shown below.

```
var enumValue = (<any>Day)[beforeNoon];

or 

var enumValue : Day = (<any>Day)[beforeNoon];

```

Now we can pass the above converted enum from string to our method i.e., `returnDayOfTime` which accepts enum object as parameter.

```
returnDayOfTime(enumValue);

//AM
```

If the string is not part of enum name entry then enumValue will be undefined.

```
var enumString = "day";
var enumValue : Day = (<any>Day)[enumString];
//undefined

```