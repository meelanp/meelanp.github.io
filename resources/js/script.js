$(document).ready(function() {

    
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("nav-bar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
     /*---- MOBILE NAVI ---- */
    $('.js-menu-icon').click(function() {
        var nav = $('.js-navigation');
        var icon = $('.js-menu-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } 
        else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
        

    });
    
    $(window).resize(function(){

        var nav = $('.js-navigation');

        var icon = $('.js-menu-icon i');

        if ($(window).width() > 767){

        nav.css("display", "block");

        icon.addClass('ion-md-close');

        icon.removeClass('ion-md-menu');

        } else {

        nav.css("display", "none");

        icon.addClass('ion-md-menu');

        icon.removeClass('ion-md-close');

        }

    });
    
    /* ---- Scroll To Buttons ---- */
    $('.js-scroll-to-home').click(function () {
       $('html, body').animate({scrollTop: $('.home').offset().top}, 1000); 
    });
    
    $('.js-scroll-to-about').click(function () {
       $('html, body').animate({scrollTop: $('.about').offset().top}, 1000); 
    });
    
    $('.js-scroll-to-skills').click(function () {
       $('html, body').animate({scrollTop: $('.skills').offset().top}, 1000); 
    });
    
    $('.js-scroll-to-resume').click(function () {
       $('html, body').animate({scrollTop: $('.resume').offset().top}, 1000); 
    });
    
    $('.js-scroll-to-projects').click(function () {
       $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000); 
    });
    
    $('.js-scroll-to-contact').click(function () {
       $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000); 
    });
});