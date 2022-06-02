+++
title   = "`mat-form-field` muss einen `MatFormFieldControl` enthalten "
subtitle= "Fixing `mat-form-field` must contain a `MatFormFieldControl` error"
summary = "Wenn Ihr `mat-form-field` einen `<input>` oder `<textarea>` element enthält, vergewissern Sie sich, dass Sie die Direktive `matInput` hinzugefügt und `MatInputModule` importiert haben, andernfalls wird in Ihrer Anwendung der Fehler `mat-form-field must contain a MatFormFieldControl` auftreten."
keywords=["mat-form-field muss ein MatFormFieldControl enthalten"]
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

Wenn Sie Angular-Materialmodule verwenden, sind Sie möglicherweise auf den Fehler `mat-form-field must contain a MatFormFieldControl` gestoßen, während Sie `MatFormFieldModule` verwenden.

Dieser Fehler tritt auf, wenn Sie versäumt haben, ein Formularfeld-Steuerelement zu Ihrem Formularfeld hinzuzufügen.

{{%toc%}}

## Was sind Formularfeld-Steuerelemente? 

Die nativen Elemente wie `<input>` oder `<textarea>`die innerhalb von `mat-form-field` platziert werden, fungieren als Formularfeld-Steuerelemente 

Wenn Ihr `mat-form-field` ein `<input>` oder `<textarea>` element enthält, vergewissern Sie sich, dass Sie die Direktive `matInput` hinzugefügt und `MatInputModule` importiert haben. Andernfalls werden Sie in Ihrer Anwendung den Fehler `mat-form-field must contain a MatFormFieldControl` erhalten.

Andere Komponenten, die als Formularfeldsteuerung fungieren können, sind `<mat-select>`, `<mat-chip-list>` und alle benutzerdefinierten Formularfeldsteuerungen, die Sie erstellt haben.


## Behebung des `mat-form-field must contain a MatFormFieldControl` Fehlers.

Um den Fehler zu beheben, fügen Sie `MatInputModule` und `MatFormFieldModule` in ein notwendiges Modul oder `app.module.ts` ein 

Oder wie in [Angular material tutorial] (https://www.angularjswiki.com/material/) erklärt, fügen Sie alle Materialmodule in einem gemeinsamen Modul und fügen Sie es zu `app.module.ts` Datei, so dass wir sie in der gesamten Anwendung verwenden können 

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

Und als nächstes stellen Sie sicher, dass Sie die Direktive `matInput` zum `mat-form-field` Steuerelement hinzugefügt haben.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Der obige Code löst einen Fehler aus, weil wir die Direktive `matInput` nicht hinzugefügt haben.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Und **`matInput` unterscheidet zwischen Groß- und Kleinschreibung** 

Wenn Sie also einen Rechtschreibfehler in `matInput` oder Großbuchstaben (`MatInput`) oder Kleinbuchstaben (`matinput`) in `matInput` haben, wird der Fehler trotzdem auftreten.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` Kontrolleingabe sollte nicht enthalten `*ngIf`

Wenn Sie `*ngIf` für das Steuerelement mat-form-field verwenden, d. h., `<input>` tag, werden Sie `mat-form-field must contain a MatFormFieldControl` Fehler erhalten.

Der folgende Code wird nicht funktionieren.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Stattdessen sollten Sie `*ngIf` auf `mat-form-field` Element verwenden.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Zusammenfassung

Um den Fehler `mat-form-field must contain a MatFormFieldControl` zu beheben, führen Sie folgende Schritte aus

1. Importieren Sie `MatInputModule` und `MatFormFieldModule` 
2. Fügen Sie die Direktive `matInput` zum `mat-form-field` -Steuerelement hinzu. d.h. `input` oder `textarea`
3. Prüfen Sie die Rechtschreibung von `matInput`.
4. Verwenden Sie `*ngIf` nicht für das `mat-form-field` Steuerelement, sondern für das `mat-form-field` Element

