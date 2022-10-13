+++
title="ng generate pipe command in Angular CLI"
summary="ng generate pipe command is used to create pipes in Angular applications"
keywords=["ng generate pipe,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="ng-generate-service"
next="ng-generate-guard"
linktitle="ng generate pipe"
[menu.angularcli]
parent="angularcli"
weight=21

+++

**`ng generate pipe` command is used to create pipes in Angular applications** 

{{%toc%}}

## `ng generate pipe` syntax 

`ng generate pipe` takes pipe name as parameter.

Additionally we can pass different options as well.

```
ng generate pipe [name] [options]
```

or you can use shorthand syntax

```
ng generate p [name] [options]
```

## `ng generate pipe` arguments

`ng generate pipe` takes one argument i.e, `name`, nothing but pipe name.

The `name` type is string.

## `ng generate pipe` options

`ng generate pipe` accepts 7 different types of options.

1. export
2. flat
3. module
4. project
5. skip-import	
6. skip-tests	
7. standalone



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
         The declaring NgModule exports this pipe.
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
        project
      </td>
      <td>
         The name of the project.

      </td>
       <td>
     string
      </td>
      
    </tr>
  
      <td>
        skip-import
      </td>
      <td>
         Do not import this pipe into the owning NgModule.


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
         Do not create "spec.ts" test files for the new pipe.

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
         Whether the generated pipe is standalone.

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

## `ng generate pipe` example 

For example if you want to create a pipe named square, use `ng generate pipe square` command. 

```
CREATE src/app/square.pipe.spec.ts (187 bytes)
CREATE src/app/square.pipe.ts (217 bytes)
UPDATE src/app/app.module.ts (2931 bytes)
```
