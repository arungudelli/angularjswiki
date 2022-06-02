+++
title   = "`mat-form-field` musí obsahovať `MatFormFieldControl`"
subtitle= "Oprava `mat-form-field` musí obsahovať chybu `MatFormFieldControl` "
summary = "Ak vaša stránka `mat-form-field` obsahuje `<input>` alebo `<textarea>` prvok, uistite sa, že ste k nemu pridali smernicu `matInput` a importovali `MatInputModule`, inak sa vo vašej aplikácii objaví chyba `mat-form-field must contain a MatFormFieldControl`."
keywords=["mat-form-field musí obsahovať MatFormFieldControl"]
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

Ak používate moduly Angular material, mohli ste sa stretnúť s chybou `mat-form-field must contain a MatFormFieldControl` pri používaní `MatFormFieldModule`.

Táto chyba sa vyskytne, ak ste do formulárového poľa zabudli pridať ovládací prvok.

{{%toc%}}

## čo sú ovládacie prvky formulárového poľa? 

Natívne prvky ako napr `<input>` alebo `<textarea>`, ktoré sú umiestnené vo vnútri stránky `mat-form-field`, fungujú ako ovládacie prvky formulárového poľa 

Ak vaša stránka `mat-form-field` obsahuje `<input>` alebo `<textarea>` prvok, uistite sa, že ste k nemu pridali direktívu `matInput` a importovali `MatInputModule`, inak sa vám v aplikácii zobrazí chyba `mat-form-field must contain a MatFormFieldControl`.

A medzi ďalšie komponenty, ktoré môžu fungovať ako ovládací prvok poľa formulára, patrí `<mat-select>`, `<mat-chip-list>` a všetky vlastné ovládacie prvky polí formulára, ktoré ste vytvorili.


## Oprava chyby `mat-form-field must contain a MatFormFieldControl`.

Ak chcete chybu opraviť, pridajte `MatInputModule` a `MatFormFieldModule` do potrebného modulu alebo `app.module.ts` 

Alebo ako je vysvetlené v [Angular material tutorial](https://www.angularjswiki.com/material/), pridajte všetky materiálové moduly do spoločného modulu a pridajte ho do súboru `app.module.ts`, aby sme ich mohli používať v celej aplikácii 

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

A ďalej sa uistite, že ste do ovládacieho prvku `mat-form-field` pridali smernicu `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Vyššie uvedený kód vyhodí chybu, pretože sme nepridali direktívu `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

A **`matInput` rozlišuje veľké a malé písmená** 

Takže ak máte pravopisnú chybu v `matInput` alebo veľké písmená(`MatInput`) alebo malé písmená(`matinput`) v `matInput`, aj tak sa stretnete s chybou.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## Kontrolný vstup `mat-form-field` by nemal obsahovať `*ngIf`

Ak používate `*ngIf` na ovládacom prvku mat-form-field t.j., `<input>` tag, dostanete chybu `mat-form-field must contain a MatFormFieldControl`.

Nižšie uvedený kód nebude fungovať.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Namiesto toho by ste mali použiť `*ngIf` na prvku `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Zhrnutie

Ak chcete opraviť chybu `mat-form-field must contain a MatFormFieldControl`, postupujte podľa nasledujúcich krokov

1. Importujte stránky `MatInputModule` a `MatFormFieldModule` 
2. Pridajte smernicu `matInput` do ovládacieho prvku `mat-form-field`. t. j. `input` alebo `textarea`
3. Skontrolujte pravopis `matInput`.
4. Nepoužívajte `*ngIf` na ovládacom prvku `mat-form-field`, namiesto toho ho použite na prvku `mat-form-field` 

