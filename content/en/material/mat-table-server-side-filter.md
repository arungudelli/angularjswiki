+++
title = "Server Side search & filter in Angular material table (mat-table)"
date = 2022-12-05T00:00:00
lastmod = 2022-12-05T01:00:00
draft = "false"  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "material"
prev = "mat-table-filterPredicate"
next = "mat-table-fixed-sticky-header"
featured="mat-table-featured.jpg"
authors = ["admin"]
summary ="In this tutorial, we learn how to add server side search & filter functionality in mat-table using simple examples."
keywords=["mat-table server side search & filter,Angular Material Table"]


# Add menu entry to sidebar.
linktitle = "mat-table server side filter"
[menu.material]
  parent = "Tutorial"
  weight = 10
+++

When you add server side pagination and server side sorting in Angular material table i.e., `mat-table`, then the searching & filtering should be done on the server side as we do not have total table data.

In this tutorial, we learn how to add server side search & filter functionality in `mat-table` using simple examples. 

**To implement server side searching & filtering in Angular `mat-table`, our API should accept filter parameter i.e., search keyword**. 

{{%toc%}}

## Steps to implement Server Side search & filter in Angular material table.

In client side filtering, we will get all records from the server at a time and filter them using `MatTableDataSource`'s `filter` property as explained in [previous article](https://www.angularjswiki.com/material/mat-table-filter/)

Let's see how we can add this search & functionality on the server side. 

### Step 1 : Add a Search Input.

The most basic step is to add search box above `mat-table`. 

```html

<mat-form-field>
  <mat-label>Search & Filter</mat-label>
  <input
    matInput
    [formControl]="searchKeywordFilter"
    placeholder="Title Search"
    #input
  />
</mat-form-field>

```

Added a `matInput` search box and assigned a `formControl` called `searchKeywordFilter`. 

In the component `.ts` file, initialize the `formControl`.

```typescript

searchKeywordFilter = new FormControl();

```

### Step 2: Create a server API which accepts filter search keyword as a parameter.

The most important thing is, our server should have an API which accepts search keyword as a parameter.

We will use the Github issue search API as a server end point as explained in [`mat-table` server side sort](https://www.angularjswiki.com/material/mat-table-server-side-sort/) article.

We will search issues by their title using our `mat-table` search box.

```text
https://api.github.com/search/issues?q=windows+in:title+repo:angular/components&sort=created&order=desc&page=1&per_page=50
```

To search github issues by title we need to pass search keyword in the below following format.

```text
q=windows+in:title
```

Here "`windows`" is our search keyword.

You need to create your own Server API. 

### Step 3: Create a Service which calls the backend API

I have created a service called `GithubService` with the method called `getRepoIssues()`.

Inside this method, using `HttpClient.get()` method we will call the API end point.

```typescript

public getRepoIssues(
    filter: string,
    sort: string,
    order: SortDirection,
    page: number,
    perpage: number
  ): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=${filter}+in:title+repo:angular/components&sort=${sort}&order=${order}&page=${page}&per_page=${perpage}`;

    return this.http.get<GithubApi>(requestUrl);
  }

```

In addition to the sorting & pagination parameters, I have added `filter` parameter to the `getRepoIssues()` issues.

And added two interfaces called `GithubApi` and `GithubIssue`.

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

And inject the service in our `mat-table` component.

```typescript

constructor(public githubService: GithubService) {}

```

### Step 4: Subscribe to search `formControl.valueChanges` event

Whenever there is a change in search filter we need to go to the server add filter the records and display them in the `mat-table`.

In `ngAfterViewInit()` method, we will subscribe to search `formControl.valueChanges` event.

The `formControl.valueChanges` event trigger the `getRepoIssues()` method to get the latest filtered records.

As we need to add server side [sorting](https://www.angularjswiki.com/material/mat-table-server-side-sort/) and [pagination](https://www.angularjswiki.com/material/mat-table-serverside-pagination/), we will combine search `formControl.valueChanges` event along with `sort.sortChange` and `paginator.page` events.

```typescript

ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.searchKeywordFilter.valueChanges, this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          var filterValue = this.searchKeywordFilter.value == null ? '' : this.searchKeywordFilter.value;
          return this.githubService
            .getRepoIssues(
              filterValue,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex + 1,
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

Iam using Rxjs `merge` operator to combine three events.

If the search filter value is `null`, we need to pass empty string other wise we need to pass the actual value.

```typescript

var filterValue = this.searchKeywordFilter.value == null ? '' : this.searchKeywordFilter.value;

return this.githubService
            .getRepoIssues(
              filterValue,
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex + 1,
              this.paginator.pageSize
            )

```

I am using series of Rxjs Operators like `startWith`, `switchMap`, `map` along `merge` operator.

In the `switchMap` operator I am returning `getRepoIssues` observable with search filter keyword along with sort column, sort direction, page size and page number parameters.

`mat-paginator` contains `pageIndex` and `pageSize` attributes which represents page number and page size of `mat-table`.

As `pageIndex` start with zero, I am adding +1 to the page index.

In the `map` operator I am assigning total number of filtered records to the `resultsLength` variable and returning `github` issues from the `items` property of `GithubApi`.

Finally in the `subscribe` method, assigning the filtered `github` issues data to `mat-table` data source.

When we type in the search box or if there is a change in `mat-paginator` or when we click on sorting column the above events will be triggered and the `mat-table` data will be updated accordingly.


## Adding progress spinner to `mat-table` while filtering

While searching the records from the server we need to add a [progress spinner](https://www.angularjswiki.com/angular/creating-progress-spinner-in-angular/) to represent the status of the API call.

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

## `mat-table` server side search & filter StackBlitz Demo

Here is the demo for `mat-table` server side search & filter StackBlitz 

[https://angular-mat-table-server-side-search-filter-example.stackblitz.io](https://stackblitz.com/edit/angular-mat-table-server-side-search-filter-example)




