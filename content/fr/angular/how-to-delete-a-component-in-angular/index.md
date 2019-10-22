+++
title = "How To Delete A Component In Angular"
subtitle = "Deleting components in Angular"
type="post"
summary ="Steps to delete a component in Angular1.Remove the import line reference from Angular app.module.ts file2.Remove the component declaration from @NgModule declaration array in app.module.ts file 3.And then manually delete the component folder from Angular project. 4.Finally Delete all the references of component manually from the Angular project."
keywords=["delete component in angular,ng delete component command"]
date="2019-02-08T01:01:05+0000"
lastmod="2019-02-09T04:44:37+0000"
draft=true
authors = ["admin"]

[image]
  caption = "Remove component in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Steps to delete a component in Angular

  1. Remove the import line reference from Angular `app.module.ts` file.
  2. Remove the component declaration from @NgModule declaration array in `app.module.ts` file
  3. And then manually delete the component folder from Angular project.
  4. Finally Delete all the references of component manually from the Angular project.

In Angular CLI,there is no command available to delete a component created by Angular CLI as of now.

There is no ng delete component command as part of Angular CLI.

If you want to know what will happen at the time of component creation. you can try `--dry--run` flag

```
ng generate component test --dry--run
CREATE src/app/test/test.component.html (23 bytes)
CREATE src/app/test/test.component.spec.ts (614 bytes)
CREATE src/app/test/test.component.ts (261 bytes)
CREATE src/app/test/test.component.css (0 bytes)
UPDATE src/app/app.module.ts (914 bytes)

NOTE: The "dryRun" flag means no changes were made.
```

No changes being made to the project.