
+++
title     = "2016+ Ücretsiz Font Awesome Simgeleri Sınıf listesi İsimler ve CSS içerik değerleri"
subtitle  = "2016+ ücretsiz font awesome simgelerinin tam listesi"
summary   = "Bu yazı, HTML sayfalarında font awesome simgelerini kullanmak için CSS içerik değeri kodlarıyla birlikte ücretsiz font awesome simgeleri sınıf listesi adlarını ve adım adım öğreticiyi içerir."
keywords  = ["font awesome simgeler,font awesome simgeler listesi,fa simgeler listesi,simgeler"]
linktitle = "Giriş"

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


Bu yazı, font awesome simgelerini HTML sayfalarında kullanmak için CSS içerik değeri kodları ve adım adım öğretici ile birlikte eksiksiz ücretsiz font awesome simgeleri sınıf listesi adlarını içerir.

Ayrıca makalede verilen [arama kutusunu] (#search-font-awesome-icons) kullanarak font awesome simgelerini arayabilir ve bulabilirsiniz.

Sayfayı yer imlerine eklemek için `Ctrl + D` adresini tıklayın.

**En son font awesome 6.2.0 sürümünde 2016 ücretsiz simge bulunmaktadır**.

Önceki font awesome 5.14 sürümünde yaklaşık 1598 ücretsiz simgemiz vardı.

Simge stiline bağlı olarak, bu ücretsiz font awesome simgeleri üç kategoriye ayrılmıştır 

1. font awesome katı simgeler
2. font awesome normal simgeler
3. font awesome marka simgeleri

 font awesome ikonları css dosyasını <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">indirip</a> kendi sunucunuzdan servis edebiliriz Veya genel CDN'lerden servis edebiliriz.

{{% alert note %}}
sAyrıca PDF formatında font awesome simgelerinin tam listesini içeren bir [ücretsiz e-kitap] (#download-font-awesome-icons-list-pdf) oluşturdum.
{{% /alert%}}

{{% toc %}}

## font awesome nedir?

1. font awesome cSS ve LESS tabanlı web'in en popüler yazı tipi ve simge araç setidir.
2. font awesome dave Gandy tarafından oluşturulmuştur.
3. font awesome 2012'de github'ın en popüler yeni açık kaynak projesiydi ve şu anda genel olarak en iyi 10 projeden biri.
4. Font Awesome şu anda 47 milyon web sitesinde yayında ve dünyadaki web geliştiricilerinin yarısı font awesome simgelerini kullanıyor.
5. Font Awesome, web sitelerimize vektör simgeleri ve sosyal logolar eklemeyi kolaylaştırır.

## font awesome simgeleri nasıl kullanılır?

Web uygulamalarımızda font awesome simgelerini kullanmanın iki yolu vardır.

1. CSS sınıf adlarını kullanma
2. CSS içerik değerlerini kullanma
3. SVG Simgelerini Kullanma

Öncelikle html dosyasının head bölümüne font awesome icons css dosyasını eklememiz gerekiyor.

## CSS sınıf adlarını kullanarak font awesome simgelerini görüntüleyin 

 font awesome simgelerini görüntülemenin en yaygın yolu sınıf adlarını kullanmaktır.

Her simge için bir sınıf adı önceden tanımlanmıştır, sadece `fa-` adresini simge adına sınıf olarak eklememiz gerekir.

font awesome simgeler italik etiketi kullanır, örn, `<i></i>` simgeleri görüntülemek için 

Bunu kullanmanın arkasındaki neden `<i>` etiketi simge olarak 

1. Kısa
2. `I` simge standı (HTML dünyasında değil ama)

 font awesome simgelerini css sınıf adlarını kullanarak görüntülemek için adımları izleyin.

1. Bir simge etiketi ekleyin.
2. Sınıf niteliğine `fa` ile ön eklenmiş simge adı ekleyin.
3. Ek olarak Stil sınıfı eklemeliyiz. yani, düz veya normal veya marka

Öncelikle html dosyasının head bölümüne font awesome ikonları css'sini aşağıda gösterildiği gibi ekleyeceğiz

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Cloudfare font awesome simgeleri cdn bağlantısını kullanıyorum.

Resmi font awesome CDN kullanmak için. font awesome CDN](/fontawesome/cdn) makalesini inceleyin.

Şimdi `facebook` font awesome simgesini görüntülemek için aşağıdaki html kodunu kullanın.

```
<i class="fab fa-facebook"></i>
```
Facebook simgesi marka simgelerinin bir parçasıdır, bu yüzden ek sınıf adı olarak `fab` ekledim.

 font awesome katı simgelerini kullanmak için sınıf adını şu şekilde ekleyin `fas`

Örneğin `barcode` simgesini görüntülemek için aşağıdaki html kodunu kullanın

```
<i class="fas fa-barcode"></i>
```
`bookmark` simgesi normal simgelerin bir parçasıysa, sınıf adını `far`

```
<i class="far fa-bookmark"></i>
```

Angular uygulamalarında font awesome simgelerini kullanmak için makaleyi inceleyin

[Angular Uygulamalarında Font Awesome İkonları Nasıl Kullanılır]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## CSS içerik değerlerini kullanarak font awesome simgelerini görüntüleyin

Yukarıdaki yaklaşım, simge sınıfı adlarımızı değiştirmemizi gerektirir.

Projeniz yeniyse yukarıdaki yaklaşımı takip edebiliriz 

Ancak mevcut bir proje ise, simge sınıfı adını değiştirmek çok zordur.

Bu durumda font awesome simgelerini CSS içerik değerlerini kullanarak görüntüleyebiliriz.

Bunları görüntülemek için `::before` veya `::after` CSS Pseudo-elements element özelliklerini kullanabiliriz.

Örneğin `user` simgesini görüntülemek için aşağıdaki HTML kodunu kullanmış olabiliriz.

```
<li>
<span class="user"></span> Login
</li>
``` 

Ancak resmi font awesome kullanıcı simge adımız `fa-user`.

Simgeyi görüntülemek için, `.user` sınıfı için CSS içerik kodu özelliğini `user` simgesinin unicode değeri olan `\f007` olarak ekleyin.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

CSS içerik kodunun yanı sıra `font` stilini de eklememiz gerekiyor.

Bunun için font awesome ön tanımlı CSS özel özelliklerini kullanabiliriz.

Katı simgeler için `var(--fa-font-solid)`

Normal simgeler için `var(--fa-font-regular)`

Marka simgeleri için `var(--fa-font-regular)`

Buna ek olarak, birkaç yaygın CSS özelliğini tanımlayan özel bir sınıf ekleyebiliriz.

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
Bu kadar 

 font awesome 5 sürümünde özel css özellikleri yoktur 

Bu yüzden `font-family` ve `font-weight` css özelliklerini eklememiz gerekiyor.

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

`font-family` ve `font-weight` adresleri normal, düz ve marka simgeleri gibi simgenin stiline bağlı olarak her simge için farklı olabilir.

[ font awesome Simgelerini CSS İçerik Kodu Olarak Kullanın](/fontawesome/csscontentcode)

SVG'leri kullanarak font awesome simgelerini görüntülemek için aşağıdaki makaleye bakın.

[Font Awesome SVG Simgeleri Listesi, Kullanımı, CSS ve İndirme](/fontawesome/svg/)

## Font Awesome Simgelerini Ara 

İşte ücretsiz font awesome simgeleri hile sayfasının tam listesi.

Aşağıdaki arama kutusuna simge adını yazın ve sınıf adını ve stil veya CSS içerik kodunu kopyalayın.

Simgeler aşağıdaki tabloda filtrelenecektir.

Ve html kodunu kopyalamak için simgeye tıklayın.

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