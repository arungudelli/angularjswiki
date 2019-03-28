# How To Capitalize First Letter Of Each Word In Angular

To capitalize first letter of each word in Angular use Angular&#8217;s TitleCasePipe.We have to pass input to the titlecase pipe as shown below

<pre>&lt;p&gt;{{'titleCasePipe capitalizes first letter of each word in angular'
| titlecase}}&lt;/p&gt;
&lt;!-- Output --&gt;
&lt;!--TitleCasePipe Capitalizes First Letter Of Each Word In Angular--&gt;

</pre>

Angular TitleCasePipe is one of the built in pipes which converts text to titlecase.

  1. [Angular TitleCasePipe Syntax](#step-1)
  2. [Angular TitleCasePipe Examples](#step-2)<figure id="attachment_1233" style="width: 1280px" class="wp-caption aligncenter">

<img class="size-full wp-image-1233" src="https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-TitleCase-Pipe.jpg" alt="Angular TitleCase Pipe" width="1280" height="720" srcset="https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-TitleCase-Pipe.jpg 1280w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-TitleCase-Pipe-300x169.jpg 300w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-TitleCase-Pipe-768x432.jpg 768w, https://www.angularjswiki.com/wp-content/uploads/2019/02/Angular-TitleCase-Pipe-1024x576.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption class="wp-caption-text">Angular TitleCase Pipe</figcaption></figure> 

## Angular TitleCasePipe Syntax: {#step-1}

The syntax is very simple Just we need to pass input of type string to titlecase pipe

<pre>{{ value_expression | titlecase }}</pre>

And words in a text determined based upon the white space delimiters such as space,tab or line-feed character.

## Angular TitleCasePipe Examples: {#step-2}

We go through the different  Angular TitleCasePipe examples to understand it further.

We will create a component called titlecase component in our Angular project. And test the different kind of inputs

<pre>&lt;p&gt;{{'angular titlecase' | titlecase}}&lt;/p&gt;
&lt;!-- output is "Angular Titlecase" --&gt; 
&lt;p&gt;{{'anGuLaR tITLEcASE' | titlecase}}&lt;/p&gt; 
&lt;!-- output is "Angular Titlecase" --&gt; 
&lt;p&gt;{{'angular title-case' | titlecase}}&lt;/p&gt;
&lt;!-- output is "Angular Title-case" --&gt; 
&lt;p&gt;{{'angular,titlecase' | titlecase}}&lt;/p&gt;
&lt;!-- output is "Angular,titlecase" --&gt;
&lt;p&gt;{{'angular|titlecase' | titlecase}}&lt;/p&gt;
&lt;!-- output is "Angular|titlecase" --&gt;
&lt;p&gt;{{'angular-titlecase' | titlecase}}&lt;/p&gt;
&lt;!-- output is "Angular-titlecase" --&gt;</pre>

Even though if you pass mixed case text to Angular titlecase pipe, It will convert the first letter of each word to uppercase and remaining letters to lowercase.

And the delimiter should be whitespace only. Commas,Pipes,hyphens etc are not considered as delimiters.