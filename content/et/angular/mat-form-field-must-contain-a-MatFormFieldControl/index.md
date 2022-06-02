+++
title   = "`mat-form-field` peab sisaldama `MatFormFieldControl`"
subtitle= "Kinnitus `mat-form-field` peab sisaldama `MatFormFieldControl` viga"
summary = "Kui teie `mat-form-field` sisaldab `<input>` või `<textarea>` elementi, siis veenduge, et olete lisanud `matInput` direktiivi ja importinud `MatInputModule`, vastasel juhul saate oma rakenduses `mat-form-field must contain a MatFormFieldControl` vea."
keywords=["mat-form-field peab sisaldama MatFormFieldControl"]
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

Kui te kasutate Angulari materjalimooduleid, siis võib teil olla tekkinud `mat-form-field must contain a MatFormFieldControl` viga, kui te kasutate `MatFormFieldModule`.

See viga ilmneb siis, kui olete jätnud vormivälja kontrolli lisamata oma vormiväljale.

{{%toc%}}

## Mis on vormivälja kontrollelement? 

Natiivsed elemendid nagu `<input>` või `<textarea>`, mis on paigutatud `mat-form-field` sisemusse, toimivad vormivälja juhtelementidena 

Kui teie `mat-form-field` sisaldab `<input>` või `<textarea>` elementi, veenduge, et olete lisanud sellele `matInput` direktiivi ja importinud `MatInputModule`, vastasel juhul saate oma rakenduses `mat-form-field must contain a MatFormFieldControl` vea.

Ja muud komponendid, mis võivad toimida vormivälja kontrollina, hõlmavad järgmist `<mat-select>`, `<mat-chip-list>` ja kõik teie loodud kohandatud vormivälja juhtelemendid.


## `mat-form-field must contain a MatFormFieldControl` vea parandamine.

Vea parandamiseks lisage `MatInputModule` ja `MatFormFieldModule` vajaliku mooduli sees või `app.module.ts` 

Või nagu on selgitatud [Angular material tutorial](https://www.angularjswiki.com/material/) lisada kõik materjalimoodulid ühises moodulis ja lisada see `app.module.ts` faili, et saaksime neid kasutada kogu rakenduses 

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

Ja järgmisena veenduge, et olete lisanud `matInput` direktiivi `mat-form-field` kontrollile.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Ülaltoodud kood tekitab vea, sest me ei ole lisanud `matInput` direktiivi.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Ja **`matInput` on suur- ja väiketähelepanu tundlik** 

Nii et kui teil on kirjavigu `matInput` või suurtähtedega (`MatInput`) või väiketähtedega (`matinput`) `matInput`, siis tekib ikkagi viga.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrollsisend ei tohiks sisaldada `*ngIf`

Kui te kasutate `*ngIf` mat-vormi-välja kontrollimisel, st, `<input>` tag, saate `mat-form-field must contain a MatFormFieldControl` vea.

Allpool olev kood ei tööta.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Selle asemel tuleks kasutada `*ngIf` elementi `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Kokkuvõte

 `mat-form-field must contain a MatFormFieldControl` vea parandamiseks järgige alljärgnevaid samme

1. Impordi `MatInputModule` ja `MatFormFieldModule` 
2. Lisage `matInput` direktiiv `mat-form-field` kontrollile. st `input` või `textarea`
3. Kontrollida `matInput` õigekirja.
4. Ärge kasutage `*ngIf` `mat-form-field` kontrolli asemel kasutage seda `mat-form-field` elemendis

