+++
title    ="Kuinka käyttää Font Awesome CDN:ää"
subtitle ="Font awesome Icons CDN-luettelo"
summary  ="Tässä opetusohjelmassa opimme käyttämään font awesome kuvakkeita tarjoilemalla niitä font awesome cdn:stä."
keywords =["font awesome kuvakkeet,font awesome kuvakkeet CDN"]
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

Tässä opetusohjelmassa opimme käyttämään font awesome kuvakkeita tarjoilemalla niitä font awesome cdn:stä.

CDN:n (Content delivery Network) käyttäminen on paras tapa palvella font awesome kuvakkeiden css- tai js-tiedostoja sen sijaan, että isännöisimme niitä omilla palvelimillamme.

{{%toc%}}

## Vaiheet font awesome CDN:n käyttämiseen

1. Avaa virallinen font awesome -sivusto.

2. Saat ainutlaatuisen upotuskoodin syöttämällä sähköpostiosoitteesi tätä [linkkiä](https://fontawesome.com/start) seuraamalla.
3. Sitten font awesome lähettää sähköpostin, jossa on Font Awesome CDN:n upotuskoodi sekä ohjeet kuvakkeiden lisäämiseksi verkkosivuillemme.
4. Esimerkki JavaScript font awesome CDN-linkki on alla olevassa muodossa.`https://use.fontawesome.com/a34asdfsd.js`.
5. Kopioi sähköpostitse saamasi upotuskoodi ja sijoita se HTML-koodiin `<head>` tagiin 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Tässä on esimerkki verkkosivusta, joka käyttää font awesome CDN:ää.

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

Lisäksi voimme rekisteröityä font awesome CDN-sivustolle ja hallita asetuksia.

## font awesome CDN:n käytön edut

1. Nopeampi palvelin, josta voimme palvella font awesome -kuvakkeita.
2. font awesome CDN-palvelimet ovat aina toiminnassa.
3. Ja tiedostot tarjoillaan lähimmältä CDN-palvelimelta.
4. Voimme päivittää nopeasti font awesome pro-kuvakkeisiin ilman koodimuutoksia omalta osaltamme.
5. Voimme luoda useita upotuskoodeja eri verkkosivustoille.
6. Font Awesome CDN voi ladata kuvakkeesi asynkronisesti, mikä lisää sivuston suorituskykyä.

Vielä yksi suuri etu font awesome CDN:n käytössä on, että voimme automatisoida kuvakkeidemme saavutettavuuden.

Font Awesome CDN:n automaattinen saavutettavuusominaisuus auttaa näkö- ja kuulovammaisia ihmisiä.

Tarkastellaan esimerkiksi alla olevaa esimerkkiä

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Yllä olevassa esimerkissä käytämme lähetä-painikkeen sisällä font awesome -kuvaketta. Mutta näkövammaisille henkilöille, jotka käyttävät ruudunlukulaitteita verkkosivuston käyttämiseen, tätä kuvaketta ei tarvita.

Joten font awesome CDN lisää automaattisesti `aria-hidden=true` -attribuutin kuvakkeeseen.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Edellä mainittujen font awesome virallisten CDN:ien lisäksi voimme käyttää font awesome kuvakkeiden ilmaista versiota käyttämällä sisällönjakeluverkkoja, kuten cdnjs, maxcdn ja jsdelivr.


## Font awesome CDN by cdnjs 

Viimeisimmän font awesome 5 -version ja sitä uudemmat versiot saat käyttämällä alla olevia font awesome CDN CSS-tiedostolinkkejä cdnjs:llä.

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

Jos haluat käyttää font awesome kuvakkeiden Javascript-versiota, käytä alla olevia cdnjs:n CDN-linkkejä.

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

Uusimmat fontawesome CDN-versiot löydät alla olevasta cdnjs-linkistä, jonka on laatinut cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN-linkit jsdelivr:n toimesta 

Tarjoile font awesome kuvakkeet CSS-tiedostot käyttämällä alla olevia jsdelivr CDN-linkkejä.

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
Font awesome CDN javascript-tiedostojen linkkejä varten käytä alla olevia linkkejä.
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

Tässä on linkki uusimpaan jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN-linkki

Aikaisemmille versioille kuten font awesome 4.7 voimme käyttää bootstrap cdn-linkkejä

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


