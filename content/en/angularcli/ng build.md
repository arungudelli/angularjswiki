+++
title="ng build command in Angular CLI"
summary=""
keywords=["ng build,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng analytics"
next="ng config"
linktitle="ng build"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.

```
ng build <project> [options]
```

```
ng b <project> [options]
```

## What does ng build will do in Angular CLI?

The command can be used to build a project of type "application" or "library". When used to build a library, a different builder is invoked, and only the ts-config, configuration, and watch options are applied. All other options apply only to building applications.

The application builder uses the webpack build tool, with default configuration options specified in the workspace configuration file (angular.json) or with a named alternative configuration. A "production" configuration is created by default when you use the CLI to create the project, and you can use that configuration by specifying the --configuration="production" or the --prod="true" option.

The configuration options generally correspond to the command options. You can override individual configuration defaults by specifying the corresponding options on the command line. The command can accept option names given in either dash-case or camelCase. Note that in the configuration file, you must specify names in camelCase.

Some additional options can only be set through the configuration file, either by direct editing or with the ng config command. These include assets, styles, and scripts objects that provide runtime-global resources to include in the project. Resources in CSS, such as images and fonts, are automatically written and fingerprinted at the root of the output folder.

For further details, see Workspace Configuration.

## ng build Arguments

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

## ng build Options

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
        --allowedCommonJsDependencies
      </td>
      <td>
        
        A list of CommonJS packages that are allowed to be used without a build time warning.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --aot=true|false
      </td>
      <td>
        
        Build using Ahead of Time compilation.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --baseHref=<var>baseHref</var>
      </td>
      <td>
        
        Base url for the application being built.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --buildEventLog=<var>buildEventLog</var>
      </td>
      <td>
        
        <strong>EXPERIMENTAL</strong> Output file path for Build Event Protocol events

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --buildOptimizer=true|false
      </td>
      <td>
        
        Enables '@angular-devkit/build-optimizer' optimizations when using the 'aot' option.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --commonChunk=true|false
      </td>
      <td>
        
        Use a separate bundle containing code used across multiple bundles.

        Default: true
        
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
        --crossOrigin=<br>    none|anonymous|use-credentials
      </td>
      <td>
        
        Define the crossorigin attribute setting of elements that provide CORS support.

        Default: none
        
      </td>
    </tr>
  
    <tr>
      <td>
        --deleteOutputPath=true|false
      </td>
      <td>
        
        Delete the output path before building.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --deployUrl=<var>deployUrl</var>
      </td>
      <td>
        
        URL where files will be deployed.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --experimentalRollupPass=true|false
      </td>
      <td>
        
        Concatenate modules with Rollup before bundling them with Webpack.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --extractCss=true|false
      </td>
      <td>
        
        Extract css from global styles into css files instead of js ones.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --extractLicenses=true|false
      </td>
      <td>
        
        Extract all licenses in a separate file.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --forkTypeChecker=true|false
      </td>
      <td>
        
        Run the TypeScript type checker in a forked process.

        Default: true
        
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
        --i18nFile=<var>i18nFile</var>
      </td>
      <td>
        
        Localization file to use for i18n.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --i18nFormat=<var>i18nFormat</var>
      </td>
      <td>
        
        Format of the localization file specified with --i18n-file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --i18nLocale=<var>i18nLocale</var>
      </td>
      <td>
        
        Locale to use for i18n.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --i18nMissingTranslation=<br>    warning|error|ignore
      </td>
      <td>
        
        How to handle missing translations for i18n.

        Default: warning
        
      </td>
    </tr>
  
    <tr>
      <td>
        --index=<var>index</var>
      </td>
      <td>
        
        Configures the generation of the application's HTML index.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --lazyModules
      </td>
      <td>
        
        List of additional NgModule files that will be lazy loaded. Lazy router modules will be discovered automatically.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --localize=true|false
      </td>
      <td>
        
        
        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --main=<var>main</var>
      </td>
      <td>
        
        The full path for the main entry point to the app, relative to the current workspace.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --namedChunks=true|false
      </td>
      <td>
        
        Use file name for lazy loaded chunks.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --ngswConfigPath=<var>ngswConfigPath</var>
      </td>
      <td>
        
        Path to ngsw-config.json.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --optimization=true|false
      </td>
      <td>
        
        Enables optimization of the build output.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --outputHashing=<br>    none|all|media|bundles
      </td>
      <td>
        
        Define the output filename cache-busting hashing mode.

        Default: none
        
      </td>
    </tr>
  
    <tr>
      <td>
        --outputPath=<var>outputPath</var>
      </td>
      <td>
        
        The full path for the new output directory, relative to the current workspace.
By default, writes output to a folder named dist/ in the current project.

        
        
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
        
        The full path for the polyfills file, relative to the current workspace.

        
        
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
        --rebaseRootRelativeCssUrls=true|false
      </td>
      <td>
        
        Change root relative URLs in stylesheets to include base HREF and deploy URL. Use only for compatibility and transition. The behavior of this option is non-standard and will be removed in the next major release.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --resourcesOutputPath=<br>    <var>resourcesOutputPath</var>
      </td>
      <td>
        
        The path where style resources will be placed, relative to outputPath.

        Default: 
        
      </td>
    </tr>
  
    <tr>
      <td>
        --serviceWorker=true|false
      </td>
      <td>
        
        Generates a service worker config for production builds.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --showCircularDependencies=true|false
      </td>
      <td>
        
        Show circular dependency warnings on builds.

        Default: true
        
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
        --statsJson=true|false
      </td>
      <td>
        
        Generates a 'stats.json' file which can be analyzed using tools such as 'webpack-bundle-analyzer'.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --subresourceIntegrity=true|false
      </td>
      <td>
        
        Enables the use of subresource integrity validation.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --tsConfig=<var>tsConfig</var>
      </td>
      <td>
        
        The full path for the TypeScript configuration file, relative to the current workspace.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --vendorChunk=true|false
      </td>
      <td>
        
        Use a separate bundle containing only vendor libraries.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --verbose=true|false
      </td>
      <td>
        
        Adds more details to output logging.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --watch=true|false
      </td>
      <td>
        
        Run build when files change.

        Default: false
        
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



