const menuBtn=document.querySelector('.menu_btn');
const menuClose=document.querySelector('.menu_close');
const menuList=document.querySelector('.header_line-bottom_list');
menuBtn.addEventListener('click', ()=>{
  menuList.classList.toggle('header_line-bottom_list_open');
});
menuClose.addEventListener('click',()=>{
  menuList.classList.remove('header_line-bottom_list_open');
});

const swiperAbout = new Swiper(".blog_slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
    640: {
      slidesPerView: 2
    },
    550: {
      slidesPerView: 1,
    },
     410: {
      slidesPerView: 1,
    },
  },
 
    });
  

$(document).ready(function(){
  $('.sliders').slick(
    {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow: '<button class="btn_slider slider_prev"><img src="img/arr_left1.svg" alt=""></button>',
  nextArrow: '<button class="btn_slider slider_next"><img src="img/arr_right1.svg" alt=""></button>',
}
    )
});