const swiperAbout = new Swiper(".blog_slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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