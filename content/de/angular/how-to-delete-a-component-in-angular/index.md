+++
title = "Wie löscht man eine Komponente in Angular"
subtitle = "Löschen von Komponenten in Angular"
type="post"
summary ="Schritte zum Löschen einer Komponente in Angular 1. Entfernen Sie die Importlinienreferenz aus der Datei Angular app.module.ts.2. Entfernen Sie die Komponentendeklaration aus dem @NgModule-Deklarationsarray in der Datei app.module.ts.3. und löschen Sie dann manuell den Komponentenordner aus dem Projekt Angular.4. und schließlich löschen Sie alle Referenzen der Komponente manuell aus dem Angular-Projekt."
keywords=["Löschen von Komponenten in Angular,ng delete component"]
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

Schritte zum Löschen einer Komponente in Angular

1. Entfernen Sie die Importlinienreferenz aus der Datei Angular "app.module.ts".
2. Entfernen Sie die Komponentendeklaration aus dem @NgModule-Deklarationsarray in der Datei app.module.ts.
3. und löschen Sie dann manuell den Komponentenordner aus dem Projekt Angular.
4. und schließlich löschen Sie alle Referenzen der Komponente manuell aus dem Angular-Projekt.


Ab sofort verfügt Angular CLI, nicht über einen Befehl zum Löschen einer von ihm erstellten Komponente.

Es gibt keinen "ng delete component"-Befehl als Teil von Angular CLI.

Wenn Sie wissen möchten, was zum Zeitpunkt der Komponentenerstellung geschieht, können Sie die Option --dry--run flag

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
