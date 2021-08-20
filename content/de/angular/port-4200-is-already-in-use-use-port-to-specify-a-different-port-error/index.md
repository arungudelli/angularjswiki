+++ title = "Port 4200 Is Already In Use. Use ‘–Port’ To Specify A Different Port Error" subtitle = "Fix port 4200 is already in use error" type="post" summary ="Port 4200 is already in use. Use --port to specify a different port error occures sometimes when we run our angular app using ng serve.That means there is another existing service already running on port 4200." keywords=["angular,angular cli,change port number in angular,port 4200 is already in use"] date="2018-02-16T01:01:05+0000" lastmod="2018-11-04T03:56:11+0000" draft=true authors = ["admin"]

+++

`Port 4200 is already in use. Use ‘-port’ to specify a different port error` occures sometimes when we run our angular app using `ng serve`

That means there is another existing service already running on port 4200.
{{%toc%}}

## Port 4200 is already in use.Use '-port' to specify a different port error Reasons

  1. An existing application(not angular) in your system using the port number 4200. This is a very rare scenario. In this case, you need to change the port number of angular application as mentioned below.
  2. You already ran `ng serve` and to exit the application you typed Control Z (Ctrl+Z), And then you typed `ng serve` then you will get `port 4200 is already in use_ error`. In this case, you need to kill the previous process

To close or terminate the angular instance always use _Control+C (Ctrl+c)_

And `ng serve` uses default port number 4200 to run the angular application. And our application URL will be <a href="http://localhost:4200" target="_blank" rel="noopener">http://localhost:4200</a>. To avoid this error we need to change the port number to other port which is free.

According to RFC 793 port numbers is a 16-bit unassigned integer. The minimum value is 0 and the maximum value is 65535.

And, within this range, ports 0 &#8211; 1023 are reserved for specific purposes(mostly).

To change the port number for our angular application use the below command

`ng serve --port 4201`

Now type `ng serve`

Our angular application will be running on <a href="http://localhost:4201" target="_blank" rel="noopener">http://localhost:4201</a>

To kill already existing angular process use the below commands

## Fix Port 4200 is already in use.Use '-port' to specify a different port error in Mac & Linux

To fix port 4200 is already in use error in In Mac & Linux OS (Ubuntu etc) use the following commands

```
sudo kill $(sudo lsof -t -i:4200) Or
sudo kill `sudo lsof -t -i:4200` Or
sudo lsof -t -i tcp:4200 | xargs kill -9
```

## Fix Port 4200 is already in use.Use '-port' to specify a different port error in Window

In Window operating system open command prompt. Use the following command to fix port 4200 is already in use error.

```
netstat -a -n -o | findStr "4200"`
```
Take the process id and kill the process using the following command

`taskkill -f /pid 11128`

{{< figure src="NetStat-angular.png" title="netstat angular" alt="netstat angular">}} 

