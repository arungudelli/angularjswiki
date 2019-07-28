+++
title = "How To Use Angular Pipes in Components & Service ts files"
subtitle = "Use Angular Pipes in Components & Service ts files"
type="post"
summary ="Steps to use angular pipes in components and service ts files 1.Import angular pipe in `app.module.ts` file and add it to the providers array.2.In Component file, import angular pipe & inject the pipe into the constructor.3. And Finally use the angular pipe transform method & pass the required parameters according to pipe defination to format the values."
keywords=["delete component in angular,ng delete component command"]
date="2019-07-28T01:01:05+0000" 
lastmod="2019-07-28T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Use Angular Pipes in Components & Service ts files"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Steps to use angular pipes in components and service ts files

  1. Import angular pipe in `app.module.ts` file and add it to the providers array.
  2. In Component file, import angular pipe & inject the pipe into the constructor.
  3. And Finally use the angular pipe transform method & pass the required parameters according to the pipe defination to format the values.

Now we will understand it further using examples.

## Use Date Pipe in Angular Components & Services ts file

To use date pipe in component & services follow the below steps

1. Import `DatePipe` from `@angular\common` in `app.module.ts` file
2. Add the `DatePipe` to provider array.
3. Inject the `DatePipe` in component constructor file using dependency injection.
4. And finally format the date values using date pipe transform method as shown below.

In `app.module.ts` file add the following code.

```
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AngularpipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And in component ts file use the below code to format the dates.

```
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.scss']
})
export class AngularpipeComponent implements OnInit {

  datePipeString : string;

  constructor(private datePipe: DatePipe) { 
    this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
    console.log(this.datePipeString);
    //2019-07-22
  }

  ngOnInit() {
  }

}
```

And transform method accepts same parameters as datepipe, you can see it in visual studio code intelligence as shown below.

The above method works in every verison of Angular.

In laterst version of Angular i.e., from version 6 we can directly use angular pipes's public methods inside the components to format the values.

For example, we use date pipe format method `formatMethod` in component file by importing it from the `@angular/common` as shown below.


```
import { Component, OnInit, Inject,LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.scss']
})
export class AngularpipeComponent implements OnInit {

  datePipeString : string;

  constructor(@Inject(LOCALE_ID) private locale: string) { 
    this.datePipeString = formatDate(Date.now(),'yyyy-MM-dd',this.locale);
    console.log(this.datePipeString);
  }

  ngOnInit() {
  }

}
```

We have to inject the locale information into the component constructor to pass it to the `formatDate` method

The adventage of this kind of approach is, it's not required to add date pipe to app module providers and injecting it into the component constructor.

[Angular Date Pipe & formatting date times in Angular with examples](https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/) 

## Use Currency Pipe in Angular Components & Services ts file

Now we will use the above two methods to use angular currency pipes in components & services ts file.

Use currency pipe in componets & servcies ts file by injecting currency pipe into the component constructor as shown below.

```
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.scss']
})
export class AngularpipeComponent implements OnInit {

  currencyPipeString : string;

  constructor(private datePipe: DatePipe) { 
    this.currencyPipeString = currencyPipe.transform(100,'USD');
    console.log(this.currencyPipeString);
    //$100.00
  }

  ngOnInit() {
  }

}
```

You might get `NullInjectorError: No provider for CurrencyPipe!` Error if you forgot to add the currency pipe to the app module providers array as shown below.

```
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AngularpipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now to use currency pipe in components, without injecting it into the component constructors we can use currency pipe public methods `formatCurrency` & `getCurrencySymbol` as shown below.

```
import { Component, OnInit, Inject,LOCALE_ID } from '@angular/core';
import { formatCurrency,getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.scss']
})
export class AngularpipeComponent implements OnInit {

  currencyPipeString : string;

  constructor(@Inject(LOCALE_ID) private locale: string) { 
    this.currencyPipeString = formatCurrency(200,this.locale,getCurrencySymbol('USD', 'wide'));
    console.log(this.currencyPipeString);
    //$200
  }

  ngOnInit() {
  }

}
```

[Angular Currency Pipe & Formatting Currency In Angular](https://www.angularjswiki.com/angular/angular-currency-pipe-formatting-currency-in-angular/)