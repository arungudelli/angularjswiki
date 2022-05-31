+++
title    ="Hogyan használjuk a Font Awesome CDN-t"
subtitle ="Font awesome ikonok CDN listája"
summary  ="Ebben a bemutatóban megtanuljuk, hogyan használjuk a font awesome ikonokat a font awesome cdn-ről történő kiszolgálással."
keywords =["font awesome ikonok,font awesome ikonok CDN"]
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

Ebben a bemutatóban megtanuljuk, hogyan használjuk a font awesome ikonokat a font awesome cdn-ről történő kiszolgálással.

A CDN (Content delivery Network) használata a legjobb módja a font awesome ikon css vagy js fájlok kiszolgálásának, ahelyett, hogy a saját szerverünkön tárolnánk őket.

{{%toc%}}

## A font awesome CDN használatának lépései

1. Nyissa meg a hivatalos font awesome ikon weboldalt.

2. Kap egy egyedi beágyazási kódot, ha beírja az e-mail címét a következő [link](https://fontawesome.com/start).
3. Ezután a font awesome küld egy e-mailt a Font Awesome CDN beágyazási kóddal és az ikonok weboldalunkon történő hozzáadására vonatkozó utasításokkal együtt.
4. A minta JavaScript font awesome CDN link lesz az alábbi formátumban.`https://use.fontawesome.com/a34asdfsd.js`.
5. Másolja ki az e-mailben kapott beágyazási kódot, és helyezze el a HTML-ében `<head>` tagbe 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Íme a minta weboldal, amely a font awesome CDN-t használja.

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

Továbbá regisztrálhatunk a font awesome CDN weboldalon, hogy kezelhessük a preferenciáinkat.

## A font awesome CDN használatának előnyei

1. Gyorsabb szerver, ahonnan a font awesome ikonokat tudjuk kiszolgálni.
2. font awesome A CDN szerverek mindig működnek.
3. És a fájlokat a legközelebbi CDN szerverről szolgáljuk ki.
4. Gyorsan frissíthetünk a font awesome pro ikonokra anélkül, hogy a mi oldalunkról bármilyen kódváltoztatásra lenne szükség.
5. Több beágyazási kódot is létrehozhatunk különböző weboldalakhoz.
6. A Font Awesome CDN aszinkron módon töltheti be az ikonokat, tovább növelve a webhely teljesítményét.

A font awesome CDN használatának további nagy előnye, hogy automatizálhatjuk az ikonjaink elérhetőségét.

A Font Awesome CDN automatikus hozzáférhetőségi funkciója segít a látás- és hallássérült embereknek.

Vegyük például az alábbi példát

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
A fenti példában a submit gombon belül a font awesome ikont használjuk. De a látássérült személy számára, aki képernyőolvasót használ a weboldal eléréséhez, nem szükséges ezt az ikont megjeleníteni.

Így a font awesome CDN automatikusan hozzáadja a `aria-hidden=true` attribútumot az ikonhoz.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

A fenti font awesome hivatalos CDN mellett a font awesome ikonok ingyenes verzióját használhatjuk olyan tartalomszolgáltató hálózatok segítségével, mint a cdnjs, maxcdn és jsdelivr.


## Font awesome CDN a cdn js segítségével 

A legújabb font awesome 5 verzióhoz vagy annál magasabb verzióhoz használja az alábbi font awesome CDN CSS fájl linkeket a cdnjs által.

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

Ha a font awesome ikonok Javascript verzióját szeretné használni, használja az alábbi CDN linkeket cdnjs által.

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

A legújabb fontawesome CDN verziókért lásd az alábbi cdnjs linket a cloudflare által.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN linkek által jsdelivr 

A font awesome ikonok CSS fájljainak kiszolgálása az alábbi jsdelivr CDN linkek segítségével.

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
Font awesome CDN javascript fájlok linkjeihez használd az alábbi linkeket.
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

Itt van a link a legújabb jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

A korábbi verziókhoz, mint a font awesome 4.7, használhatjuk a bootstap cdn linkeket

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


