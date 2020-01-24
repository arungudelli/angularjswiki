+++
title = "ngPlural & ngPluralCase : Pluralization in Angular"
subtitle = "ngPlural & ngPluralCase"
type="post"
summary ="Learn how to pluralize and format numbers in angular using ngPlural and ngPluralCase"
keywords=["ngPlural,ngPluralCase"]
date="2020-01-20T01:01:05+0000"
lastmod="2020-01-20T04:58:49+0000"
draft=false
authors = ["admin"]
[image]
  caption = "ngPlural & ngPluralCase"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Pluralization is very tricky. Converting singluar words to plural is often difficult Even in english where most plural words end with an (s).

For example to display number of comments or likes in facebook we can add an (s) to the end of comment or like words as shown below.

```
0 comment(s)
10 comments(s)
```
And some websites follow the above approach to display plural words. So it's upto the user to add (s) when reading it.

But what we can do in case of words like "foot" or "inch" or "quiz"?

So to handle such cases in Angular we can use `ngPlural` and `ngPluralCase` directives.

{{% toc %}}

## Angular ngPlural example

`NgPlural` and `NgPluralCase` directive adds/removes DOM elements based on a numeric values. 

For example, to show number of products in a shopping cart, bind host element to  `numberOfProducts` variable using `[ngPlural]`. 

And inside host element use `<ng-template>` along with `NgPluralCase` to display plural words.

1. If `[ngPluralCase]` is set to an expression (start with = or > or < etc.), it will only added to the DOM, if the value is equal to switch expression.
2. To display default values we can set the `[ngPluralCase]` to CLDR plural form string "other".

```
<p [ngPlural]="numberOfProducts">
  <ng-template ngPluralCase="=0">
     No products in cart
  </ng-template>
  <ng-template ngPluralCase="=1">
    {{numberOfProducts}} product in cart
  </ng-template>
  <ng-template ngPluralCase="other">
    {{ numberOfProducts }} products in cart
  </ng-template>
</p>
```

## List of allowed values in ngPluralCase

We can pass exact numeric value to ngPluralCase to display template.

```
<p [ngPlural]="numberOfProducts">
  <ng-template ngPluralCase="0">
     No products in cart
  </ng-template>
  <ng-template ngPluralCase="1">
    {{numberOfProducts}} product in cart
  </ng-template>
  <ng-template ngPluralCase="other">
    {{ numberOfProducts }} products in cart
  </ng-template>
</p>
```

we can pass expression to `ngPluralCase` as explained above.

```
<p [ngPlural]="numberOfProducts">
  <ng-template ngPluralCase="=0">
     No products in cart
  </ng-template>
  <ng-template ngPluralCase="=1">
    {{numberOfProducts}} product in cart
  </ng-template>
  <ng-template ngPluralCase=">1">
    {{ numberOfProducts }} products in cart
  </ng-template>
</p>
```

Or we can pass Common Locale Data Repository (CLDR) defined category matches. 

Every language has it's own way of writing plurals for nouns or unit expressions (hour vs hours etc)

English language have two forms. Singular and Plural. So `ngPluralCase` supports only two plural forms `one` and `other` as the default application locale value is `en-Us`.

```
<p [ngPlural]="numberOfProducts">
  <ng-template ngPluralCase="one">
     One product added to the cart
  </ng-template>
  <ng-template ngPluralCase="other">
    {{numberOfProducts}} products added to the cart
  </ng-template>
</p>
```

And few languages have only a single form.

Some languages like Arabic have multiple forms as listed below  

<div class="table-responsive">
<table class="table">
<tr>
<th>NgPlural Category</th>
<th>Rule</th>
</tr>
<tr>
 <td>zero</td>
 <td>value=0</td></tr>
<tr>
 <td>one</td>
 <td>value=1</td>
</tr>
<tr>
 <td>two</td>
 <td>value=2</td>
</tr>
<tr>
 <td>few</td>
 <td>value % 100 = 3..10 ( For Arabic lang)</td>
 </tr>
<tr>
 <td>many</td>
 <td>value % 100 = 11..99 (For Arabic lang)</td>
</tr>
<tr>
 <td>other</td>
 <td>to display default template</td>
</tr>
</table>
</div>

To test above mentioned category matches I changed my application locale to Arabic.

```
 <p [ngPlural]="numberOfProducts">
    <ng-template ngPluralCase="zero">
       No products in cart
    </ng-template>
    <ng-template ngPluralCase="one">
      one product in cart
    </ng-template>
    <ng-template ngPluralCase="two">
      two products in cart
    </ng-template>
    <ng-template ngPluralCase="few">
      There are few products in cart value % 100 = 3..10
    </ng-template>
    <ng-template ngPluralCase="many">
      There are many products in cart value % 100 = 11..99
    </ng-template>
    <ng-template ngPluralCase="other">
      {{ numberOfProducts }} products in cart
    </ng-template>
 </p>

//numberofproducts=0
 No products in cart

//numberofproducts=1
 one product in cart

//numberofproducts=2
 two products in cart

//numberofproducts=3
There are few products in cart value % 100 = 3..11

//numberofproducts=12
There are many products in cart value % 100 = 11..99

//numberofproducts=100
100 products in cart
```

## Error: No plural message found for value - ngPlural

If none of the ngpluralcase templates are matching with the given value. Then you will get the below error

{{% alert warning%}}
Error: No plural message found for value
{{% /alert %}}

```
<p [ngPlural]="numberOfProducts">
  <ng-template ngPluralCase="=0">
     No products in cart
  </ng-template>
  <ng-template ngPluralCase="=1">
    {{numberOfProducts}} product in cart
  </ng-template>
  <ng-template ngPluralCase=">12">
    {{ numberOfProducts }} products in cart
  </ng-template>
</p>
```

If the number of products is 10 then the above code throws following error

```
ERROR Error: No plural message found for value "10"
    at getPluralCategory (common.js:4891)
    at NgPlural._updateView (common.js:6323)
    at NgPlural.set ngPlural [as ngPlural] (common.js:6306)
    at setInputsForProperty (core.js:15694)
    at elementPropertyInternal (core.js:14553)
    at Module.ɵɵproperty (core.js:24661)
    at NgswitchcaseComponent_Template (ngswitchcase.component.html:22)
    at executeTemplate (core.js:14100)
    at refreshView (core.js:13953)
    at refreshComponent (core.js:15332)
```

So it's better to declare ngPluralCase `other` template to avoid such errors.
