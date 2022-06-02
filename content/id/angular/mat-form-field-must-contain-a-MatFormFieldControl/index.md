+++
title   = "`mat-form-field` harus mengandung `MatFormFieldControl`"
subtitle= "Memperbaiki `mat-form-field` harus mengandung kesalahan `MatFormFieldControl` "
summary = "Jika `mat-form-field` Anda berisi sebuah `<input>` atau `<textarea>` elemen, pastikan Anda telah menambahkan arahan `matInput` ke dalamnya dan telah mengimpor `MatInputModule` jika tidak, Anda akan mendapatkan kesalahan `mat-form-field must contain a MatFormFieldControl` dalam aplikasi Anda."
keywords=["mat-form-field harus berisi MatFormFieldControl"]
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

Jika Anda menggunakan modul material Angular, Anda mungkin mengalami `mat-form-field must contain a MatFormFieldControl` error saat menggunakan `MatFormFieldModule`.

Kesalahan ini terjadi ketika Anda telah melewatkan untuk menambahkan kontrol bidang formulir ke bidang formulir Anda.

{{%toc%}}

## apa itu kontrol bidang formulir? 

Elemen-elemen asli seperti `<input>` atau `<textarea>`yang ditempatkan di dalam `mat-form-field` bertindak sebagai kontrol bidang formulir 

Jika `mat-form-field` Anda berisi sebuah `<input>` atau `<textarea>` elemen, pastikan Anda telah menambahkan arahan `matInput` ke dalamnya dan telah mengimpor `MatInputModule` jika tidak, Anda akan mendapatkan kesalahan `mat-form-field must contain a MatFormFieldControl` dalam aplikasi Anda.

Dan komponen lain yang dapat bertindak sebagai kontrol bidang formulir meliputi `<mat-select>`, `<mat-chip-list>` dan kontrol bidang formulir kustom apa pun yang telah Anda buat.


## Memperbaiki `mat-form-field must contain a MatFormFieldControl` error.

Untuk memperbaiki kesalahan, tambahkan `MatInputModule` dan `MatFormFieldModule` di dalam modul yang diperlukan atau `app.module.ts` 

Atau seperti yang dijelaskan di [Angular material tutorial](https://www.angularjswiki.com/material/) tambahkan semua modul material dalam modul umum dan tambahkan ke file `app.module.ts` sehingga kita dapat menggunakannya di seluruh aplikasi 

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

Dan selanjutnya pastikan Anda telah menambahkan `matInput` directive ke `mat-form-field` control.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Kode di atas melempar kesalahan karena kita belum menambahkan `matInput` directive.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Dan **`matInput` adalah case-sensitive** 

Jadi jika Anda memiliki kesalahan ejaan di `matInput` atau huruf besar(`MatInput`) atau huruf kecil(`matinput`) di `matInput`, tetap saja Anda akan mengalami kesalahan.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` control input tidak boleh mengandung `*ngIf`

Jika Anda menggunakan `*ngIf` pada kontrol mat-form-field yaitu, `<input>` tag, anda akan mendapatkan `mat-form-field must contain a MatFormFieldControl` error.

Kode di bawah ini tidak akan bekerja.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Sebagai gantinya Anda harus menggunakan `*ngIf` pada elemen `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Ringkasan

Untuk memperbaiki `mat-form-field must contain a MatFormFieldControl` error, ikuti langkah-langkah di bawah ini

1. Impor `MatInputModule` dan `MatFormFieldModule` 
2. Tambahkan arahan `matInput` ke kontrol `mat-form-field`. yaitu, `input` atau `textarea`
3. Periksa ejaan `matInput`.
4. Jangan gunakan `*ngIf` pada kontrol `mat-form-field` sebagai gantinya gunakan pada elemen `mat-form-field` 

