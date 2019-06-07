+++
title = "How To Use fontawesome icons in Angular Applications"
subtitle = "Learn how to use fontawesome icons in Angular"
type="post"
summary ="Step by step tutotial to use fontawesome icons in Angular applications"
keywords=["fontawesome icons in Angular,fontawesome"]
date="2019-06-06T01:01:05+0000"
lastmod="2019-06-06T13:15:51+0000"
draft=true
authors = ["admin"]

[image]
  caption = "fontawesome icons in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++
In this tutorial I will explain how to use fontawesome icons in our Angular applications.

{{% toc %}}

## Installing free version fontawesome icons

To install fontawesome icons use the below npm or yarn commands

```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/angular-fontawesome

yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-brands-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/angular-fontawesome
```

## Installing pro version fontawesome icons

If you buy a license for fontawesome icons you have to configure your npm registry to use pro icons

This configuration can be done at global level or per project level

### Global level configuration

To use fontawesome icons across all the projects add @fortawesome scope to use fontawesome pro npm package source
i.e., npm.fontawesome.com

```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
  npm config set "//npm.fontawesome.com/:_authToken" TOKEN
```

TOKEN will be given when you buy a professional license.

### Project level configuration

To use fontawesome icons in a single project creat a .npmrc file at project root level and set the below configuration

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN
```

After the configurations install the pro fontawesome icons by using below npm commands

```
npm install --save-dev @fortawesome/fontawesome-pro
npm install @fortawesome/pro-solid-svg-icons
npm install @fortawesome/pro-regular-svg-icons
npm install @fortawesome/pro-light-svg-icons
```

## Using fontawesome icons in Angular applications

After installing the fontawesome icons