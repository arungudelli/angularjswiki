
+++
title     = "2016+ Free Font Awesome Icons Class list Names &amp; their CSS content values"
subtitle  = "Πλήρης λίστα με 2016+ δωρεάν εικονίδια font awesome "
summary   = "Αυτή η ανάρτηση περιέχει δωρεάν font awesome ονόματα λίστας κατηγοριών εικονιδίων με τους κωδικούς τιμών περιεχομένου CSS τους &amp; βήμα προς βήμα οδηγίες για να χρησιμοποιήσετε τα εικονίδια font awesome σε σελίδες HTML."
keywords  = ["font awesome icons,font awesome icons list,fa icons list,icons"]
linktitle = "Εισαγωγή"

type="docs"
date="2019-07-14T01:01:05+0000"
lastmod="2020-09-08T00:00:08+0000"
draft=false
parentdoc="fontawesome"
featured="font-awesome-icons.png"
authors = ["admin"]
categories=["faicons"]
[menu.fontawesome]
parent="fontawesome"
weight=1
[image]
  caption = "font awesome icons"
  focal_point = ""
  preview_only = false
+++


Αυτή η δημοσίευση περιέχει πλήρη δωρεάν font awesome icons class list names with their CSS content value codes &amp; step by step tutorial to use font awesome icons in HTML pages.

Και επίσης μπορείτε να αναζητήσετε και να βρείτε τα εικονίδια font awesome χρησιμοποιώντας το [πλαίσιο αναζήτησης](#search-font-awesome-icons) που παρέχεται στο άρθρο.

Κάντε κλικ στο `Ctrl + D` για να βάλετε σελιδοδείκτη στη σελίδα.

**Στην τελευταία έκδοση font awesome 6.2.0, υπάρχουν 2016 δωρεάν εικονίδια**.

Στην προηγούμενη έκδοση font awesome 5.14 έχουμε περίπου 1598 δωρεάν εικονίδια.

Ανάλογα με το στυλ του εικονιδίου, αυτά τα δωρεάν εικονίδια font awesome χωρίζονται σε τρεις κατηγορίες 

1. font awesome συμπαγή εικονίδια
2. font awesome κανονικά εικονίδια
3. font awesome εικονίδια μάρκας

Μπορούμε να <a href="https://use.fontawesome.com/releases/v6.2.0/fontawesome-free-6.2.0-web.zip" rel="noopener" target="_blank">κατεβάσουμε</a> το αρχείο font awesome icons css και να τα σερβίρουμε από τον δικό σας διακομιστή ή μπορούμε να τα σερβίρουμε από δημόσια CDN.

{{% alert note %}}
Και επίσης έχω δημιουργήσει ένα [δωρεάν ηλεκτρονικό βιβλίο](#download-font-awesome-icons-list-pdf) το οποίο περιέχει πλήρη κατάλογο των εικονιδίων font awesome σε μορφή PDF.
{{% /alert%}}

{{% toc %}}

## Τι είναι το font awesome?

1. font awesome είναι η πιο δημοφιλής εργαλειοθήκη γραμματοσειρών και εικονιδίων του διαδικτύου που βασίζεται σε CSS και LESS.
2. font awesome δημιουργήθηκε από τον Dave Gandy.
3. font awesome ήταν το πιο δημοφιλές νέο έργο ανοιχτού κώδικα στο github το 2012 και σήμερα είναι ένα από τα 10 κορυφαία έργα συνολικά.
4. Η Font Awesome είναι αυτή τη στιγμή live σε 47M ιστότοπους και οι μισοί προγραμματιστές ιστού παγκοσμίως χρησιμοποιούν τα εικονίδια font awesome.
5. Το Font Awesome διευκολύνει την προσθήκη διανυσματικών εικονιδίων και κοινωνικών λογοτύπων στους ιστότοπούς μας.

## Πώς να χρησιμοποιήσετε τα εικονίδια font awesome 

Υπάρχουν δύο τρόποι με τους οποίους μπορούμε να χρησιμοποιήσουμε τα εικονίδια font awesome στις διαδικτυακές μας εφαρμογές.

1. Χρησιμοποιώντας ονόματα κλάσεων CSS
2. Χρησιμοποιώντας τιμές περιεχομένου CSS
3. Χρήση εικονιδίων SVG

Πρώτα πρέπει να προσθέσουμε το αρχείο font awesome icons css στην ενότητα head του αρχείου html.

## Εμφάνιση των εικονιδίων font awesome χρησιμοποιώντας ονόματα κλάσεων CSS 

Ο πιο συνηθισμένος τρόπος εμφάνισης των εικονιδίων font awesome είναι η χρήση των ονομάτων των κλάσεών τους.

Για κάθε εικονίδιο έχει προκαθοριστεί ένα όνομα κλάσης, απλά πρέπει να προσθέσουμε το `fa-` στο όνομα του εικονιδίου ως κλάση.

font awesome τα εικονίδια χρησιμοποιούν την ετικέτα italic, δηλ, `<i></i>` για την εμφάνιση των εικονιδίων 

Ο λόγος πίσω από τη χρήση αυτής της `<i>` ετικέτας ως εικονίδιο είναι 

1. Είναι σύντομη
2. `I` stand of Icon (όχι στον κόσμο της HTML όμως)

Για να εμφανίσετε τα εικονίδια font awesome χρησιμοποιώντας ονόματα κλάσεων css ακολουθήστε τα βήματα.

1. Προσθέστε μια ετικέτα εικονιδίων.
2. Προσθέστε το όνομα του εικονιδίου με πρόθεμα `fa` στην ιδιότητα class.
3. Επιπλέον, πρέπει να προσθέσουμε την κλάση Style. π.χ., solid ή regular ή brand

Πρώτα θα προσθέσουμε το font awesome icons css στην ενότητα head του αρχείου html όπως φαίνεται παρακάτω

```
<head>
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
</head>

```
Χρησιμοποιώ το σύνδεσμο cloudfare font awesome icons cdn.

Για να χρησιμοποιήσετε το επίσημο font awesome CDN. Μεταβείτε στο άρθρο [font awesome CDN](/fontawesome/cdn).

Τώρα για να εμφανίσετε το εικονίδιο `facebook` font awesome , χρησιμοποιήστε τον παρακάτω κώδικα html.

```
<i class="fab fa-facebook"></i>
```
Το εικονίδιο του Facebook είναι μέρος των εικονιδίων μάρκας, οπότε έχω προσθέσει το `fab` ως πρόσθετο όνομα κλάσης.

Για να χρησιμοποιήσετε τα συμπαγή εικονίδια font awesome προσθέστε το όνομα της κλάσης ως `fas`

Για παράδειγμα, για να εμφανίσετε το εικονίδιο `barcode` χρησιμοποιήστε τον ακόλουθο κώδικα html

```
<i class="fas fa-barcode"></i>
```
`bookmark` το εικονίδιο είναι μέρος των κανονικών εικονιδίων, προσθέστε το όνομα της κλάσης ως `far`

```
<i class="far fa-bookmark"></i>
```

Για να χρησιμοποιήσετε τα εικονίδια font awesome σε εφαρμογές Angular διαβάστε το άρθρο

[How To Use Font Awesome icons in Angular Applications]
(https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)

## Εμφάνιση εικονιδίων font awesome χρησιμοποιώντας τιμές περιεχομένου CSS

Η παραπάνω προσέγγιση απαιτεί να αλλάξουμε τα ονόματα των κλάσεων των εικονιδίων μας.

Εάν το έργο σας είναι καινούργιο, τότε μπορούμε να ακολουθήσουμε την παραπάνω προσέγγιση 

Αλλά αν πρόκειται για ένα υπάρχον έργο, είναι πολύ δύσκολο να αλλάξουμε το όνομα της κλάσης εικονιδίων.

Σε αυτή την περίπτωση μπορούμε να εμφανίσουμε τα εικονίδια font awesome χρησιμοποιώντας τις τιμές περιεχομένου τους CSS.

Μπορούμε να χρησιμοποιήσουμε τα χαρακτηριστικά στοιχείων CSS Pseudo-elements `::before` ή `::after` για να τα εμφανίσουμε.

Για παράδειγμα, για να εμφανίσουμε το εικονίδιο `user`, θα μπορούσαμε να χρησιμοποιήσουμε τον παρακάτω κώδικα HTML.

```
<li>
<span class="user"></span> Login
</li>
``` 

Αλλά το επίσημο όνομα του εικονιδίου του χρήστη font awesome είναι `fa-user`.

Έτσι για να εμφανίσετε το εικονίδιο, για την κλάση `.user` προσθέστε την ιδιότητα CSS content code ως `\f007`, η οποία είναι η τιμή unicode για το εικονίδιο `user`.

```
.user::before {
    font: var(--fa-font-solid);
    content: '\f007';
}
```

Μαζί με τον κώδικα περιεχομένου CSS, πρέπει να προσθέσουμε και το στυλ `font`.

Μπορούμε να χρησιμοποιήσουμε font awesome προκαθορισμένες προσαρμοσμένες ιδιότητες CSS για αυτό.

Για συμπαγή εικονίδια χρησιμοποιήστε `var(--fa-font-solid)`

Για κανονικά εικονίδια χρησιμοποιήστε `var(--fa-font-regular)`

Για εικονίδια μάρκας χρησιμοποιήστε `var(--fa-font-regular)`

Επιπλέον, μπορούμε να προσθέσουμε μια προσαρμοσμένη κλάση που ορίζει μερικές κοινές ιδιότητες CSS.

```
.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

<li>
<span class="user fontawesomeicon"></span> Login
</li>

```
Αυτό είναι όλο 

Στην έκδοση font awesome 5 δεν υπάρχουν προσαρμοσμένες ιδιότητες css 

Έτσι πρέπει να προσθέσουμε τις ιδιότητες css `font-family` και `font-weight`.

```
// Font awesome 5 version. 
.user::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f007";
}

.fontawesomeicon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

```

`font-family` και `font-weight` μπορεί να είναι διαφορετικές για κάθε εικονίδιο ανάλογα με το στυλ του εικονιδίου, όπως τα κανονικά, τα συμπαγή και τα εικονίδια μάρκας.

[Χρήση εικονιδίων font awesome ως κώδικα περιεχομένου CSS](/fontawesome/csscontentcode)

Για να εμφανίσετε τα εικονίδια font awesome χρησιμοποιώντας SVG, ανατρέξτε στο παρακάτω άρθρο.

[Font Awesome SVG Icons List, Usage, CSS &amp; Download](/fontawesome/svg/)

## Αναζήτηση εικονιδίων Font Awesome 

Εδώ είναι η πλήρης λίστα με τα δωρεάν εικονίδια font awesome cheat sheet.

Πληκτρολογήστε το όνομα του εικονιδίου στο παρακάτω πλαίσιο αναζήτησης και αντιγράψτε το όνομα της κλάσης και το στυλ ή τον κώδικα περιεχομένου CSS.

Τα εικονίδια θα φιλτραριστούν στον παρακάτω πίνακα.

Και κάντε κλικ στο εικονίδιο για να αντιγράψετε τον κώδικα html.

<input type="text" id="myInput" onkeyup="searchTable()" placeholder="Search font awesome icons.." title="Search font awesome icons">

Total <strong><span id="counter">2016</span></strong> Icons.

## Download font awesome icons list PDF

Subscribe to our Angular wiki newsletter and download font awesome icons list in PDF format.

<script>
 var icons = document.querySelectorAll('i');

  function searchTable() {
  var input, filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  var count = 0;

   for (var i=0; i < icons.length; i++) {
    //debugger;
    var text = icons[i].nextSibling.textContent.trim().toUpperCase();
    var tr = icons[i].parentNode.parentElement;

    if (text.toUpperCase().indexOf(filter) > -1) {
        tr.style.display = "";
        count++;
      } else {
        tr.style.display = "none";
    }
   
   }

   var countElement = document.getElementById("counter");

   countElement.innerHTML = count;

 
}



// copy.addEventListener("pointerdown", () => navigator.clipboard.writeText("Hello World!"))

for (var i=0; i < icons.length; i++) {
    icons[i].onpointerdown  = function(){
       navigator.clipboard.writeText(this.outerHTML).then(() => {
        alert(this.outerHTML + "successfully copied");
      });
    }
};

</script>

<style>
  i{
    cursor:pointer;
    under
  }
</style>