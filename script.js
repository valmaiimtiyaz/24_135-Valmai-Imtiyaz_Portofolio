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
    navbar.style.top = "-90px";
  }
  prevScroll = currentScroll;
};

// biar kalau mouse deket atas layar, navbar muncul lagi
document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  // Ambil semua link di dalam menu mobile
  const navLinks = mobileMenu.querySelectorAll("a");

  if (burger && mobileMenu) {
    // 1. Fungsi Toggle Menu (Buka/Tutup)
    burger.addEventListener("click", function () {
      // Menambahkan/menghapus class 'active' untuk menampilkan/menyembunyikan menu
      mobileMenu.classList.toggle("active");
    });

    // 2. Tutup Menu saat Link Navigasi Diklik
    // Penting agar menu tertutup setelah pengguna memilih tujuan
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Periksa apakah menu sedang terbuka sebelum menutupnya
        if (mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
        }
      });
    });
  }
});
