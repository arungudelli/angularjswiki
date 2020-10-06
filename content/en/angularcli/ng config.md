+++
title="ng config command in Angular CLI"
summary=""
keywords=["ng config,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng build"
next="ng deploy"
linktitle="ng config"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Retrieves or sets Angular configuration values in the angular.json file for the workspace.

```
ng config <jsonPath> <value> [options]
```

## ng config Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>jsonPath</td>
    <td>
      The configuration key to set or query, in JSON path format. For example: "a[3].foo.bar[2]". If no new value is provided, returns the current value of this key.

      
    </td>
  </tr>
  
  <tr>
    <td>value</td>
    <td>
      If provided, a new value for the given configuration key.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng config Options

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
        --global=true|false
      </td>
      <td>
        
        When true, accesses the global configuration in the caller's home directory.

        Default: false
        <span class="cli-aliases">Aliases: -g
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
  
  </tbody>

</table></div>



