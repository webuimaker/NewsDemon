function nextReview() {
  $(window.cards[window.cardIdx]).removeClass("selected");
  setTimeout(function() {
    if (window.cardIdx >= window.cards.length-1) {
      window.cardIdx = -1;
    }
    window.cardIdx = window.cardIdx + 1;
    $(window.cards[window.cardIdx]).addClass("selected");
  }, 3000);
}

$(document).ready(function() {
  /* init review cards */
  window.cards = $('#container_reviews > .choke > .card');
  window.cardIdx = 0;
  setInterval('nextReview()', 20000);
});
