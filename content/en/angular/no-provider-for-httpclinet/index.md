+++
title = "How to fix No provider for HttpClient error in Angular"
subtitle = "Fixing NullInjectorError: No provider for HttpClient! error"
type="post"
summary ="To fix NullInjectorError: No provider for HttpClient! follow the below steps 1. Open `app.module.ts` file 2. Import HttpClientModule from @angular/common/http. 3. Add `HttpClientModule` to the @NgModule imports array."
keywords=["angular,NullInjectorError: No provider for HttpClient!,httpclientmodule"]
date="2020-09-19T00:00:05+0000"
lastmod="2020-09-19T00:00:07+0000"
draft=true
authors = ["admin"]
[image]
  caption = "EXCEPTION: No Provider For Http! Error Fix"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

To fix NullInjectorError: No provider for HttpClient! error in Angular follow the below steps.

1. Open `app.module.ts` file of Angular Application.
2. Import `HttpClientModule` from `@angular/common/http`.
3. Add `HttpClientModule` to the @NgModule imports array. 

HttpClient is Angular's way of communicating with a remote server over HTTP. 

Ideally your `AppModule` class should be like this below.

```
import { HttpClientModule } from '@angular/common/http';

@NgModule({
imports: [
BrowserModule,
HttpClientModule,
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }
```

As explained in my previous article [EXCEPTION: No Provider For Http!](https://www.angularjswiki.com/angular/angular-exception-no-provider-for-http-error-fix/)
`HttpClientModule` introduced in version 4.3 of Angular.

The full stack trace of error will be 

{{% alert warning%}}
Error: StaticInjectorError[HttpClient]: 
  StaticInjectorError[HttpClient]: 
    NullInjectorError: No provider for HttpClient!
{{% /alert%}}

Most probably people will get the above error if they are upgrading their Angular application to the [latest versions](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/).

And people might forgot to add one of the above steps, like adding `HttpClientModule` to the @NgModule imports array.

## Fixing No provider for HttpClient! error while running tests

And you might get this error while running your tests.

Then you should add `HttpClientModule` to your imports array of `TestBed.configureTestingModule`

```
TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FlexSearchService]
    });
```    

or If you are mocking the data, Then follow the below steps.

1. Open your `.spec` file. 
2. import `HttpClientTestingModule`  from '@angular/common/http/testing'
3. Add `HttpClientTestingModule` to the imports array of TestBed.configureTestingModule`

So your final .spec file should be like this.

```
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});

```
