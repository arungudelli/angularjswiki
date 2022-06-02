+++
title   = "`mat-form-field` должно содержать ошибку `MatFormFieldControl`"
subtitle= "Исправление `mat-form-field` должно содержать ошибку `MatFormFieldControl` "
summary = "Если ваш `mat-form-field` содержит `<input>` или `<textarea>` элемент, убедитесь, что вы добавили к нему директиву `matInput` и импортировали `MatInputModule`, в противном случае вы получите ошибку `mat-form-field must contain a MatFormFieldControl` в вашем приложении."
keywords=["mat-form-field должен содержать MatFormFieldControl"]
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

Если вы используете материальные модули Angular, вы могли столкнуться с ошибкой `mat-form-field must contain a MatFormFieldControl` при использовании `MatFormFieldModule`.

Эта ошибка возникает, когда вы не добавили элемент управления полем формы в поле формы.

{{%toc%}}

## что такое элементы управления полем формы? 

Такие элементы, как `<input>` или `<textarea>`, которые размещаются внутри `mat-form-field`, являются элементами управления полями формы 

Если ваш `mat-form-field` содержит `<input>` или `<textarea>` элемент, убедитесь, что вы добавили к нему директиву `matInput` и импортировали `MatInputModule`, в противном случае вы получите ошибку `mat-form-field must contain a MatFormFieldControl` в вашем приложении.

Другие компоненты, которые могут выступать в качестве элементов управления полем формы, включают в себя `<mat-select>`, `<mat-chip-list>` и любые пользовательские элементы управления полем формы, которые вы создали.


## Исправление ошибки `mat-form-field must contain a MatFormFieldControl`.

Чтобы исправить ошибку, добавьте `MatInputModule` и `MatFormFieldModule` внутрь необходимого модуля или `app.module.ts` 

Или, как объясняется в [Angular material tutorial] (https://www.angularjswiki.com/material/), добавьте все модули материалов в общий модуль и добавьте его в файл `app.module.ts`, чтобы мы могли использовать их во всем приложении 

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

Далее убедитесь, что вы добавили директиву `matInput` в элемент управления `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Приведенный выше код выдает ошибку, потому что мы не добавили директиву `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

А **`matInput` чувствительна к регистру** 

Поэтому, если у вас есть орфографическая ошибка в `matInput` или заглавные (`MatInput`) или строчные (`matinput`) буквы в `matInput`, вы все равно столкнетесь с ошибкой.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` управляющий ввод не должен содержать `*ngIf`

Если вы используете `*ngIf` в элементе управления mat-form-field, то есть, `<input>` тег, вы получите ошибку `mat-form-field must contain a MatFormFieldControl`.

Приведенный ниже код не будет работать.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Вместо этого следует использовать `*ngIf` на элементе `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Резюме

Чтобы исправить ошибку `mat-form-field must contain a MatFormFieldControl`, выполните следующие действия

1. Импортируйте `MatInputModule` и `MatFormFieldModule` 
2. Добавьте директиву `matInput` к элементу управления `mat-form-field`. т.е. `input` или `textarea`
3. Проверьте орфографию `matInput`.
4. Не используйте `*ngIf` в элементе управления `mat-form-field`, вместо этого используйте его в элементе `mat-form-field` 

