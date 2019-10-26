+++
title = "Comment supprimer un component dans Angular"
subtitle = "Suppression de components dans Angular"
type="post"
summary ="Étapes pour supprimer un component dans Angular 1.Supprimer la référence du composant du fichier app.module.ts angulaire (supprimer la ligne d'import).2.Supprimer la déclaration de component du array de déclaration @NgModule dans le fichier app.module.ts.3.Puis supprimez manuellement le dossier du composant de l'arborescence du projet Angular.4.Enfin Supprimer manuellement toutes les références de component du projet Angular"
keywords=["delete component in angular,ng delete component command"]
date="2019-02-08T01:01:05+0000"
lastmod="2019-10-25T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Remove component in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Étapes pour supprimer un component dans Angular

  1. Supprimer la référence du composant du fichier `app.module.ts` angulaire (supprimer la ligne d'import).
  2. Supprimer la déclaration de component du array de déclaration @NgModule dans le fichier `app.module.ts`.
  3. Puis supprimez manuellement le dossier du composant de l'arborescence du projet Angular.
  4. Enfin Supprimer manuellement toutes les références de component du projet Angular.

Dans le Angular CLI, il n'y a pas de commande disponible pour supprimer un composant.

Il n'y a pas de commande "ng delete component" dans le Angular CLI.

Si vous voulez savoir ce qui se passera au moment de la création du componenr, vous pouvez essayer `--dry--run` flag

```
ng generate component test --dry--run
CREATE src/app/test/test.component.html (23 bytes)
CREATE src/app/test/test.component.spec.ts (614 bytes)
CREATE src/app/test/test.component.ts (261 bytes)
CREATE src/app/test/test.component.css (0 bytes)
UPDATE src/app/app.module.ts (914 bytes)

NOTE: The "dryRun" flag means no changes were made.
```

Aucun changement n'est apporté au angular projet.
