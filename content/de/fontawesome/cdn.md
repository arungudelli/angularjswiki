+++
title    ="Wie man Font Awesome CDN verwendet"
subtitle ="Font Awesome Icons CDN Liste"
summary  ="In diesem Tutorial werden wir lernen, wie man font awesome Icons verwendet, indem man sie von font awesome cdn ausliefert."
keywords =["font awesome icons,font awesome icons CDN"]
type="docs"
date="2019-07-14T01:01:05+0000"
lastmod="2021-12-14T00:00:08+0000"
prev="fontawesome"
next="csscontentcode"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
linktitle="CDN"
[menu.fontawesome]
parent="fontawesome"
weight=2
[image]
caption = "font awesome icons"
focal_point = ""
preview_only = false

+++

In diesem Tutorial werden wir lernen, wie man font awesome Icons verwendet, indem man sie von font awesome cdn aus bedient.

Die Verwendung von CDN (Content Delivery Network) ist der beste Weg, um font awesome icon css- oder js-Dateien bereitzustellen, anstatt sie von unseren eigenen Servern zu hosten.

{{%toc%}}

## Schritte zur Verwendung von font awesome CDN

1. Öffnen Sie die offizielle Website font awesome icon.

2. Sie erhalten einen eindeutigen Einbettungscode, indem Sie Ihre E-Mail über diesen [Link](https://fontawesome.com/start) eingeben.
3. Dann sendet font awesome eine E-Mail mit dem Font Awesome CDN-Einbettungscode zusammen mit Anweisungen zum Hinzufügen von Symbolen auf unserer Website.
4. Der Beispiel-JavaScript font awesome CDN-Link hat das folgende Format.`https://use.fontawesome.com/a34asdfsd.js`.
5. Kopieren Sie den Einbettungscode, den Sie per E-Mail erhalten haben, und fügen Sie ihn in Ihr HTML `<head>` tag ein 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Hier ist die Beispiel-Webseite, die font awesome CDN verwendet.

```
<!doctype html>
<html>
  <head>
    ...
    <!-- font awesome CDN Url -->
    <script src="https://use.fontawesome.com/your-embed-code.js"></script> 
    <!-- TODO: Place your own Font Awesome CDN embed code received via email  -->
    ...
  </head>
  <body>
    ...
    <i class="fa fa-home"></i>
    ...
  </body>
</html>
```

Außerdem können wir uns auf der Website font awesome CDN registrieren, um unsere Einstellungen zu verwalten.

## Vorteile der Nutzung von font awesome CDN

1. Ein schnellerer Server, von dem aus wir font awesome Icons bereitstellen können.
2. font awesome CDN-Server sind immer verfügbar und laufen.
3. Und die Dateien werden vom nächstgelegenen CDN-Server bereitgestellt.
4. Wir können schnell auf font awesome pro icons upgraden, ohne dass der Code von unserer Seite aus geändert werden muss.
5. Wir können mehrere Einbettungscodes für verschiedene Websites erstellen.
6. Font Awesome CDN kann Ihre Icons asynchron laden und so die Leistung der Website weiter steigern.

Ein weiterer großer Vorteil der Verwendung von font awesome CDN ist, dass wir die Zugänglichkeit unserer Icons automatisieren können.

Die automatische Zugänglichkeitsfunktion von Font Awesome CDN hilft Menschen mit Seh- und Hörbehinderungen.

Betrachten Sie zum Beispiel das folgende Beispiel

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Im obigen Beispiel wird innerhalb der Schaltfläche "Senden" das Symbol font awesome verwendet. Aber für sehbehinderte Personen, die Bildschirmleser für den Zugriff auf die Website verwenden, ist es nicht erforderlich, diese Symbole anzuzeigen.

Daher fügt font awesome CDN automatisch das Attribut `aria-hidden=true` zum Symbol hinzu.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Abgesehen von den oben genannten font awesome offiziellen CDN, können wir kostenlose Version von font awesome Symbole durch die Verwendung von Content Delivery Networks wie cdnjs, maxcdn und jsdelivr verwenden.


## Font awesome CDN von cdn js 

Für die neueste Version font awesome 5 und höher verwenden Sie die folgenden font awesome CDN CSS-Datei-Links von cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.min.css

```

Wenn Sie die Javascript-Version der font awesome -Symbole verwenden möchten, nutzen Sie die unten stehenden CDN-Links von cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.min.js
```

Die neuesten Fontawesome CDN-Versionen finden Sie unter dem folgenden cdnjs-Link von cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Fontawesome CDN Links von jsdelivr 

Serve font awesome Icons CSS-Dateien mit unten jsdelivr CDN-Links.

```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.1/css/all.min.css

```
Für Font awesome CDN javascript Dateien Links verwenden unten.
```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.min.js
```

Hier ist der Link zum neuesten jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN Link

Für die frühere Version wie font awesome 4.7 können wir Bootstap CDN Links verwenden

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


