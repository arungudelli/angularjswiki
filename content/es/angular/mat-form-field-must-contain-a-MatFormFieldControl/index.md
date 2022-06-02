+++
title   = "`mat-form-field` debe contener un `MatFormFieldControl`"
subtitle= "La fijación de `mat-form-field` debe contener un error `MatFormFieldControl` "
summary = "Si su `mat-form-field` contiene un `<input>` o `<textarea>` asegúrese de haber añadido la directiva `matInput` y de haber importado `MatInputModule`, de lo contrario obtendrá un error `mat-form-field must contain a MatFormFieldControl` en su aplicación."
keywords=["mat-form-field debe contener un MatFormFieldControl"]
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

Si está utilizando módulos de material de Angular es posible que se encuentre con el error `mat-form-field must contain a MatFormFieldControl` al utilizar `MatFormFieldModule`.

Este error se produce cuando no has añadido un control de campo de formulario a tu campo de formulario.

{{%toc%}}

## ¿qué son los controles de campo de formulario? 

Los elementos nativos como `<input>` o `<textarea>`que se colocan dentro de `mat-form-field` actúan como controles de campo de formulario 

Si su `mat-form-field` contiene un `<input>` o `<textarea>` asegúrese de haber añadido la directiva `matInput` y de haber importado `MatInputModule`, de lo contrario obtendrá el error `mat-form-field must contain a MatFormFieldControl` en su aplicación.

Y otros componentes que pueden actuar como un control de campo de formulario incluyen `<mat-select>`, `<mat-chip-list>` y cualquier control de campo de formulario personalizado que hayas creado.


## Arreglando el error de `mat-form-field must contain a MatFormFieldControl`.

Para solucionar el error, añada `MatInputModule` y `MatFormFieldModule` dentro de un módulo necesario o `app.module.ts` 

O como se explica en [Angular material tutorial](https://www.angularjswiki.com/material/) añadir todos los módulos de material en un módulo común y añadirlo al archivo `app.module.ts` para que podamos utilizarlos en toda la aplicación 

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

Y a continuación asegúrate de haber añadido la directiva `matInput` al control `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

El código anterior arroja un error porque no hemos añadido la directiva `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Y **`matInput` distingue entre mayúsculas y minúsculas** 

Así que si tiene un error ortográfico en `matInput` o mayúsculas (`MatInput`) o minúsculas (`matinput`) en `matInput`, todavía se encontrará con el error.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` la entrada de control no debe contener `*ngIf`

Si está utilizando `*ngIf` en el control mat-form-field, es decir, `<input>` obtendrá el error `mat-form-field must contain a MatFormFieldControl`.

El siguiente código no funcionará.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

En lugar de eso, debe utilizar `*ngIf` en el elemento `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Resumen

Para solucionar el error de `mat-form-field must contain a MatFormFieldControl` siga los siguientes pasos

1. Importar `MatInputModule` y `MatFormFieldModule` 
2. Añada la directiva `matInput` al control `mat-form-field`. Es decir, `input` o `textarea`
3. Compruebe la ortografía de `matInput`.
4. No utilice `*ngIf` en el control `mat-form-field` sino en el elemento `mat-form-field` 

