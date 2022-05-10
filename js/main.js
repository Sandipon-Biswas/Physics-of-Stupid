
$(document).ready(function() {
  $('.slidder').slick({
    
    centerPadding: '60px',
    
    /* Just changed this to get the bottom dots navigation */
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow : ' <span class="priv_arrow"><i class="fa-solid fa-angle-left s-icon"></i></span>',
    nextArrow : ' <span class="next_arrow"><i class="fa-solid fa-angle-right s-icon"></i></span>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  });

});