+++
title="ng generate command in Angular CLI"
summary="Using ng add command in angular cli,  we can add external packages or libraries to our angular project.Add package name or library name followed by `ng add` command."
keywords=["ng add,Angular CLI,Angular CLI Command"]
draft="false"
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='ng-command.PNG'
prev="angularcli"
next="ng analytics"
linktitle="ng generate"
[menu.angularcli]
parent="angularcli"
weight=20

+++

**`ng generate` Angular CLI command is one of the building blocks of Angular applications.** 

The core Angular application files(or schematics) are created using `ng generate` command.

{{%toc%}}

## `ng generate` command syntax 

The syntax of `ng generate` command is pretty straight forward, we have to pass schematic and schematic name as an argument.

Additionally we can pass different options as well.

```
ng generate <schematic> [options]
```

## `ng generate` command arguments

`ng generate` takes one argument i.e, `schematic`.

The `schematic` type is string.

## `ng generate` command options

`ng generate` command accepts 5 different types of options.

1. defaults
2. dry-run
3. force
4. help
5. interactive

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
       defaults
      </td>
      <td>
         Disable interactive input prompts for options with a default
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
        dry-run
      </td>
      <td>
         Run through and reports activity without writing out results.


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
        force
      </td>
      <td>
         Force overwriting of existing files.


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
        help
      </td>
      <td>
         Shows a help message for this command in the console.


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
        interactive
      </td>
      <td>
         Enable interactive input prompts.


      </td>
       <td>
       boolean
      </td>
      <td>
        true
      </td>
    </tr>
  
  </tbody>

</table></div>






## ng generate example 

For example if you want to create a component named product, use `ng generate component product` command. 

```
CREATE src/app/product/product.component.html (22 bytes)
CREATE src/app/product/product.component.spec.ts (633 bytes)
CREATE src/app/product/product.component.ts (280 bytes)
CREATE src/app/product/product.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1039 bytes)
```

## List of files created using ng generate command. 

Here are the list of files or schematics can be created using ng generate command. 

1. ng generate component
2. ng generate pipe
3. ng generate class
4. ng generate interface
5. ng generate enum
6. ng generate service
7. ng generate library
8. ng generate module
9. ng generate application
10. ng generate app-shell
11. ng generate directive
12. ng generate guard
13. ng generate interceptor
14. ng generate resolver
15. ng generate service-worker
16. ng generate web-worker

