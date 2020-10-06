+++
title="ng e2e command in Angular CLI"
summary=""
keywords=["ng e2e,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng doc"
next="ng generate"
linktitle="ng e2e"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Builds and serves an Angular app, then runs end-to-end tests using Protractor.

```
ng e2e <project> [options]
```

```
ng e <project> [options]
```

## What does ng e2e will do in Angular CLI?

Must be executed from within a workspace directory. When a project name is not supplied, it will execute for all projects.

## ng e2e Arguments

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
      The name of the project to build. Can be an application or a library.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng e2e Options

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
        --baseUrl=<var>baseUrl</var>
      </td>
      <td>
        
        Base URL for protractor to connect to.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --configuration=<var>configuration</var>
      </td>
      <td>
        
        A named build target, as specified in the "configurations" section of angular.json.
Each named target is accompanied by a configuration of option defaults for that target.
Setting this explicitly overrides the "--prod" flag

        
        <span class="cli-aliases">Aliases: -c
      </td>
    </tr>
  
    <tr>
      <td>
        --devServerTarget=<var>devServerTarget</var>
      </td>
      <td>
        
        Dev server target to run tests against.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --grep=<var>grep</var>
      </td>
      <td>
        
        Execute specs whose names match the pattern, which is internally compiled to a RegExp.

        
        
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
        --host=<var>host</var>
      </td>
      <td>
        
        Host to listen on.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --invertGrep=true|false
      </td>
      <td>
        
        Invert the selection specified by the 'grep' option.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --port
      </td>
      <td>
        
        The port to use to serve the application.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --prod=true|false
      </td>
      <td>
        
        Shorthand for "--configuration=production".
When true, sets the build configuration to the production target.
By default, the production target is set up in the workspace configuration such that all builds make use of bundling, limited tree-shaking, and also limited dead code elimination.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --protractorConfig=<br>    <var>protractorConfig</var>
      </td>
      <td>
        
        The name of the Protractor configuration file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --specs
      </td>
      <td>
        
        Override specs in the protractor config.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --suite=<var>suite</var>
      </td>
      <td>
        
        Override suite in the protractor config.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --webdriverUpdate=true|false
      </td>
      <td>
        
        Try to update webdriver.

        Default: true
        
      </td>
    </tr>
  
  </tbody>

</table></div>



