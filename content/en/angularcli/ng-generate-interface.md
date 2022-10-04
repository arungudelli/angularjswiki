+++
title="ng generate interface Angular CLI Command"
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
linktitle="ng generate interface"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate interface` command is used to create interfaces in Angular applications** 

{{%toc%}}

## `ng generate interface` syntax 

`ng generate interface` command takes two parameters name and type


Additionally we can pass different options as well.

```
ng generate interface [name] [type] [options]
```

or you can use shorthand syntax

```
ng generate i [name] [type] [options]
```

## `ng generate interface` arguments

`ng generate interface` command takes two argument i.e, `name` and `type`.

1. name : name of the interface.
2. type : Adds a developer-defined type to the filename, in the format "name.type.ts".

The `name` and `type` both are strings.

## `ng generate interface` options

`ng generate interface` accepts 2 different types of options.

1. prefix
2. project

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
       prefix

      </td>
      <td>
         A prefix to apply to generated selectors.

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

   
  </tbody>

</table></div>

## `ng generate interface` example 

For example if you want to create a interface named product, use `ng generate i product interface` command. 

```
CREATE src/app/product.interface.ts (29 bytes)
```

The `type` is optional parameter.

```
> ng generate i user
CREATE src/app/user.ts (26 bytes)
```
