+++ title = "Comment vérifier la version Angular CLI dans l'invite de commande" subtitle = "Vérification de la version Angular CLI" summary ="Pour vérifier la version Angular CLI, utilisez la commande ng --version ou ng v." keywords=["Angular CLI, verison,Angular CLI version Commande"] date="2020-01-14T01:01:05+0000" lastmod="2020-01-14T02:45:18+0000" type="post" draft=false authors = ["admin"]

+++

Pour vérifier la version Angular CLI, utilisez les commandes `ng --version` ou `ng v` ou `npm list -global --depth 0`.

La commande `ng --version` renvoie les détails de la version de Angular CLI installée et en plus de cela les versions des paquets de développement Angular comme @angular-devkit/architect,rxjs etc... comme indiqué ci-dessous.

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

Ou nous pouvons utiliser `npm list -global` pour lister toutes les versions des paquets installés sur notre machine.

Dans cette liste, nous pouvons vérifier la version Angular CLI.

Pour afficher des listes spécifiques à différents niveaux, utilisez `--depth`.

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

Pour mettre à jour la version Angular CLI suivez le Tutoriel ci-dessous

[How To Update Angular CLI Version](https://www.angularjswiki.com/angular/update-angular-cli-version-ng-update-to-latest-6-7-versions/)