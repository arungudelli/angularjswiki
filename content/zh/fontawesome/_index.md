
+++
title     = "2016+免费的Font Awesome图标类列表名称和它们的CSS内容值"
subtitle  = "2016+免费的font awesome 图标的完整列表"
summary   = "这篇文章包含了免费的font awesome 图标类列表名称及其CSS内容值代码以及在HTML页面中使用font awesome 图标的步骤教程。"
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "简介"

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


这篇文章包含了完整的免费font awesome 图标类列表名称及其CSS内容值代码，以及在HTML页面中使用font awesome 图标的步骤教程。

此外，你还可以使用文章中提供的[搜索框](#search-font-awesome-icons)搜索和查找font awesome 图标。

点击`Ctrl + D` ，将该页面加入书签。

**在最新的font awesome 6.2.0版本中，有2016个免费图标**。

在以前的font awesome 5.14版本中，我们有大约1598个免费图标。

根据图标风格的不同，这些免费的font awesome 图标分为三类。 

1. font awesome 实体图标
2. font awesome 常规图标
3. font awesome 品牌图标

我们可以<a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">下载</a> font awesome icons css文件，并从你自己的服务器提供服务，或者我们可以从公共CDN提供服务。

{{% alert note %}}
此外，我还创建了一个[免费电子书](#download-font-awesome-icons-list-pdf)，其中包含PDF格式的font awesome 图标的完整列表。
{{% /alert%}}

{{% toc %}}

## 什么是font awesome?

1. font awesome 是基于CSS和LESS的网络最流行的字体和图标工具包。
2. font awesome 是由Dave Gandy创建的。
3. font awesome 是github在2012年最受欢迎的新开源项目，目前是总体排名前十的项目之一。
4.Font Awesome目前在4700个网站上使用，世界上一半的网络开发者使用font awesome 。
5.Font Awesome使我们能够轻松地将矢量图标和社交标志添加到网站上。

## 如何使用font awesome 图标？

我们有两种方式可以在我们的网络应用中使用font awesome 图标。

1.使用CSS类名
2.使用CSS内容值
3.使用SVG图标

首先，我们需要在html文件的head部分添加font awesome icons css文件。

## 使用CSS类名显示font awesome 图标 

显示font awesome 图标的最常见方式是使用其类名。

每一个图标都有一个预定义的类名，我们只需要将`fa-` 作为类名附加到图标名称中。

font awesome icons使用斜体标签，即。 `<i></i>`来显示这些图标。 

使用这个 `<i>`标签作为图标的原因是 

1.它是
2. `I` 图标的立场（虽然不是在HTML世界中）。

要使用css类名显示font awesome 图标，请遵循以下步骤。

1.添加一个图标标签。
2.在类属性中添加以`fa` 为前缀的图标名称。
3.此外，我们还必须添加风格类，即纯色或普通或品牌。

首先，我们将在html文件的头部添加font awesome 图标css，如下所示

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
我正在使用cloudfarefont awesome icons cdn链接。

要使用官方font awesome CDN。通过[font awesome CDN](/fontawesome/cdn)文章。

现在要显示`facebook` font awesome 图标，使用下面的html代码。

```
<i class="fab fa-facebook"></i>
```
Facebook图标是品牌图标的一部分，所以我添加了`fab` 作为额外的类别名称。

要使用font awesome 实体图标，请添加类名为`fas`

例如，要显示`barcode` 图标，请使用以下HTML代码

```
<i class="fas fa-barcode"></i>
```
`bookmark` 图标是常规图标的一部分，添加类名为`far`

```
<i class="far fa-bookmark"></i>
```

要在Angular应用程序中使用font awesome 图标，请阅读以下文章

[如何在Angular应用程序中使用Font Awesome图标] 。
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## 使用CSS内容值显示font awesome 图标

上述方法需要我们改变我们的图标类名称。

如果你的项目是新的，那么我们可以按照上述方法。 

但如果是一个现有的项目，要改变图标类的名称是非常困难的。

在这种情况下，我们可以使用它们的CSS内容值来显示font awesome 图标。

我们可以使用CSS伪元素元素功能`::before` 或`::after` 来显示它们。

例如，为了显示`user` 图标，我们可以使用以下HTML代码。

```
<li>
<span class="user"></span> Login
</li>
```

但我们的官方font awesome 用户图标名称是`fa-user` 。

因此，为了显示这个图标，为`.user` 类添加CSS内容代码属性为`\f007` ，这是`user` 图标的unicode值。

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

在添加CSS内容代码的同时，我们还需要添加`font` 样式。

我们可以使用font awesome 预定义的CSS自定义属性来实现这一点。

对于实体图标，使用`var(--fa-font-solid)`

对于普通图标，使用`var(--fa-font-regular)`

对于品牌图标，使用`var(--fa-font-regular)`

除此之外，我们还可以添加一个自定义类，它定义了一些常见的CSS属性。

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
这就是了。 

在font awesome 5版本中，没有自定义的css属性。 

所以我们需要添加`font-family` 和`font-weight` css属性。

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

`font-family` 和`font-weight` 可能对每个图标都不同，这取决于图标的风格，如普通、纯色和品牌图标。

[使用font awesome 图标作为CSS内容代码](/fontawesome/csscontentcode)

要使用SVG显示font awesome 图标，请阅读下面的文章。

[字体真棒SVG图标列表、用法、CSS和下载](/fontawesome/svg/)

## 搜索Font Awesome图标 

这里是免费的font awesome icons小抄的完整列表。

在下面的搜索框中输入图标名称，并复制类名称和样式或CSS内容代码。

这些图标将被过滤在下面的表格中。

并点击图标来复制html代码。

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