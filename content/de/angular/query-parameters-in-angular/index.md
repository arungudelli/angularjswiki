+++ title = "Query Parameters in Angular with examples" subtitle = "how to use query parameters in Angular" type="post" summary ="Using Query parameters in Angular, we can pass optional parameters to angular routes in our applications. " keywords=["query parameters,queryParamsHandling,queryParams"] date="2021-01-20T00:00:05+0000" lastmod="2021-01-20T00:00:49+0000" draft=false authors = ["admin"]

[image] caption = "ng-template"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false +++

Using Query parameters in Angular, we can pass optional parameters to angular routes in our applications.

There are **two ways we can pass query parameters in angular**.

1. Using Router.navigate
2. Using RouterLink.

We will go through few examples to understand further.

{{%toc%}}

## Pass query parameters to Router.navigate using queryParams.

If you are navigating to a route using `Router.navigate`, we can pass query parameters to navigate method using `queryParams` property.

For example to navigatre to list of books orderby price, we can pass orderby parameter using `queryParams` as shown below.

```
goToBooks() {
  this.router.navigate(['/books'], { queryParams: { orderby: 'price' } });
}
```

The resulting Url will be

```
http://localhost:4200/books?orderby=price

```

## Passing multiple query parameters.

`queryParams` property accepts object as a value.

To pass multiple query parameters to `router.navigate` we can construct an object with list of parametrs and pass it on to `queryParams`.

For example to display books under category fiction and orderby price, use the below code snippet.

```
goToBooks() {
  this.router.navigate(['/books'], { queryParams: { orderby: 'price',category:'fiction' } });
}
```

The resulting Url with multiple parameters is

```
http://localhost:4200/books?orderby=price&category=fiction

```

## Preserving query parameters using queryParamsHandling

Using `queryParamsHanding` property we can preserve or merge query parameters in Angular.

In Angular, query parameters are lost when we navigate from one route to another route.

In the above example if we are navigating from `http://localhost:4200/books?orderby=price` to other route `http://localhost:4200/e-books` orderby parameter will be lost.

To preserve query parameters in Angular on any subsequent navigation action we can use `queryParamsHanding` property with `preserve` value.


```
//Current route
//http://localhost:4200/books?orderby=price

goToeBooks() {
  this.router.navigate(['/e-books'], { queryParamsHandling: 'preserve' });
}
```

The resulting Url will be

```
http://localhost:4200/e-books?orderby=price
```

## Merging query parameters using queryParamsHandling.

Two merge both previous route parameters and current route parameters we can set `queryParamsHandling` to the value `merge`.

```
goToeBooks() {
  this.router.navigate(['/e-books'], { queryParams: { type:'kindle' },queryParamsHandling: 'merge' });
}
```

Now the resulting url will contain both parameters.

```
http://localhost:4200/e-books?orderby=price&type=kindle

```

## Pass query parameters to routerLink.

To pass query parameters while navigation to route using `routerLink` directive, use the below code snippet.

```
<a [routerLink]="['/books']" [queryParams]="{ orderby: 'price'}">
  Books
</a>

```

Similarly we can use `queryParamsHandling` to preserve or merge parameters.

```
<a [routerLink]="['/e-books']"
   [queryParams]="{ type: 'kindle' }"
   queryParamsHandling="merge">
  e-books
</a>
```

## Difference between query parameters and Angular route parameters.

There are two main differences between Query parameters and angular route parameters.

1. Angular route parameters are available only on one route, where as we can pass query parameters to any route.
2. Query parameters are optional. But if you are not passing angular route parameters we will get 404 error.

To access or get query parameters from URL go through the following post.

[Get Query Parameters from URL route](https://www.angularjswiki.com/angular/get-query-parameters-in-angular/)

## Summary.

1. Using `queryParams` we can pass query parameters to angular route.
2. Using `queryParamsHandling` we can preserve or merge query parameters.