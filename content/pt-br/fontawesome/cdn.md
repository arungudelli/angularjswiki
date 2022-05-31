+++
title    ="Como usar a Fonte Awesome CDN"
subtitle ="Lista de ícones CDN de fontes fantásticas"
summary  ="Neste tutorial aprenderemos como usar os ícones font awesome servindo-os a partir de font awesome cdn"
keywords =["font awesome ícones,font awesome ícones CDN"]
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

Neste tutorial aprenderemos como usar os ícones font awesome, servindo-os a partir de font awesome cdn.

Usar CDN(Content delivery Network) é a melhor maneira de servir font awesome ícones css ou arquivos js, em vez de hospedá-los a partir de nossos próprios servidores.

{{%toc%}}

## Passos para usar font awesome CDN

1. Abrir o site oficial font awesome ícone.

2. Obtenha um código de incorporação único inserindo seu e-mail seguindo este [link](https://fontawesome.com/start).
3. Então font awesome envia um e-mail com a fonte Awesome CDN embed code juntamente com instruções para adicionar ícones em nosso site.
4. A amostra do link JavaScript font awesome CDN estará no formato abaixo.`https://use.fontawesome.com/a34asdfsd.js`.
5. Copie o código incorporado que você recebeu via e-mail e coloque-o em seu HTML `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Aqui está a página de exemplo que usa font awesome CDN.

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

Além disso, podemos nos registrar no site font awesome CDN para administrar nossas preferências.

## Vantagens de usar font awesome CDN

1. Um servidor mais rápido de onde podemos servir font awesome ícones.
2. font awesome Servidores CDN sempre em funcionamento.
3. E os arquivos serão servidos a partir do servidor CDN mais próximo.
4. Podemos atualizar rapidamente para os ícones profissionais font awesome sem nenhuma mudança de código de nosso lado.
5. Podemos criar vários códigos de incorporação para diferentes websites.
6. A fonte Awesome CDN pode carregar seus ícones de forma assíncrona, aumentando ainda mais o desempenho do site.

Mais uma grande vantagem de usar font awesome CDN é que podemos automatizar a acessibilidade de nossos ícones.

A característica de acessibilidade automática da fonte Awesome CDN ajuda as pessoas com deficiências visuais e auditivas.

Por exemplo, considere o exemplo abaixo

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
No exemplo acima, dentro do botão submit, estamos usando o ícone font awesome. Mas para a pessoa com deficiência visual que usa leitores de tela para acessar o site, não é necessário expor estes ícones.

Assim, font awesome CDN adicionará automaticamente o atributo `aria-hidden=true` ao ícone.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Além do CDN oficial font awesome acima, podemos usar a versão gratuita dos ícones font awesome usando redes de entrega de conteúdo como cdnjs, maxcdn e jsdelivr.


## Font awesome CDN by cdn js 

Para a última versão font awesome 5 e acima, use os links abaixo font awesome CDN CSS da cdnjs.

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

Se você quiser usar a versão Javascript dos ícones font awesome use os links CDN do cdnjs abaixo.

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

Para as últimas versões do fontawesome CDN, consulte abaixo o link cdnjs por cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Font awesome CDN links by jsdelivr 

Servir font awesome ícones arquivos CSS usando os links abaixo do jsdelivr CDN.

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
Para fontes incríveis CDN javascript links use abaixo.
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

Aqui está o link para o mais recente fontawesome CDN jsdelivr.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Font awesome Bootstrap CDN link

Para a versão anterior como font awesome 4.7 podemos usar bootstap cdn links

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


