+++ title = "Comment obtenir l'indice de l'élément ngFor en angular" subtitle = "obtenir l'index de l'élément ngFor" summary ="Etapes pour obtenir l'indice de l'élément ngFor dans Angular 1. Déclarer une variable à l'intérieur de la directive *ngFor en utilisant 'let' ou 'as', par exemple dire 'indexofelement' ou simplement 'i'. for instance say indexofelement. 2. Assignez la valeur de la variable à 'index'. 3. Et afficher l'index de l'élément ngFor en utilisant une expression angular." keywords=["indice ngFor,obtenir l'index de l'élément ngFor"] date="2020-02-13T01:01:05+0000" lastmod="2020-02-13T02:45:18+0000" type="post" draft=false authors = ["admin"]

+++

Etapes pour obtenir l'indice de l'élément ngFor dans Angular

1. Déclarer une variable à l'intérieur de la directive *ngFor en utilisant `let` ou `as`, par exemple dire "indexofelement" ou simplement "i". for instance say `indexofelement` or simply `i`.
2. Assignez la valeur de la variable à `index`.
3. Et afficher l'index de l'élément ngFor en utilisant une expression angular.

Nous allons passer par un exemple pour mieux le comprendre.

J'ai créé un composant appelé `NgForGetIndex` dans mon projet Angular et j'ai ajouté un ensemble de livres.

```
export class NgForGetIndexComponent implements OnInit {

  books : Book[];

  constructor() { 
     this.books = [
        {id:1,name:"Angular"},
        {id:2,name:"Typescript"},
        {id:3,name:"Javascript"},
        {id:4,name:"HTML"}
     ];
  }

  ngOnInit(): void {
  }

}

interface Books{
  id: number;
  name : string;
}
```

Et dans le composant html, j'ai déclaré une variable (indexOfelement) à l'intérieur de la directive ngFor en utilisant le mot-clé "let" comme indiqué ci-dessous.

```
<ul>
    <li *ngFor="let book of books;let indexOfelement=index;">
      ngFor index: {{indexOfelement}} value : {{book.name}} 
    </li>
</ul>

```

Et l'index de l'élément `ngFor` sera affiché dans la page web comme indiqué ci-dessous.

```
ngFor index: 0 value : Angular
ngFor index: 1 value : Typescript
ngFor index: 2 value : Javascript
ngFor index: 3 value : HTML
```

Nous pouvons utiliser le mot-clé `as` pour référencer la valeur de l'index des éléments ngFor comme indiqué ci-dessous.

```
*ngFor="let product of products;
        index as indexOfelement;"
```
