const menuIcon = document.querySelector('.menu-icon');
const hiddenNav = document.querySelector('.hidden_nav');

// Toggle menu visibility
menuIcon.addEventListener('click', (e) => {
    hiddenNav.classList.toggle('active'); // Add/remove the 'active' class to show/hide the menu
    e.stopPropagation(); // Prevent click event propagation
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (hiddenNav.classList.contains('active') && !hiddenNav.contains(e.target) && !menuIcon.contains(e.target)) {
        hiddenNav.classList.remove('active'); // Remove 'active' class to hide the menu
    }
});

// Array of available games
const gameLinks = [
    { name: "Matrix Invaders", link: "matrixInvader.html", image: "images/matrixInvaders.jpg" },
    { name: "Tic-Toe-Tac", link: "ticToeTac.html", image: "images/ticToeTac.jpg" },
    { name: "Western Hangman", link: "hangman.html", image: "images/hangman.jpg" },
    { name: "Breakout", link: "breakout.html", image: "images/breakout.jpg" },
    { name: "Pong", link: "pong.html", image: "images/pong.jpg" },
    { name: "Snake", link: "snake.html", image: "images/snake.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
    // Get the game parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get("game");

    const iframe = document.getElementById("gameFrame"); // Iframe element for the game
    const gameImage = document.getElementById("game-image"); // Image element for the game
    const gameLink = document.getElementById("game-link"); // Link element for the game
    const gameTitleElement = document.getElementById("game-title"); // Title element for the game

    // If a game parameter is present, load it
    if (game) {
        const selectedGame = gameLinks.find(g => g.link === game);
        if (selectedGame) {
            // Update iframe src to the selected game's link
            iframe.src = selectedGame.link;
            gameTitleElement.textContent = `Featured Game: ${selectedGame.name}`;
            // Hide the image and link for the game when iframe is present
            gameImage.style.display = 'none';
            gameLink.style.display = 'none';
        }
    } else {
        // Otherwise, randomly select a game and display the image/link
        const randomGame = gameLinks[Math.floor(Math.random() * gameLinks.length)];
        gameImage.src = randomGame.image;
        gameLink.href = `gameWindow.html?game=${randomGame.link}`; // Modify the link to point to the game window
        gameTitleElement.textContent = `${randomGame.name}`;
    }
});
