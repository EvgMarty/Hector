//Табы в открытой шторке каталога

const dataTabCatalog = document.querySelectorAll('[data-tab]');
const contentCatalog = document.querySelectorAll('[data-contentCatalog]')


dataTabCatalog.forEach((item)=>{
   item.addEventListener('click', (event)=>{
      const contentId = event.target.dataset.tab;

      const tabContent = document.querySelector('#' + contentId);

      // скрыть весе окна ктаб-контента
      contentCatalog.forEach((item)=>{
         item.classList.add('hidden')
      })

      // отобразить нужный таб-контен
      tabContent.classList.remove('hidden')


      //Убрать у всех табов активный клас
      dataTabCatalog.forEach((item)=>{
         item.classList.remove('tab--active');
      })

      // присвоить активный класс табу по которому совершенно нажатие
      event.target.classList.add('tab--active');
   })
})