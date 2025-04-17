const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'show' class on the navigation menu
  nav.classList.toggle('show');

  // Optionally, toggle an active state for the button (e.g., for styling)
  toggleButton.classList.toggle('active');
});
