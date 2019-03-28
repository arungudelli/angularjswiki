# Creating Progress Bar In Angular Using Mat-Progress-Bar Example

We can create a beatiful Progress bar in Angular using <mat-progress-bar> which is part of angular material progress bar module called _MatProgressBarModule._

In this tutorial we learn how basics of angular material progress bar and then we will create reading position indicator.

  * [Angular Material Progress bar](#step-11)
  * [mat-progress-bar example](#step-1) 
      * [Angular Progress Bar with Percentage](#step1)
      * [Reading position indicator in Angular using mat-progress-bar](#step-2)
  * [Angular Material Progress bar types](#step-3) 
      * [mat-progress-bar determinate mode](#step-4)
      * [mat-progress-bar indeterminate mode](#step-5)
      * [mat-progress-bar buffer mode](#step-6)
      * [mat-progress-bar query mode](#step-7)
  * [mat-progress-bar change color](#step-8)
  * [mat-progress-bar is not a known element](#step-9)
  * [mat-progress-bar properties](#step-10)<figure id="attachment_807" style="width: 600px" class="wp-caption aligncenter">

<img class="size-full wp-image-807" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/Progress-Bar-in-Angular.jpg" alt="Progress Bar in Angular" width="600" height="316" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/08/Progress-Bar-in-Angular.jpg 600w, https://www.angularjswiki.com/wp-content/uploads/2018/08/Progress-Bar-in-Angular-300x158.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" /> <figcaption class="wp-caption-text">Progress Bar in Angular</figcaption></figure> 

&nbsp;

## Angular Material Progress Bar: {#step-11}

_<mat-progress-bar>_ is a horizontal progress bar in Angular, used to inform users about the progress of ongoing tasks like loading a webpage, reading position indicator of a web page or submitting the form data to the server etc. by following material design specifications.

## mat-progress-bar example: {#step-1}

To use mat-progress-bar we need to import _MatProgressBarModule_ from _@angular/material._

<pre>import {MatProgressBarModule} from '@angular/material'</pre>

After importing angular material progress bar module. We can use <mat-progress-bar> selector in component html file.

<div>
  <pre>&lt;mat-progress-bar value=40&gt;&lt;/mat-progress-bar&gt;</pre>
  
  <h2 id="step1">
    Angular Progress Bar with percentage:
  </h2>
  
  <p>
    mat-progress-bar <em>value</em> property represents the progress of an on going process. The property <em>value</em> range is from 0 to 100. Its basically percentage of Angular material progress bar.
  </p>
  
  <p>
    Now go through the below reading position indicator example to understand mat-progress-bar further.
  </p>
</div>

## Reading position indicator in Angular using mat-progress-bar: {#step-2}

We will implement reading position indicator,based upon scroll position of webpage.

We should calculate the percentage of scroll position and assign it to angular material progress bar percentage property i.e., value property.

We will add a new component in our Angular project called _progress-bar._

<pre>export class ProgressBarComponent implements OnInit {
 progresValue:number;
 rangeArray:number[];
 constructor() { 
  this.progresValue =0;
  this.rangeArray= new Array(100);
 }

@HostListener("window:scroll", [])
onWindowScroll() {
 var element = document.documentElement, 
 body = document.body,
 scrollTop = 'scrollTop',
 scrollHeight = 'scrollHeight';
 this.progresValue = 
 (element[scrollTop]||body[scrollTop]) / 
 ((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;
}
ngOnInit() {
}
}</pre>

_progressValue_ property binds to _value_ property of _mat-progress-bar_ selector. _rangArray_ used to generate dummy content.

And _@HostListener _decorator used to track window scroll event. As the _value_ property is between 0 to 100. All we need to do is calculate scroll percentage and assign it to _progressValue._

<pre>&lt;mat-progress-bar [value]="progresValue" *ngIf="progresValue &gt; 0"&gt;
&lt;/mat-progress-bar&gt;
&lt;div&gt;
&lt;p *ngFor="let i of rangeArray"&gt;
Angular Progress Bar
&lt;/p&gt;
&lt;/div&gt;</pre>

<a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">*ngIf</a> used to display _mat-progress-bar_ only when the value is greater than 0. Otherwise an empty progress bar track displayed on top of webpage.

<div>
  <pre>.mat-progress-bar{
 position:fixed;
 top:0px;
}</pre>
</div>

To fix the progress bar on top of the web page. I have added the above css to _.mat-progress-bar_ class.

See the <a href="https://angular-twjwtd.stackblitz.io" target="_blank" rel="noopener">read position indicator demo</a>.

## Angular Material progress bar types: {#step-3}

Angular material progress bar mat-progress-bar supports four different types of progress bars.

  1. Determinate mode
  2. Indeterminate mode
  3. Buffer mode
  4. Query mode

_mode_ property used to decide type of progress bar. Default mode is _determinate_ mode. As explained above.

A progress bar contains two elements

  1. track
  2. indicator

progress bar indicator display progress by animating the indicator along fixed visible track usually width of webpage. The indicator behavior is dependent on mode property of _mat-progress-bar_.

## mat-progress-bar determinate mode: {#step-4}

When we know the process completion time before, we use _determinate_ mode. As explained above read position indicator example.

The progress bar indicator increases it&#8217;s width from 0 to 100% on the track, in sync with the process’s progress.

<div>
  <pre>&lt;mat-progress-bar mode="determinate" value=50&gt;&lt;/mat-progress-bar&gt;</pre>
</div>

_value_ property indicates the progress of the process.

In Google Chrome mobile browser loading of webpage usually indicated by _determinate_ progress bar.

## mat-progress-bar indeterminate mode: {#step-5}

When we don&#8217;t know how much time it will take to complete the process we will use _indeterminate_ mode.

Sometimes the user is asked to wait from some time, while something finishes like submitting the form data to server or doing some background work.

In that cases,It’s not required to indicate how much time it will take to complete.

<pre>&lt;mat-progress-bar mode="<span class="hljs-tag"><span class="hljs-string">indeterminate</span></span>" *ngIf="IsWait"&gt;&lt;/mat-progress-bar&gt;</pre>

We can use _*ngIf_ to display the mat-progress-bar. Ones _ngIf_ condition becoms false. Progress bar will be removed.

value property is ignored in this _indeterminate_ mode.

Google products like adwords uses indeterminate progress bar.

## mat-progress-bar buffer mode: {#step-6}

buffer mode is useful when we want to display the progress in steps. For example we have a process that is divided into four sub tasks.

Each task completion represented by buffer indicator. And the overall progress represented by normal progress bar indicator along the track.

<pre>&lt;mat-progress-bar mode="buffer" value=25 bufferValue=50&gt;&lt;/mat-progress-bar&gt;</pre>

_bufferValue_ property indicates buffer indicator progress.

Make sure _bufferValue_ is greater than _value. _Otherwise buffer indicator progress hidden by normal progress indicator.

## mat-progress-bar query mode: {#step-7}

query mode is useful when we want to show pre loading of progress.

Once the process loading starts mode should be changed to determinate or indeterminate mode to show the progress of the action.

In query mode mat-progress-bar _value_ propery is ignored.

<pre>&lt;mat-progress-bar mode="query"&gt;&lt;/mat-progress-bar&gt;</pre>

See the <a href="https://angular-effyrv.stackblitz.io" target="_blank" rel="noopener">different types of progress modes demo</a> example

## mat-progress-bar change color: {#step-8}

We can use _color_ property of mat-progress-bar to change the color of the progress bar. The default color is themes _primary_ color. We can change it to _accent_ or _warn_

## mat-progress-bar is not a known element: {#step-9}

If you miss importing Angular material progress bar module _MatProgressBarModule._You will get mat-progress-bar is not a known element error.

It is better to import all material module in once place as explained in <a href="https://www.angularjswiki.com/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">Angular Material tutorial</a>

## mat-progress-bar properties: {#step-10}

We will summarise all the mat-progress-bar properties in one place.

[table id=30 /]