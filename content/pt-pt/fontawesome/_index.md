
+++
title     = "2016+ Fonte Grátis Lista de classes de Ícones Incríveis Nomes e os seus valores de conteúdo CSS"
subtitle  = "Lista completa de ícones de 2016+ grátis font awesome "
summary   = "Este post contém gratuitamente font awesome icons class list names with their CSS content value codes &amp; tutorial passo a passo para usar font awesome icons em páginas HTML"
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "Introdução"

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


Este post contém gratuitamente font awesome completa lista de nomes de classes de ícones com os seus códigos de valor de conteúdo CSS &amp; tutorial passo a passo para usar font awesome ícones em páginas HTML.

E também pode procurar e encontrar ícones font awesome usando a [caixa de pesquisa](#search-font-awesome-icons) fornecida no artigo.

Clique `Ctrl + D` para marcar a página.

**Na última versão font awesome 6.2.0, existem ícones gratuitos de 2016***.

Na versão anterior font awesome 5.14 temos cerca de 1598 ícones livres.

Dependendo do estilo do ícone, estes ícones font awesome gratuitos divididos em três categorias 

1. font awesome ícones sólidos
2. font awesome ícones regulares
3. font awesome ícones de marca

Podemos <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">descarregar o</a> ficheiro css de ícones font awesome e servi-los a partir do seu próprio servidor Ou podemos servi-los a partir de CDNs públicos.

{{% alert note %}}
E também criei um [livro electrónico gratuito](#download-font-awesome-icons-list-pdf) que contém uma lista completa de ícones font awesome em formato PDF.
{{{% /alert%}}}

{{% toc %}}}

## O que é font awesome?

1. font awesome é a fonte mais popular da web e o kit de ferramentas de ícones baseado em CSS e LESS.
2. font awesome é criado por Dave Gandy.
3. font awesome foi o novo projecto de código aberto mais popular do github em 2012 e é actualmente um dos 10 projectos mais populares no total.
4. A fonte Awesome está actualmente em directo em 47M websites e metade dos programadores web do mundo usam ícones font awesome.
5. A fonte Awesome facilita a adição de ícones vectoriais e logótipos sociais aos nossos websites.

## Como utilizar os ícones font awesome?

Há duas formas de utilizarmos os ícones font awesome nas nossas aplicações web.

1. Utilização de nomes de classe CSS
2. Utilização de valores de conteúdo CSS
3. Usando Ícones SVG

Primeiro precisamos de adicionar font awesome ícones css na secção principal do ficheiro html.

## Mostrar font awesome ícones usando nomes de classes CSS 

A forma mais comum de exibir ícones font awesome é utilizando os seus nomes de classe.

Para cada ícone é predefinido um nome de classe, apenas precisamos de anexar o `fa-` ao nome do ícone como classe.

font awesome os ícones usam etiqueta itálica, isto é `<i></i>` para exibir os ícones 

A razão por detrás da utilização deste `<i>` tag como ícone é 

1. É curto
2. `I` stand of Icon (embora não no mundo HTML)

Para exibir os ícones font awesome usando nomes de classes css, seguir os passos.

1. Adicionar uma etiqueta com um ícone.
2. Adicionar o nome do ícone prefixado com `fa` ao atributo da classe.
3. Além disso, temos de acrescentar a classe Style, ou seja, sólida ou regular ou de marca

Primeiro vamos adicionar os ícones css font awesome na secção de cabeça do ficheiro html como se mostra abaixo

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Estou a utilizar o link cloudfare font awesome ícones cdn.

Para utilizar o CDN oficial font awesome CDN. Aceder ao artigo [font awesome CDN](/fontawesome/cdn).

Agora para exibir o ícone `facebook` font awesome , utilize o código html abaixo.

```
<i class="fab fa-facebook"></i>
```
O ícone do Facebook faz parte dos ícones de marca, por isso adicionei `fab` como nome de classe adicional.

Para utilizar font awesome ícones sólidos adicionar o nome da classe como `fas`

Por exemplo, para exibir o ícone `barcode` use o seguinte código html

```
<i class="fas fa-barcode"></i>
```
`bookmark` é como parte de ícones regulares, adicione o nome da classe como `far`

```
<i class="far fa-bookmark"></i>
```

Para utilizar os ícones font awesome em aplicações angulares, consulte o artigo

[Como utilizar a Fonte Ícones Incríveis em Aplicações Angulares]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Mostrar font awesome ícones usando valores de conteúdo CSS

A abordagem acima referida exige que alteremos os nomes das nossas classes de ícones.

Se o seu projecto é novo, então podemos seguir a abordagem acima 

Mas se for um projecto existente, é muito difícil mudar o nome da classe do ícone.

Neste caso, podemos exibir os ícones font awesome usando os seus valores de conteúdo CSS.

Podemos utilizar os elementos do CSS Pseudo-elementos `::before` ou `::after` para os exibir.

Por exemplo, para exibir o ícone `user`, Poderíamos ter usado abaixo do código HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Mas o nosso nome de ícone de utilizador oficial font awesome é `fa-user`.

Assim, para exibir o ícone, para a classe `.user` acrescente a propriedade do código de conteúdo CSS como `\f007`, que é um valor unicode para o ícone `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Juntamente com o código de conteúdo do CSS, precisamos de acrescentar também o estilo `font`.

Podemos utilizar para tal font awesome propriedades pré-definidas personalizadas do CSS.

Para utilização de ícones sólidos `var(--fa-font-solid)`

Para utilização regular de ícones `var(--fa-font-regular)`

Para uso de ícones de marca `var(--fa-font-regular)`

Além disso, podemos acrescentar uma classe personalizada que define poucas propriedades CSS comuns.

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
É isso mesmo 

Na versão font awesome 5 não existem propriedades css personalizadas 

Por isso, precisamos de acrescentar `font-family` e `font-weight` css propriedades.

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

`font-family` e `font-weight` podem ser diferentes para cada ícone, dependendo do estilo do ícone, como ícones regulares, sólidos e de marca.

[Use font awesome Ícones como Código de Conteúdo CSS](/fontawesome/csscontentcode)

Para exibir font awesome ícones usando SVG's, pense no artigo abaixo.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Pesquisar Ícones de Fontes Fantásticos 

Aqui está a lista completa dos ícones grátis font awesome.

Digite o nome do ícone na caixa de pesquisa abaixo e copie o nome da classe e estilo ou código de conteúdo CSS.

Os ícones serão filtrados na tabela abaixo.

E clique no ícone para copiar o código html.

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