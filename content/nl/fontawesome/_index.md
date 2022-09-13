
+++
title     = "2016+ Gratis Font Awesome Icons Klasse lijst Namen &amp; hun CSS inhoudswaarden"
subtitle  = "Complete lijst van 2016+ gratis font awesome iconen"
summary   = "Deze post bevat gratis font awesome iconen klasse lijst namen met hun CSS inhoudswaarde codes &amp; stap voor stap tutorial om font awesome iconen te gebruiken in HTML pagina's."
keywords  = ["font awesome pictogrammen,font awesome pictogrammen lijst,fa pictogrammen lijst,pictogrammen"]
linktitle = "Introductie"

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


Deze post bevat volledige gratis font awesome pictogrammen klasse lijst namen met hun CSS inhoud waarde codes &amp; stap voor stap tutorial om font awesome pictogrammen te gebruiken in HTML-pagina's.

En ook kunt u zoeken en vinden font awesome pictogrammen met behulp van de [zoekvak](#search-font-awesome-icons) die in het artikel.

Klik op `Ctrl + D` om de pagina te bookmarken.

**In de laatste font awesome 6.2.0 versie, zijn er 2016 gratis iconen**.

In de vorige font awesome 5.14 versie hebben we ongeveer 1598 gratis iconen.

Afhankelijk van de icoonstijl, zijn deze gratis font awesome iconen onderverdeeld in drie categorieën 

1. font awesome effen iconen
2. font awesome gewone iconen
3. font awesome merkiconen

We kunnen font awesome icons css file <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">downloaden</a> en serveren vanaf uw eigen server of we kunnen ze serveren vanaf publieke CDNs.

{{% alert note %}}
En ik heb ook een [gratis ebook](#download-font-awesome-icons-list-pdf) gemaakt dat de volledige lijst van font awesome pictogrammen in PDF-formaat bevat.
{{% /alert%}}

{{% toc %}}

## Wat is font awesome?

1. font awesome is web's meest populaire font en icon toolkit gebaseerd op CSS en LESS.
2. font awesome is gemaakt door Dave Gandy.
3. font awesome was github's meest populaire nieuwe open source project in 2012 en is momenteel een van de top 10 projecten in het algemeen.
4. Font Awesome is momenteel live op 47 miljoen websites en de helft van de webontwikkelaars ter wereld gebruikt font awesome pictogrammen.
5. Font Awesome maakt het eenvoudig om vectorpictogrammen en sociale logo's aan onze websites toe te voegen.

## Hoe gebruikt u font awesome pictogrammen?

Er zijn twee manieren waarop we font awesome pictogrammen kunnen gebruiken in onze webapplicaties.

1. Gebruik van CSS klasse-namen
2. Gebruik van CSS inhoudswaarden
3. SVG-pictogrammen gebruiken

Eerst moeten we font awesome icons css bestand toevoegen in de head sectie van het html bestand.

## font awesome iconen weergeven met CSS klasse namen 

De meest gebruikelijke manier om font awesome iconen weer te geven is door hun class namen te gebruiken.

Voor elk icoon is een class naam voorgedefinieerd, we hoeven alleen de `fa-` toe te voegen aan de icoon naam als class.

font awesome icons gebruikt de cursieve tag, d.w.z, `<i></i>` om de pictogrammen weer te geven 

De reden achter het gebruik van deze `<i>` tag als icoon is 

1. Het is de korte
2. `I` stand van Pictogram (niet in HTML wereld)

Om de font awesome iconen weer te geven met behulp van css class namen volg de stappen.

1. Voeg een icoon tag toe.
2. Voeg icoonnaam voorafgegaan door `fa` toe aan het klasse attribuut.
3. Daarnaast moeten we de stijlklasse toevoegen, d.w.z. effen of normaal of merk

Eerst voegen we de font awesome icons css toe in de head sectie van html bestand zoals hieronder getoond

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Ik gebruik cloudfare font awesome icons cdn link.

Om de officiële font awesome CDN te gebruiken. Ga door het [font awesome CDN](/fontawesome/cdn) artikel.

Nu om `facebook` font awesome pictogram weer te geven, gebruik de onderstaande html code.

```
<i class="fab fa-facebook"></i>
```
Facebook icoon is onderdeel van merk iconen, dus heb ik `fab` toegevoegd als extra klasse naam.

Om font awesome solid icons te gebruiken voeg je de class name toe als `fas`

Bijvoorbeeld om `barcode` icoon weer te geven gebruik de volgende html code

```
<i class="fas fa-barcode"></i>
```
`bookmark` icoon is als onderdeel van reguliere iconen, voeg de klasse naam toe als `far`

```
<i class="far fa-bookmark"></i>
```

Om font awesome iconen te gebruiken in Angular toepassingen, ga door het artikel

[Hoe Font Awesome iconen te gebruiken in Angular toepassingen]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## font awesome pictogrammen weergeven met CSS-inhoudswaarden

De bovenstaande aanpak vereist dat we onze icoon klasse namen veranderen.

Als uw project nieuw is, kunnen we de bovenstaande aanpak volgen 

Maar als het een bestaand project is, is het erg moeilijk om de icoon class naam te veranderen.

In dit geval kunnen we de font awesome pictogrammen weergeven met behulp van hun CSS inhoudswaarden.

We kunnen de CSS Pseudo-elements elementen kenmerken `::before` of `::after` gebruiken om ze weer te geven.

Om bijvoorbeeld `user` icoon weer te geven, zouden we onderstaande HTML code gebruikt kunnen hebben.

```
<li>
<span class="user"></span> Login
</li>
``` 

Maar onze officiële font awesome gebruikers icoon naam is `fa-user`.

Dus om het pictogram weer te geven, voeg voor de `.user` klasse de CSS content code eigenschap toe als `\f007`, dat is unicode waarde voor `user` pictogram.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Samen met de CSS content code, moeten we ook `font` style toevoegen.

We kunnen font awesome voorgedefinieerde CSS custom properties daarvoor gebruiken.

Voor vaste iconen gebruiken we `var(--fa-font-solid)`

Voor normale iconen gebruik `var(--fa-font-regular)`

Voor merkpictogrammen `var(--fa-font-regular)`

Daarnaast kunnen we een aangepaste klasse toevoegen die enkele algemene CSS eigenschappen definieert.

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
Dat is het 

In font awesome 5 versie zijn er geen aangepaste css eigenschappen 

Dus moeten we `font-family` en `font-weight` css eigenschappen toevoegen.

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

`font-family` en `font-weight` kunnen verschillend zijn voor elk icoon, afhankelijk van de stijl van het icoon zoals gewone, effen en merkiconen.

[Gebruik font awesome pictogrammen als CSS-inhoudscode](/fontawesome/csscontentcode)

Om font awesome pictogrammen met SVG's weer te geven, gaat u naar het onderstaande artikel.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Font Awesome pictogrammen zoeken 

Hier is de volledige lijst van gratis font awesome pictogrammen spiekbriefje.

Typ de naam van het pictogram in het onderstaande zoekvak en kopieer de klassenaam en de stijl of CSS-inhoudscode.

De iconen zullen gefilterd worden in de onderstaande tabel.

En klik op het icoon om de html code te kopiëren.

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