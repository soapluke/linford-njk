//Knapp för att komma till toppen av sidan
$(document).ready(function(){

  var flag = true;
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
    
    if ($(this).text() == 'Kontakta oss!') {
        $(this).text("Stäng");
        $('.ctformswedish').show();
    } else if ($(this).text() == 'Contact us!') {
        $(this).text("Close");
        $('.ctformenglish').show();
        $('.ctformswedish').hide();
    } else if ($(this).text() == 'Stäng') {
        $(this).text("Kontakta oss!");
        $('.ctformswedish').hide();
    } else if ($(this).text() == 'Close') {
        $(this).text("Contact us!");
        $('.ctformenglish').hide();
    }

     // $(".contact-form").toggle();
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

  $(".dropdown-item").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  //Language switch

    if(flag) {
      $(".english").hide();
      flag=false;
    }
  
    
  

  $("#switch-english").click(function() {
    $(".swedish").hide();
    $(".english").show();
    flag=false;
  });

  $("#switch-swedish").click(function() {
    $(".english").hide();
    $(".swedish").show();
  });

});


  