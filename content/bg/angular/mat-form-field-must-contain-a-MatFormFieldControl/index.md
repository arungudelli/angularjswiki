+++
title   = "`mat-form-field` трябва да съдържа `MatFormFieldControl`"
subtitle= "Поправянето на `mat-form-field` трябва да съдържа грешка `MatFormFieldControl` "
summary = "Ако вашият `mat-form-field` съдържа `<input>` или `<textarea>` елемент, уверете се, че сте добавили директивата `matInput` към него и сте импортирали `MatInputModule`, в противен случай ще получите грешка `mat-form-field must contain a MatFormFieldControl` във вашето приложение."
keywords=["mat-form-field трябва да съдържа MatFormFieldControl"]
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

Ако използвате материалните модули на Angular, може да сте се сблъскали с `mat-form-field must contain a MatFormFieldControl` грешка при използването на `MatFormFieldModule`.

Тази грешка се появява, когато сте пропуснали да добавите контрол за полето на формата към вашето поле на формата.

{{%toc%}}

## какво представляват контролите на полето на формуляра? 

Собствените елементи като `<input>` или `<textarea>`, които са поставени вътре в `mat-form-field`, действат като контроли на полето на формуляра 

Ако вашият `mat-form-field` съдържа `<input>` или `<textarea>` елемент, уверете се, че сте добавили директивата `matInput` към него и сте импортирали `MatInputModule`, в противен случай ще получите грешка `mat-form-field must contain a MatFormFieldControl` в приложението си.

И други компоненти, които могат да действат като контрол на полето на формуляра, включват `<mat-select>`, `<mat-chip-list>` както и всички създадени от вас потребителски контроли на полето на формуляра.


## Отстраняване на грешка на `mat-form-field must contain a MatFormFieldControl`.

За да поправите грешката, добавете `MatInputModule` и `MatFormFieldModule` вътре в необходимия модул или `app.module.ts` 

Или както е обяснено в [Angular material tutorial](https://www.angularjswiki.com/material/), добавете всички материални модули в общ модул и го добавете към файла `app.module.ts`, за да можем да ги използваме в цялото приложение 

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

И след това се уверете, че сте добавили директивата `matInput` към контрола `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Горният код хвърля грешка, защото не сме добавили директивата `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

А **`matInput` е чувствителен към малки и големи букви** 

Така че, ако имате правописна грешка в `matInput` или главни букви(`MatInput`) или малки букви(`matinput`) в `matInput`, пак ще срещнете грешка.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` Контролният вход не трябва да съдържа `*ngIf`

Ако използвате `*ngIf` за контрола mat-form-field, т.е., `<input>` таг, ще получите грешка `mat-form-field must contain a MatFormFieldControl`.

Кодът по-долу няма да работи.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Вместо това трябва да използвате `*ngIf` на елемента `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Обобщение

За да поправите грешката `mat-form-field must contain a MatFormFieldControl`, следвайте следните стъпки

1. Импортирайте `MatInputModule` и `MatFormFieldModule` 
2. Добавете директива `matInput` към контрола `mat-form-field`. т.е. `input` или `textarea`
3. Проверете правописа на `matInput`.
4. Не използвайте `*ngIf` за контрола `mat-form-field`, вместо това я използвайте за елемента `mat-form-field` 

