+++
title = "How To Read Local JSON Files In Angular"
subtitle = "Learn how to read local json files"
type="post"
summary ="Different methods for reading JSON files in Angular applications. 1. By using resolveJsonModule 2. By using HttpClient 3. By using ES6 import statements"
keywords=["angular 7 read local json file,angular 5 read local json file,how to read json file in angular 4,angular 6 read json file,angular2 read json file example,angular read file from disk"]
date="2018-11-02T01:01:05+0000"
lastmod="2021-12-14T00:00:00+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Reading Json Files in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

We can read local JSON files in Angular,several different ways depending upon the Angular version we are using.

In this post I am listing out **different methods for reading JSON files in Angular** applications.

1. By using resolveJsonModule
2. By using HttpClient
3. By using ES6 import statements

{{% toc %}}

## Solution 1: Reading local JSON files using `resolveJsonModule`  in Angular 7/6.1 above

Angular framework supports TypeScript 2.9 from 6.1 version onwards.

In typescript 2.9 with the help of `resolveJsonModule` we can import local JSON files just like modules.

I have added a sample JSON file in assets folder of Angular App.
Have a look at the sample json example

```
{
"Post": "Angular Json Files",
"CanEdit": true,
"Version": 7
}
```
I have imported sampleJson.json in our ReadingJsonFilesComponent as shown below

```
import { Component, OnInit } from '@angular/core';
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

}
```
  
Now If you build the application you will get the following error

{{% alert warning %}}

ERROR in src/app/reading-json-files/reading-json-files.component.ts(2,24): error TS2732: Cannot find module '../../assets/SampleJson.json'. Consider using '–resolveJsonModule' to import module with '.json' extension

{{% /alert %}}
  
To remove the above error,In tsconfig.json file under compiler options we need to add "resolveJsonModule" and "esModuleInterop" configurations as true as shown below.

```
{  "compilerOptions": {  "resolveJsonModule": true, "esModuleInterop": true } }
```

One more thing you need to understand is the the imported JSON file contents are type safe.
In the above json version is a number. So if you tried to change the version to string it will throw error.

  
```
SampleJson.Version= "Seven"; //throws error as Version is of type number
```
  
## Solution 2: Reading local JSON files using HttpClient in Angular 5 or 4
    
In earlier versions of Angular like Angular 5 or 4 to read local json files, we need to use `HttpClient` from `@angular/common/http` and Observable from `rxjs/Observable`  as shows below.
  
We need to inject HttpClient in constructor.
  
```
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-reading',
 templateUrl: './reading.component.html',
 styleUrls: ['./reading.component.css']
})

export class ReadingComponent implements OnInit {
 private _jsonURL = 'assets/SampleJson.json';
 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    console.log(data);
   });
 }
 public getJSON(): Observable<any> {
   return this.http.get(this._jsonURL);
 }
 ngOnInit() {
 }
}
```

HttpClient is introduced in Angular 4.3, If you are using Angular version 4.3 below use the below method to read the JSON files
  
## Solution 3: Reading local JSON files in Offline Angular Applications

Angular Http will not work if the application goes offline.

In that case we have an alternate way of importing JSON files

We need to add a new file `json-typings.d.ts` in app folder along with `index.html` file

``` 
declare module "*.json" {
  const value: any;
  export default value;
}
```
And then we can import JSON files just like latest versions of Angular
  
`import * as SampleJson from "../../assets/SampleJson.json";`

## Reading local JSON files in Angular 2+ versions

In the older versions of Angular like `Http` Service to import json files.
  
```
import { Component, Input } from '@angular/core';
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
 this.getJSON().subscribe(data => object=data, error => console.log(error));
}

public getJSON(): Observable<any> {
  return this.http.get(_jsonURL)
   .map((response:any) => response.json())
   .catch((error:any) => console.log(error));

}
}
```
  