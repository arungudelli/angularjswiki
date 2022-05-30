+++
title    ="Kaip naudoti Font Awesome CDN"
subtitle ="Font awesome piktogramų CDN sąrašas"
summary  ="Šioje pamokoje sužinosime, kaip naudoti font awesome piktogramas, pateikiant jas iš font awesome cdn."
keywords =["font awesome piktogramos,font awesome piktogramos CDN"]
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

Šioje pamokoje sužinosime, kaip naudoti font awesome piktogramas, pateikiant jas iš font awesome cdn.

Naudojant CDN (turinio pristatymo tinklą) geriausia pateikti font awesome piktogramų css arba js failus, užuot talpinus juos savo serveriuose.

{{%toc%}}

## Žingsniai, kaip naudoti font awesome CDN

1. Atidarykite oficialią font awesome piktogramų svetainę.

2. Gaukite unikalų įterpimo kodą įvesdami savo el. pašto adresą pagal šią [nuorodą] (https://fontawesome.com/start).
3. Tada font awesome atsiųs el. laišką su "Font Awesome CDN" įterpimo kodu kartu su instrukcijomis, kaip pridėti piktogramas mūsų svetainėje.
4. Pavyzdinė "JavaScript" font awesome CDN nuoroda bus toliau nurodyto formato.`https://use.fontawesome.com/a34asdfsd.js`.
5. Nukopijuokite el. paštu gautą įterpimo kodą ir įdėkite jį į savo HTML `<head>` žymą 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Čia pateikiamas pavyzdinis tinklalapis, kuriame naudojamas font awesome CDN.

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

Toliau galime užsiregistruoti font awesome CDN svetainėje ir tvarkyti savo nuostatas.

## Naudojimosi font awesome CDN privalumai

1. Greitesnis serveris, iš kurio galime aptarnauti font awesome piktogramas.
2. font awesome Visada veikiantys CDN serveriai.
3. Ir failai bus pateikiami iš artimiausio CDN serverio.
4. Galime greitai atnaujinti font awesome pro piktogramas be jokių kodo pakeitimų iš mūsų pusės.
5. Galime sukurti kelis įterpimo kodus skirtingoms svetainėms.
6. Font Awesome CDN gali įkelti jūsų piktogramas asinchroniškai, taip dar labiau padidindamas svetainės našumą.

Dar vienas didelis font awesome CDN naudojimo privalumas - galime automatizuoti piktogramų prieinamumą.

Font Awesome CDN automatinio prieinamumo funkcija padeda žmonėms su regos ir klausos sutrikimais.

Pavyzdžiui, panagrinėkite toliau pateiktą pavyzdį

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Pirmiau pateiktame pavyzdyje pateikties mygtuko viduje naudojame font awesome piktogramą. Tačiau regos negalią turinčiam asmeniui, kuris naudojasi ekrano skaitytuvais, kad pasiektų svetainę, šios piktogramos rodyti nereikia.

Taigi font awesome CDN prie piktogramos automatiškai pridės `aria-hidden=true` atributą.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Be pirmiau minėto font awesome oficialaus CDN, galime naudoti nemokamą font awesome piktogramų versiją naudodami tokius turinio pristatymo tinklus kaip cdnjs, maxcdn ir jsdelivr.


## Font awesome CDN pagal cdn js 

Naujausiai font awesome 5 ir vėlesnei versijai naudokite toliau pateiktas font awesome CDN CSS failų nuorodas pagal cdnjs.

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

Jei norite naudoti font awesome piktogramų Javascript versiją, naudokite toliau pateiktas CDN nuorodas pagal cdnjs.

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

Naujausių fontawesome CDN versijų rasite žemiau pateiktoje cdnjs nuorodoje pagal cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN nuorodos pagal jsdelivr 

Pateikite font awesome piktogramas CSS failus naudodami žemiau esančias jsdelivr CDN nuorodas.

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
Šriftų awesome CDN javascript failų nuorodas naudokite žemiau.
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

Čia yra nuoroda į naujausią jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN nuoroda

Ankstesnėms versijoms, pavyzdžiui, font awesome 4.7, galime naudoti bootstap cdn nuorodas

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


