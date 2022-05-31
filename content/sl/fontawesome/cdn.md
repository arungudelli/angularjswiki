+++
title    ="Kako uporabljati Font Awesome CDN"
subtitle ="Seznam CDN za ikone Font awesome"
summary  ="V tem vodniku se bomo naučili, kako uporabljati ikone font awesome tako, da jih postrežemo iz font awesome cdn."
keywords =["font awesome ikone,font awesome ikone CDN"]
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

V tem priročniku se bomo naučili, kako uporabljati ikone font awesome tako, da jih postrežemo iz font awesome cdn.

Uporaba omrežja CDN (Content delivery Network) je najboljši način za strežbo datotek font awesome ikon css ali js, namesto da bi jih gostili v lastnih strežnikih.

{{%toc%}}

## Koraki za uporabo font awesome CDN

1. Odprite uradno spletno mesto z ikonami font awesome.

2. Pridobite edinstveno kodo za vgradnjo, tako da vnesete svoj e-poštni naslov in sledite tej [povezavi] (https://fontawesome.com/start).
3. Nato vam font awesome pošlje e-poštno sporočilo s kodo za vgradnjo Font Awesome CDN skupaj z navodili za dodajanje ikon na naše spletno mesto.
4. Vzorec povezave JavaScript font awesome CDN bo v spodnji obliki.`https://use.fontawesome.com/a34asdfsd.js`.
5. Kopirajte kodo za vgradnjo, ki ste jo prejeli po e-pošti, in jo namestite v svoj HTML `<head>` oznako 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Tukaj je vzorčna spletna stran, ki uporablja font awesome CDN.

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

Poleg tega se lahko registriramo na spletnem mestu font awesome CDN in tako upravljamo svoje nastavitve.

## Prednosti uporabe font awesome CDN

1. Hitrejši strežnik, iz katerega lahko strežemo ikone font awesome.
2. font awesome Strežniki CDN so vedno pripravljeni in delujejo.
3. Datoteke bodo postrežene iz najbližjega strežnika CDN.
4. Hitro lahko nadgradimo na ikone font awesome pro brez kakršnih koli sprememb kode na naši strani.
5. Ustvarimo lahko več kod za vgradnjo za različna spletna mesta.
6. Font Awesome CDN lahko vaše ikone nalaga asinhrono, kar dodatno poveča zmogljivost spletnega mesta.

Še ena velika prednost uporabe font awesome CDN je, da lahko avtomatiziramo dostopnost naših ikon.

Funkcija samodejne dostopnosti v omrežju Font Awesome CDN pomaga ljudem z okvarami vida in sluha.

Na primer, upoštevajte spodnji primer

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
V zgornjem primeru znotraj gumba za pošiljanje uporabljamo ikono font awesome. Vendar za osebe z okvaro vida, ki za dostop do spletnega mesta uporabljajo bralnike zaslona, te ikone ni treba izpostaviti.

Zato bo font awesome CDN ikoni samodejno dodal atribut `aria-hidden=true`.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Poleg zgoraj navedene font awesome uradne CDN lahko uporabimo brezplačno različico font awesome ikon z uporabo omrežij za dostavo vsebine, kot so cdnjs, maxcdn in jsdelivr.


## Font awesome CDN s strani cdn js 

Za najnovejšo različico font awesome 5 in novejšo uporabite spodnje povezave do datotek CSS font awesome CDN s pomočjo cdnjs.

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

Če želite uporabiti Javascript različico ikon font awesome, uporabite spodnje povezave CDN, ki jih je pripravil cdnjs.

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

Za najnovejše različice fontawesome CDN glejte spodnjo povezavo cdnjs s cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Povezave CDN Font awesome by jsdelivr 

Poskrbite za font awesome ikone CSS datoteke z uporabo spodnjih jsdelivr CDN povezav.

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
Za Font awesome CDN javascript datoteke povezave uporabite spodaj.
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

Tukaj je povezava do najnovejše jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN povezava

Za starejše različice, kot je font awesome 4.7, lahko uporabimo bootstap cdn povezave

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


