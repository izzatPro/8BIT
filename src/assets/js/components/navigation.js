$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

  let menu = document.querySelector('.menu-toggle');
  let navLink = document.querySelectorAll('.nav-item');
  let nav = document.querySelector('.nav');
  let bannerWrapper = document.querySelector('.banner_wrapper');
  menu.addEventListener("click", ()=> {

   if(menu.classList.contains('is-active')){
      document.body.style = 'overflow:hidden'
   } else {
      document.body.style = 'overflow:visible'  
   }
})
for(let i = 0; i < navLink.length ; i++){
   navLink[i].addEventListener('click', () =>{
      document.body.style = 'overflow:visible';
      menu.classList.remove('is-active');  
      nav.classList.remove('mobile-nav')
   })
}