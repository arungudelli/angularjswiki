+++
title   = "`mat-form-field` deve conter um `MatFormFieldControl`"
subtitle= "A correcção `mat-form-field` deve conter um erro `MatFormFieldControl` "
summary = "Se o seu `mat-form-field` contém um `<input>` ou `<textarea>` certifique-se de que lhe acrescentou a directiva `matInput` e importou `MatInputModule` outros sábios, obterá `mat-form-field must contain a MatFormFieldControl` erro na sua aplicação"
keywords=["mat-form-field deve conter um MatFormFieldControl"]
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

Se estiver a utilizar módulos de materiais angulares poderá ter encontrado um erro `mat-form-field must contain a MatFormFieldControl` ao utilizar `MatFormFieldModule`.

Este erro ocorre quando falhou em adicionar um controlo de campo do formulário ao seu campo do formulário.

{{%toc%}}

## o que são controlos de campo de formulários? 

Os elementos nativos como `<input>` ou `<textarea>`que são colocados dentro de `mat-form-field` actuam como controlos de campo da forma 

Se o seu `mat-form-field` contém um `<input>` ou `<textarea>` certifique-se de que lhe acrescentou a directiva `matInput` e importou `MatInputModule` outros dados que lhe permitirão obter `mat-form-field must contain a MatFormFieldControl` erro na sua aplicação.

E outros componentes que podem funcionar como um controlo de campo de forma incluem `<mat-select>`, `<mat-chip-list>` e qualquer controlo de campo de formulário personalizado que tenha criado.


## Corrigindo o erro `mat-form-field must contain a MatFormFieldControl`.

Para corrigir o erro, adicionar `MatInputModule` e `MatFormFieldModule` dentro de um módulo necessário ou `app.module.ts` 

Ou como explicado em [Angular material tutorial]( `app.module.ts` ) adicionar todos os módulos de material num módulo comum e adicioná-lo ao ficheiro para que possamos utilizá-los em toda a aplicação 

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

E, em seguida, certifique-se de que adicionou `matInput` directiva ao controlo `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

O código acima referido dá erro porque não adicionámos a directiva `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

E **`matInput` é sensível aos casos*** 

Assim, se tiver um erro ortográfico em `matInput` ou letras maiúsculas (`MatInput`) ou letras minúsculas (`matinput`) em `matInput`, ainda encontrará o erro.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` a entrada de controlo não deve conter `*ngIf`

Se estiver a utilizar `*ngIf` no controlo do campo mate, ou seja `<input>` etiqueta, receberá o erro `mat-form-field must contain a MatFormFieldControl`.

O código abaixo não irá funcionar.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Em vez disso, deve utilizar `*ngIf` no elemento `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Resumo

Para corrigir o erro `mat-form-field must contain a MatFormFieldControl` siga os passos seguintes

1. Importação `MatInputModule` e `MatFormFieldModule` 
2. Acrescentar `matInput` ao controlo `mat-form-field`. i.e., `input` ou `textarea`
3. Verifique `matInput` ortografia.
4. Não utilizar `*ngIf` no controlo `mat-form-field` em vez de o utilizar no elemento `mat-form-field` 

