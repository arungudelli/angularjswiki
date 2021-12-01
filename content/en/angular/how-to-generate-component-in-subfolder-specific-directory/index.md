+++
title = "How to generate component in subdirectory or specific folder in Angular using ng generate"
subtitle = "ng generate component in subdirectory"
type="post"
summary ="steps to generate component in a specific folder in Angular. 1. Open terminal at Angular project root directory. 2. Pass the relative path which contains folder name to the `ng generate component` command"
lastmod="2021-12-01T00:00:00+0000"
draft=true
authors = ["admin"]

[image]
  caption = "ng-generate"

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

{{< figure src="/img/blog/component-in-subdirectory-angular.png" title="component in subdirectory angular" alt="component-in-subdirectory-angular">}}

If you see the source code structure, `ng generate component` will create two directories `product` and `productlist`. 

Inside product component we may have other components like productview etc. 

If you don't want to create sub directories for each and every child components of products, we should use `--flat` option.

Let's create component without creating sub-folder for child components. 

```
ng generate component product/productlist --flat
CREATE src/app/product/productlist.component.html (26 bytes)
CREATE src/app/product/productlist.component.spec.ts (661 bytes)
CREATE src/app/product/productlist.component.ts (296 bytes)
CREATE src/app/product/productlist.component.scss (0 bytes)
UPDATE src/app/app.module.ts (669 bytes)
```

Let's create an other component in the same directory i.e., product overview, which displays the product information.

```
ng generate component product/productoverview --flat
CREATE src/app/product/productoverview.component.html (30 bytes)
CREATE src/app/product/productoverview.component.spec.ts (689 bytes)
CREATE src/app/product/productoverview.component.ts (312 bytes)
CREATE src/app/product/productoverview.component.scss (0 bytes)
UPDATE src/app/app.module.ts (780 bytes)
```

We have created two components in the same directory. 

{{< figure src="/img/blog/multiple-components-in-same-directory.png" title="multiple-components-in-same-directory" alt="multiple-components-in-same-directory">}}

In this way we can organize similar components in the same directory without creating folders for each component.