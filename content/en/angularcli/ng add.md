+++
title="ng add command in Angular CLI"
summary="Using `ng add` angular cli command we can add external packages or libraries to our angular project.Add package name or library name followed by `ng add` command."
keywords=["ng add,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="angular-cli"
next="ng analytics"
linktitle="ng add"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Using `ng add` angular cli command we can add external packages or libraries to our angular project.

Add package name or library name followed by `ng add` command as shown below.

```
ng add <package> [options]
```

## What does ng add will do in Angular CLI?

`ng add` will use our package manager to download new dependencies and invoke an installation script (implemented as a schematic) which can update our Angular project with configuration changes and adds additional dependencies like polyfills, or scaffold package-specific initialization code.

The default project of `ng command` is the value of defaultProject in our angular.json file.

`ng add` command is built on top of schematics and the npm registry, so any external npm packages or libraries can add their support for `ng add`.

`ng add` command introduced as part of Angular 6.0 release.

There are already few existing packages have support for `ng add`.

## ng add packages examples

There are few npm packages already added support for `ng add` command.

1. **ng add @angular/pwa** : we can convert our application into a PWA by adding an app manifest and service worker
2. **ng add @ng-bootstrap/schematics** : we can ng-bootstrap to our angular application
3. **ng add @angular/material** : Adds angular material Angular Material and theming and register new starter components into ng generate
4. **ng add @clr/angular** : Adds VMWare Clarity to our Angular application
5. **ng add @angular/elements** : Adds the required "document-register-element.js" polyfill and dependencies for Angular Elements.

## ng add Arguments

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

## ng add Options

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
        --defaults=true|false
      </td>
      <td>
        
        When true, disables interactive input prompts for options with a default.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --help=<br>    true|false|json|JSON
      </td>
      <td>
        
        Shows a help message for this command in the console.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --interactive=true|false
      </td>
      <td>
        
        When false, disables interactive input prompts.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --registry=<var>registry</var>
      </td>
      <td>
        
        The NPM registry to use.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --verbose=true|false
      </td>
      <td>
        
        Display additional details about internal operations during execution.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>



