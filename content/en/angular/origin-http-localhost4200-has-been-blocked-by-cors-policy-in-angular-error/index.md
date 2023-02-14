+++
title = "from origin 'http://localhost:4200' has been blocked by CORS policy Angular error Fix"
subtitle = "Fix from origin 'localhost:4200' has been blocked by CORS policy error"
type="post"
summary ="There are three ways to fix 'from origin 'http://localhost:4200' has been blocked by CORS policy' error in Angular applications 1. Change the back end API to accept requests from 'http://localhost:4200'.2. Using alias domain 3. Proxying to a backend server. "
keywords=["angular,angular cli,change port number in angular,port 4200 is already in use"]
date="2023-02-14T00:00:00+0000"
lastmod="2023-02-14T00:00:00+0000"
draft=false
authors = ["admin"]

+++

If you try to access cross domain back end API from the Angular application you might get `from origin 'http://localhost:4200' has been blocked by CORS policy` error.  

```text
 Access to XMLHttpRequest at '<url>' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

There are three ways to fix `from origin 'http://localhost:4200' has been blocked by CORS policy` error in Angular applications. 

1. Change the back end API to accept requests from `http://localhost:4200`.
2. Using alias domain
3. Proxying to a backend server. 

{{%toc%}}

## Solution 1: Change the back end API to accept requests from `http://localhost:4200`

Depending upon the language or framework you use at your back end API, you can add configuration to accepts requests from the Angular application. i.e., `http://localhost:4200`.

If you use Java Sprint Boot API, add cross origin annotation to your controller class. 

```java
@CrossOrigin(origins = "http://localhost:4200/") 
public class MyController {
    
    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }
}
```

If you use C# or Dotnet Core API, Open `Program.cs` or `Startup.cs` file and add `AddCors` options to the service collection.

And then using `UseCors` method, allow cross domain requests based on added CORS policy. 

```csharp

services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigins",
    builder =>
    {
        builder.WithOrigins(
                            "http://localhost:4200"
                            )
                            .AllowAnyHeader()
                            .AllowAnyMethod();
    });
});

// UseCors

var app = builder.Build();
app.UseCors("AllowAngularOrigins");

```

If you are using `node.js` API, install `cors` module and add the `cors()` setting. 

```js
> npm install cors --save

var cors = require('cors');
app.use(cors());
```

For `Nestjs` applications, Use `enableCors` method.

```
app.enableCors({ origin: "*" });
```

## Solution 2: Using alias domain.

If your backend API accepts requests from a wildcard domains  like `*.domain.com`.

Open your hosts file and add an alias name for localhost i.e., `127.0.0.1 angular.domain.example` and then in your browser instead of `localhost:4200` use `angular.domain.example:4200`.

## Solution 3: Proxying to a backend server.

For example if your back end server runs on `http://localhost:3000` and if you make requests from your Angular application i.e., `http://localhost:4200` as it is a cross-domain request we will get CORS error. 

Angular CLI uses `webpack-dev-server` as the development server. 

The `webpack-dev-server` makes uses `http-proxy-middleware` package which allows us to send API requests on the same domain when we have a separate API back end development server.

So to divert all calls for `http://localhost:4200/api` to a server running on `http://localhost:3000/api` follow the below steps.

Create a file `proxy.conf.json` in Angular project's `src/` folder.

Add the following code to the new proxy file.
   
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

In the Angular CLI configuration file, i.e., In `angular.json`, add the `proxyConfig` option to the serve target.

```json
…
  "architect": {
    "serve": {
      "builder": "@angular-devkit/build-angular:dev-server",
      "options": {
        "browserTarget": "your-application-name:build",
        "proxyConfig": "src/proxy.conf.json"
      },
…
```

Now run `ng serve` command.

And its only for `ng serve`, you can't use proxy in `ng build`.



