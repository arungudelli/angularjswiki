
+++
title     = "Полный список 2016+ бесплатных Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Полный список 2016+ бесплатных font awesome иконок"
summary   = "Этот пост содержит бесплатные font awesome иконки список классов имена с их CSS содержание значение коды и шаг за шагом руководство по использованию font awesome иконки в HTML страницах."
keywords  = ["font awesome иконки,font awesome список иконок, fa список иконок, иконки "]
linktitle = "Введение"

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


Этот пост содержит полный бесплатный список иконок класса font awesome с их CSS кодами значений и пошаговое руководство по использованию иконок font awesome на HTML страницах.

А также вы можете искать и находить иконки font awesome с помощью [поисковой строки](#search-font-awesome-icons), представленной в статье.

Нажмите `Ctrl + D`, чтобы добавить страницу в закладки.

**В последней версии font awesome 6.2.0 есть 2016 бесплатных иконок**.

В предыдущей версии font awesome 5.14 было около 1598 бесплатных иконок.

В зависимости от стиля иконки, эти бесплатные иконки font awesome делятся на три категории 

1. font awesome сплошные иконки
2. font awesome обычные иконки
3. font awesome фирменные значки

Мы можем <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">загрузить</a> файл font awesome icons css и предоставить его с вашего собственного сервера, или мы можем предоставить его с публичных CDN.

{{% alert note %}}
А также я создал [бесплатную электронную книгу](#download-font-awesome-icons-list-pdf), которая содержит полный список иконок font awesome в формате PDF.
{{% /alert %}}

{{% toc %}}

## Что такое font awesome?

1. font awesome это самый популярный в интернете набор шрифтов и иконок, основанный на CSS и LESS.
2. font awesome создан Дэйвом Гэнди.
3. font awesome был самым популярным новым проектом с открытым исходным кодом на github в 2012 году и в настоящее время входит в десятку лучших проектов в целом.
4. Font Awesome в настоящее время используется на 47 миллионах веб-сайтов, а половина веб-разработчиков в мире используют иконки font awesome.
5. Font Awesome позволяет легко добавлять векторные иконки и социальные логотипы на наши сайты.

## Как использовать иконки font awesome?

Существует два способа использования иконок font awesome в наших веб-приложениях.

1. Использование имен классов CSS
2. Используя значения содержимого CSS
3. Использование SVG-иконок

Сначала нам нужно добавить файл font awesome icons css в раздел head файла html.

## Отображение иконок font awesome с помощью имен классов CSS 

Наиболее распространенным способом отображения иконок font awesome является использование имен их классов.

Для каждой иконки предопределено имя класса, нужно только добавить `fa-` к имени иконки в качестве класса.

font awesome иконки используют тег курсив, т.е..., `<i></i>` для отображения иконок 

Причина использования этого `<i>` тега в качестве иконки заключается в следующем 

1. Это короткое
2. `I` подставка для иконки (не в мире HTML)

Чтобы отобразить иконки font awesome с помощью имен классов css, выполните следующие действия.

1. Добавьте тег иконки.
2. Добавьте имя иконки с префиксом `fa` в атрибут class.
3. Дополнительно нужно добавить класс Style. т.е. solid или regular или brand

Сначала мы добавим css для иконок font awesome в раздел head html-файла, как показано ниже

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Я использую cloudfare font awesome icons cdn link.

Чтобы использовать официальную font awesome CDN. Просмотрите статью [font awesome CDN](/fontawesome/cdn).

Теперь, чтобы отобразить иконку `facebook` font awesome , используйте приведенный ниже html-код.

```
<i class="fab fa-facebook"></i>
```
Иконка Facebook является частью иконок бренда, поэтому я добавил `fab` в качестве дополнительного имени класса.

Чтобы использовать сплошные значки font awesome, добавьте имя класса как `fas`

Например, для отображения значка `barcode` используйте следующий html-код

```
<i class="fas fa-barcode"></i>
```
`bookmark` иконка является частью обычных иконок, добавьте имя класса как `far`

```
<i class="far fa-bookmark"></i>
```

Чтобы использовать иконки font awesome в приложениях Angular, прочтите статью

[Как использовать иконки Font Awesome в приложениях Angular]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Отображение иконок font awesome с помощью значений содержимого CSS

Вышеописанный подход требует от нас изменения имен классов иконок.

Если ваш проект новый, то мы можем следовать приведенному выше подходу 

Но если это уже существующий проект, то изменить имя класса иконок очень сложно.

В этом случае мы можем отобразить иконки font awesome, используя их значения содержимого CSS.

Для их отображения мы можем использовать функции элементов CSS Pseudo-elements `::before` или `::after`.

Например, для отображения иконки `user` мы могли бы использовать следующий HTML-код.

```
<li>
<span class="user"></span> Login
</li>
``` 

Но наш официальный пользовательский значок font awesome называется `fa-user`.

Поэтому, чтобы отобразить иконку, для класса `.user` добавьте свойство CSS content code `\f007`, которое является юникодовым значением для иконки `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Наряду с кодом содержимого CSS, нам также необходимо добавить стиль `font`.

Для этого мы можем использовать font awesome предопределенные пользовательские свойства CSS.

Для сплошных иконок используйте `var(--fa-font-solid)`

Для обычных иконок используйте `var(--fa-font-regular)`

Для фирменных значков используйте `var(--fa-font-regular)`

В дополнение к этому мы можем добавить пользовательский класс, который определяет несколько общих свойств CSS.

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
Вот и все 

В версии font awesome 5 нет пользовательских свойств css 

Поэтому нам нужно добавить свойства `font-family` и `font-weight`.

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

`font-family` и `font-weight` могут быть разными для каждого значка в зависимости от стиля значка, например, обычные, сплошные или фирменные значки.

[Используйте иконки font awesome в качестве кода содержимого CSS](/fontawesome/csscontentcode)

Для отображения иконок font awesome с помощью SVG перейдите по ссылке ниже.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Поиск иконок Font Awesome 

Здесь представлен полный список бесплатных font awesome иконок шпаргалок.

Введите название иконки в поле поиска ниже и скопируйте название класса и стиль или код содержимого CSS.

Иконки будут отфильтрованы в таблице ниже.

Нажмите на значок, чтобы скопировать html-код.

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