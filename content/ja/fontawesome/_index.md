
+++
title     = "2016+ Free Font Awesome Icons クラスリスト 名前とそのCSSコンテンツ値"
subtitle  = "2016+の無料font awesome アイコンの完全なリスト"
summary   = "この記事には、無料のfont awesome アイコン クラスリスト名とそのCSSコンテンツ値コード＆HTMLページでfont awesome アイコンを使用するためのステップバイステップのチュートリアルが含まれています。"
keywords  = ["font awesome アイコン,font awesome アイコンリスト, fa アイコンリスト, アイコン"]
linktitle = "はじめに"

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


この記事は、HTMLページでfont awesome アイコンを使用するために、彼らのCSSコンテンツ値コード＆ステップバイステップのチュートリアルと完全無料font awesome アイコンクラスリストの名前を含んでいます。

また、記事中にある[検索ボックス](#search-font-awesome-icons)を使ってfont awesome アイコンを検索して見つけることができます。

`Ctrl + D` をクリックして、ページをブックマークしてください。

**最新のfont awesome 6.2.0バージョンでは、2016個のフリーアイコンが用意されています**。

以前のfont awesome 5.14バージョンでは、約1598個のフリーアイコンがあります。

アイコンのスタイルによって、これらの無料font awesome アイコンは、3つのカテゴリに分かれています。 

1. font awesome ソリッドアイコン
2. font awesome レギュラーアイコン
3. font awesome ブランドアイコン

font awesome アイコン CSS ファイルを<a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">ダウンロード</a>し、お客様のサーバーから提供することもできますし、公開されている CDN から提供することもできます。

{{% alert note %}}
のようになります。
また、font awesome アイコンの完全なリストを PDF 形式で含む [無料の電子書籍](#download-font-awesome-icons-list-pdf) を作成しました。
{{% /alert%}}

{{% toc %}}

##font awesome とは何ですか?

1. font awesome は、CSS と LESS をベースとした、ウェブで最も人気のあるフォントとアイコンのツールキットです。
2. font awesome は、Dave Gandy によって作成されました。
3. font awesome は、2012年にgithubで最も人気のある新しいオープンソースプロジェクトであり、現在、全体のトップ10プロジェクトの一つです。
4.Font Awesomeは現在4700万ものウェブサイトで使用されており、世界のウェブ開発者の半数がfont awesome のアイコンを使用しています。
5.Font Awesomeを使えば、ベクターアイコンやソーシャルロゴを簡単にウェブサイトに追加することができます。

## How to usefont awesome icons?

ウェブアプリケーションでfont awesome のアイコンを使用するには、2つの方法があります。

1.CSSのクラス名を利用する
2.CSSのコンテンツ値を使用する
3.SVG アイコンの使用

まず、htmlファイルのheadセクションにfont awesome iconsのcssファイルを追加する必要があります。

##font awesome アイコンをCSSのクラス名で表示する 

font awesome のアイコンを表示する最も一般的な方法は、そのクラス名を使用することです。

各アイコンにはあらかじめクラス名が定義されており、アイコンの名前にクラス名として`fa-` を追加するだけです。

font awesome アイコンの表示には、italicタグ、すなわち, `<i></i>`を使用してアイコンを表示します。 

このタグをアイコンとして使用する理由は `<i>`タグをアイコンとして使う理由は 

1.アイコンの略
2. `I` アイコンの略（HTMLの世界ではありえないけど）

font awesome のアイコンをCSSのクラス名で表示するには、次のようにします。

1.iconタグを追加します。
2.class属性の先頭に`fa` をつけたアイコン名を追加する。
3.さらに、Styleクラスを追加する。

まず、htmlファイルのheadセクションに、font awesome アイコンのCSSを以下のように追加します。

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
私はcloudfarefont awesome icons cdn linkを使用しています。

公式のfont awesome CDN を使用する場合。font awesome CDN](/fontawesome/cdn) の記事を参照してください。

`facebook` font awesome アイコンを表示するには、以下のhtmlコードを使用します。

```
<i class="fab fa-facebook"></i>
```
Facebookのアイコンはブランドアイコンの一部なので、クラス名として`fab` を追加しています。

font awesome のソリッドアイコンを使用するには、クラス名を次のように追加します。`fas`

例えば、`barcode` のアイコンを表示するには、次のようなhtmlコードを使用します。

```
<i class="fas fa-barcode"></i>
```
`bookmark` アイコンは通常のアイコンの一部であり、クラス名を`far`

```
<i class="far fa-bookmark"></i>
```

Angularアプリケーションでfont awesome アイコンを使用するには、以下の記事を参照してください。

[AngularアプリケーションでFont Awesomeアイコンを使用する方法] を参照してください。
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## CSS content values を使ってfont awesome アイコンを表示する

上記の方法では、アイコンのクラス名を変更する必要があります。

もし、あなたのプロジェクトが新しいものであるなら、上記の方法を取ることができます。 

しかし、既存のプロジェクトであれば、アイコンクラスネームを変更することは非常に困難です。

この場合、font awesome のアイコンをCSSのコンテンツ値を使って表示することができます。

CSS Pseudo-elements elements features`::before` or`::after` を使って表示させることができます。

例えば、`user` のアイコンを表示する場合、以下のようなHTMLコードを使用します。

```
<li>
<span class="user"></span> Login
</li>
```

しかし、私たちの公式のfont awesome ユーザーアイコン名は`fa-user` です。

そこで、アイコンを表示するために、`.user` クラスに CSS content code プロパティを`\f007` として追加します。これは`user` アイコンの unicode 値です。

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

CSSコンテンツ・コードと一緒に、`font` スタイルも追加する必要があります。

そのためには、font awesome 定義済みの CSS カスタムプロパティを使用します。

ソリッドアイコンには`var(--fa-font-solid)`

通常のアイコンの場合`var(--fa-font-regular)`

ブランドアイコン`var(--fa-font-regular)`

さらに、いくつかの一般的なCSSプロパティを定義するカスタムクラスを追加することができます。

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
以上です。 

font awesome 5 バージョンでは、カスタム css プロパティはありません。 

そこで、`font-family` と`font-weight` のcssプロパティを追加する必要があります。

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

`font-family` と`font-weight` は、通常のアイコン、ソリッドアイコン、ブランドアイコンなど、アイコンのスタイルに応じてそれぞれ異なるかもしれません。

[font awesome アイコンをCSSコンテンツコードとして使用する](/fontawesome/csscontentcode)

font awesome アイコンをSVGで表示するには、以下の記事を参照してください。

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Font Awesome Icons を検索する 

font awesome アイコンチートシートの全リストはこちらです。

下の検索ボックスにアイコン名を入力し、クラス名とスタイルまたはCSSコンテンツコードをコピーしてください。

アイコンは下の表でフィルタリングされます。

また、アイコンをクリックすると、HTMLコードがコピーされます。

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