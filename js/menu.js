//Открытие меню

//Кнопка от бургер меню само меню и фейд блок
const menuBtn = document.querySelector('[data-menu="active"]');
const burgerMenu = document.querySelector('.nav-list');
const fadeMenu = document.querySelector('[data-fade="menu"]');


menuBtn.addEventListener('click', ()=>{
   //нашли кнопку закрития меню 
   const closeMenu = burgerMenu.querySelector('[data-close="menu"]');

   //открыли меню
   burgerMenu.classList.add('nav-list--active');
   //открыли фейд блок
   fadeMenu.classList.remove('hidden')

   //При нажатии на крестик
   closeMenu.addEventListener('click', closeBurgerMenu);
   fadeMenu.addEventListener('click', closeBurgerMenu);

});

//Функция закривает меню и скривайт фейд блок 
function closeBurgerMenu (){
   burgerMenu.classList.remove('nav-list--active');
   fadeMenu.classList.add('hidden')
}
