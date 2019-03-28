# Port 4200 Is Already In Use. Use ‘–Port’ To Specify A Different Port Error

_Port 4200 is already in use. Use ‘&#8211;port’ to specify a different port error_ occures sometimes when we run our angular app using _ng serve_

That means there is another existing service already running on port 4200.

  1. [Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error Reasons](#step-1)
  2. [Fix Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error in Mac & Linux](#step-2)
  3. [Fix Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error in Window](#step-3)

## Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error Reasons: {#step-1}

  * An existing application(not angular) in your system using the port number 4200. This is a very rare scenario. In this case, you need to change the port number of angular application as mentioned below.
  * You already ran &#8216;ng serve&#8217; and to exit the application you typed Control Z (Ctrl+Z), And then you typed _ng serve _then you will get _port 4200 is already in use_ error. In this case, you need to kill the previous process

To close or terminate the angular instance always use _Control+C (Ctrl+c)_

And &#8216;_ng serve_&#8216; uses default port number 4200 to run the angular application. And our application URL will be <a href="http://localhost:4200" target="_blank" rel="noopener">http://localhost:4200</a>. To avoid this error we need to change the port number to other port which is free.

According to RFC 793 port numbers is a 16-bit unassigned integer. The minimum value is 0 and the maximum value is 65535.

And, within this range, ports 0 &#8211; 1023 are reserved for specific purposes(mostly).

To change the port number for our angular application use the below command

<pre class="lang:default decode:true ">ng serve --port 4201</pre>

Now type _ng serve_

Our angular application will be running on <a href="http://localhost:4201" target="_blank" rel="noopener">http://localhost:4201</a>

To kill already existing angular process use the below commands

## Fix Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error in Mac & Linux: {#step-2}

To fix port 4200 is already in use error in In Mac & Linux OS (Ubuntu etc) use the following commands

<pre>sudo kill $(sudo lsof -t -i:4200) Or
sudo kill `sudo lsof -t -i:4200` Or
sudo lsof -t -i tcp:4200 | xargs kill -9</pre>

## FIx Port 4200 is already in use.Use &#8216;&#8211;port&#8217; to specify a different port error in Window: {#step-3}

In Window operating system open command prompt. Use the following command to fix port 4200 is already in use error.

<pre>netstat -a -n -o | findStr "4200"</pre>

Take the process id and kill the process using the following command

<pre>taskkill -f /pid 11128</pre><figure id="attachment_455" style="width: 614px" class="wp-caption aligncenter">

<img class="size-full wp-image-455" src="http://www.angularjswiki.com/wp-content/uploads/2018/06/NetStat-angular.png" alt="NetStat angular" width="614" height="39" srcset="https://www.angularjswiki.com/wp-content/uploads/2018/06/NetStat-angular.png 614w, https://www.angularjswiki.com/wp-content/uploads/2018/06/NetStat-angular-300x19.png 300w" sizes="(max-width: 614px) 100vw, 614px" /> <figcaption class="wp-caption-text">NetStat angular</figcaption></figure> 

<pre></pre>