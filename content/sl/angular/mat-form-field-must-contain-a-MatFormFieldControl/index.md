+++
title   = "`mat-form-field` mora vsebovati `MatFormFieldControl`"
subtitle= "Popravek `mat-form-field` mora vsebovati napako `MatFormFieldControl` "
summary = "Če vaš `mat-form-field` vsebuje `<input>` ali `<textarea>` element, se prepričajte, da ste mu dodali direktivo `matInput` in uvozili `MatInputModule`, sicer boste v aplikaciji dobili napako `mat-form-field must contain a MatFormFieldControl`."
keywords=["mat-form-field mora vsebovati MatFormFieldControl"]
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

Če uporabljate materialne module Angular, ste morda naleteli na napako `mat-form-field must contain a MatFormFieldControl` pri uporabi `MatFormFieldModule`.

Ta napaka se pojavi, če ste zamudili dodati kontrolo za polje obrazca v polje obrazca.

{{%toc%}}

## kaj so kontrole polja obrazca? 

Nativni elementi, kot so `<input>` ali `<textarea>`, ki so nameščeni znotraj `mat-form-field`, delujejo kot kontrolni elementi polja obrazca 

Če vaš `mat-form-field` vsebuje `<input>` ali `<textarea>` element, se prepričajte, da ste mu dodali direktivo `matInput` in uvozili `MatInputModule`, sicer se bo v aplikaciji pojavila napaka `mat-form-field must contain a MatFormFieldControl`.

Druge komponente, ki lahko delujejo kot krmilnik polja obrazca, vključujejo `<mat-select>`, `<mat-chip-list>` in vse po meri ustvarjene kontrole polja obrazca.


## Odpravljanje napake `mat-form-field must contain a MatFormFieldControl`.

Napako odpravite tako, da dodate `MatInputModule` in `MatFormFieldModule` znotraj potrebnega modula ali `app.module.ts` 

Ali kot je razloženo v [Angular material tutorial](https://www.angularjswiki.com/material/), dodajte vse materialne module v skupni modul in ga dodajte v datoteko `app.module.ts`, da jih bomo lahko uporabljali v celotni aplikaciji 

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

In nato se prepričajte, da ste dodali direktivo `matInput` v kontrolo `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Zgornja koda vrže napako, ker nismo dodali direktive `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

In **`matInput` je občutljiv na velike in male črke** 

Če imate torej v `matInput` pravopisno napako ali velike(`MatInput`) ali male(`matinput`) črke v `matInput`, boste še vedno naleteli na napako.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrolni vnos ne sme vsebovati `*ngIf`

Če uporabljate `*ngIf` na kontrolni vrstici mat-form-field, tj, `<input>` oznako, boste dobili napako `mat-form-field must contain a MatFormFieldControl`.

Spodnja koda ne bo delovala.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Namesto tega uporabite `*ngIf` na elementu `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Povzetek

Če želite odpraviti napako `mat-form-field must contain a MatFormFieldControl`, sledite naslednjim korakom

1. Uvozite `MatInputModule` in `MatFormFieldModule` 
2. Dodajte direktivo `matInput` v krmilnik `mat-form-field`, tj. `input` ali `textarea`
3. Preverite črkovanje `matInput`.
4. Ne uporabljajte `*ngIf` na kontrolniku `mat-form-field`, temveč ga uporabite na elementu `mat-form-field` 

