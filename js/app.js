$(document).ready(function() {
    $('.box-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});

$(document).ready(function(){
  $('.library').on('click', function(){
    $('.popup').slideToggle();
  });
  console.log("hi!")
});

$(document).ready(function(){
  $('.img').on('click', function(){
    $('.popup').slideToggle();
  });
});

$('.shape').on('click', function(){
  let list = $('.shape');
  let nev = list.next().addClass('actual');
    $('.actual').slideToggle();
});

$('.box-logo').on('click', function(){
$('html, body').animate({scrollTop: '0px'}, 800);
});

// $(window).scroll(function() {
//   console.log($(this).scrollTop());
// });

$('.button-white').on('click', function(){
  console.log('click');
  $('html, body').animate({scrollTop: "900px"}, 500);
});