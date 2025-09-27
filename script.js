const cardsWrapper = document.getElementById('cards');

    function scrollCards(direction) {
      const cardWidth = cardsWrapper.querySelector('.card').offsetWidth + 20; // card + margin
      cardsWrapper.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
      });
    }
    document.addEventListener("DOMContentLoaded", function () {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
      });