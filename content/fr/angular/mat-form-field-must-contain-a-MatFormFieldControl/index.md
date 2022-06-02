+++
title   = "`mat-form-field` doit contenir une `MatFormFieldControl`"
subtitle= "La correction de `mat-form-field` doit contenir une erreur de `MatFormFieldControl` "
summary = " Si votre `mat-form-field` contient une `<input>` ou `<textarea>` assurez-vous que vous lui avez ajouté la directive `matInput` et que vous avez importé `MatInputModule`, sinon vous obtiendrez l'erreur `mat-form-field must contain a MatFormFieldControl` dans votre application."
keywords=["mat-form-field doit contenir un MatFormFieldControl"]
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

Si vous utilisez les modules matériels Angular, vous avez peut-être rencontré l'erreur `mat-form-field must contain a MatFormFieldControl` lors de l'utilisation de `MatFormFieldModule`.

Cette erreur se produit lorsque vous avez omis d'ajouter un contrôle de champ de formulaire à votre champ de formulaire.

{{%toc%}}

## Qu'est-ce que les contrôles de champ de formulaire ? 

Les éléments natifs comme `<input>` ou `<textarea>`qui sont placés à l'intérieur de `mat-form-field` agissent comme des contrôles de champ de formulaire 

Si votre `mat-form-field` contient un élément `<input>` ou `<textarea>` assurez-vous que vous y avez ajouté la directive `matInput` et que vous avez importé `MatInputModule`, sinon vous obtiendrez l'erreur `mat-form-field must contain a MatFormFieldControl` dans votre application.

Les autres composants qui peuvent agir comme un contrôle de champ de formulaire sont les suivants `<mat-select>`, `<mat-chip-list>` et tout contrôle de champ de formulaire personnalisé que vous avez créé.


## Correction de l'erreur `mat-form-field must contain a MatFormFieldControl`.

Pour corriger l'erreur, ajoutez `MatInputModule` et `MatFormFieldModule` dans un module nécessaire ou `app.module.ts` 

Ou comme expliqué dans [Angular material tutorial] (https://www.angularjswiki.com/material/) ajoutez tous les modules matériels dans un module commun et ajoutez-le au fichier `app.module.ts` afin de pouvoir les utiliser dans toute l'application 

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

Ensuite, assurez-vous que vous avez ajouté la directive `matInput` au contrôle `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Le code ci-dessus génère une erreur car nous n'avons pas ajouté la directive `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Et **`matInput` est sensible à la casse** 

Donc, si vous avez une faute d'orthographe dans `matInput` ou une majuscule (`MatInput`) ou une minuscule (`matinput`) dans `matInput`, vous rencontrerez quand même l'erreur.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` l'entrée de contrôle ne doit pas contenir `*ngIf`

Si vous utilisez `*ngIf` sur le contrôle mat-form-field, c'est-à-dire, `<input>` vous obtiendrez l'erreur `mat-form-field must contain a MatFormFieldControl`.

Le code ci-dessous ne fonctionnera pas.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Au lieu de cela, vous devez utiliser `*ngIf` sur l'élément `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Résumé

Pour corriger l'erreur `mat-form-field must contain a MatFormFieldControl`, suivez les étapes ci-dessous

1. Importez `MatInputModule` et `MatFormFieldModule` 
2. Ajoutez la directive `matInput` au contrôle `mat-form-field`, c'est-à-dire `input` ou `textarea`
3. Vérifiez l'orthographe de `matInput`.
4. N'utilisez pas `*ngIf` sur le contrôle `mat-form-field` mais sur l'élément `mat-form-field` 

