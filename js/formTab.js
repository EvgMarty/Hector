const dataOfficeTab = document.querySelectorAll('[data-office]');
const dataOfficeContent = document.querySelectorAll('[data-office-content]');





dataOfficeTab.forEach((item)=>{
   item.addEventListener('click', (event)=>{
      const contentId = event.target.dataset.office;
      const tabContent = document.querySelector('#' + contentId);


      dataOfficeContent.forEach((item)=>{
         item.classList.add('hidden');
      })
      tabContent.classList.remove('hidden')


      dataOfficeTab.forEach((item)=>{
         item.classList.remove('tab--active');
      })
      event.target.classList.add('tab--active');
   })
})