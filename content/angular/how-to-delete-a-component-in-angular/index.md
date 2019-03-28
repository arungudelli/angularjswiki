# How To Delete A Component In Angular

Steps to delete a component in Angular

  1. Remove the import line reference from Angular _app.module.ts_ file.
  2. Remove the component declaration from @NgModule declaration array in _app.module.ts_ file
  3. And then manually delete the component folder from Angular project.
  4. Finally Delete all the references of component manually from the Angular project.

In Angular CLI,there is no command available to delete a component created by Angular CLI as of now.

There is no ng delete component command as part of Angular CLI.<figure id="attachment_1203" style="width: 1280px" class="wp-caption aligncenter">

<img class="size-full wp-image-1203" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/Remove-component-in-Angular.jpg" alt="Remove component in Angular" width="1280" height="720" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/02/Remove-component-in-Angular.jpg 1280w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Remove-component-in-Angular-300x169.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Remove-component-in-Angular-768x432.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Remove-component-in-Angular-1024x576.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption class="wp-caption-text">Remove component in Angular</figcaption></figure> 

If you want to know what will happen at the time of component creation. you can try _&#8211;dry&#8211;run_ flag

<pre>ng generate component test --dry--run
CREATE src/app/test/test.component.html (23 bytes)
CREATE src/app/test/test.component.spec.ts (614 bytes)
CREATE src/app/test/test.component.ts (261 bytes)
CREATE src/app/test/test.component.css (0 bytes)
UPDATE src/app/app.module.ts (914 bytes)

NOTE: The "dryRun" flag means no changes were made.</pre>

No changes being made to the project.