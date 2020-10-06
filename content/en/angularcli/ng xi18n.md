+++
title="ng xi18n command in Angular CLI"
summary=""
keywords=["ng xi18n,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng version"
next="angular-cli"
linktitle="ng xi18n"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Extracts i18n messages from source code.

```
ng xi18n <project> [options]
```

```
ng i18n-extract <project> [options]
```

## ng xi18n Arguments

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

## ng xi18n Options

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
        --browserTarget=<var>browserTarget</var>
      </td>
      <td>
        
        Target to extract from.

        
        
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
        --format=<br>    xmb|xlf|xlif|xliff|xlf2|xliff2
      </td>
      <td>
        
        Output format for the generated file.

        Default: xlf
        
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
        --i18nFormat=<br>    xmb|xlf|xlif|xliff|xlf2|xliff2
      </td>
      <td>
        
        Output format for the generated file.

        Default: xlf
        
      </td>
    </tr>
  
    <tr>
      <td>
        --i18nLocale=<var>i18nLocale</var>
      </td>
      <td>
        
        Specifies the source language of the application.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --ivy=true|false
      </td>
      <td>
        
        Use Ivy compiler to extract translations.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --outFile=<var>outFile</var>
      </td>
      <td>
        
        Name of the file to output.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --outputPath=<var>outputPath</var>
      </td>
      <td>
        
        Path where output will be placed.

        
        
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
        
        Log progress to the console.

        Default: true
        
      </td>
    </tr>
  
  </tbody>

</table></div>



