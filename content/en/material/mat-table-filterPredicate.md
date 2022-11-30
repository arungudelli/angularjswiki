+++
title = "Working with mat-table filterPredicate in Angular"
date = 2022-01-03T00:00:00
lastmod = 2022-01-03T00:00:00
draft = "false"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-filter"
next = "mat-table-sort"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to use mat-table filterPredicate in Angular"
keywords=["mat-table filterPredicate,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table filterPredicate"
[menu.material]
  parent = "Tutorial"
  weight = 9
+++

In this tutorial we will learn how to use **mat-table filterPredicate in Angular**.

{{%toc%}}

## What is mat-table filterPredicate?

1. mat-table filterPredicate function is part of MatTableDataSource. 
2. mat-table data source filterPredicate function filters the table rows based on the `filter` string passed to the MatTableDataSource. 
3. By default filterPredicate checks the all column values against the `filter` string and returns the rows accordingly. 
4. If we want to override the default behavior we have to provide a custom function for filterPredicate.

And it's not necessary that we have to provide the custom function for filterPredicate every time. 

If you are ok with the default behavior, then all you have to do is to pass the `filter` string to the mat-table data source. 

As explained in [previous articles](https://www.angularjswiki.com/material/mat-table-filter/). 

```
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
```

No custom filterPredicate function. 

Let's go through the default implementation of filterPredicate function. 


```
  /**
   * Checks if a data object matches the data source's filter string. By default, each data object
   * is converted to a string of its properties and returns true if the filter has
   * at least one occurrence in that string. By default, the filter string has its whitespace
   * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
   * filter matching.
   * @param data Data object used to check against the filter.
   * @param filter Filter string that has been set on the data source.
   * @returns Whether the filter matches against the data
   */
  filterPredicate: (data: T, filter: string) => boolean = (data: T, filter: string): boolean => {
    // Transform the data into a lowercase string of all property values.
    const dataStr = Object.keys(data)
      .reduce((currentTerm: string, key: string) => {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + (data as {[key: string]: any})[key] + '◬';
      }, '')
      .toLowerCase();

    // Transform the filter by converting it to lowercase and removing whitespace.
    const transformedFilter = filter.trim().toLowerCase();

    return dataStr.indexOf(transformedFilter) != -1;
  };
```

mat-table filterPredicate function accepts two arguments and returns boolean value.

1. table data record
2. filter string. 

Default filterPredicate function combines all columns values and checks if the filter string exists in the combined string. 

For example consider a row in our table 

```
ab,cd 
```
The combined string is 
```
ab◬cd
```

filterPredicate uses a special character(◬) in between the column values while appending.

Why because if we enter filter string as `bc`

```
'abcd'.indexOf('bc')!=-1 // returns true and this is wrong.

// because we have column values as `ab` and `cd` not `bc`
```

With the special character 

```
'ab◬cd'.indexOf('bc')!=-1 // returns false.

// Correct behavior

```

## Custom function for mat-table data Source filterPredicate 

Provide the custom function to mat-table data source filterPredicate using below syntax

```
ngOnInit(): void {
    this.dataSource.filterPredicate = function (record,filter) {
       // Custom filter logic
    }
}
```

Now Whenever we assign MatTableDataSource `filter` string, the custom filterPredicate function will be called for every record in the mat-table. 

And depending upon the filtering logic, the row will be added or removed from the resulting table.

If we return `false` in filterPredicate function, all mat-table records will be removed from the UI. 

```
ngOnInit(): void {
    this.dataSource.filterPredicate = function (record,filter) {
       return false;
    }
}
```

Now let's go through an example to understand it further. 

## mat-table filterPredicate example

Will take an example of employee table, and filter that using mat-table filterPredicate. 

```
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

Now to filter the table using single column for example `id`, use the below custom filterPredicate function. 


```

applyFilterById(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngOnInit(): void {
    this.dataSource.filterPredicate = function (record,filter) {
       return record.id.indexOf(filter)!=-1;
    }
}
```

## Mat-table filterPredicate multiple columns

Now as we know how mat-table filterPredicate function works, we can add as many as columns to filter the table. 

You can go through the previous article [mat-table filter multiple columns](https://www.angularjswiki.com/material/mat-table-filter/#mat-table-filter-by-multiple-columns) to understand it further.  


## mat-table filterPredicate StackBlitz Demo and GitHub code links

Here is the demo for mat-table filterPredicate [https://angular-mat-table-filterpredicate-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-filterpredicate-example)

Github Code : [https://github.com/arungudelli/mat-table-filter](https://github.com/arungudelli/mat-table-filter)



