+++
title    ="Font Awesome CDNの使い方"
subtitle ="Font awesome Icons CDNリスト"
summary  ="このチュートリアルでは、font awesome アイコンをfont awesome cdn から提供して使用する方法を学びます。"
keywords =["font awesome アイコン,font awesome アイコンCDN"]。
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

このチュートリアルでは、font awesome のアイコンをfont awesome cdn から提供して使用する方法について学びます。

CDN(Content delivery Network)を使用することは、font awesome アイコンの css や js ファイルを独自のサーバーからホスティングするのではなく、提供するための最良の方法です。

{{%toc%}}

##font awesome CDN を利用するための手順

1.font awesome アイコン公式サイトを開きます。

2.この[リンク](https://fontawesome.com/start)に従ってあなたの電子メールを入力することによって、固有の埋め込みコードを取得します。
3.その後、font awesome から、Font Awesome CDN の埋め込みコードと、当サイトにアイコンを追加するための手順が記載されたメールが送信されます。
4.サンプルJavaScriptfont awesome CDNリンクは以下の形式になります。`https://use.fontawesome.com/a34asdfsd.js`.
5.メールで受け取った埋め込みコードをコピーして、HTMLの `<head>`タグに記述してください。 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


以下は、font awesome CDNを利用したサンプルWebページです。

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

また、font awesome CDNのサイトに登録することで、好みの設定を管理することができます。

##font awesome CDNを利用するメリット

1.より高速なサーバーから、font awesome アイコンを提供することができます。
2. font awesome CDNサーバーは常に稼動しています。
3.そして、ファイルは最も近いCDNサーバーから提供されます。
4.font awesome pro アイコンへのアップグレードは、私たちの側でコードを変更することなく、すぐに行うことができます。
5.私たちは、異なるWebサイトの複数の埋め込みコードを作成することができます。
6.Font Awesome CDN は、アイコンを非同期で読み込むことができ、サイトパフォーマンスをさらに向上させます。

font awesome CDN を使用するもう一つの大きな利点は、アイコンのアクセシビリティを自動化することができることです。

Font Awesome CDN の自動アクセシビリティ機能は、視覚や聴覚に障害のある人々を支援します。

例えば、次のような例を考えてみましょう。

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
上記の例では、送信ボタンの内部で、font awesome のアイコンを使用しています。しかし、スクリーン・リーダーを使用してウェブサイトにアクセスする視覚障害者のために、このアイコンを表示する必要はありません。

そこで、font awesome CDNは自動的にアイコンに`aria-hidden=true` 属性を追加します。

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

##font awesome 5 CDN. 

上記のfont awesome 公式 CDN とは別に、cdnjs, maxcdn, jsdelivr などのコンテンツ配信ネットワークを利用することで、無料版のfont awesome アイコンを利用することができます。


## Font awesome CDN by cdn js 

最新のfont awesome 5 バージョン以上では、cdnjs による以下のfont awesome CDN CSS ファイルリンクをご利用ください。

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

Javascript版font awesome アイコンは、cdnjsさんの下記のCDNリンクをご利用ください。

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

最新のfontawesomeのCDNバージョンについては、cloudflareによって以下のcdnjsのリンクを参照してください。

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN links by jsdelivr 

font awesome アイコン CSS ファイルは、以下の jsdelivr CDN リンクを使用して配信されます。

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
Font awesome CDN javascriptファイルへのリンクは、以下をご利用ください。
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

最新の jsdelivr fontawesome CDN へのリンクはこちらです。

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDNリンク

font awesome 4.7 のような以前のバージョンでは、Bootstap CDN リンクを使用することができます。

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


