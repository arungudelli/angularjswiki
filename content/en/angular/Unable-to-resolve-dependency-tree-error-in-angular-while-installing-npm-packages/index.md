+++
title   = "Unable to resolve dependency tree error in Angular while installing npm packages"
subtitle= "Fixing Unable to resolve dependency tree error in Angular"
summary = "To fix Unable to resolve dependency tree error in Angular while installing `npm` packages follow the below steps. 1. Run `npm install --save --legacy-peer-deps` instead of `npm install` command. 2. Another way is delete `node_modules` folder and `package_lock.json` file and then run `npm cache clean --force after npm i --force` command."
keywords=["Unable to resolve dependency tree error"]
type="post"
date="2022-08-16T00:00:05+0000"
lastmod="2022-08-16T00:00:07+0000"
draft=false
authors = ["admin"]
[image]
  caption = "Unable to resolve dependency tree error"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

To fix **Unable to resolve dependency tree error in Angular** while installing `npm` packages follow the below steps. 

1. Run `npm install --save --legacy-peer-deps` instead of `npm install` command. 
2. Another way is delete `node_modules` folder and `package_lock.json` file and then run 
   `npm cache clean --force` after `npm i --force` command. 

{{%toc%}}

It's a dependency conflict (incorrect and potentially broken dependency) error, so run the command with `--force` or `--legacy-peer-deps` flag.

```
npm install --save --legacy-peer-deps

or 

npm cache clean --force
npm i --force
```

Another temporary solution is using prior versions of the `Node.js` or downgrading `npm`. 

## Set the `--legacy-peer-deps` flag to always true

And instead of passing `--legacy-peer-deps` flag each time we can set the `npm` config to `true`.

```
npm config set legacy-peer-deps true
```

Then clean the `cache` and run `npm install`  

```
npm cache clean --force

npm install
```

This the best option if `npm install` is run indirectly, i.e, by a script.

## Downgrading npm version

When using npm 7, `Unable to resolve dependency tree errors` comes up a lot because peer dependencies issues are treated as errors in version 7.

But these errors are only warnings in version 6. 

So to resolve this error set `--legacy-peer-deps` flag to `true` in npm 7 version.

If the above config is not working, downgrade npm 7 to npm 6. 

Downgrading `Node.js` is not necessary.

Because the relevant dependency management code is in `npm`. 

Downgrading `Node.js` will often work automatically, because doing so will downgrade `npm` as well.

Instead of downgrading `npm`, use `npx` to use the previous version of `npm` for just the install command as shown below.

```
npx -p npm@6 npm install
```

## What is `Unable to resolve dependency tree error`? 


Here is the sample `unable to resolve dependency tree` error in Angular.

```
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: project-admin@11.0.0
npm ERR! Found: @angular/common@11.0.3
npm ERR! node_modules/@angular/common
npm ERR!   @angular/common@"11.0.3" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer @angular/common@"^9.1.0 || ^10.0.0" from @agm/core@3.0.0-beta.0
npm ERR! node_modules/@agm/core
npm ERR!   @agm/core@"3.0.0-beta.0" from the root project
```

First we will understand the problem.

In the above error `@agm/core@3.0.0-beta.0` requires `@angular/common version ^9.1.0 or ^10.0.0`.

And the actual `@angular/common` version 11.0.3.

The problem is about peer dependencies. 

So The solution is to downgrade `@angular/common`. And that's not advisable.  

So use legacy dependencies logic for installing packages using `--legacy-peer-deps`. 


And to install legacy peer dependencies automatically set the npm config `--legacy-peer-deps` to true. 

```
npm config set legacy-peer-deps true
```