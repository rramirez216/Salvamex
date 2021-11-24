
const menuButton = document.querySelector('.menu-button')
const mobileNav = document.querySelector('#mobile-nav')
menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('-translate-y-full')
  }
)