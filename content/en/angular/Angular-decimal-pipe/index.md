+++
title = "Angular Decimal Pipe & formatting numbers in Angular with examples"
subtitle = "Learn how to format numbers in Angular using Angular Decimal Pipe"
type="post"
summary ="Angular Decimal Pipe is one of the bulit in pipe in Angular used to format numbers according to the given digits info and locale information."
keywords=["Angular Decimal Pipe,formatting numbers in Angular"]
date="2020-01-30T01:01:05+0000"
lastmod="2020-01-30T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "Angular Decimal Pipe"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular Decimal Pipe is one of the bulit in pipe in Angular used to format numbers according to the given digits info and locale information.

{{%toc%}}

## How to use Angular Decimal Pipe

Angular decimal pipe acceps two parameters

1. digits info
2. locale

```
{{ numeric_value | number [ : digitsInfo [ : locale ] ] }}
```

<div class="table-responsive">
<table class="table">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>digitsInfo</td>
			<td>Decimal representation string in the following format:
      {minimumIntegerDigits}.{minimumFractionDigits}-{maximumFractionDigits}</td>
		</tr>
		<tr>
			<td>minimumIntegerDigits</td>
			<td>Represents minimum number of integer digits before the decimal point. Default value is 1.</td>
		</tr>
    <tr>
			<td>minimumFractionDigits</td>
			<td>Represents minimum number of digits after the decimal point. Default value is 0.</td>
		</tr>
    <tr>
			<td>maximumFractionDigits</td>
			<td>Represents maximum number of digits after the decimal point. Default value is 3.</td>
		</tr>
		<tr>
			<td>locale</td>
			<td>represents locale format rules to use. Default value is our project locale (en_US) if set or undefined.Optional parameter</td>
		</tr>
	</tbody>
</table>
</div>

## Angular Decimal Pipe Examples

Now we will go through few angular decimal pipe examples to understand it further.

I created a decimal pipe component in my Angular project and added `decimal_value` number variable.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimalpipe',
  templateUrl: './decimalpipe.component.html',
  styleUrls: ['./decimalpipe.component.scss']
})
export class DecimalpipeComponent implements OnInit {

  decimal_value: number = 5.123456789;

  constructor() { }
  ngOnInit() {
  }

}
```

First we will use decimal pipe without parameters.

```
No Parameters:
{{ decimal_value | number }}

// No Parameters: 5.123
```

As explained above if none of the digit info is given, then decimal pipe will take default options, 1 interger value before decimal point and 3 fraction digits after decimal point.

So the above code is same as  

```
{{ decimal_value | number:'1.0-3' }}

```

Now we will pass digit informaion paramter to decimal pipe and see how it works

```
Digit Info Parameter (3.1-5):
{{ decimal_value | number:'3.1-5' }}
```

In the above code we are instructing decimal pipe to show atleast 3 integer values before decimal points and minimum 1 fraction digit, maximum 5 fraction digits.

```
Digit Info Parameter (3.1-5): 005.12346
```

As our decimal value contains only single digit before decimal point two extra zeroes are padded two satisfy given digit info.

## Angular decimal pipe example with country locale

To display numbers according to country locale format rules, We have to pass country locale code as a second parameter to angular decimal pipe.

To display number in french locale in Angular use locale code 'fr' as parameter as shown below.

```
Decimal pipe with locale france
{{decimal_value | number:'4.5-5':'fr'}}
```

If you execute above code you will get following error in console.

```
InvalidPipeArgument: 'Missing locale data for the locale "fr".' 
for pipe 'DecimalPipe'
```

Because In our application we dont have locale information for 'fr'

To add the country locale information refer [Angular currency pipe](https://www.angularjswiki.com/angular/angular-currency-pipe-formatting-currency-in-angular/#angular-currency-pipe-example-with-locale) article.

After adding locale information you can see the number has been displayed according to france locale rules.

```
Decimal pipe with locale france 0 005,12346
```

## Angular Decimal Pipe rounding

By default Angular decimal pipe rounds off the number to the nearest value using [Arithmetic rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding). 


```
numeric_value : number = -2.15;

{{ numeric_value | number:'1.1-1'}}
// -2.2

numeric_value : number = -2.11;

{{ numeric_value | number:'1.1-1'}}
// -2.1

```

This is different from JavaScript's Math.round() function.

For example if the number is -2.5 

```
{{value | number : '1.0-0'}}
// -3.

Math.round(value)
//-2
```

If the number is -2.1

```
{{value | number : '1.0-0'}}
//-2

// rounding_value : number = 2.23;
{{ rounding_value | number : '1.1-1'}}
2.2

// rounding_value : number = 2.25;
{{ rounding_value | number : '1.1-1'}}
2.3
```

## Rounding Angular number to 2 decimal points

In most of the real world cases, we will round off numbers to 2 decimal places.

So using decimal pipe we can easily format numbers in Angular upto 2 decimal points by passing digit info as `x.2-2` (x is number of digits before decimal points)


```
// rounding_value : number = 2.25234234234;
{{ rounding_value | number : '1.2-2'}}

// 2.25

```

## Angular Decimal Pipe with No decimal points

If you want to remove decimal points and rounding to nearest integet values we can pass digit info as `x.0-0`. (x is minimum number of digits before decimal)

```
//decimal_value: number = 5.123456789;

Without decimal
{{decimal_value | number:'1.0-0'}}
// 5

//decimal_value: number = 5.523456789;

{{decimal_value | number:'1.0-0'}}
//6

```

## How to use decimal pipe in Components in Angular

As explained in [How To Use Angular Pipes in Components & Service ts files](https://www.angularjswiki.com/angular/how-to-use-angular-pipes-in-components-and-services/) article.

Follow the below steps to use decimal pipe in components

1. Import DecimalPipe from @angular\common in app.module.ts file
2. Add the DecimalPipe to provider array.
3. Inject the DecimalPipe in component constructor file using dependency injection.
4. And finally format the numbers using decimal pipe transform method as shown below.

```
export class DecimalpipeComponent implements OnInit {

  decimal_value: number = 5.123456789;
  constructor(private _decimalPipe: DecimalPipe) {
     var decimal_formatted = 
         this._decimalPipe.transform(this.decimal_value,"1.2-2")
     console.log(decimal_formatted);
  }
}

// In console 5.12
```
{{< figure src="decimal pipe in components.png" title="decimal pipe in components" alt="decimal pipe in components">}} 

## formatNumber() method in Angular

The above approach requires us to inject decimal pipe in constructor. 

Instead of that we can use `formatNumber()` method to format numbers in component and service files similarly as decimal pipe.

We can import `formatNumber()` from `@angular/common` and use it in component file.

```
import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { DecimalPipe,formatNumber } from '@angular/common';

export class DecimalpipeComponent implements OnInit {

  decimal_value: number = 5.123456789;
  constructor(@Inject(LOCALE_ID) private locale: string) {
      var formattedNumber= 
      formatNumber(this.decimal_value,this.locale,'1.2-2');
      console.log(formattedNumber);
}

// In console 5.12

```

{{< figure src="format number in angular.png" title="format number in angular" alt="format number in angular">}} 

## Removing Comma from number angular decimal pipe

Angular decimal pipe adds commas to the number according to counry locale rules.

```
//decimal_value: number = 55234.342342;

{{decimal_value | number:'1.2-2'}}
55,234.34

```
And there is no direct way to remove those commas from number using decimal pipe.

For that purpose we need to create our own custom pipe which removes commas from formatted number.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma'
})
export class RemoveCommaPipe implements PipeTransform {

  transform(value: string): string {
    if (value !== undefined && value !== null) {
      return value.replace(/,/g, "");
    } else {
      return "";
    }
  }
}
```

And we need apply this `removeComma` Pipe after using decimal pipe.

```
{{decimal_value | number:'1.2-2' | removeComma}}

//55234.34

```

## Error: InvalidPipeArgument: 'not a valid digit info' for pipe 'DecimalPipe'

We need to pass digit information parameter in following format "X.X-X"

```
{minimumIntegerDigits}.{minimumFractionDigits}-{maximumFractionDigits}
```

If you pass the parameter in wrong format for instance as shown below

```
{{decimal_value | number:'1-2.2'}}
```

You will get following error in console.

{{% alert warning%}}
Error: InvalidPipeArgument: '1-2.2 is not a valid digit info' 
for pipe 'DecimalPipe'
{{% /alert %}}