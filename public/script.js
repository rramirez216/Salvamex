
const menuButton = document.querySelector('.menu-button')
const mobileNav = document.querySelector('#mobile-nav')
menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden')
  // mobileNav.classList.toggle('scale-up')
  }
)