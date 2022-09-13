
+++
title     = "2016+ Bezmaksas Font Awesome ikonu klases nosaukumu saraksts un to CSS satura vērtības"
subtitle  = "Pilns 2016+ bezmaksas font awesome ikonu saraksts"
summary   = "Šajā rakstā ir ietverti bezmaksas font awesome ikonu klašu sarakstu nosaukumi ar to CSS satura vērtību kodiem &amp; soli pa solim pamācība, lai izmantotu font awesome ikonas HTML lapās."
keywords  = ["font awesome ikonas,font awesome ikonu saraksts,fa ikonu saraksts,ikonas"]
linktitle = "Ievads"

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


Šajā rakstā ir ietverti pilnīgi bezmaksas font awesome ikonu klašu sarakstu nosaukumi ar to CSS satura vērtības kodiem un soli pa solim pamācība, lai izmantotu font awesome ikonas HTML lapās.

Un arī jūs varat meklēt un atrast font awesome ikonas, izmantojot rakstā sniegto [meklēšanas lodziņu](#search-font-awesome-icons).

Noklikšķiniet uz `Ctrl + D`, lai atzīmētu lapu.

**Jaunākajā font awesome 6.2.0 versijā ir pieejamas 2016 bezmaksas ikonas**.

Iepriekšējā font awesome 5.14 versijā ir aptuveni 1598 bezmaksas ikonas.

Atkarībā no ikonu stila šīs bezmaksas font awesome ikonas iedalītas trīs kategorijās 

1. font awesome cietās ikonas
2. font awesome parastās ikonas
3. font awesome zīmola ikonas

Mēs varam <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">lejupielādēt</a> font awesome ikonas css failu un pasniegt tās no jūsu servera Vai arī mēs varam pasniegt tās no publiskiem CDN.

{{% alert piezīme %}}
Esmu izveidojis arī [bezmaksas e-grāmatu](#download-font-awesome-icons-list-pdf), kurā ir pilns font awesome ikonu saraksts PDF formātā.
{{% /alert%}}

{{% toc %}}

## Kas ir font awesome?

1. font awesome ir tīmekļa populārākais fontu un ikonu rīku komplekts, kas balstīts uz CSS un LESS.
2. font awesome ir radījis Dave Gandy.
3. font awesome 2012. gadā bija github populārākais jaunais atvērtā pirmkoda projekts, un pašlaik ir viens no 10 populārākajiem projektiem kopumā.
4. Font Awesome pašlaik ir pieejams 47 miljonos tīmekļa vietņu, un puse pasaules tīmekļa izstrādātāju izmanto font awesome ikonas.
5. Font Awesome ļauj viegli pievienot mūsu vietnēm vektoru ikonas un sociālos logotipus.

## Kā lietot font awesome ikonas?

Ir divi veidi, kā mēs varam izmantot font awesome ikonas savās tīmekļa lietojumprogrammās.

1. Izmantojot CSS klašu nosaukumus
2. Izmantojot CSS satura vērtības
3. SVG ikonu izmantošana

Vispirms mums ir nepieciešams pievienot font awesome ikonas css failu html faila galvenes sadaļā.

## Parādiet font awesome ikonas, izmantojot CSS klases nosaukumus 

Visizplatītākais veids, kā parādīt font awesome ikonas, ir izmantot to klašu nosaukumus.

Katrai ikonai ir iepriekš definēts klases nosaukums, mums tikai jāpievieno `fa-` ikonas nosaukumam kā klase.

font awesome ikonas izmanto slīprakstu, t. i., `<i></i>` lai attēlotu ikonas 

Iemesls, kādēļ tiek izmantota šī `<i>` tagu kā ikonu ir 

1. Tā ir īsa
2. `I` ikonas statīvs (ne HTML pasaulē)

Lai parādītu font awesome ikonas, izmantojot css klases nosaukumus, izpildiet šos soļus.

1. Pievienojiet ikonas tagu.
2. Pievienojiet ikonas nosaukumu ar prefiksu `fa` klases atribūtā.
3. Papildus jāpievieno stila klase, t. i., solid, regular vai brand

Vispirms mēs pievienosim font awesome ikonas css html faila galvenes sadaļā, kā parādīts tālāk

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Es izmantoju cloudfare font awesome ikonas cdn saiti.

Lai izmantotu oficiālo font awesome CDN. Iet caur [font awesome CDN](/fontawesome/cdn) rakstu.

Tagad, lai parādītu `facebook` font awesome ikonu, izmantojiet tālāk norādīto html kodu.

```
<i class="fab fa-facebook"></i>
```
Facebook ikona ir daļa no zīmola ikonām, tāpēc esmu pievienojis `fab` kā papildu klases nosaukumu.

Lai izmantotu font awesome cietās ikonas, pievienojiet klases nosaukumu kā `fas`

Piemēram, lai parādītu `barcode` ikonu, izmantojiet šādu html kodu

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikona ir daļa no parastajām ikonām, pievienojiet klases nosaukumu kā `far`

```
<i class="far fa-bookmark"></i>
```

Lai izmantotu font awesome ikonas Angular lietojumprogrammās, skatiet rakstu

[Kā lietot Font Awesome ikonas Angular lietojumprogrammās]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Parādiet font awesome ikonas, izmantojot CSS satura vērtības

Izmantojot iepriekš minēto pieeju, mums ir jāmaina ikonu klašu nosaukumi.

Ja jūsu projekts ir jauns, mēs varam izmantot iepriekš minēto pieeju 

Bet, ja tas ir jau esošs projekts, ir ļoti grūti mainīt ikonu klases nosaukumu.

Šādā gadījumā mēs varam attēlot font awesome ikonas, izmantojot to CSS satura vērtības.

To attēlošanai varam izmantot CSS pseidoelementu elementu funkcijas `::before` vai `::after`.

Piemēram, lai attēlotu ikonu `user`, mēs varētu izmantot tālāk norādīto HTML kodu.

```
<li>
<span class="user"></span> Login
</li>
``` 

Bet mūsu oficiālais font awesome lietotāja ikonas nosaukums ir `fa-user`.

Tāpēc, lai parādītu ikonu, `.user` klasei pievienojiet CSS satura koda īpašību kā `\f007`, kas ir `user` ikonas unikoda vērtība.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Kopā ar CSS satura kodu mums jāpievieno arī `font` stils.

Šim nolūkam mēs varam izmantot font awesome iepriekš definētās CSS pielāgotās īpašības.

Cietām ikonām izmantojiet `var(--fa-font-solid)`

Parastām ikonām izmantojiet `var(--fa-font-regular)`

Zīmola ikonām izmantojiet `var(--fa-font-regular)`

Papildus tam mēs varam pievienot pielāgotu klasi, kas definē dažas kopīgas CSS īpašības.

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
Tas ir viss 

 font awesome 5 versijā nav pielāgotu css īpašību 

Tāpēc mums ir jāpievieno `font-family` un `font-weight` css īpašības.

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

`font-family` un `font-weight` katrai ikonai var būt atšķirīgas atkarībā no ikonas stila, piemēram, parastās, cietās un zīmola ikonas.

[Izmantojiet font awesome ikonas kā CSS satura kodu](/fontawesome/csscontentcode)

Lai parādītu font awesome ikonas, izmantojot SVG, apmeklējiet zemāk redzamo rakstu.

[Font Awesome SVG ikonu saraksts, lietošana, CSS un lejupielāde](/fontawesome/svg/)

## Meklēt Font Awesome ikonas 

Šeit ir pilns bezmaksas font awesome ikonu saraksts.

Ierakstiet ikonas nosaukumu zemāk esošajā meklēšanas lodziņā un nokopējiet klases nosaukumu un stila vai CSS satura kodu.

Ikonas tiks filtrētas tālāk redzamajā tabulā.

Un noklikšķiniet uz ikonas, lai kopētu html kodu.

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