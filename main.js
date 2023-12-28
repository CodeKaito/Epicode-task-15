let cards = document.querySelectorAll(".card");

let cardsCount = cards.length;
document.getElementById("cardCount").textContent = cardsCount;

document.getElementById("removeCards").addEventListener("click", function() {
    cards.forEach(function(card) {
      // Fai qualcosa con ogni card al clic del bottone
      // Ad esempio, puoi rimuovere le cards
      card.remove();
    });
});