To update the Angular CLI version to 7 simply use the below command.

<pre>ng update @angular/cli</pre>

But this command might not work, if you are using older version of Angular CLI. We will start with checking of Angular CLI version and update the Angular CLI package accordingly

  1. [Angular CLI version check](#step-1)
  2. [Update Angular CLI version Globally](#step-2)
  3. [Your global Angular CLI version is greater than your local version.The local Angular CLI version is used](#step-3).
  4. [Update Angular CLI version Locally](#step-4)
  5. [Update Angular CLI version to 6](#step-5)
  6. [Update Angular CLI version to 7](#step-6)
  7. [ng update @angular/cli not working](#step-7)

## Angular CLI version check: {#step-1}

To check the Angular CLI version use to below command

ng &#8211;version

## Update Angular CLI version Globally: {#step-2}

To update Angular CLI version globally in your system use the below commands

<pre>npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm &gt; 5)
npm install -g @angular/cli@latest</pre>

First you need to uninstall the existing angular cli packages followed by _npm cache verify_ command to clear the cache related problems.

And the install the Angular CLI version again by using _npm install -g @angular/cli@latest_

If you are using MAC or linux systems you might need to add the prefix before npm

<pre>sudo npm uninstall -g angular-cli
sudo npm cache clean or sudo npm cache verify (if npm &gt; 5)
sudo npm install -g @angular/cli@latest</pre>

## Your global Angular CLI version is greater than your local version.The local Angular CLI version is used: {#step-3}

After updating Angular CLI globally you might get this warning if your local project&#8217;s angular cli version less than the global angular cli version.

As local packages have more priority than global packages you will get _&#8220;Your global Angular CLI version is greater than your local version.The local Angular CLI version is used&#8221;_

So mostly you need to update your local Angular CLI version as well

## Update Angular CLI version Locally: {#step-4}

To update Angular CLI version in your local projects use the following commands. Navigate to your local Angular project and execute the below commands.

<pre>rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install</pre>

## Update Angular CLI version to 6: {#step-5}

If you are migrating from older Angular CLI versions like 1.x to latest Angular version 6. You need to do few additional checks apart from above commands.

First of all you need to convert _angular-cli.json_ file older Angular CLI version to latest _angular.json_ used in version 6.

To convert it use the following command

<pre>ng update @angular/cli --from=1.7.4 --migrate-only</pre>

To convert _angular-cli.json_ file pass the current version to ng update by using from flag and additionally use _&#8211;migrate-only._ The migrate only  flag makes sure that it will do only a migration but does not update the Angular CLI.

And if you RxJs you need to update it as well use the below command

<pre>ng update rxjs</pre>

It will update the RxJs version to 6. To support older RxJs imports the above command automatically installs the _rxjs-compat_ package. If you get any error try manual installation.

<pre>npm i rxjs-compat
npm i @angular-devkit/build-angular</pre>

And Angular CLI version 6 no longer uses _intl_ in _polyfills.ts. _You can remove the below lines from polyfills.ts

<pre>import 'intl';
import 'intl/locale-data/jsonp/en';</pre>

And additionally you need to update the @angular core modules as well

<pre>ng update @angular/core</pre><figure id="attachment_1060" style="width: 1280px" class="wp-caption aligncenter">

<img class="size-full wp-image-1060" src="https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-CLI-Version-Update.jpg" alt="Angular CLI Version Update to 7" width="1280" height="720" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-CLI-Version-Update.jpg 1280w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-CLI-Version-Update-300x169.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-CLI-Version-Update-768x432.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2019/01/Angular-CLI-Version-Update-1024x576.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption class="wp-caption-text">Angular CLI Version Update to 7</figcaption></figure> 

## Update Angular CLI version to 7: {#step-6}

Once you upgraded to Angular CLI version 6. Its very easy to update it to the current latest Angular CLI version 7.

To update Angular CLI version to 7. Just run the following commands

ng update @angular/cli @angular/core

The above command updates Angular cli as well as angular core packages.

In addition to that you can refactor the TypeScript code so that it doesn&#8217;t depend on _rxjs-compat_ modules(as explained above).

To refactor TypeScript code run following command

<pre>npm install -g rxjs-tslint 
rxjs-5-to-6-migrate -p src/tsconfig.app.json</pre>

Once all of your dependencies have updated to latest RxJS 6, remove rxjs-compat package as it increases bundle size.

<pre>npm uninstall rxjs-compat</pre>

## ng update @angular/cli not working: {#step-7}

If you follow the above steps carefully mostly Angular cli version will be updated without any problems. And do not forgot to add @latest suffix.

<pre>ng update @angular/cli@latest</pre>