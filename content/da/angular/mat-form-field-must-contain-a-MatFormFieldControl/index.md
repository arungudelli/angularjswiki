+++
title   = "`mat-form-field` skal indeholde en `MatFormFieldControl`"
subtitle= "Rettelse af `mat-form-field` skal indeholde en `MatFormFieldControl` fejl"
summary = "Hvis din `mat-form-field` indeholder en `<input>` eller `<textarea>` element, skal du sikre dig, at du har tilføjet `matInput` -direktivet til det og har importeret `MatInputModule`, ellers vil du få `mat-form-field must contain a MatFormFieldControl` -fejl i din applikation."
keywords=["mat-form-field skal indeholde en MatFormFieldControl"]
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

Hvis du bruger Angular materialemoduler, er du måske stødt på `mat-form-field must contain a MatFormFieldControl` fejl, mens du bruger `MatFormFieldModule`.

Denne fejl opstår, når du har glemt at tilføje en formularfeltkontrol til dit formularfelt.

{{%toc%}}

## Hvad er formularfeltkontroller? 

De oprindelige elementer som `<input>` eller `<textarea>`, som er placeret inden for `mat-form-field` fungerer som formularfeltkontroller 

Hvis din `mat-form-field` indeholder et `<input>` eller `<textarea>` element, skal du sikre dig, at du har tilføjet `matInput` -direktivet til det og har importeret `MatInputModule`, ellers vil du få `mat-form-field must contain a MatFormFieldControl` -fejl i din applikation.

Andre komponenter, der kan fungere som en formularfeltkontrol, omfatter `<mat-select>`, `<mat-chip-list>` og eventuelle brugerdefinerede formularfeltkontroller, som du har oprettet.


## Rettelse af `mat-form-field must contain a MatFormFieldControl` fejl.

For at rette fejlen skal du tilføje `MatInputModule` og `MatFormFieldModule` i et nødvendigt modul eller `app.module.ts` 

Eller som forklaret i [Angular material tutorial](https://www.angularjswiki.com/material/) tilføj alle materialemoduler i et fælles modul og tilføj det til `app.module.ts` -filen, så vi kan bruge dem i hele applikationen 

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

Og derefter skal du sørge for, at du har tilføjet `matInput` -direktivet til `mat-form-field` -kontrollen.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Ovenstående kode giver en fejl, fordi vi ikke har tilføjet `matInput` -direktivet.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Og **`matInput` er stregfølsom** 

Så hvis du har en stavefejl i `matInput` eller store bogstaver(`MatInput`) eller små bogstaver(`matinput`) i `matInput`, vil du stadig få en fejl.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrolinput må ikke indeholde `*ngIf`

Hvis du bruger `*ngIf` på mat-form-field-kontrollen, dvs, `<input>` tag, vil du få `mat-form-field must contain a MatFormFieldControl` fejl.

Nedenstående kode vil ikke virke.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

I stedet skal du bruge `*ngIf` på `mat-form-field` elementet.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Resumé

For at rette `mat-form-field must contain a MatFormFieldControl` fejlen skal du følge nedenstående trin

1. Importer `MatInputModule` og `MatFormFieldModule` 
2. Tilføj `matInput` -direktivet til `mat-form-field` -kontrollen. dvs. `input` eller `textarea`
3. Kontroller `matInput` stavemåde.
4. Brug ikke `*ngIf` på `mat-form-field` -kontrollen, men i stedet på `mat-form-field` -elementet

