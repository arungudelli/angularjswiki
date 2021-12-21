+++
title = "mat-table filter example: Search & Filter mat-table in Angular"
date = 2021-02-07T00:00:00
lastmod = 2021-02-07T01:00:00
draft = "true"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="mat-table selector in Angular used to display data in table format"
keywords=["mat-table,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table filter"
[menu.material]
  parent = "Tutorial"
  weight = 3
+++

In this tutorial we will learn how to **filter a mat-table in Angular**.

There is no built-in filter component is available in Angular Material table.

We can provide an input search box, and based on input value we can filter the mat-table rows. 

And there are multiple ways we can provide search and filter functionality in a table i.e., mat-table. 

1. Filter though drop down boxes.
2. Filter though select check box options etc. 

Depending upon your requirement you can use one of the above. 

`MatTableDataSource` contains a property called `filter`, If we assign search input value to that `filter` property, the table rows are automatically filtered. 

Let's go through an example to understand it further. 

{{%toc%}}

## Search and filter a mat-table in Angular

Steps to add filter to a mat-table in Angular 

### Step 1: Add a search input box

First we have to add search box above the `mat-table`. It's not necessary that we have to filter using `input` search box. 

Based upon our requirements we can add a drop down box or check boxes etc. 

We use the same mat-table example used in previous articles. 

```
<mat-form-field appearance="standard">
    <mat-label>Filter</mat-label>
    <input matInput placeholder="Search columns" #input>
</mat-form-field>

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
    <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef> {{column}} </th>
        <td mat-cell *matCellDef="let emp"> {{emp[column]}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let emprow; columns: displayedColumns;"></tr>

</table>
```
I am using `<mat-form-field>` and `matInput` so make sue you have added `MatInputModule` from the Angular material. 

### Step 2: Add filter function

On input `(keyup)` event we will track the user input and pass it to the component ts file.

I have added a function called `applyFilter()` in component ts file and passing that function to `(keyup)` event of input search box. 

```
<mat-form-field appearance="standard">
    <mat-label>Filter</mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="Search columns" #input>
</mat-form-field>
```
### Step 3: Apply filter on MatTableDataSource.

And in the next step we need to pass the search input value to the mat-table data source. 

```
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
```

All we have to do is update `mat-table` data source filter to the search input value. 

`mat-table` displays filtered out rows in UI, based upon our search input value.

## How mat-table data source filter works?

By default the filtering works on all columns in a table. 

When we pass filter string to `MatTableDataSource`, Internally mat-table data source uses a function which will  will concatenate all the column values and convert them to lowercase.

Consider a row in our employee table 

```
Id,FirstName,LastName,Email,Gender,JobTitle
1,Johannah,Kiffin,jkiffin0@google.pl,F,Administrative,Assistant I
```
The above row will be converted to the following string. 


```
"1JohannahKiffinjkiffin0@google.plFAdministrativeAssistant I" - Concatenate 
"1johannahkiffinjkiffin0@google.plfadministrativeassistant i" - and lowerCase.
```

And when we pass filter input to the data source, the data source checks whether the search string contains in the above concatenated string row or not. 

If it's not the row will be removed from the resulting rows. 

That's why in the above `applyFilter()` function, I have converted the input string to lowerCase.

```
this.dataSource.filter = filterValue.trim().toLowerCase();
```

The `trim()` removes white space from  the both sides of the search input.

This is the default behavior of built-in filter functionality in mat-table data source. 

To override this behavior we have to pass custom function to the `filterPredicate`.

`mat-table` filterPredicate is used to filter `mat-table` by particular columns.

## mat-table filter by particular column

For example if we want to filter the employee records by gender, we need to change the behavior default filtering mechanism using `MatTableDataSource` filter predicate. 

```
ngOnInit(): void {
    this.dataSource.filterPredicate = function (record,filter) {
      return record.Gender.toLocaleLowerCase() == filter.toLocaleLowerCase();
    }
}

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
```

On `ngOnInit()`, I am assigning the filterPredicate to check only gender column. 

If you type `M` or `F` the table will filter accordingly, If you enter any other text the filtering returns zero results as we have changed the default behavior. 

## How mat-table filterPredicate works? 

When we assign mat-table filterPredicate with new behavior, for each record the filter predicate function will be called and checks the required condition and returns true or false.

For example if we return `true` in filterPredicate function, all records will be displayed ir-respective of the filter value. 

```
ngOnInit(): void {
    this.dataSource.filterPredicate = function (record,filter) {
      return true;
    }
}
```

We can add complex conditions like filter by gender and position etc. 

And with the single input text box, we cannot filter by multiple columns so we need to provide drop down box to each and every column

## mat-table filter by multiple columns

