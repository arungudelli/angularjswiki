+++
title    ="Ako používať Font Awesome CDN"
subtitle ="Zoznam ikon CDN Font awesome"
summary  ="V tomto návode sa naučíme, ako používať ikony font awesome ich servírovaním z font awesome cdn."
keywords =["font awesome ikony,font awesome ikony CDN"]
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

V tomto návode sa naučíme používať ikony font awesome tak, že ich budeme servírovať zo stránky font awesome cdn.

Použitie siete CDN (Content delivery Network) je najlepší spôsob, ako servírovať font awesome súbory css alebo js ikon, namiesto ich hostovania z vlastných serverov.

{{%toc%}}

## Kroky na používanie font awesome CDN

1. Otvorte oficiálnu webovú lokalitu ikony font awesome.

2. Získajte jedinečný kód na vloženie zadaním svojho e-mailu podľa tohto [odkazu] (https://fontawesome.com/start).
3. Potom vám font awesome pošle e-mail s kódom na vloženie Font Awesome CDN spolu s pokynmi na pridanie ikon na našu webovú stránku.
4. Ukážka odkazu JavaScript font awesome CDN bude v nižšie uvedenom formáte.`https://use.fontawesome.com/a34asdfsd.js`.
5. Skopírujte kód na vloženie, ktorý ste dostali e-mailom, a umiestnite ho do svojho HTML `<head>` tagu 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Tu je ukážka webovej stránky, ktorá používa font awesome CDN.

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

Ďalej sa môžeme zaregistrovať na webovej lokalite font awesome CDN a spravovať svoje preferencie.

## Výhody používania font awesome CDN

1. Rýchlejší server, z ktorého môžeme servírovať ikony font awesome.
2. font awesome Servery CDN sú vždy v prevádzke.
3. A súbory sa budú servírovať z najbližšieho servera CDN.
4. Na ikony font awesome pro môžeme rýchlo prejsť bez akýchkoľvek zmien kódu z našej strany.
5. Môžeme vytvoriť viacero vkladacích kódov pre rôzne webové stránky.
6. Font Awesome CDN dokáže načítať vaše ikony asynchrónne, čím sa ešte viac zvýši výkon webu.

Jednou z ďalších veľkých výhod používania font awesome CDN je, že môžeme automatizovať dostupnosť našich ikon.

Funkcia automatickej prístupnosti siete Font Awesome CDN pomáha ľuďom so zrakovým a sluchovým postihnutím.

Zoberme si napríklad nasledujúci príklad

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Vo vyššie uvedenom príklade používame vo vnútri tlačidla odoslať ikonu font awesome. Ale pre zrakovo postihnutú osobu, ktorá na prístup na webovú stránku používa čítačky obrazovky, nie je potrebné túto ikonu zobrazovať.

Takže font awesome CDN automaticky pridá k ikone atribút `aria-hidden=true`.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Okrem vyššie uvedenej oficiálnej CDN font awesome môžeme použiť bezplatnú verziu ikon font awesome pomocou sietí na doručovanie obsahu, ako sú cdnjs, maxcdn a jsdelivr.


## Font awesome CDN podľa cdn js 

Pre najnovšiu verziu font awesome 5 a vyššiu použite nižšie uvedené odkazy na font awesome CDN CSS súbor podľa cdnjs.

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

Ak chcete používať Javascriptovú verziu ikon font awesome, použite nižšie uvedené odkazy CDN podľa cdnjs.

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

Najnovšie verzie fontawesome CDN nájdete na nižšie uvedenom odkaze cdnjs od cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN odkazy jsdelivr 

Podávajte font awesome ikony CSS súbory pomocou nižšie uvedených jsdelivr CDN odkazov.

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
Pre Font awesome CDN javascriptové súbory použite nižšie uvedené odkazy.
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

Tu je odkaz na najnovšie jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN odkaz

Pre staršie verzie, ako je font awesome 4.7, môžeme použiť bootstap cdn odkazy

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


