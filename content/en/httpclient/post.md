+++
title = "HTTP post request example in Angular using HttpClient"
subtitle = "Learn how make http post request in Angular using HttpClient service"
date = 2021-11-28T00:00:00
lastmod = 2021-11-29T00:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
prev="observable"
next="get-params"
featured="Angular.png"
authors = ["admin"]
summary ="We can make Angular Http Post Request using HttpClient.post() method."
keywords=["Angular HttpClient post method","http post request angular"]

# Add menu entry to sidebar.

linktitle = "post"
[menu.httpclient]
  parent = "HttpClient"
  weight = 5

+++

We can make Angular Http Post Request using `HttpClient.post()` method. 

Generally while submitting a form, we will use Http POST request to send the data to the server. 

{{%toc%}}

## HttpClient.post()

`HttpClient.post()` method is an asynchronous method that performs an HTTP post request in Angular applications and returns an Observable. 

`HttpClient.post()` has a type parameter similar to the `HttpClient.get()` request, through which we can specify the expected type of the data from the server.

Now we will go through an example to understand it further. 

## Http get post in Angular

Open your command prompt and create a new application using Angular cli ng new command.

```
> ng new http-get-post-angular
```

Here is the Output

```
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss
 ]
CREATE http-post-request-angular/angular.json (3849 bytes)
CREATE http-post-request-angular/package.json (1214 bytes)
CREATE http-post-request-angular/README.md (1030 bytes)
CREATE http-post-request-angular/tsconfig.json (737 bytes)
CREATE http-post-request-angular/tslint.json (3185 bytes)
CREATE http-post-request-angular/.editorconfig (274 bytes)
CREATE http-post-request-angular/.gitignore (631 bytes)
CREATE http-post-request-angular/.browserslistrc (703 bytes)
CREATE http-post-request-angular/karma.conf.js (1029 bytes)
CREATE http-post-request-angular/tsconfig.app.json (287 bytes)
CREATE http-post-request-angular/tsconfig.spec.json (333 bytes)
CREATE http-post-request-angular/src/favicon.ico (948 bytes)
CREATE http-post-request-angular/src/index.html (307 bytes)
CREATE http-post-request-angular/src/main.ts (372 bytes)
CREATE http-post-request-angular/src/polyfills.ts (2826 bytes)
CREATE http-post-request-angular/src/styles.scss (80 bytes)
CREATE http-post-request-angular/src/test.ts (753 bytes)
CREATE http-post-request-angular/src/assets/.gitkeep (0 bytes)
CREATE http-post-request-angular/src/environments/environment.prod.ts (51 bytes)
CREATE http-post-request-angular/src/environments/environment.ts (662 bytes)
CREATE http-post-request-angular/src/app/app-routing.module.ts (245 bytes)
CREATE http-post-request-angular/src/app/app.module.ts (393 bytes)
CREATE http-post-request-angular/src/app/app.component.html (25757 bytes)
CREATE http-post-request-angular/src/app/app.component.spec.ts (1111 bytes)
CREATE http-post-request-angular/src/app/app.component.ts (229 bytes)
CREATE http-post-request-angular/src/app/app.component.scss (0 bytes)
CREATE http-post-request-angular/e2e/protractor.conf.js (904 bytes)
CREATE http-post-request-angular/e2e/tsconfig.json (274 bytes)
CREATE http-post-request-angular/e2e/src/app.e2e-spec.ts (675 bytes)
CREATE http-post-request-angular/e2e/src/app.po.ts (274 bytes)
√ Packages installed successfully.
```

Now navigate to application directory by using following cd command.

```
> cd .\http-post-request-angular\
```

Now type `ng serve` your application should be running on `http://localhost:4200/`

```
http-post-request-angular app is running!
```

We will use a third party POST request API `https://reqres.in/api/users` which creates a new user. 

Before making the Http Post request in Angular make sure you have added

1. HttpClientModule in app.module.ts file
2. Reusable Injectable Http Service 

If you are new, refer [HttpClient get example](https://www.angularjswiki.com/httpclient/get/) tutorial.  

```
//UserService.ts

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

## HttpClient.post() example 

Now we will make use of `HttpClient.post()` to method to create a User. 

### HttpClient post method syntax

Angular's `HttpClient.post()` method takes three arguments.

1. API Endpoint Url
2. body - the data to submit
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

### HttpClient.post() Url

The `https://reqres.in/api/users` post api, expects name and job as body and after successful submission it will return the data along with id and created date. 

```
//Body

{
    "name": "morpheus",
    "job": "leader"
}

//Response 

{
    "name": "morpheus",
    "job": "leader",
    "id": "666",
    "createdAt": "2022-03-15T10:01:19.233Z"
}

```

We will use Reactive Forms to collect the data from the Angular component. 

Reactive Forms comes up with so many built-in functionalities(like validation) which makes our job simple.

### Adding Reactive Form

We will use FormGroup element to bind the data in the component file. 

In the user component file I have added a FormGroup element which contains name and job as shown below.

```
 addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
  });
```

And user component html, we will add the `mat-form-field` inputs to collect the data. 

```
<h1>Angular Http POST request example</h1>
<mat-card>
  <h2>Enter name and job</h2>
  <form [formGroup]="addUserForm" (ngSubmit)="saveUser()">
    <mat-form-field>
      <input matInput placeholder="Name" formControlName="name" />
    </mat-form-field>
    <br />
    <mat-form-field>
      <input matInput placeholder="Job" formControlName="job" />
    </mat-form-field>
    <br />
    <button [disabled]="!addUserForm.valid" mat-raised-button type="submit">
      Add User
    </button>
  </form>
</mat-card>
<mat-card>
  <h2>List of Users</h2>
  <ng-container *ngFor="let user of users">
    {{ user.name }} - {{ user.job }}<br />
  </ng-container>
</mat-card>
```

Now the UI is ready. 

### Making HTTP POST Request 

We will create a post method in Http Service i.e., in `UserService.ts` file.

```
export class UserService {
  constructor(private http: HttpClient) {}

  public saveUser(user: User): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url, user);
  }
}
```

On form submit we will call the `saveUser` method in user service, which makes HTTP post request and returns the observable of user data of type `any`. 

In the component ts file, we will subscribe to the data returned from the server.
```
user: User;

saveUser() {
    this.user = this.addUserForm.value;
    this.userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);
    });
}
```

To see the returned data, we will log the response using `console.log`.

```
{
createdAt: "2022-03-15T10:56:03.144Z"
id: "389"
job: "developer"
name: "Arunkumar"
}
```

### Displaying the submitted data

Further we can display the newly added users in the UI by creating a new list of users variable.

```
user: User;
users: User[] = [];

saveUser() {
    this.user = this.addUserForm.value;
    this.userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);

      this.users.push({ name: response.name, job: response.job });
    });
}
```

And display the users using `*ngFor`.

```
<h2>List of Users</h2>
  <ng-container *ngFor="let user of users">
    {{ user.name }} - {{ user.job }}<br />
</ng-container>
```

## Angular Http POST request with strongly typed response

The above example uses Observable of `any` to handle all types of data returned from Http Post method. 

The data returned from the server will have two additional properties like `id` and `createdAt`. 

Using `HttpClient.post()` method in Angular we can request strongly typed response from the server. 


We will create an interface which matches with the given returned type.

```
export interface UserInfo {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}
```

Now we will create an HTTP Post request method with strongly typed response in user service.

```
public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
}
```

And in the component ts file, we will subscribe to typed data and display in the UI.

```
saveUserTyped() {
    this.user = this.addUserForm.value;
    this.userService
      .saveUserTyped(this.user)
      .subscribe((response: UserInfo) => {
        console.log(response);

        this.users.push({ name: response.name, job: response.job });
        this.usersTyped.push({
          name: response.name,
          job: response.job,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }
```

## Http post request Angular StackBlitz Demo

Here is the link for StackBlitz demo

Demo : [Http post request Angular](https://stackblitz.com/edit/angular-http-post-request-example)









