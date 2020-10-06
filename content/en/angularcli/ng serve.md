+++
title="ng serve command in Angular CLI"
summary=""
keywords=["ng serve,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng run"
next="ng test"
linktitle="ng serve"
[menu.angularcli]
parent="angularcli"
weight=20
draft=true
+++

Builds and serves your app, rebuilding on file changes.

```
ng serve <project> [options]
```

```
ng s <project> [options]
```

## ng serve Arguments

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

## ng serve Options

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
        --allowedHosts
      </td>
      <td>
        
        List of hosts that are allowed to access the dev server.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --aot=true|false
      </td>
      <td>
        
        Build using Ahead of Time compilation.

        
        
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
        --browserTarget=<var>browserTarget</var>
      </td>
      <td>
        
        Target to serve.

        
        
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
        --commonChunk=true|false
      </td>
      <td>
        
        Use a separate bundle containing code used across multiple bundles.

        
        
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
        --deployUrl=<var>deployUrl</var>
      </td>
      <td>
        
        URL where files will be deployed.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --disableHostCheck=true|false
      </td>
      <td>
        
        Don't verify connected clients are part of allowed hosts.

        Default: false
        
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
        --hmr=true|false
      </td>
      <td>
        
        Enable hot module replacement.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --hmrWarning=true|false
      </td>
      <td>
        
        Show a warning when the --hmr option is enabled.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --host=<var>host</var>
      </td>
      <td>
        
        Host to listen on.

        Default: localhost
        
      </td>
    </tr>
  
    <tr>
      <td>
        --liveReload=true|false
      </td>
      <td>
        
        Whether to reload the page on change, using live-reload.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --open=true|false
      </td>
      <td>
        
        Opens the url in default browser.

        Default: false
        <span class="cli-aliases">Aliases: -o
      </td>
    </tr>
  
    <tr>
      <td>
        --optimization=true|false
      </td>
      <td>
        
        Enables optimization of the build output.

        
        
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
        --port
      </td>
      <td>
        
        Port to listen on.

        Default: 4200
        
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
        --proxyConfig=<var>proxyConfig</var>
      </td>
      <td>
        
        Proxy configuration file.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --publicHost=<var>publicHost</var>
      </td>
      <td>
        
        The URL that the browser client (or live-reload client, if enabled) should use to connect to the development server. Use for a complex dev server setup, such as one with reverse proxies.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --servePath=<var>servePath</var>
      </td>
      <td>
        
        The pathname where the app will be served.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --servePathDefaultWarning=true|false
      </td>
      <td>
        
        Show a warning when deploy-url/base-href use unsupported serve path values.

        Default: true
        
      </td>
    </tr>
  
    <tr>
      <td>
        --sourceMap=true|false
      </td>
      <td>
        
        Output sourcemaps.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --ssl=true|false
      </td>
      <td>
        
        Serve using HTTPS.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --sslCert=<var>sslCert</var>
      </td>
      <td>
        
        SSL certificate to use for serving HTTPS.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --sslKey=<var>sslKey</var>
      </td>
      <td>
        
        SSL key to use for serving HTTPS.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --vendorChunk=true|false
      </td>
      <td>
        
        Use a separate bundle containing only vendor libraries.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --verbose=true|false
      </td>
      <td>
        
        Adds more details to output logging.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --watch=true|false
      </td>
      <td>
        
        Rebuild on change.

        Default: true
        
      </td>
    </tr>
  
  </tbody>

</table></div>



