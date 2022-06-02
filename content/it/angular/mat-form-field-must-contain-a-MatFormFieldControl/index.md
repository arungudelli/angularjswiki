+++
title   = "`mat-form-field` deve contenere un `MatFormFieldControl`"
subtitle= "La correzione di `mat-form-field` deve contenere un errore `MatFormFieldControl` "
summary = "Se il tuo `mat-form-field` contiene un errore `<input>` o `<textarea>` assicuratevi di aver aggiunto la direttiva `matInput` e di aver importato `MatInputModule` altrimenti otterrete l'errore `mat-form-field must contain a MatFormFieldControl` nella vostra applicazione."
keywords=["mat-form-field deve contenere un MatFormFieldControl"]
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

Se si utilizzano i moduli material di Angular, si potrebbe aver riscontrato l'errore `mat-form-field must contain a MatFormFieldControl` durante l'utilizzo di `MatFormFieldModule`.

Questo errore si verifica quando non si è aggiunto un controllo del campo del modulo al campo del modulo.

{{%toc%}}

## cosa sono i controlli dei campi modulo? 

Gli elementi nativi come `<input>` o `<textarea>`che si trovano all'interno di `mat-form-field` fungono da controlli di campo 

Se `mat-form-field` contiene un elemento `<input>` o `<textarea>` assicurarsi di aver aggiunto la direttiva `matInput` e di aver importato `MatInputModule`, altrimenti si otterrà l'errore `mat-form-field must contain a MatFormFieldControl` nell'applicazione.

Altri componenti che possono fungere da controllo del campo del modulo includono `<mat-select>`, `<mat-chip-list>` e qualsiasi controllo di campo personalizzato creato dall'utente.


## Correzione dell'errore `mat-form-field must contain a MatFormFieldControl`.

Per risolvere l'errore, aggiungere `MatInputModule` e `MatFormFieldModule` all'interno di un modulo necessario o `app.module.ts` 

Oppure, come spiegato in [tutorial sui materiali Angular] (https://www.angularjswiki.com/material/), aggiungere tutti i moduli dei materiali in un modulo comune e aggiungerlo al file `app.module.ts`, in modo da poterli usare in tutta l'applicazione 

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

Assicurarsi poi di aver aggiunto la direttiva `matInput` al controllo `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Il codice precedente genera un errore perché non è stata aggiunta la direttiva `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

E **`matInput` è sensibile alle maiuscole** 

Quindi, se si commette un errore ortografico in `matInput` o si scrive in maiuscolo (`MatInput`) o in minuscolo (`matinput`) in `matInput`, si verificherà comunque l'errore.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## L'input di controllo `mat-form-field` non deve contenere `*ngIf`

Se si utilizza `*ngIf` sul controllo mat-form-field, cioè, `<input>` si otterrà l'errore `mat-form-field must contain a MatFormFieldControl`.

Il codice seguente non funziona.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Al suo posto si dovrebbe usare `*ngIf` sull'elemento `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Sintesi

Per risolvere l'errore `mat-form-field must contain a MatFormFieldControl`, seguire i passaggi seguenti

1. Importare `MatInputModule` e `MatFormFieldModule` 
2. Aggiungere la direttiva `matInput` al controllo `mat-form-field`. cioè, `input` o `textarea`
3. Controllare l'ortografia di `matInput`.
4. Non usare `*ngIf` sul controllo `mat-form-field`, ma sull'elemento `mat-form-field` 

