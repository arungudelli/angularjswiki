+++
title="ng generate library command in Angular CLI"
summary="ng generate library command is used to create libraries in Angular applications"
keywords=["ng generate library,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="ng-generate-interface"
next="ng-generate-service"
linktitle="ng generate library"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate library` command is used to create libraries in Angular applications** 

{{%toc%}}

## `ng generate library` syntax 

`ng generate library` command takes one parameter i.e, name 


Additionally we can pass different options as well.

```
ng generate library [name] [options]
```

or you can use shorthand syntax

```
ng generate lib [name] [options]
```

## `ng generate library` arguments

`ng generate library` command takes one argument i.e, `name`.

1. name : name of the library.

The `name` type is string.

## `ng generate library` options

`ng generate library` accepts 5 different types of options.

1. entry-file
2. prefix
3. skip-install
4. skip-package-json
5. skip-ts-config

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
     </tr>
  </thead>
  <tbody>
  
    <tr>
      <td>
       entry-file
      </td>
      <td>
         The path at which to create the library's public API file, relative to the workspace root.

      </td>
       <td>
       string
      </td>
      <td>
       public-api
      </td>
       </tr>

    <tr>
      <td>
        prefix

      </td>
      <td>
       A prefix to apply to generated selectors.

Aliases: -p
      </td>
       <td>
       string
      </td>
      <td>
      lib
      </td>
      
    </tr>
 <tr>
      <td>
      skip-install
      </td>
      <td>
         Do not install dependency packages.

      </td>
       <td>
       boolean
      </td>
      <td>
       false
      </td>
       </tr>

    <tr>
      <td>
        skip-package-json

      </td>
      <td>
       Do not add dependencies to the "package.json" file.
      </td>
       <td>
       boolean
      </td>
      <td>
      false
      </td>
      
    </tr>
    <tr>
      <td>
        skip-ts-config

      </td>
      <td>
       Do not update "tsconfig.json" to add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.
      </td>
       <td>
       boolean
      </td>
      <td>
      false
      </td>
      
    </tr>
   
  </tbody>

</table></div>

## `ng generate library` example 

For example if you want to create a library named product, use `ng generate i product` command. 

```
CREATE src/app/product.library.ts (29 bytes)
```

