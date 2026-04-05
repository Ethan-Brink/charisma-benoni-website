// Mobile Menu Functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

// Close mobile menu when a link is clicked
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Tailwind config (kept here for consistency)
  tailwind.config = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          gold: '#D4AF37',
          navy: '#0A2540'
        }
      }
    }
  };
});