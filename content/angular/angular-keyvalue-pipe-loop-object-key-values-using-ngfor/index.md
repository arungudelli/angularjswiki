+++
title = "Loop Object Key Values In Angular Using *NgFor & Angular Keyvalue Pipe"
menuTitle = "Angular KeyValue Pipe"
description ="KeyValue pipe released in Angular 6.1 to loop through objects,Maps and arrays.Now by passing KeyValue pipe to *ngFor we can loop through objects key values "
keywords="angular keyvalue pipe,angular 6.1,loop object key values using *ngfor,ngfor,angular *ngfor"
og_image="https://www.angularjswiki.com/wp-content/uploads/2018/07/Angular-keyValue-pipe.jpeg"
+++


## Angular keyValue Pipe:

_KeyValue_ pipe released in Angular 6.1 to loop through objects,Maps and arrays.Now by passing _KeyValue_ pipe to *ngFor we can loop through objects key values & maps.

Prior to this Angular 6.1 release we cannot iterate directly through objects key values & maps using _*ngFor_ directive.

To tackle this issue Angular _keyvalue_ pipe has been introduced.

This _keyvalue_ pipe converts Object or Map into an array of key value pairs. Converted array will be sorted by keys according to unicode values.

And if the keys are of complex types we can pass compare function to sort the array.

Go through the below angular examples to understand Angular keyvalue pipe further.

## Table of Contents:

  1. [Angular KeyValue Pipe Example](#step-1)
  2. [Loop Object key Values using *ngFor & angular keyvalue pipe](#step-11)
  3. [Angular KeyValue Pipe Default sorting](#step-5)
  4. [Passing Custom Compare function to Angular KeyValue Pipe for sorting](#step-6)
  5. [Loop Map key Values using *ngFor & Angular KeyValue pipe](#step-2)
  6. [Loop Arrays using *ngFor & Angular KeyValue pipe](#step-3)
  7. [The pipe &#8216;keyvalue&#8217; could not be found error](#step-4)

## Angular KeyValue Pipe Example: {#step-1}

We will create a new component in our Angular project called _KeyValuepipeComponent._ In that we will add a simple object, map , array variables.

Have a look at the below _keyvalue_ pipe example

<div>
  <pre>import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-keyvaluepipe',
  templateUrl:'./keyvaluepipe.component.html',
  styleUrls: ['./keyvaluepipe.component.css']
})

export class KeyvaluepipeComponent implements OnInit {

 object: {[key:number]:string} = 
 {2:'Angular keyvalue Pipe', 1:'Angular ngFor'};
 
 map=new Map([[2, 'Angular keyvalue Pipe'], [1, 'Angular ngFor']]);
 
 array= ["Angular keyvalue Pipe","Angular ngFor"]

 constructor() { }

 ngOnInit() {}

}</pre>
  
  <h2 id="step-11">
    Loop Object key Values using *ngFor & keyvalue pipe:
  </h2>
  
  <p>
    And in our template file we will loop the object keys and value using *ngFor and keyvalue pipe
  </p>
  
  <div>
    <pre>  &lt;p&gt;Loop Through Object using KeyValue Pipe and *ngFor&lt;/p&gt;
  
  &lt;div *ngFor="let item of object | keyvalue"&gt;
    {{item | json }}
    Object Key:{{item.key}} and Object Value:{{item.value}}
  &lt;/div&gt;</pre>
    
    <p>
      And the out will be
    </p>
    
    <pre>Loop Through Object using KeyValue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Object Key:1 and Object Value:Angular ngFor

{ "key": "2", "value": "Angular keyvalue Pipe" } 
Object Key:2 and Object Value:Angular keyvalue Pipe</pre>
    
    <p>
      The converted output array will be ordered by keys(Unicode point value) that is why <em>Angular ngFor</em> displayed ahead of  <em>Angular keyvalue Pipe</em>
    </p>
    
    ![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2018/07/Angular-keyValue-pipe.jpeg "Angular keyValue pipe")
    
    <h2 id="step-5">
      Angular KeyValue Pipe Default sorting:
    </h2>
    
    <p>
      As mentioned above keyvalue pipe sorts the converted array based upon unicode point values of keys
    </p>
    
    <ol>
      <li>
        If the keys are numbers they are sorted by ascending order.
      </li>
      <li>
        If the keys are strings they are sorted by alphabetical order.
      </li>
      <li>
        If the keys are mixed i.e., one key is string and other key is number then both are converted to strings, first sorted by numbers in ascending order and then sorted by strings in alphabetical order.
      </li>
      <li>
        If the key is <em>undefined</em> or <em>null</em> they are displayed at last.
      </li>
    </ol>
    
    <p>
      Angular KeyValue pipe uses <em>defaultComparator</em> function to sort the key value array. But if the key is complex,we can pass our own custom compare function to sort the array. Go through the below example
    </p>
    
    <h2 id="step-6">
      Passing custom compare function to angular KeyValue Pipe for sorting:
    </h2>
    
    <p>
      If the object key is a complex type, the <em>defaultComparator</em> may not serve our purpose. We need to write our own comparator.
    </p>
    
    <div>
      <pre>export class ProductModel {
   productId: Product;
   productType : string;
   constructor(id:Product,description:string){
     this.productId = id;
     this.productType = description;
  }
}

export class Product{

   id:number;
   description:string;
   constructor(id:number,key:string){
       this.id=id;
       this.description=key;
   }
}</pre>
    </div>
  </div>
</div>

<div>
</div>

<div>
  I created two classes Product and ProductModel. We will use these both classes to create a complex object type
</div>

<div>
</div>

<div>
  <div>
    <pre>products=newMap&lt;Product,ProductModel&gt;();
constructor() {
 
 var key=new Product(900,"Angular Video");
 var product=new ProductModel(key,"Video");
 this.products.set(key,product);
 key=new Product(100,"Angular Book");
 product=new ProductModel(key,"Book");
 this.products.set(key,product);
}</pre>
  </div>
</div>

<div>
</div>

<div>
  <em>products</em> variable is of a type <em>Map<Product,ProductModel></em>. Where key type is <em>Product.</em> Now we will use keyvalue pipe to loop through the products variable.
</div>

<div>
  <div>
    <pre>&lt;p&gt;Complex Types&lt;/p&gt;&lt;br&gt;
&lt;div *ngFor="let product of products | keyvalue"&gt;
 {{product| json }} &lt;br&gt;
 Product key: {{product.key}} and Product Value:{{product.value}}
&lt;/div&gt;</pre>
  </div>
</div>

<div>
</div>

<div>
  And the output is
</div>

<pre>{ "key": { "id": 900, "description": "Angular Video" }, 
"value": { "productId": { "id": 900, "description": "Angular Video" }, "productType": "Video" } } 
Product Id: 900 
Product description: Angular Video 
Product Model :Video
{ "key": { "id": 100, "description": "Angular Book" }, 
"value": { "productId": { "id": 100, "description": "Angular Book" }, "productType": "Book" } } 
Product Id: 100 
Product description: Angular Book 
Product Model :Book</pre>

Now we will sort the key value array based upon product id (900,100) by passing custom compare function to keyvalue pipe.

I wrote _productComparator_ to sort the key value array based on the product id.

<div>
  <div>
    <pre>productComparator(a:KeyValue&lt;Product, ProductModel&gt;, b:KeyValue&lt;Product, ProductModel&gt;) {
if (a.key.id===b.key.id) {
return 0;
}
return a.key.id &lt; b.key.id ? -1 : 1;
}</pre>
  </div>
</div>

Now we will pass the compare function to KeyValue pipe.

_let product of products | keyvalue:productComparator_

<div>
  <div>
    <pre>&lt;p&gt;Complex Types&lt;/p&gt;&lt;br&gt;
&lt;div *ngFor="let product of products | keyvalue:productComparator"&gt;
 {{product| json }} &lt;br&gt;
 Product Id: {{product.key.id}} &lt;br&gt;
 Product description: {{product.key.description}} &lt;br&gt;
 Product Model :{{product.value.productType}}
&lt;/div&gt;</pre>
  </div>
</div>

And the output key value array is sorted by product id as shown below

<div>
  <pre>{ "key": { "id": 100, "description": "Angular Book" }, 
"value": { "productId": { "id": 100, "description": "Angular Book" }, "productType": "Book" } } 
Product Id: 100 
Product description: Angular Book 
Product Model :Book

{ "key": { "id": 900, "description": "Angular Video" }, 
"value": { "productId": { "id": 900, "description": "Angular Video" }, "productType": "Video" } } 
Product Id: 900 
Product description: Angular Video 
Product Model :Video</pre>
</div>

<div>
  You will get an error saying <em>Cannot find name &#8216;KeyValue&#8217; .</em>
</div>

<div>
</div>

<div>
  In the <em>productComparator</em> method we are passing KeyValue type parameter. So we need to add interface of <em>KeyValue</em> in our code
</div>

<div>
  <div>
    <pre>export interface KeyValue&lt;K, V&gt; {
  key:K;
  value:V;
}</pre>
  </div>
</div>

<div>
  <div>
    <h2 id="step-2">
      Loop Map key Values using *ngFor & Angular keyvalue pipe:
    </h2>
    
    <p>
      And looping simple Map key and values is very similar ,same syntax we need pass <em>keyvalue</em> pipe to <em>*ngFor</em>
    </p>
    
    <div>
      <pre> &lt;p&gt;Loop Through Maps using KeyValue Pipe&lt;/p&gt;&lt;br&gt;
 
 &lt;div *ngFor="let item of map | keyvalue"&gt;
  {{item| json }} &lt;br/&gt;
  Map Key: {{item.key}} and Map Value:{{item.value}}
 
&lt;/div&gt;</pre>
    </div>
    
    <p>
      See the below output
    </p>
    
    <pre>Loop Through Maps using KeyValue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Map Key: 1 and Map Value:Angular ngFor

{ "key": "2", "value": "Angular keyvalue Pipe" } 
Map Key: 2 and Map Value:Angular keyvalue Pipe

</pre>
    
    <p>
      As the <em>key</em> is of type number, Key 1 is displayed first then Key 2. means they are sorted by numbers ascending order.
    </p>
    
    <h2 id="step-3">
      Loop Arrays using *ngFor & Angular keyvalue pipe:
    </h2>
    
    <p>
      Even we can loop through an array using keyvalue pipe and the key will be the index of the array.
    </p>
    
    <div>
      <pre>&lt;p&gt;Loop Through Arrays using KeyValue Pipe&lt;/p&gt;&lt;br&gt;
 &lt;div *ngFor="let item of array | keyvalue"&gt;
  {{item| json }} &lt;br&gt;
  Array key: {{item.key}} and Array Value:{{item.value}}
 &lt;/div&gt;</pre>
      
      <p>
        And the array will be displayed as
      </p>
      
      <pre>Loop Through Arrays using KeyValue Pipe

{ "key": "0", "value": "Angular keyvalue Pipe" } 
Array key: 0 and Array Value:Angular keyvalue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Array key: 1 and Array Value:Angular ngFor</pre>
      
      <h2 id="step-4">
        The pipe &#8216;keyvalue&#8217; could not be found error:
      </h2>
      
      <p>
        As the keyvalue pipe introduced in Angular 6.1 release. If you try to use <em>keyvalue</em> pipe in older versions of Angular you will get <em>The pipe &#8216;keyvalue&#8217; could not be found</em> error. You need to update <em>@angular/core</em> by runnin below angular cli ng command
      </p>
      
      <pre> ng update @angular/core</pre>
      
      <p>
        &nbsp;
      </p>
    </div>
  </div>
</div>