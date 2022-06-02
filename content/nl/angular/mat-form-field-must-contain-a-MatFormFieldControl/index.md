+++
title   = "`mat-form-field` moet een `MatFormFieldControl` bevatten "
subtitle= "Reparatie van `mat-form-field` moet een `MatFormFieldControl` fout bevatten"
summary = "Als uw `mat-form-field` een `<input>` of `<textarea>` element bevat, zorg er dan voor dat je de `matInput` directive eraan hebt toegevoegd en `MatInputModule` hebt geïmporteerd, anders krijg je `mat-form-field must contain a MatFormFieldControl` error in je applicatie."
keywords=["mat-form-field moet een MatFormFieldControl bevatten"]
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

Als u Angular-materiaalmodules gebruikt, hebt u mogelijk een `mat-form-field must contain a MatFormFieldControl` -fout ondervonden tijdens het gebruik van `MatFormFieldModule`.

Deze fout treedt op wanneer u heeft gemist om een formulier veld controle toe te voegen aan uw formulier veld.

{{%toc%}}

## wat zijn formulier veld controles? 

De oorspronkelijke elementen zoals `<input>` of `<textarea>`die in `mat-form-field` staan, fungeren als formulierveldbedieningselementen 

Als uw `mat-form-field` een `<input>` of `<textarea>` element bevat, zorg er dan voor dat je de `matInput` directive eraan hebt toegevoegd en `MatInputModule` hebt geïmporteerd, anders zul je `mat-form-field must contain a MatFormFieldControl` error krijgen in je applicatie.

En andere componenten die als formulierveldcontrole kunnen fungeren zijn `<mat-select>`, `<mat-chip-list>` en alle aangepaste formulierveldbesturingselementen die je hebt gemaakt.


## `mat-form-field must contain a MatFormFieldControl` fout herstellen.

Om de fout te herstellen, voeg `MatInputModule` en `MatFormFieldModule` toe in een noodzakelijke module of `app.module.ts` 

Of zoals uitgelegd in [Angular materiaal tutorial](https://www.angularjswiki.com/material/) voeg alle materiaal modules in een gemeenschappelijke module en voeg het toe aan `app.module.ts` bestand, zodat we ze kunnen gebruiken in de hele applicatie 

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

En zorg er vervolgens voor dat je `matInput` directive hebt toegevoegd aan `mat-form-field` control.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

De bovenstaande code geeft een fout omdat we de `matInput` directive niet hebben toegevoegd.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

En **`matInput` is hoofdlettergevoelig** 

Dus als u een spelfout hebt in `matInput` of hoofdletters(`MatInput`) of kleine letters(`matinput`) in `matInput`, zult u nog steeds de fout tegenkomen.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` controle input mag niet bevatten `*ngIf`

Als je `*ngIf` gebruikt op mat-form-field control, d.w.z, `<input>` tag, dan krijg je `mat-form-field must contain a MatFormFieldControl` error.

De onderstaande code zal niet werken.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

In plaats daarvan moet je `*ngIf` gebruiken op `mat-form-field` element.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Samenvatting

Volg de onderstaande stappen om `mat-form-field must contain a MatFormFieldControl` fout op te lossen

1. Importeer `MatInputModule` en `MatFormFieldModule` 
2. Voeg `matInput` directive toe aan de `mat-form-field` control. d.w.z., `input` of `textarea`
3. Controleer de spelling van `matInput`.
4. Gebruik `*ngIf` niet op `mat-form-field` control in plaats daarvan gebruik het op `mat-form-field` element

