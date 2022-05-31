+++
title    ="Font Awesome CDN nasıl kullanılır"
subtitle ="Yazı tipi harika Simgeler CDN listesi"
summary  ="Bu eğitimde font awesome simgelerini font awesome cdn adresinden sunarak nasıl kullanacağımızı öğreneceğiz."
keywords =["font awesome ikonları,font awesome ikonları CDN"]
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

Bu eğitimde font awesome simgelerini font awesome cdn adresinden sunarak nasıl kullanacağımızı öğreneceğiz.

CDN (İçerik dağıtım Ağı) kullanmak, font awesome icon css veya js dosyalarını kendi sunucularımızda barındırmak yerine sunmanın en iyi yoludur.

{{%toc%}}

## font awesome CDN'i kullanma adımları

1. Resmi font awesome simge web sitesini açın.

2. Bu [linki] (https://fontawesome.com/start) takip ederek e-postanızı girerek benzersiz bir yerleştirme kodu alın.
3. Ardından font awesome, Font Awesome CDN yerleştirme koduyla birlikte web sitemize simge ekleme talimatlarını içeren bir e-posta gönderir.
4. Örnek JavaScript font awesome CDN bağlantısı aşağıdaki formatta olacaktır.`https://use.fontawesome.com/a34asdfsd.js`.
5. E-posta yoluyla aldığınız yerleştirme kodunu kopyalayın ve HTML'nize yerleştirin `<head>` etiket 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


İşte font awesome CDN kullanan örnek web sayfası.

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

Ayrıca tercihlerimizi yönetmek için font awesome CDN web sitesine kayıt olabiliriz.

## font awesome CDN kullanmanın avantajları

1. font awesome ikonlarını sunabileceğimiz daha hızlı bir sunucu.
2. font awesome CDN sunucuları her zaman çalışır durumda.
3. Ve dosyalar en yakın CDN sunucusundan sunulacaktır.
4. Bizim tarafımızdan herhangi bir kod değişikliği olmadan font awesome pro simgelerine hızlı bir şekilde yükseltebiliriz.
5. Farklı web siteleri için birden fazla gömme kodu oluşturabiliriz.
6. Font Awesome CDN, simgelerinizi eşzamansız olarak yükleyerek Site Performansını daha da artırabilir.

 font awesome CDN kullanmanın bir diğer büyük avantajı da ikonlarımızın erişilebilirliğini otomatikleştirebilmemizdir.

Font Awesome CDN'in otomatik erişilebilirlik özelliği, görme ve işitme engelli kişilere yardımcı olur.

Örneğin aşağıdaki örneği ele alalım

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Yukarıdaki örnekte, gönder düğmesinin içinde font awesome simgesini kullanıyoruz. Ancak web sitesine erişmek için ekran okuyucu kullanan görme engelli kişiler için bu simgeleri göstermek gerekli değildir.

Böylece font awesome CDN, `aria-hidden=true` özelliğini otomatik olarak simgeye ekleyecektir.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Yukarıdaki font awesome resmi CDN dışında, cdnjs, maxcdn ve jsdelivr gibi içerik dağıtım ağlarını kullanarak font awesome simgelerinin ücretsiz sürümünü kullanabiliriz.


## Font awesome CDN by cdn js 

En son font awesome 5 sürümü ve üzeri için aşağıdaki font awesome CDN CSS dosya bağlantılarını cdnjs tarafından kullanın.

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

 font awesome simgelerinin Javascript sürümünü kullanmak istiyorsanız cdnjs tarafından sağlanan aşağıdaki CDN bağlantılarını kullanın.

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

En son fontawesome CDN sürümleri için cloudflare tarafından aşağıdaki cdnjs bağlantısına bakın.

```
https://cdnjs.com/libraries/font-awesome
```

## Yazı tipi harika CDN bağlantıları by jsdelivr 

Aşağıdaki jsdelivr CDN bağlantılarını kullanarak font awesome simgeleri CSS dosyalarını sunun.

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
Font awesome CDN javascript dosyaları için aşağıdaki bağlantıları kullanın.
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

İşte en son jsdelivr fontawesome CDN bağlantısı.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN bağlantısı

 font awesome 4.7 gibi önceki sürümler için bootstap cdn bağlantılarını kullanabiliriz

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


