$('.dropdown-menu a.dropdown-toggle').on('mouseover', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    // $subMenu.toggleClass('show');
    $subMenu.addClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
});
$(document).ready(function() {
    $(".dropdown-menu").mouseleave(function() {
        $('.dropdown-submenu .show').removeClass('show');

    });
});