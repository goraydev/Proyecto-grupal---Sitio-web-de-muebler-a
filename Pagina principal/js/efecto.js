var pie = $('#pie').offset().top;

$('#btn-acerca').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: pie
    }, 500);
});