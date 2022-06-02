+++
title   = "`mat-form-field` musí obsahovat `MatFormFieldControl`"
subtitle= "Oprava `mat-form-field` musí obsahovat chybu `MatFormFieldControl` "
summary = "Pokud vaše stránka `mat-form-field` obsahuje `<input>` nebo `<textarea>` element, ujistěte se, že jste do něj přidali direktivu `matInput` a importovali `MatInputModule`, jinak se vám v aplikaci objeví chyba `mat-form-field must contain a MatFormFieldControl`."
keywords=["mat-form-field musí obsahovat MatFormFieldControl"]
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

Pokud používáte moduly Angular material, mohli jste se setkat s chybou `mat-form-field must contain a MatFormFieldControl` při použití `MatFormFieldModule`.

K této chybě dochází v případě, že jste opomněli přidat do formulářového pole ovládací prvek.

{{%toc%}}

## co jsou ovládací prvky formulářového pole? 

Nativní prvky jako např `<input>` nebo `<textarea>`, které jsou umístěny uvnitř `mat-form-field`, fungují jako ovládací prvky formulářového pole 

Pokud vaše stránka `mat-form-field` obsahuje např `<input>` nebo `<textarea>` element, ujistěte se, že jste do něj přidali direktivu `matInput` a importovali `MatInputModule`, jinak se vám v aplikaci objeví chyba `mat-form-field must contain a MatFormFieldControl`.

A mezi další komponenty, které mohou fungovat jako ovládací prvek formulářového pole, patří např `<mat-select>`, `<mat-chip-list>` a všechny vlastní ovládací prvky formulářových polí, které jste vytvořili.


## Oprava chyby `mat-form-field must contain a MatFormFieldControl`.

Chcete-li chybu opravit, přidejte stránky `MatInputModule` a `MatFormFieldModule` uvnitř potřebného modulu nebo `app.module.ts` 

Nebo jak je vysvětleno v [Angular material tutorial](https://www.angularjswiki.com/material/) přidejte všechny materiálové moduly do společného modulu a přidejte je do souboru `app.module.ts`, abychom je mohli používat v celé aplikaci 

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

A dále se ujistěte, že jste do ovládacího prvku `mat-form-field` přidali direktivu `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Výše uvedený kód vyhodí chybu, protože jsme nepřidali direktivu `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

A **`matInput` rozlišuje velká a malá písmena** 

Takže pokud máte v `matInput` pravopisnou chybu nebo v `matInput` velká písmena(`MatInput`) nebo malá písmena(`matinput`) , stejně se setkáte s chybou.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrolní vstup by neměl obsahovat `*ngIf`

Pokud používáte `*ngIf` na ovládacím prvku mat-form-field, tj., `<input>` tag, zobrazí se chyba `mat-form-field must contain a MatFormFieldControl`.

Níže uvedený kód nebude fungovat.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Místo toho byste měli použít `*ngIf` na prvku `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Shrnutí

Chcete-li opravit chybu `mat-form-field must contain a MatFormFieldControl`, postupujte podle následujících kroků

1. Importujte stránky `MatInputModule` a `MatFormFieldModule` 
2. Přidejte direktivu `matInput` do ovládacího prvku `mat-form-field`. Tj. `input` nebo `textarea`
3. Zkontrolujte pravopis `matInput`.
4. Nepoužívejte `*ngIf` na ovládacím prvku `mat-form-field`, místo toho ji použijte na prvku `mat-form-field` 

