+++
title    ="Jak używać Font Awesome CDN"
subtitle ="Lista Font awesome Icons CDN"
summary  ="W tym tutorialu dowiemy się, jak korzystać z ikon font awesome serwując je z font awesome cdn."
keywords =["font awesome icons,font awesome icons CDN"]
type="docs"
date="2019-07-14T01:01:05+0000"
lastmod="2021-12-14T00:00:08+0000"
prev="fontawesome"
next="csscontentcode"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
linktitle="CDN"
[menu.fontawesome]
parent="fontawesome"
weight=2
[image]
caption = "font awesome icons"
focal_point = ""
preview_only = false

+++

W tym poradniku dowiemy się, jak używać ikon font awesome, serwując je z witryny font awesome cdn.

Korzystanie z CDN (Content delivery Network) jest najlepszym sposobem na serwowanie plików css lub js ikon font awesome, zamiast hostowania ich z własnych serwerów.

{{%toc%}}

## Kroki do użycia font awesome CDN

1. Otwórz oficjalną stronę internetową font awesome icon.

2. Uzyskaj unikalny kod osadzenia, wpisując swój adres e-mail w poniższym linku [link](https://fontawesome.com/start).
3. Następnie font awesome wysyła e-mail z kodem osadzenia Font Awesome CDN wraz z instrukcjami, jak dodać ikony na naszej stronie.
4. Przykładowy link JavaScript font awesome CDN będzie w poniższym formacie.`https://use.fontawesome.com/a34asdfsd.js`.
5. Skopiuj kod embed otrzymany pocztą elektroniczną i umieść go w swoim znaczniku HTML `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Poniżej znajduje się przykładowa strona internetowa, która korzysta z sieci font awesome CDN.

```
<!doctype html>
<html>
  <head>
    ...
    <!-- font awesome CDN Url -->
    <script src="https://use.fontawesome.com/your-embed-code.js"></script> 
    <!-- TODO: Place your own Font Awesome CDN embed code received via email  -->
    ...
  </head>
  <body>
    ...
    <i class="fa fa-home"></i>
    ...
  </body>
</html>
```

Ponadto możemy zarejestrować się w witrynie font awesome CDN, aby zarządzać swoimi preferencjami.

## Zalety korzystania z font awesome CDN

1. Szybszy serwer, z którego możemy serwować ikony font awesome.
2. font awesome Serwery CDN są zawsze sprawne.
3. Pliki będą serwowane z najbliższego serwera CDN.
4. Możemy szybko uaktualnić do font awesome pro ikony bez żadnych zmian w kodzie z naszej strony.
5. Możemy utworzyć wiele kodów osadzania dla różnych stron internetowych.
6. Font Awesome CDN może załadować twoje ikony asynchronicznie, co jeszcze bardziej zwiększy wydajność strony.

Jeszcze jedną dużą zaletą korzystania z font awesome CDN jest to, że możemy zautomatyzować dostępność naszych ikon.

Funkcja automatycznej dostępności Font Awesome CDN pomaga ludziom z wadami wzroku i słuchu.

Na przykład rozważ poniższy przykład

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
W powyższym przykładzie, wewnątrz przycisku wysyłania używamy ikony font awesome. Jednak dla osób z upośledzeniem wzroku, które korzystają z czytników ekranu, nie jest wymagane wyświetlanie tej ikony.

Dlatego font awesome CDN automatycznie doda atrybut `aria-hidden=true` do ikony.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Oprócz powyższych oficjalnych CDN font awesome, możemy korzystać z darmowej wersji ikon font awesome za pomocą sieci dostarczania treści, takich jak cdnjs, maxcdn i jsdelivr.


## Font awesome CDN by cdn js 

Dla najnowszej wersji font awesome 5 i wyższej użyj poniższych linków do plików CSS font awesome CDN przez cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.min.css

```

Jeśli chcesz użyć wersji Javascript ikon font awesome użyj poniższych linków CDN autorstwa cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.min.js
```

Aby uzyskać najnowsze wersje fontawesome CDN, skorzystaj z poniższego linku cdnjs przez cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN links by jsdelivr 

Serwuj pliki CSS z ikonami font awesome używając poniższych linków CDN jsdelivr.

```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.1/css/all.min.css

```
Dla Font awesome CDN plików javascript linki użyj poniżej.
```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.min.js
```

Tutaj jest link do najnowszego jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

Dla wcześniejszych wersji jak font awesome 4.7 możemy użyć linków bootstap cdn

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


