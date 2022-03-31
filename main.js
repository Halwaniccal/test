$(function () {
  $(".menu-toggle, .fa-times").on("click", function () {
    $("nav").toggleClass("active");
    $(".overlay").toggleClass("menu-open");
  });

  $(".overlay").on("click", function () {
    $("nav").removeClass("active");
    $(this).removeClass("menu-open");
  });
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
