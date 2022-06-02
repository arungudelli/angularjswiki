+++
title   = "`mat-form-field` bir `MatFormFieldControl` içermelidir "
subtitle= " `mat-form-field` adresinin düzeltilmesi `MatFormFieldControl` hatası içermelidir"
summary = "Eğer `mat-form-field` adresiniz bir `<input>` veya `<textarea>` öğesine `matInput` yönergesini eklediğinizden ve `MatInputModule` adresini içe aktardığınızdan emin olun, aksi takdirde uygulamanızda `mat-form-field must contain a MatFormFieldControl` hatası alırsınız."
keywords=["mat-form-field bir MatFormFieldControl içermelidir"]
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

Angular materyal modülleri kullanıyorsanız, `MatFormFieldModule` adresini kullanırken `mat-form-field must contain a MatFormFieldControl` hatasıyla karşılaşmış olabilirsiniz.

Bu hata, form alanınıza bir form alanı denetimi eklemeyi atladığınızda ortaya çıkar.

{{%toc%}}

## form alanı kontrolleri nedir? 

Aşağıdaki gibi yerel unsurlar `<input>` veya `<textarea>`içine yerleştirilen `mat-form-field` form alanı kontrolleri olarak işlev görür 

Eğer `mat-form-field` adresiniz bir `<input>` veya `<textarea>` öğesine `matInput` yönergesini eklediğinizden ve `MatInputModule` içe aktardığınızdan emin olun, aksi takdirde uygulamanızda `mat-form-field must contain a MatFormFieldControl` hatası alırsınız.

Form alanı denetimi olarak işlev görebilen diğer bileşenler şunlardır `<mat-select>`, `<mat-chip-list>` ve oluşturduğunuz tüm özel form alanı denetimleri.


## `mat-form-field must contain a MatFormFieldControl` hatası düzeltiliyor.

Hatayı düzeltmek için `MatInputModule` ve `MatFormFieldModule` adreslerini gerekli bir modülün içine veya `app.module.ts` adresine ekleyin 

Ya da [Angular material tutorial](https://www.angularjswiki.com/material/)'da açıklandığı gibi tüm material modüllerini ortak bir modüle ekleyin ve `app.module.ts` dosyasına ekleyin, böylece bunları uygulama genelinde kullanabiliriz 

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

Daha sonra `mat-form-field` kontrolüne `matInput` yönergesini eklediğinizden emin olun.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Yukarıdaki kod, `matInput` yönergesini eklemediğimiz için hata veriyor.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Ve **`matInput` büyük/küçük harfe duyarlıdır** 

Dolayısıyla, `matInput` adresinde bir yazım hatası veya`MatInput` adresinde büyük harf( ) veya `matInput` adresinde küçük harf(`matinput`) varsa, yine de hatayla karşılaşırsınız.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` kontrol girişi şunları içermemelidir `*ngIf`

Eğer `*ngIf` adresini mat-form-field kontrolü üzerinde kullanıyorsanız, örn, `<input>` etiketini kullanıyorsanız, `mat-form-field must contain a MatFormFieldControl` hatası alırsınız.

Aşağıdaki kod çalışmayacaktır.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Bunun yerine `*ngIf` adresini `mat-form-field` öğesi üzerinde kullanmalısınız.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Özet

 `mat-form-field must contain a MatFormFieldControl` hatasını düzeltmek için aşağıdaki adımları izleyin

1. `MatInputModule` ve `MatFormFieldModule` adreslerini içe aktarın 
2. `mat-form-field` kontrolüne `matInput` yönergesini ekleyin. yani, `input` veya `textarea`
3. `matInput` yazımını kontrol edin.
4. `*ngIf` öğesini `mat-form-field` kontrolünde kullanmayın, bunun yerine `mat-form-field` öğesinde kullanın

