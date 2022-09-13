
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

## Search Font Awesome Icons 

Oto kompletna lista darmowych font awesome ikon cheat sheet.

Wpisz nazwę ikony w poniższym polu wyszukiwania i skopiuj nazwę klasy i styl lub kod zawartości CSS.

Ikony zostaną przefiltrowane w poniższej tabeli.

I Kliknij na ikonę, aby skopiować kod html.

<input type="text" id="myInput" onkeyup="searchTable()" placeholder="Search font awesome icons.." title="Search font awesome icons">

Total <strong><span id="counter">2016</span></strong> Icons.

## Font Awesome Icons Class List & CSS Content Codes

<div class='table-responsive'><table class='table'>
<thead><tr><th>Name</th><th>Class Name</th><th>Style</th><th>Css Content Code</th><th>Example</th></tr></thead>
<tbody>
<tr>
<td><i class='fab fa-42-group'></i> 42 Group</td>
<td>fa-42-group</td>
<td>fab</td>
<td> \e080</td>
<td><a href='/fontawesome/fa-42-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-500px'></i> 500Px</td>
<td>fa-500px</td>
<td>fab</td>
<td> \f26e</td>
<td><a href='/fontawesome/fa-500px' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-accessible-icon'></i> Accessible Icon</td>
<td>fa-accessible-icon</td>
<td>fab</td>
<td> \f368</td>
<td><a href='/fontawesome/fa-accessible-icon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-accusoft'></i> Accusoft</td>
<td>fa-accusoft</td>
<td>fab</td>
<td> \f369</td>
<td><a href='/fontawesome/fa-accusoft' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-adn'></i> Adn</td>
<td>fa-adn</td>
<td>fab</td>
<td> \f170</td>
<td><a href='/fontawesome/fa-adn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-adversal'></i> Adversal</td>
<td>fa-adversal</td>
<td>fab</td>
<td> \f36a</td>
<td><a href='/fontawesome/fa-adversal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-affiliatetheme'></i> Affiliatetheme</td>
<td>fa-affiliatetheme</td>
<td>fab</td>
<td> \f36b</td>
<td><a href='/fontawesome/fa-affiliatetheme' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-airbnb'></i> Airbnb</td>
<td>fa-airbnb</td>
<td>fab</td>
<td> \f834</td>
<td><a href='/fontawesome/fa-airbnb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-algolia'></i> Algolia</td>
<td>fa-algolia</td>
<td>fab</td>
<td> \f36c</td>
<td><a href='/fontawesome/fa-algolia' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-alipay'></i> Alipay</td>
<td>fa-alipay</td>
<td>fab</td>
<td> \f642</td>
<td><a href='/fontawesome/fa-alipay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-amazon-pay'></i> Amazon Pay</td>
<td>fa-amazon-pay</td>
<td>fab</td>
<td> \f42c</td>
<td><a href='/fontawesome/fa-amazon-pay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-amazon'></i> Amazon</td>
<td>fa-amazon</td>
<td>fab</td>
<td> \f270</td>
<td><a href='/fontawesome/fa-amazon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-amilia'></i> Amilia</td>
<td>fa-amilia</td>
<td>fab</td>
<td> \f36d</td>
<td><a href='/fontawesome/fa-amilia' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-android'></i> Android</td>
<td>fa-android</td>
<td>fab</td>
<td> \f17b</td>
<td><a href='/fontawesome/fa-android' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-angellist'></i> Angellist</td>
<td>fa-angellist</td>
<td>fab</td>
<td> \f209</td>
<td><a href='/fontawesome/fa-angellist' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-angrycreative'></i> Angrycreative</td>
<td>fa-angrycreative</td>
<td>fab</td>
<td> \f36e</td>
<td><a href='/fontawesome/fa-angrycreative' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-angular'></i> Angular</td>
<td>fa-angular</td>
<td>fab</td>
<td> \f420</td>
<td><a href='/fontawesome/fa-angular' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-app-store-ios'></i> App Store Ios</td>
<td>fa-app-store-ios</td>
<td>fab</td>
<td> \f370</td>
<td><a href='/fontawesome/fa-app-store-ios' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-app-store'></i> App Store</td>
<td>fa-app-store</td>
<td>fab</td>
<td> \f36f</td>
<td><a href='/fontawesome/fa-app-store' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-apper'></i> Apper</td>
<td>fa-apper</td>
<td>fab</td>
<td> \f371</td>
<td><a href='/fontawesome/fa-apper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-apple-pay'></i> Apple Pay</td>
<td>fa-apple-pay</td>
<td>fab</td>
<td> \f415</td>
<td><a href='/fontawesome/fa-apple-pay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-apple'></i> Apple</td>
<td>fa-apple</td>
<td>fab</td>
<td> \f179</td>
<td><a href='/fontawesome/fa-apple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-artstation'></i> Artstation</td>
<td>fa-artstation</td>
<td>fab</td>
<td> \f77a</td>
<td><a href='/fontawesome/fa-artstation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-asymmetrik'></i> Asymmetrik</td>
<td>fa-asymmetrik</td>
<td>fab</td>
<td> \f372</td>
<td><a href='/fontawesome/fa-asymmetrik' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-atlassian'></i> Atlassian</td>
<td>fa-atlassian</td>
<td>fab</td>
<td> \f77b</td>
<td><a href='/fontawesome/fa-atlassian' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-audible'></i> Audible</td>
<td>fa-audible</td>
<td>fab</td>
<td> \f373</td>
<td><a href='/fontawesome/fa-audible' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-autoprefixer'></i> Autoprefixer</td>
<td>fa-autoprefixer</td>
<td>fab</td>
<td> \f41c</td>
<td><a href='/fontawesome/fa-autoprefixer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-avianex'></i> Avianex</td>
<td>fa-avianex</td>
<td>fab</td>
<td> \f374</td>
<td><a href='/fontawesome/fa-avianex' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-aviato'></i> Aviato</td>
<td>fa-aviato</td>
<td>fab</td>
<td> \f421</td>
<td><a href='/fontawesome/fa-aviato' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-aws'></i> Aws</td>
<td>fa-aws</td>
<td>fab</td>
<td> \f375</td>
<td><a href='/fontawesome/fa-aws' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bandcamp'></i> Bandcamp</td>
<td>fa-bandcamp</td>
<td>fab</td>
<td> \f2d5</td>
<td><a href='/fontawesome/fa-bandcamp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-battle-net'></i> Battle Net</td>
<td>fa-battle-net</td>
<td>fab</td>
<td> \f835</td>
<td><a href='/fontawesome/fa-battle-net' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-behance'></i> Behance</td>
<td>fa-behance</td>
<td>fab</td>
<td> \f1b4</td>
<td><a href='/fontawesome/fa-behance' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bilibili'></i> Bilibili</td>
<td>fa-bilibili</td>
<td>fab</td>
<td> \e3d9</td>
<td><a href='/fontawesome/fa-bilibili' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bimobject'></i> Bimobject</td>
<td>fa-bimobject</td>
<td>fab</td>
<td> \f378</td>
<td><a href='/fontawesome/fa-bimobject' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bitbucket'></i> Bitbucket</td>
<td>fa-bitbucket</td>
<td>fab</td>
<td> \f171</td>
<td><a href='/fontawesome/fa-bitbucket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bitcoin'></i> Bitcoin</td>
<td>fa-bitcoin</td>
<td>fab</td>
<td> \f379</td>
<td><a href='/fontawesome/fa-bitcoin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bity'></i> Bity</td>
<td>fa-bity</td>
<td>fab</td>
<td> \f37a</td>
<td><a href='/fontawesome/fa-bity' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-black-tie'></i> Black Tie</td>
<td>fa-black-tie</td>
<td>fab</td>
<td> \f27e</td>
<td><a href='/fontawesome/fa-black-tie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-blackberry'></i> Blackberry</td>
<td>fa-blackberry</td>
<td>fab</td>
<td> \f37b</td>
<td><a href='/fontawesome/fa-blackberry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-blogger-b'></i> Blogger B</td>
<td>fa-blogger-b</td>
<td>fab</td>
<td> \f37d</td>
<td><a href='/fontawesome/fa-blogger-b' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-blogger'></i> Blogger</td>
<td>fa-blogger</td>
<td>fab</td>
<td> \f37c</td>
<td><a href='/fontawesome/fa-blogger' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bluetooth-b'></i> Bluetooth B</td>
<td>fa-bluetooth-b</td>
<td>fab</td>
<td> \f294</td>
<td><a href='/fontawesome/fa-bluetooth-b' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bluetooth'></i> Bluetooth</td>
<td>fa-bluetooth</td>
<td>fab</td>
<td> \f293</td>
<td><a href='/fontawesome/fa-bluetooth' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bootstrap'></i> Bootstrap</td>
<td>fa-bootstrap</td>
<td>fab</td>
<td> \f836</td>
<td><a href='/fontawesome/fa-bootstrap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-bots'></i> Bots</td>
<td>fa-bots</td>
<td>fab</td>
<td> \e340</td>
<td><a href='/fontawesome/fa-bots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-btc'></i> Btc</td>
<td>fa-btc</td>
<td>fab</td>
<td> \f15a</td>
<td><a href='/fontawesome/fa-btc' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-buffer'></i> Buffer</td>
<td>fa-buffer</td>
<td>fab</td>
<td> \f837</td>
<td><a href='/fontawesome/fa-buffer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-buromobelexperte'></i> Buromobelexperte</td>
<td>fa-buromobelexperte</td>
<td>fab</td>
<td> \f37f</td>
<td><a href='/fontawesome/fa-buromobelexperte' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-buy-n-large'></i> Buy N Large</td>
<td>fa-buy-n-large</td>
<td>fab</td>
<td> \f8a6</td>
<td><a href='/fontawesome/fa-buy-n-large' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-buysellads'></i> Buysellads</td>
<td>fa-buysellads</td>
<td>fab</td>
<td> \f20d</td>
<td><a href='/fontawesome/fa-buysellads' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-canadian-maple-leaf'></i> Canadian Maple Leaf</td>
<td>fa-canadian-maple-leaf</td>
<td>fab</td>
<td> \f785</td>
<td><a href='/fontawesome/fa-canadian-maple-leaf' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-amazon-pay'></i> Cc Amazon Pay</td>
<td>fa-cc-amazon-pay</td>
<td>fab</td>
<td> \f42d</td>
<td><a href='/fontawesome/fa-cc-amazon-pay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-amex'></i> Cc Amex</td>
<td>fa-cc-amex</td>
<td>fab</td>
<td> \f1f3</td>
<td><a href='/fontawesome/fa-cc-amex' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-apple-pay'></i> Cc Apple Pay</td>
<td>fa-cc-apple-pay</td>
<td>fab</td>
<td> \f416</td>
<td><a href='/fontawesome/fa-cc-apple-pay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-diners-club'></i> Cc Diners Club</td>
<td>fa-cc-diners-club</td>
<td>fab</td>
<td> \f24c</td>
<td><a href='/fontawesome/fa-cc-diners-club' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-discover'></i> Cc Discover</td>
<td>fa-cc-discover</td>
<td>fab</td>
<td> \f1f2</td>
<td><a href='/fontawesome/fa-cc-discover' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-jcb'></i> Cc Jcb</td>
<td>fa-cc-jcb</td>
<td>fab</td>
<td> \f24b</td>
<td><a href='/fontawesome/fa-cc-jcb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-mastercard'></i> Cc Mastercard</td>
<td>fa-cc-mastercard</td>
<td>fab</td>
<td> \f1f1</td>
<td><a href='/fontawesome/fa-cc-mastercard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-paypal'></i> Cc Paypal</td>
<td>fa-cc-paypal</td>
<td>fab</td>
<td> \f1f4</td>
<td><a href='/fontawesome/fa-cc-paypal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-stripe'></i> Cc Stripe</td>
<td>fa-cc-stripe</td>
<td>fab</td>
<td> \f1f5</td>
<td><a href='/fontawesome/fa-cc-stripe' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cc-visa'></i> Cc Visa</td>
<td>fa-cc-visa</td>
<td>fab</td>
<td> \f1f0</td>
<td><a href='/fontawesome/fa-cc-visa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-centercode'></i> Centercode</td>
<td>fa-centercode</td>
<td>fab</td>
<td> \f380</td>
<td><a href='/fontawesome/fa-centercode' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-centos'></i> Centos</td>
<td>fa-centos</td>
<td>fab</td>
<td> \f789</td>
<td><a href='/fontawesome/fa-centos' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-chrome'></i> Chrome</td>
<td>fa-chrome</td>
<td>fab</td>
<td> \f268</td>
<td><a href='/fontawesome/fa-chrome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-chromecast'></i> Chromecast</td>
<td>fa-chromecast</td>
<td>fab</td>
<td> \f838</td>
<td><a href='/fontawesome/fa-chromecast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cloudflare'></i> Cloudflare</td>
<td>fa-cloudflare</td>
<td>fab</td>
<td> \e07d</td>
<td><a href='/fontawesome/fa-cloudflare' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cloudscale'></i> Cloudscale</td>
<td>fa-cloudscale</td>
<td>fab</td>
<td> \f383</td>
<td><a href='/fontawesome/fa-cloudscale' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cloudsmith'></i> Cloudsmith</td>
<td>fa-cloudsmith</td>
<td>fab</td>
<td> \f384</td>
<td><a href='/fontawesome/fa-cloudsmith' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cloudversify'></i> Cloudversify</td>
<td>fa-cloudversify</td>
<td>fab</td>
<td> \f385</td>
<td><a href='/fontawesome/fa-cloudversify' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cmplid'></i> Cmplid</td>
<td>fa-cmplid</td>
<td>fab</td>
<td> \e360</td>
<td><a href='/fontawesome/fa-cmplid' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-codepen'></i> Codepen</td>
<td>fa-codepen</td>
<td>fab</td>
<td> \f1cb</td>
<td><a href='/fontawesome/fa-codepen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-codiepie'></i> Codiepie</td>
<td>fa-codiepie</td>
<td>fab</td>
<td> \f284</td>
<td><a href='/fontawesome/fa-codiepie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-confluence'></i> Confluence</td>
<td>fa-confluence</td>
<td>fab</td>
<td> \f78d</td>
<td><a href='/fontawesome/fa-confluence' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-connectdevelop'></i> Connectdevelop</td>
<td>fa-connectdevelop</td>
<td>fab</td>
<td> \f20e</td>
<td><a href='/fontawesome/fa-connectdevelop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-contao'></i> Contao</td>
<td>fa-contao</td>
<td>fab</td>
<td> \f26d</td>
<td><a href='/fontawesome/fa-contao' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cotton-bureau'></i> Cotton Bureau</td>
<td>fa-cotton-bureau</td>
<td>fab</td>
<td> \f89e</td>
<td><a href='/fontawesome/fa-cotton-bureau' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cpanel'></i> Cpanel</td>
<td>fa-cpanel</td>
<td>fab</td>
<td> \f388</td>
<td><a href='/fontawesome/fa-cpanel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-by'></i> Creative Commons By</td>
<td>fa-creative-commons-by</td>
<td>fab</td>
<td> \f4e7</td>
<td><a href='/fontawesome/fa-creative-commons-by' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-nc-eu'></i> Creative Commons Nc Eu</td>
<td>fa-creative-commons-nc-eu</td>
<td>fab</td>
<td> \f4e9</td>
<td><a href='/fontawesome/fa-creative-commons-nc-eu' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-nc-jp'></i> Creative Commons Nc Jp</td>
<td>fa-creative-commons-nc-jp</td>
<td>fab</td>
<td> \f4ea</td>
<td><a href='/fontawesome/fa-creative-commons-nc-jp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-nc'></i> Creative Commons Nc</td>
<td>fa-creative-commons-nc</td>
<td>fab</td>
<td> \f4e8</td>
<td><a href='/fontawesome/fa-creative-commons-nc' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-nd'></i> Creative Commons Nd</td>
<td>fa-creative-commons-nd</td>
<td>fab</td>
<td> \f4eb</td>
<td><a href='/fontawesome/fa-creative-commons-nd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-pd-alt'></i> Creative Commons Pd Alt</td>
<td>fa-creative-commons-pd-alt</td>
<td>fab</td>
<td> \f4ed</td>
<td><a href='/fontawesome/fa-creative-commons-pd-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-pd'></i> Creative Commons Pd</td>
<td>fa-creative-commons-pd</td>
<td>fab</td>
<td> \f4ec</td>
<td><a href='/fontawesome/fa-creative-commons-pd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-remix'></i> Creative Commons Remix</td>
<td>fa-creative-commons-remix</td>
<td>fab</td>
<td> \f4ee</td>
<td><a href='/fontawesome/fa-creative-commons-remix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-sa'></i> Creative Commons Sa</td>
<td>fa-creative-commons-sa</td>
<td>fab</td>
<td> \f4ef</td>
<td><a href='/fontawesome/fa-creative-commons-sa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-sampling-plus'></i> Creative Commons Sampling Plus</td>
<td>fa-creative-commons-sampling-plus</td>
<td>fab</td>
<td> \f4f1</td>
<td><a href='/fontawesome/fa-creative-commons-sampling-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-sampling'></i> Creative Commons Sampling</td>
<td>fa-creative-commons-sampling</td>
<td>fab</td>
<td> \f4f0</td>
<td><a href='/fontawesome/fa-creative-commons-sampling' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-share'></i> Creative Commons Share</td>
<td>fa-creative-commons-share</td>
<td>fab</td>
<td> \f4f2</td>
<td><a href='/fontawesome/fa-creative-commons-share' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons-zero'></i> Creative Commons Zero</td>
<td>fa-creative-commons-zero</td>
<td>fab</td>
<td> \f4f3</td>
<td><a href='/fontawesome/fa-creative-commons-zero' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-creative-commons'></i> Creative Commons</td>
<td>fa-creative-commons</td>
<td>fab</td>
<td> \f25e</td>
<td><a href='/fontawesome/fa-creative-commons' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-critical-role'></i> Critical Role</td>
<td>fa-critical-role</td>
<td>fab</td>
<td> \f6c9</td>
<td><a href='/fontawesome/fa-critical-role' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-css3-alt'></i> Css3 Alt</td>
<td>fa-css3-alt</td>
<td>fab</td>
<td> \f38b</td>
<td><a href='/fontawesome/fa-css3-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-css3'></i> Css3</td>
<td>fa-css3</td>
<td>fab</td>
<td> \f13c</td>
<td><a href='/fontawesome/fa-css3' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-cuttlefish'></i> Cuttlefish</td>
<td>fa-cuttlefish</td>
<td>fab</td>
<td> \f38c</td>
<td><a href='/fontawesome/fa-cuttlefish' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-d-and-d-beyond'></i> D And D Beyond</td>
<td>fa-d-and-d-beyond</td>
<td>fab</td>
<td> \f6ca</td>
<td><a href='/fontawesome/fa-d-and-d-beyond' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-d-and-d'></i> D And D</td>
<td>fa-d-and-d</td>
<td>fab</td>
<td> \f38d</td>
<td><a href='/fontawesome/fa-d-and-d' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dailymotion'></i> Dailymotion</td>
<td>fa-dailymotion</td>
<td>fab</td>
<td> \e052</td>
<td><a href='/fontawesome/fa-dailymotion' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dashcube'></i> Dashcube</td>
<td>fa-dashcube</td>
<td>fab</td>
<td> \f210</td>
<td><a href='/fontawesome/fa-dashcube' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-deezer'></i> Deezer</td>
<td>fa-deezer</td>
<td>fab</td>
<td> \e077</td>
<td><a href='/fontawesome/fa-deezer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-delicious'></i> Delicious</td>
<td>fa-delicious</td>
<td>fab</td>
<td> \f1a5</td>
<td><a href='/fontawesome/fa-delicious' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-deploydog'></i> Deploydog</td>
<td>fa-deploydog</td>
<td>fab</td>
<td> \f38e</td>
<td><a href='/fontawesome/fa-deploydog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-deskpro'></i> Deskpro</td>
<td>fa-deskpro</td>
<td>fab</td>
<td> \f38f</td>
<td><a href='/fontawesome/fa-deskpro' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dev'></i> Dev</td>
<td>fa-dev</td>
<td>fab</td>
<td> \f6cc</td>
<td><a href='/fontawesome/fa-dev' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-deviantart'></i> Deviantart</td>
<td>fa-deviantart</td>
<td>fab</td>
<td> \f1bd</td>
<td><a href='/fontawesome/fa-deviantart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dhl'></i> Dhl</td>
<td>fa-dhl</td>
<td>fab</td>
<td> \f790</td>
<td><a href='/fontawesome/fa-dhl' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-diaspora'></i> Diaspora</td>
<td>fa-diaspora</td>
<td>fab</td>
<td> \f791</td>
<td><a href='/fontawesome/fa-diaspora' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-digg'></i> Digg</td>
<td>fa-digg</td>
<td>fab</td>
<td> \f1a6</td>
<td><a href='/fontawesome/fa-digg' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-digital-ocean'></i> Digital Ocean</td>
<td>fa-digital-ocean</td>
<td>fab</td>
<td> \f391</td>
<td><a href='/fontawesome/fa-digital-ocean' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-discord'></i> Discord</td>
<td>fa-discord</td>
<td>fab</td>
<td> \f392</td>
<td><a href='/fontawesome/fa-discord' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-discourse'></i> Discourse</td>
<td>fa-discourse</td>
<td>fab</td>
<td> \f393</td>
<td><a href='/fontawesome/fa-discourse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dochub'></i> Dochub</td>
<td>fa-dochub</td>
<td>fab</td>
<td> \f394</td>
<td><a href='/fontawesome/fa-dochub' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-docker'></i> Docker</td>
<td>fa-docker</td>
<td>fab</td>
<td> \f395</td>
<td><a href='/fontawesome/fa-docker' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-draft2digital'></i> Draft2digital</td>
<td>fa-draft2digital</td>
<td>fab</td>
<td> \f396</td>
<td><a href='/fontawesome/fa-draft2digital' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dribbble'></i> Dribbble</td>
<td>fa-dribbble</td>
<td>fab</td>
<td> \f17d</td>
<td><a href='/fontawesome/fa-dribbble' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dropbox'></i> Dropbox</td>
<td>fa-dropbox</td>
<td>fab</td>
<td> \f16b</td>
<td><a href='/fontawesome/fa-dropbox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-drupal'></i> Drupal</td>
<td>fa-drupal</td>
<td>fab</td>
<td> \f1a9</td>
<td><a href='/fontawesome/fa-drupal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-dyalog'></i> Dyalog</td>
<td>fa-dyalog</td>
<td>fab</td>
<td> \f399</td>
<td><a href='/fontawesome/fa-dyalog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-earlybirds'></i> Earlybirds</td>
<td>fa-earlybirds</td>
<td>fab</td>
<td> \f39a</td>
<td><a href='/fontawesome/fa-earlybirds' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ebay'></i> Ebay</td>
<td>fa-ebay</td>
<td>fab</td>
<td> \f4f4</td>
<td><a href='/fontawesome/fa-ebay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-edge-legacy'></i> Edge Legacy</td>
<td>fa-edge-legacy</td>
<td>fab</td>
<td> \e078</td>
<td><a href='/fontawesome/fa-edge-legacy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-edge'></i> Edge</td>
<td>fa-edge</td>
<td>fab</td>
<td> \f282</td>
<td><a href='/fontawesome/fa-edge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-elementor'></i> Elementor</td>
<td>fa-elementor</td>
<td>fab</td>
<td> \f430</td>
<td><a href='/fontawesome/fa-elementor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ello'></i> Ello</td>
<td>fa-ello</td>
<td>fab</td>
<td> \f5f1</td>
<td><a href='/fontawesome/fa-ello' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ember'></i> Ember</td>
<td>fa-ember</td>
<td>fab</td>
<td> \f423</td>
<td><a href='/fontawesome/fa-ember' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-empire'></i> Empire</td>
<td>fa-empire</td>
<td>fab</td>
<td> \f1d1</td>
<td><a href='/fontawesome/fa-empire' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-envira'></i> Envira</td>
<td>fa-envira</td>
<td>fab</td>
<td> \f299</td>
<td><a href='/fontawesome/fa-envira' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-erlang'></i> Erlang</td>
<td>fa-erlang</td>
<td>fab</td>
<td> \f39d</td>
<td><a href='/fontawesome/fa-erlang' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ethereum'></i> Ethereum</td>
<td>fa-ethereum</td>
<td>fab</td>
<td> \f42e</td>
<td><a href='/fontawesome/fa-ethereum' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-etsy'></i> Etsy</td>
<td>fa-etsy</td>
<td>fab</td>
<td> \f2d7</td>
<td><a href='/fontawesome/fa-etsy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-evernote'></i> Evernote</td>
<td>fa-evernote</td>
<td>fab</td>
<td> \f839</td>
<td><a href='/fontawesome/fa-evernote' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-expeditedssl'></i> Expeditedssl</td>
<td>fa-expeditedssl</td>
<td>fab</td>
<td> \f23e</td>
<td><a href='/fontawesome/fa-expeditedssl' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-facebook-f'></i> Facebook F</td>
<td>fa-facebook-f</td>
<td>fab</td>
<td> \f39e</td>
<td><a href='/fontawesome/fa-facebook-f' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-facebook-messenger'></i> Facebook Messenger</td>
<td>fa-facebook-messenger</td>
<td>fab</td>
<td> \f39f</td>
<td><a href='/fontawesome/fa-facebook-messenger' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-facebook'></i> Facebook</td>
<td>fa-facebook</td>
<td>fab</td>
<td> \f09a</td>
<td><a href='/fontawesome/fa-facebook' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fantasy-flight-games'></i> Fantasy Flight Games</td>
<td>fa-fantasy-flight-games</td>
<td>fab</td>
<td> \f6dc</td>
<td><a href='/fontawesome/fa-fantasy-flight-games' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fedex'></i> Fedex</td>
<td>fa-fedex</td>
<td>fab</td>
<td> \f797</td>
<td><a href='/fontawesome/fa-fedex' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fedora'></i> Fedora</td>
<td>fa-fedora</td>
<td>fab</td>
<td> \f798</td>
<td><a href='/fontawesome/fa-fedora' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-figma'></i> Figma</td>
<td>fa-figma</td>
<td>fab</td>
<td> \f799</td>
<td><a href='/fontawesome/fa-figma' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-firefox-browser'></i> Firefox Browser</td>
<td>fa-firefox-browser</td>
<td>fab</td>
<td> \e007</td>
<td><a href='/fontawesome/fa-firefox-browser' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-firefox'></i> Firefox</td>
<td>fa-firefox</td>
<td>fab</td>
<td> \f269</td>
<td><a href='/fontawesome/fa-firefox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-first-order-alt'></i> First Order Alt</td>
<td>fa-first-order-alt</td>
<td>fab</td>
<td> \f50a</td>
<td><a href='/fontawesome/fa-first-order-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-first-order'></i> First Order</td>
<td>fa-first-order</td>
<td>fab</td>
<td> \f2b0</td>
<td><a href='/fontawesome/fa-first-order' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-firstdraft'></i> Firstdraft</td>
<td>fa-firstdraft</td>
<td>fab</td>
<td> \f3a1</td>
<td><a href='/fontawesome/fa-firstdraft' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-flickr'></i> Flickr</td>
<td>fa-flickr</td>
<td>fab</td>
<td> \f16e</td>
<td><a href='/fontawesome/fa-flickr' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-flipboard'></i> Flipboard</td>
<td>fa-flipboard</td>
<td>fab</td>
<td> \f44d</td>
<td><a href='/fontawesome/fa-flipboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fly'></i> Fly</td>
<td>fa-fly</td>
<td>fab</td>
<td> \f417</td>
<td><a href='/fontawesome/fa-fly' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-font-awesome'></i> Font Awesome</td>
<td>fa-font-awesome</td>
<td>fab</td>
<td> \f2b4</td>
<td><a href='/fontawesome/fa-font-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fonticons-fi'></i> Fonticons Fi</td>
<td>fa-fonticons-fi</td>
<td>fab</td>
<td> \f3a2</td>
<td><a href='/fontawesome/fa-fonticons-fi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fonticons'></i> Fonticons</td>
<td>fa-fonticons</td>
<td>fab</td>
<td> \f280</td>
<td><a href='/fontawesome/fa-fonticons' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fort-awesome-alt'></i> Fort Awesome Alt</td>
<td>fa-fort-awesome-alt</td>
<td>fab</td>
<td> \f3a3</td>
<td><a href='/fontawesome/fa-fort-awesome-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fort-awesome'></i> Fort Awesome</td>
<td>fa-fort-awesome</td>
<td>fab</td>
<td> \f286</td>
<td><a href='/fontawesome/fa-fort-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-forumbee'></i> Forumbee</td>
<td>fa-forumbee</td>
<td>fab</td>
<td> \f211</td>
<td><a href='/fontawesome/fa-forumbee' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-foursquare'></i> Foursquare</td>
<td>fa-foursquare</td>
<td>fab</td>
<td> \f180</td>
<td><a href='/fontawesome/fa-foursquare' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-free-code-camp'></i> Free Code Camp</td>
<td>fa-free-code-camp</td>
<td>fab</td>
<td> \f2c5</td>
<td><a href='/fontawesome/fa-free-code-camp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-freebsd'></i> Freebsd</td>
<td>fa-freebsd</td>
<td>fab</td>
<td> \f3a4</td>
<td><a href='/fontawesome/fa-freebsd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-fulcrum'></i> Fulcrum</td>
<td>fa-fulcrum</td>
<td>fab</td>
<td> \f50b</td>
<td><a href='/fontawesome/fa-fulcrum' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-galactic-republic'></i> Galactic Republic</td>
<td>fa-galactic-republic</td>
<td>fab</td>
<td> \f50c</td>
<td><a href='/fontawesome/fa-galactic-republic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-galactic-senate'></i> Galactic Senate</td>
<td>fa-galactic-senate</td>
<td>fab</td>
<td> \f50d</td>
<td><a href='/fontawesome/fa-galactic-senate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-get-pocket'></i> Get Pocket</td>
<td>fa-get-pocket</td>
<td>fab</td>
<td> \f265</td>
<td><a href='/fontawesome/fa-get-pocket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gg-circle'></i> Gg Circle</td>
<td>fa-gg-circle</td>
<td>fab</td>
<td> \f261</td>
<td><a href='/fontawesome/fa-gg-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gg'></i> Gg</td>
<td>fa-gg</td>
<td>fab</td>
<td> \f260</td>
<td><a href='/fontawesome/fa-gg' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-git-alt'></i> Git Alt</td>
<td>fa-git-alt</td>
<td>fab</td>
<td> \f841</td>
<td><a href='/fontawesome/fa-git-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-git'></i> Git</td>
<td>fa-git</td>
<td>fab</td>
<td> \f1d3</td>
<td><a href='/fontawesome/fa-git' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-github-alt'></i> Github Alt</td>
<td>fa-github-alt</td>
<td>fab</td>
<td> \f113</td>
<td><a href='/fontawesome/fa-github-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-github'></i> Github</td>
<td>fa-github</td>
<td>fab</td>
<td> \f09b</td>
<td><a href='/fontawesome/fa-github' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gitkraken'></i> Gitkraken</td>
<td>fa-gitkraken</td>
<td>fab</td>
<td> \f3a6</td>
<td><a href='/fontawesome/fa-gitkraken' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gitlab'></i> Gitlab</td>
<td>fa-gitlab</td>
<td>fab</td>
<td> \f296</td>
<td><a href='/fontawesome/fa-gitlab' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gitter'></i> Gitter</td>
<td>fa-gitter</td>
<td>fab</td>
<td> \f426</td>
<td><a href='/fontawesome/fa-gitter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-glide-g'></i> Glide G</td>
<td>fa-glide-g</td>
<td>fab</td>
<td> \f2a6</td>
<td><a href='/fontawesome/fa-glide-g' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-glide'></i> Glide</td>
<td>fa-glide</td>
<td>fab</td>
<td> \f2a5</td>
<td><a href='/fontawesome/fa-glide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gofore'></i> Gofore</td>
<td>fa-gofore</td>
<td>fab</td>
<td> \f3a7</td>
<td><a href='/fontawesome/fa-gofore' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-golang'></i> Golang</td>
<td>fa-golang</td>
<td>fab</td>
<td> \e40f</td>
<td><a href='/fontawesome/fa-golang' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-goodreads-g'></i> Goodreads G</td>
<td>fa-goodreads-g</td>
<td>fab</td>
<td> \f3a9</td>
<td><a href='/fontawesome/fa-goodreads-g' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-goodreads'></i> Goodreads</td>
<td>fa-goodreads</td>
<td>fab</td>
<td> \f3a8</td>
<td><a href='/fontawesome/fa-goodreads' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-drive'></i> Google Drive</td>
<td>fa-google-drive</td>
<td>fab</td>
<td> \f3aa</td>
<td><a href='/fontawesome/fa-google-drive' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-pay'></i> Google Pay</td>
<td>fa-google-pay</td>
<td>fab</td>
<td> \e079</td>
<td><a href='/fontawesome/fa-google-pay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-play'></i> Google Play</td>
<td>fa-google-play</td>
<td>fab</td>
<td> \f3ab</td>
<td><a href='/fontawesome/fa-google-play' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-plus-g'></i> Google Plus G</td>
<td>fa-google-plus-g</td>
<td>fab</td>
<td> \f0d5</td>
<td><a href='/fontawesome/fa-google-plus-g' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-plus'></i> Google Plus</td>
<td>fa-google-plus</td>
<td>fab</td>
<td> \f2b3</td>
<td><a href='/fontawesome/fa-google-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google-wallet'></i> Google Wallet</td>
<td>fa-google-wallet</td>
<td>fab</td>
<td> \f1ee</td>
<td><a href='/fontawesome/fa-google-wallet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-google'></i> Google</td>
<td>fa-google</td>
<td>fab</td>
<td> \f1a0</td>
<td><a href='/fontawesome/fa-google' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gratipay'></i> Gratipay</td>
<td>fa-gratipay</td>
<td>fab</td>
<td> \f184</td>
<td><a href='/fontawesome/fa-gratipay' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-grav'></i> Grav</td>
<td>fa-grav</td>
<td>fab</td>
<td> \f2d6</td>
<td><a href='/fontawesome/fa-grav' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gripfire'></i> Gripfire</td>
<td>fa-gripfire</td>
<td>fab</td>
<td> \f3ac</td>
<td><a href='/fontawesome/fa-gripfire' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-grunt'></i> Grunt</td>
<td>fa-grunt</td>
<td>fab</td>
<td> \f3ad</td>
<td><a href='/fontawesome/fa-grunt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-guilded'></i> Guilded</td>
<td>fa-guilded</td>
<td>fab</td>
<td> \e07e</td>
<td><a href='/fontawesome/fa-guilded' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-gulp'></i> Gulp</td>
<td>fa-gulp</td>
<td>fab</td>
<td> \f3ae</td>
<td><a href='/fontawesome/fa-gulp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hacker-news'></i> Hacker News</td>
<td>fa-hacker-news</td>
<td>fab</td>
<td> \f1d4</td>
<td><a href='/fontawesome/fa-hacker-news' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hackerrank'></i> Hackerrank</td>
<td>fa-hackerrank</td>
<td>fab</td>
<td> \f5f7</td>
<td><a href='/fontawesome/fa-hackerrank' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hashnode'></i> Hashnode</td>
<td>fa-hashnode</td>
<td>fab</td>
<td> \e499</td>
<td><a href='/fontawesome/fa-hashnode' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hips'></i> Hips</td>
<td>fa-hips</td>
<td>fab</td>
<td> \f452</td>
<td><a href='/fontawesome/fa-hips' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hire-a-helper'></i> Hire A Helper</td>
<td>fa-hire-a-helper</td>
<td>fab</td>
<td> \f3b0</td>
<td><a href='/fontawesome/fa-hire-a-helper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hive'></i> Hive</td>
<td>fa-hive</td>
<td>fab</td>
<td> \e07f</td>
<td><a href='/fontawesome/fa-hive' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hooli'></i> Hooli</td>
<td>fa-hooli</td>
<td>fab</td>
<td> \f427</td>
<td><a href='/fontawesome/fa-hooli' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hornbill'></i> Hornbill</td>
<td>fa-hornbill</td>
<td>fab</td>
<td> \f592</td>
<td><a href='/fontawesome/fa-hornbill' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hotjar'></i> Hotjar</td>
<td>fa-hotjar</td>
<td>fab</td>
<td> \f3b1</td>
<td><a href='/fontawesome/fa-hotjar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-houzz'></i> Houzz</td>
<td>fa-houzz</td>
<td>fab</td>
<td> \f27c</td>
<td><a href='/fontawesome/fa-houzz' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-html5'></i> Html5</td>
<td>fa-html5</td>
<td>fab</td>
<td> \f13b</td>
<td><a href='/fontawesome/fa-html5' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-hubspot'></i> Hubspot</td>
<td>fa-hubspot</td>
<td>fab</td>
<td> \f3b2</td>
<td><a href='/fontawesome/fa-hubspot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ideal'></i> Ideal</td>
<td>fa-ideal</td>
<td>fab</td>
<td> \e013</td>
<td><a href='/fontawesome/fa-ideal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-imdb'></i> Imdb</td>
<td>fa-imdb</td>
<td>fab</td>
<td> \f2d8</td>
<td><a href='/fontawesome/fa-imdb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-instagram'></i> Instagram</td>
<td>fa-instagram</td>
<td>fab</td>
<td> \f16d</td>
<td><a href='/fontawesome/fa-instagram' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-instalod'></i> Instalod</td>
<td>fa-instalod</td>
<td>fab</td>
<td> \e081</td>
<td><a href='/fontawesome/fa-instalod' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-intercom'></i> Intercom</td>
<td>fa-intercom</td>
<td>fab</td>
<td> \f7af</td>
<td><a href='/fontawesome/fa-intercom' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-internet-explorer'></i> Internet Explorer</td>
<td>fa-internet-explorer</td>
<td>fab</td>
<td> \f26b</td>
<td><a href='/fontawesome/fa-internet-explorer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-invision'></i> Invision</td>
<td>fa-invision</td>
<td>fab</td>
<td> \f7b0</td>
<td><a href='/fontawesome/fa-invision' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ioxhost'></i> Ioxhost</td>
<td>fa-ioxhost</td>
<td>fab</td>
<td> \f208</td>
<td><a href='/fontawesome/fa-ioxhost' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-itch-io'></i> Itch Io</td>
<td>fa-itch-io</td>
<td>fab</td>
<td> \f83a</td>
<td><a href='/fontawesome/fa-itch-io' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-itunes-note'></i> Itunes Note</td>
<td>fa-itunes-note</td>
<td>fab</td>
<td> \f3b5</td>
<td><a href='/fontawesome/fa-itunes-note' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-itunes'></i> Itunes</td>
<td>fa-itunes</td>
<td>fab</td>
<td> \f3b4</td>
<td><a href='/fontawesome/fa-itunes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-java'></i> Java</td>
<td>fa-java</td>
<td>fab</td>
<td> \f4e4</td>
<td><a href='/fontawesome/fa-java' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-jedi-order'></i> Jedi Order</td>
<td>fa-jedi-order</td>
<td>fab</td>
<td> \f50e</td>
<td><a href='/fontawesome/fa-jedi-order' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-jenkins'></i> Jenkins</td>
<td>fa-jenkins</td>
<td>fab</td>
<td> \f3b6</td>
<td><a href='/fontawesome/fa-jenkins' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-jira'></i> Jira</td>
<td>fa-jira</td>
<td>fab</td>
<td> \f7b1</td>
<td><a href='/fontawesome/fa-jira' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-joget'></i> Joget</td>
<td>fa-joget</td>
<td>fab</td>
<td> \f3b7</td>
<td><a href='/fontawesome/fa-joget' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-joomla'></i> Joomla</td>
<td>fa-joomla</td>
<td>fab</td>
<td> \f1aa</td>
<td><a href='/fontawesome/fa-joomla' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-js'></i> Js</td>
<td>fa-js</td>
<td>fab</td>
<td> \f3b8</td>
<td><a href='/fontawesome/fa-js' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-jsfiddle'></i> Jsfiddle</td>
<td>fa-jsfiddle</td>
<td>fab</td>
<td> \f1cc</td>
<td><a href='/fontawesome/fa-jsfiddle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-kaggle'></i> Kaggle</td>
<td>fa-kaggle</td>
<td>fab</td>
<td> \f5fa</td>
<td><a href='/fontawesome/fa-kaggle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-keybase'></i> Keybase</td>
<td>fa-keybase</td>
<td>fab</td>
<td> \f4f5</td>
<td><a href='/fontawesome/fa-keybase' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-keycdn'></i> Keycdn</td>
<td>fa-keycdn</td>
<td>fab</td>
<td> \f3ba</td>
<td><a href='/fontawesome/fa-keycdn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-kickstarter-k'></i> Kickstarter K</td>
<td>fa-kickstarter-k</td>
<td>fab</td>
<td> \f3bc</td>
<td><a href='/fontawesome/fa-kickstarter-k' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-kickstarter'></i> Kickstarter</td>
<td>fa-kickstarter</td>
<td>fab</td>
<td> \f3bb</td>
<td><a href='/fontawesome/fa-kickstarter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-korvue'></i> Korvue</td>
<td>fa-korvue</td>
<td>fab</td>
<td> \f42f</td>
<td><a href='/fontawesome/fa-korvue' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-laravel'></i> Laravel</td>
<td>fa-laravel</td>
<td>fab</td>
<td> \f3bd</td>
<td><a href='/fontawesome/fa-laravel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-lastfm'></i> Lastfm</td>
<td>fa-lastfm</td>
<td>fab</td>
<td> \f202</td>
<td><a href='/fontawesome/fa-lastfm' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-leanpub'></i> Leanpub</td>
<td>fa-leanpub</td>
<td>fab</td>
<td> \f212</td>
<td><a href='/fontawesome/fa-leanpub' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-less'></i> Less</td>
<td>fa-less</td>
<td>fab</td>
<td> \f41d</td>
<td><a href='/fontawesome/fa-less' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-line'></i> Line</td>
<td>fa-line</td>
<td>fab</td>
<td> \f3c0</td>
<td><a href='/fontawesome/fa-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-linkedin-in'></i> Linkedin In</td>
<td>fa-linkedin-in</td>
<td>fab</td>
<td> \f0e1</td>
<td><a href='/fontawesome/fa-linkedin-in' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-linkedin'></i> Linkedin</td>
<td>fa-linkedin</td>
<td>fab</td>
<td> \f08c</td>
<td><a href='/fontawesome/fa-linkedin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-linode'></i> Linode</td>
<td>fa-linode</td>
<td>fab</td>
<td> \f2b8</td>
<td><a href='/fontawesome/fa-linode' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-linux'></i> Linux</td>
<td>fa-linux</td>
<td>fab</td>
<td> \f17c</td>
<td><a href='/fontawesome/fa-linux' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-lyft'></i> Lyft</td>
<td>fa-lyft</td>
<td>fab</td>
<td> \f3c3</td>
<td><a href='/fontawesome/fa-lyft' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-magento'></i> Magento</td>
<td>fa-magento</td>
<td>fab</td>
<td> \f3c4</td>
<td><a href='/fontawesome/fa-magento' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mailchimp'></i> Mailchimp</td>
<td>fa-mailchimp</td>
<td>fab</td>
<td> \f59e</td>
<td><a href='/fontawesome/fa-mailchimp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mandalorian'></i> Mandalorian</td>
<td>fa-mandalorian</td>
<td>fab</td>
<td> \f50f</td>
<td><a href='/fontawesome/fa-mandalorian' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-markdown'></i> Markdown</td>
<td>fa-markdown</td>
<td>fab</td>
<td> \f60f</td>
<td><a href='/fontawesome/fa-markdown' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mastodon'></i> Mastodon</td>
<td>fa-mastodon</td>
<td>fab</td>
<td> \f4f6</td>
<td><a href='/fontawesome/fa-mastodon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-maxcdn'></i> Maxcdn</td>
<td>fa-maxcdn</td>
<td>fab</td>
<td> \f136</td>
<td><a href='/fontawesome/fa-maxcdn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mdb'></i> Mdb</td>
<td>fa-mdb</td>
<td>fab</td>
<td> \f8ca</td>
<td><a href='/fontawesome/fa-mdb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-medapps'></i> Medapps</td>
<td>fa-medapps</td>
<td>fab</td>
<td> \f3c6</td>
<td><a href='/fontawesome/fa-medapps' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-medium'></i> Medium</td>
<td>fa-medium</td>
<td>fab</td>
<td> \f23a</td>
<td><a href='/fontawesome/fa-medium' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-medrt'></i> Medrt</td>
<td>fa-medrt</td>
<td>fab</td>
<td> \f3c8</td>
<td><a href='/fontawesome/fa-medrt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-meetup'></i> Meetup</td>
<td>fa-meetup</td>
<td>fab</td>
<td> \f2e0</td>
<td><a href='/fontawesome/fa-meetup' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-megaport'></i> Megaport</td>
<td>fa-megaport</td>
<td>fab</td>
<td> \f5a3</td>
<td><a href='/fontawesome/fa-megaport' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mendeley'></i> Mendeley</td>
<td>fa-mendeley</td>
<td>fab</td>
<td> \f7b3</td>
<td><a href='/fontawesome/fa-mendeley' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-meta'></i> Meta</td>
<td>fa-meta</td>
<td>fab</td>
<td> \e49b</td>
<td><a href='/fontawesome/fa-meta' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-microblog'></i> Microblog</td>
<td>fa-microblog</td>
<td>fab</td>
<td> \e01a</td>
<td><a href='/fontawesome/fa-microblog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-microsoft'></i> Microsoft</td>
<td>fa-microsoft</td>
<td>fab</td>
<td> \f3ca</td>
<td><a href='/fontawesome/fa-microsoft' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mix'></i> Mix</td>
<td>fa-mix</td>
<td>fab</td>
<td> \f3cb</td>
<td><a href='/fontawesome/fa-mix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mixcloud'></i> Mixcloud</td>
<td>fa-mixcloud</td>
<td>fab</td>
<td> \f289</td>
<td><a href='/fontawesome/fa-mixcloud' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mixer'></i> Mixer</td>
<td>fa-mixer</td>
<td>fab</td>
<td> \e056</td>
<td><a href='/fontawesome/fa-mixer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-mizuni'></i> Mizuni</td>
<td>fa-mizuni</td>
<td>fab</td>
<td> \f3cc</td>
<td><a href='/fontawesome/fa-mizuni' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-modx'></i> Modx</td>
<td>fa-modx</td>
<td>fab</td>
<td> \f285</td>
<td><a href='/fontawesome/fa-modx' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-monero'></i> Monero</td>
<td>fa-monero</td>
<td>fab</td>
<td> \f3d0</td>
<td><a href='/fontawesome/fa-monero' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-napster'></i> Napster</td>
<td>fa-napster</td>
<td>fab</td>
<td> \f3d2</td>
<td><a href='/fontawesome/fa-napster' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-neos'></i> Neos</td>
<td>fa-neos</td>
<td>fab</td>
<td> \f612</td>
<td><a href='/fontawesome/fa-neos' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-nfc-directional'></i> Nfc Directional</td>
<td>fa-nfc-directional</td>
<td>fab</td>
<td> \e530</td>
<td><a href='/fontawesome/fa-nfc-directional' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-nfc-symbol'></i> Nfc Symbol</td>
<td>fa-nfc-symbol</td>
<td>fab</td>
<td> \e531</td>
<td><a href='/fontawesome/fa-nfc-symbol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-nimblr'></i> Nimblr</td>
<td>fa-nimblr</td>
<td>fab</td>
<td> \f5a8</td>
<td><a href='/fontawesome/fa-nimblr' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-node-js'></i> Node Js</td>
<td>fa-node-js</td>
<td>fab</td>
<td> \f3d3</td>
<td><a href='/fontawesome/fa-node-js' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-node'></i> Node</td>
<td>fa-node</td>
<td>fab</td>
<td> \f419</td>
<td><a href='/fontawesome/fa-node' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-npm'></i> Npm</td>
<td>fa-npm</td>
<td>fab</td>
<td> \f3d4</td>
<td><a href='/fontawesome/fa-npm' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ns8'></i> Ns8</td>
<td>fa-ns8</td>
<td>fab</td>
<td> \f3d5</td>
<td><a href='/fontawesome/fa-ns8' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-nutritionix'></i> Nutritionix</td>
<td>fa-nutritionix</td>
<td>fab</td>
<td> \f3d6</td>
<td><a href='/fontawesome/fa-nutritionix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-octopus-deploy'></i> Octopus Deploy</td>
<td>fa-octopus-deploy</td>
<td>fab</td>
<td> \e082</td>
<td><a href='/fontawesome/fa-octopus-deploy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-odnoklassniki'></i> Odnoklassniki</td>
<td>fa-odnoklassniki</td>
<td>fab</td>
<td> \f263</td>
<td><a href='/fontawesome/fa-odnoklassniki' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-old-republic'></i> Old Republic</td>
<td>fa-old-republic</td>
<td>fab</td>
<td> \f510</td>
<td><a href='/fontawesome/fa-old-republic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-opencart'></i> Opencart</td>
<td>fa-opencart</td>
<td>fab</td>
<td> \f23d</td>
<td><a href='/fontawesome/fa-opencart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-openid'></i> Openid</td>
<td>fa-openid</td>
<td>fab</td>
<td> \f19b</td>
<td><a href='/fontawesome/fa-openid' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-opera'></i> Opera</td>
<td>fa-opera</td>
<td>fab</td>
<td> \f26a</td>
<td><a href='/fontawesome/fa-opera' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-optin-monster'></i> Optin Monster</td>
<td>fa-optin-monster</td>
<td>fab</td>
<td> \f23c</td>
<td><a href='/fontawesome/fa-optin-monster' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-orcid'></i> Orcid</td>
<td>fa-orcid</td>
<td>fab</td>
<td> \f8d2</td>
<td><a href='/fontawesome/fa-orcid' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-osi'></i> Osi</td>
<td>fa-osi</td>
<td>fab</td>
<td> \f41a</td>
<td><a href='/fontawesome/fa-osi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-padlet'></i> Padlet</td>
<td>fa-padlet</td>
<td>fab</td>
<td> \e4a0</td>
<td><a href='/fontawesome/fa-padlet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-page4'></i> Page4</td>
<td>fa-page4</td>
<td>fab</td>
<td> \f3d7</td>
<td><a href='/fontawesome/fa-page4' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pagelines'></i> Pagelines</td>
<td>fa-pagelines</td>
<td>fab</td>
<td> \f18c</td>
<td><a href='/fontawesome/fa-pagelines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-palfed'></i> Palfed</td>
<td>fa-palfed</td>
<td>fab</td>
<td> \f3d8</td>
<td><a href='/fontawesome/fa-palfed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-patreon'></i> Patreon</td>
<td>fa-patreon</td>
<td>fab</td>
<td> \f3d9</td>
<td><a href='/fontawesome/fa-patreon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-paypal'></i> Paypal</td>
<td>fa-paypal</td>
<td>fab</td>
<td> \f1ed</td>
<td><a href='/fontawesome/fa-paypal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-perbyte'></i> Perbyte</td>
<td>fa-perbyte</td>
<td>fab</td>
<td> \e083</td>
<td><a href='/fontawesome/fa-perbyte' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-periscope'></i> Periscope</td>
<td>fa-periscope</td>
<td>fab</td>
<td> \f3da</td>
<td><a href='/fontawesome/fa-periscope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-phabricator'></i> Phabricator</td>
<td>fa-phabricator</td>
<td>fab</td>
<td> \f3db</td>
<td><a href='/fontawesome/fa-phabricator' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-phoenix-framework'></i> Phoenix Framework</td>
<td>fa-phoenix-framework</td>
<td>fab</td>
<td> \f3dc</td>
<td><a href='/fontawesome/fa-phoenix-framework' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-phoenix-squadron'></i> Phoenix Squadron</td>
<td>fa-phoenix-squadron</td>
<td>fab</td>
<td> \f511</td>
<td><a href='/fontawesome/fa-phoenix-squadron' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-php'></i> Php</td>
<td>fa-php</td>
<td>fab</td>
<td> \f457</td>
<td><a href='/fontawesome/fa-php' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pied-piper-alt'></i> Pied Piper Alt</td>
<td>fa-pied-piper-alt</td>
<td>fab</td>
<td> \f1a8</td>
<td><a href='/fontawesome/fa-pied-piper-alt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pied-piper-hat'></i> Pied Piper Hat</td>
<td>fa-pied-piper-hat</td>
<td>fab</td>
<td> \f4e5</td>
<td><a href='/fontawesome/fa-pied-piper-hat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pied-piper-pp'></i> Pied Piper Pp</td>
<td>fa-pied-piper-pp</td>
<td>fab</td>
<td> \f1a7</td>
<td><a href='/fontawesome/fa-pied-piper-pp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pied-piper'></i> Pied Piper</td>
<td>fa-pied-piper</td>
<td>fab</td>
<td> \f2ae</td>
<td><a href='/fontawesome/fa-pied-piper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pinterest-p'></i> Pinterest P</td>
<td>fa-pinterest-p</td>
<td>fab</td>
<td> \f231</td>
<td><a href='/fontawesome/fa-pinterest-p' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pinterest'></i> Pinterest</td>
<td>fa-pinterest</td>
<td>fab</td>
<td> \f0d2</td>
<td><a href='/fontawesome/fa-pinterest' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pix'></i> Pix</td>
<td>fa-pix</td>
<td>fab</td>
<td> \e43a</td>
<td><a href='/fontawesome/fa-pix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-playstation'></i> Playstation</td>
<td>fa-playstation</td>
<td>fab</td>
<td> \f3df</td>
<td><a href='/fontawesome/fa-playstation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-product-hunt'></i> Product Hunt</td>
<td>fa-product-hunt</td>
<td>fab</td>
<td> \f288</td>
<td><a href='/fontawesome/fa-product-hunt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-pushed'></i> Pushed</td>
<td>fa-pushed</td>
<td>fab</td>
<td> \f3e1</td>
<td><a href='/fontawesome/fa-pushed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-python'></i> Python</td>
<td>fa-python</td>
<td>fab</td>
<td> \f3e2</td>
<td><a href='/fontawesome/fa-python' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-qq'></i> Qq</td>
<td>fa-qq</td>
<td>fab</td>
<td> \f1d6</td>
<td><a href='/fontawesome/fa-qq' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-quinscape'></i> Quinscape</td>
<td>fa-quinscape</td>
<td>fab</td>
<td> \f459</td>
<td><a href='/fontawesome/fa-quinscape' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-quora'></i> Quora</td>
<td>fa-quora</td>
<td>fab</td>
<td> \f2c4</td>
<td><a href='/fontawesome/fa-quora' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-r-project'></i> R Project</td>
<td>fa-r-project</td>
<td>fab</td>
<td> \f4f7</td>
<td><a href='/fontawesome/fa-r-project' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-raspberry-pi'></i> Raspberry Pi</td>
<td>fa-raspberry-pi</td>
<td>fab</td>
<td> \f7bb</td>
<td><a href='/fontawesome/fa-raspberry-pi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ravelry'></i> Ravelry</td>
<td>fa-ravelry</td>
<td>fab</td>
<td> \f2d9</td>
<td><a href='/fontawesome/fa-ravelry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-react'></i> React</td>
<td>fa-react</td>
<td>fab</td>
<td> \f41b</td>
<td><a href='/fontawesome/fa-react' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-reacteurope'></i> Reacteurope</td>
<td>fa-reacteurope</td>
<td>fab</td>
<td> \f75d</td>
<td><a href='/fontawesome/fa-reacteurope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-readme'></i> Readme</td>
<td>fa-readme</td>
<td>fab</td>
<td> \f4d5</td>
<td><a href='/fontawesome/fa-readme' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-rebel'></i> Rebel</td>
<td>fa-rebel</td>
<td>fab</td>
<td> \f1d0</td>
<td><a href='/fontawesome/fa-rebel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-red-river'></i> Red River</td>
<td>fa-red-river</td>
<td>fab</td>
<td> \f3e3</td>
<td><a href='/fontawesome/fa-red-river' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-reddit-alien'></i> Reddit Alien</td>
<td>fa-reddit-alien</td>
<td>fab</td>
<td> \f281</td>
<td><a href='/fontawesome/fa-reddit-alien' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-reddit'></i> Reddit</td>
<td>fa-reddit</td>
<td>fab</td>
<td> \f1a1</td>
<td><a href='/fontawesome/fa-reddit' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-redhat'></i> Redhat</td>
<td>fa-redhat</td>
<td>fab</td>
<td> \f7bc</td>
<td><a href='/fontawesome/fa-redhat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-renren'></i> Renren</td>
<td>fa-renren</td>
<td>fab</td>
<td> \f18b</td>
<td><a href='/fontawesome/fa-renren' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-replyd'></i> Replyd</td>
<td>fa-replyd</td>
<td>fab</td>
<td> \f3e6</td>
<td><a href='/fontawesome/fa-replyd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-researchgate'></i> Researchgate</td>
<td>fa-researchgate</td>
<td>fab</td>
<td> \f4f8</td>
<td><a href='/fontawesome/fa-researchgate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-resolving'></i> Resolving</td>
<td>fa-resolving</td>
<td>fab</td>
<td> \f3e7</td>
<td><a href='/fontawesome/fa-resolving' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-rev'></i> Rev</td>
<td>fa-rev</td>
<td>fab</td>
<td> \f5b2</td>
<td><a href='/fontawesome/fa-rev' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-rocketchat'></i> Rocketchat</td>
<td>fa-rocketchat</td>
<td>fab</td>
<td> \f3e8</td>
<td><a href='/fontawesome/fa-rocketchat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-rockrms'></i> Rockrms</td>
<td>fa-rockrms</td>
<td>fab</td>
<td> \f3e9</td>
<td><a href='/fontawesome/fa-rockrms' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-rust'></i> Rust</td>
<td>fa-rust</td>
<td>fab</td>
<td> \e07a</td>
<td><a href='/fontawesome/fa-rust' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-safari'></i> Safari</td>
<td>fa-safari</td>
<td>fab</td>
<td> \f267</td>
<td><a href='/fontawesome/fa-safari' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-salesforce'></i> Salesforce</td>
<td>fa-salesforce</td>
<td>fab</td>
<td> \f83b</td>
<td><a href='/fontawesome/fa-salesforce' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sass'></i> Sass</td>
<td>fa-sass</td>
<td>fab</td>
<td> \f41e</td>
<td><a href='/fontawesome/fa-sass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-schlix'></i> Schlix</td>
<td>fa-schlix</td>
<td>fab</td>
<td> \f3ea</td>
<td><a href='/fontawesome/fa-schlix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-screenpal'></i> Screenpal</td>
<td>fa-screenpal</td>
<td>fab</td>
<td> \e570</td>
<td><a href='/fontawesome/fa-screenpal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-scribd'></i> Scribd</td>
<td>fa-scribd</td>
<td>fab</td>
<td> \f28a</td>
<td><a href='/fontawesome/fa-scribd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-searchengin'></i> Searchengin</td>
<td>fa-searchengin</td>
<td>fab</td>
<td> \f3eb</td>
<td><a href='/fontawesome/fa-searchengin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sellcast'></i> Sellcast</td>
<td>fa-sellcast</td>
<td>fab</td>
<td> \f2da</td>
<td><a href='/fontawesome/fa-sellcast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sellsy'></i> Sellsy</td>
<td>fa-sellsy</td>
<td>fab</td>
<td> \f213</td>
<td><a href='/fontawesome/fa-sellsy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-servicestack'></i> Servicestack</td>
<td>fa-servicestack</td>
<td>fab</td>
<td> \f3ec</td>
<td><a href='/fontawesome/fa-servicestack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-shirtsinbulk'></i> Shirtsinbulk</td>
<td>fa-shirtsinbulk</td>
<td>fab</td>
<td> \f214</td>
<td><a href='/fontawesome/fa-shirtsinbulk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-shopify'></i> Shopify</td>
<td>fa-shopify</td>
<td>fab</td>
<td> \e057</td>
<td><a href='/fontawesome/fa-shopify' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-shopware'></i> Shopware</td>
<td>fa-shopware</td>
<td>fab</td>
<td> \f5b5</td>
<td><a href='/fontawesome/fa-shopware' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-simplybuilt'></i> Simplybuilt</td>
<td>fa-simplybuilt</td>
<td>fab</td>
<td> \f215</td>
<td><a href='/fontawesome/fa-simplybuilt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sistrix'></i> Sistrix</td>
<td>fa-sistrix</td>
<td>fab</td>
<td> \f3ee</td>
<td><a href='/fontawesome/fa-sistrix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sith'></i> Sith</td>
<td>fa-sith</td>
<td>fab</td>
<td> \f512</td>
<td><a href='/fontawesome/fa-sith' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sitrox'></i> Sitrox</td>
<td>fa-sitrox</td>
<td>fab</td>
<td> \e44a</td>
<td><a href='/fontawesome/fa-sitrox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sketch'></i> Sketch</td>
<td>fa-sketch</td>
<td>fab</td>
<td> \f7c6</td>
<td><a href='/fontawesome/fa-sketch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-skyatlas'></i> Skyatlas</td>
<td>fa-skyatlas</td>
<td>fab</td>
<td> \f216</td>
<td><a href='/fontawesome/fa-skyatlas' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-skype'></i> Skype</td>
<td>fa-skype</td>
<td>fab</td>
<td> \f17e</td>
<td><a href='/fontawesome/fa-skype' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-slack'></i> Slack</td>
<td>fa-slack</td>
<td>fab</td>
<td> \f198</td>
<td><a href='/fontawesome/fa-slack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-slideshare'></i> Slideshare</td>
<td>fa-slideshare</td>
<td>fab</td>
<td> \f1e7</td>
<td><a href='/fontawesome/fa-slideshare' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-snapchat'></i> Snapchat</td>
<td>fa-snapchat</td>
<td>fab</td>
<td> \f2ab</td>
<td><a href='/fontawesome/fa-snapchat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-soundcloud'></i> Soundcloud</td>
<td>fa-soundcloud</td>
<td>fab</td>
<td> \f1be</td>
<td><a href='/fontawesome/fa-soundcloud' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sourcetree'></i> Sourcetree</td>
<td>fa-sourcetree</td>
<td>fab</td>
<td> \f7d3</td>
<td><a href='/fontawesome/fa-sourcetree' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-space-awesome'></i> Space Awesome</td>
<td>fa-space-awesome</td>
<td>fab</td>
<td> \e5ac</td>
<td><a href='/fontawesome/fa-space-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-speakap'></i> Speakap</td>
<td>fa-speakap</td>
<td>fab</td>
<td> \f3f3</td>
<td><a href='/fontawesome/fa-speakap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-speaker-deck'></i> Speaker Deck</td>
<td>fa-speaker-deck</td>
<td>fab</td>
<td> \f83c</td>
<td><a href='/fontawesome/fa-speaker-deck' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-spotify'></i> Spotify</td>
<td>fa-spotify</td>
<td>fab</td>
<td> \f1bc</td>
<td><a href='/fontawesome/fa-spotify' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-behance'></i> Square Behance</td>
<td>fa-square-behance</td>
<td>fab</td>
<td> \f1b5</td>
<td><a href='/fontawesome/fa-square-behance' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-dribbble'></i> Square Dribbble</td>
<td>fa-square-dribbble</td>
<td>fab</td>
<td> \f397</td>
<td><a href='/fontawesome/fa-square-dribbble' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-facebook'></i> Square Facebook</td>
<td>fa-square-facebook</td>
<td>fab</td>
<td> \f082</td>
<td><a href='/fontawesome/fa-square-facebook' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-font-awesome-stroke'></i> Square Font Awesome Stroke</td>
<td>fa-square-font-awesome-stroke</td>
<td>fab</td>
<td> \f35c</td>
<td><a href='/fontawesome/fa-square-font-awesome-stroke' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-font-awesome'></i> Square Font Awesome</td>
<td>fa-square-font-awesome</td>
<td>fab</td>
<td> \e5ad</td>
<td><a href='/fontawesome/fa-square-font-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-git'></i> Square Git</td>
<td>fa-square-git</td>
<td>fab</td>
<td> \f1d2</td>
<td><a href='/fontawesome/fa-square-git' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-github'></i> Square Github</td>
<td>fa-square-github</td>
<td>fab</td>
<td> \f092</td>
<td><a href='/fontawesome/fa-square-github' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-gitlab'></i> Square Gitlab</td>
<td>fa-square-gitlab</td>
<td>fab</td>
<td> \e5ae</td>
<td><a href='/fontawesome/fa-square-gitlab' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-google-plus'></i> Square Google Plus</td>
<td>fa-square-google-plus</td>
<td>fab</td>
<td> \f0d4</td>
<td><a href='/fontawesome/fa-square-google-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-hacker-news'></i> Square Hacker News</td>
<td>fa-square-hacker-news</td>
<td>fab</td>
<td> \f3af</td>
<td><a href='/fontawesome/fa-square-hacker-news' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-instagram'></i> Square Instagram</td>
<td>fa-square-instagram</td>
<td>fab</td>
<td> \e055</td>
<td><a href='/fontawesome/fa-square-instagram' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-js'></i> Square Js</td>
<td>fa-square-js</td>
<td>fab</td>
<td> \f3b9</td>
<td><a href='/fontawesome/fa-square-js' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-lastfm'></i> Square Lastfm</td>
<td>fa-square-lastfm</td>
<td>fab</td>
<td> \f203</td>
<td><a href='/fontawesome/fa-square-lastfm' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-odnoklassniki'></i> Square Odnoklassniki</td>
<td>fa-square-odnoklassniki</td>
<td>fab</td>
<td> \f264</td>
<td><a href='/fontawesome/fa-square-odnoklassniki' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-pied-piper'></i> Square Pied Piper</td>
<td>fa-square-pied-piper</td>
<td>fab</td>
<td> \e01e</td>
<td><a href='/fontawesome/fa-square-pied-piper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-pinterest'></i> Square Pinterest</td>
<td>fa-square-pinterest</td>
<td>fab</td>
<td> \f0d3</td>
<td><a href='/fontawesome/fa-square-pinterest' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-reddit'></i> Square Reddit</td>
<td>fa-square-reddit</td>
<td>fab</td>
<td> \f1a2</td>
<td><a href='/fontawesome/fa-square-reddit' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-snapchat'></i> Square Snapchat</td>
<td>fa-square-snapchat</td>
<td>fab</td>
<td> \f2ad</td>
<td><a href='/fontawesome/fa-square-snapchat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-steam'></i> Square Steam</td>
<td>fa-square-steam</td>
<td>fab</td>
<td> \f1b7</td>
<td><a href='/fontawesome/fa-square-steam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-tumblr'></i> Square Tumblr</td>
<td>fa-square-tumblr</td>
<td>fab</td>
<td> \f174</td>
<td><a href='/fontawesome/fa-square-tumblr' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-twitter'></i> Square Twitter</td>
<td>fa-square-twitter</td>
<td>fab</td>
<td> \f081</td>
<td><a href='/fontawesome/fa-square-twitter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-viadeo'></i> Square Viadeo</td>
<td>fa-square-viadeo</td>
<td>fab</td>
<td> \f2aa</td>
<td><a href='/fontawesome/fa-square-viadeo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-vimeo'></i> Square Vimeo</td>
<td>fa-square-vimeo</td>
<td>fab</td>
<td> \f194</td>
<td><a href='/fontawesome/fa-square-vimeo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-whatsapp'></i> Square Whatsapp</td>
<td>fa-square-whatsapp</td>
<td>fab</td>
<td> \f40c</td>
<td><a href='/fontawesome/fa-square-whatsapp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-xing'></i> Square Xing</td>
<td>fa-square-xing</td>
<td>fab</td>
<td> \f169</td>
<td><a href='/fontawesome/fa-square-xing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-square-youtube'></i> Square Youtube</td>
<td>fa-square-youtube</td>
<td>fab</td>
<td> \f431</td>
<td><a href='/fontawesome/fa-square-youtube' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-squarespace'></i> Squarespace</td>
<td>fa-squarespace</td>
<td>fab</td>
<td> \f5be</td>
<td><a href='/fontawesome/fa-squarespace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stack-exchange'></i> Stack Exchange</td>
<td>fa-stack-exchange</td>
<td>fab</td>
<td> \f18d</td>
<td><a href='/fontawesome/fa-stack-exchange' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stack-overflow'></i> Stack Overflow</td>
<td>fa-stack-overflow</td>
<td>fab</td>
<td> \f16c</td>
<td><a href='/fontawesome/fa-stack-overflow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stackpath'></i> Stackpath</td>
<td>fa-stackpath</td>
<td>fab</td>
<td> \f842</td>
<td><a href='/fontawesome/fa-stackpath' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-staylinked'></i> Staylinked</td>
<td>fa-staylinked</td>
<td>fab</td>
<td> \f3f5</td>
<td><a href='/fontawesome/fa-staylinked' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-steam-symbol'></i> Steam Symbol</td>
<td>fa-steam-symbol</td>
<td>fab</td>
<td> \f3f6</td>
<td><a href='/fontawesome/fa-steam-symbol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-steam'></i> Steam</td>
<td>fa-steam</td>
<td>fab</td>
<td> \f1b6</td>
<td><a href='/fontawesome/fa-steam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-sticker-mule'></i> Sticker Mule</td>
<td>fa-sticker-mule</td>
<td>fab</td>
<td> \f3f7</td>
<td><a href='/fontawesome/fa-sticker-mule' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-strava'></i> Strava</td>
<td>fa-strava</td>
<td>fab</td>
<td> \f428</td>
<td><a href='/fontawesome/fa-strava' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stripe-s'></i> Stripe S</td>
<td>fa-stripe-s</td>
<td>fab</td>
<td> \f42a</td>
<td><a href='/fontawesome/fa-stripe-s' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stripe'></i> Stripe</td>
<td>fa-stripe</td>
<td>fab</td>
<td> \f429</td>
<td><a href='/fontawesome/fa-stripe' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-studiovinari'></i> Studiovinari</td>
<td>fa-studiovinari</td>
<td>fab</td>
<td> \f3f8</td>
<td><a href='/fontawesome/fa-studiovinari' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stumbleupon-circle'></i> Stumbleupon Circle</td>
<td>fa-stumbleupon-circle</td>
<td>fab</td>
<td> \f1a3</td>
<td><a href='/fontawesome/fa-stumbleupon-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-stumbleupon'></i> Stumbleupon</td>
<td>fa-stumbleupon</td>
<td>fab</td>
<td> \f1a4</td>
<td><a href='/fontawesome/fa-stumbleupon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-superpowers'></i> Superpowers</td>
<td>fa-superpowers</td>
<td>fab</td>
<td> \f2dd</td>
<td><a href='/fontawesome/fa-superpowers' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-supple'></i> Supple</td>
<td>fa-supple</td>
<td>fab</td>
<td> \f3f9</td>
<td><a href='/fontawesome/fa-supple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-suse'></i> Suse</td>
<td>fa-suse</td>
<td>fab</td>
<td> \f7d6</td>
<td><a href='/fontawesome/fa-suse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-swift'></i> Swift</td>
<td>fa-swift</td>
<td>fab</td>
<td> \f8e1</td>
<td><a href='/fontawesome/fa-swift' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-symfony'></i> Symfony</td>
<td>fa-symfony</td>
<td>fab</td>
<td> \f83d</td>
<td><a href='/fontawesome/fa-symfony' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-teamspeak'></i> Teamspeak</td>
<td>fa-teamspeak</td>
<td>fab</td>
<td> \f4f9</td>
<td><a href='/fontawesome/fa-teamspeak' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-telegram'></i> Telegram</td>
<td>fa-telegram</td>
<td>fab</td>
<td> \f2c6</td>
<td><a href='/fontawesome/fa-telegram' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-tencent-weibo'></i> Tencent Weibo</td>
<td>fa-tencent-weibo</td>
<td>fab</td>
<td> \f1d5</td>
<td><a href='/fontawesome/fa-tencent-weibo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-the-red-yeti'></i> The Red Yeti</td>
<td>fa-the-red-yeti</td>
<td>fab</td>
<td> \f69d</td>
<td><a href='/fontawesome/fa-the-red-yeti' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-themeco'></i> Themeco</td>
<td>fa-themeco</td>
<td>fab</td>
<td> \f5c6</td>
<td><a href='/fontawesome/fa-themeco' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-themeisle'></i> Themeisle</td>
<td>fa-themeisle</td>
<td>fab</td>
<td> \f2b2</td>
<td><a href='/fontawesome/fa-themeisle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-think-peaks'></i> Think Peaks</td>
<td>fa-think-peaks</td>
<td>fab</td>
<td> \f731</td>
<td><a href='/fontawesome/fa-think-peaks' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-tiktok'></i> Tiktok</td>
<td>fa-tiktok</td>
<td>fab</td>
<td> \e07b</td>
<td><a href='/fontawesome/fa-tiktok' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-trade-federation'></i> Trade Federation</td>
<td>fa-trade-federation</td>
<td>fab</td>
<td> \f513</td>
<td><a href='/fontawesome/fa-trade-federation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-trello'></i> Trello</td>
<td>fa-trello</td>
<td>fab</td>
<td> \f181</td>
<td><a href='/fontawesome/fa-trello' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-tumblr'></i> Tumblr</td>
<td>fa-tumblr</td>
<td>fab</td>
<td> \f173</td>
<td><a href='/fontawesome/fa-tumblr' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-twitch'></i> Twitch</td>
<td>fa-twitch</td>
<td>fab</td>
<td> \f1e8</td>
<td><a href='/fontawesome/fa-twitch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-twitter'></i> Twitter</td>
<td>fa-twitter</td>
<td>fab</td>
<td> \f099</td>
<td><a href='/fontawesome/fa-twitter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-typo3'></i> Typo3</td>
<td>fa-typo3</td>
<td>fab</td>
<td> \f42b</td>
<td><a href='/fontawesome/fa-typo3' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-uber'></i> Uber</td>
<td>fa-uber</td>
<td>fab</td>
<td> \f402</td>
<td><a href='/fontawesome/fa-uber' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ubuntu'></i> Ubuntu</td>
<td>fa-ubuntu</td>
<td>fab</td>
<td> \f7df</td>
<td><a href='/fontawesome/fa-ubuntu' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-uikit'></i> Uikit</td>
<td>fa-uikit</td>
<td>fab</td>
<td> \f403</td>
<td><a href='/fontawesome/fa-uikit' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-umbraco'></i> Umbraco</td>
<td>fa-umbraco</td>
<td>fab</td>
<td> \f8e8</td>
<td><a href='/fontawesome/fa-umbraco' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-uncharted'></i> Uncharted</td>
<td>fa-uncharted</td>
<td>fab</td>
<td> \e084</td>
<td><a href='/fontawesome/fa-uncharted' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-uniregistry'></i> Uniregistry</td>
<td>fa-uniregistry</td>
<td>fab</td>
<td> \f404</td>
<td><a href='/fontawesome/fa-uniregistry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-unity'></i> Unity</td>
<td>fa-unity</td>
<td>fab</td>
<td> \e049</td>
<td><a href='/fontawesome/fa-unity' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-unsplash'></i> Unsplash</td>
<td>fa-unsplash</td>
<td>fab</td>
<td> \e07c</td>
<td><a href='/fontawesome/fa-unsplash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-untappd'></i> Untappd</td>
<td>fa-untappd</td>
<td>fab</td>
<td> \f405</td>
<td><a href='/fontawesome/fa-untappd' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ups'></i> Ups</td>
<td>fa-ups</td>
<td>fab</td>
<td> \f7e0</td>
<td><a href='/fontawesome/fa-ups' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-usb'></i> Usb</td>
<td>fa-usb</td>
<td>fab</td>
<td> \f287</td>
<td><a href='/fontawesome/fa-usb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-usps'></i> Usps</td>
<td>fa-usps</td>
<td>fab</td>
<td> \f7e1</td>
<td><a href='/fontawesome/fa-usps' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-ussunnah'></i> Ussunnah</td>
<td>fa-ussunnah</td>
<td>fab</td>
<td> \f407</td>
<td><a href='/fontawesome/fa-ussunnah' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vaadin'></i> Vaadin</td>
<td>fa-vaadin</td>
<td>fab</td>
<td> \f408</td>
<td><a href='/fontawesome/fa-vaadin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-viacoin'></i> Viacoin</td>
<td>fa-viacoin</td>
<td>fab</td>
<td> \f237</td>
<td><a href='/fontawesome/fa-viacoin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-viadeo'></i> Viadeo</td>
<td>fa-viadeo</td>
<td>fab</td>
<td> \f2a9</td>
<td><a href='/fontawesome/fa-viadeo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-viber'></i> Viber</td>
<td>fa-viber</td>
<td>fab</td>
<td> \f409</td>
<td><a href='/fontawesome/fa-viber' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vimeo-v'></i> Vimeo V</td>
<td>fa-vimeo-v</td>
<td>fab</td>
<td> \f27d</td>
<td><a href='/fontawesome/fa-vimeo-v' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vimeo'></i> Vimeo</td>
<td>fa-vimeo</td>
<td>fab</td>
<td> \f40a</td>
<td><a href='/fontawesome/fa-vimeo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vine'></i> Vine</td>
<td>fa-vine</td>
<td>fab</td>
<td> \f1ca</td>
<td><a href='/fontawesome/fa-vine' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vk'></i> Vk</td>
<td>fa-vk</td>
<td>fab</td>
<td> \f189</td>
<td><a href='/fontawesome/fa-vk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vnv'></i> Vnv</td>
<td>fa-vnv</td>
<td>fab</td>
<td> \f40b</td>
<td><a href='/fontawesome/fa-vnv' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-vuejs'></i> Vuejs</td>
<td>fa-vuejs</td>
<td>fab</td>
<td> \f41f</td>
<td><a href='/fontawesome/fa-vuejs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-watchman-monitoring'></i> Watchman Monitoring</td>
<td>fa-watchman-monitoring</td>
<td>fab</td>
<td> \e087</td>
<td><a href='/fontawesome/fa-watchman-monitoring' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-waze'></i> Waze</td>
<td>fa-waze</td>
<td>fab</td>
<td> \f83f</td>
<td><a href='/fontawesome/fa-waze' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-weebly'></i> Weebly</td>
<td>fa-weebly</td>
<td>fab</td>
<td> \f5cc</td>
<td><a href='/fontawesome/fa-weebly' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-weibo'></i> Weibo</td>
<td>fa-weibo</td>
<td>fab</td>
<td> \f18a</td>
<td><a href='/fontawesome/fa-weibo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-weixin'></i> Weixin</td>
<td>fa-weixin</td>
<td>fab</td>
<td> \f1d7</td>
<td><a href='/fontawesome/fa-weixin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-whatsapp'></i> Whatsapp</td>
<td>fa-whatsapp</td>
<td>fab</td>
<td> \f232</td>
<td><a href='/fontawesome/fa-whatsapp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-whmcs'></i> Whmcs</td>
<td>fa-whmcs</td>
<td>fab</td>
<td> \f40d</td>
<td><a href='/fontawesome/fa-whmcs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wikipedia-w'></i> Wikipedia W</td>
<td>fa-wikipedia-w</td>
<td>fab</td>
<td> \f266</td>
<td><a href='/fontawesome/fa-wikipedia-w' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-windows'></i> Windows</td>
<td>fa-windows</td>
<td>fab</td>
<td> \f17a</td>
<td><a href='/fontawesome/fa-windows' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wirsindhandwerk'></i> Wirsindhandwerk</td>
<td>fa-wirsindhandwerk</td>
<td>fab</td>
<td> \e2d0</td>
<td><a href='/fontawesome/fa-wirsindhandwerk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wix'></i> Wix</td>
<td>fa-wix</td>
<td>fab</td>
<td> \f5cf</td>
<td><a href='/fontawesome/fa-wix' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wizards-of-the-coast'></i> Wizards Of The Coast</td>
<td>fa-wizards-of-the-coast</td>
<td>fab</td>
<td> \f730</td>
<td><a href='/fontawesome/fa-wizards-of-the-coast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wodu'></i> Wodu</td>
<td>fa-wodu</td>
<td>fab</td>
<td> \e088</td>
<td><a href='/fontawesome/fa-wodu' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wolf-pack-battalion'></i> Wolf Pack Battalion</td>
<td>fa-wolf-pack-battalion</td>
<td>fab</td>
<td> \f514</td>
<td><a href='/fontawesome/fa-wolf-pack-battalion' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wordpress-simple'></i> Wordpress Simple</td>
<td>fa-wordpress-simple</td>
<td>fab</td>
<td> \f411</td>
<td><a href='/fontawesome/fa-wordpress-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wordpress'></i> Wordpress</td>
<td>fa-wordpress</td>
<td>fab</td>
<td> \f19a</td>
<td><a href='/fontawesome/fa-wordpress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wpbeginner'></i> Wpbeginner</td>
<td>fa-wpbeginner</td>
<td>fab</td>
<td> \f297</td>
<td><a href='/fontawesome/fa-wpbeginner' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wpexplorer'></i> Wpexplorer</td>
<td>fa-wpexplorer</td>
<td>fab</td>
<td> \f2de</td>
<td><a href='/fontawesome/fa-wpexplorer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wpforms'></i> Wpforms</td>
<td>fa-wpforms</td>
<td>fab</td>
<td> \f298</td>
<td><a href='/fontawesome/fa-wpforms' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-wpressr'></i> Wpressr</td>
<td>fa-wpressr</td>
<td>fab</td>
<td> \f3e4</td>
<td><a href='/fontawesome/fa-wpressr' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-xbox'></i> Xbox</td>
<td>fa-xbox</td>
<td>fab</td>
<td> \f412</td>
<td><a href='/fontawesome/fa-xbox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-xing'></i> Xing</td>
<td>fa-xing</td>
<td>fab</td>
<td> \f168</td>
<td><a href='/fontawesome/fa-xing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-y-combinator'></i> Y Combinator</td>
<td>fa-y-combinator</td>
<td>fab</td>
<td> \f23b</td>
<td><a href='/fontawesome/fa-y-combinator' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yahoo'></i> Yahoo</td>
<td>fa-yahoo</td>
<td>fab</td>
<td> \f19e</td>
<td><a href='/fontawesome/fa-yahoo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yammer'></i> Yammer</td>
<td>fa-yammer</td>
<td>fab</td>
<td> \f840</td>
<td><a href='/fontawesome/fa-yammer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yandex-international'></i> Yandex International</td>
<td>fa-yandex-international</td>
<td>fab</td>
<td> \f414</td>
<td><a href='/fontawesome/fa-yandex-international' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yandex'></i> Yandex</td>
<td>fa-yandex</td>
<td>fab</td>
<td> \f413</td>
<td><a href='/fontawesome/fa-yandex' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yarn'></i> Yarn</td>
<td>fa-yarn</td>
<td>fab</td>
<td> \f7e3</td>
<td><a href='/fontawesome/fa-yarn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yelp'></i> Yelp</td>
<td>fa-yelp</td>
<td>fab</td>
<td> \f1e9</td>
<td><a href='/fontawesome/fa-yelp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-yoast'></i> Yoast</td>
<td>fa-yoast</td>
<td>fab</td>
<td> \f2b1</td>
<td><a href='/fontawesome/fa-yoast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-youtube'></i> Youtube</td>
<td>fa-youtube</td>
<td>fab</td>
<td> \f167</td>
<td><a href='/fontawesome/fa-youtube' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fab fa-zhihu'></i> Zhihu</td>
<td>fa-zhihu</td>
<td>fab</td>
<td> \f63f</td>
<td><a href='/fontawesome/fa-zhihu' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-address-book'></i> Address Book</td>
<td>fa-address-book</td>
<td>far</td>
<td> \f2b9</td>
<td><a href='/fontawesome/fa-address-book' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-address-card'></i> Address Card</td>
<td>fa-address-card</td>
<td>far</td>
<td> \f2bb</td>
<td><a href='/fontawesome/fa-address-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-bell-slash'></i> Bell Slash</td>
<td>fa-bell-slash</td>
<td>far</td>
<td> \f1f6</td>
<td><a href='/fontawesome/fa-bell-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-bell'></i> Bell</td>
<td>fa-bell</td>
<td>far</td>
<td> \f0f3</td>
<td><a href='/fontawesome/fa-bell' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-bookmark'></i> Bookmark</td>
<td>fa-bookmark</td>
<td>far</td>
<td> \f02e</td>
<td><a href='/fontawesome/fa-bookmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-building'></i> Building</td>
<td>fa-building</td>
<td>far</td>
<td> \f1ad</td>
<td><a href='/fontawesome/fa-building' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar-check'></i> Calendar Check</td>
<td>fa-calendar-check</td>
<td>far</td>
<td> \f274</td>
<td><a href='/fontawesome/fa-calendar-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar-days'></i> Calendar Days</td>
<td>fa-calendar-days</td>
<td>far</td>
<td> \f073</td>
<td><a href='/fontawesome/fa-calendar-days' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar-minus'></i> Calendar Minus</td>
<td>fa-calendar-minus</td>
<td>far</td>
<td> \f272</td>
<td><a href='/fontawesome/fa-calendar-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar-plus'></i> Calendar Plus</td>
<td>fa-calendar-plus</td>
<td>far</td>
<td> \f271</td>
<td><a href='/fontawesome/fa-calendar-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar-xmark'></i> Calendar Xmark</td>
<td>fa-calendar-xmark</td>
<td>far</td>
<td> \f273</td>
<td><a href='/fontawesome/fa-calendar-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-calendar'></i> Calendar</td>
<td>fa-calendar</td>
<td>far</td>
<td> \f133</td>
<td><a href='/fontawesome/fa-calendar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chart-bar'></i> Chart Bar</td>
<td>fa-chart-bar</td>
<td>far</td>
<td> \f080</td>
<td><a href='/fontawesome/fa-chart-bar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-bishop'></i> Chess Bishop</td>
<td>fa-chess-bishop</td>
<td>far</td>
<td> \f43a</td>
<td><a href='/fontawesome/fa-chess-bishop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-king'></i> Chess King</td>
<td>fa-chess-king</td>
<td>far</td>
<td> \f43f</td>
<td><a href='/fontawesome/fa-chess-king' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-knight'></i> Chess Knight</td>
<td>fa-chess-knight</td>
<td>far</td>
<td> \f441</td>
<td><a href='/fontawesome/fa-chess-knight' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-pawn'></i> Chess Pawn</td>
<td>fa-chess-pawn</td>
<td>far</td>
<td> \f443</td>
<td><a href='/fontawesome/fa-chess-pawn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-queen'></i> Chess Queen</td>
<td>fa-chess-queen</td>
<td>far</td>
<td> \f445</td>
<td><a href='/fontawesome/fa-chess-queen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-chess-rook'></i> Chess Rook</td>
<td>fa-chess-rook</td>
<td>far</td>
<td> \f447</td>
<td><a href='/fontawesome/fa-chess-rook' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-check'></i> Circle Check</td>
<td>fa-circle-check</td>
<td>far</td>
<td> \f058</td>
<td><a href='/fontawesome/fa-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-dot'></i> Circle Dot</td>
<td>fa-circle-dot</td>
<td>far</td>
<td> \f192</td>
<td><a href='/fontawesome/fa-circle-dot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-down'></i> Circle Down</td>
<td>fa-circle-down</td>
<td>far</td>
<td> \f358</td>
<td><a href='/fontawesome/fa-circle-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-left'></i> Circle Left</td>
<td>fa-circle-left</td>
<td>far</td>
<td> \f359</td>
<td><a href='/fontawesome/fa-circle-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-pause'></i> Circle Pause</td>
<td>fa-circle-pause</td>
<td>far</td>
<td> \f28b</td>
<td><a href='/fontawesome/fa-circle-pause' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-play'></i> Circle Play</td>
<td>fa-circle-play</td>
<td>far</td>
<td> \f144</td>
<td><a href='/fontawesome/fa-circle-play' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-question'></i> Circle Question</td>
<td>fa-circle-question</td>
<td>far</td>
<td> \f059</td>
<td><a href='/fontawesome/fa-circle-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-right'></i> Circle Right</td>
<td>fa-circle-right</td>
<td>far</td>
<td> \f35a</td>
<td><a href='/fontawesome/fa-circle-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-stop'></i> Circle Stop</td>
<td>fa-circle-stop</td>
<td>far</td>
<td> \f28d</td>
<td><a href='/fontawesome/fa-circle-stop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-up'></i> Circle Up</td>
<td>fa-circle-up</td>
<td>far</td>
<td> \f35b</td>
<td><a href='/fontawesome/fa-circle-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-user'></i> Circle User</td>
<td>fa-circle-user</td>
<td>far</td>
<td> \f2bd</td>
<td><a href='/fontawesome/fa-circle-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle-xmark'></i> Circle Xmark</td>
<td>fa-circle-xmark</td>
<td>far</td>
<td> \f057</td>
<td><a href='/fontawesome/fa-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-circle'></i> Circle</td>
<td>fa-circle</td>
<td>far</td>
<td> \f111</td>
<td><a href='/fontawesome/fa-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-clipboard'></i> Clipboard</td>
<td>fa-clipboard</td>
<td>far</td>
<td> \f328</td>
<td><a href='/fontawesome/fa-clipboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-clock'></i> Clock</td>
<td>fa-clock</td>
<td>far</td>
<td> \f017</td>
<td><a href='/fontawesome/fa-clock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-clone'></i> Clone</td>
<td>fa-clone</td>
<td>far</td>
<td> \f24d</td>
<td><a href='/fontawesome/fa-clone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-closed-captioning'></i> Closed Captioning</td>
<td>fa-closed-captioning</td>
<td>far</td>
<td> \f20a</td>
<td><a href='/fontawesome/fa-closed-captioning' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-comment-dots'></i> Comment Dots</td>
<td>fa-comment-dots</td>
<td>far</td>
<td> \f4ad</td>
<td><a href='/fontawesome/fa-comment-dots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-comment'></i> Comment</td>
<td>fa-comment</td>
<td>far</td>
<td> \f075</td>
<td><a href='/fontawesome/fa-comment' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-comments'></i> Comments</td>
<td>fa-comments</td>
<td>far</td>
<td> \f086</td>
<td><a href='/fontawesome/fa-comments' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-compass'></i> Compass</td>
<td>fa-compass</td>
<td>far</td>
<td> \f14e</td>
<td><a href='/fontawesome/fa-compass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-copy'></i> Copy</td>
<td>fa-copy</td>
<td>far</td>
<td> \f0c5</td>
<td><a href='/fontawesome/fa-copy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-copyright'></i> Copyright</td>
<td>fa-copyright</td>
<td>far</td>
<td> \f1f9</td>
<td><a href='/fontawesome/fa-copyright' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-credit-card'></i> Credit Card</td>
<td>fa-credit-card</td>
<td>far</td>
<td> \f09d</td>
<td><a href='/fontawesome/fa-credit-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-envelope-open'></i> Envelope Open</td>
<td>fa-envelope-open</td>
<td>far</td>
<td> \f2b6</td>
<td><a href='/fontawesome/fa-envelope-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-envelope'></i> Envelope</td>
<td>fa-envelope</td>
<td>far</td>
<td> \f0e0</td>
<td><a href='/fontawesome/fa-envelope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-eye-slash'></i> Eye Slash</td>
<td>fa-eye-slash</td>
<td>far</td>
<td> \f070</td>
<td><a href='/fontawesome/fa-eye-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-eye'></i> Eye</td>
<td>fa-eye</td>
<td>far</td>
<td> \f06e</td>
<td><a href='/fontawesome/fa-eye' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-angry'></i> Face Angry</td>
<td>fa-face-angry</td>
<td>far</td>
<td> \f556</td>
<td><a href='/fontawesome/fa-face-angry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-dizzy'></i> Face Dizzy</td>
<td>fa-face-dizzy</td>
<td>far</td>
<td> \f567</td>
<td><a href='/fontawesome/fa-face-dizzy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-flushed'></i> Face Flushed</td>
<td>fa-face-flushed</td>
<td>far</td>
<td> \f579</td>
<td><a href='/fontawesome/fa-face-flushed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-frown-open'></i> Face Frown Open</td>
<td>fa-face-frown-open</td>
<td>far</td>
<td> \f57a</td>
<td><a href='/fontawesome/fa-face-frown-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-frown'></i> Face Frown</td>
<td>fa-face-frown</td>
<td>far</td>
<td> \f119</td>
<td><a href='/fontawesome/fa-face-frown' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grimace'></i> Face Grimace</td>
<td>fa-face-grimace</td>
<td>far</td>
<td> \f57f</td>
<td><a href='/fontawesome/fa-face-grimace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-beam-sweat'></i> Face Grin Beam Sweat</td>
<td>fa-face-grin-beam-sweat</td>
<td>far</td>
<td> \f583</td>
<td><a href='/fontawesome/fa-face-grin-beam-sweat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-beam'></i> Face Grin Beam</td>
<td>fa-face-grin-beam</td>
<td>far</td>
<td> \f582</td>
<td><a href='/fontawesome/fa-face-grin-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-hearts'></i> Face Grin Hearts</td>
<td>fa-face-grin-hearts</td>
<td>far</td>
<td> \f584</td>
<td><a href='/fontawesome/fa-face-grin-hearts' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-squint-tears'></i> Face Grin Squint Tears</td>
<td>fa-face-grin-squint-tears</td>
<td>far</td>
<td> \f586</td>
<td><a href='/fontawesome/fa-face-grin-squint-tears' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-squint'></i> Face Grin Squint</td>
<td>fa-face-grin-squint</td>
<td>far</td>
<td> \f585</td>
<td><a href='/fontawesome/fa-face-grin-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-stars'></i> Face Grin Stars</td>
<td>fa-face-grin-stars</td>
<td>far</td>
<td> \f587</td>
<td><a href='/fontawesome/fa-face-grin-stars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-tears'></i> Face Grin Tears</td>
<td>fa-face-grin-tears</td>
<td>far</td>
<td> \f588</td>
<td><a href='/fontawesome/fa-face-grin-tears' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-tongue-squint'></i> Face Grin Tongue Squint</td>
<td>fa-face-grin-tongue-squint</td>
<td>far</td>
<td> \f58a</td>
<td><a href='/fontawesome/fa-face-grin-tongue-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-tongue-wink'></i> Face Grin Tongue Wink</td>
<td>fa-face-grin-tongue-wink</td>
<td>far</td>
<td> \f58b</td>
<td><a href='/fontawesome/fa-face-grin-tongue-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-tongue'></i> Face Grin Tongue</td>
<td>fa-face-grin-tongue</td>
<td>far</td>
<td> \f589</td>
<td><a href='/fontawesome/fa-face-grin-tongue' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-wide'></i> Face Grin Wide</td>
<td>fa-face-grin-wide</td>
<td>far</td>
<td> \f581</td>
<td><a href='/fontawesome/fa-face-grin-wide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin-wink'></i> Face Grin Wink</td>
<td>fa-face-grin-wink</td>
<td>far</td>
<td> \f58c</td>
<td><a href='/fontawesome/fa-face-grin-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-grin'></i> Face Grin</td>
<td>fa-face-grin</td>
<td>far</td>
<td> \f580</td>
<td><a href='/fontawesome/fa-face-grin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-kiss-beam'></i> Face Kiss Beam</td>
<td>fa-face-kiss-beam</td>
<td>far</td>
<td> \f597</td>
<td><a href='/fontawesome/fa-face-kiss-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-kiss-wink-heart'></i> Face Kiss Wink Heart</td>
<td>fa-face-kiss-wink-heart</td>
<td>far</td>
<td> \f598</td>
<td><a href='/fontawesome/fa-face-kiss-wink-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-kiss'></i> Face Kiss</td>
<td>fa-face-kiss</td>
<td>far</td>
<td> \f596</td>
<td><a href='/fontawesome/fa-face-kiss' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-laugh-beam'></i> Face Laugh Beam</td>
<td>fa-face-laugh-beam</td>
<td>far</td>
<td> \f59a</td>
<td><a href='/fontawesome/fa-face-laugh-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-laugh-squint'></i> Face Laugh Squint</td>
<td>fa-face-laugh-squint</td>
<td>far</td>
<td> \f59b</td>
<td><a href='/fontawesome/fa-face-laugh-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-laugh-wink'></i> Face Laugh Wink</td>
<td>fa-face-laugh-wink</td>
<td>far</td>
<td> \f59c</td>
<td><a href='/fontawesome/fa-face-laugh-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-laugh'></i> Face Laugh</td>
<td>fa-face-laugh</td>
<td>far</td>
<td> \f599</td>
<td><a href='/fontawesome/fa-face-laugh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-meh-blank'></i> Face Meh Blank</td>
<td>fa-face-meh-blank</td>
<td>far</td>
<td> \f5a4</td>
<td><a href='/fontawesome/fa-face-meh-blank' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-meh'></i> Face Meh</td>
<td>fa-face-meh</td>
<td>far</td>
<td> \f11a</td>
<td><a href='/fontawesome/fa-face-meh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-rolling-eyes'></i> Face Rolling Eyes</td>
<td>fa-face-rolling-eyes</td>
<td>far</td>
<td> \f5a5</td>
<td><a href='/fontawesome/fa-face-rolling-eyes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-sad-cry'></i> Face Sad Cry</td>
<td>fa-face-sad-cry</td>
<td>far</td>
<td> \f5b3</td>
<td><a href='/fontawesome/fa-face-sad-cry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-sad-tear'></i> Face Sad Tear</td>
<td>fa-face-sad-tear</td>
<td>far</td>
<td> \f5b4</td>
<td><a href='/fontawesome/fa-face-sad-tear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-smile-beam'></i> Face Smile Beam</td>
<td>fa-face-smile-beam</td>
<td>far</td>
<td> \f5b8</td>
<td><a href='/fontawesome/fa-face-smile-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-smile-wink'></i> Face Smile Wink</td>
<td>fa-face-smile-wink</td>
<td>far</td>
<td> \f4da</td>
<td><a href='/fontawesome/fa-face-smile-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-smile'></i> Face Smile</td>
<td>fa-face-smile</td>
<td>far</td>
<td> \f118</td>
<td><a href='/fontawesome/fa-face-smile' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-surprise'></i> Face Surprise</td>
<td>fa-face-surprise</td>
<td>far</td>
<td> \f5c2</td>
<td><a href='/fontawesome/fa-face-surprise' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-face-tired'></i> Face Tired</td>
<td>fa-face-tired</td>
<td>far</td>
<td> \f5c8</td>
<td><a href='/fontawesome/fa-face-tired' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-audio'></i> File Audio</td>
<td>fa-file-audio</td>
<td>far</td>
<td> \f1c7</td>
<td><a href='/fontawesome/fa-file-audio' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-code'></i> File Code</td>
<td>fa-file-code</td>
<td>far</td>
<td> \f1c9</td>
<td><a href='/fontawesome/fa-file-code' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-excel'></i> File Excel</td>
<td>fa-file-excel</td>
<td>far</td>
<td> \f1c3</td>
<td><a href='/fontawesome/fa-file-excel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-image'></i> File Image</td>
<td>fa-file-image</td>
<td>far</td>
<td> \f1c5</td>
<td><a href='/fontawesome/fa-file-image' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-lines'></i> File Lines</td>
<td>fa-file-lines</td>
<td>far</td>
<td> \f15c</td>
<td><a href='/fontawesome/fa-file-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-pdf'></i> File Pdf</td>
<td>fa-file-pdf</td>
<td>far</td>
<td> \f1c1</td>
<td><a href='/fontawesome/fa-file-pdf' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-powerpoint'></i> File Powerpoint</td>
<td>fa-file-powerpoint</td>
<td>far</td>
<td> \f1c4</td>
<td><a href='/fontawesome/fa-file-powerpoint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-video'></i> File Video</td>
<td>fa-file-video</td>
<td>far</td>
<td> \f1c8</td>
<td><a href='/fontawesome/fa-file-video' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-word'></i> File Word</td>
<td>fa-file-word</td>
<td>far</td>
<td> \f1c2</td>
<td><a href='/fontawesome/fa-file-word' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file-zipper'></i> File Zipper</td>
<td>fa-file-zipper</td>
<td>far</td>
<td> \f1c6</td>
<td><a href='/fontawesome/fa-file-zipper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-file'></i> File</td>
<td>fa-file</td>
<td>far</td>
<td> \f15b</td>
<td><a href='/fontawesome/fa-file' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-flag'></i> Flag</td>
<td>fa-flag</td>
<td>far</td>
<td> \f024</td>
<td><a href='/fontawesome/fa-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-floppy-disk'></i> Floppy Disk</td>
<td>fa-floppy-disk</td>
<td>far</td>
<td> \f0c7</td>
<td><a href='/fontawesome/fa-floppy-disk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-folder-closed'></i> Folder Closed</td>
<td>fa-folder-closed</td>
<td>far</td>
<td> \e185</td>
<td><a href='/fontawesome/fa-folder-closed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-folder-open'></i> Folder Open</td>
<td>fa-folder-open</td>
<td>far</td>
<td> \f07c</td>
<td><a href='/fontawesome/fa-folder-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-folder'></i> Folder</td>
<td>fa-folder</td>
<td>far</td>
<td> \f07b</td>
<td><a href='/fontawesome/fa-folder' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-font-awesome'></i> Font Awesome</td>
<td>fa-font-awesome</td>
<td>far</td>
<td> \f2b4</td>
<td><a href='/fontawesome/fa-font-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-futbol'></i> Futbol</td>
<td>fa-futbol</td>
<td>far</td>
<td> \f1e3</td>
<td><a href='/fontawesome/fa-futbol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-gem'></i> Gem</td>
<td>fa-gem</td>
<td>far</td>
<td> \f3a5</td>
<td><a href='/fontawesome/fa-gem' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-back-fist'></i> Hand Back Fist</td>
<td>fa-hand-back-fist</td>
<td>far</td>
<td> \f255</td>
<td><a href='/fontawesome/fa-hand-back-fist' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-lizard'></i> Hand Lizard</td>
<td>fa-hand-lizard</td>
<td>far</td>
<td> \f258</td>
<td><a href='/fontawesome/fa-hand-lizard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-peace'></i> Hand Peace</td>
<td>fa-hand-peace</td>
<td>far</td>
<td> \f25b</td>
<td><a href='/fontawesome/fa-hand-peace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-point-down'></i> Hand Point Down</td>
<td>fa-hand-point-down</td>
<td>far</td>
<td> \f0a7</td>
<td><a href='/fontawesome/fa-hand-point-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-point-left'></i> Hand Point Left</td>
<td>fa-hand-point-left</td>
<td>far</td>
<td> \f0a5</td>
<td><a href='/fontawesome/fa-hand-point-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-point-right'></i> Hand Point Right</td>
<td>fa-hand-point-right</td>
<td>far</td>
<td> \f0a4</td>
<td><a href='/fontawesome/fa-hand-point-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-point-up'></i> Hand Point Up</td>
<td>fa-hand-point-up</td>
<td>far</td>
<td> \f0a6</td>
<td><a href='/fontawesome/fa-hand-point-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-pointer'></i> Hand Pointer</td>
<td>fa-hand-pointer</td>
<td>far</td>
<td> \f25a</td>
<td><a href='/fontawesome/fa-hand-pointer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-scissors'></i> Hand Scissors</td>
<td>fa-hand-scissors</td>
<td>far</td>
<td> \f257</td>
<td><a href='/fontawesome/fa-hand-scissors' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand-spock'></i> Hand Spock</td>
<td>fa-hand-spock</td>
<td>far</td>
<td> \f259</td>
<td><a href='/fontawesome/fa-hand-spock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hand'></i> Hand</td>
<td>fa-hand</td>
<td>far</td>
<td> \f256</td>
<td><a href='/fontawesome/fa-hand' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-handshake'></i> Handshake</td>
<td>fa-handshake</td>
<td>far</td>
<td> \f2b5</td>
<td><a href='/fontawesome/fa-handshake' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hard-drive'></i> Hard Drive</td>
<td>fa-hard-drive</td>
<td>far</td>
<td> \f0a0</td>
<td><a href='/fontawesome/fa-hard-drive' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-heart'></i> Heart</td>
<td>fa-heart</td>
<td>far</td>
<td> \f004</td>
<td><a href='/fontawesome/fa-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hospital'></i> Hospital</td>
<td>fa-hospital</td>
<td>far</td>
<td> \f0f8</td>
<td><a href='/fontawesome/fa-hospital' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hourglass-half'></i> Hourglass Half</td>
<td>fa-hourglass-half</td>
<td>far</td>
<td> \f252</td>
<td><a href='/fontawesome/fa-hourglass-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-hourglass'></i> Hourglass</td>
<td>fa-hourglass</td>
<td>far</td>
<td> \f254</td>
<td><a href='/fontawesome/fa-hourglass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-id-badge'></i> Id Badge</td>
<td>fa-id-badge</td>
<td>far</td>
<td> \f2c1</td>
<td><a href='/fontawesome/fa-id-badge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-id-card'></i> Id Card</td>
<td>fa-id-card</td>
<td>far</td>
<td> \f2c2</td>
<td><a href='/fontawesome/fa-id-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-image'></i> Image</td>
<td>fa-image</td>
<td>far</td>
<td> \f03e</td>
<td><a href='/fontawesome/fa-image' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-images'></i> Images</td>
<td>fa-images</td>
<td>far</td>
<td> \f302</td>
<td><a href='/fontawesome/fa-images' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-keyboard'></i> Keyboard</td>
<td>fa-keyboard</td>
<td>far</td>
<td> \f11c</td>
<td><a href='/fontawesome/fa-keyboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-lemon'></i> Lemon</td>
<td>fa-lemon</td>
<td>far</td>
<td> \f094</td>
<td><a href='/fontawesome/fa-lemon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-life-ring'></i> Life Ring</td>
<td>fa-life-ring</td>
<td>far</td>
<td> \f1cd</td>
<td><a href='/fontawesome/fa-life-ring' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-lightbulb'></i> Lightbulb</td>
<td>fa-lightbulb</td>
<td>far</td>
<td> \f0eb</td>
<td><a href='/fontawesome/fa-lightbulb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-map'></i> Map</td>
<td>fa-map</td>
<td>far</td>
<td> \f279</td>
<td><a href='/fontawesome/fa-map' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-message'></i> Message</td>
<td>fa-message</td>
<td>far</td>
<td> \f27a</td>
<td><a href='/fontawesome/fa-message' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-money-bill-1'></i> Money Bill 1</td>
<td>fa-money-bill-1</td>
<td>far</td>
<td> \f3d1</td>
<td><a href='/fontawesome/fa-money-bill-1' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-moon'></i> Moon</td>
<td>fa-moon</td>
<td>far</td>
<td> \f186</td>
<td><a href='/fontawesome/fa-moon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-newspaper'></i> Newspaper</td>
<td>fa-newspaper</td>
<td>far</td>
<td> \f1ea</td>
<td><a href='/fontawesome/fa-newspaper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-note-sticky'></i> Note Sticky</td>
<td>fa-note-sticky</td>
<td>far</td>
<td> \f249</td>
<td><a href='/fontawesome/fa-note-sticky' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-object-group'></i> Object Group</td>
<td>fa-object-group</td>
<td>far</td>
<td> \f247</td>
<td><a href='/fontawesome/fa-object-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-object-ungroup'></i> Object Ungroup</td>
<td>fa-object-ungroup</td>
<td>far</td>
<td> \f248</td>
<td><a href='/fontawesome/fa-object-ungroup' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-paper-plane'></i> Paper Plane</td>
<td>fa-paper-plane</td>
<td>far</td>
<td> \f1d8</td>
<td><a href='/fontawesome/fa-paper-plane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-paste'></i> Paste</td>
<td>fa-paste</td>
<td>far</td>
<td> \f0ea</td>
<td><a href='/fontawesome/fa-paste' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-pen-to-square'></i> Pen To Square</td>
<td>fa-pen-to-square</td>
<td>far</td>
<td> \f044</td>
<td><a href='/fontawesome/fa-pen-to-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-rectangle-list'></i> Rectangle List</td>
<td>fa-rectangle-list</td>
<td>far</td>
<td> \f022</td>
<td><a href='/fontawesome/fa-rectangle-list' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-rectangle-xmark'></i> Rectangle Xmark</td>
<td>fa-rectangle-xmark</td>
<td>far</td>
<td> \f410</td>
<td><a href='/fontawesome/fa-rectangle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-registered'></i> Registered</td>
<td>fa-registered</td>
<td>far</td>
<td> \f25d</td>
<td><a href='/fontawesome/fa-registered' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-share-from-square'></i> Share From Square</td>
<td>fa-share-from-square</td>
<td>far</td>
<td> \f14d</td>
<td><a href='/fontawesome/fa-share-from-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-snowflake'></i> Snowflake</td>
<td>fa-snowflake</td>
<td>far</td>
<td> \f2dc</td>
<td><a href='/fontawesome/fa-snowflake' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-caret-down'></i> Square Caret Down</td>
<td>fa-square-caret-down</td>
<td>far</td>
<td> \f150</td>
<td><a href='/fontawesome/fa-square-caret-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-caret-left'></i> Square Caret Left</td>
<td>fa-square-caret-left</td>
<td>far</td>
<td> \f191</td>
<td><a href='/fontawesome/fa-square-caret-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-caret-right'></i> Square Caret Right</td>
<td>fa-square-caret-right</td>
<td>far</td>
<td> \f152</td>
<td><a href='/fontawesome/fa-square-caret-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-caret-up'></i> Square Caret Up</td>
<td>fa-square-caret-up</td>
<td>far</td>
<td> \f151</td>
<td><a href='/fontawesome/fa-square-caret-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-check'></i> Square Check</td>
<td>fa-square-check</td>
<td>far</td>
<td> \f14a</td>
<td><a href='/fontawesome/fa-square-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-full'></i> Square Full</td>
<td>fa-square-full</td>
<td>far</td>
<td> \f45c</td>
<td><a href='/fontawesome/fa-square-full' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-minus'></i> Square Minus</td>
<td>fa-square-minus</td>
<td>far</td>
<td> \f146</td>
<td><a href='/fontawesome/fa-square-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square-plus'></i> Square Plus</td>
<td>fa-square-plus</td>
<td>far</td>
<td> \f0fe</td>
<td><a href='/fontawesome/fa-square-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-square'></i> Square</td>
<td>fa-square</td>
<td>far</td>
<td> \f0c8</td>
<td><a href='/fontawesome/fa-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-star-half-stroke'></i> Star Half Stroke</td>
<td>fa-star-half-stroke</td>
<td>far</td>
<td> \f5c0</td>
<td><a href='/fontawesome/fa-star-half-stroke' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-star-half'></i> Star Half</td>
<td>fa-star-half</td>
<td>far</td>
<td> \f089</td>
<td><a href='/fontawesome/fa-star-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-star'></i> Star</td>
<td>fa-star</td>
<td>far</td>
<td> \f005</td>
<td><a href='/fontawesome/fa-star' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-sun'></i> Sun</td>
<td>fa-sun</td>
<td>far</td>
<td> \f185</td>
<td><a href='/fontawesome/fa-sun' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-thumbs-down'></i> Thumbs Down</td>
<td>fa-thumbs-down</td>
<td>far</td>
<td> \f165</td>
<td><a href='/fontawesome/fa-thumbs-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-thumbs-up'></i> Thumbs Up</td>
<td>fa-thumbs-up</td>
<td>far</td>
<td> \f164</td>
<td><a href='/fontawesome/fa-thumbs-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-trash-can'></i> Trash Can</td>
<td>fa-trash-can</td>
<td>far</td>
<td> \f2ed</td>
<td><a href='/fontawesome/fa-trash-can' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-user'></i> User</td>
<td>fa-user</td>
<td>far</td>
<td> \f007</td>
<td><a href='/fontawesome/fa-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-window-maximize'></i> Window Maximize</td>
<td>fa-window-maximize</td>
<td>far</td>
<td> \f2d0</td>
<td><a href='/fontawesome/fa-window-maximize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-window-minimize'></i> Window Minimize</td>
<td>fa-window-minimize</td>
<td>far</td>
<td> \f2d1</td>
<td><a href='/fontawesome/fa-window-minimize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='far fa-window-restore'></i> Window Restore</td>
<td>fa-window-restore</td>
<td>far</td>
<td> \f2d2</td>
<td><a href='/fontawesome/fa-window-restore' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-0'></i> 0 Number</td>
<td>fa-0</td>
<td>fas</td>
<td> \30</td>
<td><a href='/fontawesome/fa-0' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-1'></i> 1 Number</td>
<td>fa-1</td>
<td>fas</td>
<td> \31</td>
<td><a href='/fontawesome/fa-1' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-2'></i> 2 Number</td>
<td>fa-2</td>
<td>fas</td>
<td> \32</td>
<td><a href='/fontawesome/fa-2' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-3'></i> 3 Number</td>
<td>fa-3</td>
<td>fas</td>
<td> \33</td>
<td><a href='/fontawesome/fa-3' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-4'></i> 4 Number</td>
<td>fa-4</td>
<td>fas</td>
<td> \34</td>
<td><a href='/fontawesome/fa-4' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-5'></i> 5 Number</td>
<td>fa-5</td>
<td>fas</td>
<td> \35</td>
<td><a href='/fontawesome/fa-5' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-6'></i> 6 Number</td>
<td>fa-6</td>
<td>fas</td>
<td> \36</td>
<td><a href='/fontawesome/fa-6' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-7'></i> 7 Number</td>
<td>fa-7</td>
<td>fas</td>
<td> \37</td>
<td><a href='/fontawesome/fa-7' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-8'></i> 8 Number</td>
<td>fa-8</td>
<td>fas</td>
<td> \38</td>
<td><a href='/fontawesome/fa-8' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-9'></i> 9 Number</td>
<td>fa-9</td>
<td>fas</td>
<td> \39</td>
<td><a href='/fontawesome/fa-9' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-a'></i> A</td>
<td>fa-a</td>
<td>fas</td>
<td> \41</td>
<td><a href='/fontawesome/fa-a' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-address-book'></i> Address Book</td>
<td>fa-address-book</td>
<td>fas</td>
<td> \f2b9</td>
<td><a href='/fontawesome/fa-address-book' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-address-card'></i> Address Card</td>
<td>fa-address-card</td>
<td>fas</td>
<td> \f2bb</td>
<td><a href='/fontawesome/fa-address-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-align-center'></i> Align Center</td>
<td>fa-align-center</td>
<td>fas</td>
<td> \f037</td>
<td><a href='/fontawesome/fa-align-center' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-align-justify'></i> Align Justify</td>
<td>fa-align-justify</td>
<td>fas</td>
<td> \f039</td>
<td><a href='/fontawesome/fa-align-justify' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-align-left'></i> Align Left</td>
<td>fa-align-left</td>
<td>fas</td>
<td> \f036</td>
<td><a href='/fontawesome/fa-align-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-align-right'></i> Align Right</td>
<td>fa-align-right</td>
<td>fas</td>
<td> \f038</td>
<td><a href='/fontawesome/fa-align-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-anchor-circle-check'></i> Anchor Circle Check</td>
<td>fa-anchor-circle-check</td>
<td>fas</td>
<td> \e4aa</td>
<td><a href='/fontawesome/fa-anchor-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-anchor-circle-exclamation'></i> Anchor Circle Exclamation</td>
<td>fa-anchor-circle-exclamation</td>
<td>fas</td>
<td> \e4ab</td>
<td><a href='/fontawesome/fa-anchor-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-anchor-circle-xmark'></i> Anchor Circle Xmark</td>
<td>fa-anchor-circle-xmark</td>
<td>fas</td>
<td> \e4ac</td>
<td><a href='/fontawesome/fa-anchor-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-anchor-lock'></i> Anchor Lock</td>
<td>fa-anchor-lock</td>
<td>fas</td>
<td> \e4ad</td>
<td><a href='/fontawesome/fa-anchor-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-anchor'></i> Anchor</td>
<td>fa-anchor</td>
<td>fas</td>
<td> \f13d</td>
<td><a href='/fontawesome/fa-anchor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angle-down'></i> Angle Down</td>
<td>fa-angle-down</td>
<td>fas</td>
<td> \f107</td>
<td><a href='/fontawesome/fa-angle-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angle-left'></i> Angle Left</td>
<td>fa-angle-left</td>
<td>fas</td>
<td> \f104</td>
<td><a href='/fontawesome/fa-angle-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angle-right'></i> Angle Right</td>
<td>fa-angle-right</td>
<td>fas</td>
<td> \f105</td>
<td><a href='/fontawesome/fa-angle-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angle-up'></i> Angle Up</td>
<td>fa-angle-up</td>
<td>fas</td>
<td> \f106</td>
<td><a href='/fontawesome/fa-angle-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angles-down'></i> Angles Down</td>
<td>fa-angles-down</td>
<td>fas</td>
<td> \f103</td>
<td><a href='/fontawesome/fa-angles-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angles-left'></i> Angles Left</td>
<td>fa-angles-left</td>
<td>fas</td>
<td> \f100</td>
<td><a href='/fontawesome/fa-angles-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angles-right'></i> Angles Right</td>
<td>fa-angles-right</td>
<td>fas</td>
<td> \f101</td>
<td><a href='/fontawesome/fa-angles-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-angles-up'></i> Angles Up</td>
<td>fa-angles-up</td>
<td>fas</td>
<td> \f102</td>
<td><a href='/fontawesome/fa-angles-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ankh'></i> Ankh</td>
<td>fa-ankh</td>
<td>fas</td>
<td> \f644</td>
<td><a href='/fontawesome/fa-ankh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-apple-whole'></i> Apple Whole</td>
<td>fa-apple-whole</td>
<td>fas</td>
<td> \f5d1</td>
<td><a href='/fontawesome/fa-apple-whole' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-archway'></i> Archway</td>
<td>fa-archway</td>
<td>fas</td>
<td> \f557</td>
<td><a href='/fontawesome/fa-archway' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-1-9'></i> Arrow Down 1 9</td>
<td>fa-arrow-down-1-9</td>
<td>fas</td>
<td> \f162</td>
<td><a href='/fontawesome/fa-arrow-down-1-9' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-9-1'></i> Arrow Down 9 1</td>
<td>fa-arrow-down-9-1</td>
<td>fas</td>
<td> \f886</td>
<td><a href='/fontawesome/fa-arrow-down-9-1' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-a-z'></i> Arrow Down A Z</td>
<td>fa-arrow-down-a-z</td>
<td>fas</td>
<td> \f15d</td>
<td><a href='/fontawesome/fa-arrow-down-a-z' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-long'></i> Arrow Down Long</td>
<td>fa-arrow-down-long</td>
<td>fas</td>
<td> \f175</td>
<td><a href='/fontawesome/fa-arrow-down-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-short-wide'></i> Arrow Down Short Wide</td>
<td>fa-arrow-down-short-wide</td>
<td>fas</td>
<td> \f884</td>
<td><a href='/fontawesome/fa-arrow-down-short-wide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-up-across-line'></i> Arrow Down Up Across Line</td>
<td>fa-arrow-down-up-across-line</td>
<td>fas</td>
<td> \e4af</td>
<td><a href='/fontawesome/fa-arrow-down-up-across-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-up-lock'></i> Arrow Down Up Lock</td>
<td>fa-arrow-down-up-lock</td>
<td>fas</td>
<td> \e4b0</td>
<td><a href='/fontawesome/fa-arrow-down-up-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-wide-short'></i> Arrow Down Wide Short</td>
<td>fa-arrow-down-wide-short</td>
<td>fas</td>
<td> \f160</td>
<td><a href='/fontawesome/fa-arrow-down-wide-short' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down-z-a'></i> Arrow Down Z A</td>
<td>fa-arrow-down-z-a</td>
<td>fas</td>
<td> \f881</td>
<td><a href='/fontawesome/fa-arrow-down-z-a' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-down'></i> Arrow Down</td>
<td>fa-arrow-down</td>
<td>fas</td>
<td> \f063</td>
<td><a href='/fontawesome/fa-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-left-long'></i> Arrow Left Long</td>
<td>fa-arrow-left-long</td>
<td>fas</td>
<td> \f177</td>
<td><a href='/fontawesome/fa-arrow-left-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-left'></i> Arrow Left</td>
<td>fa-arrow-left</td>
<td>fas</td>
<td> \f060</td>
<td><a href='/fontawesome/fa-arrow-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-pointer'></i> Arrow Pointer</td>
<td>fa-arrow-pointer</td>
<td>fas</td>
<td> \f245</td>
<td><a href='/fontawesome/fa-arrow-pointer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right-arrow-left'></i> Arrow Right Arrow Left</td>
<td>fa-arrow-right-arrow-left</td>
<td>fas</td>
<td> \f0ec</td>
<td><a href='/fontawesome/fa-arrow-right-arrow-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right-from-bracket'></i> Arrow Right From Bracket</td>
<td>fa-arrow-right-from-bracket</td>
<td>fas</td>
<td> \f08b</td>
<td><a href='/fontawesome/fa-arrow-right-from-bracket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right-long'></i> Arrow Right Long</td>
<td>fa-arrow-right-long</td>
<td>fas</td>
<td> \f178</td>
<td><a href='/fontawesome/fa-arrow-right-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right-to-bracket'></i> Arrow Right To Bracket</td>
<td>fa-arrow-right-to-bracket</td>
<td>fas</td>
<td> \f090</td>
<td><a href='/fontawesome/fa-arrow-right-to-bracket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right-to-city'></i> Arrow Right To City</td>
<td>fa-arrow-right-to-city</td>
<td>fas</td>
<td> \e4b3</td>
<td><a href='/fontawesome/fa-arrow-right-to-city' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-right'></i> Arrow Right</td>
<td>fa-arrow-right</td>
<td>fas</td>
<td> \f061</td>
<td><a href='/fontawesome/fa-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-rotate-left'></i> Arrow Rotate Left</td>
<td>fa-arrow-rotate-left</td>
<td>fas</td>
<td> \f0e2</td>
<td><a href='/fontawesome/fa-arrow-rotate-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-rotate-right'></i> Arrow Rotate Right</td>
<td>fa-arrow-rotate-right</td>
<td>fas</td>
<td> \f01e</td>
<td><a href='/fontawesome/fa-arrow-rotate-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-trend-down'></i> Arrow Trend Down</td>
<td>fa-arrow-trend-down</td>
<td>fas</td>
<td> \e097</td>
<td><a href='/fontawesome/fa-arrow-trend-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-trend-up'></i> Arrow Trend Up</td>
<td>fa-arrow-trend-up</td>
<td>fas</td>
<td> \e098</td>
<td><a href='/fontawesome/fa-arrow-trend-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-turn-down'></i> Arrow Turn Down</td>
<td>fa-arrow-turn-down</td>
<td>fas</td>
<td> \f149</td>
<td><a href='/fontawesome/fa-arrow-turn-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-turn-up'></i> Arrow Turn Up</td>
<td>fa-arrow-turn-up</td>
<td>fas</td>
<td> \f148</td>
<td><a href='/fontawesome/fa-arrow-turn-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-1-9'></i> Arrow Up 1 9</td>
<td>fa-arrow-up-1-9</td>
<td>fas</td>
<td> \f163</td>
<td><a href='/fontawesome/fa-arrow-up-1-9' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-9-1'></i> Arrow Up 9 1</td>
<td>fa-arrow-up-9-1</td>
<td>fas</td>
<td> \f887</td>
<td><a href='/fontawesome/fa-arrow-up-9-1' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-a-z'></i> Arrow Up A Z</td>
<td>fa-arrow-up-a-z</td>
<td>fas</td>
<td> \f15e</td>
<td><a href='/fontawesome/fa-arrow-up-a-z' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-from-bracket'></i> Arrow Up From Bracket</td>
<td>fa-arrow-up-from-bracket</td>
<td>fas</td>
<td> \e09a</td>
<td><a href='/fontawesome/fa-arrow-up-from-bracket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-from-ground-water'></i> Arrow Up From Ground Water</td>
<td>fa-arrow-up-from-ground-water</td>
<td>fas</td>
<td> \e4b5</td>
<td><a href='/fontawesome/fa-arrow-up-from-ground-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-from-water-pump'></i> Arrow Up From Water Pump</td>
<td>fa-arrow-up-from-water-pump</td>
<td>fas</td>
<td> \e4b6</td>
<td><a href='/fontawesome/fa-arrow-up-from-water-pump' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-long'></i> Arrow Up Long</td>
<td>fa-arrow-up-long</td>
<td>fas</td>
<td> \f176</td>
<td><a href='/fontawesome/fa-arrow-up-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-right-dots'></i> Arrow Up Right Dots</td>
<td>fa-arrow-up-right-dots</td>
<td>fas</td>
<td> \e4b7</td>
<td><a href='/fontawesome/fa-arrow-up-right-dots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-right-from-square'></i> Arrow Up Right From Square</td>
<td>fa-arrow-up-right-from-square</td>
<td>fas</td>
<td> \f08e</td>
<td><a href='/fontawesome/fa-arrow-up-right-from-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-short-wide'></i> Arrow Up Short Wide</td>
<td>fa-arrow-up-short-wide</td>
<td>fas</td>
<td> \f885</td>
<td><a href='/fontawesome/fa-arrow-up-short-wide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-wide-short'></i> Arrow Up Wide Short</td>
<td>fa-arrow-up-wide-short</td>
<td>fas</td>
<td> \f161</td>
<td><a href='/fontawesome/fa-arrow-up-wide-short' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up-z-a'></i> Arrow Up Z A</td>
<td>fa-arrow-up-z-a</td>
<td>fas</td>
<td> \f882</td>
<td><a href='/fontawesome/fa-arrow-up-z-a' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrow-up'></i> Arrow Up</td>
<td>fa-arrow-up</td>
<td>fas</td>
<td> \f062</td>
<td><a href='/fontawesome/fa-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-down-to-line'></i> Arrows Down To Line</td>
<td>fa-arrows-down-to-line</td>
<td>fas</td>
<td> \e4b8</td>
<td><a href='/fontawesome/fa-arrows-down-to-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-down-to-people'></i> Arrows Down To People</td>
<td>fa-arrows-down-to-people</td>
<td>fas</td>
<td> \e4b9</td>
<td><a href='/fontawesome/fa-arrows-down-to-people' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-left-right-to-line'></i> Arrows Left Right To Line</td>
<td>fa-arrows-left-right-to-line</td>
<td>fas</td>
<td> \e4ba</td>
<td><a href='/fontawesome/fa-arrows-left-right-to-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-left-right'></i> Arrows Left Right</td>
<td>fa-arrows-left-right</td>
<td>fas</td>
<td> \f07e</td>
<td><a href='/fontawesome/fa-arrows-left-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-rotate'></i> Arrows Rotate</td>
<td>fa-arrows-rotate</td>
<td>fas</td>
<td> \f021</td>
<td><a href='/fontawesome/fa-arrows-rotate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-spin'></i> Arrows Spin</td>
<td>fa-arrows-spin</td>
<td>fas</td>
<td> \e4bb</td>
<td><a href='/fontawesome/fa-arrows-spin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-split-up-and-left'></i> Arrows Split Up And Left</td>
<td>fa-arrows-split-up-and-left</td>
<td>fas</td>
<td> \e4bc</td>
<td><a href='/fontawesome/fa-arrows-split-up-and-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-to-circle'></i> Arrows To Circle</td>
<td>fa-arrows-to-circle</td>
<td>fas</td>
<td> \e4bd</td>
<td><a href='/fontawesome/fa-arrows-to-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-to-dot'></i> Arrows To Dot</td>
<td>fa-arrows-to-dot</td>
<td>fas</td>
<td> \e4be</td>
<td><a href='/fontawesome/fa-arrows-to-dot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-to-eye'></i> Arrows To Eye</td>
<td>fa-arrows-to-eye</td>
<td>fas</td>
<td> \e4bf</td>
<td><a href='/fontawesome/fa-arrows-to-eye' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-turn-right'></i> Arrows Turn Right</td>
<td>fa-arrows-turn-right</td>
<td>fas</td>
<td> \e4c0</td>
<td><a href='/fontawesome/fa-arrows-turn-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-turn-to-dots'></i> Arrows Turn To Dots</td>
<td>fa-arrows-turn-to-dots</td>
<td>fas</td>
<td> \e4c1</td>
<td><a href='/fontawesome/fa-arrows-turn-to-dots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-up-down-left-right'></i> Arrows Up Down Left Right</td>
<td>fa-arrows-up-down-left-right</td>
<td>fas</td>
<td> \f047</td>
<td><a href='/fontawesome/fa-arrows-up-down-left-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-up-down'></i> Arrows Up Down</td>
<td>fa-arrows-up-down</td>
<td>fas</td>
<td> \f07d</td>
<td><a href='/fontawesome/fa-arrows-up-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-arrows-up-to-line'></i> Arrows Up To Line</td>
<td>fa-arrows-up-to-line</td>
<td>fas</td>
<td> \e4c2</td>
<td><a href='/fontawesome/fa-arrows-up-to-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-asterisk'></i> Asterisk</td>
<td>fa-asterisk</td>
<td>fas</td>
<td> \2a</td>
<td><a href='/fontawesome/fa-asterisk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-at'></i> At</td>
<td>fa-at</td>
<td>fas</td>
<td> \40</td>
<td><a href='/fontawesome/fa-at' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-atom'></i> Atom</td>
<td>fa-atom</td>
<td>fas</td>
<td> \f5d2</td>
<td><a href='/fontawesome/fa-atom' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-audio-description'></i> Audio Description</td>
<td>fa-audio-description</td>
<td>fas</td>
<td> \f29e</td>
<td><a href='/fontawesome/fa-audio-description' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-austral-sign'></i> Austral Sign</td>
<td>fa-austral-sign</td>
<td>fas</td>
<td> \e0a9</td>
<td><a href='/fontawesome/fa-austral-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-award'></i> Award</td>
<td>fa-award</td>
<td>fas</td>
<td> \f559</td>
<td><a href='/fontawesome/fa-award' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-b'></i> B</td>
<td>fa-b</td>
<td>fas</td>
<td> \42</td>
<td><a href='/fontawesome/fa-b' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-baby-carriage'></i> Baby Carriage</td>
<td>fa-baby-carriage</td>
<td>fas</td>
<td> \f77d</td>
<td><a href='/fontawesome/fa-baby-carriage' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-baby'></i> Baby</td>
<td>fa-baby</td>
<td>fas</td>
<td> \f77c</td>
<td><a href='/fontawesome/fa-baby' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-backward-fast'></i> Backward Fast</td>
<td>fa-backward-fast</td>
<td>fas</td>
<td> \f049</td>
<td><a href='/fontawesome/fa-backward-fast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-backward-step'></i> Backward Step</td>
<td>fa-backward-step</td>
<td>fas</td>
<td> \f048</td>
<td><a href='/fontawesome/fa-backward-step' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-backward'></i> Backward</td>
<td>fa-backward</td>
<td>fas</td>
<td> \f04a</td>
<td><a href='/fontawesome/fa-backward' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bacon'></i> Bacon</td>
<td>fa-bacon</td>
<td>fas</td>
<td> \f7e5</td>
<td><a href='/fontawesome/fa-bacon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bacteria'></i> Bacteria</td>
<td>fa-bacteria</td>
<td>fas</td>
<td> \e059</td>
<td><a href='/fontawesome/fa-bacteria' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bacterium'></i> Bacterium</td>
<td>fa-bacterium</td>
<td>fas</td>
<td> \e05a</td>
<td><a href='/fontawesome/fa-bacterium' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bag-shopping'></i> Bag Shopping</td>
<td>fa-bag-shopping</td>
<td>fas</td>
<td> \f290</td>
<td><a href='/fontawesome/fa-bag-shopping' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bahai'></i> Bahai</td>
<td>fa-bahai</td>
<td>fas</td>
<td> \f666</td>
<td><a href='/fontawesome/fa-bahai' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-baht-sign'></i> Baht Sign</td>
<td>fa-baht-sign</td>
<td>fas</td>
<td> \e0ac</td>
<td><a href='/fontawesome/fa-baht-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ban-smoking'></i> Ban Smoking</td>
<td>fa-ban-smoking</td>
<td>fas</td>
<td> \f54d</td>
<td><a href='/fontawesome/fa-ban-smoking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ban'></i> Ban</td>
<td>fa-ban</td>
<td>fas</td>
<td> \f05e</td>
<td><a href='/fontawesome/fa-ban' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bandage'></i> Bandage</td>
<td>fa-bandage</td>
<td>fas</td>
<td> \f462</td>
<td><a href='/fontawesome/fa-bandage' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-barcode'></i> Barcode</td>
<td>fa-barcode</td>
<td>fas</td>
<td> \f02a</td>
<td><a href='/fontawesome/fa-barcode' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bars-progress'></i> Bars Progress</td>
<td>fa-bars-progress</td>
<td>fas</td>
<td> \f828</td>
<td><a href='/fontawesome/fa-bars-progress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bars-staggered'></i> Bars Staggered</td>
<td>fa-bars-staggered</td>
<td>fas</td>
<td> \f550</td>
<td><a href='/fontawesome/fa-bars-staggered' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bars'></i> Bars</td>
<td>fa-bars</td>
<td>fas</td>
<td> \f0c9</td>
<td><a href='/fontawesome/fa-bars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-baseball-bat-ball'></i> Baseball Bat Ball</td>
<td>fa-baseball-bat-ball</td>
<td>fas</td>
<td> \f432</td>
<td><a href='/fontawesome/fa-baseball-bat-ball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-baseball'></i> Baseball</td>
<td>fa-baseball</td>
<td>fas</td>
<td> \f433</td>
<td><a href='/fontawesome/fa-baseball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-basket-shopping'></i> Basket Shopping</td>
<td>fa-basket-shopping</td>
<td>fas</td>
<td> \f291</td>
<td><a href='/fontawesome/fa-basket-shopping' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-basketball'></i> Basketball</td>
<td>fa-basketball</td>
<td>fas</td>
<td> \f434</td>
<td><a href='/fontawesome/fa-basketball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bath'></i> Bath</td>
<td>fa-bath</td>
<td>fas</td>
<td> \f2cd</td>
<td><a href='/fontawesome/fa-bath' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-battery-empty'></i> Battery Empty</td>
<td>fa-battery-empty</td>
<td>fas</td>
<td> \f244</td>
<td><a href='/fontawesome/fa-battery-empty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-battery-full'></i> Battery Full</td>
<td>fa-battery-full</td>
<td>fas</td>
<td> \f240</td>
<td><a href='/fontawesome/fa-battery-full' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-battery-half'></i> Battery Half</td>
<td>fa-battery-half</td>
<td>fas</td>
<td> \f242</td>
<td><a href='/fontawesome/fa-battery-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-battery-quarter'></i> Battery Quarter</td>
<td>fa-battery-quarter</td>
<td>fas</td>
<td> \f243</td>
<td><a href='/fontawesome/fa-battery-quarter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-battery-three-quarters'></i> Battery Three Quarters</td>
<td>fa-battery-three-quarters</td>
<td>fas</td>
<td> \f241</td>
<td><a href='/fontawesome/fa-battery-three-quarters' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bed-pulse'></i> Bed Pulse</td>
<td>fa-bed-pulse</td>
<td>fas</td>
<td> \f487</td>
<td><a href='/fontawesome/fa-bed-pulse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bed'></i> Bed</td>
<td>fa-bed</td>
<td>fas</td>
<td> \f236</td>
<td><a href='/fontawesome/fa-bed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-beer-mug-empty'></i> Beer Mug Empty</td>
<td>fa-beer-mug-empty</td>
<td>fas</td>
<td> \f0fc</td>
<td><a href='/fontawesome/fa-beer-mug-empty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bell-concierge'></i> Bell Concierge</td>
<td>fa-bell-concierge</td>
<td>fas</td>
<td> \f562</td>
<td><a href='/fontawesome/fa-bell-concierge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bell-slash'></i> Bell Slash</td>
<td>fa-bell-slash</td>
<td>fas</td>
<td> \f1f6</td>
<td><a href='/fontawesome/fa-bell-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bell'></i> Bell</td>
<td>fa-bell</td>
<td>fas</td>
<td> \f0f3</td>
<td><a href='/fontawesome/fa-bell' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bezier-curve'></i> Bezier Curve</td>
<td>fa-bezier-curve</td>
<td>fas</td>
<td> \f55b</td>
<td><a href='/fontawesome/fa-bezier-curve' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bicycle'></i> Bicycle</td>
<td>fa-bicycle</td>
<td>fas</td>
<td> \f206</td>
<td><a href='/fontawesome/fa-bicycle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-binoculars'></i> Binoculars</td>
<td>fa-binoculars</td>
<td>fas</td>
<td> \f1e5</td>
<td><a href='/fontawesome/fa-binoculars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-biohazard'></i> Biohazard</td>
<td>fa-biohazard</td>
<td>fas</td>
<td> \f780</td>
<td><a href='/fontawesome/fa-biohazard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bitcoin-sign'></i> Bitcoin Sign</td>
<td>fa-bitcoin-sign</td>
<td>fas</td>
<td> \e0b4</td>
<td><a href='/fontawesome/fa-bitcoin-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-blender-phone'></i> Blender Phone</td>
<td>fa-blender-phone</td>
<td>fas</td>
<td> \f6b6</td>
<td><a href='/fontawesome/fa-blender-phone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-blender'></i> Blender</td>
<td>fa-blender</td>
<td>fas</td>
<td> \f517</td>
<td><a href='/fontawesome/fa-blender' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-blog'></i> Blog</td>
<td>fa-blog</td>
<td>fas</td>
<td> \f781</td>
<td><a href='/fontawesome/fa-blog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bold'></i> Bold</td>
<td>fa-bold</td>
<td>fas</td>
<td> \f032</td>
<td><a href='/fontawesome/fa-bold' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bolt-lightning'></i> Bolt Lightning</td>
<td>fa-bolt-lightning</td>
<td>fas</td>
<td> \e0b7</td>
<td><a href='/fontawesome/fa-bolt-lightning' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bolt'></i> Bolt</td>
<td>fa-bolt</td>
<td>fas</td>
<td> \f0e7</td>
<td><a href='/fontawesome/fa-bolt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bomb'></i> Bomb</td>
<td>fa-bomb</td>
<td>fas</td>
<td> \f1e2</td>
<td><a href='/fontawesome/fa-bomb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bone'></i> Bone</td>
<td>fa-bone</td>
<td>fas</td>
<td> \f5d7</td>
<td><a href='/fontawesome/fa-bone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bong'></i> Bong</td>
<td>fa-bong</td>
<td>fas</td>
<td> \f55c</td>
<td><a href='/fontawesome/fa-bong' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-atlas'></i> Book Atlas</td>
<td>fa-book-atlas</td>
<td>fas</td>
<td> \f558</td>
<td><a href='/fontawesome/fa-book-atlas' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-bible'></i> Book Bible</td>
<td>fa-book-bible</td>
<td>fas</td>
<td> \f647</td>
<td><a href='/fontawesome/fa-book-bible' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-bookmark'></i> Book Bookmark</td>
<td>fa-book-bookmark</td>
<td>fas</td>
<td> \e0bb</td>
<td><a href='/fontawesome/fa-book-bookmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-journal-whills'></i> Book Journal Whills</td>
<td>fa-book-journal-whills</td>
<td>fas</td>
<td> \f66a</td>
<td><a href='/fontawesome/fa-book-journal-whills' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-medical'></i> Book Medical</td>
<td>fa-book-medical</td>
<td>fas</td>
<td> \f7e6</td>
<td><a href='/fontawesome/fa-book-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-open-reader'></i> Book Open Reader</td>
<td>fa-book-open-reader</td>
<td>fas</td>
<td> \f5da</td>
<td><a href='/fontawesome/fa-book-open-reader' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-open'></i> Book Open</td>
<td>fa-book-open</td>
<td>fas</td>
<td> \f518</td>
<td><a href='/fontawesome/fa-book-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-quran'></i> Book Quran</td>
<td>fa-book-quran</td>
<td>fas</td>
<td> \f687</td>
<td><a href='/fontawesome/fa-book-quran' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-skull'></i> Book Skull</td>
<td>fa-book-skull</td>
<td>fas</td>
<td> \f6b7</td>
<td><a href='/fontawesome/fa-book-skull' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book-tanakh'></i> Book Tanakh</td>
<td>fa-book-tanakh</td>
<td>fas</td>
<td> \f827</td>
<td><a href='/fontawesome/fa-book-tanakh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-book'></i> Book</td>
<td>fa-book</td>
<td>fas</td>
<td> \f02d</td>
<td><a href='/fontawesome/fa-book' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bookmark'></i> Bookmark</td>
<td>fa-bookmark</td>
<td>fas</td>
<td> \f02e</td>
<td><a href='/fontawesome/fa-bookmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-border-all'></i> Border All</td>
<td>fa-border-all</td>
<td>fas</td>
<td> \f84c</td>
<td><a href='/fontawesome/fa-border-all' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-border-none'></i> Border None</td>
<td>fa-border-none</td>
<td>fas</td>
<td> \f850</td>
<td><a href='/fontawesome/fa-border-none' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-border-top-left'></i> Border Top Left</td>
<td>fa-border-top-left</td>
<td>fas</td>
<td> \f853</td>
<td><a href='/fontawesome/fa-border-top-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bore-hole'></i> Bore Hole</td>
<td>fa-bore-hole</td>
<td>fas</td>
<td> \e4c3</td>
<td><a href='/fontawesome/fa-bore-hole' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bottle-droplet'></i> Bottle Droplet</td>
<td>fa-bottle-droplet</td>
<td>fas</td>
<td> \e4c4</td>
<td><a href='/fontawesome/fa-bottle-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bottle-water'></i> Bottle Water</td>
<td>fa-bottle-water</td>
<td>fas</td>
<td> \e4c5</td>
<td><a href='/fontawesome/fa-bottle-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bowl-food'></i> Bowl Food</td>
<td>fa-bowl-food</td>
<td>fas</td>
<td> \e4c6</td>
<td><a href='/fontawesome/fa-bowl-food' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bowl-rice'></i> Bowl Rice</td>
<td>fa-bowl-rice</td>
<td>fas</td>
<td> \e2eb</td>
<td><a href='/fontawesome/fa-bowl-rice' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bowling-ball'></i> Bowling Ball</td>
<td>fa-bowling-ball</td>
<td>fas</td>
<td> \f436</td>
<td><a href='/fontawesome/fa-bowling-ball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-box-archive'></i> Box Archive</td>
<td>fa-box-archive</td>
<td>fas</td>
<td> \f187</td>
<td><a href='/fontawesome/fa-box-archive' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-box-open'></i> Box Open</td>
<td>fa-box-open</td>
<td>fas</td>
<td> \f49e</td>
<td><a href='/fontawesome/fa-box-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-box-tissue'></i> Box Tissue</td>
<td>fa-box-tissue</td>
<td>fas</td>
<td> \e05b</td>
<td><a href='/fontawesome/fa-box-tissue' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-box'></i> Box</td>
<td>fa-box</td>
<td>fas</td>
<td> \f466</td>
<td><a href='/fontawesome/fa-box' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-boxes-packing'></i> Boxes Packing</td>
<td>fa-boxes-packing</td>
<td>fas</td>
<td> \e4c7</td>
<td><a href='/fontawesome/fa-boxes-packing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-boxes-stacked'></i> Boxes Stacked</td>
<td>fa-boxes-stacked</td>
<td>fas</td>
<td> \f468</td>
<td><a href='/fontawesome/fa-boxes-stacked' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-braille'></i> Braille</td>
<td>fa-braille</td>
<td>fas</td>
<td> \f2a1</td>
<td><a href='/fontawesome/fa-braille' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-brain'></i> Brain</td>
<td>fa-brain</td>
<td>fas</td>
<td> \f5dc</td>
<td><a href='/fontawesome/fa-brain' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-brazilian-real-sign'></i> Brazilian Real Sign</td>
<td>fa-brazilian-real-sign</td>
<td>fas</td>
<td> \e46c</td>
<td><a href='/fontawesome/fa-brazilian-real-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bread-slice'></i> Bread Slice</td>
<td>fa-bread-slice</td>
<td>fas</td>
<td> \f7ec</td>
<td><a href='/fontawesome/fa-bread-slice' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge-circle-check'></i> Bridge Circle Check</td>
<td>fa-bridge-circle-check</td>
<td>fas</td>
<td> \e4c9</td>
<td><a href='/fontawesome/fa-bridge-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge-circle-exclamation'></i> Bridge Circle Exclamation</td>
<td>fa-bridge-circle-exclamation</td>
<td>fas</td>
<td> \e4ca</td>
<td><a href='/fontawesome/fa-bridge-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge-circle-xmark'></i> Bridge Circle Xmark</td>
<td>fa-bridge-circle-xmark</td>
<td>fas</td>
<td> \e4cb</td>
<td><a href='/fontawesome/fa-bridge-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge-lock'></i> Bridge Lock</td>
<td>fa-bridge-lock</td>
<td>fas</td>
<td> \e4cc</td>
<td><a href='/fontawesome/fa-bridge-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge-water'></i> Bridge Water</td>
<td>fa-bridge-water</td>
<td>fas</td>
<td> \e4ce</td>
<td><a href='/fontawesome/fa-bridge-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bridge'></i> Bridge</td>
<td>fa-bridge</td>
<td>fas</td>
<td> \e4c8</td>
<td><a href='/fontawesome/fa-bridge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-briefcase-medical'></i> Briefcase Medical</td>
<td>fa-briefcase-medical</td>
<td>fas</td>
<td> \f469</td>
<td><a href='/fontawesome/fa-briefcase-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-briefcase'></i> Briefcase</td>
<td>fa-briefcase</td>
<td>fas</td>
<td> \f0b1</td>
<td><a href='/fontawesome/fa-briefcase' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-broom-ball'></i> Broom Ball</td>
<td>fa-broom-ball</td>
<td>fas</td>
<td> \f458</td>
<td><a href='/fontawesome/fa-broom-ball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-broom'></i> Broom</td>
<td>fa-broom</td>
<td>fas</td>
<td> \f51a</td>
<td><a href='/fontawesome/fa-broom' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-brush'></i> Brush</td>
<td>fa-brush</td>
<td>fas</td>
<td> \f55d</td>
<td><a href='/fontawesome/fa-brush' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bucket'></i> Bucket</td>
<td>fa-bucket</td>
<td>fas</td>
<td> \e4cf</td>
<td><a href='/fontawesome/fa-bucket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bug-slash'></i> Bug Slash</td>
<td>fa-bug-slash</td>
<td>fas</td>
<td> \e490</td>
<td><a href='/fontawesome/fa-bug-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bug'></i> Bug</td>
<td>fa-bug</td>
<td>fas</td>
<td> \f188</td>
<td><a href='/fontawesome/fa-bug' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bugs'></i> Bugs</td>
<td>fa-bugs</td>
<td>fas</td>
<td> \e4d0</td>
<td><a href='/fontawesome/fa-bugs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-circle-arrow-right'></i> Building Circle Arrow Right</td>
<td>fa-building-circle-arrow-right</td>
<td>fas</td>
<td> \e4d1</td>
<td><a href='/fontawesome/fa-building-circle-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-circle-check'></i> Building Circle Check</td>
<td>fa-building-circle-check</td>
<td>fas</td>
<td> \e4d2</td>
<td><a href='/fontawesome/fa-building-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-circle-exclamation'></i> Building Circle Exclamation</td>
<td>fa-building-circle-exclamation</td>
<td>fas</td>
<td> \e4d3</td>
<td><a href='/fontawesome/fa-building-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-circle-xmark'></i> Building Circle Xmark</td>
<td>fa-building-circle-xmark</td>
<td>fas</td>
<td> \e4d4</td>
<td><a href='/fontawesome/fa-building-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-columns'></i> Building Columns</td>
<td>fa-building-columns</td>
<td>fas</td>
<td> \f19c</td>
<td><a href='/fontawesome/fa-building-columns' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-flag'></i> Building Flag</td>
<td>fa-building-flag</td>
<td>fas</td>
<td> \e4d5</td>
<td><a href='/fontawesome/fa-building-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-lock'></i> Building Lock</td>
<td>fa-building-lock</td>
<td>fas</td>
<td> \e4d6</td>
<td><a href='/fontawesome/fa-building-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-ngo'></i> Building Ngo</td>
<td>fa-building-ngo</td>
<td>fas</td>
<td> \e4d7</td>
<td><a href='/fontawesome/fa-building-ngo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-shield'></i> Building Shield</td>
<td>fa-building-shield</td>
<td>fas</td>
<td> \e4d8</td>
<td><a href='/fontawesome/fa-building-shield' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-un'></i> Building Un</td>
<td>fa-building-un</td>
<td>fas</td>
<td> \e4d9</td>
<td><a href='/fontawesome/fa-building-un' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-user'></i> Building User</td>
<td>fa-building-user</td>
<td>fas</td>
<td> \e4da</td>
<td><a href='/fontawesome/fa-building-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building-wheat'></i> Building Wheat</td>
<td>fa-building-wheat</td>
<td>fas</td>
<td> \e4db</td>
<td><a href='/fontawesome/fa-building-wheat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-building'></i> Building</td>
<td>fa-building</td>
<td>fas</td>
<td> \f1ad</td>
<td><a href='/fontawesome/fa-building' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bullhorn'></i> Bullhorn</td>
<td>fa-bullhorn</td>
<td>fas</td>
<td> \f0a1</td>
<td><a href='/fontawesome/fa-bullhorn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bullseye'></i> Bullseye</td>
<td>fa-bullseye</td>
<td>fas</td>
<td> \f140</td>
<td><a href='/fontawesome/fa-bullseye' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-burger'></i> Burger</td>
<td>fa-burger</td>
<td>fas</td>
<td> \f805</td>
<td><a href='/fontawesome/fa-burger' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-burst'></i> Burst</td>
<td>fa-burst</td>
<td>fas</td>
<td> \e4dc</td>
<td><a href='/fontawesome/fa-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bus-simple'></i> Bus Simple</td>
<td>fa-bus-simple</td>
<td>fas</td>
<td> \f55e</td>
<td><a href='/fontawesome/fa-bus-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-bus'></i> Bus</td>
<td>fa-bus</td>
<td>fas</td>
<td> \f207</td>
<td><a href='/fontawesome/fa-bus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-business-time'></i> Business Time</td>
<td>fa-business-time</td>
<td>fas</td>
<td> \f64a</td>
<td><a href='/fontawesome/fa-business-time' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-c'></i> C</td>
<td>fa-c</td>
<td>fas</td>
<td> \43</td>
<td><a href='/fontawesome/fa-c' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cable-car'></i> Cable Car</td>
<td>fa-cable-car</td>
<td>fas</td>
<td> \f7da</td>
<td><a href='/fontawesome/fa-cable-car' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cake-candles'></i> Cake Candles</td>
<td>fa-cake-candles</td>
<td>fas</td>
<td> \f1fd</td>
<td><a href='/fontawesome/fa-cake-candles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calculator'></i> Calculator</td>
<td>fa-calculator</td>
<td>fas</td>
<td> \f1ec</td>
<td><a href='/fontawesome/fa-calculator' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-check'></i> Calendar Check</td>
<td>fa-calendar-check</td>
<td>fas</td>
<td> \f274</td>
<td><a href='/fontawesome/fa-calendar-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-day'></i> Calendar Day</td>
<td>fa-calendar-day</td>
<td>fas</td>
<td> \f783</td>
<td><a href='/fontawesome/fa-calendar-day' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-days'></i> Calendar Days</td>
<td>fa-calendar-days</td>
<td>fas</td>
<td> \f073</td>
<td><a href='/fontawesome/fa-calendar-days' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-minus'></i> Calendar Minus</td>
<td>fa-calendar-minus</td>
<td>fas</td>
<td> \f272</td>
<td><a href='/fontawesome/fa-calendar-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-plus'></i> Calendar Plus</td>
<td>fa-calendar-plus</td>
<td>fas</td>
<td> \f271</td>
<td><a href='/fontawesome/fa-calendar-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-week'></i> Calendar Week</td>
<td>fa-calendar-week</td>
<td>fas</td>
<td> \f784</td>
<td><a href='/fontawesome/fa-calendar-week' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar-xmark'></i> Calendar Xmark</td>
<td>fa-calendar-xmark</td>
<td>fas</td>
<td> \f273</td>
<td><a href='/fontawesome/fa-calendar-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-calendar'></i> Calendar</td>
<td>fa-calendar</td>
<td>fas</td>
<td> \f133</td>
<td><a href='/fontawesome/fa-calendar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-camera-retro'></i> Camera Retro</td>
<td>fa-camera-retro</td>
<td>fas</td>
<td> \f083</td>
<td><a href='/fontawesome/fa-camera-retro' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-camera-rotate'></i> Camera Rotate</td>
<td>fa-camera-rotate</td>
<td>fas</td>
<td> \e0d8</td>
<td><a href='/fontawesome/fa-camera-rotate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-camera'></i> Camera</td>
<td>fa-camera</td>
<td>fas</td>
<td> \f030</td>
<td><a href='/fontawesome/fa-camera' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-campground'></i> Campground</td>
<td>fa-campground</td>
<td>fas</td>
<td> \f6bb</td>
<td><a href='/fontawesome/fa-campground' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-candy-cane'></i> Candy Cane</td>
<td>fa-candy-cane</td>
<td>fas</td>
<td> \f786</td>
<td><a href='/fontawesome/fa-candy-cane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cannabis'></i> Cannabis</td>
<td>fa-cannabis</td>
<td>fas</td>
<td> \f55f</td>
<td><a href='/fontawesome/fa-cannabis' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-capsules'></i> Capsules</td>
<td>fa-capsules</td>
<td>fas</td>
<td> \f46b</td>
<td><a href='/fontawesome/fa-capsules' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-battery'></i> Car Battery</td>
<td>fa-car-battery</td>
<td>fas</td>
<td> \f5df</td>
<td><a href='/fontawesome/fa-car-battery' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-burst'></i> Car Burst</td>
<td>fa-car-burst</td>
<td>fas</td>
<td> \f5e1</td>
<td><a href='/fontawesome/fa-car-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-on'></i> Car On</td>
<td>fa-car-on</td>
<td>fas</td>
<td> \e4dd</td>
<td><a href='/fontawesome/fa-car-on' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-rear'></i> Car Rear</td>
<td>fa-car-rear</td>
<td>fas</td>
<td> \f5de</td>
<td><a href='/fontawesome/fa-car-rear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-side'></i> Car Side</td>
<td>fa-car-side</td>
<td>fas</td>
<td> \f5e4</td>
<td><a href='/fontawesome/fa-car-side' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car-tunnel'></i> Car Tunnel</td>
<td>fa-car-tunnel</td>
<td>fas</td>
<td> \e4de</td>
<td><a href='/fontawesome/fa-car-tunnel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-car'></i> Car</td>
<td>fa-car</td>
<td>fas</td>
<td> \f1b9</td>
<td><a href='/fontawesome/fa-car' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-caravan'></i> Caravan</td>
<td>fa-caravan</td>
<td>fas</td>
<td> \f8ff</td>
<td><a href='/fontawesome/fa-caravan' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-caret-down'></i> Caret Down</td>
<td>fa-caret-down</td>
<td>fas</td>
<td> \f0d7</td>
<td><a href='/fontawesome/fa-caret-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-caret-left'></i> Caret Left</td>
<td>fa-caret-left</td>
<td>fas</td>
<td> \f0d9</td>
<td><a href='/fontawesome/fa-caret-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-caret-right'></i> Caret Right</td>
<td>fa-caret-right</td>
<td>fas</td>
<td> \f0da</td>
<td><a href='/fontawesome/fa-caret-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-caret-up'></i> Caret Up</td>
<td>fa-caret-up</td>
<td>fas</td>
<td> \f0d8</td>
<td><a href='/fontawesome/fa-caret-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-carrot'></i> Carrot</td>
<td>fa-carrot</td>
<td>fas</td>
<td> \f787</td>
<td><a href='/fontawesome/fa-carrot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cart-arrow-down'></i> Cart Arrow Down</td>
<td>fa-cart-arrow-down</td>
<td>fas</td>
<td> \f218</td>
<td><a href='/fontawesome/fa-cart-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cart-flatbed-suitcase'></i> Cart Flatbed Suitcase</td>
<td>fa-cart-flatbed-suitcase</td>
<td>fas</td>
<td> \f59d</td>
<td><a href='/fontawesome/fa-cart-flatbed-suitcase' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cart-flatbed'></i> Cart Flatbed</td>
<td>fa-cart-flatbed</td>
<td>fas</td>
<td> \f474</td>
<td><a href='/fontawesome/fa-cart-flatbed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cart-plus'></i> Cart Plus</td>
<td>fa-cart-plus</td>
<td>fas</td>
<td> \f217</td>
<td><a href='/fontawesome/fa-cart-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cart-shopping'></i> Cart Shopping</td>
<td>fa-cart-shopping</td>
<td>fas</td>
<td> \f07a</td>
<td><a href='/fontawesome/fa-cart-shopping' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cash-register'></i> Cash Register</td>
<td>fa-cash-register</td>
<td>fas</td>
<td> \f788</td>
<td><a href='/fontawesome/fa-cash-register' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cat'></i> Cat</td>
<td>fa-cat</td>
<td>fas</td>
<td> \f6be</td>
<td><a href='/fontawesome/fa-cat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cedi-sign'></i> Cedi Sign</td>
<td>fa-cedi-sign</td>
<td>fas</td>
<td> \e0df</td>
<td><a href='/fontawesome/fa-cedi-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cent-sign'></i> Cent Sign</td>
<td>fa-cent-sign</td>
<td>fas</td>
<td> \e3f5</td>
<td><a href='/fontawesome/fa-cent-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-certificate'></i> Certificate</td>
<td>fa-certificate</td>
<td>fas</td>
<td> \f0a3</td>
<td><a href='/fontawesome/fa-certificate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chair'></i> Chair</td>
<td>fa-chair</td>
<td>fas</td>
<td> \f6c0</td>
<td><a href='/fontawesome/fa-chair' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chalkboard-user'></i> Chalkboard User</td>
<td>fa-chalkboard-user</td>
<td>fas</td>
<td> \f51c</td>
<td><a href='/fontawesome/fa-chalkboard-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chalkboard'></i> Chalkboard</td>
<td>fa-chalkboard</td>
<td>fas</td>
<td> \f51b</td>
<td><a href='/fontawesome/fa-chalkboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-champagne-glasses'></i> Champagne Glasses</td>
<td>fa-champagne-glasses</td>
<td>fas</td>
<td> \f79f</td>
<td><a href='/fontawesome/fa-champagne-glasses' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-charging-station'></i> Charging Station</td>
<td>fa-charging-station</td>
<td>fas</td>
<td> \f5e7</td>
<td><a href='/fontawesome/fa-charging-station' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-area'></i> Chart Area</td>
<td>fa-chart-area</td>
<td>fas</td>
<td> \f1fe</td>
<td><a href='/fontawesome/fa-chart-area' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-bar'></i> Chart Bar</td>
<td>fa-chart-bar</td>
<td>fas</td>
<td> \f080</td>
<td><a href='/fontawesome/fa-chart-bar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-column'></i> Chart Column</td>
<td>fa-chart-column</td>
<td>fas</td>
<td> \e0e3</td>
<td><a href='/fontawesome/fa-chart-column' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-gantt'></i> Chart Gantt</td>
<td>fa-chart-gantt</td>
<td>fas</td>
<td> \e0e4</td>
<td><a href='/fontawesome/fa-chart-gantt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-line'></i> Chart Line</td>
<td>fa-chart-line</td>
<td>fas</td>
<td> \f201</td>
<td><a href='/fontawesome/fa-chart-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-pie'></i> Chart Pie</td>
<td>fa-chart-pie</td>
<td>fas</td>
<td> \f200</td>
<td><a href='/fontawesome/fa-chart-pie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chart-simple'></i> Chart Simple</td>
<td>fa-chart-simple</td>
<td>fas</td>
<td> \e473</td>
<td><a href='/fontawesome/fa-chart-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-check-double'></i> Check Double</td>
<td>fa-check-double</td>
<td>fas</td>
<td> \f560</td>
<td><a href='/fontawesome/fa-check-double' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-check-to-slot'></i> Check To Slot</td>
<td>fa-check-to-slot</td>
<td>fas</td>
<td> \f772</td>
<td><a href='/fontawesome/fa-check-to-slot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-check'></i> Check</td>
<td>fa-check</td>
<td>fas</td>
<td> \f00c</td>
<td><a href='/fontawesome/fa-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cheese'></i> Cheese</td>
<td>fa-cheese</td>
<td>fas</td>
<td> \f7ef</td>
<td><a href='/fontawesome/fa-cheese' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-bishop'></i> Chess Bishop</td>
<td>fa-chess-bishop</td>
<td>fas</td>
<td> \f43a</td>
<td><a href='/fontawesome/fa-chess-bishop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-board'></i> Chess Board</td>
<td>fa-chess-board</td>
<td>fas</td>
<td> \f43c</td>
<td><a href='/fontawesome/fa-chess-board' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-king'></i> Chess King</td>
<td>fa-chess-king</td>
<td>fas</td>
<td> \f43f</td>
<td><a href='/fontawesome/fa-chess-king' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-knight'></i> Chess Knight</td>
<td>fa-chess-knight</td>
<td>fas</td>
<td> \f441</td>
<td><a href='/fontawesome/fa-chess-knight' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-pawn'></i> Chess Pawn</td>
<td>fa-chess-pawn</td>
<td>fas</td>
<td> \f443</td>
<td><a href='/fontawesome/fa-chess-pawn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-queen'></i> Chess Queen</td>
<td>fa-chess-queen</td>
<td>fas</td>
<td> \f445</td>
<td><a href='/fontawesome/fa-chess-queen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess-rook'></i> Chess Rook</td>
<td>fa-chess-rook</td>
<td>fas</td>
<td> \f447</td>
<td><a href='/fontawesome/fa-chess-rook' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chess'></i> Chess</td>
<td>fa-chess</td>
<td>fas</td>
<td> \f439</td>
<td><a href='/fontawesome/fa-chess' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chevron-down'></i> Chevron Down</td>
<td>fa-chevron-down</td>
<td>fas</td>
<td> \f078</td>
<td><a href='/fontawesome/fa-chevron-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chevron-left'></i> Chevron Left</td>
<td>fa-chevron-left</td>
<td>fas</td>
<td> \f053</td>
<td><a href='/fontawesome/fa-chevron-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chevron-right'></i> Chevron Right</td>
<td>fa-chevron-right</td>
<td>fas</td>
<td> \f054</td>
<td><a href='/fontawesome/fa-chevron-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-chevron-up'></i> Chevron Up</td>
<td>fa-chevron-up</td>
<td>fas</td>
<td> \f077</td>
<td><a href='/fontawesome/fa-chevron-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-child-dress'></i> Child Dress</td>
<td>fa-child-dress</td>
<td>fas</td>
<td> \e59c</td>
<td><a href='/fontawesome/fa-child-dress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-child-reaching'></i> Child Reaching</td>
<td>fa-child-reaching</td>
<td>fas</td>
<td> \e59d</td>
<td><a href='/fontawesome/fa-child-reaching' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-child-rifle'></i> Child Rifle</td>
<td>fa-child-rifle</td>
<td>fas</td>
<td> \e4e0</td>
<td><a href='/fontawesome/fa-child-rifle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-child'></i> Child</td>
<td>fa-child</td>
<td>fas</td>
<td> \f1ae</td>
<td><a href='/fontawesome/fa-child' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-children'></i> Children</td>
<td>fa-children</td>
<td>fas</td>
<td> \e4e1</td>
<td><a href='/fontawesome/fa-children' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-church'></i> Church</td>
<td>fa-church</td>
<td>fas</td>
<td> \f51d</td>
<td><a href='/fontawesome/fa-church' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-arrow-down'></i> Circle Arrow Down</td>
<td>fa-circle-arrow-down</td>
<td>fas</td>
<td> \f0ab</td>
<td><a href='/fontawesome/fa-circle-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-arrow-left'></i> Circle Arrow Left</td>
<td>fa-circle-arrow-left</td>
<td>fas</td>
<td> \f0a8</td>
<td><a href='/fontawesome/fa-circle-arrow-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-arrow-right'></i> Circle Arrow Right</td>
<td>fa-circle-arrow-right</td>
<td>fas</td>
<td> \f0a9</td>
<td><a href='/fontawesome/fa-circle-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-arrow-up'></i> Circle Arrow Up</td>
<td>fa-circle-arrow-up</td>
<td>fas</td>
<td> \f0aa</td>
<td><a href='/fontawesome/fa-circle-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-check'></i> Circle Check</td>
<td>fa-circle-check</td>
<td>fas</td>
<td> \f058</td>
<td><a href='/fontawesome/fa-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-chevron-down'></i> Circle Chevron Down</td>
<td>fa-circle-chevron-down</td>
<td>fas</td>
<td> \f13a</td>
<td><a href='/fontawesome/fa-circle-chevron-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-chevron-left'></i> Circle Chevron Left</td>
<td>fa-circle-chevron-left</td>
<td>fas</td>
<td> \f137</td>
<td><a href='/fontawesome/fa-circle-chevron-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-chevron-right'></i> Circle Chevron Right</td>
<td>fa-circle-chevron-right</td>
<td>fas</td>
<td> \f138</td>
<td><a href='/fontawesome/fa-circle-chevron-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-chevron-up'></i> Circle Chevron Up</td>
<td>fa-circle-chevron-up</td>
<td>fas</td>
<td> \f139</td>
<td><a href='/fontawesome/fa-circle-chevron-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-dollar-to-slot'></i> Circle Dollar To Slot</td>
<td>fa-circle-dollar-to-slot</td>
<td>fas</td>
<td> \f4b9</td>
<td><a href='/fontawesome/fa-circle-dollar-to-slot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-dot'></i> Circle Dot</td>
<td>fa-circle-dot</td>
<td>fas</td>
<td> \f192</td>
<td><a href='/fontawesome/fa-circle-dot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-down'></i> Circle Down</td>
<td>fa-circle-down</td>
<td>fas</td>
<td> \f358</td>
<td><a href='/fontawesome/fa-circle-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-exclamation'></i> Circle Exclamation</td>
<td>fa-circle-exclamation</td>
<td>fas</td>
<td> \f06a</td>
<td><a href='/fontawesome/fa-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-h'></i> Circle H</td>
<td>fa-circle-h</td>
<td>fas</td>
<td> \f47e</td>
<td><a href='/fontawesome/fa-circle-h' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-half-stroke'></i> Circle Half Stroke</td>
<td>fa-circle-half-stroke</td>
<td>fas</td>
<td> \f042</td>
<td><a href='/fontawesome/fa-circle-half-stroke' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-info'></i> Circle Info</td>
<td>fa-circle-info</td>
<td>fas</td>
<td> \f05a</td>
<td><a href='/fontawesome/fa-circle-info' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-left'></i> Circle Left</td>
<td>fa-circle-left</td>
<td>fas</td>
<td> \f359</td>
<td><a href='/fontawesome/fa-circle-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-minus'></i> Circle Minus</td>
<td>fa-circle-minus</td>
<td>fas</td>
<td> \f056</td>
<td><a href='/fontawesome/fa-circle-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-nodes'></i> Circle Nodes</td>
<td>fa-circle-nodes</td>
<td>fas</td>
<td> \e4e2</td>
<td><a href='/fontawesome/fa-circle-nodes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-notch'></i> Circle Notch</td>
<td>fa-circle-notch</td>
<td>fas</td>
<td> \f1ce</td>
<td><a href='/fontawesome/fa-circle-notch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-pause'></i> Circle Pause</td>
<td>fa-circle-pause</td>
<td>fas</td>
<td> \f28b</td>
<td><a href='/fontawesome/fa-circle-pause' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-play'></i> Circle Play</td>
<td>fa-circle-play</td>
<td>fas</td>
<td> \f144</td>
<td><a href='/fontawesome/fa-circle-play' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-plus'></i> Circle Plus</td>
<td>fa-circle-plus</td>
<td>fas</td>
<td> \f055</td>
<td><a href='/fontawesome/fa-circle-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-question'></i> Circle Question</td>
<td>fa-circle-question</td>
<td>fas</td>
<td> \f059</td>
<td><a href='/fontawesome/fa-circle-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-radiation'></i> Circle Radiation</td>
<td>fa-circle-radiation</td>
<td>fas</td>
<td> \f7ba</td>
<td><a href='/fontawesome/fa-circle-radiation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-right'></i> Circle Right</td>
<td>fa-circle-right</td>
<td>fas</td>
<td> \f35a</td>
<td><a href='/fontawesome/fa-circle-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-stop'></i> Circle Stop</td>
<td>fa-circle-stop</td>
<td>fas</td>
<td> \f28d</td>
<td><a href='/fontawesome/fa-circle-stop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-up'></i> Circle Up</td>
<td>fa-circle-up</td>
<td>fas</td>
<td> \f35b</td>
<td><a href='/fontawesome/fa-circle-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-user'></i> Circle User</td>
<td>fa-circle-user</td>
<td>fas</td>
<td> \f2bd</td>
<td><a href='/fontawesome/fa-circle-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle-xmark'></i> Circle Xmark</td>
<td>fa-circle-xmark</td>
<td>fas</td>
<td> \f057</td>
<td><a href='/fontawesome/fa-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-circle'></i> Circle</td>
<td>fa-circle</td>
<td>fas</td>
<td> \f111</td>
<td><a href='/fontawesome/fa-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-city'></i> City</td>
<td>fa-city</td>
<td>fas</td>
<td> \f64f</td>
<td><a href='/fontawesome/fa-city' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clapperboard'></i> Clapperboard</td>
<td>fa-clapperboard</td>
<td>fas</td>
<td> \e131</td>
<td><a href='/fontawesome/fa-clapperboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clipboard-check'></i> Clipboard Check</td>
<td>fa-clipboard-check</td>
<td>fas</td>
<td> \f46c</td>
<td><a href='/fontawesome/fa-clipboard-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clipboard-list'></i> Clipboard List</td>
<td>fa-clipboard-list</td>
<td>fas</td>
<td> \f46d</td>
<td><a href='/fontawesome/fa-clipboard-list' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clipboard-question'></i> Clipboard Question</td>
<td>fa-clipboard-question</td>
<td>fas</td>
<td> \e4e3</td>
<td><a href='/fontawesome/fa-clipboard-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clipboard-user'></i> Clipboard User</td>
<td>fa-clipboard-user</td>
<td>fas</td>
<td> \f7f3</td>
<td><a href='/fontawesome/fa-clipboard-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clipboard'></i> Clipboard</td>
<td>fa-clipboard</td>
<td>fas</td>
<td> \f328</td>
<td><a href='/fontawesome/fa-clipboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clock-rotate-left'></i> Clock Rotate Left</td>
<td>fa-clock-rotate-left</td>
<td>fas</td>
<td> \f1da</td>
<td><a href='/fontawesome/fa-clock-rotate-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clock'></i> Clock</td>
<td>fa-clock</td>
<td>fas</td>
<td> \f017</td>
<td><a href='/fontawesome/fa-clock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clone'></i> Clone</td>
<td>fa-clone</td>
<td>fas</td>
<td> \f24d</td>
<td><a href='/fontawesome/fa-clone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-closed-captioning'></i> Closed Captioning</td>
<td>fa-closed-captioning</td>
<td>fas</td>
<td> \f20a</td>
<td><a href='/fontawesome/fa-closed-captioning' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-arrow-down'></i> Cloud Arrow Down</td>
<td>fa-cloud-arrow-down</td>
<td>fas</td>
<td> \f0ed</td>
<td><a href='/fontawesome/fa-cloud-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-arrow-up'></i> Cloud Arrow Up</td>
<td>fa-cloud-arrow-up</td>
<td>fas</td>
<td> \f0ee</td>
<td><a href='/fontawesome/fa-cloud-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-bolt'></i> Cloud Bolt</td>
<td>fa-cloud-bolt</td>
<td>fas</td>
<td> \f76c</td>
<td><a href='/fontawesome/fa-cloud-bolt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-meatball'></i> Cloud Meatball</td>
<td>fa-cloud-meatball</td>
<td>fas</td>
<td> \f73b</td>
<td><a href='/fontawesome/fa-cloud-meatball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-moon-rain'></i> Cloud Moon Rain</td>
<td>fa-cloud-moon-rain</td>
<td>fas</td>
<td> \f73c</td>
<td><a href='/fontawesome/fa-cloud-moon-rain' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-moon'></i> Cloud Moon</td>
<td>fa-cloud-moon</td>
<td>fas</td>
<td> \f6c3</td>
<td><a href='/fontawesome/fa-cloud-moon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-rain'></i> Cloud Rain</td>
<td>fa-cloud-rain</td>
<td>fas</td>
<td> \f73d</td>
<td><a href='/fontawesome/fa-cloud-rain' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-showers-heavy'></i> Cloud Showers Heavy</td>
<td>fa-cloud-showers-heavy</td>
<td>fas</td>
<td> \f740</td>
<td><a href='/fontawesome/fa-cloud-showers-heavy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-showers-water'></i> Cloud Showers Water</td>
<td>fa-cloud-showers-water</td>
<td>fas</td>
<td> \e4e4</td>
<td><a href='/fontawesome/fa-cloud-showers-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-sun-rain'></i> Cloud Sun Rain</td>
<td>fa-cloud-sun-rain</td>
<td>fas</td>
<td> \f743</td>
<td><a href='/fontawesome/fa-cloud-sun-rain' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud-sun'></i> Cloud Sun</td>
<td>fa-cloud-sun</td>
<td>fas</td>
<td> \f6c4</td>
<td><a href='/fontawesome/fa-cloud-sun' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cloud'></i> Cloud</td>
<td>fa-cloud</td>
<td>fas</td>
<td> \f0c2</td>
<td><a href='/fontawesome/fa-cloud' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-clover'></i> Clover</td>
<td>fa-clover</td>
<td>fas</td>
<td> \e139</td>
<td><a href='/fontawesome/fa-clover' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-branch'></i> Code Branch</td>
<td>fa-code-branch</td>
<td>fas</td>
<td> \f126</td>
<td><a href='/fontawesome/fa-code-branch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-commit'></i> Code Commit</td>
<td>fa-code-commit</td>
<td>fas</td>
<td> \f386</td>
<td><a href='/fontawesome/fa-code-commit' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-compare'></i> Code Compare</td>
<td>fa-code-compare</td>
<td>fas</td>
<td> \e13a</td>
<td><a href='/fontawesome/fa-code-compare' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-fork'></i> Code Fork</td>
<td>fa-code-fork</td>
<td>fas</td>
<td> \e13b</td>
<td><a href='/fontawesome/fa-code-fork' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-merge'></i> Code Merge</td>
<td>fa-code-merge</td>
<td>fas</td>
<td> \f387</td>
<td><a href='/fontawesome/fa-code-merge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code-pull-request'></i> Code Pull Request</td>
<td>fa-code-pull-request</td>
<td>fas</td>
<td> \e13c</td>
<td><a href='/fontawesome/fa-code-pull-request' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-code'></i> Code</td>
<td>fa-code</td>
<td>fas</td>
<td> \f121</td>
<td><a href='/fontawesome/fa-code' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-coins'></i> Coins</td>
<td>fa-coins</td>
<td>fas</td>
<td> \f51e</td>
<td><a href='/fontawesome/fa-coins' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-colon-sign'></i> Colon Sign</td>
<td>fa-colon-sign</td>
<td>fas</td>
<td> \e140</td>
<td><a href='/fontawesome/fa-colon-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment-dollar'></i> Comment Dollar</td>
<td>fa-comment-dollar</td>
<td>fas</td>
<td> \f651</td>
<td><a href='/fontawesome/fa-comment-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment-dots'></i> Comment Dots</td>
<td>fa-comment-dots</td>
<td>fas</td>
<td> \f4ad</td>
<td><a href='/fontawesome/fa-comment-dots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment-medical'></i> Comment Medical</td>
<td>fa-comment-medical</td>
<td>fas</td>
<td> \f7f5</td>
<td><a href='/fontawesome/fa-comment-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment-slash'></i> Comment Slash</td>
<td>fa-comment-slash</td>
<td>fas</td>
<td> \f4b3</td>
<td><a href='/fontawesome/fa-comment-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment-sms'></i> Comment Sms</td>
<td>fa-comment-sms</td>
<td>fas</td>
<td> \f7cd</td>
<td><a href='/fontawesome/fa-comment-sms' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comment'></i> Comment</td>
<td>fa-comment</td>
<td>fas</td>
<td> \f075</td>
<td><a href='/fontawesome/fa-comment' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comments-dollar'></i> Comments Dollar</td>
<td>fa-comments-dollar</td>
<td>fas</td>
<td> \f653</td>
<td><a href='/fontawesome/fa-comments-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-comments'></i> Comments</td>
<td>fa-comments</td>
<td>fas</td>
<td> \f086</td>
<td><a href='/fontawesome/fa-comments' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-compact-disc'></i> Compact Disc</td>
<td>fa-compact-disc</td>
<td>fas</td>
<td> \f51f</td>
<td><a href='/fontawesome/fa-compact-disc' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-compass-drafting'></i> Compass Drafting</td>
<td>fa-compass-drafting</td>
<td>fas</td>
<td> \f568</td>
<td><a href='/fontawesome/fa-compass-drafting' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-compass'></i> Compass</td>
<td>fa-compass</td>
<td>fas</td>
<td> \f14e</td>
<td><a href='/fontawesome/fa-compass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-compress'></i> Compress</td>
<td>fa-compress</td>
<td>fas</td>
<td> \f066</td>
<td><a href='/fontawesome/fa-compress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-computer-mouse'></i> Computer Mouse</td>
<td>fa-computer-mouse</td>
<td>fas</td>
<td> \f8cc</td>
<td><a href='/fontawesome/fa-computer-mouse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-computer'></i> Computer</td>
<td>fa-computer</td>
<td>fas</td>
<td> \e4e5</td>
<td><a href='/fontawesome/fa-computer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cookie-bite'></i> Cookie Bite</td>
<td>fa-cookie-bite</td>
<td>fas</td>
<td> \f564</td>
<td><a href='/fontawesome/fa-cookie-bite' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cookie'></i> Cookie</td>
<td>fa-cookie</td>
<td>fas</td>
<td> \f563</td>
<td><a href='/fontawesome/fa-cookie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-copy'></i> Copy</td>
<td>fa-copy</td>
<td>fas</td>
<td> \f0c5</td>
<td><a href='/fontawesome/fa-copy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-copyright'></i> Copyright</td>
<td>fa-copyright</td>
<td>fas</td>
<td> \f1f9</td>
<td><a href='/fontawesome/fa-copyright' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-couch'></i> Couch</td>
<td>fa-couch</td>
<td>fas</td>
<td> \f4b8</td>
<td><a href='/fontawesome/fa-couch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cow'></i> Cow</td>
<td>fa-cow</td>
<td>fas</td>
<td> \f6c8</td>
<td><a href='/fontawesome/fa-cow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-credit-card'></i> Credit Card</td>
<td>fa-credit-card</td>
<td>fas</td>
<td> \f09d</td>
<td><a href='/fontawesome/fa-credit-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crop-simple'></i> Crop Simple</td>
<td>fa-crop-simple</td>
<td>fas</td>
<td> \f565</td>
<td><a href='/fontawesome/fa-crop-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crop'></i> Crop</td>
<td>fa-crop</td>
<td>fas</td>
<td> \f125</td>
<td><a href='/fontawesome/fa-crop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cross'></i> Cross</td>
<td>fa-cross</td>
<td>fas</td>
<td> \f654</td>
<td><a href='/fontawesome/fa-cross' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crosshairs'></i> Crosshairs</td>
<td>fa-crosshairs</td>
<td>fas</td>
<td> \f05b</td>
<td><a href='/fontawesome/fa-crosshairs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crow'></i> Crow</td>
<td>fa-crow</td>
<td>fas</td>
<td> \f520</td>
<td><a href='/fontawesome/fa-crow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crown'></i> Crown</td>
<td>fa-crown</td>
<td>fas</td>
<td> \f521</td>
<td><a href='/fontawesome/fa-crown' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-crutch'></i> Crutch</td>
<td>fa-crutch</td>
<td>fas</td>
<td> \f7f7</td>
<td><a href='/fontawesome/fa-crutch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cruzeiro-sign'></i> Cruzeiro Sign</td>
<td>fa-cruzeiro-sign</td>
<td>fas</td>
<td> \e152</td>
<td><a href='/fontawesome/fa-cruzeiro-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cube'></i> Cube</td>
<td>fa-cube</td>
<td>fas</td>
<td> \f1b2</td>
<td><a href='/fontawesome/fa-cube' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cubes-stacked'></i> Cubes Stacked</td>
<td>fa-cubes-stacked</td>
<td>fas</td>
<td> \e4e6</td>
<td><a href='/fontawesome/fa-cubes-stacked' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-cubes'></i> Cubes</td>
<td>fa-cubes</td>
<td>fas</td>
<td> \f1b3</td>
<td><a href='/fontawesome/fa-cubes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-d'></i> D</td>
<td>fa-d</td>
<td>fas</td>
<td> \44</td>
<td><a href='/fontawesome/fa-d' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-database'></i> Database</td>
<td>fa-database</td>
<td>fas</td>
<td> \f1c0</td>
<td><a href='/fontawesome/fa-database' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-delete-left'></i> Delete Left</td>
<td>fa-delete-left</td>
<td>fas</td>
<td> \f55a</td>
<td><a href='/fontawesome/fa-delete-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-democrat'></i> Democrat</td>
<td>fa-democrat</td>
<td>fas</td>
<td> \f747</td>
<td><a href='/fontawesome/fa-democrat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-desktop'></i> Desktop</td>
<td>fa-desktop</td>
<td>fas</td>
<td> \f390</td>
<td><a href='/fontawesome/fa-desktop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dharmachakra'></i> Dharmachakra</td>
<td>fa-dharmachakra</td>
<td>fas</td>
<td> \f655</td>
<td><a href='/fontawesome/fa-dharmachakra' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diagram-next'></i> Diagram Next</td>
<td>fa-diagram-next</td>
<td>fas</td>
<td> \e476</td>
<td><a href='/fontawesome/fa-diagram-next' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diagram-predecessor'></i> Diagram Predecessor</td>
<td>fa-diagram-predecessor</td>
<td>fas</td>
<td> \e477</td>
<td><a href='/fontawesome/fa-diagram-predecessor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diagram-project'></i> Diagram Project</td>
<td>fa-diagram-project</td>
<td>fas</td>
<td> \f542</td>
<td><a href='/fontawesome/fa-diagram-project' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diagram-successor'></i> Diagram Successor</td>
<td>fa-diagram-successor</td>
<td>fas</td>
<td> \e47a</td>
<td><a href='/fontawesome/fa-diagram-successor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diamond-turn-right'></i> Diamond Turn Right</td>
<td>fa-diamond-turn-right</td>
<td>fas</td>
<td> \f5eb</td>
<td><a href='/fontawesome/fa-diamond-turn-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-diamond'></i> Diamond</td>
<td>fa-diamond</td>
<td>fas</td>
<td> \f219</td>
<td><a href='/fontawesome/fa-diamond' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-d20'></i> Dice D20</td>
<td>fa-dice-d20</td>
<td>fas</td>
<td> \f6cf</td>
<td><a href='/fontawesome/fa-dice-d20' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-d6'></i> Dice D6</td>
<td>fa-dice-d6</td>
<td>fas</td>
<td> \f6d1</td>
<td><a href='/fontawesome/fa-dice-d6' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-five'></i> Dice Five</td>
<td>fa-dice-five</td>
<td>fas</td>
<td> \f523</td>
<td><a href='/fontawesome/fa-dice-five' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-four'></i> Dice Four</td>
<td>fa-dice-four</td>
<td>fas</td>
<td> \f524</td>
<td><a href='/fontawesome/fa-dice-four' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-one'></i> Dice One</td>
<td>fa-dice-one</td>
<td>fas</td>
<td> \f525</td>
<td><a href='/fontawesome/fa-dice-one' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-six'></i> Dice Six</td>
<td>fa-dice-six</td>
<td>fas</td>
<td> \f526</td>
<td><a href='/fontawesome/fa-dice-six' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-three'></i> Dice Three</td>
<td>fa-dice-three</td>
<td>fas</td>
<td> \f527</td>
<td><a href='/fontawesome/fa-dice-three' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice-two'></i> Dice Two</td>
<td>fa-dice-two</td>
<td>fas</td>
<td> \f528</td>
<td><a href='/fontawesome/fa-dice-two' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dice'></i> Dice</td>
<td>fa-dice</td>
<td>fas</td>
<td> \f522</td>
<td><a href='/fontawesome/fa-dice' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-disease'></i> Disease</td>
<td>fa-disease</td>
<td>fas</td>
<td> \f7fa</td>
<td><a href='/fontawesome/fa-disease' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-display'></i> Display</td>
<td>fa-display</td>
<td>fas</td>
<td> \e163</td>
<td><a href='/fontawesome/fa-display' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-divide'></i> Divide</td>
<td>fa-divide</td>
<td>fas</td>
<td> \f529</td>
<td><a href='/fontawesome/fa-divide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dna'></i> Dna</td>
<td>fa-dna</td>
<td>fas</td>
<td> \f471</td>
<td><a href='/fontawesome/fa-dna' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dog'></i> Dog</td>
<td>fa-dog</td>
<td>fas</td>
<td> \f6d3</td>
<td><a href='/fontawesome/fa-dog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dollar-sign'></i> Dollar Sign</td>
<td>fa-dollar-sign</td>
<td>fas</td>
<td> \24</td>
<td><a href='/fontawesome/fa-dollar-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dolly'></i> Dolly</td>
<td>fa-dolly</td>
<td>fas</td>
<td> \f472</td>
<td><a href='/fontawesome/fa-dolly' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dong-sign'></i> Dong Sign</td>
<td>fa-dong-sign</td>
<td>fas</td>
<td> \e169</td>
<td><a href='/fontawesome/fa-dong-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-door-closed'></i> Door Closed</td>
<td>fa-door-closed</td>
<td>fas</td>
<td> \f52a</td>
<td><a href='/fontawesome/fa-door-closed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-door-open'></i> Door Open</td>
<td>fa-door-open</td>
<td>fas</td>
<td> \f52b</td>
<td><a href='/fontawesome/fa-door-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dove'></i> Dove</td>
<td>fa-dove</td>
<td>fas</td>
<td> \f4ba</td>
<td><a href='/fontawesome/fa-dove' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-down-left-and-up-right-to-center'></i> Down Left And Up Right To Center</td>
<td>fa-down-left-and-up-right-to-center</td>
<td>fas</td>
<td> \f422</td>
<td><a href='/fontawesome/fa-down-left-and-up-right-to-center' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-down-long'></i> Down Long</td>
<td>fa-down-long</td>
<td>fas</td>
<td> \f309</td>
<td><a href='/fontawesome/fa-down-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-download'></i> Download</td>
<td>fa-download</td>
<td>fas</td>
<td> \f019</td>
<td><a href='/fontawesome/fa-download' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dragon'></i> Dragon</td>
<td>fa-dragon</td>
<td>fas</td>
<td> \f6d5</td>
<td><a href='/fontawesome/fa-dragon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-draw-polygon'></i> Draw Polygon</td>
<td>fa-draw-polygon</td>
<td>fas</td>
<td> \f5ee</td>
<td><a href='/fontawesome/fa-draw-polygon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-droplet-slash'></i> Droplet Slash</td>
<td>fa-droplet-slash</td>
<td>fas</td>
<td> \f5c7</td>
<td><a href='/fontawesome/fa-droplet-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-droplet'></i> Droplet</td>
<td>fa-droplet</td>
<td>fas</td>
<td> \f043</td>
<td><a href='/fontawesome/fa-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-drum-steelpan'></i> Drum Steelpan</td>
<td>fa-drum-steelpan</td>
<td>fas</td>
<td> \f56a</td>
<td><a href='/fontawesome/fa-drum-steelpan' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-drum'></i> Drum</td>
<td>fa-drum</td>
<td>fas</td>
<td> \f569</td>
<td><a href='/fontawesome/fa-drum' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-drumstick-bite'></i> Drumstick Bite</td>
<td>fa-drumstick-bite</td>
<td>fas</td>
<td> \f6d7</td>
<td><a href='/fontawesome/fa-drumstick-bite' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dumbbell'></i> Dumbbell</td>
<td>fa-dumbbell</td>
<td>fas</td>
<td> \f44b</td>
<td><a href='/fontawesome/fa-dumbbell' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dumpster-fire'></i> Dumpster Fire</td>
<td>fa-dumpster-fire</td>
<td>fas</td>
<td> \f794</td>
<td><a href='/fontawesome/fa-dumpster-fire' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dumpster'></i> Dumpster</td>
<td>fa-dumpster</td>
<td>fas</td>
<td> \f793</td>
<td><a href='/fontawesome/fa-dumpster' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-dungeon'></i> Dungeon</td>
<td>fa-dungeon</td>
<td>fas</td>
<td> \f6d9</td>
<td><a href='/fontawesome/fa-dungeon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-e'></i> E</td>
<td>fa-e</td>
<td>fas</td>
<td> \45</td>
<td><a href='/fontawesome/fa-e' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ear-deaf'></i> Ear Deaf</td>
<td>fa-ear-deaf</td>
<td>fas</td>
<td> \f2a4</td>
<td><a href='/fontawesome/fa-ear-deaf' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ear-listen'></i> Ear Listen</td>
<td>fa-ear-listen</td>
<td>fas</td>
<td> \f2a2</td>
<td><a href='/fontawesome/fa-ear-listen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-earth-africa'></i> Earth Africa</td>
<td>fa-earth-africa</td>
<td>fas</td>
<td> \f57c</td>
<td><a href='/fontawesome/fa-earth-africa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-earth-americas'></i> Earth Americas</td>
<td>fa-earth-americas</td>
<td>fas</td>
<td> \f57d</td>
<td><a href='/fontawesome/fa-earth-americas' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-earth-asia'></i> Earth Asia</td>
<td>fa-earth-asia</td>
<td>fas</td>
<td> \f57e</td>
<td><a href='/fontawesome/fa-earth-asia' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-earth-europe'></i> Earth Europe</td>
<td>fa-earth-europe</td>
<td>fas</td>
<td> \f7a2</td>
<td><a href='/fontawesome/fa-earth-europe' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-earth-oceania'></i> Earth Oceania</td>
<td>fa-earth-oceania</td>
<td>fas</td>
<td> \e47b</td>
<td><a href='/fontawesome/fa-earth-oceania' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-egg'></i> Egg</td>
<td>fa-egg</td>
<td>fas</td>
<td> \f7fb</td>
<td><a href='/fontawesome/fa-egg' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eject'></i> Eject</td>
<td>fa-eject</td>
<td>fas</td>
<td> \f052</td>
<td><a href='/fontawesome/fa-eject' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-elevator'></i> Elevator</td>
<td>fa-elevator</td>
<td>fas</td>
<td> \e16d</td>
<td><a href='/fontawesome/fa-elevator' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ellipsis-vertical'></i> Ellipsis Vertical</td>
<td>fa-ellipsis-vertical</td>
<td>fas</td>
<td> \f142</td>
<td><a href='/fontawesome/fa-ellipsis-vertical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ellipsis'></i> Ellipsis</td>
<td>fa-ellipsis</td>
<td>fas</td>
<td> \f141</td>
<td><a href='/fontawesome/fa-ellipsis' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-envelope-circle-check'></i> Envelope Circle Check</td>
<td>fa-envelope-circle-check</td>
<td>fas</td>
<td> \e4e8</td>
<td><a href='/fontawesome/fa-envelope-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-envelope-open-text'></i> Envelope Open Text</td>
<td>fa-envelope-open-text</td>
<td>fas</td>
<td> \f658</td>
<td><a href='/fontawesome/fa-envelope-open-text' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-envelope-open'></i> Envelope Open</td>
<td>fa-envelope-open</td>
<td>fas</td>
<td> \f2b6</td>
<td><a href='/fontawesome/fa-envelope-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-envelope'></i> Envelope</td>
<td>fa-envelope</td>
<td>fas</td>
<td> \f0e0</td>
<td><a href='/fontawesome/fa-envelope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-envelopes-bulk'></i> Envelopes Bulk</td>
<td>fa-envelopes-bulk</td>
<td>fas</td>
<td> \f674</td>
<td><a href='/fontawesome/fa-envelopes-bulk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-equals'></i> Equals</td>
<td>fa-equals</td>
<td>fas</td>
<td> \3d</td>
<td><a href='/fontawesome/fa-equals' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eraser'></i> Eraser</td>
<td>fa-eraser</td>
<td>fas</td>
<td> \f12d</td>
<td><a href='/fontawesome/fa-eraser' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ethernet'></i> Ethernet</td>
<td>fa-ethernet</td>
<td>fas</td>
<td> \f796</td>
<td><a href='/fontawesome/fa-ethernet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-euro-sign'></i> Euro Sign</td>
<td>fa-euro-sign</td>
<td>fas</td>
<td> \f153</td>
<td><a href='/fontawesome/fa-euro-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-exclamation'></i> Exclamation</td>
<td>fa-exclamation</td>
<td>fas</td>
<td> \21</td>
<td><a href='/fontawesome/fa-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-expand'></i> Expand</td>
<td>fa-expand</td>
<td>fas</td>
<td> \f065</td>
<td><a href='/fontawesome/fa-expand' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-explosion'></i> Explosion</td>
<td>fa-explosion</td>
<td>fas</td>
<td> \e4e9</td>
<td><a href='/fontawesome/fa-explosion' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eye-dropper'></i> Eye Dropper</td>
<td>fa-eye-dropper</td>
<td>fas</td>
<td> \f1fb</td>
<td><a href='/fontawesome/fa-eye-dropper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eye-low-vision'></i> Eye Low Vision</td>
<td>fa-eye-low-vision</td>
<td>fas</td>
<td> \f2a8</td>
<td><a href='/fontawesome/fa-eye-low-vision' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eye-slash'></i> Eye Slash</td>
<td>fa-eye-slash</td>
<td>fas</td>
<td> \f070</td>
<td><a href='/fontawesome/fa-eye-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-eye'></i> Eye</td>
<td>fa-eye</td>
<td>fas</td>
<td> \f06e</td>
<td><a href='/fontawesome/fa-eye' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-f'></i> F</td>
<td>fa-f</td>
<td>fas</td>
<td> \46</td>
<td><a href='/fontawesome/fa-f' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-angry'></i> Face Angry</td>
<td>fa-face-angry</td>
<td>fas</td>
<td> \f556</td>
<td><a href='/fontawesome/fa-face-angry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-dizzy'></i> Face Dizzy</td>
<td>fa-face-dizzy</td>
<td>fas</td>
<td> \f567</td>
<td><a href='/fontawesome/fa-face-dizzy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-flushed'></i> Face Flushed</td>
<td>fa-face-flushed</td>
<td>fas</td>
<td> \f579</td>
<td><a href='/fontawesome/fa-face-flushed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-frown-open'></i> Face Frown Open</td>
<td>fa-face-frown-open</td>
<td>fas</td>
<td> \f57a</td>
<td><a href='/fontawesome/fa-face-frown-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-frown'></i> Face Frown</td>
<td>fa-face-frown</td>
<td>fas</td>
<td> \f119</td>
<td><a href='/fontawesome/fa-face-frown' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grimace'></i> Face Grimace</td>
<td>fa-face-grimace</td>
<td>fas</td>
<td> \f57f</td>
<td><a href='/fontawesome/fa-face-grimace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-beam-sweat'></i> Face Grin Beam Sweat</td>
<td>fa-face-grin-beam-sweat</td>
<td>fas</td>
<td> \f583</td>
<td><a href='/fontawesome/fa-face-grin-beam-sweat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-beam'></i> Face Grin Beam</td>
<td>fa-face-grin-beam</td>
<td>fas</td>
<td> \f582</td>
<td><a href='/fontawesome/fa-face-grin-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-hearts'></i> Face Grin Hearts</td>
<td>fa-face-grin-hearts</td>
<td>fas</td>
<td> \f584</td>
<td><a href='/fontawesome/fa-face-grin-hearts' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-squint-tears'></i> Face Grin Squint Tears</td>
<td>fa-face-grin-squint-tears</td>
<td>fas</td>
<td> \f586</td>
<td><a href='/fontawesome/fa-face-grin-squint-tears' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-squint'></i> Face Grin Squint</td>
<td>fa-face-grin-squint</td>
<td>fas</td>
<td> \f585</td>
<td><a href='/fontawesome/fa-face-grin-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-stars'></i> Face Grin Stars</td>
<td>fa-face-grin-stars</td>
<td>fas</td>
<td> \f587</td>
<td><a href='/fontawesome/fa-face-grin-stars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-tears'></i> Face Grin Tears</td>
<td>fa-face-grin-tears</td>
<td>fas</td>
<td> \f588</td>
<td><a href='/fontawesome/fa-face-grin-tears' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-tongue-squint'></i> Face Grin Tongue Squint</td>
<td>fa-face-grin-tongue-squint</td>
<td>fas</td>
<td> \f58a</td>
<td><a href='/fontawesome/fa-face-grin-tongue-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-tongue-wink'></i> Face Grin Tongue Wink</td>
<td>fa-face-grin-tongue-wink</td>
<td>fas</td>
<td> \f58b</td>
<td><a href='/fontawesome/fa-face-grin-tongue-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-tongue'></i> Face Grin Tongue</td>
<td>fa-face-grin-tongue</td>
<td>fas</td>
<td> \f589</td>
<td><a href='/fontawesome/fa-face-grin-tongue' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-wide'></i> Face Grin Wide</td>
<td>fa-face-grin-wide</td>
<td>fas</td>
<td> \f581</td>
<td><a href='/fontawesome/fa-face-grin-wide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin-wink'></i> Face Grin Wink</td>
<td>fa-face-grin-wink</td>
<td>fas</td>
<td> \f58c</td>
<td><a href='/fontawesome/fa-face-grin-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-grin'></i> Face Grin</td>
<td>fa-face-grin</td>
<td>fas</td>
<td> \f580</td>
<td><a href='/fontawesome/fa-face-grin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-kiss-beam'></i> Face Kiss Beam</td>
<td>fa-face-kiss-beam</td>
<td>fas</td>
<td> \f597</td>
<td><a href='/fontawesome/fa-face-kiss-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-kiss-wink-heart'></i> Face Kiss Wink Heart</td>
<td>fa-face-kiss-wink-heart</td>
<td>fas</td>
<td> \f598</td>
<td><a href='/fontawesome/fa-face-kiss-wink-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-kiss'></i> Face Kiss</td>
<td>fa-face-kiss</td>
<td>fas</td>
<td> \f596</td>
<td><a href='/fontawesome/fa-face-kiss' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-laugh-beam'></i> Face Laugh Beam</td>
<td>fa-face-laugh-beam</td>
<td>fas</td>
<td> \f59a</td>
<td><a href='/fontawesome/fa-face-laugh-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-laugh-squint'></i> Face Laugh Squint</td>
<td>fa-face-laugh-squint</td>
<td>fas</td>
<td> \f59b</td>
<td><a href='/fontawesome/fa-face-laugh-squint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-laugh-wink'></i> Face Laugh Wink</td>
<td>fa-face-laugh-wink</td>
<td>fas</td>
<td> \f59c</td>
<td><a href='/fontawesome/fa-face-laugh-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-laugh'></i> Face Laugh</td>
<td>fa-face-laugh</td>
<td>fas</td>
<td> \f599</td>
<td><a href='/fontawesome/fa-face-laugh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-meh-blank'></i> Face Meh Blank</td>
<td>fa-face-meh-blank</td>
<td>fas</td>
<td> \f5a4</td>
<td><a href='/fontawesome/fa-face-meh-blank' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-meh'></i> Face Meh</td>
<td>fa-face-meh</td>
<td>fas</td>
<td> \f11a</td>
<td><a href='/fontawesome/fa-face-meh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-rolling-eyes'></i> Face Rolling Eyes</td>
<td>fa-face-rolling-eyes</td>
<td>fas</td>
<td> \f5a5</td>
<td><a href='/fontawesome/fa-face-rolling-eyes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-sad-cry'></i> Face Sad Cry</td>
<td>fa-face-sad-cry</td>
<td>fas</td>
<td> \f5b3</td>
<td><a href='/fontawesome/fa-face-sad-cry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-sad-tear'></i> Face Sad Tear</td>
<td>fa-face-sad-tear</td>
<td>fas</td>
<td> \f5b4</td>
<td><a href='/fontawesome/fa-face-sad-tear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-smile-beam'></i> Face Smile Beam</td>
<td>fa-face-smile-beam</td>
<td>fas</td>
<td> \f5b8</td>
<td><a href='/fontawesome/fa-face-smile-beam' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-smile-wink'></i> Face Smile Wink</td>
<td>fa-face-smile-wink</td>
<td>fas</td>
<td> \f4da</td>
<td><a href='/fontawesome/fa-face-smile-wink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-smile'></i> Face Smile</td>
<td>fa-face-smile</td>
<td>fas</td>
<td> \f118</td>
<td><a href='/fontawesome/fa-face-smile' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-surprise'></i> Face Surprise</td>
<td>fa-face-surprise</td>
<td>fas</td>
<td> \f5c2</td>
<td><a href='/fontawesome/fa-face-surprise' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-face-tired'></i> Face Tired</td>
<td>fa-face-tired</td>
<td>fas</td>
<td> \f5c8</td>
<td><a href='/fontawesome/fa-face-tired' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fan'></i> Fan</td>
<td>fa-fan</td>
<td>fas</td>
<td> \f863</td>
<td><a href='/fontawesome/fa-fan' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-faucet-drip'></i> Faucet Drip</td>
<td>fa-faucet-drip</td>
<td>fas</td>
<td> \e006</td>
<td><a href='/fontawesome/fa-faucet-drip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-faucet'></i> Faucet</td>
<td>fa-faucet</td>
<td>fas</td>
<td> \e005</td>
<td><a href='/fontawesome/fa-faucet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fax'></i> Fax</td>
<td>fa-fax</td>
<td>fas</td>
<td> \f1ac</td>
<td><a href='/fontawesome/fa-fax' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-feather-pointed'></i> Feather Pointed</td>
<td>fa-feather-pointed</td>
<td>fas</td>
<td> \f56b</td>
<td><a href='/fontawesome/fa-feather-pointed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-feather'></i> Feather</td>
<td>fa-feather</td>
<td>fas</td>
<td> \f52d</td>
<td><a href='/fontawesome/fa-feather' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ferry'></i> Ferry</td>
<td>fa-ferry</td>
<td>fas</td>
<td> \e4ea</td>
<td><a href='/fontawesome/fa-ferry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-arrow-down'></i> File Arrow Down</td>
<td>fa-file-arrow-down</td>
<td>fas</td>
<td> \f56d</td>
<td><a href='/fontawesome/fa-file-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-arrow-up'></i> File Arrow Up</td>
<td>fa-file-arrow-up</td>
<td>fas</td>
<td> \f574</td>
<td><a href='/fontawesome/fa-file-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-audio'></i> File Audio</td>
<td>fa-file-audio</td>
<td>fas</td>
<td> \f1c7</td>
<td><a href='/fontawesome/fa-file-audio' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-check'></i> File Circle Check</td>
<td>fa-file-circle-check</td>
<td>fas</td>
<td> \e5a0</td>
<td><a href='/fontawesome/fa-file-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-exclamation'></i> File Circle Exclamation</td>
<td>fa-file-circle-exclamation</td>
<td>fas</td>
<td> \e4eb</td>
<td><a href='/fontawesome/fa-file-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-minus'></i> File Circle Minus</td>
<td>fa-file-circle-minus</td>
<td>fas</td>
<td> \e4ed</td>
<td><a href='/fontawesome/fa-file-circle-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-plus'></i> File Circle Plus</td>
<td>fa-file-circle-plus</td>
<td>fas</td>
<td> \e494</td>
<td><a href='/fontawesome/fa-file-circle-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-question'></i> File Circle Question</td>
<td>fa-file-circle-question</td>
<td>fas</td>
<td> \e4ef</td>
<td><a href='/fontawesome/fa-file-circle-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-circle-xmark'></i> File Circle Xmark</td>
<td>fa-file-circle-xmark</td>
<td>fas</td>
<td> \e5a1</td>
<td><a href='/fontawesome/fa-file-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-code'></i> File Code</td>
<td>fa-file-code</td>
<td>fas</td>
<td> \f1c9</td>
<td><a href='/fontawesome/fa-file-code' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-contract'></i> File Contract</td>
<td>fa-file-contract</td>
<td>fas</td>
<td> \f56c</td>
<td><a href='/fontawesome/fa-file-contract' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-csv'></i> File Csv</td>
<td>fa-file-csv</td>
<td>fas</td>
<td> \f6dd</td>
<td><a href='/fontawesome/fa-file-csv' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-excel'></i> File Excel</td>
<td>fa-file-excel</td>
<td>fas</td>
<td> \f1c3</td>
<td><a href='/fontawesome/fa-file-excel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-export'></i> File Export</td>
<td>fa-file-export</td>
<td>fas</td>
<td> \f56e</td>
<td><a href='/fontawesome/fa-file-export' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-image'></i> File Image</td>
<td>fa-file-image</td>
<td>fas</td>
<td> \f1c5</td>
<td><a href='/fontawesome/fa-file-image' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-import'></i> File Import</td>
<td>fa-file-import</td>
<td>fas</td>
<td> \f56f</td>
<td><a href='/fontawesome/fa-file-import' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-invoice-dollar'></i> File Invoice Dollar</td>
<td>fa-file-invoice-dollar</td>
<td>fas</td>
<td> \f571</td>
<td><a href='/fontawesome/fa-file-invoice-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-invoice'></i> File Invoice</td>
<td>fa-file-invoice</td>
<td>fas</td>
<td> \f570</td>
<td><a href='/fontawesome/fa-file-invoice' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-lines'></i> File Lines</td>
<td>fa-file-lines</td>
<td>fas</td>
<td> \f15c</td>
<td><a href='/fontawesome/fa-file-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-medical'></i> File Medical</td>
<td>fa-file-medical</td>
<td>fas</td>
<td> \f477</td>
<td><a href='/fontawesome/fa-file-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-pdf'></i> File Pdf</td>
<td>fa-file-pdf</td>
<td>fas</td>
<td> \f1c1</td>
<td><a href='/fontawesome/fa-file-pdf' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-pen'></i> File Pen</td>
<td>fa-file-pen</td>
<td>fas</td>
<td> \f31c</td>
<td><a href='/fontawesome/fa-file-pen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-powerpoint'></i> File Powerpoint</td>
<td>fa-file-powerpoint</td>
<td>fas</td>
<td> \f1c4</td>
<td><a href='/fontawesome/fa-file-powerpoint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-prescription'></i> File Prescription</td>
<td>fa-file-prescription</td>
<td>fas</td>
<td> \f572</td>
<td><a href='/fontawesome/fa-file-prescription' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-shield'></i> File Shield</td>
<td>fa-file-shield</td>
<td>fas</td>
<td> \e4f0</td>
<td><a href='/fontawesome/fa-file-shield' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-signature'></i> File Signature</td>
<td>fa-file-signature</td>
<td>fas</td>
<td> \f573</td>
<td><a href='/fontawesome/fa-file-signature' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-video'></i> File Video</td>
<td>fa-file-video</td>
<td>fas</td>
<td> \f1c8</td>
<td><a href='/fontawesome/fa-file-video' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-waveform'></i> File Waveform</td>
<td>fa-file-waveform</td>
<td>fas</td>
<td> \f478</td>
<td><a href='/fontawesome/fa-file-waveform' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-word'></i> File Word</td>
<td>fa-file-word</td>
<td>fas</td>
<td> \f1c2</td>
<td><a href='/fontawesome/fa-file-word' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file-zipper'></i> File Zipper</td>
<td>fa-file-zipper</td>
<td>fas</td>
<td> \f1c6</td>
<td><a href='/fontawesome/fa-file-zipper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-file'></i> File</td>
<td>fa-file</td>
<td>fas</td>
<td> \f15b</td>
<td><a href='/fontawesome/fa-file' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fill-drip'></i> Fill Drip</td>
<td>fa-fill-drip</td>
<td>fas</td>
<td> \f576</td>
<td><a href='/fontawesome/fa-fill-drip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fill'></i> Fill</td>
<td>fa-fill</td>
<td>fas</td>
<td> \f575</td>
<td><a href='/fontawesome/fa-fill' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-film'></i> Film</td>
<td>fa-film</td>
<td>fas</td>
<td> \f008</td>
<td><a href='/fontawesome/fa-film' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-filter-circle-dollar'></i> Filter Circle Dollar</td>
<td>fa-filter-circle-dollar</td>
<td>fas</td>
<td> \f662</td>
<td><a href='/fontawesome/fa-filter-circle-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-filter-circle-xmark'></i> Filter Circle Xmark</td>
<td>fa-filter-circle-xmark</td>
<td>fas</td>
<td> \e17b</td>
<td><a href='/fontawesome/fa-filter-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-filter'></i> Filter</td>
<td>fa-filter</td>
<td>fas</td>
<td> \f0b0</td>
<td><a href='/fontawesome/fa-filter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fingerprint'></i> Fingerprint</td>
<td>fa-fingerprint</td>
<td>fas</td>
<td> \f577</td>
<td><a href='/fontawesome/fa-fingerprint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fire-burner'></i> Fire Burner</td>
<td>fa-fire-burner</td>
<td>fas</td>
<td> \e4f1</td>
<td><a href='/fontawesome/fa-fire-burner' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fire-extinguisher'></i> Fire Extinguisher</td>
<td>fa-fire-extinguisher</td>
<td>fas</td>
<td> \f134</td>
<td><a href='/fontawesome/fa-fire-extinguisher' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fire-flame-curved'></i> Fire Flame Curved</td>
<td>fa-fire-flame-curved</td>
<td>fas</td>
<td> \f7e4</td>
<td><a href='/fontawesome/fa-fire-flame-curved' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fire-flame-simple'></i> Fire Flame Simple</td>
<td>fa-fire-flame-simple</td>
<td>fas</td>
<td> \f46a</td>
<td><a href='/fontawesome/fa-fire-flame-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fire'></i> Fire</td>
<td>fa-fire</td>
<td>fas</td>
<td> \f06d</td>
<td><a href='/fontawesome/fa-fire' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fish-fins'></i> Fish Fins</td>
<td>fa-fish-fins</td>
<td>fas</td>
<td> \e4f2</td>
<td><a href='/fontawesome/fa-fish-fins' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-fish'></i> Fish</td>
<td>fa-fish</td>
<td>fas</td>
<td> \f578</td>
<td><a href='/fontawesome/fa-fish' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-flag-checkered'></i> Flag Checkered</td>
<td>fa-flag-checkered</td>
<td>fas</td>
<td> \f11e</td>
<td><a href='/fontawesome/fa-flag-checkered' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-flag-usa'></i> Flag Usa</td>
<td>fa-flag-usa</td>
<td>fas</td>
<td> \f74d</td>
<td><a href='/fontawesome/fa-flag-usa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-flag'></i> Flag</td>
<td>fa-flag</td>
<td>fas</td>
<td> \f024</td>
<td><a href='/fontawesome/fa-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-flask-vial'></i> Flask Vial</td>
<td>fa-flask-vial</td>
<td>fas</td>
<td> \e4f3</td>
<td><a href='/fontawesome/fa-flask-vial' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-flask'></i> Flask</td>
<td>fa-flask</td>
<td>fas</td>
<td> \f0c3</td>
<td><a href='/fontawesome/fa-flask' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-floppy-disk'></i> Floppy Disk</td>
<td>fa-floppy-disk</td>
<td>fas</td>
<td> \f0c7</td>
<td><a href='/fontawesome/fa-floppy-disk' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-florin-sign'></i> Florin Sign</td>
<td>fa-florin-sign</td>
<td>fas</td>
<td> \e184</td>
<td><a href='/fontawesome/fa-florin-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder-closed'></i> Folder Closed</td>
<td>fa-folder-closed</td>
<td>fas</td>
<td> \e185</td>
<td><a href='/fontawesome/fa-folder-closed' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder-minus'></i> Folder Minus</td>
<td>fa-folder-minus</td>
<td>fas</td>
<td> \f65d</td>
<td><a href='/fontawesome/fa-folder-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder-open'></i> Folder Open</td>
<td>fa-folder-open</td>
<td>fas</td>
<td> \f07c</td>
<td><a href='/fontawesome/fa-folder-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder-plus'></i> Folder Plus</td>
<td>fa-folder-plus</td>
<td>fas</td>
<td> \f65e</td>
<td><a href='/fontawesome/fa-folder-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder-tree'></i> Folder Tree</td>
<td>fa-folder-tree</td>
<td>fas</td>
<td> \f802</td>
<td><a href='/fontawesome/fa-folder-tree' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-folder'></i> Folder</td>
<td>fa-folder</td>
<td>fas</td>
<td> \f07b</td>
<td><a href='/fontawesome/fa-folder' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-font-awesome'></i> Font Awesome</td>
<td>fa-font-awesome</td>
<td>fas</td>
<td> \f2b4</td>
<td><a href='/fontawesome/fa-font-awesome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-font'></i> Font</td>
<td>fa-font</td>
<td>fas</td>
<td> \f031</td>
<td><a href='/fontawesome/fa-font' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-football'></i> Football</td>
<td>fa-football</td>
<td>fas</td>
<td> \f44e</td>
<td><a href='/fontawesome/fa-football' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-forward-fast'></i> Forward Fast</td>
<td>fa-forward-fast</td>
<td>fas</td>
<td> \f050</td>
<td><a href='/fontawesome/fa-forward-fast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-forward-step'></i> Forward Step</td>
<td>fa-forward-step</td>
<td>fas</td>
<td> \f051</td>
<td><a href='/fontawesome/fa-forward-step' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-forward'></i> Forward</td>
<td>fa-forward</td>
<td>fas</td>
<td> \f04e</td>
<td><a href='/fontawesome/fa-forward' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-franc-sign'></i> Franc Sign</td>
<td>fa-franc-sign</td>
<td>fas</td>
<td> \e18f</td>
<td><a href='/fontawesome/fa-franc-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-frog'></i> Frog</td>
<td>fa-frog</td>
<td>fas</td>
<td> \f52e</td>
<td><a href='/fontawesome/fa-frog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-futbol'></i> Futbol</td>
<td>fa-futbol</td>
<td>fas</td>
<td> \f1e3</td>
<td><a href='/fontawesome/fa-futbol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-g'></i> G</td>
<td>fa-g</td>
<td>fas</td>
<td> \47</td>
<td><a href='/fontawesome/fa-g' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gamepad'></i> Gamepad</td>
<td>fa-gamepad</td>
<td>fas</td>
<td> \f11b</td>
<td><a href='/fontawesome/fa-gamepad' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gas-pump'></i> Gas Pump</td>
<td>fa-gas-pump</td>
<td>fas</td>
<td> \f52f</td>
<td><a href='/fontawesome/fa-gas-pump' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gauge-high'></i> Gauge High</td>
<td>fa-gauge-high</td>
<td>fas</td>
<td> \f625</td>
<td><a href='/fontawesome/fa-gauge-high' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gauge-simple-high'></i> Gauge Simple High</td>
<td>fa-gauge-simple-high</td>
<td>fas</td>
<td> \f62a</td>
<td><a href='/fontawesome/fa-gauge-simple-high' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gauge-simple'></i> Gauge Simple</td>
<td>fa-gauge-simple</td>
<td>fas</td>
<td> \f629</td>
<td><a href='/fontawesome/fa-gauge-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gauge'></i> Gauge</td>
<td>fa-gauge</td>
<td>fas</td>
<td> \f624</td>
<td><a href='/fontawesome/fa-gauge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gavel'></i> Gavel</td>
<td>fa-gavel</td>
<td>fas</td>
<td> \f0e3</td>
<td><a href='/fontawesome/fa-gavel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gear'></i> Gear</td>
<td>fa-gear</td>
<td>fas</td>
<td> \f013</td>
<td><a href='/fontawesome/fa-gear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gears'></i> Gears</td>
<td>fa-gears</td>
<td>fas</td>
<td> \f085</td>
<td><a href='/fontawesome/fa-gears' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gem'></i> Gem</td>
<td>fa-gem</td>
<td>fas</td>
<td> \f3a5</td>
<td><a href='/fontawesome/fa-gem' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-genderless'></i> Genderless</td>
<td>fa-genderless</td>
<td>fas</td>
<td> \f22d</td>
<td><a href='/fontawesome/fa-genderless' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ghost'></i> Ghost</td>
<td>fa-ghost</td>
<td>fas</td>
<td> \f6e2</td>
<td><a href='/fontawesome/fa-ghost' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gift'></i> Gift</td>
<td>fa-gift</td>
<td>fas</td>
<td> \f06b</td>
<td><a href='/fontawesome/fa-gift' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gifts'></i> Gifts</td>
<td>fa-gifts</td>
<td>fas</td>
<td> \f79c</td>
<td><a href='/fontawesome/fa-gifts' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-glass-water-droplet'></i> Glass Water Droplet</td>
<td>fa-glass-water-droplet</td>
<td>fas</td>
<td> \e4f5</td>
<td><a href='/fontawesome/fa-glass-water-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-glass-water'></i> Glass Water</td>
<td>fa-glass-water</td>
<td>fas</td>
<td> \e4f4</td>
<td><a href='/fontawesome/fa-glass-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-glasses'></i> Glasses</td>
<td>fa-glasses</td>
<td>fas</td>
<td> \f530</td>
<td><a href='/fontawesome/fa-glasses' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-globe'></i> Globe</td>
<td>fa-globe</td>
<td>fas</td>
<td> \f0ac</td>
<td><a href='/fontawesome/fa-globe' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-golf-ball-tee'></i> Golf Ball Tee</td>
<td>fa-golf-ball-tee</td>
<td>fas</td>
<td> \f450</td>
<td><a href='/fontawesome/fa-golf-ball-tee' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gopuram'></i> Gopuram</td>
<td>fa-gopuram</td>
<td>fas</td>
<td> \f664</td>
<td><a href='/fontawesome/fa-gopuram' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-graduation-cap'></i> Graduation Cap</td>
<td>fa-graduation-cap</td>
<td>fas</td>
<td> \f19d</td>
<td><a href='/fontawesome/fa-graduation-cap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-greater-than-equal'></i> Greater Than Equal</td>
<td>fa-greater-than-equal</td>
<td>fas</td>
<td> \f532</td>
<td><a href='/fontawesome/fa-greater-than-equal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-greater-than'></i> Greater Than</td>
<td>fa-greater-than</td>
<td>fas</td>
<td> \3e</td>
<td><a href='/fontawesome/fa-greater-than' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-grip-lines-vertical'></i> Grip Lines Vertical</td>
<td>fa-grip-lines-vertical</td>
<td>fas</td>
<td> \f7a5</td>
<td><a href='/fontawesome/fa-grip-lines-vertical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-grip-lines'></i> Grip Lines</td>
<td>fa-grip-lines</td>
<td>fas</td>
<td> \f7a4</td>
<td><a href='/fontawesome/fa-grip-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-grip-vertical'></i> Grip Vertical</td>
<td>fa-grip-vertical</td>
<td>fas</td>
<td> \f58e</td>
<td><a href='/fontawesome/fa-grip-vertical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-grip'></i> Grip</td>
<td>fa-grip</td>
<td>fas</td>
<td> \f58d</td>
<td><a href='/fontawesome/fa-grip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-group-arrows-rotate'></i> Group Arrows Rotate</td>
<td>fa-group-arrows-rotate</td>
<td>fas</td>
<td> \e4f6</td>
<td><a href='/fontawesome/fa-group-arrows-rotate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-guarani-sign'></i> Guarani Sign</td>
<td>fa-guarani-sign</td>
<td>fas</td>
<td> \e19a</td>
<td><a href='/fontawesome/fa-guarani-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-guitar'></i> Guitar</td>
<td>fa-guitar</td>
<td>fas</td>
<td> \f7a6</td>
<td><a href='/fontawesome/fa-guitar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-gun'></i> Gun</td>
<td>fa-gun</td>
<td>fas</td>
<td> \e19b</td>
<td><a href='/fontawesome/fa-gun' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-h'></i> H</td>
<td>fa-h</td>
<td>fas</td>
<td> \48</td>
<td><a href='/fontawesome/fa-h' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hammer'></i> Hammer</td>
<td>fa-hammer</td>
<td>fas</td>
<td> \f6e3</td>
<td><a href='/fontawesome/fa-hammer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hamsa'></i> Hamsa</td>
<td>fa-hamsa</td>
<td>fas</td>
<td> \f665</td>
<td><a href='/fontawesome/fa-hamsa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-back-fist'></i> Hand Back Fist</td>
<td>fa-hand-back-fist</td>
<td>fas</td>
<td> \f255</td>
<td><a href='/fontawesome/fa-hand-back-fist' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-dots'></i> Hand Dots</td>
<td>fa-hand-dots</td>
<td>fas</td>
<td> \f461</td>
<td><a href='/fontawesome/fa-hand-dots' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-fist'></i> Hand Fist</td>
<td>fa-hand-fist</td>
<td>fas</td>
<td> \f6de</td>
<td><a href='/fontawesome/fa-hand-fist' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding-dollar'></i> Hand Holding Dollar</td>
<td>fa-hand-holding-dollar</td>
<td>fas</td>
<td> \f4c0</td>
<td><a href='/fontawesome/fa-hand-holding-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding-droplet'></i> Hand Holding Droplet</td>
<td>fa-hand-holding-droplet</td>
<td>fas</td>
<td> \f4c1</td>
<td><a href='/fontawesome/fa-hand-holding-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding-hand'></i> Hand Holding Hand</td>
<td>fa-hand-holding-hand</td>
<td>fas</td>
<td> \e4f7</td>
<td><a href='/fontawesome/fa-hand-holding-hand' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding-heart'></i> Hand Holding Heart</td>
<td>fa-hand-holding-heart</td>
<td>fas</td>
<td> \f4be</td>
<td><a href='/fontawesome/fa-hand-holding-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding-medical'></i> Hand Holding Medical</td>
<td>fa-hand-holding-medical</td>
<td>fas</td>
<td> \e05c</td>
<td><a href='/fontawesome/fa-hand-holding-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-holding'></i> Hand Holding</td>
<td>fa-hand-holding</td>
<td>fas</td>
<td> \f4bd</td>
<td><a href='/fontawesome/fa-hand-holding' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-lizard'></i> Hand Lizard</td>
<td>fa-hand-lizard</td>
<td>fas</td>
<td> \f258</td>
<td><a href='/fontawesome/fa-hand-lizard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-middle-finger'></i> Hand Middle Finger</td>
<td>fa-hand-middle-finger</td>
<td>fas</td>
<td> \f806</td>
<td><a href='/fontawesome/fa-hand-middle-finger' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-peace'></i> Hand Peace</td>
<td>fa-hand-peace</td>
<td>fas</td>
<td> \f25b</td>
<td><a href='/fontawesome/fa-hand-peace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-point-down'></i> Hand Point Down</td>
<td>fa-hand-point-down</td>
<td>fas</td>
<td> \f0a7</td>
<td><a href='/fontawesome/fa-hand-point-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-point-left'></i> Hand Point Left</td>
<td>fa-hand-point-left</td>
<td>fas</td>
<td> \f0a5</td>
<td><a href='/fontawesome/fa-hand-point-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-point-right'></i> Hand Point Right</td>
<td>fa-hand-point-right</td>
<td>fas</td>
<td> \f0a4</td>
<td><a href='/fontawesome/fa-hand-point-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-point-up'></i> Hand Point Up</td>
<td>fa-hand-point-up</td>
<td>fas</td>
<td> \f0a6</td>
<td><a href='/fontawesome/fa-hand-point-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-pointer'></i> Hand Pointer</td>
<td>fa-hand-pointer</td>
<td>fas</td>
<td> \f25a</td>
<td><a href='/fontawesome/fa-hand-pointer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-scissors'></i> Hand Scissors</td>
<td>fa-hand-scissors</td>
<td>fas</td>
<td> \f257</td>
<td><a href='/fontawesome/fa-hand-scissors' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-sparkles'></i> Hand Sparkles</td>
<td>fa-hand-sparkles</td>
<td>fas</td>
<td> \e05d</td>
<td><a href='/fontawesome/fa-hand-sparkles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand-spock'></i> Hand Spock</td>
<td>fa-hand-spock</td>
<td>fas</td>
<td> \f259</td>
<td><a href='/fontawesome/fa-hand-spock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hand'></i> Hand</td>
<td>fa-hand</td>
<td>fas</td>
<td> \f256</td>
<td><a href='/fontawesome/fa-hand' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handcuffs'></i> Handcuffs</td>
<td>fa-handcuffs</td>
<td>fas</td>
<td> \e4f8</td>
<td><a href='/fontawesome/fa-handcuffs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-asl-interpreting'></i> Hands Asl Interpreting</td>
<td>fa-hands-asl-interpreting</td>
<td>fas</td>
<td> \f2a3</td>
<td><a href='/fontawesome/fa-hands-asl-interpreting' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-bound'></i> Hands Bound</td>
<td>fa-hands-bound</td>
<td>fas</td>
<td> \e4f9</td>
<td><a href='/fontawesome/fa-hands-bound' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-bubbles'></i> Hands Bubbles</td>
<td>fa-hands-bubbles</td>
<td>fas</td>
<td> \e05e</td>
<td><a href='/fontawesome/fa-hands-bubbles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-clapping'></i> Hands Clapping</td>
<td>fa-hands-clapping</td>
<td>fas</td>
<td> \e1a8</td>
<td><a href='/fontawesome/fa-hands-clapping' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-holding-child'></i> Hands Holding Child</td>
<td>fa-hands-holding-child</td>
<td>fas</td>
<td> \e4fa</td>
<td><a href='/fontawesome/fa-hands-holding-child' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-holding-circle'></i> Hands Holding Circle</td>
<td>fa-hands-holding-circle</td>
<td>fas</td>
<td> \e4fb</td>
<td><a href='/fontawesome/fa-hands-holding-circle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-holding'></i> Hands Holding</td>
<td>fa-hands-holding</td>
<td>fas</td>
<td> \f4c2</td>
<td><a href='/fontawesome/fa-hands-holding' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands-praying'></i> Hands Praying</td>
<td>fa-hands-praying</td>
<td>fas</td>
<td> \f684</td>
<td><a href='/fontawesome/fa-hands-praying' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hands'></i> Hands</td>
<td>fa-hands</td>
<td>fas</td>
<td> \f2a7</td>
<td><a href='/fontawesome/fa-hands' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handshake-angle'></i> Handshake Angle</td>
<td>fa-handshake-angle</td>
<td>fas</td>
<td> \f4c4</td>
<td><a href='/fontawesome/fa-handshake-angle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handshake-simple-slash'></i> Handshake Simple Slash</td>
<td>fa-handshake-simple-slash</td>
<td>fas</td>
<td> \e05f</td>
<td><a href='/fontawesome/fa-handshake-simple-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handshake-simple'></i> Handshake Simple</td>
<td>fa-handshake-simple</td>
<td>fas</td>
<td> \f4c6</td>
<td><a href='/fontawesome/fa-handshake-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handshake-slash'></i> Handshake Slash</td>
<td>fa-handshake-slash</td>
<td>fas</td>
<td> \e060</td>
<td><a href='/fontawesome/fa-handshake-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-handshake'></i> Handshake</td>
<td>fa-handshake</td>
<td>fas</td>
<td> \f2b5</td>
<td><a href='/fontawesome/fa-handshake' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hanukiah'></i> Hanukiah</td>
<td>fa-hanukiah</td>
<td>fas</td>
<td> \f6e6</td>
<td><a href='/fontawesome/fa-hanukiah' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hard-drive'></i> Hard Drive</td>
<td>fa-hard-drive</td>
<td>fas</td>
<td> \f0a0</td>
<td><a href='/fontawesome/fa-hard-drive' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hashtag'></i> Hashtag</td>
<td>fa-hashtag</td>
<td>fas</td>
<td> \23</td>
<td><a href='/fontawesome/fa-hashtag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hat-cowboy-side'></i> Hat Cowboy Side</td>
<td>fa-hat-cowboy-side</td>
<td>fas</td>
<td> \f8c1</td>
<td><a href='/fontawesome/fa-hat-cowboy-side' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hat-cowboy'></i> Hat Cowboy</td>
<td>fa-hat-cowboy</td>
<td>fas</td>
<td> \f8c0</td>
<td><a href='/fontawesome/fa-hat-cowboy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hat-wizard'></i> Hat Wizard</td>
<td>fa-hat-wizard</td>
<td>fas</td>
<td> \f6e8</td>
<td><a href='/fontawesome/fa-hat-wizard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-head-side-cough-slash'></i> Head Side Cough Slash</td>
<td>fa-head-side-cough-slash</td>
<td>fas</td>
<td> \e062</td>
<td><a href='/fontawesome/fa-head-side-cough-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-head-side-cough'></i> Head Side Cough</td>
<td>fa-head-side-cough</td>
<td>fas</td>
<td> \e061</td>
<td><a href='/fontawesome/fa-head-side-cough' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-head-side-mask'></i> Head Side Mask</td>
<td>fa-head-side-mask</td>
<td>fas</td>
<td> \e063</td>
<td><a href='/fontawesome/fa-head-side-mask' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-head-side-virus'></i> Head Side Virus</td>
<td>fa-head-side-virus</td>
<td>fas</td>
<td> \e064</td>
<td><a href='/fontawesome/fa-head-side-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heading'></i> Heading</td>
<td>fa-heading</td>
<td>fas</td>
<td> \f1dc</td>
<td><a href='/fontawesome/fa-heading' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-headphones-simple'></i> Headphones Simple</td>
<td>fa-headphones-simple</td>
<td>fas</td>
<td> \f58f</td>
<td><a href='/fontawesome/fa-headphones-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-headphones'></i> Headphones</td>
<td>fa-headphones</td>
<td>fas</td>
<td> \f025</td>
<td><a href='/fontawesome/fa-headphones' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-headset'></i> Headset</td>
<td>fa-headset</td>
<td>fas</td>
<td> \f590</td>
<td><a href='/fontawesome/fa-headset' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-bolt'></i> Heart Circle Bolt</td>
<td>fa-heart-circle-bolt</td>
<td>fas</td>
<td> \e4fc</td>
<td><a href='/fontawesome/fa-heart-circle-bolt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-check'></i> Heart Circle Check</td>
<td>fa-heart-circle-check</td>
<td>fas</td>
<td> \e4fd</td>
<td><a href='/fontawesome/fa-heart-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-exclamation'></i> Heart Circle Exclamation</td>
<td>fa-heart-circle-exclamation</td>
<td>fas</td>
<td> \e4fe</td>
<td><a href='/fontawesome/fa-heart-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-minus'></i> Heart Circle Minus</td>
<td>fa-heart-circle-minus</td>
<td>fas</td>
<td> \e4ff</td>
<td><a href='/fontawesome/fa-heart-circle-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-plus'></i> Heart Circle Plus</td>
<td>fa-heart-circle-plus</td>
<td>fas</td>
<td> \e500</td>
<td><a href='/fontawesome/fa-heart-circle-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-circle-xmark'></i> Heart Circle Xmark</td>
<td>fa-heart-circle-xmark</td>
<td>fas</td>
<td> \e501</td>
<td><a href='/fontawesome/fa-heart-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-crack'></i> Heart Crack</td>
<td>fa-heart-crack</td>
<td>fas</td>
<td> \f7a9</td>
<td><a href='/fontawesome/fa-heart-crack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart-pulse'></i> Heart Pulse</td>
<td>fa-heart-pulse</td>
<td>fas</td>
<td> \f21e</td>
<td><a href='/fontawesome/fa-heart-pulse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-heart'></i> Heart</td>
<td>fa-heart</td>
<td>fas</td>
<td> \f004</td>
<td><a href='/fontawesome/fa-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-helicopter-symbol'></i> Helicopter Symbol</td>
<td>fa-helicopter-symbol</td>
<td>fas</td>
<td> \e502</td>
<td><a href='/fontawesome/fa-helicopter-symbol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-helicopter'></i> Helicopter</td>
<td>fa-helicopter</td>
<td>fas</td>
<td> \f533</td>
<td><a href='/fontawesome/fa-helicopter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-helmet-safety'></i> Helmet Safety</td>
<td>fa-helmet-safety</td>
<td>fas</td>
<td> \f807</td>
<td><a href='/fontawesome/fa-helmet-safety' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-helmet-un'></i> Helmet Un</td>
<td>fa-helmet-un</td>
<td>fas</td>
<td> \e503</td>
<td><a href='/fontawesome/fa-helmet-un' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-highlighter'></i> Highlighter</td>
<td>fa-highlighter</td>
<td>fas</td>
<td> \f591</td>
<td><a href='/fontawesome/fa-highlighter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hill-avalanche'></i> Hill Avalanche</td>
<td>fa-hill-avalanche</td>
<td>fas</td>
<td> \e507</td>
<td><a href='/fontawesome/fa-hill-avalanche' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hill-rockslide'></i> Hill Rockslide</td>
<td>fa-hill-rockslide</td>
<td>fas</td>
<td> \e508</td>
<td><a href='/fontawesome/fa-hill-rockslide' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hippo'></i> Hippo</td>
<td>fa-hippo</td>
<td>fas</td>
<td> \f6ed</td>
<td><a href='/fontawesome/fa-hippo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hockey-puck'></i> Hockey Puck</td>
<td>fa-hockey-puck</td>
<td>fas</td>
<td> \f453</td>
<td><a href='/fontawesome/fa-hockey-puck' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-holly-berry'></i> Holly Berry</td>
<td>fa-holly-berry</td>
<td>fas</td>
<td> \f7aa</td>
<td><a href='/fontawesome/fa-holly-berry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-horse-head'></i> Horse Head</td>
<td>fa-horse-head</td>
<td>fas</td>
<td> \f7ab</td>
<td><a href='/fontawesome/fa-horse-head' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-horse'></i> Horse</td>
<td>fa-horse</td>
<td>fas</td>
<td> \f6f0</td>
<td><a href='/fontawesome/fa-horse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hospital-user'></i> Hospital User</td>
<td>fa-hospital-user</td>
<td>fas</td>
<td> \f80d</td>
<td><a href='/fontawesome/fa-hospital-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hospital'></i> Hospital</td>
<td>fa-hospital</td>
<td>fas</td>
<td> \f0f8</td>
<td><a href='/fontawesome/fa-hospital' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hot-tub-person'></i> Hot Tub Person</td>
<td>fa-hot-tub-person</td>
<td>fas</td>
<td> \f593</td>
<td><a href='/fontawesome/fa-hot-tub-person' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hotdog'></i> Hotdog</td>
<td>fa-hotdog</td>
<td>fas</td>
<td> \f80f</td>
<td><a href='/fontawesome/fa-hotdog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hotel'></i> Hotel</td>
<td>fa-hotel</td>
<td>fas</td>
<td> \f594</td>
<td><a href='/fontawesome/fa-hotel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hourglass-end'></i> Hourglass End</td>
<td>fa-hourglass-end</td>
<td>fas</td>
<td> \f253</td>
<td><a href='/fontawesome/fa-hourglass-end' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hourglass-half'></i> Hourglass Half</td>
<td>fa-hourglass-half</td>
<td>fas</td>
<td> \f252</td>
<td><a href='/fontawesome/fa-hourglass-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hourglass-start'></i> Hourglass Start</td>
<td>fa-hourglass-start</td>
<td>fas</td>
<td> \f251</td>
<td><a href='/fontawesome/fa-hourglass-start' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hourglass'></i> Hourglass</td>
<td>fa-hourglass</td>
<td>fas</td>
<td> \f254</td>
<td><a href='/fontawesome/fa-hourglass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-chimney-crack'></i> House Chimney Crack</td>
<td>fa-house-chimney-crack</td>
<td>fas</td>
<td> \f6f1</td>
<td><a href='/fontawesome/fa-house-chimney-crack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-chimney-medical'></i> House Chimney Medical</td>
<td>fa-house-chimney-medical</td>
<td>fas</td>
<td> \f7f2</td>
<td><a href='/fontawesome/fa-house-chimney-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-chimney-user'></i> House Chimney User</td>
<td>fa-house-chimney-user</td>
<td>fas</td>
<td> \e065</td>
<td><a href='/fontawesome/fa-house-chimney-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-chimney-window'></i> House Chimney Window</td>
<td>fa-house-chimney-window</td>
<td>fas</td>
<td> \e00d</td>
<td><a href='/fontawesome/fa-house-chimney-window' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-chimney'></i> House Chimney</td>
<td>fa-house-chimney</td>
<td>fas</td>
<td> \e3af</td>
<td><a href='/fontawesome/fa-house-chimney' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-circle-check'></i> House Circle Check</td>
<td>fa-house-circle-check</td>
<td>fas</td>
<td> \e509</td>
<td><a href='/fontawesome/fa-house-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-circle-exclamation'></i> House Circle Exclamation</td>
<td>fa-house-circle-exclamation</td>
<td>fas</td>
<td> \e50a</td>
<td><a href='/fontawesome/fa-house-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-circle-xmark'></i> House Circle Xmark</td>
<td>fa-house-circle-xmark</td>
<td>fas</td>
<td> \e50b</td>
<td><a href='/fontawesome/fa-house-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-crack'></i> House Crack</td>
<td>fa-house-crack</td>
<td>fas</td>
<td> \e3b1</td>
<td><a href='/fontawesome/fa-house-crack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-fire'></i> House Fire</td>
<td>fa-house-fire</td>
<td>fas</td>
<td> \e50c</td>
<td><a href='/fontawesome/fa-house-fire' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-flag'></i> House Flag</td>
<td>fa-house-flag</td>
<td>fas</td>
<td> \e50d</td>
<td><a href='/fontawesome/fa-house-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-flood-water-circle-arrow-right'></i> House Flood Water Circle Arrow Right</td>
<td>fa-house-flood-water-circle-arrow-right</td>
<td>fas</td>
<td> \e50f</td>
<td><a href='/fontawesome/fa-house-flood-water-circle-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-flood-water'></i> House Flood Water</td>
<td>fa-house-flood-water</td>
<td>fas</td>
<td> \e50e</td>
<td><a href='/fontawesome/fa-house-flood-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-laptop'></i> House Laptop</td>
<td>fa-house-laptop</td>
<td>fas</td>
<td> \e066</td>
<td><a href='/fontawesome/fa-house-laptop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-lock'></i> House Lock</td>
<td>fa-house-lock</td>
<td>fas</td>
<td> \e510</td>
<td><a href='/fontawesome/fa-house-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-medical-circle-check'></i> House Medical Circle Check</td>
<td>fa-house-medical-circle-check</td>
<td>fas</td>
<td> \e511</td>
<td><a href='/fontawesome/fa-house-medical-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-medical-circle-exclamation'></i> House Medical Circle Exclamation</td>
<td>fa-house-medical-circle-exclamation</td>
<td>fas</td>
<td> \e512</td>
<td><a href='/fontawesome/fa-house-medical-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-medical-circle-xmark'></i> House Medical Circle Xmark</td>
<td>fa-house-medical-circle-xmark</td>
<td>fas</td>
<td> \e513</td>
<td><a href='/fontawesome/fa-house-medical-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-medical-flag'></i> House Medical Flag</td>
<td>fa-house-medical-flag</td>
<td>fas</td>
<td> \e514</td>
<td><a href='/fontawesome/fa-house-medical-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-medical'></i> House Medical</td>
<td>fa-house-medical</td>
<td>fas</td>
<td> \e3b2</td>
<td><a href='/fontawesome/fa-house-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-signal'></i> House Signal</td>
<td>fa-house-signal</td>
<td>fas</td>
<td> \e012</td>
<td><a href='/fontawesome/fa-house-signal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-tsunami'></i> House Tsunami</td>
<td>fa-house-tsunami</td>
<td>fas</td>
<td> \e515</td>
<td><a href='/fontawesome/fa-house-tsunami' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house-user'></i> House User</td>
<td>fa-house-user</td>
<td>fas</td>
<td> \e1b0</td>
<td><a href='/fontawesome/fa-house-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-house'></i> House</td>
<td>fa-house</td>
<td>fas</td>
<td> \f015</td>
<td><a href='/fontawesome/fa-house' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hryvnia-sign'></i> Hryvnia Sign</td>
<td>fa-hryvnia-sign</td>
<td>fas</td>
<td> \f6f2</td>
<td><a href='/fontawesome/fa-hryvnia-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-hurricane'></i> Hurricane</td>
<td>fa-hurricane</td>
<td>fas</td>
<td> \f751</td>
<td><a href='/fontawesome/fa-hurricane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-i-cursor'></i> I Cursor</td>
<td>fa-i-cursor</td>
<td>fas</td>
<td> \f246</td>
<td><a href='/fontawesome/fa-i-cursor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-i'></i> I</td>
<td>fa-i</td>
<td>fas</td>
<td> \49</td>
<td><a href='/fontawesome/fa-i' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ice-cream'></i> Ice Cream</td>
<td>fa-ice-cream</td>
<td>fas</td>
<td> \f810</td>
<td><a href='/fontawesome/fa-ice-cream' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-icicles'></i> Icicles</td>
<td>fa-icicles</td>
<td>fas</td>
<td> \f7ad</td>
<td><a href='/fontawesome/fa-icicles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-icons'></i> Icons</td>
<td>fa-icons</td>
<td>fas</td>
<td> \f86d</td>
<td><a href='/fontawesome/fa-icons' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-id-badge'></i> Id Badge</td>
<td>fa-id-badge</td>
<td>fas</td>
<td> \f2c1</td>
<td><a href='/fontawesome/fa-id-badge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-id-card-clip'></i> Id Card Clip</td>
<td>fa-id-card-clip</td>
<td>fas</td>
<td> \f47f</td>
<td><a href='/fontawesome/fa-id-card-clip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-id-card'></i> Id Card</td>
<td>fa-id-card</td>
<td>fas</td>
<td> \f2c2</td>
<td><a href='/fontawesome/fa-id-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-igloo'></i> Igloo</td>
<td>fa-igloo</td>
<td>fas</td>
<td> \f7ae</td>
<td><a href='/fontawesome/fa-igloo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-image-portrait'></i> Image Portrait</td>
<td>fa-image-portrait</td>
<td>fas</td>
<td> \f3e0</td>
<td><a href='/fontawesome/fa-image-portrait' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-image'></i> Image</td>
<td>fa-image</td>
<td>fas</td>
<td> \f03e</td>
<td><a href='/fontawesome/fa-image' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-images'></i> Images</td>
<td>fa-images</td>
<td>fas</td>
<td> \f302</td>
<td><a href='/fontawesome/fa-images' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-inbox'></i> Inbox</td>
<td>fa-inbox</td>
<td>fas</td>
<td> \f01c</td>
<td><a href='/fontawesome/fa-inbox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-indent'></i> Indent</td>
<td>fa-indent</td>
<td>fas</td>
<td> \f03c</td>
<td><a href='/fontawesome/fa-indent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-indian-rupee-sign'></i> Indian Rupee Sign</td>
<td>fa-indian-rupee-sign</td>
<td>fas</td>
<td> \e1bc</td>
<td><a href='/fontawesome/fa-indian-rupee-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-industry'></i> Industry</td>
<td>fa-industry</td>
<td>fas</td>
<td> \f275</td>
<td><a href='/fontawesome/fa-industry' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-infinity'></i> Infinity</td>
<td>fa-infinity</td>
<td>fas</td>
<td> \f534</td>
<td><a href='/fontawesome/fa-infinity' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-info'></i> Info</td>
<td>fa-info</td>
<td>fas</td>
<td> \f129</td>
<td><a href='/fontawesome/fa-info' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-italic'></i> Italic</td>
<td>fa-italic</td>
<td>fas</td>
<td> \f033</td>
<td><a href='/fontawesome/fa-italic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-j'></i> J</td>
<td>fa-j</td>
<td>fas</td>
<td> \4a</td>
<td><a href='/fontawesome/fa-j' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jar-wheat'></i> Jar Wheat</td>
<td>fa-jar-wheat</td>
<td>fas</td>
<td> \e517</td>
<td><a href='/fontawesome/fa-jar-wheat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jar'></i> Jar</td>
<td>fa-jar</td>
<td>fas</td>
<td> \e516</td>
<td><a href='/fontawesome/fa-jar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jedi'></i> Jedi</td>
<td>fa-jedi</td>
<td>fas</td>
<td> \f669</td>
<td><a href='/fontawesome/fa-jedi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jet-fighter-up'></i> Jet Fighter Up</td>
<td>fa-jet-fighter-up</td>
<td>fas</td>
<td> \e518</td>
<td><a href='/fontawesome/fa-jet-fighter-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jet-fighter'></i> Jet Fighter</td>
<td>fa-jet-fighter</td>
<td>fas</td>
<td> \f0fb</td>
<td><a href='/fontawesome/fa-jet-fighter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-joint'></i> Joint</td>
<td>fa-joint</td>
<td>fas</td>
<td> \f595</td>
<td><a href='/fontawesome/fa-joint' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-jug-detergent'></i> Jug Detergent</td>
<td>fa-jug-detergent</td>
<td>fas</td>
<td> \e519</td>
<td><a href='/fontawesome/fa-jug-detergent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-k'></i> K</td>
<td>fa-k</td>
<td>fas</td>
<td> \4b</td>
<td><a href='/fontawesome/fa-k' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-kaaba'></i> Kaaba</td>
<td>fa-kaaba</td>
<td>fas</td>
<td> \f66b</td>
<td><a href='/fontawesome/fa-kaaba' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-key'></i> Key</td>
<td>fa-key</td>
<td>fas</td>
<td> \f084</td>
<td><a href='/fontawesome/fa-key' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-keyboard'></i> Keyboard</td>
<td>fa-keyboard</td>
<td>fas</td>
<td> \f11c</td>
<td><a href='/fontawesome/fa-keyboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-khanda'></i> Khanda</td>
<td>fa-khanda</td>
<td>fas</td>
<td> \f66d</td>
<td><a href='/fontawesome/fa-khanda' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-kip-sign'></i> Kip Sign</td>
<td>fa-kip-sign</td>
<td>fas</td>
<td> \e1c4</td>
<td><a href='/fontawesome/fa-kip-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-kit-medical'></i> Kit Medical</td>
<td>fa-kit-medical</td>
<td>fas</td>
<td> \f479</td>
<td><a href='/fontawesome/fa-kit-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-kitchen-set'></i> Kitchen Set</td>
<td>fa-kitchen-set</td>
<td>fas</td>
<td> \e51a</td>
<td><a href='/fontawesome/fa-kitchen-set' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-kiwi-bird'></i> Kiwi Bird</td>
<td>fa-kiwi-bird</td>
<td>fas</td>
<td> \f535</td>
<td><a href='/fontawesome/fa-kiwi-bird' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-l'></i> L</td>
<td>fa-l</td>
<td>fas</td>
<td> \4c</td>
<td><a href='/fontawesome/fa-l' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-land-mine-on'></i> Land Mine On</td>
<td>fa-land-mine-on</td>
<td>fas</td>
<td> \e51b</td>
<td><a href='/fontawesome/fa-land-mine-on' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-landmark-dome'></i> Landmark Dome</td>
<td>fa-landmark-dome</td>
<td>fas</td>
<td> \f752</td>
<td><a href='/fontawesome/fa-landmark-dome' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-landmark-flag'></i> Landmark Flag</td>
<td>fa-landmark-flag</td>
<td>fas</td>
<td> \e51c</td>
<td><a href='/fontawesome/fa-landmark-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-landmark'></i> Landmark</td>
<td>fa-landmark</td>
<td>fas</td>
<td> \f66f</td>
<td><a href='/fontawesome/fa-landmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-language'></i> Language</td>
<td>fa-language</td>
<td>fas</td>
<td> \f1ab</td>
<td><a href='/fontawesome/fa-language' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-laptop-code'></i> Laptop Code</td>
<td>fa-laptop-code</td>
<td>fas</td>
<td> \f5fc</td>
<td><a href='/fontawesome/fa-laptop-code' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-laptop-file'></i> Laptop File</td>
<td>fa-laptop-file</td>
<td>fas</td>
<td> \e51d</td>
<td><a href='/fontawesome/fa-laptop-file' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-laptop-medical'></i> Laptop Medical</td>
<td>fa-laptop-medical</td>
<td>fas</td>
<td> \f812</td>
<td><a href='/fontawesome/fa-laptop-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-laptop'></i> Laptop</td>
<td>fa-laptop</td>
<td>fas</td>
<td> \f109</td>
<td><a href='/fontawesome/fa-laptop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lari-sign'></i> Lari Sign</td>
<td>fa-lari-sign</td>
<td>fas</td>
<td> \e1c8</td>
<td><a href='/fontawesome/fa-lari-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-layer-group'></i> Layer Group</td>
<td>fa-layer-group</td>
<td>fas</td>
<td> \f5fd</td>
<td><a href='/fontawesome/fa-layer-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-leaf'></i> Leaf</td>
<td>fa-leaf</td>
<td>fas</td>
<td> \f06c</td>
<td><a href='/fontawesome/fa-leaf' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-left-long'></i> Left Long</td>
<td>fa-left-long</td>
<td>fas</td>
<td> \f30a</td>
<td><a href='/fontawesome/fa-left-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-left-right'></i> Left Right</td>
<td>fa-left-right</td>
<td>fas</td>
<td> \f337</td>
<td><a href='/fontawesome/fa-left-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lemon'></i> Lemon</td>
<td>fa-lemon</td>
<td>fas</td>
<td> \f094</td>
<td><a href='/fontawesome/fa-lemon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-less-than-equal'></i> Less Than Equal</td>
<td>fa-less-than-equal</td>
<td>fas</td>
<td> \f537</td>
<td><a href='/fontawesome/fa-less-than-equal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-less-than'></i> Less Than</td>
<td>fa-less-than</td>
<td>fas</td>
<td> \3c</td>
<td><a href='/fontawesome/fa-less-than' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-life-ring'></i> Life Ring</td>
<td>fa-life-ring</td>
<td>fas</td>
<td> \f1cd</td>
<td><a href='/fontawesome/fa-life-ring' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lightbulb'></i> Lightbulb</td>
<td>fa-lightbulb</td>
<td>fas</td>
<td> \f0eb</td>
<td><a href='/fontawesome/fa-lightbulb' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lines-leaning'></i> Lines Leaning</td>
<td>fa-lines-leaning</td>
<td>fas</td>
<td> \e51e</td>
<td><a href='/fontawesome/fa-lines-leaning' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-link-slash'></i> Link Slash</td>
<td>fa-link-slash</td>
<td>fas</td>
<td> \f127</td>
<td><a href='/fontawesome/fa-link-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-link'></i> Link</td>
<td>fa-link</td>
<td>fas</td>
<td> \f0c1</td>
<td><a href='/fontawesome/fa-link' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lira-sign'></i> Lira Sign</td>
<td>fa-lira-sign</td>
<td>fas</td>
<td> \f195</td>
<td><a href='/fontawesome/fa-lira-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-list-check'></i> List Check</td>
<td>fa-list-check</td>
<td>fas</td>
<td> \f0ae</td>
<td><a href='/fontawesome/fa-list-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-list-ol'></i> List Ol</td>
<td>fa-list-ol</td>
<td>fas</td>
<td> \f0cb</td>
<td><a href='/fontawesome/fa-list-ol' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-list-ul'></i> List Ul</td>
<td>fa-list-ul</td>
<td>fas</td>
<td> \f0ca</td>
<td><a href='/fontawesome/fa-list-ul' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-list'></i> List</td>
<td>fa-list</td>
<td>fas</td>
<td> \f03a</td>
<td><a href='/fontawesome/fa-list' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-litecoin-sign'></i> Litecoin Sign</td>
<td>fa-litecoin-sign</td>
<td>fas</td>
<td> \e1d3</td>
<td><a href='/fontawesome/fa-litecoin-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-location-arrow'></i> Location Arrow</td>
<td>fa-location-arrow</td>
<td>fas</td>
<td> \f124</td>
<td><a href='/fontawesome/fa-location-arrow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-location-crosshairs'></i> Location Crosshairs</td>
<td>fa-location-crosshairs</td>
<td>fas</td>
<td> \f601</td>
<td><a href='/fontawesome/fa-location-crosshairs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-location-dot'></i> Location Dot</td>
<td>fa-location-dot</td>
<td>fas</td>
<td> \f3c5</td>
<td><a href='/fontawesome/fa-location-dot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-location-pin-lock'></i> Location Pin Lock</td>
<td>fa-location-pin-lock</td>
<td>fas</td>
<td> \e51f</td>
<td><a href='/fontawesome/fa-location-pin-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-location-pin'></i> Location Pin</td>
<td>fa-location-pin</td>
<td>fas</td>
<td> \f041</td>
<td><a href='/fontawesome/fa-location-pin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lock-open'></i> Lock Open</td>
<td>fa-lock-open</td>
<td>fas</td>
<td> \f3c1</td>
<td><a href='/fontawesome/fa-lock-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lock'></i> Lock</td>
<td>fa-lock</td>
<td>fas</td>
<td> \f023</td>
<td><a href='/fontawesome/fa-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-locust'></i> Locust</td>
<td>fa-locust</td>
<td>fas</td>
<td> \e520</td>
<td><a href='/fontawesome/fa-locust' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lungs-virus'></i> Lungs Virus</td>
<td>fa-lungs-virus</td>
<td>fas</td>
<td> \e067</td>
<td><a href='/fontawesome/fa-lungs-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-lungs'></i> Lungs</td>
<td>fa-lungs</td>
<td>fas</td>
<td> \f604</td>
<td><a href='/fontawesome/fa-lungs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-m'></i> M</td>
<td>fa-m</td>
<td>fas</td>
<td> \4d</td>
<td><a href='/fontawesome/fa-m' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnet'></i> Magnet</td>
<td>fa-magnet</td>
<td>fas</td>
<td> \f076</td>
<td><a href='/fontawesome/fa-magnet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-arrow-right'></i> Magnifying Glass Arrow Right</td>
<td>fa-magnifying-glass-arrow-right</td>
<td>fas</td>
<td> \e521</td>
<td><a href='/fontawesome/fa-magnifying-glass-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-chart'></i> Magnifying Glass Chart</td>
<td>fa-magnifying-glass-chart</td>
<td>fas</td>
<td> \e522</td>
<td><a href='/fontawesome/fa-magnifying-glass-chart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-dollar'></i> Magnifying Glass Dollar</td>
<td>fa-magnifying-glass-dollar</td>
<td>fas</td>
<td> \f688</td>
<td><a href='/fontawesome/fa-magnifying-glass-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-location'></i> Magnifying Glass Location</td>
<td>fa-magnifying-glass-location</td>
<td>fas</td>
<td> \f689</td>
<td><a href='/fontawesome/fa-magnifying-glass-location' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-minus'></i> Magnifying Glass Minus</td>
<td>fa-magnifying-glass-minus</td>
<td>fas</td>
<td> \f010</td>
<td><a href='/fontawesome/fa-magnifying-glass-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass-plus'></i> Magnifying Glass Plus</td>
<td>fa-magnifying-glass-plus</td>
<td>fas</td>
<td> \f00e</td>
<td><a href='/fontawesome/fa-magnifying-glass-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-magnifying-glass'></i> Magnifying Glass</td>
<td>fa-magnifying-glass</td>
<td>fas</td>
<td> \f002</td>
<td><a href='/fontawesome/fa-magnifying-glass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-manat-sign'></i> Manat Sign</td>
<td>fa-manat-sign</td>
<td>fas</td>
<td> \e1d5</td>
<td><a href='/fontawesome/fa-manat-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-map-location-dot'></i> Map Location Dot</td>
<td>fa-map-location-dot</td>
<td>fas</td>
<td> \f5a0</td>
<td><a href='/fontawesome/fa-map-location-dot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-map-location'></i> Map Location</td>
<td>fa-map-location</td>
<td>fas</td>
<td> \f59f</td>
<td><a href='/fontawesome/fa-map-location' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-map-pin'></i> Map Pin</td>
<td>fa-map-pin</td>
<td>fas</td>
<td> \f276</td>
<td><a href='/fontawesome/fa-map-pin' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-map'></i> Map</td>
<td>fa-map</td>
<td>fas</td>
<td> \f279</td>
<td><a href='/fontawesome/fa-map' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-marker'></i> Marker</td>
<td>fa-marker</td>
<td>fas</td>
<td> \f5a1</td>
<td><a href='/fontawesome/fa-marker' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-and-venus-burst'></i> Mars And Venus Burst</td>
<td>fa-mars-and-venus-burst</td>
<td>fas</td>
<td> \e523</td>
<td><a href='/fontawesome/fa-mars-and-venus-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-and-venus'></i> Mars And Venus</td>
<td>fa-mars-and-venus</td>
<td>fas</td>
<td> \f224</td>
<td><a href='/fontawesome/fa-mars-and-venus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-double'></i> Mars Double</td>
<td>fa-mars-double</td>
<td>fas</td>
<td> \f227</td>
<td><a href='/fontawesome/fa-mars-double' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-stroke-right'></i> Mars Stroke Right</td>
<td>fa-mars-stroke-right</td>
<td>fas</td>
<td> \f22b</td>
<td><a href='/fontawesome/fa-mars-stroke-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-stroke-up'></i> Mars Stroke Up</td>
<td>fa-mars-stroke-up</td>
<td>fas</td>
<td> \f22a</td>
<td><a href='/fontawesome/fa-mars-stroke-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars-stroke'></i> Mars Stroke</td>
<td>fa-mars-stroke</td>
<td>fas</td>
<td> \f229</td>
<td><a href='/fontawesome/fa-mars-stroke' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mars'></i> Mars</td>
<td>fa-mars</td>
<td>fas</td>
<td> \f222</td>
<td><a href='/fontawesome/fa-mars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-martini-glass-citrus'></i> Martini Glass Citrus</td>
<td>fa-martini-glass-citrus</td>
<td>fas</td>
<td> \f561</td>
<td><a href='/fontawesome/fa-martini-glass-citrus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-martini-glass-empty'></i> Martini Glass Empty</td>
<td>fa-martini-glass-empty</td>
<td>fas</td>
<td> \f000</td>
<td><a href='/fontawesome/fa-martini-glass-empty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-martini-glass'></i> Martini Glass</td>
<td>fa-martini-glass</td>
<td>fas</td>
<td> \f57b</td>
<td><a href='/fontawesome/fa-martini-glass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mask-face'></i> Mask Face</td>
<td>fa-mask-face</td>
<td>fas</td>
<td> \e1d7</td>
<td><a href='/fontawesome/fa-mask-face' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mask-ventilator'></i> Mask Ventilator</td>
<td>fa-mask-ventilator</td>
<td>fas</td>
<td> \e524</td>
<td><a href='/fontawesome/fa-mask-ventilator' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mask'></i> Mask</td>
<td>fa-mask</td>
<td>fas</td>
<td> \f6fa</td>
<td><a href='/fontawesome/fa-mask' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-masks-theater'></i> Masks Theater</td>
<td>fa-masks-theater</td>
<td>fas</td>
<td> \f630</td>
<td><a href='/fontawesome/fa-masks-theater' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mattress-pillow'></i> Mattress Pillow</td>
<td>fa-mattress-pillow</td>
<td>fas</td>
<td> \e525</td>
<td><a href='/fontawesome/fa-mattress-pillow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-maximize'></i> Maximize</td>
<td>fa-maximize</td>
<td>fas</td>
<td> \f31e</td>
<td><a href='/fontawesome/fa-maximize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-medal'></i> Medal</td>
<td>fa-medal</td>
<td>fas</td>
<td> \f5a2</td>
<td><a href='/fontawesome/fa-medal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-memory'></i> Memory</td>
<td>fa-memory</td>
<td>fas</td>
<td> \f538</td>
<td><a href='/fontawesome/fa-memory' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-menorah'></i> Menorah</td>
<td>fa-menorah</td>
<td>fas</td>
<td> \f676</td>
<td><a href='/fontawesome/fa-menorah' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mercury'></i> Mercury</td>
<td>fa-mercury</td>
<td>fas</td>
<td> \f223</td>
<td><a href='/fontawesome/fa-mercury' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-message'></i> Message</td>
<td>fa-message</td>
<td>fas</td>
<td> \f27a</td>
<td><a href='/fontawesome/fa-message' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-meteor'></i> Meteor</td>
<td>fa-meteor</td>
<td>fas</td>
<td> \f753</td>
<td><a href='/fontawesome/fa-meteor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microchip'></i> Microchip</td>
<td>fa-microchip</td>
<td>fas</td>
<td> \f2db</td>
<td><a href='/fontawesome/fa-microchip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microphone-lines-slash'></i> Microphone Lines Slash</td>
<td>fa-microphone-lines-slash</td>
<td>fas</td>
<td> \f539</td>
<td><a href='/fontawesome/fa-microphone-lines-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microphone-lines'></i> Microphone Lines</td>
<td>fa-microphone-lines</td>
<td>fas</td>
<td> \f3c9</td>
<td><a href='/fontawesome/fa-microphone-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microphone-slash'></i> Microphone Slash</td>
<td>fa-microphone-slash</td>
<td>fas</td>
<td> \f131</td>
<td><a href='/fontawesome/fa-microphone-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microphone'></i> Microphone</td>
<td>fa-microphone</td>
<td>fas</td>
<td> \f130</td>
<td><a href='/fontawesome/fa-microphone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-microscope'></i> Microscope</td>
<td>fa-microscope</td>
<td>fas</td>
<td> \f610</td>
<td><a href='/fontawesome/fa-microscope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mill-sign'></i> Mill Sign</td>
<td>fa-mill-sign</td>
<td>fas</td>
<td> \e1ed</td>
<td><a href='/fontawesome/fa-mill-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-minimize'></i> Minimize</td>
<td>fa-minimize</td>
<td>fas</td>
<td> \f78c</td>
<td><a href='/fontawesome/fa-minimize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-minus'></i> Minus</td>
<td>fa-minus</td>
<td>fas</td>
<td> \f068</td>
<td><a href='/fontawesome/fa-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mitten'></i> Mitten</td>
<td>fa-mitten</td>
<td>fas</td>
<td> \f7b5</td>
<td><a href='/fontawesome/fa-mitten' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mobile-button'></i> Mobile Button</td>
<td>fa-mobile-button</td>
<td>fas</td>
<td> \f10b</td>
<td><a href='/fontawesome/fa-mobile-button' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mobile-retro'></i> Mobile Retro</td>
<td>fa-mobile-retro</td>
<td>fas</td>
<td> \e527</td>
<td><a href='/fontawesome/fa-mobile-retro' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mobile-screen-button'></i> Mobile Screen Button</td>
<td>fa-mobile-screen-button</td>
<td>fas</td>
<td> \f3cd</td>
<td><a href='/fontawesome/fa-mobile-screen-button' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mobile-screen'></i> Mobile Screen</td>
<td>fa-mobile-screen</td>
<td>fas</td>
<td> \f3cf</td>
<td><a href='/fontawesome/fa-mobile-screen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mobile'></i> Mobile</td>
<td>fa-mobile</td>
<td>fas</td>
<td> \f3ce</td>
<td><a href='/fontawesome/fa-mobile' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-1-wave'></i> Money Bill 1 Wave</td>
<td>fa-money-bill-1-wave</td>
<td>fas</td>
<td> \f53b</td>
<td><a href='/fontawesome/fa-money-bill-1-wave' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-1'></i> Money Bill 1</td>
<td>fa-money-bill-1</td>
<td>fas</td>
<td> \f3d1</td>
<td><a href='/fontawesome/fa-money-bill-1' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-transfer'></i> Money Bill Transfer</td>
<td>fa-money-bill-transfer</td>
<td>fas</td>
<td> \e528</td>
<td><a href='/fontawesome/fa-money-bill-transfer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-trend-up'></i> Money Bill Trend Up</td>
<td>fa-money-bill-trend-up</td>
<td>fas</td>
<td> \e529</td>
<td><a href='/fontawesome/fa-money-bill-trend-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-wave'></i> Money Bill Wave</td>
<td>fa-money-bill-wave</td>
<td>fas</td>
<td> \f53a</td>
<td><a href='/fontawesome/fa-money-bill-wave' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill-wheat'></i> Money Bill Wheat</td>
<td>fa-money-bill-wheat</td>
<td>fas</td>
<td> \e52a</td>
<td><a href='/fontawesome/fa-money-bill-wheat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bill'></i> Money Bill</td>
<td>fa-money-bill</td>
<td>fas</td>
<td> \f0d6</td>
<td><a href='/fontawesome/fa-money-bill' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-bills'></i> Money Bills</td>
<td>fa-money-bills</td>
<td>fas</td>
<td> \e1f3</td>
<td><a href='/fontawesome/fa-money-bills' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-check-dollar'></i> Money Check Dollar</td>
<td>fa-money-check-dollar</td>
<td>fas</td>
<td> \f53d</td>
<td><a href='/fontawesome/fa-money-check-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-money-check'></i> Money Check</td>
<td>fa-money-check</td>
<td>fas</td>
<td> \f53c</td>
<td><a href='/fontawesome/fa-money-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-monument'></i> Monument</td>
<td>fa-monument</td>
<td>fas</td>
<td> \f5a6</td>
<td><a href='/fontawesome/fa-monument' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-moon'></i> Moon</td>
<td>fa-moon</td>
<td>fas</td>
<td> \f186</td>
<td><a href='/fontawesome/fa-moon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mortar-pestle'></i> Mortar Pestle</td>
<td>fa-mortar-pestle</td>
<td>fas</td>
<td> \f5a7</td>
<td><a href='/fontawesome/fa-mortar-pestle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mosque'></i> Mosque</td>
<td>fa-mosque</td>
<td>fas</td>
<td> \f678</td>
<td><a href='/fontawesome/fa-mosque' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mosquito-net'></i> Mosquito Net</td>
<td>fa-mosquito-net</td>
<td>fas</td>
<td> \e52c</td>
<td><a href='/fontawesome/fa-mosquito-net' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mosquito'></i> Mosquito</td>
<td>fa-mosquito</td>
<td>fas</td>
<td> \e52b</td>
<td><a href='/fontawesome/fa-mosquito' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-motorcycle'></i> Motorcycle</td>
<td>fa-motorcycle</td>
<td>fas</td>
<td> \f21c</td>
<td><a href='/fontawesome/fa-motorcycle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mound'></i> Mound</td>
<td>fa-mound</td>
<td>fas</td>
<td> \e52d</td>
<td><a href='/fontawesome/fa-mound' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mountain-city'></i> Mountain City</td>
<td>fa-mountain-city</td>
<td>fas</td>
<td> \e52e</td>
<td><a href='/fontawesome/fa-mountain-city' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mountain-sun'></i> Mountain Sun</td>
<td>fa-mountain-sun</td>
<td>fas</td>
<td> \e52f</td>
<td><a href='/fontawesome/fa-mountain-sun' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mountain'></i> Mountain</td>
<td>fa-mountain</td>
<td>fas</td>
<td> \f6fc</td>
<td><a href='/fontawesome/fa-mountain' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mug-hot'></i> Mug Hot</td>
<td>fa-mug-hot</td>
<td>fas</td>
<td> \f7b6</td>
<td><a href='/fontawesome/fa-mug-hot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-mug-saucer'></i> Mug Saucer</td>
<td>fa-mug-saucer</td>
<td>fas</td>
<td> \f0f4</td>
<td><a href='/fontawesome/fa-mug-saucer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-music'></i> Music</td>
<td>fa-music</td>
<td>fas</td>
<td> \f001</td>
<td><a href='/fontawesome/fa-music' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-n'></i> N</td>
<td>fa-n</td>
<td>fas</td>
<td> \4e</td>
<td><a href='/fontawesome/fa-n' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-naira-sign'></i> Naira Sign</td>
<td>fa-naira-sign</td>
<td>fas</td>
<td> \e1f6</td>
<td><a href='/fontawesome/fa-naira-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-network-wired'></i> Network Wired</td>
<td>fa-network-wired</td>
<td>fas</td>
<td> \f6ff</td>
<td><a href='/fontawesome/fa-network-wired' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-neuter'></i> Neuter</td>
<td>fa-neuter</td>
<td>fas</td>
<td> \f22c</td>
<td><a href='/fontawesome/fa-neuter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-newspaper'></i> Newspaper</td>
<td>fa-newspaper</td>
<td>fas</td>
<td> \f1ea</td>
<td><a href='/fontawesome/fa-newspaper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-not-equal'></i> Not Equal</td>
<td>fa-not-equal</td>
<td>fas</td>
<td> \f53e</td>
<td><a href='/fontawesome/fa-not-equal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-note-sticky'></i> Note Sticky</td>
<td>fa-note-sticky</td>
<td>fas</td>
<td> \f249</td>
<td><a href='/fontawesome/fa-note-sticky' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-notes-medical'></i> Notes Medical</td>
<td>fa-notes-medical</td>
<td>fas</td>
<td> \f481</td>
<td><a href='/fontawesome/fa-notes-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-o'></i> O</td>
<td>fa-o</td>
<td>fas</td>
<td> \4f</td>
<td><a href='/fontawesome/fa-o' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-object-group'></i> Object Group</td>
<td>fa-object-group</td>
<td>fas</td>
<td> \f247</td>
<td><a href='/fontawesome/fa-object-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-object-ungroup'></i> Object Ungroup</td>
<td>fa-object-ungroup</td>
<td>fas</td>
<td> \f248</td>
<td><a href='/fontawesome/fa-object-ungroup' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-oil-can'></i> Oil Can</td>
<td>fa-oil-can</td>
<td>fas</td>
<td> \f613</td>
<td><a href='/fontawesome/fa-oil-can' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-oil-well'></i> Oil Well</td>
<td>fa-oil-well</td>
<td>fas</td>
<td> \e532</td>
<td><a href='/fontawesome/fa-oil-well' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-om'></i> Om</td>
<td>fa-om</td>
<td>fas</td>
<td> \f679</td>
<td><a href='/fontawesome/fa-om' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-otter'></i> Otter</td>
<td>fa-otter</td>
<td>fas</td>
<td> \f700</td>
<td><a href='/fontawesome/fa-otter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-outdent'></i> Outdent</td>
<td>fa-outdent</td>
<td>fas</td>
<td> \f03b</td>
<td><a href='/fontawesome/fa-outdent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-p'></i> P</td>
<td>fa-p</td>
<td>fas</td>
<td> \50</td>
<td><a href='/fontawesome/fa-p' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pager'></i> Pager</td>
<td>fa-pager</td>
<td>fas</td>
<td> \f815</td>
<td><a href='/fontawesome/fa-pager' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paint-roller'></i> Paint Roller</td>
<td>fa-paint-roller</td>
<td>fas</td>
<td> \f5aa</td>
<td><a href='/fontawesome/fa-paint-roller' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paintbrush'></i> Paintbrush</td>
<td>fa-paintbrush</td>
<td>fas</td>
<td> \f1fc</td>
<td><a href='/fontawesome/fa-paintbrush' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-palette'></i> Palette</td>
<td>fa-palette</td>
<td>fas</td>
<td> \f53f</td>
<td><a href='/fontawesome/fa-palette' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pallet'></i> Pallet</td>
<td>fa-pallet</td>
<td>fas</td>
<td> \f482</td>
<td><a href='/fontawesome/fa-pallet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-panorama'></i> Panorama</td>
<td>fa-panorama</td>
<td>fas</td>
<td> \e209</td>
<td><a href='/fontawesome/fa-panorama' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paper-plane'></i> Paper Plane</td>
<td>fa-paper-plane</td>
<td>fas</td>
<td> \f1d8</td>
<td><a href='/fontawesome/fa-paper-plane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paperclip'></i> Paperclip</td>
<td>fa-paperclip</td>
<td>fas</td>
<td> \f0c6</td>
<td><a href='/fontawesome/fa-paperclip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-parachute-box'></i> Parachute Box</td>
<td>fa-parachute-box</td>
<td>fas</td>
<td> \f4cd</td>
<td><a href='/fontawesome/fa-parachute-box' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paragraph'></i> Paragraph</td>
<td>fa-paragraph</td>
<td>fas</td>
<td> \f1dd</td>
<td><a href='/fontawesome/fa-paragraph' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-passport'></i> Passport</td>
<td>fa-passport</td>
<td>fas</td>
<td> \f5ab</td>
<td><a href='/fontawesome/fa-passport' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paste'></i> Paste</td>
<td>fa-paste</td>
<td>fas</td>
<td> \f0ea</td>
<td><a href='/fontawesome/fa-paste' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pause'></i> Pause</td>
<td>fa-pause</td>
<td>fas</td>
<td> \f04c</td>
<td><a href='/fontawesome/fa-pause' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-paw'></i> Paw</td>
<td>fa-paw</td>
<td>fas</td>
<td> \f1b0</td>
<td><a href='/fontawesome/fa-paw' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-peace'></i> Peace</td>
<td>fa-peace</td>
<td>fas</td>
<td> \f67c</td>
<td><a href='/fontawesome/fa-peace' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen-clip'></i> Pen Clip</td>
<td>fa-pen-clip</td>
<td>fas</td>
<td> \f305</td>
<td><a href='/fontawesome/fa-pen-clip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen-fancy'></i> Pen Fancy</td>
<td>fa-pen-fancy</td>
<td>fas</td>
<td> \f5ac</td>
<td><a href='/fontawesome/fa-pen-fancy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen-nib'></i> Pen Nib</td>
<td>fa-pen-nib</td>
<td>fas</td>
<td> \f5ad</td>
<td><a href='/fontawesome/fa-pen-nib' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen-ruler'></i> Pen Ruler</td>
<td>fa-pen-ruler</td>
<td>fas</td>
<td> \f5ae</td>
<td><a href='/fontawesome/fa-pen-ruler' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen-to-square'></i> Pen To Square</td>
<td>fa-pen-to-square</td>
<td>fas</td>
<td> \f044</td>
<td><a href='/fontawesome/fa-pen-to-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pen'></i> Pen</td>
<td>fa-pen</td>
<td>fas</td>
<td> \f304</td>
<td><a href='/fontawesome/fa-pen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pencil'></i> Pencil</td>
<td>fa-pencil</td>
<td>fas</td>
<td> \f303</td>
<td><a href='/fontawesome/fa-pencil' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-arrows'></i> People Arrows</td>
<td>fa-people-arrows</td>
<td>fas</td>
<td> \e068</td>
<td><a href='/fontawesome/fa-people-arrows' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-carry-box'></i> People Carry Box</td>
<td>fa-people-carry-box</td>
<td>fas</td>
<td> \f4ce</td>
<td><a href='/fontawesome/fa-people-carry-box' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-group'></i> People Group</td>
<td>fa-people-group</td>
<td>fas</td>
<td> \e533</td>
<td><a href='/fontawesome/fa-people-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-line'></i> People Line</td>
<td>fa-people-line</td>
<td>fas</td>
<td> \e534</td>
<td><a href='/fontawesome/fa-people-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-pulling'></i> People Pulling</td>
<td>fa-people-pulling</td>
<td>fas</td>
<td> \e535</td>
<td><a href='/fontawesome/fa-people-pulling' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-robbery'></i> People Robbery</td>
<td>fa-people-robbery</td>
<td>fas</td>
<td> \e536</td>
<td><a href='/fontawesome/fa-people-robbery' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-people-roof'></i> People Roof</td>
<td>fa-people-roof</td>
<td>fas</td>
<td> \e537</td>
<td><a href='/fontawesome/fa-people-roof' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pepper-hot'></i> Pepper Hot</td>
<td>fa-pepper-hot</td>
<td>fas</td>
<td> \f816</td>
<td><a href='/fontawesome/fa-pepper-hot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-percent'></i> Percent</td>
<td>fa-percent</td>
<td>fas</td>
<td> \25</td>
<td><a href='/fontawesome/fa-percent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-arrow-down-to-line'></i> Person Arrow Down To Line</td>
<td>fa-person-arrow-down-to-line</td>
<td>fas</td>
<td> \e538</td>
<td><a href='/fontawesome/fa-person-arrow-down-to-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-arrow-up-from-line'></i> Person Arrow Up From Line</td>
<td>fa-person-arrow-up-from-line</td>
<td>fas</td>
<td> \e539</td>
<td><a href='/fontawesome/fa-person-arrow-up-from-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-biking'></i> Person Biking</td>
<td>fa-person-biking</td>
<td>fas</td>
<td> \f84a</td>
<td><a href='/fontawesome/fa-person-biking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-booth'></i> Person Booth</td>
<td>fa-person-booth</td>
<td>fas</td>
<td> \f756</td>
<td><a href='/fontawesome/fa-person-booth' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-breastfeeding'></i> Person Breastfeeding</td>
<td>fa-person-breastfeeding</td>
<td>fas</td>
<td> \e53a</td>
<td><a href='/fontawesome/fa-person-breastfeeding' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-burst'></i> Person Burst</td>
<td>fa-person-burst</td>
<td>fas</td>
<td> \e53b</td>
<td><a href='/fontawesome/fa-person-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-cane'></i> Person Cane</td>
<td>fa-person-cane</td>
<td>fas</td>
<td> \e53c</td>
<td><a href='/fontawesome/fa-person-cane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-chalkboard'></i> Person Chalkboard</td>
<td>fa-person-chalkboard</td>
<td>fas</td>
<td> \e53d</td>
<td><a href='/fontawesome/fa-person-chalkboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-check'></i> Person Circle Check</td>
<td>fa-person-circle-check</td>
<td>fas</td>
<td> \e53e</td>
<td><a href='/fontawesome/fa-person-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-exclamation'></i> Person Circle Exclamation</td>
<td>fa-person-circle-exclamation</td>
<td>fas</td>
<td> \e53f</td>
<td><a href='/fontawesome/fa-person-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-minus'></i> Person Circle Minus</td>
<td>fa-person-circle-minus</td>
<td>fas</td>
<td> \e540</td>
<td><a href='/fontawesome/fa-person-circle-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-plus'></i> Person Circle Plus</td>
<td>fa-person-circle-plus</td>
<td>fas</td>
<td> \e541</td>
<td><a href='/fontawesome/fa-person-circle-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-question'></i> Person Circle Question</td>
<td>fa-person-circle-question</td>
<td>fas</td>
<td> \e542</td>
<td><a href='/fontawesome/fa-person-circle-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-circle-xmark'></i> Person Circle Xmark</td>
<td>fa-person-circle-xmark</td>
<td>fas</td>
<td> \e543</td>
<td><a href='/fontawesome/fa-person-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-digging'></i> Person Digging</td>
<td>fa-person-digging</td>
<td>fas</td>
<td> \f85e</td>
<td><a href='/fontawesome/fa-person-digging' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-dots-from-line'></i> Person Dots From Line</td>
<td>fa-person-dots-from-line</td>
<td>fas</td>
<td> \f470</td>
<td><a href='/fontawesome/fa-person-dots-from-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-dress-burst'></i> Person Dress Burst</td>
<td>fa-person-dress-burst</td>
<td>fas</td>
<td> \e544</td>
<td><a href='/fontawesome/fa-person-dress-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-dress'></i> Person Dress</td>
<td>fa-person-dress</td>
<td>fas</td>
<td> \f182</td>
<td><a href='/fontawesome/fa-person-dress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-drowning'></i> Person Drowning</td>
<td>fa-person-drowning</td>
<td>fas</td>
<td> \e545</td>
<td><a href='/fontawesome/fa-person-drowning' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-falling-burst'></i> Person Falling Burst</td>
<td>fa-person-falling-burst</td>
<td>fas</td>
<td> \e547</td>
<td><a href='/fontawesome/fa-person-falling-burst' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-falling'></i> Person Falling</td>
<td>fa-person-falling</td>
<td>fas</td>
<td> \e546</td>
<td><a href='/fontawesome/fa-person-falling' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-half-dress'></i> Person Half Dress</td>
<td>fa-person-half-dress</td>
<td>fas</td>
<td> \e548</td>
<td><a href='/fontawesome/fa-person-half-dress' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-harassing'></i> Person Harassing</td>
<td>fa-person-harassing</td>
<td>fas</td>
<td> \e549</td>
<td><a href='/fontawesome/fa-person-harassing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-hiking'></i> Person Hiking</td>
<td>fa-person-hiking</td>
<td>fas</td>
<td> \f6ec</td>
<td><a href='/fontawesome/fa-person-hiking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-military-pointing'></i> Person Military Pointing</td>
<td>fa-person-military-pointing</td>
<td>fas</td>
<td> \e54a</td>
<td><a href='/fontawesome/fa-person-military-pointing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-military-rifle'></i> Person Military Rifle</td>
<td>fa-person-military-rifle</td>
<td>fas</td>
<td> \e54b</td>
<td><a href='/fontawesome/fa-person-military-rifle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-military-to-person'></i> Person Military To Person</td>
<td>fa-person-military-to-person</td>
<td>fas</td>
<td> \e54c</td>
<td><a href='/fontawesome/fa-person-military-to-person' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-praying'></i> Person Praying</td>
<td>fa-person-praying</td>
<td>fas</td>
<td> \f683</td>
<td><a href='/fontawesome/fa-person-praying' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-pregnant'></i> Person Pregnant</td>
<td>fa-person-pregnant</td>
<td>fas</td>
<td> \e31e</td>
<td><a href='/fontawesome/fa-person-pregnant' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-rays'></i> Person Rays</td>
<td>fa-person-rays</td>
<td>fas</td>
<td> \e54d</td>
<td><a href='/fontawesome/fa-person-rays' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-rifle'></i> Person Rifle</td>
<td>fa-person-rifle</td>
<td>fas</td>
<td> \e54e</td>
<td><a href='/fontawesome/fa-person-rifle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-running'></i> Person Running</td>
<td>fa-person-running</td>
<td>fas</td>
<td> \f70c</td>
<td><a href='/fontawesome/fa-person-running' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-shelter'></i> Person Shelter</td>
<td>fa-person-shelter</td>
<td>fas</td>
<td> \e54f</td>
<td><a href='/fontawesome/fa-person-shelter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-skating'></i> Person Skating</td>
<td>fa-person-skating</td>
<td>fas</td>
<td> \f7c5</td>
<td><a href='/fontawesome/fa-person-skating' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-skiing-nordic'></i> Person Skiing Nordic</td>
<td>fa-person-skiing-nordic</td>
<td>fas</td>
<td> \f7ca</td>
<td><a href='/fontawesome/fa-person-skiing-nordic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-skiing'></i> Person Skiing</td>
<td>fa-person-skiing</td>
<td>fas</td>
<td> \f7c9</td>
<td><a href='/fontawesome/fa-person-skiing' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-snowboarding'></i> Person Snowboarding</td>
<td>fa-person-snowboarding</td>
<td>fas</td>
<td> \f7ce</td>
<td><a href='/fontawesome/fa-person-snowboarding' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-swimming'></i> Person Swimming</td>
<td>fa-person-swimming</td>
<td>fas</td>
<td> \f5c4</td>
<td><a href='/fontawesome/fa-person-swimming' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-through-window'></i> Person Through Window</td>
<td>fa-person-through-window</td>
<td>fas</td>
<td> \e5a9</td>
<td><a href='/fontawesome/fa-person-through-window' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking-arrow-loop-left'></i> Person Walking Arrow Loop Left</td>
<td>fa-person-walking-arrow-loop-left</td>
<td>fas</td>
<td> \e551</td>
<td><a href='/fontawesome/fa-person-walking-arrow-loop-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking-arrow-right'></i> Person Walking Arrow Right</td>
<td>fa-person-walking-arrow-right</td>
<td>fas</td>
<td> \e552</td>
<td><a href='/fontawesome/fa-person-walking-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking-dashed-line-arrow-right'></i> Person Walking Dashed Line Arrow Right</td>
<td>fa-person-walking-dashed-line-arrow-right</td>
<td>fas</td>
<td> \e553</td>
<td><a href='/fontawesome/fa-person-walking-dashed-line-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking-luggage'></i> Person Walking Luggage</td>
<td>fa-person-walking-luggage</td>
<td>fas</td>
<td> \e554</td>
<td><a href='/fontawesome/fa-person-walking-luggage' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking-with-cane'></i> Person Walking With Cane</td>
<td>fa-person-walking-with-cane</td>
<td>fas</td>
<td> \f29d</td>
<td><a href='/fontawesome/fa-person-walking-with-cane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person-walking'></i> Person Walking</td>
<td>fa-person-walking</td>
<td>fas</td>
<td> \f554</td>
<td><a href='/fontawesome/fa-person-walking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-person'></i> Person</td>
<td>fa-person</td>
<td>fas</td>
<td> \f183</td>
<td><a href='/fontawesome/fa-person' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-peseta-sign'></i> Peseta Sign</td>
<td>fa-peseta-sign</td>
<td>fas</td>
<td> \e221</td>
<td><a href='/fontawesome/fa-peseta-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-peso-sign'></i> Peso Sign</td>
<td>fa-peso-sign</td>
<td>fas</td>
<td> \e222</td>
<td><a href='/fontawesome/fa-peso-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-phone-flip'></i> Phone Flip</td>
<td>fa-phone-flip</td>
<td>fas</td>
<td> \f879</td>
<td><a href='/fontawesome/fa-phone-flip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-phone-slash'></i> Phone Slash</td>
<td>fa-phone-slash</td>
<td>fas</td>
<td> \f3dd</td>
<td><a href='/fontawesome/fa-phone-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-phone-volume'></i> Phone Volume</td>
<td>fa-phone-volume</td>
<td>fas</td>
<td> \f2a0</td>
<td><a href='/fontawesome/fa-phone-volume' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-phone'></i> Phone</td>
<td>fa-phone</td>
<td>fas</td>
<td> \f095</td>
<td><a href='/fontawesome/fa-phone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-photo-film'></i> Photo Film</td>
<td>fa-photo-film</td>
<td>fas</td>
<td> \f87c</td>
<td><a href='/fontawesome/fa-photo-film' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-piggy-bank'></i> Piggy Bank</td>
<td>fa-piggy-bank</td>
<td>fas</td>
<td> \f4d3</td>
<td><a href='/fontawesome/fa-piggy-bank' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pills'></i> Pills</td>
<td>fa-pills</td>
<td>fas</td>
<td> \f484</td>
<td><a href='/fontawesome/fa-pills' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pizza-slice'></i> Pizza Slice</td>
<td>fa-pizza-slice</td>
<td>fas</td>
<td> \f818</td>
<td><a href='/fontawesome/fa-pizza-slice' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-place-of-worship'></i> Place Of Worship</td>
<td>fa-place-of-worship</td>
<td>fas</td>
<td> \f67f</td>
<td><a href='/fontawesome/fa-place-of-worship' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-arrival'></i> Plane Arrival</td>
<td>fa-plane-arrival</td>
<td>fas</td>
<td> \f5af</td>
<td><a href='/fontawesome/fa-plane-arrival' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-circle-check'></i> Plane Circle Check</td>
<td>fa-plane-circle-check</td>
<td>fas</td>
<td> \e555</td>
<td><a href='/fontawesome/fa-plane-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-circle-exclamation'></i> Plane Circle Exclamation</td>
<td>fa-plane-circle-exclamation</td>
<td>fas</td>
<td> \e556</td>
<td><a href='/fontawesome/fa-plane-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-circle-xmark'></i> Plane Circle Xmark</td>
<td>fa-plane-circle-xmark</td>
<td>fas</td>
<td> \e557</td>
<td><a href='/fontawesome/fa-plane-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-departure'></i> Plane Departure</td>
<td>fa-plane-departure</td>
<td>fas</td>
<td> \f5b0</td>
<td><a href='/fontawesome/fa-plane-departure' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-lock'></i> Plane Lock</td>
<td>fa-plane-lock</td>
<td>fas</td>
<td> \e558</td>
<td><a href='/fontawesome/fa-plane-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-slash'></i> Plane Slash</td>
<td>fa-plane-slash</td>
<td>fas</td>
<td> \e069</td>
<td><a href='/fontawesome/fa-plane-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane-up'></i> Plane Up</td>
<td>fa-plane-up</td>
<td>fas</td>
<td> \e22d</td>
<td><a href='/fontawesome/fa-plane-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plane'></i> Plane</td>
<td>fa-plane</td>
<td>fas</td>
<td> \f072</td>
<td><a href='/fontawesome/fa-plane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plant-wilt'></i> Plant Wilt</td>
<td>fa-plant-wilt</td>
<td>fas</td>
<td> \e5aa</td>
<td><a href='/fontawesome/fa-plant-wilt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plate-wheat'></i> Plate Wheat</td>
<td>fa-plate-wheat</td>
<td>fas</td>
<td> \e55a</td>
<td><a href='/fontawesome/fa-plate-wheat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-play'></i> Play</td>
<td>fa-play</td>
<td>fas</td>
<td> \f04b</td>
<td><a href='/fontawesome/fa-play' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-bolt'></i> Plug Circle Bolt</td>
<td>fa-plug-circle-bolt</td>
<td>fas</td>
<td> \e55b</td>
<td><a href='/fontawesome/fa-plug-circle-bolt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-check'></i> Plug Circle Check</td>
<td>fa-plug-circle-check</td>
<td>fas</td>
<td> \e55c</td>
<td><a href='/fontawesome/fa-plug-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-exclamation'></i> Plug Circle Exclamation</td>
<td>fa-plug-circle-exclamation</td>
<td>fas</td>
<td> \e55d</td>
<td><a href='/fontawesome/fa-plug-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-minus'></i> Plug Circle Minus</td>
<td>fa-plug-circle-minus</td>
<td>fas</td>
<td> \e55e</td>
<td><a href='/fontawesome/fa-plug-circle-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-plus'></i> Plug Circle Plus</td>
<td>fa-plug-circle-plus</td>
<td>fas</td>
<td> \e55f</td>
<td><a href='/fontawesome/fa-plug-circle-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug-circle-xmark'></i> Plug Circle Xmark</td>
<td>fa-plug-circle-xmark</td>
<td>fas</td>
<td> \e560</td>
<td><a href='/fontawesome/fa-plug-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plug'></i> Plug</td>
<td>fa-plug</td>
<td>fas</td>
<td> \f1e6</td>
<td><a href='/fontawesome/fa-plug' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plus-minus'></i> Plus Minus</td>
<td>fa-plus-minus</td>
<td>fas</td>
<td> \e43c</td>
<td><a href='/fontawesome/fa-plus-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-plus'></i> Plus</td>
<td>fa-plus</td>
<td>fas</td>
<td> \2b</td>
<td><a href='/fontawesome/fa-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-podcast'></i> Podcast</td>
<td>fa-podcast</td>
<td>fas</td>
<td> \f2ce</td>
<td><a href='/fontawesome/fa-podcast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-poo-storm'></i> Poo Storm</td>
<td>fa-poo-storm</td>
<td>fas</td>
<td> \f75a</td>
<td><a href='/fontawesome/fa-poo-storm' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-poo'></i> Poo</td>
<td>fa-poo</td>
<td>fas</td>
<td> \f2fe</td>
<td><a href='/fontawesome/fa-poo' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-poop'></i> Poop</td>
<td>fa-poop</td>
<td>fas</td>
<td> \f619</td>
<td><a href='/fontawesome/fa-poop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-power-off'></i> Power Off</td>
<td>fa-power-off</td>
<td>fas</td>
<td> \f011</td>
<td><a href='/fontawesome/fa-power-off' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-prescription-bottle-medical'></i> Prescription Bottle Medical</td>
<td>fa-prescription-bottle-medical</td>
<td>fas</td>
<td> \f486</td>
<td><a href='/fontawesome/fa-prescription-bottle-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-prescription-bottle'></i> Prescription Bottle</td>
<td>fa-prescription-bottle</td>
<td>fas</td>
<td> \f485</td>
<td><a href='/fontawesome/fa-prescription-bottle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-prescription'></i> Prescription</td>
<td>fa-prescription</td>
<td>fas</td>
<td> \f5b1</td>
<td><a href='/fontawesome/fa-prescription' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-print'></i> Print</td>
<td>fa-print</td>
<td>fas</td>
<td> \f02f</td>
<td><a href='/fontawesome/fa-print' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pump-medical'></i> Pump Medical</td>
<td>fa-pump-medical</td>
<td>fas</td>
<td> \e06a</td>
<td><a href='/fontawesome/fa-pump-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-pump-soap'></i> Pump Soap</td>
<td>fa-pump-soap</td>
<td>fas</td>
<td> \e06b</td>
<td><a href='/fontawesome/fa-pump-soap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-puzzle-piece'></i> Puzzle Piece</td>
<td>fa-puzzle-piece</td>
<td>fas</td>
<td> \f12e</td>
<td><a href='/fontawesome/fa-puzzle-piece' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-q'></i> Q</td>
<td>fa-q</td>
<td>fas</td>
<td> \51</td>
<td><a href='/fontawesome/fa-q' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-qrcode'></i> Qrcode</td>
<td>fa-qrcode</td>
<td>fas</td>
<td> \f029</td>
<td><a href='/fontawesome/fa-qrcode' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-question'></i> Question</td>
<td>fa-question</td>
<td>fas</td>
<td> \3f</td>
<td><a href='/fontawesome/fa-question' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-quote-left'></i> Quote Left</td>
<td>fa-quote-left</td>
<td>fas</td>
<td> \f10d</td>
<td><a href='/fontawesome/fa-quote-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-quote-right'></i> Quote Right</td>
<td>fa-quote-right</td>
<td>fas</td>
<td> \f10e</td>
<td><a href='/fontawesome/fa-quote-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-r'></i> R</td>
<td>fa-r</td>
<td>fas</td>
<td> \52</td>
<td><a href='/fontawesome/fa-r' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-radiation'></i> Radiation</td>
<td>fa-radiation</td>
<td>fas</td>
<td> \f7b9</td>
<td><a href='/fontawesome/fa-radiation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-radio'></i> Radio</td>
<td>fa-radio</td>
<td>fas</td>
<td> \f8d7</td>
<td><a href='/fontawesome/fa-radio' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rainbow'></i> Rainbow</td>
<td>fa-rainbow</td>
<td>fas</td>
<td> \f75b</td>
<td><a href='/fontawesome/fa-rainbow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ranking-star'></i> Ranking Star</td>
<td>fa-ranking-star</td>
<td>fas</td>
<td> \e561</td>
<td><a href='/fontawesome/fa-ranking-star' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-receipt'></i> Receipt</td>
<td>fa-receipt</td>
<td>fas</td>
<td> \f543</td>
<td><a href='/fontawesome/fa-receipt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-record-vinyl'></i> Record Vinyl</td>
<td>fa-record-vinyl</td>
<td>fas</td>
<td> \f8d9</td>
<td><a href='/fontawesome/fa-record-vinyl' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rectangle-ad'></i> Rectangle Ad</td>
<td>fa-rectangle-ad</td>
<td>fas</td>
<td> \f641</td>
<td><a href='/fontawesome/fa-rectangle-ad' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rectangle-list'></i> Rectangle List</td>
<td>fa-rectangle-list</td>
<td>fas</td>
<td> \f022</td>
<td><a href='/fontawesome/fa-rectangle-list' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rectangle-xmark'></i> Rectangle Xmark</td>
<td>fa-rectangle-xmark</td>
<td>fas</td>
<td> \f410</td>
<td><a href='/fontawesome/fa-rectangle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-recycle'></i> Recycle</td>
<td>fa-recycle</td>
<td>fas</td>
<td> \f1b8</td>
<td><a href='/fontawesome/fa-recycle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-registered'></i> Registered</td>
<td>fa-registered</td>
<td>fas</td>
<td> \f25d</td>
<td><a href='/fontawesome/fa-registered' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-repeat'></i> Repeat</td>
<td>fa-repeat</td>
<td>fas</td>
<td> \f363</td>
<td><a href='/fontawesome/fa-repeat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-reply-all'></i> Reply All</td>
<td>fa-reply-all</td>
<td>fas</td>
<td> \f122</td>
<td><a href='/fontawesome/fa-reply-all' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-reply'></i> Reply</td>
<td>fa-reply</td>
<td>fas</td>
<td> \f3e5</td>
<td><a href='/fontawesome/fa-reply' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-republican'></i> Republican</td>
<td>fa-republican</td>
<td>fas</td>
<td> \f75e</td>
<td><a href='/fontawesome/fa-republican' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-restroom'></i> Restroom</td>
<td>fa-restroom</td>
<td>fas</td>
<td> \f7bd</td>
<td><a href='/fontawesome/fa-restroom' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-retweet'></i> Retweet</td>
<td>fa-retweet</td>
<td>fas</td>
<td> \f079</td>
<td><a href='/fontawesome/fa-retweet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ribbon'></i> Ribbon</td>
<td>fa-ribbon</td>
<td>fas</td>
<td> \f4d6</td>
<td><a href='/fontawesome/fa-ribbon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-right-from-bracket'></i> Right From Bracket</td>
<td>fa-right-from-bracket</td>
<td>fas</td>
<td> \f2f5</td>
<td><a href='/fontawesome/fa-right-from-bracket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-right-left'></i> Right Left</td>
<td>fa-right-left</td>
<td>fas</td>
<td> \f362</td>
<td><a href='/fontawesome/fa-right-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-right-long'></i> Right Long</td>
<td>fa-right-long</td>
<td>fas</td>
<td> \f30b</td>
<td><a href='/fontawesome/fa-right-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-right-to-bracket'></i> Right To Bracket</td>
<td>fa-right-to-bracket</td>
<td>fas</td>
<td> \f2f6</td>
<td><a href='/fontawesome/fa-right-to-bracket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ring'></i> Ring</td>
<td>fa-ring</td>
<td>fas</td>
<td> \f70b</td>
<td><a href='/fontawesome/fa-ring' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-barrier'></i> Road Barrier</td>
<td>fa-road-barrier</td>
<td>fas</td>
<td> \e562</td>
<td><a href='/fontawesome/fa-road-barrier' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-bridge'></i> Road Bridge</td>
<td>fa-road-bridge</td>
<td>fas</td>
<td> \e563</td>
<td><a href='/fontawesome/fa-road-bridge' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-circle-check'></i> Road Circle Check</td>
<td>fa-road-circle-check</td>
<td>fas</td>
<td> \e564</td>
<td><a href='/fontawesome/fa-road-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-circle-exclamation'></i> Road Circle Exclamation</td>
<td>fa-road-circle-exclamation</td>
<td>fas</td>
<td> \e565</td>
<td><a href='/fontawesome/fa-road-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-circle-xmark'></i> Road Circle Xmark</td>
<td>fa-road-circle-xmark</td>
<td>fas</td>
<td> \e566</td>
<td><a href='/fontawesome/fa-road-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-lock'></i> Road Lock</td>
<td>fa-road-lock</td>
<td>fas</td>
<td> \e567</td>
<td><a href='/fontawesome/fa-road-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road-spikes'></i> Road Spikes</td>
<td>fa-road-spikes</td>
<td>fas</td>
<td> \e568</td>
<td><a href='/fontawesome/fa-road-spikes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-road'></i> Road</td>
<td>fa-road</td>
<td>fas</td>
<td> \f018</td>
<td><a href='/fontawesome/fa-road' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-robot'></i> Robot</td>
<td>fa-robot</td>
<td>fas</td>
<td> \f544</td>
<td><a href='/fontawesome/fa-robot' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rocket'></i> Rocket</td>
<td>fa-rocket</td>
<td>fas</td>
<td> \f135</td>
<td><a href='/fontawesome/fa-rocket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rotate-left'></i> Rotate Left</td>
<td>fa-rotate-left</td>
<td>fas</td>
<td> \f2ea</td>
<td><a href='/fontawesome/fa-rotate-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rotate-right'></i> Rotate Right</td>
<td>fa-rotate-right</td>
<td>fas</td>
<td> \f2f9</td>
<td><a href='/fontawesome/fa-rotate-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rotate'></i> Rotate</td>
<td>fa-rotate</td>
<td>fas</td>
<td> \f2f1</td>
<td><a href='/fontawesome/fa-rotate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-route'></i> Route</td>
<td>fa-route</td>
<td>fas</td>
<td> \f4d7</td>
<td><a href='/fontawesome/fa-route' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rss'></i> Rss</td>
<td>fa-rss</td>
<td>fas</td>
<td> \f09e</td>
<td><a href='/fontawesome/fa-rss' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ruble-sign'></i> Ruble Sign</td>
<td>fa-ruble-sign</td>
<td>fas</td>
<td> \f158</td>
<td><a href='/fontawesome/fa-ruble-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rug'></i> Rug</td>
<td>fa-rug</td>
<td>fas</td>
<td> \e569</td>
<td><a href='/fontawesome/fa-rug' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ruler-combined'></i> Ruler Combined</td>
<td>fa-ruler-combined</td>
<td>fas</td>
<td> \f546</td>
<td><a href='/fontawesome/fa-ruler-combined' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ruler-horizontal'></i> Ruler Horizontal</td>
<td>fa-ruler-horizontal</td>
<td>fas</td>
<td> \f547</td>
<td><a href='/fontawesome/fa-ruler-horizontal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ruler-vertical'></i> Ruler Vertical</td>
<td>fa-ruler-vertical</td>
<td>fas</td>
<td> \f548</td>
<td><a href='/fontawesome/fa-ruler-vertical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ruler'></i> Ruler</td>
<td>fa-ruler</td>
<td>fas</td>
<td> \f545</td>
<td><a href='/fontawesome/fa-ruler' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rupee-sign'></i> Rupee Sign</td>
<td>fa-rupee-sign</td>
<td>fas</td>
<td> \f156</td>
<td><a href='/fontawesome/fa-rupee-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-rupiah-sign'></i> Rupiah Sign</td>
<td>fa-rupiah-sign</td>
<td>fas</td>
<td> \e23d</td>
<td><a href='/fontawesome/fa-rupiah-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-s'></i> S</td>
<td>fa-s</td>
<td>fas</td>
<td> \53</td>
<td><a href='/fontawesome/fa-s' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sack-dollar'></i> Sack Dollar</td>
<td>fa-sack-dollar</td>
<td>fas</td>
<td> \f81d</td>
<td><a href='/fontawesome/fa-sack-dollar' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sack-xmark'></i> Sack Xmark</td>
<td>fa-sack-xmark</td>
<td>fas</td>
<td> \e56a</td>
<td><a href='/fontawesome/fa-sack-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sailboat'></i> Sailboat</td>
<td>fa-sailboat</td>
<td>fas</td>
<td> \e445</td>
<td><a href='/fontawesome/fa-sailboat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-satellite-dish'></i> Satellite Dish</td>
<td>fa-satellite-dish</td>
<td>fas</td>
<td> \f7c0</td>
<td><a href='/fontawesome/fa-satellite-dish' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-satellite'></i> Satellite</td>
<td>fa-satellite</td>
<td>fas</td>
<td> \f7bf</td>
<td><a href='/fontawesome/fa-satellite' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scale-balanced'></i> Scale Balanced</td>
<td>fa-scale-balanced</td>
<td>fas</td>
<td> \f24e</td>
<td><a href='/fontawesome/fa-scale-balanced' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scale-unbalanced-flip'></i> Scale Unbalanced Flip</td>
<td>fa-scale-unbalanced-flip</td>
<td>fas</td>
<td> \f516</td>
<td><a href='/fontawesome/fa-scale-unbalanced-flip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scale-unbalanced'></i> Scale Unbalanced</td>
<td>fa-scale-unbalanced</td>
<td>fas</td>
<td> \f515</td>
<td><a href='/fontawesome/fa-scale-unbalanced' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school-circle-check'></i> School Circle Check</td>
<td>fa-school-circle-check</td>
<td>fas</td>
<td> \e56b</td>
<td><a href='/fontawesome/fa-school-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school-circle-exclamation'></i> School Circle Exclamation</td>
<td>fa-school-circle-exclamation</td>
<td>fas</td>
<td> \e56c</td>
<td><a href='/fontawesome/fa-school-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school-circle-xmark'></i> School Circle Xmark</td>
<td>fa-school-circle-xmark</td>
<td>fas</td>
<td> \e56d</td>
<td><a href='/fontawesome/fa-school-circle-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school-flag'></i> School Flag</td>
<td>fa-school-flag</td>
<td>fas</td>
<td> \e56e</td>
<td><a href='/fontawesome/fa-school-flag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school-lock'></i> School Lock</td>
<td>fa-school-lock</td>
<td>fas</td>
<td> \e56f</td>
<td><a href='/fontawesome/fa-school-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-school'></i> School</td>
<td>fa-school</td>
<td>fas</td>
<td> \f549</td>
<td><a href='/fontawesome/fa-school' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scissors'></i> Scissors</td>
<td>fa-scissors</td>
<td>fas</td>
<td> \f0c4</td>
<td><a href='/fontawesome/fa-scissors' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-screwdriver-wrench'></i> Screwdriver Wrench</td>
<td>fa-screwdriver-wrench</td>
<td>fas</td>
<td> \f7d9</td>
<td><a href='/fontawesome/fa-screwdriver-wrench' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-screwdriver'></i> Screwdriver</td>
<td>fa-screwdriver</td>
<td>fas</td>
<td> \f54a</td>
<td><a href='/fontawesome/fa-screwdriver' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scroll-torah'></i> Scroll Torah</td>
<td>fa-scroll-torah</td>
<td>fas</td>
<td> \f6a0</td>
<td><a href='/fontawesome/fa-scroll-torah' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-scroll'></i> Scroll</td>
<td>fa-scroll</td>
<td>fas</td>
<td> \f70e</td>
<td><a href='/fontawesome/fa-scroll' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sd-card'></i> Sd Card</td>
<td>fa-sd-card</td>
<td>fas</td>
<td> \f7c2</td>
<td><a href='/fontawesome/fa-sd-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-section'></i> Section</td>
<td>fa-section</td>
<td>fas</td>
<td> \e447</td>
<td><a href='/fontawesome/fa-section' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-seedling'></i> Seedling</td>
<td>fa-seedling</td>
<td>fas</td>
<td> \f4d8</td>
<td><a href='/fontawesome/fa-seedling' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-server'></i> Server</td>
<td>fa-server</td>
<td>fas</td>
<td> \f233</td>
<td><a href='/fontawesome/fa-server' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shapes'></i> Shapes</td>
<td>fa-shapes</td>
<td>fas</td>
<td> \f61f</td>
<td><a href='/fontawesome/fa-shapes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-share-from-square'></i> Share From Square</td>
<td>fa-share-from-square</td>
<td>fas</td>
<td> \f14d</td>
<td><a href='/fontawesome/fa-share-from-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-share-nodes'></i> Share Nodes</td>
<td>fa-share-nodes</td>
<td>fas</td>
<td> \f1e0</td>
<td><a href='/fontawesome/fa-share-nodes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-share'></i> Share</td>
<td>fa-share</td>
<td>fas</td>
<td> \f064</td>
<td><a href='/fontawesome/fa-share' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sheet-plastic'></i> Sheet Plastic</td>
<td>fa-sheet-plastic</td>
<td>fas</td>
<td> \e571</td>
<td><a href='/fontawesome/fa-sheet-plastic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shekel-sign'></i> Shekel Sign</td>
<td>fa-shekel-sign</td>
<td>fas</td>
<td> \f20b</td>
<td><a href='/fontawesome/fa-shekel-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield-cat'></i> Shield Cat</td>
<td>fa-shield-cat</td>
<td>fas</td>
<td> \e572</td>
<td><a href='/fontawesome/fa-shield-cat' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield-dog'></i> Shield Dog</td>
<td>fa-shield-dog</td>
<td>fas</td>
<td> \e573</td>
<td><a href='/fontawesome/fa-shield-dog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield-halved'></i> Shield Halved</td>
<td>fa-shield-halved</td>
<td>fas</td>
<td> \f3ed</td>
<td><a href='/fontawesome/fa-shield-halved' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield-heart'></i> Shield Heart</td>
<td>fa-shield-heart</td>
<td>fas</td>
<td> \e574</td>
<td><a href='/fontawesome/fa-shield-heart' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield-virus'></i> Shield Virus</td>
<td>fa-shield-virus</td>
<td>fas</td>
<td> \e06c</td>
<td><a href='/fontawesome/fa-shield-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shield'></i> Shield</td>
<td>fa-shield</td>
<td>fas</td>
<td> \f132</td>
<td><a href='/fontawesome/fa-shield' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ship'></i> Ship</td>
<td>fa-ship</td>
<td>fas</td>
<td> \f21a</td>
<td><a href='/fontawesome/fa-ship' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shirt'></i> Shirt</td>
<td>fa-shirt</td>
<td>fas</td>
<td> \f553</td>
<td><a href='/fontawesome/fa-shirt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shoe-prints'></i> Shoe Prints</td>
<td>fa-shoe-prints</td>
<td>fas</td>
<td> \f54b</td>
<td><a href='/fontawesome/fa-shoe-prints' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shop-lock'></i> Shop Lock</td>
<td>fa-shop-lock</td>
<td>fas</td>
<td> \e4a5</td>
<td><a href='/fontawesome/fa-shop-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shop-slash'></i> Shop Slash</td>
<td>fa-shop-slash</td>
<td>fas</td>
<td> \e070</td>
<td><a href='/fontawesome/fa-shop-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shop'></i> Shop</td>
<td>fa-shop</td>
<td>fas</td>
<td> \f54f</td>
<td><a href='/fontawesome/fa-shop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shower'></i> Shower</td>
<td>fa-shower</td>
<td>fas</td>
<td> \f2cc</td>
<td><a href='/fontawesome/fa-shower' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shrimp'></i> Shrimp</td>
<td>fa-shrimp</td>
<td>fas</td>
<td> \e448</td>
<td><a href='/fontawesome/fa-shrimp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shuffle'></i> Shuffle</td>
<td>fa-shuffle</td>
<td>fas</td>
<td> \f074</td>
<td><a href='/fontawesome/fa-shuffle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-shuttle-space'></i> Shuttle Space</td>
<td>fa-shuttle-space</td>
<td>fas</td>
<td> \f197</td>
<td><a href='/fontawesome/fa-shuttle-space' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sign-hanging'></i> Sign Hanging</td>
<td>fa-sign-hanging</td>
<td>fas</td>
<td> \f4d9</td>
<td><a href='/fontawesome/fa-sign-hanging' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-signal'></i> Signal</td>
<td>fa-signal</td>
<td>fas</td>
<td> \f012</td>
<td><a href='/fontawesome/fa-signal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-signature'></i> Signature</td>
<td>fa-signature</td>
<td>fas</td>
<td> \f5b7</td>
<td><a href='/fontawesome/fa-signature' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-signs-post'></i> Signs Post</td>
<td>fa-signs-post</td>
<td>fas</td>
<td> \f277</td>
<td><a href='/fontawesome/fa-signs-post' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sim-card'></i> Sim Card</td>
<td>fa-sim-card</td>
<td>fas</td>
<td> \f7c4</td>
<td><a href='/fontawesome/fa-sim-card' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sink'></i> Sink</td>
<td>fa-sink</td>
<td>fas</td>
<td> \e06d</td>
<td><a href='/fontawesome/fa-sink' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sitemap'></i> Sitemap</td>
<td>fa-sitemap</td>
<td>fas</td>
<td> \f0e8</td>
<td><a href='/fontawesome/fa-sitemap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-skull-crossbones'></i> Skull Crossbones</td>
<td>fa-skull-crossbones</td>
<td>fas</td>
<td> \f714</td>
<td><a href='/fontawesome/fa-skull-crossbones' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-skull'></i> Skull</td>
<td>fa-skull</td>
<td>fas</td>
<td> \f54c</td>
<td><a href='/fontawesome/fa-skull' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-slash'></i> Slash</td>
<td>fa-slash</td>
<td>fas</td>
<td> \f715</td>
<td><a href='/fontawesome/fa-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sleigh'></i> Sleigh</td>
<td>fa-sleigh</td>
<td>fas</td>
<td> \f7cc</td>
<td><a href='/fontawesome/fa-sleigh' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sliders'></i> Sliders</td>
<td>fa-sliders</td>
<td>fas</td>
<td> \f1de</td>
<td><a href='/fontawesome/fa-sliders' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-smog'></i> Smog</td>
<td>fa-smog</td>
<td>fas</td>
<td> \f75f</td>
<td><a href='/fontawesome/fa-smog' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-smoking'></i> Smoking</td>
<td>fa-smoking</td>
<td>fas</td>
<td> \f48d</td>
<td><a href='/fontawesome/fa-smoking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-snowflake'></i> Snowflake</td>
<td>fa-snowflake</td>
<td>fas</td>
<td> \f2dc</td>
<td><a href='/fontawesome/fa-snowflake' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-snowman'></i> Snowman</td>
<td>fa-snowman</td>
<td>fas</td>
<td> \f7d0</td>
<td><a href='/fontawesome/fa-snowman' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-snowplow'></i> Snowplow</td>
<td>fa-snowplow</td>
<td>fas</td>
<td> \f7d2</td>
<td><a href='/fontawesome/fa-snowplow' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-soap'></i> Soap</td>
<td>fa-soap</td>
<td>fas</td>
<td> \e06e</td>
<td><a href='/fontawesome/fa-soap' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-socks'></i> Socks</td>
<td>fa-socks</td>
<td>fas</td>
<td> \f696</td>
<td><a href='/fontawesome/fa-socks' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-solar-panel'></i> Solar Panel</td>
<td>fa-solar-panel</td>
<td>fas</td>
<td> \f5ba</td>
<td><a href='/fontawesome/fa-solar-panel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sort-down'></i> Sort Down</td>
<td>fa-sort-down</td>
<td>fas</td>
<td> \f0dd</td>
<td><a href='/fontawesome/fa-sort-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sort-up'></i> Sort Up</td>
<td>fa-sort-up</td>
<td>fas</td>
<td> \f0de</td>
<td><a href='/fontawesome/fa-sort-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sort'></i> Sort</td>
<td>fa-sort</td>
<td>fas</td>
<td> \f0dc</td>
<td><a href='/fontawesome/fa-sort' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spa'></i> Spa</td>
<td>fa-spa</td>
<td>fas</td>
<td> \f5bb</td>
<td><a href='/fontawesome/fa-spa' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spaghetti-monster-flying'></i> Spaghetti Monster Flying</td>
<td>fa-spaghetti-monster-flying</td>
<td>fas</td>
<td> \f67b</td>
<td><a href='/fontawesome/fa-spaghetti-monster-flying' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spell-check'></i> Spell Check</td>
<td>fa-spell-check</td>
<td>fas</td>
<td> \f891</td>
<td><a href='/fontawesome/fa-spell-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spider'></i> Spider</td>
<td>fa-spider</td>
<td>fas</td>
<td> \f717</td>
<td><a href='/fontawesome/fa-spider' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spinner'></i> Spinner</td>
<td>fa-spinner</td>
<td>fas</td>
<td> \f110</td>
<td><a href='/fontawesome/fa-spinner' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-splotch'></i> Splotch</td>
<td>fa-splotch</td>
<td>fas</td>
<td> \f5bc</td>
<td><a href='/fontawesome/fa-splotch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spoon'></i> Spoon</td>
<td>fa-spoon</td>
<td>fas</td>
<td> \f2e5</td>
<td><a href='/fontawesome/fa-spoon' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spray-can-sparkles'></i> Spray Can Sparkles</td>
<td>fa-spray-can-sparkles</td>
<td>fas</td>
<td> \f5d0</td>
<td><a href='/fontawesome/fa-spray-can-sparkles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-spray-can'></i> Spray Can</td>
<td>fa-spray-can</td>
<td>fas</td>
<td> \f5bd</td>
<td><a href='/fontawesome/fa-spray-can' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-arrow-up-right'></i> Square Arrow Up Right</td>
<td>fa-square-arrow-up-right</td>
<td>fas</td>
<td> \f14c</td>
<td><a href='/fontawesome/fa-square-arrow-up-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-caret-down'></i> Square Caret Down</td>
<td>fa-square-caret-down</td>
<td>fas</td>
<td> \f150</td>
<td><a href='/fontawesome/fa-square-caret-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-caret-left'></i> Square Caret Left</td>
<td>fa-square-caret-left</td>
<td>fas</td>
<td> \f191</td>
<td><a href='/fontawesome/fa-square-caret-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-caret-right'></i> Square Caret Right</td>
<td>fa-square-caret-right</td>
<td>fas</td>
<td> \f152</td>
<td><a href='/fontawesome/fa-square-caret-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-caret-up'></i> Square Caret Up</td>
<td>fa-square-caret-up</td>
<td>fas</td>
<td> \f151</td>
<td><a href='/fontawesome/fa-square-caret-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-check'></i> Square Check</td>
<td>fa-square-check</td>
<td>fas</td>
<td> \f14a</td>
<td><a href='/fontawesome/fa-square-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-envelope'></i> Square Envelope</td>
<td>fa-square-envelope</td>
<td>fas</td>
<td> \f199</td>
<td><a href='/fontawesome/fa-square-envelope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-full'></i> Square Full</td>
<td>fa-square-full</td>
<td>fas</td>
<td> \f45c</td>
<td><a href='/fontawesome/fa-square-full' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-h'></i> Square H</td>
<td>fa-square-h</td>
<td>fas</td>
<td> \f0fd</td>
<td><a href='/fontawesome/fa-square-h' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-minus'></i> Square Minus</td>
<td>fa-square-minus</td>
<td>fas</td>
<td> \f146</td>
<td><a href='/fontawesome/fa-square-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-nfi'></i> Square Nfi</td>
<td>fa-square-nfi</td>
<td>fas</td>
<td> \e576</td>
<td><a href='/fontawesome/fa-square-nfi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-parking'></i> Square Parking</td>
<td>fa-square-parking</td>
<td>fas</td>
<td> \f540</td>
<td><a href='/fontawesome/fa-square-parking' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-pen'></i> Square Pen</td>
<td>fa-square-pen</td>
<td>fas</td>
<td> \f14b</td>
<td><a href='/fontawesome/fa-square-pen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-person-confined'></i> Square Person Confined</td>
<td>fa-square-person-confined</td>
<td>fas</td>
<td> \e577</td>
<td><a href='/fontawesome/fa-square-person-confined' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-phone-flip'></i> Square Phone Flip</td>
<td>fa-square-phone-flip</td>
<td>fas</td>
<td> \f87b</td>
<td><a href='/fontawesome/fa-square-phone-flip' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-phone'></i> Square Phone</td>
<td>fa-square-phone</td>
<td>fas</td>
<td> \f098</td>
<td><a href='/fontawesome/fa-square-phone' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-plus'></i> Square Plus</td>
<td>fa-square-plus</td>
<td>fas</td>
<td> \f0fe</td>
<td><a href='/fontawesome/fa-square-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-poll-horizontal'></i> Square Poll Horizontal</td>
<td>fa-square-poll-horizontal</td>
<td>fas</td>
<td> \f682</td>
<td><a href='/fontawesome/fa-square-poll-horizontal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-poll-vertical'></i> Square Poll Vertical</td>
<td>fa-square-poll-vertical</td>
<td>fas</td>
<td> \f681</td>
<td><a href='/fontawesome/fa-square-poll-vertical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-root-variable'></i> Square Root Variable</td>
<td>fa-square-root-variable</td>
<td>fas</td>
<td> \f698</td>
<td><a href='/fontawesome/fa-square-root-variable' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-rss'></i> Square Rss</td>
<td>fa-square-rss</td>
<td>fas</td>
<td> \f143</td>
<td><a href='/fontawesome/fa-square-rss' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-share-nodes'></i> Square Share Nodes</td>
<td>fa-square-share-nodes</td>
<td>fas</td>
<td> \f1e1</td>
<td><a href='/fontawesome/fa-square-share-nodes' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-up-right'></i> Square Up Right</td>
<td>fa-square-up-right</td>
<td>fas</td>
<td> \f360</td>
<td><a href='/fontawesome/fa-square-up-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-virus'></i> Square Virus</td>
<td>fa-square-virus</td>
<td>fas</td>
<td> \e578</td>
<td><a href='/fontawesome/fa-square-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square-xmark'></i> Square Xmark</td>
<td>fa-square-xmark</td>
<td>fas</td>
<td> \f2d3</td>
<td><a href='/fontawesome/fa-square-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-square'></i> Square</td>
<td>fa-square</td>
<td>fas</td>
<td> \f0c8</td>
<td><a href='/fontawesome/fa-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-staff-snake'></i> Staff Snake</td>
<td>fa-staff-snake</td>
<td>fas</td>
<td> \e579</td>
<td><a href='/fontawesome/fa-staff-snake' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stairs'></i> Stairs</td>
<td>fa-stairs</td>
<td>fas</td>
<td> \e289</td>
<td><a href='/fontawesome/fa-stairs' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stamp'></i> Stamp</td>
<td>fa-stamp</td>
<td>fas</td>
<td> \f5bf</td>
<td><a href='/fontawesome/fa-stamp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stapler'></i> Stapler</td>
<td>fa-stapler</td>
<td>fas</td>
<td> \e5af</td>
<td><a href='/fontawesome/fa-stapler' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star-and-crescent'></i> Star And Crescent</td>
<td>fa-star-and-crescent</td>
<td>fas</td>
<td> \f699</td>
<td><a href='/fontawesome/fa-star-and-crescent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star-half-stroke'></i> Star Half Stroke</td>
<td>fa-star-half-stroke</td>
<td>fas</td>
<td> \f5c0</td>
<td><a href='/fontawesome/fa-star-half-stroke' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star-half'></i> Star Half</td>
<td>fa-star-half</td>
<td>fas</td>
<td> \f089</td>
<td><a href='/fontawesome/fa-star-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star-of-david'></i> Star Of David</td>
<td>fa-star-of-david</td>
<td>fas</td>
<td> \f69a</td>
<td><a href='/fontawesome/fa-star-of-david' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star-of-life'></i> Star Of Life</td>
<td>fa-star-of-life</td>
<td>fas</td>
<td> \f621</td>
<td><a href='/fontawesome/fa-star-of-life' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-star'></i> Star</td>
<td>fa-star</td>
<td>fas</td>
<td> \f005</td>
<td><a href='/fontawesome/fa-star' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sterling-sign'></i> Sterling Sign</td>
<td>fa-sterling-sign</td>
<td>fas</td>
<td> \f154</td>
<td><a href='/fontawesome/fa-sterling-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stethoscope'></i> Stethoscope</td>
<td>fa-stethoscope</td>
<td>fas</td>
<td> \f0f1</td>
<td><a href='/fontawesome/fa-stethoscope' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stop'></i> Stop</td>
<td>fa-stop</td>
<td>fas</td>
<td> \f04d</td>
<td><a href='/fontawesome/fa-stop' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stopwatch-20'></i> Stopwatch 20</td>
<td>fa-stopwatch-20</td>
<td>fas</td>
<td> \e06f</td>
<td><a href='/fontawesome/fa-stopwatch-20' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stopwatch'></i> Stopwatch</td>
<td>fa-stopwatch</td>
<td>fas</td>
<td> \f2f2</td>
<td><a href='/fontawesome/fa-stopwatch' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-store-slash'></i> Store Slash</td>
<td>fa-store-slash</td>
<td>fas</td>
<td> \e071</td>
<td><a href='/fontawesome/fa-store-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-store'></i> Store</td>
<td>fa-store</td>
<td>fas</td>
<td> \f54e</td>
<td><a href='/fontawesome/fa-store' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-street-view'></i> Street View</td>
<td>fa-street-view</td>
<td>fas</td>
<td> \f21d</td>
<td><a href='/fontawesome/fa-street-view' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-strikethrough'></i> Strikethrough</td>
<td>fa-strikethrough</td>
<td>fas</td>
<td> \f0cc</td>
<td><a href='/fontawesome/fa-strikethrough' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-stroopwafel'></i> Stroopwafel</td>
<td>fa-stroopwafel</td>
<td>fas</td>
<td> \f551</td>
<td><a href='/fontawesome/fa-stroopwafel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-subscript'></i> Subscript</td>
<td>fa-subscript</td>
<td>fas</td>
<td> \f12c</td>
<td><a href='/fontawesome/fa-subscript' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-suitcase-medical'></i> Suitcase Medical</td>
<td>fa-suitcase-medical</td>
<td>fas</td>
<td> \f0fa</td>
<td><a href='/fontawesome/fa-suitcase-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-suitcase-rolling'></i> Suitcase Rolling</td>
<td>fa-suitcase-rolling</td>
<td>fas</td>
<td> \f5c1</td>
<td><a href='/fontawesome/fa-suitcase-rolling' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-suitcase'></i> Suitcase</td>
<td>fa-suitcase</td>
<td>fas</td>
<td> \f0f2</td>
<td><a href='/fontawesome/fa-suitcase' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sun-plant-wilt'></i> Sun Plant Wilt</td>
<td>fa-sun-plant-wilt</td>
<td>fas</td>
<td> \e57a</td>
<td><a href='/fontawesome/fa-sun-plant-wilt' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-sun'></i> Sun</td>
<td>fa-sun</td>
<td>fas</td>
<td> \f185</td>
<td><a href='/fontawesome/fa-sun' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-superscript'></i> Superscript</td>
<td>fa-superscript</td>
<td>fas</td>
<td> \f12b</td>
<td><a href='/fontawesome/fa-superscript' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-swatchbook'></i> Swatchbook</td>
<td>fa-swatchbook</td>
<td>fas</td>
<td> \f5c3</td>
<td><a href='/fontawesome/fa-swatchbook' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-synagogue'></i> Synagogue</td>
<td>fa-synagogue</td>
<td>fas</td>
<td> \f69b</td>
<td><a href='/fontawesome/fa-synagogue' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-syringe'></i> Syringe</td>
<td>fa-syringe</td>
<td>fas</td>
<td> \f48e</td>
<td><a href='/fontawesome/fa-syringe' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-t'></i> T</td>
<td>fa-t</td>
<td>fas</td>
<td> \54</td>
<td><a href='/fontawesome/fa-t' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table-cells-large'></i> Table Cells Large</td>
<td>fa-table-cells-large</td>
<td>fas</td>
<td> \f009</td>
<td><a href='/fontawesome/fa-table-cells-large' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table-cells'></i> Table Cells</td>
<td>fa-table-cells</td>
<td>fas</td>
<td> \f00a</td>
<td><a href='/fontawesome/fa-table-cells' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table-columns'></i> Table Columns</td>
<td>fa-table-columns</td>
<td>fas</td>
<td> \f0db</td>
<td><a href='/fontawesome/fa-table-columns' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table-list'></i> Table List</td>
<td>fa-table-list</td>
<td>fas</td>
<td> \f00b</td>
<td><a href='/fontawesome/fa-table-list' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table-tennis-paddle-ball'></i> Table Tennis Paddle Ball</td>
<td>fa-table-tennis-paddle-ball</td>
<td>fas</td>
<td> \f45d</td>
<td><a href='/fontawesome/fa-table-tennis-paddle-ball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-table'></i> Table</td>
<td>fa-table</td>
<td>fas</td>
<td> \f0ce</td>
<td><a href='/fontawesome/fa-table' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tablet-button'></i> Tablet Button</td>
<td>fa-tablet-button</td>
<td>fas</td>
<td> \f10a</td>
<td><a href='/fontawesome/fa-tablet-button' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tablet-screen-button'></i> Tablet Screen Button</td>
<td>fa-tablet-screen-button</td>
<td>fas</td>
<td> \f3fa</td>
<td><a href='/fontawesome/fa-tablet-screen-button' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tablet'></i> Tablet</td>
<td>fa-tablet</td>
<td>fas</td>
<td> \f3fb</td>
<td><a href='/fontawesome/fa-tablet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tablets'></i> Tablets</td>
<td>fa-tablets</td>
<td>fas</td>
<td> \f490</td>
<td><a href='/fontawesome/fa-tablets' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tachograph-digital'></i> Tachograph Digital</td>
<td>fa-tachograph-digital</td>
<td>fas</td>
<td> \f566</td>
<td><a href='/fontawesome/fa-tachograph-digital' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tag'></i> Tag</td>
<td>fa-tag</td>
<td>fas</td>
<td> \f02b</td>
<td><a href='/fontawesome/fa-tag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tags'></i> Tags</td>
<td>fa-tags</td>
<td>fas</td>
<td> \f02c</td>
<td><a href='/fontawesome/fa-tags' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tape'></i> Tape</td>
<td>fa-tape</td>
<td>fas</td>
<td> \f4db</td>
<td><a href='/fontawesome/fa-tape' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tarp-droplet'></i> Tarp Droplet</td>
<td>fa-tarp-droplet</td>
<td>fas</td>
<td> \e57c</td>
<td><a href='/fontawesome/fa-tarp-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tarp'></i> Tarp</td>
<td>fa-tarp</td>
<td>fas</td>
<td> \e57b</td>
<td><a href='/fontawesome/fa-tarp' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-taxi'></i> Taxi</td>
<td>fa-taxi</td>
<td>fas</td>
<td> \f1ba</td>
<td><a href='/fontawesome/fa-taxi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-teeth-open'></i> Teeth Open</td>
<td>fa-teeth-open</td>
<td>fas</td>
<td> \f62f</td>
<td><a href='/fontawesome/fa-teeth-open' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-teeth'></i> Teeth</td>
<td>fa-teeth</td>
<td>fas</td>
<td> \f62e</td>
<td><a href='/fontawesome/fa-teeth' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-arrow-down'></i> Temperature Arrow Down</td>
<td>fa-temperature-arrow-down</td>
<td>fas</td>
<td> \e03f</td>
<td><a href='/fontawesome/fa-temperature-arrow-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-arrow-up'></i> Temperature Arrow Up</td>
<td>fa-temperature-arrow-up</td>
<td>fas</td>
<td> \e040</td>
<td><a href='/fontawesome/fa-temperature-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-empty'></i> Temperature Empty</td>
<td>fa-temperature-empty</td>
<td>fas</td>
<td> \f2cb</td>
<td><a href='/fontawesome/fa-temperature-empty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-full'></i> Temperature Full</td>
<td>fa-temperature-full</td>
<td>fas</td>
<td> \f2c7</td>
<td><a href='/fontawesome/fa-temperature-full' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-half'></i> Temperature Half</td>
<td>fa-temperature-half</td>
<td>fas</td>
<td> \f2c9</td>
<td><a href='/fontawesome/fa-temperature-half' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-high'></i> Temperature High</td>
<td>fa-temperature-high</td>
<td>fas</td>
<td> \f769</td>
<td><a href='/fontawesome/fa-temperature-high' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-low'></i> Temperature Low</td>
<td>fa-temperature-low</td>
<td>fas</td>
<td> \f76b</td>
<td><a href='/fontawesome/fa-temperature-low' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-quarter'></i> Temperature Quarter</td>
<td>fa-temperature-quarter</td>
<td>fas</td>
<td> \f2ca</td>
<td><a href='/fontawesome/fa-temperature-quarter' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-temperature-three-quarters'></i> Temperature Three Quarters</td>
<td>fa-temperature-three-quarters</td>
<td>fas</td>
<td> \f2c8</td>
<td><a href='/fontawesome/fa-temperature-three-quarters' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tenge-sign'></i> Tenge Sign</td>
<td>fa-tenge-sign</td>
<td>fas</td>
<td> \f7d7</td>
<td><a href='/fontawesome/fa-tenge-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tent-arrow-down-to-line'></i> Tent Arrow Down To Line</td>
<td>fa-tent-arrow-down-to-line</td>
<td>fas</td>
<td> \e57e</td>
<td><a href='/fontawesome/fa-tent-arrow-down-to-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tent-arrow-left-right'></i> Tent Arrow Left Right</td>
<td>fa-tent-arrow-left-right</td>
<td>fas</td>
<td> \e57f</td>
<td><a href='/fontawesome/fa-tent-arrow-left-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tent-arrow-turn-left'></i> Tent Arrow Turn Left</td>
<td>fa-tent-arrow-turn-left</td>
<td>fas</td>
<td> \e580</td>
<td><a href='/fontawesome/fa-tent-arrow-turn-left' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tent-arrows-down'></i> Tent Arrows Down</td>
<td>fa-tent-arrows-down</td>
<td>fas</td>
<td> \e581</td>
<td><a href='/fontawesome/fa-tent-arrows-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tent'></i> Tent</td>
<td>fa-tent</td>
<td>fas</td>
<td> \e57d</td>
<td><a href='/fontawesome/fa-tent' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tents'></i> Tents</td>
<td>fa-tents</td>
<td>fas</td>
<td> \e582</td>
<td><a href='/fontawesome/fa-tents' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-terminal'></i> Terminal</td>
<td>fa-terminal</td>
<td>fas</td>
<td> \f120</td>
<td><a href='/fontawesome/fa-terminal' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-text-height'></i> Text Height</td>
<td>fa-text-height</td>
<td>fas</td>
<td> \f034</td>
<td><a href='/fontawesome/fa-text-height' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-text-slash'></i> Text Slash</td>
<td>fa-text-slash</td>
<td>fas</td>
<td> \f87d</td>
<td><a href='/fontawesome/fa-text-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-text-width'></i> Text Width</td>
<td>fa-text-width</td>
<td>fas</td>
<td> \f035</td>
<td><a href='/fontawesome/fa-text-width' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-thermometer'></i> Thermometer</td>
<td>fa-thermometer</td>
<td>fas</td>
<td> \f491</td>
<td><a href='/fontawesome/fa-thermometer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-thumbs-down'></i> Thumbs Down</td>
<td>fa-thumbs-down</td>
<td>fas</td>
<td> \f165</td>
<td><a href='/fontawesome/fa-thumbs-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-thumbs-up'></i> Thumbs Up</td>
<td>fa-thumbs-up</td>
<td>fas</td>
<td> \f164</td>
<td><a href='/fontawesome/fa-thumbs-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-thumbtack'></i> Thumbtack</td>
<td>fa-thumbtack</td>
<td>fas</td>
<td> \f08d</td>
<td><a href='/fontawesome/fa-thumbtack' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ticket-simple'></i> Ticket Simple</td>
<td>fa-ticket-simple</td>
<td>fas</td>
<td> \f3ff</td>
<td><a href='/fontawesome/fa-ticket-simple' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-ticket'></i> Ticket</td>
<td>fa-ticket</td>
<td>fas</td>
<td> \f145</td>
<td><a href='/fontawesome/fa-ticket' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-timeline'></i> Timeline</td>
<td>fa-timeline</td>
<td>fas</td>
<td> \e29c</td>
<td><a href='/fontawesome/fa-timeline' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toggle-off'></i> Toggle Off</td>
<td>fa-toggle-off</td>
<td>fas</td>
<td> \f204</td>
<td><a href='/fontawesome/fa-toggle-off' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toggle-on'></i> Toggle On</td>
<td>fa-toggle-on</td>
<td>fas</td>
<td> \f205</td>
<td><a href='/fontawesome/fa-toggle-on' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toilet-paper-slash'></i> Toilet Paper Slash</td>
<td>fa-toilet-paper-slash</td>
<td>fas</td>
<td> \e072</td>
<td><a href='/fontawesome/fa-toilet-paper-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toilet-paper'></i> Toilet Paper</td>
<td>fa-toilet-paper</td>
<td>fas</td>
<td> \f71e</td>
<td><a href='/fontawesome/fa-toilet-paper' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toilet-portable'></i> Toilet Portable</td>
<td>fa-toilet-portable</td>
<td>fas</td>
<td> \e583</td>
<td><a href='/fontawesome/fa-toilet-portable' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toilet'></i> Toilet</td>
<td>fa-toilet</td>
<td>fas</td>
<td> \f7d8</td>
<td><a href='/fontawesome/fa-toilet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toilets-portable'></i> Toilets Portable</td>
<td>fa-toilets-portable</td>
<td>fas</td>
<td> \e584</td>
<td><a href='/fontawesome/fa-toilets-portable' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-toolbox'></i> Toolbox</td>
<td>fa-toolbox</td>
<td>fas</td>
<td> \f552</td>
<td><a href='/fontawesome/fa-toolbox' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tooth'></i> Tooth</td>
<td>fa-tooth</td>
<td>fas</td>
<td> \f5c9</td>
<td><a href='/fontawesome/fa-tooth' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-torii-gate'></i> Torii Gate</td>
<td>fa-torii-gate</td>
<td>fas</td>
<td> \f6a1</td>
<td><a href='/fontawesome/fa-torii-gate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tornado'></i> Tornado</td>
<td>fa-tornado</td>
<td>fas</td>
<td> \f76f</td>
<td><a href='/fontawesome/fa-tornado' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tower-broadcast'></i> Tower Broadcast</td>
<td>fa-tower-broadcast</td>
<td>fas</td>
<td> \f519</td>
<td><a href='/fontawesome/fa-tower-broadcast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tower-cell'></i> Tower Cell</td>
<td>fa-tower-cell</td>
<td>fas</td>
<td> \e585</td>
<td><a href='/fontawesome/fa-tower-cell' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tower-observation'></i> Tower Observation</td>
<td>fa-tower-observation</td>
<td>fas</td>
<td> \e586</td>
<td><a href='/fontawesome/fa-tower-observation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tractor'></i> Tractor</td>
<td>fa-tractor</td>
<td>fas</td>
<td> \f722</td>
<td><a href='/fontawesome/fa-tractor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trademark'></i> Trademark</td>
<td>fa-trademark</td>
<td>fas</td>
<td> \f25c</td>
<td><a href='/fontawesome/fa-trademark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-traffic-light'></i> Traffic Light</td>
<td>fa-traffic-light</td>
<td>fas</td>
<td> \f637</td>
<td><a href='/fontawesome/fa-traffic-light' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trailer'></i> Trailer</td>
<td>fa-trailer</td>
<td>fas</td>
<td> \e041</td>
<td><a href='/fontawesome/fa-trailer' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-train-subway'></i> Train Subway</td>
<td>fa-train-subway</td>
<td>fas</td>
<td> \f239</td>
<td><a href='/fontawesome/fa-train-subway' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-train-tram'></i> Train Tram</td>
<td>fa-train-tram</td>
<td>fas</td>
<td> \e5b4</td>
<td><a href='/fontawesome/fa-train-tram' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-train'></i> Train</td>
<td>fa-train</td>
<td>fas</td>
<td> \f238</td>
<td><a href='/fontawesome/fa-train' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-transgender'></i> Transgender</td>
<td>fa-transgender</td>
<td>fas</td>
<td> \f225</td>
<td><a href='/fontawesome/fa-transgender' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trash-arrow-up'></i> Trash Arrow Up</td>
<td>fa-trash-arrow-up</td>
<td>fas</td>
<td> \f829</td>
<td><a href='/fontawesome/fa-trash-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trash-can-arrow-up'></i> Trash Can Arrow Up</td>
<td>fa-trash-can-arrow-up</td>
<td>fas</td>
<td> \f82a</td>
<td><a href='/fontawesome/fa-trash-can-arrow-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trash-can'></i> Trash Can</td>
<td>fa-trash-can</td>
<td>fas</td>
<td> \f2ed</td>
<td><a href='/fontawesome/fa-trash-can' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trash'></i> Trash</td>
<td>fa-trash</td>
<td>fas</td>
<td> \f1f8</td>
<td><a href='/fontawesome/fa-trash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tree-city'></i> Tree City</td>
<td>fa-tree-city</td>
<td>fas</td>
<td> \e587</td>
<td><a href='/fontawesome/fa-tree-city' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tree'></i> Tree</td>
<td>fa-tree</td>
<td>fas</td>
<td> \f1bb</td>
<td><a href='/fontawesome/fa-tree' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-triangle-exclamation'></i> Triangle Exclamation</td>
<td>fa-triangle-exclamation</td>
<td>fas</td>
<td> \f071</td>
<td><a href='/fontawesome/fa-triangle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trophy'></i> Trophy</td>
<td>fa-trophy</td>
<td>fas</td>
<td> \f091</td>
<td><a href='/fontawesome/fa-trophy' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trowel-bricks'></i> Trowel Bricks</td>
<td>fa-trowel-bricks</td>
<td>fas</td>
<td> \e58a</td>
<td><a href='/fontawesome/fa-trowel-bricks' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-trowel'></i> Trowel</td>
<td>fa-trowel</td>
<td>fas</td>
<td> \e589</td>
<td><a href='/fontawesome/fa-trowel' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-arrow-right'></i> Truck Arrow Right</td>
<td>fa-truck-arrow-right</td>
<td>fas</td>
<td> \e58b</td>
<td><a href='/fontawesome/fa-truck-arrow-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-droplet'></i> Truck Droplet</td>
<td>fa-truck-droplet</td>
<td>fas</td>
<td> \e58c</td>
<td><a href='/fontawesome/fa-truck-droplet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-fast'></i> Truck Fast</td>
<td>fa-truck-fast</td>
<td>fas</td>
<td> \f48b</td>
<td><a href='/fontawesome/fa-truck-fast' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-field-un'></i> Truck Field Un</td>
<td>fa-truck-field-un</td>
<td>fas</td>
<td> \e58e</td>
<td><a href='/fontawesome/fa-truck-field-un' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-field'></i> Truck Field</td>
<td>fa-truck-field</td>
<td>fas</td>
<td> \e58d</td>
<td><a href='/fontawesome/fa-truck-field' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-front'></i> Truck Front</td>
<td>fa-truck-front</td>
<td>fas</td>
<td> \e2b7</td>
<td><a href='/fontawesome/fa-truck-front' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-medical'></i> Truck Medical</td>
<td>fa-truck-medical</td>
<td>fas</td>
<td> \f0f9</td>
<td><a href='/fontawesome/fa-truck-medical' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-monster'></i> Truck Monster</td>
<td>fa-truck-monster</td>
<td>fas</td>
<td> \f63b</td>
<td><a href='/fontawesome/fa-truck-monster' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-moving'></i> Truck Moving</td>
<td>fa-truck-moving</td>
<td>fas</td>
<td> \f4df</td>
<td><a href='/fontawesome/fa-truck-moving' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-pickup'></i> Truck Pickup</td>
<td>fa-truck-pickup</td>
<td>fas</td>
<td> \f63c</td>
<td><a href='/fontawesome/fa-truck-pickup' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-plane'></i> Truck Plane</td>
<td>fa-truck-plane</td>
<td>fas</td>
<td> \e58f</td>
<td><a href='/fontawesome/fa-truck-plane' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck-ramp-box'></i> Truck Ramp Box</td>
<td>fa-truck-ramp-box</td>
<td>fas</td>
<td> \f4de</td>
<td><a href='/fontawesome/fa-truck-ramp-box' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-truck'></i> Truck</td>
<td>fa-truck</td>
<td>fas</td>
<td> \f0d1</td>
<td><a href='/fontawesome/fa-truck' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tty'></i> Tty</td>
<td>fa-tty</td>
<td>fas</td>
<td> \f1e4</td>
<td><a href='/fontawesome/fa-tty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-turkish-lira-sign'></i> Turkish Lira Sign</td>
<td>fa-turkish-lira-sign</td>
<td>fas</td>
<td> \e2bb</td>
<td><a href='/fontawesome/fa-turkish-lira-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-turn-down'></i> Turn Down</td>
<td>fa-turn-down</td>
<td>fas</td>
<td> \f3be</td>
<td><a href='/fontawesome/fa-turn-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-turn-up'></i> Turn Up</td>
<td>fa-turn-up</td>
<td>fas</td>
<td> \f3bf</td>
<td><a href='/fontawesome/fa-turn-up' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-tv'></i> Tv</td>
<td>fa-tv</td>
<td>fas</td>
<td> \f26c</td>
<td><a href='/fontawesome/fa-tv' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-u'></i> U</td>
<td>fa-u</td>
<td>fas</td>
<td> \55</td>
<td><a href='/fontawesome/fa-u' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-umbrella-beach'></i> Umbrella Beach</td>
<td>fa-umbrella-beach</td>
<td>fas</td>
<td> \f5ca</td>
<td><a href='/fontawesome/fa-umbrella-beach' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-umbrella'></i> Umbrella</td>
<td>fa-umbrella</td>
<td>fas</td>
<td> \f0e9</td>
<td><a href='/fontawesome/fa-umbrella' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-underline'></i> Underline</td>
<td>fa-underline</td>
<td>fas</td>
<td> \f0cd</td>
<td><a href='/fontawesome/fa-underline' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-universal-access'></i> Universal Access</td>
<td>fa-universal-access</td>
<td>fas</td>
<td> \f29a</td>
<td><a href='/fontawesome/fa-universal-access' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-unlock-keyhole'></i> Unlock Keyhole</td>
<td>fa-unlock-keyhole</td>
<td>fas</td>
<td> \f13e</td>
<td><a href='/fontawesome/fa-unlock-keyhole' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-unlock'></i> Unlock</td>
<td>fa-unlock</td>
<td>fas</td>
<td> \f09c</td>
<td><a href='/fontawesome/fa-unlock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-up-down-left-right'></i> Up Down Left Right</td>
<td>fa-up-down-left-right</td>
<td>fas</td>
<td> \f0b2</td>
<td><a href='/fontawesome/fa-up-down-left-right' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-up-down'></i> Up Down</td>
<td>fa-up-down</td>
<td>fas</td>
<td> \f338</td>
<td><a href='/fontawesome/fa-up-down' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-up-long'></i> Up Long</td>
<td>fa-up-long</td>
<td>fas</td>
<td> \f30c</td>
<td><a href='/fontawesome/fa-up-long' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-up-right-and-down-left-from-center'></i> Up Right And Down Left From Center</td>
<td>fa-up-right-and-down-left-from-center</td>
<td>fas</td>
<td> \f424</td>
<td><a href='/fontawesome/fa-up-right-and-down-left-from-center' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-up-right-from-square'></i> Up Right From Square</td>
<td>fa-up-right-from-square</td>
<td>fas</td>
<td> \f35d</td>
<td><a href='/fontawesome/fa-up-right-from-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-upload'></i> Upload</td>
<td>fa-upload</td>
<td>fas</td>
<td> \f093</td>
<td><a href='/fontawesome/fa-upload' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-astronaut'></i> User Astronaut</td>
<td>fa-user-astronaut</td>
<td>fas</td>
<td> \f4fb</td>
<td><a href='/fontawesome/fa-user-astronaut' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-check'></i> User Check</td>
<td>fa-user-check</td>
<td>fas</td>
<td> \f4fc</td>
<td><a href='/fontawesome/fa-user-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-clock'></i> User Clock</td>
<td>fa-user-clock</td>
<td>fas</td>
<td> \f4fd</td>
<td><a href='/fontawesome/fa-user-clock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-doctor'></i> User Doctor</td>
<td>fa-user-doctor</td>
<td>fas</td>
<td> \f0f0</td>
<td><a href='/fontawesome/fa-user-doctor' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-gear'></i> User Gear</td>
<td>fa-user-gear</td>
<td>fas</td>
<td> \f4fe</td>
<td><a href='/fontawesome/fa-user-gear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-graduate'></i> User Graduate</td>
<td>fa-user-graduate</td>
<td>fas</td>
<td> \f501</td>
<td><a href='/fontawesome/fa-user-graduate' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-group'></i> User Group</td>
<td>fa-user-group</td>
<td>fas</td>
<td> \f500</td>
<td><a href='/fontawesome/fa-user-group' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-injured'></i> User Injured</td>
<td>fa-user-injured</td>
<td>fas</td>
<td> \f728</td>
<td><a href='/fontawesome/fa-user-injured' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-large-slash'></i> User Large Slash</td>
<td>fa-user-large-slash</td>
<td>fas</td>
<td> \f4fa</td>
<td><a href='/fontawesome/fa-user-large-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-large'></i> User Large</td>
<td>fa-user-large</td>
<td>fas</td>
<td> \f406</td>
<td><a href='/fontawesome/fa-user-large' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-lock'></i> User Lock</td>
<td>fa-user-lock</td>
<td>fas</td>
<td> \f502</td>
<td><a href='/fontawesome/fa-user-lock' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-minus'></i> User Minus</td>
<td>fa-user-minus</td>
<td>fas</td>
<td> \f503</td>
<td><a href='/fontawesome/fa-user-minus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-ninja'></i> User Ninja</td>
<td>fa-user-ninja</td>
<td>fas</td>
<td> \f504</td>
<td><a href='/fontawesome/fa-user-ninja' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-nurse'></i> User Nurse</td>
<td>fa-user-nurse</td>
<td>fas</td>
<td> \f82f</td>
<td><a href='/fontawesome/fa-user-nurse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-pen'></i> User Pen</td>
<td>fa-user-pen</td>
<td>fas</td>
<td> \f4ff</td>
<td><a href='/fontawesome/fa-user-pen' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-plus'></i> User Plus</td>
<td>fa-user-plus</td>
<td>fas</td>
<td> \f234</td>
<td><a href='/fontawesome/fa-user-plus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-secret'></i> User Secret</td>
<td>fa-user-secret</td>
<td>fas</td>
<td> \f21b</td>
<td><a href='/fontawesome/fa-user-secret' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-shield'></i> User Shield</td>
<td>fa-user-shield</td>
<td>fas</td>
<td> \f505</td>
<td><a href='/fontawesome/fa-user-shield' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-slash'></i> User Slash</td>
<td>fa-user-slash</td>
<td>fas</td>
<td> \f506</td>
<td><a href='/fontawesome/fa-user-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-tag'></i> User Tag</td>
<td>fa-user-tag</td>
<td>fas</td>
<td> \f507</td>
<td><a href='/fontawesome/fa-user-tag' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-tie'></i> User Tie</td>
<td>fa-user-tie</td>
<td>fas</td>
<td> \f508</td>
<td><a href='/fontawesome/fa-user-tie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user-xmark'></i> User Xmark</td>
<td>fa-user-xmark</td>
<td>fas</td>
<td> \f235</td>
<td><a href='/fontawesome/fa-user-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-user'></i> User</td>
<td>fa-user</td>
<td>fas</td>
<td> \f007</td>
<td><a href='/fontawesome/fa-user' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-between-lines'></i> Users Between Lines</td>
<td>fa-users-between-lines</td>
<td>fas</td>
<td> \e591</td>
<td><a href='/fontawesome/fa-users-between-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-gear'></i> Users Gear</td>
<td>fa-users-gear</td>
<td>fas</td>
<td> \f509</td>
<td><a href='/fontawesome/fa-users-gear' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-line'></i> Users Line</td>
<td>fa-users-line</td>
<td>fas</td>
<td> \e592</td>
<td><a href='/fontawesome/fa-users-line' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-rays'></i> Users Rays</td>
<td>fa-users-rays</td>
<td>fas</td>
<td> \e593</td>
<td><a href='/fontawesome/fa-users-rays' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-rectangle'></i> Users Rectangle</td>
<td>fa-users-rectangle</td>
<td>fas</td>
<td> \e594</td>
<td><a href='/fontawesome/fa-users-rectangle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-slash'></i> Users Slash</td>
<td>fa-users-slash</td>
<td>fas</td>
<td> \e073</td>
<td><a href='/fontawesome/fa-users-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users-viewfinder'></i> Users Viewfinder</td>
<td>fa-users-viewfinder</td>
<td>fas</td>
<td> \e595</td>
<td><a href='/fontawesome/fa-users-viewfinder' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-users'></i> Users</td>
<td>fa-users</td>
<td>fas</td>
<td> \f0c0</td>
<td><a href='/fontawesome/fa-users' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-utensils'></i> Utensils</td>
<td>fa-utensils</td>
<td>fas</td>
<td> \f2e7</td>
<td><a href='/fontawesome/fa-utensils' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-v'></i> V</td>
<td>fa-v</td>
<td>fas</td>
<td> \56</td>
<td><a href='/fontawesome/fa-v' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-van-shuttle'></i> Van Shuttle</td>
<td>fa-van-shuttle</td>
<td>fas</td>
<td> \f5b6</td>
<td><a href='/fontawesome/fa-van-shuttle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vault'></i> Vault</td>
<td>fa-vault</td>
<td>fas</td>
<td> \e2c5</td>
<td><a href='/fontawesome/fa-vault' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vector-square'></i> Vector Square</td>
<td>fa-vector-square</td>
<td>fas</td>
<td> \f5cb</td>
<td><a href='/fontawesome/fa-vector-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-venus-double'></i> Venus Double</td>
<td>fa-venus-double</td>
<td>fas</td>
<td> \f226</td>
<td><a href='/fontawesome/fa-venus-double' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-venus-mars'></i> Venus Mars</td>
<td>fa-venus-mars</td>
<td>fas</td>
<td> \f228</td>
<td><a href='/fontawesome/fa-venus-mars' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-venus'></i> Venus</td>
<td>fa-venus</td>
<td>fas</td>
<td> \f221</td>
<td><a href='/fontawesome/fa-venus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vest-patches'></i> Vest Patches</td>
<td>fa-vest-patches</td>
<td>fas</td>
<td> \e086</td>
<td><a href='/fontawesome/fa-vest-patches' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vest'></i> Vest</td>
<td>fa-vest</td>
<td>fas</td>
<td> \e085</td>
<td><a href='/fontawesome/fa-vest' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vial-circle-check'></i> Vial Circle Check</td>
<td>fa-vial-circle-check</td>
<td>fas</td>
<td> \e596</td>
<td><a href='/fontawesome/fa-vial-circle-check' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vial-virus'></i> Vial Virus</td>
<td>fa-vial-virus</td>
<td>fas</td>
<td> \e597</td>
<td><a href='/fontawesome/fa-vial-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vial'></i> Vial</td>
<td>fa-vial</td>
<td>fas</td>
<td> \f492</td>
<td><a href='/fontawesome/fa-vial' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vials'></i> Vials</td>
<td>fa-vials</td>
<td>fas</td>
<td> \f493</td>
<td><a href='/fontawesome/fa-vials' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-video-slash'></i> Video Slash</td>
<td>fa-video-slash</td>
<td>fas</td>
<td> \f4e2</td>
<td><a href='/fontawesome/fa-video-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-video'></i> Video</td>
<td>fa-video</td>
<td>fas</td>
<td> \f03d</td>
<td><a href='/fontawesome/fa-video' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vihara'></i> Vihara</td>
<td>fa-vihara</td>
<td>fas</td>
<td> \f6a7</td>
<td><a href='/fontawesome/fa-vihara' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-virus-covid-slash'></i> Virus Covid Slash</td>
<td>fa-virus-covid-slash</td>
<td>fas</td>
<td> \e4a9</td>
<td><a href='/fontawesome/fa-virus-covid-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-virus-covid'></i> Virus Covid</td>
<td>fa-virus-covid</td>
<td>fas</td>
<td> \e4a8</td>
<td><a href='/fontawesome/fa-virus-covid' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-virus-slash'></i> Virus Slash</td>
<td>fa-virus-slash</td>
<td>fas</td>
<td> \e075</td>
<td><a href='/fontawesome/fa-virus-slash' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-virus'></i> Virus</td>
<td>fa-virus</td>
<td>fas</td>
<td> \e074</td>
<td><a href='/fontawesome/fa-virus' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-viruses'></i> Viruses</td>
<td>fa-viruses</td>
<td>fas</td>
<td> \e076</td>
<td><a href='/fontawesome/fa-viruses' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-voicemail'></i> Voicemail</td>
<td>fa-voicemail</td>
<td>fas</td>
<td> \f897</td>
<td><a href='/fontawesome/fa-voicemail' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volcano'></i> Volcano</td>
<td>fa-volcano</td>
<td>fas</td>
<td> \f770</td>
<td><a href='/fontawesome/fa-volcano' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volleyball'></i> Volleyball</td>
<td>fa-volleyball</td>
<td>fas</td>
<td> \f45f</td>
<td><a href='/fontawesome/fa-volleyball' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volume-high'></i> Volume High</td>
<td>fa-volume-high</td>
<td>fas</td>
<td> \f028</td>
<td><a href='/fontawesome/fa-volume-high' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volume-low'></i> Volume Low</td>
<td>fa-volume-low</td>
<td>fas</td>
<td> \f027</td>
<td><a href='/fontawesome/fa-volume-low' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volume-off'></i> Volume Off</td>
<td>fa-volume-off</td>
<td>fas</td>
<td> \f026</td>
<td><a href='/fontawesome/fa-volume-off' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-volume-xmark'></i> Volume Xmark</td>
<td>fa-volume-xmark</td>
<td>fas</td>
<td> \f6a9</td>
<td><a href='/fontawesome/fa-volume-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-vr-cardboard'></i> Vr Cardboard</td>
<td>fa-vr-cardboard</td>
<td>fas</td>
<td> \f729</td>
<td><a href='/fontawesome/fa-vr-cardboard' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-w'></i> W</td>
<td>fa-w</td>
<td>fas</td>
<td> \57</td>
<td><a href='/fontawesome/fa-w' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-walkie-talkie'></i> Walkie Talkie</td>
<td>fa-walkie-talkie</td>
<td>fas</td>
<td> \f8ef</td>
<td><a href='/fontawesome/fa-walkie-talkie' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wallet'></i> Wallet</td>
<td>fa-wallet</td>
<td>fas</td>
<td> \f555</td>
<td><a href='/fontawesome/fa-wallet' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wand-magic-sparkles'></i> Wand Magic Sparkles</td>
<td>fa-wand-magic-sparkles</td>
<td>fas</td>
<td> \e2ca</td>
<td><a href='/fontawesome/fa-wand-magic-sparkles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wand-magic'></i> Wand Magic</td>
<td>fa-wand-magic</td>
<td>fas</td>
<td> \f0d0</td>
<td><a href='/fontawesome/fa-wand-magic' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wand-sparkles'></i> Wand Sparkles</td>
<td>fa-wand-sparkles</td>
<td>fas</td>
<td> \f72b</td>
<td><a href='/fontawesome/fa-wand-sparkles' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-warehouse'></i> Warehouse</td>
<td>fa-warehouse</td>
<td>fas</td>
<td> \f494</td>
<td><a href='/fontawesome/fa-warehouse' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-water-ladder'></i> Water Ladder</td>
<td>fa-water-ladder</td>
<td>fas</td>
<td> \f5c5</td>
<td><a href='/fontawesome/fa-water-ladder' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-water'></i> Water</td>
<td>fa-water</td>
<td>fas</td>
<td> \f773</td>
<td><a href='/fontawesome/fa-water' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wave-square'></i> Wave Square</td>
<td>fa-wave-square</td>
<td>fas</td>
<td> \f83e</td>
<td><a href='/fontawesome/fa-wave-square' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-weight-hanging'></i> Weight Hanging</td>
<td>fa-weight-hanging</td>
<td>fas</td>
<td> \f5cd</td>
<td><a href='/fontawesome/fa-weight-hanging' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-weight-scale'></i> Weight Scale</td>
<td>fa-weight-scale</td>
<td>fas</td>
<td> \f496</td>
<td><a href='/fontawesome/fa-weight-scale' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wheat-awn-circle-exclamation'></i> Wheat Awn Circle Exclamation</td>
<td>fa-wheat-awn-circle-exclamation</td>
<td>fas</td>
<td> \e598</td>
<td><a href='/fontawesome/fa-wheat-awn-circle-exclamation' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wheat-awn'></i> Wheat Awn</td>
<td>fa-wheat-awn</td>
<td>fas</td>
<td> \e2cd</td>
<td><a href='/fontawesome/fa-wheat-awn' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wheelchair-move'></i> Wheelchair Move</td>
<td>fa-wheelchair-move</td>
<td>fas</td>
<td> \e2ce</td>
<td><a href='/fontawesome/fa-wheelchair-move' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wheelchair'></i> Wheelchair</td>
<td>fa-wheelchair</td>
<td>fas</td>
<td> \f193</td>
<td><a href='/fontawesome/fa-wheelchair' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-whiskey-glass'></i> Whiskey Glass</td>
<td>fa-whiskey-glass</td>
<td>fas</td>
<td> \f7a0</td>
<td><a href='/fontawesome/fa-whiskey-glass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wifi'></i> Wifi</td>
<td>fa-wifi</td>
<td>fas</td>
<td> \f1eb</td>
<td><a href='/fontawesome/fa-wifi' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wind'></i> Wind</td>
<td>fa-wind</td>
<td>fas</td>
<td> \f72e</td>
<td><a href='/fontawesome/fa-wind' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-window-maximize'></i> Window Maximize</td>
<td>fa-window-maximize</td>
<td>fas</td>
<td> \f2d0</td>
<td><a href='/fontawesome/fa-window-maximize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-window-minimize'></i> Window Minimize</td>
<td>fa-window-minimize</td>
<td>fas</td>
<td> \f2d1</td>
<td><a href='/fontawesome/fa-window-minimize' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-window-restore'></i> Window Restore</td>
<td>fa-window-restore</td>
<td>fas</td>
<td> \f2d2</td>
<td><a href='/fontawesome/fa-window-restore' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wine-bottle'></i> Wine Bottle</td>
<td>fa-wine-bottle</td>
<td>fas</td>
<td> \f72f</td>
<td><a href='/fontawesome/fa-wine-bottle' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wine-glass-empty'></i> Wine Glass Empty</td>
<td>fa-wine-glass-empty</td>
<td>fas</td>
<td> \f5ce</td>
<td><a href='/fontawesome/fa-wine-glass-empty' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wine-glass'></i> Wine Glass</td>
<td>fa-wine-glass</td>
<td>fas</td>
<td> \f4e3</td>
<td><a href='/fontawesome/fa-wine-glass' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-won-sign'></i> Won Sign</td>
<td>fa-won-sign</td>
<td>fas</td>
<td> \f159</td>
<td><a href='/fontawesome/fa-won-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-worm'></i> Worm</td>
<td>fa-worm</td>
<td>fas</td>
<td> \e599</td>
<td><a href='/fontawesome/fa-worm' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-wrench'></i> Wrench</td>
<td>fa-wrench</td>
<td>fas</td>
<td> \f0ad</td>
<td><a href='/fontawesome/fa-wrench' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-x-ray'></i> X Ray</td>
<td>fa-x-ray</td>
<td>fas</td>
<td> \f497</td>
<td><a href='/fontawesome/fa-x-ray' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-x'></i> X</td>
<td>fa-x</td>
<td>fas</td>
<td> \58</td>
<td><a href='/fontawesome/fa-x' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-xmark'></i> Xmark</td>
<td>fa-xmark</td>
<td>fas</td>
<td> \f00d</td>
<td><a href='/fontawesome/fa-xmark' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-xmarks-lines'></i> Xmarks Lines</td>
<td>fa-xmarks-lines</td>
<td>fas</td>
<td> \e59a</td>
<td><a href='/fontawesome/fa-xmarks-lines' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-y'></i> Y</td>
<td>fa-y</td>
<td>fas</td>
<td> \59</td>
<td><a href='/fontawesome/fa-y' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-yen-sign'></i> Yen Sign</td>
<td>fa-yen-sign</td>
<td>fas</td>
<td> \f157</td>
<td><a href='/fontawesome/fa-yen-sign' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-yin-yang'></i> Yin Yang</td>
<td>fa-yin-yang</td>
<td>fas</td>
<td> \f6ad</td>
<td><a href='/fontawesome/fa-yin-yang' target='_blank'>TryIt</a></td>
</tr>
<tr>
<td><i class='fas fa-z'></i> Z</td>
<td>fa-z</td>
<td>fas</td>
<td> \5a</td>
<td><a href='/fontawesome/fa-z' target='_blank'>TryIt</a></td>
</tr>

</tbody>
</table></div>




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