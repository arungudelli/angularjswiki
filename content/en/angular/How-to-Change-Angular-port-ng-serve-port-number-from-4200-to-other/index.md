+++
title = "How To Change Angular Port (ng serve port) number from 4200 to other"
subtitle = "ng serve port number change"
summary ="There are two ways we can change the default angular port number from 4200 to other number."
keywords=["ng serve port,angular port"]
date="2021-07-05T01:01:05+0000"
lastmod="2021-07-05T02:45:18+0000"
type="post"
draft=false
authors = ["admin"]
+++

There are two ways we can change the default angular port number from 4200 to other number.

1. Using `ng serve --port` flag.
2. Specifying default port number in project's `Angular.json` file.

By default Angular CLI `ng serve` command uses port 4200 to run the application.

```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

## Using ng serve --port flag.

This is pretty simple method to change the default port number in Angular application.

While running project, with `ng serve` command, use `--port` flag followed by port number.

```
ng serve --port 3200
```

Everytime we have to pass port number to `ng serve` command using `--port` flag.

```
** Angular Live Development Server is listening on localhost:3200, open your browser on http://localhost:3200/ **
```

## Adding default port number in project's angular.json file.

In latest versions of Angular i.e., Angular 10+ we can configure the default port in project's `angular.json` file.

Here are the steps to add default port number in Angular applications.

1. Navigate to project route folder.
2. Open "angular.json" file.
3. Search for "serve" configuration and it contains "options" cofig.
4. Add "port":3001(or any other number) property inside options.

```
 "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "latest-angular:build",
			"port": 3001
          },
          "configurations": {
            "production": {
              "browserTarget": "latest-angular:build:production"
            }
          }
        }
```

{{< figure src="/img/blog/angular-port-number-config.png" title="angular port number config" alt="angular port number config">}}

Now if we run `ng serve` command, the project automatically uses 3001 port number specified in `angular.json` file.

```
** Angular Live Development Server is listening on localhost:3001, open your browser on http://localhost:3001/ **
```


And one more good thing in latest Angular versions is if the [port 4200 is already in use](https://www.angularjswiki.com/angular/port-4200-is-already-in-use-use-port-to-specify-a-different-port-error/). 

The Angular CLI automatically asks us to use a different port. as shown below.

```
? Port 4200 is already in use.
Would you like to use a different port? Yes
```

{{< figure src="/img/blog/change-port-number-angular.png" title="change port number angular" alt="change port number angular">}}

