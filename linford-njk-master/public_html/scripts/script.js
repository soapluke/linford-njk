//Knapp för att komma till toppen av sidan
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    //funkttion för att scrolla sidor långsamt
    $('a[href*="#"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          });
        };
      }
  });
        


//Funktion för visa mer-knapp

    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });





    //gör så att montaktformuläret visas/göms närman trycker på knappen.
  $(".mailbtn").click(function(){
         $(".contact-form").toggle();
      });



  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: true,
    speed: 1000,
    cssEase: 'ease-in-out',
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});
  