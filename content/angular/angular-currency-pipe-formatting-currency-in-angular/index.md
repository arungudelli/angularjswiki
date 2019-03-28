+++
title = "Angular Currency Pipe & Formatting Currency In Angular"
menuTitle = "Angular Currency Pipe"
description ="Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information."
keywords="angular currency pipe,formatting currency in angular"
og_image="https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-Currency-Pipe.jpg"
+++

Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.

  1. [Angular Currency Pipe Syntax](#step-1)
  2. [Angular Currency Pipe example](#step-2)
  3. [Angular Currency Pipe without symbol](#step-3)
  4. [Angular Currency Pipe No Decimal](#step-4)
  5. [Angular Currency Pipe example with locale](#step-5)
  6. [Display Currency symbol to the right in Angular](#step-6)
  7. [Changing default parameters of Angular Currency Pipe](#step-7)
  8. [List of All Countries currency codes of Angular Currency Pipes](#step-8)

  
![Alt Text](https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-Currency-Pipe.jpg "Angular Currency Pipe")


## Angular Currency Pipe Syntax: {#step-1}

Angular Currency Pipe takes currency value as input and currencyCode,display,digitsInfo and locale as parameters as shown below

<pre>{{currency_value|currency[:currencyCode[:display[:digitsInfo[:locale]]]]}}</pre>

[table id=43 /]

## Angular Currency Pipe example: {#step-2}

We will go through few examples to understand Angular Currency Pipe.For example we have Currency of Value 100.23.

<div>
  <pre>&lt;!--output '$100.23'--&gt;
&lt;p&gt;{{Value | currency}}&lt;/p&gt;

&lt;!--output '₹100.23'--&gt;
&lt;p&gt;{{Value | currency:'INR'}}&lt;/p&gt;</pre>
  
  <p>
    If you are not passing any parameters then it displays the default currency as USD i.e., dollors.
  </p>
</div>

We can change this default currency as explained below.

If we are passing currency code to the angular currency pipe.It will display the corresponding default currency symbol.

I am passing currency code as &#8220;INR&#8221; and Rupee symbol will be displayed.

## Angular Currency Pipe without symbol: {#step-3}

If you want to display your own name instead of default currency symbol you have to pass display parameter.

The display parameter can be &#8220;code&#8221; (currencycode will be displayed) or &#8220;symbol&#8221; or &#8220;symbol-narrow&#8221; or any other custom value.

<div>
  <pre>&lt;!--output 'INR100.23'--&gt;
&lt;p&gt;{{Value | currency:'INR':'code'}}&lt;/p&gt;

&lt;!--output 'CA$100.23'--&gt;
&lt;p&gt;{{Value | currency:'CAD':'symbol'}}&lt;/p&gt;

&lt;!--output '$100.23'--&gt;
&lt;p&gt;{{Value |currency:'CAD':'symbol-narrow'}}&lt;/p&gt;

&lt;!--output '₹100.23'--&gt;
&lt;p&gt;{{Value |currency:'INR':'symbol-narrow'}}&lt;/p&gt;

&lt;!--output 'Indian Rupee100.23'--&gt;
&lt;p&gt;{{Value | currency:'INR':'Indian Rupee'}}&lt;/p&gt;</pre>
</div>

Few countries like Canada have two currency codes like symbol CA$ and symbol-narrow $. If the country locale does not have symbol-narrow, default symbol will be displayed.

Indian rupee does not have symbol-narrow so the default rupee symbol displayed.

If you want to display your own custom name as symbol you can pass as a paramter as shown in last example.I am passing &#8216;Indian Rupee&#8217; as display parameter.

## Angular Currency Pipe No Decimal: {#step-4}

If you want to customize the decimal points of currency value. You need to pass digitInfo parameter.

The syntax of the digitInfo parameter is &#8220;numberOfInteger:minimumFractions-maxFractions&#8221;.

<pre>&lt;!--output '₹0,100.35'--&gt;
&lt;p&gt;{{Value |currency:'INR':'symbol':'4.2-2'}}&lt;/p&gt;

&lt;!--output '₹100.2'--&gt;
&lt;p&gt;{{Value |currency:'INR':'symbol':'3.1-1'}}&lt;/p&gt;

</pre>

The first example displayed as _&#8216;₹0,100.35&#8217;_ because we are telling the currency pipe to display at least 4 digits. Remaining one digit adjusted with 0.

And after the decimal point minimum 2 fractions and maximum 2 fractions are displayed.

In the second example I am passing fractions as &#8216;1-1&#8217;. So it displayed as _&#8216;₹100.2&#8217;._

Angular Currency Pipe by default displays two decimal points irrespective of currency type. If currency is 100.

<pre>&lt;!--₹100.00--&gt;
&lt;p&gt;{{IntegerValue |currency:'INR':'symbol'}}&lt;/p&gt;</pre>

To remove decimal points from the Angular currency pipe, we need to pass digitInfo parameter fractions as zero.

<div>
  <pre>₹100
&lt;p&gt;{{IntegerValue |currency:'INR':'symbol':'3.0'}}&lt;/p&gt;</pre>
  
  <p>
    Few country currencies does not support cent values in that case decimal points are truncated. For example Chilean peso Currency CLP does not support cents. So if the currency value is 100.23. It is displayed as 100.
  </p>
</div>

<div>
</div>

<div>
  You can see the below table for list of such countries.
</div>

<pre>CLP100
&lt;p&gt;{{Value | currency:'CLP':'symbol'}}&lt;/p&gt;</pre>

## Angular Currency Pipe example with locale: {#step-5}

We can pass local as parameter to Angular currency Pipe as shown below.

<pre>&lt;p&gt;{{Value | currency:'CAD':'symbol':'4.2-2':'fr'}}&lt;/p&gt;</pre>

But the above code returns the error in console saying _Missing locale data for the locale &#8220;fr&#8221;._

We are passing french locale information as &#8220;fr&#8221;. But in our application we dont have locale information for french.

We need to register the locale information.

<pre>import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');</pre>

Follow the below steps to use Angular Currency Pipe with locale.

  1. Import the registerLocaleData from @angular/common
  2. Import locale Information from @angular/common/locales/fr.
  3. And Finally register the information using registerLocaleData method.

<pre>&lt;!--output '0 100,23 $CA'--&gt;
&lt;p&gt;{{Value | currency:'CAD':'symbol':'4.2-2':'fr'}}&lt;/p&gt;

&lt;!--output '100,23 $CA'--&gt;
&lt;p&gt;{{Value | currency:'CAD':'symbol':'3.2-2':'fr'}}&lt;/p&gt;

</pre>

## Display Currency symbol to the right in Angular Currency Pipe: {#step-6}

A lot of european countries use the currency symbol at the right side of currency value (France, Germany, Spain, Italy countries).

If you pass the locale information the symbol will be automatically displayed at the right side of value as shown in above french locale.

But the remaining currencies without locale still displays currency symbol to the left only.

<pre>import {NgModule, LOCALE_ID} from '@angular/core';

@NgModule({
 providers: [{
   provide: LOCALE_ID,
   useValue: 'fr' // 'de' for Germany, 'fr' for France ...
  }]
})</pre>

Import LOCALE_ID from &#8216;@angular/core&#8217; and pass it to the provides as shown above.

But this will change the _locale_ across the application. So this approach is acceptable only if your site is using single locale information.

And the decission to show the currency symbol to the left or right should be based upon locale information only.

So its better to pass locale information to the Angular Currency Pipe whenever required.

## Changing default parameters of Angular Currency Pipe: {#step-7}

What if we want to change default parameters of Angular Currecny Pipe like default currency code,default currency symbol, default decimal locations and default locale?

For example we have a fixed currency format across the application as shown below.

<pre>{{ Value | currency:'EUR':'symbol':'3.2-2':'fr' }}
100,23 €</pre>

Each time I do not want to pass the other parameters and set the above parameters as default parameters so that the below code should display the required format.

<pre>{{ Value | currency }}
100,23 €</pre>

There is no way we can set the default parameters in Angular Currency Pipe. But we can define our own custom Angular currency Pipe to do the same.

Create a new file called _custom.currencypipe.ts_ file and add the below code to it. You can change the paramters as per your requirements.

<pre>import { Pipe, PipeTransform } from '@angular/core';
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
  }</pre>

And after declaring _MyCurrencyPipe._ Import it in _app.module.ts_ file and add it in declaration array of _app.module.ts. _As shown below.

<pre>import {MycurrencyPipe} from './custom.currencypipe';

@NgModule({
  declarations: [
    MycurrencyPipe
]);</pre>

Now i can use my custome currency pipe as show below.

<pre>{{ Value | mycurrency }}
100,23 €</pre>

## List of All Countries currency codes of Angular Currency Pipes: {#step-8}

[table id=42 /]