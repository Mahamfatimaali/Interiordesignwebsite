

$(document).ready(function () {

    $(".numbers").counterUp({
        delay: 10,
        time: 1200,
    });

    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        
    })

});

