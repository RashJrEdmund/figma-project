const menuBtn = document.querySelector('.menu-btn')
const varyingDiv = document.querySelector('.active')
const navAtags = document.querySelectorAll('.nav-a-tags')

menuBtn.addEventListener('click', () => {
  varyingDiv.classList.toggle('varying')
})

navAtags.forEach((navTag) => {
  navTag.addEventListener('click', () => {
    varyingDiv.classList.remove('varying')
  })
})
