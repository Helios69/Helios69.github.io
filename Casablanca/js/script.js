$(function(){
    
    //Smooth scroll to introduction
    $('.mousewheel').on('click', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('#introduction').offset().top
        });
        
    });

    // Filter
    $('[data-filter]').on('click', function(){
      $('[data-filter]').removeClass('active');
      $(this).addClass('active');
      let category = $(this).data('filter');
      if(category == 'all')
      {
        $('.work__wrapper').fadeIn();
      } else
      {
        $('.work__wrapper').hide();
        $('.work__wrapper').each(function(){
          if($(this).data('category') == category)
          {
            $(this).fadeIn();
          }
        });

      }
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