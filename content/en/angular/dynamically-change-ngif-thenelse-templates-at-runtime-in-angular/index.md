+++
title = "Dynamically Change NgIf Then,Else Templates At Runtime In Angular"
subtitle = "ngif vs hidden or display:none"
type="post"
summary ="We can take full advantage of ngIfThen,ngIfElse template references in *ngIf directive to change then or else templates dynamically at runtime"
keywords=["ngif in angular,ngif with else,ngif with then,ngif with then and else"]
date="2018-08-05T01:01:05+0000"
lastmod="2018-10-15T16:53:28+0000"
draft=false
authors = ["admin"]
+++

We can take full advantage of `ngIfThen`,`ngIfElse` template references in `*ngIf` directive to change `then` or `else` templates dynamically at runtime. Go through the below example to understand it further.

<a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank">Understanding Angular’s NgIf, Else, Then With Examples</a>

I have created a component called `NgifthenelseComponent` in my Angular project.

```
import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';

@Component({
selector:'app-ngifthenelse',
templateUrl:'./ngifthenelse.component.html',
styleUrls: ['./ngifthenelse.component.css']
})

export class NgifthenelseComponent implements OnInit {

show:boolean;

constructor() {
this.show=true;
}
thenTemplate:TemplateRef<any>|null=null;
@ViewChild('primaryTemplate')
primaryTemplate:TemplateRef<any>|null=null;

@ViewChild('secondaryTemplate')
secondaryTemplate:TemplateRef<any>|null=null;

switchThenTemplate() {
this.thenTemplate= 
 (this.thenTemplate===this.primaryTemplate) ?
 this.secondaryTemplate:
 this.primaryTemplate;
}
ngOnInit() {
 this.thenTemplate=this.primaryTemplate;
}
}
```

Make sure you import `ViewChild` and `TemplateRef` from `@angular/core`

And the corresponding component template file is

```
<button mat-button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
<button mat-button (click)="switchThenTemplate()">Switch Then Template</button>
show = {{show}}
<br>
<div *ngIf="show; then thenTemplate; else elseTemplate">
   Inline template Ignored
</div>
<ng-template #primaryTemplate>
  Default Primary then Template
</ng-template>
<ng-template #secondaryTemplate>
  Secondary then Template
</ng-template>
<ng-template #elseTemplate>
  Else Template
</ng-template>
```  
The above template being converted to

```
<button mat-button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
<button mat-button (click)="switchThenTemplate()">Switch Then Template</button>
show = {{show}}
<br>
<ng-template [ngIf]="show" [ngIfThen]="thenTemplate" [ngIfElse]="elseTemplate">
<div>
Inline template Ignored
</div>
</ng-template>
<ng-template #primaryTemplate>
Default Primary then Template
</ng-template>
<ng-template #secondaryTemplate>
Secondary then Template
</ng-template>
<ng-template #elseTemplate>
Else Template
</ng-template>
```
Whenever we click on `Switch Then Template` button `then` template being toggle between primary and secondary template which is assigned to `[ngIfThen]` template reference.

`<ng-template>` being passed to NgIf class inputs `ngIfThen` and `ngIfElse` via TemplateRef see more at <a href="https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/" target="_blank">What Is Ng-Template In Angular?</a>

And we can add as many as templates based upon our conditions.
