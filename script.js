// MENU MOBILE
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// CARROSSEL
let slideIndex = 1;
showSlides(slideIndex);

function mudarSlide(n) { showSlides(slideIndex += n); }
function slideAtual(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

setInterval(function() { mudarSlide(1); }, 5000);