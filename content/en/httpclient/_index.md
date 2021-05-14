+++
title = "Introduction to Angular HttpClient with examples"
subtitle = "Using HttpClient in Angular with examples"
date = 2021-05-10T00:00:00
lastmod = 2021-05-10T01:00:00
draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
next="httpclient/observable"
featured="Angular.png"
authors = ["admin"]
summary ="Angular provides a built in HttpClient API to communicate with the back-end server for such operations."
keywords=["Angular HttpClient,"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.httpclient]
  parent = "HttpClient"
  weight = 1

+++

Most of the web applications use HTTP protocol to get the data from the server or to post the data to the server.

Angular provides a built in HttpClient API to communicate with the back-end server for such operations.

{{%toc%}}

## What is Angular HttpClient?

**Angular HttpClient is service class part of `@angular/common/http` which is used to performs HTTP requests.** 

HttpClient comes with several built-in methods to communicate with the back-end server via HTTP protocol.

## Angular HttpClient features

Angular HttpClient depends upon on the `XMLHttpRequest` interface exposed by browsers.

It has so many features such as 

1. We can request typed response objects.
2. Better error handling when a server request fails, and retry mechanism if required.
3. We can easily mock the HTTP backend server using `@angular/common/http/testing` library for unit testing purpose.
4. Intercepting Http Request and Responses.

## Steps to Use HttpClinet in Angular

To use HttpClient in Angular applications follow the below steps.

1. import `HttpClientModule` from `@angular/common/http` in Angular's `app.module.ts` file.
2. Add `HttpClientModule` to the imports array of `NgModule`.
3. Finally inject the `HttpClient` service in application class or service as a dependency.

### Adding in app.module.ts file

We need to import the `HttpClientModule` after BrowserModule in imports array as shown below.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

### Using HttpClient Service.

Now we can inject HttpClient service in constructor of application class or service.

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {
  constructor(private httpClient: HttpClient) { }
}
```

Now we can use `this.httpClient` object to perform HTTP requests from the application service.