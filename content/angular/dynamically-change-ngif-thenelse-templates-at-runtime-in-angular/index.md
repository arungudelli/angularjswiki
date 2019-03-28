# Dynamically Change NgIf Then,Else Templates At Runtime In Angular

We can take full advantage of _ngIfThen_,_ngIfElse_ template references in *_ngIf_ directive to change _then_ or _else_ templates dynamically at runtime. Go through the below example to understand it further.

<a href="https://www.angularjswiki.com/tutorial/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">Understanding Angular’s NgIf, Else, Then With Examples</a>

I have created a component called _NgifthenelseComponent_ in my Angular project.

<div>
  <pre>import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';

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
thenTemplate:TemplateRef&lt;any&gt;|null=null;
@ViewChild('primaryTemplate')
primaryTemplate:TemplateRef&lt;any&gt;|null=null;

@ViewChild('secondaryTemplate')
secondaryTemplate:TemplateRef&lt;any&gt;|null=null;

switchThenTemplate() {
this.thenTemplate= 
 (this.thenTemplate===this.primaryTemplate) ?
 this.secondaryTemplate:
 this.primaryTemplate;
}
ngOnInit() {
 this.thenTemplate=this.primaryTemplate;
}
}</pre>
  
  <p>
    Make sure you import <em>ViewChild</em> and <em>TemplateRef</em> from <em>@angular/core</em>
  </p>
  
  <p>
    And the corresponding component template file is
  </p>
  
  <pre>&lt;button mat-button (click)="show = !show"&gt;{{show ? 'hide' : 'show'}}&lt;/button&gt;
&lt;button mat-button (click)="switchThenTemplate()"&gt;Switch Then Template&lt;/button&gt;
show = {{show}}
&lt;br&gt;
&lt;div *ngIf="show; then thenTemplate; else elseTemplate"&gt;
   Inline template Ignored
&lt;/div&gt;
&lt;ng-template #primaryTemplate&gt;
  Default Primary then Template
&lt;/ng-template&gt;
&lt;ng-template #secondaryTemplate&gt;
  Secondary then Template
&lt;/ng-template&gt;
&lt;ng-template #elseTemplate&gt;
  Else Template
&lt;/ng-template&gt;</pre>
  
  <p>
    The above template being converted to
  </p>
  
  <pre>&lt;button mat-button (click)="show = !show"&gt;{{show ? 'hide' : 'show'}}&lt;/button&gt;
&lt;button mat-button (click)="switchThenTemplate()"&gt;Switch Then Template&lt;/button&gt;
show = {{show}}
&lt;br&gt;
&lt;ng-template [ngIf]="show" [ngIfThen]="thenTemplate" [ngIfElse]="elseTemplate"&gt;
&lt;div&gt;
Inline template Ignored
&lt;/div&gt;
&lt;/ng-template&gt;
&lt;ng-template #primaryTemplate&gt;
Default Primary then Template
&lt;/ng-template&gt;
&lt;ng-template #secondaryTemplate&gt;
Secondary then Template
&lt;/ng-template&gt;
&lt;ng-template #elseTemplate&gt;
Else Template
&lt;/ng-template&gt;</pre>
  
  <p>
    Whenever we click on <em>Switch Then Template </em>button <em>then </em>template being toggle between primary and secondary template which is assigned to <em>[ngIfThen] </em>template reference.
  </p>
  
  <p>
    <em><ng-template></em> being passed to NgIf class inputs <em>ngIfThen</em> and <em>ngIfElse</em> via TemplateRef see more at
  </p>
  
  <p>
    <a href="https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/" target="_blank" rel="noopener">What Is Ng-Template In Angular?</a>
  </p>
  
  <p>
    And we can add as many as templates based upon our conditions.
  </p>
</div>