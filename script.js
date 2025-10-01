//supaya pas dipencet bagian navbar lompatnya smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//navbar muncul saat kursor diarahin keatas
let prevScroll = window.pageYOffset;
const navbar = document.querySelector("nav");

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    // scroll ke atas -> navbar muncul
    navbar.style.top = "0";
  } else {
    // scroll ke bawah -> navbar ngilang
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
};

// biar kalau mouse deket atas layar, navbar muncul lagi
document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});