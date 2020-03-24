/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  } 
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    
  });

    closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
   
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });

  

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    rules: {
      // Строчное правило
      userName: {
        required: true,
        rangelength: [2, 15]
      },
      userPhone: "required",
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      modalCheckbox: "required"
    }, 
    errorClass: "invalid",
    errorElement: "em",
      // Сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
        },
          modalCheckbox: "Поставьте галочку" 
    }
  });

  // Валидация формы
  $('.footer__form').validate({
    rules: {
      // Строчное правило
      footerName: {
        required: true,
        rangelength: [2, 15]
      },
      footerPhone: "required",
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      footerCheckbox: "required",
      footerQuestion: {
        required: true,
      }
    }, 
    errorClass: "invalid",
    errorElement: "div",
      // Сообщения
      messages: {
        footerName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        footerPhone: "Телефон обязателен",
        footerCheckbox: "Поставьте галочку",
        footerQuestion: "Заполните поле",
        footerEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
      }
    }
  });

  // Валидация формы
  $('.control__form').validate({
    rules: {
      // Строчное правило
      controlName: {
        required: true,
        rangelength: [2, 15]
      },
      controlPhone: "required",
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      controlCheckbox: "required"
    }, 
    errorClass: "invalid",
    errorElement: "blockquote",
      // Сообщения
      messages: {
        controlName: {
          required: "Имя обязательно",
          rangelength: "Имя от 2 до 15 символов"
        },
        controlPhone: "Телефон обязателен",
        controlCheckbox: "Поставьте галочку",
        controlEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
      }
    }
  });
  
  

// Маска для телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/myIcon.gif',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});


});