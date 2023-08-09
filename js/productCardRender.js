// счетчик айди 
let cardCounter = 1;

const cardProduct = [
   // ==========  category: 'new-discounts',
   {
      //new
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   {
      id: `card${cardCounter++}`,
      category: 'new',
      lable: 'new',
      name: 'Футболка чоловіча Exclusive',
      img: './img/catd/card.png',
      price: 950,
   },
   //TOP
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   {
      id: `card${cardCounter++}`,
      category: 'top',
      lable: 'top',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_2.png',
      price: 1200,
   },
   //discount
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
   {
      id: `card${cardCounter++}`,
      category: 'discount',
      lable: 'sale',
      name: 'Футболка чоловіча Exclusive',
      brand: 'Colin s ',
      img: './img/shares/men_1.png',
      price: 650,
   },
]

//Колекция контейнеров категорий 
const dataCardCategory = document.querySelectorAll('[data-cardCategory]');

dataCardCategory.forEach((item)=>{
   //обьявили переменую для каждлого елемента 
   const subject  = item;
   //получаем дата сет для итема
   const datasetSubject = subject.dataset.cardcategory;

   //Делаем перебор масива с товаром 
   cardProduct.forEach((item)=>{
      //записали в переменную категории каждого товара
      const cardProductCategory = item.category;


      if(datasetSubject == cardProductCategory){
         const card =`<div class="product-card card" data-id="${item.id}">
                        <div class="product-card__img">
                           <img data-img src="${item.img}" alt="">
                        </div>
                        <div class="rating-size__wrap">
                           <!-- RATING -->
                           <form class="product__rating-group">
                              <!-- star_1 -->
                              <input class="rating__input" type="checkbox" name="star-${item.id}_1" id="star-${item.id}_1" value="1" checked>
                              <label class="rating__label" for="star-${item.id}_1"></label>
                              <!-- star_2 -->
                              <input class="rating__input" type="checkbox" name="star-${item.id}_2" id="star-${item.id}_2" value="2" checked>
                              <label class="rating__label" for="star-${item.id}_2"></label>
                              <!-- star_3 -->
                              <input class="rating__input" type="checkbox" name="star-${item.id}_3" id="star-${item.id}_3" value="3" checked>
                              <label class="rating__label" for="star-${item.id}_3"></label>
                              <!-- star_4 -->
                              <input class="rating__input" type="checkbox" name="star-${item.id}_4" id="star-${item.id}_4" value="4">
                              <label class="rating__label" for="star-${item.id}_4"></label>
                              <!-- star_5 -->
                              <input class="rating__input" type="checkbox" name="star-${item.id}_5" id="star-${item.id}_5" value="5">
                              <label class="rating__label" for="star-${item.id}_5"></label>
                           </form>

                           <!-- SIZE -->
                           <form class="product__size-group">
                              <!-- SIZE S -->
                              <input class="size__input" type="radio" name="size-card-${item.id}" id="size-card-${item.id}_S" value="S">
                              <label class="size__label" for="size-card-${item.id}_S">S</label>
                              <!-- SIZE M -->
                              <input class="size__input" type="radio" name="size-card-${item.id}" class="size" id="size-card-${item.id}_M" value="M" checked>
                              <label class="size__label" for="size-card-${item.id}_M">M</label>
                              <!-- SIZE L -->
                              <input class="size__input" type="radio" name="size-card-${item.id}" class="size" id="size-card-${item.id}_L" value="L">
                              <label class="size__label" for="size-card-${item.id}_L">L</label>
                           </form>
                        </div>
                        <p class="product-card__name" data-name >${item.name}</p>
                        <div class="product-carb__bot">
                           <span class="product-card__price" data-price >${item.price}</span>
                           <button class="button btn-card" data-card >В кошик</button>
                        </div>
                        <span class="product-card__lable">${item.lable}</span>
                        <button class="product-card__like" data-like></button>
                     </div>`
         ;
         
         subject.insertAdjacentHTML('beforeend',card);
      }
   })
}) 