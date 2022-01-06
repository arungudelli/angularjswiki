+++
title = "Angular mat-table sort example: Adding sorting to the material table"
date = 2021-02-07T00:00:00
lastmod = 2021-02-07T01:00:00
draft = "false"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-filter"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to filter a mat-table in Angular."
keywords=["mat-table,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table sort"
[menu.material]
  parent = "Tutorial"
  weight = 4
+++

In this tutorial we will learn how to **sort a mat-table in Angular**.

With the help of `MatSortModule` we can add sorting to mat-table in Angular.

`MatSortModule` is separate component in Angular material and we have to import it from `@angular/material/sort`. 

```
import {MatSortModule} from '@angular/material/sort';
```

As it's an individual component, we can use it to sort simple tables as well.

Let's go through an example to understand it further.

## mat-table sort example 

Let's take an example of employee table which uses `MatTableDataSource` to display the data in table.

Steps to add sorting to the mat-table.

### Step 1: Import MatSortModule

To add sorting to the material table we have to import `MatSortModule` from Angular material. 

Add it in common material module.

```
import {MatSortModule} from '@angular/material/sort';
```

### Step 2: Import MatSort and sort in the component.

And in the mat-table component ts file, import MatSort,sort from `@angular/material/sort`.

```
import {MatSort, Sort} from '@angular/material/sort';
```

### Step 3: Add matSort directive to the table

Now to the mat-table add `matSort` directive, so that we can refer it in component ts file using `@ViewChild`.

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort>
</table>
```

But as a good practice, add a template reference variable to `matSort` directive.

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort #empTbSort="matSort">
</table>
```
This is very useful when we have multiple tables in the same component. 

And for each table we have to give unique `matSort` directive name. 

### Step 4: Add mat-sort-header directive to the required column headers

If you want to add sorting to the all columns in the mat-table, add mat-sort-header directive to every column in the table.

```
 <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </th>
        <td mat-cell *matCellDef="let emp"> {{emp[column]}} </td>
  </ng-container>
```

I am using *ngFor to display columns in the table and added `mat-sort-header` to the `<th>`.

This will add sorting to every column. 

Instead of that if we want to add sorting to particular columns, the above syntax may not work. We have to add columns individually.

```
<ng-container matColumnDef="id">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> id </th>
  <td mat-cell *matCellDef="let emp"> {{emp.id}} </td>
</ng-container>
---
--
<ng-container matColumnDef="gender">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> gender </th>
  <td mat-cell *matCellDef="let emp"> {{emp.gender}} </td>
</ng-container>

```

The above code adds sorting to particular columns i.e., two columns id and gender.

### Step 5: Assign MatSort to the mat-table data source. 

As we have added template reference variable to the MatSort directive. 

Now to refer it in the component ts file using `@ViewChild` 

```
@ViewChild('empTbSort') empTbSort = new MatSort();
```

And finally, assign the MatSort directive to mat-table data source sort property in the `ngAfterViewInit()` method.  

```
ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
}
```





## mat-table filter StackBlitz Demo and GitHub code links

Here is the demo for mat-table filter [https://angular-mat-table-filter-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-filter-example)

Github Code : [https://github.com/arungudelli/mat-table-filter](https://github.com/arungudelli/mat-table-filter)



