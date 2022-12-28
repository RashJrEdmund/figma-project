const menuBtn = document.querySelector('.menu-btn')
const varyingDiv = document.querySelector('.active')
menuBtn.addEventListener('click', () => {
  varyingDiv.classList.toggle('varying')
})
