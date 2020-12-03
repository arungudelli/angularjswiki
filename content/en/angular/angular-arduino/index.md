+++
title = "Combining Angular With Arduino"
subtitle = "Angular & Arduino"
summary ="When you think about Angular and Arduino, one screams software and the other hardware. While both to some extent related to programmable systems and digital creativity, the two would not typically overlap or intertwine for any particular purpose."
keywords=["Angular, Arduino"]
date="2020-12-02T00:00:05+0000"
lastmod="2020-12-02T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Angular 11 and typescript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

When you think about Angular and Arduino, one screams software and the other hardware. While both to some extent related to programmable systems and digital creativity, the two would not typically overlap or intertwine for any particular purpose.

Angular, as you’re likely aware if you’re reading here, is a Google-backed, open-source development framework for web applications. Initially released as AngularJS back in 2012, the framework has now [reached version Angular 11](https://www.angularjswiki.com/angular/angular-11-released/), and has only grown more useful for and popular among software developers over time.

In some ways, Arduino is the hardware-infused version of a similar concept (though that’s a bit of a simplistic way to put it). [Per a thorough explanation on How-To Geek](https://www.howtogeek.com/65963/what-is-arduino/), Arduino is an “open-source electronics prototyping platform based on flexible, easy-to-use hardware and software.” In more practical terms, Arduino is a physical circuit board (which can come in a few different forms), on which you arrange electrical connections. It also has accompanying software through which you can dictate what those connections accomplish, so as to build a functioning piece of electrical equipment.


{{< figure src="/img/angular-Arduino.jpg" title="angular Arduino" alt="angular Arduino">}}
Image: Unsplash


For those who aren’t familiar with why exactly people bother with Arduino, [Digital Trends’ list of cool projects](https://www.digitaltrends.com/cool-tech/cool-arduino-projects/) people have made with these systems gives you some idea. People have built everything from robots, to fingerprint scanners, to LED lighting displays. As you’ll see though, there is variety in the complexity of Arduino projects — which brings us to the concept of coupling the platform with Angular.

On its own, Arduino has available options that are designed to facilitate more complex projects. [Altium explains in a post on Arduino schematics](https://www.altium.com/solution/arduino-schematic) that there is in fact circuit board design software that helps designers to modify schematics to add functionality. That is to say, beginning with a standard Arduino board like an Uno, Mega, or Zero, a designer can use software to manipulate and expand schematics to enable more complex hardware setups.

This can be done alongside the Arduino software with impressive results. However, in creating a more complex or capable product, it is also possible to pair an enhanced Arduino board with an Angular-driven app to broaden functionality. One example we’ve seen of a project like this concerns a mock version of a NEST-style automated thermostat. And this is actually a neat example for explaining the general idea of pairing Arduino with Angular. On its own, an Arduino can be made to recognize and display temperature, and even set the air conditioning or heating in one’s home environment. Through a cleverly designed and connected Angular project though, this same Arduino product can essentially gain its own app. Done well, this means the app can display data collected by the Arduino, as well as send commands back to the product.

It’s an ambitious project, but certainly an interesting one for those interested in designing their own applications and devices. Ultimately, it’s one of the more accessible open-source methods for pairing a software design with a homemade hardware product.
