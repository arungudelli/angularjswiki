+++
title="ng lint command in Angular CLI"
summary=""
keywords=["ng lint,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng help"
next="ng new"
linktitle="ng lint"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Runs linting tools on Angular app code in a given project folder.

```
ng lint <project> [options]
```

```
ng l <project> [options]
```

## What does ng lint will do in Angular CLI?

Takes the name of the project, as specified in the projects section of the angular.json workspace configuration file. When a project name is not supplied, it will execute for all projects.

The default linting tool is TSLint, and the default configuration is specified in the project's tslint.json file.

## ng lint Arguments

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
      The name of the project to lint.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng lint Options

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
        
        The linting configuration to use.

        
        <span class="cli-aliases">Aliases: -c
      </td>
    </tr>
  
    <tr>
      <td>
        --exclude
      </td>
      <td>
        
        Files to exclude from linting.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --files
      </td>
      <td>
        
        Files to include in linting.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --fix=true|false
      </td>
      <td>
        
        Fixes linting errors (may overwrite linted files).

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --force=true|false
      </td>
      <td>
        
        Succeeds even if there was linting errors.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --format=<var>format</var>
      </td>
      <td>
        
        Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).

        Default: stylish
        
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
        --silent=true|false
      </td>
      <td>
        
        Show output text.

        Default: false
        
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
        --tslintConfig=<var>tslintConfig</var>
      </td>
      <td>
        
        The name of the TSLint configuration file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --typeCheck=true|false
      </td>
      <td>
        
        Controls the type check for linting.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>



