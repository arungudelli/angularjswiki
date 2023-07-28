+++
title = "A Definitive Guide on How to configure SSL locally in Angular"
subtitle = "configuring SSL locally in Angular applications"
type="post"
summary ="configure SSL locally in Angular"
keywords=["ssl angular"]
date="2023-07-28T01:01:05+0000"
lastmod="2023-07-28T04:44:37+0000"
draft=false
authors = ["admin"]

[image]
  caption = "configuring SSL locally in Angular applications"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

Angular is a popular name for frontend frameworks. 

You can create dynamic and single-page web apps through a structured framework. 

It offers an organized code and features like two-way data binding, dependency injection, and component-based architecture. 

However, the security of Angular applications is a significant concern for organizations.

Angular's security features are enough to prevent client-side vulnerabilities like, cross-site scripting (XSS), open redirects, malicious injections, and more. 

However, on the server side, it also Angular does provide the capability to generate static pages. 

So, Angular web apps require both client and server security.

SSL certificates are a great way to ensure server-side security for your Angular applications. 

This article will focus on configuring an SSL certificate for local development. 

Let's first understand the crucial steps to set up an SSL certificate on an Angular app.

## Pre-requisites to setup SSL certificate on Angular

The local development process is crucial for organizations because this locally developed code is merged into a central repository creating a source code. 

So, securing the code while developers are creating it locally becomes crucial. 

If you want to [set up an SSL certificate](https://www.ssl2buy.com/) and apply HTTPS on local development, you need to first,

1. Get an SSL certificate from a leading certificate authority(CA)
2. Setup SSL certificate while serving Angular app
3. Test if the app uses HTTPS during local development

Here is the process of getting an SSL certificate from CA,

1. Choose a reputable CA 
2. Generate a certificate signing request and submit it to CA
3. CA will verify all the details provided with the CSR
4. Download the SSL certificate received in the email
5. Save certificate files in your local directory

If you use a self-signed certificate for local development, you must generate a custom SSL certificate.

## Create a Custom SSL Certificate

You can create a local CA and an SSL certificate on the server where you are developing an Angular application. 

You will need a package manager to install `mkcert` to generate a custom CA and certificate.

You can use `Homebrew` or `MacPorts` for macOS, and for Linux, `certutil` will do. 

Further, you can use `Chocolatey` for Windows machines and install `mkcert`.

Next, create a locally trusted CA with the `mkcert -install` and certificate with `mkcert localhost`.


## Setup SSL Certificate on Angular Locally

You can locally server an Angular web app with an SSL certificate by using `--ssl-key` and `--ssl-cert` with `ng serve`.

Once you generate local CA and SSL certificates, set `sslKey` and `sslCert` environment variables according to the path of your files.

```
ng serve -o -ssl true --sslKey {KEY_PATH} --sslCert {CERT_PATH}
```

Once you execute the above command, set the `npm start` script, and the Angular application will run on HTTPS.

## How to configure SSL locally in Angular? 

Another way to set up an SSL certificate for local development on Angular is to use OpenSSL. 

You can use OpenSSL to create a certificate on Windows using Git Bash. 

Use the following command line on OpenSSL for certificate generation,

```
openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout localhost.key -days 3560 -out localhost. crt -config certificate.config
```

The output will be two distinct files,

1. Localhost.key
2. localhost.cert

Once you have the certificate files, you can configure the Angular CLI to use SSL certificates and server apps over HTTPS. To configure SSL certificates, first, run ng serve with SSL,

```
ng serve --ssl --ssl-key .\\certs\\localhost.key --ssl-cert .\\certs\\localhost.crt
```

Now open your browser and add https://localhost:4200 to the address bar. 

This will result in a warning message because you use a self-signed certificate. 


{{< figure src="/img/blog/ssl-error-angular.png" title="SSL Error Angular" alt="SSL Error Angular">}}


However, you can avoid such instances by using an SSL certificate from a trusted CA. 

For the self-signed certificate configuration, click on advanced and process to localhost(unsafe).

However, you may have to repeat this process each time you develop a new code on the local machine. 

One way to bypass this warning message is by allowing Windows to acknowledge that the certificate is from Trusted Root Certification Authorities store.

To make Windows trust your certificate, go to the certs directory and open `localhost.crt` file under your project. 

Now, click the install certificate to open a new certificate import wizard. 


{{< figure src="/img/blog/ssl-setup-angular.png" title="SSL setup Angular" alt="SSL setup Angular">}}


On the new certificate import wizard, choose the current user option and click next.


{{< figure src="/img/blog/ssl-setup-angular-complete.png" title="SSL setup Angular complete" alt="SSL setup Angular complete">}}


A new wizard will open where you can place all the certificates in the "Trusted Root Certification. Authorities" store. 


{{< figure src="/img/blog/ssl-angular-select.png" title="ssl angular select" alt="ssl angular select">}}

Now click finish, and the Windows machine will show a security warning asking if you want to use the self-signed certificate, there can be a risk. 

Click on Yes to close the certificate dialog. 

Now, when you add https://localhost:4200 to your browser's address bar, there will be no error message.

## Key Takeaways

Angular applications can be susceptible to cyber attacks without proper security measures. 

SSL certificates ensure that local development of Angular code is secure and data exchanged between systems is not exposed to hackers. 

To secure Angular web apps, you can use a self-signed certificate, or one issued by a trusted CA. 

It depends on your project requirements and the sensitivity of the data. 