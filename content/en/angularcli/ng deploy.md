+++
title="ng deploy command in Angular CLI"
summary=""
keywords=["ng deploy,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng config"
next="ng doc"
linktitle="ng deploy"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Invokes the deploy builder for a specified project or for the default project in the workspace.

```
ng deploy <project> [options]
```

## What does ng deploy will do in Angular CLI?

The command takes an optional project name, as specified in the projects section of the angular.json workspace configuration file. When a project name is not supplied, executes the deploy builder for the default project.

To use the ng deploy command, use ng add to add a package that implements deployment capabilities to your favorite platform. Adding the package automatically updates your workspace configuration, adding a deployment CLI builder. For example:

```

"projects": {
     "my-project": {
         ...
        "architect": {
            ...
            "deploy": {
                "builder": "@angular/fire:deploy",
                "options": {}
                }
            }
        }
    }
```

## ng deploy Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>project</td>
    <td>
      The name of the project to deploy.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng deploy Options

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
        --configuration=<var>configuration</var>
      </td>
      <td>
        
        A named build target, as specified in the "configurations" section of angular.json.
Each named target is accompanied by a configuration of option defaults for that target.

        
        <span class="cli-aliases">Aliases: -c
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



