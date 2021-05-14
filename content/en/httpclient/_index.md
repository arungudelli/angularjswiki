+++
title = "Introduction to Angular HttpClient with examples"
subtitle = "Using HttpClient in Angular with examples"
date = 2021-05-10T00:00:00
lastmod = 2021-05-10T01:00:00
draft = true  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.
parentdoc = "httpclient"
next="httpclient/get"
featured="pipes-in-angular.jpg"
authors = ["admin"]
summary ="Pipes in Angular used to convert the data coming from the server to the more user friendly format directly in template HTML files"
keywords=["Angular pipe,Pipes in Angular,Pipes"]

# Add menu entry to sidebar.

linktitle = "Introduction"
[menu.httpclient]
  parent = "HttpClient"
  weight = 1

+++

Most of the web applications use HTTP protocol to get the data from the server or to post the data to the server.

Angular provides a built in HttpClient API to communicate with the back-end server for such operations.

{{%toc%}}

## What is Angular HttpClient?

**Angular HttpClient is service class part of `@angular/common/http` which is used to performs HTTP requests.** 

HttpClient comes with several built-in methods to communicate with the back-end server via HTTP protocol.

## Angular HttpClient features

Angular HttpClient depends upon on the `XMLHttpRequest` interface exposed by browsers.

It has so many features such as 

1. We can request typed response objects.
2. Better rrror handling when a server request fails, and retry mechanism if required.
3. We can easily mock the HTTP backend server using `@angular/common/http/testing` library for unit testing purpose.
4. Intercepting Http Request and Responses.

## Using HttpClinet in Angular