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

var check = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input'); //selecting the whole checkboxes
var total = 50; //initial value
var totalHtmlElement = document.getElementById('total-div'); //it'll print the value in html
var couponList = ['1Q2W3E4R5T6Y', '0P9O8I7U6Y5T', '1A2S3D4F5G6H', '0L9K8J7H6G5F']; //Array with the coupons list
var discountCoupon = document.getElementsByClassName('discount-coupon')[0]; // getting the coupon from the user
var burgerName = document.getElementsByClassName('burger-name')[0]; // getting the burger name
var buttonIngredient = document.getElementsByTagName('button')[0];
var chosenIngredients = 0;



buttonIngredient.addEventListener('click', function() { //adding click event

  total = 50; //reset to the initial value every time the guest will click the button

  if (burgerName.value === '') { //the user must insert a name for his/her burger
    alert('You should insert a name first! Try again please') // otherwise it's not possible to go ahead
  } else { //burger named, the user can proceed

  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) { //adding price from 'costs' to 'total' every time 'costs' is checked
      total += parseInt(check[i].value);
    }
  }
}



  totalHtmlElement.getElementsByTagName('span')[1].innerText = total; // printing the value

})
