document.querySelectorAll(".header-menu").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("active");
    document.querySelector('.header-mobile').classList.toggle("active");
  });
});
