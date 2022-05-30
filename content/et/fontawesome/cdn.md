+++
title    ="Kuidas kasutada Font Awesome CDN-i"
subtitle ="Font awesome Icons CDN nimekiri"
summary  ="Selles õpetuses õpime, kuidas kasutada font awesome ikoone, serveerides neid font awesome cdn-st."
keywords =["font awesome ikoonid,font awesome ikoonid CDN"]
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

Selles õpetuses õpime, kuidas kasutada font awesome ikoone, serveerides neid font awesome cdn.

CDN(Content delivery Network) kasutamine on parim viis font awesome ikoonide css või js failide serveerimiseks, selle asemel, et neid oma serveritest hostida.

{{%toc%}}

## Sammud font awesome CDN-i kasutamiseks

1. Avage ametlik veebileht font awesome.

2. Saate unikaalse embed-koodi, sisestades oma e-posti aadressi, järgides seda [linki](https://fontawesome.com/start).
3. Seejärel saadab font awesome e-kirja koos Font Awesome CDN-i varjundikoodiga koos juhistega ikoonide lisamiseks meie veebisaidil.
4. Näidis JavaScript font awesome CDN link on alljärgnevas formaadis.`https://use.fontawesome.com/a34asdfsd.js`.
5. Kopeerige e-kirja teel saadud manustamiskood ja paigutage see oma HTML-i `<head>` tagi 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Siin on näidisveebileht, mis kasutab font awesome CDN-i.

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

Lisaks saame registreeruda font awesome CDN veebilehel, et hallata oma eelistusi.

## font awesome CDN kasutamise eelised

1. Kiirem server, kust saame serveerida font awesome ikoonid.
2. font awesome CDN-serverid on alati töökorras.
3. Ja faile serveeritakse lähimast CDN-serverist.
4. Me saame kiiresti uuendada font awesome pro ikoonid ilma koodimuutusteta meie poolt.
5. Me saame luua mitu embed koodid erinevate veebisaitide jaoks.
6. Font Awesome CDN võib laadida teie ikoonid asünkroonselt, suurendades veelgi saidi jõudlust.

Veel üks suur eelis font awesome CDN-i kasutamisel on see, et me saame automatiseerida oma ikoonide ligipääsetavust.

Font Awesome CDNi automaatne ligipääsetavuse funktsioon aitab nägemis- ja kuulmispuudega inimesi.

Vaadake näiteks alljärgnevat näidet

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Ülaltoodud näites kasutame nupu submit sees ikooni font awesome. Kuid nägemispuudega inimese jaoks, kes kasutab veebilehe külastamiseks ekraanilugejat, ei ole selle ikooni avaldamine vajalik.

Seega lisab font awesome CDN automaatselt ikoonile atribuudi `aria-hidden=true`.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Lisaks ülaltoodud font awesome ametlikule CDNile saame kasutada font awesome ikoonide tasuta versiooni, kasutades selliseid sisutarne võrgustikke nagu cdnjs, maxcdn ja jsdelivr.


## Font awesome CDN by cdn js 

Viimase font awesome 5 ja uuema versiooni jaoks kasutage allpool toodud font awesome CDN CSS-faili lingid cdnjs poolt.

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

Kui soovite kasutada font awesome ikoonide Javascript-versiooni, siis kasutage allpool toodud CDN-i linke cdnjs poolt.

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

Uusimaid fontawesome CDN-versioone leiate allpool toodud cdnjs linki cloudflare'i poolt.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN lingid jsdelivr poolt 

Serveeri font awesome ikoonide CSS-faile, kasutades allpool toodud jsdelivr CDN linke.

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
Sest Font awesome CDN javascript failide lingid kasutada allpool.
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

Siin on link uusima jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

Varasema versiooni nagu font awesome 4.7 puhul saame kasutada bootstap cdn linke

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


