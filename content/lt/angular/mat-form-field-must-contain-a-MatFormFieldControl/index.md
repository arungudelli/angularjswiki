+++
title   = "`mat-form-field` turi būti `MatFormFieldControl`"
subtitle= "Taisant `mat-form-field` turi būti `MatFormFieldControl` klaida"
summary = "Jei jūsų `mat-form-field` yra `<input>` arba `<textarea>` elementas, įsitikinkite, kad prie jo pridėjote `matInput` direktyvą ir importavote `MatInputModule`, antraip jūsų programoje bus `mat-form-field must contain a MatFormFieldControl` klaida."
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

Jei naudojate "Angular material" modulius, galėjote susidurti su `mat-form-field must contain a MatFormFieldControl` klaida naudodami `MatFormFieldModule`.

Ši klaida atsiranda, kai į savo formos lauką praleidote pridėti formos lauko valdiklį.

{{%toc%}}

## kas yra formos lauko valdikliai? 

Vietiniai elementai, pvz `<input>` arba `<textarea>`, esantys `mat-form-field` viduje, veikia kaip formos lauko valdikliai 

Jei jūsų `mat-form-field` yra `<input>` arba `<textarea>` elementas, įsitikinkite, kad prie jo pridėjote `matInput` direktyvą ir importavote `MatInputModule`, antraip programoje bus `mat-form-field must contain a MatFormFieldControl` klaida.

Ir kiti komponentai, kurie gali veikti kaip formos lauko valdiklis, yra šie `<mat-select>`, `<mat-chip-list>` ir bet kokie jūsų sukurti pasirinktiniai formos lauko valdikliai.


## `mat-form-field must contain a MatFormFieldControl` klaidos taisymas.

Norėdami ištaisyti klaidą, pridėkite `MatInputModule` ir `MatFormFieldModule` būtino modulio viduje arba `app.module.ts` 

Arba, kaip paaiškinta [Angular material tutorial](https://www.angularjswiki.com/material/), visus material modulius pridėkite į bendrą modulį ir pridėkite jį prie `app.module.ts` failo, kad galėtume juos naudoti visoje programoje 

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

O toliau įsitikinkite, kad į `mat-form-field` valdiklį pridėjote `matInput` direktyvą.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Aukščiau pateiktas kodas išmeta klaidą, nes nepridėjome `matInput` direktyvos.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

O **`matInput` yra jautrus didžiosioms raidėms** 

Taigi, jei `matInput` bus padaryta rašybos klaida arba `matInput` bus didžiosios raidės(`MatInput`) ar mažosios raidės(`matinput`) , vis tiek susidursite su klaida.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` valdymo įvesties neturi būti `*ngIf`

Jei naudojate `*ngIf` mat-form-field valdiklyje, t. y., `<input>` žymą, gausite `mat-form-field must contain a MatFormFieldControl` klaidą.

Toliau pateiktas kodas neveiks.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Vietoj to turėtumėte naudoti `*ngIf` `mat-form-field` elementą.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Apibendrinimas

Norėdami ištaisyti `mat-form-field must contain a MatFormFieldControl` klaidą, atlikite toliau nurodytus veiksmus

1. Importuokite `MatInputModule` ir `MatFormFieldModule` 
2. Į `mat-form-field` valdiklį pridėkite `matInput` direktyvą, t. y. `input` arba `textarea`
3. Patikrinkite `matInput` rašybą.
4. Nenaudokite `*ngIf` valdiklyje `mat-form-field`, vietoj to naudokite jį elemente `mat-form-field` 

