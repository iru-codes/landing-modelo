import { app, analytics } from "./firebase-init.js";

//Menu de navegación
let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() 

    let sectionId = link.getAttribute('href').substring(1)
    let targetSection = document.getElementById(sectionId)

    targetSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    })
  })
})

//Flecha flotante - visibilidad
document.addEventListener("DOMContentLoaded", function(){
    let arrow = document.querySelector(".flotant_arrow")
    let section2 = document.querySelector("#seccion_2").offsetTop

    window.addEventListener("scroll", function() {
        if (window.scrollY >= section2) {
            arrow.style.cssText = "visibility: visible !important; opacity: 1; pointer-events: auto;"
        } else {
            arrow.style.cssText = "visibility: hidden !important; opacity: 0; pointer-events: none;"
        }
    })
})


//Flecha de auto-scroll hacia arriba
let scrollToTopArrow = document.getElementById("scroll-to-top")

scrollToTopArrow.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Animación de las tarjetas
let cards = document.querySelectorAll(".card");

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let cardIndex = Array.from(cards).indexOf(entry.target);
            entry.target.style.transitionDelay = `${cardIndex * 0.3}s`; 
            entry.target.classList.add(cardIndex % 2 === 0 ? "left-visible" : "right-visible");
        }
    });
}, { root: null, threshold: 0.3 });

cards.forEach(card => observer.observe(card));

//Menú hamburguesa

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu_items");
    const hamburger = document.querySelector(".hamburger");

    function toggleMenu() {
        menu.classList.toggle("show");
    }

    // Agregamos el evento click al botón hamburguesa
    hamburger.addEventListener("click", toggleMenu);
});