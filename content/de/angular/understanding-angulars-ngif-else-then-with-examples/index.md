+++
title = "*ngIf else dans Angular & Exemple *NgIf Async Pipe Observable"
subtitle = "Comprendre ngIf dans Angular"
type="post"
summary ="Pour écrire ngIf else dans angular, il faut définir un modèle else pour la directive *ngIf.*ngIf affiche ou supprime un élément du DOM en fonction de la condition donnée."
keywords=["ngif in angular,ngif else in angular,ngif with then,ngif else and then templates in angular"]
date="2018-08-04T01:01:05+0000"
lastmod="2019-10-26T16:20:19+0000"
draft=false
authors = ["admin"]

[image]
  caption = "ngIf Else Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular's "*ngIf" affiche ou supprime un élément du DOM en fonction de la condition donnée. 

Pour écrire "ngIf else" dans angular, il faut définir un modèle "else" pour la directive "*ngIf".

"*ngIf" combiné avec "async pipe" est très utile lors de la lecture de données à partir d'un fichier observable.

Dans toutes les versions de Angular, la syntaxe de la directive `*ngif` est la même.

{{%toc%}}

## comprendre *ngIf dans Angular avec exemple

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

Ou nous pouvons l'appliquer à d'autres composants angular, par exemple le composant [Material Checkbox](https://www.angularjswiki.com/angular/checkbox-implementation-in-angular-using-angular-material/).

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

"then template" est `<div>Hi I am Visible</div>` qui est inline.
 Il n'y a pas d' "else template".

L'astérisque n'est qu'un sucre syntaxique de l'élément [ng-template](https://www.angularjswiki.com/angular/what-is-ng-template-in-angular/).

Et si vous voyez le HTML généré, aucun élément ne sera ajouté au DOM si la condition de `ngIf` est `false`.

{{< figure src="ngif.png" title="ngif" alt="ngif">}} 

Alors pourquoi angular enlèvera l'élément plutôt que de le cacher ?

Lire la suite [Différence entre ngIf et "hidden" dans Angular]
(https://www.angularjswiki.com/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/)

Nous pouvons utiliser `ngIf' de quatre manières différentes

  1. Simple `ngIf' (comme expliqué ci-dessus)
  2. "*ngIf" avec "else"
  3. "*ngIf" avec "then"
  4. "*ngIf" avec "then" et "else"

Maintenant, comment pouvons-nous écrire `*ngIf else` en angular ? 

nous avons besoin de lier `else' template à `*ngIf''.

## Etapes pour écrire "*ngIf else" en Angulaire avec exemple

Nous apprendrons à écrire "*ngIf else" en utilisant le `<ng-template>` d'Angular avec un exemple simple.

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

Le bloc `else` pointe vers un `<ng-template>` étiqueté `#elseTemplate`.
Si la condition ou l'expression est vraie, "inline template" sera rendu par défaut sinon else template sera rendu.

Et ce template peut être défini n'importe où dans la vue des composants, mais comme une bonne pratique et pour améliorer la lisibilité, il est défini juste en dessous du bloc `ngIf`.

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


J'ai déclaré "else template" au-dessus du bloc `*ngIf' dans la vue `NgIfElseComponent', mais évitez d'écrire ainsi car c'est difficile à comprendre.

Le bloc `*ngIf else` ci-dessus sera converti en l'élément `<ng-template>` suivant.

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

## *ngIf avec alternative puis template dans Angular

Par défaut, le "then template" de `*ngIf` est le "inline template".

Pour changer le inline template de `ngIf`, il suffit de lier "then block" à l'alternative `<ng-template>`.

Voir l'exemple ci-dessous

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

Vous pourriez penser que pourquoi nous avons besoin d'une référence de template `[ngIfThen]` quand nous avons un template Inline.

nous pouvons changer les blocs "then" ou "else" dynamiquement au moment de l'exécution en profitant de ces `[ngIfThen]` et `[ngIfElse]`

Lire l'article

[https://www.angularjswiki.com/angular/dynamically-change-ngif-thenelse-templates-at-runtime-in-angular/](Modifier dynamiquement NgIf "Then", "Else" Templates Au moment de l'exécution Dans Angular)

## *ngif avec "else and then templates" exemple dans Angular

Nous pouvons lier à la fois "else template" et "then template" à la directive `*ngIf` comme indiqué ci-dessous. 

Et dans ce cas, le "inline template" par défaut sera ignoré.

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

Et ceci sera converti en

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

## *ngif avec opérateurs logiques AND (&&), OR(||), NOT( !)

Nous pouvons utiliser les opérateurs logiques AND (&&&),OR(|||) et NOT( !) en condition *ngif.

En voici des exemples.

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

## Utiliser la syntaxe "as" pour stocker la condition `*ngIf` dans une variable locale

Nous pouvons sauvegarder la condition `*ngIf` dans une variable locale en utilisant `as` et nous pouvons l'utiliser dans le template.

Jetez un coup d'oeil à l'exemple ci-dessous.


```
<div *ngIf="display as ngIfCondition;else elseTemplate">
  shows when display is {{ngIfCondition}}
</div>

<ng-template #elseTemplate let-ngIfCondition>
  shows when display is {{ngIfCondition}}
</ng-template>
```

J'ai sauvegardé la condition `*ngIf` dans une variable locale appelée `ngIfCondition`.
Pour que nous puissions l'utiliser dans "else template" ou "then template" si nécessaire.

And in `<ng-template>` we must use the prefix `let` before the variable.

Vous vous demandez peut-être pourquoi c'est utile, parce que de toute façon l'expression va être "true" ou "false". Ou nous pouvons simplement utiliser `{{display}}` au lieu de déclarer la variable locale `ngIfCondition`.

La variable `display` est statique et disponible au moment de l'évaluation `*ngIf`.

Et si la variable est asynchrone ? et provient d'une observable ?

## *ngIf avec async pipe et exemple observable

Nous allons lier des données de produit provenant d'un observable à un composant à l'aide d'un "async pipe".

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

On devrait utiliser des tuyaux sur toutes les propriétés qu'on veut montrer.

Le problème avec l'approche ci-dessus est le suivant

  * Nous avons utilisé des tuyaux sur chaque propriété, ce qui crée un abonnement chaque fois que des tuyaux asynchrones sont utilisés. Dans l'exemple ci-dessus, nous allons créer 4 abonnements.
  * Pour éviter cela, nous pouvons utiliser rxjs share() operator pour partager l'abonnement avec plusieurs abonnés.

```
 product: Observable<{}>;
      constructor() { }
      ngOnInit() {
        this.product= this.getAsyncData().pipe(share());
      }
```

   * Mais la vue composant reste la même, pour chaque propriété il faut utiliser "async pipe" et " ? Opérateur"
  * Et nous ne pouvons pas afficher de "templates alternatifs" pendant le chargement des données.

La solution idéale sera la suivante.

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

C'est exactement ce que `*ngIf` fera avec "async pipe" avec observable en utilisant la syntaxe `*ngIf as`.

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

nous allons creuser dans le code et voir ce qui se passe ici

```
<div *ngIf="product | async as productItem; else loading">
```
Nous passons le produit observable à "*ngIf avec async pipe" et le stockons dans la variable locale `productItem`.

Initialement, si le produit est nul, il affichera le "#Loading template", une fois le produit disponible, il affichera "Inline template" de `*ngIf`.

Le code ci-dessus avec *ngIf est très propre et facile à comprendre. Nous supprimons les opérateurs de safe-traversal-opérateur non désirés et les abonnements multiples.

J'espère que vous avez compris les concepts de base de la directive `*ngIf' avec "then template" et "else templates".

