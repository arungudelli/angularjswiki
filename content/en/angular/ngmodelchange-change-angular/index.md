+++
title = "ngModelChange and change in Angular with examples"
subtitle = "Understanding differences between (ngModelChange) and (change) in Angular"
summary ="(ngModelChange) is an Angular event, where as (change) is an HTML DOM event"
keywords=["ngModelChange, change"]
date="2020-12-03T00:00:05+0000"
lastmod="2020-12-03T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Angular 11 and typescript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

In Angular, We will use `ngModel` for two way data binding.

Whenever a change happens in `ngModel`, Angular will trigger `ngModelChange` event.

**ngModelChange** is the @output property of `ngModel` directive. and it's specific to Angular framework.

Where as **(change)** event is classic HTML DOM event, independent of Angular framework triggered when a change happened in input element.

In this tutorial we will understand the differences between (ngModelChange) and (change) events by going through few examples.

{{%toc%}}

## ngModelChange example

We will create a component in our Angular project called `NgModelChange`.

```
export class NgmodelchangeComponent implements OnInit {

  user = new User(); 

  userNamengmodelchange(value){
    console.log(value);
    console.log(this.user.Name)
  }

  phoneNumberngmodelchange(value){
    this.user.PhoneNumber = value;
    console.log(value);

  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}

export class User{
  Name : string;
  PhoneNumber : Number;
}
```

And in component html file I am binding `User` object properties to the `input` elements.

```
User Name:<input [(ngModel)]="user.Name"/>
Phone Number:<input [(ngModel)]="user.PhoneNumber"/>

<p>User Name is {{user.Name}}</p>
<p>Phone Number is {{user.PhoneNumber}}</p>

```

Now whenever I change the input elements, the paragraph element will be updated with the latest value because of two way data binding. 

You might be thinking that (ngModelChange) event won't be triggered as we have not written it. But you are wrong.

{{% alert note %}}

`<input [(ngModel)]="user.Name"/>` is syntactic sugar for

`<input [ngModel]="user.name" (ngModelChange)="user.Name = $event"/>`

{{% /alert %}}

Have a look at `ngModel` directive [source code](https://github.com/angular/angular/blob/master/packages/forms/src/directives/ng_model.ts) 

```
export class NgModel extends NgControl implements OnChanges, OnDestroy {

  /**
   * @description
   * Event emitter for producing the `ngModelChange` event after
   * the view model updates.
   */
  @Output('ngModelChange') update = new EventEmitter();


  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue: any): void {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }

}  
```

`NgModel` has a property called `output` bound to an EventEmitter instance, and when a change happens in view model, it will emit the `ngModelChange` event.

From this we can come to a conclusion that, we cannot use `(ngModelChange)` event without  `ngModel`. i.e., it's specific to Angular framework only.

Now we will pass a custom ngModelChange function.

```
<input [ngModel]="user.Name" (ngModelChange)="userNamengmodelchange($event)"/>

// In Component.ts file
userNamengmodelchange(value){
    console.log(value);          //Changed Value
    console.log(this.user.Name)  //undefined
}

```

The above code won't update the ngModel property and user.Name will be undefined.

Because we are not updating ngModel property with the new changed value.

{{< video src="/img/videos/ngmodelchange-noupdate.mp4" srcwebm="/img/videos/ngmodelchange-noupdate.webm">}} 

```
// In Component.ts file
userNamengmodelchange(value){
    console.log(value);          //Changed Value
    console.log(this.user.Name)  //undefined
    this.user.Name = value;
}
```

`ngModelChange` event parameter contains the changed value.


If we use two way binding syntax for `ngModel` the value will be updated.

```
<input [(ngModel)]="user.Name" (ngModelChange)="userNamengmodelchange($event)"/>

// In Component.ts file
userNamengmodelchange(value){
    console.log(value);          //Changed Value
    console.log(this.user.Name)  //Changed Value
}
```

The above input tag will be converted to 

```
<input [ngModel]="user.Name"
       (ngModelChange)="user.Name = $event" 
       (ngModelChange)="userNamengmodelchange($event)"/>
```

So the default (ngModelChange) function will update the value of ngModel property. i.e., `user.Name`. 

And the second (ngModelChange) will be triggered printing the user name value in the console.

{{< video src="/img/videos/ngmodelchange-example.mp4" srcwebm="/img/videos/ngmodelchange-example.webm">}} 

So to avoid confusion, it's better to follow one single approach.

Either use shorthand notation of ngModelChange i.e., `[(ngModel)]`, or define a new ngModelChange function and update the value in that function.

```
<input [ngModel]="user.Name"
       (ngModelChange)="userNamengmodelchange($event)"/>

userNamengmodelchange(value){
    console.log(value);          //Changed Value
    console.log(this.user.Name)  //undefined
    this.user.Name = value; // Update the value here
}
```

## Multiple ngModelChange events.

We can attach multiple `ngModelChange` events to an HTML tag. 

And they will be called in the order of their placement in the HTML tag. 

```
<input [ngModel]="user.Name"
       (ngModelChange)="user.Name = $event" 
       (ngModelChange)="userNamengmodelchange($event)"
       (ngModelChange)="userNamePrint()" />

//in the component.ts file
userNamePrint(){
    console.log('userNameprint()');
}

```

{{< video src="/img/videos/ngmodelchange-multiple.mp4" srcwebm="/img/videos/ngmodelchange-multiple.webm">}} 

## change event Example

(change) event is triggered when an input form field **value changed by user**.

```
User Name: <input (change)="changeUserName($event)"/>


changeUserName(e) {
    console.log(e);
    this.user.Name = e.target.value;
}

```

And (change) function parameter contains classic event properties.

To get the value of changed value we need to use `e.target.value` property.

And it only triggered only when we move the focus away from the input element i.e., blurred the input.

{{< video src="/img/videos/change-example.mp4" srcwebm="/img/videos/change-example.webm">}} 

Where as (ngModelChange) triggered on each and every input change.

```
User Name: <input (change)="changeUserName($event)" 
                  (ngModelChange)="userNamePrint()"/>


changeUserName(e) {
    console.log(e);
    this.user.Name = e.target.value;
}


```

The above code won't trigger the (ngModelChange) because of we have not used `ngModel` property binding.

```
User Name: <input [ngModel]="user.Name" 
                  (change)="changeUserName($event)" 
                  (ngModelChange)="userNamePrint()"/>


changeUserName(e) {
    console.log(e);
    this.user.Name = e.target.value;
}

```

The value is updated by change event. As we used [ngModel] on each input change ngModelChange will be called. And the UI is updated with the new value only when focus move away from the element. 

Because ngModel updated in change event.

{{< video src="/img/videos/change-ngmodelchange.mp4" srcwebm="/img/videos/change-ngmodelchange.webm">}} 

## ngModelChange vs change.

Actually it's wrong to compare ngModelChange event with classic HTML change event.

ngModelChange is something specific to Angular, which is used to track the changes happened to `ngModel` property.

<div class="table-responsive">
<table class="table">
	<thead>
		<tr>
			<th>ngModelChange</th>
			<th>change</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>ngModelChange is an Angular Event</td>
        <td>change event is classic HTML DOM event independent of Angular</td>
    </tr>
    <tr>
       <td>We cannot use ngModelChange without `ngModel`</td>
       <td>change event is not related to two way binding we can use it on any HTML form element</td>
    </tr>
    <tr>
       <td>ngModelChange event is called on each input change</td>
       <td>change event is called only when focus move away from the element</td>
    </tr>
    <tr>
       <td>ngModelChange parameter contains the changed value</td>
       <td>change contains event parameter, to access the changed value we need to use e.target.value</td>
    </tr>
    <tr>
       <td>ngModelChange triggered when a change happened to ngModel irrespective of focus of the element.</td>
       <td>change event triggers when the user changes the input.(depenedent on focus of the element)</td>
    </tr>
</tbody>
 </table>   