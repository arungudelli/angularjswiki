+++
title="Angular Interview Questions And Answers"
summary="The list of most common Angular interview questions with answers."
subtitle = "A guide to crack the Angular interview"
keywords=["Angular Interview Questions"]
date="2021-12-10T00:00:00"
lastmod="2021-12-10T00:00:00"
draft=false
authors = ["admin"]
type="post"
+++

Here is the list of **Angular interview questions and answers**, which are likely to be asked during the time of interview. 

You will be asked questions depending upon your experience.

The questions may vary from basics to advanced topics of Angular.

Before the interview have a look at the list, it might help you to crack the Angular interview.

No list or guide will contain all questions, it is depend upon so many factors such as your work experience, interviewer experience (or some times his/her mood) and finally some luck factor. 

The first stable Angular framework (Angular 2.0) released on 14 September 2016. 

And after that on 23 March 2017, Google team made some breaking changes in Angular framework and released Angular 4.0.0. 

So As of 2021, Most of the developers will have less than 6 years of experience in Angular framework.

This is a big advantage to clear the Angular interview, because the resources available to learn Angular framework are same for all developers across the world.

People who are working on other languages such as JavaScript, Java/C#, python etc may face some unexpected questions during the time of interview, because interviewers may have tons of experience in building applications using the mentioned languages. 

{{%toc%}}

## 1. What is Angular Framework?

Angular is open source front end framework built on top of typescript, Maintained by Angular Team at Google.  

## 2. What is Single Page Application? (SPA)

A single-page application (SPA) is a web application or website which interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. 

The goal is faster transitions that make the website feel more like a native app.

## 3. What is Angular CLI?

Angular CLI is a command-line interface(cli) tool that used to create, develop, scaffold, and maintain Angular applications through a command shell.

## 4. What is Typescript?

TypeScript is a programming language which is a strict syntactical superset of JavaScript and adds optional static typing to the language. 

TypeScript is  developed and maintained by Microsoft. 

It's designed for the development of large applications and it converts to JavaScript(transcompiles ) at the end.

## 5. Difference between AngularJs 1.X & Angular?

There are plenty of differences between both Angular 1.x and new Angular framework. 

Angular framework built using typescript, where Angular 1.x is simple Javascript framework just like jQuery.

New Angular framework is completely rewritten using typescript so there is no comparison between them.

## 6.What is app-root?

`<app-root>` is just a default selector created by Angular CLI, which will be added to global index.html file.

## 7. Can we re-name app-root?

Yes we can rename app-root. This kind of questions asked to test your knowledge on core Angular framework. 

Sometimes people assume that it's necessary to have `app-root` in our Angular application as it's created by Angular CLI. 

But that's not the case.

## 8.What is a Component?

Web browser only understands HTML tags. We have so many built-in tags like p,div,a,select,form etc.

So what if we want to create our own tags? like `<login>` tag which will display the username, password and submit button.

This is the idea behind Components and one of the building block of Angular framework.

Components are nothing but group of HTML tags or other components which defines a UI block (login, registration etc.) and invoked through a selector just like HTML tags.

## 9. What is the Component structure?

Every component in Angular will have three main elements 

1. Selector 
2. Template
3. optional styleUrls

```
@Component({
 selector: '',
 template: ``, // or templateUrl:''
 styleUrls:''
})
```

## 10. What is a selector?

Selector is nothing but HTML tags. 

Unlink built in selectors like a,p,div we can have our own selectors in Angular like `<login>` etc..

## 11. What is a template?

Template is nothing but group of HTML tags which represents an UI block. 

We can add a template to component using templateUrl.

## 12. What are the different ways to add a template to a component?

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

To add an inline template we have to use back ticks (`...`)

But in most of the cases we won't be using inline template, 

Because when we create a component using `ng generate component` command, Angular cli creates a default template HTML file which will be referred in Angular component using `templateUrl`. 

## 13.What is the best way to add template to the component?

As explained above, You no need to worry about adding template to the component. 

Angular CLI will automatically adds template to the component using `templateUrl`.

## 11.What is styleUrls inside Component?

`styleUrls` is used to add CSS styles to the component. 

```
styleUrls: ['./hello-world.component.css']
```

And the default CSS file already being generated while creating the component. 

## 12. Can we have an Angular component without CSS?

Yes. In Angular, We can create the component without CSS files.

In real world this scenario may not happen. 

## 13.Can we add multiple css files for a component?

If you see the above `styleUrls` declaration, it accepts array of css files. 

So Yes. A component may have multiple CSS files depending upon the requirement. 

## 14. Can we have inline styles in a component?

Yes we can create a component with inline styles. 

Instead of using `styleUrls`, use `styles` property, as shown below.

```
@Component({
  selector: 'app-hello',
  template: ``,
  styles: ['h1 { font-weight: normal; }']
})
export class HelloAppComponent {

}
```

This is useful, when a component have minimal CSS.

And also it accepts array of values, so we can pass multiple css style strings to the styles property.

## 15. Can we add both `styles` and `styleUrls` inside a component?

Yes. We can specify both inline styles, external CSS files inside a single component. 

The inline styles will have more priority. 

i.e., The css styles mentioned in `styles` array will have more priority.

```
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  styles:['h1 { color:red }']
})

//user.component.scss

h1{
    color:green;
}
```
The `h1` tag will be in red color and the `h1` style mentioned in external css file have no impact. 

## 16. How to create components with inline styles? 

While creating the component using Angular CLI command ng generate component, pass `--inline-style` flag it will add the empty styles array in the component.

```
ng generate component user --inline-style
```
