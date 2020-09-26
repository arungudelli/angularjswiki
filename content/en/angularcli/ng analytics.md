+++
title="ng analytics command in Angular CLI"
summary=""
keywords=["ng analytics,Angular CLI,Angular CLI Command"]
date="25-09-2020T23:34:19"
lastmod="25-09-2020T23:34:19"
type="docs"
parentdoc="angularcli"
featured='font-awesome-icons.PNG'
prev="ng add"
next="ng build"
linktitle="ng analytics"
[menu.angularcli]
parent="angularcli"
weight=20
draft=false
+++

Configures the gathering of Angular CLI usage metrics. See https://angular.io/cli/usage-analytics-gathering.

```
ng analytics <settingOrProject> <projectSetting> [options]
```

## What does ng analytics will do in Angular CLI?

The value of settingOrProject is one of the following.

"on" : Enables analytics gathering and reporting for the user.
"off" : Disables analytics gathering and reporting for the user.
"ci" : Enables analytics and configures reporting for use with Continuous Integration, which uses a common CI user.
"prompt" : Prompts the user to set the status interactively.
"project" : Sets the default status for the project to the projectSetting value, which can be any of the other values. The projectSetting argument is ignored for all other values of settingOrProject.

## ng analytics Arguments

<div class='table-responsive'><table class='table'>

  <thead>
    <tr>
      <th>Argument</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>settingOrProject</var>&gt;=<br>    on|off|ci|project|prompt</td>
    <td>
      Directly enables or disables all usage analytics for the user, or prompts the user to set the status interactively, or sets the default status for the project.

      
    </td>
  </tr>
  
  <tr>
    <td>projectSetting</var>&gt;=on|off|prompt</td>
    <td>
      Sets the default analytics enablement status for the project.

      
    </td>
  </tr>
  
  </tbody>

</table></div>

## ng analytics Options

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
        --help=<br>    true|false|json|JSON
      </td>
      <td>
        
        Shows a help message for this command in the console.

        Default: false
        
      </td>
    </tr>
  
  </tbody>

</table></div>



