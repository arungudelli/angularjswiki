+++
title   = "`mat-form-field` on sisällettävä `MatFormFieldControl`"
subtitle= "Korjaus `mat-form-field` täytyy sisältää `MatFormFieldControl` virhe"
summary = "Jos `mat-form-field` sisältää `<input>` tai `<textarea>` elementin, varmista, että olet lisännyt siihen `matInput` -direktiivin ja tuonut `MatInputModule`, muuten saat sovelluksessasi `mat-form-field must contain a MatFormFieldControl` -virheen."
keywords=["mat-form-kentän on sisällettävä MatFormFieldControl"]
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

Jos käytät Angular-materiaalimoduuleja, olet saattanut kohdata `mat-form-field must contain a MatFormFieldControl` virheen käyttäessäsi `MatFormFieldModule`.

Tämä virhe ilmenee, kun olet unohtanut lisätä lomakekentän ohjaimen lomakekenttään.

{{%toc%}}

## Mitä lomakekentän ohjaimet ovat? 

Natiivit elementit, kuten `<input>` tai `<textarea>`, jotka on sijoitettu `mat-form-field` -sivuston sisälle, toimivat lomakekentän ohjaimina 

Jos `mat-form-field` sisältää `<input>` tai `<textarea>` elementin, varmista, että olet lisännyt siihen `matInput` -direktiivin ja tuonut `MatInputModule`, muutoin saat `mat-form-field must contain a MatFormFieldControl` -virheen sovelluksessasi.

Muita komponentteja, jotka voivat toimia lomakekentän ohjaimina, ovat muun muassa seuraavat `<mat-select>`, `<mat-chip-list>` ja kaikki luomasi mukautetut lomakekentän ohjaimet.


## `mat-form-field must contain a MatFormFieldControl` -virheen korjaaminen.

Korjaa virhe lisäämällä `MatInputModule` ja `MatFormFieldModule` tarvittavan moduulin sisällä tai `app.module.ts` 

Tai kuten [Angular material tutorial](https://www.angularjswiki.com/material/) selitetään, lisää kaikki materiaalimoduulit yhteiseen moduuliin ja lisää se `app.module.ts` tiedostoon, jotta voimme käyttää niitä koko sovelluksessa 

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

Seuraavaksi varmista, että olet lisännyt `matInput` -direktiivin `mat-form-field` -ohjaukseen.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Yllä oleva koodi aiheuttaa virheen, koska emme ole lisänneet `matInput` -direktiiviä.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Ja **`matInput` on isojen ja pienten kirjainten suhteen erilainen** 

Joten jos sinulla on kirjoitusvirhe osoitteessa `matInput` tai jos sinulla on isoja kirjaimia(`MatInput`) tai pieniä kirjaimia(`matinput`) osoitteessa `matInput`, saat silti virheilmoituksen.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` ohjaussyötteen ei pitäisi sisältää `*ngIf`

Jos käytät `*ngIf` mat-form-kentän ohjauksessa esim, `<input>` tagia, saat `mat-form-field must contain a MatFormFieldControl` -virheen.

Alla oleva koodi ei toimi.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Sen sijaan sinun pitäisi käyttää `*ngIf` `mat-form-field` -elementissä.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Yhteenveto

Korjaa `mat-form-field must contain a MatFormFieldControl` -virhe noudattamalla seuraavia ohjeita

1. Tuo `MatInputModule` ja `MatFormFieldModule` 
2. Lisää `matInput` -direktiivi `mat-form-field` -ohjaimeen, eli `input` tai `textarea`
3. Tarkista `matInput` oikeinkirjoitus.
4. Älä käytä `*ngIf` `mat-form-field` -ohjaimessa vaan käytä sitä `mat-form-field` -elementissä

