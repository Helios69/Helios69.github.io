$(function(){
    
    // Fixed topbar
    $(window).on('scroll load resize', function(){
        let scrollPos = $(this).scrollTop();
        
        if(scrollPos > $('#header').innerHeight()){
            $('.topbar').addClass('fixed');
        } else{
            $('.topbar').removeClass('fixed');
        }
    });

    //Smooth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let blockId = $(this).data('scroll');
        $('html, body').animate({
            scrollTop: $(blockId).offset().top + 1
        });
        $("#toggle").toggleClass("on");
        $(".nav").toggleClass('nav--open');
        
    });

    //To top
    $('#to-top-arrow').on('click', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: 0
      });
      $("#toggle").toggleClass("on");
      $(".nav").toggleClass('nav--open');
      
  });


    // Mobile menu
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $(".nav").toggleClass('nav--open');
      });


    

    // Works slider
      $('.works__slider').slick({
        dots: false,
        slidesPerRow: 4,
        rows: 2,
    
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="/kreativepixel/img/prevArrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="/kreativepixel/img/nextArrow.png" alt=""></button>',
        arrows: true,
        responsive: [
        {
          breakpoint: 1076,
          settings: {
            slidesPerRow: 3,
            rows: 2,
          }
        },
        {
          breakpoint: 685,
          settings: {
            slidesPerRow: 2,
            rows: 2,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesPerRow: 1,
            rows: 2,
          }
        }
      ]
    });
});










