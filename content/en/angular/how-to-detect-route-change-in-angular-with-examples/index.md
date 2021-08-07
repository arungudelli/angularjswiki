+++
title = "How to detect route change in Angular with examples"
subtitle = "get current route Url in Angular"
summary ="Steps to get current route URL in Angular. 1. Import Router,NavigationEnd from angular/router and inject in the constructor. 2. Subscribe to the NavigationEnd event of the router.3. Get the current route Url by accessing NavigationEnd url property."
keywords=["get current route Angular,current route url angular,angular NavigationEnd"]
date="2020-07-07T01:01:05+0000"
lastmod="2020-07-08T00:00:00+0000"
type="post"
draft=true
authors = ["admin"]

+++

Steps to detect route change in Angular.

1. Import Router, Event, NavigationStart, NavigationEnd, NavigationError from '@angular/router'.
2. And inject router in the constructor.
2. Subscribe to the NavigationStart, NavigationEnd, NavigationError events of the router.
3. detect the change in URL route by accessing NavigationEnd's url or NavigationStart's url property.

Now we will go through an example to understand it further.

We will take similar example as explained in [How to get current route URL in Angular
](https://www.angularjswiki.com/angular/how-to-get-current-route-in-angular/)

I have created an Angular app which contains three routes. About,Service and Dashboard.

```
import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Get Current Url Route Demo';
  currentRoute: string;

  constructor(private router: Router){
    console.log(router.url);
    
    router.events.filter(event => event instanceof NavigationEnd)
          .subscribe(event => 
           {
              this.currentRoute = event.url;          
              console.log(event);
           });
    }
}
```

I have created a variable called `currentRoute`, to display current router url value in the component HTML file.

In the subscribe event of `NavigationEnd`, I am updating `currentRoute` value.

```
<ul>    
  <li routerLinkActive="active">
     <a [routerLink]="['/about']">About</a>
  </li>
  <li routerLinkActive="active">
     <a [routerLink]="['/service']">Service</a>
  </li>
  <li routerLinkActive="active">
     <a [routerLink]="['/dashboard']">Dashboard</a>
  </li>
</ul>

  The current Route Is {{currentRoute}}

  <router-outlet></router-outlet>

```

Here is the demo.


{{< video src="get-current-route-demo.mp4" srcwebm="get-current-route-demo.webm">}} 


You might get current route by accessing `router.url` as well.

But If you are navigating the routes with Hash location strategy, the `router.url` is always return "/".

So it's advisable to listen for `NavigationEnd` event of router to get the current route url in Angular.

{{< figure src="NavigationEndEvent.PNG" title="NavigationEndEvent" alt="NavigationEndEvent">}}

Further read:

1. [Query Parameters in Angular with examples](https://www.angularjswiki.com/angular/query-parameters-in-angular/)
2. [How to Get Query Parameters from URL route in Angular](https://www.angularjswiki.com/angular/get-query-parameters-in-angular/)

