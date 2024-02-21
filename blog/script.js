$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();
        $(this).parent().siblings().find('.accordion-content').slideUp();
    });
});


$( function() {
    $( "#tabs" ).tabs();
  } );
