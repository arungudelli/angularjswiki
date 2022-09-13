
+++
title     = "2016+ Icone Font Awesome gratuite Elenco dei nomi delle classi e dei loro valori di contenuto CSS"
subtitle  = "Elenco completo di icone gratuite 2016+ font awesome "
summary   = "Questo post contiene i nomi delle classi di icone gratuite di font awesome con i loro codici di valore del contenuto CSS e un tutorial passo dopo passo per utilizzare le icone di font awesome nelle pagine HTML."
keywords  = ["font awesome icone,font awesome elenco icone, fa elenco icone, icone"]
linktitle = "Introduzione"

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


Questo post contiene un elenco completo e gratuito di icone font awesome con i relativi codici CSS e un tutorial passo passo per utilizzare le icone font awesome nelle pagine HTML.

Inoltre, è possibile cercare e trovare le icone di font awesome utilizzando la [casella di ricerca] (#search-font-awesome-icons) fornita nell'articolo.

Fare clic su `Ctrl + D` per aggiungere un segnalibro alla pagina.

**Nell'ultima versione di font awesome 6.2.0 sono presenti 2016 icone gratuite**.

Nella precedente versione font awesome 5.14 sono presenti circa 1598 icone gratuite.

A seconda dello stile delle icone, queste icone gratuite di font awesome sono suddivise in tre categorie 

1. font awesome icone solide
2. font awesome icone regolari
3. font awesome icone del marchio

Possiamo <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">scaricare il</a> file css di font awesome icons e servirlo dal vostro server oppure possiamo servirlo da CDN pubblici.

{{% alert note %}}

Inoltre ho creato un [ebook gratuito] (#download-font-awesome-icons-list-pdf) che contiene l'elenco completo delle icone di font awesome in formato PDF.
{{% /alert%}}

{{% toc %}}

## Che cos'è font awesome?

1. font awesome è il toolkit di font e icone più popolare del web, basato su CSS e LESS.
2. font awesome è stato creato da Dave Gandy.
3. font awesome è stato il nuovo progetto open source più popolare di github nel 2012 e attualmente è uno dei 10 progetti più popolari in assoluto.
4. Font Awesome è attualmente presente su 47 milioni di siti web e metà degli sviluppatori web del mondo utilizza le icone di font awesome.
5. Font Awesome semplifica l'aggiunta di icone vettoriali e loghi sociali ai nostri siti web.

## Come usare le icone di font awesome?

Ci sono due modi per utilizzare le icone di font awesome nelle nostre applicazioni web.

1. Utilizzando i nomi delle classi CSS
2. Utilizzando i valori dei contenuti CSS
3. Utilizzo delle icone SVG

Per prima cosa dobbiamo aggiungere il file css font awesome icons nella sezione head del file html.

## Visualizzare le icone di font awesome usando i nomi delle classi CSS 

Il modo più comune di visualizzare le icone di font awesome è quello di utilizzare i loro nomi di classe.

Per ogni icona è predefinito un nome di classe, basta aggiungere `fa-` al nome dell'icona come classe.

font awesome icons utilizza il tag italic, cioè, `<i></i>` per visualizzare le icone 

Il motivo per cui si usa questo tag `<i>` come icona è 

1. È l'abbreviazione
2. `I` stand di Icona (non nel mondo HTML però)

Per visualizzare le icone di font awesome utilizzando i nomi delle classi css, procedere come segue.

1. Aggiungere un tag icona.
2. Aggiungere il nome dell'icona con il prefisso `fa` all'attributo class.
3. Inoltre, si deve aggiungere la classe Style, cioè solid o regular o brand

Per prima cosa aggiungiamo il css delle icone di font awesome nella sezione head del file html, come mostrato di seguito

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Sto usando il link cdn di cloudfare font awesome icons.

Per utilizzare il CDN ufficiale di font awesome. Consultare l'articolo [font awesome CDN](/fontawesome/cdn).

Ora, per visualizzare l'icona `facebook` font awesome , utilizzare il seguente codice html.

```
<i class="fab fa-facebook"></i>
```
L'icona di Facebook fa parte delle icone del marchio, quindi ho aggiunto `fab` come nome di classe aggiuntivo.

Per utilizzare le icone solide di font awesome aggiungere il nome della classe come `fas`

Per esempio, per visualizzare l'icona `barcode` utilizzare il seguente codice html

```
<i class="fas fa-barcode"></i>
```
`bookmark` l'icona fa parte delle icone regolari, aggiungere il nome della classe come `far`

```
<i class="far fa-bookmark"></i>
```

Per utilizzare le icone di font awesome nelle applicazioni Angular, leggere l'articolo

[Come usare le icone di Font Awesome nelle applicazioni Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Visualizzare le icone di font awesome usando i valori di contenuto CSS

L'approccio precedente richiede la modifica dei nomi delle classi delle icone.

Se il progetto è nuovo, possiamo seguire l'approccio precedente 

Ma se si tratta di un progetto esistente, è molto difficile cambiare il nome della classe di icone.

In questo caso, possiamo visualizzare le icone di font awesome utilizzando i loro valori di contenuto CSS.

Possiamo usare le caratteristiche degli elementi CSS Pseudo-elements `::before` o `::after` per visualizzarle.

Per esempio, per visualizzare l'icona `user`, potremmo usare il seguente codice HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Ma il nostro nome ufficiale dell'icona utente font awesome è `fa-user`.

Quindi, per visualizzare l'icona, per la classe `.user` aggiungere la proprietà CSS content code come `\f007`, che è il valore unicode dell'icona `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Oltre al codice CSS del contenuto, è necessario aggiungere anche lo stile `font`.

A tale scopo, si possono usare le proprietà CSS predefinite di font awesome.

Per le icone solide, utilizzare `var(--fa-font-solid)`

Per le icone regolari usare `var(--fa-font-regular)`

Per le icone del marchio utilizzare `var(--fa-font-regular)`

Inoltre, possiamo aggiungere una classe personalizzata che definisce alcune proprietà CSS comuni.

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
Questo è tutto 

Nella versione font awesome 5 non ci sono proprietà css personalizzate 

Occorre quindi aggiungere le proprietà css `font-family` e `font-weight`.

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

`font-family` e `font-weight` potrebbero essere diverse per ogni icona, a seconda dello stile dell'icona, come icone normali, solide e di marca.

[Utilizzare le icone di font awesome come codice di contenuto CSS](/fontawesome/csscontentcode)

Per visualizzare le icone di font awesome utilizzando SVG, consultare l'articolo seguente.

[Elenco, uso, CSS e download delle icone SVG di Font Awesome](/fontawesome/svg/)

## Cerca le icone di Font Awesome 

Ecco l'elenco completo delle icone gratuite di font awesome.

Digitate il nome dell'icona nella casella di ricerca sottostante e copiate il nome della classe e lo stile o il codice CSS del contenuto.

Le icone saranno filtrate nella tabella sottostante.

Fare clic sull'icona per copiare il codice html.

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