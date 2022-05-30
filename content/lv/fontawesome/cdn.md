+++
title    ="Kā lietot Font Awesome CDN"
subtitle ="Font awesome Ikonas CDN sarakstā"
summary  ="Šajā pamācībā mēs uzzināsim, kā izmantot font awesome ikonas, apkalpojot tās no font awesome cdn."
keywords =["font awesome ikonas,font awesome ikonas CDN"]
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

Šajā pamācībā mēs uzzināsim, kā izmantot font awesome ikonas, apkalpojot tās no font awesome cdn.

CDN (satura piegādes tīkla) izmantošana ir labākais veids, kā apkalpot font awesome ikonu css vai js failus, nevis izvietot tos no saviem serveriem.

{{%toc%}}

## Soļi, kā izmantot font awesome CDN

1. Atveriet oficiālo font awesome ikonas vietni.

2. Iegūstiet unikālu iestrādes kodu, ievadot savu e-pasta adresi pēc šīs [saites] (https://fontawesome.com/start).
3. Pēc tam font awesome nosūtīs e-pasta vēstuli ar Font Awesome CDN iestrādes kodu kopā ar norādījumiem, kā pievienot ikonas mūsu vietnē.
4. JavaScript paraugs font awesome CDN saite būs turpmāk norādītajā formātā.`https://use.fontawesome.com/a34asdfsd.js`.
5. Nokopējiet pa e-pastu saņemto iegulšanas kodu un ievietojiet to savā HTML formātā `<head>` tagu 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Šeit ir tīmekļa vietnes paraugs, kurā izmantots font awesome CDN.

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

Turklāt mēs varam reģistrēties vietnē font awesome CDN, lai pārvaldītu savas preferences.

## font awesome CDN izmantošanas priekšrocības

1. Ātrāks serveris, no kura varam apkalpot font awesome ikonas.
2. font awesome CDN serveri vienmēr darbojas.
3. Faili tiks apkalpoti no tuvākā CDN servera.
4. Mēs varam ātri uzlabot uz font awesome pro ikonām bez jebkādām izmaiņām kodā no mūsu puses.
5. Mēs varam izveidot vairākus iestrādes kodus dažādām vietnēm.
6. Font Awesome CDN var ielādēt jūsu ikonas asinhroni, vēl vairāk palielinot vietnes veiktspēju.

Vēl viena liela priekšrocība, izmantojot font awesome CDN, ir tā, ka mēs varam automatizēt savu ikonu pieejamību.

Font Awesome CDN automātiskās pieejamības funkcija palīdz cilvēkiem ar redzes un dzirdes traucējumiem.

Piemēram, aplūkojiet tālāk sniegto piemēru

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Iepriekš minētajā piemērā iesniegšanas pogas iekšpusē mēs izmantojam ikonu font awesome. Taču cilvēkiem ar redzes traucējumiem, kuri tīmekļa vietnei piekļūst, izmantojot ekrānlasītājus, nav nepieciešams parādīt šo ikonu.

Tāpēc font awesome CDN automātiski pievieno ikonai atribūtu `aria-hidden=true`.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Papildus iepriekš minētajam font awesome oficiālajam CDN mēs varam izmantot bezmaksas font awesome ikonu versiju, izmantojot tādus satura piegādes tīklus kā cdnjs, maxcdn un jsdelivr.


## Font awesome CDN ar cdn js 

Lai iegūtu jaunāko font awesome 5 un jaunāko versiju, izmantojiet zemāk redzamās font awesome CDN CSS failu saites, izmantojot cdnjs.

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

Ja vēlaties izmantot font awesome ikonu Javascript versiju, izmantojiet zemāk redzamās CDN saites cdnjs.

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

Jaunākās fontawesome CDN versijas skatiet zemāk redzamajā cdnjs saitē ar cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN saites, ko jsdelivr 

Pasniedziet font awesome ikonas CSS failus, izmantojot zemāk jsdelivr CDN saites.

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
Lai iegūtu Font awesome CDN javascript failu saites, izmantojiet zemāk.
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

Šeit ir saite uz jaunāko jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN saite

Agrākai versijai, piemēram, font awesome 4.7, mēs varam izmantot bootstap cdn saites

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


