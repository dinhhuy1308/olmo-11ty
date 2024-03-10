

jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#header').addClass('header-sticky');
        } else {
            $('#header').removeClass('header-sticky');
        }
    });
});