+++
title="ng generate component command in Angular CLI"
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
linktitle="ng generate component"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate component` command is used to create components in Angular applications** 

## `ng generate component` syntax 

The syntax of `ng generate component` takes component name as parameter.

Additionally we can pass different options as well.

```
ng generate component [name] [options]
```

or you can use shorthand notation

```
ng generate c [name] [options]
```

## `ng generate component` arguments

`ng generate component` takes one argument i.e, `name`, nothing but component name.

The `name` type is string.

## `ng generate component` options

`ng generate component` accepts 17 different types of options.

1. change-detection
2. display-block
3. export
4. flat
5. inline-style
6. inline-template
7. module
8. prefix
9. project
10. selector
11. skip-import
12. skip-selector
13. skip-tests
14. standalone
15. style
16. type
17. view-encapsulation


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
       change-detection	

      </td>
      <td>
         The change detection strategy to use in the new component.

Aliases: -c
      </td>
       <td>
       Default | OnPush
      </td>
      <td>
       Default
      </td>
    </tr>

    <tr>
      <td>
        display-block
      </td>
      <td>
         Specifies if the style will contain :host { display: block; }.

Aliases: -b


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
        export
      </td>
      <td>
         The declaring NgModule exports this component.


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
         Create the new files at the top level of the current project.


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
        inline-style
      </td>
      <td>
         Include styles inline in the component.ts file. Only CSS styles can be included inline. By default, an external styles file is created and referenced in the component.ts file.

Aliases: -s


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
        inline-template	

      </td>
      <td>
        Include template inline in the component.ts file. By default, an external template file is created and referenced in the component.ts file.

Aliases: -t	



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
         The prefix to apply to the generated component selector.

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
         The HTML selector to use for this component.
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
         Do not import this component into the owning NgModule.
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
       skip-selector

      </td>
      <td>
        Specifies if the component should have a selector or not.
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
        Do not create "spec.ts" test files for the new component.
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
         Whether the generated component is standalone.
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
       style

      </td>
      <td>
         The file extension or preprocessor to use for style files, or 'none' to skip generating the style file.
      </td>
       <td>
       css | scss | sass | less | none
      </td>
    
      <td>
     css
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
    
      <td>
    Component
      </td>
    </tr>
    <tr>
      <td>
      view-encapsulation	

  

      </td>
      <td>
        The view encapsulation strategy to use in the new component.

Aliases: -v
      </td>
       <td>
       Emulated | None | ShadowDom
      </td>
    
      
    </tr>
  </tbody>

</table></div>

## `ng generate component` example 

For example if you want to create a component named product, use `ng generate component product` command. 

```
CREATE src/app/product/product.component.html (22 bytes)
CREATE src/app/product/product.component.spec.ts (633 bytes)
CREATE src/app/product/product.component.ts (280 bytes)
CREATE src/app/product/product.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1039 bytes)
```
