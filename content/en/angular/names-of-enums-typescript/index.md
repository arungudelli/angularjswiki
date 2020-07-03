+++
title = "How To loop or get names & values of Enum in typescript"
subtitle = "Loop or Get names & values of enum in typescript"
type="post"
summary =""
keywords=["delete component in angular,ng delete component command"]
date="2020-07-02T01:01:05+0000"
lastmod="2020-07-02T04:44:37+0000"
draft=false
authors = ["admin"]

[image]

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To get the names and values of Enum object in typescript,we can loop through the enum using for loop.

{{%toc%}}

## Numeric enums

Take an example of an enum which represents different types of Log Entries.

```
enum LogEntry {
    ERROR, WARN, INFO, DEBUG
}
```
By default all enums in typescript are numeric enums similar to other programming languages. 

We will use for loop to enumerate LogEntry enum

```
for (var log in LogEntry) {
   console.log("Enum Entry: ", log);
}

//OutPut
Enum Entry:  0
Enum Entry:  1
Enum Entry:  2
Enum Entry:  3
Enum Entry:  ERROR
Enum Entry:  WARN
Enum Entry:  INFO
Enum Entry:  DEBUG
```

If you see the output it's displaying all names and values of the enum.

Why because enum is an object, and numeric enums in typescript will have key value pairs for both names and values and vice versa.

We will try to print Enum object using console.log.

```
console.log(LogEntry);
console.log(LogEntry[0]);
console.log(LogEntry["ERROR"]);
```

{{< figure src="Enum Object entries.png" title="Enum Object entries" alt="Enum Object entries">}} 

That's why if you loop through enum it will display both names and values.

So LogEntry[0] will have value "ERROR" and LogEntry["ERROR"] will have value 0.

Now if we want to get all names of Enum entries we can add a check for NaN (Not a number) values in the for loop.

```
var enumNames=[];
for (var log in LogEntry) {
    if (isNaN(Number(log))) {
       enumNames.push(log);
   }    
}
console.log(enumNames);

//Output
//["ERROR", "WARN", "INFO", "DEBUG"]
```

Now similar way we can get all values of Enum entries, by adding check for numeric values.

```
var enumValues=[];
for (var log in LogEntry) {
    if (!isNaN(Number(log))) {
       enumValues.push(log);
   }    
}
console.log(enumValues);

//Output
//["0", "1", "2", "3"]
```

The above array contains enum values as string type. We can easily convert string to number in typescript.

[Convert string to number in typescript](https://www.angularjswiki.com/angular/how-to-convert-a-string-to-number-in-angular-or-typescript/)

## String enums

In typescript we can have string enums as well.

```
enum Day {
    BeforeNoon = "AM",
    AfterNoon = "PM"
} 

```

In this case we can directly get names of enum by looping string enum object.

```
for (var time in Day) {
    console.log(time) 
}

//OutPut
BeforeNoon
AfterNoon
```

Why because string enums directly store key value pairs in enum object.

```
console.log(Day)
```

{{< figure src="String Enum Object entries.png" title="String Enum Object entries" alt="String Enum Object entries">}} 

To get the values of enum entries we can use name keys of enum object as shown below.

```
for (var time in Day) {
    console.log(Day.time); 
}

//OutPut
AM
PM

```

Or we can directly get names of enum object using `Object.keys()` method.

```
Console.log(Object.keys(Day));
//output
//["BeforeNoon", "AfterNoon"]

```


## Mixed or Heterogeneous enums

And in typescript, enums can be mixed with both string and numeric members, but the usage of this types of mixed enums are vary rare.

```
enum Decision {
    No = 0,
    Yes = "YES",
}
```

We try to log the enum object in console and see how its implemented.

```
for (var enumValue in Decision) {
    console.log(enumValue) 
}

console.log(Decision);

console.log(Object.keys(Decision));
```
{{< figure src="mixed enum object entries.png" title="mixed enum object entries" alt="mixed enum object entries">}} 

If you see the above output, for integer members both key value pairs has been stored in enum object and vice versa.

So we need to use foreach method with NaN check to get names of mixed enum object.

```
for (var enumValue in Decision) {
    if (isNaN(Number(enumValue))) {
        console.log(enumValue)
    }
}
//Output
NO
YES
```

Further we need to access above key names to get the values of mixed enum object.

```
for (var enumValue in Decision) {
    if (isNaN(Number(enumValue))) {
        console.log(Decision[enumValue])
    }
}

//Output
0 
YES
```