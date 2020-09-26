+++
title="ng doc command in Angular CLI"
summary=""
keywords=["ng doc,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng deploy"
next="ng e2e"
linktitle="ng doc"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.

```
ng doc <keyword> [options]
```

```
ng d <keyword> [options]
```

## ng doc Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>keyword</td>
    <td>
      The keyword to search for, as provided in the search bar in angular.io.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng doc Options

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
        --help=<br>    true|false|json|JSON
      </td>
      <td>
        
        Shows a help message for this command in the console.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --search=true|false
      </td>
      <td>
        
        When true, searches all of angular.io. Otherwise, searches only API reference documentation.

        Default: false
        <span class="cli-aliases">Aliases: -s
      </td>
    </tr>
  
    <tr>
      <td>
        --version
      </td>
      <td>
        
        Contains the version of Angular to use for the documentation. If not provided, the command uses your current Angular core version.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>



