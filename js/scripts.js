$(document).ready(function(){
  var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push(rank + " of " + suit);
    });
  });
//   var printDeck = deck.map(function(card){
//     $("#deckOutput").append("<li>" + deck.shift(0) + "</li>");
//   });
//   document.getElementById("deckOutput").innerHTML = printDeck;
//   console.log(printDeck);
// });

for
(var i = 0; i < deck.length; i++){
  $("#deckOutput").append("<li>" + deck[i] + "</li>");
}
// var printDeck = deck.map(function(card){
//   $("#deckOutput").append("<li>" + deck.shift(0) + "</li>");
// });
// document.getElementById("deckOutput").innerHTML = printDeck;
// console.log(printDeck);
// });
// $(document).ready(function(){
//   var iceCreamMatt = ["vanilla", "fudge", "cheese cake"]
//   var iceCreamMichael = ["caramel", "coffee", "carrot cake"]
//
//   iceCreamMatt.forEach(function(icecream){
//     // $("#iceCream").html("<br>" + "</br>");
//     $("#iceCream").text(icecream);
//
//   });
// });
