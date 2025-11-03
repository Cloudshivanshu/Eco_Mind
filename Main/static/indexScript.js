
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert(`Welcome, ${username}!`);
        closeLogin();
    }
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// document.addEventListener("DOMContentLoaded", function () {

// });

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

//bird animation
const tree = document.querySelector('.overlay-gif1');
const bird = document.querySelector('.birdGif');

tree.addEventListener('mouseover', () => {
  bird.style.display = 'block'; // show bird
  bird.classList.add('fly');
});
