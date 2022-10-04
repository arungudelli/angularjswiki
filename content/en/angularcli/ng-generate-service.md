+++
title="ng generate service Angular CLI Command"
summary=""
keywords=["ng add,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="angularcli"
next="ng analytics"
linktitle="ng generate service"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate service` command is used to create libraries in Angular applications** 

{{%toc%}}

## `ng generate service` syntax 

`ng generate service` command takes one parameter i.e, name 


Additionally we can pass different options as well.

```
ng generate service [name] [options]
```

or you can use shorthand syntax

```
ng generate s [name] [options]
```

## `ng generate service` arguments

`ng generate service` command takes one argument i.e, `name`.

1. name : name of the service.

The `name` type is string.

## `ng generate service` options

`ng generate service` accepts 3 different types of options.

1. flat
2. project
3. skip-tests	
	


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
       flat
      </td>
      <td>
         When true (the default), creates files at the top level of the project.

      </td>
       <td>
       boolean
      </td>
      <td>
       true
      </td>
       </tr>

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
        Do not create "spec.ts" test files for the new service.

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

## `ng generate service` example 

For example if you want to create a service named product, use `ng generate  product` command. 

```
CREATE src/app/product.service.spec.ts (362 bytes)
CREATE src/app/product.service.ts (136 bytes)
```

