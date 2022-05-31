+++
title    ="Cómo usar Font Awesome CDN"
subtitle ="Lista de CDN de Font awesome Icons"
summary  ="En este tutorial aprenderemos a usar font awesome iconos sirviéndolos desde font awesome cdn"
keywords =["font awesome iconos,font awesome iconos CDN"]
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

En este tutorial aprenderemos a utilizar los iconos de font awesome sirviéndolos desde font awesome cdn.

El uso de CDN(Content delivery Network) es la mejor manera de servir font awesome archivos de iconos css o js, en lugar de alojarlos desde nuestros propios servidores.

{{%toc%}}

## Pasos para usar font awesome CDN

1. Abra el sitio web oficial de iconos font awesome.

2. Obtenga un código de inserción único introduciendo su correo electrónico en el siguiente [enlace](https://fontawesome.com/start).
3. A continuación, font awesome envía un correo electrónico con el código de incrustación de Font Awesome CDN junto con las instrucciones para añadir iconos en nuestro sitio web.
4. El ejemplo de JavaScript font awesome enlace CDN estará en el siguiente formato.`https://use.fontawesome.com/a34asdfsd.js`.
5. Copie el código de incrustación que recibió por correo electrónico y colóquelo en su etiqueta HTML `<head>` en su etiqueta HTML 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Aquí está la página web de ejemplo que utiliza font awesome CDN.

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

Además podemos registrarnos en la web font awesome CDN para gestionar nuestras preferencias.

## Ventajas de usar font awesome CDN

1. Un servidor más rápido desde el que podemos servir los iconos de font awesome.
2. font awesome Servidores CDN siempre en funcionamiento.
3. Y los archivos se servirán desde el servidor CDN más cercano.
4. Podemos actualizar rápidamente a font awesome iconos pro sin ningún cambio de código de nuestro lado.
5. Podemos crear múltiples códigos de incrustación para diferentes sitios web.
6. Font Awesome CDN puede cargar sus iconos de forma asíncrona impulsando aún más el rendimiento del sitio.

Otra gran ventaja de usar font awesome CDN es que podemos automatizar la accesibilidad de nuestros iconos.

La función de accesibilidad automática de Font Awesome CDN ayuda a las personas con discapacidades visuales y auditivas.

Por ejemplo, considere el siguiente ejemplo

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
En el ejemplo anterior, dentro del botón de envío estamos utilizando el icono font awesome. Pero para las personas con discapacidad visual que utilizan lectores de pantalla para acceder al sitio web no es necesario exponer estos iconos.

Así que font awesome CDN añadirá automáticamente el atributo `aria-hidden=true` al icono.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Aparte de la CDN oficial de font awesome mencionada anteriormente, podemos utilizar la versión gratuita de los iconos de font awesome mediante el uso de redes de entrega de contenido como cdnjs, maxcdn y jsdelivr.


## Font awesome CDN por cdn js 

Para la última versión de font awesome 5 y superior utilice los siguientes enlaces de archivos CSS de font awesome CDN por cdnjs.

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

Si desea utilizar la versión Javascript de los iconos de font awesome utilice los siguientes enlaces CDN de cdnjs.

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

Para las últimas versiones de fontawesome CDN referirse a continuación enlace cdnjs por cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN links by jsdelivr 

Servir font awesome iconos archivos CSS utilizando abajo jsdelivr enlaces CDN.

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
Para Font awesome CDN javascript archivos enlaces utilizan a continuación.
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

Aquí está el enlace a la última jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

Para la versión anterior como font awesome 4.7 podemos utilizar los enlaces cdn de Bootstrap

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


