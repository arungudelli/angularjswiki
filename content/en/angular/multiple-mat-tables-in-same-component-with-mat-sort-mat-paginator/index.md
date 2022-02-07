+++
title = "Multiple mat-table in same component with matSort & mat-paginator in Angular"
subtitle = "Add multiple mat-table in same component"
type="post"
summary ="we can add multiple mat-table in a same component without any problems, but to add sorting and paginator to the mat-table we need to give unique matSort and mat-paginator template reference variables"
keywords=["multiple mat-table"]
date="2022-02-06T01:01:05+0000"
lastmod="2022-02-06T04:58:49+0000"
draft=false
authors = ["admin"]
[image]
  caption = "multiple mat-table"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Sometimes we need to display more than one mat-table in a same component in Angular.

That's not a problem, we can add multiple mat-table in a single component without any problems, but to add sorting and paginator to the mat-table we need to give unique matSort and mat-paginator template reference variables. 

Let's go through an example to understand it further. 

We will take the employee table example 

```
<table
  mat-table
  [dataSource]="dataSource"
  class="mat-elevation-z8"
  matSort
  #empTbSort="matSort"
>

</table>
```

First we should add `matSort` directive to the mat-table.

And then add a template reference variable to `matSort` directive. 

```
#empTbSort="matSort"
```

Now get `matSort` directive reference in the component ts file using `@ViewChild`

And assign it to mat-table data source.

```
@ViewChild('empTbSort') empTbSort = new MatSort();

ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
}

```

Similarly if we have multiple tables in the same component, we need to give unique template reference variable to each matSort directive. 

```
<table
  mat-table
  [dataSource]="dataSource"
  class="mat-elevation-z8"
  matSort
  #empTbSort="matSort"
>

</table>

<table
  mat-table
  [dataSource]="dataSourceWithObjectColumn"
  class="mat-elevation-z8"
  matSort
  #empTbSortWithObject="matSort"
>

</table>
```

And in the component ts file

```
@ViewChild('empTbSort') empTbSort = new MatSort();
@ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();

ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
}

```
That's it, the sorting work perfectly for each mat-table in the component.

Similarly we need to add mat-paginator as well. 

```
<table
  mat-table
  [dataSource]="dataSource"
  class="mat-elevation-z8"
  matSort
  #empTbSort="matSort"
>

</table>

<mat-paginator
  #paginatorFirst
  [pageSizeOptions]="[2, 4, 6]"
  showFirstLastButtons
></mat-paginator>

<table
  mat-table
  [dataSource]="dataSourceWithObjectColumn"
  class="mat-elevation-z8"
  matSort
  #empTbSortWithObject="matSort"
>

</table>

<mat-paginator
  #paginatorSecond
  [pageSizeOptions]="[2, 4, 6]"
  showFirstLastButtons
></mat-paginator>

```

And in component ts file assign mat-paginator to the mat-table data source as shown below.

```
@ViewChild('paginatorFirst') paginatorFirst: MatPaginator;
@ViewChild('paginatorSecond') paginatorSecond: MatPaginator;

ngAfterViewInit() {    
    this.dataSource.paginator = this.paginatorFirst;;
    this.dataSourceWithObjectColumn.paginator = this.paginatorSecond;;
}
```

## Multiple mat-tables in same component StackBlitz demo

Here is the link to StackBlitz Demo 

[https://multiple-mat-table-in-same-component-angular.stackblitz.io](https://stackblitz.com/edit/multiple-mat-table-in-same-component-angular)



