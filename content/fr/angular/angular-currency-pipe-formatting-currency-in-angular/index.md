+++ title = "Angular Currency Pipe & Formatting Currency In Angular" type="post" subtitle = "Learn how to format currencies in Angular using Angular currency Pipe" summary ="Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information." keywords=["angular currency pipe,formatting currency in angular"] date="2019-02-09T01:01:05+0000" lastmod="2019-02-10T13:40:49+0000" draft=true authors = ["admin"]

[image] caption = "Angular Currency Pipe"

  # Focal point (optional) # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight focal_point = ""

  # Show image only in page previews? preview_only = false

+++

Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.


{{% toc %}}


## Angular Currency Pipe Syntax

Angular Currency Pipe takes currency value as input and currencyCode,display,digitsInfo and locale as parameters as shown below

```
{{currency_value|currency[:currencyCode[:display[:digitsInfo[:locale]]]]}}
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
            <td>currencyCode</td>
            <td>ISO 4217 currency code.Of type string default value undefined,Optional</td>
        </tr>
        <tr>
            <td>display</td>
            <td>We can display Currency 'symbol' or 'code' or 'symbol-narrow' or our own string.Of type string, Optional Default value is 'symbol'</td>
        </tr>
        <tr>
            <td>digitsInfo</td>
            <td>Represents Decimal representation of currency value.Of type string default value undefined,Optional</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>represents locale format rules. Default value is our project locale if set or undefined.Optional </td>
        </tr>
    </tbody>
</table>
</div>

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

Read about [Angular Decimal Pipe](https://www.angularjswiki.com/angular/angular-decimal-pipe/)

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

[Find Angular Jobs with Jooble](https://jooble.org/jobs-angularjs-developer)

## List of All Countries currency codes of Angular Currency Pipes

<div class="table-responsive">
<table class="table">
    <thead>
        <tr>
            <th>Country Currency</th>
            <th>Angular Currency Pipe Code</th>
            <th>Eg: Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Andorran peseta Currency</td>
            <td>{{Value|currency:"ADP":"symbol"}}</td>
            <td>ADP100</td>
        </tr>
        <tr>
            <td>Afghan afghani Currency</td>
            <td>{{Value|currency:"AFN":"symbol"}}</td>
            <td>AFN100</td>
        </tr>
        <tr>
            <td>Albanian lek Currency</td>
            <td>{{Value|currency:"ALL":"symbol"}}</td>
            <td>ALL100</td>
        </tr>
        <tr>
            <td>Armenian dram Currency</td>
            <td>{{Value|currency:"AMD":"symbol"}}</td>
            <td>AMD100</td>
        </tr>
        <tr>
            <td>Angolan kwanza Currency</td>
            <td>{{Value|currency:"AOA":"symbol"}}</td>
            <td>Kz100.00</td>
        </tr>
        <tr>
            <td>Argentine peso Currency</td>
            <td>{{Value|currency:"ARS":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Australian dollar Currency</td>
            <td>{{Value|currency:"AUD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Bosnia and Herzegovina convertible mark Currency</td>
            <td>{{Value|currency:"BAM":"symbol"}}</td>
            <td>KM100.00</td>
        </tr>
        <tr>
            <td>Barbados dollar Currency</td>
            <td>{{Value|currency:"BBD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Bangladeshi taka Currency</td>
            <td>{{Value|currency:"BDT":"symbol"}}</td>
            <td>৳100.00</td>
        </tr>
        <tr>
            <td>Bahraini dinar Currency</td>
            <td>{{Value|currency:"BHD":"symbol"}}</td>
            <td>BHD100.000</td>
        </tr>
        <tr>
            <td>Burundian franc Currency</td>
            <td>{{Value|currency:"BIF":"symbol"}}</td>
            <td>BIF100</td>
        </tr>
        <tr>
            <td>Bermudian dollar Currency</td>
            <td>{{Value|currency:"BMD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Brunei dollar Currency</td>
            <td>{{Value|currency:"BND":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Boliviano Currency</td>
            <td>{{Value|currency:"BOB":"symbol"}}</td>
            <td>Bs100.00</td>
        </tr>
        <tr>
            <td>Brazilian real Currency</td>
            <td>{{Value|currency:"BRL":"symbol"}}</td>
            <td>R$100.00</td>
        </tr>
        <tr>
            <td>Bahamian dollar Currency</td>
            <td>{{Value|currency:"BSD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Botswana pula Currency</td>
            <td>{{Value|currency:"BWP":"symbol"}}</td>
            <td>P100.00</td>
        </tr>
        <tr>
            <td>Belarusian ruble Currency</td>
            <td>{{Value|currency:"BYN":"symbol"}}</td>
            <td>р.100.00</td>
        </tr>
        <tr>
            <td>Belarusian ruble Currency</td>
            <td>{{Value|currency:"BYR":"symbol"}}</td>
            <td>BYR100</td>
        </tr>
        <tr>
            <td>Belize dollar Currency</td>
            <td>{{Value|currency:"BZD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Canadian dollar Currency</td>
            <td>{{Value|currency:"CAD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Swiss franc Currency</td>
            <td>{{Value|currency:"CHF":"symbol"}}</td>
            <td>CHF100.00</td>
        </tr>
        <tr>
            <td>Unidad de Fomento Currency</td>
            <td>{{Value|currency:"CLF":"symbol"}}</td>
            <td>CLF100.0000</td>
        </tr>
        <tr>
            <td>Chilean peso Currency</td>
            <td>{{Value|currency:"CLP":"symbol"}}</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>RenminbiRenminbi (Chinese) yuan Currency</td>
            <td>{{Value|currency:"CNY":"symbol"}}</td>
            <td>¥100.00</td>
        </tr>
        <tr>
            <td>Colombian peso Currency</td>
            <td>{{Value|currency:"COP":"symbol"}}</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Costa Rican colon Currency</td>
            <td>{{Value|currency:"CRC":"symbol"}}</td>
            <td>₡100.00</td>
        </tr>
        <tr>
            <td>Cuban convertible peso Currency</td>
            <td>{{Value|currency:"CUC":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Cuban peso Currency</td>
            <td>{{Value|currency:"CUP":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Czech koruna Currency</td>
            <td>{{Value|currency:"CZK":"symbol"}}</td>
            <td>Kč100.00</td>
        </tr>
        <tr>
            <td>Djiboutian franc Currency</td>
            <td>{{Value|currency:"DJF":"symbol"}}</td>
            <td>DJF100</td>
        </tr>
        <tr>
            <td>Danish krone Currency</td>
            <td>{{Value|currency:"DKK":"symbol"}}</td>
            <td>kr100.00</td>
        </tr>
        <tr>
            <td>Dominican peso Currency</td>
            <td>{{Value|currency:"DOP":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Egyptian pound Currency</td>
            <td>{{Value|currency:"EGP":"symbol"}}</td>
            <td>E£100.00</td>
        </tr>
        <tr>
            <td>Spanish peseta Currency</td>
            <td>{{Value|currency:"ESP":"symbol"}}</td>
            <td>₧100</td>
        </tr>
        <tr>
            <td>Euro Currency</td>
            <td>{{Value|currency:"EUR":"symbol"}}</td>
            <td>€100.00</td>
        </tr>
        <tr>
            <td>Fijian dollarFiji dollar Currency</td>
            <td>{{Value|currency:"FJD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Falkland Islands pound Currency</td>
            <td>{{Value|currency:"FKP":"symbol"}}</td>
            <td>£100.00</td>
        </tr>
        <tr>
            <td>Pound sterling Currency</td>
            <td>{{Value|currency:"GBP":"symbol"}}</td>
            <td>£100.00</td>
        </tr>
        <tr>
            <td>Georgian lari Currency</td>
            <td>{{Value|currency:"GEL":"symbol"}}</td>
            <td>₾100.00</td>
        </tr>
        <tr>
            <td>Gibraltar pound Currency</td>
            <td>{{Value|currency:"GIP":"symbol"}}</td>
            <td>£100.00</td>
        </tr>
        <tr>
            <td>Guinean franc Currency</td>
            <td>{{Value|currency:"GNF":"symbol"}}</td>
            <td>FG100</td>
        </tr>
        <tr>
            <td>Guatemalan quetzal Currency</td>
            <td>{{Value|currency:"GTQ":"symbol"}}</td>
            <td>Q100.00</td>
        </tr>
        <tr>
            <td>Guyanese dollar Currency</td>
            <td>{{Value|currency:"GYD":"symbol"}}</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Hong Kong dollar Currency</td>
            <td>{{Value|currency:"HKD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Honduran lempira Currency</td>
            <td>{{Value|currency:"HNL":"symbol"}}</td>
            <td>L100.00</td>
        </tr>
        <tr>
            <td>Croatian kuna Currency</td>
            <td>{{Value|currency:"HRK":"symbol"}}</td>
            <td>kn100.00</td>
        </tr>
        <tr>
            <td>Hungarian forint Currency</td>
            <td>{{Value|currency:"HUF":"symbol"}}</td>
            <td>Ft100.00</td>
        </tr>
        <tr>
            <td>Indonesian rupiah Currency</td>
            <td>{{Value|currency:"IDR":"symbol"}}</td>
            <td>Rp100</td>
        </tr>
        <tr>
            <td>Israeli new shekel Currency</td>
            <td>{{Value|currency:"ILS":"symbol"}}</td>
            <td>₪100.00</td>
        </tr>
        <tr>
            <td>Indian rupee Currency</td>
            <td>{{Value|currency:"INR":"symbol"}}</td>
            <td>₹100.00</td>
        </tr>
        <tr>
            <td>Iraqi dinar Currency</td>
            <td>{{Value|currency:"IQD":"symbol"}}</td>
            <td>IQD100</td>
        </tr>
        <tr>
            <td>Iranian rial Currency</td>
            <td>{{Value|currency:"IRR":"symbol"}}</td>
            <td>IRR100</td>
        </tr>
        <tr>
            <td>Icelandic krona Currency</td>
            <td>{{Value|currency:"ISK":"symbol"}}</td>
            <td>kr100</td>
        </tr>
        <tr>
            <td>Italian lira Currency</td>
            <td>{{Value|currency:"ITL":"symbol"}}</td>
            <td>ITL100</td>
        </tr>
        <tr>
            <td>Jamaican dollar Currency</td>
            <td>{{Value|currency:"JMD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Jordanian dinar Currency</td>
            <td>{{Value|currency:"JOD":"symbol"}}</td>
            <td>JOD100.000</td>
        </tr>
        <tr>
            <td>Japanese yen Currency</td>
            <td>{{Value|currency:"JPY":"symbol"}}</td>
            <td>¥100</td>
        </tr>
        <tr>
            <td>Cambodian riel Currency</td>
            <td>{{Value|currency:"KHR":"symbol"}}</td>
            <td>៛100.00</td>
        </tr>
        <tr>
            <td>Comoro franc Currency</td>
            <td>{{Value|currency:"KMF":"symbol"}}</td>
            <td>CF100</td>
        </tr>
        <tr>
            <td>North Korean won Currency</td>
            <td>{{Value|currency:"KPW":"symbol"}}</td>
            <td>₩100</td>
        </tr>
        <tr>
            <td>South Korean won Currency</td>
            <td>{{Value|currency:"KRW":"symbol"}}</td>
            <td>₩100</td>
        </tr>
        <tr>
            <td>Kuwaiti dinar Currency</td>
            <td>{{Value|currency:"KWD":"symbol"}}</td>
            <td>KWD100.000</td>
        </tr>
        <tr>
            <td>Cayman Islands dollar Currency</td>
            <td>{{Value|currency:"KYD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Kazakhstani tenge Currency</td>
            <td>{{Value|currency:"KZT":"symbol"}}</td>
            <td>₸100.00</td>
        </tr>
        <tr>
            <td>Lao kip Currency</td>
            <td>{{Value|currency:"LAK":"symbol"}}</td>
            <td>₭100</td>
        </tr>
        <tr>
            <td>Lebanese pound Currency</td>
            <td>{{Value|currency:"LBP":"symbol"}}</td>
            <td>L£100</td>
        </tr>
        <tr>
            <td>Sri Lankan rupee Currency</td>
            <td>{{Value|currency:"LKR":"symbol"}}</td>
            <td>Rs100.00</td>
        </tr>
        <tr>
            <td>Liberian dollar Currency</td>
            <td>{{Value|currency:"LRD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Lithuanian litas Currency</td>
            <td>{{Value|currency:"LTL":"symbol"}}</td>
            <td>Lt100.00</td>
        </tr>
        <tr>
            <td>Luxembourg franc Currency</td>
            <td>{{Value|currency:"LUF":"symbol"}}</td>
            <td>LUF100</td>
        </tr>
        <tr>
            <td>Latvian lats Currency</td>
            <td>{{Value|currency:"LVL":"symbol"}}</td>
            <td>Ls100.00</td>
        </tr>
        <tr>
            <td>Libyan dinar Currency</td>
            <td>{{Value|currency:"LYD":"symbol"}}</td>
            <td>LYD100.000</td>
        </tr>
        <tr>
            <td>Malagasy ariary Currency</td>
            <td>{{Value|currency:"MGA":"symbol"}}</td>
            <td>Ar100</td>
        </tr>
        <tr>
            <td>Malagasy franc Currency</td>
            <td>{{Value|currency:"MGF":"symbol"}}</td>
            <td>MGF100</td>
        </tr>
        <tr>
            <td>Myanmar kyat Currency</td>
            <td>{{Value|currency:"MMK":"symbol"}}</td>
            <td>K100</td>
        </tr>
        <tr>
            <td>Mongolian tugrik Currency</td>
            <td>{{Value|currency:"MNT":"symbol"}}</td>
            <td>₮100</td>
        </tr>
        <tr>
            <td>Mauritanian Ouguiya Currency</td>
            <td>{{Value|currency:"MRO":"symbol"}}</td>
            <td>MRO100</td>
        </tr>
        <tr>
            <td>Mauritian rupee Currency</td>
            <td>{{Value|currency:"MUR":"symbol"}}</td>
            <td>Rs100</td>
        </tr>
        <tr>
            <td>Mexican peso Currency</td>
            <td>{{Value|currency:"MXN":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Malaysian ringgit Currency</td>
            <td>{{Value|currency:"MYR":"symbol"}}</td>
            <td>RM100.00</td>
        </tr>
        <tr>
            <td>Namibian dollar Currency</td>
            <td>{{Value|currency:"NAD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Nigerian naira Currency</td>
            <td>{{Value|currency:"NGN":"symbol"}}</td>
            <td>₦100.00</td>
        </tr>
        <tr>
            <td>Nicaraguan cordoba Currency</td>
            <td>{{Value|currency:"NIO":"symbol"}}</td>
            <td>C$100.00</td>
        </tr>
        <tr>
            <td>Norwegian krone Currency</td>
            <td>{{Value|currency:"NOK":"symbol"}}</td>
            <td>kr100.00</td>
        </tr>
        <tr>
            <td>Nepalese rupee Currency</td>
            <td>{{Value|currency:"NPR":"symbol"}}</td>
            <td>Rs100.00</td>
        </tr>
        <tr>
            <td>New Zealand dollar Currency</td>
            <td>{{Value|currency:"NZD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Omani rial Currency</td>
            <td>{{Value|currency:"OMR":"symbol"}}</td>
            <td>OMR100.000</td>
        </tr>
        <tr>
            <td>Philippine peso Currency</td>
            <td>{{Value|currency:"PHP":"symbol"}}</td>
            <td>₱100.00</td>
        </tr>
        <tr>
            <td>Pakistani rupee Currency</td>
            <td>{{Value|currency:"PKR":"symbol"}}</td>
            <td>Rs100</td>
        </tr>
        <tr>
            <td>Polish zloty Currency</td>
            <td>{{Value|currency:"PLN":"symbol"}}</td>
            <td>zł100.00</td>
        </tr>
        <tr>
            <td>Paraguayan guarani Currency</td>
            <td>{{Value|currency:"PYG":"symbol"}}</td>
            <td>₲100</td>
        </tr>
        <tr>
            <td>Romanian leu Currency</td>
            <td>{{Value|currency:"RON":"symbol"}}</td>
            <td>lei100.00</td>
        </tr>
        <tr>
            <td>Serbian dinar Currency</td>
            <td>{{Value|currency:"RSD":"symbol"}}</td>
            <td>RSD100</td>
        </tr>
        <tr>
            <td>Russian ruble Currency</td>
            <td>{{Value|currency:"RUB":"symbol"}}</td>
            <td>₽100.00</td>
        </tr>
        <tr>
            <td>Russian ruble Currency</td>
            <td>{{Value|currency:"RUR":"symbol"}}</td>
            <td>р.100.00</td>
        </tr>
        <tr>
            <td>Rwandan franc Currency</td>
            <td>{{Value|currency:"RWF":"symbol"}}</td>
            <td>RF100</td>
        </tr>
        <tr>
            <td>Solomon Islands dollar Currency</td>
            <td>{{Value|currency:"SBD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Swedish krona/kronor Currency</td>
            <td>{{Value|currency:"SEK":"symbol"}}</td>
            <td>kr100.00</td>
        </tr>
        <tr>
            <td>Singapore dollar Currency</td>
            <td>{{Value|currency:"SGD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Saint Helena pound Currency</td>
            <td>{{Value|currency:"SHP":"symbol"}}</td>
            <td>£100.00</td>
        </tr>
        <tr>
            <td>Sierra Leonean leone Currency</td>
            <td>{{Value|currency:"SLL":"symbol"}}</td>
            <td>SLL100</td>
        </tr>
        <tr>
            <td>Somali shilling Currency</td>
            <td>{{Value|currency:"SOS":"symbol"}}</td>
            <td>SOS100</td>
        </tr>
        <tr>
            <td>Surinamese dollar Currency</td>
            <td>{{Value|currency:"SRD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>South Sudanese pound Currency</td>
            <td>{{Value|currency:"SSP":"symbol"}}</td>
            <td>£100.00</td>
        </tr>
        <tr>
            <td>Sao Tome/Principe Dobra Currency</td>
            <td>{{Value|currency:"STD":"symbol"}}</td>
            <td>STD100</td>
        </tr>
        <tr>
            <td>Sao Tome/Principe Dobra Currency</td>
            <td>{{Value|currency:"STN":"symbol"}}</td>
            <td>Db100.00</td>
        </tr>
        <tr>
            <td>Syrian pound Currency</td>
            <td>{{Value|currency:"SYP":"symbol"}}</td>
            <td>£100</td>
        </tr>
        <tr>
            <td>Thai baht Currency</td>
            <td>{{Value|currency:"THB":"symbol"}}</td>
            <td>฿100.00</td>
        </tr>
        <tr>
            <td>Turkmenistani manat Currency</td>
            <td>{{Value|currency:"TMM":"symbol"}}</td>
            <td>TMM100</td>
        </tr>
        <tr>
            <td>Tunisian dinar Currency</td>
            <td>{{Value|currency:"TND":"symbol"}}</td>
            <td>TND100.000</td>
        </tr>
        <tr>
            <td>Tongan paanga Currency</td>
            <td>{{Value|currency:"TOP":"symbol"}}</td>
            <td>T$100.00</td>
        </tr>
        <tr>
            <td>Turkish lira Currency</td>
            <td>{{Value|currency:"TRL":"symbol"}}</td>
            <td>TRL100</td>
        </tr>
        <tr>
            <td>Turkish lira Currency</td>
            <td>{{Value|currency:"TRY":"symbol"}}</td>
            <td>₺100.00</td>
        </tr>
        <tr>
            <td>Trinidad and Tobago dollar Currency</td>
            <td>{{Value|currency:"TTD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>New Taiwan dollar Currency</td>
            <td>{{Value|currency:"TWD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Tanzanian shilling Currency</td>
            <td>{{Value|currency:"TZS":"symbol"}}</td>
            <td>TZS100</td>
        </tr>
        <tr>
            <td>Ukrainian hryvnia Currency</td>
            <td>{{Value|currency:"UAH":"symbol"}}</td>
            <td>₴100.00</td>
        </tr>
        <tr>
            <td>Ugandan shilling Currency</td>
            <td>{{Value|currency:"UGX":"symbol"}}</td>
            <td>UGX100</td>
        </tr>
        <tr>
            <td>United States dollar Currency</td>
            <td>{{Value|currency:"USD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Uruguay Peso en Unidades Indexadas Currency</td>
            <td>{{Value|currency:"UYI":"symbol"}}</td>
            <td>UYI100</td>
        </tr>
        <tr>
            <td>Uruguayan peso Currency</td>
            <td>{{Value|currency:"UYU":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>Uzbekistan som Currency</td>
            <td>{{Value|currency:"UZS":"symbol"}}</td>
            <td>UZS100</td>
        </tr>
        <tr>
            <td>Venezuelan bolivar Currency</td>
            <td>{{Value|currency:"VEF":"symbol"}}</td>
            <td>Bs100.00</td>
        </tr>
        <tr>
            <td>Vietnamese dong Currency</td>
            <td>{{Value|currency:"VND":"symbol"}}</td>
            <td>₫100</td>
        </tr>
        <tr>
            <td>Vanuatu vatu Currency</td>
            <td>{{Value|currency:"VUV":"symbol"}}</td>
            <td>VUV100</td>
        </tr>
        <tr>
            <td>CFA franc BEAC Currency</td>
            <td>{{Value|currency:"XAF":"symbol"}}</td>
            <td>FCFA100</td>
        </tr>
        <tr>
            <td>East Caribbean dollar Currency</td>
            <td>{{Value|currency:"XCD":"symbol"}}</td>
            <td>$100.00</td>
        </tr>
        <tr>
            <td>CFA franc BCEAO Currency</td>
            <td>{{Value|currency:"XOF":"symbol"}}</td>
            <td>CFA100</td>
        </tr>
        <tr>
            <td>CFP franc (franc Pacifique) Currency</td>
            <td>{{Value|currency:"XPF":"symbol"}}</td>
            <td>CFPF100</td>
        </tr>
        <tr>
            <td>Yemeni rial Currency</td>
            <td>{{Value|currency:"YER":"symbol"}}</td>
            <td>YER100</td>
        </tr>
        <tr>
            <td>South African rand Currency</td>
            <td>{{Value|currency:"ZAR":"symbol"}}</td>
            <td>R100.00</td>
        </tr>
        <tr>
            <td>Zambian kwacha Currency</td>
            <td>{{Value|currency:"ZMK":"symbol"}}</td>
            <td>ZMK100</td>
        </tr>
        <tr>
            <td>Zambian kwacha Currency</td>
            <td>{{Value|currency:"ZMW":"symbol"}}</td>
            <td>ZK100.00</td>
        </tr>
        <tr>
            <td>Zimbabwean dollar Currency</td>
            <td>{{Value|currency:"ZWD":"symbol"}}</td>
            <td>ZWD100</td>
        </tr>
    </tbody>
</table>
</div>
