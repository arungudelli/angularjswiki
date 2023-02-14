+++
title = "How to set Angular mat-table column width"
date = 2023-02-14T00:00:00
lastmod = 2023-02-14T01:00:00
draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-fixed-sticky-header"
next = "mat-table"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="Setting the Angular mat-table column width"
keywords=["mat-table,Angular Material Table"]

# Add menu entry to sidebar.
linktitle = "mat-table-column-width"
[menu.material]
  parent = "Tutorial"
  weight = 12
+++

Follow the below steps to set the width of Angular `mat-table` column.

1. Identify the `mat-table` column class name.
2. The table class name will be `mat-table` column field name prefixed with `mat-column`, so the class will be like `mat-column-fieldName`.
3. Finally, add the `width` and if required add `min-width`and `max-width` CSS properties to the column class names.

For example if the `mat-table` column field name is `email`, then angular will add a class named `mat-column-email` to the `email` columns i.e., `td` selectors.

Let's go through an example to understand it further. 

```ts
 displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];
```

For each and every `mat-table` column, the following CSS classes will be added.

```html
mat-column-id,
mat-column-firstname,
mat-column-lastname,
mat-column-email,
mat-column-gender,
mat-column-jobtitle,
mat-column-department,
```

{{< figure src="/img/material/mat-table-column-width.png" title="mat-table column width" alt="mat-table column width">}}

To Set the `email` column width as `200px`, add the CSS to the `mat-column-email` class.

```css
.mat-column-email{
width:200px;
}
```

If the column text is long, based on the biggest column text, the width will be calculated and applied accordingly. 

For example consider below example. 

```text
Name
-------------------
Arun|

Arun Kumar Gudelli|
```

The second row column text is longer than the first one and If the lengthy column text takes `100px` size, the size `100px` will be applied to all rows. That means minimum width will be applied. 

```text
Name
--------------------
Arun               | 100px
--------------------
Arun kumar Gudelli | 100px
--------------------
```

So if you set the width of the `mat-column` size as `50px` still it takes `100px` and our CSS won't have any effect on the UI. 

```css
.mat-column-name{
 width :50px;
}
```

So If you want set the exact width as `50px`, You need to add `max-width` as well. 

```css
.mat-column-name{
 width :50px;
 max-width:50px;
 word-wrap:break-word;
}
```

Further you need to add `word-wrap:break-word` CSS property so that the text will be wrapped to the next line setting `mat-table` column width as `50px`.

```text
Name
------------
Arun       | 50px
------------
Arun kumar |
Gudelli    | 50px
------------
```

Similarly If you want to set minimum width to `mat-table` column use `min-width` CSS property.

```css
.mat-column-name{
 width :75px;
 min-width:50px;
}
```


## `mat-table` column width example StackBlitz Demo

Here is the demo for `mat-table` column width example[https://stackblitz.com/edit/mat-table-column-width](https://stackblitz.com/edit/mat-table-column-width)








