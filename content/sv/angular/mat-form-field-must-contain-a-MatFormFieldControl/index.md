+++
title   = "`mat-form-field` måste innehålla en `MatFormFieldControl`"
subtitle= "Fastställande av `mat-form-field` måste innehålla ett `MatFormFieldControl` fel"
summary = "Om din `mat-form-field` innehåller ett fel `<input>` eller `<textarea>` element, se till att du har lagt till `matInput` -direktivet och importerat `MatInputModule`, annars kommer du att få ett `mat-form-field must contain a MatFormFieldControl` -fel i din applikation."
keywords=["mat-form-field måste innehålla en MatFormFieldControl"]
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

Om du använder Angular-materialmoduler kan du ha stött på `mat-form-field must contain a MatFormFieldControl` fel när du använder `MatFormFieldModule`.

Felet uppstår när du har missat att lägga till en formulärfältskontroll i ditt formulärfält.

{{%toc%}}

## Vad är formulärfältskontroller? 

De ursprungliga elementen som `<input>` eller `<textarea>`som placeras på `mat-form-field` fungerar som kontroller för formulärfält 

Om din `mat-form-field` innehåller en `<input>` eller `<textarea>` element, se till att du har lagt till `matInput` -direktivet och importerat `MatInputModule`, annars kommer du att få felet `mat-form-field must contain a MatFormFieldControl` i din applikation.

Andra komponenter som kan fungera som kontroll för formulärfält är följande `<mat-select>`, `<mat-chip-list>` och alla anpassade formulärfältskontroller som du har skapat.


## Rätta `mat-form-field must contain a MatFormFieldControl` fel.

För att åtgärda felet lägger du till `MatInputModule` och `MatFormFieldModule` i en nödvändig modul eller `app.module.ts` 

Eller så som förklaras i [Angular material tutorial] (https://www.angularjswiki.com/material/) lägger du till alla materialmoduler i en gemensam modul och lägger till den i filen `app.module.ts` så att vi kan använda dem i hela programmet 

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

Se sedan till att du har lagt till `matInput` -direktivet i `mat-form-field` -kontrollen.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Ovanstående kod ger upphov till ett fel eftersom vi inte har lagt till direktivet `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Och **`matInput` är skiftlägeskänslig** 

Så om du har ett stavfel i `matInput` eller om du har stora bokstäver(`MatInput`) eller små bokstäver(`matinput`) i `matInput`, kommer du ändå att få ett fel.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrollinmatningen får inte innehålla `*ngIf`

Om du använder `*ngIf` på mat-form-field-kontrollen, dvs, `<input>` får du felet `mat-form-field must contain a MatFormFieldControl`.

Nedanstående kod kommer inte att fungera.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Istället bör du använda `*ngIf` på elementet `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Sammanfattning

För att åtgärda felet `mat-form-field must contain a MatFormFieldControl` följer du nedanstående steg

1. Importera `MatInputModule` och `MatFormFieldModule` 
2. Lägg till `matInput` -direktivet i `mat-form-field` -kontrollen, dvs. `input` eller `textarea`
3. Kontrollera stavningen av `matInput`.
4. Använd inte `*ngIf` på `mat-form-field` -kontrollen utan på `mat-form-field` -elementet

