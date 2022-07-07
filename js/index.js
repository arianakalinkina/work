console.log('Init!');

var selector = document.querySelectorAll("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

  new window.JustValidate('.form', {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    colorWrong: '#ff0f0f',
    messages: {
      name: {
        required: 'Введите имя',
        minLength: 'Введите 3 и более символов',
        maxLength: 'Запрещено вводить более 15 символов',
      },
      tel: {
        required: 'Введите телефон',
        function: 'Здесь должно быть 10 символов без +7',
      }
    }
      });

      new window.JustValidate('.form-2', {
        rules: {
          tel: {
            required: true,
            function: () => {
              const phone = telSelector.inputmask.unmaskedvalue();
              return Number(phone) && phone.length === 10;
            }
          }
        },
        colorWrong: '#ff0f0f',
        messages: {
          name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов',
          },
          tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть 10 символов без +7',
          }
        }
          });
          new window.JustValidate('.form-3', {
            rules: {
              tel: {
                required: true,
                function: () => {
                  const phone = telSelector.inputmask.unmaskedvalue();
                  return Number(phone) && phone.length === 10;
                }
              }
            },
            colorWrong: '#ff0f0f',
            messages: {
              name: {
                required: 'Введите имя',
                minLength: 'Введите 3 и более символов',
                maxLength: 'Запрещено вводить более 15 символов',
              },
              tel: {
                required: 'Введите телефон',
                function: 'Здесь должно быть 10 символов без +7',
              }
            }
              });

$(function () {
  $('.record-button').click(function () {
    $('#modal__connect').addClass('modal_active');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });
 
  $('.modal__close-button').click(function () {
    $('#modal__connect').removeClass('modal_active');
    $('body').removeClass('hidden');
    $('body').removeClass('cursor');
  });
 
  $('#modal__connect').mouseup(function (e) {
    let modalContent = $(".modal__connect__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
      $('body').removeClass('cursor');
    }
  });
});



if( window.innerWidth <= 664 ){
  //функция которя будет отслеживать
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// ну и отслеживаем

$(window).on('resize scroll', function () {
            if ($('.tracking').isInViewport()) {
              setTimeout(() => { 
                $('.scroll__button__mobile').addClass('delete');
              }, 50);
    
            } else {
              $('.scroll__button__mobile').removeClass('delete');
            }
          });

          $('.online-groups__container__left__list__item__content__button').click(function () {
            $('.button__center__mobile__modal').addClass('disp');
          });
        }

$(function () {
  $('.button__antistress').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__antistress').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__emigration').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__emigration').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__relations').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__relations').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__one').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__one').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__problems').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__problems').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__problems-choose').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__problems-choose').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__anxiety').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__anxiety').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.button__burnout').click(function () {
    $('.modal-groups').addClass('modal_active');
    $('#modal__burnout').addClass('disp');
    $('body').addClass('hidden');
    $('body').addClass('cursor');
    $('.modal__content').addClass('nocursor');
    $('.scroll__button__mobile').addClass('delete');
  });

  $('.modal__close-button').click(function () {
    $('.modal').removeClass('modal_active');
    $('body').removeClass('hidden');
    $('body').removeClass('cursor');
    $('#modal__antistress').removeClass('disp');
    $('#modal__emigration').removeClass('disp');
    $('#modal__relations').removeClass('disp');
    $('#modal__one').removeClass('disp');
    $('#modal__problems').removeClass('disp');
    $('#modal__problems-choose').removeClass('disp');
    $('#modal__anxiety').removeClass('disp');
    $('#modal__burnout').removeClass('disp');
  });
 
  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
      $('body').removeClass('cursor');
      $('#modal__antistress').removeClass('disp');
      $('#modal__emigration').removeClass('disp');
      $('#modal__relations').removeClass('disp');
      $('#modal__one').removeClass('disp');
      $('#modal__problems').removeClass('disp');
      $('#modal__problems-choose').removeClass('disp');
      $('#modal__anxiety').removeClass('disp');
      $('#modal__burnout').removeClass('disp');
    }
  });
});

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
        items:1.23,
        loop: false,
        margin:8,
        center:true
      });
    });
}
   var header = $('.header'),
	scrollPrev = 0;
  if( window.innerWidth >= 767 ){
$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
    header.addClass('scroll');
	}
  if (scrolled === 0) {
    header.removeClass('scroll');
  }
	scrollPrev = scrolled;
});
  };
  scrollPrev = 0;
  var button = $('.scroll__button__mobile');
  if( window.innerWidth <= 767 ){
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
     
      if ( scrolled > 50 && scrolled > scrollPrev ) {
        button.addClass('out');
        button.addClass('display');
        header.addClass('out');
      } else {
        button.removeClass('display');
        header.removeClass('out');
        header.addClass('scroll');
      }
      if (scrolled === 0) {
        header.removeClass('scroll');
      }
      scrollPrev = scrolled;
    });
};



$(".accordion").accordion({
  heightStyle: "content",
  collapsible:true,
  active: false
  });

  // для окна с благодарностью
// $(function () {
//   $('.record-button').click(function () {
//     $('#thank-you__modal').addClass('modal_active');
//     $('body').addClass('hidden');
//   });
 
//   $('.thank-you__modal__button').click(function () {
//     $('#thank-you__modal').removeClass('modal_active');
//     $('body').removeClass('hidden');
//   });
 
//   $('#thank-you__modal').mouseup(function (e) {
//     let modalContent = $(".modal__connect__content");
//     if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
//       $(this).removeClass('modal_active');
//       $('body').removeClass('hidden');
//     }
//   });
// });