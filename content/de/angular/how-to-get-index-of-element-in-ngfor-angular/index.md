+++ title = "Wie erhält man den Index des ngFor-Elements in Angular" subtitle = "liefert den Index des ngFor-Elements" summary ="Schritte, um den Index des ngFor-Elements in Angular zu erhalten 1.Deklarieren Sie eine Variable innerhalb der ngFor-Direktive mit den Schlüsselwörtern let oder as. Sagen Sie zum Beispiel indexofelement oder einfach i.2. Declare a variable inside *ngFor directive using let or as keyword. for instance say indexofelement. 2. Weisen Sie den Variablenwert index zu. 3. Und zeigen Sie den Index des ngFor-Elements an, indem Sie den angular Schablonenausdruck verwenden." keywords=["ngFor index,liefert den Index des ngFor-Elements"] date="2020-02-13T01:01:05+0000" lastmod="2020-02-13T02:45:18+0000" type="post" draft=false authors = ["admin"]

+++

Schritte, um den Index des ngFor-Elements in Angular zu erhalten

1. Deklarieren Sie eine Variable innerhalb der *ngFor-Direktive mit den Schlüsselwörtern `let` oder `as`. Sagen Sie zum Beispiel "indexofelement" oder einfach "i".
2. Weisen Sie den Variablenwert index zu.
3. Und zeigen Sie den Index des ngFor-Elements an, indem Sie den angular Schablonenausdruck verwenden.

Wir werden ein Beispiel durchgehen, um es weiter zu verstehen.

Ich habe in meinem Angular-Projekt eine Komponente namens "NgForGetIndex" erstellt und eine Variable für eine Reihe von Büchern hinzugefügt.

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

Und in der Komponente html habe ich eine Variable (indexOfelement) innerhalb der ngFor-Direktive deklariert, indem ich das Schlüsselwort "let" wie unten gezeigt verwendet habe.

```
<ul>
    <li *ngFor="let book of books;let indexOfelement=index;">
      ngFor index: {{indexOfelement}} value : {{book.name}} 
    </li>
</ul>

```

Und der Index des ngFor-Elements wird auf der Webseite wie unten gezeigt angezeigt.

```
ngFor index: 0 value : Angular
ngFor index: 1 value : Typescript
ngFor index: 2 value : Javascript
ngFor index: 3 value : HTML
```

Wir können das Schlüsselwort "as" verwenden, um den Wert des ngFor-Elementindex wie unten dargestellt darzustellen.

```
*ngFor="let product of products;
        index as indexOfelement;"
```
