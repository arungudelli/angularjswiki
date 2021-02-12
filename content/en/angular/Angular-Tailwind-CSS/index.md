+++
title = "How to use Tailwind CSS in Angular"
subtitle = "Using Tailwind CSS in Angular"
summary ="In this tutorial we are going to learn how to use Tailwind CSS in Angular projects."
keywords=["Tailwind CSS, Angular"]
date="2021-02-11T00:00:05+0000"
lastmod="2021-02-11T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Tailwind CSS and Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

So many Angular developers around the world are waiting to **integrate Tailwind CSS in Angular** Applications.

Angular team released Angular v11.2 version, which includes native support for TailwindCSS.

In this tutorial we are going to learn how to use Tailwind CSS in Angular projects.

{{%toc%}}

Here are the steps to use TailwindCSS in Angular 

## Step 1 : Update Angular to version 11.2

To update Angular version use `ng command`.

```
ng update
```

## Step 2: Install TailwindCSS via npm or yarn

Use the below npm command to install `TailwindCSS`.

```
npm install -D tailwindcss
```

Tailwind CSS has two peer-dependencies postcss and autoprefixer. We need to install them as well

```
npm install postcss@latest autoprefixer@latest

```

## Step 3: Generate Tailwind CSS Configuration file.

Move to Angular root folder and create Tailwind CSS Configuration file using below npx command

```
npx tailwindcss init
```

It will create a minimal `tailwind.config.js` file at the root of your Angular project.

```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## Step 4: Add Tailwind CSS styles in Global styles.scss file

Add the below Tailwind CSS styles in global Angular `styles.scss` file.
```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

```

## Navigation Menu in Angular Using Tailwind CSS

Now we will create a simple responsive navigation menu using Tailwind CSS.

Open your app.component.html file and paste the below code

```
<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-black" href="#">
        Site Title
      </a>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
  <!-- END Logo text or image -->
  
  <!-- Search field -->
  <form class="mb-4 w-full md:mb-0 md:w-1/4">
    <label class="hidden" for="search-form">Search</label>
    <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text">
    <button class="hidden">Submit</button>
  </form>
  <!-- END Search field -->
  
  <!-- Global navigation -->
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Products
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          About
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  <!-- END Global navigation -->

</header>
```

Reference : [CodePen](https://codepen.io/codetimeio/pen/RYMqvL)

{{< figure src="/img/blog/Angular-tailwind-css.png" title="Angular-tailwind-css" alt="Angular tailwind css">}}


## TypeError: getProcessedPlugins is not a function

If you get `TypeError: getProcessedPlugins is not a function` while building the angular application,
it's because of node js version.

**Tailwind CSS requires Node.js 12.13.0 or higher.**

I am using Node v10 in my system.

After upgrading to Node v14.15.5 version the issue has been fixed.

{{%alert warning%}}
Error: ./src/styles.scss
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
TypeError: getProcessedPlugins is not a function
{{% /alert %}}
