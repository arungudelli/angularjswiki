+++
title   = "`mat-form-field` には`MatFormFieldControl` が含まれていなければならない "
subtitle= "修正`mat-form-field` には`MatFormFieldControl` のエラーが含まれている必要があります"
summary = "あなたの`mat-form-field` に `<input>`または `<textarea>`要素を含む場合、`matInput` ディレクティブを追加し、`MatInputModule` をインポートしていることを確認してください。 そうでなければ、アプリケーションで`mat-form-field must contain a MatFormFieldControl` エラーが発生します。"
keywords=["mat-form-field must contain a MatFormFieldControl"]
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

Angular の素材モジュールを使っている場合、`MatFormFieldModule` を使っているときに`mat-form-field must contain a MatFormFieldControl` のエラーに遭遇したことがあるかもしれません。

このエラーは、フォームフィールドにフォームフィールドコントロールを追加し損ねた場合に発生します。

{{%toc%}}

## フォームフィールドコントロールとは何ですか？ 

のようなネイティブな要素です。 `<input>`または `<textarea>`のようなネイティブ要素は、`mat-form-field` 内に配置され、フォームフィールドコントロールとして機能します。 

もし、`mat-form-field` に `<input>`または `<textarea>`要素が含まれている場合、`matInput` ディレクティブを追加し、`MatInputModule` をインポートしていることを確認してください。そうしないと、アプリケーションで`mat-form-field must contain a MatFormFieldControl` エラーが発生します。

また、フォームフィールドコントロールとして機能する他のコンポーネントには、次のようなものがあります。 `<mat-select>`, `<mat-chip-list>`および作成したカスタムフォームフィールドコントロールが含まれます。


## Fixing`mat-form-field must contain a MatFormFieldControl` error.

エラーを修正するには、必要なモジュールの中に`MatInputModule` と`MatFormFieldModule` を追加するか、`app.module.ts`. 

または、[Angular material tutorial](https://www.angularjswiki.com/material/) で説明したように、すべての素材モジュールを共通モジュールに追加して、`app.module.ts` ファイルに追加して、アプリケーション全体で使用できるようにします。 

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

そして次に、`matInput` ディレクティブを`mat-form-field` コントロールに追加していることを確認します。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

上記のコードでは、`matInput` ディレクティブを追加していないため、エラーがスローされます。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

また、**`matInput` は大文字と小文字が区別されます**。 

そのため、`matInput` のスペルミスや、`MatInput` の大文字、`matinput` の小文字、`matInput` の小文字があると、やはりエラーになります。

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

##`mat-form-field` 制御入力に含まれるべきでないもの`*ngIf`

mat-form-field コントロールで`*ngIf` を使用している場合、すなわち、, `<input>`タグで使用すると、`mat-form-field must contain a MatFormFieldControl` エラーが発生します。

以下のコードは動作しません。

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

その代わりに、`mat-form-field` 要素に`*ngIf` を使用する必要があります。

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## 概要

`mat-form-field must contain a MatFormFieldControl` エラーを修正するには、次の手順を実行します。

1.`MatInputModule` と`MatFormFieldModule` をインポートする。 
2.`mat-form-field` コントロールに`matInput` ディレクティブを追加する。すなわち、`input` または`textarea`
3.`matInput` のスペルをチェックする。
4.`*ngIf` を`mat-form-field` コントロールで使用せず、`mat-form-field` 要素で使用する。

