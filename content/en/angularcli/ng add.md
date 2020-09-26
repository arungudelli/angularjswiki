+++
title="ng add command in Angular CLI"
summary=""
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
draft=false
+++

Adds support for an external library to your project.

```
ng add <collection> [options]
```

## What does ng add will do in Angular CLI?

Adds the npm package for a published library to your workspace, and configures the project in the current working directory (or the default project if you are not in a project directory) to use that library, as specified by the library's schematic. For example, adding @angular/pwa configures your project for PWA support:

```

ng add @angular/pwa
```

The default project is the value of defaultProject in angular.json.

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
    <td>collection</td>
    <td>
      The package to be added.

      
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



