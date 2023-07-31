//Слайдер 

const sliderLine = document.querySelector('.slider-line');
const dots = document.querySelectorAll('[data-dot]');

let position = 0;


dots.forEach((item)=>{
   item.addEventListener('click', (event)=>{

      //Снимаем активный класс у дот
      dots.forEach((item)=>{
         item.classList.remove('dot--active');
      })

      // даем активній класс доту на которій нажали 
      event.target.classList.add('dot--active');

      dotIndex = event.target.dataset.dot;

      if(dotIndex === '01'){
         position = 0;
      }else if(dotIndex === '02'){
         position += -100;
      }else if(dotIndex === '03'){
         position = -200;
      }else if(dotIndex === '04'){
         position = -300;
      }
      
      sliderLine.style.left = position + '%';
   })
})
