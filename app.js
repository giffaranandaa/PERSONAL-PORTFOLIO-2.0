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

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

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
})


// prgress bar 
const progressBars = document.querySelectorAll(".bg-skills");
var progressBarContainer = document.querySelector(".show-on-scroll");

let start;
document.onscroll = function(){
    if (isElementInViewport(progressBarContainer)){
        if(!start){
            window.requestAnimationFrame(loop);
        }
    } else {
        start = null;
    }
};
const animationTime = 1000;

function loop(timestamp){
    if(!start){
        start= timestamp;
    }
    const elapsed = timestamp - start;
    const progress = elapsed / animationTime; 
    progressBars.forEach((bar) => {
        const progressComplete = bar.getAttribute("data-complete");
        const width = Math.min(Math.ceil(progress * 100), progressComplete);
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
    });
    if(progress <= 1){
        window.requestAnimationFrame(loop);
    }
}

function isElementInViewport(element){
    var rectangel = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangel.top;
    var bottom = rectangel.bottom;

    return (
        (top <= 0 && bottom >= 0) ||
        (bottom >= height && top <= height) ||
        (top >= 0 && bottom <= height)
    );
}

// AOS ANIMATE
AOS.init({
    once: true,
});
