
+++
title     = "2016+ Brezplačne ikone Font Awesome Icons Imenski seznam razredov in njihove vrednosti vsebine CSS"
subtitle  = "Popoln seznam 2016+ brezplačnih ikon font awesome "
summary   = "Ta objava vsebuje brezplačne font awesome ikone seznam imen razredov z njihovimi kodami vrednosti vsebine CSS &amp; navodila po korakih za uporabo font awesome ikon na straneh HTML."
keywords  = ["font awesome ikone,font awesome seznam ikon,seznam ikon fa,ikone"]
linktitle = "Uvod"

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


Ta objava vsebuje popolna brezplačna imena font awesome seznama razredov ikon z njihovimi kodami vrednosti vsebine CSS &amp; navodila po korakih za uporabo font awesome ikon na straneh HTML.

Prav tako lahko iščete in najdete font awesome ikone z uporabo [iskalnega polja](#search-font-awesome-icons), ki je na voljo v članku.

Kliknite `Ctrl + D` za zaznamek strani.

**V najnovejši različici font awesome 6.2.0 je na voljo 2016 brezplačnih ikon**.

V prejšnji različici font awesome 5.14 je na voljo približno 1598 brezplačnih ikon.

Glede na slog ikon so te brezplačne ikone font awesome razdeljene v tri kategorije 

1. font awesome masivne ikone
2. font awesome običajne ikone
3. font awesome ikone blagovnih znamk

Lahko <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">prenesemo</a> font awesome ikone css datoteke in jih postrežemo z vašega strežnika Ali pa jih postrežemo iz javnih CDN-jev.

{{% alert note %}}
Ustvaril sem tudi [brezplačno e-knjigo](#download-font-awesome-icons-list-pdf), ki vsebuje celoten seznam ikon font awesome v formatu PDF.
{{% /alert%}}

{{% toc %}}

## Kaj je font awesome?

1. font awesome je najbolj priljubljena spletna zbirka orodij za pisave in ikone, ki temelji na CSS in LESS.
2. font awesome je ustvaril Dave Gandy.
3. font awesome leta 2012 je bil najbolj priljubljen nov odprtokodni projekt na portalu github in je trenutno med desetimi najbolj priljubljenimi projekti na splošno.
4. Pisava Font Awesome je trenutno prisotna na 47 milijonih spletnih mest, polovica svetovnih spletnih razvijalcev pa uporablja ikone font awesome.
5. Font Awesome omogoča enostavno dodajanje vektorskih ikon in družabnih logotipov na naša spletna mesta.

## Kako uporabljati ikone font awesome?

Ikone font awesome lahko v svojih spletnih aplikacijah uporabljamo na dva načina.

1. Uporaba imen razredov CSS
2. Uporaba vrednosti vsebine CSS
3. Uporaba ikon SVG

Najprej moramo dodati datoteko font awesome icons css v razdelek head datoteke html.

## Prikaži ikone font awesome z uporabo imen razredov CSS 

Najpogostejši način prikaza ikon font awesome je uporaba imen njihovih razredov.

Za vsako ikono je vnaprej določeno ime razreda, le `fa-` moramo dodati imenu ikone kot razred.

font awesome ikone uporabljajo poševno oznako, tj, `<i></i>` za prikaz ikon 

Razlog za uporabo te `<i>` oznake kot ikone je 

1. Je kratka
2. `I` stojalo ikone (ne v svetu HTML)

Za prikaz ikon font awesome z uporabo imen razredov css sledite naslednjim korakom.

1. Dodajte oznako ikone.
2. V atribut razreda dodajte ime ikone s predpono `fa`.
3. Poleg tega moramo dodati razred Style, tj. solid ali regular ali brand

Najprej bomo dodali font awesome ikone css v razdelek head datoteke html, kot je prikazano spodaj

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Uporabljam povezavo cloudfare font awesome icons cdn.

Za uporabo uradne font awesome CDN. Pojdite skozi članek [font awesome CDN](/fontawesome/cdn).

Zdaj za prikaz ikone `facebook` font awesome uporabite spodnjo kodo html.

```
<i class="fab fa-facebook"></i>
```
Ikona Facebook je del ikon blagovne znamke, zato sem dodal `fab` kot dodatno ime razreda.

Če želite uporabiti font awesome solidne ikone, dodajte ime razreda kot `fas`

Za prikaz ikone `barcode` na primer uporabite naslednjo kodo html

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikona je del običajnih ikon, dodajte ime razreda kot `far`

```
<i class="far fa-bookmark"></i>
```

Če želite uporabljati ikone font awesome v aplikacijah Angular, preberite članek

[Kako uporabiti ikone Font Awesome v aplikacijah Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Prikaži ikone font awesome z uporabo vsebinskih vrednosti CSS

Zgornji pristop zahteva, da spremenimo imena razredov ikon.

Če je vaš projekt nov, lahko uporabimo zgornji pristop 

Če pa gre za obstoječi projekt, je zelo težko spremeniti ime razreda ikon.

V tem primeru lahko ikone font awesome prikažemo z uporabo njihovih vsebinskih vrednosti CSS.

Za njihov prikaz lahko uporabimo lastnosti elementov CSS Pseudoelements `::before` ali `::after`.

Za prikaz ikone `user` smo na primer uporabili spodnjo kodo HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Toda naše uradno ime ikone uporabnika font awesome je `fa-user`.

Zato za prikaz ikone za razred `.user` dodajte lastnost CSS content code kot `\f007`, kar je enokodna vrednost za ikono `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Poleg kode vsebine CSS moramo dodati tudi slog `font`.

Za to lahko uporabimo vnaprej določene lastnosti CSS po meri font awesome.

Za masivne ikone uporabite `var(--fa-font-solid)`

Za navadne ikone uporabite `var(--fa-font-regular)`

Za ikone blagovnih znamk uporabite `var(--fa-font-regular)`

Poleg tega lahko dodamo razred po meri, ki določa nekaj skupnih lastnosti CSS.

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
To je to 

V različici font awesome 5 ni lastnosti css po meri 

Zato moramo dodati lastnosti css `font-family` in `font-weight`.

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

`font-family` in `font-weight` sta lahko za vsako ikono drugačni, odvisno od sloga ikone, kot so navadne, polne in ikone blagovne znamke.

[Uporaba ikon font awesome kot kode vsebine CSS](/fontawesome/csscontentcode)

Če želite prikazati ikone font awesome z uporabo SVG, preberite spodnji članek.

[Seznam ikon SVG, uporaba, CSS in prenos](/fontawesome/svg/)

## Iskanje ikon Font Awesome 

Tukaj je popoln seznam brezplačnih ikon font awesome cheat sheet.

V spodnje iskalno polje vnesite ime ikone in kopirajte ime razreda ter kodo sloga ali vsebine CSS.

Ikone bodo filtrirane v spodnji preglednici.

Kliknite na ikono, da kopirate kodo html.

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