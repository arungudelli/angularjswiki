+++
title = "NgIf Else In Angular & *NgIf Else Async Pipe Observable Example"
subtitle = "Understanding ngIf else in Angular"
type="post"
summary ="To write ngIf else in angular,we need to pass else template to *ngIf.*ngIf directive displays or removes an element from DOM based on the condition passed"
keywords=["ngif in angular,ngif else in angular,ngif with then,ngif else and then templates in angular"]
date="2018-08-04T01:01:05+0000"
lastmod="2019-10-18T16:20:19+0000"
draft=true
authors = ["admin"]

[image]
  caption = "ng If Else Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Pour écrire "ngIf else" dans angular, il faut définir un modèle "else" pour la directive "*ngIf".
"*ngIf" affiche ou supprime un élément du DOM en fonction de la condition donnée. 

"*ngIf" combiné avec "async pipe" est très utile lors de la lecture de données à partir d'un fichier observable.

Dans toutes les versions de Angular, la syntaxe de la directive `*ngif` est la même.
{{%toc%}}

## Using *ngIf in Angular with example

`*ngIf` évalue la condition donnée et rend ensuite le "then template" ou "else template".

 Regardez l'exemple ci-dessous

```
<div *ngIf="display">Hi I am Visible</div>
```

Si la propriété `display` est vraie alors l'élément `<div>' sera ajouté au DOM. Sinon, aucun élément ne sera ajouté.

Les templates par défaut de `*ngIf` sont

  * "then template" est inline template de `ngIf`.    
  * "else template" est vide 

Dans le code ci-dessus, inline template est `<div>Hi I am Visible</div>` et il n'y a pas else template.

Nous pouvons lier des templates alternatifs à `*ngif` en fonction de notre utilisation.

`*ngIf` est une directive qui signifie que nous pouvons l'ajouter à n'importe quelle "HTML tag"

```
<p *ngIf="display">Visible only if display is true</p>
```

Ou nous pouvons l'appliquer à d'autres composants angular, par exemple le composant (Material Checkbox)[https://www.angularjswiki.com/angular/checkbox-implementation-in-angular-using-angular-material/].

```
<mat-checkbox *ngIf="display">Material Checkbox</mat-checkbox>
```
La syntaxe est très simple, nous devons ajouter un préfixe, astérisque(*) avant le nom de la directive `ngIf'.

Alors pourquoi devons-nous ajouter l'astérisque avant le nom de la directive ?

L'astérisque devant " ngIf " nous simplifie la vie. 

Angular convertira l'attribut `*ngif` en élément `<ng-template>` comme indiqué ci-dessous.

```
<div *ngIf="display" class="inline">Hi I am Visible</div> 

//This will be converted to 

<ng-template [ngIf]="display">
<div class="inline">Hi I am Visible</div>
</ng-template>  

//inline default template (then template)                
//And no else template

<div *ngIf="false" class="inline">This is not added to DOM</div>

<ng-template [ngIf]="false"> 
 <div class="inline">This is not added to DOM
 </div> 
</ng-template>
```

Maintenant, la définition ci-dessus a un sens. 

 `then` template is `<div>Hi I am Visible</div>` which is inline,and there is no `else` template.

The asterisk is just a syntactic sugar to <a href="https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/" target="_blank" rel="noopener">ng-template</a>

And If you see the generated HTML,no element will be added to the DOM if `ngIf` expression evaluated to `false`.

{{< figure src="ngif.png" title="ngif" alt="ngif">}} 

So why angular will remove the element rather than hiding it. Go through the below article to understand it further.

<a href="https://www.angularjswiki.com/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/" target="_blank" rel="noopener">Difference between ngIf and hidden in Angular</a>

We can use `ngIf` in four different ways

  1. Simple `ngIf` (as explained above)
  2. `*ngIf` with `else`
  3. `*ngIf` with `then`
  4. `*ngIf` with `then` and `else`

Now how can we write `*ngIf else` in Angular? 
we need bind `else` template to `*ngIf`

## Using *ngIf else in Angular with example

Now we will see how to write `*ngIf` else by using Angular's `<ng-template>` with a simple example.

```
<div *ngIf="display; else elseTemplate" class="main">
   Visible when display is true
</div>
<ng-template #elseTemplate>
   <div class="alternative">
      Visible when display is false
   </div>
</ng-template>
```

`else` binding points to a `<ng-template>` labeled as `#elseTemplate`. If the condition or expression is true then default inline template will be rendered otherwise else template will be rendered.

And this template can be defined anywhere in the component view, But as a good practice and to improve readability it is defined right below the `ngIf` block.

```
import { Component, OnInit } from '@angular/core';
@Component({
selector:'app-ngifelse',
templateUrl:'./ngifelse.component.html',
styleUrls: ['./ngifelse.component.css']
})

export class NgifelseComponent implements OnInit {
   display:boolean;
   constructor() {
    this.display=true;
   }
   ngOnInit() {}
}

//*ngIf else Component View
<ng-template #elseTemplate>
  <div class="alternative">
      Visible when display is false
  </div>
</ng-template>
<div>
  This example explains how to write *ngIf else block
  in Angular.
  And ng-template block can be defined anywhere in
  the component view
</div>
<div *ngIf="display; else elseTemplate" class="main">
   Visible when display is true
</div>
```


I have declared `else` template above the `*ngIf` block in `NgIfElseComponent` view, But avoid declaring like this as it is difficult to understand.

The above `*ngIf else` block will be converted to the following `<ng-template>` element

```
<ng-template [ngIf]="display" [ngIfElse]="elseTemplate"> 
 <div class="main">
    Visible when display is true
 </div>
</ng-template>
<ng-template #elseTemplate>
 <div class="alternative">
    Visible when display is false 
 </div>
</ng-template>
```

## Using *ngIf with alternative then template in Angular

By default, the `then` template of `*ngIf` is the inline template. We can change the inline template of `ngIf` by binding  `<ng-template>` just like else binding as explained above.

See the below example

```
import { Component, OnInit } from '@angular/core';
@Component({
selector:'app-ngifthen',
templateUrl:'./ngifthen.component.html',
styleUrls: ['./ngifthen.component.css']
})
export class NgifthenComponent implements OnInit {
display:boolean;
constructor() {
this.display=true;
}
ngOnInit() {}
}

//NgIfthen Component view
<div *ngIf="display; then thenTemplate">
  Inline template will be ignored
</div>
<ng-template #thenTemplate>
  Displayed when display is true
</ng-template>
```

You might think that why we need `[ngIfThen]` template reference when we have Inline template.

we can change the `then` or `else` templates dynamically at run time by taking advantage of these `[ngIfThen]` and `[ngIfElse]` Go through the below article to understand it further

<a href="https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/" target="_blank" rel="noopener">Dynamically Change NgIf, Then,Else Templates At Run time In Angular</a>

## *ngif else and then templates example in Angular

We can pass both `else` template and `then` template to `*ngIf` directive as shown below. 

And default inline template will be ignored in this case.

```
<div *ngIf="display; then thenTemplate; else elseTemplate">
 Inline template will be ignored
</div>
<ng-template #thenTemplate>
 Displayed when display is true
</ng-template>
<ng-template #elseTemplate>
 Displayed when display is false
</ng-template>
```

And this will be converted to

```
<ng-template [ngIf]="display" [ngIfThen]="thenTemplate" [ngIfElse]="elseTemplate">
 Inline template will be ignored
</ng-template>
<ng-template #thenTemplate>
 Displayed when display is true
</ng-template>
<ng-template #elseTemplate>
 Displayed when display is false
</ng-template>
```

## *ngif with Logical Operators AND (&&), OR(||), NOT(!)

We can pass logical operators AND (&&),OR(||) and NOT(!) in *ngif condition. Here are the examples.

```
<!-- logic AND && operator -->
<div *ngIf="display && hasAccess">
Visible when display and hasAccess are true
</div>

<!-- logic OR || operator -->
<div *ngIf="display || hasAccess">
Visisble when one of the variable display or hasAccess true
</div>

<!-- logical NOT ! operator" -->
<div *ngIf="!display">
Visible only when display is false.
</div>
```

## Using `*ngIf as syntax` to store `*ngIf` condition in a local variable

We can save th `*ngIf` condition in a local variable using `as` so that we can use it in template. Have a look at the below example.

```
<div *ngIf="display as ngIfCondition;else elseTemplate">
  shows when display is {{ngIfCondition}}
</div>

<ng-template #elseTemplate let-ngIfCondition>
  shows when display is {{ngIfCondition}}
</ng-template>
```

We are storing `*ngIf` condition in a local variable called `ngIfCondition`.So that we can use it in `then` or `else` templates if required.

And in `<ng-template>` we have to pass local variable prefixing with `let` keyword.

You might wonder why this is useful, because anyway the expression is going to be `true` or `false`. Or we can simply use `{{display}}` instead of declaring local variable `ngIfCondition`.

`display` variable is readily available at the time of `*ngIf` evaluation.What if the  variable is asynchronous and coming from an observable.

## Using *ngIf async pipe with observable example

We will bind some product data coming from an Observable to a component using `async` pipe.

```
<div>
<h3>Name:</h3>
<p>{{(product| async)?.Name}}</p>

<h3>Category:</dh3>
<p>{{(product| async)?.category}}</p>

<h3>Description:</h3>
<p>{{(product| async)?.description}}</p>

<h3>Price:</h3>
<p>{{(product| async)?.price}}</p>

</div>
```

We should use pipe on every property we want to display.

The problem with above approach is

  * We are using pipe on every property, this creates subscription each time async pipe is used. In the above example we will create 4 subscriptions.
  * To prevent this we can use rxjs share() operator to share subscription with multiple subscribers.

```
 product: Observable<{}>;
      constructor() { }
      ngOnInit() {
        this.product= this.getAsyncData().pipe(share());
      }
```

  * But the component view remains the same foreach property we have to use `async` pipe and ? Operator
  * And we cannot display alternate template during the data load.

The ideal solution will be something like below

```
 if(product){
         //Display 
         product.Name
         product.category
         product.description
         product.price
    }else{
       //Loading
    }
```    

That is exactly what *ngIf will does with async pipe with observable by using `*ngIf as` syntax

```
<h1>*ngIf async pipe with observable</h1>

<div *ngIf="product | async as productItem; else loading">
<div>
 <h3>Name:</h3>
 <p>{{productItem.Name}}</p>
 
 <h3>Category:</dh3>
 <p>{{productItem.category}}</p>
 
 <h3>Description:</h3>
 <p>{{(productItem.description}}</p>
 
 <h3>Price:</h3>
 <p>{{productItem.price}}</p>
</div>
</div>
<ng-template #loading let-productItem>
   Loading... (product is {{productItem|json}})
</ng-template>
```

we will dig into the code and see what is happening here

```
<div *ngIf="product | async as productItem; else loading">
```
We are passing product observable to *ngIf with async pipe and storing it in `productItem` local variable.

Initially if product is null it will show the loading template.Once product is available it will show inline template of `*ngIf`

The above code with *ngIf is very clean and easy to understand. We are removing unwanted safe-traversal-operator.? operator and multiple subscriptions.

I hope you understood the basic concepts of the `*ngIf` directive with then and else templates.

