+++
title = "WARNING in budgets, maximum exceeded for initial Angular error fix"
subtitle = "Fixing Angular WARNING in budgets, maximum exceeded for initial error"
type="post"
summary ="To fix Angular 'WARNING in budgets, maximum exceeded for initial', Open 'angular.json' and check for 'budgets' keyword, and increase the values of maximumWarning, maximumError properties."
keywords=["WARNING in budgets, maximum exceeded for initial"]
date="2023-02-08T01:01:05+0000"
lastmod="2023-02-08T03:56:11+0000"
draft=false
authors = ["admin"]

+++

If your Angular Application bundle size exceed certain limit, you might get `WARNING in budgets, maximum exceeded for initial` error.

As Angular applications grow in functionality, they also grow in size. 

Angular CLI gives us the ability to set size thresholds in the configuration file i.e., `angular.json` file, so that our application size stay within the defined boundaries. 

We can define your size boundaries in the CLI configuration file, `angular.json`, in a `budgets` section for each configured environment. i.e., production,stage and development environments etc.. 


```json
"configurations": {
    "production": {
        "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                }
              ]
    },
}    
```

So to fix Angular `WARNING in budgets, maximum exceeded for initial` error follow the below steps

1. Open `angular.json` and check for `budgets` keyword.
2. And increase the `maximumWarning` and `maximumError` values in `kb` or `mb`. 

```json
"configurations": {
    "production": {
        "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "5mb",
                  "maximumError": "10mb"
                }
              ]
    },
}
```

This should solve your issue.