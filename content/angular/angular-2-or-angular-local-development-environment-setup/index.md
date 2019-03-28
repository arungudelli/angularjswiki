+++
title = "Angular 7 Or Angular Local Development Environment Setup"
menuTitle = "Angular Local Development Environment"
description ="Explains Angular local development environment set up with Angular CLI. This is same for Angular 4 as well. Angular learning will be easy if we setup local development environment."
keywords="angular 2,angular 4,angular 2 local environment setup"
og_image="https://www.angularjswiki.com/wp-content/uploads/2017/09/Angular-7-Local-Environment.jpeg"
+++

The best way to learn Angular 7 (or Angular) is to setup our own local development environment. In this tutorial, I will explain how to setup local development environment for Angular.

Before reading this article, I would recommend to read following article if you have any confusion regarding Angular 2 and Angular 4 or any other versions.

[Is it Angular 2 or Angular?](https://www.angularjswiki.com/angular/is-it-angular-2-or-just-angular/)<header class="entry-header"></header> 

The local development environment setup for Angular 7 and Angular 6/5/4 are same.


![Alt text](https://www.angularjswiki.com/wp-content/uploads/2017/09/Angular-7-Local-Environment.jpeg "Angular 7 Local Environment")


### Prerequisites:

### Install Node.js and NPM:

Angular 7 requires to install latest version of Node (Node 6.9.0 or higher). Please go through Node.js website for installing Node in different operation systems like Window, Mac or Linux.

Node Pack Manager (npm) is installed as part of Node installation, npm version should be 3.0.0 or higher. $npm –v for version check-up.

[Is node required for Angular 2?](http://www.angularjswiki.com/tutorials/angular/is-node-js-required-for-angular/)

### Install TypeScript:

Angular 7 is written in Typescript.

Install Typescript using below npm command $ npm install -g typescript (typescript version should be 2.1 or higher)

### Install Latest browser:

I would recommend you to use Google Chrome to develop Angular Apps.

### Install Code Editor:

There are so many free code editors available such as notepad++,sublime etc. But my favourite editor is Visual Studio Code.

### Install IIS on Windows:

In windows environment you many have to install IIS internet information service to run web server locally.

### Installing Angular CLI:

Creating an Angular app is not easy thing, and if you are new typescript and Node.js it’s really confusing there are few pre-configurations we need to do.

To make our job easy Google came up with the utility called Angular CLI. With Angular CLI we can create and manage apps from command line. We can generate components, routes, services and pipes with a simple command line interface.

If you are from C# background and knows about Visual Studio. You can think AngularCLI as simple scaffolding tool. While creating new Asp Net MVC applications visual studio does scaffolding to generate CRUD operations and creates few lines of auto-generated code. That is exactly what AngularCLI does.

Install Angular CLI by using following command line.

<pre class="lang:default decode:true">npm install -g @angular/cli</pre>

After successful installation type ng-v it should return version of ng as shown below.

![Alt text](https://www.angularjswiki.com/wp-content/uploads/2017/04/Angular-CLI-Version.png "Angular CLI Version")
 
Now we are ready to create our first Angular Application.

### Creating first Angular Application:

Type the following command to create our first application

<pre class="lang:default decode:true">ng new my-angular-app</pre>

It will take some time to create the project.

Now go the created folder

<pre class="lang:default decode:true">cd my-angular-app</pre>

And type

<pre class="lang:default decode:true ">ng serve</pre>

Now navigate to <http://localhost:4200> you should get appworks in browser.

![Alt Text](http://www.angularjswiki.com/wp-content/uploads/2017/04/Angular-CLI-Sample-Example.png "Angular CLI Sample Example")

### Change the port number in Angular CLI:

Sometimes you might get following error if the port is already in use.

<a href="https://www.angularjswiki.com/angular/port-4200-is-already-in-use-use-port-to-specify-a-different-port-error/" target="_blank" rel="noopener">Port 4200 is already in use. Use &#8216;&#8211;port&#8217; to specify a different port</a>

To change the port number just type

<pre class="lang:default decode:true ">ng serve --port 1234</pre>

Now our application will be running on <http://localhost:1234>

Now go through the [Hello world example](https://www.angularjswiki.com/angular/angular-2-hello-world-example/) to write your first app in Angular 7.