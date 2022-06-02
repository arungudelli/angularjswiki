+++
title   = "`mat-form-field` 必须包含一个`MatFormFieldControl`"
subtitle= "修复`mat-form-field` ，必须包含一个`MatFormFieldControl` 的错误"
summary = "如果你的`mat-form-field` 包含一个 `<input>`或 `<textarea>`元素，请确保你已经添加了`matInput` 指令，并且已经导入了`MatInputModule` ，否则你的应用程序中会出现`mat-form-field must contain a MatFormFieldControl` 错误。"
keywords=["mat-form-field必须包含一个MatFormFieldControl"]
type="post"
date="2022-06-01T01:01:05+0000"
lastmod="2022-06-01T04:00:07+0000"
draft=false
authors = ["admin"]
[image]
  caption = "mat-form-field must contain a MatFormFieldControl"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false
+++

如果你使用Angular材料模块，你可能在使用`MatFormFieldModule` 时遇到了`mat-form-field must contain a MatFormFieldControl` 错误。

这个错误发生在你错过了给你的表单字段添加一个表单字段控件。

{{%toc%}}

##什么是表单字段控制？ 

本机元素，如 `<input>`或 `<textarea>`，放在`mat-form-field` ，作为表单字段控件。 

如果你的`mat-form-field` 包含一个 `<input>`或 `<textarea>`元素，请确保你已经添加了`matInput` 指令，并且导入了`MatInputModule` ，否则你的应用程序会出现`mat-form-field must contain a MatFormFieldControl` 错误。

其他可以作为表单字段控制的组件包括 `<mat-select>`, `<mat-chip-list>`以及你所创建的任何自定义表单字段控件。


##修复`mat-form-field must contain a MatFormFieldControl` 错误。

为了解决这个错误，请在必要的模块内添加`MatInputModule` 和`MatFormFieldModule` ，或者添加`app.module.ts` 。 

或者像[Angular material tutorial](https://www.angularjswiki.com/material/)中解释的那样，将所有材料模块添加到一个公共模块中，并将其添加到`app.module.ts` 文件中，这样我们就可以在整个应用程序中使用它们。 

```
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AppModule { }

```

接下来确保你已经将`matInput` 指令添加到`mat-form-field` 控件中。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

上面的代码出现了错误，因为我们没有添加`matInput` 指令。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

而**`matInput` 是区分大小写的**。 

因此，如果你在`matInput` 中有拼写错误，或在`MatInput` 中有大写字母( )，或在`matInput` 中有小写字母(`matinput`)，你仍然会遇到这个错误。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

##`mat-form-field` 控制输入不应包含`*ngIf`

如果你在mat-form-field控件上使用`*ngIf` ，即。 `<input>`标签，你会得到`mat-form-field must contain a MatFormFieldControl` 的错误。

下面的代码将无法工作。

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

相反，你应该在`mat-form-field` 元素上使用`*ngIf` 。

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

##摘要

要修复`mat-form-field must contain a MatFormFieldControl` 错误，请按照以下步骤进行

1.导入`MatInputModule` 和`MatFormFieldModule` 
2.在`mat-form-field` 控件中添加`matInput` 指令。即`input` 或`textarea`
3.检查`matInput` 的拼写。
4.不要在`mat-form-field` 控件上使用`*ngIf` ，而是在`mat-form-field` 元素上使用。

