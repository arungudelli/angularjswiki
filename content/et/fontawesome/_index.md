
+++
title     = "2016+ Tasuta Font Awesome Icons klassi nimekiri nimed ja nende CSS sisu väärtused"
subtitle  = "Täielik nimekiri 2016+ tasuta font awesome ikoonidest"
summary   = "See postitus sisaldab tasuta font awesome ikoonide klassi nimekirja nimesid koos nende CSS sisuväärtuse koodidega &amp; samm-sammult õpetus font awesome ikoonide kasutamiseks HTML lehtedel."
keywords  = ["font awesome ikoonid,font awesome ikoonide nimekiri,fa ikoonide nimekiri,ikoonid"]
linktitle = "Sissejuhatus"

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


See postitus sisaldab täielikku tasuta font awesome ikoonide klassi nimekirja nimed koos nende CSS sisu väärtuse koodidega &amp; samm-sammult õpetus font awesome ikoonide kasutamiseks HTML lehekülgedel.

Samuti saate otsida ja leida font awesome ikoonid, kasutades artiklis toodud [otsingukasti](#search-font-awesome-icons).

Klõpsake `Ctrl + D`, et lisada lehekülg järjehoidjale.

**Viimases font awesome 6.2.0 versioonis on 2016 tasuta ikooni**.

Eelmises font awesome 5.14 versioonis on umbes 1598 tasuta ikooni.

Sõltuvalt ikoonide stiilist on need tasuta font awesome ikoonid jagatud kolme kategooriasse 

1. font awesome tahked ikoonid
2. font awesome tavalised ikoonid
3. font awesome kaubamärgi ikoonid

Me saame <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">alla laadida</a> font awesome ikoonide css-faili ja serveerida neid teie enda serverist või me saame serveerida neid avalikest CDN-idest.

{{% alert note %}}
Samuti olen loonud [tasuta e-raamatu](#download-font-awesome-icons-list-pdf), mis sisaldab font awesome ikoonide täielikku nimekirja PDF-formaadis.
{{% /alert%}}

{{% toc %}}

## Mis on font awesome?

1. font awesome on veebi populaarseim CSS-il ja LESSil põhinev fontide ja ikoonide tööriistakomplekt.
2. font awesome on loonud Dave Gandy.
3. font awesome oli 2012. aastal githubi kõige populaarsem uus avatud lähtekoodiga projekt ja on praegu üks 10 kõige populaarsemast projektist üldse.
4. Font Awesome on praegu kasutusel 47M veebilehel ja pooled maailma veebiarendajad kasutavad font awesome ikoone.
5. Font Awesome teeb vektorikoonide ja sotsiaalsete logode lisamise meie veebilehtedele lihtsaks.

## Kuidas kasutada font awesome ikoone?

Meil on kaks võimalust kasutada font awesome ikoone oma veebirakendustes.

1. CSS-klassi nimede kasutamine
2. CSS sisu väärtuste kasutamine
3. SVG ikoonide kasutamine

Kõigepealt peame lisama font awesome ikoonide css-faili html-faili päisesse.

## Näita font awesome ikoonid CSS-klassi nimede abil 

Kõige tavalisem viis font awesome ikoonide kuvamiseks on nende klassinimede kasutamine.

Iga ikooni jaoks on klassinimi ette määratud, tuleb vaid lisada ikooni nimele klassina `fa-`.

font awesome ikoonid kasutavad kursiivis sildi, st, `<i></i>` ikoonide kuvamiseks 

Selle kasutamise põhjuseks on `<i>` sildi kasutamine ikoonina on 

1. See on lühike
2. `I` ikooni stend (aga mitte HTML maailmas)

Et kuvada font awesome ikoonid kasutades css klassi nimesid järgige samme.

1. Lisage ikooni tag.
2. Lisage klassi atribuudile ikooni nimi eesliitega `fa`.
3. Lisaks peame lisama Style klassi. st solid või regular või brand

Kõigepealt lisame font awesome ikoonide css-i html-faili head-osasse, nagu allpool näidatud

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Ma kasutan cloudfare font awesome ikoonide cdn linki.

Et kasutada ametlikku font awesome CDN. Mine läbi [font awesome CDN](/fontawesome/cdn) artikli.

Nüüd, et kuvada `facebook` font awesome ikooni, kasutage allpool toodud html-koodi.

```
<i class="fab fa-facebook"></i>
```
Facebooki ikoon on osa brändi ikoonidest, seega olen lisanud lisaklassi nimeks `fab`.

Et kasutada font awesome tahke ikoonid lisada klassi nimi kui `fas`

Näiteks `barcode` ikooni kuvamiseks kasutage järgmist html-koodi

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikoon on tavaliste ikoonide osana, lisage klassi nimi kui `far`

```
<i class="far fa-bookmark"></i>
```

 font awesome ikoonide kasutamiseks Angulari rakendustes vaadake läbi artikkel

[Kuidas kasutada Font Awesome ikoonid Angular rakendustes]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Näita font awesome ikoone CSS-i sisuväärtuste abil

Ülaltoodud lähenemine nõuab, et me muudaksime oma ikooniklassi nimesid.

Kui teie projekt on uus, siis võime järgida ülaltoodud lähenemist 

Kuid kui tegemist on olemasoleva projektiga, on ikooniklassi nime muutmine väga keeruline.

Sellisel juhul saame kuvada font awesome ikoonid kasutades nende CSS sisu väärtusi.

Nende kuvamiseks saame kasutada CSS Pseudoelementide elementide funktsioone `::before` või `::after`.

Näiteks `user` ikooni kuvamiseks võisime kasutada allpool olevat HTML-koodi.

```
<li>
<span class="user"></span> Login
</li>
``` 

Aga meie ametlik font awesome kasutaja ikooni nimi on `fa-user`.

Nii et ikooni kuvamiseks tuleb klassile `.user` lisada CSS sisu koodiomandiks `\f007`, mis on ikooni `user` unicode väärtus.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Koos CSS sisukoodiga peame lisama ka `font` stiili.

Selleks saame kasutada font awesome ettemääratud CSS kohandatud omadusi.

Tahkete ikoonide jaoks kasutage `var(--fa-font-solid)`

Tavaliste ikoonide jaoks kasutage `var(--fa-font-regular)`

Markiikoonide puhul kasutage `var(--fa-font-regular)`

Lisaks sellele saame lisada kohandatud klassi, mis määratleb mõned tavalised CSS omadused.

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
See ongi kõik 

 font awesome 5 versioonis ei ole kohandatud css-omadusi 

Seega peame lisama `font-family` ja `font-weight` css omadused.

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

`font-family` ja `font-weight` võivad olla iga ikooni jaoks erinevad, sõltuvalt ikooni stiilist, nagu tavalised, tahked ja kaubamärgiga ikoonid.

[Kasutage font awesome ikoonid CSS sisukoodina](/fontawesome/csscontentcode)

Et kuvada font awesome ikoonid kasutades SVG's minna mõtlesin allpool artiklis.

[Font Awesome SVG ikoonide nimekiri, kasutamine, CSS ja allalaadimine](/fontawesome/svg/)

## Otsi Font Awesome Icons 

Siin on täielik loetelu tasuta font awesome ikoonide petuskeemidest.

Sisestage ikooni nimi allpool olevasse otsingukasti ja kopeerige klassi nimi ja stiil või CSS-sisu kood.

Ikoonid filtreeritakse allolevasse tabelisse.

Ja klõpsake ikoonil, et kopeerida html-kood.

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