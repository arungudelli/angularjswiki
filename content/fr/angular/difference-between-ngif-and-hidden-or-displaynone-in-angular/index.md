The main difference between angular ngIf directive & hidden or display:none is ngIf will add or remove the element from DOM based on condition or expression. `hidden` attribute in html5 and display none CSS will show or hide the HTML element.


+++ title = "Difference Between NgIf And Hidden Or Display:none In Angular" subtitle = "ngif vs hidden or display:none" type="post" summary ="The main difference between angular ngIf directive & hidden or display:none is ngIf will add or remove the element from DOM based on condition or expression. hidden attribute in html5 and display none CSS will show or hide the HTML element."

We will go through the examples to understand them further.

{{% toc %}}

## ngIf in Angular
Have a look at a simple <a href="https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/" target="_blank" rel="noopener">ngIf<a> example

```
<div *ngIf="true">This will be added to DOM by ngIf</div>
<div *ngIf="false">This will be removed from DOM by ngIf</div>

<ng-template *ngIf="true">
<div>This will be added to DOM by ngIf</div>
</ng-template>
<ng-template *ngIf="false">
<div>This will be removed from DOM by ngIf</div>
</ng-template>
```

As explained in ngIf else article angular will convert the `ngIf` element to `<ng-template>` element. See the generated HTML DOM.

{{< figure src="ngIf-vs-Hidden.png" title="ngIf vs Hidden" alt="ngIf vs Hidden">}}

And the second div is not at all added the DOM. Angular will convert `<ng-template>` to a comment which gives us information about evaluated `ngIf` condition `true` or `false`.

## hidden or display:none in Angular

Now we will see an example with hidden attribute in html5 and display none CSS.

```
<p [style.display]="'block'">
This paragraph is visible.
</p>
<p [style.display]="'none'">
This paragraph is hidden but still in the DOM.
</p>
<p hidden>
This paragraph is hidden but still in the DOM.
</p>
```
And the generated HTML is

{{< figure src="ngIf-hidden-in-Angular.png" title="ngIf hidden in Angular" alt="ngIf hidden in Angular">}}

Irrespective of display hide or show the paragraph element will be added to the DOM.

## Why ngIf directive remove the element rather than hide it?

Hiding and showing the element after rendering is fine if the paragraph or div element is very small and with simple interaction.

But with Angular, we can build rich applications some of the components may use too many resources. And even though the component is hidden, the component will be attached to its DOM element. It will keep on listening for events. Angular keep on checking for changes related to data bindings. The component behavior still exists even though it is hidden.

The component and its children components will be tie up resources. Memory burden might be high which results in poor performance, responsiveness can degrade and the user has no knowledge, why the application is slow.

So it's better to add or remove elements to the component element to the HTML DOM rather than hiding or showing them.

But as I said earlier if the component is simple it is better to hide or show it, because component reinitialization operation could be expensive.

## ngIf vs hidden or display none in Angular

<div class="table-responsive">
<table class="table">
    <thead>
        <tr>
            <th>ngIf</th>
            <th>hidden or display none</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Angular's structural directive</td>
            <td>Normal HTML5 attribute</td>
        </tr>
        <tr>
            <td>No DOM element is added if ngIf evaluates to false.</td>
            <td>DOM element will be added to HTML</td>
        </tr>
        <tr>
            <td>ngIf might be slow while adding removing elements to the DOM because of intializations</td>
            <td>As the element is already added to DOM showing and hiding or very fast</td>
        </tr>
        <tr>
            <td>Ideal for rich angular  applications</td>
            <td>Ideal if the component is simple no much interaction</td>
        </tr>
    </tbody>
</table>
</div>

I hope you understand all the differences between ngIf and hidden or display none in Angular