+++
title = "How to create interface in folder in Angular"
subtitle = "ng generate interface in folder Angular"
type="post"
summary ="Steps to create interface in folder in Angular. 1. Open terminal in Angular project root directory. 2. Pass interface name along with folder name to the `ng generate interface` command."
lastmod="2021-12-01T01:00:00+0000"
draft=false
authors = ["admin"]

[image]
  caption = "ng-generate"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Steps to create interface in folder in Angular using `ng generate interface` command.

1. Open terminal in Angular project root directory.
2. Pass interface name along with folder name to the `ng generate interface` command.

```
>ng generate interface model/product
CREATE src/app/model/product.ts (29 bytes)
```

There are several advantages, when we create interfaces in a separate folder. 

Interfaces considered as models, which represents real world data entities.

We can create multiple interfaces in the same folder by passing relative path to the `ng generate interface` command.

```
ng generate interface model/productinformation
CREATE src/app/model/productinformation.ts (40 bytes)
```

The above code creates an another interface inside the same folder i.e., model.

If the application is big, we will have so many interfaces.

It's always a good idea to place such interfaces in a separate folder in our Angular application, so that we can easily manage them.

1. Our source code structure will be good. 
2. Navigation will be simple.