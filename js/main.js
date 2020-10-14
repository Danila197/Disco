$(function () {
  $('.mob-menu').click(function () {
    if ($('.menu-list').css('display') == 'none') {
      $('.menu-list').slideDown();      
    } else {
      $('.menu-list').slideUp();
    }
  })
})