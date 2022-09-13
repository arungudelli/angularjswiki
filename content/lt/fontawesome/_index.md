
+++
title     = "2016+ Nemokamas Font Awesome piktogramų klasių sąrašas Pavadinimai ir jų CSS turinio vertės"
subtitle  = "Išsamus 2016+ nemokamų font awesome piktogramų sąrašas"
summary   = "Šiame pranešime pateikiami nemokamų font awesome piktogramų klasių sąrašo pavadinimai su jų CSS turinio vertės kodais ir žingsnis po žingsnio pamoka, kaip naudoti font awesome piktogramas HTML puslapiuose."
keywords  = ["font awesome piktogramos,font awesome piktogramų sąrašas,fa piktogramų sąrašas,piktogramos"]
linktitle = "Įvadas"

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


Šiame pranešime pateikiami visi nemokami font awesome piktogramų klasės sąrašo pavadinimai su jų CSS turinio vertės kodais ir žingsnis po žingsnio pamoka, kaip naudoti font awesome piktogramas HTML puslapiuose.

Taip pat galite ieškoti ir rasti font awesome piktogramų naudodamiesi straipsnyje pateiktu [paieškos langeliu] (#search-font-awesome-icons).

Spustelėkite `Ctrl + D`, jei norite pažymėti puslapį.

** Naujausioje font awesome 6.2.0 versijoje yra 2016 nemokamų piktogramų**.

Ankstesnėje font awesome 5.14 versijoje turime apie 1598 nemokamas piktogramas.

Atsižvelgiant į piktogramų stilių, šios nemokamos font awesome piktogramos suskirstytos į tris kategorijas 

1. font awesome vientisos piktogramos
2. font awesome įprastos piktogramos
3. font awesome prekės ženklo piktogramos

Galime <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">atsisiųsti</a> font awesome piktogramų css failą ir pateikti juos iš jūsų serverio arba galime pateikti juos iš viešųjų CDN.

{{% alert note %}}
Taip pat sukūriau [nemokamą elektroninę knygą] (#download-font-awesome-icons-list-pdf), kurioje yra visas font awesome piktogramų sąrašas PDF formatu.
{{% /alert%}}

{{% toc %}}

## Kas yra font awesome?

1. font awesome tai populiariausias žiniatinklio šriftų ir piktogramų įrankių rinkinys, pagrįstas CSS ir LESS.
2. font awesome sukūrė Dave'as Gandy.
3. font awesome 2012 m. buvo populiariausias github naujas atvirojo kodo projektas, o šiuo metu apskritai yra vienas iš 10 populiariausių projektų.
4. Šiuo metu "Font Awesome" veikia 47 mln. svetainių, o pusė pasaulio žiniatinklio kūrėjų naudoja font awesome piktogramas.
5. Font Awesome leidžia lengvai pridėti vektorines piktogramas ir socialinių tinklų logotipus į mūsų svetaines.

## Kaip naudoti font awesome piktogramas?

Yra du būdai, kaip galime naudoti font awesome piktogramas savo žiniatinklio programose.

1. Naudojant CSS klasių pavadinimus
2. Naudojant CSS turinio reikšmes
3. SVG piktogramų naudojimas

Pirmiausia turime pridėti font awesome piktogramų css failą į html failo antraštės skyrių.

## font awesome piktogramas rodykite naudodami CSS klasių pavadinimus 

Labiausiai paplitęs font awesome piktogramų rodymo būdas - naudoti jų klasių pavadinimus.

Kiekvienai piktogramai iš anksto nustatytas klasės pavadinimas, tereikia prie piktogramos pavadinimo pridėti `fa-` kaip klasę.

font awesome piktogramos naudoja kursyvo žymą, t. y., `<i></i>` piktogramoms rodyti 

Tokio naudojimo priežastis `<i>` žyma kaip piktograma yra 

1. Ji trumpa
2. `I` piktogramos stendas (tačiau ne HTML pasaulyje)

Norėdami rodyti font awesome piktogramas naudodami css klasių pavadinimus, atlikite šiuos veiksmus.

1. Pridėkite piktogramos žymą.
2. Į klasės atributą pridėkite piktogramos pavadinimą su priešdėliu `fa`.
3. Be to, turime pridėti Stiliaus klasę, t. y. Solid (vientisa), Regular (įprasta) arba Brand (prekės ženklas)

Pirmiausia pridėsime font awesome piktogramų css į html failo head skyrių, kaip parodyta toliau

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Aš naudoju cloudfare font awesome piktogramų cdn nuorodą.

Norėdami naudoti oficialų font awesome CDN. Peržiūrėkite [font awesome CDN](/fontawesome/cdn) straipsnį.

Dabar, norėdami rodyti `facebook` font awesome piktogramą, naudokite toliau pateiktą html kodą.

```
<i class="fab fa-facebook"></i>
```
"Facebook" piktograma yra prekės ženklo piktogramų dalis, todėl kaip papildomą klasės pavadinimą pridėjau `fab`.

Norėdami naudoti font awesome kietąsias piktogramas, pridėkite tokį klasės pavadinimą `fas`

Pavyzdžiui, norėdami rodyti `barcode` piktogramą, naudokite šį html kodą

```
<i class="fas fa-barcode"></i>
```
`bookmark` piktograma yra įprastų piktogramų dalis, pridėkite klasės pavadinimą kaip `far`

```
<i class="far fa-bookmark"></i>
```

Norėdami naudoti font awesome piktogramas "Angular" programose, perskaitykite straipsnį

[Kaip naudoti "Font Awesome" piktogramas "Angular" programose]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Rodykite font awesome piktogramas naudodami CSS turinio reikšmes

Pagal pirmiau pateiktą metodą turime pakeisti piktogramų klasių pavadinimus.

Jei jūsų projektas yra naujas, tuomet galime vadovautis pirmiau nurodytu metodu 

Tačiau jei tai jau egzistuojantis projektas, labai sunku pakeisti piktogramų klasės pavadinimą.

Tokiu atveju galime rodyti font awesome piktogramas naudodami jų CSS turinio reikšmes.

Joms rodyti galime naudoti CSS pseudoelementų elementų funkcijas `::before` arba `::after`.

Pavyzdžiui, norėdami rodyti `user` piktogramą, galėtume naudoti toliau pateiktą HTML kodą.

```
<li>
<span class="user"></span> Login
</li>
``` 

Tačiau mūsų oficialus font awesome naudotojo piktogramos pavadinimas yra `fa-user`.

Taigi, norėdami rodyti piktogramą, `.user` klasei pridėkite CSS turinio kodo savybę kaip `\f007`, kuri yra `user` piktogramos unikodo reikšmė.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Kartu su CSS turinio kodu turime pridėti ir `font` stilių.

Tam galime naudoti font awesome iš anksto nustatytas CSS pasirinktines savybes.

Tvirtų piktogramų atveju naudokite `var(--fa-font-solid)`

Paprastoms piktogramoms naudokite `var(--fa-font-regular)`

Prekės ženklo piktogramoms naudokite `var(--fa-font-regular)`

Be to, galime pridėti pasirinktinę klasę, kuri apibrėžia keletą bendrų CSS savybių.

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
Štai ir viskas 

 font awesome 5 versijoje nėra pasirinktinių css savybių 

Taigi turime pridėti `font-family` ir `font-weight` css savybes.

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

`font-family` ir `font-weight` gali būti skirtingos kiekvienai piktogramai, priklausomai nuo piktogramos stiliaus, pavyzdžiui, įprastos, kietos ir prekės ženklo piktogramos.

[Naudokite font awesome piktogramas kaip CSS turinio kodą](/fontawesome/csscontentcode)

Norėdami rodyti font awesome piktogramas naudodami SVG, eikite pagalvoti į toliau pateiktą straipsnį.

[Font Awesome SVG piktogramų sąrašas, naudojimas, CSS ir atsisiuntimas](/fontawesome/svg/)

## Ieškoti nuostabių šrifto piktogramų 

Čia pateikiamas visas nemokamų font awesome piktogramų cheat sheet sąrašas.

Toliau esančiame paieškos laukelyje įveskite piktogramos pavadinimą ir nukopijuokite klasės pavadinimą bei stiliaus arba CSS turinio kodą.

Piktogramos bus filtruojamos toliau pateiktoje lentelėje.

Ir spustelėkite piktogramą, kad nukopijuotumėte html kodą.

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