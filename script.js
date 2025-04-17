document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  // Toggle the menu visibility
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Hide the menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});
