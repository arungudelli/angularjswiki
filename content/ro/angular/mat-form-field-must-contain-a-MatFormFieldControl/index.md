+++
title   = "`mat-form-field` trebuie să conțină un `MatFormFieldControl`"
subtitle= "Fixarea `mat-form-field` trebuie să conțină o eroare `MatFormFieldControl` "
summary = " Dacă `mat-form-field` conține o eroare `<input>` sau `<textarea>` element, asigurați-vă că ați adăugat directiva `matInput` la acesta și că ați importat `MatInputModule`, altfel veți obține eroarea `mat-form-field must contain a MatFormFieldControl` în aplicația dvs."
keywords=["mat-form-field trebuie să conțină un MatFormFieldControl"]
type="post"
date="2022-06-01T01:01:05+0000"
lastmod="2022-06-01T04:00:07+0000"
draft=false
authors = ["admin"]
[image]
  caption = "mat-form-field must contain a MatFormFieldControl"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

Dacă utilizați modulele materiale Angular, este posibil să fi întâlnit eroarea `mat-form-field must contain a MatFormFieldControl` în timp ce utilizați `MatFormFieldModule`.

Această eroare apare atunci când ați omis să adăugați un control de câmp de formular la câmpul de formular.

{{%toc%}}

## ce sunt controalele câmpului de formular? 

Elementele native precum `<input>` sau `<textarea>`, care sunt plasate în interiorul `mat-form-field` acționează ca și controale de câmp de formular 

În cazul în care `mat-form-field` conține un element `<input>` sau `<textarea>` asigurați-vă că ați adăugat directiva `matInput` și că ați importat `MatInputModule`, în caz contrar veți primi o eroare `mat-form-field must contain a MatFormFieldControl` în aplicația dumneavoastră.

Și alte componente care pot acționa ca un control de câmp de formular includ `<mat-select>`, `<mat-chip-list>` și orice control de câmp de formular personalizat pe care l-ați creat.


## Corectarea erorii `mat-form-field must contain a MatFormFieldControl`.

Pentru a remedia eroarea, adăugați `MatInputModule` și `MatFormFieldModule` în interiorul unui modul necesar sau `app.module.ts` 

Sau, așa cum se explică în [Angular material tutorial](https://www.angularjswiki.com/material/), adăugați toate modulele de materiale într-un modul comun și adăugați-l la fișierul `app.module.ts`, astfel încât să le putem utiliza în întreaga aplicație 

```
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AppModule { }

```

Și apoi asigurați-vă că ați adăugat directiva `matInput` la controlul `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Codul de mai sus generează o eroare deoarece nu am adăugat directiva `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Iar **`matInput` este sensibil la majuscule și minuscule** 

Deci, dacă aveți o greșeală de ortografie în `matInput` sau majuscule (`MatInput`) sau litere mici (`matinput`) în `matInput`, veți întâmpina totuși eroarea.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` intrarea de control nu trebuie să conțină `*ngIf`

Dacă utilizați `*ngIf` pe controlul mat-form-field, adică, `<input>` veți primi eroarea `mat-form-field must contain a MatFormFieldControl`.

Codul de mai jos nu va funcționa.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

În schimb, ar trebui să utilizați `*ngIf` pe elementul `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Rezumat

Pentru a remedia eroarea `mat-form-field must contain a MatFormFieldControl` urmați pașii de mai jos

1. Importați `MatInputModule` și `MatFormFieldModule` 
2. Adăugați directiva `matInput` la controlul `mat-form-field`. Adică, `input` sau `textarea`
3. Verificați ortografia `matInput`.
4. Nu folosiți `*ngIf` pe controlul `mat-form-field`, ci pe elementul `mat-form-field` 

