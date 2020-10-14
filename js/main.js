$(function () {
  $('.mob-menu').click(function () {
    if ($('.menu-list').css('display') == 'none') {
      $('.menu-list').slideDown();      
    } else {
      $('.menu-list').slideUp();
    }
  })
  $('.service-slider').slick({
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: '50px',
      }
    }]
  })
})