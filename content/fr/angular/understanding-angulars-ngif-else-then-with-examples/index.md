Nous apprendrons à écrire "*ngIf else" en utilisant le `<ng-template>` d'Angular avec un exemple simple.

[image] caption = "ngIf Else Angular"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false

+++

Angular's "*ngIf" affiche ou supprime un élément du DOM en fonction de la condition donnée.

Pour écrire "ngIf else" dans angular, il faut définir un modèle "else" pour la directive "*ngIf".

```
<div *ngIf="display">Hi I am Visible</div>
```
"*ngIf" combiné avec "async pipe" est très utile lors de la lecture de données à partir d'un fichier observable.

Dans toutes les versions de Angular, la syntaxe de la directive `*ngif` est la même.

Le bloc `*ngIf else` ci-dessus sera converti en l'élément `<ng-template>` suivant.

```
<p *ngIf="display">Visible only if display is true</p>
```

`*ngIf` évalue la condition donnée et rend ensuite le "then template" ou "else template".

And I don't know whether it's a correct way. And it will create multiple subscriptions if we are using an observable inside `*ngIf`.

Maintenant, comment pouvons-nous écrire `*ngIf else` en angular ?

{{%toc%}}

## comprendre *ngIf dans Angular avec exemple

Dans le code ci-dessus, inline template est `<div>Hi I am Visible</div>` et il n'y a pas else template.

Nous pouvons lier des templates alternatifs à `*ngif` en fonction de notre utilisation.

```
<mat-checkbox *ngIf="display">Material Checkbox</mat-checkbox>

```

`*ngIf` est une directive qui signifie que nous pouvons l'ajouter à n'importe quelle "HTML tag"

```
<div *ngIf="display">Hi I am Visible</div>
```

Ou nous pouvons l'appliquer à d'autres composants angular, par exemple le composant [Material Checkbox](https://www.angularjswiki.com/angular/checkbox-implementation-in-angular-using-angular-material/).

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

But we cannot write if else blocks using flower brackets in HTML. Because our HTML file should only contain markup elements.

Alors pourquoi devons-nous ajouter l'astérisque avant le nom de la directive ?

```
<IfBlock value="display">
   <div>Hi I am Visible</div>
</IfBlock>
<ElseBlock>
  <div>
  Hi I am Visible Only id display is false
  </div>
</ElseBlock>
```

Are you convinced are confused? That's what exactly `*ngIf` directive will do.

Angular convertira l'attribut `*ngif` en élément `<ng-template>` comme indiqué ci-dessous.

Maintenant, la définition ci-dessus a un sens.

```
<div *ngIf="display">Hi I am Visible</div> 
```
"then template" est inline template de `ngIf`.

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

L'astérisque n'est qu'un sucre syntaxique de l'élément [ng-template](https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/).

import { Component, OnInit } from '@angular/core';
@Component({ selector:'app-ngifelse', templateUrl:'./ngifelse.component.html', styleUrls: ['./ngifelse.component.css'] }) export class NgifelseComponent implements OnInit { display:boolean; constructor() { this.display=true; } ngOnInit() {} } //*ngIf else Component View
&lt;ng-template #elseTemplate&gt;
  &lt;div class="alternative"&gt; Visible when display is false
  &lt;/div&gt;
&lt;/ng-template&gt;
&lt;div&gt; This example explains how to write *ngIf else block in Angular. And ng-template block can be defined anywhere in the component view
&lt;/div&gt;
&lt;div *ngIf="display; else elseTemplate" class="main"&gt; Visible when display is true
&lt;/div&gt;

If the elements has any attributes like id or class etc. Those will be added to the `<div>` element inside the `<ng-template>`.

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

Alors pourquoi angular enlèvera l'élément plutôt que de le cacher ?

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

Lire la suite \[Différence entre ngIf et "hidden" dans Angular\] (https://www.angularjswiki.com/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/)

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

And If you see the generated HTML,no element will be added to the DOM if `ngIf` expression evaluated to `false`. (because ng-template condition evaluated to false)

{{< figure src="ngif.png" title="ngif" alt="ngif">}}

So why angular will remove the element rather than hiding it. Go through the below article to understand it further.

[Les templates par défaut de `*ngIf` sont](https://www.angularjswiki.com/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/)

## Etapes pour écrire "*ngIf else" en Angulaire avec exemple

nous avons besoin de lier `else' template à`*ngIf''.

As explained above, we need to declare an else block. Le bloc `else` pointe vers un `<ng-template>` étiqueté `#elseTemplate`.

```
<div *ngIf="display as ngIfCondition;else elseTemplate">
  shows when display is {{ngIfCondition}}
</div>

<ng-template #elseTemplate let-ngIfCondition>
  shows when display is {{ngIfCondition}}
</ng-template> 

```

J'ai déclaré "else template" au-dessus du bloc `*ngIf' dans la vue`NgIfElseComponent', mais évitez d'écrire ainsi car c'est difficile à comprendre.

But there is no relation between two elements. We need to tell Angular framework that load the below `<ng-template>` else block if the condition is false.

Par défaut, le "then template" de `*ngIf` est le "inline template".

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

Pour changer le inline template de `ngIf`, il suffit de lier "then block" à l'alternative `<ng-template>`.

```
product: Observable<{}>;
      constructor() { }
      ngOnInit() {
        this.product= this.getAsyncData().pipe(share());
      } 
```

Voir l'exemple ci-dessous

Vous pourriez penser que pourquoi nous avons besoin d'une référence de template `[ngIfThen]` quand nous avons un template Inline.

nous pouvons changer les blocs "then" ou "else" dynamiquement au moment de l'exécution en profitant de ces `[ngIfThen]` et `[ngIfElse]`

```
Et si vous voyez le HTML généré, aucun élément ne sera ajouté au DOM si la condition de <code>ngIf</code> est <code>false</code>.
```
 est false.
</code>

Lire l'article

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

\[https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/\](Modifier dynamiquement NgIf "Then", "Else" Templates Au moment de l'exécution Dans Angular)

Nous pouvons lier à la fois "else template" et "then template" à la directive `*ngIf` comme indiqué ci-dessous.

Et dans ce cas, le "inline template" par défaut sera ignoré.

Et ceci sera converti en

In that case while getting the data, We can show `loading..` template which can be reused in multiple places as shown below.

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
   Loading...
   (product is {{productItem|json}})
</ng-template>

```

## *ngIf avec alternative puis template dans Angular

En voici des exemples.

Nous pouvons sauvegarder la condition `*ngIf` dans une variable locale en utilisant `as` et nous pouvons l'utiliser dans le template.

```
//below the product image
<div *ngIf="isMobile">
   //User Details
   <span>{{Name}}</span>
   .....
   .....
</div>


//Right side of the product image
<div *ngIf="isDesktop">
   //User Details
   <span>{{Name}}</span>
   .....
   .....
</div>

```

Jetez un coup d'oeil à l'exemple ci-dessous.

Et ce template peut être défini n'importe où dans la vue des composants, mais comme une bonne pratique et pour améliorer la lisibilité, il est défini juste en dessous du bloc `ngIf`.

```
<ng-template [ngIf]="isMobile" [ngIfThen]="productDetails">
</ng-template> 

<ng-template [ngIf]="isDesktop" [ngIfThen]="productDetails">
</ng-template> 

<ng-template #productDetails>
  //User Details
   <span>{{Name}}</span>
   .....
   .....
</ng-template>
```

And in `<ng-template>` we must use the prefix `let` before the variable.

```
<div *ngIf="isMobile; then productDetails;">
</div>

<ng-template #productDetails>
  //User Details
   <span>{{Name}}</span>
   .....
   .....
</ng-template>

<div *ngIf="isDesktop; then productDetails;">
</div>

```

Now we can reuse the `#productDetails` template in both places.

La variable `display` est statique et disponible au moment de l'évaluation `*ngIf`.

```
<div *ngIf="product | async as productItem; else loading">

```

If you see the final output both Name and Description will be visible in the webpage.

Nous allons lier des données de produit provenant d'un observable à un composant à l'aide d'un "async pipe".
On devrait utiliser des tuyaux sur toutes les propriétés qu'on veut montrer.
Le problème avec l'approche ci-dessus est le suivant

## *ngif avec "else and then templates" exemple dans Angular

La solution idéale sera la suivante.

```
<div *ngIf="isMobile; then shortProductDetails; else productDetails;">
</div>

<ng-template #shortProductDetails>
  //Product Details
   <span>{{Name}}</span>
</ng-template>

<ng-template #productDetails>
  //Product Details
   <span>{{Name}}</span>
   <span>{{Description}}</span>
</ng-template>

```
C'est exactement ce que `*ngIf` fera avec "async pipe" avec observable en utilisant la syntaxe `*ngIf as`.

```
ngIf = condition ? then : else;
```

nous allons creuser dans le code et voir ce qui se passe ici

```
<ng-template [ngIf]="isMobile" [ngIfThen]="shortProductDetails" 
[ngIfElse]="productDetails">
</ng-template>


<ng-template #shortProductDetails>
<div>
<span>{{Name}}</span>
</div>
</ng-template>

<ng-template #productDetails>
<div>
<span>{{Name}}</span>
<span>{{Description}}</span>
</div>
</ng-template>

```

Nous passons le produit observable à "*ngIf avec async pipe" et le stockons dans la variable locale `productItem`.

Initialement, si le produit est nul, il affichera le "#Loading template", une fois le produit disponible, il affichera "Inline template" de `*ngIf`.

[Dynamically Change NgIf, Then,Else Templates At Run time In Angular](https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/)

## *ngif avec opérateurs logiques AND (&&), OR(||), NOT( !)

J'espère que vous avez compris les concepts de base de la directive `*ngIf' avec "then template" et "else templates".

And it's very common scenario.

In our traditional programming languages we can use logical operators like AND, OR and NOT inside an if condition.

## Utiliser la syntaxe "as" pour stocker la condition `*ngIf` dans une variable locale

Nous pouvons utiliser `ngIf' de quatre manières différentes

Si la propriété `display` est vraie alors l'élément `

```
<div *ngIf="isMobile && isTablet">
  //Prodcut details
  <span>{{Name}}</span>
</div>

```

## *ngIf avec async pipe et exemple observable

operator" --&gt;
&lt;div *ngIf="!display"&gt; Visible only when display is false. We can use OR (||) operator.

```
<div *ngIf="isDesktop || isTablet">
// Show Price comparison chart
</div>
```

## NOT condition in *ngIf

La syntaxe est très simple, nous devons ajouter un préfixe, astérisque(*) avant le nom de la directive `ngIf'.

```
<div *ngIf="!isDesktop">
//Show Mobile Navigation Menu
</div>
```

We can combine these logical operators with as many as conditions in `*ngIf` directive.

```
<div *ngIf="(condition1 && condition2) || condition3"></div>
```

## Checking null or undefined with *ngIf

We mostly deal with objects while displaying data in Angular.

So it's very common for us to forgot or initialize objects before displaying them in HTML.

In that case we will get "Cannot read property of undefined" errors in console.

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   productItem : Product;
   constructor(){

   }
}

interface Product{
  id: number;
  description: string;
  type:string;
}

//app.component.html

<div>
{{productItem.id}}
{{productItem.description}}
</div>

```

We can use safe navigation operator ? to check for null or undefined.

```
<div>
{{productItem?.id}}
{{productItem?.description}}
</div>

```

The problem is for each property we display, we have to use safe navigation operator.

To handle such scenarios, we can check if the object is undefined or null using `*ngIf` before displaying the data as shown below.

```
<div *ngIf="productItem">
{{productItem.id}}
{{productItem.description}}
</div>

```

## Compare Strings for equality using *ngIf

To compare string for equality we can use double equal(==) or triple equal(===) operator inside `*ngIf` expression.

```
<div *ngIf="product.type === 'electronics'">
// Show electronics products related data
</div>

```
It's very common to misplace or forgot to use double equal or triple equal and people tend to use assignment operator (single equal) while compare strings for equality.

You will get "Parser Error: Bindings cannot contain assignments at column" error when you use an assignment operator inside `*ngIf` as shown below.

```
<div *ngIf="product.type = 'electronics'">
// Show electronics products related data
</div>

```

We should use quotes while comparing with staitc string inside an `*ngIf`.

To compare with other component string variables no need to use quotes.

```
<div *ngIf="product.type === typeOfProduct">
// Show electronics products related data
</div>

```


## Checking array length with *ngIf

In some cases we want to display array of elements only when array length greater than zero.

In that case to check array length and display else template pass conditional expression `array.length > 0` to `*ngIf`.

```
export class AppComponent  {

   productItems : Product[];
   constructor(){

   }
}

<div *ngIf="productItems.length > 0">
// Display elements
</div>
```

If you execute above code you will get  "Cannot read property 'length' of undefined" error, because the array is not initialized.

To avoid "Cannot read property 'length' of undefined" error, we have to use safe navigation operator(?) while checking length of array.


```
<div *ngIf="productItems?.length > 0">
// Display elements
</div>
```


## J'ai sauvegardé la condition `*ngIf` dans une variable locale appelée `ngIfCondition`.

In the above example we are using `productItem` object to display product details in component html file.

Instead of using productItem component variable, we can save it in a local variable (for instance `product`) using `as` syntax so that it can be used in component template.


```
<div *ngIf="productItem as product">
{{product.id}}
{{product.description}}
</div>
```

To use the `*ngif as` variable in alternative then template or else template, refer the variable prefixed with `let` keyword in `<ng-template>` element.

```
<div *ngIf="productItem as product;then productDetails">
</div>
<ng-template #productDetails let-product>
{{product.id}}
{{product.description}}
</ng-template>
```

`*ngIf as` will be very useful when the data is asynchronous and coming from an observable.

## *ngIf with async pipe and observable example

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

  * Nous avons utilisé des tuyaux sur chaque propriété, ce qui crée un abonnement chaque fois que des tuyaux asynchrones sont utilisés. Dans l'exemple ci-dessus, nous allons créer 4 abonnements.
  * "else template" est vide

```
 productObservable: Observable<{}>;
      constructor() { }
      ngOnInit() {
        this.product= this.getAsyncData().pipe(share());
      }
```

  * Mais la vue composant reste la même, pour chaque propriété il faut utiliser "async pipe" et " ? Opérateur"
  * Pour éviter cela, nous pouvons utiliser rxjs share() operator pour partager l'abonnement avec plusieurs abonnés.

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

<div *ngIf="productObservable | async as productItem; else loading">
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
<div *ngIf="productObservable | async as productItem; else loading">
```
We are passing product observable to *ngIf with async pipe and storing it in `productItem` local variable.

Initially if product is null, it will show the loading template. Once product is available it will show inline template of `*ngIf`

Le code ci-dessus avec *ngIf est très propre et facile à comprendre. Nous supprimons les opérateurs de safe-traversal-opérateur non désirés et les abonnements multiples.

## ngIf NullInjectorError: No provider for TemplateRef! error

If you miss writing asterisk before `ngIf` you will get following error.

```
<div ngIf="display"></div>
```

{{% alert warning %}}
ERROR Error: StaticInjectorError[TemplateRef]: StaticInjectorError[TemplateRef]: NullInjectorError: No provider for TemplateRef!
{{% /alert %}}

## Summary

1. Simple `ngIf' (comme expliqué ci-dessus)
2. "*ngIf" avec "else"
3. "*ngIf" avec "then"
4. "*ngIf" avec "then" et "else"
5. Nous pouvons utiliser les opérateurs logiques AND (&&&),OR(|||) et NOT( !)
6. We can avoid "Cannot read property of undefined" errors using `*ngIf`
7. While working with observables, We can avoid multiple subscriptions and safe navigation operators by using `*ngIf` directive. 
