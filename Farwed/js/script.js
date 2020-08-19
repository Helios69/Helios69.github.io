"use strict";

$(document).ready(function () {
  var toggle = document.querySelector('#toggle');
  var nav = document.querySelector('.nav');
  var body = document.querySelector('body');

  var openMenu = function openMenu() {
    toggle.classList.toggle('on');
    nav.classList.toggle('active');
    body.classList.toggle('scroll-hidden');
  };

  toggle.addEventListener('click', openMenu); //Smooth scroll

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    openMenu();
    var blockId = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(blockId).offset().top + 1
    });
  }); // TIMER 

  setInterval(function () {
    var days = $('.days span');
    var hours = $('.hours span');
    var minutes = $('.minutes span');
    var seconds = $('.seconds span');
    var intSeconds = parseInt(seconds.text());
    var intMinutes = parseInt(minutes.text());
    var intHours = parseInt(hours.text());
    var intDays = parseInt(days.text());

    if (intSeconds > 1) {
      seconds.html(intSeconds - 1);
    } else {
      seconds.html(60);

      if (intMinutes > 1) {
        minutes.html(intMinutes - 1);
      } else {
        minutes.html(60);

        if (intHours > 1) {
          hours.html(intHours - 1);
        } else {
          hours.html(24);
          if (intDays >= 1) days.html(intDays - 1);else {
            alert('Congrats!!!1!');
          }
        }
      }
    }
  }, 1000);
});