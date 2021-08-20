+++ title = "Comment lire les fichiers JSON local dans Angular" subtitle = "Apprendre à lire les fichiers json local." type="post" summary ="Nous pouvons importer ou lire des fichiers JSON local dans Angular, de plusieurs façons différentes selon la version Angular que nous utilisons" keywords=["angular 7 read local json file,angular 5 read local json file,how to read json file in angular 4,angular 6 read json file,angular2 read json file example,angular read file from disk"] date="2018-11-02T01:01:05+0000" lastmod="2018-11-13T13:15:51+0000" draft=false authors = ["admin"]

[image] caption = "Reading Json Files in Angular"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false +++

Nous pouvons importer ou lire des fichiers JSON local dans Angular, de plusieurs façons différentes selon la version Angular que nous utilisons.

Dans cet article, vous apprendrez différentes méthodes pour lire les fichiers JSON en Angular avec des exemples.

{{% toc %}}

## Lecture des fichiers JSON local dans Angular 7 et Angular 6.1

Le framework Angular supporte TypeScript 2.9 à partir de la version 6.1.

I have added a sample JSON file in assets folder of Angular App. J'ai importé sampleJson.json dans notre composant ReadingJsonFiles Component comme indiqué ci-dessous

```
{
"Post": "Angular Json Files",
"CanEdit": true,
"Version": 7
}
```
J'ai ajouté un exemple de fichier JSON dans le dossier assets de Angular App.

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

Jetez un coup d'oeil à l'échantillon json

{{% alert warning %}}

ERROR in src/app/reading-json-files/reading-json-files.component.ts(2,24): error TS2732: Cannot find module '../../assets/SampleJson.json'. Consider using '–resolveJsonModule' to import module with '.json' extension

{{% /alert %}}

To remove the above error,In tsconfig.json file under compiler options we need to add "resolveJsonModule" and "esModuleInterop" configurations as true as shown below.

```
{  "compilerOptions": {  "resolveJsonModule": true, "esModuleInterop": true } }
```

One more thing you need to understand is the the imported JSON file contents are typesafe. Dans le json ci-dessus, version est un nombre. Ainsi, si vous affectez la version à une chaîne de caractères, une erreur sera générée.


```
SampleJson.Version= "Seven"; //throws error as Version is of type number
```

## Lecture des fichiers JSON local dans Angular 5 ou Angular 4

Pour supprimer l'erreur ci-dessus, dans le fichier tsconfig.json sous les options du compilateur, nous devons ajouter les configurations "resolveJsonModule" et "esModuleInterop" comme indiqué ci-dessous.

Une autre chose que vous devez comprendre est que le contenu du fichier JSON importé est typesafe.

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

Nous avons besoin d'utiliser Http depuis "@angular/http" pour importer les fichiers JSON dans Angular version 4.3 ci-dessous et Angular 2 + applications.

## Lecture des fichiers JSON local dans les versions Angular 2+.

Dans les versions antérieures de Angular comme Angular 5 ou Angular 4 pour lire les fichiers json locaux, nous avons besoin d'utiliser HttpClient depuis '@angular/common/http' et Observable depuis 'rxjs/Observable' comme indiqué ci-dessous.


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


## Lecture des fichiers JSON local dans les applications angulaires hors ligne

Angular Http ne fonctionnera pas si l'application est hors ligne. Nous devons ajouter un nouveau fichier json-typings.d.ts dans le dossier app.

``` 
declare module "*.json" {
  const value: any;
  export default value;
}
```
HttpClient est introduit dans Angular 4.3, Si vous utilisez Angular version 4.3 ci-dessous utilisez la méthode ci-dessous pour lire les fichiers JSON

`import * as SampleJson from "../../assets/SampleJson.json";`