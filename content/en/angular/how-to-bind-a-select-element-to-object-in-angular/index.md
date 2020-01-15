+++
title = "How to bind Select element to object in Angular with examples"
subtitle = "bind select element to object"
summary ="To bind select element to object in angular use `[ngValue]` property."
keywords=["bind select element to object,ngValue"]
date="2020-01-14T01:01:05+0000"
lastmod="2019-01-14T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

To bind select element to object in angular use `[ngValue]` property.

We will go through an example to understand it further. we will create a component called `BindSelectToObjectComponent` in our angular project.

```
@Component({
   selector: 'app-bindselecttoobject',
   templateUrl: './bindselecttoobject.component.html',
   styleUrls: ['./bindselecttoobject.component.scss'],
})
export class BindSelectToObjectComponent{
  
  languageObjects : language[];
  selectedObject : language;

  constructor() { 
    this.languages = [
      {id: 1, name: "Angular"},
      {id: 2, name: "Typescript"},
      {id: 3, name: "Javascript"},
      {id: 4, name: "Java"},
      {id: 5, name: "DotNet"}
    ]
  }
}

interface language{
   id:number;
   name:string;
}
```

I created an interface object called `language` which has id and name properties.

In component ts file added a variable `selectedObject` which of object language and will bind it to select element using `[ngModel]`.

And another variable `languageObjects` which contains list of objects which is used to display select options using `[ngValue]`. 

```
<h1>Bind select Element to Object</h1>
<select [(ngModel)]="selectedObject">
  <option *ngFor="let lang of languageObjects" [ngValue]="lang">
       {{lang.name}}
   </option>
</select>

{{selectedObject | json}}

```

Now the `selectedObject` contains language object itself.

And we can display it using json pipe as shown below.

{{< figure src="bind select element to object.png" title="bind select element to object" alt="bind select element to object">}} 