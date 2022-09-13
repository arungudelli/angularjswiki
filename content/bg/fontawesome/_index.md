
+++
title     = "2016+ Безплатен списък на класа Font Awesome Icons Names &amp; their CSS content values"
subtitle  = "Пълен списък на 2016+ безплатни икони font awesome "
summary   = "Тази публикация съдържа списък с имена на класове на безплатни font awesome икони с техните CSS кодове за стойност на съдържанието и ръководство стъпка по стъпка за използване на font awesome икони в HTML страници."
keywords  = ["font awesome икони,font awesome списък с икони,fa списък с икони,икони"]
linktitle = "Въведение"

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


Тази публикация съдържа пълни безплатни font awesome имена на списъци с класове икони с техните CSS кодове за стойност на съдържанието и ръководство стъпка по стъпка за използване на font awesome икони в HTML страници.

А също така можете да търсите и намирате font awesome икони, като използвате [полето за търсене](#search-font-awesome-icons), предоставено в статията.

Щракнете върху `Ctrl + D`, за да маркирате страницата.

**В последната версия на font awesome 6.2.0 има 2016 безплатни икони**.

В предишната версия font awesome 5.14 има около 1598 безплатни икони.

В зависимост от стила на иконата тези безплатни font awesome икони са разделени на три категории 

1. font awesome плътни икони
2. font awesome обикновени икони
3. font awesome икони на марки

Можем да <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">изтеглим</a> font awesome икони css файл и да ги предоставим от вашия собствен сървър Или можем да ги предоставим от публични CDN.

{{% alert note %}}
А също така съм създал [безплатна електронна книга](#download-font-awesome-icons-list-pdf), която съдържа пълен списък на font awesome икони в PDF формат.
{{% /alert%}}

{{% toc %}}

## Какво е font awesome?

1. font awesome е най-популярният набор от инструменти за шрифтове и икони в уеб, базиран на CSS и LESS.
2. font awesome е създаден от Дейв Ганди.
3. font awesome беше най-популярният нов проект с отворен код в github през 2012 г. и в момента е един от 10-те най-популярни проекта като цяло.
4. В момента Font Awesome е наличен в 47 млн. уебсайта, а половината от уеб разработчиците по света използват икони font awesome.
5. Font Awesome улеснява добавянето на векторни икони и социални лога към нашите уебсайтове.

## Как да използвате иконите font awesome?

Има два начина, по които можем да използваме font awesome икони в нашите уеб приложения.

1. Използване на имена на CSS класове
2. Използване на стойности на съдържанието на CSS
3. Използване на SVG икони

Първо трябва да добавим font awesome icons css файл в секцията head на html файла.

## Показвайте иконите font awesome, като използвате имената на CSS класовете 

Най-разпространеният начин за показване на иконите font awesome е като се използват имената на техните класове.

За всяка икона е предварително дефинирано име на клас, като само трябва да добавим `fa-` към името на иконата като клас.

font awesome иконите използват курсив, т.е., `<i></i>` за показване на иконите 

Причината за използването на този `<i>` таг като икона е 

1. Той е кратък
2. `I` стойка на икона (не и в света на HTML)

За да покажете иконите font awesome, като използвате имената на класовете css, следвайте следните стъпки.

1. Добавете таг за икона.
2. Добавете име на икона с префикс `fa` към атрибута class.
3. Освен това трябва да добавим клас Style (стил), т.е. solid (плътно) или regular (обикновено) или brand (марка)

Първо ще добавим css на иконите font awesome в секцията head на html файла, както е показано по-долу

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Аз използвам cloudfare font awesome icons cdn link.

За да използвате официалния font awesome CDN. Прегледайте статията [font awesome CDN](/fontawesome/cdn).

Сега, за да покажете `facebook` font awesome икона, използвайте следния html код.

```
<i class="fab fa-facebook"></i>
```
Иконата на Facebook е част от иконите на марката, затова добавих `fab` като допълнително име на класа.

За да използвате font awesome солидни икони, добавете името на класа като `fas`

Например, за да покажете икона `barcode`, използвайте следния html код

```
<i class="fas fa-barcode"></i>
```
`bookmark` иконата е част от обикновените икони, добавете името на класа като `far`

```
<i class="far fa-bookmark"></i>
```

За да използвате font awesome икони в Angular приложения, разгледайте статията

[Как да използваме Font Awesome икони в Angular приложения]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Показване на икони font awesome чрез стойности на съдържанието CSS

Горният подход изисква да променим имената на класовете на иконите.

Ако проектът ви е нов, тогава можем да следваме горния подход 

Но ако става въпрос за съществуващ проект, е много трудно да се промени името на класа икони.

В този случай можем да покажем иконите на font awesome, като използваме техните стойности на съдържанието в CSS.

Можем да използваме характеристиките на елементите CSS Pseudo-elements `::before` или `::after`, за да ги покажем.

Например за показване на икона `user` може да използваме следния HTML код.

```
<li>
<span class="user"></span> Login
</li>
``` 

Но нашето официално име на потребителската икона font awesome е `fa-user`.

Така че, за да покажете иконата, за класа `.user` добавете CSS свойството код на съдържанието като `\f007`, което е уникодова стойност за иконата `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Заедно с кода на CSS съдържанието трябва да добавим и `font` стил.

За тази цел можем да използваме предварително дефинираните персонализирани CSS свойства font awesome.

За плътни икони използвайте `var(--fa-font-solid)`

За обикновени икони използвайте `var(--fa-font-regular)`

За маркови икони използвайте `var(--fa-font-regular)`

В допълнение към това можем да добавим потребителски клас, който дефинира няколко общи CSS свойства.

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
Това е всичко 

Във версията font awesome 5 няма персонализирани свойства на css 

Затова трябва да добавим `font-family` и `font-weight` css свойства.

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

`font-family` и `font-weight` могат да бъдат различни за всяка икона в зависимост от стила на иконата, например обикновени, плътни и икони на марка.

[Използване на икони font awesome като код за CSS съдържание](/fontawesome/csscontentcode)

За да покажете font awesome икони с помощта на SVG, помислете върху статията по-долу.

[Списък на страхотните SVG икони, използване, CSS и изтегляне](/fontawesome/svg/)

## Търсене на страхотни икони на шрифта 

Ето пълния списък на безплатните икони font awesome cheat sheet.

Въведете името на иконата в полето за търсене по-долу и копирайте името на класа и кода на стила или CSS съдържанието.

Иконите ще бъдат филтрирани в таблицата по-долу.

И щракнете върху иконата, за да копирате html кода.

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