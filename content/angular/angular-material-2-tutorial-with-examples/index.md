+++
title = "Angular Material Tutorial: Creating Angular Apps Using Material Design"
type="post"
summary ="This Angular Material tutorial covers basics of Angular material.Material module helps us to create high-quality UI apps with Angular framework by using Material Design"
keywords="angular material tutorial,material design,angular material,angular 7 material apps"
og_image="https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Design-Tutorial.jpg"
+++
# 

Angular Material module helps us to create high-quality UI applications with Angular framework by following Material Design specifications.

In this Angular material tutorial I will explain basics of Angular Material with simple examples,starting from setting up Angular material project in our local machine.

Angular Material project is under active development. New features are being added regularly.Official latest version of Angular Material is 7.0.

### <span style="text-decoration: underline;">Table of Contents:</span>

  * [What is Angular Material?](#step-1)
  * [Creating Angular Material Project](#step-2)
  * [Installing Angular Material and Angular CDK Modules](#step-3)
  * [Installing Angular Animation Module](#step-4)
  * [Installing Hammer Js For Gesture Support](#step-5)
  * [Adding a Pre-built Angular Material Theme](#step-6)
  * [Adding Angular Material Icons](#step-7)
  * [Adding a Custom Angular Material Module](#step-8)
  * [List of Available UI components in Angular Material](#step-9) 
      * [Angular Material Form Components](#step-91)
      * [Angular Material Navigation Components](#step-92)
      * [Angular Material Layout Components](#step-93)
      * [Angular Material Buttons & indicators Components](#step-94)
      * [Angular Material Popups & modals Components](#step-95)
      * [Angular Material DataTable Components](#step-96)
  * [Angular Material Components Browser Support](#step-10)
  * [Common errors while setting up Angular Material project](#step-11)

&nbsp;

## <span style="text-decoration: underline;">What is Angular Material?</span> {#step-1}

In 2014 Google I/O conference Google announced their new design language called Material Design.

Most of the Android apps like Gmail, Youtube, Google Drive etc developed based on this Material Design spec.

Now with this Angular Material project, we can develop Material Design components for web and mobile browsers.

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Design-Tutorial.jpg "Angular Material Design Tutorial")

## <span style="text-decoration: underline;">Creating Angular Material Project:</span> {#step-2}

We will create a new project in our [local development environment](https://www.angularjswiki.com/angular/angular-2-or-angular-local-development-environment-setup/) called Angular-Material-tutorial with Angular CLI command. as mentioned in above tutorial setup your local development environment.

<pre>ng new Angular-Material-tutorial</pre>

Now navigate to Angular-Material project folder.

<pre>cd Angular-Material-tutorial</pre>

## <span style="text-decoration: underline;">Installing Angular Material and Angular CDK Modules:</span> {#step-3.docs-header-link.docs-markdown-h3}

Make sure you install NodeJs in your systems. [NodeJs is required](https://www.angularjswiki.com/angular/is-node-js-required-for-angular-2-or-angular/) to develop Angular Apps.

Install Angular Material and Angular CDK modules by using below node command.

<pre>npm install --save @angular/material @angular/cdk @angular/core @angular/common</pre>

After successful installation, you can see them in _node_modules_ folder as shown below. And inside the material folder, we can see different UI components like buttons, bundles, autocomplete etc.

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-And-CDK-min.png "Angular Material And CDK modules")

![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Components-min.png "Angular Material Components")
 
## <span style="text-decoration: underline;">Installing Angular Animations Module:</span> {#step-4.docs-header-link.docs-markdown-h3}

Few Material components depend upon Angular Animations modules. Install Angular Animation module with the below command.

<pre>npm install --save @angular/animations</pre>

## <span style="text-decoration: underline;">Install HammerJS for Gesture Support:</span> {#step-5.docs-header-link.docs-markdown-h3}

Some Angular Material components like mat-slider, matTooltip,mat-slide-toggle rely on HammerJS for gestures.

<pre>npm install --save hammerjs</pre>

After successful installation, add the reference of HammerJS in angular-cli.json file

<div>
  <pre>"scripts": [
"../node_modules/hammerjs/hammer.min.js"
]</pre>
  
  <h2 id="step-6">
    <span style="text-decoration: underline;">Adding a Pre-built Angular Material Theme:</span>
  </h2>
  
  <p>
    When we install Angular Material few pre-built themes are being installed automatically. Available pre-built themes are
  </p>
  
  <ul>
    <li>
      indigo-pink
    </li>
    <li>
      deeppurple-amber
    </li>
    <li>
      purple-green
    </li>
    <li>
      pink-bluegrey
    </li>
  </ul>
  
  <p>
    Add the theme to global style.css
  </p>
  
  <div>
    <pre>@import '~@angular/material/prebuilt-themes/indigo-pink.css';</pre>
    
    <h2 id="step-7">
      <span style="text-decoration: underline;">Adding Angular Material Icons:</span>
    </h2>
    
    <p>
      If you want to use Material icons, load the official icon fonts in index.html file.
    </p>
    
    <div>
      <pre>&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;</pre>
    </div>
    
    <p>
      Then we can <em>mat-icon </em>component tag to display named icons
    </p>
    
    <div>
      <pre>&lt;mat-icon&gt;favorite&lt;/mat-icon&gt; //Displays love symbol</pre>
    </div>
    
    <p>
      Now we will add a Material Module in our project.
    </p>
    
    <p>
      <a href="https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/" target="_blank" rel="noopener">Complete Angular Material Icon List</a>
    </p>
    
    <h2 id="step-8">
      <span style="text-decoration: underline;">Adding a Custom Angular Material Module:</span>
    </h2>
    
    <p>
      Create a new material module by using following angular-cli command
    </p>
    
    <pre>ng generate module material</pre>
    
    <p>
      We will use following material UI components in our project
    </p>
    
    <div>
      <ul>
        <li>
          <a href="https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/" target="_blank" rel="noopener">MatButtonModule</a>
        </li>
        <li>
          MatToolbarModule
        </li>
        <li>
          MatIconModule
        </li>
        <li>
          MatCardModule
        </li>
      </ul>
      
      <p>
        &nbsp;
      </p>
    </div>
    
    <div>
      Add them in material.module.ts file
    </div>
    
    <div>
      <pre>import { NgModule } from '@angular/core';

import {

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

} from '@angular/material';

@NgModule({

imports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

],

exports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

]

})

export class MaterialModule {}</pre>
      
      <p>
        I have added them in exports to use them in other modules.
      </p>
      
      <p>
        Now our Material Module is ready we will use it in our default app module. Add the MaterialModule in app.module.ts file
      </p>
      
      <div>
        <div>
        </div>
        
        <pre>import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } 
       from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({

declarations: [

AppComponent

],

imports: [

BrowserModule,
FormsModule,
HttpModule,
MaterialModule,
BrowserAnimationsModule 

],

providers: [],

bootstrap: [AppComponent]

})

export class AppModule { }</pre>
        
        <p>
          Make sure you add it after BrowserModule because Material components depend upon BrowserModule. I have added BrowserAnimationModule to support animations.
        </p>
        
        <p>
          Angular Material is ready. Now will use available Angular Material components in our template file
        </p>
        
        <p>
          I have used <em><mat-toolbar></em><em><mat-card> </em>and <em>mat-button</em> components in this project. Add the following code in app.component.html file.
        </p>
        
        <div>
          <pre>&lt;div id="material-example"&gt;
   
  &lt;h1&gt;ToolBar&lt;/h1&gt;
   
  &lt;mat-toolbar color="primary"&gt;
     
        &lt;span&gt;Material Design Rocks!&lt;/span&gt;
   
  &lt;/mat-toolbar&gt;
   
   &lt;br/&gt;
   
   &lt;h1&gt;Buttons&lt;/h1&gt;

 &lt;mat-card&gt;

  &lt;button mat-button&gt;Basic&lt;/button&gt;
  &lt;button mat-raised-button&gt;Raised&lt;/button&gt;
  &lt;button mat-icon-button&gt;&lt;mat-icon&gt;favorite&lt;/mat-icon&gt;&lt;/button&gt;
  &lt;button mat-fab&gt;Fab&lt;/button&gt;
  &lt;button mat-mini-fab&gt;mFab&lt;/button&gt;

&lt;/mat-card&gt;

&lt;/div&gt;</pre>
        </div>
        
        <p>
          I added different types of buttons like basic (mat-button) , Raised (mat-raised-button), icon button(mat-icon-button),fab button (mat-fab) and mini-fab button (mat-mini-fab).
        </p>
        
        <p>
          Now open the command prompt and type &#8220;ng serve&#8221; command after successful compilation browse http://localhost:4200 to load the Angular Material Project.
        </p><figure id="attachment_259" style="width: 771px" class="wp-caption aligncenter">
        
        <a href="http://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Example-min-1.png"><img class="size-full wp-image-259" src="http://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Example-min-1.png" alt="Angular Material Example Demo" width="771" height="561" srcset="https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Example-min-1.png 771w, https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Example-min-1-300x218.png 300w, https://www.angularjswiki.com/wp-content/uploads/2017/10/Angular-Material-Example-min-1-768x559.png 768w" sizes="(max-width: 771px) 100vw, 771px" /></a><figcaption class="wp-caption-text">Angular Material Example Demo</figcaption></figure> 
        
        <p>
          &nbsp;
        </p>
        
        <h2 id="step-9">
          <span style="text-decoration: underline;">List of Available UI components in Angular Material:</span>
        </h2>
        
        <p>
          We can learn how to write Angular code by following best principles with the help of Angular Material UI components
        </p>
        
        <p>
          Here is the list of UI components available in Angular Material project.
        </p>
        
        <h2 id="step-91">
          Angular Material Form Components List:
        </h2>
        
        <p>
          [table id=33 /]
        </p>
        
        <h2 id="step-92">
          Angular Material Navigation Components List:
        </h2>
        
        <p>
          [table id=34 /]
        </p>
        
        <h2 id="step-93">
          Angular Material Layout Components List:
        </h2>
        
        <p>
          [table id=35 /]
        </p>
        
        <h2 id="step-94">
          Angular Material Buttons & indicators Components:
        </h2>
        
        <p>
          [table id=36 /]
        </p>
        
        <h2 id="step-95">
          Angular Material Popups & modals Components:
        </h2>
        
        <p>
          [table id=37 /]
        </p>
        
        <h2 id="step-96">
          Angular Material DataTable Components:
        </h2>
        
        <p>
          [table id=38 /]
        </p>
        
        <h2 id="step-10">
          <span style="text-decoration: underline;">Angular Material components Browser support:</span>
        </h2>
        
        <p>
          Angular Material components will work in most of the modern web browsers like Chrome (Android as well), Mozilla, Safari (IOS as well), and IE11/Edge.
        </p>
        
        <p>
          <a href="https://drive.google.com/open?id=0B1CHusWqE9T6cTBBbkd5bnpDSXc" target="_blank" rel="nofollow noopener">Download Source Code</a>
        </p>
        
        <h2 id="step-11">
          <span style="text-decoration: underline;">Common errors while setting up Angular Material project</span>:
        </h2>
        
        <p>
          As Angular and Angular Material projects are receiving continuous updates you might run into few problems setting up Angular Material in your local machine.
        </p>
        
        <p>
          You might get few errors if the version of Angular Material not align with the angular core modules versions
        </p>
        
        <pre>@angular/material/expansion/typings/index.d.ts, found version 4, expected 3</pre>
        
        <p>
          If angular is already installed in your local machine and if it is not the latest version. If you try to install Angular Material you will get following warnings.
        </p>
        
        <pre>npm i -g @angular/material
npm WARN @angular/material@6.1.0 requires a peer of @angular/cdk@6.1.0 but none
is installed. You must install peer dependencies yourself.
npm WARN @angular/material@6.1.0 requires a peer of @angular/core@&gt;=6.0.0-beta.0
&lt;7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@6.1.0 requires a peer of @angular/common@&gt;=6.0.0-beta
.0 &lt;7.0.0 but none is installed. You must install peer dependencies yourself.</pre>
        
        <p>
          Latest Angular Material Module depend upon Angular CDK,Angular Core and Angular Common modules.
        </p>
        
        <p>
          So its always better to install these three modules together.
        </p>
        
        <pre>npm install @angular/material @angular/cdk @angular/core @angular/common</pre>
        
        <p>
          And further @angular/core has a dependency on reactive js and zone.js modules. Install both modules using below command
        </p>
        
        <pre>npm install rxjs zone.js</pre>
        
        <p>
          &nbsp;
        </p>
      </div>
    </div>
  </div>
</div>