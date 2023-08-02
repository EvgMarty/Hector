const dataProductTab = document.querySelectorAll('[data-product]');
const dataProductContent = document.querySelectorAll('[data-product-content]');





dataProductTab.forEach((item)=>{
   item.addEventListener('click', (event)=>{
      const contentId = event.target.dataset.product;
      const tabContent = document.querySelector('#' + contentId);


      dataProductContent.forEach((item)=>{
         item.classList.add('hidden');
      })
      tabContent.classList.remove('hidden')


      dataProductTab.forEach((item)=>{
         item.classList.remove('product__list-tab--active');
      })
      event.target.classList.add('product__list-tab--active');
   })
})