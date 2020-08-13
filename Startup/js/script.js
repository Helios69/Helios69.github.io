"use strict";

$(document).ready(function () {
  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }); // burger

  var toggle = document.querySelector('#toggle');
  var nav = document.querySelector('.topbar__nav');
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('on');
    nav.classList.toggle('active');
    document.querySelector('.header__heading').classList.toggle('blur');
    document.querySelector('.header__description').classList.toggle('blur');
    document.querySelector('.header__btn').classList.toggle('blur');
  }); //Smooth scroll

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    var blockId = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(blockId).offset().top + 1
    });
  }); //Smooth scroll to top

  $('.top-arrow').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    });
  }); // Filter

  $('[data-filter]').on('click', function () {
    $('[data-filter]').removeClass('active');
    $(this).addClass('active');
    var category = $(this).data('filter');

    if (category == 'all') {
      $('.works__item').fadeIn();
    } else {
      $('.works__item').hide();
      $('.works__item').each(function () {
        if ($(this).data('category') == category) {
          $(this).fadeIn();
        }
      });
    }
  });
});