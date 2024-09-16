/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
const header = document.getElementById('header')
this.scrollY >= 50 ? header.classList.add('scroll-header')
                   : header.classList.remove('srcoll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
      1024: { 
        spaceBetween: 72,
      },
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('.active-link')
    }
    else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                           : scrollUp.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollUp) 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: 400
})
sr.reveal('.home__data, .products__container, .footer__container, footer__info')
sr.reveal('.home__images', {delay: 600, origin: 'bottom'})
sr.reveal('.new__card, .brand__img', {interval: 100})
sr.reveal('.collection__explore:nth-child(1)', {origin: 'rigth'})
sr.reveal('.collection__explore:nth-child(2', {origin: 'left'})