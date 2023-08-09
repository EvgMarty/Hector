// Добавление товара в корзмну
//корзина 
const cardWraperbasket  = document.querySelector('.basket');
//понравившейся
const cardWraperliked  = document.querySelector('.liked');
//Отследить клик по всему окну 
window.addEventListener('click', (event)=>{

   //Проверяем или нажатие произошло пр кнопке добавить в корзину
   if(event.target.hasAttribute('data-card') || event.target.hasAttribute('data-like') ){
      
      //Нашли карточку с товара
      const card = event.target.closest('.card');

      //собираем даніе с товара
      const productInfo = {
         id: card.dataset.id,
         name: card.querySelector('[data-name]').innerText,
         img: card.querySelector('[data-img]').getAttribute('src'),
         price: card.querySelector('[data-price]').innerText,
      }
      
      //Добавляем елемент в корзину 
      if(event.target.hasAttribute('data-card')){
         //создаем карточку с даными
         const cardBasketHTML = `<div class="basket__card" data-id="${productInfo.id}">
                              <div class="basket__card-img">
                                 <img src="${productInfo.img}" alt="">
                              </div>
                              <div class="basket__card-name">
                                 <span>${productInfo.name}</span>
                              </div>
                              <div class="items">
                                 <div class="items__control" data-action="minus">-</div>
                                 <div class="items__current" data-counter="">1</div>
                                 <div class="items__control" data-action="plus">+</div>
                              </div>
                              <div class="price">
                                 <div class="price__currency">${productInfo.price}<b>₴</b></div>
                              </div>
                           </div>`;

      //Добавляем елемент в корзину
      cardWraperbasket.insertAdjacentHTML('beforeend',cardBasketHTML);
      }else if(event.target.hasAttribute('data-like')){
         //создаем карточку с даными
         const cardlikedHTML = `<div class="basket__card card" data-id="${productInfo.id}">
                                    <div class="basket__card-img">
                                       <img data-img src="${productInfo.img}" alt="">
                                    </div>
                                    <div class="basket__card-name">
                                       <span data-name>${productInfo.name}</span>
                                    </div>
                                    <div class="items ">
                                       <button class="button btn-card" data-card>В кошик</button>
                                    </div>
                                    <div class="price">
                                       <div class="price__currency" data-price>${productInfo.price}<b>₴</b></div>
                                    </div>
                                 </div>`;

         //Добавляем елемент в понравившейся
         cardWraperliked.insertAdjacentHTML('beforeend',cardlikedHTML);
      }
      
   }


})
