function calcCardPrice(){
   //корзина 
   const cardItem = document.querySelectorAll('.basket__card');
   const allPrice = document.querySelector('.all__price');

   let totalPrice = 0;
   
   cardItem.forEach((item)=>{
      const courentItem = item.querySelector('[data-counter]');
      const priceItem = item.querySelector('.price__currency');
      
      // Проверяем, что элементы существуют, прежде чем читать их свойства
      if (courentItem && priceItem) {
         const curentPrice = parseInt(courentItem.innerText) * parseInt(priceItem.innerText);
         totalPrice += curentPrice;
      }
   })

   allPrice.innerText = `${totalPrice}₴`;
}
