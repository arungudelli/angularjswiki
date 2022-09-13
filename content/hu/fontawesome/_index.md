
+++
title     = "2016+ Ingyenes Font Awesome ikonok osztálylistája Nevek és CSS tartalmi értékeik"
subtitle  = "2016+ ingyenes font awesome ikonok teljes listája"
summary   = "Ez a bejegyzés tartalmazza az ingyenes font awesome ikonok osztálylistájának neveit a CSS tartalomérték kódjaikkal &amp; lépésről lépésre bemutatót a font awesome ikonok HTML oldalakon való használatához."
keywords  = ["font awesome ikonok,font awesome ikonok listája,fa ikonok listája,ikonok"]
linktitle = "Bevezetés"

type="docs"
date="2019-07-14T01:01:05+0000"
lastmod="2020-09-08T00:00:08+0000"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
[menu.fontawesome]
parent="fontawesome"
weight=1
[image]
  caption = "font awesome icons"
  focal_point = ""
  preview_only = false
+++


Ez a bejegyzés tartalmazza a teljes ingyenes font awesome ikonok osztálylista neveit a CSS tartalomérték kódjaikkal és lépésről lépésre bemutatót a font awesome ikonok HTML oldalakon való használatához.

És a cikkben található [keresőmező](#search-font-awesome-icons) segítségével kereshetsz és találhatsz font awesome ikonokat.

Kattintson a `Ctrl + D` linkre az oldal könyvjelzőbe helyezéséhez.

**A font awesome legújabb, 6.2.0-s verziójában 2016 ingyenes ikon található**.

Az előző font awesome 5.14-es verzióban kb. 1598 ingyenes ikon van.

Az ikonstílustól függően ezek az ingyenes font awesome ikonok három kategóriába oszthatók 

1. font awesome szilárd ikonok
2. font awesome szabályos ikonok
3. font awesome márkaikonok

 <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">Letölthetjük</a> a font awesome ikonok css fájlját és kiszolgálhatjuk őket a saját szerveréről, vagy nyilvános CDN-ekből is kiszolgálhatjuk őket.

{{% alert note %}}
És készítettem egy [ingyenes ebookot](#download-font-awesome-icons-list-pdf), amely tartalmazza a font awesome ikonok teljes listáját PDF formátumban.
{{% /alert%}}

{{% toc %}}

## Mi az a font awesome?

1. font awesome a web legnépszerűbb, CSS és LESS alapú betűtípus- és ikonkészlete.
2. font awesome dave Gandy készítette.
3. font awesome 2012-ben a github legnépszerűbb új nyílt forráskódú projektje volt, jelenleg pedig összességében a 10 legnépszerűbb projekt között van.
4. A Font Awesome jelenleg 47M weboldalon él, és a világ webfejlesztőinek fele a font awesome ikonokat használja.
5. A Font Awesome megkönnyíti a vektoros ikonok és közösségi logók hozzáadását a weboldalainkhoz.

## Hogyan használjuk a font awesome ikonokat?

A font awesome ikonokat kétféleképpen használhatjuk webes alkalmazásainkban.

1. CSS osztálynevek használata
2. CSS tartalomértékek használata
3. SVG ikonok használata

Először is hozzá kell adnunk a font awesome ikonok css fájlt a html fájl head részéhez.

## A font awesome ikonok megjelenítése a CSS osztálynevek használatával 

A font awesome ikonok megjelenítésének legelterjedtebb módja az osztálynevek használata.

Minden egyes ikonhoz van egy előre definiált osztálynév, csak a `fa-` -t kell az ikon nevéhez osztályként csatolni.

font awesome az ikonok dőlt betűs címkét használnak, azaz, `<i></i>` az ikonok megjelenítéséhez 

Az ok, amiért ezt a `<i>` tag ikonként való használatának oka 

1. Rövid
2. `I` ikon állása (nem a HTML világában)

A font awesome ikonok megjelenítéséhez a css osztálynevek használatával kövesse a lépéseket.

1. Adjunk hozzá egy ikon taget.
2. Adja hozzá az ikon nevét a `fa` előtaggal az osztály attribútumhoz.
3. Ezenkívül hozzá kell adnunk a Style osztályt, azaz a solid vagy regular vagy brand osztályt

Először is hozzáadjuk a font awesome ikonok css-t a html fájl head szakaszában az alábbiak szerint

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Én a cloudfare font awesome ikonok cdn linket használom.

A hivatalos font awesome CDN használatához. Menjen át a [font awesome CDN](/fontawesome/cdn) cikken.

Most a `facebook` font awesome ikon megjelenítéséhez használja az alábbi html kódot.

```
<i class="fab fa-facebook"></i>
```
A Facebook ikon a márkaikonok része, ezért hozzáadtam a `fab` kiegészítő osztálynévként.

A font awesome szilárd ikonok használatához adja hozzá az osztálynevet, mint `fas`

Például a `barcode` ikon megjelenítéséhez használja a következő html kódot

```
<i class="fas fa-barcode"></i>
```
`bookmark` az ikon a normál ikonok részeként, az osztály nevét add hozzá, mint `far`

```
<i class="far fa-bookmark"></i>
```

A font awesome ikonok Angular alkalmazásokban való használatához nézze át a cikket

[Hogyan használjunk Font Awesome ikonokat Angular alkalmazásokban]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## A font awesome ikonok megjelenítése CSS tartalomértékek használatával

A fenti megközelítéshez meg kell változtatnunk az ikonok osztályneveit.

Ha a projekt új, akkor a fenti megközelítést követhetjük 

Ha azonban egy meglévő projektről van szó, akkor nagyon nehéz megváltoztatni az ikonosztály nevét.

Ebben az esetben a font awesome ikonokat a CSS tartalmi értékeik segítségével jeleníthetjük meg.

A megjelenítésükhöz használhatjuk a `::before` vagy a `::after` CSS Pseudo-elemek elemeinek jellemzőit.

Például a `user` ikon megjelenítéséhez az alábbi HTML-kódot használhattuk.

```
<li>
<span class="user"></span> Login
</li>
``` 

De a hivatalos font awesome felhasználói ikonunk neve `fa-user`.

Tehát az ikon megjelenítéséhez a `.user` osztályhoz adjuk hozzá a `\f007` CSS tartalomkód tulajdonságot, ami a `user` ikon unicode értéke.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

A CSS tartalomkód mellett a `font` stílust is hozzá kell adnunk.

Ehhez használhatjuk a font awesome előre definiált CSS egyéni tulajdonságait.

A tömör ikonokhoz használjuk a `var(--fa-font-solid)`

A szabályos ikonokhoz használd a `var(--fa-font-regular)`

Márka ikonokhoz használd `var(--fa-font-regular)`

Ezen kívül hozzáadhatunk egy egyéni osztályt, amely néhány általános CSS tulajdonságot definiál.

```
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

<li>
<span class="user fontawesomeicon"></span> Login
</li>

```
Ennyi 

A font awesome 5 verzióban nincsenek egyéni css tulajdonságok 

Tehát hozzá kell adnunk a `font-family` és a `font-weight` css tulajdonságokat.

```
// Font awesome 5 version. 
.user::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f007";
}

.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

```

`font-family` és a `font-weight` az egyes ikonoknál eltérő lehet, az ikon stílusától függően, mint például a normál, a tömör és a márkaikonok.

[ font awesome ikonok használata CSS tartalomkódként](/fontawesome/csscontentcode)

Megjelenítéséhez font awesome ikonok segítségével SVG's megy gondoltam az alábbi cikket.

[Font Awesome SVG ikonok listája, használata, CSS és letöltés](/fontawesome/svg/)

## Font Awesome ikonok keresése 

Itt van az ingyenes font awesome ikonok teljes listája csalóka.

Írja be az ikon nevét az alábbi keresőmezőbe, és másolja ki az osztály nevét és stílus- vagy CSS-tartalomkódját.

Az ikonok az alábbi táblázatban lesznek kiszűrve.

És kattintson az ikonra a html kód másolásához.

<input type="text" id="myInput" onkeyup="searchTable()" placeholder="Search font awesome icons.." title="Search font awesome icons">

Total <strong><span id="counter">2016</span></strong> Icons.

## Download font awesome icons list PDF

Subscribe to our Angular wiki newsletter and download font awesome icons list in PDF format.

<script>
 var icons = document.querySelectorAll('i');

  function searchTable() {
  var input, filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  var count = 0;

   for (var i=0; i < icons.length; i++) {
    //debugger;
    var text = icons[i].nextSibling.textContent.trim().toUpperCase();
    var tr = icons[i].parentNode.parentElement;

    if (text.toUpperCase().indexOf(filter) > -1) {
        tr.style.display = "";
        count++;
      } else {
        tr.style.display = "none";
    }
   
   }

   var countElement = document.getElementById("counter");

   countElement.innerHTML = count;

 
}



// copy.addEventListener("pointerdown", () => navigator.clipboard.writeText("Hello World!"))

for (var i=0; i < icons.length; i++) {
    icons[i].onpointerdown  = function(){
       navigator.clipboard.writeText(this.outerHTML).then(() => {
        alert(this.outerHTML + "successfully copied");
      });
    }
};

</script>

<style>
  i{
    cursor:pointer;
    under
  }
</style>