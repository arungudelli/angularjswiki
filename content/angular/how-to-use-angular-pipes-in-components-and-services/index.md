+++
title = "How To Use Angular Pipes in Components & Service ts files"
subtitle = "Use Angular Pipes in Components & Service ts files"
type="post"
summary ="Steps to use angular pipes in components and service ts files 
  1. Import angular pipe in `app.module.ts` file and add it to the providers array.
  2. In Component file, import angular pipe & inject the pipe into the constructor.
  3. And Finally use the angular pipe transform method & pass the required parameters according     to pipe defination to format the values."
keywords=["delete component in angular,ng delete component command"]
date="2019-02-08T01:01:05+0000"
lastmod="2019-02-09T04:44:37+0000"
draft=true
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
  3. And Finally use the angular pipe transform method & pass the required parameters according     to pipe defination to format the values.

Now we will understand it further using examples.

## Use Date Pipe in Component & Services ts file

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

For example we use date pipe format method `formatMethod` in component file by importing it from the `@angular/common` as shown below.


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
