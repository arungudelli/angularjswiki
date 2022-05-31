+++
title    ="Comment utiliser Font Awesome CDN"
subtitle ="Liste des icônes de Font awesome CDN"
summary  ="Dans ce tutoriel, nous allons apprendre à utiliser les icônes de font awesome en les servant depuis font awesome cdn"
keywords =["font awesome icônes,font awesome icônes CDN "]
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

Dans ce tutoriel, nous allons apprendre à utiliser les icônes de font awesome en les servant à partir de font awesome cdn.

L'utilisation du CDN (Content delivery Network) est la meilleure façon de servir les fichiers css ou js de l'icône font awesome, au lieu de les héberger sur nos propres serveurs.

{{%toc%}}

## Étapes pour utiliser font awesome CDN

1. Ouvrez le site officiel de l'icône font awesome.

2. Obtenez un code d'intégration unique en saisissant votre adresse électronique en suivant ce [lien] (https://fontawesome.com/start).
3. Ensuite, font awesome envoie un e-mail avec le code d'intégration de Font Awesome CDN et des instructions pour ajouter des icônes sur notre site Web.
4. L'exemple de lien JavaScript font awesome CDN sera dans le format ci-dessous.`https://use.fontawesome.com/a34asdfsd.js`.
5. Copiez le code d'intégration que vous avez reçu par e-mail et placez-le dans votre balise HTML `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Voici un exemple de page web qui utilise le CDN font awesome.

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

Nous pouvons également nous inscrire sur le site font awesome CDN pour gérer nos préférences.

## Avantages de l'utilisation de font awesome CDN

1. Un serveur plus rapide à partir duquel nous pouvons servir les icônes de font awesome.
2. font awesome Des serveurs CDN toujours opérationnels.
3. Et les fichiers seront servis à partir du serveur CDN le plus proche.
4. Nous pouvons rapidement passer à font awesome pro icons sans aucune modification du code de notre côté.
5. Nous pouvons créer plusieurs codes d'intégration pour différents sites Web.
6. Le CDN de Font Awesome peut charger vos icônes de manière asynchrone, ce qui améliore les performances du site.

Un autre grand avantage de l'utilisation de font awesome CDN est que nous pouvons automatiser l'accessibilité de nos icônes.

La fonction d'accessibilité automatique de Font Awesome CDN aide les personnes souffrant de déficiences visuelles et auditives.

Par exemple, considérez l'exemple ci-dessous

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Dans l'exemple ci-dessus, à l'intérieur du bouton d'envoi, nous utilisons l'icône font awesome. Mais pour les personnes malvoyantes qui utilisent des lecteurs d'écran pour accéder au site Web, il n'est pas nécessaire d'exposer cette icône.

Ainsi, le CDN font awesome ajoutera automatiquement l'attribut `aria-hidden=true` à l'icône.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Outre le CDN officiel font awesome ci-dessus, nous pouvons utiliser la version gratuite des icônes font awesome en utilisant des réseaux de diffusion de contenu comme cdnjs, maxcdn et jsdelivr.


## Font awesome CDN par cdn js 

Pour la dernière version font awesome 5 et plus, utilisez les liens ci-dessous font awesome CDN fichier CSS par cdnjs.

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

Si vous voulez utiliser la version Javascript des icônes font awesome, utilisez les liens CDN ci-dessous de cdnjs.

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

Pour les dernières versions CDN de fontawesome, reportez-vous au lien CDN de cloudflare ci-dessous.

```
https://cdnjs.com/libraries/font-awesome
```

## Liens CDN de Font awesome par jsdelivr 

Servez les fichiers CSS des icônes font awesome en utilisant les liens CDN de jsdelivr ci-dessous.

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
Pour les liens CDN des fichiers javascript de Font awesome, utilisez les liens ci-dessous.
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

Voici le lien vers le dernier jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Lien CDN Font awesome Bootstrap

Pour les versions antérieures comme font awesome 4.7 nous pouvons utiliser les liens CDN de bootstrap

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


