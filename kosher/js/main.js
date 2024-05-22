const swiperAbout = new Swiper(".video_slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   /*breakpoints: {
    640: {
      slidesPerView: 2
    },
    550: {
      slidesPerView: 1,
    },
     410: {
      slidesPerView: 1,
    },
  },*/
 
    });
 