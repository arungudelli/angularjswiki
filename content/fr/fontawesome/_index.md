
+++
title     = "Liste des noms des classes des icônes Font Awesome 2016+ gratuites et leurs valeurs de contenu CSS"
subtitle  = "Liste complète des icônes 2016+ gratuites font awesome "
summary   = "Ce post contient des noms de listes de classes d'icônes gratuites font awesome avec leurs codes de valeurs de contenu CSS et un tutoriel étape par étape pour utiliser les icônes font awesome dans les pages HTML."
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons "]
linktitle = "Introduction"

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


Ce post contient des noms de listes de classes d'icônes gratuites font awesome complètes avec leurs codes de valeur de contenu CSS et un tutoriel étape par étape pour utiliser les icônes font awesome dans les pages HTML.

Vous pouvez également rechercher et trouver les icônes font awesome en utilisant la [boîte de recherche] (#search-font-awesome-icons) fournie dans l'article.

Cliquez sur `Ctrl + D` pour ajouter la page à vos favoris.

**Dans la dernière version font awesome 6.2.0, il y a 2016 icônes gratuites**.

Dans la version précédente font awesome 5.14, nous avons environ 1598 icônes gratuites.

Selon le style de l'icône, ces icônes gratuites font awesome sont divisées en trois catégories 

1. font awesome les icônes solides
2. font awesome icônes normales
3. font awesome icônes de marque

Nous pouvons <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">télécharger le</a> fichier css des icônes font awesome et les servir à partir de votre propre serveur ou nous pouvons les servir à partir de CDN publics.

{{% alert note %}}
J'ai également créé un [ebook gratuit] (#download-font-awesome-icons-list-pdf) qui contient la liste complète des icônes de font awesome au format PDF.
{{% /alert%}}

{{% toc %}}

## Qu'est-ce que font awesome?

1. font awesome est la boîte à outils de polices et d'icônes la plus populaire du web, basée sur CSS et LESS.
2. font awesome est créé par Dave Gandy.
3. font awesome a été le nouveau projet open source le plus populaire de github en 2012 et fait actuellement partie du top 10 des projets.
4. Font Awesome est actuellement présent sur 47 millions de sites Web et la moitié des développeurs Web du monde utilisent les icônes font awesome.
5. Font Awesome permet d'ajouter facilement des icônes vectorielles et des logos sociaux à nos sites Web.

## Comment utiliser les icônes font awesome?

Il existe deux façons d'utiliser les icônes font awesome dans nos applications Web.

1. Utilisation des noms de classe CSS
2. Utilisation des valeurs de contenu CSS
3. Utilisation des icônes SVG

Tout d'abord, nous devons ajouter le fichier css de font awesome icons dans la section head du fichier html.

## Afficher les icônes de font awesome en utilisant les noms de classe CSS 

La façon la plus courante d'afficher les icônes font awesome est d'utiliser leurs noms de classe.

Pour chaque icône, un nom de classe est prédéfini, il suffit d'ajouter `fa-` au nom de l'icône comme classe.

font awesome icons utilise la balise italique, c'est-à-dire , `<i></i>` pour afficher les icônes 

La raison de l'utilisation de cette balise `<i>` comme icône est 

1. C'est le diminutif
2. `I` stand de l'icône (pas dans le monde HTML cependant)

Pour afficher les icônes de font awesome en utilisant les noms de classe css, suivez les étapes suivantes.

1. Ajoutez une balise d'icône.
2. Ajoutez le nom de l'icône préfixé par `fa` à l'attribut de classe.
3. En outre, nous devons ajouter la classe Style, c'est-à-dire solide, ordinaire ou marque

Tout d'abord, nous allons ajouter les icônes font awesome css dans la section head du fichier html comme indiqué ci-dessous

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
J'utilise le lien cdn de cloudfare font awesome icons.

Pour utiliser le CDN officiel de font awesome. Passez par l'article [font awesome CDN](/fontawesome/cdn).

Maintenant pour afficher l'icône `facebook` font awesome , utilisez le code html ci-dessous.

```
<i class="fab fa-facebook"></i>
```
L'icône Facebook fait partie des icônes de marque, j'ai donc ajouté `fab` comme nom de classe supplémentaire.

Pour utiliser les icônes solides de font awesome, ajoutez le nom de classe suivant `fas`

Par exemple, pour afficher l'icône `barcode`, utilisez le code html suivant

```
<i class="fas fa-barcode"></i>
```
`bookmark` l'icône fait partie des icônes normales, ajoutez le nom de la classe en tant que `far`

```
<i class="far fa-bookmark"></i>
```

Pour utiliser les icônes font awesome dans les applications Angular, consultez l'article suivant

[Comment utiliser les icônes Font Awesome dans les applications Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Afficher les icônes font awesome en utilisant les valeurs de contenu CSS

L'approche ci-dessus nous oblige à modifier les noms de nos classes d'icônes.

Si votre projet est nouveau, nous pouvons suivre l'approche ci-dessus 

Mais s'il s'agit d'un projet existant, il est très difficile de changer le nom de la classe d'icônes.

Dans ce cas, nous pouvons afficher les icônes font awesome en utilisant leurs valeurs de contenu CSS.

Nous pouvons utiliser les caractéristiques des éléments CSS Pseudo-elements `::before` ou `::after` pour les afficher.

Par exemple, pour afficher l'icône `user`, nous aurions pu utiliser le code HTML ci-dessous.

```
<li>
<span class="user"></span> Login
</li>
``` 

Mais le nom officiel de notre icône utilisateur font awesome est `fa-user`.

Pour afficher l'icône, pour la classe `.user`, ajoutez la propriété CSS content code comme `\f007`, qui est la valeur unicode de l'icône `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

En plus du code de contenu CSS, nous devons également ajouter le style `font`.

Nous pouvons utiliser les propriétés personnalisées CSS prédéfinies de font awesome pour cela.

Pour les icônes solides, utilisez `var(--fa-font-solid)`

Pour les icônes régulières, utilisez `var(--fa-font-regular)`

Pour les icônes de marque, utilisez `var(--fa-font-regular)`

En plus de cela, nous pouvons ajouter une classe personnalisée qui définit quelques propriétés CSS communes.

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
C'est tout 

Dans la version font awesome 5, il n'y a pas de propriétés css personnalisées 

Nous devons donc ajouter les propriétés css de `font-family` et `font-weight`.

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

`font-family` et `font-weight` peuvent être différentes pour chaque icône en fonction du style de l'icône, comme les icônes ordinaires, solides et de marque.

[Utiliser les icônes font awesome comme code de contenu CSS](/fontawesome/csscontentcode)

Pour afficher les icônes font awesome en utilisant des SVG, consultez l'article ci-dessous.

[Liste des icônes SVG Font Awesome, utilisation, CSS et téléchargement](/fontawesome/svg/)

## Recherchez les icônes de Font Awesome 

Voici la liste complète des icônes gratuites de font awesome.

Tapez le nom de l'icône dans le champ de recherche ci-dessous et copiez le nom de la classe et le code de style ou de contenu CSS.

Les icônes seront filtrées dans le tableau ci-dessous.

Et cliquez sur l'icône pour copier le code html.

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