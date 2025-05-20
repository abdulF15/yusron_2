// JavaScript untuk menyembunyikan loading screen setelah konten dimuat

// scroll Sections Active Links
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// const links = document.querySelectorAll(".nav-link");
const overlay = document.getElementById("overlay");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll Sections Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Mengaktifkan class "active" pada navLink yang sesuai dengan section yang sedang aktif
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  // remove toggle icon and navbar when click navbar link(Scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // supaya tidak langsung lompat section
    overlay.classList.add("active");

    // jika login arahkan ke halaman login
    if (link.classList.contains("login")) {
      window.location.href = "login.html";
    }

    setTimeout(() => {
      overlay.classList.remove("active");
      // Kalau mau pindah section setelah animasi, pakai scrollIntoView:
      const targetId = link.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000); // 2 detik
  });
});

// scroll reveal
// ScrollReveal({
// reset: true,
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });

// ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// ScrollReveal().reveal(
//   ".home-img, .services-container, .portfolio-box, .contact form",
//   { origin: "bottom" }
// );
// ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed.js
const typed = new Typed(".multiple-text", {
  strings: ["Biodata Kelompok", "About Us"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});
