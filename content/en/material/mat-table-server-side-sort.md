+++
title = "Server Side Sorting in Angular mat-table using matSort"
date = 2022-11-30T00:00:00
lastmod = 2022-11-30T01:00:00
draft = "false"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-sort"
next = "mat-table-filter"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In this tutorial we will learn how to add Server Side Sorting in Angular mat-table along with server side pagination"
keywords=["mat-table server side sort,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table server side sort"
[menu.material]
  parent = "Tutorial"
  weight = 7
+++

In server side pagination, when we click on the next page or change the page size of `mat-paginator` we will go to server get corresponding page records.

As we don't have total table data, it's wrong to use client side sorting, so we have to add Server side sorting along with server side pagination.

Whenever we click on sort column we have to send sorting column name and sort order along with page size and page number parameters.

**To implement server side sorting in Angular `mat-table`, our API should accept sorting column and sort order parameters**. 

{{%toc%}}

## Steps to implement Server side sorting in Angular material table.

In client side sorting, we will get all records from the server at a time and  sort them using built in sort functionality in Angular material sort.

In this tutorial we will learn how to add **Server Side Sorting in Angular `mat-table` along with server side pagination.**.


### Step 1 : Add Sorting components from Angular material.

As explained in previous client side sorting example, import `MatSortModule` from `@angular/material` add it in `app.module.ts` file.

Make sure you have added 

1. `MatSort` and `Sort` in  `mat-table` component ts file.

```typescript
import {MatSort, Sort} from '@angular/material/sort';
```

2. `matSort` directive to the table

```html
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort #empTbSort="matSort">
</table>
```

### Step 2: Add `mat-sort-header` directive to the required sorting column headers

I am using `github` issues search API, which displays the open issues in a particular repository.

And this search API accepts `created_date` parameter as sorting column, so we need to add `mat-sort-header` directive to `created` column.


```html

<!-- Created Column -->
<ng-container matColumnDef="created">
        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>
          Created
        </th>
        <td mat-cell *matCellDef="let row">{{ row.created_at | date }}</td>
</ng-container>

```

### Step 3: Create Server API which accepts sort column and sort direction.

As explained above our serer API should accept sort column name, sort direction and page length parameters in order to implement server side sorting.

The `github` issues search api which accepts sort, sort direction and page size parameters.

```text
https://api.github.com/search/issues?q=repo:angular/components&sort=created&order=desc&per_page=10
```
You need to create your own API which accepts above parameters.

### Step 4: Create a Service which calls the backend API

Now we will create a service called `GithubService` with the method called `getRepoIssues()`.

Inside this method, using `HttpClient.get()` method we will call the API end point.

```typescript

getRepoIssues(
    sort: string,
    order: SortDirection,
    page: number,
    perpage:number,
  ): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }&per_page=${perpage}`;

    return this.http.get<GithubApi>(requestUrl);
  }

```

I have created two interfaces named `GithubApi` and `GithubIssue` to map with the data returned from the API.

```typescript
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
```

Inject this service in our component.ts file.

```typescript

constructor(public githubService: GithubService) {}

```

### Step 5: Subscribe to `MatSort` change event


`MatSort` contains a property called `sortChange` which is an EventEmitter of type `Sort`.

And will be triggered when there is a change in sorting columns.

In `ngAfterViewInit()` method, I am subscribing to `this.sort.sortChange`.

As we have to implement [server side pagination](https://www.angularjswiki.com/material/mat-table-serverside-pagination) we need to subscribe to `this.paginator.page` as well.

So Iam using Rxjs `merge` operator to combine both.

```typescript
  ngAfterViewInit() {
    
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.githubService
            .getRepoIssues(
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex+1,
              this.paginator.pageSize
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        })
      )
      .subscribe((data) => (this.data = data));
  }

```

When there is a change in sort order we need to reset back to the first page.

```typescript

this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

```

I am using series of `Rxjs` Operators like `startWith`, `switchMap`, `map` along `merge` operator.

In the `switchMap` operator I am returning `getRepoIssues` observable with sort column, sort direction along with page size and page number parameters.

`mat-paginator` contains `pageIndex` and `pageSize` attributes which represents page number and page size of `mat-table`.

As `pageIndex` start with zero, I am adding +1 to the page index.

In the `map` operator I am assigning total number of records to the `resultsLength` variable and returning github issues from the `items` property of `GithubApi`.

Finally in the subscribe method, assigning the github issues data to `mat-table` data source.

Whenever there is a change in `mat-paginator` or when we click on sorting column the above events will be triggered and the table data will be updated accordingly.

## Adding progress spinner to `mat-table`

It's better to add a [progress spinner](https://www.angularjswiki.com/angular/creating-progress-spinner-in-angular/) to the `mat-table`, which will be displayed while loading the data from the back end API.

I am using `isLoadingResults` property to display or hide the progress spinner.

```html

  <div
    class="example-loading-shade"
    *ngIf="isLoadingResults || isRateLimitReached"
  >
    <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
      GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>


```


## mat-table server side sort StackBlitz Demo and GitHub code links

Here is the demo for mat-table server side sort 

[https://angular-mat-table-server-side-sorting-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-server-side-sorting-example)




