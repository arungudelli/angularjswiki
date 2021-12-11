+++
title = "How To Add Inline Styles in Angular Components"
subtitle = "Adding inline styles to components in Angular"
type="post"
summary ="To create the component with inline styles in Angular, pass `--inline-style` flag to ng generate component command."
lastmod="2021-12-11T00:00:00+0000"
date="2021-12-11T00:00:00+0000"
draft=false
authors = ["admin"]

[image]
  caption = "component inline style"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

If the Angular component is small and CSS usage is limited we can create the component with inline styles. 

When we create a component in Angular, by default Angular CLI generates the component with external CSS file. 

```
CREATE src/app/user-style/user-style.component.html (25 bytes)
CREATE src/app/user-style/user-style.component.spec.ts (648 bytes)
CREATE src/app/user-style/user-style.component.ts (291 bytes)
CREATE src/app/user-style/user-style.component.scss (0 bytes)
UPDATE src/app/app.module.ts (667 bytes)
```

{{%toc%}}

## Adding inline styles in Component Metadata

{{% alert note%}}
**To create the component with inline styles in Angular, pass `--inline-style` flag to `ng generate component` command.**
{{% /alert %}}
```
>ng generate component user-inline-style --inline-style 
```
If you see the output, no external file is created. 
```
CREATE src/app/user-inline-style/user-inline-style.component.html (32 bytes)
CREATE src/app/user-inline-style/user-inline-style.component.spec.ts (691 bytes)
CREATE src/app/user-inline-style/user-inline-style.component.ts (282 bytes)
UPDATE src/app/app.module.ts (790 bytes)
```

`ng generate component` command created a component with inline style as show below.

```
@Component({
  selector: 'app-user-inline-style',
  templateUrl: './user-inline-style.component.html',
  styles: [
  ]
})
```
The inline style component metadata will have `styles` property, instead of `styleUrls`. 

The `styles` property accepts an array of strings as value. 

For example to style `h1` tag of the component, we can directly add the necessary styles in string format. 

```
@Component({
  selector: 'app-user-inline-style',
  templateUrl: './user-inline-style.component.html',
  styles: ['h1 { color:red }']
})
```

Incase if you want to add external style sheet, we can add it via `styleUrls` property.

A component metadata can contain both `styles` and `styleUrls` properties. 

i.e., In Angular, We can create a component with both inline styles as well as external style sheets.

```
@Component({
  selector: 'app-user-inline-style',
  templateUrl: './user-inline-style.component.html',
  styles: ['h1 { color:red }'],
  styleUrls: ['./user-inline-style.component.scss']
})
```

And remember inline style will have more priority than external CSS style. 

In the above example, If we add `h1` color style in the CSS file it will have no impact. 

```
//Inside user-inline-style.component.scss

h1 { color:green }
```

The `h1` tag will be in red color only because, we have an inline style for that. 

## Adding inline styles in component template HTML

We can directly embed CSS styles in component template using `<style>` tag.

```
@Component({
  selector: 'app-user-inline-style',
  template: `
  <style>
      h1 {
        color:red
      }
    </style>
    <h1>Component with inline style</h1>
  `,
  styles: [
  ]
})
```

We can also use `<link>` tag to refer an external CSS file.

```
@Component({
  selector: 'app-user-inline-style',
  template: `
    <!-- relative URL of the stylesheet -->
    <link rel="stylesheet" href="../assets/user-style.css">
    <h1>Component with inline style</h1>
  `,
  styles: [
  ]
})
```

## Summary

In this tutorial we have learnt different ways of adding inline styles to an Angular component.

1. Adding in component metadata using `styles`
2. Adding in template using `<style>` tag.
3. Adding in component template using `<link>` tag.
