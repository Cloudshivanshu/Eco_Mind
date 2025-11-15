
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
const sound = document.getElementById("birdSound");


//tree animation
const video = document.getElementById("videoBtn");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// let hasFlown = false; // prevent multiple triggers
let videoLoaded = false;

video.addEventListener("loadeddata", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    videoLoaded = true;
    console.log(" Video loaded, ready!");
});

video.addEventListener("mousemove", (e) => {
    if (!videoLoaded) return;

    const rect = video.getBoundingClientRect();
    const scaleX = video.videoWidth / rect.width;
    const scaleY = video.videoHeight / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    // Draw current video frame to hidden canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const alpha = pixel[3]; // transparency channel

    if (!isNight && alpha > 10) {
        video.classList.add("hovered");
        bird.style.display = 'block';
        bird.classList.add('fly');
        sound.play();
    } else {
        video.classList.remove("hovered");
    }

});

video.addEventListener("mouseleave", () => {
    video.classList.remove("hovered");
});

bird.addEventListener("animationend", () => {

    bird.style.display = 'none';
    bird.classList.remove('fly');
});

document.addEventListener("click", () => {
    const bgm = document.getElementById("calmBgm");
    const birdBgm = document.getElementById("birdChirping");
    const cricketBgm = document.getElementById("crickets");

    bgm.loop = true;
    bgm.volume = 0.3;
    bgm.play();

    // First STOP all nature sounds
    birdBgm.pause();
    birdBgm.currentTime = 0;

    cricketBgm.pause();
    cricketBgm.currentTime = 0;

    if (!isNight) {
        birdBgm.loop = true;
        birdBgm.volume = 0.4;
        birdBgm.play();
    } else {
        cricketBgm.loop = true;
        cricketBgm.volume = 0.9;
        cricketBgm.play();
    }

})

// mode
const modeIcon = document.getElementById("modeToggle");
const dayBg = "/static/Assets/Images/environment.jpeg";
const nightBg = "/static/Assets/Images/nightBG.png";
const sunBtn = "/static/Assets/Images/sun.png";
const moonBtn = "/static/Assets/Images/moonBtn.png";
let isNight = false;

modeIcon.addEventListener("click", () => {
    isNight = !isNight;

    document.body.style.backgroundImage = `url(${isNight ? nightBg : dayBg})`;

    // Switch icon
    modeIcon.src = isNight ? moonBtn : sunBtn;

    const overlays = document.querySelectorAll(".overlay-gif, .overlay-gif1, .squirel");
    const overlaysNig = document.querySelectorAll(".nightTrees, .leaves");

    if (!isNight) {
        overlays.forEach(el => {
            // console.log("hel")
           el.style.display = 'block';
        });
        overlaysNig.forEach(el => {
           el.style.display = 'none';
        });
    }else{
        overlays.forEach(el => {
            // console.log("hel")
           el.style.display = 'none';
        });

        overlaysNig.forEach(el => {
           el.style.display = 'block';
        });
    }
});

