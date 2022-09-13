
+++
title     = "2016+ Zdarma seznam tříd ikon Font Awesome Names &amp; their CSS content values"
subtitle  = "Kompletní seznam 2016+ ikon zdarma font awesome "
summary   = "Tento příspěvek obsahuje seznam názvů tříd ikon zdarma font awesome s kódy jejich hodnot obsahu CSS &amp; návod krok za krokem k použití ikon font awesome ve stránkách HTML."
keywords  = ["font awesome ikony,font awesome seznam ikon,fa seznam ikon,ikony"]
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


Tento příspěvek obsahuje kompletní bezplatné názvy tříd font awesome ikony seznam s jejich kódy hodnot obsahu CSS &amp; návod krok za krokem pro použití ikon font awesome na stránkách HTML.

A také můžete vyhledávat a najít font awesome ikony pomocí [vyhledávacího pole](#search-font-awesome-icons) uvedeného v článku.

Kliknutím na `Ctrl + D` si stránku přidáte do záložek.

**V nejnovější verzi font awesome 6.2.0 je k dispozici 2016 bezplatných ikon**.

V předchozí verzi font awesome 5.14 máme přibližně 1598 volných ikon.

V závislosti na stylu ikon jsou tyto bezplatné ikony font awesome rozděleny do tří kategorií 

1. font awesome pevné ikony
2. font awesome běžné ikony
3. font awesome ikony značek

Můžeme <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">stáhnout</a> font awesome ikony css soubor a sloužit je z vašeho vlastního serveru Nebo můžeme sloužit z veřejných CDN.

{{% alert note %}}
A také jsem vytvořil [bezplatný ebook](#download-font-awesome-icons-list-pdf), který obsahuje kompletní seznam ikon font awesome ve formátu PDF.
{{% /alert%}}

{{% toc %}}

## Co je to font awesome?

1. font awesome je nejoblíbenější webová sada nástrojů pro písma a ikony založená na CSS a LESS.
2. font awesome vytvořil Dave Gandy.
3. font awesome byl nejpopulárnějším novým open source projektem na githubu v roce 2012 a v současnosti patří mezi 10 nejpopulárnějších projektů vůbec.
4. Font Awesome je v současné době živé na 47 milionech webových stránek a polovina světových webových vývojářů používá ikony font awesome.
5. Font Awesome umožňuje snadno přidávat vektorové ikony a sociální loga na naše webové stránky.

## Jak používat ikony font awesome?

Ikony font awesome můžeme v našich webových aplikacích používat dvěma způsoby.

1. Pomocí názvů tříd CSS
2. Použití hodnot obsahu CSS
3. Používání ikon SVG

Nejprve musíme přidat soubor font awesome icons css do sekce head souboru html.

## Zobrazení ikon font awesome pomocí názvů tříd CSS 

Nejběžnějším způsobem zobrazení ikon font awesome je použití názvů jejich tříd.

Pro každou ikonu je předdefinován název třídy, stačí jen k názvu ikony připojit `fa-` jako třídu.

font awesome ikony používají značku kurzíva, tj, `<i></i>` pro zobrazení ikon 

Důvodem použití této `<i>` tagu jako ikony je 

1. Je krátký
2. `I` stojan ikony (ne však ve světě HTML)

Chcete-li zobrazit ikony font awesome pomocí názvů tříd css, postupujte podle následujících kroků.

1. Přidejte značku ikony.
2. Do atributu třídy přidejte název ikony s předponou `fa`.
3. Dále musíme přidat třídu Style, tj. solid nebo regular nebo brand

Nejprve přidáme font awesome ikony css do sekce head souboru html, jak je uvedeno níže

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Používám cloudfare font awesome ikony cdn odkaz.

Chcete-li použít oficiální font awesome CDN. Projděte si článek [font awesome CDN](/fontawesome/cdn).

Nyní pro zobrazení ikony `facebook` font awesome použijte níže uvedený html kód.

```
<i class="fab fa-facebook"></i>
```
Ikona Facebooku je součástí ikon značky, proto jsem přidal `fab` jako další název třídy.

Chcete-li použít ikony font awesome solid, přidejte název třídy jako `fas`

Pro zobrazení ikony `barcode` použijte například následující html kód

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikona je součástí běžných ikon, přidejte název třídy jako `far`

```
<i class="far fa-bookmark"></i>
```

Chcete-li používat ikony font awesome v aplikacích Angular, projděte si článek

[Jak používat ikony Font Awesome v aplikacích Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Zobrazení ikon font awesome pomocí hodnot obsahu CSS

Výše uvedený přístup vyžaduje, abychom změnili názvy tříd ikon.

Pokud je váš projekt nový, pak můžeme postupovat podle výše uvedeného přístupu 

Pokud se však jedná o existující projekt, je změna názvu třídy ikon velmi obtížná.

V takovém případě můžeme zobrazit ikony font awesome pomocí jejich obsahových hodnot CSS.

K jejich zobrazení můžeme použít vlastnosti prvků CSS Pseudo-elements `::before` nebo `::after`.

Například pro zobrazení ikony `user` jsme mohli použít níže uvedený kód HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Ale náš oficiální název uživatelské ikony font awesome je `fa-user`.

Chcete-li tedy ikonu zobrazit, přidejte pro třídu `.user` vlastnost CSS content code jako `\f007`, což je unicode hodnota pro ikonu `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Spolu s kódem obsahu CSS musíme přidat také styl `font`.

K tomu můžeme použít předdefinované vlastní vlastnosti CSS font awesome.

Pro pevné ikony použijte `var(--fa-font-solid)`

Pro pravidelné ikony použijte `var(--fa-font-regular)`

Pro značkové ikony použijte `var(--fa-font-regular)`

Kromě toho můžeme přidat vlastní třídu, která definuje několik běžných vlastností CSS.

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
To je vše 

Ve verzi font awesome 5 nejsou žádné vlastní vlastnosti css 

Musíme tedy přidat vlastnosti css `font-family` a `font-weight`.

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

`font-family` a `font-weight` mohou být pro každou ikonu jiné v závislosti na stylu ikony, jako jsou běžné, plné a značkové ikony.

[Použijte ikony font awesome jako kód obsahu CSS](/fontawesome/csscontentcode)

Chcete-li zobrazit ikony font awesome pomocí SVG, přejděte na níže uvedený článek.

[Seznam ikon SVG, použití, CSS a stažení](/fontawesome/svg/)

## Hledání ikon Font Awesome 

Zde je kompletní seznam bezplatných ikon font awesome cheat sheet.

Zadejte název ikony do níže uvedeného vyhledávacího pole a zkopírujte název třídy a kód stylu nebo obsahu CSS.

Ikony budou vyfiltrovány v níže uvedené tabulce.

A kliknutím na ikonu zkopírujte html kód.

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