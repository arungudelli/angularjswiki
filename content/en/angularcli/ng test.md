+++
title="ng test command in Angular CLI"
summary=""
keywords=["ng test,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng serve"
next="ng update"
linktitle="ng test"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Runs unit tests in a project.

```
ng test <project> [options]
```

```
ng t <project> [options]
```

## What does ng test will do in Angular CLI?

Takes the name of the project, as specified in the projects section of the angular.json workspace configuration file. When a project name is not supplied, it will execute for all projects.

## ng test Arguments

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

## ng test Options

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
        --browsers=<var>browsers</var>
      </td>
      <td>
        
        Override which browsers tests are run against.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --codeCoverage=true|false
      </td>
      <td>
        
        Output a code coverage report.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --codeCoverageExclude
      </td>
      <td>
        
        Globs to exclude from code coverage.

        
        
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
        --environment=<var>environment</var>
      </td>
      <td>
        
        Defines the build environment.

        
        
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
        --include
      </td>
      <td>
        
        Globs of files to include, relative to workspace or project root.
There are 2 special cases:
<ul>
<li>when a path to directory is provided, all spec files ending ".spec.@(ts|tsx)" will be included</li>
<li>when a path to a file is provided, and a matching spec file exists it will be included instead</li>
</ul>

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --karmaConfig=<var>karmaConfig</var>
      </td>
      <td>
        
        The name of the Karma configuration file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --main=<var>main</var>
      </td>
      <td>
        
        The name of the main entry-point file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --poll
      </td>
      <td>
        
        Enable and define the file watching poll time period in milliseconds.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --polyfills=<var>polyfills</var>
      </td>
      <td>
        
        The name of the polyfills file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --preserveSymlinks=true|false
      </td>
      <td>
        
        Do not use the real path when resolving modules. If unset then will default to <code>true if NodeJS option --preserve-symlinks is set.

        
        
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
        --progress=true|false
      </td>
      <td>
        
        Log progress to the console while building.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --reporters
      </td>
      <td>
        
        Karma reporters to use. Directly passed to the karma runner.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --sourceMap=true|false
      </td>
      <td>
        
        Output sourcemaps.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --tsConfig=<var>tsConfig</var>
      </td>
      <td>
        
        The name of the TypeScript configuration file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --watch=true|false
      </td>
      <td>
        
        Run build when files change.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --webWorkerTsConfig=<br>    <var>webWorkerTsConfig</var>
      </td>
      <td>
        
        TypeScript configuration for Web Worker modules.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>



