$(function() {
    //  silk
    $('.banner_main').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });


    $('.logo_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
    //  back to top



    $('.testimonial_slide').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    //   venubox


    $(document).ready(function() {
        $('.venobox').venobox();
    });


    //  lightbox

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        arrows: false,
        cssEase: 'linear',
        speed: 10000
    })

    //  counter



    var mixer = mixitup('.class_main');

    //  wow 
    new WOW().init();

    //  backto top
    $(".backto_top").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            1000);
    });


    $(window).scroll(function() {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".backto_top").fadeIn(800);
        } else {
            $(".backto_top").fadeOut(800);
        }
        // menu scroll
        if (scrolling > 50) {
            $(".nav_bg_color").addClass("menu_bg");
        } else {
            $(".nav_bg_color").removeClass("menu_bg")
        }
    });
});