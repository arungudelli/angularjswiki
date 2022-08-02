+++
title = "How To align mat-dialog-actions buttons to the right,center or left"
subtitle = "mat-dialog-actions align"
summary ="To align mat dialog actions buttons to the right center or left we can make use of `align` attribute."
keywords=["mat-dialog-actions align"]
date="2022-08-01T00:00:00+0000"
lastmod="2022-08-01T00:00:05+0000"
type="post"
draft=false
authors = ["admin"]
+++

To align mat dialog actions buttons to the right center or left we can make use of `align` attribute. 


Have a look at the below mat dialog example

```
<h1 mat-dialog-title>Hello</h1>
<div mat-dialog-content>
  Sample content
</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>

```

{{%toc%}}

By default mat dialog actions buttons aligned to the left corner of the mat dialog popup. 


## mat dialog actions buttons align right

To right align the mat dialog actions buttons, use `align="end"` attribute on `mat-dialog-actions` container.

```
<h1 mat-dialog-title>mat-dialog-actions button right align</h1>
<div mat-dialog-content>
  Sample content
</div>
<div mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>
```

## mat dialog actions buttons align center

Similarly to display the mat dialog actions buttons in the middle of the container, use `align="center"` attribute. 

```
<h1 mat-dialog-title>mat-dialog-actions button center align</h1>
<div mat-dialog-content>
  Sample content
</div>
<div mat-dialog-actions align="center">
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>
```

## Mat dialog actions align Stackblitz demo

Have a look at the below demo

[Mat dialog actions align Stackblitz demo](https://stackblitz.com/edit/mat-dialog-actions-align)

