+++
title="ng update command in Angular CLI"
summary=""
keywords=["ng update,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng test"
next="ng version"
linktitle="ng update"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Updates your application and its dependencies. See https://update.angular.io/

```
ng update [options]
```

## What does ng update will do in Angular CLI?

Perform a basic update to the current stable release of the core framework and CLI by running the following command.

```

ng update @angular/cli @angular/core
```

To update to the next beta or pre-release version, use the --next=true option.

To update from one major version to another, use the format ng update @angular/cli@^<major_version> @angular/core@^<major_version>.

We recommend that you always update to the latest patch version, as it contains fixes we released since the initial major release. For example, use the following command to take the latest 9.x.x version and use that to update.

ng update @angular/cli@^9 @angular/core@^9

For detailed information and guidance on updating your application, see the interactive Angular Update Guide.

## ng update Options

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
        --all=true|false
      </td>
      <td>
        
        Whether to update all packages in package.json.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --allowDirty=true|false
      </td>
      <td>
        
        Whether to allow updating when the repository contains modified or untracked files.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --createCommits=true|false
      </td>
      <td>
        
        Create source control commits for updates and migrations.

        Default: false
        <span class="cli-aliases">Aliases: -C
      </td>
    </tr>
  
    <tr>
      <td>
        --force=true|false
      </td>
      <td>
        
        If false, will error out if installed packages are incompatible with the update.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --from=<var>from</var>
      </td>
      <td>
        
        Version from which to migrate from. Only available with a single package being updated, and only on migration only.

        
        
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
        --migrateOnly=true|false
      </td>
      <td>
        
        Only perform a migration, does not update the installed version.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --next=true|false
      </td>
      <td>
        
        Use the prerelease version, including beta and RCs.

        Default: false
        
      </td>
    </tr>
  
    <tr>
      <td>
        --packages
      </td>
      <td>
        
        The names of package(s) to update.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --to=<var>to</var>
      </td>
      <td>
        
        Version up to which to apply migrations. Only available with a single package being updated, and only on migrations only. Requires from to be specified. Default to the installed version detected.

        
        
      </td>
    </tr>
  
    <tr>
      <td>
        --verbose=true|false
      </td>
      <td>
        
        Display additional details about internal operations during execution.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>



