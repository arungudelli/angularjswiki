+++
title   = "`mat-form-field` musi zawierać błąd `MatFormFieldControl`"
subtitle= "Naprawianie błędów `mat-form-field` musi zawierać błąd `MatFormFieldControl` "
summary = "Jeśli Twój adres `mat-form-field` zawiera błąd `<input>` lub `<textarea>` upewnij się, że dodałeś do niego dyrektywę `matInput` i zaimportowałeś `MatInputModule`, w przeciwnym razie w Twojej aplikacji pojawi się błąd `mat-form-field must contain a MatFormFieldControl`."
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

Jeśli używasz modułów materialnych Angular, mogłeś napotkać błąd `mat-form-field must contain a MatFormFieldControl` podczas używania `MatFormFieldModule`.

Błąd ten pojawia się, gdy nie dodałeś kontrolki pola formularza do swojego pola formularza.

{{%toc%}}

## czym są kontrolki pola formularza? 

Rodzime elementy, takie jak `<input>` lub `<textarea>`które są umieszczane wewnątrz strony `mat-form-field`, działają jak kontrolki pól formularzy 

Jeśli na stronie `mat-form-field` znajduje się element `<input>` lub `<textarea>` upewnij się, że dodałeś do niego dyrektywę `matInput` i zaimportowałeś `MatInputModule`, w przeciwnym razie w Twojej aplikacji pojawi się błąd `mat-form-field must contain a MatFormFieldControl`.

Inne komponenty, które mogą pełnić funkcję kontrolki pola formularza, to m.in `<mat-select>`, `<mat-chip-list>` oraz wszelkie niestandardowe kontrolki pól formularzy utworzone przez użytkownika.


## Fixing `mat-form-field must contain a MatFormFieldControl` error.

Aby naprawić błąd, dodaj `MatInputModule` i `MatFormFieldModule` wewnątrz niezbędnego modułu lub `app.module.ts` 

Lub jak wyjaśniono w [Angular material tutorial](https://www.angularjswiki.com/material/) dodaj wszystkie moduły materiałów do wspólnego modułu i dodaj go do pliku `app.module.ts`, abyśmy mogli z nich korzystać w całej aplikacji 

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

Następnie upewnij się, że dodałeś dyrektywę `matInput` do kontrolki `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Powyższy kod wyrzuca błąd, ponieważ nie została dodana dyrektywa `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

A ** w przypadku`matInput` rozróżniana jest wielkość liter** 

Jeśli więc w adresie `matInput` popełnisz błąd ortograficzny albo w adresie `matInput` użyjesz wielkich liter (`MatInput`) lub małych liter (`matinput`), to i tak wystąpi błąd.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` wejście sterujące nie powinno zawierać `*ngIf`

Jeśli używasz `*ngIf` w kontrolce mat-form-field, tzn, `<input>` otrzymasz błąd `mat-form-field must contain a MatFormFieldControl`.

Poniższy kod nie będzie działał.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Zamiast tego należy użyć adresu `*ngIf` na elemencie `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Podsumowanie

Aby naprawić błąd `mat-form-field must contain a MatFormFieldControl`, wykonaj poniższe czynności

1. Zaimportuj `MatInputModule` i `MatFormFieldModule` 
2. Dodaj dyrektywę `matInput` do kontrolki `mat-form-field`. tj. `input` lub `textarea`
3. Sprawdź pisownię `matInput`.
4. Nie używaj `*ngIf` w kontrolce `mat-form-field`, zamiast tego użyj jej w elemencie `mat-form-field` 

