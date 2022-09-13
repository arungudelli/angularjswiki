
+++
title     = "2016+ Free Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Vollständige Liste der 2016+ kostenlosen font awesome Icons"
summary   = "Dieser Beitrag enthält kostenlose font awesome Icons Klasse Liste Namen mit ihren CSS-Inhalt Wert Codes &amp; Schritt für Schritt Anleitung zur Verwendung font awesome Icons in HTML-Seiten."
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "Einführung"

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


Dieser Beitrag enthält komplette kostenlose font awesome Icons Klasse Liste Namen mit ihren CSS-Inhalt Wert Codes &amp; Schritt für Schritt Anleitung zur Verwendung font awesome Icons in HTML-Seiten.

Und auch Sie können suchen und finden font awesome Icons mit dem [Suchfeld](#search-font-awesome-icons), die in dem Artikel.

Klicken Sie auf `Ctrl + D`, um die Seite als Lesezeichen zu speichern.

**In der neuesten Version font awesome 6.2.0 gibt es 2016 kostenlose Icons**.

In der vorherigen Version font awesome 5.14 haben wir etwa 1598 freie Icons.

Je nach Stil der Icons sind diese kostenlosen font awesome Icons in drei Kategorien unterteilt 

1. font awesome vollton-Symbole
2. font awesome normale Icons
3. font awesome markensymbole

Wir können font awesome icons css-Datei <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">herunterladen</a> und sie von Ihrem eigenen Server bereitstellen oder wir können sie von öffentlichen CDNs bereitstellen.

{{% alert note %}}
Außerdem habe ich ein [kostenloses ebook](#download-font-awesome-icons-list-pdf) erstellt, das eine vollständige Liste von font awesome icons im PDF-Format enthält.
{{% /alert%}}

{{% toc %}}

## Was ist font awesome?

1. font awesome ist das beliebteste Schrift- und Icon-Toolkit im Web, das auf CSS und LESS basiert.
2. font awesome wurde von Dave Gandy entwickelt.
3. font awesome war 2012 das beliebteste neue Open-Source-Projekt auf github und ist derzeit eines der Top-10-Projekte insgesamt.
4. Font Awesome ist derzeit auf 47 Millionen Websites im Einsatz und die Hälfte aller Webentwickler weltweit verwendet font awesome Icons.
5. Font Awesome macht es einfach, Vektorsymbole und soziale Logos zu unseren Websites hinzuzufügen.

## Wie verwendet man font awesome icons?

Es gibt zwei Möglichkeiten, wie wir font awesome Icons in unseren Webanwendungen verwenden können.

1. Verwendung von CSS-Klassennamen
2. Verwendung von CSS-Inhaltswerten
3. SVG-Symbole verwenden

Zuerst müssen wir die font awesome icons css-Datei in den Head-Bereich der HTML-Datei einfügen.

## font awesome Icons mit CSS-Klassennamen anzeigen 

Die gebräuchlichste Art der Anzeige von font awesome Icons ist die Verwendung ihrer Klassennamen.

Für jedes einzelne Symbol ist ein Klassenname vordefiniert, wir müssen nur die `fa-` an den Symbolnamen als Klasse anhängen.

font awesome icons verwendet den kursiven Tag d.h., `<i></i>` um die Icons anzuzeigen 

Der Grund für die Verwendung dieses `<i>` tag als Symbol ist 

1. Es ist die Abkürzung
2. `I` stand des Icons (allerdings nicht in der HTML-Welt)

Um die Icons von font awesome mit Hilfe von CSS-Klassennamen anzuzeigen, folgen Sie den Schritten.

1. Fügen Sie einen Icon-Tag hinzu.
2. Fügen Sie dem Klassenattribut den Symbolnamen mit dem Präfix `fa` hinzu.
3. Zusätzlich müssen wir die Stilklasse hinzufügen, d.h. solid oder regular oder brand

Zuerst fügen wir die font awesome icons css in den head-Bereich der html-Datei ein, wie unten gezeigt

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Ich verwende cloudfare font awesome icons cdn link.

Um das offizielle font awesome CDN zu verwenden. Gehen Sie durch den [font awesome CDN](/fontawesome/cdn) Artikel.

Um das Symbol `facebook` font awesome anzuzeigen, verwenden Sie den folgenden HTML-Code.

```
<i class="fab fa-facebook"></i>
```
Das Facebook-Symbol ist Teil der Markensymbole, daher habe ich `fab` als zusätzlichen Klassennamen hinzugefügt.

Um font awesome solid icons zu verwenden, fügen Sie den Klassennamen als `fas`

Um zum Beispiel das Symbol `barcode` anzuzeigen, verwenden Sie den folgenden HTML-Code

```
<i class="fas fa-barcode"></i>
```
`bookmark` icon ist ein Teil der regulären Icons, fügen Sie den Klassennamen als `far`

```
<i class="far fa-bookmark"></i>
```

Um font awesome Icons in Angular-Anwendungen zu verwenden, lesen Sie bitte den Artikel

[How To Use Font Awesome icons in Angular Applications]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Anzeige von font awesome Icons mit CSS-Inhaltswerten

Für den obigen Ansatz müssen wir die Namen unserer Icon-Klassen ändern.

Wenn Ihr Projekt neu ist, können wir den obigen Ansatz verfolgen 

Wenn es sich aber um ein bestehendes Projekt handelt, ist es sehr schwierig, die Namen der Symbolklassen zu ändern.

In diesem Fall können wir die Symbole von font awesome mithilfe ihrer CSS-Inhaltswerte anzeigen.

Wir können die CSS-Pseudo-Element-Eigenschaften `::before` oder `::after` verwenden, um sie anzuzeigen.

Um zum Beispiel das Symbol `user` anzuzeigen, können wir den folgenden HTML-Code verwenden.

```
<li>
<span class="user"></span> Login
</li>
``` 

Aber unser offizielles font awesome Benutzersymbol heißt `fa-user`.

Um das Symbol anzuzeigen, fügen Sie für die Klasse `.user` die CSS-Content-Code-Eigenschaft `\f007` hinzu, die dem Unicode-Wert für das Symbol `user` entspricht.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Neben dem CSS-Inhaltscode müssen wir auch den Stil `font` hinzufügen.

Dafür können wir font awesome vordefinierte benutzerdefinierte CSS-Eigenschaften verwenden.

Für einfarbige Icons verwenden Sie `var(--fa-font-solid)`

Für regelmäßige Icons verwenden Sie `var(--fa-font-regular)`

Für Markensymbole verwenden Sie `var(--fa-font-regular)`

Darüber hinaus können wir eine benutzerdefinierte Klasse hinzufügen, die einige allgemeine CSS-Eigenschaften definiert.

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
Das war's 

In der Version font awesome 5 gibt es keine benutzerdefinierten css-Eigenschaften 

Wir müssen also `font-family` und `font-weight` css-Eigenschaften hinzufügen.

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

`font-family` und `font-weight` können für jedes Symbol unterschiedlich sein, je nach dem Stil des Symbols, wie z. B. reguläre, solide und Markensymbole.

[ font awesome Icons als CSS Content Code verwenden](/fontawesome/csscontentcode)

Um font awesome Icons mit SVG's anzuzeigen, lesen Sie bitte den folgenden Artikel.

[Font Awesome SVG Icons Liste, Verwendung, CSS &amp; Download](/fontawesome/svg/)

## Suche Font Awesome Icons 

Hier ist die komplette Liste der kostenlosen font awesome Icons Spickzettel.

Geben Sie den Namen des Icons in das unten stehende Suchfeld ein und kopieren Sie den Klassennamen und den Stil oder CSS-Inhaltscode.

Die Icons werden in der untenstehenden Tabelle gefiltert.

Klicken Sie auf das Symbol, um den HTML-Code zu kopieren.

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