
+++
title     = "2016+ Free Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Kompletna lista 2016+ darmowych ikon font awesome "
summary   = "Ten post zawiera darmowe font awesome icons class list names with their CSS content value codes &amp; step by step tutorial to use font awesome icons in HTML pages."
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "Wstęp"

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


Ten post zawiera kompletne darmowe font awesome nazwy list klas ikon z ich kodami wartości zawartości CSS &amp; tutorial krok po kroku, aby użyć font awesome ikon w stronach HTML.

Możesz również wyszukać i znaleźć font awesome ikony używając [pola wyszukiwania](#search-font-awesome-icons) podanego w artykule.

Kliknij `Ctrl + D` aby dodać stronę do zakładek.

**W najnowszej wersji font awesome 6.2.0 znajduje się 2016 darmowych ikon**.

W poprzedniej wersji font awesome 5.14 mamy około 1598 darmowych ikon.

W zależności od stylu ikon, te darmowe font awesome ikony podzielone na trzy kategorie 

1. font awesome ikony jednolite
2. font awesome ikony zwykłe
3. font awesome ikony marek

Możemy <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">pobrać</a> plik font awesome icons css i serwować je z własnego serwera Lub możemy serwować je z publicznych CDN.

{{% alert note %}}
A także stworzyłem [darmowy ebook](#download-font-awesome-icons-list-pdf), który zawiera pełną listę font awesome ikon w formacie PDF.
{{% /alert%}}

{{% toc %}}

## Co to jest font awesome?

1. font awesome to najpopularniejszy w sieci zestaw narzędzi do tworzenia czcionek i ikon oparty na CSS i LESS.
2. font awesome został stworzony przez Dave'a Gandy'ego.
3. font awesome był najpopularniejszym nowym projektem open source na githubie w 2012 roku i obecnie jest jednym z 10 najlepszych projektów w ogóle.
4. Font Awesome jest obecnie na 47M stron internetowych, a połowa światowych twórców stron internetowych używa ikon font awesome.
5. Font Awesome ułatwia dodawanie wektorowych ikon i logotypów społecznościowych do naszych stron internetowych.

## Jak używać font awesome ikon?

Istnieją dwa sposoby, na które możemy wykorzystać ikony font awesome w naszych aplikacjach internetowych.

1. Używając nazw klas CSS
2. Używając wartości zawartości CSS
3. Używanie ikon SVG

Najpierw musimy dodać plik font awesome icons css w sekcji head pliku html.

## Wyświetlamy ikony font awesome używając nazw klas CSS 

Najczęstszym sposobem wyświetlania ikon font awesome jest używanie nazw ich klas.

Dla każdej ikony jest predefiniowana nazwa klasy, wystarczy, że do nazwy ikony dodamy `fa-` jako class.

font awesome ikony używają znacznika italic tj, `<i></i>` aby wyświetlić ikony 

Powodem użycia tego `<i>` jako ikony jest 

1. Jest to krótki
2. `I` stojak Ikony (nie w świecie HTML)

Aby wyświetlić ikony font awesome przy użyciu nazw klas css, wykonaj następujące kroki.

1. Dodaj znacznik ikony.
2. Dodaj nazwę ikony poprzedzoną `fa` do atrybutu class.
3. Dodatkowo musimy dodać klasę Style. tj. solid lub regular lub brand

Najpierw dodamy css ikony font awesome w sekcji head pliku html, jak pokazano poniżej

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Używam cloudfare font awesome icons cdn link.

Aby użyć oficjalnego font awesome CDN. Przejdź przez artykuł [font awesome CDN](/fontawesome/cdn).

Teraz, aby wyświetlić `facebook` font awesome ikonę, użyj poniższego kodu html.

```
<i class="fab fa-facebook"></i>
```
Ikona Facebooka jest częścią ikony marki, więc dodałem `fab` jako dodatkową nazwę klasy.

Aby użyć font awesome solid icons dodaj nazwę klasy jako `fas`

Na przykład, aby wyświetlić ikonę `barcode` użyj następującego kodu html

```
<i class="fas fa-barcode"></i>
```
`bookmark` ikona jest częścią zwykłych ikon, dodaj nazwę klasy jako `far`

```
<i class="far fa-bookmark"></i>
```

Aby użyć ikon font awesome w aplikacjach Angulara przejdź przez artykuł

[How To Use Font Awesome icons in Angular Applications]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Wyświetl ikony font awesome używając wartości zawartości CSS

Powyższe podejście wymaga od nas zmiany nazw klas naszych ikon.

Jeśli Twój projekt jest nowy to możemy zastosować powyższe podejście 

Ale jeśli jest to istniejący projekt, to bardzo trudno jest zmienić nazwę klasy ikony.

W tym przypadku możemy wyświetlić ikony font awesome używając ich wartości zawartości CSS.

Możemy użyć cech elementów CSS Pseudoelements `::before` lub `::after`, aby je wyświetlić.

Na przykład, aby wyświetlić ikonę `user`, moglibyśmy użyć poniższego kodu HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Ale nasza oficjalna nazwa ikony użytkownika font awesome to `fa-user`.

Więc aby wyświetlić ikonę, dla klasy `.user` dodaj właściwość CSS content code jako `\f007`, która jest wartością unicode dla ikony `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Wraz z kodem zawartości CSS, musimy dodać również styl `font`.

Możemy użyć do tego font awesome predefiniowanych właściwości CSS.

Dla solidnych ikonek użyj `var(--fa-font-solid)`

Dla zwykłych ikon użyj `var(--fa-font-regular)`

Dla ikon marki użyj `var(--fa-font-regular)`

Dodatkowo możemy dodać klasę niestandardową, która definiuje kilka typowych właściwości CSS.

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
To wszystko 

W wersji font awesome 5 nie ma niestandardowych właściwości css 

Musimy więc dodać właściwości css `font-family` i `font-weight`.

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

`font-family` i `font-weight` mogą być różne dla każdej ikony w zależności od stylu ikony jak zwykłe, jednolite i ikony marki.

[Użyj font awesome Icons jako CSS Content Code](/fontawesome/csscontentcode)

Aby wyświetlić ikony font awesome używając SVG przejdź do poniższego artykułu.

[Lista ikon SVG Font Awesome, użycie, CSS i pobieranie](/fontawesome/svg/)

## Szukaj Font Awesome Icons 

Oto kompletna lista darmowych font awesome ikon cheat sheet.

Wpisz nazwę ikony w poniższym polu wyszukiwania i skopiuj nazwę klasy i styl lub kod zawartości CSS.

Ikony zostaną przefiltrowane w poniższej tabeli.

I Kliknij na ikonę, aby skopiować kod html.

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