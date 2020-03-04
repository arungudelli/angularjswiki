+++
title = "How to create custom pipes in Angular"
date = 2020-02-11T00:00:00
lastmod = 2020-02-11T01:00:00
draft = true  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes"
next="pipes/jsonpipe"
featured="pipes-list.jpg"
authors = ["admin"]
summary ="Steps to create custom pipes in Angular"
keywords=["Angular custom pipe,custom Pipe"]

# Add menu entry to sidebar.

linktitle = "CustomPipe"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 1
+++

Steps to create custom pipes in Angular

1. Define a meaningful and useful name for custom pipe.
2. Create a file named `custom.pipe.ts` in your project.
3. Add a Class named "CustomPipe".
4. Import Pipe and PipeTransform from `@angular/core`.
5. Use The Pipe decorator (@Pipe) to define the pipe name that will be used within the components. I have given pipe name as `custom`.   
6. The custom pipe class should implement PipeTransform interface.
7. And then implement PipeTransform's transform method that accepts an input value followed by optional pipe parameters and returns the transformed value.
8. Add the reference to custom pipe in `app.module.ts` file.
9. Add the custom pipe class name to the declaration array of `app.module.ts`. 
10. Finally use the custom pipe in components by using the name given in Pipe decorator. i.e., "custom".

```
   import { Pipe, PipeTransform } from '@angular/core';
   @Pipe({
     name: 'custom'
   })
   export class CustomPipe implements PipeTransform {
        transform(value: unknown, ...args: unknown[]): unknown {
           return null;
         }
    }
```

And in component html file use the custom pipe as shown below.

```
{{ input | custom }}
```