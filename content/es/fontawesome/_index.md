
+++
title     = "2016+ Lista de clases de iconos gratuitos de Font Awesome Nombres y sus valores de contenido CSS"
subtitle  = "Lista completa de 2016+ iconos gratuitos font awesome "
summary   = "Este post contiene gratis font awesome iconos lista de clases con sus códigos de valor de contenido CSS &amp; tutorial paso a paso para utilizar font awesome iconos en páginas HTML."
keywords  = ["font awesome iconos,font awesome lista de iconos,fa lista de iconos,iconos"]
linktitle = "Introducción"

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


Este post contiene completa libre font awesome iconos nombres de la lista de clase con sus códigos de valor de contenido CSS y paso a paso tutorial para utilizar font awesome iconos en páginas HTML.

Y también se puede buscar y encontrar font awesome iconos utilizando el [cuadro de búsqueda](#search-font-awesome-icons) proporcionado en el artículo.

Haga clic en `Ctrl + D` para marcar la página.

**En la última versión de font awesome 6.2.0, hay 2016 iconos gratuitos**.

En la versión anterior font awesome 5.14 tenemos alrededor de 1598 iconos gratuitos.

Dependiendo del estilo de los iconos, estos iconos gratuitos de font awesome se dividen en tres categorías 

1. font awesome iconos sólidos
2. font awesome iconos regulares
3. font awesome iconos de marca

Podemos <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">descargar</a> el archivo css de font awesome iconos y servirlos desde su propio servidor o podemos servirlos desde CDNs públicos.

{{% alert note %}}
Y también he creado un [ebook gratuito](#download-font-awesome-icons-list-pdf) que contiene la lista completa de font awesome iconos en formato PDF.
{{% /alert%}}

{{% toc %}}

## ¿Qué es font awesome?

1. font awesome es el conjunto de herramientas de fuentes e iconos más popular de la web basado en CSS y LESS.
2. font awesome fue creado por Dave Gandy.
3. font awesome fue el nuevo proyecto de código abierto más popular de github en 2012 y actualmente es uno de los 10 mejores proyectos en general.
4. Font Awesome está actualmente presente en 47 millones de sitios web y la mitad de los desarrolladores web del mundo utilizan los iconos de font awesome.
5. Font Awesome hace que sea fácil añadir iconos vectoriales y logotipos sociales a nuestros sitios web.

## ¿Cómo utilizar los iconos de font awesome?

Hay dos formas de utilizar los iconos de font awesome en nuestras aplicaciones web.

1. Usando nombres de clases CSS
2. Usando valores de contenido CSS
3. Uso de iconos SVG

En primer lugar tenemos que añadir font awesome iconos css archivo en la sección de la cabeza del archivo html.

## Mostrar font awesome iconos utilizando los nombres de las clases CSS 

La forma más común de mostrar los iconos de font awesome es utilizando sus nombres de clase.

Para todos y cada uno de los iconos hay un nombre de clase predefinido, sólo tenemos que añadir el `fa-` al nombre del icono como clase.

font awesome icons utiliza la etiqueta itálica, es decir, `<i></i>` para mostrar los iconos 

La razón por la que se utiliza esta etiqueta `<i>` etiqueta como icono es 

1. Es la abreviatura
2. `I` stand de Icono (aunque no en el mundo HTML)

Para mostrar los iconos de font awesome usando nombres de clases css siga los pasos.

1. Añade una etiqueta de icono.
2. Añada el nombre del icono con el prefijo `fa` al atributo de clase.
3. Además tenemos que añadir la clase de estilo. es decir, sólido o regular o marca

Primero añadiremos el css de los iconos de font awesome en la sección head del archivo html como se muestra a continuación

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Estoy usando cloudfare font awesome icons cdn link.

Para usar el CDN oficial de font awesome. Ir a través de la [font awesome CDN](/fontawesome/cdn) artículo.

Ahora para mostrar `facebook` font awesome icono, utilice el siguiente código html.

```
<i class="fab fa-facebook"></i>
```
El icono de Facebook es parte de los iconos de marca, por lo que he añadido `fab` como nombre de clase adicional.

Para utilizar font awesome iconos sólidos añadir el nombre de la clase como `fas`

Por ejemplo, para mostrar el icono de `barcode` utilice el siguiente código html

```
<i class="fas fa-barcode"></i>
```
`bookmark` el icono es como parte de los iconos regulares, añada el nombre de la clase como `far`

```
<i class="far fa-bookmark"></i>
```

Para utilizar los iconos de font awesome en las aplicaciones de Angular ir a través del artículo

[Cómo utilizar los iconos de Font Awesome en las aplicaciones Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Mostrar los iconos de font awesome usando valores de contenido CSS

El enfoque anterior requiere que cambiemos los nombres de nuestras clases de iconos.

Si su proyecto es nuevo entonces podemos seguir el enfoque anterior 

Pero si se trata de un proyecto existente, es muy difícil cambiar el nombre de la clase de icono.

En este caso podemos mostrar los iconos de font awesome utilizando sus valores de contenido CSS.

Podemos utilizar las características de los elementos CSS Pseudo-elementos `::before` o `::after` para mostrarlos.

Por ejemplo, para mostrar el icono `user`, podríamos haber utilizado el siguiente código HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Pero nuestro nombre oficial de icono de usuario font awesome es `fa-user`.

Así que para mostrar el icono, para la clase `.user` añadir la propiedad de código de contenido CSS como `\f007`, que es el valor unicode para el icono `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Junto con el código de contenido CSS, tenemos que añadir el estilo `font` también.

Para ello, podemos utilizar las propiedades CSS personalizadas predefinidas de font awesome.

Para los iconos sólidos utilizar `var(--fa-font-solid)`

Para los iconos regulares utilizar `var(--fa-font-regular)`

Para los iconos de marca utilizar `var(--fa-font-regular)`

Además, podemos añadir una clase personalizada que defina algunas propiedades CSS comunes.

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
Eso es todo 

En la versión font awesome 5 no hay propiedades css personalizadas 

Así que tenemos que añadir `font-family` y `font-weight` propiedades css.

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

`font-family` y `font-weight` puede ser diferente para cada icono dependiendo del estilo del icono como regular, sólido y iconos de marca.

[Usar font awesome Iconos como código de contenido CSS](/fontawesome/csscontentcode)

Para mostrar los iconos de font awesome usando SVG's vaya al siguiente artículo.

[Lista de iconos SVG de Font Awesome, uso, CSS y descarga](/fontawesome/svg/)

## Buscar Iconos Font Awesome 

Aquí está la lista completa de iconos gratuitos font awesome hoja de trucos.

Escriba el nombre del icono en el cuadro de búsqueda de abajo y copiar el nombre de la clase y el estilo o el código de contenido CSS.

Los iconos se filtrarán en la tabla de abajo.

Y haga clic en el icono para copiar el código html.

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