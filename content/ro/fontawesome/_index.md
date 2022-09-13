
+++
title     = "2016+ Free Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Lista completă a 2016+ free font awesome icons"
summary   = "Această postare conține lista de nume de clase de icoane gratuite font awesome cu codurile lor de valori de conținut CSS și un tutorial pas cu pas pentru a utiliza font awesome icoane în paginile HTML."
keywords  = ["font awesome icoane,font awesome lista de icoane, lista de icoane fa, icoane"]
linktitle = "Introducere"

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


Această postare conține complet gratuit font awesome icoane lista de nume de clasă cu codurile lor de valoare de conținut CSS &amp; pas cu pas tutorial pentru a utiliza font awesome icoane în paginile HTML.

Și, de asemenea, puteți căuta și găsi font awesome icoane folosind [caseta de căutare](#search-font-awesome-icons) furnizată în articol.

Faceți clic pe `Ctrl + D` pentru a marca pagina.

**În cea mai recentă versiune font awesome 6.2.0, există 2016 pictograme gratuite**.

În versiunea anterioară font awesome 5.14 avem aproximativ 1598 de pictograme gratuite.

În funcție de stilul pictogramei, aceste pictograme gratuite font awesome sunt împărțite în trei categorii 

1. font awesome pictograme solide
2. font awesome pictograme obișnuite
3. font awesome pictograme de marcă

Putem <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">descărca</a> fișierul font awesome iconițe css și le putem servi de pe propriul server sau le putem servi de pe CDN-uri publice.

{{% alert note %}}
Și, de asemenea, am creat un [free ebook](#download-font-awesome-icons-list-pdf) care conține lista completă a font awesome icons în format PDF.
{{% /alert%}}

{{% toc %}}

## Ce este font awesome?

1. font awesome este cel mai popular set de instrumente de fonturi și pictograme de pe web, bazat pe CSS și LESS.
2. font awesome este creat de Dave Gandy.
3. font awesome a fost cel mai popular proiect open source nou de pe github în 2012 și este în prezent unul dintre primele 10 proiecte în general.
4. Font Awesome este în prezent live pe 47M de site-uri web și jumătate dintre dezvoltatorii web din lume folosesc font awesome icoane.
5. Font Awesome facilitează adăugarea de pictograme vectoriale și logo-uri sociale pe site-urile noastre web.

## Cum se utilizează font awesome icons?

Există două moduri în care putem folosi font awesome icoane în aplicațiile noastre web.

1. Folosind numele de clasă CSS
2. Folosind valorile de conținut CSS
3. Utilizarea pictogramelor SVG

Mai întâi trebuie să adăugăm fișierul css font awesome icons în secțiunea head a fișierului html.

## Afișați font awesome icoane folosind nume de clase CSS 

Cel mai comun mod de afișare a pictogramelor font awesome este utilizarea numelor de clasă ale acestora.

Pentru fiecare pictogramă este predefinit un nume de clasă, trebuie doar să adăugăm `fa-` la numele pictogramei ca și clasă.

font awesome pictogramele utilizează eticheta italic, adică, `<i></i>` pentru a afișa pictogramele 

Motivul pentru care se folosește această `<i>` ca pictogramă este 

1. Este scurt
2. `I` stand de pictogramă (nu în lumea HTML, deși)

Pentru a afișa pictogramele font awesome folosind nume de clase css, urmați pașii.

1. Adăugați un tag icon.
2. Adăugați numele pictogramei cu prefixul `fa` la atributul class.
3. În plus, trebuie să adăugăm Style class, adică solid sau regular sau brand

Mai întâi vom adăuga css-ul font awesome icons în secțiunea head a fișierului html, așa cum se arată mai jos

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Eu folosesc cloudfare font awesome icons cdn link.

Pentru a utiliza oficial font awesome CDN. Accesați articolul [font awesome CDN](/fontawesome/cdn).

Acum, pentru a afișa `facebook` font awesome icon, utilizați codul html de mai jos.

```
<i class="fab fa-facebook"></i>
```
Pictograma Facebook face parte din pictogramele de marcă, așa că am adăugat `fab` ca nume de clasă suplimentară.

Pentru a utiliza font awesome iconițe solide, adăugați numele clasei ca `fas`

De exemplu, pentru a afișa pictograma `barcode`, utilizați următorul cod html

```
<i class="fas fa-barcode"></i>
```
`bookmark` icon face parte din pictogramele obișnuite, adăugați numele clasei ca `far`

```
<i class="far fa-bookmark"></i>
```

Pentru a utiliza font awesome în aplicațiile Angular, consultați articolul

[Cum se utilizează pictogramele Font Awesome în aplicațiile Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Afișați font awesome pictograme folosind valorile de conținut CSS

Abordarea de mai sus ne cere să schimbăm numele claselor de pictograme.

Dacă proiectul dvs. este nou, atunci putem urma abordarea de mai sus 

Dar dacă este un proiect existent, este foarte dificil să schimbăm numele clasei de pictograme.

În acest caz, putem afișa pictogramele font awesome utilizând valorile de conținut CSS ale acestora.

Putem utiliza caracteristicile elementelor CSS Pseudo-elemente `::before` sau `::after` pentru a le afișa.

De exemplu, pentru a afișa pictograma `user`, am fi putut utiliza codul HTML de mai jos.

```
<li>
<span class="user"></span> Login
</li>
``` 

Dar numele oficial al pictogramei noastre font awesome este `fa-user`.

Deci, pentru a afișa pictograma, pentru clasa `.user` adăugați proprietatea CSS content code ca `\f007`, care este valoarea unicode pentru pictograma `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Împreună cu codul de conținut CSS, trebuie să adăugăm și stilul `font`.

Pentru aceasta, putem utiliza font awesome proprietăți CSS predefinite personalizate.

Pentru pictogramele solide, utilizați `var(--fa-font-solid)`

Pentru pictogramele obișnuite, utilizați `var(--fa-font-regular)`

Pentru pictograme de marcă folosiți `var(--fa-font-regular)`

În plus, putem adăuga o clasă personalizată care definește câteva proprietăți CSS comune.

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
Asta este tot 

În versiunea font awesome 5 nu există proprietăți css personalizate 

Așa că trebuie să adăugăm proprietățile css `font-family` și `font-weight`.

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

`font-family` și `font-weight` ar putea fi diferite pentru fiecare pictogramă în funcție de stilul pictogramei, cum ar fi pictogramele normale, solide și de marcă.

[Utilizați font awesome Icoane ca și cod de conținut CSS](/fontawesome/csscontentcode)

Pentru a afișa font awesome pictograme folosind SVG, consultați articolul de mai jos.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Căutați pictograme Font Awesome 

Aici este lista completă de iconițe gratuite font awesome cheat sheet.

Tastați numele pictogramei în căsuța de căutare de mai jos și copiați numele clasei și stilul sau codul de conținut CSS.

Icoanele vor fi filtrate în tabelul de mai jos.

Și faceți clic pe pictogramă pentru a copia codul html.

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