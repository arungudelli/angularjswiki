+++
title = "HTTP get request example in Angular using HttpClient"
subtitle = "Learn how make http get request in Angular using HttpClient service"
date = 2021-11-28T00:00:00
lastmod = 2021-11-29T00:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
prev="observable"
featured="Angular.png"
authors = ["admin"]
summary ="To make http get request in Angular, we can make use of `HttpClient.get()` request method."
keywords=["Angular HttpClient get method","http get request angular"]

# Add menu entry to sidebar.

linktitle = "get"
[menu.httpclient]
  parent = "HttpClient"
  weight = 4

+++

To make http get request in Angular, we can make use of `HttpClient.get()` request method. 

**`HttpClient.get()` method is an asynchronous method that performs an HTTP get request in Angular applications and returns an Observable. And that Observable emits the requested data when the response is received from the server.**

Now we will go through an example to understand it further. 

{{%toc%}}

## Http get request in Angular

Open your command prompt and create a new application using Angular cli ng new command.

```
> ng new http-get-request-angular
```

Here is the Output

```
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss
 ]
CREATE http-get-request-angular/angular.json (3849 bytes)
CREATE http-get-request-angular/package.json (1214 bytes)
CREATE http-get-request-angular/README.md (1030 bytes)
CREATE http-get-request-angular/tsconfig.json (737 bytes)
CREATE http-get-request-angular/tslint.json (3185 bytes)
CREATE http-get-request-angular/.editorconfig (274 bytes)
CREATE http-get-request-angular/.gitignore (631 bytes)
CREATE http-get-request-angular/.browserslistrc (703 bytes)
CREATE http-get-request-angular/karma.conf.js (1029 bytes)
CREATE http-get-request-angular/tsconfig.app.json (287 bytes)
CREATE http-get-request-angular/tsconfig.spec.json (333 bytes)
CREATE http-get-request-angular/src/favicon.ico (948 bytes)
CREATE http-get-request-angular/src/index.html (307 bytes)
CREATE http-get-request-angular/src/main.ts (372 bytes)
CREATE http-get-request-angular/src/polyfills.ts (2826 bytes)
CREATE http-get-request-angular/src/styles.scss (80 bytes)
CREATE http-get-request-angular/src/test.ts (753 bytes)
CREATE http-get-request-angular/src/assets/.gitkeep (0 bytes)
CREATE http-get-request-angular/src/environments/environment.prod.ts (51 bytes)
CREATE http-get-request-angular/src/environments/environment.ts (662 bytes)
CREATE http-get-request-angular/src/app/app-routing.module.ts (245 bytes)
CREATE http-get-request-angular/src/app/app.module.ts (393 bytes)
CREATE http-get-request-angular/src/app/app.component.html (25757 bytes)
CREATE http-get-request-angular/src/app/app.component.spec.ts (1111 bytes)
CREATE http-get-request-angular/src/app/app.component.ts (229 bytes)
CREATE http-get-request-angular/src/app/app.component.scss (0 bytes)
CREATE http-get-request-angular/e2e/protractor.conf.js (904 bytes)
CREATE http-get-request-angular/e2e/tsconfig.json (274 bytes)
CREATE http-get-request-angular/e2e/src/app.e2e-spec.ts (675 bytes)
CREATE http-get-request-angular/e2e/src/app.po.ts (274 bytes)
√ Packages installed successfully.
```

Now navigate to application directory by using following cd command.

```
> cd .\http-get-request-angular\
```

Now type `ng serve` your application should be running on `http://localhost:4200/`

```
http-get-request-angular app is running!
```

As mentioned in [HttpClient Observable](https://www.angularjswiki.com/httpclient/observable/), For our Angular HttpClient get request example, we will use a third party API `https://reqres.in/api/users?page=1` which returns a list of users in JSON object format. 

To setup server communication we need to add `HttpClientModule` in `app.module.ts` file as explained in [HttpClient Introduction](https://www.angularjswiki.com/httpclient/)

```
// app.module.ts file of http-get-request-angular app.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //IMPORTANT: Add it after BrowserModule only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

We can inject HttpClient service anywhere in our Angular applications. 

## Creating re-usable Injectable Http Service

We will create a new service which handles all HttpClient communication operations like requesting the data, post-processing the data, error handling,and retry logic.

The advantage of creating such service is we can inject it wherever we want(like any component) in our Angular application.

As any application meant to evolve such injectable services helps us to build scalable solutions.

```
>ng generate service user

CREATE src/app/user.service.spec.ts (347 bytes)
CREATE src/app/user.service.ts (133 bytes)
```

And inject `HttpClient` in `user.service.ts` file.

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
}
```
As `HttpClient` service uses observables for http requests,we should import the RxJS observable in our http service.

## HttpClient.get() example 

Now we will make use of `HttpClient.get()` to get the list of users from the API. 

### HttpClient get method syntax

Angular's `HttpClient.get()` method takes arguments.

1. API Endpoint Url
2. Options

Options parameter object used to configure various Http request options like request headers,parameters and response type etc. 

And this parameter is optional.

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

The observe and responseType properties are important while making the HttpClient get request in Angular.

The `responseType` option indicates the format of the data returns from the http request.

Default responseType of HttpClient.get() method is "json".

Every http response contains http response headers and body. 

With the use of `observe` option we can specify whether we want to access complete http response object or actual body.

Most of the times we requires only body i.e., actual data.

Additionally if we want more details about processing of http requests we can request data in the form of HTTP event. 

Default `observe` response of HttpClient.get() method is "body". 

That's all needed in most of the real world examples. 

We will see more details about this `observe` option in other article.

### Calling the data end point URL

Now we will create a method in our `UserService.ts` file, which requests the data from the HTTP end point URL.

```
//Http Client get method
public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
}
```

We are not passing options object as it's optional.

Next we will inject our Http service i.e., UserService in our Angular component and then we will subscribe to the observable.

### Displaying the data in the component

We will create a user component to display the list of users returned from the above rest api end point.

Then we will inject Http service in component.ts file to call the observable function. 

In ngOnInit() method, I am subscribing to the `getUsers()` method of UserService.

We have an array variable called `users` in our user component, which is used to display the `users` in component html file.

In subscribe() method, I am assigning the data returned from the observable to `users` array.

```
export class UserComponent implements OnInit {

  users = new Array<any>();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
        this.users = response.data;
    });
  }

}
```
Finally In user component HTML file, display the user names using `*ngFor`.

```
<li *ngFor="let user of users">
  <span>{{user.first_name}} {{user.last_name}}</span>
</li>
```

And HttpClient can request typed response object so that we can use the returned data more conveniently. 

## Http get Request with strongly Typed Response 

The API end point returns below JSON data.

```
{
   "page":1,
   "per_page":1,
   "total":12,
   "total_pages":12,
   "data":[
      {
         "id":1,
         "email":"george.bluth@reqres.in",
         "first_name":"George",
         "last_name":"Bluth",
         "avatar":"https://reqres.in/img/faces/1-image.jpg"
      }
   ],
   "support":{
      "url":"https://reqres.in/#support-heading",
      "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
   }
}
```

The JSON data contains list of users and additional information like page, per_page, total etc.

We will create two interfaces with the properties mentioned in the above JSON data.


```
> ng generate interface model/user
CREATE src/app/model/user.ts (26 bytes)

> ng generate interface model/userinformation
CREATE src/app/model/userinformation.ts (26 bytes)

```
user, userinformation interfaces.

```
export interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: Number;
    last_name: string;
}

export interface UserInformation {
    page: Number;
    per_page: Number;
    support: any;
    total: Number;
    total_pages: Number;
    data: User[];
}
```

Now replace `getUsers()` observable return type from `any` to `UserInformation`.

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from './model/userinformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1';

    return this.http.get<UserInformation>(url);
  }
}

```
When we pass an interface as a type parameter to the `HttpClient.get()` method, It uses the RxJS map operator to convert the response data to required interface (in this case `UserInformation`). 

In user component ts file, change the `users` variable to `UserInformation` type as shown below.

```
export class UserComponent implements OnInit {


  userInfo : UserInformation;

  constructor(public userService: UserService) { 
    this.userInfo = {} as UserInformation;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {

      this.userInfo.page = response?.page;
      this.userInfo.per_page = response?.per_page;
      this.userInfo.total = response?.total;
      this.userInfo.total_pages = response?.total_pages;
      this.userInfo.data = response?.data?.map(item => {
        var user = {} as User;
        user.avatar = item?.avatar;
        user.email = item?.email;
        user.first_name = item?.first_name;
        user.last_name = item?.last_name;
        user.id = item?.id;
        return user;
      });

    });
  }

}
```

In subscribe method, assign the response object properties to `userInfo` variable of type `UserInformation`.

And list of users will be in `data` property of response. 

To assign list of users property, I am using rxjs map operator.

Now we can display the user list in component html file using `userInfo.data` property.

```
<li *ngFor="let user of userInfo.data">
    <span>{{user.first_name}} {{user.last_name}}</span>
</li>
```

One thing we need to remember is specifying the response type does not guarantee that the server API returns the same interface or object we defined. 

It is the server responsibility to return the correct JSON object.

When we add the response type to the observable function, we are informing the typescript compiler that it should treat the response as of the given type. That's it. 

And it's a build or compile time check only. 

For example in the above example the API returns an additional property called `support`, but I have not declared it in our userinformation interface. 

So when we try to assign that property the compiler throws the error.

```
ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
        //this.userInfo.support = response.support;
    });
  }
```

But at runtime, the response object will contain the property `support`.

```
console.log(response);

data: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
page: 1
per_page: 6
support: {url: 'https://reqres.in/#support-heading', text: 'To keep ReqRes free, contributions towards server costs are appreciated!'}
total: 12
total_pages: 2
```

But we cannot access `response.support` property as typescript compiler throws error.

Imagine our server implementation changed and returning the user information in the following format. 

The data from `https://fakestoreapi.com/users?limit=2`

```
[{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0},{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"Lovers Ln","number":7267,"zipcode":"12926-3874"},"id":2,"email":"morrison@gmail.com","username":"mor_2314","password":"83r5^_","name":{"firstname":"david","lastname":"morrison"},"phone":"1-570-236-7033","__v":0}]
```

There is no way we can map that information to our interface. 

In that case the response object properties will be undefined.

That's the reason in the above subscribe method while assigning properties we are doing null check.

```
response?.page 
response?.data?.map()

```

But at runtime the response object will have new data returned from the other API, but we cannot access as Typescript compiler restrict us. 

If you are sure about the data returned from API, you can directly assign the response object to the variable in the component ts file.

```
this.userService.getUsers().subscribe((response:UserInformation) => {
  this.userInfo = response;      
});
```

## Github code & StackBlitz Demo

Here is the links for StackBlitz demo & Github code.

Demo : [Http get request Angular](https://stackblitz.com/edit/http-get-request-angular-example?file=src%2Fapp%2Fuser.component.ts)

Code : [https://github.com/arungudelli/http-get-request-angular](https://github.com/arungudelli/http-get-request-angular)







