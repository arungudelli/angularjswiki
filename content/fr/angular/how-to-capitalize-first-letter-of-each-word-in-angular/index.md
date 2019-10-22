+++
title = "Angular TitleCase Pipe:Capitalize First Letter Of Each Word In Angular"
subtitle = "Angular Title Case Pipe"
type="post"
summary ="To capitalize first letter of each word in Angular use Angular&#039;s TitleCasePipe.We have to pass input to the titlecase pipe."
keywords=["capitalize first letter of each word in angular,angular titlecase pipe"]
date="2019-02-09T01:01:05+0000"
lastmod="2019-07-22T18:10:05+0000"
draft=true
authors = ["admin"]


[image]
  caption = "Angular TitleCase Pipe"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To capitalize first letter of each word in Angular use Angular's TitleCasePipe.We have to pass input to the titlecase pipe as shown below

```
<p>{{'titleCasePipe capitalizes first letter of each word in angular'
| titlecase}}</p>
<!-- Output -->
<!--TitleCasePipe Capitalizes First Letter Of Each Word In Angular-->
```

Angular TitleCasePipe is one of the built in pipes which converts text to titlecase.

{{% toc %}}

## Angular TitleCasePipe Syntax

The syntax is very simple Just we need to pass input of type string to titlecase pipe

<pre>{{ value_expression | titlecase }}</pre>

And words in a text determined based upon the white space delimiters such as space,tab or line-feed character.

## Angular TitleCasePipe Examples

We go through the different  Angular TitleCasePipe examples to understand it further.

We will create a component called titlecase component in our Angular project. And test the different kind of inputs

```
<p>{{'angular titlecase' | titlecase}}</p>
<!-- output is "Angular Titlecase" --> 
<p>{{'anGuLaR tITLEcASE' | titlecase}}</p> 
<!-- output is "Angular Titlecase" --> 
<p>{{'angular title-case' | titlecase}}</p>
<!-- output is "Angular Title-case" --> 
<p>{{'angular,titlecase' | titlecase}}</p>
<!-- output is "Angular,titlecase" -->
<p>{{'angular|titlecase' | titlecase}}</p>
<!-- output is "Angular|titlecase" -->
<p>{{'angular-titlecase' | titlecase}}</p>
<!-- output is "Angular-titlecase" -->
```

Even though if you pass mixed case text to Angular titlecase pipe, It will convert the first letter of each word to uppercase and remaining letters to lowercase.

And the delimiter should be whitespace only. Commas,Pipes,hyphens etc are not considered as delimiters.

That is why in above example 'angular-titlecase' is displayed as "Angular-titlecase" instead of "Angular-Titlecase"