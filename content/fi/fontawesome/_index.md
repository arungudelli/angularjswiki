
+++
title     = "2016+ Free Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Täydellinen luettelo 2016+ ilmaisista font awesome kuvakkeista"
summary   = "Tämä viesti sisältää ilmaiset font awesome kuvakkeiden luokkaluettelon nimet CSS-sisältöarvokoodeineen &amp; askel askeleelta ohjeen font awesome kuvakkeiden käyttämiseen HTML-sivuilla."
keywords  = ["font awesome kuvakkeet,font awesome kuvakkeiden luettelo,fa kuvakkeiden luettelo,kuvakkeet"]
linktitle = "Johdanto"

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


Tämä viesti sisältää täydellisen ilmaisen font awesome kuvakkeiden luokan luettelon nimet niiden CSS-sisältöarvokoodeineen ja askel askeleelta ohjeen käyttää font awesome kuvakkeita HTML-sivuilla.

Voit myös etsiä ja löytää font awesome kuvakkeita käyttämällä [hakukenttää](#search-font-awesome-icons), joka on annettu artikkelissa.

Klikkaa `Ctrl + D` sivun kirjanmerkiksi.

**Uudemmassa font awesome 6.2.0-versiossa on 2016 ilmaista kuvaketta**.

Edellisessä font awesome 5.14-versiossa on noin 1598 ilmaista kuvaketta.

Ikonityylistä riippuen nämä ilmaiset font awesome -kuvakkeet on jaettu kolmeen luokkaan 

1. font awesome kiinteät kuvakkeet
2. font awesome tavalliset kuvakkeet
3. font awesome brändikuvakkeet

Voimme <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">ladata</a> font awesome kuvakkeet css-tiedoston ja palvella niitä omalta palvelimeltasi tai voimme palvella niitä julkisista CDN:istä.

{{% alert note %}}
Lisäksi olen luonut [ilmaisen e-kirjan](#download-font-awesome-icons-list-pdf), joka sisältää täydellisen luettelon font awesome kuvakkeista PDF-muodossa.
{{% /alert%}}

{{% toc %}}

## Mikä on font awesome?

1. font awesome on webin suosituin CSS:ään ja LESSiin perustuva fontti- ja kuvaketyökalupakki.
2. font awesome on Dave Gandyn luoma.
3. font awesome oli githubin suosituin uusi avoimen lähdekoodin projekti vuonna 2012 ja on tällä hetkellä yksi 10 suosituimman projektin joukossa.
4. Font Awesome on tällä hetkellä käytössä 47M verkkosivustolla ja puolet maailman web-kehittäjistä käyttää font awesome -kuvakkeita.
5. Font Awesome tekee vektorikuvakkeiden ja sosiaalisten logojen lisäämisestä verkkosivuillemme helppoa.

## Kuinka käyttää font awesome kuvakkeita?

Voimme käyttää font awesome -kuvakkeita verkkosovelluksissamme kahdella tavalla.

1. CSS-luokkien nimien käyttäminen
2. CSS-sisältöarvojen käyttäminen
3. SVG-kuvakkeiden käyttäminen

Ensin meidän on lisättävä font awesome kuvakkeet css-tiedosto html-tiedoston head-osioon.

## Näytä font awesome -kuvakkeet CSS-luokkien nimien avulla 

Yleisin tapa näyttää font awesome -kuvakkeet on käyttää niiden luokkanimiä.

Jokaiselle kuvakkeelle on ennalta määritetty luokkanimi, meidän tarvitsee vain liittää `fa-` kuvakkeen nimeen luokkana.

font awesome kuvakkeet käyttävät kursiivia eli, `<i></i>` kuvakkeiden näyttämiseen 

Syy tämän `<i>` tagia kuvakkeena on 

1. Se on lyhyt
2. `I` kuvakkeen jalusta (ei kuitenkaan HTML-maailmassa)

Voit näyttää font awesome -kuvakkeet käyttämällä css-luokkien nimiä seuraavasti.

1. Lisää ikonitunniste.
2. Lisää kuvakkeen nimi etuliitteellä `fa` luokka-attribuuttiin.
3. Lisäksi on lisättävä Style-luokka, esimerkiksi solid tai regular tai brand

Lisäämme ensin font awesome kuvakkeiden css:n html-tiedoston head-osioon alla esitetyllä tavalla

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Käytän cloudfare font awesome kuvakkeet cdn-linkkiä.

Käytä virallista font awesome CDN. Käy läpi [font awesome CDN](/fontawesome/cdn) artikkeli.

Nyt näyttää `facebook` font awesome kuvaketta, käytä alla olevaa html-koodia.

```
<i class="fab fa-facebook"></i>
```
Facebook-kuvake on osa brändikuvakkeita, joten olen lisännyt `fab` lisäluokan nimeksi.

Jos haluat käyttää font awesome kiinteitä kuvakkeita, lisää luokkanimi muotoon `fas`

Jos haluat esimerkiksi näyttää `barcode` -kuvakkeen, käytä seuraavaa html-koodia

```
<i class="fas fa-barcode"></i>
```
`bookmark` kuvake on osa tavallisia kuvakkeita, lisää luokan nimi kuten `far`

```
<i class="far fa-bookmark"></i>
```

Käyttääksesi font awesome kuvakkeita Angular-sovelluksissa käy läpi artikkeli

[Kuinka käyttää Font Awesome -kuvakkeita Angular-sovelluksissa]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Näytä font awesome -kuvakkeet CSS-sisältöarvojen avulla

Yllä oleva lähestymistapa edellyttää, että muutamme kuvakkeiden luokkien nimiä.

Jos projektisi on uusi, voimme noudattaa edellä mainittua lähestymistapaa 

Mutta jos kyseessä on olemassa oleva projekti, kuvakeluokan nimen muuttaminen on hyvin vaikeaa.

Tässä tapauksessa voimme näyttää font awesome -kuvakkeet käyttämällä niiden CSS-sisältöarvoja.

Voimme käyttää CSS-pseudoelementtien elementtien ominaisuuksia `::before` tai `::after` niiden näyttämiseen.

Esimerkiksi näyttääksemme `user` kuvakkeen, olisimme voineet käyttää alla olevaa HTML-koodia.

```
<li>
<span class="user"></span> Login
</li>
``` 

Mutta virallinen font awesome käyttäjän kuvakkeen nimi on `fa-user`.

Jotta kuvake voidaan näyttää, luokkaan `.user` lisätään CSS-sisällön koodiominaisuus `\f007`, joka on `user` -kuvakkeen unicode-arvo.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

CSS-sisältökoodin lisäksi meidän on lisättävä myös `font` -tyyli.

Voimme käyttää siihen font awesome valmiita mukautettuja CSS-ominaisuuksia.

Kiinteitä kuvakkeita varten käytetään `var(--fa-font-solid)`

Tavallisiin kuvakkeisiin käytetään `var(--fa-font-regular)`

Merkkikuvakkeille käytä `var(--fa-font-regular)`

Tämän lisäksi voimme lisätä mukautetun luokan, joka määrittelee muutamia yleisiä CSS-ominaisuuksia.

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
Siinä kaikki 

 font awesome 5 -versiossa ei ole mukautettuja css-ominaisuuksia 

Joten meidän on lisättävä `font-family` ja `font-weight` css-ominaisuudet.

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

`font-family` ja `font-weight` voivat olla erilaisia jokaiselle kuvakkeelle riippuen kuvakkeen tyylistä, kuten tavalliset, kiinteät ja brändikuvakkeet.

[Käytä font awesome kuvakkeita CSS-sisältökoodina](/fontawesome/csscontentcode)

Voit näyttää font awesome kuvakkeet käyttäen SVG: n mennä ajatellut alla olevassa artikkelissa.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Etsi Font Awesome -kuvakkeita 

Tässä on täydellinen luettelo ilmaisista font awesome kuvakkeiden huijauslista.

Kirjoita kuvakkeen nimi alla olevaan hakukenttään ja kopioi luokan nimi ja tyyli tai CSS-sisältökoodi.

Kuvakkeet suodatetaan alla olevaan taulukkoon.

Ja klikkaa kuvaketta kopioidaksesi html-koodin.

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