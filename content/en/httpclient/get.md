+++
title = "HTTP get request example in angular using HttpClient"
subtitle = "Learn how make http get request in Angular using HttpClient service"
date = 2021-08-10T00:00:00
lastmod = 2021-08-10T01:00:00
draft = true  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
prev="httpclient"
featured="Angular.png"
authors = ["admin"]
summary ="All methods in Angular `HttpClient` return an RxJS Observable."
keywords=["Angular HttpClient Observable"]

# Add menu entry to sidebar.

linktitle = "get"
[menu.httpclient]
  parent = "HttpClient"
  weight = 1

+++

To get the data from the server we can make use of Angular `HttpClient.get()` request method. 

**`HttpClient.get()` method is an asynchronous method that performs an HTTP get request in Angular applications and returns an Observable. And that Observable emits the requested data when the response is received from the server.**

Now we will go through an example to understand it further. 

{{%toc%}}

## Http get request in Angular

Open your command promt and create a new application using Angular cli ng new command.

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

As mentioned in [HttpClinet Observable](https://www.angularjswiki.com/httpclient/observable/), For our Angular HttpClient get request example, we will use a third party API `https://reqres.in/api/users?page=1` which returns a list of users in JSON object format. 

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

Now we can make use of HttpClient service anywhere in our Angular applications. 

## Creating re-usable Injectable Http Service

We will create a new service which handles all Httpclient communication operations like requesting the data, post-processing the data, error handling,and retry logic.

The advantage of creating such service is we can inject it wherever we want(like any component) in our Angular application.

As any application meant to evolve such injectable services helps us to build scalable solutions.

```
>ng generate service user

CREATE src/app/user.service.spec.ts (347 bytes)
CREATE src/app/user.service.ts (133 bytes)
```

And inject HttpClient in `user.service.ts` file.

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

As the setup is ready we will make use of `HttpClient.get()` to display the list of users from the API. 

## HttpClient.get() example 

Angular's `HttpClient.get()` method takes arguments.

1. API Endpoint Url
2. Options

Options parameter object used to configure various Http request options like request headers,parameters and response type etc. 

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

We will create a UserService and inject HttpClient.

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInformation } from './user';
import { Observable } from 'rxjs';

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
And I am using a third party REST API which returns list of users in Json format. 

`getUsers()` returns an observable of type `UserInformation`.

```
export class User {
  public avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
}

export class UserInformation {
  page: Number;
  per_page: Number;
  support: any;
  total: Number;
  total_pages: Number;
  data: User[];
}

```

### Subscribing to Observable

An Observable function called only when someone subscribes to it. 

And to subscribe we should call `subscribe()` method of the observable instance and additionally we should pass an observer object to read the data from the observable.

In the component.ts file, I am subscribing to `getUsers()` observable method.

And using response object, I am populating `users` property which is used to display the data in UI i.e., component html file.

```
export class UserComponent {
  userInformation = new UserInformation();
  users = new Array<User>();

  constructor(userService: UserService) {
    userService.getUsers().subscribe(response => {
      this.userInformation.page = response.page;
      this.userInformation.per_page = response.per_page;
      this.userInformation.support = response.support;
      this.userInformation.total = response.total;
      this.userInformation.total_pages = response.total_pages;
      this.userInformation.data = response.data.map(item => {
        var user = new User();
        user.avatar = item.avatar;
        user.email = item.email;
        user.first_name = item.first_name;
        user.last_name = item.last_name;
        user.id = item.id;
        return user;
      });
      this.users = this.userInformation.data;
    });
  }
}
```
### Display the data

In component HTML file, display the user names using `*ngFor`.

```
<li *ngFor="let user of users">
  <span>{{user.first_name}} {{user.last_name}}</span>
</li>
```

## Stackblitz Demo

Here is the link to stackblitz demo for HttpClient Observable.

[HttpClient Observable](https://stackblitz.com/edit/httpclientobservable?file=src%2Fapp%2Fuser.component.ts)

{{< figure src="/img/httpclient/HttpClient-Observable.png" title="HttpClient Observable example" alt="HttpClient Observable Example">}}








