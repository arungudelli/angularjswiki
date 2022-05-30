+++
title    ="Cara menggunakan CDN Font Awesome"
subtitle ="Daftar CDN Font awesome Icons"
summary  ="Dalam tutorial ini kita akan belajar bagaimana menggunakan font awesome icons dengan menayangkannya dari font awesome cdn."
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

Dalam tutorial ini kita akan belajar bagaimana menggunakan ikon font awesome dengan menyajikannya dari font awesome cdn.

Menggunakan CDN (Content delivery Network) adalah cara terbaik untuk menyajikan file css atau js ikon font awesome, alih-alih menghostingnya dari server kita sendiri.

{{%toc%}}

## Langkah-langkah untuk menggunakan font awesome CDN

1. Buka situs web resmi font awesome icon.

2. Dapatkan kode embed unik dengan memasukkan email Anda dengan mengikuti [link] ini(https://fontawesome.com/start).
3. Kemudian font awesome akan mengirimkan email berisi kode embed CDN Font Awesome beserta instruksi untuk menambahkan ikon di website kita.
4. Contoh JavaScript font awesome CDN link akan berada dalam format di bawah ini.`https://use.fontawesome.com/a34asdfsd.js`.
5. Salin kode embed yang Anda terima melalui email dan letakkan di tag HTML Anda `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Berikut adalah contoh halaman web yang menggunakan font awesome CDN.

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

Selanjutnya kita dapat mendaftar di situs web font awesome CDN untuk mengelola preferensi kita.

## Keuntungan menggunakan font awesome CDN

1. Server yang lebih cepat di mana kita dapat melayani font awesome ikon.
2. font awesome Server CDN selalu aktif dan berjalan.
3. Dan file-file akan disajikan dari server CDN terdekat.
4. Kita dapat dengan cepat meng-upgrade ke font awesome pro icons tanpa perubahan kode dari pihak kami.
5. Kami dapat membuat beberapa kode embed untuk situs web yang berbeda.
6. Font Awesome CDN dapat memuat ikon Anda secara asinkron sehingga meningkatkan performa situs.

Satu lagi keuntungan besar menggunakan font awesome CDN adalah kita dapat mengotomatisasi aksesibilitas ikon kita.

Fitur aksesibilitas otomatis Font Awesome CDN membantu orang-orang dengan gangguan penglihatan dan pendengaran.

Sebagai contoh perhatikan contoh di bawah ini

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Pada contoh di atas, di dalam tombol submit kita menggunakan ikon font awesome. Tetapi untuk orang dengan gangguan penglihatan yang menggunakan pembaca layar untuk mengakses situs web, tidak perlu menampilkan ikon ini.

Jadi font awesome CDN akan secara otomatis menambahkan atribut `aria-hidden=true` ke ikon.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Selain dari font awesome CDN resmi di atas, kita dapat menggunakan versi gratis dari ikon font awesome dengan menggunakan jaringan pengiriman konten seperti cdnjs, maxcdn dan jsdelivr.


## Font CDN yang mengagumkan oleh cdn js 

Untuk versi font awesome 5 terbaru dan di atasnya gunakan tautan file CSS font awesome CDN oleh cdnjs di bawah ini.

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

Jika Anda ingin menggunakan ikon font awesome versi Javascript, gunakan tautan CDN di bawah ini oleh cdnjs.

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

Untuk versi CDN fontawesome terbaru, lihat tautan cdnjs di bawah ini oleh cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Tautan CDN font awesome oleh jsdelivr 

Sajikan file CSS ikon font awesome menggunakan tautan CDN jsdelivr di bawah ini.

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
Untuk tautan file javascript CDN Font awesome menggunakan tautan di bawah ini.
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

Berikut ini adalah tautan ke CDN fontawesome jsdelivr terbaru.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Tautan CDN Bootstrap Font awesome

Untuk versi sebelumnya seperti font awesome 4.7 kita bisa menggunakan link cdn bootstap

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


