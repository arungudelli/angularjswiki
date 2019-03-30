+++
title = "Angular EXCEPTION: No Provider For Http! Error Fix"
subtitle = "Fixing EXCEPTION: No Provider For Http! error"
type="post"
summary ="To avoid Angular EXCEPTION: No provider for Http! error we need to import HttpClientModule from @angular/common/http."
keywords=["angular,exception: no provider for http!,httpclientmodule,httpmodule"]
date="2019-01-30T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
draft=false
authors = ["admin"]
[image]
  caption = "EXCEPTION: No Provider For Http! Error Fix"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

To avoid Angular EXCEPTION: No provider for Http! error we need to import `HttpClientModule` from `@angular/common/http`.

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

And this `HttpClientModule` introduced in Angular 4.3.

If you are using earlier versions of Angular import `HttpModule` from `@angular/http` to fix EXCEPTION: No provider for Http!

```
import { HttpModule } from '@angular/http';

@NgModule({
imports: [
BrowserModule,
HttpModule
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }
```

And this `HttpModule` is deprecated from Angular 5.2 version.