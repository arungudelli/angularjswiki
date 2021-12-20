+++
title="ng generate command in Angular CLI"
summary="Using ng add command in angular cli,  we can add external packages or libraries to our angular project.Add package name or library name followed by `ng add` command."
keywords=["ng add,Angular CLI,Angular CLI Command"]
draft="true"
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

## ng generate command syntax 

The syntax of `ng generate` command is pretty straight forward, we have to pass schematic and schematic name as an argument.

Additionally we can pass different options as well.

```
ng generate <schematic> [options]
```

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





Using `ng add` command in Angular CLI, we can add external packages or libraries to our angular project.

Add package name or library name followed by `ng add` command as shown below.

```
ng add <package> [options]
```

## What does ng add command will do in Angular CLI?

`ng add` will use our package manager to download new dependencies and invoke an installation script (implemented as a schematic) which can update our Angular project with configuration changes and adds additional dependencies like polyfills, or scaffold package-specific initialization code.

The default project of `ng command` is the value of defaultProject in our angular.json file.

`ng add` command is built on top of schematics and the npm registry, so that any external npm packages or libraries can add their support for `ng add`.

`ng add` command introduced as part of Angular 6.0 release.

There are already few existing packages added their support for `ng add` command.

## ng add packages examples

There are few npm packages already added support for `ng add` command.

1. **ng add @angular/pwa** : we can convert our application into a PWA by adding an app manifest and service worker
2. **ng add @ng-bootstrap/schematics** : we can ng-bootstrap to our angular application
3. **ng add @angular/material** : Adds angular material Angular Material and theming and register new starter components into ng generate
4. **ng add @clr/angular** : Adds VMWare Clarity to our Angular application
5. **ng add @angular/elements** : Adds the required "document-register-element.js" polyfill and dependencies for Angular Elements.

## ng add command Arguments

ng add command will take single argument i.e., package or collection name

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>package</td>
    <td>
      The package name to be added.      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng add command Options

ng add command accepts 5 different types of options 

1. registry
2. help
3. interactive
4. defaults
5. verbose

And "registry" option is something specific to `ng add` command. Which is used to change the NPM registry. 

Remaining all other options helps us to understand execution of `ng add` command.

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <td>
        registry="registryname"
      </td>
      <td>
         The node NPM registry name to be used while adding external packages. 
      </td>
    </tr>
  
    <tr>
      <td>
        help=true or false or json or JSON
      </td>
      <td>
        Shows help information related to ng add command.
        Default value is false
      </td>
    </tr>
  
    <tr>
      <td>
        interactive=true or false
      </td>
      <td>
        Enable or disables input prompts while executing ng add command.
      </td>
    </tr>
  
    <tr>
      <td>
         defaults = true or false
      </td>
      <td>
        Enable or disables input prompts while executing ng add command with default options
      </td>
    </tr>
  
    <tr>
      <td>
        verbose=true or false
      </td>
      <td>
        Show or hides log information in command prompt while executing ng add command.
        Default value is false
      </td>
    </tr>
  </tbody>

</table></div>



