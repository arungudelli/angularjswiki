+++
title   = "`mat-form-field` πρέπει να περιέχει ένα `MatFormFieldControl`"
subtitle= "Η διόρθωση `mat-form-field` πρέπει να περιέχει σφάλμα `MatFormFieldControl` "
summary = "If your `mat-form-field` contains an `<input>` ή `<textarea>` στοιχείο, βεβαιωθείτε ότι έχετε προσθέσει την οδηγία `matInput` σε αυτό και έχετε εισάγει το `MatInputModule` διαφορετικά θα λάβετε σφάλμα `mat-form-field must contain a MatFormFieldControl` στην εφαρμογή σας."
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

Εάν χρησιμοποιείτε τις ενότητες υλικού της Angular μπορεί να έχετε αντιμετωπίσει σφάλμα `mat-form-field must contain a MatFormFieldControl` κατά τη χρήση του `MatFormFieldModule`.

Αυτό το σφάλμα εμφανίζεται όταν έχετε παραλείψει να προσθέσετε ένα στοιχείο ελέγχου πεδίου φόρμας στο πεδίο φόρμας σας.

{{%toc%}}

## Τι είναι τα στοιχεία ελέγχου πεδίου φόρμας 

Τα εγγενή στοιχεία όπως `<input>` ή `<textarea>`, τα οποία τοποθετούνται μέσα στο `mat-form-field` λειτουργούν ως στοιχεία ελέγχου πεδίου φόρμας 

Εάν το `mat-form-field` σας περιέχει ένα `<input>` ή `<textarea>` στοιχείο, βεβαιωθείτε ότι έχετε προσθέσει την οδηγία `matInput` σε αυτό και έχετε εισάγει το `MatInputModule`, διαφορετικά θα λάβετε σφάλμα `mat-form-field must contain a MatFormFieldControl` στην εφαρμογή σας.

Και άλλα στοιχεία που μπορούν να λειτουργήσουν ως έλεγχος πεδίου φόρμας περιλαμβάνουν `<mat-select>`, `<mat-chip-list>` και τυχόν προσαρμοσμένα στοιχεία ελέγχου πεδίου φόρμας που έχετε δημιουργήσει.


## Διόρθωση σφάλματος `mat-form-field must contain a MatFormFieldControl`.

Για να διορθώσετε το σφάλμα, προσθέστε το `MatInputModule` και το `MatFormFieldModule` μέσα σε μια απαραίτητη ενότητα ή το `app.module.ts` 

Ή όπως εξηγείται στο [Angular material tutorial](https://www.angularjswiki.com/material/) προσθέστε όλες τις ενότητες υλικών σε μια κοινή ενότητα και προσθέστε την στο αρχείο `app.module.ts`, ώστε να μπορούμε να τις χρησιμοποιούμε σε όλη την εφαρμογή 

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

Και στη συνέχεια βεβαιωθείτε ότι έχετε προσθέσει την οδηγία `matInput` στο στοιχείο ελέγχου `mat-form-field`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input placeholder="Name">
</mat-form-field>
```

Ο παραπάνω κώδικας εμφανίζει σφάλμα επειδή δεν έχουμε προσθέσει την οδηγία `matInput`.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput placeholder="Name">
</mat-form-field>
```

Και ** το`matInput` είναι ευαίσθητο στην πεζότητα** 

Έτσι, αν έχετε ένα ορθογραφικό λάθος στο `matInput` ή κεφαλαία γράμματα(`MatInput`) ή μικρά γράμματα(`matinput`) στο `matInput`, και πάλι θα αντιμετωπίσετε το σφάλμα.

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matinput placeholder="Name">
</mat-form-field>
```

## `mat-form-field` η είσοδος ελέγχου δεν πρέπει να περιέχει `*ngIf`

Εάν χρησιμοποιείτε το `*ngIf` σε έλεγχο mat-form-field π.χ., `<input>` tag, θα λάβετε το σφάλμα `mat-form-field must contain a MatFormFieldControl`.

Ο παρακάτω κώδικας δεν θα λειτουργήσει.

```
<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput *ngIf="condition"/>
</mat-form-field>
```

Αντ' αυτού θα πρέπει να χρησιμοποιήσετε το `*ngIf` στο στοιχείο `mat-form-field`.

```
<mat-form-field *ngIf="condition">
  <mat-label>Input</mat-label>
  <input matInput />
</mat-form-field>

```

## Περίληψη

Για να διορθώσετε το σφάλμα `mat-form-field must contain a MatFormFieldControl` ακολουθήστε τα παρακάτω βήματα

1. Εισαγωγή `MatInputModule` και `MatFormFieldModule` 
2. Προσθέστε την οδηγία `matInput` στο στοιχείο ελέγχου `mat-form-field`. Δηλαδή, `input` ή `textarea`
3. Ελέγξτε την ορθογραφία του `matInput`.
4. Μην χρησιμοποιείτε το `*ngIf` στο στοιχείο ελέγχου `mat-form-field`, αλλά χρησιμοποιήστε το στο στοιχείο `mat-form-field` 

