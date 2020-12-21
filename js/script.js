// Obiettivo:
// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.
// - il testo dove inserire il nome dell'hamburger è un input, di quelli che abbiamo visto in classe, customizzato a nostro piacimento ;)
// Proseguite per step, piano piano, trovate il primo muro, i primi ostacoli commentandoli all'inizio del vostro codice. Cercate tutta la documentazione che vi possa servire per quell'obiettivo.
// Controllate anche la mia repo su boolean-code, dal live coding di oggi, ci sarà sicuramente qualcosa che potrà esservi utile :)
// Quindi poi lavorate su un html bruttissimo e un bel po' di js che vi permetta almeno di calcolare il totale.

var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input'); //selecting the whole checkboxes
var total = 50; // initial value
var totalHtmlElement = document.getElementById('total-div'); // it'll print the value in html

// adding click event
document.getElementById('button-ingredient').addEventListener("click", function function() {

  total = 50; //reset to the initial value every time you'll click the button

  for (var i = 0; i < costs.length; i++) {
    if (costs[i].checked) { //adding price from 'costs' to 'total' every time 'costs' is checked
      total += parseInt(costs[x].value);
    }
  }

})
