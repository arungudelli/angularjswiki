+++
title = "Angular Currency Pipe & Formatting Currency In Angular"
subtitle = "Learn how to format currencies in Angular using Angular currency Pipe"
description ="Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information."
keywords="angular currency pipe,formatting currency in angular"

[image]
  caption = "Angular Currency Pipe"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.

{{% toc %}}
  

## Angular Currency Pipe Syntax

Angular Currency Pipe takes currency value as input and currencyCode,display,digitsInfo and locale as parameters as shown below

```html
{{currency_value|currency[:currencyCode[:display[:digitsInfo[:locale]]]]}}
```

[table id=43 /]

## Angular Currency Pipe example

We will go through few examples to understand Angular Currency Pipe.For example we have Currency of Value 100.23.

```html
<!--output '$100.23'-->
<p>{{Value | currency}}</p>

<!--output '₹100.23'-->
<p>{{Value | currency:'INR'}}</p>
```

If you are not passing any parameters then it displays the default currency as USD i.e., dollors.

We can change this default currency as explained below.

If we are passing currency code to the angular currency pipe.It will display the corresponding default currency symbol.

I am passing currency code as "INR" and Rupee symbol will be displayed.

## Angular Currency Pipe without symbol

If you want to display your own name instead of default currency symbol you have to pass display parameter.

The display parameter can be "code" (currencycode will be displayed) or "symbol" or "symbol-narrow" or any other custom value.

```html
<!--output 'INR100.23'-->
<p>{{Value | currency:'INR':'code'}}</p>

<!--output 'CA$100.23'-->
<p>{{Value | currency:'CAD':'symbol'}}</p>

<!--output '$100.23'-->
<p>{{Value |currency:'CAD':'symbol-narrow'}}</p>

<!--output '₹100.23'-->
<p>{{Value |currency:'INR':'symbol-narrow'}}</p>

<!--output 'Indian Rupee100.23'-->
<p>{{Value | currency:'INR':'Indian Rupee'}}</p>

```
Few countries like Canada have two currency codes like symbol CA$ and symbol-narrow $. If the country locale does not have symbol-narrow, default symbol will be displayed.

Indian rupee does not have symbol-narrow so the default rupee symbol displayed.

If you want to display your own custom name as symbol you can pass as a paramter as shown in last example.I am passing &#8216;Indian Rupee&#8217; as display parameter.

## Angular Currency Pipe No Decimal

If you want to customize the decimal points of currency value. You need to pass digitInfo parameter.

The syntax of the digitInfo parameter is "numberOfInteger:minimumFractions-maxFractions".

```html
<!--output '₹0,100.35'-->
<p>{{Value |currency:'INR':'symbol':'4.2-2'}}</p>

<!--output '₹100.2'-->
<p>{{Value |currency:'INR':'symbol':'3.1-1'}}</p>
```
The first example displayed as "₹0,100.35" because we are telling the currency pipe to display at least 4 digits. Remaining one digit adjusted with 0.

And after the decimal point minimum 2 fractions and maximum 2 fractions are displayed.

In the second example I am passing fractions as '1-1'. So it displayed as "₹100.2".

Angular Currency Pipe by default displays two decimal points irrespective of currency type. If currency is 100.

```html
<!--₹100.00-->
<p>{{IntegerValue |currency:'INR':'symbol'}}</p>
```

To remove decimal points from the Angular currency pipe, we need to pass digitInfo parameter fractions as zero.
```html
₹100
<p>{{IntegerValue |currency:'INR':'symbol':'3.0'}}</p>
```  
{{% alert note %}}
Few country currencies does not support cent values in that case decimal points are truncated. For example Chilean peso Currency CLP does not support cents. So if the currency value is 100.23. It is displayed as 100.
{{% /alert %}}


You can see the below table for list of such countries.

```html
CLP100
<p>{{Value | currency:'CLP':'symbol'}}</p>
```

## Angular Currency Pipe example with locale

We can pass local as parameter to Angular currency Pipe as shown below.

```html
<p>{{Value | currency:'CAD':'symbol':'4.2-2':'fr'}}</p>
```

But the above code returns the error in console saying Missing locale data for the locale "fr".

We are passing french locale information as "fr". But in our application we dont have locale information for french.

We need to register the locale information.

```javascript
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
```
Follow the below steps to use Angular Currency Pipe with locale.

  1. Import the registerLocaleData from @angular/common
  2. Import locale Information from @angular/common/locales/fr.
  3. And Finally register the information using registerLocaleData method.

```html
<!--output '0 100,23 $CA'-->
<p>{{Value | currency:'CAD':'symbol':'4.2-2':'fr'}}</p>

<!--output '100,23 $CA'-->
<p>{{Value | currency:'CAD':'symbol':'3.2-2':'fr'}}</p>

```

## Display Currency symbol to the right using Angular Currency Pipe

A lot of european countries use the currency symbol at the right side of currency value (France, Germany, Spain, Italy countries).

If you pass the locale information the symbol will be automatically displayed at the right side of value as shown in above french locale.

But the remaining currencies without locale still displays currency symbol to the left only.

```javascript 
import {NgModule, LOCALE_ID} from '@angular/core';

@NgModule({
 providers: [{
   provide: LOCALE_ID,
   useValue: 'fr' // 'de' for Germany, 'fr' for France ...
  }]
})
```

Import LOCALE_ID from '@angular/core' and pass it to the provides as shown above.

But this will change the _locale_ across the application. So this approach is acceptable only if your site is using single locale information.

And the decission to show the currency symbol to the left or right should be based upon locale information only.

So its better to pass locale information to the Angular Currency Pipe whenever required.

## Creating Custom Angular Currency Pipe

What if we want to change default parameters of Angular Currecny Pipe like default currency code,default currency symbol, default decimal locations and default locale?

For example we have a fixed currency format across the application as shown below.

```html
{{ Value | currency:'EUR':'symbol':'3.2-2':'fr' }}
100,23 €
```

Each time I do not want to pass the other parameters and set the above parameters as default parameters so that the below code should display the required format.

```html
{{ Value | currency }}
100,23 €
```

There is no way we can set the default parameters in Angular Currency Pipe. But we can define our own custom Angular currency Pipe to do the same.

Create a new file called _custom.currencypipe.ts_ file and add the below code to it. You can change the paramters as per your requirements.

```javascript 
import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
@Pipe({
    name: 'mycurrency',
  })
  export class MycurrencyPipe implements PipeTransform {
    transform(
        value: number,
        currencyCode: string = 'EUR',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '3.2-2',
        locale: string = 'fr',
    ): string | null {
        return formatCurrency(
          value,
          locale,
          getCurrencySymbol(currencyCode, 'wide'),
          currencyCode,
          digitsInfo,
        );
    }
}
```

And after declaring _MyCurrencyPipe._ Import it in _app.module.ts_ file and add it in declaration array of _app.module.ts. _As shown below.

```javascript
import {MycurrencyPipe} from './custom.currencypipe';

@NgModule({
  declarations: [
    MycurrencyPipe
]);
```

Now i can use my custom currency pipe as show below.

```html
{{ Value | mycurrency }}
100,23 €
```

## List of All Countries currency codes of Angular Currency Pipes

[table id=42 /]