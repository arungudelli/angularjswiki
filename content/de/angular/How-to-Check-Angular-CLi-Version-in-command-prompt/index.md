+++
title = "Prüfen Sie die Angular CLI Version in der Eingabeaufforderung"
subtitle = "Angular CLI Versionsprüfung"
summary ="Um die Angular CLI Version zu überprüfen, benutzen Sie die Befehle ng --version oder ng v oder npm list -global - depth 0."
keywords=["Angulare CLI-Version,Angular CLI Version Befehl"]
date="2020-01-14T01:01:05+0000"
lastmod="2020-01-14T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

Um die Angular CLI Version zu überprüfen, benutzen Sie die Befehle `ng --version` oder `ng v` oder `npm list -global - depth` 0.

Der Befehl ng --version gibt die Details der Version von "Angular CLI" zurück, die installiert ist und zusätzlich zu dieser Version von "Angular"-Entwicklungspaketen wie "@angular-devkit/architect,rxjs" usw... wie unten gezeigt.

```
Angular CLI: 8.1.1
Node: 10.16.0
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.801.1
@angular-devkit/core         8.1.1
@angular-devkit/schematics   8.1.1
@schematics/angular          8.1.1
@schematics/update           0.801.1
rxjs                         6.4.0
```
{{< figure src="Angular CLI Version.png" title="Vérification de la version Angular CLI" alt="Vérification de la version Angular CLI">}}

Oder wir können "npm list -global" verwenden, um alle auf unserem Rechner installierten Paketversionen aufzulisten.

In dieser Liste können wir nach Angular CLI-Versionen suchen.

Für die Anzeige spezifischer Listen auf verschiedenen Ebenen verwenden Sie "--depth".

```
npm list -global --depth 0

+-- @angular/cli@8.1.1
+-- @angular/core@7.1.4
+-- npm-check-updates@2.15.0
+-- purgecss@1.1.0
+-- UNMET PEER DEPENDENCY rxjs@^6.0.0
+-- typescript@3.5.3
`-- UNMET PEER DEPENDENCY zone.js@~0.8.26
```

Um die Angular CLI-Version zu aktualisieren, folgen Sie dem folgenden Tutorial

[Wie man die Angular CLI-Version aktualisiert](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/)