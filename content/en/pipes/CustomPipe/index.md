+++
title = "How to create custom pipe in Angular"
date = 2020-03-06T00:00:00
lastmod = 2020-03-06T01:00:00
draft = false  # Is this a draft? true/false
toc = false  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "pipes"
next="pipes/jsonpipe"
featured="angular-custom-pipe.jpg"
authors = ["admin"]
summary ="Steps to create custom pipe in Angular"
keywords=["Angular custom pipe,custom Pipe"]

# Add menu entry to sidebar.

linktitle = "Custom Pipe"
[menu.pipes]
  parent = "Pipes In Angular"
  weight = 4
+++

Steps to create custom pipe in Angular

1. Define a meaningful and useful name for custom pipe.
2. Create a file named `custom.pipe.ts` in your project.
3. Add a Class named "CustomPipe".
4. Import Pipe and PipeTransform from `@angular/core`.
5. Use The Pipe decorator (@Pipe) to define the pipe name that will be used within the components. I have given pipe name as `custom`.   
6. The custom pipe class should implement PipeTransform interface.
7. And then implement PipeTransform's transform method which accepts an input value followed by optional pipe parameters and returns the transformed value.
8. Add the reference to custom pipe in `app.module.ts` file.
9. Add the custom pipe class name to the declaration array of `app.module.ts`. 
10. Finally use the custom pipe in components by using the name given in Pipe decorator. i.e., "custom".

```
   import { Pipe, PipeTransform } from '@angular/core';
   @Pipe({
     name: 'custom'
   })
   export class CustomPipe implements PipeTransform {
        transform(value: any, args: any[]): any {
           return null;
         }
    }
```

And in component html file use the custom pipe as shown below.

```
{{ input | custom }}
```

{{% toc %}}

## Creating custom pipe using Angular CLI command.

The above approach requires a lot of manual work. Instead of that we can use angular cli ng generate command to create custom pipes.

### ng generate pipe

We can use `ng generate pipe` followed by pipe name command to create custom pipes in angular.

```
ng generate pipe custom

// Output
CREATE src/app/custom.pipe.spec.ts (187 bytes)
CREATE src/app/custom.pipe.ts (217 bytes)
UPDATE src/app/app.module.ts (2931 bytes)
```

The command will create a file named `custom.pipe.ts` along with sample code to impelement custom pipe at application root level.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
```
 
Additionally the command will create a spec file to write unit tests and it will update reference in `app.module.ts`.

{{< figure src="create-custom-pipe-angular.png" title="create custom pipe angular" alt="create custom pipe angular">}} 

## Angular Custom Pipe Example

Now we will go through an example to understand it further.

We will create a custom pipe which converts a number to it's square.

i.e, if we pass a number (2) to the custom pipe,it will multiply number by itself and returns the converted value (4).

We will use ng generate pipe command to create custom pipe.

```
ng generate pipe square 

// Output
CREATE src/app/square.pipe.spec.ts (187 bytes)
CREATE src/app/square.pipe.ts (217 bytes)
UPDATE src/app/app.module.ts (2931 bytes)
```

Now we will change the transform method to accept a number parameter and returns it's square value.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
```

Now we can use our custom pipe in template expression as shown below.

```
{{ 4 | square}}

//OUTPUT

16
```

## Angular custom pipe with parameters

Now we will create a custom pipe which accepts parameters.

The above custom pipe will return square value of the number.

Instead of that we can pass an exponent parameter, which decides how many times we have to multiply the number.

We will name our custom pipe as `power`

```
ng generate pipe power

//OUTPUT
CREATE src/app/power.pipe.spec.ts (183 bytes)
CREATE src/app/power.pipe.ts (215 bytes)
UPDATE src/app/app.module.ts (3054 bytes)
```
Now in transform method we will use `Math.pow` to transform the number as shown below.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number,exponent: number): number {
    return Math.pow(value,exponent);
  }

}
```

In the component file we have to pass exponent parameter to our custom pipe using colon.

```
{{ 10 | power:2}}

//OUTPUT
100
```

## Angular custom pipe with optional parameters

If we are not passing any parameter to the custom pipe, angular cli will return following error.

```
{{ 100 | power}}
```

{{% alert warning %}}
error TS2554: Expected 2 arguments, but got 1.
{{% /alert %}}

Why because exponent parameter is required when using power pipe.

Instead of that we can make parameter optional. 

To make a parameter optional in a custom pipe, we have to assign some default value to the parameter.

In this case we can assign value of exponent parameter to 1, so that if we are not passing any parameter it will returns the same number. i.e., exponent of 1.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  transform(value: number,exponent: number=1): number {
    return Math.pow(value,exponent);
  }
}
```

I am assigning exponent parameter to default number `1`.

So if we use custom pipe without parameter it will returns the same number.

```
{{ 10 | power}}

//OUTPUT
10
```

## Angular Custom pipe with multiple parameters.

The custom pipe created above will accept only single parameter i.e., exponent.

We can pass multiple arguments to angular pipes by separating them with colons as shown below.

```
{{ inputData | customPipe: 'argument1':'argument2':'argument3'... }}
```

Now we will create a custom pipe which accepts multiple parameters.

We will extend our `power` pipe to add some buffer value after applying exponent.

We are passing an extra parameter `buffer` to transform method of pipe as shown below.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  transform(value: number,exponent: number=1,buffer: number=0): number {
    return Math.pow(value,exponent) + buffer;
  }
}
```

Now in component html file use pipe with both exponent and buffer parameters by separating them with colons.

```
{{ 10 | power : 2 : 20}}

//OUTPUT
120
```

## Angular Custom pipe with variable number of arguments.

We can create a pipe which can accepts variable number of arguments by using rest parameter.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class PowerPipe implements PipeTransform {
  transform(firstName: string,...lastName:string[]): string {
    return firstName +" "+ lastName.join(" ");
  }
}
```

I have created a custom pipe named `userFullName` which has an argument `...lastName` (rest parameter) which accepts variable number of parameters.

Now in component html file we can use `userFullName` with any number of parameters as shown below.

```
//No parameter
<p>{{ "Arun" | userFullName }}</p>    

//Arun

// One parameter
<p>{{ "Arun" | userFullName :"kumar"}}</p>    

//Arun kumar

// two parameter
<p>{{ "Arun" | userFullName : "kumar" : "gudelli" }}</p>    

//Arun kumar gudelli
```

## Angular Custom Pipe not found Error NG8004: No pipe found with name

The most common error you will get while creating custom pipes is `No Pipe found with name`.

When we create a custom pipe, we must include our pipe in the declarations array of the AppModule. (9th step in creating custom pipe).

But if you use angular cli to create a pipe mostly you will not get this error as ng generate pipe will automatically add reference in declaration array of `app.module.ts` file

