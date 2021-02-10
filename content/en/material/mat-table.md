+++
title = "Creating a Simple table in Angular using mat-table"
date = 2021-02-07T00:00:00
lastmod = 2021-02-07T01:00:00

draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "table"
next = "mat-table-pagination"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="mat-table selector in Angular used to display data in table format"
keywords=["mat-table,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table"
[menu.material]
  parent = "Tutorial"
  weight = 3
+++

**`mat-table`** selector in Angular used to display the data in table format.

It's part of Angular material module called `MatTableModule`.


{{%toc%}}

## Angular Material Table example

First we will create a table component to display list of employees in our Angular project.

```
ng generate component simple-table

//OUTPUT
CREATE src/app/simple-table/simple-table.component.html (27 bytes)
CREATE src/app/simple-table/simple-table.component.spec.ts (664 bytes)
CREATE src/app/simple-table/simple-table.component.ts (299 bytes)
CREATE src/app/simple-table/simple-table.component.scss (0 bytes)
UPDATE src/app/app.module.ts (4096 bytes)
```

Now follow the below steps to add a simple table in Angular using material design.

### Step 1: Import MatTableModule

We can add material table module in our component ts file or app.module.ts file or some common material module which can be used across the application as explained in this [tutorial](https://www.angularjswiki.com/material/#adding-a-custom-angular-material-module).

```
import {MatTableModule} from '@angular/material/table'
```

### Step 2: Creating Data source for the table

I have created an interface for the Employee object and added some dummy data to display in the component HTML file.

```
export interface Employee {
  Id : number,	
  FirstName:string,	
  LastName:string,	
  Email:string,
  Gender:string,	
  JobTitle:string
}

EmpData : Employee[] =[{
    "Id": 1,
    "FirstName": "Johannah",
    "LastName": "Kiffin",
    "Email": "jkiffin0@google.pl",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I"
  }, {
    "Id": 2,
    "FirstName": "Eldin",
    "LastName": "Astbery",
    "Email": "eastbery1@geocities.jp",
    "Gender": "M",
    "JobTitle": "Senior Editor"
  }, {
    "Id": 3,
    "FirstName": "Nahum",
    "LastName": "Mounce",
    "Email": "nmounce2@vk.com",
    "Gender": "M",
    "JobTitle": "Programmer II"
  }, {
    "Id": 4,
    "FirstName": "Gallard",
    "LastName": "Standell",
    "Email": "gstandell3@europa.eu",
    "Gender": "M",
    "JobTitle": "Account Representative II"
  }, {
    "Id": 5,
    "FirstName": "Koenraad",
    "LastName": "Domleo",
    "Email": "kdomleo4@cornell.edu",
    "Gender": "M",
    "JobTitle": "Quality Control Specialist"
  }, {
    "Id": 6,
    "FirstName": "Uriah",
    "LastName": "Turbat",
    "Email": "uturbat5@aol.com",
    "Gender": "M",
    "JobTitle": "Accounting Assistant II"
  }, {
    "Id": 7,
    "FirstName": "Waldemar",
    "LastName": "Fowley",
    "Email": "wfowley6@sun.com",
    "Gender": "M",
    "JobTitle": "Account Coordinator"
  }, {
    "Id": 8,
    "FirstName": "Rodolfo",
    "LastName": "Trenchard",
    "Email": "rtrenchard7@yandex.ru",
    "Gender": "M",
    "JobTitle": "Data Coordiator"
  }, {
    "Id": 9,
    "FirstName": "Konstance",
    "LastName": "Dudek",
    "Email": "kdudek8@techcrunch.com",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I"
  }, {
    "Id": 10,
    "FirstName": "Monti",
    "LastName": "Perton",
    "Email": "mperton9@youtube.com",
    "Gender": "M",
    "JobTitle": "Operator"
  }];

```

Now data is ready. All we have to do is binding the data to the HTML file.

### Step 3: Bind the data source to the mat-table.

First we need to decorate the `<table>` tag with `mat-table` attribute.

```
<table mat-table>
  ...
</table>
```

Use the `[dataSource]` input to bind the data to the material table.

```
<table mat-table [dataSource]="EmpData">
  ...
</table>
```

### Step 4: Add the column templates

We need to define the column templates for the given table.

A column template should have 

1. Unique name
2. Header name
3. Column data

```
<ng-container matColumnDef="Id">
  <th mat-header-cell *matHeaderCellDef> Id </th>
  <td mat-cell *matCellDef="let emp"> {{emp.Id}} </td>
</ng-container>
```

`matColumnDef` is used to define the column name and it should be unique.

`matHeaderCellDef` defines the corresponding header name for the column.

It's not necessary that object property should be equal to the column header. 

In the above example we can display the Id column with header `Emp Id` instead of `Id`.

```
<ng-container matColumnDef="Id">
  <th mat-header-cell *matHeaderCellDef> Emp Id </th>
  <td mat-cell *matCellDef="let emp"> {{emp.Id}} </td>
</ng-container>
```

`matCellDef` represent the row data for the given column name.

Our employee object contains 6 properties, for each property we need to create the corresponding column templates.

### Step 4: Displaying the data using row templates

Till now we have declared only column templates.

Nothing will be displayed in the UI.

A table should contain the header and body. 

First we will display the table header using `matHeaderRowDef`. 

It will accepts the array of column id's. 

For example to display Employee Id column, use the below code snippet.

```
<tr mat-header-row *matHeaderRowDef="['Id']"></tr>
```

Now only `Id` column header will be displayed.

Instead of giving coulmn id's in the component html file, I have declared an array variable called `displayedColumns`, which contains the list of column id's.

```
displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];
```
Now we can pass the variable to `matHeaderRowDef` input.

```
<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
```
{{< figure src="/img/material/mat-table-header.png" title="mat table header" alt="mat table header">}}


Now to display the row data use the below code snippet.

```
<tr mat-row *matRowDef="let emprow; columns: displayedColumns;"></tr>
```

`matRowDef` exports current row data context, which can be used for event and property bindings on the table row element.(let emprow).

And also we need to pass list of displayed columns using `columns` input.

{{< figure src="/img/material/mat-table-example.png" title="mat table example" alt="mat table example">}}


Any content placed inside header row template or data row templates will be ignored.

The content of the row data comes from the cell templates defined above.

```
<tr mat-row *matRowDef="let emprow; columns: displayedColumns;"> {{emprow.Id}}</tr>
// No impact on the UI
```

## Add the column templates using *ngFor

In the above example instead of defining column templates individually, we can make use of `displayedcolumns` variable and *ngFor to create column templates.

```
<ng-container matColumnDef="Id">
      <th mat-header-cell *matHeaderCellDef>Emp Id </th>
      <td mat-cell *matCellDef="let emp"> {{emp.Id}} </td>
    </ng-container>
  
<ng-container matColumnDef="FirstName">
      <th mat-header-cell *matHeaderCellDef> FirstName </th>
      <td mat-cell *matCellDef="let emp"> {{emp.FirstName}} </td>
</ng-container>
----

----
 <ng-container matColumnDef="JobTitle">
        <th mat-header-cell *matHeaderCellDef> JobTitle </th>
        <td mat-cell *matCellDef="let emp"> {{emp.JobTitle}} </td>
</ng-container>
```

The above code can be replaced with single *ngFor statement.

```
<ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef> {{column}} </th>
        <td mat-cell *matCellDef="let emp"> {{emp[column]}} </td>
</ng-container>
```





