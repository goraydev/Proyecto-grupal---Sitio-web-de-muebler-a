// Scroll Elementos Menu
var acercaDe = $('#pie').offset().top;

// Boton Acerca de
$('#btn-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: acercaDe - 40
    });
});

