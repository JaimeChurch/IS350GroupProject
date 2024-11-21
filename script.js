const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle menu visibility
menuIcon.addEventListener('click', (e) => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to open/close the menu
    e.stopPropagation(); // Prevent click on menu icon from closing the menu
});

// Close the menu when clicking anywhere outside of it
document.addEventListener('click', (e) => {
    // Check if the menu is currently open
    if (navLinks.classList.contains('active')) {
        // If the click is outside the menu and the menu icon, close the menu
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            navLinks.classList.remove('active'); // Close the menu
        }
    }
});

const gameLinks = [
    { name: "Matrix Invader", link: "matrixInvader.html" },
    { name: "Tic-Toe-Tac", link: "ticToeTac.html" },
    { name: "Hangman", link: "hangman.html" },
    { name: "Breakout", link: "breakout.html" }
];

document.addEventListener("DOMContentLoaded", function () {
    // Get the game parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get("game");

    const iframe = document.getElementById("gameFrame");
    const gameTitleElement = document.querySelector("h2"); // The h2 tag for featured game

    // If a game parameter is present, load it
    if (game) {
        const selectedGame = gameLinks.find(g => g.link === game);
        iframe.src = selectedGame ? selectedGame.link : gameLinks[0].link;
        gameTitleElement.textContent = `Featured Game: ${selectedGame ? selectedGame.name : 'Random Game'}`;
    } else {
        // Otherwise, randomly select a game
        const randomGame = gameLinks[Math.floor(Math.random() * gameLinks.length)];
        iframe.src = randomGame.link;
        gameTitleElement.textContent = `Featured Game: ${randomGame.name}`;
    }
});
