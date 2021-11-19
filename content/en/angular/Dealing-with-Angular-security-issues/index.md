+++
title = "Dealing With the Top 5 Most Known Security Risks in Angular"
subtitle = "Security issues in Angular"
summary ="As with any other modern software development instrument, security is the number one concern for early Angular application development."
keywords=["Security issues, Angular"]
date="2021-11-18T00:00:05+0000"
lastmod="2021-11-18T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Security issues in Angular"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

As with any other modern software development instrument, security is the number one concern for early Angular application development. 

Angular- a front-end component-based framework- undoubtedly helps mitigate a range of security threats without the need for additional lines of code. 

However, even with its magnificent protective shield coupled with Long-term Support (LTS) from [Google](https://www.angularjswiki.com/angular/angular-13-release/), applications built on Angular are still prone to attacks. 

Identifying vulnerabilities is the first step in threat actors’ playbooks. 

When an unpatched weakness is found, they exploit it to gain access to the application and launch an attack.

Snyk has done a great job explaining [angular security best practices](https://snyk.io/blog/angular-security-best-practices/) that help prevent attacks on applications running on Angular. 

This article will examine five of the most known security risks that are a concern with Angular applications. 

## Cross-Site Scripting (XSS) Attacks 

Cross-site scripting is a common application-layer web attack in which a hacker injects malicious scripts into a web application. The web page picks up the malicious data and interprets it as code. Upon execution, an XSS vulnerability gives the malicious actor complete control over the app. 

When a website with an XSS vulnerability executes a malicious code, it sends your cookie information to the attacker behind the scenes. This means that neither you nor the website will be aware that an XSS attack is going on. 

In most cases, attackers send the code as a combination of XSS and HTML. But XSS can also be in the form of executable plugins, downloads and media content. 

There are three types of XSS attacks:

### Persistent XSS

Persistent XSS also known as stored XSS, is when the attacker injects a malicious code directly into a vulnerable web application. 

### Non-persistent XSS (AKA Type II or reflected XSS)

This attack happens when a malicious script is reflected off a web application onto your user’s browser. 

### DOM-based XSS

DOM-based XSS also called Type-0 XSS, is an attack wherein the attacker alters the Document Object Model (DOM) in the victim’s browser. 

Consequently, the attacker can run code in the target browser without the user’s knowledge. 

Although no change is done on the HTTP response itself, the damaging script can execute differently due to the change in the DOM environment. 

## Clickjacking Attacks

Clickjacking is when an attacker manipulates a user to click a button or link, thereby performing an action on another page when they intended to accomplish something different. Thus, the attacker is hijacking clicks by rerouting them to their pages.

Typically, a clickjacking attack hides the target website’s UI several layers beneath the visible UI. As such, the victims aren’t aware that they are clicking a different website. That’s why these attacks are also commonly known as UI redress or UI redressing attacks. 

The consequences of these attacks can range from downloading malware, unwittingly giving likes on social networks, purchasing products on eCommerce stores and even transferring money. 

There are different types of clickjacking attacks, including; 

### Password manager attacks

This attack deceives password managers to utilize auto-fill functionality. 

### Likejacking 

In Likejacking attack, the attacker hijacks the users’ clicks and converts them into likes on a social media network, such as Facebook. 

### Cookiejacking 

This is where a user is made to interact with a UI element, such as a checkbox, consequently providing the attacker with cookies stored in their browser.

This enables the attacker to perform actions on the target site on the user’s behalf. 

## Client Side Template Injection (CSTI) Attacks 

This client-side vulnerability arises when an application running a client-side template framework places user input in web pages. 

Client-side template injection vulnerabilities are common in Angular because it’s a client-side template framework. 

In a Client-Side Template Injection Attack, the attacker can steal the victims’ data and use it to perform actions on their behalf. In most cases, CSTI vulnerabilities happen accidentally as a result of poor template design.

However, it’s important to note that some CSTI vulnerabilities are sometimes implemented intentionally. For instance, if your website allows user inputs, for instance, allowing editors the privileges to submit templates by design, you’re at a high risk of a CSTI attack as soon as an attacker compromises a user account with such privileges. 

Angular version 1.2-1.6 has a sandbox that helps prevent CSTI attacks.

But this was later found to be ineffective and removed in versions 1.6 and above. If you’re testing a web application running on Angular 1.2 to 1.5, the first step will be to search for the sandbox and bypass it for the payload to execute. 

## SQL Injection Attacks 

Throughout the [history of Angular](https://www.angularjswiki.com/angular/history-of-angularjs/), SQL injection has always been at the top of the most common threats that developers and businesses wrestle with.

An SQL Injection Attack is a common web hacking technique where the attacker attempts to insert a malicious SQL code into your database through vulnerable fields, for instance, textboxes.

The fact that it’s executed on your database means that your system and sensitive data are at risk, making this the worst form of attack that you should beware of. 

Following a successful SQL Injection Attack, the malicious actor can:
1.	Hack a user’s account 
2.	Steal and copy sensitive data from the website’s database
3.	Delete sensitive data 
4.	Modify the structure of the database 
5.	Change or modify the system’s sensitive data 
6.	See other users’ private information 
7.	Take control of the database server and command actions at will 

## JSONP Attacks 

JSONP (or JSON with padding) is a widespread attack among sites that rely on the Cross-Origin Resource Sharing (or CORS). 

The CORS is a concept in which one site provides explicit permission to another site to make specific requests.

In addition to CORS, there is JSONP. This is another way of accessing data from another site. Using this method, only an authenticated user can retrieve personal data specific to the users. This means that other sites can’t have access to such data. 

However, JSONP allows this in the form of a CSRF-style attack. This attack takes advantage of the fact that JSONP relies on the Same-Origin Policy (SOP). The problem with SOP is that it does not prevent sites from executing external `<script>` tags. 

In that case, the attacker’s site adds a JSONP URL as a script. 

The browser executes the request and sends cookies for the authenticated user. The JSONP returns data for the authenticated user, which is read by the attacker’s site. 

The attacker uses the current session to perform additional requests. As you can imagine, this poses a big threat if the second site has sensitive and exploitable data. 
