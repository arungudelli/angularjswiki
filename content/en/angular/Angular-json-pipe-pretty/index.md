+++
title = "Angular json pipe pretty format"
subtitle = "json pipe formatting"
summary ="Use pre tag along with angular json pipe to display well formed pretty JSON data"
keywords=["Angular json pipe pretty, ng update angular"]
date="2021-03-27T00:00:05+0000"
lastmod="2021-03-27T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Angular json pipe pretty"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

For debugging purpose,We can display the JSON data in component HTML using Json Pipe in Angular.

Taking product object as explained in [Angular Json Pipe](https://www.angularjswiki.com/pipes/jsonpipe/).

```
<p>{{product | json}}</p>
<p>{{products | json}}</p>
```

Have a look at the output

```
{ "Id": 1, "Name": "Angular wiki" }

[ { "Id": 1, "Name": "Angular wiki" }, { "Id": 2, "Name": "Typescript" } ]
```

The above output is not pretty-printed/formatted to display to the user. 

And if we display big json object it's very difficult to understand.

So to format the JSON displayed, use `<pre>` tag in HTML.

```
<pre><p>{{product | json}}</p></pre>

<pre><p>{{products | json}}</p></pre>

//Output
{
  "Id": 1,
  "Name": "Angular wiki"
}

[
  {
    "Id": 1,
    "Name": "Angular wiki"
  },
  {
    "Id": 2,
    "Name": "Typescript"
  }
]
```

[Stackblitz Json Pipe Pretty Demo](https://stackblitz.com/edit/angular-json-pipe?file=src%2Fapp%2Fapp.component.html)


{{< figure src="/img/blog/Angular-json-pipe-pretty.png" title="Angular Json Pipe Pretty" alt="Angular Json Pipe Pretty">}}






