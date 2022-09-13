
+++
title     = "2016+ Bezplatný zoznam tried ikon Font Awesome a ich hodnoty obsahu CSS"
subtitle  = "Kompletný zoznam 2016+ bezplatných ikon font awesome "
summary   = "Tento príspevok obsahuje zoznam názvov tried ikon zadarmo font awesome s kódmi ich hodnôt obsahu CSS &amp; návod krok za krokom na používanie ikon font awesome na stránkach HTML."
keywords  = ["font awesome ikony,font awesome zoznam ikon,zoznam ikon fa,ikony"]
linktitle = "Úvod"

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


Tento príspevok obsahuje kompletný bezplatný zoznam názvov tried ikon font awesome s ich kódmi hodnôt obsahu CSS &amp; návod krok za krokom na používanie ikon font awesome na stránkach HTML.

A tiež môžete vyhľadávať a nájsť font awesome ikony pomocou [vyhľadávacieho poľa](#search-font-awesome-icons) uvedeného v článku.

Kliknutím na `Ctrl + D` si stránku môžete pridať do záložiek.

**V najnovšej verzii font awesome 6.2.0 je k dispozícii 2016 bezplatných ikon**.

V predchádzajúcej verzii font awesome 5.14 máme približne 1598 bezplatných ikon.

V závislosti od štýlu ikon sú tieto bezplatné ikony font awesome rozdelené do troch kategórií 

1. font awesome pevné ikony
2. font awesome bežné ikony
3. font awesome ikony značiek

Môžeme <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">stiahnuť</a> font awesome ikony css súbor a slúžiť z vášho vlastného servera Alebo môžeme slúžiť z verejných CDN.

{{% alert note %}}
A tiež som vytvoril [bezplatnú elektronickú knihu](#download-font-awesome-icons-list-pdf), ktorá obsahuje kompletný zoznam ikon font awesome vo formáte PDF.
{{% /alert%}}

{{% toc %}}

## Čo je font awesome?

1. font awesome je najpopulárnejšia webová sada nástrojov pre písma a ikony založená na CSS a LESS.
2. font awesome vytvoril Dave Gandy.
3. font awesome bol najpopulárnejším novým open source projektom na githube v roku 2012 a v súčasnosti patrí medzi 10 najpopulárnejších projektov celkovo.
4. Font Awesome je v súčasnosti živý na 47 miliónoch webových stránok a polovica svetových webových vývojárov používa ikony font awesome.
5. Font Awesome umožňuje jednoducho pridávať vektorové ikony a sociálne logá na naše webové stránky.

## Ako používať ikony font awesome?

Ikony font awesome môžeme v našich webových aplikáciách používať dvoma spôsobmi.

1. Použitie názvov tried CSS
2. Použitie hodnôt obsahu CSS
3. Používanie ikon SVG

Najprv musíme pridať súbor font awesome icons css do časti head súboru html.

## Zobrazenie ikon font awesome pomocou názvov tried CSS 

Najbežnejším spôsobom zobrazenia ikon font awesome je použitie názvov ich tried.

Pre každú ikonu je preddefinovaný názov triedy, stačí, ak k názvu ikony ako triedu pripojíme `fa-`.

font awesome ikony používajú značku kurzíva, t. j., `<i></i>` na zobrazenie ikon 

Dôvodom použitia tejto `<i>` tagu ako ikony je 

1. Je krátky
2. `I` stojan ikony (nie však vo svete HTML)

Ak chcete zobraziť ikony font awesome pomocou názvov tried css, postupujte podľa nasledujúcich krokov.

1. Pridajte značku ikony.
2. Do atribútu triedy pridajte názov ikony s predponou `fa`.
3. Okrem toho musíme pridať triedu Style. t. j. solid alebo regular alebo brand

Najskôr pridáme ikony font awesome css do sekcie head súboru html, ako je znázornené nižšie

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Používam odkaz cloudfare font awesome icons cdn.

Ak chcete použiť oficiálnu font awesome CDN. Prejdite cez článok [font awesome CDN](/fontawesome/cdn).

Teraz na zobrazenie ikony `facebook` font awesome použite nižšie uvedený html kód.

```
<i class="fab fa-facebook"></i>
```
Ikona Facebook je súčasťou ikony značky, preto som ako ďalší názov triedy pridal `fab`.

Ak chcete použiť ikony font awesome solid, pridajte názov triedy ako `fas`

Napríklad na zobrazenie ikony `barcode` použite nasledujúci html kód

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikona je súčasťou bežných ikon, názov triedy pridajte ako `far`

```
<i class="far fa-bookmark"></i>
```

Ak chcete používať ikony font awesome v aplikáciách Angular, prejdite si článok

[Ako používať ikony Font Awesome v aplikáciách Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Zobrazenie ikon font awesome pomocou hodnôt obsahu CSS

Uvedený prístup si vyžaduje, aby sme zmenili názvy tried ikon.

Ak je váš projekt nový, potom môžeme postupovať podľa vyššie uvedeného prístupu 

Ak však ide o existujúci projekt, je veľmi ťažké zmeniť názov triedy ikon.

V tomto prípade môžeme ikony font awesome zobraziť pomocou ich obsahových hodnôt CSS.

Na ich zobrazenie môžeme použiť vlastnosti prvkov CSS Pseudo-elements `::before` alebo `::after`.

Napríklad na zobrazenie ikony `user` sme mohli použiť nasledujúci kód HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Ale náš oficiálny názov používateľskej ikony font awesome je `fa-user`.

Takže na zobrazenie ikony pridajte pre triedu `.user` vlastnosť CSS content code ako `\f007`, čo je unicode hodnota pre ikonu `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Spolu s kódom obsahu CSS musíme pridať aj štýl `font`.

Na to môžeme použiť preddefinované vlastné vlastnosti CSS font awesome.

Pre pevné ikony použite `var(--fa-font-solid)`

Pre pravidelné ikony použite `var(--fa-font-regular)`

Pre značkové ikony použite `var(--fa-font-regular)`

Okrem toho môžeme pridať vlastnú triedu, ktorá definuje niekoľko bežných vlastností CSS.

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
To je všetko 

Vo verzii font awesome 5 nie sú žiadne vlastné vlastnosti css 

Preto musíme pridať vlastnosti css `font-family` a `font-weight`.

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

`font-family` a `font-weight` môžu byť pre každú ikonu iné v závislosti od štýlu ikony, ako sú bežné, plné a značkové ikony.

[Použite ikony font awesome ako kód obsahu CSS](/fontawesome/csscontentcode)

Ak chcete zobraziť ikony font awesome pomocou SVG, prejdite na nižšie uvedený článok.

[Zoznam ikon SVG, použitie, CSS a stiahnutie](/fontawesome/svg/)

## Vyhľadávanie ikon Font Awesome 

Tu je kompletný zoznam bezplatných ikon font awesome cheat sheet.

Zadajte názov ikony do nižšie uvedeného vyhľadávacieho poľa a skopírujte názov triedy a kód štýlu alebo obsahu CSS.

Ikony sa vyfiltrujú v nasledujúcej tabuľke.

A kliknutím na ikonu skopírujte html kód.

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