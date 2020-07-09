+++
title = "How to get current route in Angular"
subtitle = "get current route Url in Angular"
summary ="Steps to get current route in Angular. 1. Import Router,NavigationEnd from angular/router and in the constructor. 2. Subscribe to the NavigationEnd event of the router.3. Get the current route Url by accessing NavigationEnd url property."
keywords=["get current route Angular,current route url angular,angular NavigationEnd"]
date="2020-07-07T01:01:05+0000"
lastmod="2020-07-08T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

+++

Steps to get current route in Angular.

1. Import Router,NavigationEnd from '@angular/router' and in the constructor.
2. Subscribe to the `NavigationEnd` event of the router.
3. Get the current route url by accessing NavigationEnd's url property.

Now we will take an example and understand it further.

I have created an Angular app which contains three routes. About,Service and Dashboard.

```
import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

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

