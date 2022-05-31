+++
title    ="Cum se utilizează Font Awesome CDN"
subtitle ="Lista Font awesome Icons CDN"
summary  ="În acest tutorial vom învăța cum să folosim font awesome iconițe servindu-le de la font awesome cdn."
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

În acest tutorial vom învăța cum să folosim font awesome icoane prin servirea lor de pe font awesome cdn.

Utilizarea CDN (Content delivery Network) este cea mai bună modalitate de a servi font awesome iconițe css sau fișiere js, în loc să le găzduim pe propriile servere.

{{%toc%}}

## Pași pentru a utiliza font awesome CDN

1. Deschideți site-ul oficial al pictogramei font awesome.

2. Obțineți un cod unic de încorporare introducând e-mailul dvs. în urma acestui [link](https://fontawesome.com/start).
3. Apoi, font awesome trimite un e-mail cu codul de încorporare Font Awesome CDN împreună cu instrucțiuni pentru a adăuga pictograme pe site-ul nostru.
4. Exemplul de JavaScript font awesome CDN link va fi în formatul de mai jos.`https://use.fontawesome.com/a34asdfsd.js`.
5. Copiați codul de încorporare pe care l-ați primit prin e-mail și plasați-l în HTML-ul dvs `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Iată pagina web de probă care utilizează font awesome CDN.

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

În continuare, ne putem înregistra pe site-ul font awesome CDN pentru a ne gestiona preferințele.

## Avantajele utilizării font awesome CDN

1. Un server mai rapid de pe care putem servi iconițele font awesome.
2. font awesome Servere CDN mereu funcționale.
3. Iar fișierele vor fi servite de pe cel mai apropiat server CDN.
4. Putem face rapid upgrade la font awesome pro icons fără nicio modificare de cod din partea noastră.
5. Putem crea mai multe coduri de încorporare pentru diferite site-uri web.
6. Font Awesome CDN poate încărca icoanele dvs. în mod asincron, sporind și mai mult performanța site-ului.

Un alt mare avantaj al utilizării font awesome CDN este că putem automatiza accesibilitatea pictogramelor noastre.

Caracteristica de accesibilitate automată a Font Awesome CDN ajută persoanele cu deficiențe de vedere și de auz.

De exemplu, luați în considerare exemplul de mai jos

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
În exemplul de mai sus, în interiorul butonului de trimitere folosim pictograma font awesome. Dar pentru persoanele cu deficiențe de vedere care folosesc cititoare de ecran pentru a accesa site-ul web nu este necesar să expună această pictogramă.

Astfel, font awesome CDN va adăuga automat atributul `aria-hidden=true` la pictogramă.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

În afară de CDN-ul oficial font awesome de mai sus, putem folosi versiunea gratuită a font awesome iconițelor folosind rețele de livrare de conținut precum cdnjs, maxcdn și jsdelivr.


## Font awesome CDN prin cdn js 

Pentru cea mai recentă versiune font awesome 5 și mai sus, folosiți link-urile de mai jos font awesome CDN CSS file links by cdnjs.

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

Dacă doriți să utilizați versiunea Javascript a pictogramelor font awesome, folosiți linkurile CDN de mai jos de către cdnjs.

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

Pentru cele mai recente versiuni fontawesome CDN, consultați link-ul cdnjs de mai jos de la cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN links by jsdelivr 

Serviți font awesome icoane CSS fișiere CSS utilizând linkurile jsdelivr CDN de mai jos.

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
Pentru Font awesome CDN link-uri javascript fișiere javascript folosiți mai jos.
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

Aici este linkul către cele mai recente jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

Pentru versiunea anterioară, cum ar fi font awesome 4.7, putem folosi linkuri CDN bootstap CDN

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


