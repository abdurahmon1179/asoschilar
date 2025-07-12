document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header-hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-close");


  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });


  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });


  const menuLinks = document.querySelectorAll(".mobile-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
