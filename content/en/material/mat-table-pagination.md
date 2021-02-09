+++
title = "Adding pagination to the mat-table using mat-paginator in Angular Material"
date = 2021-02-07T00:00:00
lastmod = 2021-02-07T01:00:00

draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="mat-table selector in Angular used to display data in table format"
keywords=["mat-table,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table pagination"
[menu.material]
  parent = "Tutorial"
  weight = 3
+++

It's very difficult to see the entire table data, when we have large number of records in the table.

In such cases we use a simple navigation method called `Pagination`.

Pagination is nothing but dividing the large number of records in a tables into smaller parts or pages.

**To add pagination to the Angular material table i.e., `mat-table` we can use `mat-paginator` component.**

`mat-paginator` selector is part of Angular material module called `MatPaginator`.

{{%toc%}}

Let's take an example of Employee table as explained in the [previous article](https://www.angularjswiki.com/material/mat-table/).

## Pagination in mat-table

Here are the steps to add pagination to the mat-table.

### Step 1 : Import MatPaginator in component ts file

First we need to add the reference to the MatPaginator module in our table component ts file.

```
import { MatPaginator } from '@angular/material/paginator';
```

Add the `mat-paginator` selector in component html file under the `mat-table` element.

```
<table mat-table [dataSource]="EmpData"></table>
<mat-paginator #paginator [pageSizeOptions]="[2, 4, 6]" 
showFirstLastButtons></mat-paginator>
```
I have added template reference variable ('#paginator') to the `mat-paginator` element. 

And use `@ViewChild` decorator to access template reference variable inside the component.

```
@ViewChild('paginator') paginator: MatPaginator;

```

### Step 2: Use MatTableDataSource for mat-table data

In the previous example we have used a simple Employee array to bind the data to the `mat-table` element.

Instead of that we can use `MatTableDataSource` class which has built in support for filtering, sorting (using MatSort), and pagination (using MatPaginator).

```
EmpData : Employee[] =[{
    "Id": 1,
    "FirstName": "Johannah",
    "LastName": "Kiffin",
    "Email": "jkiffin0@google.pl",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I"
  },{},{}];

dataSource: MatTableDataSource<Employee>;

ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.EmpData);
}

In component HTML file 

<table mat-table [dataSource]="dataSource"></table>

```

### Step 3: Assign Paginator property of MatTableDataSource

`MatTableDataSource` has a built in property called `paginator`.

We have to assign this property to the `MatPagintor` instance created in Step 1.

```
ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSource.paginator = this.paginator;
}
```
{{< figure src="/img/material/mat-paginator.png" title="mat-paginator" alt="mat paginator">}}


That's it Pagination will be visible under the table as shown below.

{{< figure src="/img/material/mat-table-pagination-example.png" title="mat table pagination example" alt="mat table pagination example">}}




