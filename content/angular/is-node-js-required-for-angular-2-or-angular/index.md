+++
title = "Is Node.Js Required For Angular 2 Or Angular?"
subtitle = "Why Node Js?"
type="post"
summary ="Node js Required to develop angular 2 or angular apps. This tutorial explains reasons why node js required to develop angular 2 or angular apps. with the help node js angular apps development will be easy."
keywords=["angular 2,angular,nodejs,why node js required for angular,angular 4"]
date="2019-01-30T01:01:05+0000"
lastmod="2019-01-30T04:58:49+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Node js required to build angular apps"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Yes. Node.js required for Angular 2 or Angular apps.

We need to install Node.js to develop Angular Apps.

If you are familiar with Angular JS 1.x. All we need to do is to add Angular Js file in script tag.But this not the case for Angular.

## Reasons why we need Node.js for Angular

1. “Angular” is entirely new framework and it is (Angular or Angular 2) written in Typescript. Browser does not understand Typescript JS (i.e., .ts) we need to compile them in plain JavaScript i.e., .js.
2. We need to use Node and NPM compile them into js file so that we can deploy them in production.
3. Most of the Angular packages or libraries at GitHub repository (github.com/angular/angular) are distributed as different NPM packages. Node Package Manager is heavily dependent on Node.js.
4. As explained in my previous article Angular set up in local Environment, Using Angular CLI module we can automate so many things in Angular 2 or Angular.
5. If you are writing unit tests we need to install test libraries and runner though NPM and executed using Node.
6. If you want to minimize the size of your Javascript files? If so, install a minification library via NPM and executed using Node.

{{% alert note %}}
Use Node and NPM not as production server but as tooling and building Angular apps.
{{% /alert %}}

{{< figure src="Is-Node-Required-For-Angular.png" title="Node js Required to develop angular apps" alt="Node js Required to develop angular apps">}} 

You do not need to use Node anywhere in production server to use front-end JavaScript frameworks like Angular or react etc. We can use any backend webserver technology written in any language (C# ,Java etc.)

If you are from Dotnet background, you might think that why I need to install Node as Visual studio comes with Typescript plugin, web server. Technically, it is correct.

But we have to do lot of manual work to configure Angular App and there no good Angular CLI plug in available for Visual studio.

I would recommend using Visual studio or Visual Studio Code as code editor.