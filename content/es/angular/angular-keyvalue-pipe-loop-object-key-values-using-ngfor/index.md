+++ title = "Loop Object Key Values In Angular Using *NgFor & Angular Keyvalue Pipe" subtitle = "Angular keyvalue pipe" type="post" summary ="KeyValue pipe released in Angular 6.1 to loop through objects,Maps and arrays.Now by passing KeyValue pipe to *ngFor we can loop through objects key values" keywords=\["angular keyvalue pipe,angular 6.1,loop object key values using *ngfor,ngfor,angular *ngfor"] date="2018-08-15T01:01:05+0000" lastmod="2019-01-30T04:58:49+0000" draft=false authors = ["admin"\] \[image\] caption = "Angular keyValue pipe"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false +++

`KeyValue` pipe released in Angular 6.1 to loop through objects,Maps and arrays.Now by passing `KeyValue` pipe to *ngFor we can loop through objects key values & maps.

Prior to this Angular 6.1 release we cannot iterate directly through objects key values & maps using `*ngFor` directive.

To tackle this issue Angular `keyvalue` pipe has been introduced.

This `keyvalue` pipe converts Object or Map into an array of key value pairs. Converted array will be sorted by keys according to unicode values.

And if the keys are of complex types we can pass compare function to sort the array.

Go through the below angular examples to understand Angular keyvalue pipe further.

{{% toc %}}

## Angular KeyValue Pipe Example

We will create a new component in our Angular project called `KeyValuepipeComponent`. In that we will add a simple object, map , array variables.

Have a look at the below `keyvalue` pipe example

```
import { Component, OnInit } from '@angular/core';

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

}
```

## Loop Object key Values using *ngFor & keyvalue pipe

And in our template file we will loop the object keys and value using *ngFor and keyvalue pipe

```
 <p>Loop Through Object using KeyValue Pipe and *ngFor</p>

  <div *ngFor="let item of object | keyvalue">
    {{item | json }}
    Object Key:{{item.key}} and Object Value:{{item.value}}
  </div>
```

And the out will be

```
Loop Through Object using KeyValue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Object Key:1 and Object Value:Angular ngFor

{ "key": "2", "value": "Angular keyvalue Pipe" } 
Object Key:2 and Object Value:Angular keyvalue Pipe
```

The converted output array will be ordered by keys(Unicode point value) that is why `Angular ngFor` displayed ahead of `Angular keyvalue Pipe`

## Angular KeyValue Pipe Default sorting

As mentioned above keyvalue pipe sorts the converted array based upon unicode point values of keys

1. If the keys are numbers they are sorted by ascending order.
2. If the keys are strings they are sorted by alphabetical order.
3. If the keys are mixed i.e., one key is string and other key is number then both are converted to    strings, first sorted by numbers in ascending order and then sorted by strings in alphabetical      order.
4. If the key is `undefined` or `null` they are displayed at last.

Angular KeyValue pipe uses `defaultComparator` function to sort the key value array. But if the key is complex,we can pass our own custom compare function to sort the array.

Go through the below example

## Passing custom compare function to angular KeyValue Pipe for sorting

If the object key is a complex type, the `defaultComparator` may not serve our purpose. We need to write our own comparator.

```
export class ProductModel {
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
}
```

I created two classes Product and ProductModel. We will use these both classes to create a complex object type

```
products=newMap<Product,ProductModel>();
constructor() {

 var key=new Product(900,"Angular Video");
 var product=new ProductModel(key,"Video");
 this.products.set(key,product);
 key=new Product(100,"Angular Book");
 product=new ProductModel(key,"Book");
 this.products.set(key,product);
}
```

`products` variable is of a type `Map<Product,ProductModel>`. Where key type is `Product`.Now we will use keyvalue pipe to loop through the products variable.

```
<p>Complex Types</p><br>
<div *ngFor="let product of products | keyvalue">
 {{product| json }} <br>
 Product key: {{product.key}} and Product Value:{{product.value}}
</div>
```

And the output is

```
{ "key": { "id": 900, "description": "Angular Video" }, 
"value": { "productId": { "id": 900, "description": "Angular Video" }, "productType": "Video" } } 
Product Id: 900 
Product description: Angular Video 
Product Model :Video
{ "key": { "id": 100, "description": "Angular Book" }, 
"value": { "productId": { "id": 100, "description": "Angular Book" }, "productType": "Book" } } 
Product Id: 100 
Product description: Angular Book 
Product Model :Book
```

Now we will sort the key value array based upon product id (900,100) by passing custom compare function to keyvalue pipe.

I wrote `productComparator` to sort the key value array based on the product id.

```
<p>Complex Types</p><br>
<div *ngFor="let product of products | keyvalue:productComparator">
 {{product| json }} <br>
 Product Id: {{product.key.id}} <br>
 Product description: {{product.key.description}} <br>
 Product Model :{{product.value.productType}}
</div>
```

Now we will pass the compare function to KeyValue pipe.

`let product of products | keyvalue:productComparator`

```
<p>Complex Types</p><br>
<div *ngFor="let product of products | keyvalue:productComparator">
 {{product| json }} <br>
 Product Id: {{product.key.id}} <br>
 Product description: {{product.key.description}} <br>
 Product Model :{{product.value.productType}}
</div>
```

And the output key value array is sorted by product id as shown below

```
{ "key": { "id": 100, "description": "Angular Book" }, 
"value": { "productId": { "id": 100, "description": "Angular Book" }, "productType": "Book" } } 
Product Id: 100 
Product description: Angular Book 
Product Model :Book

{ "key": { "id": 900, "description": "Angular Video" }, 
"value": { "productId": { "id": 900, "description": "Angular Video" }, "productType": "Video" } } 
Product Id: 900 
Product description: Angular Video 
Product Model :Video
```
You will get an error saying `Cannot find name 'KeyValue'`

In the `productComparator` method we are passing KeyValue type parameter. So we need to add interface of `KeyValue` in our code

```
export interface KeyValue<K, V> {
  key:K;
  value:V;
}
```
## Loop Map key Values using *ngFor & Angular keyvalue pipe

And looping simple Map key and values is very similar ,same syntax we need pass `keyvalue` pipe to `*ngFor`

```
<p>Loop Through Maps using KeyValue Pipe</p><br>

 <div *ngFor="let item of map | keyvalue">
  {{item| json }} <br/>
  Map Key: {{item.key}} and Map Value:{{item.value}}

</div>
```
See the below output

```
Loop Through Maps using KeyValue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Map Key: 1 and Map Value:Angular ngFor

{ "key": "2", "value": "Angular keyvalue Pipe" } 
Map Key: 2 and Map Value:Angular keyvalue Pipe

```

As the `key` is of type number, Key 1 is displayed first then Key 2. means they are sorted by numbers ascending order.

## Loop Arrays using *ngFor & Angular keyvalue pipe

Even we can loop through an array using keyvalue pipe and the key will be the index of the array.

```
<p>Loop Through Arrays using KeyValue Pipe</p><br>
 <div *ngFor="let item of array | keyvalue">
  {{item| json }} <br>
  Array key: {{item.key}} and Array Value:{{item.value}}
 </div>
 ```

And the array will be displayed as

```
Loop Through Arrays using KeyValue Pipe

{ "key": "0", "value": "Angular keyvalue Pipe" } 
Array key: 0 and Array Value:Angular keyvalue Pipe

{ "key": "1", "value": "Angular ngFor" } 
Array key: 1 and Array Value:Angular ngFor
```

## The pipe 'keyvalue' could not be found error

As the keyvalue pipe introduced in Angular 6.1 release. If you try to use `keyvalue` pipe in older versions of Angular you will get `The pipe 'keyvalue' could not be found` error.

You need to update `@angular/core` by runnin below angular cli ng command

```
ng update @angular/core
```