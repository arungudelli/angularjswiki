# How To Read Local JSON Files In Angular

We can import or read local JSON files in Angular,several different ways depending upon the Angular version we are using.

In this post I am listing out different methods with examples on how to read JSON files in Angular.

  1. [Reading local JSON files in Angular 6.1 and Angular 7](#step-1)
  2. [Reading local JSON files in Angular 5 and Angular 4](#step-2)
  3. [Reading local JSON files in Angular 2+ versions](#step-3)
  4. [Reading local JSON files in Offline Angular Applications](#step-4)<figure id="attachment_950" style="width: 1280px" class="wp-caption aligncenter">

<img class="size-full wp-image-950" src="https://www.angularjswiki.com/wp-content/uploads/2018/11/Reading-Json-Files-in-Angular.jpg" alt="Reading Json Files in Angular" width="1280" height="853" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/11/Reading-Json-Files-in-Angular.jpg 1280w, https://www.angularjswiki.com/wp-content/uploads/2018/11/Reading-Json-Files-in-Angular-300x200.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2018/11/Reading-Json-Files-in-Angular-768x512.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2018/11/Reading-Json-Files-in-Angular-1024x682.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption class="wp-caption-text">Reading Json Files in Angular</figcaption></figure> 

## Reading local JSON files in Angular 7 and Angular 6.1: {#step-1}

Angular framework supports TypeScript 2.9 from 6.1 version onwards.In typescript 2.9 with the help of resolveJsonModule we can import local JSON files just like modules

I have added a sample JSON file in assets folder of Angular App.Have a look at the below example

<pre>{
"Post": "Angular Json Files",
"CanEdit": true,
"Version": 7
}</pre>

<div>
  <pre>import { Component, OnInit } from '@angular/core';
import SampleJson from '../../assets/SampleJson.json';

@Component({
  selector: 'app-reading-json-files',
  templateUrl: './reading-json-files.component.html',
  styleUrls: ['./reading-json-files.component.css']
})

export class ReadingJsonFilesComponent implements OnInit {

constructor() {
 console.log('Reading local json files');
 console.log(SampleJson);
}

ngOnInit() {}

}</pre>
  
  <p>
    If you build the application you will get the following error
  </p>
  
  <blockquote>
    <p>
      ERROR in src/app/reading-json-files/reading-json-files.component.ts(2,24): error TS2732: Cannot find module &#8216;../../assets/SampleJson.json&#8217;. Consider using &#8216;&#8211;resolveJsonModule&#8217; to import module with &#8216;.json&#8217; extension
    </p>
  </blockquote>
  
  <pre>import SampleJson from '../../assets/SampleJson.json';</pre>
  
  <p>
    In tsconfig.json file under compiler options we need to add &#8220;resolveJsonModule&#8221; and <span class="hljs-string">&#8220;esModuleInterop&#8221;</span> configurations as true as shown below.
  </p>
  
  <pre>{ <span class="hljs-string"> "compilerOptions"</span>: {  <span class="hljs-string">"resolveJsonModule"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"esModuleInterop"</span>: <span class="hljs-literal">true</span> } }</pre>
  
  <p>
    And the imported JSON file contents are typesafe.
  </p>
  
  <pre>SampleJson.Version= "Seven"; //throws error as Version is of type number</pre>
  
  <h2 id="step-2">
    Reading local JSON files in Angular 5 or Angular 4:
  </h2>
  
  <p>
    In earlier versions of Angular like Angular 5 or Angular 4 to read local json files, we need to use HttpClient from &#8216;@angular/common/http&#8217; and Observable from &#8216;rxjs/Observable&#8217;  as show below.
  </p>
  
  <p>
    We need to inject HttpClient in constructor.
  </p>
  
  <pre>import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-reading',
 templateUrl: './reading.component.html',
 styleUrls: ['./reading.component.css']
})

export class ReadingComponent implements OnInit {
 private _jsonURL = 'assets/SampleJson.json';
 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data =&gt; {
    console.log(data);
   });
 }
 public getJSON(): Observable&lt;any&gt; {
   return this.http.get(this._jsonURL);
 }
 ngOnInit() {
 }
}</pre>
  
  <p>
    HttpClient is introduced in Angular 4.3, If you are using Angular version 4.3 below use the below method to read the JSON files
  </p>
  
  <h2 id="step-3">
    Reading local JSON files in Angular 2+ versions:
  </h2>
  
  <p>
    We need to use Http from &#8216;@angular/http&#8217; to import JSON files in Angular version 4.3 below and Angular 2 +.
  </p>
  
  <pre>import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadingJsonService{

private _jsonURL = 'assets/SampleJson.json';

constructor(private http: Http) {
 var object;
 this.getJSON().subscribe(data =&gt; object=data, error =&gt; console.log(error));
}

public getJSON(): Observable&lt;any&gt; {
  return this.http.get(_jsonURL)
   .map((response:any) =&gt; response.json())
   .catch((error:any) =&gt; console.log(error));

}
}</pre>
  
  <h2 id="step-4">
    Reading local JSON files in Offline Angular Applications:
  </h2>
  
  <p>
    Angular Http will not work if the application goes offline.
  </p>
  
  <p>
    In that case we have an alternate way of importing JSON files
  </p>
  
  <p>
    We need to add a new file json-typings.d.ts in app folder along with index.html file
  </p>
  
  <pre>declare module "*.json" {
  const value: any;
  export default value;
}</pre>
  
  <p>
    And then we can import JSON files just like latest versions of Angular
  </p>
  
  <pre>import * as SampleJson from "../../assets/SampleJson.json";

</pre>
</div>