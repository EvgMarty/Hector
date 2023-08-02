const dataArticleTab = document.querySelectorAll('[data-article]');
const dataArticleContent = document.querySelectorAll('[data-article-content]');





dataArticleTab.forEach((item)=>{
   item.addEventListener('click', (event)=>{
      const contentId = event.target.dataset.article;
      const tabContent = document.querySelector('#' + contentId);


      dataArticleContent.forEach((item)=>{
         item.classList.add('hidden');
      })
      tabContent.classList.remove('hidden')


      dataArticleTab.forEach((item)=>{
         item.classList.remove('article__list-tab--active');
      })
      event.target.classList.add('article__list-tab--active');
   })
})