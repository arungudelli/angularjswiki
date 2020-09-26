+++
title="ng generate command in Angular CLI"
summary=""
keywords=["ng generate,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng e2e"
next="ng help"
linktitle="ng generate"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Generates and/or modifies files based on a schematic.

```
ng generate <schematic> [options]
```

```
ng g <schematic> [options]
```

## ng generate Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>schematic</td>
    <td>
      The schematic or collection:schematic to generate.

      This option can take one of the following <a href="cli/generate#schematic-commands">sub-commands</a>:
      <ul>
        
        <li><a class="code-anchor" href="cli/generate#appShell-command">appShell</a></li>
        
        <li><a class="code-anchor" href="cli/generate#application-command">application</a></li>
        
        <li><a class="code-anchor" href="cli/generate#class-command">class</a></li>
        
        <li><a class="code-anchor" href="cli/generate#component-command">component</a></li>
        
        <li><a class="code-anchor" href="cli/generate#directive-command">directive</a></li>
        
        <li><a class="code-anchor" href="cli/generate#enum-command">enum</a></li>
        
        <li><a class="code-anchor" href="cli/generate#guard-command">guard</a></li>
        
        <li><a class="code-anchor" href="cli/generate#interceptor-command">interceptor</a></li>
        
        <li><a class="code-anchor" href="cli/generate#interface-command">interface</a></li>
        
        <li><a class="code-anchor" href="cli/generate#library-command">library</a></li>
        
        <li><a class="code-anchor" href="cli/generate#module-command">module</a></li>
        
        <li><a class="code-anchor" href="cli/generate#pipe-command">pipe</a></li>
        
        <li><a class="code-anchor" href="cli/generate#service-command">service</a></li>
        
        <li><a class="code-anchor" href="cli/generate#serviceWorker-command">serviceWorker</a></li>
        
        <li><a class="code-anchor" href="cli/generate#webWorker-command">webWorker</a></li>
        
      </ul>
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng generate Options

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
        --interactive=true|false
      </td>
      <td>
        
        When false, disables interactive input prompts.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>

## ng generate Schematic commands

appShell

```
ng generate appShell [options]
```

```
ng g appShell [options]
```

Generates an app shell for running a server-side version of an app.

Options

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
        --appDir=<var>appDir</var>
      </td>
      <td>
        
        The name of the application directory.

        Default: app
        
      </td>
    </tr>
  
    <tr>
      <td>
        --appId=<var>appId</var>
      </td>
      <td>
        
        The app ID to use in withServerTransition().

        Default: serverApp
        
      </td>
    </tr>
  
    <tr>
      <td>
        --clientProject=<var>clientProject</var>
      </td>
      <td>
        
        The name of the related client app.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --main=<var>main</var>
      </td>
      <td>
        
        The name of the main entry-point file.

        Default: main.server.ts
        
      </td>
    </tr>
  
    <tr>
      <td>
        --rootModuleClassName=<br>    <var>rootModuleClassName</var>
      </td>
      <td>
        
        The name of the root module class.

        Default: AppServerModule
        
      </td>
    </tr>
  
    <tr>
      <td>
        --rootModuleFileName=<br>    <var>rootModuleFileName</var>
      </td>
      <td>
        
        The name of the root module file

        Default: app.server.module.ts
        
      </td>
    </tr>
  
    <tr>
      <td>
        --route=<var>route</var>
      </td>
      <td>
        
        Route path used to produce the app shell.

        Default: shell
        
      </td>
    </tr>
  
    <tr>
      <td>
        --tsconfigFileName=<br>    <var>tsconfigFileName</var>
      </td>
      <td>
        
        The name of the TypeScript configuration file.

        Default: tsconfig.server
        
      </td>
    </tr>
  
  </tbody>

</table></div>

application

```
ng generate application <name> [options]
```

```
ng g application <name> [options]
```

Generates a new basic app definition in the "projects" subfolder of the workspace.

Arguments

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
      The name of the new app.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --inlineStyle=true|false
      </td>
      <td>
        
        When true, includes styles inline in the root component.ts file. Only CSS styles can be included inline. Default is false, meaning that an external styles file is created and referenced in the root component.ts file.

        Default: false
        <span class="cli-aliases">Aliases: -s
      </td>
    </tr>
  
    <tr>
      <td>
        --inlineTemplate=true|false
      </td>
      <td>
        
        When true, includes template inline in the root component.ts file. Default is false, meaning that an external template file is created and referenced in the root component.ts file. 

        Default: false
        <span class="cli-aliases">Aliases: -t
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
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the application.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --minimal=true|false
      </td>
      <td>
        
        When true, creates a bare-bones project without any testing frameworks. (Use for learning purposes only.)

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        A prefix to apply to generated selectors.

        Default: app
        <span class="cli-aliases">Aliases: -p
      </td>
    </tr>
  
    <tr>
      <td>
        --routing=true|false
      </td>
      <td>
        
        When true, creates a routing NgModule.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipInstall=true|false
      </td>
      <td>
        
        Skip installing dependency packages.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipPackageJson=true|false
      </td>
      <td>
        
        When true, does not add dependencies to the "package.json" file.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the app.

        Default: false
        <span class="cli-aliases">Aliases: -S
      </td>
    </tr>
  
    <tr>
      <td>
        --strict=true|false
      </td>
      <td>
        
        Creates an application with stricter build optimization options.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --style=<br>    css|scss|sass|less|styl
      </td>
      <td>
        
        The file extension or preprocessor to use for style files.

        Default: css
        
      </td>
    </tr>
  
    <tr>
      <td>
        --viewEncapsulation=<br>    Emulated|Native|None|ShadowDom
      </td>
      <td>
        
        The view encapsulation strategy to use in the new app.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>

class

```
ng generate class <name> [options]
```

```
ng g class <name> [options]
```

Creates a new generic class definition in the given or default project.

Arguments

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
      The name of the new class.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the class.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new class.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --type=<var>type</var>
      </td>
      <td>
        
        Adds a developer-defined type to the filename, in the format "name.type.ts".

        Default: 
        
      </td>
    </tr>
  
  </tbody>

</table></div>

component

```
ng generate component <name> [options]
```

```
ng g component <name> [options]
```

Creates a new generic component definition in the given or default project.

Arguments

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
      The name of the component.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --changeDetection=Default|OnPush
      </td>
      <td>
        
        The change detection strategy to use in the new component.

        Default: Default
        <span class="cli-aliases">Aliases: -c
      </td>
    </tr>
  
    <tr>
      <td>
        --displayBlock=true|false
      </td>
      <td>
        
        Specifies if the style will contain <code>:host { display: block; }.

        Default: false
        <span class="cli-aliases">Aliases: -b
      </td>
    </tr>
  
    <tr>
      <td>
        --entryComponent=true|false
      </td>
      <td>
        
        When true, the new component is the entry component of the declaring NgModule.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --export=true|false
      </td>
      <td>
        
        When true, the declaring NgModule exports this component.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --flat=true|false
      </td>
      <td>
        
        When true, creates the new files at the top level of the current project.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --inlineStyle=true|false
      </td>
      <td>
        
        When true, includes styles inline in the component.ts file. Only CSS styles can be included inline. By default, an external styles file is created and referenced in the component.ts file.

        Default: false
        <span class="cli-aliases">Aliases: -s
      </td>
    </tr>
  
    <tr>
      <td>
        --inlineTemplate=true|false
      </td>
      <td>
        
        When true, includes template inline in the component.ts file. By default, an external template file is created and referenced in the component.ts file.

        Default: false
        <span class="cli-aliases">Aliases: -t
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the component.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --module=<var>module</var>
      </td>
      <td>
        
        The declaring NgModule.

        
        <span class="cli-aliases">Aliases: -m
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        The prefix to apply to the generated component selector.

        
        <span class="cli-aliases">Aliases: -p
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --selector=<var>selector</var>
      </td>
      <td>
        
        The HTML selector to use for this component.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipImport=true|false
      </td>
      <td>
        
        When true, does not import this component into the owning NgModule.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipSelector=true|false
      </td>
      <td>
        
        Specifies if the component should have a selector or not.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new component.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --style=<br>    css|scss|sass|less|styl
      </td>
      <td>
        
        The file extension or preprocessor to use for style files.

        Default: css
        
      </td>
    </tr>
  
    <tr>
      <td>
        --type=<var>type</var>
      </td>
      <td>
        
        Adds a developer-defined type to the filename, in the format "name.type.ts".

        Default: Component
        
      </td>
    </tr>
  
    <tr>
      <td>
        --viewEncapsulation=<br>    Emulated|Native|None|ShadowDom
      </td>
      <td>
        
        The view encapsulation strategy to use in the new component.

        
        <span class="cli-aliases">Aliases: -v
      </td>
    </tr>
  
  </tbody>

</table></div>

directive

```
ng generate directive <name> [options]
```

```
ng g directive <name> [options]
```

Creates a new generic directive definition in the given or default project.

Arguments

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
      The name of the new directive.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --export=true|false
      </td>
      <td>
        
        When true, the declaring NgModule exports this directive.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --flat=true|false
      </td>
      <td>
        
        When true (the default), creates the new files at the top level of the current project.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the directive.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --module=<var>module</var>
      </td>
      <td>
        
        The declaring NgModule.

        
        <span class="cli-aliases">Aliases: -m
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        A prefix to apply to generated selectors.

        
        <span class="cli-aliases">Aliases: -p
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --selector=<var>selector</var>
      </td>
      <td>
        
        The HTML selector to use for this directive.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipImport=true|false
      </td>
      <td>
        
        When true, does not import this directive into the owning NgModule.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new class.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

enum

```
ng generate enum <name> [options]
```

```
ng g enum <name> [options]
```

Generates a new, generic enum definition for the given or default project.

Arguments

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
      The name of the enum.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the enum.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project in which to create the enum. Default is the configured default project for the workspace.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>

guard

```
ng generate guard <name> [options]
```

```
ng g guard <name> [options]
```

Generates a new, generic route guard definition in the given or default project.

Arguments

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
      The name of the new route guard.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --flat=true|false
      </td>
      <td>
        
        When true (the default), creates the new files at the top level of the current project.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --implements
      </td>
      <td>
        
        Specifies which interfaces to implement.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the guard.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new guard.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

interceptor

```
ng generate interceptor <name> [options]
```

```
ng g interceptor <name> [options]
```

Creates a new, generic interceptor definition in the given or default project.

Arguments

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
      The name of the interceptor.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --flat=true|false
      </td>
      <td>
        
        When true (the default), creates files at the top level of the project.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the interceptor.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new interceptor.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

interface

```
ng generate interface <name> <type> [options]
```

```
ng g interface <name> <type> [options]
```

Creates a new generic interface definition in the given or default project.

Arguments

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
      The name of the interface.

      
    </td>
  </tr>
  
  <tr>
    <td>type</td>
    <td>
      Adds a developer-defined type to the filename, in the format "name.type.ts".

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the interface.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        A prefix to apply to generated selectors.

        Default: 
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
  </tbody>

</table></div>

library

```
ng generate library <name> [options]
```

```
ng g library <name> [options]
```

Creates a new generic library project in the current workspace.

Arguments

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
      The name of the library.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --entryFile=<var>entryFile</var>
      </td>
      <td>
        
        The path at which to create the library's public API file, relative to the workspace root.

        Default: public-api
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the library.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --prefix=<var>prefix</var>
      </td>
      <td>
        
        A prefix to apply to generated selectors.

        Default: lib
        <span class="cli-aliases">Aliases: -p
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
        --skipPackageJson=true|false
      </td>
      <td>
        
        When true, does not add dependencies to the "package.json" file. 

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTsConfig=true|false
      </td>
      <td>
        
        When true, does not update "tsconfig.json" to add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

module

```
ng generate module <name> [options]
```

```
ng g module <name> [options]
```

Creates a new generic NgModule definition in the given or default project.

Arguments

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
      The name of the NgModule.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --flat=true|false
      </td>
      <td>
        
        When true, creates the new files at the top level of the current project root. 

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the module.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --module=<var>module</var>
      </td>
      <td>
        
        The declaring NgModule.

        
        <span class="cli-aliases">Aliases: -m
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --route=<var>route</var>
      </td>
      <td>
        
        The route path for a lazy-loaded module. When supplied, creates a component in the new module, and adds the route to that component in the <code><a href="api/router/Routes" class="code-anchor">Routes</a> array declared in the module provided in the <code>--module option.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --routing=true|false
      </td>
      <td>
        
        When true, creates a routing module.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --routingScope=Child|Root
      </td>
      <td>
        
        The scope for the new routing module.

        Default: Child
        
      </td>
    </tr>
  
  </tbody>

</table></div>

pipe

```
ng generate pipe <name> [options]
```

```
ng g pipe <name> [options]
```

Creates a new generic pipe definition in the given or default project.

Arguments

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
      The name of the pipe.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --export=true|false
      </td>
      <td>
        
        When true, the declaring NgModule exports this pipe.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --flat=true|false
      </td>
      <td>
        
        When true (the default) creates files at the top level of the project.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the pipe.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --module=<var>module</var>
      </td>
      <td>
        
        The declaring NgModule.

        
        <span class="cli-aliases">Aliases: -m
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipImport=true|false
      </td>
      <td>
        
        When true, does not import this pipe into the owning NgModule.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new pipe.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

service

```
ng generate service <name> [options]
```

```
ng g service <name> [options]
```

Creates a new, generic service definition in the given or default project.

Arguments

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
      The name of the service.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --flat=true|false
      </td>
      <td>
        
        When true (the default), creates files at the top level of the project.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lintFix=true|false
      </td>
      <td>
        
        When true, applies lint fixes after generating the service.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --skipTests=true|false
      </td>
      <td>
        
        When true, does not create "spec.ts" test files for the new service.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>

serviceWorker

```
ng generate serviceWorker [options]
```

```
ng g serviceWorker [options]
```

Pass this schematic to the "run" command to create a service worker

Options

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
        
        The configuration to apply service worker to.

        Default: production
        
      </td>
    </tr>
  
    <tr>
      <td>
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --target=<var>target</var>
      </td>
      <td>
        
        The target to apply service worker to.

        Default: build
        
      </td>
    </tr>
  
  </tbody>

</table></div>

webWorker

```
ng generate webWorker <name> [options]
```

```
ng g webWorker <name> [options]
```

Creates a new generic web worker definition in the given or default project.

Arguments

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
      The name of the worker.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

Options

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
        --project=<var>project</var>
      </td>
      <td>
        
        The name of the project.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --snippet=true|false
      </td>
      <td>
        
        Add a worker creation snippet in a sibling file of the same name.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --target=<var>target</var>
      </td>
      <td>
        
        The target to apply web worker to.

        Default: build
        
      </td>
    </tr>
  
  </tbody>

</table></div>



