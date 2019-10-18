+++
title = "How to add conditional class in Angular using ngClass"
subtitle = "add a class dynamically using ngClass"
summary ="To add a conditional class in Angular we can pass an object to `ngClass` where key is the class name and value is condition i.e., true or false"
keywords=["conditional class angular,add class dynamically in Angular,ngClass angular"]
date="2019-10-17T01:01:05+0000"
lastmod="2019-10-17T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]

+++

To add a conditional class in Angular we can pass an object to `ngClass` where key is the `class name` and `value` is condition i.e., true or false as shown below.

```
<div [ngClass]="{'classname' : condition}"></div>
```
And in the above code, class name will be added only when the condition is true.

We can add a single class or multiple classes dynamically based upon the conditions. 

We will go through few examples to understand it further.

To add a single conditional class we can use the above syntax

We can directly pass `true` or `false` to add a class.

```
<div [ngClass]="{'singleClass' : true}"></div>
```

As the key `singleClass` value is `true` class will be added to the `div` element.

For example if we want to add a class name based upon multiple conditions, we can pass a conditional expression as an object value.

Usually in our projects we will be having error,warning and info texts to communicate with the user.

I have added a three classes error,warn and message and added CSS styles to them.

```
.error{
    color:red;
}

.warn{
    color:orange;
}

.message{
    color:green;
}

```

Now to add these classes dynamically based upon certain conditions we will use `[ngClass]`.

We have an object in our component which determines the priority of the text.

```
interfact information{
    priority:number;
    text:string;
}
```
If the the `priority` is less than 10 will add `message` class, if it's between 10 to 20 will add `warn` class and if it's greater than 30 will add `error` class

```
<div [ngClass]="{'message': info.priority<10}">{{info.text}}</div> 
```

And in case of `warn` class we need to add it based upon multiple conditions. We can pass conditional expression as an object key as shown. 

```
<div [ngClass]="{'warn': info.priority > 10 && info.priority < 20}">
{{info.text}}
</div> 
```

And for error class only one condition we need to check as shown below.

```
<div [ngClass]="{'error': info.priority > 30}">{{info.text}}</div> 

```
You might be wondering or confused because in the above code, I am adding individual classes based on certain conditions.

But Actually we need to add only one single class to the `div` element(either message or warn or error).

We can pass multiple object key values to the `ngClass` as shown below

```
<div [ngClass]="{'firstClass': true, 
                 'secondClass': true, 
                 'thirdClass': false}"></div>
```

Now to the information `div` we can pass the above three conditional classes.

```
<div [ngClass]="{'message': info.priority < 10,
                 'warn': info.priority > 10 && info.priority < 20, 
                 'error': info.priority > 30}">

{{info.text}}

</div>

```
The code might be little bit weird, but only single class will be added at run time.

In addition to that we can add multiple classes based upon the conditions.

In the above information text, we need to add an icon in case of class `error`.

```
<div [ngClass]="{'error fa fa-exclamation-triangle': info.priority>30}">
{{info.text}}
</div> 

```

I am adding a font awesome icon class `fa-exclamation-triangle` in addition to the class `error`.

[Free 1500+ font awesome icons List](https://www.angularjswiki.com/angular/font-awesome-icons-list-usage-css-content-values/)

We can add as many as classed separated by delimiter space

```
<div [ngClass]="{'class1 class2 class3 class4': conditionalExpression}">
</div> 
```

Now our template html file became more complex in addition to the new font awesome class icon.

```
<div [ngClass]="{'message': info.priority < 10,
                 'warn': info.priority > 10 && info.priority < 20, 
                 'error fa fa-exclamation-triangle': info.priority>30}">

{{info.text}}

</div>
```

To avoid this we can simply move the logic to a method in our component ts file.

```
<div [ngClass]="getClass(info.priority)">{{info.text}}</div>

```

And in component ts file actual logic will be performed

```
getClass(priority){
  
   return {'message': priority < 10,
                 'warn': priority > 10 && priority < 20, 
                 'error fa fa-exclamation-triangle': priority > 30}

}
```

Or we can directly return class names instead of object keys as shown below

```
getClass(priority){
  var classList='';
  if(priority < 10){
     classList = 'message'; 
  }else if (priority > 10 && priority < 20){
      classList = 'warn';
  }else if(priority > 30){
      classList = 'error fa fa-exclamation-triangle';
  }
  return classList;
}
```
