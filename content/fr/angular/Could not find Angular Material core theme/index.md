+++ title = "Fixing Could not find Angular Material core theme error in Angular Material" subtitle = "Could not find Angular Material core theme" type="post" summary ="To fix Could not find Angular Material core theme error in Angular Material load prebuilt angular theme in global style file" keywords=\["angular,Could not find Angular Material core theme"] date="2019-11-05T00:00:00+0000" lastmod="2019-11-05T00:00:05+0000" draft=false authors = ["admin"\] \[image\] caption = "EXCEPTION: No Provider For Http! Error Fix"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false +++

I have been working with Angular Material for the past one year.

Recently I have created a new project with Angular Material.

Strangely, when I try to run the application nothing has been loaded in the webpage and in console log, I got a warning saying

{{% alert note%}}
Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming
{{% /alert %}}

The reason why I got this error is I have loaded prebuilt theme in `app.component.scss` rather than global `styles.scss` file

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

There might be two reasons for this "Could not find Angular Material core theme" error in Angular material

1. Missing loading of pre built theme or custom theme in Angular Material
2. Adding prebuilt theme in wrong location.

To fix "Could not find Angular Material core theme" error in Angular material import or add any of the below prebuilt themes (or your own custom theme) in global `styles.scss` file of Angular project.

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
@import '~@angular/material/prebuilt-themes/pink-bluegrey.css';
@import '~@angular/material/prebuilt-themes/purple-green.css';
```
