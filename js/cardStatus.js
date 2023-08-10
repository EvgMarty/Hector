function cardStatus (){
   //корзина 
   const cardBasket  = document.querySelector('#basket');
   //понравившейся
   const cardLiked  = document.querySelector('#liked');

   const cardWraperbasket  = document.querySelector('.basket');
   const cardWraperliked  = document.querySelector('.liked');

   const basketEmpty = cardBasket.querySelector('.empty');
   const basketPrice = cardBasket.querySelector('.basket__price');
   const likedEmpty = cardLiked.querySelector('.empty');



   if(cardWraperbasket.children.length > 1){
      basketEmpty.classList.add('hidden');
      basketPrice.classList.remove('hidden');
   }else{
      basketEmpty.classList.remove('hidden');
      basketPrice.classList.add('hidden');
   };


   if(cardWraperliked.children.length > 0){
      likedEmpty.classList.add('hidden');
   }else{
      likedEmpty.classList.remove('hidden');
   };
}

