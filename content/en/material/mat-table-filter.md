+++
title = "mat-table filter example: Search & Filter mat-table in Angular"
date = 2021-02-07T00:00:00
lastmod = 2021-02-07T01:00:00
draft = "false"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-pagination"
next = "mat-table-filterPredicate"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to filter a mat-table in Angular."
keywords=["mat-table,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table filter"
[menu.material]
  parent = "Tutorial"
  weight = 4
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
"1◬Johannah◬Kiffin◬jkiffin0@google.pl◬F◬Administrative◬Assistant I" - Concatenate 
"1◬johannah◬kiffin◬jkiffin0@google.pl◬f◬administrative◬assistant i" - and lowerCase.
```

Wonder why there is a special character(◬) in between column values?

Go through this [article](https://www.angularjswiki.com/material/mat-table-filterpredicate/#what-is-mat-table-filterpredicate) to understand it.


And when we pass filter input to the data source, the data source checks whether the search string contains in the above concatenated string row or not. 

If it's not, the row will be removed from the resulting rows. 

That's why in the above `applyFilter()` function, I have converted the input string to lowerCase.

```
this.dataSource.filter = filterValue.trim().toLowerCase();
```

The `trim()` removes white space from  the both sides of the search input.


This is the default behavior of built-in filter functionality in mat-table data source. 

{{< figure src="/img/material/mat-table-filter.png" title="mat-table filter" alt="mat-table filter">}}


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

{{< figure src="/img/material/mat-table-filterPredicate.png" title="mat-table filterPredicate" alt="mat-table filterPredicate">}}

We can add complex conditions like filter by gender and position etc. 

And with the single input text box, we cannot filter by multiple columns so we need to provide drop down box to each and every column.


## mat-table filter by multiple columns

First we need to understand our table data structure, before adding filters to the mat-table. 

For example we can add filter on gender, employee position and department etc. 

Such columns are fixed inside a table, mostly we would like to filter table by these columns only. 

Adding filter based on employee name does not make sense. For those kind of fields we need to have search input text box as explained above. 

So the ideal table should have free text search bar and additional filters based on the type of data. 

We will add three filters to mat-table using department,jobtitle and gender drop down list.

```
export interface EmpFilter {
    name:string;
    options:string[];
    defaultValue:string;
}

genders: string[]=['All','Male','Female'];
jobtitles: string[]=['All','Support Analyst','Project Manager','Senior officer','Software Engineer'];
departments: string[]=['All','Support','Human Resources','Marketing','Engineering'];
empFilters: EmpFilter[]=[];

ngOnInit(): void {

    this.empFilters.push({name:'gender',options:this.genders,defaultValue:this.defaultValue});
    this.empFilters.push({name:'jobtitle',options:this.jobtitles,defaultValue:this.defaultValue});
    this.empFilters.push({name:'department',options:this.departments,defaultValue:this.defaultValue});
    
}
```

Make sure the filter name property matches with the column property of the Employee table. 

This will be helpful while filtering the table. 

For example we have a filter named `gender` and it should match with the employee interface `gender` property name. 

```
export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string, //	this.empFilters.push({name:'gender'..);
  jobtitle:string,
  department:string
}
```

Now using `*ngFor` display the filters in the component html file, above the mat-table.

```
<mat-form-field appearance="fill" *ngFor="let empfilter of empFilters">
    <mat-label>{{empfilter.name}}</mat-label>
    <mat-select [(value)]="empfilter.defaultValue" (selectionChange)="applyEmpFilter($event,empfilter)">
      <mat-option *ngFor="let op of empfilter.options" [value]="op">
        {{op}}
      </mat-option>
    </mat-select>
</mat-form-field>

<table mat-table [dataSource]="dataSourceFilters" class="mat-elevation-z8">
    <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef> {{column}} </th>
        <td mat-cell *matCellDef="let emp"> {{emp[column]}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let emprow; columns: displayedColumns;"></tr>

</table>
```

{{< figure src="/img/material/mat-table-filter-multiple-columns.png" title="mat-table filter multiple columns" alt="mat-table filter multiple columns">}}


On Selection change I am calling `applyEmpFilter` function. 

```

filterDictionary= new Map<string,string>();

applyEmpFilter(ob:MatSelectChange,empfilter:EmpFilter) {

    this.filterDictionary.set(empfilter.name,ob.value);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSourceFilters.filter = jsonString;
  
}
```

`MatTableDataSource` filter accepts only strings. 

So to pass multiple columns filters, I have created a typescript `Map` (filterDictionary) which accepts key value pair of column values. 

For example if we select `gender` as male in the dropdown, we will set the Map with the values ("gender","Male").

As it's a dictionary every time the gender value will be updated based on drop down values. 

As we have three filters in our mat-table, the dictionary contains at most three values. 

After that we will convert the Map to JSON string and assign it to `MatTableDataSource` filter.

Next the most important thing is **creating the mat-table filterPredicate**. 


```
this.dataSourceFilters.filterPredicate = function (record,filter) {
      
      var map = new Map(JSON.parse(filter));
      let isMatch = false;

      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Employee] == value); 
        if(!isMatch) return false;
      }

      return isMatch;
}
```

In the mat-table filterPredicate function, we will convert the filter string back to the Map variable.

Now for each filter value i.e, for each Map key value, we will check whether the value will be equal to the corresponding employee property value. 

```
(record[key as keyof Employee] == value)
```

That's the reason, we should create filter name same as employee property name.

For example we have selected "gender" as "Male", Our Map contains key as "gender" and value as "Male".

And the mat-table record row i.e, employee record we should check the gender property.

```
record["gender"] or record.gender
```
But we cannot use `record[key]` directly, Instead we have to use `record[key as keyof Employee]`.

We have three filters in our mat-table. 

1. department
2. jobtitle
3. gender

Each filter will be cross verified against the employee record property and if all values are matched then we should add that record in mat-table. 

If one of the property is not equal we should remove it from the resulting table records (return false).

Additionally I have added one extra condition to check default value "All".

## mat-table filter StackBlitz Demo and GitHub code links

Here is the demo for mat-table filter [https://angular-mat-table-filter-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-filter-example)

Github Code : [https://github.com/arungudelli/mat-table-filter](https://github.com/arungudelli/mat-table-filter)



