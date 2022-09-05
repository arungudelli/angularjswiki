+++
title = "Server Side Pagination in Angular mat-table using mat-paginator"
date = 2022-08-25T00:00:00
lastmod = 2022-08-25T01:00:00

draft = "true"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-pagination"
next = "mat-table-filter"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="Learn how to implement server side pagination in Angular mat-table"
keywords=["mat-table,Angular Material Table,mat-paginator"]


# Add menu entry to sidebar.
linktitle = "mat-table server side pagination"
[menu.material]
  parent = "Tutorial"
  weight = 4
+++

In previous article we learnt about adding client side pagination in Angular `mat-table` using `mat-paginator`.

In client side pagination, we will get all records from the server at a time and apply pagination using `mat-paginator` component.

But If we huge data i.e., more number of records it's not a good idea to apply the client side pagination. 

It might lead to serious performance impacts.

In that case we will **implement server side pagination in Angular mat-table**.

{{%toc%}}

## What is Server Side Pagination in Angular?

Let's say we have to display 1000 records in `mat-table` Angular component.

In client side pagination, we will get all 1000 records from the server and bind it to the `mat-table` data source and further using `mat-paginator` component we will add pagination.

Getting 1000 records from the server using `HttpClient.get()` might be slow.

The server has to read all records from the database and return it to the client in JSON format. 

The JSON data size will be more. 

May be 1000 records is not a big deal, imagine loading around 1,00,000 records? 

Clearly there will be a performance impact.

In `mat-table` pagination by default we will see only first page records, we can define the page size and accordingly number of pages will increase.

By clicking next page or page number we will see the remaining records. 

So at any given point of time we will see only fixed number of records in the table. i.e., [`pageSize`](https://www.angularjswiki.com/material/mat-table-pagination/#mat-paginator-pagesize).

Let's say our page size is "10". 

Instead of getting 1000 records, we will get only first 10 records from the server on initial load and display them in the UI. 

And if we click on second page, we will again call server to get next 10 records. 

So each time when we click the next page or page number we will go to server get corresponding page records.

This is called Server Side Pagination. 

And **server API should accept page size and page number parameters**. 

This is the minimum requirement to implement server side pagination in Angular. 

Data from the server should have following data format. 

```
Server API : "/api/users?currentPage=1&pageSize=6"

// returns
{
  data: [{},{}]
  currentPage: 1
  pageSize: 6
  totalPages: 2
  totalRecords: 12
}
```

The `data` attribute contains the records to display in the `mat-table`.

`currentPage` is nothing but page number. 

Remaining attributes `pageSize`, `totalPages` and `totalRecords` are self explanatory. 

It's not necessary that your JSON data should be in above format, but those attributes are necessary and will be helpful while displaying the table records. 

And it's widely accepted format for server side pagination. 

## Steps to Implementing Server Side Pagination in Angular.

### Step 1 : Add `mat-paginator` to the `mat-table`

First we will add pagination to the material table using `mat-paginator`, as explained in previous articles.

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
    <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
    <td mat-cell *matCellDef="let emp">{{ emp[column] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let emprow; columns: displayedColumns"></tr>
</table>

<mat-paginator
  #paginator
  [pageSizeOptions]="pageSizes"
  showFirstLastButtons></mat-paginator>
```
In component.ts file

```
dataSource = new MatTableDataSource<Employee>();

@ViewChild('paginator') paginator: MatPaginator;

pageSizes = [3, 5, 7];
```

In this example we will show the list of employees in the `mat-table`.

```
export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
```

### Step 2: Add `length` attribute to the `mat-paginator`

`mat-paginator` has an attribute called `length`, which represents the total number of records in the material table or length of data to be displayed.

I have created a variable called `totalData` and bind it to the `length` attribute.

```
<mat-paginator
  #paginator
  [length]="totalData"
  [pageSizeOptions]="pageSizes"
  showFirstLastButtons
></mat-paginator>

```

### Step 3: Create Server API which supports page number & page size parameter

As explained above Our serer API should accept page number and page length parameters in order to implement server side pagination. 

I am using a third party API `https://reqres.in`, which returns list of employee details and also accepts two parameters called `page` and `per_page`.

```
https://reqres.in/api/users?page=1&per_page=5
```

Here `page` is nothing but page number and `per_page` represents page size.

### Step 4: Create a Service

Now we will create a service called `EmployeeService` with the method called `getEmployees()`. 

Inside this method, using [`HttpClient.get()`](https://www.angularjswiki.com/httpclient/get/) method we will call the API.

```
export class EmployeeService {
  
  constructor(private http: HttpClient) {}

  public getEmployees(
    pageNumber: Number,
    pageSize: Number
  ): Observable<EmployeeTable> {
  
    const url = `https://reqres.in/api/users?page=${pageNumber}&per_page=${pageSize}`;

    return this.http.get<EmployeeTable>(url);
  }
}
```

In the above code I have used `EmployeeTable` object instead of `Employee`, this is because our server API returns the data in following format.

```
export interface EmployeeTable {
  data: Employee[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
```

Inject this service in our component.ts file.


```
  constructor(public empService: EmployeeService) {}

  getTableData$(pageNumber: Number, pageSize: Number) {
    return this.empService.getEmployees(pageNumber, pageSize);
  }

```

I have added a local method in the component.ts file which calls the `getEmployees()` observable in the `EmployeeService`.

### Step 5: Subscribe to `mat-paginator` page event

`mat-paginator` contains a property called `page` which is an `EventEmitter` of type `PageEvent`.

And will be triggered when the paginator changes the page size or page index (i.e., page number).

In `ngAfterViewInit()` method, I am subscribing to `this.paginator.page` event.

```
ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.getTableData$(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((empData) => {
          if (empData == null) return [];
          this.totalData = empData.total;
          return empData.data;
        })
      )
      .subscribe((empData) => {
        this.EmpData = empData;
        this.dataSource = new MatTableDataSource(this.EmpData);
      });
  }
```

I am using series of Rxjs Operators like `startWith` and `switchMap` and `map` along with PageEvent of paginator. 

In the `switchMap` operator I am returning `getTableData$` observable with page number and page size parameters. 

`mat-paginator` contains `pageIndex` and `pageSize` attributes which represents page number and page size of `mat-table`.

As `pageIndex` start with zero, I am adding `+1` to the page index. 

In the `map` operator I am assigning total number of records to the `totalData` variable and returning employee records from the `data` attribute of `EmployeeTable`.

Finally in the subscribe method, assigning the employee data to `mat-table` data source.

Whenever there is a change in `mat-paginator`, i.e., when we click on previous/next page links or when we change the page size the above page event called and the table data will be updated accordingly.

## Adding progress bar to the mat-paginator. 

As we are calling the server API on each `mat-paginator` change event, it's better to add progress bar to the `mat-table`. 

If the server call takes too much time then there will be an indication to the user that the data being loaded.

I am using [`mat-progress-bar`](https://www.angularjswiki.com/angular/progress-bar-in-angular-mat-progress-bar-examplematerial-design/) to represent the loading of table records.

```
<h2>mat-table server side pagination</h2>

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
    <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
    <td mat-cell *matCellDef="let emp">{{ emp[column] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let emprow; columns: displayedColumns"></tr>
</table>
<mat-progress-bar mode="indeterminate" *ngIf="isLoading"></mat-progress-bar>
<mat-paginator
  #paginator
  [length]="totalData"
  [pageSizeOptions]="pageSizes"
  showFirstLastButtons
></mat-paginator>
```

And using `isLoading` variable showing the progress bar on top of `mat-paginator`.



## mat-table server side pagination example StackBlitz Demo

Here is the demo for mat-table pagination example[https://stackblitz.com/edit/angular-mat-table-server-side-pagination-example](https://stackblitz.com/edit/angular-mat-table-server-side-pagination-example)


