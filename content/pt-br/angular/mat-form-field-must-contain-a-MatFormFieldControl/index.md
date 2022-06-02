+++
title   = "`mat-form-field` deve conter um `MatFormFieldControl`"
subtitle= "A correção `mat-form-field` deve conter um erro `MatFormFieldControl` "
summary = "Se seu `mat-form-field` contém um `<input>` ou `<textarea>` certifique-se de ter adicionado a diretiva `matInput` a ele e de ter importado `MatInputModule` outros sábio você receberá `mat-form-field must contain a MatFormFieldControl` erro em sua aplicação"
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

Se você estiver usando módulos de materiais angulares você pode ter encontrado um erro `mat-form-field must contain a MatFormFieldControl` enquanto usava `MatFormFieldModule`.

Este erro ocorre quando você não adicionou um controle de campo do formulário ao seu campo do formulário.

{{%toc%}}

## o que são controles de campo de formulário? 

Os elementos nativos como `<input>` ou `<textarea>`que são colocados dentro de `mat-form-field` funcionam como controles de campo de forma 

Se seu `mat-form-field` contém um `<input>` ou `<textarea>` certifique-se de ter adicionado a diretiva `matInput` a ele e de ter importado `MatInputModule` outros sábios você receberá `mat-form-field must contain a MatFormFieldControl` erro em sua aplicação.

E outros componentes que podem atuar como um controle de campo de forma incluem `<mat-select>`, `<mat-chip-list>` e qualquer controle de campo de formulário personalizado que você tenha criado.


## Correção do erro `mat-form-field must contain a MatFormFieldControl`.

Para corrigir o erro, adicione `MatInputModule` e `MatFormFieldModule` dentro de um módulo necessário ou `app.module.ts` 

Ou como explicado em [Tutorial de material angular](https://www.angularjswiki.com/material/) adicionar todos os módulos de material em um módulo comum e adicioná-lo ao arquivo `app.module.ts` para que possamos usá-los em toda a aplicação 

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

E, em seguida, certifique-se de ter adicionado `matInput` diretriz ao controle `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

O código acima lança um erro porque não adicionamos a diretiva `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

E **`matInput` é sensível a casos*** 

Portanto, se você tiver um erro ortográfico em `matInput` ou maiúsculas (`MatInput`) ou letras minúsculas (`matinput`) em `matInput`, ainda assim você encontrará o erro.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` a entrada de controle não deve conter `*ngIf`

Se você estiver usando `*ngIf` no controle de campo mate, ou seja `<input>` você receberá o erro `mat-form-field must contain a MatFormFieldControl`.

O código abaixo não vai funcionar.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Em vez disso, você deve usar `*ngIf` no elemento `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Resumo

Para corrigir o erro `mat-form-field must contain a MatFormFieldControl` siga os passos abaixo

1. Importação `MatInputModule` e `MatFormFieldModule` 
2. Adicione `matInput` ao controle `mat-form-field`, ou seja, `input` ou `textarea`
3. Verifique `matInput` ortografia.
4. Não utilize `*ngIf` no controle `mat-form-field` em vez de utilizá-lo no elemento `mat-form-field` 

