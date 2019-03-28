# Difference Between NgIf And Hidden Or Display:none In Angular

The main difference between angular ngIf directive & _hidden_ or _display:none_ is ngIf will add or remove the element from DOM based on condition or expression. _hidden _attribute in html5 and display none CSS will show or hide the HTML element. We will go through the examples to understand them further.

  * [ngIf in Angular](#step-1)
  * [hidden or display:none in Angular](#step-2)
  * [Why ngIf directive remove the element rather than hide it?](#step-3)
  * [ngIf vs hidden or display none in Angular](#step-4)

## ngIf in Angular: {#step-1}

Have a look at a simple <a href="https://www.angularjswiki.com/tutorial/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener"><em>ngIf</em></a> example

<div>
  <pre>&lt;div *ngIf="true"&gt;This will be added to DOM by ngIf&lt;/div&gt;
&lt;div *ngIf="false"&gt;This will be removed from DOM by ngIf&lt;/div&gt;

&lt;ng-template *ngIf="true"&gt;
&lt;div&gt;This will be added to DOM by ngIf&lt;/div&gt;
&lt;/ng-template&gt;
&lt;ng-template *ngIf="false"&gt;
&lt;div&gt;This will be removed from DOM by ngIf&lt;/div&gt;
&lt;/ng-template&gt;

</pre>
  
  <p>
    As explained in ngIf else article angular will convert the <em>ngIf</em> element to <em><ng-template></em> element. See the generated HTML DOM.
  </p><figure id="attachment_535" style="width: 403px" class="wp-caption aligncenter">
  
  <img class="size-full wp-image-535" src="https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-vs-Hidden.png" alt="ngIf vs Hidden" width="403" height="113" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-vs-Hidden.png 403w, https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-vs-Hidden-300x84.png 300w" sizes="(max-width: 403px) 100vw, 403px" /><figcaption class="wp-caption-text">ngIf vs Hidden</figcaption></figure> 
  
  <p>
    And the second div is not at all added the DOM. Angular will convert <em><ng-template></em> to a comment which gives us information about evaluated <em>ngIf</em> condition <em>true</em> or <em>false</em>.
  </p>
  
  <h2 id="step-2">
    hidden or display:none in Angular:
  </h2>
  
  <p>
    Now we will see an example with hidden attribute in html5 and display none CSS.
  </p>
  
  <div>
    <pre>&lt;p [style.display]="'block'"&gt;
This paragraph is visible.
&lt;/p&gt;
&lt;p [style.display]="'none'"&gt;
This paragraph is hidden but still in the DOM.
&lt;/p&gt;
&lt;p hidden&gt;
This paragraph is hidden but still in the DOM.
&lt;/p&gt;</pre>
    
    <p>
      And the generated HTML is
    </p><figure id="attachment_536" style="width: 477px" class="wp-caption aligncenter">
    
    <img class="size-full wp-image-536" src="https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-hidden-in-Angular.png" alt="ngIf hidden in Angular" width="477" height="111" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-hidden-in-Angular.png 477w, https://www.angularjswiki.com/wp-content/uploads/2018/07/ngIf-hidden-in-Angular-300x70.png 300w" sizes="(max-width: 477px) 100vw, 477px" /><figcaption class="wp-caption-text">ngIf hidden in Angular</figcaption></figure> 
    
    <p>
      Irrespective of display hide or show the paragraph element will be added to the DOM.
    </p>
    
    <h2 id="step-3">
      Why ngIf directive remove the element rather than hide it?
    </h2>
    
    <p>
      Hiding and showing the element after rendering is fine if the paragraph or div element is very small and with simple interaction.
    </p>
    
    <p>
      But with Angular, we can build rich applications some of the components may use too many resources. And even though the component is hidden, the component will be attached to its DOM element. It will keep on listening for events. Angular keep on checking for changes related to data bindings. The component behavior still exists even though it is hidden.
    </p>
    
    <p>
      The component and its children components will be tie up resources. Memory burden might be high which results in poor performance, responsiveness can degrade and the user has no knowledge, why the application is slow.
    </p>
    
    <p>
      So it&#8217;s better to add or remove elements to the component element to the HTML DOM rather than hiding or showing them.
    </p>
    
    <p>
      But as I said earlier if the component is simple it is better to hide or show it, because component reinitialization operation could be expensive.
    </p>
    
    <h2 id="step-4">
      ngIf vs hidden or display none in Angular:
    </h2>
    
    <p>
      [table id=3 /]
    </p>
    
    <p>
      I hope you understand all the differences between ngIf and hidden or display none in Angular
    </p>
  </div>
</div>