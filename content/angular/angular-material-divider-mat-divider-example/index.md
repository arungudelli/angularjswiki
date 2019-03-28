# Angular Material Divider : Mat-Divider Example

Angular Material Divider component _mat-divider_  a simple line divider that groups elements in list and layout by following material design styles.

  * [Importing mat-divider module](#step-1)
  * [Angular Material Divider mat-divider types](#step-2) 
      1. [simple mat-divider example](#step-3)
      2. [mat-divider Inset example](#step-4)
      3. [mat-divider vertical example](#step-5)
  * [mat-divider style](#step-6) 
      * [mat-divider color](#step-7)
      * [mat-divider thickness](#step-8)
  * [mat-divider properties](#step-12)
  * [mat-divider not showing](#step-9)
  * [mat-divider vertical not working](#step-10)
  * [mat-divider is not a known element](#step-11)<figure id="attachment_1094" style="width: 1600px" class="wp-caption aligncenter">

<img class="size-full wp-image-1094" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-Material-Divider.jpg" alt="Angular Material Divider" width="1600" height="1200" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-Material-Divider.jpg 1600w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-Material-Divider-300x225.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-Material-Divider-768x576.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-Material-Divider-1024x768.jpg 1024w" sizes="(max-width: 1600px) 100vw, 1600px" /> <figcaption class="wp-caption-text">Angular Material Divider</figcaption></figure> 

## Importing mat-divider module: {#step-1}

To use mat-divider we have to import MatDividerModule from angular material module.

Directive is _MatDivider_ and selector is _mat-divider_.

<pre>import {MatDividerModule} from '@angular/material/divider';</pre>

## Angular Material Divider mat-divider types: {#step-2}

We have three types of material dividers depending upon our usage.

  1. Simple divider
  2. Inset divider
  3. Vertical divider

## Simple mat-divider example: {#step-3}

Just add <mat-divider> it will display a simple divider i.e., horizontaal line

<pre>&lt;mat-divider&gt;&lt;/mat-divider&gt;</pre>

Usually we can use the mat-divider inside a list to separate the contents.

<pre>&lt;mat-list&gt;
&lt;mat-list-item&gt;One&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;Two&lt;/mat-list-item&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;mat-list-item&gt;Three&lt;/mat-list-item&gt;
&lt;/mat-list&gt;</pre><figure id="attachment_1088" style="width: 396px" class="wp-caption aligncenter">

<img class="size-full wp-image-1088" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/simple-mat-divider-example.png" alt="simple mat-divider example" width="396" height="181" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/simple-mat-divider-example.png 396w, https://www.angularjswiki.com/wp-content/uploads/2019/01/simple-mat-divider-example-300x137.png 300w" sizes="(max-width: 396px) 100vw, 396px" /> <figcaption class="wp-caption-text">simple mat-divider example</figcaption></figure> 

## mat-divider Inset example: {#step-4}

We can set inset attribute to _true_ to display inset divider

<pre>&lt;mat-divider [inset]="true"&gt;&lt;/mat-divider&gt;

</pre>

Here is the complete example which shows the difference between simple divider and inset divider

<div>
  <pre>&lt;mat-list&gt;
 &lt;mat-list-item&gt;One&lt;/mat-list-item&gt;
 &lt;mat-divider&gt;&lt;/mat-divider&gt;
 &lt;mat-list-item&gt;Two&lt;/mat-list-item&gt;
 &lt;mat-dividerinset="true"&gt;&lt;/mat-divider&gt;
 &lt;mat-list-item&gt;Three&lt;/mat-list-item&gt;
 &lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;/mat-list&gt;</pre>
</div><figure id="attachment_1089" style="width: 352px" class="wp-caption aligncenter">

<img class="size-full wp-image-1089" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-inset-example.png" alt="mat-divider inset example" width="352" height="164" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-inset-example.png 352w, https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-inset-example-300x140.png 300w" sizes="(max-width: 352px) 100vw, 352px" /> <figcaption class="wp-caption-text">mat-divider inset example</figcaption></figure> 

## mat-divider vertical example: {#step-5}

To set the orientaion of the mat-divider horizontal or vertical, we can use vertical attribute.

<pre>&lt;mat-divider [vertical]="true"&gt;&lt;/mat-divider&gt;</pre>

## mat-divider style: {#step-6}

Whenever we use material divider i.e., mat-divider, angular framework adds a class named mat-divider to the element as shown below

<pre>&lt;mat-divider _ngcontent-c1="" 
class="mat-divider mat-divider-horizontal" 
role="separator" 
aria-orientation="horizontal"&gt;
&lt;/mat-divider&gt;</pre>

And the corresponding CSS for the class .mat-divider is

<pre>.mat-divider {
   display: block;
   margin: 0;
   border-top-width: 1px;
   border-top-style: solid;
}</pre>

And the color of the .mat-divider depending upon the theme we use for instance I am using Angular Material _indigo-pink.css. _The color of the mat-divider is rgba(0,0,0,.12).

<pre>.mat-divider{
  border-top-color: rgba(0,0,0,.12);
}</pre>

We can override these css classes to change the color or thickness of the mat-divider.

But change the color according to <a href="https://material.io/design/components/dividers.html" target="_blank" rel="noopener">material design specifications</a>

## mat-divider color: {#step-7}

To change the color _mat-divider_ simply change the border-top-color property of .mat-divider class.

<pre>.mat-divider {
  border-top-color: red;
}</pre><figure id="attachment_1090" style="width: 386px" class="wp-caption aligncenter">

<img class="size-full wp-image-1090" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-color-example.png" alt="mat-divider color example" width="386" height="169" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-color-example.png 386w, https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-color-example-300x131.png 300w" sizes="(max-width: 386px) 100vw, 386px" /> <figcaption class="wp-caption-text">mat-divider color example</figcaption></figure> 

## mat-divider thickness: {#step-8}

To change the thickness of the _mat-divider,_ override the default border-top-width or border-top-style properties of .mat-divider class.

<pre>.mat-divider{
  border-top-width: 2px;
  border-top-style: dashed;
}</pre><figure id="attachment_1091" style="width: 423px" class="wp-caption aligncenter">

<img class="size-full wp-image-1091" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-thickness-example.png" alt="mat-divider thickness example" width="423" height="179" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-thickness-example.png 423w, https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-thickness-example-300x127.png 300w" sizes="(max-width: 423px) 100vw, 423px" /> <figcaption class="wp-caption-text">mat-divider thickness example</figcaption></figure> 

Additionally we can change style of the mat-divider by overriding border-top-style property.<figure id="attachment_1092" style="width: 416px" class="wp-caption aligncenter">

<img class="size-full wp-image-1092" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-dashed-style.png" alt="mat-divider dashed style" width="416" height="177" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-dashed-style.png 416w, https://www.angularjswiki.com/wp-content/uploads/2019/01/mat-divider-dashed-style-300x128.png 300w" sizes="(max-width: 416px) 100vw, 416px" /> <figcaption class="wp-caption-text">mat-divider dashed style</figcaption></figure> 

## mat-divider properties: {#step-12}

[table id=39 /]

## mat-divider not showing: {#step-9}

If you are using older versions of Angular Material i.e., version 5.1 below, mat-divider available as part of MatListModule.

So in the below example mat-divider visible only if we are using MatListModule.

<pre>&lt;p&gt;
  No "mat-list" in component html
&lt;/p&gt;

&lt;p&gt;Sample text before mat-divider&lt;/p&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;p&gt;Sample text After mat-divider&lt;/p&gt;</pre>

In the above case <a href="https://github.com/angular/material2/issues/9399" target="_blank" rel="noopener">mat-divider will not show</a> as we are not using MatListModule.

<pre>&lt;p&gt;
"mat-list" in component html
&lt;/p&gt;

&lt;mat-list&gt;
&lt;mat-list-item&gt;Sample List&lt;/mat-list-item&gt;
&lt;/mat-list&gt;

&lt;p&gt;Sample text before mat-divider&lt;/p&gt;
&lt;mat-divider&gt;&lt;/mat-divider&gt;
&lt;p&gt;Sample text After mat-divider&lt;/p&gt;

</pre>

mat-divider is visible in this case because we are using MatListModules.

As part of <a href="https://github.com/angular/material2/blob/master/CHANGELOG.md#510-burlap-bezel-2018-01-17" target="_blank" rel="noopener">Angular Material 5.1</a> version they moved mat-divider out of mat-list.

## mat-divider vertical not working: {#step-11}

It seems mat-divider vertical is not working as expected. There is a open <a href="https://github.com/angular/material2/issues/10528" target="_blank" rel="noopener">git issue</a> regarding this issue.

## mat-divider is not a known element: {#step-12}

If you miss importing MatDividerModule from @angular/material you will get an error saying mat-divider is not a known element.

As explained in <a href="https://www.angularjswiki.com/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">angular material tutorial</a> it is better to create a separate module for material components and Add the required modules whenever required.