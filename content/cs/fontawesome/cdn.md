+++
title    ="Jak používat Font Awesome CDN"
subtitle ="Seznam ikon Font awesome CDN"
summary  ="V tomto návodu se naučíme používat ikony font awesome tak, že je budeme servírovat z font awesome cdn."
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

V tomto návodu se naučíme používat ikony font awesome tak, že je budeme servírovat z font awesome cdn.

Použití sítě CDN (Content delivery Network) je nejlepší způsob, jak servírovat font awesome soubory css nebo js ikon, namísto jejich hostování z vlastních serverů.

{{%toc%}}

## Kroky k použití font awesome CDN

1. Otevřete oficiální webové stránky ikony font awesome.

2. Získejte jedinečný kód pro vložení zadáním svého e-mailu podle tohoto [odkazu](https://fontawesome.com/start).
3. Poté vám font awesome zašle e-mail s kódem pro vložení Font Awesome CDN spolu s pokyny pro přidání ikon na naše webové stránky.
4. Ukázka odkazu JavaScript font awesome CDN bude v níže uvedeném formátu.`https://use.fontawesome.com/a34asdfsd.js`.
5. Zkopírujte kód pro vložení, který jste obdrželi e-mailem, a umístěte jej do svého HTML `<head>` tagu 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Zde je ukázka webové stránky, která používá font awesome CDN.

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

Dále se můžeme zaregistrovat na webové stránce font awesome CDN a spravovat své preference.

## Výhody používání font awesome CDN

1. Rychlejší server, ze kterého můžeme servírovat ikony font awesome.
2. font awesome Vždy funkční servery CDN.
3. A soubory se budou servírovat z nejbližšího serveru CDN.
4. Na ikony font awesome pro můžeme rychle přejít bez jakýchkoli změn kódu z naší strany.
5. Můžeme vytvořit více kódů pro vložení na různé webové stránky.
6. Font Awesome CDN může načítat vaše ikony asynchronně, což dále zvyšuje výkon webu.

Další velkou výhodou použití font awesome CDN je, že můžeme automatizovat dostupnost našich ikon.

Funkce automatické přístupnosti sítě Font Awesome CDN pomáhá lidem se zrakovým a sluchovým postižením.

Vezměme si například níže uvedený příklad

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Ve výše uvedeném příkladu používáme uvnitř tlačítka odeslat ikonu font awesome. Ale pro zrakově postižené osoby, které k přístupu na webové stránky používají čtečky obrazovky, není nutné tyto ikony zobrazovat.

Takže font awesome CDN automaticky přidá k ikoně atribut `aria-hidden=true`.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Kromě výše uvedených font awesome oficiálních CDN můžeme použít bezplatnou verzi font awesome ikon pomocí sítí pro doručování obsahu, jako jsou cdnjs, maxcdn a jsdelivr.


## Font awesome CDN od cdn js 

Pro nejnovější verzi font awesome 5 a vyšší použijte níže uvedené odkazy na font awesome CDN soubory CSS od cdnjs.

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

Pokud chcete používat Javascriptovou verzi ikon font awesome, použijte níže uvedené odkazy CDN od cdnjs.

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

Nejnovější verze fontawesome CDN naleznete pod odkazem cdnjs od cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN odkazy jsdelivr 

Podávejte font awesome ikony CSS soubory pomocí níže uvedených jsdelivr CDN odkazů.

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
Pro Font awesome CDN javascriptové soubory použijte níže uvedené odkazy.
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

Zde je odkaz na nejnovější jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN odkaz

Pro starší verze, jako je font awesome 4.7, můžeme použít bootstap cdn odkazy

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


