//Счетчик товара

//Отследить клик по всему окну 
window.addEventListener('click', (event)=>{
   //Переменная для счетчика 
   let counter;

   if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
      //находим обертку счетчика 
      const counterWrapper = event.target.closest('.items');
      //находим число счетчика 
      counter = counterWrapper.querySelector('[data-counter]');
   }
   

   // проверяем нажатие на кнопку плюс (+)
   if(event.target.dataset.action === 'plus'){
      counter.innerText = ++counter.innerText;
   }

   // проверяем нажатие на кнопку минус (-)
   if(event.target.dataset.action === 'minus' &&  parseInt(counter.innerText) > 1){
      counter.innerText = --counter.innerText;
   }
})