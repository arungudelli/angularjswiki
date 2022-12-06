+++
title = "Angular mat-table with sticky header (Fixed header) & scrollable body"
date = 2022-11-30T00:00:00
lastmod = 2022-11-30T00:00:00
draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-sort"
next = "mat-table-filter"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In Angular, To create a mat-table with fixed header and scrollable body, we have to add sticky input to the matHeaderRowDef"
keywords=["mat-table,mat-table sticky header"]

# Add menu entry to sidebar.
linktitle = "mat-table sticky header"
[menu.material]
  parent = "Tutorial"
  weight = 11
+++

In Angular, To create a `mat-table` with fixed header and scrollable body, we have to add `sticky` input to the `matHeaderRowDef`.

Let's go through an example to understand it further.

We will use the same `mat-table` used in the [previous](https://www.angularjswiki.com/material/mat-table/) articles.

{{%toc%}}

## mat-table with fixed header & scrollable body example

Follow the below steps to create `mat-table` with fixed header and scrollable body.

### Step 1: Add a parent container to the `mat-table`

Let's go through the employee table example.

```html
<h2>Angular mat-table with sticky header & scrollable body</h2>

<section class="table-container mat-elevation-z8" tabindex="0">

  <table mat-table [dataSource]="dataSource">
    <ng-container
      [matColumnDef]="column"
      *ngFor="let column of displayedColumns"
    >
      <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
      <td mat-cell *matCellDef="let emp">{{ emp[column] }}</td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
    <tr mat-row *matRowDef="let emprow; columns: displayedColumns"></tr>
  </table>

</section>
```

To create the table the fixed header and scrollable body, added a parent element to the `mat-table`.

```html
<section class="table-container mat-elevation-z8" tabindex="0">

</section>

```

### Step 2: Add `height` and `overflow` CSS properties to the parent container

I have given a class name i.e, `.table-container` to the parent element.

To make the header sticky we need to give fixed `height` and `overflow:auto` css properties to the parent element. 

```css
table {
  width: 100%;
}

.table-container {
  height: 300px;
  overflow: auto;
}
```

### Step 3: Add `sticky: true` input to `*matHeaderRowDef`

And finally we have to add `sticky:true` property to `*matHeaderRowDef` definition.

```html
<tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
<tr mat-row *matRowDef="let emprow; columns: displayedColumns"></tr>
```

## StackBlitz Demo

Here is the demo for the `mat-table` with fixed header & scrollable body example.

[https://stackblitz.com/edit/angular-mat-table-with-sticky-header-scrollable-body](https://stackblitz.com/edit/angular-mat-table-with-sticky-header-scrollable-body)








