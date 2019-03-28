# Is Node.Js Required For Angular 2 Or Angular

Node.js required for Angular 2 or Angular apps.

We need to install Node.js to develop Angular Apps.

If you are familiar with Angular JS 1.x. All we need to do is to add Angular Js file in script tag.But this not the case for Angular.

### Reasons why we need Node.js for Angular?

“Angular” is entirely new framework and it is (Angular or Angular 2) written in Typescript. Browser does not understand Typescript JS (i.e., .ts) we need to compile them in plain JavaScript i.e., .js.

We need to use Node and NPM compile them into js file so that we can deploy them in production.

Most of the Angular packages or libraries at GitHub repository (github.com/angular/angular) are distributed as different NPM packages. Node Package Manager is heavily dependent on Node.js.

As explained in my previous article Angular set up in local Environment, Using Angular CLI module we can automate so many things in Angular 2 or Angular.

If you are writing unit tests we need to install test libraries and runner though NPM and executed using Node.

If you want to minimize the size of your Javascript files? If so, install a minification library via NPM and executed using Node.

Use Node and NPM not as production server but as tooling and building Angular apps.<figure id="attachment_102" style="width: 300px" class="wp-caption aligncenter">

[<img class="wp-image-102 size-medium" src="http://www.angularjswiki.com/wp-content/uploads/2017/04/Is-Node-Required-For-Angular-300x165.png" alt="Node js Required to develop angular apps" width="300" height="165" srcset="https://www.angularjswiki.com/wp-content/uploads/2017/04/Is-Node-Required-For-Angular-300x165.png 300w, https://www.angularjswiki.com/wp-content/uploads/2017/04/Is-Node-Required-For-Angular.png 675w" sizes="(max-width: 300px) 100vw, 300px" />](http://www.angularjswiki.com/wp-content/uploads/2017/04/Is-Node-Required-For-Angular.png)<figcaption class="wp-caption-text">Node js Required to develop angular apps</figcaption></figure> 

You do not need to use Node anywhere in production server to use front-end JavaScript frameworks like Angular or react etc. We can use any backend webserver technology written in any language (C# ,Java etc.)

If you are from Dotnet background, you might think that why I need to install Node as Visual studio comes with Typescript plugin, web server. Technically, it is correct.

But we have to do lot of manual work to configure Angular App and there no good Angular CLI plug in available for Visual studio.

I would recommend using Visual studio or Visual Studio Code as code editor.