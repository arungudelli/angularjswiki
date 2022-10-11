+++
title="ng generate class command in Angular CLI"
summary="ng generate class command is used to create classes in Angular applications"
keywords=["ng generate class,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="ng-generate"
next="ng-generate-component"
linktitle="ng generate class"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate class` command is used to create classes in Angular applications** 

{{%toc%}}

## `ng generate class` syntax 

`ng generate class` takes class name as parameter.

Additionally we can pass different options as well.

```
ng generate class [name] [options]
```

or you can use shorthand syntax

```
ng generate d [name] [options]
```

## `ng generate class` arguments

`ng generate class` takes one argument i.e, `name`, nothing but class name.

The `name` type is string.

## `ng generate class` options

`ng generate class` accepts 3 different types of options.

1. project
2. skip-tests	
3. type


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
       project

      </td>
      <td>
         The name of the project.

      </td>
       <td>
       string
      </td>
       </tr>

    <tr>
      <td>
        skip-tests	

      </td>
      <td>
        Do not create "spec.ts" test files for the new class.

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
       type 
      </td>
      <td>
         
       Adds a developer-defined type to the filename, in the format "name.type.ts".

      </td>
       <td>
       string
      </td>
    
    </tr>
  
  </tbody>

</table></div>

## `ng generate class` example 

For example if you want to create a class named product, use `ng generate class product` command. 

```
CREATE src/app/product.spec.ts (158 bytes)
CREATE src/app/product.ts (25 bytes)
```
