+++
title = "How to detect route change in Angular with examples"
subtitle = "detect change in url route Angular"
summary ="Steps to detect route change in Angular. 1. Import Router, Event, NavigationStart, NavigationEnd, NavigationError from '@angular/router'. 2. And inject router in the constructor.3. Subscribe to the NavigationStart, NavigationEnd, NavigationError events of the router. 4. detect the change in URL route by accessing NavigationEnd's url or NavigationStart's url property"
keywords=["detect route change angular,angular NavigationStart,angular NavigationEnd"]
date="2021-08-06T01:01:05+0000"
lastmod="2021-08-06T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

+++

Steps to detect route change in Angular application Urls.

1. Import Router, Event, NavigationStart, NavigationEnd, NavigationError from '@angular/router'.
2. And inject router in the constructor.
3. Subscribe to the NavigationStart, NavigationEnd, NavigationError events of the router.
4. detect the change in URL route by accessing NavigationEnd's url or NavigationStart's url property.

We can add progress spinner or progress bar whenever a route change detected in Angular applications.

Now we will go through an example to understand it further.

We will take similar example as explained in [How to get current route URL in Angular
](https://www.angularjswiki.com/angular/how-to-get-current-route-in-angular/)

I have created an Angular app which contains three routes. Aboutus,Services and Contactus.

```
import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'detect-route-change';
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            console.log(event);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });

}
}

```

Lets go deep into the code, we are subscribing to NavigationStart,NavigationEnd events of router. 

Whenever there is a change in angular router, first it will call NavigationStart method as we have subscribed to it. 

Here we can create a variable which indicates whether we have to show loading indicators such as progress spinner or progress bar.

After navigating to the required route, NavigationEnd event will be called.

Here we can hide the loading indicators.

I have created a variable called `currentRoute`, which indicates the current router url value in the component HTML file.

In the subscribe event of `NavigationEnd`, we can change the `currentRoute` value.

```
<h1>Detect Route Change Angular</h1>
For the Tutorial <a href="https://www.angularjswiki.com/angular/how-to-get-current-route-in-angular/">Visit Angular Wiki</a>
<ul>  
  <li routerLinkActive="active">
    <a [routerLink]="['/']">Home</a>
 </li>  
  <li routerLinkActive="active">
     <a [routerLink]="['/aboutus']">About Us</a>
  </li>
  <li routerLinkActive="active">
     <a [routerLink]="['/services']">Services</a>
  </li>
  <li routerLinkActive="active">
     <a [routerLink]="['/contactus']">Contact Us</a>
  </li>
</ul>

  The current Route Is {{currentRoute}}

<router-outlet></router-outlet>

```

Here is the demo.


{{< video src="get-current-route-demo.mp4" srcwebm="get-current-route-demo.webm">}} 

{{< figure src="NavigationEndEvent.PNG" title="NavigationEndEvent" alt="NavigationEndEvent">}}

Further read:

1. [Query Parameters in Angular with examples](https://www.angularjswiki.com/angular/query-parameters-in-angular/)
2. [How to Get Query Parameters from URL route in Angular](https://www.angularjswiki.com/angular/get-query-parameters-in-angular/)

