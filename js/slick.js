$(document).ready(function() {
    $(".check-keep-me-sign-in").click(function() {
        $(".fa-check-sign-in").toggleClass("display-none");
        $(".keep-me-sign-in").toggleClass("keep-me-sign-in-2");

    });


});
// slick
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});
// end-slick


// price

// end price

$(document).ready(function() {
    if ($(window).width() > 767) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            items: 5
        });
        $('.slider-nav-5').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });


    } else {

        $('.slider-nav-5').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',

            focusOnSelect: true
        });
    }
});