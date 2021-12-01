+++
title = "How to generate component in subdirectory or specific folder in Angular using ng generate"
subtitle = "ng generate component in subdirectory"
type="post"
summary ="Two ways to get query parameters from URL in Angular 1. Using queryParams 2. Using queryParamMap"
keywords=["query parameters,queryParamMap,queryParams"]
date="2021-01-20T00:00:06+0000"
lastmod="2021-01-20T00:01:49+0000"
draft=true
authors = ["admin"]

[image]
  caption = "ng-template"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

We can use `ng generate component` command to create component in sub-directory or specific folder. 

Here are the steps to generate component in a specific folder in Angular.

1. Open terminal at Angular project root directory.
2. Pass the relative path which contains folder name to the `ng generate component` command.

```
> ng generate component product/productlist 

CREATE src/app/product/productlist/productlist.component.html (26 bytes)
CREATE src/app/product/productlist/productlist.component.spec.ts (661 bytes)
CREATE src/app/product/productlist/productlist.component.ts (296 bytes)
CREATE src/app/product/productlist/productlist.component.scss (0 bytes)
UPDATE src/app/app.module.ts (681 bytes)

```

And also we can see the updated `app.module.ts` file

```
import { ProductlistComponent } from './product/productlist/productlist.component';

```

If you see the source code structure, `ng generate component` will create two directories `product` and `productlist`. 

Inside product component we may have other components like productview etc. 

If you don't want to create child directories for each and every child components of products, we should use `--flat` option.

Let's create component without creating sub-folder for child components. 

```
ng generate component product/productlist --flat
CREATE src/app/product/productlist.component.html (26 bytes)
CREATE src/app/product/productlist.component.spec.ts (661 bytes)
CREATE src/app/product/productlist.component.ts (296 bytes)
CREATE src/app/product/productlist.component.scss (0 bytes)
UPDATE src/app/app.module.ts (669 bytes)
```

Let's create an other component in the same directory i.e., product, which displays the product overview information.

```
ng generate component product/productoverview --flat
CREATE src/app/product/productoverview.component.html (30 bytes)
CREATE src/app/product/productoverview.component.spec.ts (689 bytes)
CREATE src/app/product/productoverview.component.ts (312 bytes)
CREATE src/app/product/productoverview.component.scss (0 bytes)
UPDATE src/app/app.module.ts (780 bytes)
```

We have created two components in the same directory. 

In this way we can organize similar components in the same directory without creating folders for each component.