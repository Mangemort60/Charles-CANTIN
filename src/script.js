const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const social = document.getElementsByClassName('navbar-social')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  social.classList.toggle('active')
})