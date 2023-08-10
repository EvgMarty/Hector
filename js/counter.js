//Счетчик товара

//Отследить клик по всему окну 
window.addEventListener('click', (event)=>{
   //Переменная для счетчика 
   let counter = 0;

   if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
      //находим обертку счетчика 
      const counterWrapper = event.target.closest('.items');
      //находим число счетчика 
      counter = counterWrapper.querySelector('[data-counter]');

   }
   

   // проверяем нажатие на кнопку плюс (+)
   if(event.target.dataset.action === 'plus'){
      counter.innerText = ++counter.innerText;

      //Подсчет стоимости корзины
      calcCardPrice()
   };



   // проверяем нажатие на кнопку минус (-)
   if(event.target.dataset.action === 'minus' &&  parseInt(counter.innerText) > 1){
      counter.innerText = --counter.innerText;

      //Подсчет стоимости корзины
      calcCardPrice()
   }else if(parseInt(counter.innerText) === 1){
      event.target.closest('.basket__card').remove();
      //Функция проверяет статус корзины
      cardStatus();

      //Подсчет стоимости корзины
      calcCardPrice()
   }

   //Функция проверяет статус корзины
   cardStatus();

})