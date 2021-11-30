+++
title = "Angular HTTP GET request with parameters example"
subtitle = "Learn how make http get request with parameters in Angular using HttpClient.get() method"
date = 2021-11-29T00:00:00
lastmod = 2021-11-30T00:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
prev="get"
featured="Angular.png"
authors = ["admin"]
summary ="To do http get request with parameters in Angular, we can make use of params options argument in `HttpClient.get()` method"
keywords=["Angular HttpClient get method","http get request parameter angular"]

# Add menu entry to sidebar.

linktitle = "get parameters"
[menu.httpclient]
  parent = "HttpClient"
  weight = 5

+++

To do http get request with parameters in Angular, we can make use of params options argument in `HttpClient.get()` method.

As explained in previous Angular [HTTP get request tutorial](https://www.angularjswiki.com/httpclient/get/), `Http.get()` method takes two arguments 

1. End Point URL
2. Options

```
options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
}
``` 

Using the `params` property we can pass parameters to the HTTP get request. 

Either we can pass `HttpParams` or an object which contains key value pairs of parameters.

Let's go through an example to understand it further.

{{%toc%}}

## Pass parameters to http get request using HttpParams

We will use the same API `https://reqres.in/api/users?page=1` used in previous articles

```
public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<UserInformation>(url,{params:queryParams});
}
```

Refactor the above code to use HttpParams object as shown below

```
public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
 
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",1);
 
    return this.http.get<UserInformation>(url,{params:queryParams});
}
```

Steps to pass parameters to the Http get request in Angular

1. Import `HttpParams` from `@angular/common/http`
2. Create a `HttpParams()` object.
3. Append the parameters to the query parameters object using HttpParams().append() method. 
4. Re-assign the object back to the query parameters object.
5. Pass the query parameter to the second argument of `HttpClient.get()` method using `params` property.

The fourth point is very important.

```
let queryParams = new HttpParams();
queryParams = queryParams.append("page",1); //VERY IMPORTANT
```

The below HttpParams append code will not work.

```
let queryParams = new HttpParams();
queryParams.append("page",1); 
```

The reason is **HttpParams object is Immutable**

The `append()` method merges the Http parameters and returns the new instance of the merged HttpParams object on each call to append.

The above code can be refactored to update the HttpParams as shown below.

```
let queryParams = new HttpParams().append("page",1);
```
The complete example 
```
public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';

    let queryParams = new HttpParams().append("page",1);

    return this.http.get<UserInformation>(url,{params:queryParams});
}
```

## Passing multiple parameters to Http get request

By using `HttpParams.append()` we can pass multiple parameters to `HttpClient.get()` method. 

Now we will use an API which supports two parameters `https://reqres.in/api/users?page=1&per_page=1`

We have to pass page & per_page parameters to the list of users API. 

```
let queryParams = new HttpParams();
queryParams = queryParams.append("page",1);
queryParams = queryParams.append("per_page",1);

```

Now call the end point with the multiple parameters as shown below.

```
public getUsersMultipleParams(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",1);
    queryParams = queryParams.append("per_page",1);
    return this.http.get<UserInformation>(url,{params:queryParams});
}
```
Or we can use chain of append methods as shown below.

```
let queryParams = new HttpParams().append("page",1)
                                  .append("per_page",1);
```

## Passing parameters to Http get using simple parameters Object

The `params` property accepts simple json object as a parameter.

So instead of using `HttpParams`, we can create an object which consists of parameters and pass it to the `HttpClient.get()` method. 

```
public getUsersMultipleParams(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let queryParams = {"page":1,"per_page":1};
    return this.http.get<UserInformation>(url,{params:queryParams});
}
```
This is the simple way to passing parameters to the http get request in Angular. 

No need to worry about im-mutability of HttpParams object.

`HttpClient.get()` method internally creates a HttpParams object using below code.

```
params = new HttpParams({ fromObject: options.params });
```

## Creating params using HttpParams & fromObject 

As explained above, we can simply create params object using HttpParams and fromObject. 

```
public getUsersMultipleParams(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let parameters = {"page":1,"per_page":1};
    let queryParams = new HttpParams({ fromObject: parameters }); 
    return this.http.get<UserInformation>(url,{params:queryParams});
}
```

This is just an other way of passing parameters to http get request in Angular. Not necessary that we have to use this method.

Prefer using passing parameters using simple object.

## Pass Http get request parameters in URL

If you don't want to create HttpParams object, we can always pass parameters directly in the URL.

```
public getUsersMultipleParams(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1&per_page=1';
    return this.http.get<UserInformation>(url);
}

```

## StackBlitz Demo

Here is the links for StackBlitz demo & Github code.

Demo : [Http get request Angular](https://stackblitz.com/edit/http-get-request-params-angular-example?file=src%2Fapp%2Fuser.service.ts)








