+++
title="ng run command in Angular CLI"
summary=""
keywords=["ng run,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng new"
next="ng serve"
linktitle="ng run"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Runs an Architect target with an optional custom builder configuration defined in your project.

```
ng run <target> [options]
```

## What does ng run will do in Angular CLI?

Architect is the tool that the CLI uses to perform complex tasks such as compilation, according to provided configurations. The CLI commands run Architect targets such as build, serve, test, and lint. Each named target has a default configuration, specified by an "options" object, and an optional set of named alternate configurations in the "configurations" object.

For example, the "serve" target for a newly generated app has a predefined alternate configuration named "production".

You can define new targets and their configuration options in the "architect" section of the angular.json file. If you do so, you can run them from the command line using the ng run command. Execute the command using the following format.

```

ng run project:target[:configuration]
```

## ng run Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>target</td>
    <td>
      The Architect target to run.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng run Options

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
        
        A named builder configuration, defined in the "configurations" section of angular.json.
The builder uses the named configuration to run the given target.

        
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



