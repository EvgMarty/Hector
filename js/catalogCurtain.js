//Открыть штору каталога 

const catalogOn = document.querySelector('[data-catalog]')
const catalogOff = document.querySelector('.catalog')
const catalogCurtain = document.querySelector('.catalog-curtain')


catalogOn.addEventListener('click', ()=>{
   catalogCurtain.classList.add('catalog-curtain--active')
   closeBurgerMenu()
})

catalogOff.addEventListener('click', ()=>{
   catalogCurtain.classList.remove('catalog-curtain--active')
})

