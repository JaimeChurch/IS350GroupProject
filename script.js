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