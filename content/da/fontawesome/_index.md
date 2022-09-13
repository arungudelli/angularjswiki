
+++
title     = "2016+ Gratis Font Awesome Icons Class list Navne og deres CSS-indholdsværdier"
subtitle  = "Komplet liste over 2016+ gratis font awesome ikoner"
summary   = "Dette indlæg indeholder gratis font awesome ikoner klasse liste navne med deres CSS indholdsværdi koder &amp; trin for trin tutorial til at bruge font awesome ikoner i HTML-sider."
keywords  = ["font awesome ikoner,font awesome ikoner liste,fa ikoner liste,fa ikoner liste,ikoner"]
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


Dette indlæg indeholder komplette gratis font awesome ikoner klasse liste navne med deres CSS indhold værdi koder &amp; trin for trin tutorial til at bruge font awesome ikoner i HTML-sider.

Og du kan også søge og finde font awesome ikoner ved hjælp af [søgefeltet](#search-font-awesome-icons) i artiklen.

Klik på `Ctrl + D` for at bogmærke siden.

**I den seneste font awesome 6.2.0 version er der 2016 gratis ikoner**.

I den tidligere font awesome 5.14 version har vi omkring 1598 gratis ikoner.

Afhængigt af ikon-stilen er disse gratis font awesome ikoner opdelt i tre kategorier 

1. font awesome faste ikoner
2. font awesome almindelige ikoner
3. font awesome mærkeikoner

Vi kan <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">downloade</a> font awesome icons css-fil og servere dem fra din egen server eller vi kan servere dem fra offentlige CDN'er.

{{% alert note %}}
Og jeg har også oprettet en [gratis e-bog](#download-font-awesome-icons-list-pdf), som indeholder en komplet liste over font awesome ikoner i PDF-format.
{{% /alert%}}

{{% toc %}}

## Hvad er font awesome?

1. font awesome er web's mest populære skrifttype- og ikonværktøjssæt baseret på CSS og LESS.
2. font awesome er skabt af Dave Gandy.
3. font awesome var Githubs mest populære nye open source-projekt i 2012 og er i øjeblikket et af de 10 mest populære projekter i alt.
4. Font Awesome er i øjeblikket live på 47 mio. websteder, og halvdelen af verdens webudviklere bruger font awesome ikoner.
5. Font Awesome gør det nemt at tilføje vektorikoner og sociale logoer til vores websteder.

## Hvordan bruger man font awesome ikoner?

Der er to måder, hvorpå vi kan bruge font awesome ikoner i vores webapplikationer.

1. Brug af CSS-klassesnavne
2. Ved hjælp af CSS-indholdsværdier
3. Brug af SVG-ikoner

Først skal vi tilføje font awesome icons css-filen i head-afsnittet i html-filen.

## Vis font awesome ikoner ved hjælp af CSS-klassesnavne 

Den mest almindelige måde at vise font awesome -ikoner på er ved hjælp af deres klassebetegnelser.

For hvert enkelt ikon er der på forhånd defineret et klasse-navn, og vi skal blot tilføje `fa-` til ikonnavnet som klasse.

font awesome ikoner bruger kursivt tag, dvs, `<i></i>` til at vise ikonerne 

Grunden til at bruge dette `<i>` tag som ikon er 

1. Det er kort
2. `I` stand of Icon (dog ikke i HTML-verdenen)

For at vise font awesome ikonerne ved hjælp af css-klassesnavne skal du følge nedenstående trin.

1. Tilføj et ikon-tag.
2. Tilføj ikonnavn med `fa` som præfiks til klasseattributten.
3. Derudover skal vi tilføje stilklasse, dvs. solid eller regular eller brand

Først skal vi tilføje font awesome icons css i head-sektionen af html-filen som vist nedenfor

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Jeg bruger cloudfare font awesome icons cdn link.

For at bruge det officielle font awesome CDN. Gå gennem [font awesome CDN](/fontawesome/cdn) artiklen.

Nu for at vise `facebook` font awesome ikon, brug nedenstående html-kode.

```
<i class="fab fa-facebook"></i>
```
Facebook-ikonet er en del af brand-ikoner, så jeg har tilføjet `fab` som ekstra klassebetegnelse.

For at bruge font awesome solid ikoner tilføje klassens navn som `fas`

For eksempel for at vise `barcode` ikonet skal du bruge følgende html-kode

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikon er som en del af almindelige ikoner, tilføj klassens navn som `far`

```
<i class="far fa-bookmark"></i>
```

For at bruge font awesome ikoner i Angular-applikationer skal du læse artiklen

[Sådan bruges Font Awesome-ikoner i Angular-applikationer]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Vis font awesome ikoner ved hjælp af CSS-indholdsværdier

Ovenstående fremgangsmåde kræver, at vi ændrer vores ikonklasses navne.

Hvis dit projekt er nyt, kan vi følge ovenstående fremgangsmåde 

Men hvis det er et eksisterende projekt, er det meget vanskeligt at ændre ikonklassens navn.

I dette tilfælde kan vi vise font awesome ikonerne ved hjælp af deres CSS-indholdsværdier.

Vi kan bruge CSS Pseudo-elementer elementerne `::before` eller `::after` til at vise dem.

For eksempel kan vi bruge nedenstående HTML-kode til at vise `user` -ikonet.

```
<li>
<span class="user"></span> Login
</li>
``` 

Men vores officielle font awesome brugerikon hedder `fa-user`.

Så for at vise ikonet skal du for klassen `.user` tilføje CSS-indholdskodeegenskaben `\f007`, som er unicode-værdien for `user` -ikonet.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Sammen med CSS-indholdskoden skal vi også tilføje `font` style.

Vi kan bruge font awesome foruddefinerede CSS-tilpassede egenskaber til dette formål.

For faste ikoner skal du bruge `var(--fa-font-solid)`

For almindelige ikoner bruges `var(--fa-font-regular)`

Til mærkeikoner anvendes `var(--fa-font-regular)`

Derudover kan vi tilføje en brugerdefineret klasse, som definerer nogle få almindelige CSS-egenskaber.

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
Det er det hele 

I font awesome 5 versionen er der ingen brugerdefinerede css-egenskaber 

Så vi er nødt til at tilføje `font-family` og `font-weight` css-egenskaber.

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

`font-family` og `font-weight` kan være forskellige for hvert ikon afhængigt af ikonets stil, f.eks. almindelige, faste ikoner og mærkeikoner.

[Brug font awesome Ikoner som CSS-indholdskode](/fontawesome/csscontentcode)

Hvis du vil vise font awesome ikoner ved hjælp af SVG'er, skal du læse nedenstående artikel.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Søg Font Awesome-ikoner 

Her er den komplette liste over gratis font awesome ikoner snydeblad.

Skriv ikonnavnet i nedenstående søgefelt, og kopier klassens navn og stil eller CSS-indholdskode.

Ikonerne vil blive filtreret i nedenstående tabel.

Og klik på ikonet for at kopiere html-koden.

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