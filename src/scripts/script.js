const planCards = document.querySelectorAll('.plan-card');
let currentIndex = 0;
function updateFirstClass() {
  planCards.forEach(card => card.classList.remove('first'));
  planCards[currentIndex].classList.add('first');
  currentIndex = (currentIndex + 1) % planCards.length;
}
updateFirstClass();
setInterval(updateFirstClass, 3000);