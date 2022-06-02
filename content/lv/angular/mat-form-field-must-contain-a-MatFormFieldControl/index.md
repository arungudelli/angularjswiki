+++
title   = "`mat-form-field` jāietver `MatFormFieldControl`"
subtitle= "Fiksējot `mat-form-field` jāietver kļūda `MatFormFieldControl` "
summary = "Ja jūsu `mat-form-field` satur `<input>` vai `<textarea>` elementu, pārliecinieties, ka esat tam pievienojis direktīvu `matInput` un importējis `MatInputModule`, pretējā gadījumā jūsu lietojumprogrammā parādīsies `mat-form-field must contain a MatFormFieldControl` kļūda."
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

Ja jūs izmantojat Angular material moduļus, iespējams, esat saskāries ar `mat-form-field must contain a MatFormFieldControl` kļūdu, izmantojot `MatFormFieldModule`.

Šī kļūda rodas tad, ja jūs neesat paspējis pievienot veidlapas lauka kontroli savam veidlapas laukam.

{{%toc%}}

## kas ir veidlapas lauka kontrole? 

Tādi vietējie elementi kā `<input>` vai `<textarea>`, kas atrodas `mat-form-field` iekšpusē, darbojas kā veidlapas lauka kontrole 

Ja jūsu `mat-form-field` satur `<input>` vai `<textarea>` elementu, pārliecinieties, ka tam esat pievienojis direktīvu `matInput` un importējis `MatInputModule`, pretējā gadījumā jūsu lietojumprogrammā parādīsies `mat-form-field must contain a MatFormFieldControl` kļūda.

Un citi komponenti, kas var darboties kā veidlapas lauka kontrole, ir šādi `<mat-select>`, `<mat-chip-list>` un jebkuras jūsu izveidotās pielāgotās veidlapas lauka vadības elementi.


## `mat-form-field must contain a MatFormFieldControl` kļūdas labošana.

Lai novērstu kļūdu, pievienojiet `MatInputModule` un `MatFormFieldModule` vajadzīgā moduļa iekšpusē vai `app.module.ts` 

Vai arī, kā paskaidrots [Angular material tutorial](https://www.angularjswiki.com/material/), pievienojiet visus materiālu moduļus kopējā modulī un pievienojiet to `app.module.ts` failā, lai mēs tos varētu izmantot visā lietojumprogrammā 

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

Un pēc tam pārliecinieties, ka esat pievienojis `matInput` direktīvu `mat-form-field` kontrolei.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Iepriekš minētais kods izmet kļūdu, jo mēs neesam pievienojuši `matInput` direktīvu.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Un **`matInput` ir lielo un mazo burtu sensitivitāte** 

Tāpēc, ja `matInput` ir rakstības kļūda vai `matInput` ir lieli burti(`MatInput`) vai mazie burti(`matinput`), jūs joprojām sastapsieties ar kļūdu.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontroles ievades sistēmā nedrīkst būt `*ngIf`

Ja jūs izmantojat `*ngIf` uz mat-form-field kontroles, t.i.., `<input>` tagu, jūs saņemsiet `mat-form-field must contain a MatFormFieldControl` kļūdu.

Tālāk norādītais kods nedarbosies.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Tā vietā jums vajadzētu izmantot `*ngIf` uz `mat-form-field` elementa.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Kopsavilkums

Lai labotu `mat-form-field must contain a MatFormFieldControl` kļūdu, izpildiet tālāk norādītās darbības

1. Importējiet `MatInputModule` un `MatFormFieldModule` 
2. Pievienojiet `matInput` direktīvu `mat-form-field` kontrolei, t. i., `input` vai `textarea`
3. Pārbaudiet `matInput` pareizrakstību.
4. Neizmantojiet `*ngIf` uz `mat-form-field` vadības elementa, tā vietā izmantojiet to uz `mat-form-field` elementa

