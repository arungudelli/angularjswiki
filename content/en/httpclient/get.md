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

All methods in Angular's `HttpClient` return an RxJS Observable.

And the type of Observable can be anything, based upon the requested type.

{{%toc%}}

## Why Angular Uses Observable for HttpClient?

Older Angularjs(1.x) framework uses promises to do HTTP requests.

However there few limitations while using promises. 

And Observables are very powerful when compared with promises. 

We can easily write retry mechanism in case of a failed http request.
And you can't do this with promises at all(or easily). 

And we can't cancel http requests with promises. 

A real world case would be auto complete search where for every keystroke we will call a back-end server to get the results.

We can trigger 10 Http requests, and most of the time we will be only interested in the very last http request, and if other 9 call are still in pending state, with the use of Observables we can simply cancel all of them.

And with the help of Observables, with each keystroke we can throttle 300 ms before sending the actual Xhr i.e., http request. 

There are other useful benefits such as 

1. We can make use of all the Rxjs operators.
2. We can combine multiple http requests as streams
3. Thinking reactively in your whole app

And the list goes on.. 

All we need to learn is how to make use of different rxjs operators with HttpClient Observable. 

## HttpClient Observable example

Follow the below steps to create an angular application which uses HttpClient Observable

As a best practice create a service which makes http request calls with the help of HttpClient module.

### Creating a Service which return  Observable

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








