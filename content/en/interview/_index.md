+++
title="Angular Interview Questions And Answers"
summary="The list of most common Angular interview questions with answers."
keywords=["Angular Interview Questions"]
date="2021-07-05T00:00:00"
lastmod="2021-07-05T00:00:00"
type="docs"
parentdoc="interview"
featured='ng-command.PNG'
linktitle="Interview"
[menu.interview]
parent="interview"
weight=20
draft=true
+++

Here is the list of **Angular interview questions and answers**, which are likely to be asked during the time of interview. 

This list is divided into three parts 

1. Basic level. 
2. Intermediated level.
3. Advanced level.

Depending upon your experience you will be asked basic angular interview questions to advanced angular questions.

Before the interview have a look at the list, it might help you to crack the angular interview.

No list or guide will contain all questions, it is depend upon so many factors such as your work experience, interviewer experience (or some times his/her mood) and finally some luck factor. 

The first stable Angular framework (Angular 2.0) released on 14 September 2016. 

And after that on 23 March 2017, Google team made some breaking changes in Angular framework and released Angular 4.0.0. 

So As of 2021, Most of the developers will have less than 6 years of experience in Angular framework.

This is a big advantage to clear the Angular interview, because resources available for Angular framework are same for all developers around the world.

People who are working on other languages such JavaScript, Java/C#, python etc may face some unexpected questions during the interview because interviewers may have tons of experience in building applications using the mentioned languages. 

## Basic Angular Interview Questions

## 1. What is Angular Framework?

Angular is open source front end framework built on top of typescript. Maintained by Angular Team at Google.  

## 2. What is Single Page Application? (SPA)

A single-page application (SPA) is a web application or website which interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

## 3. What is Angular CLI?

Angular CLI is a command-line interface(cli) tool that used to create, develop, scaffold, and maintain Angular applications through a command shell.

## 4. What is Typescript?

TypeScript is a programming language which is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is  developed and maintained by Microsoft. 

It's designed for the development of large applications and it converts to JavaScript(transcompiles ) at the end.

## 5. Difference between AngularJs 1.X & Angular?

There are plenty of differences between both Angular 1.x and new Angular framework. 

Angular framework built using typescript, where Angular 1.x is simple Javascript framework just like jQuery.

New Angular framwork is completely rewritten using typescript so there is no comparision between them.

## 6.What is app-root?

`<app-root>` is just a default selector created by Angular CLI, which will be added to global index.html file.

We can rename it as well.

## 7.What is a Component?

Web browser only understands HTML tags. We have so many built-in tags like p,div,a,select,form etc.

So what if we want to create our own tags? like `<login>` tag which will display the username, password and submit button.

This is the idea behind Components and one of the building block of Angular framework.

Components are nothing but group of HTML tags or other components which defines a UI block (login, registration etc.) and invoked through a selector just like HTML tags.

## 8. What is the Component structure?

Every component in Angular will have a selector, template  and an optional styleUrls

## 9. What is a selector?

Selector is nothing but HTML tags. Unlink built in selectors like a,p,div we can have our own selectors in Angular like `<login>` etc..

## 10.What is a template?

Template is nothing but group of HTML tags which represents an UI block. 
We can add a template to component using templateUrl.

## 11. What are the different ways to add a template to a component?

We can use two different ways to add a template to component

1. Using `template` key of `@component` object.(inline template)
2. Using templateUrl.

```
@Component({
selector: 'app-hello-world',
template: `
<p>
hello-world Angular!
</p>
`
})
```

To add an inline template we have to use backticks (`...`)

But in most of the cases we won't be using inline template, as whenever we create a component using ng create component command, angular cli creates a default template HTML file which will be reffered in component object using `templateUrl`. 

We can define templates two ways, either by using the template key in our
@Component object or by specifying a templateUrl.
We could add a template to our @Component by passing the template option:
Writing Your First Angular Web Application 18

Notice that we’re defining our template string between backticks (` … `). This is
a new (and fantastic) feature of ES6 that allows us to do multiline strings. Using
backticks for multiline strings makes it easy to put templates inside your code files

## 11.What are selector,templateUrl and styleUrls inside Component?


## 11.What is the best way to add template to the component?

## 12.Can we add multiple css files for a component?

## 8.What are decorators?
