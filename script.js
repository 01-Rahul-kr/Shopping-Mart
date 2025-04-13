const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const desktopMenu = document.getElementById('desktop-menu');

// Toggle the mobile menu visibility
function toggleMenu() {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
}

// Close mobile menu when a link is clicked (on smaller screens)
function closeMenuOnLinkClick() {
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        mobileMenu.style.display = 'none';
      }
    });
  });
}

// Handle resizing of the window
function handleResize() {
  if (window.innerWidth < 768) {
    desktopMenu.style.display = 'none';
    menuBtn.style.display = 'block';
    mobileMenu.style.display = 'none';
  } else {
    desktopMenu.style.display = 'flex';
    mobileMenu.style.display = 'none';
    menuBtn.style.display = 'none';
  }
}

// Add event listeners
menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
window.addEventListener('load', () => {
  handleResize();
  closeMenuOnLinkClick(); // Ensure this runs after DOM is ready
});
