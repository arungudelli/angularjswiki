+++ title = "How to Get Query Parameters from URL route in Angular" subtitle = "Get Query Parameters from URL in Angular" type="post" summary ="Two ways to get query parameters from URL in Angular 1. Using queryParams 2. Using queryParamMap" keywords=["query parameters,queryParamMap,queryParams"] date="2021-01-20T00:00:06+0000" lastmod="2021-01-20T00:01:49+0000" draft=false authors = ["admin"]

[image] caption = "ng-template"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false +++

Steps to get query parameters from URL route in Angular

1. import `ActivatedRoute` from '@angular/router'.
2. Inject `ActivatedRoute` class in constructor.
3. Access `queryParams` property of `ActivatedRoute` class which returns an observable of the query parameters that are available in the current URL route.

We will go through an example to understand it further.

To pass query parameters in Angular go through the following post.

[Query Parameters in Angular with examples](https://www.angularjswiki.com/angular/query-parameters-in-angular/)

Consider the following URL

```
http://localhost:4200/books?orderby=price
```

Now in the the component access the url parameters by subscribing to `ActivatedRoute.queryParams` observable.

```
// ...
import { ActivatedRoute } from '@angular/router';

@Component({ ... })
export class BookComponent implements OnInit {

  orderby: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.orderby = params.orderby;
        console.log(this.orderby); // price
      }
    );
  }
}
```

If we have multiple query parameters, and to get particular parameter we can use filter operator.

Url with multiple parameters

```
http://localhost:4200/books?orderby=price&category=fiction

```

And to access category parameter use filter operator.

```

// ...
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({ ... })
export class BookComponent implements OnInit {

  category: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.category)
      .subscribe(params => {
        console.log(params); // { category: "fiction" }
        this.category = params.category;
        console.log(this.category); // fiction
      }
    );
  }
}

```

## Use `queryParamMap` to access query parameters.

Another way to access query paramters in Angular is to use `queryParamMap` property of `ActivatedRoute` class, which returns an observable with a `paramMap` object.

Take an example of above URL with multiple parameters.

```
http://localhost:4200/books?orderby=price&category=fiction

```

And now subscribe to queryParamMap observable as shown below.

```
this.route.queryParamMap
  .subscribe((params) => {
    this.paramsObject = { ...params.keys, ...params };
    console.log(this.paramsObject);
  }
);

```

And the output is

```
{
  "0": "orderby",
  "1": "category",
  "params": {
    "orderby": "price",
    "category": "fiction"
  }
}
```

Now we can access the parameters by using `paramsObject.params` object.

## Summary

We have learnt two ways to get query parameters from URL in Angular

1. Using queryParams
2. Using queryParamMap


