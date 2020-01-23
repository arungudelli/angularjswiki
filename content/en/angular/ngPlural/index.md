+++
title = "ngPlural & ngPluralCase : Pluralize & format numbers in Angular"
subtitle = "ngPlural & ngPluralCase"
type="post"
summary ="Learn how to pluralize and format numbers in angular using ngPlural and ngPluralCase"
keywords=["ngPlural,ngPluralCase"]
date="2020-01-20T01:01:05+0000"
lastmod="2020-01-20T04:58:49+0000"
draft=true
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

## Pluralization in Angular

`NgPlural` and `NgPluralCase` directive adds/removes DOM elements based on a numeric values. 

For example, to show number of products in a shopping cart, bind host element to  `numberOfProducts` variable using `[ngPlural]`. 

And inside host element use `<ng-template>` along with `NgPluralCase` to display plural words.

1. If `[ngPluralCase]` is set to an expression (start with = or > or < etc.), it will only added to the DOM, if the value is equal to switch expression.
2. To display default values we can set the `[ngPluralCase]` to any CLDR plural form string, and will only display if exact value matches aren't found.

In the below example I am using `other` CLDR plural form.

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

Every language has it's own way of writing plurals for nouns or unit expressions (hour vs hours etc)

English language have two forms. Singular and Plural.

And few languages have only a single form.

Some languages have two forms, like English; some languages have only a single form; and some languages have multiple forms. CLDR uses short, mnemonic tags for these plural categories

1. zero
2. one (singular)
3. two (dual)
4. few (paucal)
5. many (also used for fractions if they have a separate class)
6. other (required—general plural form—also used if the language only has a single form)

## Error: No plural message found for value
