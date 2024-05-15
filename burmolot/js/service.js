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