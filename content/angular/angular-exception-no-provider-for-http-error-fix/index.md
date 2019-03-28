+++
title = "Angular EXCEPTION: No Provider For Http! Error Fix"
menuTitle = "No Provider For Http!"
description ="To avoid Angular EXCEPTION: No provider for Http! error we need to import HttpClientModule from &#039;@angular/common/http&#039;."
keywords="angular,exception: no provider for http!,httpclientmodule,httpmodule"
og_image="https://www.angularjswiki.com/wp-content/uploads/2018/09/EXCEPTION-No-provider-for-Http.jpeg"
+++

## EXCEPTION: No provider for Http!:

To avoid Angular EXCEPTION: No provider for Http! error we need to import _HttpClientModule_ from &#8216;_@angular/common/http_&#8216;.

<pre>import { HttpClientModule } from '@angular/common/http';

@NgModule({
imports: [
BrowserModule,
HttpClientModule,
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }

</pre>

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/09/EXCEPTION-No-provider-for-Http.jpeg "EXCEPTION No provider for Http")


And this _HttpClientModule_ introduced in Angular 4.3.

If you are using earlier versions of Angular import _HttpModule_ from &#8216;_@angular/http_&#8216; to fix EXCEPTION: No provider for Http!

<pre>import { HttpModule } from '@angular/http';

@NgModule({
imports: [
BrowserModule,
HttpModule
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }</pre>

And this _HttpModule_ is deprecated from Angular 5.2 version.