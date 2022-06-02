+++
title   = "`mat-form-field` tartalmaznia kell egy `MatFormFieldControl`"
subtitle= "A `mat-form-field` javításnak tartalmaznia kell egy `MatFormFieldControl` hibát"
summary = " Ha a `mat-form-field` tartalmaz egy `<input>` vagy `<textarea>` elemet, győződj meg róla, hogy hozzáadtad a `matInput` direktívát és importáltad a `MatInputModule`, különben `mat-form-field must contain a MatFormFieldControl` hibát kapsz az alkalmazásodban."
keywords=["mat-form-field must contain a MatFormFieldControl"]
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

Ha Angular anyagi modulokat használ, akkor előfordulhat, hogy `mat-form-field must contain a MatFormFieldControl` hibával találkozott a `MatFormFieldModule` használata során.

Ez a hiba akkor jelentkezik, ha elmulasztott egy űrlapmező vezérlőt hozzáadni az űrlapmezőhöz.

{{%toc%}}

## Mik azok az űrlapmező-vezérlők? 

A natív elemek, mint például `<input>` vagy `<textarea>`, amelyek a `mat-form-field` oldalon belül helyezkednek el, űrlapmező-vezérlőként működnek 

Ha a `mat-form-field` tartalmaz egy `<input>` vagy `<textarea>` elemet tartalmaz, győződjön meg róla, hogy hozzáadta a `matInput` direktívát, és importálta a `MatInputModule`, különben `mat-form-field must contain a MatFormFieldControl` hibát fog kapni az alkalmazásban.

És más komponensek, amelyek űrlapmező vezérlőként működhetnek, a következőket tartalmazzák `<mat-select>`, `<mat-chip-list>` és az általad létrehozott egyéni űrlapmező-vezérlők.


## A `mat-form-field must contain a MatFormFieldControl` hiba javítása.

A hiba kijavításához adja hozzá a `MatInputModule` és a `MatFormFieldModule` egy szükséges modulon belül vagy a `app.module.ts` 

Vagy ahogyan az [Angular material tutorial](https://www.angularjswiki.com/material/) elmagyarázza, adjuk hozzá az összes anyagmodult egy közös modulban, és adjuk hozzá a `app.module.ts` fájlhoz, hogy az egész alkalmazásban használhassuk őket 

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

Ezután pedig győződjünk meg róla, hogy a `matInput` direktívát hozzáadtuk a `mat-form-field` vezérlőhöz.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

A fenti kód hibát dob, mert nem adtuk hozzá a `matInput` direktívát.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

A **`matInput` pedig nagy- és kisbetű-érzékeny** 

Tehát ha a `matInput` -ban helyesírási hiba van, vagy a `matInput`-ban nagybetűs(`MatInput`) vagy kisbetűs(`matinput`), akkor is hiba fog jelentkezni.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` vezérlő bemenet nem tartalmazhat `*ngIf`

Ha a `*ngIf` címet használja a mat-form-mező vezérlőn, pl., `<input>` tag, akkor a `mat-form-field must contain a MatFormFieldControl` hibát kapja.

Az alábbi kód nem fog működni.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Ehelyett a `*ngIf` címet kell használnia a `mat-form-field` elemre.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Összefoglaló

A `mat-form-field must contain a MatFormFieldControl` hiba kijavításához kövesse az alábbi lépéseket

1. Importálja a `MatInputModule` és a `MatFormFieldModule` címeket 
2. Adja hozzá a `matInput` irányelvet a `mat-form-field` vezérlőhöz, vagyis a `input` vagy a `textarea`
3. Ellenőrizze a `matInput` helyesírását.
4. Ne használja a `*ngIf` címet a `mat-form-field` vezérlőn, hanem használja a `mat-form-field` elemen

