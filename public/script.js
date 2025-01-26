import app from "./firebase-init.js"

//Menu de navegación
let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() 

    let sectionId = link.getAttribute('href').substring(1)
    let targetSection = document.getElementById(sectionId)

    targetSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'center' 
    })
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
let cards = document.querySelectorAll(".card")
let observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let cardIndex = Array.from(cards).indexOf(entry.target)

            if (cardIndex % 2 === 0) {
                entry.target.classList.add("left-visible")
            } else {
                entry.target.classList.add("right-visible")
            }
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.3 })

cards.forEach(card => observer.observe(card))