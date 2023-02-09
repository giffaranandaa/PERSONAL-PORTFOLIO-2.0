var link = document.querySelector('link[rel="icon"]');

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    link.href = "./img/angry.png";
    } else {
    link.href = "./img/angry-face1.png";
  }
});

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    navMenu.addEventListener('click', function () {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    });
});

// close navbar
document.body.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// darkmode
const moon = document.querySelector("#moon");
const html = document.querySelector("html");

moon.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    
    if (html.classList.contains("dark")) {
    moon.src = "./img/moon.png";
    } else {
    moon.src = "./img/sun.png";
    }
});

// cek icon darkmode
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    moon.src = "./img/moon.png";
    } else if (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
    moon.src = "./img/moon.png";
    localStorage.setItem("theme", "dark");
    } else {
    html.classList.remove("dark");
    moon.src = "./img/sun.png";
    }
  

// AOS ANIMATE
AOS.init({
    once: true,
});
