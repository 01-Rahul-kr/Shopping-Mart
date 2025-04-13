const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const desktopMenu = document.getElementById('desktop-menu');

// Toggle the mobile menu visibility
function toggleMenu() {
  // Toggle the display of the mobile menu
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none'; // Hide menu
  } else {
    mobileMenu.style.display = 'flex'; // Show menu
  }
}

// Handle resizing of the window
function handleResize() {
  if (window.innerWidth < 768) {
    // For smaller screens, hide the desktop menu and show the menu button
    desktopMenu.style.display = 'none';
    menuBtn.style.display = 'block';
    mobileMenu.style.display = 'none'; // Ensure mobile menu is hidden by default
  } else {
    // For larger screens, show the desktop menu and hide the mobile menu
    desktopMenu.style.display = 'flex';
    mobileMenu.style.display = 'none';
    menuBtn.style.display = 'none';
  }
}

// Add event listeners
menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
