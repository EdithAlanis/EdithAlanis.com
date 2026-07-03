document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const courseSelect = document.getElementById("cursoSeleccionado");
  const buttons = document.querySelectorAll("[data-course]");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const course = button.getAttribute("data-course");
      if (courseSelect) {
        courseSelect.value = course;
      }
    });
  });
});
