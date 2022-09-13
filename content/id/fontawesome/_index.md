
+++
title     = "2016+ Daftar Nama Kelas Ikon Font Awesome Gratis &amp; nilai konten CSS mereka"
subtitle  = "Daftar lengkap ikon font awesome gratis 2016+"
summary   = "Postingan ini berisi nama daftar kelas ikon font awesome gratis dengan kode nilai konten CSS mereka &amp; tutorial langkah demi langkah untuk menggunakan ikon font awesome di halaman HTML."
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "Pendahuluan"

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


Posting ini berisi nama daftar kelas ikon font awesome gratis lengkap dengan kode nilai konten CSS mereka &amp; tutorial langkah demi langkah untuk menggunakan ikon font awesome di halaman HTML.

Dan juga Anda dapat mencari dan menemukan ikon font awesome menggunakan [kotak pencarian] (#search-font-awesome-icons) yang disediakan dalam artikel.

Klik `Ctrl + D` untuk menandai halaman.

**Dalam versi font awesome 6.2.0 terbaru, ada 2016 ikon gratis**.

Dalam versi font awesome 5.14 sebelumnya, kami memiliki sekitar 1598 ikon gratis.

Tergantung pada gaya ikon, ikon font awesome gratis ini dibagi menjadi tiga kategori 

1. font awesome ikon padat
2. font awesome ikon biasa
3. font awesome ikon merek

Kami dapat <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">mengunduh</a> file font awesome ikon css dan menyajikannya dari server Anda sendiri Atau kami dapat menyajikannya dari CDN publik.

{{% alert note %}}
Dan juga saya telah membuat [ebook gratis](#download-font-awesome-icons-list-pdf) yang berisi daftar lengkap ikon font awesome dalam format PDF.
{{% /alert%}}

{{% toc %}}

## Apa itu font awesome?

1. font awesome adalah toolkit font dan ikon paling populer di web berdasarkan CSS dan LESS.
2. font awesome dibuat oleh Dave Gandy.
3. font awesome adalah proyek open source baru yang paling populer di github pada tahun 2012 dan saat ini merupakan salah satu dari 10 proyek teratas secara keseluruhan.
4. Font Awesome saat ini sudah ada di 47 juta situs web dan setengah dari pengembang web di dunia menggunakan ikon font awesome.
5. Font Awesome memudahkan untuk menambahkan ikon vektor dan logo sosial ke situs web kita.

## Bagaimana cara menggunakan ikon font awesome?

Ada dua cara yang bisa kita gunakan untuk menggunakan ikon font awesome di aplikasi web kita.

1. Menggunakan nama kelas CSS
2. Menggunakan nilai konten CSS
3. Menggunakan Ikon SVG

Pertama kita perlu menambahkan file css font awesome icons di bagian head file html.

## Menampilkan ikon font awesome menggunakan nama kelas CSS 

Cara paling umum untuk menampilkan ikon font awesome adalah menggunakan nama kelasnya.

Untuk setiap ikon, nama kelas sudah ditentukan sebelumnya, hanya saja kita perlu menambahkan `fa-` ke nama ikon sebagai kelas.

font awesome ikon menggunakan tag miring yaitu , `<i></i>` untuk menampilkan ikon 

Alasan di balik penggunaan tag `<i>` sebagai ikon adalah 

1. Ini adalah kependekan
2. `I` berdiri dari Ikon (tidak dalam dunia HTML sekalipun)

Untuk menampilkan ikon font awesome menggunakan nama kelas css ikuti langkah-langkahnya.

1. Tambahkan tag ikon.
2. Tambahkan nama ikon yang diawali dengan `fa` ke atribut kelas.
3. Selain itu kita harus menambahkan kelas Style. yaitu, solid atau regular atau brand

Pertama kita akan menambahkan css ikon font awesome di bagian head file html seperti yang ditunjukkan di bawah ini

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Saya menggunakan tautan cdn ikon cloudfare font awesome.

Untuk menggunakan font awesome CDN resmi. Pergi melalui artikel [font awesome CDN](/fontawesome/cdn).

Sekarang untuk menampilkan ikon `facebook` font awesome , gunakan kode html di bawah ini.

```
<i class="fab fa-facebook"></i>
```
Ikon Facebook adalah bagian dari ikon merek, jadi saya telah menambahkan `fab` sebagai nama kelas tambahan.

Untuk menggunakan font awesome ikon solid tambahkan nama kelas sebagai `fas`

Sebagai contoh untuk menampilkan ikon `barcode` gunakan kode html berikut ini

```
<i class="fas fa-barcode"></i>
```
`bookmark` icon adalah sebagai bagian dari icon biasa, tambahkan nama kelas sebagai `far`

```
<i class="far fa-bookmark"></i>
```

Untuk menggunakan ikon font awesome dalam aplikasi Angular, baca artikel

[Cara Menggunakan ikon Font Awesome di Aplikasi Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Menampilkan ikon font awesome menggunakan nilai konten CSS

Pendekatan di atas mengharuskan kita untuk mengubah nama kelas ikon kita.

Jika proyek anda masih baru maka kita dapat mengikuti pendekatan di atas 

Tetapi jika itu adalah proyek yang sudah ada, sangat sulit untuk mengubah nama kelas ikon.

Dalam hal ini kita dapat menampilkan ikon font awesome menggunakan nilai konten CSS mereka.

Kita dapat menggunakan fitur elemen CSS Pseudo-elements `::before` atau `::after` untuk menampilkannya.

Misalnya untuk menampilkan ikon `user`, Kita mungkin telah menggunakan kode HTML di bawah ini.

```
<li>
<span class="user"></span> Login
</li>
``` 

Tetapi nama ikon pengguna font awesome resmi kami adalah `fa-user`.

Jadi untuk menampilkan ikon, untuk kelas `.user` tambahkan properti kode konten CSS sebagai `\f007`, yang merupakan nilai unicode untuk ikon `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Bersamaan dengan kode konten CSS, Kita perlu menambahkan gaya `font` juga.

Kita dapat menggunakan font awesome properti kustom CSS yang telah ditentukan sebelumnya untuk itu.

Untuk ikon solid, gunakan `var(--fa-font-solid)`

Untuk ikon biasa gunakan `var(--fa-font-regular)`

Untuk ikon Merek gunakan `var(--fa-font-regular)`

Selain itu kita dapat menambahkan kelas khusus yang mendefinisikan beberapa properti CSS umum.

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
Itu saja 

Dalam versi font awesome 5 tidak ada properti css khusus 

Jadi kita perlu menambahkan `font-family` dan `font-weight` css properties.

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

`font-family` dan `font-weight` mungkin berbeda untuk setiap ikon tergantung pada gaya ikon seperti ikon biasa, solid dan merek.

[Gunakan Ikon font awesome sebagai Kode Konten CSS](/fontawesome/csscontentcode)

Untuk Menampilkan ikon font awesome menggunakan SVG, pikirkan artikel di bawah ini.

[Daftar Ikon SVG Font Awesome, Penggunaan, CSS &amp; Unduh](/fontawesome/svg/)

## Cari Ikon Font Awesome 

Berikut adalah daftar lengkap lembar contekan ikon font awesome gratis.

Ketik nama ikon di kotak pencarian di bawah ini dan salin nama kelas dan gaya atau kode konten CSS.

Ikon-ikon tersebut akan disaring pada tabel di bawah ini.

Dan Klik pada ikon untuk menyalin kode html.

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