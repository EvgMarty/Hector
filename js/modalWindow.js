//Мадальные окна 

const dataModal = document.querySelectorAll('[data-modal]');
const dataFade = document.querySelector('[data-fade]');
const body = document.querySelector('body');

dataModal.forEach((item)=>{
   item.addEventListener('click', (event)=>{
      const idWindow = event.target.dataset.modal;
      const dataModalWindow = document.querySelector('#'+ idWindow);
      const close = dataModalWindow.querySelector('[data-close="modal"]');

      dataModalWindow.classList.remove('hidden');
      dataFade.classList.remove('hidden');
      body.classList.add('overflowHidden');

      close.addEventListener('click',closeModal);
      dataFade.addEventListener('click',closeModal);

      function closeModal(){
         dataModalWindow.classList.add('hidden');
         dataFade.classList.add('hidden');
         body.classList.remove('overflowHidden');
      };
   })
});

