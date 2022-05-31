+++
title    ="Πώς να χρησιμοποιήσετε το Font Awesome CDN"
subtitle ="Λίστα Font awesome Icons CDN"
summary  ="Σε αυτό το σεμινάριο θα μάθουμε πώς να χρησιμοποιούμε τα εικονίδια font awesome εξυπηρετώντας τα από το font awesome cdn."
keywords =["font awesome icons,font awesome icons CDN"]
type="docs"
date="2019-07-14T01:01:05+0000"
lastmod="2021-12-14T00:00:08+0000"
prev="fontawesome"
next="csscontentcode"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
linktitle="CDN"
[menu.fontawesome]
parent="fontawesome"
weight=2
[image]
caption = "font awesome icons"
focal_point = ""
preview_only = false

+++

Σε αυτό το σεμινάριο θα μάθουμε πώς να χρησιμοποιούμε τα εικονίδια font awesome εξυπηρετώντας τα από το font awesome cdn.

Η χρήση του CDN (Content delivery Network) είναι ο καλύτερος τρόπος για να εξυπηρετήσουμε τα αρχεία css ή js των εικονιδίων font awesome, αντί να τα φιλοξενήσουμε από τους δικούς μας διακομιστές.

{{%toc%}}

## Βήματα για να χρησιμοποιήσετε το font awesome CDN

1. Ανοίξτε την επίσημη ιστοσελίδα του εικονιδίου font awesome.

2. Λάβετε έναν μοναδικό κωδικό ενσωμάτωσης εισάγοντας το email σας ακολουθώντας αυτόν τον [σύνδεσμο](https://fontawesome.com/start).
3. Στη συνέχεια, το font awesome στέλνει ένα email με τον κωδικό ενσωμάτωσης Font Awesome CDN μαζί με οδηγίες για να προσθέσετε εικονίδια στον ιστότοπό μας.
4. Το δείγμα JavaScript font awesome CDN link θα έχει την παρακάτω μορφή.`https://use.fontawesome.com/a34asdfsd.js`.
5. Αντιγράψτε τον κωδικό ενσωμάτωσης που λάβατε μέσω email και τοποθετήστε τον στην HTML σας `<head>` tag 

{{< figure src="/img/font-awesome-cdn-embed-code.png" title="font awesome cdn embed code" alt="font awesome cdn embed code">}}

{{< figure src="/img/font-awesome-cdn-register.png" title="font awesome cdn register" alt="font awesome cdn register">}}


Εδώ είναι το δείγμα ιστοσελίδας που χρησιμοποιεί το font awesome CDN.

```
<!doctype html>
<html>
  <head>
    ...
    <!-- font awesome CDN Url -->
    <script src="https://use.fontawesome.com/your-embed-code.js"></script> 
    <!-- TODO: Place your own Font Awesome CDN embed code received via email  -->
    ...
  </head>
  <body>
    ...
    <i class="fa fa-home"></i>
    ...
  </body>
</html>
```

Επιπλέον, μπορούμε να εγγραφούμε στον ιστότοπο font awesome CDN για να διαχειριστούμε τις προτιμήσεις μας.

## Πλεονεκτήματα της χρήσης του font awesome CDN

1. Ένας ταχύτερος διακομιστής από τον οποίο μπορούμε να εξυπηρετήσουμε τα εικονίδια font awesome.
2. font awesome Οι διακομιστές CDN είναι πάντα σε λειτουργία.
3. Και τα αρχεία θα εξυπηρετούνται από τον πλησιέστερο διακομιστή CDN.
4. Μπορούμε να αναβαθμίσουμε γρήγορα σε εικονίδια font awesome pro χωρίς καμία αλλαγή κώδικα από την πλευρά μας.
5. Μπορούμε να δημιουργήσουμε πολλαπλούς κωδικούς ενσωμάτωσης για διαφορετικούς ιστότοπους.
6. Το Font Awesome CDN μπορεί να φορτώσει τα εικονίδια σας ασύγχρονα ενισχύοντας περαιτέρω την απόδοση του ιστότοπου.

Ένα ακόμη μεγάλο πλεονέκτημα της χρήσης του font awesome CDN είναι ότι μπορούμε να αυτοματοποιήσουμε την προσβασιμότητα των εικονιδίων μας.

Η λειτουργία αυτόματης προσβασιμότητας του Font Awesome CDN βοηθά τα άτομα με προβλήματα όρασης και ακοής.

Για παράδειγμα, αναλογιστείτε το παρακάτω παράδειγμα

```
<button type="submit">
  <i class="fa fa-envelope"></i> Email Us!
</button>
```
Στο παραπάνω παράδειγμα, μέσα στο κουμπί υποβολής χρησιμοποιούμε το εικονίδιο font awesome. Αλλά για τα άτομα με οπτική αναπηρία που χρησιμοποιούν αναγνώστες οθόνης για να έχουν πρόσβαση στον ιστότοπο, δεν απαιτείται η έκθεση αυτού του εικονιδίου.

Έτσι, το font awesome CDN θα προσθέσει αυτόματα το χαρακτηριστικό `aria-hidden=true` στο εικονίδιο.

```
<button type="submit">
  <i class="fa fa-envelope" aria-hidden=”true”></i> Email Us!
</button>
```

## font awesome 5 CDN 

Εκτός από το παραπάνω επίσημο CDN font awesome, μπορούμε να χρησιμοποιήσουμε δωρεάν έκδοση των εικονιδίων font awesome χρησιμοποιώντας δίκτυα παράδοσης περιεχομένου όπως τα cdnjs, maxcdn και jsdelivr.


## Font awesome CDN από cdn js 

Για την πιο πρόσφατη έκδοση font awesome 5 και άνω χρησιμοποιήστε τους παρακάτω συνδέσμους αρχείων CSS του font awesome CDN CDN από το cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.min.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.css
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.min.css

```

Αν θέλετε να χρησιμοποιήσετε την έκδοση Javascript των εικονιδίων font awesome χρησιμοποιήστε τους παρακάτω συνδέσμους CDN από το cdnjs.

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/conflict-detection.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/regular.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/solid.min.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.js
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.min.js
```

Για τις τελευταίες εκδόσεις CDN του fontawesome ανατρέξτε στον παρακάτω σύνδεσμο cdnjs από το cloudflare.

```
https://cdnjs.com/libraries/font-awesome
```

## Σύνδεσμοι Font awesome CDN από jsdelivr 

Σερβίρετε τα αρχεία CSS των εικονιδίων font awesome χρησιμοποιώντας τους παρακάτω συνδέσμους CDN του jsdelivr.

```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/all.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/brands.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/fontawesome.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/regular.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/solid.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/svg-with-js.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/css/v4-shims.min.css
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.1/css/all.min.css

```
Για Font awesome CDN javascript αρχεία συνδέσεις χρησιμοποιούν παρακάτω.
```
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/all.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/brands.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/conflict-detection.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/fontawesome.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/regular.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/solid.min.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.js
https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.3/js/v4-shims.min.js
```

Εδώ είναι ο σύνδεσμος για την τελευταία jsdelivr fontawesome CDN.

```
https://www.jsdelivr.com/package/gh/FortAwesome/Font-Awesome

```

## Σύνδεσμος CDN Font awesome Bootstrap

Για τις παλαιότερες εκδόσεις όπως το font awesome 4.7 μπορούμε να χρησιμοποιήσουμε bootstap cdn links

```
https://www.bootstrapcdn.com/fontawesome/

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

```


