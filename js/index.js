$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
  $('.header__menu__list__item__link').click(function(){
    $('.header__menu__list__item__link').removeClass('open-menu');
    $('.header__menu').removeClass('open-menu');
    $('body').removeClass('fixed-page');
});
});

    $(document).ready(function(){
       $("#menu").on("click","a", function (event) {
           event.preventDefault();
           var id  = $(this).attr('href'),
               top = $(id).offset().top;
           $('body,html').animate({scrollTop: top}, 1500);
       });
   });

   if( window.innerWidth <= 767 ){
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items:1.15,
        loop: true,
        margin:8
      });
    });
}
   var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0
  });

  $(function () {
    $('.button__antistress').click(function () {
      $('#modal__antistress').addClass('modal_active');
      $('body').addClass('hidden');
    });
   
    $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
   
    $('.modal').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
