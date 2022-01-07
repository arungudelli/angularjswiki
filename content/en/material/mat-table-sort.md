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
summary ="In this tutorial we will learn how to sort a mat-table in Angular."
keywords=["mat-table sort,Angular Material Table"]


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

{{%toc%}}

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

## How Mat-table sort works?

`MatTableDataSource` sorts the data by matching the column name(matColumnDef) with the table record property name. 

```
displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','gender','jobtitle','department'];

export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string,	
  jobtitle:string,
  department:string
}
```

The property name should match with the matColumnDef, otherwise the table column will not sort. 

If you want to override this behavior you can use `sortingDataAccessor` of mat-table data source. 

An employee project will have an id and name, and we can assign a project to the employee.  

```
export interface Project{
  name:string,
  id:number
}

export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string,	
  jobtitle:string,
  department:string,
  project: Project
}

```

But in the mat-table we want to display only project name. So we have to access `emp.project.name` property.

I have changed the mat-table displayed columns to show the project name as shown below.

```
  displayedColumnsWithObject: string[] = ['id', 'firstname', 'lastname', 'email','gender','jobtitle','department','project.name'];

```

And in the component html file displaying project name based on the `matColumnDef` as shown below. 

```
<table mat-table [dataSource]="dataSourceWithObjectColumn" class="mat-elevation-z8" matSort #empTbSortWithObject="matSort">
    <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumnsWithObject">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </th>
        
        <ng-container *ngIf="column=='project.name'">
          <td mat-cell *matCellDef="let emp"> {{emp.project.name}} </td>
        </ng-container>
        
        <ng-container *ngIf="column!='project.name'">
          <td mat-cell *matCellDef="let emp"> {{emp[column]}} </td>
        </ng-container>
        
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumnsWithObject"></tr>
    <tr mat-row *matRowDef="let emprow; columns: displayedColumnsWithObject;"></tr>

</table>
```

And also added unique template reference variable(empTbSortWithObject) to matSort directive. 

And also changed mat-table data source which has project details.

```
@ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();

ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
}
```

But the sorting based on project name will not work as we have to use a child property name i.e., project.name for sorting. 

To achieve this we can pass a custom function to Mat-table data source's `sortingDataAccessor` function.

## Working with sortingDataAccessor in mat-table data source.

The sortingDataAccessor function takes two arguments mat-table record and column name and returns string. 

```
ngAfterViewInit() {
    
    this.dataSource.sort = this.empTbSort;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    
    this.dataSourceWithObjectColumn.sortingDataAccessor = (row:Employee,columnName:string) : string => {
    
      console.log(row,columnName);
      if(columnName=="project.name") return row.project.name;
      var columnValue = row[columnName as keyof Employee] as string;
      return columnValue;
    
    }
  }

```

Let's deep dive into the above sortingDataAccessor function. 

The function checks if the columnName is "project.name", if it's true then returns `row.project.name`. 

Otherwise it directly access the employee name properties with index notation and returns the column values.


## mat-table sort states. 

By default mat-table columns will have three states. 

1. ascending 
2. descending 
3. clear 

When we click on column header either it will sort the column in ascending order or descending order. 

On third click it will clear the sorting and the table will be in the initial state. 


## mat-table disable clear sorting. 

Sometimes the third state(clear) will be confusing as users will assume either the column will be in ascending or descending order. 

To disable this behavior we have to set `disableClear` property of matSort to true.

```
this.empTbSort.disableClear = true;
```

And after that we have to assign it to the mat-table data source sort property. 

```
 ngAfterViewInit() {
    
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;

    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.sortingDataAccessor = (row:Employee,columnName:string) : string => {
      console.log(row,columnName);
      if(columnName=="project.name") return row.project.name;
      var columnValue = row[columnName as keyof Employee] as string;
      return columnValue;
    }
  }
```


## mat-table sort StackBlitz Demo and GitHub code links

Here is the demo for mat-table filter [https://angular-mat-table-sort-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-sort-example)

Github Code : [https://github.com/arungudelli/mat-table-sort](https://github.com/arungudelli/mat-table-sort)



