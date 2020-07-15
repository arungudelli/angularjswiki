+++
title = "Wie man Angular-CLI auf die neueste Version 9 & Angular 10 aktualisiert"
subtitle = "Angular-CLI-Version aktualisieren"
summary ="Um Angular-CLI auf die neueste Version 9 & Angular 10 zu aktualisieren, verwenden Sie den Befehl ng update @angular/core @angular/cli@latest"
keywords=["ng update angular cli,angular 10,angular 9"]
date="2019-01-22T01:01:05+0000"
lastmod="2019-02-09T18:45:18+0000"
type="post"
draft=true
authors = ["admin"]

[image]
  caption = "Update Angular CLI version in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Der Angular 10.0.0 ist endlich da. 

Während des Upgrades auf die Version Angular 10 sollten Sie einige Dinge beachten, bevor Sie den Befehl "ng update" ausführen.

1. Es ist immer ratsam, Ihre Anwendung auf die nächste Hauptversion zu aktualisieren.
2. Das heißt, wenn Sie die Versionen Angular 7 oder Angular 8 oder Angular 6,5, 4 usw. verwenden, versuchen Sie nicht, direkt auf Angular 10 zu aktualisieren.
3. Aktualisieren Sie zuerst Ihre Angular-Anwendung auf Angular 9 und verwenden Sie dann den Befehl ng update.

Angular Version 10.0.0 veröffentlicht am 25. Juni 2020 .

Angular 10 Version eine der Hauptversionen nach Version 9, die vor 4 Monaten veröffentlicht wurde.

Wie ich oben sagte, ist die Aktualisierung auf Angular 10 einfach, wenn Ihre Anwendung die Version Angular 9 verwendet.

Aktualisieren Sie einfach @angular/core und @angular/cli mit dem Befehl "ng update".

```
ng update @angular/core @angular/cli
```

Wenn Sie Angular-Material verwenden, sollten Sie es ebenfalls mit dem Befehl "ng update" aktualisieren.

```
ng update @angular/material
```

Wenn Sie andere ältere Versionen als 9 verwenden. Zuerst besser auf Angular 9 aktualisieren, wie unten erwähnt.

## Wesentliche Änderungen in der Version Angular 10

1. Angular 10 unterstützt nur Typescript 3.9. Wir müssen Typescript auf Version 3.9 aktualisieren. Die Typescript-Versionen 3.6, 3.7 und 3.8 werden nicht mehr unterstützt.
2. In früheren Versionen des Angular-Eingabefeldes der Typennummer löst zweimal `valueChanges` aus.Das erste Mal nach der Eingabe in das Eingabefeld, das zweite Mal, wenn das Feld den Fokus verliert.
3. Die Validatoren `minLength` und `maxLength` überprüfen nun, ob ein Wert die Eigenschaft numerische Länge hat, und erst dann erfolgt die Validierung.
4. In Angular 10,Die Warnungen über unbekannte Elemente werden jetzt als Fehler statt als Warnungen protokolliert (console.warn zu console.error)
5. In früheren Versionen von Angular, wenn Sie `Null` für `UrlMatchResult` zurückgeben, erhalten wir den Fehler "Type null is not assignable to type UrlMatchResult". Dieser Fehler ist jetzt behoben.
6. In der Version Angular 10 werden "transplanted views" nur an der "insertion location" in Ivy aktualisiert.
7. Wenn Sie versuchen, "formatDate" oder "DatePipe" mit den Formatcodes "B" oder "b" ("at night", "in the morning" usw.) zu verwenden, funktioniert dies nicht für das Gebietsschema "en" (und "sublocales") zwischen 21:00 und 06:00 Uhr. 
Statt "nachts" erhalten Sie "AM/PM".
In den älteren Versionen war der Code nicht in der Lage, einen Zeitraum zu bewältigen, der über Mitternacht hinausging. Dies ist behoben.
8. Wenn eine Angular-Route mindestens zwei Resolver hat, und wenn ein Resolver auf leer auflöst, Die Navigation wird abgebrochen, Da es das Verhalten für einen einzelnen Resolver ist und wenn alle Resolver beschließen, sich zu leeren,
Der Router wirft keine Fehler. Früher hat er nicht abgefangene Fehler ausgegeben. 

Neue Angular 10-Projekte verwenden den Dateinamen .browserslistrc anstelle von browserslist. Und ng update migriert sie automatisch, wenn Sie von älteren Versionen aktualisieren.

Angular 10 empfiehlt die Verwendung einer tsconfig.base.json, um verschiedene Typisierungskontexte zu organisieren. 
 (shared, unit tests, end to end tests, application, etc).ng update wird Ihr Projekt automatisch migrieren.

{{< figure src="Angular 10 update.png" title="Angular 10 update" alt="Angular 10 update">}}

Ich habe eine Beispielanwendung auf Version 10 aktualisiert.
(Es ist in Angular 9) 

Die Aktualisierung auf Angular 10 ist ziemlich einfach. Sie können das Protokoll der Versionsaktualisierung unten sehen.

## Angular 10 Aktualisierungsprotokoll

```
Using package manager: 'npm'
Collecting installed dependencies...
Found 35 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/core @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular-devkit/build-angular @ "0.1000.0" (was "0.900.0")...
    Updating package.json with dependency @angular/compiler-cli @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/animations @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/compiler @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/common @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/platform-browser @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/forms @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency zone.js @ "0.10.3" (was "0.10.2")...
    Updating package.json with dependency @angular/language-service @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency typescript @ "3.9.5" (was "3.6.4")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "10.0.0" (was "9.0.0")...
    Updating package.json with dependency @angular/router @ "10.0.0" (was "9.0.0")...
UPDATE package.json (1595 bytes)
√ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

> Replace deprecated 'styleext' and 'spec' Angular schematic options.
  Migration completed.

> Update Browserslist configuration file name to '.browserslistrc' from deprecated 'browserslist'.
RENAME browserslist => .browserslistrc
  Migration completed.

> Update tslint to version 6 and adjust rules to maintain existing behavior.
UPDATE package.json (1595 bytes)
UPDATE tslint.json (3348 bytes)
  Migration completed.

> Remove deprecated 'es5BrowserSupport' browser builder option.
  The inclusion for ES5 polyfills will be determined from the browsers listed in the browserslist configuration.
  Migration completed.

> Replace deprecated and removed 'styleext' and 'spec' Angular schematic options with 'style' and 'skipTests', respectively.
  Migration completed.

> Remove deprecated options from 'angular.json' that are no longer present in v10.
  Migration completed.

> Add "Solution Style" TypeScript configuration file support.
  This improves developer experience using editors powered by TypeScript’s language server.
  Read more about this here: https://v10.angular.io/guide/migration-solution-style-tsconfig
RENAME tsconfig.json => tsconfig.base.json
CREATE tsconfig.json (427 bytes)
UPDATE tsconfig.app.json (215 bytes)
UPDATE tsconfig.spec.json (275 bytes)
UPDATE e2e/tsconfig.json (219 bytes)
  Migration completed.

> Add the tslint deprecation rule to tslint JSON configuration files.
  Migration completed.

> Update library projects to use tslib version 2 as a direct dependency.
  Read more about this here: https://v10.angular.io/guide/migration-update-libraries-tslib
  Migration completed.

> Update 'module' and 'target' TypeScript compiler options.
  Read more about this here: https://v10.angular.io/guide/migration-update-module-and-target-compiler-options
UPDATE e2e/tsconfig.json (222 bytes)
  Migration completed.

> Update workspace dependencies to match a new v10 project.
UPDATE package.json (1594 bytes)
√ Packages installed successfully.
  Migration completed.

** Executing migrations of package '@angular/core' **

> Missing @Injectable and incomplete provider definition migration.
  As of Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

> ModuleWithProviders migration.
  As of Angular 10, the ModuleWithProviders type requires a generic.
  This migration adds the generic where it is missing.
  Read more about this here: https://v10.angular.io/guide/migration-module-with-providers
  Migration completed.

> Undecorated classes with Angular features migration.
  In version 10, classes that use Angular features and do not have an Angular decorator are no longer supported.
  Read more about this here: https://v10.angular.io/guide/migration-undecorated-classes
  Migration completed.
```

Um die Angular-CLI auf die neueste Version 9 zu aktualisieren, führen Sie die folgenden Schritte aus.

Aktualisieren Sie zunächst die lokale Angular-Cli auf Version 8.3.17 oder 8.x, indem Sie den Befehl unten verwenden.

```
  npm install --no-save @angular/cli@^8.3.15

```
Nachdem Sie Angular-Cli auf Version 8 und höher aktualisiert haben, verwenden Sie den folgenden Befehl, um Angular-Cli auf Version 9 zu aktualisieren.

```
  ng update @angular/cli @angular/core --next
```

{{< figure src="updating angular cli to version 9.png" title="updating angular cli to version 9" alt="updating angular cli to version 9">}} 

To update the Angular CLI version to 7 simply use the below command.

```
ng update @angular/cli
```

But this command might not work, if you are using older version of Angular CLI. We will start with checking of Angular CLI version and update the Angular CLI package accordingly

{{%toc%}}

## Angular CLI version check

To check the Angular CLI version use to below command

`ng -version`

## Update Angular CLI version Globally

To update Angular CLI version globally in your system use the below commands

```
npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm &gt; 5)
npm install -g @angular/cli@latest
```

First you need to uninstall the existing angular cli packages followed by _npm cache verify_ command to clear the cache related problems.

And the install the Angular CLI version again by using _npm install -g @angular/cli@latest_

If you are using MAC or linux systems you might need to add the prefix before npm

```
sudo npm uninstall -g angular-cli
sudo npm cache clean or sudo npm cache verify (if npm > 5)
sudo npm install -g @angular/cli@latest
```

## Your global Angular CLI version is greater than your local version.The local Angular CLI version is used

After updating Angular CLI globally you might get this warning if your local project's angular cli version less than the global angular cli version.

As local packages have more priority than global packages you will get _Your global Angular CLI version is greater than your local version.The local Angular CLI version is used_

So mostly you need to update your local Angular CLI version as well

## Update Angular CLI version Locally

To update Angular CLI version in your local projects use the following commands. Navigate to your local Angular project and execute the below commands.

```
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

## Update Angular CLI version to 6

If you are migrating from older Angular CLI versions like 1.x to latest Angular version 6. You need to do few additional checks apart from above commands.

First of all you need to convert _angular-cli.json_ file older Angular CLI version to latest _angular.json_ used in version 6.

To convert it use the following command

```
ng update @angular/cli --from=1.7.4 --migrate-only
```

To convert _angular-cli.json_ file pass the current version to ng update by using from flag and additionally use _--migrate-only._ The migrate only  flag makes sure that it will do only a migration but does not update the Angular CLI.

And if you RxJs you need to update it as well use the below command

`ng update rxjs`

It will update the RxJs version to 6. To support older RxJs imports the above command automatically installs the _rxjs-compat_ package. If you get any error try manual installation.

```
npm i rxjs-compat
npm i @angular-devkit/build-angular
```

And Angular CLI version 6 no longer uses _intl_ in _polyfills.ts. _You can remove the below lines from polyfills.ts

```
import 'intl';
import 'intl/locale-data/jsonp/en';
```

And additionally you need to update the @angular core modules as well

`ng update @angular/core`

## Update Angular CLI version to 7

Once you upgraded to Angular CLI version 6. Its very easy to update it to the current latest Angular CLI version 7.

To update Angular CLI version to 7. Just run the following commands

`ng update @angular/cli @angular/core`

The above command updates Angular cli as well as angular core packages.

In addition to that you can refactor the TypeScript code so that it does not depend on _rxjs-compat_ modules(as explained above).

To refactor TypeScript code run following command

```
npm install -g rxjs-tslint 
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

Once all of your dependencies have updated to latest RxJS 6, remove rxjs-compat package as it increases bundle size.

`npm uninstall rxjs-compat`

## ng update @angular/cli not working

If you follow the above steps carefully mostly Angular cli version will be updated without any problems. And do not forgot to add @latest suffix.

`ng update @angular/cli@latest`