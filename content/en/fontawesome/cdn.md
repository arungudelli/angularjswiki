+++
title = "Font Awesome CDN"
subtitle = "Font awesome Icons CDN list"
type="docs"
summary ="To use Font Awesome CDN we need to create an account in their website."
keywords=["font awesome icons,font awesome icons CDN"]
date="2019-07-14T01:01:05+0000"
lastmod="2020-12-01T00:00:08+0000"
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

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Using CDN is the best way to serve font awesome icon css or js files, instead of hosting them from our own servers.

Steps to use Font Awesome CDN

1. Get a unique embed code by entering your email in following this [link](https://fontawesome.com/start).
2. Then font awesome sends an email with the Font Awesome CDN embed code along with instructions to add icons in our website.
3. The sample JavaScript font awesome CDN link will be in below format.`https://use.fontawesome.com/a34asdfsd.js`.
4. Copy the embed code you received via email and place it in your HTML `<head>` tag. 

Here is the sample webpage which uses font awesome CDN.

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

Further we can register in font awesome CDN website to manage our preferences.

## Advantages of using font awesome CDN

1. A faster server from where we can serve font awesome icons.
2. font awesome CDN servers always up and running.
3. And the files will be served from nearest CDN server.
4. We can quickly upgrade to font awesome pro icons without any code changes from our side.
5. We can create multiple embed codes for different websites.
6. Font Awesome CDN can load your icons asynchronously further boosting up the Site Performance.

One more big advantage of using font awesome CDN is we can automate our icon's accessibility.

Font Awesome CDN's auto accessibility feature helps the people with sight and hearing impairments.

For example consider the below example

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
In the above example, inside submit button we are using font awesome icon. But for the visually challenged person who uses screen readers to access the website it's not required to expose this icons.

So font awesome CDN will automatically adds the `aria-hidden=true` attribute to the icon.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

Or we can use free version of font awesome icons by using content delivery networks like cdnjs, maxcdn and jsdelivr etc..

## Font awesome 5 CDN links 

For the latest font awesome 5 version and above use the below content delivery networks.

Serve font awesome icons CSS using cdnjs (cloudfare).

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css

https://cdnjs.com/libraries/font-awesome
```

Serve font awesome icons CSS using jsdelivr.

```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.14.0/css/all.css
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

If you want to use javascript version of font awesome icons. Use the below CDN links


```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js

https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.14.0/js/all.js
```

## Font awesome Bootstrap CDN link

For the earlier version like font awesome 4.7 we can use bootstap cdn links

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


