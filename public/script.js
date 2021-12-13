
const menuButton = document.querySelector('.menu-button')
const mobileNav = document.querySelector('#mobile-nav')
const mobileLinks = document.querySelectorAll('.mobile-link')
const img = document.querySelectorAll('.img')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const closeButton = document.querySelector('.close')
const contact = document.querySelectorAll('.contact')
const contactInfo = document.querySelector('.contact-info')

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('-translate-y-full')
  }
)

mobileLinks.forEach(value => {
  value.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-y-full')
  })
})

img.forEach(value => {
  value.addEventListener('click', () => {
    modal.classList.toggle('hidden')
    modal.classList.toggle('block')
    modalImg.src = value.src
  })
})

closeButton.addEventListener('click', () => {
  modal.classList.toggle('hidden')
  modal.classList.toggle('block')
})

contact.forEach(value => {
  value.addEventListener('click', () => {
    contactInfo.classList.toggle('animate-bounce')
    setTimeout(() => {
      contactInfo.classList.toggle('animate-bounce')
    }, 3000)
  })
})
