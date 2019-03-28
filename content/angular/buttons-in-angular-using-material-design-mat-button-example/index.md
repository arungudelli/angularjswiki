# Angular Material Buttons : Mat-Button Example

## Angular Material Buttons:

Angular Material button module _MatButtonModule_(mat-button,mat-raised-button,mat-icon-button,mat-fab,mat-mini-fab) enhances the user experience of normal buttons (<button>) and anchor (<a>) tags by following Material design principles.

When you want to perform an action in webpage use button and use an anchor tag to navigate to other pages.

Buttons are placed anywhere in webpage and also places like:

  * Dialogs
  * Modalwindows
  * Forms
  * Cards
  * Toolbars

## Table of Contents:

  * [Import mat button module](#step-1) 
      * [MatButton Directive](#step-2)
      * [MatAnchor Directive](#step-3)
  * [Types of Angular Material Buttons](#step-4) 
      * [Text Buttons](#step-5)
      * [Outlined Buttons](#step-6)
      * [Contained Buttons](#step-7)
      * [Floating Action Buttons](#step-8)
  * [mat-button example](#step-9)
  * [mat-stroked-button example](#step-10)
  * [mat-flat-button example](#step-11)
  * [mat-raised-button example](#step-12)
  * [mat-icon-button example](#step-13)
  * [mat-button with icon and text example](#step-26)
  * [mat-fab example](#step-14)
  * [mat-mini-fab example](#step-15)
  * [mat button api](#step-16) 
      * [mat-button color and theming](#step-17)
      * [mat-button disabled](#step-18)
      * [mat-button disableRipple](#step-19)
      * [mat-button isIconButton](#step-20)
      * [mat-button isRoundButton](#step-21)
      * [mat-button ripple](#step-22)
  * [mat-button focus method](#step-23)
  * [Angular Material Buttons Demo](#step-25)
  * [mat button not a known element](#step-24)

## Import mat button module: {#step-1}

To import Mat Button Module use the following code.

<pre>import {MatButtonModule} from '@angular/material';</pre>

MatButtonModule contains two directives

  1. MatButton
  2. MatAnchor

## MatButton Directive: {#step-2}

_MatButton_ Directive contains defination for material design button and exported as &#8216;_matButton_&#8216;

And the selector is

<pre>button[mat-button], button[mat-raised-button], button[mat-icon-button],
button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
button[mat-flat-button]</pre>

## MatAnchor Directive: {#step-3}

_MatAnchor_ directive extends _MatButton_ contains defination for raised material design button and exported as &#8216;_matAnchor_&#8216; or &#8216;_matButton_&#8216;.

And the selector is

<pre>a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
a[mat-mini-fab] a[mat-stroked-button] a[mat-flat-button]</pre>

## Types of Angular Material Buttons: {#step-4}

_MatButtonModule_ comes up with seven different types of buttons. Depending upon the importance of actions.

### Text buttons: {#step-5}

  * Text buttons generally used for low significant actions.
  * mat-button is an example of text button

### Outlined Buttons: {#step-6}

  * Outlined buttons are used for medium significant actions,outlined with border.
  * The actions are important but not primary actions on the page.
  * mat-stroked-button is an example of outlined button

### Contained buttons: {#step-7}

  * Contained buttons have more significant than other buttons, and they are filled with color and shadow.
  * And these actions are primary actions on the page.
  * mat-flat-button is an example of contained button filled with color
  * mat-raised-button is an example of contained button filled with color and has a shadow

### Floating action buttons: {#step-8}

  * Floating action button represents the primary single most important action in a Website.
  * As the name suggests It appears in front of all screen content(floating)
  * It is a circular shape button with an icon in its center.
  * We have three types of FABs regular, mini, and extended.
  * mat-fab is a regular FAB button,mat-mini-fab is a mini FAB button.
  * FAB buttons should be used for constructive actions such as create,share etc.
  * FAB button should not contain regular text and icon should clearly represent the action being performed.
  * FAB extended button contains text label with icon.

Button type should be given as attribute to button or anchor tag.

  1. mat-button (Text Button)
  2. mat-stroked-button (outlined button)
  3. mat-flat-button (Contained button with color)
  4. mat-raised-button (Contained button with color and shadow)
  5. mat-icon-button
  6. mat-fab (Normal floating action button)
  7. mat-mini-fab (Mini floating action button)

Most of the google products are developed in Angular material. One of the product is <a href="https://express.google.com" target="_blank" rel="noopener">https://express.google.com</a>.

Google express uses all kinds of material buttons in its website.<figure id="attachment_860" style="width: 640px" class="wp-caption aligncenter">

<img class="size-full wp-image-860" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/Angular-Material-Butons-min.jpg" alt="Angular Material Butons" width="640" height="425" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/08/Angular-Material-Butons-min.jpg 640w, https://www.angularjswiki.com/wp-content/uploads/2018/08/Angular-Material-Butons-min-300x199.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" /> <figcaption class="wp-caption-text">Angular Material Butons</figcaption></figure> 

## mat-button example: {#step-9}

_mat-button_ is a simple text button generally used for less important actions. Actions like Dismiss,Learn More,Got it are usually text buttons.

<div>
  <pre>&lt;h3&gt;mat-button example&lt;/h3&gt;
&lt;button mat-button&gt;Dismiss&lt;/button&gt;
&lt;button mat-button&gt;Learn More&lt;/button&gt;
&lt;button mat-button&gt;Got It&lt;/button&gt;
&lt;a mat-button routerLink="https://www.arungudelli.com"&gt;mat-button&lt;/a&gt;
</pre>
  
  <p>
    For a shopping website like Google express remoing items from shopping cart is less important action. So it uses mat-button to remove the items from cart.
  </p><figure id="attachment_835" style="width: 409px" class="wp-caption aligncenter">
  
  <img class="size-full wp-image-835" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-button.png" alt="mat-button example" width="409" height="117" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-button.png 409w, https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-button-300x86.png 300w" sizes="(max-width: 409px) 100vw, 409px" /><figcaption class="wp-caption-text">mat-button example</figcaption></figure> 
  
  <h2 id="step-10">
    mat-stroked-button example:
  </h2>
  
  <p>
    mat-stroked-button is an outlined button i.e., button contains border. Generally used more important actions than text buttons.
  </p>
  
  <div>
    <pre>&lt;h3&gt;mat-stroked-button example&lt;/h3&gt;
&lt;button mat-stroked-button&gt;Add to Cart&lt;/button&gt;
&lt;a mat-stroked-button routerLink="https://www.arungudelli.com"&gt;
mat-stroked-button&lt;/a&gt;</pre>
  </div>
  
  <p>
    In Google express home page displays the list of products by department, with add to cart button for every product.
  </p>
  
  <p>
    Add to Cart button uses mat-stroked-button because all the products has same priority, Each add to card button has same importance.And this Add to cart button is not a primary action in the home page.
  </p><figure id="attachment_837" style="width: 471px" class="wp-caption aligncenter">
  
  <img class="size-full wp-image-837" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-stroked-button.png" alt="mat-stroked-button example" width="471" height="225" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-stroked-button.png 471w, https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-stroked-button-300x143.png 300w" sizes="(max-width: 471px) 100vw, 471px" /><figcaption class="wp-caption-text">mat-stroked-button example</figcaption></figure> 
  
  <h2 id="step-11">
    mat-flat-button example:
  </h2>
  
  <p>
    mat-flat-button is a contained button filled with color.It should be used for primary actions in a page.
  </p>
  
  <div>
    <pre>&lt;h3&gt;mat-flat-button example&lt;/h3&gt;
&lt;button mat-flat-button&gt;mat-flat-button&lt;/button&gt;
&lt;a mat-flat-button routerLink="https://www.arungudelli.com"&gt;
mat-flat-button&lt;/a&gt;</pre>
  </div>
  
  <h2 id="step-12">
    mat-raised-button example:
  </h2>
  
  <p>
    mat-raised-button is a contained button filled with color and has shadow. And has more visibility than flat button. And we can use it in place of mat-flat-button to represent primary action in the web page.
  </p>
  
  <div>
    <pre>&lt;h3&gt;mat-raised-button example&lt;/h3&gt;
&lt;button mat-raised-button&gt;mat-raised-button&lt;/button&gt;
&lt;a mat-raised-button routerLink="https://www.arungudelli.com"&gt;
mat-raised-button&lt;/a&gt;</pre>
    
    <p>
      If you open the single product page in Google express,Add to cart button is primary action on the page. So it is contained button.mat-raised-button is used in this case.
    </p><figure id="attachment_836" style="width: 300px" class="wp-caption aligncenter">
    
    <img class="size-full wp-image-836" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-raised-button-example.png" alt="mat-raised-button example" width="300" height="100" /><figcaption class="wp-caption-text">mat-raised-button example</figcaption></figure> 
    
    <h2 id="step-13">
      mat-icon-button example:
    </h2>
    
    <p>
      We can use angular material icons as buttons. We need to add mat-icon-button attribute to button and use mat-icon tag to display icon.
    </p>
    
    <div>
      <pre>&lt;h3&gt;mat-icon-button example&lt;/h3&gt;
&lt;button mat-icon-button&gt;&lt;mat-icon&gt;shopping_cart&lt;/&lt;mat-icon&gt;
&lt;/button&gt;
&lt;a mat-icon-button routerLink="https://www.arungudelli.com"&gt;
&lt;mat-icon&gt;love&lt;/&lt;mat-icon&gt;&lt;/a&gt;</pre>
      
      <p>
        In Google express website uses mat-icon-button to display the shopping cart and help buttons in top of the webpage.
      </p>
      
      <p>
        <i class="material-icons">help </i><i class="material-icons">shopping_cart</i>
      </p>
      
      <h2 id="step-26">
        mat-button with icon and text example:
      </h2>
      
      <p>
        To add the icon to mat-button text, we need to add mat-icon before the text of button as shown below
      </p>
      
      <pre>&lt;h3&gt;mat-button with icon and text&lt;/h3&gt;

&lt;button mat-raised-button color="primary"&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
Add to Cart
&lt;/button&gt;</pre>
      
      <h2 id="step-14">
        mat-fab example:
      </h2>
      
      <p>
        mat-fab is a regular floating action button. Generally used for most important action in the screen.
      </p>
      
      <div>
        <pre>&lt;button mat-fab&gt;mat-fab&lt;/button&gt;
&lt;a mat-fab routerLink="https://www.arungudelli.com"&gt;
mat-fab&lt;/a&gt;</pre>
        
        <p>
          Only one floating action button is recommended per screen and it should represent the single most primary action in screen. Otherwise we should not use it.
        </p>
        
        <p>
          Google products like Google+,Contacts,Google docs uses floating action buttons.
        </p>
        
        <p>
          <a href="https://contacts.google.com/" target="_blank" rel="noopener">Google Contacts</a> use FAB button to add a new contact, because add contact is single most important action in the screen.
        </p>
        
        <p>
          In <a href="https://docs.google.com" target="_blank" rel="noopener">Google docs</a> adding a new document is the primary action, so FAB button is used.
        </p>
        
        <p>
          In <a href="https://plus.google.com" target="_blank" rel="noopener">Google+</a> adding a new post button displayed at bottom right of the page which is a floating action button.
        </p>
        
        <p>
          Default size of regular fab button is 56*56
        </p>
        
        <p>
          As of now there is no direct way to implement FAB extended button using Angular Material. There is an open issue about this in <a href="https://github.com/angular/material2/issues/12246" target="_blank" rel="nofollow noopener">github</a>
        </p><figure id="attachment_859" style="width: 254px" class="wp-caption aligncenter">
        
        <img class="size-full wp-image-859" src="https://www.angularjswiki.com/wp-content/uploads/2018/08/mat-fab-buttons.png" alt="mat fab buttons" width="254" height="235" /><figcaption class="wp-caption-text">mat fab buttons</figcaption></figure> 
        
        <p>
          New Gmalis Compose button uses extended FAB button.
        </p>
        
        <h2 id="step-15">
          mat-mini-fab example:
        </h2>
        
        <p>
          mat-mini-fab is a floating action button with size less than regular FAB button. Should be used in small screens.
        </p>
        
        <pre>&lt;button mat-mini-fab&gt;mat-mini-fab&lt;/button&gt;
&lt;a mat-mini-fab routerLink="https://www.arungudelli.com"&gt;
mat-mini-fab&lt;/a&gt;</pre>
        
        <p>
          mat-mini-fab size is 40*40.
        </p>
        
        <h2 id="step-16">
          mat button api:
        </h2>
        
        <p>
          [table id=31 /]
        </p>
        
        <h2 id="step-17">
          mat-button color change and theming:
        </h2>
        
        <p>
          To change the color of mat-button color use <em>color</em> property. We can change the background color to primary, accent, or warn.
        </p>
        
        <pre> &lt;button mat-button color="primary"&gt;Primary&lt;/button&gt;</pre>
        
        <h2 id="step-18">
          mat-button disabled:
        </h2>
        
        <p>
          To disable the mat-button we can use mat-button disabled property.
        </p>
        
        <pre> &lt;button mat-button disabled&gt;Disabled&lt;/button&gt;</pre>
        
        <h2 id="step-19">
          mat-button disableRipple:
        </h2>
        
        <p>
          To disable the ripple animation of mat-button use disableRipple property.
        </p>
        
        <pre>&lt;button mat-raised-button color="primary" disableRipple=true&gt;Primary&lt;/button&gt;</pre>
        
        <h2 id="step-20">
          mat-button isIconButton:
        </h2>
        
        <p>
          mat-button isIconButton property is a readonly attribute which represents whether the button is icon button.
        </p>
        
        <h2 id="step-21">
          mat-button isRoundButton:
        </h2>
        
        <p>
          mat-button isRoundButton property is a readonly attribute which tells whether the button is FAB button i.e., rounded button.
        </p>
        
        <h2 id="step-22">
          mat-button ripple:
        </h2>
        
        <p>
          Using ripple attribute we get the instance of MatRipple.
        </p>
        
        <h2 id="step-23">
          mat-button focus method:
        </h2>
        
        <p>
          We can set the focus of mat-button programmatically using focus method.
        </p>
        
        <p>
          In the below example <a href="https://www.angularjswiki.com/angular/checkbox-implementation-in-angular-using-angular-material/" target="_blank" rel="noopener">mat-checkbox</a> change event will dynamically focus the mat-button using focus button.
        </p>
        
        <pre>&lt;mat-checkbox
(change)="changeEvent($event)"&gt;&lt;/mat-checkbox&gt; 
&lt;br/&gt; 
&lt;p&gt;On Change event focuses the button&lt;/p&gt;
&lt;button mat-button #submitButton&gt;Basic&lt;/button&gt;</pre>
        
        <p>
          And in our button.component.ts file
        </p>
        
        <pre>@ViewChild('submitButton') submitButton;

changeEvent($event){
  this.submitButton.focus();
}</pre>
        
        <h2 id="step-25">
          Angular Materials Buttons Demo:
        </h2>
        
        <p>
          We will create new component in our project to test different types of material buttons.
        </p>
        
        <div>
          <pre>export class ButtonComponent implements OnInit {
 constructor() { }
 @ViewChild('submitButton') submitButton;
 ngOnInit() {
 }
 changeEvent(){
  this.submitButton.focus();
 }
}</pre>
        </div>
        
        <p>
          And the component html file is
        </p>
        
        <div>
          <pre>&lt;h3&gt;mat-buttons examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-button&gt;Basic&lt;/button&gt;
&lt;button mat-button color="primary"&gt;Primary&lt;/button&gt;
&lt;button mat-button color="accent"&gt;Accent&lt;/button&gt;
&lt;button mat-button color="warn"&gt;Warn&lt;/button&gt;
&lt;button mat-button disabled&gt;Disabled&lt;/button&gt;
&lt;button mat-button disableRipple=true&gt;disableRipple&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-raised-buttons examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-raised-button&gt;Basic&lt;/button&gt;
&lt;button mat-raised-button color="primary"&gt;Primary&lt;/button&gt;
&lt;button mat-raised-button color="accent"&gt;Accent&lt;/button&gt;
&lt;button mat-raised-button color="warn"&gt;Warn&lt;/button&gt;
&lt;button mat-raised-button disabled&gt;Disabled&lt;/button&gt;
&lt;button mat-raised-button disableRipple=true&gt;disableRipple&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-stroked-button examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-stroked-button&gt;Basic&lt;/button&gt;
&lt;button mat-stroked-button color="primary"&gt;Primary&lt;/button&gt;
&lt;button mat-stroked-button color="accent"&gt;Accent&lt;/button&gt;
&lt;button mat-stroked-button color="warn"&gt;Warn&lt;/button&gt;
&lt;button mat-stroked-button disabled&gt;Disabled&lt;/button&gt;
&lt;button mat-stroked-button disableRipple=true&gt;disableRipple&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-flat-button examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-flat-button&gt;Basic&lt;/button&gt;
&lt;button mat-flat-button color="primary"&gt;Primary&lt;/button&gt;
&lt;button mat-flat-button color="accent"&gt;Accent&lt;/button&gt;
&lt;button mat-flat-button color="warn"&gt;Warn&lt;/button&gt;
&lt;button mat-flat-button disabled&gt;Disabled&lt;/button&gt;
&lt;button mat-flat-button disableRipple=true&gt;disableRipple&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-icon-button examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-icon-button&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;button mat-icon-button color="primary"&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;button mat-icon-button color="accent"&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;button mat-icon-button color="warn"&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;button mat-icon-button disabled&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;button mat-icon-button disableRipple=true&gt;
&lt;mat-icon&gt;shopping_cart&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-fab examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-fab&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-fab color="primary"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-fab color="accent"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-fab color="warn"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-fab disabled&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-fab disableRipple=true&gt;
&lt;mat-icon&gt;add&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;mat-mini-fab examples&lt;/h3&gt;
&lt;div&gt;
&lt;button mat-mini-fab&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-mini-fab color="primary"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-mini-fab color="accent"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-mini-fab color="warn"&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-mini-fab disabled&gt;&lt;mat-icon&gt;add&lt;/mat-icon&gt;&lt;/button&gt;
&lt;button mat-mini-fab disableRipple=true&gt;
&lt;mat-icon&gt;add&lt;/mat-icon&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;h3&gt;
Focusing
&lt;/h3&gt;
&lt;br/&gt;
&lt;mat-checkbox
(change)="changeEvent($event)"&gt;&lt;/mat-checkbox&gt; 
&lt;br/&gt; 
&lt;p&gt;On Change event focuses the button&lt;/p&gt;
&lt;button mat-button #submitButton&gt;Basic&lt;/button&gt;</pre>
        </div>
        
        <p>
          Here is the example demo for <a href="https://angular-zgafvf.stackblitz.io/" target="_blank" rel="noopener">Angular material buttons</a>
        </p>
        
        <h2 id="step-24">
          mat button not a known element:
        </h2>
        
        <p>
          If you miss importing MatButtonModule from @angular/material you will get an error saying mat-button is not a know n element.
        </p>
        
        <p>
          As explained in <a href="https://www.angularjswiki.com/angular/angular-material-2-tutorial-with-examples/" target="_blank" rel="noopener">angular material tutorial</a> it is better to create a separate module for material components. Add the required modules whenever required.
        </p>
      </div>
    </div>
  </div>
</div>