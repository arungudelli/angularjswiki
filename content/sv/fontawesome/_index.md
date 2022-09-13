
+++
title     = "2016+ Free Font Awesome Icons Klasslista Namn och deras CSS-innehållsvärden"
subtitle  = "Komplett lista över 2016+ gratis font awesome ikoner"
summary   = "Det här inlägget innehåller gratis font awesome ikoner klasslista namn med deras CSS innehållsvärde koder &amp; steg för steg handledning för att använda font awesome ikoner i HTML-sidor."
keywords  = ["font awesome ikoner,font awesome ikoner lista,fa ikoner lista,ikoner"]
linktitle = "Introduktion"

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


Det här inlägget innehåller fullständiga gratis font awesome ikoner klasslista namn med deras CSS innehåll värde koder och steg för steg handledning för att använda font awesome ikoner i HTML-sidor.

Du kan också söka och hitta font awesome ikoner med hjälp av [sökrutan](#search-font-awesome-icons) som finns i artikeln.

Klicka på `Ctrl + D` för att lägga sidan som bokmärke.

**I den senaste versionen av font awesome 6.2.0 finns det 2016 gratis ikoner**.

I den tidigare versionen font awesome 5.14 har vi cirka 1598 fria ikoner.

Beroende på ikonernas stil är dessa gratis ikoner på font awesome indelade i tre kategorier 

1. font awesome fasta ikoner
2. font awesome vanliga ikoner
3. font awesome märkesikoner

Vi kan <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">ladda ner</a> font awesome ikoner css-fil och visa dem från din egen server eller så kan vi visa dem från offentliga CDN:er.

{{% alert note %}}
Jag har också skapat en [gratis e-bok](#download-font-awesome-icons-list-pdf) som innehåller en fullständig lista över font awesome -ikoner i PDF-format.
{{% /alert%}}

{{% toc %}}

## Vad är font awesome?

1. font awesome är webbens mest populära verktygslåda för typsnitt och ikoner baserad på CSS och LESS.
2. font awesome är skapad av Dave Gandy.
3. font awesome var Githubs mest populära nya projekt med öppen källkod 2012 och är för närvarande ett av de tio mest populära projekten överlag.
4. Font Awesome finns för närvarande på 47 miljoner webbplatser och hälften av världens webbutvecklare använder font awesome ikoner.
5. Font Awesome gör det enkelt att lägga till vektorikoner och sociala logotyper på våra webbplatser.

## Hur använder man font awesome ikoner?

Det finns två sätt att använda font awesome -ikoner i våra webbapplikationer.

1. Genom att använda CSS-klassnamn
2. Genom att använda CSS-innehållsvärden
3. Användning av SVG-ikoner

Först måste vi lägga till css-filen font awesome ikoner i huvuddelen av html-filen.

## Visa font awesome ikoner med hjälp av CSS-klassnamn 

Det vanligaste sättet att visa font awesome -ikoner är att använda deras klassnamn.

För varje ikon finns ett fördefinierat klassnamn, och det räcker med att lägga till `fa-` till ikonens namn som klass.

font awesome ikoner använder kursiv tagg, dvs, `<i></i>` för att visa ikonerna 

Anledningen till att man använder denna `<i>` taggen som ikon är följande 

1. Den är kort
2. `I` står för Icon (dock inte i HTML-världen)

För att visa ikonerna på font awesome med hjälp av css-klassnamn följer du stegen nedan.

1. Lägg till en ikon-tagg.
2. Lägg till ikonnamn med prefixet `fa` i klassattributet.
3. Dessutom måste vi lägga till stilklass, dvs. solid eller regular eller brand

Först lägger vi till font awesome ikonernas css i head-sektionen i html-filen enligt nedan

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Jag använder cloudfare font awesome ikoner cdn länk.

För att använda den officiella font awesome CDN. Gå igenom artikeln [font awesome CDN](/fontawesome/cdn).

För att visa `facebook` font awesome ikonen använder du nedanstående html-kod.

```
<i class="fab fa-facebook"></i>
```
Facebook-ikonen är en del av varumärkesikonen, så jag har lagt till `fab` som ytterligare klassnamn.

För att använda font awesome solid ikoner lägg till klassnamnet som `fas`

Om du till exempel vill visa `barcode` -ikonen använder du följande html-kod

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikonen är en del av vanliga ikoner, lägg till klassnamnet som `far`

```
<i class="far fa-bookmark"></i>
```

Om du vill använda font awesome -ikoner i Angular-applikationer kan du läsa artikeln

[Hur man använder Font Awesome-ikoner i Angular-applikationer]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Visa font awesome -ikoner med hjälp av CSS-innehållsvärden

Ovanstående tillvägagångssätt kräver att vi ändrar våra ikonklassnamn.

Om ditt projekt är nytt kan vi följa ovanstående tillvägagångssätt 

Men om det är ett befintligt projekt är det mycket svårt att ändra ikonklassens namn.

I det här fallet kan vi visa ikonerna på font awesome med hjälp av deras CSS-innehållsvärden.

Vi kan använda CSS Pseudo-elements elementfunktioner `::before` eller `::after` för att visa dem.

För att visa ikonen `user` kan vi till exempel använda nedanstående HTML-kod.

```
<li>
<span class="user"></span> Login
</li>
``` 

Men vår officiella font awesome användarikon heter `fa-user`.

Så för att visa ikonen lägger du till CSS-egenskapen innehållskod för klassen `.user` som `\f007`, vilket är ett Unicode-värde för `user` -ikonen.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Tillsammans med CSS-innehållskoden måste vi också lägga till `font` style.

Vi kan använda font awesome fördefinierade CSS-anpassade egenskaper för detta.

För solida ikoner använder vi `var(--fa-font-solid)`

För vanliga ikoner använder du `var(--fa-font-regular)`

För märkesikoner `var(--fa-font-regular)`

Dessutom kan vi lägga till en egen klass som definierar några vanliga CSS-egenskaper.

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
Det var allt 

I font awesome 5 finns inga anpassade css-egenskaper 

Så vi måste lägga till `font-family` och `font-weight` css-egenskaper.

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

`font-family` och `font-weight` kan vara olika för varje ikon beroende på vilken stil ikonen har, t.ex. vanlig, solid och märkesikoner.

[Använd font awesome ikoner som CSS-innehållskod](/fontawesome/csscontentcode)

Om du vill visa font awesome -ikoner med SVG:er kan du läsa nedanstående artikel.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Sök Font Awesome-ikoner 

Här är den fullständiga listan över gratis font awesome ikoner som är gratis.

Skriv ikonens namn i sökrutan nedan och kopiera klassnamnet och stil- eller CSS-innehållskoden.

Ikonerna kommer att filtreras i nedanstående tabell.

Klicka på ikonen för att kopiera html-koden.

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