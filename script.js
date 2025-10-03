

function scrollCards(direction) {
    const cardsWrapper = document.getElementById('cards');
    const cardWidth = cardsWrapper.querySelector('.card').offsetWidth + 20; // card + margin
    cardsWrapper.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", function () {

});

// 3. Menu Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
    const menu = document.getElementById('fullScreenMenu');
    const openBtn = document.getElementById('openMenuButton');
    const closeBtn = document.getElementById('closeMenuButton');

    // Function to handle adding or removing the 'is-open' class
    function toggleMenu(isOpen) {
        if (isOpen) {
            // Adds the class, triggering the CSS slide-down animation
            menu.classList.add('is-open');
        } else {
            // Removes the class, triggering the CSS slide-up animation
            menu.classList.remove('is-open');
        }
    }

    // Open Menu Event Listener (Toggles the menu state)
    openBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the link from acting as a normal anchor tag

        // If the menu is currently open, close it; otherwise, open it.
        if (menu.classList.contains('is-open')) {
            toggleMenu(false);
        } else {
            toggleMenu(true);
        }
    });

    // Close Menu Event Listener
    closeBtn.addEventListener('click', () => {
        toggleMenu(false);
    });
});