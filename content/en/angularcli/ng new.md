+++
title="ng new command in Angular CLI"
summary=""
keywords=["ng new,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng lint"
next="ng run"
linktitle="ng new"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Creates a new workspace and an initial Angular app.

```
ng new <name> [options]
```

```
ng n <name> [options]
```

## What does ng new will do in Angular CLI?

Creates and initializes a new Angular app that is the default project for a new workspace.

Provides interactive prompts for optional configuration, such as adding routing support. All prompts can safely be allowed to default.

The new workspace folder is given the specified project name, and contains configuration files at the top level.

By default, the files for a new initial app (with the same name as the workspace) are placed in the src/ subfolder. Corresponding end-to-end tests are placed in the e2e/ subfolder.

The new app's configuration appears in the projects section of the angular.json workspace configuration file, under its project name.

Subsequent apps that you generate in the workspace reside in the projects/ subfolder.

If you plan to have multiple apps in the workspace, you can create an empty workspace by setting the --createApplication option to false. You can then use ng generate application to create an initial app. This allows a workspace name different from the initial app name, and ensures that all apps reside in the /projects subfolder, matching the structure of the configuration file.

## ng new Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>name</td>
    <td>
      The name of the new workspace and initial project.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng new Options

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
        --collection=<var>collection</var>
      </td>
      <td>
        
        A collection of schematics to use in generating the initial app.

        
        <span class="cli-aliases">Aliases: -c
      </td>
    </tr>
  
    <tr>
      <td>
        --commit=true|false
      </td>
      <td>
        
        Initial git repository commit information.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --createApplication=true|false
      </td>
      <td>
        
        When true (the default), creates a new initial application project in the src folder of the new workspace. When false, creates an empty workspace with no initial app. You can then use the generate application command so that all apps are created in the projects folder.

        Default: true
        
      </td>
    </tr>
  
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
        --directory=<var>directory</var>
      </td>
      <td>
        
        The directory name to create the workspace in.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --dryRun=true|false
      </td>
      <td>
        
        When true, runs through and reports activity without writing out results.

        Default: false
        <span class="cli-aliases">Aliases: -d
      </td>
    </tr>
  
    <tr>
      <td>
        --force=true|false
      </td>
      <td>
        
        When true, forces overwriting of existing files.

        Default: false
        <span class="cli-aliases">Aliases: -f
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
        --inlineStyle=true|false
      </td>
      <td>
        
        When true, includes styles inline in the component TS file. By default, an external styles file is created and referenced in the component TS file.

        Default: false
        <span class="cli-aliases">Aliases: -s
      </td>
    </tr>
  
    <tr>
      <td>
        --inlineTemplate=true|false
      </td>
      <td>
        
        When true, includes template inline in the component TS file. By default, an external template file is created and referenced in the component TS file.

        Default: false
        <span class="cli-aliases">Aliases: -t
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
        --legacyBrowsers=true|false
      </td>
      <td>
        
        Add support for legacy browsers like Internet Explorer using differential loading.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --minimal=true|false
      </td>
      <td>
        
        When true, creates a workspace without any testing frameworks. (Use for learning purposes only.)

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --newProjectRoot=<var>newProjectRoot</var>
      </td>
      <td>
        
        The path where new projects will be created, relative to the new workspace root.

        Default: projects
        
      </td>
    </tr>
  
    <tr>
      <td>
        --packageManager=<br>    npm|yarn|pnpm|cnpm
      </td>
      <td>
        
        The package manager used to install dependencies.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        The prefix to apply to generated selectors for the initial project.

        Default: app
        <span class="cli-aliases">Aliases: -p
      </td>
    </tr>
  
    <tr>
      <td>
        --routing=true|false
      </td>
      <td>
        
        When true, generates a routing module for the initial project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipGit=true|false
      </td>
      <td>
        
        When true, does not initialize a git repository.

        Default: false
        <span class="cli-aliases">Aliases: -g
      </td>
    </tr>
  
    <tr>
      <td>
        --skipInstall=true|false
      </td>
      <td>
        
        When true, does not install dependency packages.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not generate "spec.ts" test files for the new project. 

        Default: false
        <span class="cli-aliases">Aliases: -S
      </td>
    </tr>
  
    <tr>
      <td>
        --strict=true|false
      </td>
      <td>
        
        Creates a workspace with stricter type checking and build optimization options.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --style=<br>    css|scss|sass|less|styl
      </td>
      <td>
        
        The file extension or preprocessor to use for style files.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --verbose=true|false
      </td>
      <td>
        
        When true, adds more details to output logging.

        Default: false
        <span class="cli-aliases">Aliases: -v
      </td>
    </tr>
  
    <tr>
      <td>
        --viewEncapsulation=<br>    Emulated|Native|None|ShadowDom
      </td>
      <td>
        
        The view encapsulation strategy to use in the initial project.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>



