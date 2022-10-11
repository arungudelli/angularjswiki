+++
title="ng generate directive command in Angular CLI"
summary="ng generate directive command is used to create directives in Angular applications"
keywords=["ng generate directive,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="ng-generate-component"
next="ng-generate-interface"
linktitle="ng generate directive"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate directive` command is used to create directives in Angular applications** 

{{%toc%}}

## `ng generate directive` syntax 

`ng generate directive` takes directive name as parameter.

Additionally we can pass different options as well.

```
ng generate directive [name] [options]
```

or you can use shorthand syntax

```
ng generate d [name] [options]
```

## `ng generate directive` arguments

`ng generate directive` takes one argument i.e, `name`, nothing but directive name.

The `name` type is string.

## `ng generate directive` options

`ng generate directive` accepts 9 different types of options.

1. export
2. flat
3. module
4. prefix
5. project
6. selector
7. skip-import	
8. skip-tests	
9. standalone



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
       export

      </td>
      <td>
         The declaring NgModule exports this directive.
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
        flat
      </td>
      <td>
        When true (the default), creates the new files at the top level of the current project.


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
       module 
      </td>
      <td>
         
        The declaring NgModule.

Aliases: -m 

      </td>
       <td>
       string
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
        selector

      </td>
      <td>
      The HTML selector to use for this directive.

      </td>
       <td>
      string
      </td>
     
    </tr>
    <tr>
      <td>
        skip-import
      </td>
      <td>
         Do not import this directive into the owning NgModule.


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
       standalone

      </td>
      <td>
         Whether the generated directive is standalone.

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

## `ng generate directive` example 

For example if you want to create a directive named product, use `ng generate directive product` command. 

```
CREATE src/app/product.directive.spec.ts (228 bytes)
CREATE src/app/product.directive.ts (143 bytes)
UPDATE src/app/app.module.ts (471 bytes)
```
